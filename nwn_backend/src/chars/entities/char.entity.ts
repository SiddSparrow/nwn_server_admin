import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from '../../players/entities/player.entity';

@Entity({ schema: 'chars', name: 'chars' })
export class Char {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint', nullable: true })
  id_player: number;

  @ManyToOne(() => Player)
  @JoinColumn({ name: 'id_player' })
  player: Player;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'bigint', nullable: true })
  race: number;

  @Column({ type: 'bigint', nullable: true })
  xp: number;

  @Column({ type: 'bigint', nullable: true })
  level: number;

  @Column({ type: 'timestamp', nullable: true })
  last_played: Date;

  @Column({ type: 'bigint', nullable: true })
  class_1: number;

  @Column({ type: 'timestamp', nullable: true })
  last_level_up: Date;

  @Column({ type: 'varchar', nullable: true })
  antecedente: string;

  @Column({ type: 'bigint', nullable: true, default: 0 })
  is_on: number;
}
