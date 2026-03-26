import { Module } from '@nestjs/common';
import { ServerManagerController } from './server-manager.controller';
import { ServerManagerService } from './server-manager.service';

@Module({
  controllers: [ServerManagerController],
  providers: [ServerManagerService],
  exports: [ServerManagerService],
})
export class ServerManagerModule {}
