import { Injectable } from '@angular/core';
import { DemoTask } from './demo-task';
import demoData from '../../assets/demo-data.json';

@Injectable()
export class DemoService {
  private demos: DemoTask[] = demoData;

  constructor() {
  }

  getProjects() {
    return this.demos;
  }
}
