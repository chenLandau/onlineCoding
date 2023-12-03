import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Lobby, Room } from "./pages";
import { loader as roomLoader } from "./pages/Room/roomLoader";
import { loader as lobbyLoader } from "./pages/Lobby/Lobby";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Lobby />,
    loader: lobbyLoader,
  },
  {
    path: ":roomId",
    element: <Room />,
    loader: roomLoader,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
