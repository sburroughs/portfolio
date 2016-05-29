export interface Experience {
    organization:string;
    location:string;
    title:string;
    experience:number;
    responsibilities:string[];
    startDate:string;
    endDate:string;
    description:string;
}

export class Position implements Experience {
    organization:string;
    location:string;
    title:string;
    experience:number;
    startDate:string;
    endDate:string;
    description:string;
}

export class Conference implements Experience {
    organization:string;
    location:string;
    title:string;
    experience:number;
    startDate:string;
    endDate:string;
    description:string;
}

export class Education implements Experience {
    organization:string;
    location:string;
    title:string;
    experience:number;
    startDate:string;
    endDate:string;
    description:string;
}

