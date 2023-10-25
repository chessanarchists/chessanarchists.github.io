# The Official AnarchyChess Website

here we create the first official website for the r/anarchychess community

we have pages for our lore, history and custom made puzzles for you!

https://chessanarchists.org


# How the code works
The pages or "routes" that the website has, correspond to the .vue files in the 'pages' folder.
So the puzzles.vue file is what the user sees when they go to chessanarchists.org/puzzles

Every .vue file has three slots:
a \<template>\</template>, that contains the html that the user sees. Here we put content and images.

the \<script setup>\</script> contains the code behind the webpage. Variables here can be used in the html, for example to display an element only when a condition is met. They are also reactive, so when the variable changes, the html shows that change immediately, without having to write long imperative expressions like:
```document.getElementById('text-container').innerHTML = 'my new text content'```

the \<style scoped>\</style> tag contains the styles for the html, that can be applied to elements depending on their tag name, id or class.