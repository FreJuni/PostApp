import { Outlet, useLoaderData, useSubmit,useNavigation } from "react-router-dom"
import Nav from "../coponents/Nav"
import { useEffect } from "react";
import { expDuration } from "../pages/util/auth";

const Main = () => {
  const token  = useLoaderData();
  const submit = useSubmit();
  const state = useNavigation().state;  // it will give loading or submitting both of this are the very useful;

  useEffect(() => {
    if(!token) {
      return;
    }

    if(token === "TOKEN EXP") {
      submit(null, {action : "/logout",method : "POST"})
    }

    const duration = expDuration();

    setTimeout(() => {
      submit(null, {action : "/logout",method : "POST"})
    },[duration])
  
  },[token,submit])

  return (
    <section >
      <Nav />
     {
      state === "loading" ? (<div className="loading-con"><p className="loader loading"></p></div>) : (<article className="main-con"><Outlet /></article>)
     }
    </section>
  )
}

export default Main

