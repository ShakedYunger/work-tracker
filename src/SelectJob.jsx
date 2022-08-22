import React from "react";

export default function SelectJob({ setCurrentJob }) {
  // const renderingJobsName = () => {
  let jobs = JSON.parse(localStorage.jobs);
  const jobsNames = jobs.map((job) => <option>{Object.keys(job)}</option>);
  return (
    <select onChange={(e) => setCurrentJob(e.target.value)}>
      <option>select job</option>
      {jobsNames}
    </select>
  );
}
