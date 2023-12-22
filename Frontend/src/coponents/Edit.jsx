import { useRouteLoaderData } from 'react-router-dom'
import PostForm from './PostForm'

const Edit = () => {

  const post = useRouteLoaderData("post-detail");

  console.log(post);


  return (
    <>
        <PostForm header={"Edit your post."} method={"patch"} post={post} btn={"Edit"} />
    </>
  )
}

export default Edit