import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedList = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    lists: savedList ? JSON.parse(savedList) : [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ]
  },
  mutations: {
    addlist(state, payload){
      state.lists.push({title:payload.title, cards:[]})
    },
    removelist(state, payload){
      if(payload.listIndex >= 0){
        this.state.lists.splice(payload.listIndex, 1); 
       } else {
        return null
       }
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({body: payload.body})
    },
    removeCardFromList(state, payload) {
      if(payload.cardIndex >= 0) {
        this.state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
       } else {
         return null
       }
      }
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    addCardToList(context, payload) {
      context.commit('addCardToList', payload)
    },
    removeCardFromList(context, payload) {
      context.commit('removeCardFromList', payload)
    }
  },
  getters: {
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store