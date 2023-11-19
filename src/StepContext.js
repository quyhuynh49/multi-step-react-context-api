import React, { useState } from "react";

export const MultiStepContext = React.createContext();

function StepContext({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const submitData = () => {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData([]);
    setCurrentStep(1);
  };

  return (
    <div>
      <MultiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        {children}
      </MultiStepContext.Provider>
    </div>
  );
}

export default StepContext;
