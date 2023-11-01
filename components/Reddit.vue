<!-- This component shows the top 3 reddit posts from the subreddit. We use a composable (reusable piece of code)
from the /composables/useReddit.js file. It provides us with the reddit posts and then we use that data to display them here. -->
<template>
	<div class="text-center align-middle">
		<div class="py-3">
			<p class="text-2xl">Hot posts from the subreddit</p>
			<a href="https://reddit.com/r/anarchychess" class="underline text-accent">
				Go to r/anarchychess
				<client-only><faIcon :icon="['fab', 'reddit']" class="text-xl" /></client-only>
			</a>
		</div>
		<div class="flex flex-wrap justify-center space-x-[2%] p-3 bg-primary rounded-2xl shadow-2xl mx-2">
			<div
				v-for="(post, index) in redditPosts.filter(isImagePost).slice(0, 3)"
				:key="index"
				class="w-screen my-2 sm:w-[30%] rounded bg-secondary flex flex-col justify-center scale-[0.9] hover:scale-[1] transition-all">
				<a :href="`https://reddit.com${post.permalink}`">
					<p>{{ post.title }}</p>
					<img :src="getImageUrl(post)" width="250" height="200" class="m-auto my-auto" />
					<p>{{ post.score }} fake internet points</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
	/* This effectively says "grab the redditPosts from the useReddit.js file" */
	const { redditPosts } = useReddit();

	function isImagePost(post) {
		return post.url.endsWith(".jpg") || post.url.endsWith(".png") || post.url.endsWith(".webp");
	}

	function getImageUrl(post) {
		if (isImagePost(post)) {
			return post.url;
		} else if (post.preview && post.preview.images[0].source.url) {
			return post.preview.images[0].source.url;
		}
		return "";
	}
</script>
