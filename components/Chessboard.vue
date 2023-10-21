<!-- This code handles the chessboard and the logic for puzzles -->

<template>
	<div class="flex flex-col justify-center items-center">
		<div id="chessboard" v-if="pieces" class="">
			<div
				class="square"
				v-for="(piece, i) in position"
				@click="handleClick(i, $event)"
				:class="{ 'bg-secondary': row(i), 'bg-accent': !row(i) }">
				<div
					:key="i"
					class="piece flex items-center justify-center h-full"
					:draggable="!!piece"
					@dragstart="dragStart(i, $event)"
					@dragover.prevent="dragOver(i)"
					@dragend="dragEnd(i)"
					@drop="drop(i)">
					<faIcon v-if="piece" :icon="icon(piece)" :class="piece.color, { '!text-yellow-200': activePiece == i }" class="text-4xl" />
				</div>
			</div>
		</div>
		<p class="">{{ status }}</p>
	</div>
</template>

<script setup>
	const { pieces } = usePieces();
	const { EnPassent } = usePuzzles();
	let status = ref("");

	const position = ref([
		pieces.RookB,
		pieces.KnightB,
		pieces.BishopB,
		pieces.QueenB,
		pieces.KingB,
		pieces.BishopB,
		pieces.KnightB,
		pieces.RookB,
		pieces.PawnB,
		pieces.PawnB,
		pieces.PawnB,
		pieces.PawnB,
		pieces.PawnB,
		pieces.PawnB,
		pieces.PawnB,
		pieces.PawnB,
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		pieces.PawnW,
		pieces.PawnW,
		pieces.PawnW,
		pieces.PawnW,
		pieces.PawnW,
		pieces.PawnW,
		pieces.PawnW,
		pieces.PawnW,
		pieces.RookW,
		pieces.KnightW,
		pieces.BishopW,
		pieces.QueenW,
		pieces.KingW,
		pieces.BishopW,
		pieces.KnightW,
		pieces.RookW,
	]);

	position.value = EnPassent.position;

	const icon = (piece) => {
		return ["far", piece.name];
	};

	const row = (index) => {
		if ((Math.floor((63 - index) / 8) + 1) % 2 === 0) {
			return index % 2 === 0;
		} else return index % 2 !== 0;
	};

	const draggedPiece = ref(null);

	const from = ref(null);

	function dragStart(index, $event) {
		if (position.value[index]) {
			activePiece.value = index
			from.value = index;
			draggedPiece.value = position.value[index];
		}
	}

	function dragOver(index) {
		if (draggedPiece.value && !position.value[index]) {
		}
	}

	function dragEnd(index) {
		draggedPiece.value = "";
	}

	function drop(index) {
		if (!(from.value == 30 && index == 21)) {
			status.value = "Wrong Move";
			position.value[from.value] = draggedPiece.value;
		} else if (draggedPiece.value && !position.value[index]) {
			position.value[index] = draggedPiece.value;
			position.value[from.value] = "";
			status.value = "holy hell, congrats!!";
		}
	}

	const activePiece = ref(null);

	function handleClick(i, $event) {
		activePiece.value = i;
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
