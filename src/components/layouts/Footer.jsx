export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Brand --> */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-2">
              🎬 MovieBox
            </h2>
            <p className="text-gray-400 text-sm">
              Your ultimate movie companion. Discover, explore and enjoy the
              world of cinema.
            </p>
          </div>

          {/* <!-- Navigation --> */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-300 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Socials --> */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-300 mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-500 transition">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.45 1.46-3.8 3.7-3.8 1.07 0 2.2.2 2.2.2v2.42h-1.24c-1.23 0-1.61.76-1.61 1.54v1.85H17l-.48 2.88h-2.18V22A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-indigo-500 transition">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.564-2.002.974-3.127 1.195-.897-.959-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.869 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.087.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.105-6.102 2.105-.397 0-.788-.023-1.175-.068 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.21-.005-.423-.014-.634.962-.695 1.8-1.562 2.46-2.549l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="hover:text-indigo-500 transition">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.99 3.66 9.12 8.44 9.86v-6.99h-2.54v-2.88h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.88h-2.3v6.99c4.78-.74 8.44-4.87 8.44-9.86 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 text-center">
          © 2025 MovieBox. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
