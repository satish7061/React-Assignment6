import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContextProvider";


export default function Table(props) {

  const { student } = useContext(StudentContext);

  return (
    <table id="details">
      <thead>
        <tr>
          <td className="t-head">Name</td>
          <td className="t-head">Age</td>
          <td className="t-head">Course</td>
          <td className="t-head">Batch</td>
          <td className="t-head">Change</td>
        </tr>
      </thead>
      <tbody>
        {student.map((stu) => {
          return (
            <tr key={stu.id}>
              <td>{stu.name}</td>
              <td>{stu.age}</td>
              <td>{stu.course}</td>
              <td>{stu.batch}</td>
              <td>
                <a href="#link">Edit</a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}