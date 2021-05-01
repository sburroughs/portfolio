import {Skill, SkillType} from './../skills/skill';
import {Experience, ExperienceType} from '../experience/experience';
import {ContactInformation} from '../contact/contact';
import {About} from '../about/about';
import {Hobby} from '../hobby/hobby';
import {WorkExperience} from '../experience/work-experience';

export const CONTACT: ContactInformation = {
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
    },
    {
      display: 'StackOverflow',
      hyperlink: 'https://stackoverflow.com/users/3569171/shane-burroughs'
    }
  ]
};

export const ABOUT: About = {
  name: 'Shane Burroughs',
  tagline: 'Lifetime technology enthusiast with over a decade of professional software engineering experience.',
  summary: 'I have professionally performed almost every role, in some capacity, in the software development lifecycle.' +
    ' I specialize in high availability, high performance, data driven enterprise software solutions.' +
    ' I like to spend my day writing high quality, well documented, performant code in the language best suited for the job at hand.' +
    ' I typically like to think through problems multiple times before tackling them.' +
    ' I can be organised and driven when motivated with the right task at hand.' +
    ' I enjoy learning, but I also like to teach.' +
    ' I strive to always improve my craft, and be among top talent in the software community.',
};

export const HOBBIES: Hobby[] = [
  {
    name: 'Football Fanatic',
    description: 'Having grown up near the Washington DC metro area, I grew up admiring the Washington Redskins. I played five years of organized recreational football and attend as many live games as possible.',
    hyperlink: 'https://c2.staticflickr.com/6/5642/23310453103_ee9b3006d1_z.jpg'
  },
  {
    name: 'Brew Master',
    description: 'Avid home brewer with long term aspirations working towards becoming a beer competition tasting judge.',
    hyperlink: '../../assets/img/beer.jpg'
  },
  {
    name: 'Doggy Dad',
    description: 'His name is "Hodor" and he is a loving goldendoodle who enjoys spending time with his people.',
    hyperlink: '../../assets/img/hodor.jpg'
  },
  {
    name: 'Musician',
    description: 'From playing piano in elementary school, to guitar in high school, to drums in post college, I would consider myself a well rounded, albeit under practiced musician.',
    hyperlink: 'https://s3.amazonaws.com/aws-website-dsburroughscom-p6r0b/app/assets/img/guitar.jpeg'
  },
  {
    name: 'Fantasy Football Champion',
    description: 'Long time fantasy football player and league manager.',
    hyperlink: 'https://s3.amazonaws.com/aws-website-dsburroughscom-p6r0b/app/assets/img/football.jpg'
  },
  {
    name: 'Soap Maker',
    description: 'Cold process soap',
    hyperlink: '../../assets/img/soap.jpg'
  },
  {
    name: 'Fixer Upper',
    description: 'Owning an 100 plus year old home will quickly test your handiness.',
    hyperlink: '../../assets/img/home.jpg'
  },
  {
    name: 'Candle Maker',
    description: 'I occasionally make scented candles as a way to experiment with the compatibility of scented oil mixtures.',
    hyperlink: '../../assets/img/candle.jpg'
  },
  {
    name: 'Photography Assistant',
    description: 'Reaping the benefits of my wife\'s photography skills comes at a cost of carrying the gear.',
    hyperlink: '../../assets/img/photography.jpg'
  },
  {
    name: 'Culinary Wizard',
    description: 'Cooking is one of my greatest passions. It allows me to unwind at the end of the day and share something from scratch with my loved ones.',
    hyperlink: '../../assets/img/pizza.jpg'
  },
  {
    name: 'Occasional Bowler',
    description: 'I grew up playing in a saturday bowling league that turned into a lifelong love of the sport.',
    hyperlink: '../../assets/img/bowling.jpg'
  },
  {
    name: 'Gamer',
    description: 'Frequently enjoy playing a variety of games; from the latest hardware intense PC releases to classic board/tabletop games. I even casually indulge in the mobile game market.',
    hyperlink: 'https://s3.amazonaws.com/aws-website-dsburroughscom-p6r0b/app/assets/img/computer.jpeg'
  }
];

