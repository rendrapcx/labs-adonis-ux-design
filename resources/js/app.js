import '../css/app.css'
import 'tw-elements';
import Alpine from 'alpinejs'
import modal from './alpine/modal'
import sidebar from './alpine/sidebar'

Alpine.data('sidebar', sidebar)
Alpine.data('showModal', modal)

window.Alpine = Alpine

Alpine.start()
