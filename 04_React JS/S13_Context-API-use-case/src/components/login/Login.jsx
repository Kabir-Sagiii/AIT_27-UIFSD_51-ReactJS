import "./Login.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
const LoginComponent = () => {
  const { login } = useContext(AuthContext);
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
            />
          </div>

          <div className="remember-me">
            <input type="checkbox" id="remember" className="checkbox" />
            <label htmlFor="remember" className="checkbox-label">
              Remember me
            </label>
          </div>

          <button onClick={login} type="button" className="login-button">
            Login
          </button>
        </form>

        <p className="signup-link">
          Don't have an account? <a href="#signup">Sign up</a>
        </p>

        <a href="#forgot" className="forgot-link">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default LoginComponent;
