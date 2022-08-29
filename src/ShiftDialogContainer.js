import React from "react";
import AddShiftDialog from "./AddShiftDialog";
import SelectJob from "./SelectJob";
import { useState } from "react";

export default function ShiftDialogContainer() {
  // const [currentJob, setCurrentJob] = useState(null);
  return (
    <div>
      <h1>Add Shift</h1>
      {/* <SelectJob setCurrentJob={setCurrentJob}></SelectJob> */}
      <AddShiftDialog></AddShiftDialog>
    </div>
  );
}
