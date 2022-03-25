import { defineStore } from 'pinia'

export const busStore = defineStore({
  id: 'bus',
  state: () => ({
    childs: [],
    bus: {}
  }),
  getters: {
    getBus: (state) => state.bus,
    getChilds: (state) => state.childs
  },
  actions: {
    
  }
})
