import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { Ticket } from "../__declarations__/ticket";
import { fetchTickets } from "../thunks/fetchTickets";

export type TicketsState = {
  isLoading: boolean;
  error: any; // type here does not matter in POC
  tickets: Ticket[];
}

const INIT_STATE: TicketsState = {
  isLoading: false,
  error: null,
  tickets: [],
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: INIT_STATE,
  reducers: {},
  extraReducers(builder: ActionReducerMapBuilder<TicketsState>) {
    builder.addCase(fetchTickets.pending, (state, _) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tickets = action.payload;
    });
    builder.addCase(fetchTickets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.tickets = [];
    });
  },
})

export const ticketsReducer = ticketsSlice.reducer;