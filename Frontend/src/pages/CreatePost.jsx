import PostForm from "../coponents/PostForm"

const CreatePost = () => {
  return (
    <div>
      <PostForm header={"Create your post."} btn={"Post"} method={"post"}   />
    </div>
  )
}

export default CreatePost


