import * as React from "react";
import { Board, KanbanHeader } from "./components";

const KanbanBoardContainer = () => {
  return (
    <main className="main">
      <KanbanHeader />
      <Board />
    </main>
  );
};

export default KanbanBoardContainer;
