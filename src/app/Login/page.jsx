"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthContext } from "../context/AuthContext/page.jsx";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("from") || "/";

  const handleLogIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await signInUser(email, password);
      router.push(redirectTo);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push(redirectTo);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-3">
  <div className="w-full max-w-sm bg-white shadow-xl rounded-xl p-6">
    <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

    <form onSubmit={handleLogIn} className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          className="input input-bordered rounded-full w-full"
          placeholder="Enter Email"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          className="input input-bordered rounded-full w-full"
          placeholder="Enter Password"
        />
      </div>

      <button className="btn rounded-full w-full bg-gradient-to-r from-pink-500 to-red-600 text-white">
        Login
      </button>
    </form>

    <button
      onClick={handleGoogleSignIn}
      className="btn mt-4 flex items-center justify-center gap-2 w-full bg-white border rounded-full"
    >
      <FaGoogle /> Login with Google
    </button>

    <p className="text-center mt-4">
      New to our website?
      <Link href="/Register" className="text-blue-600 ml-1">
        Register
      </Link>
    </p>
  </div>
</div>

  );
};

export default Login;



