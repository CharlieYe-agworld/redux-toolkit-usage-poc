import { createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "../../../utils/pause";
import { apiIndexTickets } from "../../../api/ticket/ticketsApi";


const fetchTickets = createAsyncThunk('tickets/fetch', async () => {
  // dispatch is still accessible here

  const response = await apiIndexTickets();

  // the purpose is to check the isLoading state
  await pause(2000);

  return response;
});

export { fetchTickets };