import React from "react";

export default function SelectJob({ setCurrentJob }) {
  if (localStorage.jobs === undefined || localStorage.jobs === "") {
  } else {
    let jobs = JSON.parse(localStorage.jobs);
    const jobsNames = jobs.map((job) => (
      <option key={Object.keys(job)}>{Object.keys(job)}</option>
    ));
    return (
      <select onChange={(e) => setCurrentJob(e.target.value)}>
        <option>select job</option>
        {jobsNames}
      </select>
    );
  }
}
