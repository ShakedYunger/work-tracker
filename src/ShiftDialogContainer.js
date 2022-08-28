import React from "react";
import AddShiftDialog from "./AddShiftDialog";
import SelectJob from "./SelectJob";
import { useState } from "react";

export default function ShiftDialogContainer() {
  const [currentJob, setCurrentJob] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [shift, setShift] = useState({
    job: currentJob,
    date: null,
    workDuration: null,
    tip: null,
  });

  console.log(shift.job);
  console.log(currentJob);
  const getDate = (e) => {
    setShift((pervState) => {
      return { ...pervState, date: e.target.value };
    });
  };

  const getStartingTime = (e) => {
    setStartTime(e.target.value);
    if (endTime !== null) workDuration(startTime, endTime);
    return e.target.value;
  };
  const getEndingTime = (e) => {
    setEndTime(e.target.value);
    if (startTime !== null) workDuration(startTime, e.target.value);
    return e.target.value;
  };

  const getTip = (e) => {
    setShift((pervState) => {
      return { ...pervState, tip: e.target.value };
    });
  };

  const workDuration = (startTime, endTime) => {
    console.log(startTime);
    console.log(endTime);
    const [startHour, startMinutes] = startTime.split(":");
    const [endHour, endMinutes] = endTime.split(":");
    let startMinutesSum = startHour * 60 + Number(startMinutes);
    let endMinutesSum = endHour * 60 + Number(endMinutes);
    setShift((pervState) => {
      return { ...pervState, workDuration: endMinutesSum - startMinutesSum };
    });
  };

  return (
    <div>
      <h1>Add Shift</h1>
      <SelectJob setCurrentJob={setShift}></SelectJob>
      <AddShiftDialog
        currentJob={
          (getDate, getStartingTime, getEndingTime, getTip, workDuration, shift)
        }
      ></AddShiftDialog>
    </div>
  );
}
