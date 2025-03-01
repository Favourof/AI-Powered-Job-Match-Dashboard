import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div
          key={idx}
          className="p-4 border rounded-lg shadow-md animate-pulse"
        >
          <div className="h-6 bg-gray-100 rounded mb-2 "></div>
          <div className="h-4 bg-gray-100 rounded mb-2"></div>
          <div className="h-4 bg-gray-100 rounded mb-2"></div>
          <div className="h-4 bg-gray-100 rounded"></div>
        </div>
      ))}
    </div>
  );
}
