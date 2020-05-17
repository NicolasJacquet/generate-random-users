import axios from 'axios'

const baseApiUrl = 'https://randomuser.me/api/'

export const state = () => ({
  data: [],
  error: false,
  isLoading: false
})

export const mutations = {
  SET_RESULTS: (state, data) => {
    state.data = data.results
    state.error = data.error
    state.isLoading = data.isLoading
  },
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading
  }
}

export const actions = {
  loadResults: async ({ commit }, payload) => {
    commit('SET_LOADING', true)
    try {
      const requestResults = await axios.get(
        `${baseApiUrl}?gender=${payload.gender}&results=${payload.number}`
      )
      commit('SET_RESULTS', {
        results: requestResults.data.results,
        error: false,
        isLoading: false
      })
    } catch (e) {
      window.console.error(e)
      commit('SET_RESULTS', {
        results: [],
        error: true,
        isLoading: false
      })
    }
  }
}
