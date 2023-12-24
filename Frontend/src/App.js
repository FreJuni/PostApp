import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import { loader as postLoader } from "./pages/Post";
import SinglepostItem, { action as deleteAction } from "./pages/SinglepostItem";
import { action as postAction } from "./coponents/PostForm";
import { loader as singlePost } from "./pages/SinglepostItem";
import { action as updateAction } from "./coponents/PostForm";
import Edit from "./coponents/Edit";
import Error from "./coponents/Error";
import Auth, { action as authAction } from "./pages/Auth";
import { loader as logoutLoader } from "./pages/logout.js";
import { tokenLoader, checkkTokenLoader } from "./pages/util/auth.js";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    id: "root",
    loader: tokenLoader,
    errorElement: <Error />,
    children: [
      { index: true, element: <Post />, loader: postLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: postAction,
        loader: checkkTokenLoader,
      },
      { path: "/auth", element: <Auth />, action: authAction },
      { path: "/logout", loader: logoutLoader },
      {
        path: ":id",
        id: "post-detail",
        loader: singlePost,
        children: [
          {
            index: true,
            element: <SinglepostItem />,
            action: deleteAction,
          },
          {
            path: "edit-post/",
            element: <Edit />,
            action: updateAction,
            loader: checkkTokenLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
