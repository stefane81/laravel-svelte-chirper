import '../css/app.pcss';
import './bootstrap';


import { createInertiaApp } from '@inertiajs/svelte'
import { mount } from 'svelte'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.svelte', { eager: true })
    return pages[`./Pages/${name}.svelte`]
  },
  setup({ el, App, props }) {
    mount(App, { target: el, props })
  },
})