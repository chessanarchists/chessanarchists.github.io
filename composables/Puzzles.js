const { convert } = useFEN();

export function usePuzzles() {
    const puzzles = [
        /* {
            position: convert("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"),
            solution: ["e1", "e2"],
        }, */
        {
            position: convert("r1bqkbnr/ppppp1pp/2n5/4Pp2/8/8/PPPP1PPP/RNBQKBNR"),
            solution: ["e5", "f6"],
        },
        {
            position: convert("rnbqkbnr/1p1p1ppp/8/1Pp1p2Q/p1B1P3/8/P1PP1PPP/RNB1K1NR"),
            solution: ["b5", "c6"]
        },
    ]

	return {
		puzzles,
	};
}
