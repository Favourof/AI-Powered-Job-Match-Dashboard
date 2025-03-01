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

  export interface User {
    name: string;
    skills: string[];
  }

  export interface JobContextType {
    user: User | null;
    signupUser: (userData: User) => void;
    jobs: Job[];
    calculateMatchScore: (jobSkills: string[], userSkills: string[]) => number;
    loading: boolean;
    error: string | null;
  }