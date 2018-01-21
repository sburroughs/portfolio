export interface Experience {
  organization: string;
  location: string;
  title: string;
  startDate: string;
  description: string;
}

export class Position implements Experience {
  organization: string;
  location: string;
  title: string;
  highlights: string[];
  startDate: string;
  endDate: string;
  description: string;
}

export class Volunteer implements Experience {
  organization: string;
  location: string;
  title: string;
  startDate: string;
  description: string;
  media: string[];
}

export class Education implements Experience {
  organization: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

