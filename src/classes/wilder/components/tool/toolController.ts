import type { WilderTool } from "@/interfaces";
import type { Wilder } from "../../Wilder";



    export class ToolController {
        public readonly parent: Wilder;
        private _tool: WilderTool;

        constructor(parent: Wilder, initialTool: WilderTool) {
            this.parent = parent;
            this._tool = initialTool;
        }

        public static Hydrate(parent: Wilder, data: Partial<WilderTool>): void {
            if (!parent.ToolController) {
                throw new Error(
                    `ToolController not found on parent (${typeof parent}). ` +
                    `Controllers must be instantiated in the parent's constructor.`
                )
                parent.ToolController._tool = data.tool.map
                
            }
        }   
}