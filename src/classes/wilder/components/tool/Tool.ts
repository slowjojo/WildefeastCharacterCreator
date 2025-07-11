import type { styleSpread } from "@/interfaces";

export class toolData {
    id: string;
    icon: string;
    name: string;
    are_and_struggle: string[];
    styles: styleSpread[];
    techniques: {
        starter: string;
        beginner: string[];
        intermediate: string[];
        advanced: string[];
    }
    description:string;
    
    constructor(data: any) {
        this.id = data.id;
        this.icon = data.icon;
        this.name = data.name;
        this.are_and_struggle = data.are_and_struggle
        this.styles = data.styles;
        this.techniques = data.techniques;
        this.description = data.description;
    }
}