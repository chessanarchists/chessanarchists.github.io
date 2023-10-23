<!-- In pages that just display text content like here, we use a 'ContentDoc' tag to grab the markdown text
from the same-named .md file in the 'content' folder. We also import the stylesheet that applies styling to the text -->
<template>
	<div class="">
		<nuxt-link to="/" class="text-blue-500">go back</nuxt-link>
		<main>
			<ContentDoc />
		</main>
	</div>
</template>

<style scoped>
	@import "~/assets/css/content.css";
</style>
