<!-- This is the main entry point of the app
Here we have the important meta info about the page, so that search engines like google (en passant) can understand the website. 
There is also the loading spinner, it's styling and the page font. 
The NuxtPage is where the actual page is inserted, depending on that url the user is on, from the pages directory -->

<template>
	<div id="app" class="select-none h-screen overflow-x-hidden bg-background mb-12 md:mb-0" @click="bodyClick">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		
		<div class="-top-4" id="top"></div>
		<div id="loading" v-if="loading" class="fixed inset-0 flex items-center justify-center">
			<div class="animate-spin">
				<img src="~/assets/images/martin.png" width="200" draggable="false"/>
			</div>
		</div>
		<MouseTrailer />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<Settings />
	</div>
</template>

<script setup>
	const nuxtApp = useNuxtApp();
	useHead({
		title: "Anarchy Chess",
		meta: [
			{
				name: "description",
				content: "The official AnarchyChess website - explore current events, our chess history, puzzles and more!",
			},
			{
				name: "google-site-verification",
				content: "QEVUZy0YoL59n3B3BG3mrbMzniGS_20sFS2mKCujjgs",
			},
			{
				charset: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				name: "og:title",
				content: "AnarchyChess website",
			},
			{
				name: "og:description",
				content: "The official AnarchyChess website - explore current events, our chess history, puzzles and more!",
			},
			{
				name: "og:type",
				content: "website",
			},
			{
				name: "og:url",
				content: "https://chessanarchists.org",
			},
			{
				name: "author",
				content: "content by AnarchyChess modteam, website by Jässin Aouani",
			},
			{
				name: "keywords",
				content: "chess, anarchy, anarchychess, en passant, holy hell, official, chessanarchy, chessanarchists, reddit",
			},
		],
	});

	const loading = ref(false);
	nuxtApp.hook("page:start", () => {
		window.scrollTo(0, 0)
		loading.value = true;
		setTimeout(() => {
			loading.value = false;
		}, 700);
	});

	const popup = useState('popup', (() => false))
	const settingsIsOpen = useState("settings", () => false);

	function bodyClick({target}) {
		// close hint popups
		if (!(target.id == "trigger")) {
			popup.value = false
		}
		// close settings on clicking away
		const settings = document.getElementById('settings'),
		settings_btn = document.getElementById('settings-btn')
		if (
			!(['settings', 'settings-btn'].includes(target.id) ||
			settings.contains(target) || settings_btn.contains(target))
			) {
				settingsIsOpen.value = false
		}
	}
</script>

<style>
	
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
