import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../Firebase"; // Ensure Firebase is configured
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/input"); // Navigate to the desired page
    } catch (error) {
      setError("Google Sign-In failed. Please try again.");
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // Navigate to the home page
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use. Please login instead.");
      } else {
        setError("Signup failed. Please check your details and try again.");
      }
      console.error("Signup Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 flex justify-center items-center p-4">
      {/* Card Container */}
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 bg-blue-500">
          <img
            src="https://res.cloudinary.com/dqm8rxpzq/image/upload/v1731653959/mid-adult-man-is-listening-to-music-in-park_j7rmda.jpg"
            alt="Signup Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-1/2 p-8 space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Create an Account
          </h2>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 text-red-600 p-4 rounded-lg text-center">
              {error}
            </div>
          )}

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 focus:outline-none"
          >
            Sign Up with Google
          </button>

          <div className="text-center text-gray-500">OR</div>

          {/* Email and Password Signup Form */}
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none"
            >
              Sign Up with Email
            </button>
          </form>

          {/* Link to Login Page */}
          <div className="text-center">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline focus:outline-none"
            >
              Login here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
