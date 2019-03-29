import { PostState, Post, Pagination, Dictionary } from '~/types'
import { MutationTree, GetterTree } from 'vuex'

export const state = (): PostState => ({
  entities: {},
  post: {}
})

export const getters: GetterTree<PostState, PostState> = {
  list(state: PostState): Dictionary<Pagination<Post>> {
    return state.entities
  },
  get(state: PostState): Dictionary<Post> {
    return state.post
  }
}

export const mutations: MutationTree<PostState> = {
  setEntities(state: PostState, posts: Dictionary<Pagination<Post>>): void {
    state.entities = posts
  },
  setPost(state: PostState, post: Dictionary<Post>): void {
    state.post = post
  }
}