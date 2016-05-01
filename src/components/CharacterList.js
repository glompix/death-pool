import React from 'react'
import CharacterSource from '../sources/character'

class CharacterList extends React.Component {

  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    CharacterSource.getAll(function(data) {
      this.setState({
        characters: data
      });
    }.bind(this))
  }

  render() {
    var charNodes = this.state.characters.map(function(character) {
      return ( < li key = {
        character.id
      } > {
        character.name
      } < /li>);
    });
    return ( < div >
      < h1 > Characters < /h1> < ul > {
        charNodes
      } < /ul> < /div>
    );
  }
}

export default CharacterList;
