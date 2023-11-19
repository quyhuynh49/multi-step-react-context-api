import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";

function ThirdStep() {
  const { currentStep, setCurrentStep, userData, setUserData, submitData } =
    useContext(MultiStepContext);
  return (
    <div>
      <fieldset>
        <legend>step {currentStep}</legend>
        <label htmlFor="email">email</label>
        <input
          onChange={(event) =>
            setUserData({ ...userData, email: event.target.value })
          }
          value={userData["email"] || ""}
          id="email"
          type="text"
        />
        <br />
        <br />
        <label htmlFor="phoneNumber">phone number</label>
        <input
          onChange={(event) =>
            setUserData({ ...userData, phoneNumber: event.target.value })
          }
          value={userData["phoneNumber"] || ""}
          id="phoneNumber"
          type="text"
        />
        <br />
        <br />
        <button onClick={() => setCurrentStep(2)}>previous</button>
        <button onClick={submitData}>submit</button>
      </fieldset>
    </div>
  );
}

export default ThirdStep;
