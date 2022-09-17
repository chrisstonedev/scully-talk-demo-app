import { registerPlugin, ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

const buildData = require('./src/assets/build-data.json');
const demoData = require('./src/assets/demo-data.json');

registerPlugin('router', 'buildSlugPlugin', async () => {
  return buildData.map(x => {
    return {route: `/build/${x.slug}`};
  });
});

registerPlugin('router', 'demoSlugPlugin', async () => {
  return demoData.map(x => {
    return {route: `/demo/${x.slug}`};
  });
});

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-talk-demo-app",
  // spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    "/build/:slug": {
      type: 'buildSlugPlugin'
    },
    "/demo/:slug": {
      type: 'demoSlugPlugin'
    }
  }
};
