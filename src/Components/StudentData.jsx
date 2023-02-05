import React from "react";
import { Link } from "react-router-dom";
// import EditForm from "./EditForm";

export default function StudentData({ student }) {
  // const [nactive,setnActive] = useState();
  return (
    <>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.course}</td>
      <td>{student.batch}</td>
      <td>
        <Link to={`/students/${student}`}>
          Edit</Link>
        
      </td>
      {/* {nactive ? <EditForm theStudent={student} /> : null} */}
    </>
  );
}