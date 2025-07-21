import type { Feast } from "@/interfaces";
import type { Wilder } from "../../Wilder";

export class FeastsController {
    public readonly parent: Wilder;
    private _feasts: Feast[];

    constructor(parent: Wilder, initialFeasts: Feast[]) {
        this.parent = parent;
        this._feasts = initialFeasts;
    }

    public static Hydrate(parent: Wilder, data: Feast[]): void {
    }
}
