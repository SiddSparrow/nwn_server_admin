import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ServerManagerService } from './server-manager.service';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Controller('server')
export class ServerManagerController {
  constructor(private readonly serverManagerService: ServerManagerService) {}

  @Get('status')
  status() {
    return this.serverManagerService.status();
  }

  @Post('start')
  @UseGuards(ApiKeyGuard)
  start() {
    return this.serverManagerService.start();
  }

  @Post('stop')
  @UseGuards(ApiKeyGuard)
  stop() {
    return this.serverManagerService.stop();
  }

  @Post('restart')
  @UseGuards(ApiKeyGuard)
  restart() {
    return this.serverManagerService.restart();
  }
}
