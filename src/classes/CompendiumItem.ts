// unfuck this

import type { ItemType } from "./enums"

export interface ICompendiumItemData {
    id: string
    name: string
    description: string
    actions?: IActionData[]
    bonuses?: IBonusData[]
}

abstract class CompendiumItem {
    public ItemType: ItemType
    public readonly ID: string
    public readonly Actions: Action[]
    public readonly Bonuses: Bonus[]
    protected _name: string
    protected _description: string
}

public constructor( data?: ICompendiumItemData )

{
    this.ItemType = ItemType.None
    this.ID
    this._name = data.name
    this._description = data.description || ""

}
)