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
		<div class="flex flex-wrap justify-center space-x-[2%] p-3 bg-primary rounded-2xl shadow-xl">
			<div
				v-for="(post, index) in posts"
				:key="index"
				class="w-screen my-2 sm:w-[30%] rounded bg-secondary flex flex-col justify-center scale-[0.9] hover:scale-[1] transition-all shadow-2xl">
			
				<a :href="`https://reddit.com${post.url}`" draggable="false">
					<p>{{ post.title }}</p>
						<img :src="post.image" width="250" height="200" class="m-auto my-auto" draggable="false" loading="eager" :alt="post.title"/>
					<p>{{ post.score }} fake internet points</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
	const posts = useState('reddit-posts', (() => []))
</script>
