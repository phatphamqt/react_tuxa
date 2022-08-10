import { ACT_GET_LIST_USERS } from "./action"



const inItState = {
    listUsers : [],
}

function reducer (currentState = inItState, action){
    if(action.type === ACT_GET_LIST_USERS){
        return {
            ...currentState,
            listUsers : action.listUsers
        }
    }
    return currentState
}

export default reducer;