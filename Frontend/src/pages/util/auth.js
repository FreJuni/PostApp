import { redirect } from "react-router-dom";

export const expDuration = () => {
  const expData = localStorage.getItem("expire");
  const expDateinMili = new Date(expData); // it will transform to minlin seconds
  const currentMili = new Date();
  const duration = expDateinMili - currentMili;

  return duration;
};

export const getToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }
  const duration = expDuration();

  if (duration < 0) {
    return "TOKEN EXP";
  }

  return token;
};

export const tokenLoader = () => {
  return getToken();
};

export const checkkTokenLoader = () => {
  const token = getToken();

  if (!token) {
    return redirect("/auth?mode=login");
  }
  return token;
};
