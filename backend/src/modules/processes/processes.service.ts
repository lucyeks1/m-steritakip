import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class ProcessesService {
  constructor(private readonly prisma: PrismaService) {}

  getProcesses() {
    return this.prisma.process.findMany({ orderBy: { startDate: 'desc' } });
  }

  getProcess(id: string) {
    return this.prisma.process.findUnique({ where: { id } });
  }

  createProcess(payload: Record<string, unknown>) {
    return this.prisma.process.create({ data: payload as never });
  }
}
