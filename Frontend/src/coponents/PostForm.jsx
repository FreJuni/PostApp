import {Form, Link,redirect,useActionData} from "react-router-dom"
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import uuid from 'react-uuid'


const PostForm = ({header,btn,post,method}) => {
    const data = useActionData();
    const errArray =[];

    if(data && data.errors) {
        Object.values(data.errors).map((err) => {
       return errArray.push(err);
    })
    }

  return (
    <section className='form-con'>
        <div className="title-con">
            <h2>{header}</h2>
            <Link to="/">
            <ArrowLeftIcon className="arrow-con" />
            </Link>
        </div>

         <Form method={method}>
            <div className='form-input'>
                {
                    errArray.map((item,index) => {
                        if(item === "Invalid title.") {
                            return <p key={index} className="error-p">*{item}*</p>
                        }
                        return null;
                    })
                }
                <label htmlFor='form-title' >Title</label>
                <input type='text' id='form-title'  name='title' defaultValue={post ? post.title : ""}></input>
            </div>
            <div className='form-input'>
            {
                    errArray.map((item,index) => {
                        if(item === "Invalid image.") {
                            return <p key={index} className="error-p">*{item}*</p>
                        }
                        return null;
                    })
                }
                <label htmlFor='form-image'>Image Url</label>
                <input type='url' id='form-image' name='image' defaultValue={post ? post.image : ""}></input>
            </div>
            <div className='form-input'>
            {
                    errArray.map((item,index) => {
                        if(item === "Invalid date.") {
                            return <p key={index} className="error-p">*{item}*</p>
                        }
                        return null;
                    })
                }
                <label htmlFor='form-date'>Date</label>
                <input type='date' id='form-date'  name='date' defaultValue={post ? post.date : ""}></input>
            </div>
            <div className='form-input'>
            {
                    errArray.map((item,index) => {
                        if(item === "Invalid description.") {
                            return <p key={index} className="error-p">*{item}*</p>
                        }
                        return null;
                    })
                }
                <label htmlFor='form-description'>Description</label>
                <textarea name="description" id="form-description"  defaultValue={post ? post.description : ""}></textarea>
            </div>
            <button className='post-btn' >{btn}</button>
         </Form>
    </section>
  
  )
}

export default PostForm


// action is like loader fct but it using method //

export const action = async ({request,params}) => {
    const data = await request.formData();
    const method = request.method;
  
    const postData = {
      id : uuid(),
      title : data.get("title"),
      description : data.get("description"),
      image : data.get("image"),
      date : data.get("date"),
    }

    let url = "http://localhost:8080/posts";

    if(method === "PATCH") {
        const id = params.id;
        url = `http://localhost:8080/posts/${id}`
    }
  
    const response = await fetch(url, {
        method : method,
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify(postData)
    })
  
    if(response.status === 422) {
      return response;
    }
  
    if(!response.ok) {
      throw new Error ("");
    }
      return redirect('/');
  }
  
