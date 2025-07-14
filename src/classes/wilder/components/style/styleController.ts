import type { styleSpread } from '@/interfaces'
import type { WilderData } from '@/class'

export class StyleController {
  private wilder: WilderData

  constructor(wilder: WilderData) {
    this.wilder = wilder
  }

applyStartingStyles(startingStyles: styleSpread): void {
    this.wilder.styles = { ...startingStyles }
  }

// hardcoded base styles seems cringo but idk if this is a problem

removeStartingStyles(): void {
    this.wilder.styles = {
        mighty: 1,
        precise: 1,
        swift: 1,
        tricky: 1,
    };
  }
// put functions here to increase and decrease style values in the future
}
