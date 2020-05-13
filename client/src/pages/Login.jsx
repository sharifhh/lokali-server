import React from "react";

const Login = (props) => {
  return (
    <div className="container pt-3">
      <form action="">
        <div class="form-group">
          <label for="exampleInputEmail1">Full Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            I am not a robot
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="d-flex flex-row justify-content-around">
        <button type="submit" class="btn btn-danger mt-3 p-5">
          {/* <i class="fab fa-google"></i> */}
          Continue with Google
        </button>
        <button type="submit" class="btn btn-primary mt-3 p-5">
          {/* <i class="fab fa-facebook-f"></i> */}
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};
export default Login;
