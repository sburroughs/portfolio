import {Skill} from './../skills/skill.ts';
import {Education, Conference, Position} from './../experience/experience.ts';
import {Personal} from './../personal/personal.ts';

export var SKILLS:Skill[] = [
    {
        "name": "Backend",
        "focus": [
            {"name": "Java", "experience": 8, "description": "Primary Language. JDK8+"},
            {"name": "JUnit", "experience": 8, "description": "TDD Unit testing"},
            {"name": "Perl", "experience": 4, "description": ""},
            {"name": "C#", "experience": 5, "description": ""},
            {"name": "C++", "experience": 3, "description": ""},

        ]
    },
    {
        "name": "Frontend",
        "focus": [
            {"name": "Javascript", "experience": 6, "description": "ES6+"},
            {"name": "AngularJS", "experience": 6, "description": ""},
            {"name": "Jasmine.js", "experience": 6, "description": ""},
            {"name": "Bootstrap", "experience": 6, "description": ""},
            {"name": "PHP", "experience": 4, "description": ""},
            {"name": "TypeScript", "experience": 6, "description": ""},
            {"name": "JQuery", "experience": 4, "description": ""},
        ]
    },
    {
        "name": "Data",
        "focus": [
            {"name": "SOLR", "experience": 6, "description": ""},
            {"name": "MongoDB", "experience": 8, "description": ""},
            {"name": "MySQL", "experience": 7, "description": ""},
            {"name": "REST", "experience": 8, "description": ""},
            {"name": "Oracle SQL", "experience": 6, "description": ""},
            {"name": "JMS", "experience": 5, "description": ""},
            {"name": "XMPP", "experience": 4, "description": ""},
            {"name": "Mule ESB", "experience": 4, "description": ""}
        ]
    },
    {
        "name": "DevOps",
        "focus": [
            {"name": "MicroServices", "experience": 6, "description": ""},
            {"name": "AWS", "experience": 6, "description": ""},
            {"name": "Docker", "experience": 6, "description": ""},
            {"name": "Jenkins", "experience": 6, "description": ""},
            {"name": "Tomcat", "experience": 6, "description": ""},
            {"name": "GitHub", "experience": 6, "description": ""},
        ]
    },
    {
        "name": "Practices",
        "focus": [
            {"name": "Agile", "experience": 8, "description": "Scrum and Kanban trained"},
        ]
    },
    {
        "name": "IT",
        "focus": [
            {"name": "Windows", "experience": 10, "description": "Primary development environment"},
            {"name": "Linux/Unix", "experience": 10, "description": "Primary server environment"},
        ]
    }
];

export var POSITIONS:Position[] = [
    {
        "organization": "Proquest LLC",
        "location": "Bethesda, MD (Remote: Chicago, IL)",
        "title": "Software Engineer",
        "description": "Full stack java software engineer working on a cloud based content editing system named ECMS.",
        "highlights": [
            "Lead the design, implementation, maintenance, and improvements on multiple restful microservices to reduce editorial costs."
        ],
        "startDate": "02/01/2014",
        "endDate": "PRESENT"
    },
    {
        "organization": "Fermion Government Services",
        "location": "Lexington Park, MD",
        "title": "Software Engineer",
        "highlights": [],
        "description": "Lead software engineer developing services and providing general software support for the Navy's Common Unmanned Controls Station..",
        "startDate": "11/01/2012",
        "endDate": "10/01/2014"
    },
    {
        "organization": "Navy Department of Defense",
        "location": "Lexington Park, MD",
        "title": "Software Development Technician",
        "highlights": [],
        "description": "Software development intern supporting the Navy P-3 and Navy EP-3 platform",
        "startDate": "06/01/2010",
        "endDate": "11/01/2012"
    }
];

export var EDUCATION:Education[] = [
    {
        "organization": "University of Maryland University College",
        "location": "Adelphi, MD",
        "title": "B.S. Computer Science, Minor in Computing",
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
        "description": "",
        "startDate": "",
    },
    {
        "organization": "Random Hacks of Kindness",
        "location": "Chicago, IL",
        "title": "Engineering Mentor",
        "description": "",
        "startDate": "",
    },
    {
        "organization": "AWS Summit",
        "location": "Chicago, IL",
        "title": "Attendee",
        "description": "",
        "startDate": "",
    }

];

export var PERSONAL:Personal = {
    name: "Shane Burroughs",
    contact: {
        email: "Shane.Burroughs@gmail.com",
        phone: "240-925-5055",
        links: [
            {
                display: "Github",
                hyperlink: "https://github.com/sburroughs"
            },
            {
                display: "LinkedIn",
                hyperlink: "https://www.linkedin.com/in/shaneburroughs"
            }
        ]
    },
    summary: "I am a humble individual who strives to make real changes using technology. I strive to surround myself with the most intelligent and friendly people possible grow as a person. I look forward to learning and growing ",
    tagline: "I am a Builder. I am a Fixer. I Solve Problems",
    hobbies: [
        {
            name: "Culinary Wizard",
            description: "Cooking has been one of my greatest passions for as long as I can remember. Cooking allows me to transform simple ingredients with time and effort into something family and friends can enjoy. "
        },
        {
            name: "Fantasy Football Champion",
            description: "Long time fantasy football player and league manager. "
        },
        {
            name: "Pup Dad",
            description: "His name is \"Hoder\" and he loves time with his people."
        },
        {
            name: "Musician",
            description: "On occasion, I enjoy breaking out a musical instrument and  "
        },
        {
            name: "Washington Redskins Fan",
            description: "#HTTR"
        }
    ]
};
