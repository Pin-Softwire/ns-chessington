import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square'

export default class Pawn extends Piece {

    private blackStartingRow: number = 6;
    private whiteStartingRow: number = 1;

    public constructor(player: Player) {
        super(player);

    }

    public getAvailableMoves(board: Board) {

        if (this.player === Player.BLACK) {
            const currSquare: Square = board.findPiece(this);
            const availableMoves: Square[] = new Array();
            if (currSquare.row === this.blackStartingRow) {
                availableMoves.push(new Square(currSquare.row - 2, currSquare.col))
            }
            availableMoves.push(new Square(currSquare.row - 1, currSquare.col));
            return availableMoves;


        } else {
            const currSquare: Square = board.findPiece(this);
            const availableMoves: Square[] = new Array();
            if (currSquare.row === this.whiteStartingRow) {
                availableMoves.push(new Square(currSquare.row + 2, currSquare.col))
            }
            availableMoves.push(new Square(currSquare.row + 1, currSquare.col));
            return availableMoves;
            
        }
    }
}
