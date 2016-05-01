import request from 'request'
import config from 'config'

var character = {}
character.getAll = (callback) => {
	request({
    url: config.api.url + '/character'
  }, function(error, response, body) {
    if (error || response.statusCode !== 200) {
      console.log(error);
    }
    callback(JSON.parse(body));
  });
}

export default character
