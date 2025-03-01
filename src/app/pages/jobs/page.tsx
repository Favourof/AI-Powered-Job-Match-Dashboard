"use client";
import { useState } from "react";

import { Job } from "../../type";
import JobList from "../../components/JobList";
import JobDetails from "../../components/JobDetails";
// import JobList from "@/components/JobList";
// import JobDetails from "@/components/JobDetails";

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl text-black font-bold">Available Jobs</h2>
      <JobList onSelectJob={(job: Job) => setSelectedJob(job)} />
      {selectedJob && (
        <JobDetails job={selectedJob} close={() => setSelectedJob(null)} />
      )}
    </div>
  );
}
