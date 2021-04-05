import React from "react";
import Layout from "../../components/layout";

const Signup = () => {
  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input type="password" className="form-control" />
      </div>
      <button className="btn btn-dark">Submit</button>
    </form>
  );
  return (
    <Layout title="Signup" description="This is the Signup Page" className="container col-md-8 offset-md-2">
      {signUpForm()}
    </Layout>
  );
};

export default Signup;
