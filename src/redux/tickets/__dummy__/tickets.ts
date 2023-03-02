import { Ticket } from "../__declarations__/ticket";

export const dummyTicket = (index: number = 1): Ticket => {
  return {
    id: index,
    title: `ticket ${index}`
  }
};





