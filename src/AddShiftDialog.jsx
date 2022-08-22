import React from "react";

export default function AddShiftDialog({ currentJob }) {
  console.log(currentJob);
  let shift = {
    job: currentJob,
    date: null,
    workDuration: null,
    tip: null,
  };

  const getDate = (e) => {
    shift.date = e.target.value;
  };

  const getStartingTime = (e) => {
    return e.target.value;
  };

  const getEndingTime = (e) => {
    return e.target.value;
  };

  const getTip = (e) => {
    shift.tip = e.target.value;
  };

  const workDuration = () => {
    // var startTime = moment(getStartingTime, "HH:mm:ss a");
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
