import { useSelector } from "react-redux";
import { TicketsState } from "../redux/tickets/slices/ticketsSlice";
import { RootState } from "../redux/store";

export default function useTickets(): TicketsState {
  return useSelector(({tickets}: RootState) => tickets);
}