import {Skill} from './../skills/skill.ts';
import {Experience} from './../experience/experience.ts';
import {Personal} from './../personal/personal.ts';

export var SKILLS:Skill[] = [
    {
        "name": "Backend", "rating": 8,
        "focus": [
            {"name": "Java", "description": "JDK 8, Junit ", "experience": 9},
            {"name": "JUnit", "description": "", "experience": 8},
            {"name": "EasyMock", "description": "", "experience": 6},
            {"name": "Selenium", "description": "", "experience": 4},
            {"name": "Jersey", "description": "", "experience": 10},
            {"name": "EasyMock", "description": "", "experience": 10},

        ]
    },
    {
        "name": "Frontend", "rating": 6,
        "focus": [
            {"name": "Javascript", "description": "asynchronous, eh6", "experience": 7},
            {"name": "AngularJS", "description": "", "experience": 6},
            {"name": "PHP", "description": "", "experience": 5},
            {"name": "TypeScript", "description": "", "experience": 6},
            {"name": "JQuery", "description": "", "experience": 4},
            {"name": "Bootstrap css", "description": "", "experience": 5}
        ]
    },
    {
        "name": "Data", "rating": 7,
        "focus": [
            {"name": "SOLR", "description": "", "experience": 8},
            {"name": "MongoDB", "description": "", "experience": 8},
            {"name": "MySQL", "description": "", "experience": 7},
            {"name": "REST", "description": "", "experience": 9},
            {"name": "Oracle SQL", "description": "", "experience": 5},
            {"name": "JMS", "description": "", "experience": 7},
            {"name": "XMPP", "description": "", "experience": 6},
            {"name": "Mule ESB", "description": "", "experience": 3}
        ]
    },
    {
        "name": "Tools", "rating": 7,
        "focus": [
            {"name": "GIT ", "description": "", "experience": 10},
            {"name": "IntelliJ IDEA ", "description": "", "experience": 10},
            {"name": "SVN", "description": "", "experience": 10},
            {"name": "Jira", "description": "", "experience": 10},
            {"name": "Redmine", "description": "", "experience": 10},
        ]
    },
    {
        "name": "Development & Operations", "rating": 6,
        "focus": [
            {"name": "MicroServices", "description": "", "experience": 10},
            {"name": "AWS", "description": "", "experience": 10},
            {"name": "Docker", "description": "", "experience": 10},
            {"name": "Continuous Integration", "description": "Jenkins", "experience": 10},
            {"name": "Tomcat", "description": "", "experience": 10},
        ]
    },
    {
        "name": "Practices", "rating": 7,
        "focus": [
            {"name": "Agile", "description": "", "experience": 10},
            {"name": "Scrum", "description": "", "experience": 10},
        ]
    },
    {
        "name": "IT", "rating": 7,
        "focus": [
            {"name": "Windows", "description": "", "experience": 10},
            {"name": "Linux", "description": "", "experience": 10},
        ]
    },
    {
        "name": "Other", "rating": 7,
        "focus": []
    }


];

export var POSITIONS:Experience[] = [
    {
        "organization": "Proquest LLC",
        "title": "Software Engineer",
        "experience": 2,
        "description": "Full stack java software engineer working on a cloud based content editing system named ECMS.",
        "responsibilities": [],
        "startDate": "02/01/2014",
        "endDate": "PRESENT"
    },
    {
        "organization": "Fermion Government Services",
        "title": "Software Engineer",
        "experience": 2,
        "description": "Lead software engineer developing services and providing general software support for the Navy's Common Unmanned Controls Station..",
        "responsibilities": [],
        "startDate": "11/01/2012",
        "endDate": "10/01/2014"
    },
    {
        "organization": "Navy Department of Defense",
        "title": "Software Development Technician",
        "experience": 2,
        "description": "Software development intern supporting the Navy P-3 and Navy EP-3 platform",
        "responsibilities": [],
        "startDate": "06/01/2010",
        "endDate": "11/01/2012"
    }
];

export var EDUCATION:Experience[] = [
    {
        "organization": "University of Maryland University College",
        "title": "B.S. Computer Science, Minor in Computing",
        "experience": 0,
        "description": "Graduated w/degree",
        "responsibilities": [],
        "startDate": "08/01/2009",
        "endDate": "12/01/2012"
    }
];

export var CONFERENCES:Experience[] = [
    {
        "organization": "DevOps Days",
        "title": "Attendee",
        "experience": 0,
        "description": "",
        "responsibilities": [],
        "startDate": "",
        "endDate": ""
    },
    {
        "organization": "Random Hacks of Kindness",
        "title": "Engineering Mentor",
        "experience": 0,
        "description": "",
        "responsibilities": [],
        "startDate": "",
        "endDate": ""
    },
    {
        "organization": "AWS Summit",
        "title": "Attendee",
        "experience": 0,
        "description": "",
        "responsibilities": [],
        "startDate": "",
        "endDate": ""
    }

];

export var PERSONAL:Personal = {
    name: "Shane Burroughs",
    email: "Shane.Burroughs@gmail.com",
    phone: "(240) 925-5055",
    linkedin:"https://www.linkedin.com/in/shaneburroughs",
    github: "https://github.com/sburroughs",
    summary: "",
    hobbies: [
        {
            name: "Pup Dad",
            description: "Provider and enabler of a mildly spoiled Goldendoodle name \"Hoder\""
        },
        {
            name: "Fantasy Football Champion",
            description: "Long time fantasy football player and league manager"
        },
        {
            name: "Culinary Wizard",
            description: "Cooking, fine dining, fast casual cuisine, whatever the circumstance, I want it."
        },
        {
            name: "Musician",
            description: "Guitar and the occasional piano, always enjoyable."
        },
        {
            name: "Washington Redskins Fan",
            description: "#HTTR"
        }
    ]
};

