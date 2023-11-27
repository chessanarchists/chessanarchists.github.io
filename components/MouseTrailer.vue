<template>
	<img src="/images/horsey-transparent.webp" id="pointer" @click="handleClick" draggable="false" />
</template>

<script setup>
	const pointer = ref(null);
	const angry = ref(false);
	const on = useState("trailer", () => true);
	onMounted(() => {
		pointer.value = document.getElementById("pointer");

		function animatePointer(e, interacting) {
			if (!on.value) {
				return pointer.value.animate(
					{
						transform: "translate(-100px, -100px)",
					},
					{
						duration: 500,
						fill: "forwards",
					}
				);
			}
			const x = e.clientX; /*  - pointer.value.offsetWidth / 2 */
			const y = e.clientY; /*  - pointer.value.offsetHeight / 2 */

			const keyframes = {
				transform: `translate(${x}px, ${y}px)`,
			};
			pointer.value.animate(keyframes, {
				duration: angry.value ? 600 : 1700,
				fill: "forwards",
			});
		}

		window.onmousemove = (e) => {
			const interactable = e.target.closest(".interact"),
				interacting = interactable !== null;
			animatePointer(e, interacting);
		};
		setInterval(() => {
			if (stacks.value > 0) {
				stacks.value--;
			} else {
				angry.value = false;
				swapHorsey();
			}
		}, 3000);
	});

	function swapHorsey() {
		pointer.value.src = angry.value ? "/images/horsey-transparent-flames.webp" : "/images/horsey-transparent.webp";
		pointer.value.style.width = angry.value ? "65px" : "40px";
		pointer.value.style.height = angry.value ? "65px" : "40px";
	}

	const stacks = ref(0);
	function handleClick() {
		if (stacks.value < 1) {
			stacks.value++;
		} else {
			angry.value = true;
			swapHorsey();
		}
	}
</script>

<style lang="postcss">
	body:hover #pointer {
		opacity: 1;
	}
	#pointer {
		left: 0;
		top: 0;
		width: 40px;
		height: 40px;

		z-index: 9999;
		position: fixed;
		pointer-events: auto;

		opacity: 0;
		transition: opacity 500ms ease;

		border-radius: 30px;
		background-image: "~/assets/images/horsey.png";
	}
</style>
