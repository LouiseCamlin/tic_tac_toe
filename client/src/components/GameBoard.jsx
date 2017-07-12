import React from 'react';

class GameBoard extends React.Component {

  render() {
    return(
      <div id="game-board-wrapper">
        <table>
          <tbody>

            <tr>
              <td id="a1">A1</td>
              <td id="b1">B1</td>
              <td id="c1">C1</td>
            </tr>

            <tr>
              <td id="a2">A2</td>
              <td id="b2">B2</td>
              <td id="c2">C2</td>
            </tr>

            <tr>
              <td id="a3">A3</td>
              <td id="b3">B3</td>
              <td id="c3">C3</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    )
  }

}

export default GameBoard;
