import React from "react";
import AddShiftDialog from "./AddShiftDialog";
import SelectJob from "./SelectJob";
import { useState } from "react";

export default function ShiftDialogContainer({ jobs, setShifts }) {
  return (
    <div>
      <h1>Add Shift</h1>
      <AddShiftDialog jobs={jobs} setShifts={setShifts}></AddShiftDialog>
    </div>
  );
}
