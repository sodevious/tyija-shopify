const state = {
  isCartOpen: false,
  isFooterOpen: false,
  isMenuOpen: false,
  isProductZoomed: false,
  isSearchOpen: false,
  currentMenuItem: '',
  isWingClicked: false
}

const mutations = {
  TOGGLE_MENU(state) {
    state.isMenuOpen = !state.isMenuOpen
    state.isCartOpen = false
    state.isFooterOpen = false
    state.isSearchOpen = false
  },
  TOGGLE_FOOTER(state) {
    state.isFooterOpen = !state.isFooterOpen
    state.isCartOpen = false
    state.isMenuOpen = false
    state.isSearchOpen = false
  },
  TOGGLE_CART(state) {
    state.isCartOpen = !state.isCartOpen
    state.isFooterOpen = false
    state.isMenuOpen = false
    state.isSearchOpen = false
  },
  TOGGLE_PRODUCT_ZOOM(state) {
    state.isProductZoomed = !state.isProductZoomed
    state.isCartOpen = false
    state.isFooterOpen = false
    state.isSearchOpen = false
  },
  TOGGLE_SEARCH(state) {
    state.isSearchOpen = !state.isSearchOpen
    state.isCartOpen = false
    state.isFooterOpen = false
    state.isMenuOpen = false
  },
  TOGGLE_WING(state) {
    state.isWingClicked = !state.isWingClicked
  },
  SET_CURRENT_LINK(state, payload) {
    state.currentMenuItem = payload
  }
}

const actions = {
  toggleMenu({ commit }) {
    commit('TOGGLE_MENU')
    document.body.classList.toggle('nav-open')
  },
  toggleFooter({ commit }) {
    commit('TOGGLE_FOOTER')
    document.body.classList.toggle('footer-open')
  },
  openZoom({ commit }) {
    commit('TOGGLE_PRODUCT_ZOOM')
    document.body.classList.add('zoomed')
  },
  closeZoom({ commit }) {
    commit('TOGGLE_PRODUCT_ZOOM')
    document.body.classList.remove('zoomed')
  },
  toggleZoom({ commit }) {
    commit('TOGGLE_PRODUCT_ZOOM')
    document.body.classList.toggle('zoomed')
  },
  toggleCart({ commit }) {
    commit('TOGGLE_CART')
    document.body.classList.toggle('cart-open')
  },
  toggleSearch({ commit }) {
    commit('TOGGLE_SEARCH')
  },
  toggleWing({ commit }) {
    commit('TOGGLE_WING')
  },
  setCurrentLink({ commit }, link) {
    commit('SET_CURRENT_LINK', link)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}