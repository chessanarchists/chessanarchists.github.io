const redditPosts = ref([]);

export function useReddit() {
	async function getPosts() {
		try {
			const response = await fetch("https://www.reddit.com/r/anarchychess/top.json?limit=3&t=week");
			const data = await response.json();
			redditPosts.value = data.data.children.map((post) => post.data);
		} catch (error) {
			console.error("Error fetching Reddit data", error);
		}
	}

	onMounted(() => {
		getPosts();
	});

	return {
		redditPosts,
	};
}
