const { pieces } = usePieces()

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

    const EnPassent = {
        position: [
            pieces.RookB, pieces.KnightB, pieces.BishopB, pieces.QueenB, pieces.KingB, pieces.BishopB, pieces.KnightB, pieces.RookB,
            pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, "", pieces.PawnB, pieces.PawnB,
            "", "", "", "", "", "", "", "",
            "", "", "", "", "", pieces.PawnB, pieces.PawnW, "",
            "", "", "", "", "", "", "", "",
            "", "", pieces.KnightW, "", "", "", "", "",
            pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, "", pieces.PawnW, 
            pieces.RookW, "", pieces.BishopW, pieces.QueenW, pieces.KingW, pieces.BishopW, pieces.KnightW, pieces.RookW,
	    ],
        solution: ['', ''] // not implemented yet
    }

    return {
        EnPassent,
    }
}