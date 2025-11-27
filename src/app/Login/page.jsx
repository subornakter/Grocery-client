"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Redirect after login
  const redirectTo = searchParams.get("from") || "/";

  // Email/password login
  const handleLogIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await signInUser(email, password);
      toast.success("Logged in successfully!");
      router.push(redirectTo);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Google login
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Logged in with Google!");
      router.push(redirectTo);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-3 bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white shadow-xl rounded-xl">
        <h1 className="mb-6 text-3xl font-bold text-center">Login</h1>

        <form onSubmit={handleLogIn} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-full input input-bordered"
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
              required
              className="w-full rounded-full input input-bordered"
              placeholder="Enter Password"
            />
          </div>

          <button className="w-full text-white rounded-full btn bg-gradient-to-r from-[#78C841] to-[#529723]">
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full gap-2 mt-4 bg-white border rounded-full btn"
        >
          <FaGoogle /> Login with Google
        </button>

        <p className="mt-4 text-center">
          New to our website?
          <Link href="/Register" className="ml-1 text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;



