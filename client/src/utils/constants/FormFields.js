const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];

const signupFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },

  {
    labelText: "Phone number",
    labelFor: "phone-number",
    id: "phone",
    name: "phone",
    type: "phone",
    autoComplete: "phone",
    isRequired: true,
    placeholder: "Phone number",
  },

  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

const profileFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
];

const resetPasswordFields = [
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

const reserveFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "text",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Phone",
    labelFor: "phone",
    id: "phone",
    name: "phone",
    type: "phone",
    autoComplete: "current-phone",
    isRequired: true,
    placeholder: "Phone",
  },
  {
    labelText: "driving_license",
    labelFor: "driving_license",
    id: "driving_license",
    name: "driving_license",
    type: "file",
    autoComplete: "file",
    isRequired: true,
    placeholder: "Upload Driving License",
  },
  {
    labelText: "card",
    labelFor: "card",
    id: "card",
    name: "card",
    type: "card",
    autoComplete: "file",
    isRequired: true,
    placeholder: "Card Number",
  },
];

const header_data = [
  {
    title: "Sign in to your account.",
    subtitle: "Don't have an account yet?",
    linkname: "Sign Up",
    linkurl: "/signup",
  },
  {
    title: "Sign up to create an account.",
    subtitle: "Already have an account?",
    linkname: "Sign In",
    linkurl: "/signin",
  },
];

export {
  loginFields,
  signupFields,
  profileFields,
  resetPasswordFields,
  reserveFields,
  header_data,
};
