import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//store
import { Provider } from "react-redux";
//reducer
import { store } from "./store";
import { IndexRouters } from "./router";
import { LandingModulesRouter } from "./router/landing-modules-router";
import { SimpleRouter } from "./router/simple-router";
import { DefaultRouter } from "./router/default-router";
import Home from "./page/Home";
import About from "./page/About";
import Courses from "./page/Courses";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Mantor from "./page/Mantor";
import SingleCourse from "./page/SingleCourse";

import ScrollToTops from "./components/ScrollToTops";
import { NextUIProvider } from "@nextui-org/react";
import ToastProvider from "./provider/ToastProvider";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/main_about",
      element: <About />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/mantor",
      element: <Mantor />,
    },
    {
      path: "/singleCourse/:id",
      element: <SingleCourse />,
    },
    ...DefaultRouter,
    ...IndexRouters,
    ...SimpleRouter,
    ...LandingModulesRouter,
  ],
  { basename: process.env.PUBLIC_URL }
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider />
      <NextUIProvider>
        <App>
          <RouterProvider router={router}></RouterProvider>
          <ScrollToTops />
        </App>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
