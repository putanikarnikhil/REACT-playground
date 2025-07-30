import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n,winCondition}) {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = winCondition(ticket);

  const generateNewTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div className="lottery-container">
      <Ticket ticket={ticket} />
      <h3>{isWinning && "🎉 Congratulations, you won!"}</h3>
      <button onClick={generateNewTicket}>Generate New Ticket</button>
    </div>
  );
}
