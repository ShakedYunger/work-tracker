import React from "react";
import JobReportPreview from "./JobReportPreview";
import ShiftDialogContainer from "./ShiftDialogContainer";

export default function JobReportList({ time }) {
  if (time === "month" && localStorage.jobs) {
    let jobs = JSON.parse(localStorage.jobs);

    //   let totalSalary = 0;
    // let shifts= JSON.parse(localStorage.shifts);
    // const shiftsList = jobs.map((shift) => (shift.)

    const jobsList = jobs.map((job) => (
      <JobReportPreview
        job={Object.keys(job)}
        time={time}
        key={Object.keys(job)}
      ></JobReportPreview>
    ));
    return (
      <div>
        <h1> {time} report </h1>
        {jobsList}
      </div>
    );
  }
}
