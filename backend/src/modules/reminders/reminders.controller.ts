import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RemindersService } from './reminders.service';

@Controller('reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Get()
  getReminders() {
    return this.remindersService.getReminders();
  }

  @Get(':id')
  getReminder(@Param('id') id: string) {
    return this.remindersService.getReminder(id);
  }

  @Post()
  createReminder(@Body() payload: Record<string, unknown>) {
    return this.remindersService.createReminder(payload);
  }
}
