import {
  GET_HOME_DATA,
} from './mutations-types'

export default{
  [GET_HOME_DATA] (state,{homeData}) {
    state.homeData = homeData
  }
}