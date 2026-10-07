import * as React from "react";
import KanbanUserStoryTile from "../KanbanUserStoryTile/KanbanUserStoryTile";
import "./styles.css";

interface KanbanStatusColumnProps {
  status: string;
}

const KanbanStatusColumn = ({ status }: KanbanStatusColumnProps) => {
  return (
    <div className="status-section">
      <div className="status-section-header">
        <p>{status}</p>
        <div className="count-indicator">
          <span>4</span>
        </div>
      </div>
      <ul className="status-user-stories">
        <KanbanUserStoryTile />
        <KanbanUserStoryTile />
      </ul>
    </div>
  );
};

export default KanbanStatusColumn;
