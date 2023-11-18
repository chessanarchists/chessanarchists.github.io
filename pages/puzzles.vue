<!-- The puzzles page contains a link to go back, and the Chessboard component that has the board and the puzzle to solve -->
<template>
	<transition>
		<div>
			<Confetti/>
			<main>
				<ContentDoc />
			</main>
			<Chessboard />
			<Clicker />
		</div>
	</transition>
</template>

<script setup>
	useHead({
		meta: [
			{
				name: "robots",
				content: "index, follow, noarchive",
			},
			{
				name: "description",
				content: "Here we handcraft the most difficult chess puzzles you have ever seen, unsolvable to the average mind. Try your luck! Done with the puzzles? Try out the clicker game!",
			},
		],
	});
</script>

<style scoped>
	@import "~/assets/css/content.css";
</style>
