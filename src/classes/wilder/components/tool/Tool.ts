import { Style } from "@/classes/enums";

export interface IToolData {
   id: string;
    icon: string;
    name: string;
    are_and_struggle: string[];
    main_styles: Style[];
    techniques: {
        starter: string;
        beginner: string[];
        intermediate: string[];
        advanced: string[];
    }
    description:string;
}



export class ToolData {
    id: string;
    icon: string;
    name: string;
    are_and_struggle: string[];
    main_styles: Style[];
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
        this.are_and_struggle = data.are_and_struggle;
        this.main_styles = data.main_styles;
        this.techniques = data.techniques;
        this.description = data.description;
    }
}