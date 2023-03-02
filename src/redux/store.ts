import { configureStore } from "@reduxjs/toolkit";
import { blogsApi } from "./blogs/api/blogsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ticketsReducer } from "./tickets/slices/ticketsSlice";

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
          .concat(blogsApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

