/* eslint-disable react/prop-types */
import { NavLink, Outlet, useLocation } from "react-router-dom";

const SignInAndUpLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <NavLink to={"/"}>
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </NavLink>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {pathname === "/sign-in" ? "Sign In" : "Sign Up"} to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SignInAndUpLayout;
