import { Module } from '@nestjs/common';
import { ServerManagerController } from './server-manager.controller';
import { ServerManagerService } from './server-manager.service';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Module({
  controllers: [ServerManagerController],
  providers: [ServerManagerService, ApiKeyGuard],
  exports: [ServerManagerService],
})
export class ServerManagerModule {}
