import React, { useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const SimpleRegister = () => {
const[registerError,setRegisterError]=useState("")
const[registerSuccess,setRegisterSuccess]=useState("")

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
   
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

// reset error

setRegisterError(" ")

//reset success

setRegisterSuccess("")
    // create user

createUserWithEmailAndPassword(auth,email,password)
.then(result=>{
  console.log(result.user)
  if(result.user){


    setRegisterSuccess("user created successfully")

  }

})
  .catch(error=>{
   setRegisterError(error.message)
   
  })
  
}
  return (
    <div>
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required name="password"/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit"className="btn btn-primary">Register</button>
              </div>
            </form>
            {registerError&&<p className='text-3xl'>
              {registerError}
              </p>}
          </div>
          {registerSuccess&&<p className='text-green-500 text-3xl'>
            {registerSuccess}
            
            </p>}
        </div>
      </div>
    </div>
  );
}

export default SimpleRegister;
