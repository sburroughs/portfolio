import {Component, Input} from '@angular/core';

@Component({
    selector: 'skill-classifier',
    template: `<span>{{getClassification()}}</span>`,
})
export class SkillClassifierComponent {
    @Input() rating: number;

    getClassification(): String {

        let classification: String;
        switch (this.rating) {
            case 1:
                classification = 'Mediocre';
            case 2:
                classification = 'Beginner';
                break;
            case 3:
                classification = 'Novice';
                break;
            case 4:
            case 5:
                classification = 'Experienced';
                break;
            case 6:
                classification = 'Veteran';
                break;
            case 7:
                classification = 'Expert';
                break;
            case 8:
                classification = 'Exceptional';
                break;
            case 9:
                classification = 'Elite';
                break;
            case 10:
                classification = 'Master';
                break;
            default:
                classification = 'Other';
                break;

        }
        return classification;
    }
}


