import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ServerManagerService } from './server-manager.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('server')
export class ServerManagerController {
  constructor(private readonly serverManagerService: ServerManagerService) {}

  @Get('status')
  status() {
    return this.serverManagerService.status();
  }

  @Post('start')
  @UseGuards(JwtAuthGuard)
  start() {
    return this.serverManagerService.start();
  }

  @Post('stop')
  @UseGuards(JwtAuthGuard)
  stop() {
    return this.serverManagerService.stop();
  }

  @Post('restart')
  @UseGuards(JwtAuthGuard)
  restart() {
    return this.serverManagerService.restart();
  }
}
