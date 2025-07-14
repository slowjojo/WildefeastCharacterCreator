import type { Bonus } from "@/interfaces";

export class BackgroundMeal {
  description: string = "";
  bonus: Bonus | null = null;

  constructor(data?: Partial<BackgroundMeal>) {
    Object.assign(this, data);
  }

}
