# AI-Powered Job Match Dashboard

## Overview
The AI-Powered Job Match Dashboard is a web application designed to help users find jobs that match their skills and interests. Users can sign up, enter their skills, and receive job recommendations with a match score.

## Features
- User signup with skill input
- AI-based job match scoring
- Job listing and detailed job descriptions
- Animated modal UI for job details
- Smooth UI animations using Framer Motion

## Tech Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **State Management**: Context API
- **UI Animations**: Framer Motion
- **Notifications**: React Hot Toast

## Folder Structure
```
src/
 ├── app/
 │   ├── pages/               # Application pages (Home, Signup, Jobs)
 │   │   ├── signup/          # Signup Page
 │   │   ├── jobs/            # Job Listings Page
 │   │   ├── job-details.tsx  # Job Details Modal Component
 │   ├── components/          # Reusable UI components
 │   ├── context/             # Context API for job state management
 │   ├── types/               # TypeScript type definitions
 ├── public/                  # Static assets
 ├── styles/                  # Global styles
 ├── package.json             # Dependencies and scripts
 ├── tsconfig.json            # TypeScript configuration
 ├── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Favourof/AI-Powered-Job-Match-Dashboard
   cd job-match-dashboard
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.


## License
This project is licensed under the MIT License.
