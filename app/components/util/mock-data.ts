import {Skill} from './../skills/skill.ts';
import {Experience} from './../experience/experience.ts';
import {Personal} from './../personal/personal.ts';

export var SKILLS:Skill[] = [
    {
        "name": "Backend", "rating": 10,
        "focus": [
            {"name": "Java", "experience": 10},
            {"name": "JUnit", "experience": 10},
            {"name": "EasyMock", "experience": 10},
            {"name": "Selenium", "experience": 10},
            {"name": "JUnit", "experience": 10},
        ]
    },
    {
        "name": "Frontend", "rating": 10,
        "focus": [
            {"name": "Javascript", "experience": 10},
            {"name": "AngularJS", "experience": 10},
            {"name": "PHP", "experience": 10},
            {"name": "TypeScript", "experience": 10},
            {"name": "JQuery", "experience": 10},
            {"name": "Karma Testing", "experience": 10},
        ]
    },
    {
        "name": "Data", "rating": 7,
        "focus": [
            {"name": "SOLR", "experience": 10},
            {"name": "MongoDB", "experience": 10},
            {"name": "MySQL", "experience": 10},
            {"name": "REST", "experience": 10},
            {"name": "Oracle SQL", "experience": 10},
            {"name": "JMS", "experience": 10},
            {"name": "XMPP", "experience": 10}
        ]
    },
    {
        "name": "Tools", "rating": 7,
        "focus": [
            {"name": "GIT ", "experience": 10},
            {"name": "IntelliJ IDEA ", "experience": 10},
            {"name": "SVN", "experience": 10},
            {"name": "Jira", "experience": 10},
            {"name": "Redmine", "experience": 10},
        ]
    },
    {
        "name": "DevOps", "rating": 7,
        "focus": [
            {"name": "MicroServices", "experience": 10},
            {"name": "AWS", "experience": 10},
            {"name": "Docker", "experience": 10},
            {"name": "Jenkins", "experience": 10},
            {"name": "Tomcat", "experience": 10},
        ]
    },
    {
        "name": "Practices", "rating": 7,
        "focus": [
            {"name": "Agile", "experience": 10},
            {"name": "Scrum", "experience": 10},
        ]
    },
    {
        "name": "IT", "rating": 7,
        "focus": [
            {"name": "Windows", "experience": 10},
            {"name": "Linux", "experience": 10},
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
        "startDate": "02/01/2014",
        "endDate": "PRESENT"
    },
    {
        "organization": "Fermion Government Services",
        "title": "Software Engineer",
        "experience": 2,
        "description": "Lead software engineer developing services and providing general software support for the Navy's Common Unmanned Controls Station..",
        "startDate": "11/01/2012",
        "endDate": "10/01/2014"
    },
    {
        "organization": "Navy Department of Defense",
        "title": "Software Development Technician",
        "experience": 2,
        "description": "Software development intern supporting the Navy P-3 and Navy EP-3 platform",
        "startDate": "06/01/2010",
        "endDate": "11/01/2012"
    }
];

export var EDUCATION:Experience[] = [
    {
        "organization": "University of Maryland University College",
        "title": "B.S. Computer Science, Minor in Computing",
        "experience": 2,
        "description": "Graduated w/degree",
        "startDate": "08/01/2009",
        "endDate": "12/01/2012"
    }
];

export var CONFERENCES:Experience[] = [
    {
        "organization": "DevOps Days",
        "title": "Attendee",
        "experience": 1,
        "description": "",
        "startDate": "",
        "endDate": ""
    },
    {
        "organization": "Random Hacks of Kindness",
        "title": "Engineering Mentor",
        "experience": 1,
        "description": "",
        "startDate": "",
        "endDate": ""
    },
    {
        "organization": "AWS Summit",
        "title": "Attendee",
        "experience": 1,
        "description": "",
        "startDate": "",
        "endDate": ""
    }

];

export var PERSONAL:Personal = {
    name: "Shane Burroughs",
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
    ],
    summary: "",
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

