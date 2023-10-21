<!-- This is the main entry point of the app
Here we have the important meta info about the page, so that search engines like google (en passant) can understand the website. 
There is also the loading spinner, it's styling and the page font. 
The NuxtPage is where the actual page is inserted, depending on that url the user is on, from the pages directory -->

<template>
	<div class="h-screen overflow-x-hidden bg-background">
		<title>AnarchyChess</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link href="https://fonts.cdnfonts.com/css/youtube-sans" rel="stylesheet" />

		<div v-if="loading" class="fixed inset-0 flex items-center justify-center">
			<div class="animate-spin">
				<img src="~/assets/images/martin.png" width="200"/>
			</div>
		</div>

		<NuxtLayout>
			<NuxtPage/>
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
	const nuxtApp = useNuxtApp();
	const loading = ref(false);
	nuxtApp.hook("page:start", () => {
		loading.value = true;
		setTimeout(() => {
			loading.value = false;
		}, 700);
	});
</script>

<style>
	body {
		font-family: "YouTube Sans", sans-serif;
		font-family: "YouTube Sans Dark", sans-serif;
		font-display: swap;
	}
	.page-enter-active,
	.page-leave-active {
		transition: all 0.4s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}

	.spinning-container {
		animation: spin 0.1s linear infinite;
		display: inline-block;
	}

	.spinning-image {
		width: 200px;
		height: 200px;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
