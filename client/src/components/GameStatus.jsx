import React from 'react';
import GameBoard from './GameBoard.jsx'

class GameStatus extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <GameBoard />
      </div>
    );
  }

}


export default GameStatus;
