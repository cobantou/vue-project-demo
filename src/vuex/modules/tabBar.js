import * as types from '../mutation-types'

// initial state
const state = {
  selectedTab: ""
}

// mutations
const mutations = {
  [types.GET_SELECTED_TAB] (state, selected ) {
    state.selectedTab = selected
  },

}

export default {
  state,
  mutations
}