export const SKILLS: Skill[] = [
  {
    type: SkillType.BACKEND,
    name: 'Java',
    description: 'JDK8',
    experience: 8
  },
  {
    type: SkillType.BACKEND,
    name: 'Spring',
    description: '',
    experience: 7
  },
  {
    type: SkillType.BACKEND,
    name: 'Hibernate',
    description: '',
    experience: 6
  },
  {
    type: SkillType.BACKEND,
    name: 'RXJava',
    description: '',
    experience: 6
  },
  {
    type: SkillType.BACKEND,
    name: 'Netflix Hystrix',
    description: '',
    experience: 6
  },
  {
    type: SkillType.BACKEND,
    name: 'AKKA',
    description: '',
    experience: 5
  },
  {
    type: SkillType.BACKEND,
    name: 'Netflix Archaius',
    description: '',
    experience: 6
  },
  {
    type: SkillType.BACKEND,
    name: 'Perl',
    description: '',
    experience: 4
  },
  {
    type: SkillType.BACKEND,
    name: 'Bash',
    description: '',
    experience: 4
  },
  {
    type: SkillType.BACKEND,
    name: 'Csh',
    description: '',
    experience: 4
  },
  {
    type: SkillType.BACKEND,
    name: 'C#',
    description: '',
    experience: 4
  },
  {
    type: SkillType.BACKEND,
    name: 'C++',
    description: '',
    experience: 3
  },

  {
    type: SkillType.FRONTEND,
    name: 'HTML',
    description: 'HTML5',
    experience: 6
  },
  {
    type: SkillType.FRONTEND,
    name: 'CSS',
    description: 'LESS',
    experience: 5
  },
  {
    type: SkillType.FRONTEND,
    name: 'Bootstrap',
    description: 'Bootstrap 4',
    experience: 7
  },
  {
    type: SkillType.FRONTEND,
    name: 'Javascript',
    description: 'ES6+',
    experience: 7
  },
  {
    type: SkillType.FRONTEND,
    name: 'Typescript',
    description: '',
    experience: 6
  },
  {
    type: SkillType.FRONTEND,
    name: 'AngularJS',
    description: 'Angular1 - Angular 5+',
    experience: 7
  },
  {
    type: SkillType.FRONTEND,
    name: 'JQuery',
    description: '',
    experience: 5
  },
  {
    type: SkillType.FRONTEND,
    name: 'PHP',
    description: '',
    experience: 3
  },
  {
    type: SkillType.FRONTEND,
    name: 'Drupal',
    description: '',
    experience: 2
  },

  {
    type: SkillType.DATA,
    name: 'Solr',
    description: '',
    experience: 6
  },
  {
    type: SkillType.DATA,
    name: 'Elastic Cache',
    description: '',
    experience: 5
  },
  {
    type: SkillType.DATA,
    name: 'Redis',
    description: '',
    experience: 6
  },
  {
    type: SkillType.DATA,
    name: 'Memcached',
    description: '',
    experience: 5
  },
  {
    type: SkillType.DATA,
    name: 'DynamoDB',
    description: '',
    experience: 6
  },
  {
    type: SkillType.DATA,
    name: 'MongoDB',
    description: '',
    experience: 4
  },
  {
    type: SkillType.DATA,
    name: 'MySQL',
    description: 'RDS Aurora',
    experience: 7
  },
  {
    type: SkillType.DATA,
    name: 'Oracle SQL',
    description: '',
    experience: 5
  },
  {
    type: SkillType.DATA,
    name: 'Sumologic',
    description: '',
    experience: 6
  },
  {
    type: SkillType.DATA,
    name: 'JMS',
    description: '',
    experience: 4
  },
  {
    type: SkillType.DATA,
    name: 'XMPP',
    description: '',
    experience: 3
  },
  {
    type: SkillType.DATA,
    name: 'SQS',
    description: '',
    experience: 5
  },
  {
    type: SkillType.DATA,
    name: 'SNS',
    description: '',
    experience: 6
  },
  {
    type: SkillType.DATA,
    name: 'Mule ESB',
    description: '',
    experience: 4
  },

  {
    type: SkillType.INFRASTRUCTURE,
    name: 'S3',
    description: '',
    experience: 5
  },
  {
    type: SkillType.INFRASTRUCTURE,
    name: 'EC2',
    description: '',
    experience: 4
  },
  {
    type: SkillType.INFRASTRUCTURE,
    name: 'Jenkins',
    description: '',
    experience: 4
  },
  {
    type: SkillType.INFRASTRUCTURE,
    name: 'Docker',
    description: '',
    experience: 3
  },
  {
    type: SkillType.INFRASTRUCTURE,
    name: 'Git',
    description: '',
    experience: 8
  },
  {
    type: SkillType.INFRASTRUCTURE,
    name: 'SVN',
    description: '',
    experience: 4
  },

  {
    type: SkillType.TESTING,
    name: 'Integration Testing',
    description: '',
    experience: 7
  },
  {
    type: SkillType.TESTING,
    name: 'JMeter',
    description: '',
    experience: 6
  },
  {
    type: SkillType.TESTING,
    name: 'Junit',
    description: '',
    experience: 8
  },
  {
    type: SkillType.TESTING,
    name: 'Jasmine.js',
    description: '',
    experience: 4
  },
  {
    type: SkillType.TESTING,
    name: 'Selenium',
    description: '',
    experience: 5
  },

  {
    type: SkillType.PM,
    name: 'JIRA',
    description: '',
    experience: 7
  },
  {
    type: SkillType.PM,
    name: 'Agile Scrum',
    description: '',
    experience: 5
  },
];


