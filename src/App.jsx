//app.jsx
import React, { useEffect, useState } from "react";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("Status");
  const [ordering, setOrdering] = useState("Priority");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await response.json();
      console.log(data);
      setTickets(data.tickets || []);
      setUsers(data.users || []);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <KanbanBoard
        tickets={tickets}
        users={users}
        grouping={grouping}
        ordering={ordering}
        setGrouping={setGrouping}
        setOrdering={setOrdering}
      />
    </div>
  );
}

export default App;
