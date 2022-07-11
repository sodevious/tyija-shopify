import fetchHelper from "../plugins/fetchHelper"

const state = {
  items: [],
  itemCount: 0,
  subtotalPrice: 0,
  currency: ''
}

const getters = {
  formattedPrice (state) {
    return (price) => {
      // update for prices like 14.50
      return String(price / 100) + '.00'
    }
  },
  itemOptionsWithValues (state) {
    return (item) => {
      const { options_with_values } = item

      if (options_with_values.length === 1) {
        if (options_with_values[0].name === 'Title' && options_with_values[0].value === 'Default Title') {
          return []
        }
      }

      return options_with_values
    }
  }
}

const mutations = {
  SET_ITEMS (state, items) {
    state.items = items
  },
  SET_ITEM_COUNT (state, itemCount) {
    state.itemCount = itemCount
  },
  SET_SUBTOTAL_PRICE (state, price) {
    state.subtotalPrice = price
  },
  SET_CURRENCY (state, currency) {
    state.currency = currency
  }
}

const actions = {
  async loadCart ({ commit }) {
    const shopifyCartData = await fetchHelper(`${window.Shopify.routes.root}cart.js`)

    commit('SET_ITEMS', shopifyCartData.items)
    commit('SET_ITEM_COUNT', shopifyCartData.item_count)
    commit('SET_SUBTOTAL_PRICE', shopifyCartData.items_subtotal_price)
    commit('SET_CURRENCY', shopifyCartData.currency)
  },
  async addItem ({ dispatch }, itemData) {
    try {
      // add new item to cart
      await fetchHelper(`${window.Shopify.routes.root}cart/add.js`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ items: [itemData] })
      })
      // load the whole updated cart data
      await dispatch('loadCart')
    } catch (e) {
      alert('Oops.. something went wrong. Please try again later.')
      console.log(e)
    }
  },
  async updateItem ({ dispatch }, itemData) {
    try {
      // update cart item
      await fetchHelper(`${window.Shopify.routes.root}cart/update.js`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ updates: itemData })
      })
      // load the whole updated cart data
      await dispatch('loadCart')
    } catch (e) {
      alert('Oops.. something went wrong while romiving from cart. Please try again later.')
      console.log(e)
    }
  },
  goToCheckout () {
    window.location.pathname = '/checkout'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}