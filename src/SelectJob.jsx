import React from "react";

export default function SelectJob({ setJob, jobs }) {
  if (!jobs) {
    return <div>no jobs</div>;
  } else {
    const jobsNames = Object.keys(jobs).map((job) => (
      <option key={job}>{job}</option>
    ));

    return (
      <select onChange={setJob}>
        <option disabled>select job</option>
        {jobsNames}
      </select>
    );
  }
}
