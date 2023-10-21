<!-- The puzzles page contains a link to go back, and the Chessboard component that has the board and the puzzle to solve -->
<template>
    <transition>
        <div>
            <p class="text-3xl">Puzzles</p>
            <nuxt-link to="/"  class="text-blue-500">go back</nuxt-link>
            <Chessboard/>
        </div>
    </transition>
</template>
