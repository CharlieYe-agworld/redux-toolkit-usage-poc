import { dummyTicket } from "../__dummy__/tickets";
import { fetchTickets } from "../thunks/fetchTickets";
import { ticketsReducer } from "./ticketsSlice";
import { store } from "../../store";

describe("tickets state test", () => {
  const INIT_STATE = {
    tickets: [],
    isLoading: false,
    error: null,
  };

  const ticket_1 = dummyTicket(1);
  const ticket_2 = dummyTicket(2);
  const ticket_3 = dummyTicket(3);

  it('has correct initial state', () => {
    const state = store.getState().tickets

    expect(state).toEqual(INIT_STATE);
  });

  describe("when dispatching fetchTickets", () => {
    it('handles action of fetchTickets.pending', () => {
      const action = fetchTickets.pending;
      const state = ticketsReducer(INIT_STATE, action);

      expect(state).toEqual({
        isLoading: true,
        error: null,
        tickets: []
      });
    });

    it('handles action of fetchTickets.fulfilled', () => {
      const tickets = [ticket_1, ticket_2, ticket_3];

      const action = {
        ...fetchTickets.fulfilled,
        payload: tickets,
      };
      const state = ticketsReducer(INIT_STATE, action);

      expect(state).toEqual({
        isLoading: false,
        error: null,
        tickets,
      });
    });

    it('handles action of fetchTickets.rejected', () => {
      const error = { message: 'some error' };

      const action = {
        ...fetchTickets.rejected,
        error,
      };
      const state = ticketsReducer(INIT_STATE, action);

      expect(state).toEqual({
        isLoading: false,
        error: error,
        tickets: [],
      });
    });
  });
});
