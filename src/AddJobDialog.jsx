import React from "react";

export default function AddJobDialog() {
  let job = {
    name: null,
    hourlyWage: null,
  };

  const addingNametoJob = (e) => (job.name = e.target.value);
  const addingHourlyWagetoJob = (e) => (job.hourlyWage = e.target.value);

  const addingJobToLocalstorage = () => {
    let keyName = job.name;
    let obj = {
      [keyName]: job.hourlyWage,
    };
    if (!localStorage.jobs) {
      let jobList = [];
      console.log(keyName);
      jobList[0] = obj;
      localStorage.setItem("jobs", JSON.stringify(jobList));
    } else {
      let jobList = JSON.parse(localStorage.getItem("jobs"));
      jobList.push(obj);
      localStorage.setItem("jobs", JSON.stringify(jobList));
    }
  };

  return (
    <div>
      <h1>add job</h1>
      job's name:
      <input type={"text"} onChange={addingNametoJob}></input>
      <br></br>
      hourly wage:
      <input type={"text"} onChange={addingHourlyWagetoJob}></input>
      <br></br>
      <button onClick={addingJobToLocalstorage}>add job</button>
    </div>
  );
}
