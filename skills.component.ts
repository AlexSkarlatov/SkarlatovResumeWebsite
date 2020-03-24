import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SKILLS } from '../mock-skill.ts';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  s:Skill[] = SKILLS;
  constructor() { }

  ngOnInit() {
  }

}
