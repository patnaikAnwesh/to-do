//kanbanboard.jsx file
import React from "react";
import DisplayOptions from "./DisplayOptions";
import Column from "./Column";

const KanbanBoard = ({
  tickets,
  users,
  grouping,
  ordering,
  setGrouping,
  setOrdering,
}) => {
  const groupByOptions = {
    Status: "status",
    User: "userId",
    Priority: "priority",
  };

  const orderOptions = {
    Priority: (a, b) => b.priority - a.priority,
    Title: (a, b) => a.title.localeCompare(b.title),
  };

  const groupedTickets = tickets.reduce((acc, ticket) => {
    const groupKey =
      grouping === "User"
        ? users.find((user) => user.id === ticket.userId)?.name || "Unassigned"
        : ticket[groupByOptions[grouping]];

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(ticket);
    return acc;
  }, {});

  Object.values(groupedTickets).forEach((group) =>
    group.sort(orderOptions[ordering])
  );

  return (
    <div className="kanban-board">
      <DisplayOptions
        grouping={grouping}
        ordering={ordering}
        setGrouping={setGrouping}
        setOrdering={setOrdering}
      />
      <div className="columns">
        {Object.keys(groupedTickets).map((key) => (
          <Column
            key={key}
            title={key}
            tickets={groupedTickets[key]}
            users={users}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
