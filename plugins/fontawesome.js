import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faReddit } from '@fortawesome/free-brands-svg-icons'
import { faChessRook, faChessPawn, faChessBishop, faChessKing, faChessKnight, faChessQueen, } from '@fortawesome/free-regular-svg-icons'

library.add(faChessPawn, faChessRook, faChessBishop, faChessKnight, faChessKing, faChessQueen)
library.add(faReddit)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('faIcon', FontAwesomeIcon, {})
})
