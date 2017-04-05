class GameClass {
  constructor() {
    this.board = this.createBoard();
    this.player1 = 1;
    this.player2 = 2;
    this.currentPlayer = 1;
    this.gameOver = false;
  }


// setup game board
  createBoard() {
    let board = [];
    for(let r = 0; r < 6; r++){
      let row = [];
      for (let c = 0; c < 7; c++){
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }

// place game piece
  setPiece(c) {
    if(this.gameOver !== true ){
      for(let r = 5; r >= 0; r--) {
        if(this.board[r][c] == null) {
          this.board[r][c] = this.currentPlayer;
          break;
        }
      }
    }
    this.checkWinner();
    if(this.gameOver == false){
      this.togglePlayer();
      return this.board;
    }
    else {
      console.log(`Winner is Player ${this.currentPlayer}`);
      return this.board;
    }
  }

// change players
  togglePlayer() {
    if (this.currentPlayer == 1){
      this.currentPlayer = 2;
    }
    else {
      this.currentPlayer = 1;
    }
  }

// reset the board
  resetBoard() {
    this.board = this.createBoard();
    this.currentPlayer = 1;
  }

// vertical check
  checkVertical() {
    for ( let r = 3; r < 6; r++) {
      for ( let c = 0; c < 7; c++) {
        if (this.board[r][c]){
          if (this.board[r][c] === this.board[r - 1][c] &&
             this.board[r][c] === this.board[r - 2][c] &&
             this.board[r][c] === this.board[r - 3][c])
          {
            return this.board;
          }
        }
      }
    }
  }

// horizontal check
  checkHorizontal(){
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.board[r][c]){
          if (this.board[r][c] === this.board[r][c + 1] &&
              this.board[r][c] === this.board[r][c + 2] &&
              this.board[r][c] === this.board[r][c + 3])
          {
            return this.board;
          }
        }
      }
    }
  }

// diagonal check for right
  checkDiagonalRight(){
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.board[r][c]){
          if (this.board[r][c] === this.board[r - 1][c + 1] &&
              this.board[r][c] === this.board[r - 2][c + 2] &&
              this.board[r][c] === this.board[r - 3][c + 3])
          {
            return this.board;
          }
        }
      }
    }
  }

// diagonal left check
  checkDiagonalLeft(){
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (this.board[r][c]){
          if (this.board[r][c] === this.board[r - 1][c - 1] &&
              this.board[r][c] === this.board[r - 2][c - 2] &&
              this.board[r][c] === this.board[r - 3][c - 3])
          {
            return this.board;
          }
        }
      }
    }
  }

  checkDraw(){
    for(let r = 6; r < 6; r++) {
      for (let c = 7; c < 7; c++){
        if(this.board[r][c] === null){
          return null;
        }
      }
    }
    return 'draw';
  }


  checkAll(){
    return this.checkHorizontal() || this.checkVertical() || this.checkDiagonalRight() || this.checkDiagonalLeft();
  }

  checkWinner(){
    if(this.checkAll() !== undefined){
      this.gameOver = true;
    }
    else {
      this.gameOver = false;
    }
  }
}


export default GameClass;