export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    organization: 'Gogo',
    location: 'Chicago, IL',
    title: 'Inflight Connectivity and Purchasing Platform',
    description: 'Lead the design, development, testing, release, and support of multi environment server-side APIs in AWS across twenty plus microservices supporting Gogo/Intelsat\'s inflight connectivity and purchasing platform.',
    skills: ['Java', 'Spring Boot', 'Redis', 'RDS', 'DynamoDB', 'Netflix OSS'],
  },
  {
    organization: 'Gogo',
    location: 'Chicago, IL',
    title: 'Improved Elastic Search log ingestion',
    description: 'Improved the performance of production Elastic search log ingestion by roughly 99% (from multiple minutes to millisecond latency) by architecting an improved ingestion approach to leverage structured logging and streamlined GROK parsing.',
    skills: ['Elastic Search', 'GROK', 'Kibana', 'Log Stash'],
  },
  {
    organization: 'Gogo',
    location: 'Chicago, IL',
    title: 'Partner Sponsored Authentication and Activation Capability',
    description: 'Designed and implemented a capability for streamlining sponsored partner authentication and benefit activation in the airborne portal. Launched several key revenue generating implementations using the capability such as airline seat manifest enabled benefits (VOZ, CPA), partner account integrations (Tmobile, Boingo, Sprint), and loyalty reward redemption (ACA).',
    skills: ['Java', 'Spring Boot', 'JPA'],
  },
  {
    organization: 'Gogo',
    location: 'Chicago, IL',
    title: 'Production On Call Rotation Leader',
    description: 'Supported a production on call rotation through proactive monitoring and improvement of tooling related to alerting and dashboards (Grafana, Kibana, ELK APM, Sumologic, Dynatrace, Watcher).',
    skills: ['Java', 'Spring Boot', 'JPA'],
  },
  {
    organization: 'Gogo',
    location: 'Chicago, IL',
    title: 'Hackathon Winner (Portal Dark Mode)',
    description: 'Won first place in Gogo/Intelsat\'s hackathon for assisting in the development of a dark mode integration for the inflight multi-tenant web portal. Unassisted, I wrote an API to leverage a Gogo equipped aircraft\'s live latitude and longitude to dynamically calculate sunrise and sunset times for the aircraft which acted as triggers enabling and disabling the dark mode',
    skills: ['Javascript', 'React'],
  },
  {
    organization: 'Gogo',
    location: 'Chicago, IL',
    title: 'Session Management',
    description: 'Developed and maintained functionality for an application responsible for storing and retrieving data supporting the purchase and activation of all Gogo inflight internet sessions.',
    skills: ['Spring Boot', 'RXJava', 'DynamoDB', 'RDS', 'AWS Lambda'],
  },
  {
    organization: 'Gogo',
    location: 'Chicago, IL',
    title: 'Business Analytic Dashboards',
    description: 'Developed hundreds of business and service level dashboards/visualizations across several data platforms to support the health and reliability of Gogo/Intelsat\'s purchase and activation platform.',
    skills: ['SumoLogic', 'Kibana', 'Dynatrace', 'Grafana'],
  },

  {
    organization: 'Proquest',
    location: 'Bethesda, MD',
    title: 'Editorial Content Management System (ECMS)',
    description: 'Built an AWS cloud native content editing web application (AngularJS) to support content editors in the migration of many legacy content schemas.',
    skills: ['AngularJS'],
  },
  {
    organization: 'Proquest',
    location: 'Bethesda, MD',
    title: 'Distributed Content Management System (ECMS)',
    description: 'Designed and developed a REST based distributed system using (Java, Spring Boot, MongoDB, Solr) to support the content editing, content migration and, retirement of three legacy multi million document custom content management systems.',
    skills: ['Java', 'Spring Boot', 'JPA', 'MongoDB', 'Solr'],
  },
  {
    organization: 'Proquest',
    location: 'Bethesda, MD',
    title: 'Content Migration Framework (Optimus)',
    description: 'Developed several API implementations to support the retirement of three legacy multi million document custom content management systems.',
    skills: ['Java', 'Spring Boot', 'JPA', 'MongoDB', 'Solr'],
  },
  {
    organization: 'Proquest',
    location: 'Bethesda, MD',
    title: 'Bulk Edit Capability',
    description: 'Developed an event driven API to control editing content hundreds of documents at a time based on a series of content editor defined conditions.',
    skills: ['Java', 'SQS', 'MongoDB', 'Solr'],
  }
];

