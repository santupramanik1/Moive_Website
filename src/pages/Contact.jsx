import { Form } from "react-router-dom";

export const Contact = () => {
 
  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h2>
        <Form method="POST" action="/contact" className="space-y-6">
          {/* <!-- Name --> */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            />
          </div>

          {/* <!-- Email --> */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            />
          </div>

          {/* <!-- Message --> */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            ></textarea>
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-xl"
          >
            Send Message
          </button>
        </Form>
      </div>
    </div>
  );
};

export const contactData = async ({ request }) => {
    try {
      const res = await request.formData();
      const data=Object.fromEntries(res)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };