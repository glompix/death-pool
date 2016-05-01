require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react'
import Login from './Login'
import CharacterList from './CharacterList'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Login/>
        <CharacterList/>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
