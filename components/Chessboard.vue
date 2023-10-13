<template>
	<div>
		<div id="chessboard" v-if="pieces">
			<div class="square" v-for="(piece, i) in startingPosition" :class="{ 'bg-green-700': row(i), 'bg-red-400': !row(i) }">
                <div class="flex items-center justify-center h-full">
                    <font-awesome-icon v-if="piece" :icon="icon(piece)" :class="piece.color" />
                </div>
            </div>
		</div>
	</div>
</template>

<script setup>
    const { pieces } = usePieces()

	const startingPosition = [
        pieces.RookB, pieces.KnightB, pieces.BishopB, pieces.QueenB, pieces.KingB, pieces.BishopB, pieces.KnightB, pieces.RookB,
		pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB, pieces.PawnB,
		"", "", "", "", "", "", "", "",
		"", "", "", "", "", "", "", "",
		"", "", "", "", "", "", "", "",
		"", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
		pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW, pieces.PawnW,
		pieces.RookW, pieces.KnightW, pieces.BishopW, pieces.QueenW, pieces.KingW, pieces.BishopW, pieces.KnightW, pieces.RookW,
	];

    const icon = (piece) => {
        return ['far', piece.name];
    };

    const row = (index) => {
        if ((Math.floor( (63 - index) / 8 ) + 1) % 2 === 0) {
            return index % 2 === 0
        }
        else return  index % 2 !== 0
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
