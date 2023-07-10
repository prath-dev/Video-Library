import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar'
const Signup = () => {
  return (
    <> 
    <Navbar></Navbar>
  <div class="card">
   <form>
   <h2 class="title"> Sign up</h2>
      <div class="email-login">
         <label for="email"> <b>Email</b></label>
         <input type="text" placeholder="Enter Email" name="uname" required/>
         <label for="psw"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" name="psw" required/>
      </div>
      <button class="cta-btn">Log In</button>
      <p class="or"><span>or</span></p>
      <Link to="/login">
      <p class="subtitle">Already have an account? <a href="#"> Log in</a></p>
      </Link>
   </form>
</div>
    </>
  )
}

export { Signup }