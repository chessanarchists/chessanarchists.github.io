<!-- The main page that the user sees at the root url (chessanarchists.org/) -->
<!-- the 'transition' tag wraps the entire html content, to show a screen transition when clicking on another page -->
<!-- Currently the only content is the Reddit-feed, which is used as a so called 'component'. 
	The code behind the Reddit component can be found in /components/Reddit.vue -->
<template>
	<transition>
		<div class="my-1">
			<div class="flex space-x-2">
				<main class="">
					<ContentDoc />
				</main>
				<div class="flex-1 mt-2 bg-red-300 rounded-lg shadow-md overflow-hidden invisible md:visible">
					<div
						class="h-full w-full overflow-hidden bg-cover"
						style="background-position: 53% 0; background-image: url('https://styles.redditmedia.com/t5_2yvry/styles/bannerBackgroundImage_9u1yjgo4tqba1.jpg');">
					</div>
				</div>
			</div>
			<Reddit />
		</div>
	</transition>
</template>

<style scoped>
	@import "~/assets/css/content.css";
</style>
