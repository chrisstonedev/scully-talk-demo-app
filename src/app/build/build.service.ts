import {Injectable} from '@angular/core';
import {BuildStep} from "./build-step";
import buildData from '../../assets/build-data.json';

@Injectable({
  providedIn: 'root'
})
export class BuildService {
  private buildSteps: BuildStep[] = buildData;

  constructor() { }

  getTalks() {
    return this.buildSteps;
  }
}
