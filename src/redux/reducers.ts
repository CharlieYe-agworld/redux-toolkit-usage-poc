import { combineReducers } from "redux";
import { ticketsReducer } from "./tickets/slices/ticketsSlice";

const reducers = combineReducers({
  tickets: ticketsReducer,
});

export default reducers;
