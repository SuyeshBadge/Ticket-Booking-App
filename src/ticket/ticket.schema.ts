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
  customerName: string;

  @Column()
  movieTitle: string;

  @Column()
  movieTime: Date;

  @Column()
  ticketPrice: number;

  @Column()
  seatNumber: string;

  @Column()
  theaterRoom: string;

  @Column({ default: 'BOOKED' })
  ticketStatus: string;

  @Column({ nullable: true })
  ticketType: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
