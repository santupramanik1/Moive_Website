import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  
  const error = useRouteError();
  // console.log(error);

  const nevigate=useNavigate();
  const handleGoBack=()=>{
    nevigate(-1);
  }
  if (error.status === 404) {
    return (
      <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-md">
          {/* <!-- 404 GIF Image --> */}
          <img
            src="https://cdn.dribbble.com/userupload/20420676/file/original-aac8f7f838812fa53cd92617fad5f892.gif"
            alt="404 Error"
            className="mx-auto w-72 mb-6 rounded-xl shadow-lg"
          />

          {/* <!-- Error Title --> */}
          <h1 className="text-5xl font-extrabold text-indigo-400 mb-4">404</h1>

          {/* <!-- Message --> */}
          <p className="text-xl text-gray-300 mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>

          {/* <!-- Back to Home Button --> */}
          <button className="inline-flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer" onClick={handleGoBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Go Back
          </button>
        </div>
      </div>
    );
  }
  return <p>404 Page Not Found</p>;
};
