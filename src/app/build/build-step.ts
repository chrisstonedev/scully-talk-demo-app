export interface BuildStep {
  slug: string;
  title: string;
  files: File[];
}

export interface ImageData {
  path: string;
  alt: string;
}

export interface File {
  name: string;
  description: string;
}
