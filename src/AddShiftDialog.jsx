import React from "react";
import { useState } from "react";

export default function AddShiftDialog({ currentJob }) {
  // const [shift, setShift] = useState({
  //   job: null,
  //   date: null,
  //   workDuration: null,
  //   tip: null,
  // });
  console.log(shift.job);

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const addJobToState = () => {
    setShift((pervState) => {
      return { ...pervState, job: currentJob };
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

  const addingShiftToLocalstorage = () => {
    let currentShift = {
      job: shift.job,
      date: shift.date,
      workDuration: shift.workDuration,
      tip: shift.tip,
    };
    if (localStorage.shifts === undefined || localStorage.shifts === "") {
      let shiftsList = [];
      shiftsList[0] = currentShift;
      localStorage.setItem("shifts", JSON.stringify(shiftsList));
    } else {
      let shiftsList = [];
      // console.log(JSON.parse(localStorage.shifts));
      shiftsList = JSON.parse(localStorage.shifts);
      shiftsList.push(currentShift);
      console.log(shiftsList);

      localStorage.setItem("shifts", JSON.stringify(shiftsList));
    }
  };
  return (
    <label>
      date:
      <input type={"date"} onChange={getDate}></input>
      from
      <input type={"time"} onChange={getStartingTime}></input>
      to
      <input type={"time"} onChange={getEndingTime}></input>
      tip:
      <input onChange={getTip}></input>
      <button onClick={addingShiftToLocalstorage}>submit</button>
    </label>
  );
}
