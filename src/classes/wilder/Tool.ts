export class toolData {
    id: string;
    icon: string;
    name: string;
    primary_styles: string[];
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
        this.primary_styles = data.primary_styles;
        this.techniques = data.techniques;
        this.description = data.description;
    }
}