export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        document.getElementById('top')?.scrollIntoView()
    }
})