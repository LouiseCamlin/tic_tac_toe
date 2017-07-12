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
      this.checkWin(square);
      this.changePlayer();
    }
  }

  checkWin(square) {
    let keepGoing = true;
    const currentPlayStatus = this.state.playStatus;



    if((currentPlayStatus["a1"] == currentPlayStatus["b1"]) && (currentPlayStatus["a1"] == currentPlayStatus["c1"]) && (currentPlayStatus["a1"] !== "")) {
      keepGoing = false;
    }
    if((currentPlayStatus["a2"] == currentPlayStatus["b2"]) && (currentPlayStatus["a2"] == currentPlayStatus["c2"]) && (currentPlayStatus["a2"] !== "")) {
      keepGoing = false;
    }
    if((currentPlayStatus["a3"] == currentPlayStatus["b3"]) && (currentPlayStatus["a3"] == currentPlayStatus["c3"]) && (currentPlayStatus["a3"] !== "")) {
      keepGoing = false;
    }
    if((currentPlayStatus["a1"] == currentPlayStatus["a2"]) && (currentPlayStatus["a1"] == currentPlayStatus["a3"]) && (currentPlayStatus["a1"] !== "")) {
      keepGoing = false;
    }
    if((currentPlayStatus["b1"] == currentPlayStatus["b2"]) && (currentPlayStatus["b1"] == currentPlayStatus["b3"]) && (currentPlayStatus["b1"] !== "")) {
      keepGoing = false;
    }
    if((currentPlayStatus["c1"] == currentPlayStatus["c2"]) && (currentPlayStatus["c1"] == currentPlayStatus["c3"]) && (currentPlayStatus["c1"] !== "")) {
      keepGoing = false;
    }
    if((currentPlayStatus["a1"] == currentPlayStatus["b2"]) && (currentPlayStatus["a1"] == currentPlayStatus["c3"]) && (currentPlayStatus["a1"] !== "")) {
      keepGoing = false;
    }
    if((currentPlayStatus["a3"] == currentPlayStatus["b2"]) && (currentPlayStatus["a3"] == currentPlayStatus["c1"]) && (currentPlayStatus["a3"] !== "")) {
      keepGoing = false;
    }




    if(keepGoing == false) {
      console.log("WIIIN");
    }
  }

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
