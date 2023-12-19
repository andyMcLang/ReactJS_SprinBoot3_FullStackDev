import "./App.css";
import FooterComponent from "./components/FooterComponent";
import Headercomponent from "./components/Headercomponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    <>
      <Headercomponent />
      <ListEmployeeComponent />
      <FooterComponent />
    </>
  );
}

export default App;
