import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import AddItem from '../Components/AddItem';
// import EditForm from '../Components/EditForm';
import {StudentContext} from '../context/StudentContextProvider';


const Student = (props) => {
    const [active,setActive] = useState();
    // const [nactive,setnActive] = useState();
    const [isShown, setIsShown] = useState(true);

    const { student } = useContext(StudentContext);

    
    return (
        <>
        <div className="container" style={{display: isShown ? 'block' : 'none'}}>
            <header>
                <h1 className='head1'>Student Details</h1>
                <button className='btn' onClick={() => {setActive(!active); setIsShown(current => !current);}}>Add new student</button>

    
            </header>
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
            <>
            <tr key={stu.id}>
              <td>{stu.name}</td>
              <td>{stu.age}</td>
              <td>{stu.course}</td>
              <td>{stu.batch}</td>
              <td>
                <Link to="/editForm" state={{ theStudent: {stu} }}>Edit</Link> 
              </td>
              {/* {nactive ? <EditForm theStudent={stu}/> : null} */}
            </tr>
            
            </>
            
          );
        })}
      </tbody>
    </table>
           
        </div>
      {active ? <AddItem/> : null}
     
     </>
    );
}

export default Student;