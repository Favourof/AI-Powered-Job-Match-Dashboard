"use client";

import { useJobContext } from "../context/JobContext";
import { Job } from "../type";
import LoadingSkeleton from "./LoadingSkeleton";

interface JobListProps {
  onSelectJob: (job: Job) => void;
}

export default function JobList({ onSelectJob }: JobListProps) {
  const { jobs, user, calculateMatchScore, loading, error } = useJobContext();

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-4 mt-4">
      {jobs.map((job: Job) => {
        const matchScore = calculateMatchScore(
          job.requiredSkills,
          user?.skills || []
        );

        // Determine the color based on the match score
        const progressColor =
          matchScore >= 80
            ? "bg-green-500"
            : matchScore >= 50
            ? "bg-yellow-500"
            : "bg-red-500";

        return (
          <div
            key={job.id}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100"
            onClick={() => onSelectJob(job)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {job.company} - {job.location}
                </p>
              </div>
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    matchScore >= 80
                      ? "bg-green-100 text-green-700"
                      : matchScore >= 50
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  Match Score: {matchScore}%
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-3">Salary: ${job.salary}</p>
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${progressColor}`}
                  style={{ width: `${matchScore}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
