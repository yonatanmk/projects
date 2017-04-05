import React, { Component } from 'react';

class Space extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    let placePiece = () => {
      if(this.props.game.setPiece(this.props.y)) {
        this.props.updateBoard();
      }
    };

    let circle;
      if(this.props.piece == null) {
        circle= "circle";
      }
      else if(this.props.piece == 1) {
        circle= "red";
      }
      else if(this.props.piece == 2) {
        circle= "blue";
      }


    return (
      <td>
        <div className={circle} onClick={placePiece}>
          {this.props.game.board[this.props.x][this.props.y]}
        </div>
      </td>
    );
  }

}
//
export default Space;
