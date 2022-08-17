import "./App.css";
import ShiftDialogContainer from "./ShiftDialogContainer";
import AddJobDialog from "./AddJobDialog";

function App() {
  return (
    <div className="App">
      <AddJobDialog></AddJobDialog>
      <ShiftDialogContainer></ShiftDialogContainer>
    </div>
  );
}

export default App;
