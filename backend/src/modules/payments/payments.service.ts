import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  getPayments() {
    return this.prisma.payment.findMany({ orderBy: { paymentDate: 'desc' } });
  }

  getPayment(id: string) {
    return this.prisma.payment.findUnique({ where: { id } });
  }

  createPayment(payload: Record<string, unknown>) {
    return this.prisma.payment.create({ data: payload as never });
  }
}
