import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-talk-demo-app",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
  }
};
