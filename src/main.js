/**
 * imports
 */
import { createApp } from 'vue'
import { createStore } from 'vuex'
import { useSanityClient } from 'vue-sanity'
import anime from 'animejs'

// import VueCarousel from 'vue-carousel';

import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import 'vue3-carousel/dist/carousel.css';


/**
 * STYLES
 */

import './css/main.css'


/**
 * VUEX
 * auto-import all modules and prepare shared store
 */

const vuexModules = require.context('./vue/store/', true, /\.js$/)
const modules = {}

vuexModules.keys().forEach(key => {
  const name = key.replace(/\.(\/|js)/g, '').replace(/\s/g, '-')
  modules[name] = vuexModules(key).default
})

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules
})

/**
 * CREATE VUE INSTANCE
 */

const createVueApp = () => {
  const app = createApp({
    setup() {
      useSanityClient(
        {
          projectId: 'bh42io6v',
          dataset: 'production',
          useCdn: process.env.NODE_ENV === 'production',
        },
        true
      )
    }
  })

  /**
   * COMPONENTS
   * auto-import all vue components
   */
  const vueComponents = require.context('./vue/components/', true, /\.(vue|js)$/)

  vueComponents.keys().forEach(key => {
    const component = vueComponents(key).default

    // if a component has a name defined use the name, else use the path as the component name
    const name = component.name
      ? component.name
      : key.replace(/\.(\/|vue|js)/g, '').replace(/(\/|-|_|\s)\w/g, (match) => match.slice(1).toUpperCase())

    app.component(name, component)
  })

  /**
   * PLUGINS
   * extend with additional features
   */
  app.use(store)
  // app.component(VueCarousel)

  // Enable JS in markup
  document.documentElement.classList.remove('no-js');

  return app
}

/**
 * MOUNT VUE
 * create and mount vue instance(s)
*/

const vueElements = document.querySelectorAll('[vue]')
if (vueElements) vueElements.forEach(el => createVueApp().mount(el))


/**
 * SHOPIFY SECTIONS
 * 
 * 1. properly render vue components on user insert in the theme editor
 * 2. reload the current page to rerender async inserted sections with vue components
 *
 * add the 'vue' keyword to the section's wrapper classes if the section uses any vue functionality e.g.:
 * {% schema %}
 * {
 *   "class": "vue-section"
 * }
 * {% endschema %}
 */
if (Shopify.designMode) {
  document.addEventListener('shopify:section:load', (event) => {
    if (event.target.classList.value.includes('vue')) {
      createVueApp().mount(event.target)
    }
  })
} else if (!Shopify.designMode && process.env.NODE_ENV === 'development') {
  new MutationObserver((mutationsList) => {
    mutationsList.forEach(record => {
      const vue = Array.from(record.addedNodes).find(node => node.classList && node.classList.value.includes('vue'))
      if (vue) window.location.reload()
    })
  }).observe(document.body, {
    childList: true,
    subtree: true
  })
}

/**
 * DEFAULT THEME
 * default theme for site is dark,
 * handle native settings for color theme
*/

if (localStorage.theme === null) {
  localStorage.theme = 'dark';
}

document.documentElement.classList.add(localStorage.theme)


/**
 * BARBA
 * Enable Barba for smooth page transitions
 * https://barba.js.org/ 
*/

const body = document.querySelector('body');

const barbaTransitions = [{
  name: 'default-transition',
  sync: true,

  async leave (data) {
    return await new Promise((resolve) => {
      anime({
        targets: data.current.container,
        opacity: .0,
        duration: 100,
        easing: 'easeInQuart',
      })

      setTimeout(() => {
        resolve()
      }, 300)
    })
  },
  async enter (data) {
    return await new Promise((resolve) => {
      anime({
        targets: data.current.container,
        opacity: .0,
        duration: 100,
        easing: 'easeOutQuart'
      })

      setTimeout(() => {
        resolve()
      }, 300)
    })
  }
}]

// if (body.hasAttribute('data-barba')) {
//   // barba.use(barbaPrefetch);
  
//   barba.init({
//     timeout: 5000,
//     debug: true,
//     cacheIgnore: ['/account/'],
//     prefetchIgnore: '/account/',
//     transitions: barbaTransitions


//     // views: [{
//     //   namespace: 'customers/account',
//     //   beforeEnter() {
//     //     // update the menu based on user navigation
//     //     barba.destroy();
//     //   },
//     // }]
//   });

//   barba.hooks.after((data) => {
//     console.log(data.next.namespace);
//     const vueElements = document.querySelectorAll('.tyija-content [vue]')

//     if (vueElements) {
//       vueElements.forEach(el => createVueApp().mount(el))
//     }
//   });

//   // console.log(barba.cache)
// }