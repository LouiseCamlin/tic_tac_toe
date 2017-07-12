import React from 'react';

class GameBoard extends React.Component {
  constructor(props) {
      super(props);
  }

  handleClick( position ){
    this.props.claimSquare(position);
  }


  render() {

    return(
      <div id="game-board-wrapper">
        <table >
          <tbody>

            <tr >
              <td id="a1" onClick={(e) => {this.handleClick("a1")}}>{this.props.playStatus.a1}</td>
              <td id="b1" onClick={(e) => {this.handleClick("b1")}}>{this.props.playStatus.b1}</td>
              <td id="c1" onClick={(e) => {this.handleClick("c1")}}>{this.props.playStatus.c1}</td>
            </tr>

            <tr>
              <td id="a2" onClick={(e) => {this.handleClick("a2")}}>{this.props.playStatus.a2}</td>
              <td id="b2" onClick={(e) => {this.handleClick("b2")}}>{this.props.playStatus.b2}</td>
              <td id="c2" onClick={(e) => {this.handleClick("c2")}}>{this.props.playStatus.c2}</td>
            </tr>

            <tr>
              <td id="a3" onClick={(e) => {this.handleClick("a3")}}>{this.props.playStatus.a3}</td>
              <td id="b3" onClick={(e) => {this.handleClick("b3")}}>{this.props.playStatus.b3}</td>
              <td id="c3" onClick={(e) => {this.handleClick("c3")}}>{this.props.playStatus.c3}</td>
            </tr>

          </tbody>
        </table>
      </div>
    )
  }

}

export default GameBoard;
