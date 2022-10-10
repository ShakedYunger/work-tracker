import React, { useState, useEffect } from "react";
import SelectJob from "./SelectJob";

export default function AddShiftDialog({ jobs, setShifts }) {
  const [shift, setShift] = useState({
    job: null,
    date: null,
    workDuration: null,
    tip: null,
  });

  // const [jobs, setJobs] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const addJobToState = (e) => {
    setShift((pervState) => {
      return { ...pervState, job: e.target.value };
    });
  };

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
    const [startHour, startMinutes] = startTime.split(":");
    const [endHour, endMinutes] = endTime.split(":");
    const startMinutesSum = startHour * 60 + Number(startMinutes);
    const endMinutesSum = endHour * 60 + Number(endMinutes);
    setShift((pervState) => {
      return { ...pervState, workDuration: endMinutesSum - startMinutesSum };
    });
  };

  const addShift = () => {
    console.log(shift);
    setShifts((shifts) => [...shifts, shift]);
  };

  return (
    <label>
      <SelectJob setJob={addJobToState} jobs={jobs}></SelectJob>
      date:
      <input type={"date"} onChange={getDate}></input>
      from
      <input type={"time"} onChange={getStartingTime}></input>
      to
      <input type={"time"} onChange={getEndingTime}></input>
      tip:
      <input onChange={getTip}></input>
      <button onClick={addShift}>submit</button>
    </label>
  );
}
