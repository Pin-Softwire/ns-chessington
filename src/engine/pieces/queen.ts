import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = new Array();

        const directions = [
            // Horizontal and vertical
            { rowStep: 0, colStep: -1 },
            { rowStep: 0, colStep: 1 },
            { rowStep: -1, colStep: 0 },
            { rowStep: 1, colStep: 0 },
            // Diagonal
            { rowStep: -1, colStep: -1 },
            { rowStep: -1, colStep: 1 },
            { rowStep: 1, colStep: -1 },
            { rowStep: 1, colStep: 1 }
        ];

        for (const direction of directions) {
            let row = currSquare.row + direction.rowStep;
            let col = currSquare.col + direction.colStep;

            while (row >= 0 && row < GameSettings.BOARD_SIZE && col >= 0 && col < GameSettings.BOARD_SIZE) {
                availableMoves.push(new Square(row, col));
                row += direction.rowStep;
                col += direction.colStep;
            }
        }

        return availableMoves;
    }
}
