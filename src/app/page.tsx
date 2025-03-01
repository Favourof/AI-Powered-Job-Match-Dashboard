"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gray-100">
      {/* Title Animation */}
      <motion.h1
        className="text-4xl font-extrabold mb-4 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        AI-Powered Job Match Dashboard
      </motion.h1>

      {/* Description Animation */}
      <motion.p
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        Sign up to find jobs that match your skills and interests.
      </motion.p>

      {/* Button Animation */}
      <motion.button
        onClick={() => router.push("/pages/signup")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg font-semibold hover:bg-blue-700 focus:ring focus:ring-blue-300 transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
      >
        Get Started
      </motion.button>
    </main>
  );
}
