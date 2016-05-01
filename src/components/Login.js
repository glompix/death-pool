import React from 'react';
import FacebookLogin from 'react-facebook-login';
import config from 'config';

const responseFacebook = (response) => {
	/*eslint no-console: "off"*/
	console.log(response);
}

class Login extends React.Component {
  render() {
    return (
      <FacebookLogin appId={config.facebookAppId} autoLoad={true} callback={responseFacebook}/>
    );
  }
}

Login.defaultProps = {};

export default Login;
