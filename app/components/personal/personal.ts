import {ContactInformation} from './contact';

export class Personal {
    name:string;
    contact:ContactInformation;
    tagline:string;
    summary:string;
    hobbies:Hobby[];
}

export class Hobby {
    name:string;
    description:string;
}
