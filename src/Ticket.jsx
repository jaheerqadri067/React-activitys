import { useState } from "react";
import './Ticket.css'
import { genTicket, sum } from "./helper";

export default function Ticket() {
    let [ticket, setTicket] = useState(genTicket(3))
    let isWinner = sum(ticket) === 15;

    function newTicket(){
        setTicket(genTicket(3))
    }
    return(
        <div>
            <h1>Lottery Ticket</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
                <button onClick={newTicket}>Buy New Ticket!</button>
                <h3>{isWinner && "Congratulations You Won Lottery of 1Cr."} </h3>
        </div>
    )
}