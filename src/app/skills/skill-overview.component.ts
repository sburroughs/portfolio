import {Component, OnInit} from '@angular/core';

import {Skill} from './skill';
import {DataProviderService} from '../util/data-provider.service';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';
import {breakpointsProvider, defaultBreakpoints, BreakpointsService, BreakpointEvent} from 'angular-breakpoints';

@Component({
  selector: 'skills',
  providers: [breakpointsProvider()],
  templateUrl: 'skill-overview.component.html',
})
export class SkillOverviewComponent implements OnInit {
  skills: Skill[];
  selectedSkills: Skill[];
  options: CloudOptions = this.setOptions(0, 0);
  skillNames: CloudData[] = [];

  constructor(private _skillService: DataProviderService,
              private _breakpointsService: BreakpointsService) {
  }


  load(): void {

    this._skillService.getSkills().then(skills => {
      this.skills = skills;
      this.selectedSkills = skills;
      this.skillNames = skills.map(skill => {
        const skillKey: string = escape(skill.name
            .replace(/\s+/g, '-').toLowerCase()
        );
        return {
          text: skill.name,
          weight: skill.experience,
          link: './skills/' + skillKey,
        };
      });
    });
  }

  setOptions(height: number, width: number): CloudOptions {
    const options: CloudOptions = {
      width,
      height,
      overflow: false,
      zoomOnHover: {
        scale: 1.3,
        transitionTime: 0.4,
        delay: 0.1
      }
    };
    this.options = options;
    return options;
  }

  onBreakpoint(event: BreakpointEvent): void {

    let height: number;
    let width: number;

    switch (event.name) {
      case 'lg':
        height = 500;
        width = defaultBreakpoints.lg.min - 50;
        break;
      case 'md':
        height = 600;
        width = defaultBreakpoints.md.min - 50;
        break;
      case 'sm':
        height = 800;
        width = defaultBreakpoints.sm.min - 50;
        break;
      case 'xs':
      default:
        height = 1000;
        width = 320;
        break;
    }

    if (width !== this.options.width || height !== this.options.height) {
      this.setOptions(height, width);
    }

  }


  ngOnInit(): void {
    this._breakpointsService.changes.subscribe(t => this.onBreakpoint(t));
    this.load();
  }

}
