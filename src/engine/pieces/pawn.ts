import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square'

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        if (this.player === Player.BLACK) {
            const currSquare: Square = board.findPiece(this);
            // if (!!board.getPiece(new Square(currSquare.row + 1, currSquare.col))) {
            return new Array(new Square(currSquare.row - 1, currSquare.col));
            // }


        } else {
            const currSquare: Square = board.findPiece(this);
            // if (!!board.getPiece(new Square(currSquare.row - 1, currSquare.col))) {
            return new Array(new Square(currSquare.row + 1, currSquare.col));
            // }
        }
    }
}
