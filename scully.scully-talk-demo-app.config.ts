import { registerPlugin, ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

const projectData = require('./src/assets/projects-data.json');
const talkData = require('./src/assets/talks-data.json');

registerPlugin('router', 'portfolioSlugPlugin', async () => {
  return projectData.map(x => {
    return {route: `/portfolio/${x.slug}`};
  });
});

registerPlugin('router', 'speakingSlugPlugin', async () => {
  return talkData.map(x => {
    return {route: `/speaking/${x.slug}`};
  });
});

registerPlugin('router', 'void', async () => {
  return [];
});

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-talk-demo-app",
  // spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    "/portfolio/:slug": {
      type: 'portfolioSlugPlugin'
    },
    "/speaking/:slug": {
      type: 'speakingSlugPlugin'
    },
    "/about-me": {
      type: 'void'
    }
  }
};
