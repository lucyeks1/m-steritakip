import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  getExpenses() {
    return this.expensesService.getExpenses();
  }

  @Get(':id')
  getExpense(@Param('id') id: string) {
    return this.expensesService.getExpense(id);
  }

  @Post()
  createExpense(@Body() payload: Record<string, unknown>) {
    return this.expensesService.createExpense(payload);
  }
}
