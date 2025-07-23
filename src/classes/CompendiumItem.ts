/* import { ItemType } from "./enums"

export interface ICompendiumItemData {
    id: string
    name: string
    description: string
    actions?: IActionData[]
    bonuses?: IBonusData[]
    
}

abstract class CompendiumItem {
    public readonly ItemType: ItemType
    public readonly ID: string
    public readonly Actions: Action[]
    public readonly Bonuses: Bonus[]
    protected Name: string
    protected Description: string
}

public constructor( data: ICompendiumItemData, itemType: ItemType ) {
    this.ItemType = ItemType
    this.ID = data.id
    this.Name = data.name
    this.Description = data.description || ""

    this.Actions = data.actions?.map(a => new Action(a)) || [];
    this.Bonuses = data.bonuses?.map(b => new Bonus(b)) || [];


}
    */