<!-- This code handles the chessboard and the logic for puzzles -->

<template>
	<div class="flex flex-col justify-center items-center space-y-2">
		<div class="border-8 border-red-950">
			<div id="chessboard" v-if="board" class="">
				<div class="square" v-for="(row, colI) in board" :key="colI">
					<div
						class="square"
						v-for="(piece, rowI) in row"
						:key="rowI"
						@click="handleClick(colI, rowI)"
						:class="{ 'bg-secondary': (colI + rowI) % 2 === 0, 'bg-accent': (colI + rowI) % 2 !== 0 }">
						<div
							:key="colI * 8 + rowI"
							class="piece flex items-center justify-center h-full"
							:draggable="!!piece"
							@dragstart="dragStart(colI, rowI, $event)"
							@dragover.prevent="dragOver(colI, rowI)"
							@dragend="dragEnd(colI, rowI)"
							@drop="drop(colI, rowI)">
							<client-only>
								<faIcon
									v-if="piece"
									:icon="icon(piece)"
									:class="[
										{ 'text-white': piece.slice(-1) == 'W' },
										{ 'text-yellow-200 scale-110': activePiece && activePiece.row === rowI && activePiece.col === colI },
									]"
									class="text-4xl" />
							</client-only>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="min-h-[2.5em]">
			<p v-show="status.message" class="p-2 text-white rounded-2xl" :class="{ 'bg-primary': status.correct == false, 'bg-green-500': status.correct == true }">
				{{ status.message }}
			</p>
		</div>
		<div class="min-h-[3em]">
			<button class="bg-accent text-white p-1 rounded-md shadow-xl hover:scale-110 hover:bg-blue-950 transition-all duration-100"
				v-if="status.correct" @click="nextPuzzle">
				Try another one
			</button>
		</div>
		<div class="invisible">
			<input v-model="FEN" type="text" placeholder="build a position from FEN" />
			<button @click="build(FEN)">Build</button>
		</div>
	</div>
</template>

<script setup>
	const confetti = useState("confetti");
	const { puzzles } = usePuzzles();
	const { convert } = useFEN();
	let puzzle = ref(puzzles[Math.floor(Math.random() * puzzles.length)]);

	let status = ref({
		correct: false,
		message: "",
	});
	let FEN = ref("");
	function build(fen) {
		board.value = convert(fen)[0].map((_, colIndex) => convert(fen).map((row) => row[colIndex]));
	}

	const board = ref(puzzle.value.position[0].map((_, colIndex) => puzzle.value.position.map((row) => row[colIndex])));

	const icon = (piece) => {
		return ["far", `chess-${piece.toLowerCase().substring(0, piece.length - 1)}`];
	};

	const draggedPiece = ref(null);

	const from = ref(null);

	function dragStart(colI, rowI, $event) {
		emptyActive();
		if (board.value[colI][rowI]) {
			activePiece.value = { col: colI, row: rowI };
			from.value = { col: colI, row: rowI };
			draggedPiece.value = board.value[colI][rowI];
		}
	}

	function dragOver(colI, rowI) {
		if (draggedPiece.value && !board.value[colI][rowI]) {
		}
	}

	function dragEnd() {
		draggedPiece.value = null;
	}

	function drop(colI, rowI) {
		if (!correctMove(notation(from.value.col, from.value.row), notation(colI, rowI))) {
			status.value.message = "Wrong!";
			status.value.correct = false;
			emptyActive();
			return;
		}
		board.value[colI][rowI] = draggedPiece.value;
		board.value[from.value.col][from.value.row] = "";
		correctGuess();
		emptyActive();
	}

	const files = "abcdefgh";
	function notation(col, row) {
		return `${files[col]}${8 - row}`;
	}

	const activePiece = ref({ col: null, row: null });

	const correctMove = (from, to) => {
		return puzzle.value.solution[0] == from && puzzle.value.solution[1] == to;
	};

	function emptyActive() {
		activePiece.value.col = null;
		activePiece.value.row = null;
		from.value = { col: null, row: null };
		draggedPiece.value = null;
	}

	function handleClick(col, row) {
		if (from.value && from.value.col == col && from.value.row == row) {
			return emptyActive();
		}

		if (activePiece.value.col && draggedPiece.value !== "") {
			drop(col, row);
			emptyActive();
			return;
		}
		draggedPiece.value = board.value[col][row];
		from.value = { col: col, row: row };
		activePiece.value.col = col;
		activePiece.value.row = row;
	}

	function correctGuess() {
		status.value.message = "Holy Hell!";
		status.value.correct = true;
		confetti.value = true;
		setTimeout(() => {
			confetti.value = false;
		}, 5000);
	}

	function nextPuzzle() {
		status.value.message = "";
		status.value.correct = false;
		let newPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
		if (newPuzzle != puzzle.value) {
			return puzzle.value = newPuzzle
		}
		nextPuzzle()
	}
</script>

<style>
	#chessboard {
		background-image: url("~/assets/images/rick.jpg");
		background-size: cover;
		display: flex;
		flex-wrap: wrap;
		width: 320px;
		height: 320px;
	}

	.square {
		width: 40px;
		height: 40px;
	}
</style>
