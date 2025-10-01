import React from "react";
import AddEmployee from "./components/AddEmployee";
import ListEmployees from "./components/ListEmployees";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Employee Management</h2>
      <AddEmployee />
      <hr />
      <ListEmployees />
    </div>
  );
}

export default App;
