import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <div className="w-[20%] absolute my-32 mx-auto left-0 right-0 text-sm text-white bg-black bg-opacity-80 rounded-lg">
        <form className="flex flex-col mx-8 my-4">
          <h1 className="font-semibold text-2xl py-3 my-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 mx-2 my-2 rounded-md bg-[#333333]"
          />
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              className="p-2 mx-2 my-2 rounded-md bg-[#333333]"
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="p-2 mx-2 my-2 rounded-md bg-[#333333]"
          />
          <button className="p-2 mx-2 my-4 bg-red-700 rounded-md">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="p-2 mx-2 my-2 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
