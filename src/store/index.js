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
          title: element.title.reduce((acc, element) => acc + " | " + element),
          tags: element.tags.reduce((acc, element) => acc + " | " + element)
        }
      })
    },
    getFileByName: (state) => (filename) => {
      return state.find(element => element.fileName === filename)
    }
  },
  actions: {
    async getAllFiles(context) {
      const { data } = await axios.get('http://20.67.127.49:8080/files');
      context.commit("setData", data);
    }
  },
  modules: {
  }
})