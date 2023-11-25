<template>
    <div id="settings" :class="{'visible': settings}">
        hi
    </div>
</template>

<script setup>
    const settings = useState('settings', (() => false))
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
        top: 50% !important;
    }
</style>