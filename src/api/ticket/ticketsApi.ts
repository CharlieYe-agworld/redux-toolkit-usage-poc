import { IndexTicketsResp } from "./ticketsResponse";
import api from "../api";

export const apiIndexTickets = (): Promise<IndexTicketsResp> => {
  return api.get<IndexTicketsResp>('http://localhost:3002/tickets');
}