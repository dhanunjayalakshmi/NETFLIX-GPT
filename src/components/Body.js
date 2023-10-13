import Login from "./Login";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      exact: true,
    },
    {
      path: "/watch/:movieId",
      element: <MovieInfo />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
