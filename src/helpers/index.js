
export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name)
}


export function mappingPostData(post){
  return {
    id: post.id,
    title: post.title.rendered,
    author: post.author_data,
    thumbnail: post.feature_media_url,
    createdDate: post.date
  }
}