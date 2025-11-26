"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext/page.jsx";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Register() {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();

  const handleRegister = (event) => {
    event.preventDefault();

    const displayName = event.target.displayName.value.trim();
    const photoURL = event.target.photoURL.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    if (!displayName || !email || !password) {
      toast.error("Please fill all required fields");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must contain uppercase, lowercase & 6+ characters");
      return;
    }

    createUser(email, password)
      .then(() => updateUserProfile(displayName, photoURL))
      .then(() => {
        toast.success("Account created successfully!");
        router.push("/");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Account created successfully!");
        router.push("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-3">
      <div className="w-full max-w-sm bg-white shadow-xl rounded-xl p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label">Name</label>
            <input type="text" name="displayName" className="input input-bordered rounded-full w-full" required />
          </div>

          <div>
            <label className="label">Photo URL</label>
            <input type="text" name="photoURL" className="input input-bordered rounded-full w-full" />
          </div>

          <div>
            <label className="label">Email</label>
            <input type="email" name="email" className="input input-bordered rounded-full w-full" required />
          </div>

          <div>
            <label className="label">Password</label>
            <input type="password" name="password" className="input input-bordered rounded-full w-full" required />
          </div>

          <button className="btn rounded-full w-full bg-gradient-to-r from-pink-500 to-red-600 text-white">
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn mt-4 flex items-center justify-center gap-2 w-full bg-white border rounded-full"
        >
          <FaGoogle /> Sign up with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <Link href="/Login" className="text-blue-600 ml-1 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
