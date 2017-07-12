import React from "react";
import GameStatus from '../components/GameStatus.jsx';


class Controller extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playStatus: {
        a1: "",
        b1: "",
        c1: "",
        a2: "",
        b2: "",
        c2: "",
        a3: "",
        b3: "",
        c3: ""
      },
      currentPlayer: {
        turn: "player1"
      }
    }
  }


  takeTurn(square) {
    const currentPlayStatus = this.state.playStatus;
    if(currentPlayStatus[square] == "") {

      this.claimSquare(square);
      // this.checkWin();
      this.changePlayer();
    }
  }
  
  // checkWin() {
  //   const
  // }

  changePlayer() {
    const player = this.state.currentPlayer
    if(player["turn"] == "player1") {
      player["turn"] = "player2"
      this.setState({ player })
    } else {
      player["turn"] = "player1"
      this.setState({ player })
    }
  }

  claimSquare(square) {
    const currentPlayStatus = this.state.playStatus;
    const player = this.state.currentPlayer

    if (player["turn"] == "player1") {
      currentPlayStatus[square] = "X";
      this.setState({ currentPlayStatus });
    } else {
      currentPlayStatus[square] = "O";
      this.setState({ currentPlayStatus });
    }

  }

  render(){
    return (
      <div>
        <h1 id="game-title">Matt and Louise's Awesome Tic-Tac-Toe!</h1>
        <GameStatus playStatus={this.state.playStatus} currentPlayer={this.state.currentPlayer} takeTurn={this.takeTurn.bind(this)}/>
      </div>
    );
  }


}



export default Controller;
