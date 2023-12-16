<!-- In pages that just display text content like here, we use a 'ContentDoc' tag to grab the markdown text
	from the same-named .md file in the 'content' folder. We also import the stylesheet that applies styling to the text -->
<template>
	<div class="mt-2">

		<div class="ms-1 flex flex-wrap space-y-5 space-x-4 mb-5">

			<div class="lg:w-1/4 bg-red-200 dark:bg-primary p-2 rounded-3xl">
				<div class="flex flex-col space-y-5 mb-3">
					<div class="mr-2 space-y-5">
						<p class="text-2xl">Count En Passants played</p>
						<p class="bg-red-300 dark:bg-[#ba3535] p-4 rounded-3xl text-center">{{ count || status || "Result will appear here" }}</p>
						<input type="text" placeholder="Enter chess.c*m username" v-model="user" class="rounded-lg py-2 bg-red-300 dark:bg-[#ba3535] text-center w-full" />
						
						<span v-if="popup" class="absolute z-50 bg-accent text-white px-2 py-1 rounded-xl -translate-x-[185px] translate-y-12">enter your username</span>
					</div>
					<span class="items-center text-center">
						<p>within the last ... months</p>
						<div class="flex bg-red-500 rounded-full overflow-hidden justify-center">
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
				<button @click="countPassants" id="trigger" class="bg-accent text-white rounded-lg px-2 py-1 text-center">Count</button>
			</div>
			
			<div class="space-y-5">
				<p class="text-center text-lg">Other chess.c*m players' en passant scores:</p>
				<div class="flex justify-center space-x-8">
					<span class="bg-indigo-400 text-white p-1 rounded-xl" v-for="stats in ['GothamChess: 238', 'Magnus Carlsen: 68', 'Hikaru: 117']">
						{{ stats }}
					</span>
				</div>
			</div>
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

	const { countEnPassant } = useChessDotCm();
	const status = useState("passant-count-status");
	const popup = useState("popup", () => false);

	const monthRange = ref(2);
	const user = ref("");
	const count = ref("");

	function countPassants() {
		count.value = "";
		if (!user.value) return (popup.value = true);
		countEnPassant(user.value.toLowerCase(), monthRange.value).then(
			(passants) => (count.value = `Result: ${passants} en passants played in the last ${monthRange.value} months`)
		);
	}
</script>

<style scoped>
	@import "~/assets/css/content.css";
</style>
