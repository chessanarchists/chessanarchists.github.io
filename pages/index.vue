<!-- The main page that the user sees at the root url (chessanarchists.org/) -->
<!-- the 'transition' tag wraps the entire html content, to show a screen transition when clicking on another page -->
<!-- Currently the only content is the Reddit-feed, which is used as a so called 'component'. 
	The code behind the Reddit component can be found in /components/Reddit.vue -->
<template>
	<transition>
		<div>
			<Reddit/>
		</div>
	</transition>
</template>


