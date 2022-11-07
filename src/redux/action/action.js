import { setUserData, getUserData, getStoriesIds,getStory } from "../../utils/api_data";
import axios from 'axios';
export const SET_USER_NAME = "SET_USER_NAME";
export const GET_AUTHEDUSER ="GET_AUTHEDUSER";

export const GET_DATA = "GET_DATA";
export const GET_DATA_BYIDS = "GET_DATA_BYIDS"
export const REQUEST_DATA="REQUEST_DATA";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const topStories = `${baseUrl}/topstories.json`; 


// export const authUser = (user) => {
//     return {
//         type: SET_USER_NAME,
//         user
//     }
// }
// export const getUserAction = (user) => {
//     return {
//         type: GET_AUTHEDUSER,
//         user
//     }
// }

// export const getData = (data) => {
//     return {
//         type: GET_DATA,
//         data
//     }
// }

export const setUserActionCreator =  (user) => dispatch => {
//    dispatch({type:REQUEST_DATA})
    setUserData(user).then((res) => {
        // dispatch(authUser(name))
        console.log(res, 'action')
        if(res){
            dispatch({
                type: SET_USER_NAME,
                user: res
            })
        }else{
            console.log(error)
        }
  
    })
  
}


 
export const getUserHandle = () => async dispatch => {
    return getUserData().then((user) => {
        console.log(user);
    //         dispatch(getUserAction(user));
    //    nav.navigate('Home')
    dispatch({
        type: GET_AUTHEDUSER,
        user
    })
    })
 
   
}

// export const newIdsCreator = (data) => {
//     return {
//         type: GET_DATA_BYIDS,
//         payload: data
//     }
// }

// export const newsCreator = (res) => {
//     return {
//         type: GET_DATA,
//         payload: res
//     }
// }

export const handleStoryIds = (curr) => async dispatch => {
    // return getStoriesIds(st, lim).then((result) => {
        // dispatch(newIdsCreator(result))
        console.log(curr, 'curr')

        try{
            const {data} = await axios.get(`${topStories}?print=pretty&orderBy="$priority"&limitToFirst=${curr}`)
            console.log(data, 'data')
            dispatch({
                type: GET_DATA_BYIDS,
                payload: data
            })
        }catch(err){
            console.log(err, 'err')
        }
      
    // })
}

// export const handleStory = (ids) => dispatch => {
//     return getStory(ids).then((data) => {
//         // dispatch(newsCreator(data))
//         dispatch({
//             type: GET_DATA_BYIDS,
//             payload: data
//         })
//     })
// }