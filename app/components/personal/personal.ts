export interface Personal {
    name:string;
    email:string;
    phone:string;
    summary:string;
    links:Link[];
    hobbies:Hobby[];
}

export interface Hobby {
    name:string;
    description:string;
}

export interface Link {
    display:string;
    hyperlink:string;
    icon:string;
}
