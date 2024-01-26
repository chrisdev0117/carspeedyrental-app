import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFields } from "../../utils/constants/FormFields";
import AuthService from "../../services/auth.service";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "../common/Input";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignIn() {
  const [loginState, setLoginState] = useState(fieldsState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    AuthService.login(loginState["email-address"], loginState["password"]).then(
      (response) => {
        navigate("/");
        window.location.reload();
        console.log(response);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
      }
    );
  };

  return (
    <form
      className="max-w-xl mx-4 my-8 space-y-6 md:mx-auto "
      onSubmit={handleSubmit}
    >
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Sign In" />
    </form>
  );
}
