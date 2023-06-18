export interface ICreateTicket {
  customerName: string;
  movieTitle: string;
  movieTime: Date;
  ticketPrice: number;
  seatNumber?: string;
  theaterRoom?: string;
  ticketType?: string;
}

export interface IUpdateTicket {
  customerName?: string;
  movieTitle?: string;
  movieTime?: Date;
  ticketPrice?: number;
  seatNumber?: string;
  theaterRoom?: string;
  ticketType?: string;
}
