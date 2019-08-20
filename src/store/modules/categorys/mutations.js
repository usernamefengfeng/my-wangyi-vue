import {
  GET_CATEGORYS_DATA,
} from './mutations-types'

export default{
  [GET_CATEGORYS_DATA] (state,{categorysData}) {
    state.categorysData = categorysData
  }
}