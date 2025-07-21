import type { WilderData } from "@/class";
import type { backgroundMeal } from "./threeCourseBackground";

export class BackgroundController {
    private wilder: WilderData

    constructor(wilder: WilderData) {
        this.wilder = wilder
    }

    applyMeal(meal: backgroundMeal, type: 'upbringing' | 'initiation' | 'ambition' ):void {
        this.wilder.background[type] = meal
    }

}