import '../css/app.css'
import 'tw-elements';
import Alpine from 'alpinejs'
import modal from './alpine/modal'

Alpine.data('showModal', modal)

window.Alpine = Alpine

Alpine.start()
