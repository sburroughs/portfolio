import {Skill} from './../skills/skill';
import {Education, Volunteer, Position} from './../experience/experience';
import {Personal} from './../personal/personal';

export var SKILLS: Skill[] = [
    {
        "name": "Backend",
        "description": "The Tech that runs behind the scenes to efficiently support the computers and systems we adore.",
        "focus": [
            {"name": "Java", "experience": 8, "description": "JDK8+, Spring, Hibernate"},
            {"name": "Perl", "experience": 4, "description": "Core"},
            {"name": "Unix Shell Scripting", "experience": 5, "description": "Bash, Csh"},
            {"name": "C#", "experience": 4, "description": "Core"},
            {"name": "C++", "experience": 3, "description": "Core"},

        ]
    },
    {
        "name": "Frontend",
        "description": "The Tech that creates the user interfaces we use interact with",
        "focus": [
            {"name": "HTML", "experience": 7, "description": "HTML5"},
            {"name": "CSS", "experience": 4, "description": "Bootstrap, Less"},
            {"name": "Javascript", "experience": 6, "description": "ES6+, Typescript, AngularJS, Angular2, JQuery"},
            {"name": "PHP", "experience": 3, "description": "Drupal 6"},
        ]
    },
    {
        "name": "Data",
        "description": "The Tech that aids in creating dynamic robust data driven systems.",
        "focus": [
            {"name": "SOLR", "experience": 7, "description": ""},
            {"name": "MongoDB", "experience": 6, "description": ""},
            {"name": "SQL", "experience": 7, "description": "MySQL, Oracle SQL"},
            {"name": "REST", "experience": 7, "description": ""},
            {"name": "Message Transport", "experience": 7, "description": "JMS, XMPP, Mule ESB"},
        ]
    },
    {
        "name": "DevOps",
        "description": "The Tech, culture, and process that keeps the software we love up and running efficiently and cost effectively.",
        "focus": [
            {"name": "AWS", "experience": 5, "description": "EC2, EBS, S3, etc"},
            {"name": "MicroServices", "experience": 7, "description": "Spring Boot"},
            {"name": "Jenkins", "experience": 6, "description": ""},
            {"name": "Docker", "experience": 5, "description": ""},
            {"name": "VCS", "experience": 8, "description": "Git (GitHub), SVN"},
            {"name": "Docker", "experience": 5, "description": ""},
        ]
    },
    {
        "name": "Testing",
        "description": "The Tech and practices that assist in ensuring the quality and maintainability of a system.",
        "focus": [
            {"name": "Unit Testing", "experience": 7, "description": "Junit, Jasmine.js"},
            {"name": "Regression Testing", "experience": 7, "description": "Selenium"},
        ]
    },
    {
        "name": "Professional",
        "description": "The Tech that isn't hardware or software related. Skills that keep our tech progressing forward.",
        "focus": [
            {"name": "Agile", "experience": 0, "description": "Scrum and Kanban Trained"},
            {"name": "Leader", "experience": 0, "description": "Lead Developer, Team Lead, Solo Developer"},
            {"name": "Passionate", "experience": 0, "description": "Technology is a hobby and my passion."},

        ]
    },
    {
        "name": "IT Solutions",
        "description": "The Tech that supports the tools and languages we use",
        "focus": [
            {"name": "Windows", "experience": 7, "description": "Primary development environment"},
            {"name": "Linux/Unix", "experience": 6, "description": "Primary server environment"},
            {"name": "IntelliJ IDEA", "experience": 7, "description": "Primary IDE"},
        ]
    },
    {
        "name": "Personal",
        "description": "Technologies that are typically used for server side / backend development",
        "focus": [
            {"name": "Cooking", "experience": 6, "description": "Line cook for 2 years, Home chef for life"},
            {"name": "Woodworking", "experience": 3, "description": "Rustic"},
            {"name": "Guitar", "experience": 4, "description": "Acoustic"},
        ]
    }
];

