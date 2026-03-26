import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Char } from './entities/char.entity';

@Injectable()
export class CharsService {
  constructor(
    @InjectRepository(Char)
    private readonly charsRepository: Repository<Char>,
  ) {}

  findAll(): Promise<Char[]> {
    return this.charsRepository.find();
  }

  findOne(id: number): Promise<Char | null> {
    return this.charsRepository.findOneBy({ id });
  }

  findByIsOn(isOn: number): Promise<Char[]> {
    return this.charsRepository.findBy({ is_on: isOn });
  }
}
