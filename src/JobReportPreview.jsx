import React from "react";

export default function JobReportPreview({
  workDuration,
  job,
  date,
  dailySalary,
  tip,
}) {
  const convertMinutesToSalary = (time, workDuration, jobName) => {
    let payPerHour = jobs[jobName];
    let payPerMinutes = payPerHour / 60;
    let dailySalary = Math.floor(workDuration * payPerMinutes);
    // setTotalSalary((totalSalary) => [...totalSalary, { [time]: dailySalary }]);
    console.log(totalSalary);
    return dailySalary;
  };

  const finalSalary = Math.floor(Number(dailySalary) + Number(tip));
  const hours = Math.floor(workDuration / 60);
  // const minuets = (workDuration) => {
  //   if (workDuration % 60 < 10) {
  //     console.log(123);
  //     return 0 + String(workDuration % 60);
  //   } else {
  //     console.log(12355565);
  //     return workDuration % 60;
  //   }
  // };

  return (
    <div>
      <h3>{job}</h3>
      <ul>
        <li>
          {date}: {finalSalary}({tip}) - {hours} hours
        </li>
      </ul>
    </div>
  );
}
