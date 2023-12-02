export function useChessDotCm() {
	const status = useState('passant-count-status', (() => ""))

	async function countEnPassant(user, months) {
		status.value = "Starting..."
		let passantCount = 0;
		for (let game of await fetchGames(user, months)) {
			for (let [i, move] of game.pgn.entries()) {
				const regex = new RegExp(`^\\d+\\.{${game.side == "white" ? 3 : 1}}\\s(?!.*x)[a-z45]+$`);

				if (move.match(regex)) {
					let rank = move.at(-1);
					let file = move.at(-2);

					let landingRank = game.side == "white" ? Number(rank) + 1 : Number(rank) - 1;
					const nexRex = new RegExp(`^[^\\s]+ [a-z]*x${file}*${landingRank}$`);
					const nextMove = game.pgn[i + 1];

					if (nextMove && nextMove.match(nexRex)) {
						passantCount++;
					}
				}
			}
		}
		status.value = ""
		return passantCount;
	}

	async function fetchGames(user, months) {
		let allGames = [];
		await fetchArchives(user).then(async (archives) => {
			status.value = "Fetching and counting games...."

			for (let [i, archive] of archives.entries()) {
				if (months && months == 1 + i) return;

				for (let game of await accumulateGames(archive, user)) {
					allGames.push(game);
				}
			}
		});
		return allGames;
	}

	async function fetchArchives(user) {
		const response = await fetch(`https://api.chess.com/pub/player/${user}/games/archives`);

		if (!response.ok) {
			console.error("idk didn't work");
		}

		const data = await response.json();

		status.value = `Found ${data["archives"].lenght} archives`
		return data["archives"];
	}

	async function accumulateGames(url, user) {
		let allGames = [];
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`error: ${response.status}`);
		}

		const data = await response.json();

		for (let game of data["games"]) {
			let side = game["white"]["username"].toLowerCase() == user ? "white" : "black";
			allGames.push({
				pgn: getGameMoves(game["pgn"]),
				side: side,
			});
		}

		return allGames;
	}

	function getGameMoves(str) {
		const regex = /(\d{1,2}\.{1,3} .+?) \{/gm;
		let m;
		let gameMoves = [];

		while ((m = regex.exec(str)) !== null) {
			// This is necessary to avoid infinite loops with zero-width matches
			if (m.index === regex.lastIndex) {
				regex.lastIndex++;
			}
			// The result can be accessed through the `m`-variable.
			m.forEach((match, groupIndex) => {
				if (groupIndex == 1) {
					gameMoves.push(match);
				}
			});
		}
		return gameMoves;
	}

	return {
		countEnPassant,
		status
	};
}
