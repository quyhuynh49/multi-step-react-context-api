import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";

function FirstStep() {
  const { currentStep, setCurrentStep, userData, setUserData } =
    useContext(MultiStepContext);

  return (
    <div>
      <fieldset>
        <legend>step {currentStep}</legend>
        <label htmlFor="firstName">first name</label>
        <input
          onChange={(event) =>
            setUserData({ ...userData, firstName: event.target.value })
          }
          value={userData["firstName"] || ""}
          id="firstName"
          type="text"
        />
        <br />
        <br />
        <label htmlFor="lastName">last name</label>
        <input
          onChange={(event) =>
            setUserData({ ...userData, lastName: event.target.value })
          }
          value={userData["lastName"] || ""}
          id="lastName"
          type="text"
        />
        <br />
        <br />
        <button onClick={() => setCurrentStep(2)}>next</button>
      </fieldset>
    </div>
  );
}

export default FirstStep;
