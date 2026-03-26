import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CharsService } from './chars.service';

@Controller('chars')
export class CharsController {
  constructor(private readonly charsService: CharsService) {}

  @Get()
  findAll() {
    return this.charsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.charsService.findOne(id);
  }

  @Get('online/:is_on')
  findByIsOn(@Param('is_on') isOn: number) {
    return this.charsService.findByIsOn(isOn);
  }
}
