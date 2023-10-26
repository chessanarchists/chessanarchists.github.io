export function useFEN() {
	function convert(fen) {
		const { pieces } = usePieces();
		const rows = fen.split(" ")[0].split("/");
		const positionArray = [];
	
		const pieceMap = {
			p: "Pawn",
			r: "Rook",
			n: "Knight",
			b: "Bishop",
			q: "Queen",
			k: "King",
		};
	
		for (let row of rows) {
			const rowArray = [];
			for (let char of row) {
				if (/\d/.test(char)) {
					const emptySquares = parseInt(char, 10);
					for (let i = 0; i < emptySquares; i++) {
						rowArray.push(""); // Add empty squares to the row
					}
				} else {
					let isUpperCase = char === char.toUpperCase();
					let pieceKey = pieceMap[char.toLowerCase()] + (isUpperCase ? "W" : "B");
					rowArray.push(pieces[pieceKey]);
				}
			}
			positionArray.push(rowArray); // Add the row to the 2D array
		}
	
		return positionArray;
	}
	
	

	return {
		convert,
	};
}
