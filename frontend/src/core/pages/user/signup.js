import React, { useState } from "react";
import Layout from "../../components/layout";
import {signUp} from "../../auth/functions";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  //Methods
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  let {name, email, password, error, success} = values;

  let clickSubmit = (event) => {
    event.preventDefault()
    signUp({name,email,password})
    .then(data =>{
      if(data.error){
        setValues({...values,error:data.error,success:false})
      }else{
        setValues({
          name:"",
          email:"",
          password:"",
          error:"",
          success:true
        })
      }
    })
    .catch()
  }

  // const signup = (name,email,password) => {
  //   console.log(name,email,password);
  // }

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <br />
      <button onClick={clickSubmit} className="btn btn-dark">Submit</button>
    </form>
  );

  //TODO: Show error to client

  const showError = () =>{
    <div className="alert alert-danger" style={{display : error ? "" : "none"}}>
    {error}
    </div>
  }

  const showSuccess = () =>{
    <div className="alert alert-info" style={{display : success ? "" : "none"}}>
    Account Created Successfully. Click here to Signin
    </div>
  }

  return (
    <Layout
      title="Signup"
      description="This is the Signup Page"
      className="container col-md-8 offset-md-2"
    >
      {signUpForm()}
      {showError()}
      {showSuccess()}
      {JSON.stringify(values)}
    </Layout>
  );
};

export default Signup;


