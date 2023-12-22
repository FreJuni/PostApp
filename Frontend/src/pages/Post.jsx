import { useLoaderData } from "react-router-dom"
import PostItem from "../coponents/PostItem";

const Home = () => {
const data = useLoaderData();

  
  return (
    <div className="postItem-container">
        {
          data.map((item) => {
            return <PostItem key={item.id} item={item} />
          })
        }
    </div>
  )
}

export default Home

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");

  if(!response.ok) {
    throw new Error ("Error occur in your application.")
  } else {
    const data = await response.json();
    return data.posts;
  }
}