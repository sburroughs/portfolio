import {Skill} from './../skills/skill';
import {Experience, ExperienceType} from '../experience/experience';
import {ContactInformation} from '../contact/contact';
import {About} from '../about/about';
import {Hobby} from '../hobby/hobby';

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
    description: 'From playing piano in elementary school, to guitar in high school, to drums in post college, I would consider myself a well rounded, albeit under practiced musician.',
    hyperlink: 'https://s3.amazonaws.com/aws-website-dsburroughscom-p6r0b/app/assets/img/guitar.jpeg'

  },
  {
    name: 'Fantasy Football Champion',
    description: 'Long time fantasy football player and league manager.',
    hyperlink: 'https://s3.amazonaws.com/aws-website-dsburroughscom-p6r0b/app/assets/img/football.jpg'

  },
  {
    name: 'Fixer Upper',
    description: 'Owning an 100 plus year old home will quickly test your handiness.',
    hyperlink: 'http://via.placeholder.com/350x250'

  },
  {
    name: 'Cryptomarket Investor',
    description: 'I invested in my first bitcoin in 2015 and several years later, my interest in the crypto market has continued to explode.',
    hyperlink: 'http://via.placeholder.com/350x250'

  },
  {
    name: 'Candle Maker',
    description: 'I occasionally make scented candles as a way to experiment with the compatibility of scented oil mixtures.',
    hyperlink: 'http://via.placeholder.com/350x250'

  },
  {
    name: 'Brew Master',
    description: 'Avid home brewer with long term aspirations working towards becoming a beer competition tasting judge.',
    hyperlink: 'http://via.placeholder.com/350x250'

  },
  {
    name: 'Occasional Bowler',
    description: 'I grew up playing in a saturday bowling league that turned into a lifelong love of the sport.',
    hyperlink: 'http://via.placeholder.com/350x250'
  },
  {
    name: 'Gamer',
    description: 'Frequently enjoy playing a variety of games; from the latest hardware intense PC releases to classic board/tabletop games. I even casually indulge in the mobile game market.',
    hyperlink: 'https://s3.amazonaws.com/aws-website-dsburroughscom-p6r0b/app/assets/img/computer.jpeg'

  }
];

export const SKILLS: Skill[] = [
  {
    type: 'Backend',
    name: 'Java',
    description: 'JDK8',
    experience: 8
  },
  {
    type: 'Backend',
    name: 'Spring',
    description: '',
    experience: 7
  },
  {
    type: 'Backend',
    name: 'Hibernate',
    description: '',
    experience: 6
  },
  {
    type: 'Backend',
    name: 'RXJava',
    description: '',
    experience: 6
  },
  {
    type: 'Backend',
    name: 'Netflix Hystrix',
    description: '',
    experience: 6
  },
  {
    type: 'Backend',
    name: 'AKKA',
    description: '',
    experience: 5
  },
  {
    type: 'Backend',
    name: 'Netflix Archaius',
    description: '',
    experience: 6
  },
  {
    type: 'Backend',
    name: 'Perl',
    description: '',
    experience: 4
  },
  {
    type: 'Backend',
    name: 'Bash',
    description: '',
    experience: 4
  },
  {
    type: 'Backend',
    name: 'Csh',
    description: '',
    experience: 4
  },
  {
    type: 'Backend',
    name: 'C#',
    description: '',
    experience: 4
  },
  {
    type: 'Backend',
    name: 'C++',
    description: '',
    experience: 3
  },

  {
    type: 'Frontend',
    name: 'HTML',
    description: 'HTML5',
    experience: 6
  },
  {
    type: 'Frontend',
    name: 'CSS',
    description: 'LESS',
    experience: 5
  },
  {
    type: 'Frontend',
    name: 'Bootstrap',
    description: 'Bootstrap 4',
    experience: 7
  },
  {
    type: 'Frontend',
    name: 'Javascript',
    description: 'ES6+',
    experience: 7
  },
  {
    type: 'Frontend',
    name: 'Typescript',
    description: '',
    experience: 6
  },
  {
    type: 'Frontend',
    name: 'AngularJS',
    description: 'Angular1 - Angular 5+',
    experience: 7
  },
  {
    type: 'Frontend',
    name: 'JQuery',
    description: '',
    experience: 5
  },
  {
    type: 'Frontend',
    name: 'PHP',
    description: '',
    experience: 3
  },
  {
    type: 'Frontend',
    name: 'Drupal',
    description: '',
    experience: 2
  },

  {
    type: 'Data',
    name: 'Solr',
    description: '',
    experience: 6
  },
  {
    type: 'Data',
    name: 'Elastic Cache',
    description: '',
    experience: 5
  },
  {
    type: 'Data',
    name: 'Redis',
    description: '',
    experience: 6
  },
  {
    type: 'Data',
    name: 'Memcached',
    description: '',
    experience: 5
  },
  {
    type: 'Data',
    name: 'DynamoDB',
    description: '',
    experience: 6
  },
  {
    type: 'Data',
    name: 'MongoDB',
    description: '',
    experience: 4
  },
  {
    type: 'Data',
    name: 'MySQL',
    description: 'RDS Aurora',
    experience: 7
  },
  {
    type: 'Data',
    name: 'Oracle SQL',
    description: '',
    experience: 5
  },
  {
    type: 'Data',
    name: 'Sumologic',
    description: '',
    experience: 6
  },
  {
    type: 'Data',
    name: 'JMS',
    description: '',
    experience: 4
  },
  {
    type: 'Data',
    name: 'XMPP',
    description: '',
    experience: 3
  },
  {
    type: 'Data',
    name: 'SQS',
    description: '',
    experience: 5
  },
  {
    type: 'Data',
    name: 'SNS',
    description: '',
    experience: 6
  },
  {
    type: 'Data',
    name: 'Mule ESB',
    description: '',
    experience: 4
  },

  {
    type: 'Infrastructure',
    name: 'S3',
    description: '',
    experience: 5
  },
  {
    type: 'Infrastructure',
    name: 'EC2',
    description: '',
    experience: 4
  },
  {
    type: 'Infrastructure',
    name: 'Jenkins',
    description: '',
    experience: 4
  },
  {
    type: 'Infrastructure',
    name: 'Docker',
    description: '',
    experience: 3
  },
  {
    type: 'Infrastructure',
    name: 'Git',
    description: '',
    experience: 8
  },
  {
    type: 'Infrastructure',
    name: 'SVN',
    description: '',
    experience: 4
  },

  {
    type: 'Testing',
    name: 'Integration Testing',
    description: '',
    experience: 7
  },
  {
    type: 'Testing',
    name: 'JMeter',
    description: '',
    experience: 6
  },
  {
    type: 'Testing',
    name: 'Junit',
    description: '',
    experience: 8
  },
  {
    type: 'Testing',
    name: 'Jasmine.js',
    description: '',
    experience: 4
  },
  {
    type: 'Testing',
    name: 'Selenium',
    description: '',
    experience: 5
  },

  {
    type: 'Project Management',
    name: 'JIRA',
    description: '',
    experience: 7
  },
  {
    type: 'Project Management',
    name: 'Agile Scrum',
    description: '',
    experience: 5
  },
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
    description: '',
    startDate: '',
    endDate: ''
    // 'media': ['https://c1.staticflickr.com/9/8616/16246660524_da2aaa7d29.jpg']
  },

];

export const EDUCATION: Experience[] = [];

