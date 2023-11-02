<!-- The puzzles page contains a link to go back, and the Chessboard component that has the board and the puzzle to solve -->
<template>
	<transition>
		<div>
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
		],
	});
</script>

<style scoped>
	@import "~/assets/css/content.css";
</style>
