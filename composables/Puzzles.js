const { pieces } = usePieces()
const { convert } = useFEN();

export function usePuzzles() {
    const starting = {
        position: [
            pieces.RookB, pieces.KnightB, pieces.BishopB, pieces.QueenB, pieces.KingB, pieces.BishopB, pieces.KnightB, pieces.RookB,
            pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB,
            "", "", "", "", "", "", "", "",
            "", "", "", "", "", "", "", "",
            "", "", "", "", "", "", "", "",
            "", "", "", "", "", "", "", "",
            pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, 
            pieces.RookW, pieces.KnightW, pieces.BishopW, pieces.QueenW, pieces.KingW, pieces.BishopW, pieces.KnightW, pieces.RookW,
	    ],
        solution: ['', ''] // not implemented yet
    }

    const test = {
        position: [
            [pieces.RookB, pieces.KnightB, pieces.BishopB, pieces.QueenB, pieces.KingB, pieces.BishopB, pieces.KnightB, pieces.RookB,],
            [pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB,],
            ["", "", "", "", "", "", "", "",],
            ["", "", "", "", "", "", "", "",],
            ["", "", "", "", "", "", "", "",],
            [pieces.RookW, "", "", "", "", "", "", "",],
            [pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW,],
            ["", pieces.KnightW, pieces.BishopW, pieces.QueenW, pieces.KingW, pieces.BishopW, pieces.KnightW, pieces.RookW,],
	    ],
        solution: ['', ''] // not implemented yet
    }

    const EnPassent = {
        position: convert("r1bqkbnr/ppppp1pp/2n5/4Pp2/8/8/PPPP1PPP/RNBQKBNR"),
        solution: ['e5', 'f6'] // not implemented yet
    }

    return {
        EnPassent,
        test,
        starting,
    }
}