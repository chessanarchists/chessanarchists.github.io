<!-- This code handles the chessboard and the logic for puzzles -->

<template>
	<div class="flex flex-col justify-center items-center">
		<div id="chessboard" v-if="board">
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
								:class="[{ 'text-white': piece.slice(-1) == 'W' }, { 'text-yellow-200': activePiece && activePiece.row === rowI && activePiece.col === colI }]"
								class="text-4xl" />
						</client-only>
					</div>
				</div>
			</div>
		</div>
		<p class="min-h-[1.5em]">{{ status }}</p>
		<input v-model="FEN" type="text" />
		<button @click="build(FEN)">Build</button>
	</div>
</template>

<script setup>
	const { puzzles } = usePuzzles();
	const { convert } = useFEN();
	let puzzle = puzzles.EnPassent;

	let status = ref("");
	let FEN = ref("");
	function build(fen) {
		board.value = convert(fen)[0].map((_, colIndex) => convert(fen).map((row) => row[colIndex]));
	}

	const board = ref(puzzle.position[0].map((_, colIndex) => puzzle.position.map((row) => row[colIndex])));

	const icon = (piece) => {
		return ["far", `chess-${piece.toLowerCase().substring(0, piece.length - 1)}`];
	};

	const row = (index) => {
		if ((Math.floor((63 - index) / 8) + 1) % 2 === 0) {
			return index % 2 === 0;
		} else return index % 2 !== 0;
	};

	const draggedPiece = ref(null);

	const from = ref(null);

	function dragStart(colI, rowI, $event) {
		if (board.value[colI][rowI]) {
			activePiece.value = { row: colI, col: rowI };
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
			status.value = "Wrong!";
			return (board.value[from.value.col][from.value.row] = draggedPiece.value);
		}
		board.value[colI][rowI] = draggedPiece.value;
		board.value[from.value.col][from.value.row] = null;
		status.value = "Holy Hell!";
	}

	const files = "abcdefgh";
	function notation(col, row) {
		return `${files[col]}${8 - row}`;
	}

	const activePiece = ref({ col: null, row: null });

	const correctMove = (from, to) => {
		return puzzle.solution[0] == from && puzzle.solution[1] == to;
	};

	function handleClick(col, row) {
		activePiece.value.col = col;
		activePiece.value.row = row;
	}
</script>

<style>
	#chessboard {
		background-color: red;
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
