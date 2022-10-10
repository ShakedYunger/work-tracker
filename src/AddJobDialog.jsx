import React, { useState } from "react";

export default function AddJobDialog({ jobs, setJobs }) {
  const [job, setJob] = useState();

  const setJobName = (e) => {
    const name = e.target.value;
    setJob((job) => {
      return { ...job, name };
    });
  };

  const setJobWage = (e) => {
    const hourlyWage = e.target.value;
    setJob((job) => {
      return { ...job, hourlyWage };
    });
  };

  const addJob = () => {
    setJobs((jobs) => {
      return { ...jobs, [job.name]: job.hourlyWage };
    });
  };

  return (
    <div>
      <h1>add job</h1>
      job's name:
      <input type={"text"} onChange={setJobName}></input>
      <br></br>
      hourly wage:
      <input type={"text"} onChange={setJobWage}></input>
      <br></br>
      <button onClick={addJob}>add job</button>
    </div>
  );
}
