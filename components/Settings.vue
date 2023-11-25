<template>
	<div id="settings" :class="{ visible: settings }" class="p-10 text-accent bottom-0 origin-bottom align-bottom">
		<p>Mouse Trailer Horsey</p>
		<div class="relative inline-block w-10 align-middle select-none">
			<input
				type="checkbox"
				id="toggle"
				name="toggle"
				class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-primary border-white border-4 appearance-none cursor-pointer transition-all duration-100 ease-in"
                :class="{ 'translate-x-5 bg-primary': trailer, 'bg-red-200': !trailer }"
				@change="toggleTrailer" />
			<label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer" 
            :class="{'bg-primary': trailer, 'bg-red-200': !trailer}"></label>
		</div>
	</div>
</template>

<script setup>
    import { getData, setData } from 'nuxt-storage/local-storage';

	const settings = useState("settings", () => false);

    const trailer = useState('trailer', (() => true))

    onMounted(() => {
        trailer.value = getData('mouse-trailer') == null ? true : getData('mouse-trailer')
    })

    function toggleTrailer() {
        trailer.value = !trailer.value
        setData('mouse-trailer', trailer.value)
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
