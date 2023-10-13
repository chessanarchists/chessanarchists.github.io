<template>
    <div>
      <nav class="bg-primary w-screen flex items-center space-x-[1em] p-2">
        <nuxt-link to="/"><img src="~/assets/images/horsey.png" width="50" class="ms-5 rounded"></nuxt-link>
        <div class="flex space-x-5" v-for="(page, index) in pages" :key="index">
          <nuxt-link :to="page.url" class="border-none border-secondary rounded p-1 bg-accent border-spacing-1 shadow-black shadow-sm">{{ page.title }}</nuxt-link>
        </div>
      </nav>
    </div>
  </template>

<script setup>
  const pages = [
  {
    title: "Puzzles",
    url: "/puzzles"
  },
  {
    title: "Lore",
    url: "/lore"
  },
  {
    title: "History",
    url: "/history"
  },
  {
    title: "Events",
    url: "/events"
  },
];

</script>
