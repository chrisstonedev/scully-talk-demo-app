import { Injectable } from '@angular/core';
import { BuildStep } from './build-step';
import buildData from '../../assets/build-data.json';

@Injectable()
export class BuildService {
  private projects: BuildStep[] = buildData;

  constructor() {
  }

  getProjects() {
    return this.projects;
  }
}
