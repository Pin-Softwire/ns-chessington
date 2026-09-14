import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square'
import GameSettings from '../gameSettings';
import King from './king';

export default class Pawn extends Piece {

    private blackStartingRow: number = 6;
    private whiteStartingRow: number = 1;

    public constructor(player: Player) {
        super(player);

    }

    public getAvailableMoves(board: Board) {

        const direction = this.player === Player.BLACK ? -1 : 1;
        const startingRow = this.player === Player.BLACK ? this.blackStartingRow : this.whiteStartingRow;

        const currSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = new Array();

        const oneSquareAhead = new Square(currSquare.row + direction, currSquare.col);
        if (oneSquareAhead.row < 0 || oneSquareAhead.row >= GameSettings.BOARD_SIZE) {
            return availableMoves;
        }

        if (!board.getPiece(oneSquareAhead)) {
            availableMoves.push(oneSquareAhead);

            const twoSquaresAhead = new Square(currSquare.row + (direction * 2), currSquare.col);
            if (currSquare.row === startingRow && !board.getPiece(twoSquaresAhead)) {
                availableMoves.push(twoSquaresAhead);
            }
        }

        const diagonalCols = [currSquare.col - 1, currSquare.col + 1];
        for (const col of diagonalCols) {
            if (col < 0 || col >= GameSettings.BOARD_SIZE) {
                continue;
            }

            const diagonalSquare = new Square(currSquare.row + direction, col);
            const occupyingPiece = board.getPiece(diagonalSquare);

            if (occupyingPiece && occupyingPiece.player !== this.player && !(occupyingPiece instanceof King)) {
                availableMoves.push(diagonalSquare);
            }
        }

        return availableMoves;
    }
}
