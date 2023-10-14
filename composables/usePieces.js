export function usePieces() {
	const pieces = {
		PawnW: {
			name: "chess-pawn",
			color: "text-white",
		},
		RookW: {
			name: "chess-rook",
			color: "text-white",
		},
		KnightW: {
			name: "chess-knight",
			color: "text-white",
		},
		BishopW: {
			name: "chess-bishop",
			color: "text-white",
		},
		KingW: {
			name: "chess-king",
			color: "text-white",
		},
		QueenW: {
			name: "chess-queen",
			color: "text-white",
		},

		PawnB: {
			name: "chess-pawn",
			color: "text-black",
		},
		RookB: {
			name: "chess-rook",
			color: "text-black",
		},
		KnightB: {
			name: "chess-knight",
			color: "text-black",
		},
		BishopB: {
			name: "chess-bishop",
			color: "text-black",
		},
		KingB: {
			name: "chess-king",
			color: "text-black",
		},
		QueenB: {
			name: "chess-queen",
			color: "text-black",
		},
	};
	return {
		pieces,
	};
}
