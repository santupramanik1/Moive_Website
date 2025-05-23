import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
   <div className="relative bg-black text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
  {/* <!-- Background Image --> */}
  <img src="https://images.unsplash.com/photo-1606491956689-06c1a9677d21?auto=format&fit=crop&w=1950&q=80"
       alt="Cinema Background"
       className="absolute inset-0 w-full h-full object-cover opacity-60" />

  {/* <!-- Overlay --> */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>

  {/* <!-- Content --> */}
  <div className="relative z-10 text-center px-6 max-w-2xl">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg mb-4">
      Discover Your Next Favorite Movie
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-8">
      Stream the latest blockbusters, timeless classNameics, and everything in between.
    </p>
    <div className="flex justify-center space-x-4">
      <a href="/movie"
         className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition duration-300 shadow-lg">
        Browse Movies
      </a>
      <NavLink to="/about"
         className="px-6 py-3 border border-white hover:bg-white hover:text-black text-white font-semibold rounded-full transition duration-300 shadow-lg">
        Learn More
      </NavLink>
    </div>
  </div>
</div>

  )
};
