import XHR from '../api'
import * as types from './type'



// 测试
export const IS_CK = ({ commit }) => {
    XHR.isCK().then( function (res) {
        commit(types.IS_CK, res)
    })
}
