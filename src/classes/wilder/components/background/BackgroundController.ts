import type { Wilder } from "../../Wilder";
import type { WilderBackground, BackgroundMeal } from "@/interfaces";

export class BackgroundController {
    public readonly parent: Wilder;
    private _background: WilderBackground | null;

    constructor(parent: Wilder) {
        this.parent = parent;
        this._background = null;
    }

    public Hydrate(data: WilderBackground | null): void {
        if (!data) {
            this._background = null;
            return;
        }

        this._background = {
            upbringing: this.hydrateMeal(data.upbringing),
            initiation: this.hydrateMeal(data.initiation),
            ambition: this.hydrateMeal(data.ambition)
        };
    }

    private hydrateMeal(meal: BackgroundMeal): BackgroundMeal {
        return {
            ...meal,
            description: meal.description || "", // Default if undefined
            bonus: {
                type: meal.bonus.type,
                targetId: meal.bonus.targetId
            }
        };
    }

    public get background(): WilderBackground | null {
        return this._background;
    }
}