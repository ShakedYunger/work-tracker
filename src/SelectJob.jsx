import React from "react";

export default function SelectJob({ setJob, jobs }) {
  if (!jobs) {
    return <div>no jobs</div>;
  }
  const jobsNames = jobs.map((job) => (
    <option key={Object.keys(job)}>{Object.keys(job)}</option>
  ));
  return (
    <select onChange={setJob}>
      <option disabled>select job</option>
      {jobsNames}
    </select>
  );
}
