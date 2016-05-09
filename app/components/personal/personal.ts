export interface Personal {
    name:string;
    email:string;
    phone:string;
    summary:string;
    linkedin:string;
    github:string;
    hobbies:Hobby[];
}

export interface Hobby {
    name:string;
    description:string;
}