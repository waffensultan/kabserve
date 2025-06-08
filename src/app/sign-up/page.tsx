"use client";

import Background from "@/components/background";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import TermsAndConditions from "@/components/TnC";
import { useRouter } from "next/navigation";

type UserRole = "student" | "organization" | "guest";

const SignUpPage: React.FC = () => {
  const router = useRouter();

  // Form state
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const [section, setSection] = useState("");
  const [department, setDepartment] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isTnCOpen, setIsTnCOpen] = useState(false);
  const [role, setRole] = useState<UserRole>("student"); // Default to student
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  useEffect(() => {
    // Get role from localStorage as set by landing page
    if (typeof window !== "undefined" && window.localStorage) {
      const savedRole = localStorage.getItem("role");
      if (savedRole === "student" || savedRole === "organization") {
        setRole(savedRole);
      }
    }
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName.trim()) newErrors.firstName = "First Name is required";
    if (!surname.trim()) newErrors.surname = "Surname is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.endsWith("@cvsu.edu.ph")) {
      newErrors.email = "Email must be a @cvsu.edu.ph address";
    }
    if (!password.trim()) newErrors.password = "Password is required";

    // Only validate course, section, department if role is student
    if (role === "student") {
      if (!course.trim()) newErrors.course = "Course is required";
      if (!section.trim()) newErrors.section = "Section is required";
      if (!department.trim()) newErrors.department = "Department is required";
    }

    if (!agreeToTerms)
      newErrors.terms = "You must agree to the Terms and Conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Here you would normally send the data to your backend API
      // For now, just redirect based on role
      if (role === "student") {
        router.push("/student");
      } else if (role === "organization") {
        router.push("/organization");
      } else {
        router.push("/guest");
      }
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
            <div className="w-full max-w-md p-6 lg:p-0">
              {" "}
              {/* Added padding for small screens, removed for large */}
              {/* Logo and Back Button */}
              <div className="flex items-center justify-between mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/kabserve_logo1.svg"
                  alt="Kabserve Logo"
                  className="h-8"
                />
                <Link href={"/login"}>
                  <button className="p-2 rounded-full hover:bg-white/10 cursor-pointer">
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
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                {/* First Name and Surname - Always side-by-side */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={`bg-transparent border rounded px-4 py-2 placeholder:text-white/50 w-full ${
                        errors.firstName
                          ? "border-red-500 text-red-500"
                          : "border-white text-white"
                      }`}
                      required
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className={`bg-transparent border rounded px-4 py-2 placeholder:text-white/50 w-full ${
                        errors.surname
                          ? "border-red-500 text-red-500"
                          : "border-white text-white"
                      }`}
                      required
                    />
                    {errors.surname && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.surname}
                      </p>
                    )}
                  </div>
                </div>

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
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </p>
                )}

                {/* Conditional fields based on role */}
                {role === "student" && (
                  <>
                    {/* Course and Section - Always side-by-side */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Course"
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className={`w-full bg-transparent border rounded px-4 py-2 placeholder:text-white/50 ${
                            errors.course
                              ? "border-red-500 text-red-500"
                              : "border-white text-white"
                          }`}
                          required
                        />
                        {errors.course && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.course}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Section"
                          value={section}
                          onChange={(e) => setSection(e.target.value)}
                          className={`w-full bg-transparent border rounded px-4 py-2 placeholder:text-white/50 ${
                            errors.section
                              ? "border-red-500 text-red-500"
                              : "border-white text-white"
                          }`}
                          required
                        />
                        {errors.section && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.section}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Department - Always full width */}
                    <div>
                      <input
                        type="text"
                        placeholder="Department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className={`w-full bg-transparent border rounded px-4 py-2 placeholder:text-white/50 ${
                          errors.department
                            ? "border-red-500 text-red-500"
                            : "border-white text-white"
                        }`}
                        required
                      />
                      {errors.department && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.department}
                        </p>
                      )}
                    </div>
                  </>
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

                <div className="flex items-center gap-2 text-sm text-white">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    className="accent-yellow-400"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                  />
                  <label htmlFor="agreeToTerms" className="cursor-pointer">
                    I agree to the{" "}
                    <span
                      className="underline hover:text-yellow-400"
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
                {errors.terms && (
                  <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
                )}

                <button
                  type="submit"
                  className={`w-full ${
                    agreeToTerms
                      ? "bg-yellow-400 text-green-900 hover:bg-yellow-500 cursor-pointer"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  } font-bold py-2 rounded transition active:scale-97`}
                  disabled={!agreeToTerms}
                >
                  Sign Up
                </button>
              </form>

              <div className="mt-6 text-left text-sm">
                <Link href="/login" className="text-white">
                  Already have an account?{" "}
                  <span className="text-yellow-500 hover:underline">
                    Log in
                  </span>
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

          {/* Right: Illustration */}
          <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
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