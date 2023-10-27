const { convert } = useFEN();

export function usePuzzles() {
    const puzzles = {
        starting: {
            position: convert("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"),
            solution: ["e1", "e2"],
        },
        EnPassent: {
            position: convert("r1bqkbnr/ppppp1pp/2n5/4Pp2/8/8/PPPP1PPP/RNBQKBNR"),
            solution: ["e5", "f6"],
        }
    }

	return {
		puzzles,
	};
}
