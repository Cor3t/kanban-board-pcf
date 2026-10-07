import * as React from "react";
import KanbanStatusColumn from "../KanbanStatusColumn/KanbanStatusColumn";
import "./styles.css";

const Board = () => {
  return (
    <div className="board">
      <KanbanStatusColumn status="To Do" />
      <KanbanStatusColumn status="In Progress" />
      <KanbanStatusColumn status="Done" />
      <KanbanStatusColumn status="To Do" />
      <KanbanStatusColumn status="In Progress" />
      <KanbanStatusColumn status="Done" />
    </div>
  );
};

export default Board;
