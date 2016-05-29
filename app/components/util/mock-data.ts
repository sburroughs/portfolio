import {Skill} from './../skills/skill.ts';
import {Education, Conference, Position} from './../experience/experience.ts';
import {Personal} from './../personal/personal.ts';

export var SKILLS:Skill[] = [
    {
        "name": "Backend", "rating": 10,
        "focus": [
            {"name": "Java", "experience": 10, "description": "JDK8"},
            {"name": "JUnit", "experience": 10, "description": ""},
        ]
    },
    {
        "name": "Frontend", "rating": 10,
        "focus": [
            {"name": "Javascript", "experience": 10, "description": ""},
            {"name": "AngularJS", "experience": 10, "description": ""},
            {"name": "PHP", "experience": 10, "description": ""},
            {"name": "TypeScript", "experience": 10, "description": ""},
            {"name": "JQuery", "experience": 10, "description": ""},
            {"name": "Karma Testing", "experience": 10, "description": ""}
        ]
    },
    {
        "name": "Data", "rating": 7,
        "focus": [
            {"name": "SOLR", "experience": 10, "description": ""},
            {"name": "MongoDB", "experience": 10, "description": ""},
            {"name": "MySQL", "experience": 10, "description": ""},
            {"name": "REST", "experience": 10, "description": ""},
            {"name": "Oracle SQL", "experience": 10, "description": ""},
            {"name": "JMS", "experience": 10, "description": ""},
            {"name": "XMPP", "experience": 10, "description": ""}
        ]
    },
    {
        "name": "Tools", "rating": 7,
        "focus": [
            {"name": "GIT ", "experience": 10, "description": ""},
            {"name": "IntelliJ IDEA ", "experience": 10, "description": ""},
            {"name": "SVN", "experience": 10, "description": ""},
            {"name": "Jira", "experience": 10, "description": ""},
            {"name": "Redmine", "experience": 10, "description": ""},
        ]
    },
    {
        "name": "DevOps", "rating": 7,
        "focus": [
            {"name": "MicroServices", "experience": 10, "description": ""},
            {"name": "AWS", "experience": 10, "description": ""},
            {"name": "Docker", "experience": 10, "description": ""},
            {"name": "Jenkins", "experience": 10, "description": ""},
            {"name": "Tomcat", "experience": 10, "description": ""},
        ]
    },
    {
        "name": "Practices", "rating": 7,
        "focus": [
            {"name": "Agile", "experience": 10, "description": ""},
            {"name": "Scrum", "experience": 10, "description": ""},
        ]
    },
    {
        "name": "IT", "rating": 7,
        "focus": [
            {"name": "Windows", "experience": 10, "description": ""},
            {"name": "Linux", "experience": 10, "description": ""},
        ]
    },
    {
        "name": "Other", "rating": 7,
        "focus": []
    }


];

export var POSITIONS:Position[] = [
    {
        "organization": "Proquest LLC",
        "location": "Bethesda, MD (Currently Remote)",
        "title": "Software Engineer",
        "experience": 2,
        "responsibilities": [],
        "description": "Full stack java software engineer working on a cloud based content editing system named ECMS.",
        "startDate": "02/01/2014",
        "endDate": "PRESENT"
    },
    {
        "organization": "Fermion Government Services",
        "location": "Lexington Park, MD",
        "title": "Software Engineer",
        "experience": 2,
        "responsibilities": [],
        "description": "Lead software engineer developing services and providing general software support for the Navy's Common Unmanned Controls Station..",
        "startDate": "11/01/2012",
        "endDate": "10/01/2014"
    },
    {
        "organization": "Navy Department of Defense",
        "location": "Lexington Park, MD",
        "title": "Software Development Technician",
        "experience": 2,
        "responsibilities": [],
        "description": "Software development intern supporting the Navy P-3 and Navy EP-3 platform",
        "startDate": "06/01/2010",
        "endDate": "11/01/2012"
    }
];

export var EDUCATION:Education[] = [
    {
        "organization": "University of Maryland University College",
        "location": "Chicago, IL",
        "title": "B.S. Computer Science, Minor in Computing",
        "experience": 2,
        "responsibilities": [],
        "description": "Graduated w/degree",
        "startDate": "08/01/2009",
        "endDate": "12/01/2012"
    }
];

export var CONFERENCES:Conference[] = [
    {
        "organization": "DevOps Days",
        "location": "Chicago, IL",
        "title": "Attendee",
        "experience": 1,
        "responsibilities": [],
        "description": "",
        "startDate": "",
        "endDate": ""
    },
    {
        "organization": "Random Hacks of Kindness",
        "location": "Chicago, IL",
        "title": "Engineering Mentor",
        "experience": 1,
        "responsibilities": [],
        "description": "",
        "startDate": "",
        "endDate": ""
    },
    {
        "organization": "AWS Summit",
        "location": "Chicago, IL",
        "title": "Attendee",
        "experience": 1,
        "responsibilities": [],
        "description": "",
        "startDate": "",
        "endDate": ""
    }

];

export var PERSONAL:Personal = {
    name: "Shane Burroughs",
    contact: {
        email: "Shane.Burroughs@gmail.com",
        phone: "(240) 925-5055",
        links: [
            {
                display: "Github",
                icon: "",
                hyperlink: "https://github.com/sburroughs"
            },
            {
                display: "LinkedIn",
                icon: "",
                hyperlink: "https://www.linkedin.com/in/shaneburroughs"
            }
        ]
    },
    summary: "I have dedicated a large majority of life to pursuing technology as a passion. I consider myself an intelligent, humble individual striving to make real change in the world we live in.",
    tagline: "I Build, I Fix, I Solve Problems",
    hobbies: [
        {
            name: "Culinary Wizard",
            description: "Cooking has been one of my greatest passions for as long as I can remember"
        },
        {
            name: "Fantasy Football Champion",
            description: "Long time fantasy football player and league manager"
        },
        {
            name: "Pup Dad",
            description: "Provider of a mildly spoiled Goldendoodle name \"Hoder\""
        },
        {
            name: "Musician",
            description: "Who doesn't love that guy who plays wonderwall at every party ever."
        },
        {
            name: "Washington Redskins Fan",
            description: "#HTTR"
        }
    ]
};
