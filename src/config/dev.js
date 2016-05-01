'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',
  facebookAppId: '1612780269045855',
  api: {
    url: 'http://localhost:3000',
    host: 'localhost:3000'
  }
};

export default Object.freeze(Object.assign({}, baseConfig, config));
