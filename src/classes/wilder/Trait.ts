export class traitData {
    id: string;
    name: string;
    level: number;
    cost: string;
    description: string;
    
    constructor (data: any) {
        this.id = data.id;
        this.name = data.name;
        this.level = data.name;
        this.cost = data.cost;
        this.description = data.description;
    }
}