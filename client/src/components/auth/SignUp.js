import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormAction from "./FormAction";
import Input from "../common/Input";
import { signupFields } from "../../utils/constants/FormFields";
import AuthService from "../../services/auth.service";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignUp() {
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate();
  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    AuthService.register(
      signupState["username"],
      signupState["email-address"],
      signupState["password"]
    ).then(
      (response) => {
        alert("Successfully regestered!");
        navigate("/signin");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage,
        });
      }
    );
  };

  return (
    <form
      className="max-w-xl mx-4 mt-8 space-y-6 md:mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Sign Up" />
      </div>
    </form>
  );
}
