import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class ExpensesService {
  constructor(private readonly prisma: PrismaService) {}

  getExpenses() {
    return this.prisma.expense.findMany({ orderBy: { expenseDate: 'desc' } });
  }

  getExpense(id: string) {
    return this.prisma.expense.findUnique({ where: { id } });
  }

  createExpense(payload: Record<string, unknown>) {
    return this.prisma.expense.create({ data: payload as never });
  }
}
