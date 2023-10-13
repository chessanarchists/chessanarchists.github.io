<template>
	<div>
		<div id="chessboard" v-if="pieces">
			<div class="square" v-for="(piece, i) in position" :class="{ 'bg-green-700': row(i), 'bg-red-400': !row(i) }">
				<div
					:key="i"
					class="piece flex items-center justify-center h-full"
					:draggable="!!piece"
					@dragstart="dragStart(i)"
					@dragover.prevent ="dragOver(i)"
					@dragend="dragEnd(i)"
					@drop="drop(i)">
					<font-awesome-icon v-if="piece" :icon="icon(piece)" :class="piece.color" class="text-4xl"/>
				</div>
			</div>
		</div>
		<p class="text-black">{{ status }}</p>
	</div>
</template>

<script setup>
	const { pieces } = usePieces();
	const { EnPassent } = usePuzzles()
	let status = ref("")

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

	position.value = EnPassent.position	

	const icon = (piece) => {
		return ["far", piece.name];
	};

	const row = (index) => {
		if ((Math.floor((63 - index) / 8) + 1) % 2 === 0) {
			return index % 2 === 0;
		} else return index % 2 !== 0;
	};

	const draggedPiece = ref(null);

	const from = ref(null)

	function dragStart(index) {
		if (position.value[index]) {
			from.value = index
			draggedPiece.value = position.value[index];
			position.value[index] = "";
		}
	}

	function dragOver(index) {
		if (draggedPiece.value && !position.value[index]) {
		}
	}

	function dragEnd(index) {
		draggedPiece.value = null;
	}

	function drop(index) {
		if (
			!(from.value == 30 &&
			index == 21)
		) {
			status.value = "Wrong Move"
			position.value[from.value] = draggedPiece.value
			return
		}
		if (draggedPiece.value && !position.value[index]) {
			position.value[index] = draggedPiece.value;
			draggedPiece.value = null;
			status.value = "holy hell, congrats!!"
		}
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
