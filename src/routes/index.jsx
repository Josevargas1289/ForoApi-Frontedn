import { useRoutes } from "react-router-dom";
import EmailVerificationPage from "../pages/EmailVerificationPage";
import ForumPage from "../pages/ForumPage";
import Home from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Router = () => {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/forum",
      element: <ForumPage />,
    },
    {
      path: "/verify",
      element: <EmailVerificationPage />,
    },
  ]);
};

export default Router;
