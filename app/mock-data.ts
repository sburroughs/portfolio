import {Skill} from './components/skills/skill';
import {Experience} from './components/experience/experience';

export var SKILLS:Skill[] = [
    {
        "name": "Backend", "rating": 10,
        "focus": [
            {"name": "Java", "experience": 10},
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
            {"name": "MongoDB", "experience": 10}
        ]
    },
    {
        "name": "Tools", "rating": 7,
        "focus": [
            {"name": "GIT ", "experience": 10},
            {"name": "IntelliJ IDEA ", "experience": 10},
            {"name": "SVN", "experience": 10},
        ]
    },
    {
        "name": "DevOps", "rating": 7,
        "focus": []
    },
    {
        "name": "Practices", "rating": 7,
        "focus": []
    },
    {
        "name": "Other", "rating": 7,
        "focus": []
    }


];

export var POSITIONS:Experience[] = [
    {"organization": "Navy Department of Defense", "title": "Software", "experience": 2},
    {"organization": "Fermion Government Services", "title": "Software", "experience": 2},
    {"organization": "Proquest LLC", "title": "Software", "experience": 2},
    {"organization": "Personal Development", "title": "Software", "experience": 2}
];

export var EDUCATION:Experience[] = [
    {
        "organization": "University of Maryland University College",
        "title": "B.S. Computer Science, Minor in Computing",
        "experience": 2
    }
];

export var TRAINING:Experience[] = [
    {"organization": "DevOps Days", "title": "Attendee", "experience": 1},
    {"organization": "Random Hacks of Kindness", "title": "Engineering Mentor", "experience": 1}
];

