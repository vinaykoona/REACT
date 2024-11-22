import React from "react";

const Employees = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employees, index) => (
          <li key={index}>
            {employees.name} - {employees.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
