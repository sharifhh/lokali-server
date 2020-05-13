import React, {
  // useEffect,
  useState,
} from "react";
import { useEffect } from "react";

const RegisterPage = (props) => {
  return <RegisterForm />;
};

const RegisterForm = (props) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
  });

  const formHandler = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div>
      <div
        style={{
          maxWidth: 600,
          backgroundColor: "#d9d9d9",
          border: "5 solid #d9d9d9",
          borderRadius: "10px",
        }}
        className="container mt-5 mb-5"
      >
        <h1 className="pt-3">Create New Lokali Account</h1>
        <p className="pt-3">It's quick and easy</p>
        <form action="">
          <div className="form-group">
            {/* <label htmlFor="exampleInputEmail1">First Name</label> */}
            <input
              type="text"
              className="form-control mt-3"
              id="registerFormFirstName"
              placeholder="First Name"
              onChange={(e) => formHandler("firstName", e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-3"
              id="registerFormLastName"
              placeholder="Last Name"
              onChange={(e) => formHandler("lastName", e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-3"
              id="registerFormPhoneNumber"
              placeholder="Phone Number"
              onChange={(e) => formHandler("phone", e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control mt-3"
              id="registerFormEmail"
              placeholder="Email Address"
              onChange={(e) => formHandler("email", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Gender</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => formHandler("gender", e.target.value)}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I am not a robot
            </label>
          </div>
          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
