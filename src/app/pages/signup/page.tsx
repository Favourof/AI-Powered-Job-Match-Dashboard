"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useJobContext } from "../../context/JobContext";
import { motion } from "framer-motion";

export default function Signup() {
  const { signupUser } = useJobContext();
  const router = useRouter();
  const [userData, setUserData] = useState({ name: "", skills: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedSkills = userData.skills.split(",").map((s) => s.trim());
    signupUser({ ...userData, skills: formattedSkills });
    router.push("/pages/jobs");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              placeholder="JavaScript, React, Tailwind"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={userData.skills}
              onChange={(e) =>
                setUserData({ ...userData, skills: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </motion.div>
    </div>
  );
}
