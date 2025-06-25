import { useState } from 'react';

const LoginForm = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand/5 to-brand/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-8">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 text-center">Welcome Back</h2>
          </div>
          <h2 className="mt-6 text-center text-xl text-gray-900">Sign in to your account</h2>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              type="button"
              onClick={() => {
                setIsAdmin(false);
              }}
              className={`px-6 py-3 text-lg rounded-md ${
                !isAdmin ? 'bg-brand text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Client
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdmin(true);
              }}
              className={`px-6 py-3 text-lg rounded-md ${
                isAdmin ? 'bg-brand text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Admin
            </button>
          </div>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-5">
            {isAdmin ? (
              <div>
                <label
                  htmlFor="email-address"
                  className="block text-lg font-bold text-gray-900 mb-2"
                >
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-xl border-2 border-gray-300 px-4 py-3 text-xl text-gray-900 font-medium placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
            ) : (
              <div>
                <label htmlFor="username" className="block text-lg font-bold text-gray-900 mb-2">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full rounded-xl border-2 border-gray-300 px-4 py-3 text-xl text-gray-900 font-medium placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 transition-all duration-200"
                  placeholder="Enter your username"
                />
              </div>
            )}
            <div>
              <label htmlFor="password" className="block text-lg font-bold text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-xl border-2 border-gray-300 px-4 py-3 text-xl text-gray-900 font-medium placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 transition-all duration-200 pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 z-20"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-4 px-6 border-2 border-transparent rounded-xl shadow-lg text-xl font-bold text-white bg-brand hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-brand focus:ring-opacity-50 transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign in'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
