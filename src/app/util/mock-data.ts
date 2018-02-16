import {Skill} from './../skills/skill';
import {Personal} from './../personal/personal';
import {Experience} from '../experience/experience';

export const PERSONAL: Personal = {
    name: 'Shane Burroughs',
    contact: {
        email: 'Shane.Burroughs@gmail.com',
        phone: '240-925-5055',
        links: [
            {
                display: 'Github',
                hyperlink: 'https://github.com/sburroughs'
            },
            {
                display: 'LinkedIn',
                hyperlink: 'https://www.linkedin.com/in/shaneburroughs'
            }
        ]
    },
    summary: 'Lifetime technology enthusiast with over half a decade of professional software engineering experience. An expert at developing effective technical solutions and architecting great software',
    hobbies: [
        {
            name: 'Football Fanatic',
            description: 'Having grown up near the Washington DC metro area, I grew up admiring the Washington Redskins. I played five years of organized recreational football and attend as many live games as possible.',
            hyperlink: 'https://c2.staticflickr.com/6/5642/23310453103_ee9b3006d1_z.jpg'
        },
        {
            name: 'Culinary Wizard',
            description: 'Cooking is one of my greatest passions. It allows me to unwind at the end of the day and share something from scratch with my loved ones.',
            hyperlink: 'https://s3.amazonaws.com/aws-website-dsburroughscom-p6r0b/app/assets/img/cooking.jpg'

        },
        {
            name: 'Doggy Dad',
            description: 'His name is "Hodor" and he is a loving goldendoodle who enjoys spending time with his people.',
            hyperlink: 'https://c1.staticflickr.com/9/8645/16264137466_2ee735db8e_c.jpg'

        },
        {
            name: 'Musician',
            description: 'I am not an incredibly talented musician however I have always enjoyed casually playing various instruments.',
            hyperlink: 'https://s3.amazonaws.com/aws-website-dsburroughscom-p6r0b/app/assets/img/guitar.jpeg'

        },
        {
            name: 'Fantasy Sport Master',
            description: 'Long time fantasy football player and league manager.',
            hyperlink: 'https://s3.amazonaws.com/aws-website-dsburroughscom-p6r0b/app/assets/img/football.jpg'

        },
        {
            name: 'Gamer',
            description: 'Frequently enjoy playing a variety of games; from the latest hardware intense PC releases to classic board/tabletop games. I even casually indulge in the mobile game market.',
            hyperlink: 'https://s3.amazonaws.com/aws-website-dsburroughscom-p6r0b/app/assets/img/computer.jpeg'

        }
    ]
};


export const SKILLS: Skill[] = [
    {
        'name': 'Backend',
        'description': 'The Tech that runs behind the scenes to efficiently support the computers and systems we adore.',
        'focus': [
            {'name': 'Java', 'experience': 8, 'description': 'JDK8+, Spring, Hibernate, RXJava'},
            {'name': 'Perl', 'experience': 4, 'description': 'Core'},
            {'name': 'Unix Shell Scripting', 'experience': 5, 'description': 'Bash, Csh'},
            {'name': 'C#', 'experience': 4, 'description': 'Core'},
            {'name': 'C++', 'experience': 3, 'description': 'Core'},

        ]
    },
    {
        'name': 'Frontend',
        'description': 'The Tech that creates the user interfaces we use interact with',
        'focus': [
            {'name': 'HTML', 'experience': 7, 'description': 'HTML5'},
            {'name': 'CSS', 'experience': 4, 'description': 'Bootstrap, Less'},
            {'name': 'Javascript', 'experience': 6, 'description': 'ES6+, Typescript, AngularJS, Angular2, JQuery'},
            {'name': 'PHP', 'experience': 3, 'description': 'Drupal 6'},
        ]
    },
    {
        'name': 'Data',
        'description': 'The Tech that aids in creating dynamic robust data driven systems.',
        'focus': [
            {'name': 'Optimized Search', 'experience': 5, 'description': 'Solr, Elastic Cache'},
            {'name': 'Caching', 'experience': 7, 'description': 'Redis, Memcached'},
            {'name': 'Nosql Databases', 'experience': 6, 'description': 'DynamoDB, MongoDB'},
            {'name': 'Relational Databases', 'experience': 7, 'description': 'MySQL, Oracle SQL, RDS Aurora'},
            {'name': 'Log Analysis', 'experience': 5, 'description': 'Sumologic'},
            {'name': 'Message Transport', 'experience': 7, 'description': 'JMS, XMPP, SQS, SNS, Mule ESB'},
        ]
    },
    {
        'name': 'Infrastructure',
        'description': 'The Tech, culture, and process that keeps the software we love up and running efficiently and cost effectively.',
        'focus': [
            {'name': 'AWS', 'experience': 5, 'description': 'EC2, EBS, S3, etc'},
            {'name': 'Jenkins', 'experience': 6, 'description': 'Configuration'},
            {'name': 'Docker', 'experience': 5, 'description': ''},
            {'name': 'VCS', 'experience': 8, 'description': 'Git (GitHub), SVN'},
            {'name': 'Docker', 'experience': 5, 'description': ''},
        ]
    },
    {
        'name': 'Testing',
        'description': 'The Tech and practices that assist in ensuring the quality and maintainability of a system.',
        'focus': [
            {'name': 'Integration Testing', 'experience': 7, 'description': 'Spring Boot'},
            {'name': 'Load Testing', 'experience': 7, 'description': 'JMeter'},
            {'name': 'Unit Testing', 'experience': 7, 'description': 'Junit, Jasmine.js'},
            {'name': 'Regression Testing', 'experience': 7, 'description': 'Selenium'},
        ]
    },
    {
        'name': 'Project Management',
        'description': 'The Tech that isn\'t hardware or software related. Skills that keep our tech progressing forward.',
        'focus': [
            {'name': 'Agile', 'experience': 0, 'description': 'Scrum and Kanban Trained'},
            {'name': 'Leader', 'experience': 0, 'description': 'Lead Developer, Team Lead, Solo Developer'},
            {'name': 'Passionate', 'experience': 0, 'description': 'Technology is a hobby and my passion.'},

        ]
    }
];

