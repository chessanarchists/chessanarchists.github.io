<template>
	<div class="flex flex-col min-h-screen">
		<div class="flex-grow">
			<nav class="bg-primary text-white w-screen flex items-center space-x-[1em] py-2">
				<nuxt-link to="/"><img src="~/assets/images/assets/images/Screenshot 2023-10-19 11.49.46 PM.png" width="50" class="ms-5 rounded" /></nuxt-link>
				<div class="flex space-x-5" v-for="(page, index) in pages" :key="index">
					<nuxt-link :to="page.url" class="p-1 bg-[#ED1824] rounded-lg
					hover:bg-indigo-900 hover:animate-bounce">
						{{ page.title }}
					</nuxt-link>
				</div>
			</nav>
			
			<NuxtPage></NuxtPage>
		</div>

		<footer class="bg-primary text-white p-2 text-center">Brought to you by the 
			<nuxt-link to="/about" class="text-accent underline">r/anarchychess modteam</nuxt-link>
		</footer>
	</div>
</template>

<script setup>
	const pages = [
		{
			title: "Puzzles",
			url: "/puzzles",
		},
		{
			title: "Lore",
			url: "/lore",
		},
		{
			title: "History",
			url: "/history",
		},
		{
			title: "Events",
			url: "/events",
		},
	];
</script>
