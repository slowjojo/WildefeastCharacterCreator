import type { WilderTool } from "@/interfaces"
import type { Wilder } from "../../Wilder"

export class ToolController {
    public readonly parent: Wilder
    private _tool: WilderTool | null

    constructor(parent: Wilder) {
        this.parent = parent
        this._tool = null
    }


    public Hydrate(data: WilderTool | null): void {
        if (data) {
            this._tool = {
                name: data.name,
                styles: data.styles,
                starterTechnique: data.starterTechnique,
                beginnerTechnique: data.beginnerTechnique,
                are: data.are,
                struggle: data.struggle
            };
        } else {
            this._tool = null;
        }
    }


    public static Hydrate(parent: Wilder, data: WilderTool | null): void {
        if (!parent.ToolController) {
            throw new Error("ToolController not found on parent")
        }
        parent.ToolController.Hydrate(data)
    }

     public get tool(): WilderTool | null {
        return this._tool
    }
}