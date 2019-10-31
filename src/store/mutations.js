import * as MT from './MT'

export default {
    [MT.LIST](state,{list_data}){
        state.ListTmp = list_data
    },
    [MT.GET_MOVIELIST](state,data){
        state.MovieList = data
        console.log(state)
    }
}
