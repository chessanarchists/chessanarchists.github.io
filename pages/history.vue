<!-- In pages that just display text content like here, we use a 'ContentDoc' tag to grab the markdown text
from the same-named .md file in the 'content' folder. We also import the stylesheet that applies styling to the text -->
<template>
	<div class="">
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
				content: "How did (Anarchy)Chess come to be? Read 'A small history of chess' and discover the amazing backgrounds of the first en passant!",
			},
		],
	});
</script>

<style scoped>
	@import "~/assets/css/content.css";
</style>
