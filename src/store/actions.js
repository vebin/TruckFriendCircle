import XHR from '../api'
import * as types from './type'

const LOAD_MORE_STEP = 10

// 获取用户信息
export const getHis = ({ commit }) => {
  XHR.getHis(json)
      .ten(
          commit(types.GET_HIS, {
            messages
          })
        )
    

}
