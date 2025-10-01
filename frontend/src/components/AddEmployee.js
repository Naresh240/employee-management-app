import React, { useState } from "react";
import axios from "axios";

function AddEmployee() {
  const [empno, setEmpno] = useState("");
  const [empname, setEmpname] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/employees/add", {
      empno,
      empname,
      salary,
    });
    alert("Employee added successfully!");
    setEmpno("");
    setEmpname("");
    setSalary("");
  };

  return (
    <div>
      <h4>Add Employee</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" placeholder="Emp No" value={empno} onChange={(e) => setEmpno(e.target.value)} required />
        <input type="text" className="form-control mb-2" placeholder="Emp Name" value={empname} onChange={(e) => setEmpname(e.target.value)} required />
        <input type="text" className="form-control mb-2" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
        <button type="submit" className="btn btn-success">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
