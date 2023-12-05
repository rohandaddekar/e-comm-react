import { NavLink } from "react-router-dom";
import TextInput from "../../components/Inputs/TextInput";
import { useState } from "react";
import { useSignInMutation } from "../../apiRequests/signInReq";

export default function SignIn() {
  const signInMutation = useSignInMutation();

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (fieldName, value) => {
    setSignInData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInMutation.mutate(signInData);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <TextInput
          id="email"
          name="email"
          label="Email address"
          type="email"
          value={signInData.email}
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
          value={signInData.password}
          onChange={(value) => onChangeHandler("password", value)}
          autoComplete={false}
        />

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Dont have an account?{" "}
        <NavLink
          to="/sign-up"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Sign Up
        </NavLink>
      </p>
    </>
  );
}
