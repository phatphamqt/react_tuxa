
import { mappingPostData } from '../../helpers';
import postService from '../../services/post'

//Action Types

export const ACT_GET_LIST_POSTS = 'ACT_GET_LIST_POSTS';



//Action Creator

export function actGetListPosts (posts){
    return {
        type: ACT_GET_LIST_POSTS,
        posts
    }
}

//Action Async

export function actGetListPostsAsync (){
    return async  (dispatch) => { 
        try{
            const response =  await postService.getArticleLatest()
            const posts = response.data.map(mappingPostData)
            dispatch(actGetListPosts(posts))
            console.log(response)

        } catch (err){
            console.log('err',err)
        }
    }
}