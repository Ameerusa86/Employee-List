import React, { useEffect, useState } from "react";
import EmployeeCard from "./Card";

const Employees = () => {
  const [employee, setEmployee] = useState([]);

  const API = "https://randomuser.me/api/?page=3&results=15";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setEmployee(data.results));
  }, []);

  console.log(employee);
  return (
    <div className="d-flex flex-wrap p-2">
      {employee.map((item) => (
        <EmployeeCard
          name={item.name.first}
          cell={item.cell}
          img={item.picture.large}
        />
      ))}
    </div>
  );
};

export default Employees;
