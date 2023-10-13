<template>
	<div class="text-center align-middle">
		<p class="text-2xl py-3">Hot posts from the subreddit</p>
		<div class="flex flex-wrap justify-center space-x-[2%] bg-secondary p-3">
			<div v-for="post in redditPosts" :key="post.id" class="w-screen my-2 sm:w-[30%] rounded bg-accent">
				<a :href="`https://reddit.com${post.permalink}`">
					<p>{{ post.title }}</p>
					<img v-if="isImagePost(post)" :src="getImageUrl(post)" width="200" class="mx-auto" />
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
