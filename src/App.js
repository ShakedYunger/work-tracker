import "./App.css";
import ShiftDialogContainer from "./ShiftDialogContainer";
import AddJobDialog from "./AddJobDialog";
import JobReportList from "./JobReportList";
import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState(() => {
    if (!localStorage.jobs) {
      return {};
    } else {
      return JSON.parse(localStorage.jobs);
    }
  });

  const [shifts, setShifts] = useState(() => {
    if (!localStorage.shifts || localStorage.shifts === "undefined") {
      return [];
    } else {
      return JSON.parse(localStorage.shifts);
    }
  });

  useEffect(() => {
    const stringifyShifts = JSON.stringify(shifts);
    localStorage.shifts = stringifyShifts;
  }, [shifts]);

  useEffect(() => {
    const stringifyjobs = JSON.stringify(jobs);
    localStorage.jobs = stringifyjobs;
  }, [jobs]);

  return (
    <div className="App">
      <AddJobDialog jobs={jobs} setJobs={setJobs}></AddJobDialog>
      <ShiftDialogContainer
        jobs={jobs}
        setShifts={setShifts}
      ></ShiftDialogContainer>
      <JobReportList time="month" shifts={shifts} jobs={jobs}></JobReportList>
    </div>
  );
}

export default App;
