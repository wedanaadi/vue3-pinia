import { defineStore } from 'pinia'
import Axios from 'axios'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => state.posts.filter((post) => post.userId === authorId)
    }
  },
  actions: {
    async fetchPosts() {
      this.posts = []
      this.loading = true
      try {

        // this.posts = await fetch(`${import.meta.env.VITE_BASE_URL}/posts`)
        //   .then((response) => response.json())
        const response = await Axios.get(`${import.meta.env.VITE_BASE_URL}/posts`)
        this.posts = response.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost(id) {
      this.post = null
      this.loading = true
      try {
        // this.post = await fetch(`${import.meta.env.VITE_BASE_URL}/posts/${id}`)
        //   .then((response) => response.json())
        const response = await Axios.get(`${import.meta.env.VITE_BASE_URL}/posts/${id}`)
        this.post = response.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})