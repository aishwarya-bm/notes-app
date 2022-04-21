import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "contexts";
import { loginUser } from "utils";
import "./signup.css";
export function Signin({ setIsSignUp }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const { dispatchUser } = useLogin();
  const navigate = useNavigate();

  const changeHandler = event => {
    event.preventDefault();
    const { target } = event;
    setLoginForm(() => ({
      ...loginForm,
      [target.name]: target.value,
    }));
  };

  const toggleShowPassword = e => {
    e.preventDefault();
    setShowPassword(showPassword => !showPassword);
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    loginUser(loginForm, dispatchUser, navigate);
  };

  const handleTestLogin = e => {
    e.preventDefault();
    loginUser(
      { email: "test@gmail.com", password: "test" },
      dispatchUser,
      navigate
    );
  };

  return (
    <>
      <section className="signup-section d-grid grid-gap" id="login-section">
        <h3 className="text-center">Login</h3>
        <form className="d-grid grid-gap" onSubmit={e => handleLoginSubmit(e)}>
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
              value={loginForm.email}
              onChange={e => changeHandler(e)}
            />
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
              value={loginForm.password}
              onChange={e => changeHandler(e)}
            />
            {showPassword ? (
              <button
                disabled={loginForm.password ? false : true}
                className="fa fa-solid fa-eye btn btn-link"
                style={{ position: "absolute", right: "0px", top: "20px" }}
                onClick={e => toggleShowPassword(e)}
              ></button>
            ) : (
              <button
                disabled={loginForm.password ? false : true}
                className="fa fa-solid fa-eye-slash btn btn-link"
                style={{ position: "absolute", right: "0px", top: "20px" }}
                onClick={e => toggleShowPassword(e)}
              ></button>
            )}
            <div className="helper-message hide">Helper message</div>
            <div className="error-message hide">Wrong Password. Try again.</div>
          </div>

          <button className="btn btn-primary">LOGIN</button>
        </form>
        <button
          className="btn btn-link user-account-link"
          onClick={e => handleTestLogin(e)}
        >
          <span>
            <u> Login with test credentials</u>
          </span>
        </button>
        <button
          className="btn btn-link user-account-link"
          onClick={() => setIsSignUp(true)}
        >
          <i>Create new account &nbsp;</i>
          <i className="fa fa-solid fa-angle-right"></i>
        </button>
      </section>
    </>
  );
}
