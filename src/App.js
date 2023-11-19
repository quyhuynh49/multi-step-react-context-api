import React from "react";
import { MultiStepContext } from "./StepContext";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import DisplayData from "./components/DisplayData";

function App() {
  const { currentStep, finalData } = React.useContext(MultiStepContext);

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      default:
    }
  };
  console.log("current step: ", currentStep);
  
  return (
    <main>
      <div>{showStep(currentStep)}</div>
      {finalData.length > 0 && <DisplayData />}
    </main>
  );
}

export default App;
