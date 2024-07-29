import { useState } from "react";

export default function App() {
  return <Form />;
}

function Form() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  function handleRegister() {
    setIsLoginForm(!isLoginForm);
  }

  return (
    <div className="wrap">
      <div className="main d-flex flex-column justify-content-center align-items-center text-white">
        <div className="heading text-white fw-bold">
          {isLoginForm ? "Login" : "Register"}
        </div>
        <form action="getRegister" method="post">
          <div className="my-3 email">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="email"
              placeholder="Enter username"
              required
            />
            <br />
          </div>

          <div className="my-3">
            <label htmlFor="pass" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="pass"
              placeholder="Enter password"
              required
            />
            <br />
          </div>

          {isLoginForm && (
            <div className="d-flex justify-content-between mb-2">
              <div className="remb">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                />
                Remember me
              </div>
              <div className="remb forg">Forgot Password?</div>
            </div>
          )}

          <div className="d-grid">
            <button
              type="button"
              className="btn btn-light btn-block rounded-pill login-btn"
            >
              {isLoginForm ? "Login" : "Register"}
            </button>
          </div>

          <div className="my-3 text-center foot-text">
            <span className="remb">
              {isLoginForm
                ? "Don't have an account? "
                : "Already have an account? "}
              <span className="forg register" onClick={handleRegister}>
                {isLoginForm ? "Register" : "Login"}
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
