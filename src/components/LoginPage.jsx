import { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from '@hooks/useAuth';

export default function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  let errorMessage = 'No error';
  let errorStatus = 200;
  const auth = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    auth
      .signIn(email, password)
      .then(() => {
        router.push('/dashboard');
        console.log('Successfully logged in');
        console.log(200);
        setError(false);
      })
      .catch((err) => {
        errorMessage = err.message;
        errorStatus = err.response.status;
        console.log(errorMessage);
        console.log(errorStatus);
        setError(true);
      });
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Image className="w-auto h-12 mx-auto" src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg" width={20} height={20} alt="Workflow" />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
          </div>

          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none form-input rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none form-input rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded form-checkbox form-input focus:ring-blue-500" />
                <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-500 group-hover:text-blue-400"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
            {error && (
              <div>
                <p className="py-2 text-lg font-semibold text-center text-red-700 bg-red-50 rounded-2xl">Invalid credentials, try again</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
