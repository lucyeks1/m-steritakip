import { Module } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { ProcessesController } from './processes.controller';
import { ProcessesService } from './processes.service';

@Module({
  controllers: [ProcessesController],
  providers: [ProcessesService, PrismaService],
})
export class ProcessesModule {}
