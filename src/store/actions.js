import * as MT from './MT'
import data from './../datas/list-data'

export default {
    getList({commit}){
        commit(MT.LIST,data)
    },
    getMovie({commit}, data){
        commit(MT.GET_MOVIELIST,data)
    },
}
