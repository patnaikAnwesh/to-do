//column.jsx file
import React from "react";
import TicketCard from "./TicketCard";

const Column = ({ title, tickets, users }) => {
  return (
    <div className="column">
      <h3 className="column-title">{title}</h3>
      <div className="tickets">
        {tickets.map((ticket) => {
          // Find the user that matches the ticket's userId
          const user = users.find((u) => u.id === ticket.userId);
          return <TicketCard key={ticket.id} ticket={ticket} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Column;
