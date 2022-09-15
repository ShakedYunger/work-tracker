import React from "react";

export default function JobReportPreview({ job, date, dailySalary, tip }) {
  return (
    <div>
      <h3>{job}</h3>
      <ul>
        <li>
          {date}: {dailySalary} - {tip}
        </li>
      </ul>
    </div>
  );
}
