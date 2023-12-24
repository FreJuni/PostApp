import {  redirect,useActionData } from "react-router-dom"
import Authtication from "../coponents/Authtication";



const Auth = () => {
    const error = useActionData();

  return (
    <>
      <Authtication error={error} />
    </>
  )
}

export default Auth

export const action = async ({request,params}) => {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "login";

    const data = await request.formData();

    if(mode !== "login" && mode !== "signup") {
        throw new Error("");
    }

    const authData = {
        email : data.get("email"),
        password : data.get("password")
    }

    const response = await fetch(`${process.env.REACT_APP_DOMAIN}/${mode}`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(authData)
    })

    if(response.status === 422 || response.status === 401) {
        return response;
    }

    if(!response.ok) {
        throw new Error();
        // throw json({message : "Error occur in authtication."},{status : 500})
    }

    const resData = await response.json();

    const token = resData.token;

    const expireDate  = new Date();
    expireDate.setHours(expireDate.getHours() + 1);
    localStorage.setItem("expire", expireDate.toISOString());


    localStorage.setItem("token", token);

    return redirect("/")
}