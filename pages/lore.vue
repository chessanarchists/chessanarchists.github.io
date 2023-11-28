<!-- In pages that just display text content like here, we use a 'ContentDoc' tag to grab the markdown text
from the same-named .md file in the 'content' folder. We also import the stylesheet that applies styling to the text -->
<template>
	<div class="mt-2">
		<div class="ms-4">
			<div class="flex flex-wrap">
				<span>
					<p>Count En Passants played</p>
					<input type="text" placeholder="Enter chess.c*m username" v-model="user" class="rounded-lg py-2 bg-red-200" />
				</span>
				<span>
					<p>within the last ... months</p>
					<div class="flex bg-red-500 rounded-full overflow-hidden">
						<button 
						class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 bg-clip-border bg-origin-border"
						:class="{ 'bg-red-800': monthRange === option }"
						@click="monthRange = option"
						v-for="option in [2, 6, 12, 24]">
						{{ option }}
						</button>
					</div>
				</span>
			</div>
			<button @click="countPassants">Count</button>
			<p>Count: {{ count }}</p>
		</div>

		<main>
			<ContentDoc />
		</main>
		
	</div>
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
				content: "What's en passant? Holy Hell! - Here you can read up on all the relevant AnarchyChess lore!",
			},
		],
	});

	const { countEnPassant } = useChessDotCm()
	
	const monthRange = ref(2)
	const user = ref("")
	const count = ref()

	function countPassants() {
		count.value = countEnPassant(user.value, count.value)
	}
</script>

<style scoped>
	@import "~/assets/css/content.css";
</style>
