import React from "react";
import { useState } from "react";

export default function SelectJob() {
  const [showJobs, setShowJobs] = useState(false);

  const renderingJobsName = () => {
    let jobs = JSON.parse(localStorage.jobs);
    const jobsNames = jobs.map((job) => <div>{job.key}</div>);
    return <div>{jobsNames}</div>;
  };
  return (
    <div>
      <button onClick={() => setShowJobs(true)}> Select Job</button>
      {showJobs && renderingJobsName()}
    </div>
  );
}