export var POSITIONS: Position[] = [
    {
        "organization": "Proquest LLC",
        "location": "Bethesda, MD (Working Remote from Chicago, IL)",
        "title": "Software Engineer",
        "description": "Architected and implemented enterprise solutions in Java for a cloud based editorial content management system. Engineered distributed system workflows aimed at automating editorial process. Supported migration of multi-million document legacy cms’ through development of a multi service restful software system.",
        "highlights": [
            "Lead the design, implementation, maintenance, and improvements of distributed Java services to concurrently batch edit system content.",
            "Assisted in various phases of a full team tool and infrastructure transition to AWS using docker.",
            "Provided frequent estimates and complexity analysis on cost effective solutions to improve editorial workflow",
            "Implemented an admin tool to manage production content metadata using Spring",
        ],
        "startDate": "02/01/2014",
        "endDate": "PRESENT"
    },
    {
        "organization": "Fermion Government Services",
        "location": "Lexington Park, MD",
        "title": "Software Engineer",
        "description": "Lead the release of multiple services for the US Navy common unmanned control station. Managed client relations and a small project team of software engineers. Interpreted technical specifications and assisted in translating them into Java services using supporting storage and bus technology. Maintained the company's internal IT infrastructure and assisted in modernizing its toolchain.",
        "highlights": [
            "Designed and redeveloped a data warehouse service for use with the common unmanned control station.",
            "Tested and QA checked the release of a network time service for use with the common unmanned control station",
            "Setup, operated, troubleshoot and maintained remote transmission equipment in support of gitmo trials"
        ],
        "startDate": "11/01/2012",
        "endDate": "10/01/2014"
    },
    {
        "organization": "Navy Department of Defense",
        "location": "Lexington Park, MD",
        "title": "Software Development Technician",
        "description": "Supported legacy codebases and infrastructure of the Navy P-3 platform. Assisted in platform software testing, deployments, code reviews and bug fixes.",
        "highlights": [
            "Managed the cataloging, transfer, and disposal of platform development systems and data.",
            "Investigated and fixed errors in platform through simple and innovative bug fixes",
            "Reported and presented analysis on asset management solutions for use program wide"
        ],
        "startDate": "06/01/2010",
        "endDate": "11/01/2012"
    }
];

export var EDUCATION: Education[] = [
    {
        "organization": "University of Maryland University College",
        "location": "Adelphi, MD",
        "title": "B.S. Computer Science, Minor in Computing",
        "description": "Graduated w/degree",
        "startDate": "08/01/2009",
        "endDate": "12/01/2012"
    }
];

export var VOLUNTEER: Volunteer[] = [
    {
        "organization": "DevOps Days",
        "location": "Chicago, IL",
        "title": "Attendee",
        "description": "",
        "startDate": "",
        "media":["http://placehold.it/400x300"]
    },
    {
        "organization": "Random Hacks of Kindness",
        "location": "Chicago, IL",
        "title": "Engineering Mentor",
        "description": "",
        "startDate": "",
        "media":["https://c1.staticflickr.com/9/8616/16246660524_da2aaa7d29.jpg"]
    },
    {
        "organization": "AWS Summit",
        "location": "Chicago, IL",
        "title": "Attendee",
        "description": "",
        "startDate": "",
        "media":["http://placehold.it/400x300"]
    }

];

export var PERSONAL: Personal = {
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
    summary: "Lifetime technology enthusiast with over half a decade of professional software engineering experience. An expert at developing effective technical solutions and architecting great software",
    hobbies: [
        {
            name: "Football Fanatic",
            description: "Having grown up near the Washington DC metro area, I grew up admiring the Washington Redskins. I played five years of organized recreational football and attend as many live games as possible.",
            hyperlink: "https://c2.staticflickr.com/6/5642/23310453103_ee9b3006d1_z.jpg"
        },
        {
            name: "Culinary Wizard",
            description: "Cooking is one of my greatest passions. It allows me to unwind at the end of the day and share something from scratch with my loved ones.",
            hyperlink: "https://c2.staticflickr.com/6/5642/23310453103_ee9b3006d1_z.jpg"

        },
        {
            name: "Doggy Dad",
            description: "His name is \"Hodor\" and he is a loving goldendoodle who enjoys spending time with his people.",
            hyperlink: "https://c1.staticflickr.com/9/8645/16264137466_2ee735db8e_c.jpg"

        },
        {
            name: "Mediocre Musician",
            description: "I am not an incredibly talented musician however I have always enjoyed casually playing various instruments.",
            hyperlink: "https://c2.staticflickr.com/6/5642/23310453103_ee9b3006d1_z.jpg"

        },
        {
            name: "Fantasy Sport Master",
            description: "Long time fantasy football player and league manager.",
            hyperlink: "https://c2.staticflickr.com/6/5642/23310453103_ee9b3006d1_z.jpg"

        },
        {
            name: "Gamer",
            description: "Frequently enjoy playing a variety of games; from the latest hardware intense PC releases to classic board/tabletop games. I even casually indulge in mobile game market.",
            hyperlink: "https://c2.staticflickr.com/6/5642/23310453103_ee9b3006d1_z.jpg"

        }
    ]
};
