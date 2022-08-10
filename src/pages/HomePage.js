import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { actGetListPostsAsync } from '../store/posts/action';




function HomePage() {
  const dispatch = useDispatch()
  const listPosts = useSelector(state => state.Post.listPosts)

  useEffect(() => { 
    dispatch(actGetListPostsAsync)

  },[dispatch,listPosts])

  console.log(listPosts)

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  )
}

export default HomePage