/**
 * state
 */
 const state = {
    activeBlog: ''
  }
  
  /**
   * getters
   */
  const getters = {}
  
  /**
   * mutations
   */
  const mutations = {
    SET_BLOG (state, blog) {
      state.activeBlog = blog
    },
  }
  
  /**
   * actions
   */
  const actions = {
    setBlog ({ commit }, blog) {
      commit('SET_BLOG', blog)
    },

  }
  
  /**
   * export
   */
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }