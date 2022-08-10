import {api} from './api'

const postService = {
    getList (params){
        console.log(api.call())
        return api.call().get('/wp2/v2/posts',{
            params: {
                ...params,
                lang: 'vi'
            }
        })
    },
    getArticleLatest(){
        return postService.getList({
            per_page: 3,
            page: 3
        })
    }
}

export default postService