import React from "react";

export default function SelectJob({ setShift }) {
  const addJobToState = (e) => {
        setShift((pervState) => {
          return { ...pervState, job:e.target.value };
        });
      };
  if (localStorage.jobs === undefined || localStorage.jobs === "") {
  } else {
    let jobs = JSON.parse(localStorage.jobs);
    const jobsNames = jobs.map((job) => (
      <option key={Object.keys(job)}>{Object.keys(job)}</option>
    ));
    return (
      <select onChange={addJobToState(e)}
        <option>select job</option>
        {jobsNames}
      </select>
    );
  }
}
