import React from "react";

const colors = [
  '#FF6B6B', '#4ECDC4', '#FFB6B9', '#1A535C',
  '#FFA69E', '#FF6363', '#6B4226', '#4CAF50',
  '#FFD166', '#6A0572', '#FFA500'
];

const getColorForInitials = (name) => {
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase();
  const colorIndex = initials.charCodeAt(0) % colors.length;
  return colors[colorIndex];
};

const TicketCard = ({ ticket, user }) => {
  const avatarColor = getColorForInitials(user.name);

  return (
    <div className="ticket-card">
      <div className="ticket-id">{ticket.id}</div>
      <div className="ticket-title">{ticket.title}</div>
      <div className="ticket-footer">
        <div className="ticket-options">
          <span>...</span>
        </div>
        <div className="ticket-tag">{ticket.tag[0]}</div>
        <div
          className="user-avatar"
          style={{ backgroundColor: avatarColor }}
          title={user.name}
        >
          <span>
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
