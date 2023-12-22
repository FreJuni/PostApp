import { Link, redirect, useRouteLoaderData, useSubmit } from "react-router-dom"
import {CalendarDaysIcon,ArrowLeftIcon} from "@heroicons/react/24/solid";

const SinglepostItem = () => {
    const data = useRouteLoaderData("post-detail");
    const {date,description,title,image} = data;
    const submit = useSubmit();

    const deleteHandler = () => {

        const deleteConfirm = window.confirm("Are you sure?");
        if(deleteConfirm) {
            submit(null , {method : "DELETE"})
        }
    }

    return (
       <section className="single-container">
        <div className="top-con">
            <div>
                <h3>{title}</h3>
                <p><CalendarDaysIcon className="clockIcon" />  {date}</p>
            </div>
            <Link to="/"><ArrowLeftIcon className="arroIcon" /></Link>
        </div>
        <img src={image} alt={title} />
        <p>{description}</p>
        <div className="btn-con">
        <Link to={`edit-post/`}>
            <p className="edit btn">Edit</p>
        </Link>
        <p className="delete btn" onClick={deleteHandler}>Delete</p>
        </div>

       </section>
    )
}

export default SinglepostItem

export const loader = async ({request,params}) => {
    const response = await fetch(`http://localhost:8080/posts/${params.id}`);
    if(!response.ok) {
        // code..
        throw new Error("Error occur in your url.")
    } else {
        const data = await response.json();
        return data.post;
    }
}

export const action = async ({request,params}) => {
    const response = await fetch(`http://localhost:8080/posts/${params.id}`,{
        method : request.method,
    });
    if(!response.ok){
         
    }

    return redirect("/");
}