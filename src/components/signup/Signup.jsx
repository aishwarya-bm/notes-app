import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "contexts";
import { createUser } from "contexts/login-context/login-utils";
import "./signup.css";

export function Signup({ setIsSignUp }) {
  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [userErr, setUserErr] = useState({
    email: "",
  });
  const navigate = useNavigate();
  const { dispatchUser } = useLogin();

  const changeHandler = event => {
    event.preventDefault();
    const { target } = event;
    setSignupForm(() => ({
      ...signupForm,
      [target.name]: target.value,
    }));
  };

  const toggleShowPassword = e => {
    e.preventDefault();
    setShowPassword(showPassword => !showPassword);
  };

  const handleSignupSubmit = e => {
    e.preventDefault();
    createUser(signupForm, setUserErr, setSignupForm, dispatchUser, navigate);
  };

  return (
    <>
      <section className="signup-section d-grid" id="signup-section">
        <h3 className="text-center">Sign-up</h3>
        <form className="d-grid grid-gap" onSubmit={e => handleSignupSubmit(e)}>
          <div className="d-grid">
            <label htmlFor="firstname">
              First name
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              required
              type="text"
              placeholder="enter your first name"
              id="firstname"
              name="firstname"
              value={signupForm.firstname}
              onChange={e => changeHandler(e)}
            />
          </div>
          <div className="d-grid">
            <label htmlFor="lastname">
              Last name
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              required
              type="text"
              placeholder="enter your last name"
              id="signupForm.lastname"
              name="lastname"
              value={signupForm.lastname}
              onChange={e => changeHandler(e)}
            />
          </div>
          <div className="d-grid">
            <label htmlFor="email">
              Email
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              required
              type="text"
              placeholder="enter your username"
              name="email"
              value={signupForm.email}
              onChange={e => changeHandler(e)}
            />
            <div className="error-message">{} </div>
            {userErr.email && (
              <div className="error-message">{userErr.email} </div>
            )}
          </div>
          <div className="d-grid p-rel">
            <label htmlFor="password">
              Password
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="enter your password"
              name="password"
              value={signupForm.password}
              onChange={e => changeHandler(e)}
            />
            {showPassword ? (
              <button
                disabled={signupForm.password ? false : true}
                className="fa fa-solid fa-eye btn btn-link"
                style={{ position: "absolute", right: "0px", top: "20px" }}
                onClick={e => toggleShowPassword(e)}
              ></button>
            ) : (
              <button
                disabled={signupForm.password ? false : true}
                className="fa fa-solid fa-eye-slash btn btn-link"
                style={{ position: "absolute", right: "0px", top: "20px" }}
                onClick={e => toggleShowPassword(e)}
              ></button>
            )}
          </div>

          <button className="btn btn-primary">SIGNUP</button>
        </form>
        <button
          className="btn btn-link user-account-link"
          onClick={() => setIsSignUp(false)}
        >
          <i> Have an account? Login &nbsp;</i>
          <i className="fa fa-solid fa-angle-right"></i>
        </button>
      </section>
    </>
  );
}
