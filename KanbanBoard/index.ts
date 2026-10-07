import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import { Root, createRoot } from "react-dom/client";
import KanbanBoardContainer from "./KanbanBoard.container";

export class KanbanBoard implements ComponentFramework.StandardControl<
  IInputs,
  IOutputs
> {
  private root: Root;
  private _container: HTMLDivElement;

  constructor() {
    // Empty
  }

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement,
  ): void {
    this.root = createRoot(container);
    this._container = container;
    context.mode.trackContainerResize(true);
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    this._container.style.height = `${context.mode.allocatedHeight}px`;

    this.root.render(React.createElement(KanbanBoardContainer, {}));
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
