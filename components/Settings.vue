<template>
	<div id="settings" :class="{ visible: settings }" class="p-10 text-accent bottom-0 origin-bottom align-bottom space-y-5">
		<h1 class="text-3xl mb-2">Settings</h1>
		<div>
			<p>Mouse Trailer Horsey</p>
			<div class="relative inline-block w-10 align-middle select-none">
				<input
					type="checkbox"
					id="toggle"
					name="toggle"
					class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-primary border-white border-4 appearance-none cursor-pointer transition-all duration-100 ease-in"
					:class="{ 'translate-x-5 bg-primary': trailer, 'bg-red-200': !trailer }"
					@change="toggleTrailer" />
				<label
					for="toggle"
					class="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer"
					:class="{ 'bg-primary': trailer, 'bg-red-200': !trailer }"></label>
			</div>
		</div>
		<div>
			<p>Darkmode</p>
			<div class="flex rounded-full overflow-hidden">
				<button
					class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 bg-clip-border bg-origin-border"
					:class="{ 'bg-red-800': darkmode == option }"
					@click="changeDarkModed(option)"
					v-for="option in ['light', 'dark', 'system']">
					{{ option }}
				</button>
			</div>
		</div>
		<div>
			<button @click="clearSettings()" class="bg-accent text-white p-1 rounded-md hover:bg-indigo-950 hover:scale-105">Reset preferences to default</button>
		</div>
	</div>
</template>

<script setup>
	const settings = useState("settings", () => false);

	const trailer = useState("trailer", () => true);

	function clearSettings() {
		localStorage.clear();
		settings.value = false;
        changeDarkModed('system')
	}

	onMounted(() => {
		trailer.value = localStorage.getItem("mouse-trailer") == null ? true : JSON.parse(localStorage.getItem("mouse-trailer"));
	});

	function toggleTrailer() {
		trailer.value = !trailer.value;
		localStorage.setItem("mouse-trailer", trailer.value);
	}

	let darkmode = useState("darkmode");
	function changeDarkModed(option) {
		if (option == "system") {
			darkmode.value = "system";
			localStorage.removeItem("darkmode");
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				return document.getElementById("app").classList.add("dark");
			}
			return document.getElementById("app").classList.remove("dark");
		}
		if (option == "dark") {
			darkmode.value = "dark";
			localStorage.setItem("darkmode", "true");
			return document.getElementById("app").classList.add("dark");
		}
		darkmode.value = "light";
		localStorage.setItem("darkmode", "false");
		return document.getElementById("app").classList.remove("dark");
	}
</script>

<style lang="postcss" scoped>
	#settings {
		position: fixed;
		z-index: 5;
		top: 200%;
		left: 50%;
		transform: translate(-50%, -40%);

		height: 95%;
		width: 100%;
		background-color: #f3a5a5;
		border-radius: 30px;

		transition: top 0.5s ease-out;
	}
	.visible {
		top: 70% !important;
	}
</style>
