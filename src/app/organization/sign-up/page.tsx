"use client";

import Background from "@/components/background";
import Link from "next/link";
import React, { useState } from "react";
import TermsAndConditions from "@/components/TnC";

const SignUpPage: React.FC = () => {
  const [isTnCOpen, setIsTnCOpen] = useState(false);

  return (
    <>
      <Background />
      <div className="relative min-h-screen flex flex-col">
        <div className="flex mt-18 items-center justify-center ">
          {/* Left: Form */}
          <div className="flex-1 flex justify-end pr-12">
            <div className="w-full max-w-md">
              {/* Logo and Back Button */}
              <div className="flex items-center justify-between mb-8">
                <img
                  src="/images/kabserve_logo1.svg"
                  alt="Kabserve Logo"
                  className="h-8"
                />
                <Link href={"/"}>
                  <button className="p-2 rounded-full hover:bg-white/10">
                    <span className="sr-only">Back</span>
                    <svg width="24" height="24" fill="none" stroke="#fff">
                      <path
                        d="M15 18l-6-6 6-6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Link>
              </div>

              <h1 className="text-4xl font-bold text-white mb-2">
                Hello, <br /> Kabsuhenyo!
              </h1>
              <p className="text-white/80 mb-8">
                Start Your Journey with CvSU Organizations
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-transparent border border-white rounded px-4 py-2 text-white placeholder:text-white/50 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    className="bg-transparent border border-white rounded px-4 py-2 text-white placeholder:text-white/50 w-full"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address (@cvsu.edu.ph)"
                  className="w-full bg-transparent border border-white rounded px-4 py-2 text-white placeholder:text-white/50"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent border border-white rounded px-4 py-2 text-white placeholder:text-white/50"
                />

                <div className="flex items-center justify-between text-sm text-white">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-yellow-400" />
                    Remember me
                  </label>
                  <a href="#" className="hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <div className="flex items-center justify-between text-sm text-white">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-yellow-400" />
                    <span
                      className="hover:underline"
                      onClick={() => setIsTnCOpen(true)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          setIsTnCOpen(true);
                      }}
                    >
                      Terms and Conditions
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-green-900 font-bold py-2 rounded hover:bg-yellow-500 transition active:scale-97"
                >
                  Sign Up
                </button>
              </form>

              <div className="mt-6 text-left text-sm">
                <a href="#" className="text-white">
                  Continue as{" "}
                  <span className="text-yellow-500 hover:underline">Guest</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:flex flex-1 justify-start pl-60">
            <img
              src="/images/sign-up art.png"
              alt="Students Illustration"
              className="max-h-[500px] w-auto"
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
