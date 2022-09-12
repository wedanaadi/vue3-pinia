import { defineStore } from 'pinia'
import { usePostStore } from './post'
import Axios from 'axios'

export const useAuthorStore = defineStore('author', {
  state: () => ({
    authors: []
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore()
      return state.authors.filter((author) => author.id === postStore.post.userId)
    }
  },
  actions: {
    async fetchAuthors() {
      // this.authors = await fetch(`${import.meta.env.VITE_BASE_URL}/users`)
      //   .then((response) => response.json())
      const response = await Axios.get(`${import.meta.env.VITE_BASE_URL}/users`)
      this.authors = response.data
    }
  }
})