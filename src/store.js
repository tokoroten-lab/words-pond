import Vue from 'vue'
import Vuex from 'vuex'
import Amplify, { API, Auth } from 'aws-amplify'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    apiName() {
      return Amplify.configure().API.endpoints[0].name
    }
  },
  mutations: {

  },
  actions: {
    async apiGetRequest({}, payload) {
      const myInit = {
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
        },
        queryStringParameters: payload.params
      }
      return await API.get(this.getters.apiName, payload.path, myInit);
    },
    async apiPostRequest({}, payload) {
      const myInit = {
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
        },
        body: payload.params
      }
      return await API.post(this.getters.apiName, payload.path, myInit)
    }
  }
})
