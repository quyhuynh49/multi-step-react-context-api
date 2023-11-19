import React from "react";
import { MultiStepContext } from "../StepContext";

function DisplayData() {
  const { finalData } = React.useContext(MultiStepContext);
  return (
    <table>
      <thead>
        <tr>
          <th>first name</th>
          <th>last name</th>
          <th>country</th>
          <th>district</th>
          <th>email</th>
          <th>phone number</th>
        </tr>
      </thead>
      <tbody>
        {finalData.map((data) => {
          return (
            <tr key={data.firstName}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.country}</td>
              <td>{data.district}</td>
              <td>{data.email}</td>
              <td>{data.phoneNumber}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DisplayData;
