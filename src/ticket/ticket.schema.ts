import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TicketSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_name: string;

  @Column()
  movie_title: string;

  @Column()
  movie_time: Date;

  @Column()
  ticket_price: number;

  @Column()
  seat_number: string;

  @Column()
  theater_room: string;

  @Column({ default: 'BOOKED' })
  ticket_status: string;

  @Column({ nullable: true })
  ticket_type: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
