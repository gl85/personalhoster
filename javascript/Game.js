export default class Game {

    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
        console.log(this.board);
    }

    nextTurn() {
        if (this.turn == "X") {
            this.turn = "O";
        }
        else {
            this.turn = "X";
        }
    }

    makeMove(i) {
        if (this.board[i]) {
            return;
        }
        this.board[i] = this.turn;
    }

    findWinningCombinations() {
        const winningCombinations = [
            [0, 1, 2]
            [3, 4, 5]
            [6, 7, 8]
            [0, 1, 2]
            [0, 1, 2]
            [0, 1, 2]
            [0, 1, 2]
            [0, 1, 2]
            [0, 1, 2]
        ]
    }
}