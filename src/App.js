import React from "react";
import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { Loading } from "./components/Loading.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const LazyGrocery = lazy(() => import("./components/Grocery.js")); // for lazy import we always have to export the component as a named export

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyGrocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
