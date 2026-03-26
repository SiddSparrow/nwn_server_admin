import { Controller, Get, Post } from '@nestjs/common';
import { ServerManagerService } from './server-manager.service';

@Controller('server')
export class ServerManagerController {
  constructor(private readonly serverManagerService: ServerManagerService) {}

  @Get('status')
  status() {
    return this.serverManagerService.status();
  }

  @Post('start')
  start() {
    return this.serverManagerService.start();
  }

  @Post('stop')
  stop() {
    return this.serverManagerService.stop();
  }

  @Post('restart')
  restart() {
    return this.serverManagerService.restart();
  }
}
