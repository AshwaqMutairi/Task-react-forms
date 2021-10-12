import React from "react";
import SideInfo from "./SideInfo";
import { useState } from "react";

function Form({ createStudent }) {
  const [student, setStudent] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    power: "",
    mailAddress: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // stops refreshing the page
    createStudent(student);
    setStudent({
      name: "",
      lastName: "",
      phoneNumber: "",
      power: "",
      mailAddress: "",
    });
  };

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          value={student.name}
          required
          placeholder="name"
          onChange={handleChange}
        />
        <input
          name="lastName"
          value={student.lastName}
          placeholder="lastName"
          onChange={handleChange}
        />
        <input
          name="phoneNumber"
          value={student.phoneNumber}
          placeholder="phoneNumber"
          onChange={handleChange}
        />
        <input
          name="power"
          value={student.power}
          placeholder="power"
          onChange={handleChange}
        />
        <input
          name="mailAddress"
          value={student.mailAddress}
          placeholder="mailAddress"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <SideInfo />
    </div>
  );
}

export default Form;
