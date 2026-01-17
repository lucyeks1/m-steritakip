import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  getCustomers() {
    return this.prisma.customer.findMany({ orderBy: { createdAt: 'desc' } });
  }

  getCustomer(id: string) {
    return this.prisma.customer.findUnique({ where: { id } });
  }

  createCustomer(payload: Record<string, unknown>) {
    return this.prisma.customer.create({ data: payload as never });
  }
}
