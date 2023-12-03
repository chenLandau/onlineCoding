import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContainerWrapper = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      closeButton={false}
      pauseOnHover
      theme="dark"
      icon={false}
    />
  );
};

export default ToastContainerWrapper;
