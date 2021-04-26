import React, { useState } from "react";
import Layout from "../../components/layout";
import { signIn,authenticate} from "../../auth/functions";
import { Redirect } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });
   
  //Methods
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  let { email, password, error, loading, redirectToReferrer } = values;
  let clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true,redirectToReferrer:false });
    signIn({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data,()=>{
            setValues({
              ...values,
              redirectToReferrer: true,
            });
          })
        }
      })
      .catch();
  };

  // const signup = (name,email,password) => {
  //   console.log(name,email,password);
  // }

  const signInForm = () => (
    <form>
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
      <button onClick={clickSubmit} className="btn btn-dark">
        Submit
      </button>
    </form>
  );

  //TODO: Fix bug in signing up

  const showError = () => {
    return <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>;
  };

  const showLoading = () => {
    return loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );
  };

  const redirectUser = () => {
    if (redirectToReferrer === true) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Layout
      title="Signup"
      description="This is the Signup Page"
      className="container col-md-8 offset-md-2"
    >
      {showError()}
      {showLoading()}
      {signInForm()}
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
