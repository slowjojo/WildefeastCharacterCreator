import type { Feast, Bonus } from "@/interfaces";
import type { Wilder } from "../../Wilder";

export class FeastsController {
    public readonly parent: Wilder;
    private _feasts: Feast[];

    constructor(parent: Wilder) {
        this.parent = parent;
        this._feasts = [];
    }

    public Hydrate(data: Feast[] | null): void {
        this._feasts = data ? data.map(feast => this.hydrateFeast(feast)) : [];
    }

    private hydrateFeast(feast: Feast): Feast {
        return {
            monsterId: feast.monsterId,
            bonus: this.hydrateBonus(feast.bonus)
        };
    }

    private hydrateBonus(bonus: Bonus): Bonus {
        return {
            type: bonus.type,
            targetId: bonus.targetId
        };
    }

    public get feasts(): Feast[] {
        return this._feasts;
    }
}