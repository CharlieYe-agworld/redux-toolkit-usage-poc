import { useEffect } from "react";
import { fetchTickets } from "../redux/tickets/thunks/fetchTickets";
import { useDispatch } from "react-redux";
import useTickets from "../hooks/useTickets";
import BlankSpace from "../utils/BlankSpace";
import _ from 'underscore';

const Tickets = () => {
  const dispatch = useDispatch();
  const {isLoading, tickets} = useTickets();

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const renderTickets = () => {
    return _.map(tickets, ({title}, index) => {
      return <p key={index}>{title}</p>
    })
  }
  return (
      <>
        <span>Tickets</span>
        <BlankSpace rem={1}/>
        {
          isLoading
              ? <span>Loading....</span>
              : renderTickets()
        }

      </>
  )
}

export default Tickets;