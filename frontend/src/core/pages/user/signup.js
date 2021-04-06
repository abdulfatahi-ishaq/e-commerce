import React, { useState } from "react";
import Layout from "../../components/layout";

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

  let {name, email, password} = values;

  let signUp = (name,email,password) => {
    console.log(name,email,password)
  }

  let clickSubmit = (event) => {
    event.preventDefault()
    signUp(name,email,password)
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
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
        />
      </div>
      <br />
      <button onClick={clickSubmit} className="btn btn-dark">Submit</button>
    </form>
  );
  return (
    <Layout
      title="Signup"
      description="This is the Signup Page"
      className="container col-md-8 offset-md-2"
    >
      {signUpForm()}
      {/* {JSON.stringify(values)} */}
    </Layout>
  );
};

export default Signup;
