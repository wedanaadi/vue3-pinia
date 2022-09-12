import { defineStore } from 'pinia'
import { usePostStore } from './post'
import Axios from 'axios'

export const useCommentStore = defineStore('comment', {
  state: () => ({
    comments: []
  }),
  getters: {
    getPostComments: (state) => {
      const postStore = usePostStore()
      return state.comments.filter((post) => post.postId === postStore.post.id)
    }
  },
  actions: {
    async fetchComments() {
      /**
       * GET DATA BY FETCH
       */
      // this.comments = await fetch(`${import.meta.env.VITE_BASE_URL}/comments`)
      //   .then((response) => response.json())
      /**
       * gET DATA BY AXIOS
       */
      const response = await Axios.get(`${import.meta.env.VITE_BASE_URL}/comments`)
      this.comments = response.data
    }
  }
})