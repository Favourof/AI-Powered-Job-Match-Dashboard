"use client";
import { createContext, useState, useEffect, useContext } from "react";

const JobContext = createContext<any>(null);

export const JobProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch jobs from mock API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          "https://67c1d6dd61d8935867e473ce.mockapi.io/JobDetails"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await res.json();
        setJobs(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Function to set user details
  const signupUser = (userData: any) => {
    setUser(userData);
  };

  // Function to calculate match score
  const calculateMatchScore = (jobSkills: string[], userSkills: string[]) => {
    if (!userSkills.length || !jobSkills.length) return 0;

    const matchedSkills = userSkills.filter((skill) =>
      jobSkills.includes(skill)
    );
    return Math.round((matchedSkills.length / jobSkills.length) * 100);
  };

  return (
    <JobContext.Provider
      value={{ user, signupUser, jobs, calculateMatchScore, loading, error }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
