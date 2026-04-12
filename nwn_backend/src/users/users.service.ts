import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AdminUser } from './entities/admin-user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(AdminUser)
    private readonly repo: Repository<AdminUser>,
  ) {}

  async findByUsername(username: string): Promise<AdminUser | null> {
    return this.repo.findOne({ where: { username } });
  }

  async create(
    username: string,
    password: string,
  ): Promise<{ id: number; username: string }> {
    const exists = await this.findByUsername(username);
    if (exists) throw new ConflictException('Username already taken');

    const password_hash = await bcrypt.hash(password, 12);
    const user = this.repo.create({ username, password_hash });
    const saved = await this.repo.save(user);
    return { id: saved.id, username: saved.username };
  }
}
