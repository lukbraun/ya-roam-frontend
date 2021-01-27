import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    files: []
  },
  mutations: {
    setData(state, data) {
      state.files = data;
    }
  },
  getters: {
    getFilesForTable: (state) => {
      return state.files.map(element => {
        return {
          fileName: element.fileName,
          userName: element.userName,
          title: element.title.reduce((acc, element) => acc + element + ", ", "").slice(0, -2),
          tags: element.tags.reduce((acc, element) => acc + element + ", ", "").slice(0, -2)
        }
      })
    },
    getFileByName: (state) => (filename) => {
      return state.files.find(element => element.fileName === filename)
    }
  },
  actions: {
    async getAllFiles(context) {
      const { data } = await axios.get('https://20.73.130.168:8080/files')
      console.log("Got all" + data)
      context.commit("setData", data);
    }
  },
  modules: {
  }
})
