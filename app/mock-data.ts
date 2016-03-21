import {Skill} from './skill';
import {Experience} from './experience';

export var SKILLS:Skill[] = [
    {
        "name": "Java", "rating": 10,
        "focus": [
            {"name": "Base Java", "experience": 10},
            {"name": "JUnit", "experience": 10},
        ]
    },
    {
        "name": "JavaScript", "rating": 10,
        "focus": [
            {"name": "AngularJS", "experience": 10},
            {"name": "JQuery", "experience": 10},
            {"name": "Karma Testing", "experience": 10},
        ]
    },
    {
        "name": "Data Storage", "rating": 7,
        "focus": []
    },
    {
        "name": "Developer Tools", "rating": 7,
        "focus": [
            {"name": "GIT ", "experience": 10},
            {"name": "IntelliJ IDEA ", "experience": 10},
            {"name": "Karma Testing", "experience": 10},
        ]
    },
    {
        "name": "Development Operations", "rating": 7,
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
    {"organization": "University of Maryland University College", "title": "B.S. Computer Science, Minor in Computing", "experience": 2}
];

export var TRAINING:Experience[] = [
    {"organization": "DevOps Days", "title": "Attendee", "experience": 1},
    {"organization": "Random Hacks of Kindness", "title": "Engineering Mentor", "experience": 1}
];

