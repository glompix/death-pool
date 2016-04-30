import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
	/*eslint no-console: "off"*/
	console.log(response);
}

let fbAppId = window.location.toString().match(/:8000/) ? '1612780269045855' : '1612768939046988';

class Login extends React.Component {
  render() {
    return (
      <FacebookLogin appId={fbAppId} autoLoad={true} callback={responseFacebook}/>
    );
  }
}

Login.defaultProps = {};

export default Login;
