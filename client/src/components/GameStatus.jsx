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
        <h2 id="game-message">{this.props.currentPlayer.turn}</h2>
        <GameBoard playStatus={this.props.playStatus} claimSquare={this.props.claimSquare}/>
      </div>
    );
  }

}


export default GameStatus;
