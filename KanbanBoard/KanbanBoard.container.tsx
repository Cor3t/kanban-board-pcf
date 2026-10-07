import * as React from "react";
import { Board, KanbanHeader } from "./components";

const KanbanBoardContainer = () => {
  return (
    <div className="main">
      <KanbanHeader />
      <Board />
    </div>
  );
};

export default KanbanBoardContainer;
