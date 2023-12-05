import { useState } from "react";
import { NavLink } from "react-router-dom";
import TextInput from "../../components/Inputs/TextInput";

export default function SignUp() {
  const [signUpData, setSignUpData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const onChangeHandler = (fieldName, value) => {
    setSignUpData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("signUpData:", signUpData);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <TextInput
          id="first_name"
          name="first_name"
          label="First Name"
          type="text"
          value={signUpData.first_name}
          onChange={(value) => onChangeHandler("first_name", value)}
          required
          autoComplete
        />

        <TextInput
          id="last_name"
          name="last_name"
          label="last Name"
          type="text"
          value={signUpData.last_name}
          onChange={(value) => onChangeHandler("last_name", value)}
          required
          autoComplete
        />

        <TextInput
          id="email"
          name="email"
          label="Email address"
          type="email"
          value={signUpData.email}
          onChange={(value) => onChangeHandler("email", value)}
          required
          autoComplete
        />

        <TextInput
          id="password"
          name="password"
          label="Password"
          type="password"
          required
          value={signUpData.password}
          onChange={(value) => onChangeHandler("password", value)}
          autoComplete={false}
        />

        <TextInput
          id="confirm_password"
          name="confirm_password"
          label="Password Confirmation"
          type="password"
          required
          value={signUpData.password_confirmation}
          onChange={(value) => onChangeHandler("password_confirmation", value)}
          autoComplete={false}
        />

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <NavLink
          to="/sign-in"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Sign In
        </NavLink>
      </p>
    </>
  );
}
