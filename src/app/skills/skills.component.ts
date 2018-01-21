import {Component, OnInit} from '@angular/core';

import {Skill} from './skill';
import {SkillService} from './skill.service';

@Component({
  selector: 'skills',
  templateUrl: 'skills.component.html',
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  selectedSkill: Skill;

  constructor(private _skillService: SkillService) {
  }

  getSkills() {
    this._skillService.getSkills().then(skills => {
      this.skills = skills;
      this.selectedSkill = skills[0];
    });
  }

  ngOnInit() {
    this.getSkills();
  }

  onSelect(skill: Skill) {
    this.selectedSkill = skill;
  }

}
