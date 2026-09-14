import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = new Array();

        // Vertical
        for (let row = 0; row < GameSettings.BOARD_SIZE; row++) {
            if (row !== currSquare.row) {
                availableMoves.push(new Square(row, currSquare.col));
            }
        }

        // Horizontal
        for (let col = 0; col < GameSettings.BOARD_SIZE; col++) {
            if (col !== currSquare.col) {
                availableMoves.push(new Square(currSquare.row, col));
            }
        }

        return availableMoves;
    }
}
