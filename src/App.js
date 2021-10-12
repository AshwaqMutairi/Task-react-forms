import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const createStudent = (newStudent) => {
    const id =
      studentsInfo.length > 0
        ? studentsInfo[studentsInfo.length - 1].id + 1
        : 1;
    newStudent = { ...newStudent, id: id };
    console.log(newStudent);
    setStudentsInfo([...studentsInfo, newStudent]);
  };

  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (
        <StudentsList list={studentsInfo} />
      ) : (
        <Form createStudent={createStudent} />
      )}
      <Form createStudent={createStudent} />
    </div>
  );
}

export default App;
