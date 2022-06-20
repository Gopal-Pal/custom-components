import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";
import { DROPDOWN_OPTIONS } from "./components/Dropdown/constant";

const App = () => {
  const [selectedOption, setSelectedOptions] = React.useState(
    DROPDOWN_OPTIONS[0],
  );
  return (
    <div className="app">
      <Dropdown
        options={DROPDOWN_OPTIONS}
        selectedOptions={selectedOption}
        setSelectedOptions={setSelectedOptions}
        label={" Please choose one "}
      />
    </div>
  );
};

export default App;
