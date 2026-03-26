import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'users', name: 'players' })
export class Player {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', nullable: true })
  serial_key: string | null;

  @Column({ type: 'timestamp', nullable: true })
  date_created: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  last_login: Date | null;

  @Column({ type: 'varchar', nullable: true })
  account_name: string | null;

  @Column({ type: 'bigint', nullable: true })
  xp_multiplier: number | null;

  @Column({ type: 'bigint', nullable: true })
  is_dm: number | null;
}
