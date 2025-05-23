import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import { AppLayout } from "./components/layouts/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./components/Api/GetApiData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./components/Api/getMovieDetails";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage></ErrorPage>, //for handling Error Page
      children: [
        //Add child inside the parent component
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/about",
          element: <About />
        },

        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData //it is used to get the data from the API
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader:getMovieDetails
        },
        {
          path: "/contact",
          element: <Contact />,
          action:contactData
        }
      ]
    }
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
