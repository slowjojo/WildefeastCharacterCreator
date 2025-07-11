export class techniqueData {
    id:string;
    name: string;
    tier: string;
    tool: string;
    cost: string;
    type: string;
    description: string

    constructor (data:  any) {
        this.id = data.id;
        this.name = data.name;
        this.tier = data.tier;
        this.tool = data.tool;
        this.cost = data.cost;
        this.type = data.type;
        this.description = data.description
    }

}