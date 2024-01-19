import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";
import CheckButton from "react-validation/build/button";
import { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

//import "bootstrap/dist/css/bootstrap.min.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  //const [checkBtn, setCheckBtn] = useState(None);
  //const [form, setForm] = useState(None);
  
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
        //this.form.validateAll();
    
    AuthService.login(email, password).then(
      (response) => {
        navigate("/");
        console.log(response);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      });
  };

  return (
    <div className="login">
      <Form
        onSubmit={handleLogin}
        ref={(c) => {
          //setForm(c);
        }}
      >
        <div className="form-group" style={{display: "none"}}>
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={onChangeUsername}
            validations={[required]}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={onChangeEmail}
            validations={[required]}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary btn-bloc form-control "
            //disabled={loading}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>
          </button>
              If you don't have account, please&nbsp;
          <a
            className="btn btn-primary btn-bloc"
            href="/register"
            //disabled={loading}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>register</span>
          </a>
        </div>

        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton
          style={{ display: "none" }}
          ref={(c) => {
            //checkBtn = c;
          }}
        />
      </Form>
    </div>
  );
}
