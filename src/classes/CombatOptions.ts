import type { CostType } from "./enums"

export interface ICombatOptions {
    id: string
    name: string
    description?: string
    cost: ICostData
    frequency: number  // Max uses per turn/round
}

interface ICostData {
    cost_type: CostType
    value?: number  // Required for non-passive costs
}
