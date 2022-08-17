import React from "react";
import AddShiftDialog from "./AddShiftDialog";
import SelectJob from "./SelectJob";

export default function ShiftDialogContainer() {
  return (
    <div>
      <h1>Add Shift</h1>
      <SelectJob></SelectJob>
      <AddShiftDialog></AddShiftDialog>
    </div>
  );
}
