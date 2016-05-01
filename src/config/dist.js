'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dist',  // feel free to remove the appEnv property here
  apiUrl: 'http://death-pool-api.herokuapp.com',
  facebookAppId: '1612768939046988'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
