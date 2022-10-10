import React, { useState } from "react";
import JobReportPreview from "./JobReportPreview";
import ShiftDialogContainer from "./ShiftDialogContainer";

export default function JobReportList({ time, shifts, jobs }) {
  const [totalSalary, setTotalSalary] = useState(() => {
    {
    }
  });

  const convertMinutesToSalary = (time, workDuration, jobName) => {
    let payPerHour = jobs[jobName];
    let payPerMinutes = payPerHour / 60;
    let dailySalary = Math.floor(workDuration * payPerMinutes);
    // setTotalSalary((totalSalary) => [...totalSalary, { [time]: dailySalary }]);
    console.log(totalSalary);
    return dailySalary;
  };

  if (time === "month" && shifts) {
    const shiftsList = shifts.map((shift) => {
      return (
        <JobReportPreview
          workDuration={shift.workDuration}
          job={shift.job}
          date={shift.date}
          dailySalary={convertMinutesToSalary(
            time,
            shift.workDuration,
            shift.job
          )}
          tip={shift.tip}
          time={time}
        ></JobReportPreview>
      );
    });

    return (
      <div>
        <h1> {time} report </h1>
        {shiftsList}
        {totalSalary}
      </div>
    );
  }
}
