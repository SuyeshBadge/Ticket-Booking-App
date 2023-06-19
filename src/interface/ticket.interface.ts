export interface ICreateTicket {
  customer_name: string;
  movie_title: string;
  movie_time: Date;
  ticket_price: number;
  seat_number?: string;
  theater_room?: string;
  ticket_type?: string;
}

export interface IUpdateTicket {
  customer_name?: string;
  movie_title?: string;
  movie_time?: Date;
  ticket_price?: number;
  seat_number?: string;
  theater_room?: string;
  ticket_type?: string;
}
