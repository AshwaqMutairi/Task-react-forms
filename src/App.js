import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const createStudent = (newStudent) => {
    const id = StudentsList[StudentsList.length - 1].id + 1;
    const nStudent = { ...newStudent, id: id };
    console.log(nStudent);
    setStudentsInfo([...StudentsList, newStudent]);
  };

  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? <StudentsList list={studentsInfo} /> : <Form />}
      <Form createStudent={createStudent} />
    </div>
  );
}

export default App;
