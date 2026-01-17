import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  getCustomers() {
    return this.customersService.getCustomers();
  }

  @Get(':id')
  getCustomer(@Param('id') id: string) {
    return this.customersService.getCustomer(id);
  }

  @Post()
  createCustomer(@Body() payload: Record<string, unknown>) {
    return this.customersService.createCustomer(payload);
  }
}
