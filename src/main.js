import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import setAuthHeader from './components/utilities/setAuthHeader'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// import store from './store'
library.add(fas)
if(localStorage.token){
    setAuthHeader(localStorage.token)
} else {
    setAuthHeader(false)
}

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.mount('#app')
