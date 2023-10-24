export function useFEN() {
    function convert(fen) {
        const { pieces } = usePieces();
        const rows = fen.split(' ')[0].split('/');
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
          for (let char of row) {
            if (/\d/.test(char)) {
              const emptySquares = parseInt(char, 10);
              for (let i = 0; i < emptySquares; i++) {
                positionArray.push("");
              }
            } else {
              const isUpperCase = char === char.toUpperCase(); // Check if the character is uppercase
              const pieceKey = pieceMap[char.toLowerCase()] + (isUpperCase ? 'W' : 'B');
              const piece = pieces[pieceKey];
              positionArray.push(piece);
            }
          }
        }
      
        return positionArray;
      }

    return {
        convert,
    }
}