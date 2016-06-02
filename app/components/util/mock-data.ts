import {Skill} from './../skills/skill.ts';
import {Education, Conference, Position} from './../experience/experience.ts';
import {Personal} from './../personal/personal.ts';

export var SKILLS:Skill[] = [
    {
        "name": "Backend",
        "focus": [
            {"name": "Java", "experience": 8, "description": "JDK8+"},
            {"name": "Perl", "experience": 4, "description": ""},
            {"name": "bash", "experience": 5, "description": ""},
            {"name": "C#", "experience": 4, "description": ""},
            {"name": "C++", "experience": 3, "description": ""},

        ]
    },
    {
        "name": "Frontend",
        "focus": [
            {"name": "HTML", "experience": 6, "description": "HTML5"},
            {"name": "Javascript", "experience": 6, "description": "ES6+, Typescript"},
            {"name": "AngularJS", "experience": 6, "description": "AngularJS, Angular2"},
            {"name": "JQuery", "experience": 4, "description": ""},
            {"name": "CSS", "experience": 4, "description": "Bootstrap, Less"},
            {"name": "PHP", "experience": 3, "description": ""},
        ]
    },
    {
        "name": "Data",
        "focus": [
            {"name": "SOLR", "experience": 7, "description": ""},
            {"name": "MongoDB", "experience": 6, "description": ""},
            {"name": "SQL", "experience": 6, "description": "MySQL, Oracle SQL"},
            {"name": "REST", "experience": 8, "description": ""},
            {"name": "Message Transport", "experience": 7, "description": "JMS, XMPP, Mule ESB"},
        ]
    },
    {
        "name": "DevOps",
        "focus": [
            {"name": "AWS", "experience": 5, "description": ""},
            {"name": "MicroServices", "experience": 7, "description": ""},
            {"name": "Jenkins", "experience": 6, "description": ""},
            {"name": "Docker", "experience": 5, "description": ""},
            {"name": "Tomcat", "experience": 6, "description": ""},
            {"name": "VCS", "experience": 8, "description": "Git (GitHub), SVN"},
        ]
    },
    {
        "name": "Testing",
        "focus": [
            {"name": "Junit", "experience": 7, "description": "TDD, EasyMock, PowerMock"},
            {"name": "Jasmine.js", "experience": 6, "description": "Karma"},
            {"name": "Selenium", "experience": 4, "description": ""},
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
            {"name": "Windows", "experience": 7, "description": "Primary development environment"},
            {"name": "Linux/Unix", "experience": 6, "description": "Primary server environment."},
        ]
    },
    {
        "name": "Misc",
        "focus": [
            {"name": "Cooking", "experience": 6, "description": "Line cook for 2 years"},
            {"name": "Woodworking", "experience": 3, "description": "Made a trash bin cabinet"},
            {"name": "Guitar", "experience": 4, "description": ""},

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
    summary: "I am a humble individual who strives to make real change using technology. I strive to surround myself with the most intelligent and friendly people possible to best grow as a person.",
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
