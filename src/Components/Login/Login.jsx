import React from "react";
import { Form, Field } from "react-final-form";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const required = (value) => (value ? undefined : "Required");

  const handleSubmit = () => {
    navigate("/books");
  };
  return (
    <div className="login-wrapper">
      <div className="login-square">
        <Form
          onSubmit={handleSubmit}
          initialValues={{
            username: "",
            password: "",
          }}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <Field name="username" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label>Email:</label>
                      <input
                        {...input}
                        type="email"
                        placeholder="Email Address"
                      />
                      {meta.error && meta.touched && (
                        <span className="form-error">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label>Password:</label>
                      <input
                        {...input}
                        type="password"
                        placeholder="Create Password"
                      />
                      {meta.error && meta.touched && (
                        <span className="form-error">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <button type="submit" disabled={submitting}>
                Login
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default Login;
