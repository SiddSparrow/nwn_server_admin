import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'users', name: 'admin_users' })
export class AdminUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password_hash: string;

  @CreateDateColumn()
  created_at: Date;
}
