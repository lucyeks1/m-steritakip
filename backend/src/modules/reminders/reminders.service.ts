import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ReminderStatus } from '@prisma/client';
import { toZonedTime } from 'date-fns-tz';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class RemindersService {
  private readonly logger = new Logger(RemindersService.name);

  constructor(private readonly prisma: PrismaService) {}

  getReminders() {
    return this.prisma.reminder.findMany({ orderBy: { triggerDatetime: 'asc' } });
  }

  getReminder(id: string) {
    return this.prisma.reminder.findUnique({ where: { id } });
  }

  createReminder(payload: Record<string, unknown>) {
    return this.prisma.reminder.create({ data: payload as never });
  }

  @Cron('* * * * *', { timeZone: 'Europe/Istanbul' })
  async dispatchPendingReminders() {
    const now = toZonedTime(new Date(), 'Europe/Istanbul');

    const pending = await this.prisma.reminder.findMany({
      where: {
        status: ReminderStatus.BEKLEMEDE,
        triggerDatetime: { lte: now },
        OR: [{ manualSnoozeUntil: null }, { manualSnoozeUntil: { lte: now } }],
      },
      include: { customer: true, process: true },
    });

    if (pending.length === 0) {
      return;
    }

    for (const reminder of pending) {
      await this.prisma.notification.create({
        data: {
          reminderId: reminder.id,
          userId: await this.getDefaultUserId(),
          title: 'Yaklaşan İşlem',
          body: `${reminder.customer.firstName} ${reminder.customer.lastName} için ${reminder.process.processType} işlemi yaklaşmaktadır.`,
        },
      });

      await this.prisma.reminder.update({
        where: { id: reminder.id },
        data: { status: ReminderStatus.GONDERILDI },
      });
    }

    this.logger.log(`Gönderilen hatırlatma sayısı: ${pending.length}`);
  }

  private async getDefaultUserId() {
    const user = await this.prisma.user.findFirst({ where: { isActive: true } });
    return user?.id ?? null;
  }
}
