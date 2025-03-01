"use client";

import { Job, JobDetailsProps } from "../type";
import { useJobContext } from "../context/JobContext";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function JobDetails({ job, close }: JobDetailsProps) {
  const { user, calculateMatchScore } = useJobContext();
  const [matchScore, setMatchScore] = useState(0);
  const [missingSkills, setMissingSkills] = useState<string[]>([]);

  useEffect(() => {
    if (user?.skills) {
      const score = calculateMatchScore(job.requiredSkills, user.skills);
      setMatchScore(score);

      // Identify missing skills
      const missing = job.requiredSkills.filter(
        (skill) => !user.skills.includes(skill)
      );
      setMissingSkills(missing);
    }
  }, [user, job, calculateMatchScore]);

  const handleApply = () => {
    toast.success("Application submitted successfully!");
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          initial={{ y: -50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -20, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h3 className="text-xl font-bold text-green-700">{job.title}</h3>
          <p className="text-gray-600">
            {job.company} - {job.location}
          </p>
          <p className="mt-2 text-gray-700">Salary: ${job.salary}</p>

          <h4 className="mt-4 font-semibold text-green-700">
            Required Skills:
          </h4>
          <ul className="flex flex-wrap gap-2 mt-2">
            {job.requiredSkills.map((skill, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 text-sm rounded-full ${
                  user?.skills.includes(skill)
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {skill}
              </span>
            ))}
          </ul>

          <div className="mt-4">
            <p className="font-semibold text-green-700 ">
              Match Score:{" "}
              <span
                className={`text-lg font-bold ${
                  matchScore >= 80
                    ? "text-green-600"
                    : matchScore >= 50
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {matchScore}%
              </span>
            </p>

            {matchScore < 80 && missingSkills.length > 0 && (
              <div className="mt-3 p-3 bg-yellow-100 border border-yellow-400 rounded">
                <p className="text-yellow-700 font-semibold">
                  Improve Your Skills:
                </p>
                <p className="text-sm text-yellow-700">
                  To increase your match score, consider learning:{" "}
                  <span className="font-semibold">
                    {missingSkills.join(", ")}
                  </span>
                  .
                </p>
              </div>
            )}
          </div>

          {/* Apply Button */}
          {matchScore >= 80 ? (
            <button
              onClick={handleApply}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full transition hover:bg-green-600"
            >
              Apply Now
            </button>
          ) : (
            <p className="mt-4 text-sm text-gray-600">
              Work on improving your skills to qualify for this job.
            </p>
          )}

          <button
            onClick={close}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full transition hover:bg-red-600"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
