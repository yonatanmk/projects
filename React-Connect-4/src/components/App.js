import React, { Component } from 'react';
import Game from './Game';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: this.props.game,
      boardState: null
    };
    this.gameOver = this.gameOver.bind(this);
  }

  updateBoard() {
    this.setState({ game: this.props.game });
  }

  gameOver() {
    if(this.props.game.gameOver == false) {
      return `Player ${this.props.game.currentPlayer} is currently moving`;
    }
    else if(this.props.game.gameOver == true) {
      return `The winner is player ${this.props.game.currentPlayer}`;
    }
    else {
      return "The game resulted in a draw, please start a new game.";
    }
  }

  reset() {
    window.location.reload(true);
  }



    render(){

      return (
        <div className="row">
          <div className="small-6 small-centered columns, large-6">
            <div className="Gameboard">
              <h1> Connect 4 </h1>
                <h4 className="small-11 small-centered columns"> {this.gameOver()} </h4>
                  <Game
                   game={this.props.game}
                   boardState={this.state.boardState}
                   updateBoard={this.updateBoard.bind(this)}
                  />
                  <br/>
                  <div className="button" onClick={this.reset.bind(this)}>New Game</div>
            </div>
          </div>
        </div>
      );
    }
}




export default App;
