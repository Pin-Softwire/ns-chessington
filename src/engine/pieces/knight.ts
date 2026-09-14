import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';
import King from './king';

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currSquare: Square = board.findPiece(this);
        const availableMoves: Square[] = new Array();

        const offsets = [
            { rowStep: -2, colStep: -1 }, { rowStep: -2, colStep: 1 },
            { rowStep: -1, colStep: -2 }, { rowStep: -1, colStep: 2 },
            { rowStep: 1, colStep: -2 }, { rowStep: 1, colStep: 2 },
            { rowStep: 2, colStep: -1 }, { rowStep: 2, colStep: 1 }
        ];

        for (const offset of offsets) {
            const row = currSquare.row + offset.rowStep;
            const col = currSquare.col + offset.colStep;

            if (row >= 0 && row < GameSettings.BOARD_SIZE && col >= 0 && col < GameSettings.BOARD_SIZE) {
                const square = new Square(row, col);
                const occupyingPiece = board.getPiece(square);

                if (!occupyingPiece || (occupyingPiece.player !== this.player && !(occupyingPiece instanceof King))) {
                    availableMoves.push(square);
                }
            }
        }

        return availableMoves;
    }
}