export const POSITIONS: Experience[] = [
    {
        'organization': 'Gogo',
        'location': 'Chicago, IL',
        'title': 'Software Engineer',
        'description': 'Engineer on the Edge/Inflight Servies team (IFS); responsible for inflight and air to ground purchase path software services at Gogo. As a member of the IFS software team we developed and maintained robust restful microservices capable of realtime alerting for close to 24/7/365 service uptime. ',
        'highlights': [
            'Service owner for the session management services, a series of microservices to manage session data created by Gogo equipped flights.',
            'Implemented rapid POC java service code using cutting edge frameworks such as Spring, Akka, RxJava',
            'Created dashboards capable of realtime monitoring and alerting highlighting key database, system hardware, api, and scaling activities',
            'Responsible for interpreting requirements, solution design, project management, software implementation, testing, and production support.'
        ],
        'startDate': '03/01/2017',
        'endDate': 'PRESENT'
    },
    {
        'organization': 'Proquest LLC',
        'location': 'Bethesda, MD / Remote from Chicago, IL',
        'title': 'Software Engineer',
        'description': 'Architected and implemented enterprise solutions in Java for a cloud based editorial content management system. Engineered distributed system workflows aimed at automating editorial process. Supported migration of multi-million document legacy cms’ through development of a multi service restful software system.',
        'highlights': [
            'Lead the design, implementation, maintenance, and improvements of distributed Java services to concurrently batch edit system content.',
            'Assisted in various phases of a full team tool and infrastructure transition to AWS using docker.',
            'Provided frequent estimates and complexity analysis on cost effective solutions to improve editorial workflow',
            'Implemented an admin tool to manage production content metadata using Spring',
        ],
        'startDate': '02/01/2014',
        'endDate': '03/01/2017'
    },
    {
        'organization': 'Fermion Government Services',
        'location': 'Lexington Park, MD',
        'title': 'Software Engineer',
        'description': 'Lead the release of multiple services for the US Navy common unmanned control station. Managed client relations and a small project team of software engineers. Interpreted technical specifications and assisted in translating them into Java services using supporting storage and bus technology. Maintained the company\'s internal IT infrastructure and assisted in modernizing its toolchain.',
        'highlights': [
            'Designed and redeveloped a data warehouse service for use with the common unmanned control station.',
            'Tested and QA checked the release of a network time service for use with the common unmanned control station',
            'Setup, operated, troubleshoot and maintained remote transmission equipment in support of gitmo trials'
        ],
        'startDate': '11/01/2012',
        'endDate': '10/01/2014'
    },
    {
        'organization': 'Navy Department of Defense',
        'location': 'Lexington Park, MD',
        'title': 'Software Development Technician',
        'description': 'Supported legacy codebases and infrastructure of the Navy P-3 platform. Assisted in platform software testing, deployments, code reviews and bug fixes.',
        'highlights': [
            'Managed the cataloging, transfer, and disposal of platform development systems and data.',
            'Investigated and fixed errors in platform through simple and innovative bug fixes',
            'Reported and presented analysis on asset management solutions for use program wide'
        ],
        'startDate': '06/01/2010',
        'endDate': '11/01/2012'
    }
];

export const EDUCATION: Experience[] = [
    {
        'organization': 'University of Maryland University College',
        'location': 'Adelphi, MD',
        'title': 'B.S. Computer Science, Minor in Computing',
        'description': 'Graduated w/degree',
        'startDate': '08/01/2009',
        'endDate': '12/01/2012',
        'highlights': []
    }
];

