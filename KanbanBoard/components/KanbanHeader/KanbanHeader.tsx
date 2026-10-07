import * as React from "react";
import "./styles.css";

const KanbanHeader = () => {
  return (
    <div className="kanban-header-container">
      <div className="kanban-header-info">
        <h2>Kanban Board</h2>
        <p>Manage your task</p>
      </div>
      <div>
        <button className="action-btn">
          <p>Add task</p>
        </button>
      </div>
    </div>
  );
};

export default KanbanHeader;