export const EXPERIENCES: Experience[] = [
  {
    type: ExperienceType.WORK,
    organization: 'Gogo',
    location: 'Chicago, IL',
    title: 'Software Engineer',
    description: 'Engineer on the Edge/Inflight Servies team (IFS); responsible for inflight and air to ground purchase path software services at Gogo. As a member of the IFS software team we developed and maintained robust restful microservices capable of realtime alerting targeting 100% service uptime. ',
    highlights: [
      'Service owner for the session management services, a series of microservices to manage session data created by Gogo equipped flights.',
      'Implemented rapid POC java service code using cutting edge technologies such as Spring, Akka, Netflix OSS APIs, reactive programming, and multi-region deployments. ',
      'Created dashboards capable of realtime monitoring and alerting, highlighting key metrics for database, system hardware, load balancers and instance activity, and api throughput metrics.',
      'Responsible for interpreting requirements, solution design, project management, software implementation, testing, and production support.',
      'Maintained the legacy version of session management including bug fixes, investigations, and feature improvements. The current service is horizontally scalable and maintains roughly 1 million weekly api requests.'
    ],
    skills: [],
    startDate: '03/01/2017',
    endDate: 'PRESENT'
  },
  {
    type: ExperienceType.WORK,
    organization: 'shaneburroughs.com',
    location: 'Chicago, IL',
    title: 'Principal',
    description: 'Technology consultant and engineer focused on end to end business interactions, specializing in high quality, high performance software. Responsible for all client interactions from requirement gathering, to functionality demos. As a technical leader, I drove solutions from inception to completion while keeping budgetary constraints in mind.',
    highlights: [
      'Created the interactive book companion site realestatedevelopmentmatrix.com to supplement some of the real estate courses at the Johns Hopkins Carey Business School.'
    ],
    skills: [],
    startDate: '08/01/2016',
    endDate: 'PRESENT'
  },
  {
    type: ExperienceType.WORK,
    organization: 'Proquest LLC',
    location: 'Bethesda, MD / Remote from Chicago, IL',
    title: 'Software Engineer',
    description: 'Architected and implemented enterprise solutions in Java for a cloud based editorial content management system. Engineered distributed system workflows aimed at automating editorial process. Supported migration of multi-million document legacy cms’ through development of a multi service restful software system.',
    highlights: [
      'Lead the design, implementation, maintenance, and improvements of distributed Java services to concurrently batch edit system MySQL and mongodb content.',
      'Assisted in team tooling and infrastructure transition to the cloud with tools such as AWS and docker.',
      'Provided frequent estimates and complexity analysis on cost effective solutions to improve editorial workflow',
      'Implemented an admin tool to assist in the data migration of multi million document legacy proquest database metadata using Spring',
    ],
    skills: [],
    startDate: '02/01/2014',
    endDate: '03/01/2017'
  },
  {
    type: ExperienceType.WORK,
    organization: 'Fermion Government Services',
    location: 'Lexington Park, MD',
    title: 'Software Engineer',
    description: 'Lead the release of multiple services for the US Navy common unmanned control station. Managed client relations and a small project team of software engineers. Interpreted technical specifications and assisted in translating them into Java services using supporting storage and bus technology. Maintained the company\'s internal IT infrastructure and assisted in modernizing its toolchain.',
    highlights: [
      'Designed and redeveloped a data warehouse service for use with the common unmanned control station.',
      'Tested and QA checked the release of a network time service for use with the common unmanned control station',
      'Setup, operated, troubleshoot and maintained remote transmission equipment in support of gitmo trials'
    ],
    skills: [],
    startDate: '11/01/2012',
    endDate: '10/01/2014'
  },
  {
    type: ExperienceType.WORK,
    organization: 'Navy Department of Defense',
    location: 'Lexington Park, MD',
    title: 'Software Development Technician',
    description: 'Supported legacy codebases and infrastructure of the Navy P-3 platform. Assisted in platform software testing, deployments, code reviews and bug fixes.',
    highlights: [
      'Managed the cataloging, transfer, and disposal of platform development systems and data.',
      'Investigated and fixed errors in platform through simple and innovative bug fixes',
      'Reported and presented analysis on asset management solutions for use program wide'
    ],
    skills: [],
    startDate: '06/01/2010',
    endDate: '11/01/2012'
  },
  {
    type: ExperienceType.EDUCATION,
    organization: 'University of Maryland University College',
    location: 'Adelphi, MD',
    title: 'B.S. Computer Science, Minor in Computing',
    description: 'Graduated w/degree',
    highlights: [],
    skills: [],
    startDate: '08/01/2009',
    endDate: '12/01/2012'
  },
  {
    type: ExperienceType.VOLUNTEER,
    organization: 'DevOps Days',
    location: 'Chicago, IL',
    title: 'Volunteer',
    description: '',
    highlights: [],
    skills: [],
    startDate: '',
    endDate: ''
    // 'media': ['https://pbs.twimg.com/profile_images/489608162266202112/YXhat8lj_400x400.png']
  },
  {
    type: ExperienceType.VOLUNTEER,
    organization: 'Random Hacks of Kindness',
    location: 'Chicago, IL',
    title: 'Engineering Mentor',
    highlights: [],
    skills: [],
    description: '',
    startDate: '',
    endDate: ''
    // 'media': ['https://c1.staticflickr.com/9/8616/16246660524_da2aaa7d29.jpg']
  },

];
