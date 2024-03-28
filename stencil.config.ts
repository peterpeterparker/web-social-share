import {Config} from '@stencil/core';

import {postcss} from '@stencil/postcss';
import {sass} from '@stencil/sass';
// @ts-ignore
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'websocialshare',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      baseUrl: 'http://websocialshare.com',
      serviceWorker: null
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false
    }
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()]
    })
  ],
  extras: {
    enableImportInjection: true
  }
};
