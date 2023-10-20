
<template>
    <div class="about-card">
        <div class="card-title">
            <img src=""
        <p class="text-3xl">About page</p>
        <nuxt-link to="/"  class="text-blue-500">go back</nuxt-link>
        <main>
            <ContentDoc/>
        </main>
    </div>
</template>

#^jassin did
#trying to make cool about

import Vue from 'vue'
import router from 'vue-router'
import about from './views/about.vue'


vue.use(router)

export default new router({
    mode: 'history',
    base: process.env.Base_URL,
    routes: [
        {
            path: '/',
            name: 'about',
            component: About
        }
    ]
})












<template>
    <div class="">
        <p class="text-3xl">About page</p>
        <nuxt-link to="/"  class="text-blue-500">go back</nuxt-link>
        <main>
            <ContentDoc/>
        </main>
    </div>
</template>
