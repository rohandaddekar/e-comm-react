/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { loggedUserToken } = useSelector((state) => state.eCommUser);

  if (!loggedUserToken) {
    return <Navigate to={"/sign-in"} />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
