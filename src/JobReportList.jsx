import React, { useState } from "react";
import JobReportPreview from "./JobReportPreview";
import ShiftDialogContainer from "./ShiftDialogContainer";

export default function JobReportList({ time }) {
  const [totalSalary, setTotalSalary] = useState(null);
  const convertMinutesToSalary = (time, workDuration, job) => {
    let payPerHour = null;
    let jobs = JSON.parse(localStorage.jobs);
    for (let i = 0; i < jobs.length; i++) {
      if (Object.keys(jobs[i])[0] === job) {
        console.log(jobs[i]);
        payPerHour = Object.values(jobs[i]);
      }
    }
    let payPerMinutes = payPerHour / 60;
    let dailySalary = workDuration * payPerMinutes;
    // setTotalSalary({ time: dailySalary });
    return dailySalary;
  };
  if (time === "month" && localStorage.jobs) {
    let shifts = JSON.parse(localStorage.shifts);
    const shiftsList = shifts.map((shift) => (
      <JobReportPreview
        job={shift.job}
        date={shift.date}
        dailySalary={convertMinutesToSalary(
          time,
          shift.workDuration,
          shift.job
        )}
        tip={shift.tip}
      ></JobReportPreview>
    ));

    return (
      <div>
        <h1> {time} report </h1>
        {shiftsList}
        {totalSalary}
      </div>
    );
  }
}
