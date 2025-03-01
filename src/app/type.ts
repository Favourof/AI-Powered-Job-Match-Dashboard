export interface Job {
    id: string | number;
    title: string;
    company: string;
    location: string;
    salary: number;
    requiredSkills: string[];
    userSkills?: string[]; // Optional: User's skills for comparison
  }
  
  export interface JobDetailsProps {
    job: Job;
    close: () => void;
  }