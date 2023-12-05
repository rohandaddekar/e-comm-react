import { useMutation } from "react-query";
import axiosInstance from "./axiosInstance";
import { useDispatch } from "react-redux";
import { setUserToken, setUserDetails } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

export const signInReq = async (signInData) => {
  return await axiosInstance.post("/auth/sign-in", signInData);
};

export const useSignInMutation = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  return useMutation(signInReq, {
    onSuccess: (res) => {
      Dispatch(setUserToken(res?.data?.access_token));
      Dispatch(setUserDetails(res?.data?.user));
      Navigate("/");
      console.log("Res", res);
    },
    onError: (err) => {
      console.error("error", err);
    },
  });
};
