import "./App.css";
import ShiftDialogContainer from "./ShiftDialogContainer";
import AddJobDialog from "./AddJobDialog";
import JobReportList from "./JobReportList";

function App() {
  return (
    <div className="App">
      <AddJobDialog></AddJobDialog>
      <ShiftDialogContainer></ShiftDialogContainer>
      <JobReportList time="month"></JobReportList>
    </div>
  );
}

export default App;
