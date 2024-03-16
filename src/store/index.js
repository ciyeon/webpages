import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userMessage:{
      name:'',
      account:'',
      permission:''
    },
    jwt: ''
  },
  getters: {
  },
  mutations: {
    setName:(state,input)=>{
      state.userMessage.name=input;
    },
    setJwt:(state,input)=>{
      state.jwt=input;
    },
    setAccount:(state,input)=>{
      state.userMessage.account=input;
    },
    setPermission:(state,input)=>{
      state.userMessage.permission=input;
    }
  },
  actions: {
  },
  modules: {
  }
})
