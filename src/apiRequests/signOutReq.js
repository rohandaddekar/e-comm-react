import { useDispatch } from "react-redux";
import axiosInstance from "./axiosInstance";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { setUserDetails, setUserToken } from "../redux/slices/userSlice";

export const signOutReq = async ({ token }) => {
  const response = await axiosInstance.get("/auth/sign-out", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const useSignOutQuery = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  return useMutation(signOutReq, {
    onSuccess: () => {
      Dispatch(setUserToken(null));
      Dispatch(setUserDetails(null));
      Navigate("/sign-in");
    },
  });
};
