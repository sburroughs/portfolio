import {Component, OnInit} from '@angular/core';

import {ExperienceType, Skill} from './skill';
import {breakpointsProvider, BreakpointsService} from 'angular-breakpoints';
import {ContentManagementService} from '../util/content-management.service';

@Component({
  selector: 'skills',
  providers: [breakpointsProvider()],
  templateUrl: 'skill-overview.component.html',
})
export class SkillOverviewComponent implements OnInit {
  skills: Skill[] = [];
  types = Object.keys(ExperienceType).filter(k => isNaN(Number(k)));
  baseFilter = 'ALL';
  selectedFilter = this.baseFilter;
  isVerticalFilter: boolean;

  constructor(private cms: ContentManagementService,
              private breakpointsService: BreakpointsService) {
  }

  filter(skills): Skill[] {
    return skills.filter(s => {
      // If ALL selected, don't filter anything
      if (this.selectedFilter === this.baseFilter) {
        return true;
      }
      // Filter by selected Filter
      return this.selectedFilter === s.type.toUpperCase();
    });
  }

  ngOnInit(): void {
    this.breakpointsService.changes.subscribe(e => this.isVerticalFilter = e.name === 'xs');
    this.cms.getSkills().then(skills => {
      this.skills = skills;
    });
  }

}
