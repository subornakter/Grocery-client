"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
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
    <div className="flex items-center justify-center min-h-screen px-3 bg-gray-50">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 shadow-xl rounded-xl">
        <h1 className="mb-6 text-3xl font-bold text-center">Register</h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label">Name</label>
            <input type="text" name="displayName" className="w-full rounded-full input input-bordered" required />
          </div>

          <div>
            <label className="label">Photo URL</label>
            <input type="text" name="photoURL" className="w-full rounded-full input input-bordered" />
          </div>

          <div>
            <label className="label">Email</label>
            <input type="email" name="email" className="w-full rounded-full input input-bordered" required />
          </div>

          <div>
            <label className="label">Password</label>
            <input type="password" name="password" className="w-full rounded-full input input-bordered" required />
          </div>

          <button className="w-full text-white rounded-full btn bg-gradient-to-r from-[#78C841] to-[#529723]">
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full gap-2 mt-4 bg-white border rounded-full btn"
        >
          <FaGoogle /> Sign up with Google
        </button>

        <p className="mt-4 text-center">
          Already have an account?
          <Link href="/Login" className="ml-1 font-medium text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
