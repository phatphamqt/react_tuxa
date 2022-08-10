import { ACT_GET_LIST_POSTS } from "./action";

const inItState = {
    listPosts : []
}


function reducer (currentState = inItState, action){
    if(action.type === ACT_GET_LIST_POSTS){
        return {
            ...currentState,
            listPosts : action.posts
        }
    }
    return currentState
}

export default reducer;