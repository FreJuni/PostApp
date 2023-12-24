import { Link, json, redirect, useRouteLoaderData, useSubmit } from "react-router-dom"
import {CalendarDaysIcon,ArrowLeftIcon} from "@heroicons/react/24/solid";
import { getToken } from "./util/auth";

const SinglepostItem = () => {
    const data = useRouteLoaderData("post-detail");
    const {date,description,title,image} = data;
    const submit = useSubmit();
    const isToken = useRouteLoaderData("root");


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
        {
            isToken && (
                <div className="btn-con">
                <Link to={`edit-post/`}>
                    <p className="edit btn">Edit</p>
                </Link>
                <p className="delete btn" onClick={deleteHandler}>Delete</p>
                </div>
            )
        }

       </section>
    )
}

export default SinglepostItem

export const loader = async ({request,params}) => {
    const response = await fetch(`${process.env.REACT_APP_DOMAIN}/posts/${params.id}`);
    if(!response.ok) {
        // code..
        throw new Error("Error occur in your url.")
    } else {
        const data = await response.json();
        return data.post;
    }
}

export const action = async ({request,params}) => {
    const token = getToken();
    const response = await fetch(`${process.env.REACT_APP_DOMAIN}/posts/${params.id}`,{
        method : request.method,
        headers : {
        "Authorization" : "Bearer " + token,
        }
    });

    if(!response.ok){
        throw json ({message : "Error occur in delete action."},{status : 500})
    }

    return redirect("/");
}