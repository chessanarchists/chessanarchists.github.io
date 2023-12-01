const redditPosts = ref([]);

export function useReddit() {
	async function getPosts() {
		const response = await fetch("https://www.reddit.com/r/anarchychess/top.json?limit=10&t=day", {mode: 'cors'});
		let data = await response.json();
		data = data.data.children.map((post) => post.data);
		let posts = [];
		for (let [i, post] of data.entries()) {
			if (!(post.preview) || post.over_18 || i >= 3) continue

			let img_url = post.preview.images[0].resolutions.filter((obj) => obj.width < 1000).at(-1).url
			const img_node = document.createTextNode(img_url);
			const image = img_node.nodeValue.replaceAll('amp;', '')

			posts.push(
				{
					title: post.title,
					score: post.score,
					image: image,
					url: post.permalink
				}
			)
		}
		return posts
	}

	return {
		getPosts,
	};
}
