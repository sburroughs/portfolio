import {Skill} from './../skills/skill.ts';
import {Experience} from './../experience/experience.ts';

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
        "description": "Full stack software engineer working on an in company content editing tool named ECMS.",
        "startDate": "",
        "endDate": ""
    },
    {
        "organization": "Fermion Government Services",
        "title": "Software Engineer",
        "experience": 2,
        "description": "Lead developer and Project manager for a Navy unmanned control station service.",
        "startDate": "",
        "endDate": ""
    },
    {
        "organization": "Navy Department of Defense",
        "title": "Software Development Technician",
        "experience": 2,
        "description": "",
        "startDate": "",
        "endDate": ""
    },
    {
        "organization": "Personal Development",
        "title": "CTO",
        "experience": 2,
        "description": "",
        "startDate": "",
        "endDate": ""
    }
];

export var EDUCATION:Experience[] = [
    {
        "organization": "University of Maryland University College",
        "title": "B.S. Computer Science, Minor in Computing",
        "experience": 2,
        "description": "",
        "startDate": "",
        "endDate": ""
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
    }
];

