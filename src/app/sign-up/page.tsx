/* eslint-disable @next/next/no-img-element */
import Background from "@/components/background";
<<<<<<< HEAD

import Link from "next/link";
=======
import React from "react";
>>>>>>> 5a88cfc (feat: created sign-up)

const SignUpPage: React.FC = () => (
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
<<<<<<< HEAD
                            <Link href={"/"}>
                                <button className="p-2 rounded-full hover:bg-white/10">
                                    <span className="sr-only">Back</span>
                                    <svg
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="#fff"
                                    >
                                        <path
                                            d="M15 18l-6-6 6-6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </Link>
=======
                            <button className="p-2 rounded-full hover:bg-white/10">
                                <span className="sr-only">Back</span>
                                <svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="#fff"
                                >
                                    <path
                                        d="M15 18l-6-6 6-6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
>>>>>>> 5a88cfc (feat: created sign-up)
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
                                    <input
                                        type="checkbox"
                                        className="accent-yellow-400"
                                    />
                                    Remember me
                                </label>
                                <a href="#" className="hover:underline">
                                    Forgot Password?
                                </a>
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
                                <span className="text-yellow-500 hover:underline">
                                    Guest
                                </span>
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
    </>
);

export default SignUpPage;
