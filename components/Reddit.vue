<template>
	<div class="text-center align-middle">
		<div class="py-3">
			<p class="text-2xl">Hot posts from the subreddit</p>
			<a href="https://reddit.com/r/anarchychess" class="underline text-accent">Go to r/anarchychess <faIcon :icon="['fab', 'reddit']" class="text-xl"/></a>
		</div>
		<div class="flex flex-wrap justify-center space-x-[2%] p-3 bg-accent">
			<div v-for="(post, index) in redditPosts.filter(isImagePost).slice(0, 3)" :key="index" class="w-screen my-2 sm:w-[30%] rounded bg-secondary">
				<a :href="`https://reddit.com${post.permalink}`">
					<p>{{ post.title }}</p>
					<img :src="getImageUrl(post)" width="200" class="mx-auto" />
					<p>{{ post.score }} fake internet points</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { redditPosts } = useReddit();

	function isImagePost(post) {
		return post.url.endsWith(".jpg") || post.url.endsWith(".png") || (post.preview && post.preview.images[0].source.url);
	}

	function getImageUrl(post) {
		if (post.url.endsWith(".jpg") || post.url.endsWith(".png")) {
			return post.url;
		} else if (post.preview && post.preview.images[0].source.url) {
			return post.preview.images[0].source.url;
		}
		return "";
	}
</script>
