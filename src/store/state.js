import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: null
    },
    mutations: {
        getItems(state, payload) {
            console.log('mutations',payload)
            state.items = payload
        }
    },
    actions: {
        getItems({commit}){
            axios.get('https://task2hapi.herokuapp.com/users')
            .then((res) => {
                console.log(res.data.msg)
                commit('getItems', res.data.msg)
            })
            .catch((err) => {
                console.log('error', err)
            })
        }
    },
    getters: {
        items: state => state.items
    }
})