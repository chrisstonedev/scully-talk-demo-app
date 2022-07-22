import { ImageData } from "../build/build-step";

export interface DemoTask {
  slug: string;
  name: string;
  tagline: string;
  dateCreated: string;
  dateUpdated: string;
  commits: number;
  languages: string[];
  platforms: string[];
  libraries: string[];
  image: ImageData;
}
