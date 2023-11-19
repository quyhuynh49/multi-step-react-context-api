import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";

function SecondStep() {
  const { currentStep, setCurrentStep, userData, setUserData } =
    useContext(MultiStepContext);

  return (
    <div>
      <fieldset>
        <legend>step {currentStep}</legend>
        <label htmlFor="country">country</label>
        <input
          onChange={(event) =>
            setUserData({ ...userData, country: event.target.value })
          }
          value={userData["country"] || ""}
          id="country"
          type="text"
        />
        <br />
        <br />
        <label htmlFor="district">district</label>
        <input
          onChange={(event) =>
            setUserData({ ...userData, district: event.target.value })
          }
          value={userData["district"] || ""}
          id="district"
          type="text"
        />
        <br />
        <br />
        <button onClick={() => setCurrentStep(1)}>previous</button>
        <button onClick={() => setCurrentStep(3)}>next</button>
      </fieldset>
    </div>
  );
}

export default SecondStep;
