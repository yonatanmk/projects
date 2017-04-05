import React, { Component } from 'react';
import Space from './Space';

const Game = (props) => {
  let keyCount = -1;
  let board = props.game.board.map((row, x) => {
  let columns = row.map((column, y) => {
    keyCount = keyCount + 1;
      return(
        <Space
          key={keyCount}
          game={props.game}
          piece={props.game.board[x][y]}
          x={x}
          y={y}
          updateBoard={props.updateBoard}
        />
      );
    });
    return (
      <tr key={keyCount}>{columns}</tr>
    );
});


  return (
    <div className="cell">
      <table>
        <tbody>
        {board}
        </tbody>
      </table>
    </div>
  );
};


export default Game;
