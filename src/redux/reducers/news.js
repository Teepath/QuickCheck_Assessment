import { GET_DATA, GET_DATA_BYIDS,REQUEST_DATA } from "../action/action";

const initialState = {
    storiesIds: [],
    story:{},
    loading:false
}


const News = (state = initialState, action) => {
    switch (action.type) {
        // case REQUEST_DATA:
        // return{
        //     loading:true,
            
        // }
        case GET_DATA_BYIDS:
            console.log(action.payload, 'payload')
            return {
                ...state,
                storiesIds:[...state.storiesIds, ...action.payload],
                loading:false,
            }
        case GET_DATA:
            return {
                ...state,
                loading:false,
                story:action.payload
            }
        default:
            return state
    }
}

export default News;