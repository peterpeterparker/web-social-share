import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'websocialshare',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      baseUrl: 'http://websocialshare.com',
      serviceWorker: null
    }
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};
