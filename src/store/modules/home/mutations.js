import {
  GET_HOME_DATA,
  GET_SEARCH_DATA,
  GET_SEARCH_RESULT
} from './mutations-types'

export default{
  [GET_HOME_DATA] (state,{homeData}) {
    state.homeData = homeData
  },

  [GET_SEARCH_DATA] (state,{searchData}) {
    state.searchData = searchData
  },

  [GET_SEARCH_RESULT] (state,{searchResult}) {
    state.searchResult = searchResult
  }
}