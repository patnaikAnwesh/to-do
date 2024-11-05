import React from "react";

const DisplayOptions = ({ grouping, ordering, setGrouping, setOrdering }) => (
  <div className="display-options">
    <label>Grouping:</label>
    <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
      <option value="Status">Status</option>
      <option value="User">User</option>
      <option value="Priority">Priority</option>
    </select>

    <label>Ordering:</label>
    <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
      <option value="Priority">Priority</option>
      <option value="Title">Title</option>
    </select>
  </div>
);

export default DisplayOptions;
