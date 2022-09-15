import React from "react";
import AddShiftDialog from "./AddShiftDialog";
import SelectJob from "./SelectJob";
import { useState } from "react";

export default function ShiftDialogContainer() {
  return (
    <div>
      <h1>Add Shift</h1>
      <AddShiftDialog></AddShiftDialog>
    </div>
  );
}
