import React from 'react'
import { Form,Link,useSearchParams,useNavigation } from 'react-router-dom'

const Autentication = ({error}) => {

    const [searchParams] = useSearchParams();

    const isLogin = searchParams.get("mode") === "login";
    const navigate = useNavigation();

    const isSubmitting = navigate.state === "submitting";

    return (
    <section className='form-con'>
        <h2>{isLogin ? "Login your account" : "Create your account"}</h2>
        <Form method='post'>
           <div className='form-input'>
           {error && <p className='error-p'>{error.message}</p>}
                <label htmlFor='email' >Email</label>
                <input type='email' id='email'  name='email'></input>
            </div>
            <div className='form-input'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password'></input>
            </div>
            <button className='post-btn' disabled={isSubmitting}>{isSubmitting ? "Submitting" : isLogin ? "Login" : "Register"}</button>
            <p>
                {
                    isLogin ? (<><input type='checkbox'></input>Remember me</>) : ""
                }
            </p>
            <p className='login-info-con'>
            { isLogin ? (<>Don't have an account ?<Link to="/auth?mode=signup"> Sign up!</Link></>) : (<>Already have an account ? <Link to="/auth?mode=login">  Login</Link></>)} 
            </p>
        </Form>
    </section>
  )
}

export default Autentication