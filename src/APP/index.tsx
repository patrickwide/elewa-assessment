import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import SocialImpact from "./Pages/SocialImpact";
import About from "./Pages/About";
import Invest from "./Pages/Invest";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SocialImpact />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: "/invest",
    element: (
      <>
        <Invest />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
