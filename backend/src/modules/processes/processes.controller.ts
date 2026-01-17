import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProcessesService } from './processes.service';

@Controller('processes')
export class ProcessesController {
  constructor(private readonly processesService: ProcessesService) {}

  @Get()
  getProcesses() {
    return this.processesService.getProcesses();
  }

  @Get(':id')
  getProcess(@Param('id') id: string) {
    return this.processesService.getProcess(id);
  }

  @Post()
  createProcess(@Body() payload: Record<string, unknown>) {
    return this.processesService.createProcess(payload);
  }
}
