"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { UserRole } from "../page";

/* eslint-disable @next/next/no-img-element */
import Background from "@/components/background";
import React from "react";
import TermsAndConditions from "@/components/TnC";

const SignUpPage: React.FC = () => {
  const router = useRouter();

  const [isTnCOpen, setIsTnCOpen] = useState(false);
  const [role, setRole] = useState<UserRole | undefined>(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTnC, setAgreedToTnC] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    agreedToTnC?: string;
  }>({});

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedRole = localStorage.getItem("role");
      if (savedRole) {
        setRole(savedRole as UserRole);
      }
    }
  }, []);

  const validate = () => {
    const newErrors: {
      email?: string;
      password?: string;
      agreedToTnC?: string;
    } = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.endsWith("@cvsu.edu.ph")) {
      newErrors.email = "Email must be a @cvsu.edu.ph address";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    if (!agreedToTnC) {
      newErrors.agreedToTnC = "You must agree to the Terms and Conditions";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      router.push(`/${role ?? "guest"}`);
    }
  };

  return (
    <>
      <Background />
      {/* Main container: Centered and adds vertical padding */}
      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row w-full max-w-4xl lg:max-w-6xl mx-auto">
          {/* Left: Form Container */}
          {/* On smaller screens (mobile), it takes full width and is centered. */}
          {/* On larger screens (lg), it takes half width to make space for the illustration. */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md p-6 lg:p-0"> {/* Added padding for small screens */}
              {/* Logo and Back Button (Adjusted for better spacing) */}
              <div className="flex items-center mb-8">
                <img
                  src="/images/kabserve_logo1.svg"
                  alt="Kabserve Logo"
                  className="h-8"
                />
              </div>

              <h1 className="text-4xl font-bold text-white mb-2">
                Hello, <br /> Kabsuhenyo!
              </h1>
              <p className="text-white/80 mb-8">
                Start Your Journey with CvSU Organizations
              </p>

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <input
                  type="email"
                  placeholder="Email Address (@cvsu.edu.ph)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-transparent border rounded px-4 py-2 placeholder:text-white/50 ${
                    errors.email
                      ? "border-red-500 text-red-500"
                      : "border-white text-white"
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-transparent border rounded px-4 py-2 placeholder:text-white/50 ${
                    errors.password
                      ? "border-red-500 text-red-500"
                      : "border-white text-white"
                  }`}
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}

                <div className="flex items-center gap-2 text-white">
                  <input
                    type="checkbox"
                    id="agreeTnC"
                    checked={agreedToTnC}
                    onChange={(e) => setAgreedToTnC(e.target.checked)}
                    className="accent-yellow-400"
                  />
                  <label htmlFor="agreeTnC" className="cursor-pointer">
                    I agree to the{" "}
                    <span
                      className="underline hover:text-yellow-400"
                      onClick={() => setIsTnCOpen(true)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setIsTnCOpen(true);
                      }}
                    >
                      Terms and Conditions
                    </span>
                  </label>
                </div>
                {errors.agreedToTnC && (
                  <p className="text-red-500 text-sm mt-1">{errors.agreedToTnC}</p>
                )}

                <div className="flex items-center justify-between text-sm text-white">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-yellow-400" />
                    Remember me
                  </label>
                  <a href="#" className="hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className={`w-full ${
                    agreedToTnC
                      ? "bg-yellow-400 text-green-900 hover:bg-yellow-500 cursor-pointer"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  } font-bold py-2 rounded transition active:scale-97`}
                  disabled={!agreedToTnC}
                >
                  Log In
                </button>
              </form>

              <div className="mt-6 text-left text-sm">
                <Link href="/sign-up" className="text-white">
                  Don&apos;t have an account?{" "}
                  <span className="text-yellow-500 hover:underline">Sign up</span>
                </Link>
              </div>
              <div className="my-2 text-left text-sm text-white/50">
                <span>or</span>
              </div>
              <div className="text-left text-sm">
                <Link href="/guest" className="text-white">
                  Continue as{" "}
                  <span className="text-yellow-500 hover:underline">Guest</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Illustration - only visible on large screens */}
          {/* It takes half width on large screens and is centered vertically. */}
          <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
            <img
              src="/images/sign-up art.png"
              alt="Students Illustration"
              className="max-h-[500px] w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Terms and Conditions Modal with blurred background */}
      {isTnCOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setIsTnCOpen(false)}
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full max-h-[80vh] overflow-auto p-6 relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsTnCOpen(false)}
              aria-label="Close Terms and Conditions"
            >
              ✕
            </button>
            <TermsAndConditions />
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpPage;