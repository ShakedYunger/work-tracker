import React, { useState, useEffect } from "react";
import SelectJob from "./SelectJob";

export default function AddShiftDialog({ currentJob }) {
  const [shift, setShift] = useState({
    job: null,
    date: null,
    workDuration: null,
    tip: null,
  });

  // const [jobs, setJobs] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  // useEffect(() => {
  //   if (localStorage.jobs) {
  //     const parsedJobs = JSON.parse(localStorage.jobs);
  //     console.log(parsedJobs);
  //     setJobs(parsedJobs);
  //   }
  //   // Code here will run after *every* render
  // }, []);
  let jobs = null;
  if (localStorage.jobs) {
    jobs = JSON.parse(localStorage.jobs);
  }
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
      <SelectJob setJob={(addJobToState, jobs)}></SelectJob>
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
