export const About=()=>{
    return (
         <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-yellow-400 drop-shadow-lg">🎬 About MovieBox</h1>
          <p className="mt-4 text-lg text-gray-300">
            Your ultimate destination for everything movies — from the classics to the latest blockbusters!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
            alt="cinema"
            className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
          />

          {/* Right Text */}
          <div>
            <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Why CineScope?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              CineScope was built by movie lovers, for movie lovers. Whether you're looking for the latest reviews, behind-the-scenes details,
              trailers, or in-depth information about your favorite films — we’ve got it all!
            </p>
            <ul className="mt-6 space-y-3 text-gray-200 list-disc list-inside">
              <li>🎥 Curated content on top-rated films</li>
              <li>📽️ Upcoming release calendar</li>
              <li>🍿 Fan-favorite lists & community ratings</li>
              <li>🌐 Seamless mobile & desktop experience</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-yellow-400">Join the CineScope Journey</h3>
          <p className="text-gray-400 mt-2">
            Dive deep into the cinematic universe. Your adventure begins here.
          </p>
        </div>
      </div>
    </div>
    )
}