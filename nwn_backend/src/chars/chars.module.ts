import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Char } from './entities/char.entity';
import { CharsService } from './chars.service';
import { CharsController } from './chars.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Char])],
  controllers: [CharsController],
  providers: [CharsService],
  exports: [CharsService],
})
export class CharsModule {}
