import React from "react";

export default function AddShiftDialog() {
  let shift = {
    job: null,
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

  console.log(getStartingTime);
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
      shiftsList = JSON.parse(localStorage.shifts);
      shiftsList.push(currentShift);
      console.log(123);
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
