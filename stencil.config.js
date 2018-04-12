const sass = require('@stencil/sass');

exports.config = {
  namespace: 'websocialshare',
  outputTargets:[
    { type: 'dist' },
    { type: 'www' }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
