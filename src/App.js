import './App.css';
import React from 'react';
// eslint-disable-next-line
import { useEffect, useRef, useState } from 'react';

const students = [
  { name: 'a', class: 'a', gpa: 'a' },
  { name: 'b', class: 'b', gpa: 'b' },
  { name: 'c', class: 'c', gpa: 'c' },
  { name: 'd', class: 'd', gpa: 'd' },
  { name: 'e', class: 'e', gpa: 'e' },
  { name: 'f', class: 'f', gpa: 'f' },
];

function App() {
  const [student, setStudent] = useState({
    name: '',
    class: '',
    gpa: '',
  });
  const inputRef = useRef({
    name: '',
    class: '',
    gpa: '',
  });
  const inputName = useRef({
    name: '',
  });
  const inputClass = useRef({
    class: '',
  });
  const inputGPA = useRef({
    gpa: '',
  });

  const inputRefs = useRef([]);

  const loadStudent = () => {
    return (
      <div className="students">
        <div className="header">
          <p>Name</p>
          <p>Class</p>
          <p>GPA</p>
        </div>
        {students.map((student) => {
          return (
            <div className="student">
              <p>{student.name}</p>
              <p>{student.class}</p>
              <p>{student.gpa}</p>
            </div>
          );
        })}
        <div className="student">
          <p>{student.name}</p>
          <p>{student.class}</p>
          <p>{student.gpa}</p>
        </div>
      </div>
    );
  };
  const handleAdd = (e) => {
    e.preventDefault();
    students.push(student);
    console.log(students);
  };
  const handleChange = (e) => {
    const { name} = e.target;
    let add = ''
    switch (name) {
      case 'name':
        add = inputName.current.value;
        break;
      case 'class':
        add = inputClass.current.value;
        break;
      case 'gpa':
        add = inputGPA.current.value;
    }
    console.log(name);
    setStudent((prev) => {
      return { ...prev, [name]: add };
    });
    console.log(student);
  };
  return (
    <div>
      <div className="inputBar">
        <form>
          <div>
            <label>Name:</label>
            <input name="name" onChange={handleChange} ref={inputName} />
          </div>
          <div>
            <label>Class:</label>
            <input name="class" onChange={handleChange} ref={inputClass} />
          </div>
          <div>
            <label>GPA:</label>
            <input name="gpa" onChange={handleChange} ref={inputGPA} />
          </div>

          <button onClick={handleAdd}>Add</button>
        </form>
      </div>
      {loadStudent()}
    </div>
  );
}

export default App;
