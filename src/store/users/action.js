import axios from 'axios'


//Action Types
const BASE_URL = 'http://localhost:9999/wp-api/wp-json'
export const ACT_GET_LIST_USERS = 'ACT_GET_LIST_USERS';



//Action Creator

export function actGetListUsers (users){
    return {
        type: ACT_GET_LIST_USERS,
        users
    }
}

//Action Async

export function actGetListUsersAsync ({
    per_Page,
    page
}){
    return async function dispatch (){
        try{
            const response =  await axios.get(BASE_URL + '/wp/v2/posts?',{
                params:{
                    per_page: per_Page,
                    page: page
                }
            });
            const posts = response.data
            console.log(posts)
            // dispatch(actGetListUsers(posts))
        } catch (err){
            console.log('err',err)
        }
    }
}