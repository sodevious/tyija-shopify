const state = {
  saved: false
}

const mutations = {
    TOGGLE_SAVE (state) {
      state.saved = !state.saved
    },
  }
  
export default {
  namespaced: true,
  state,
  mutations
}