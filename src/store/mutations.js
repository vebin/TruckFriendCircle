import * as types from './type'

export default {
  [types.IS_CK] (state, messages) {
    console.log(messages,66666)
    state.DATA = messages
  }
}



