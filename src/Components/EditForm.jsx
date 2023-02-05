import React, { useState,useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StudentContext } from '../context/StudentContextProvider';
import Student from '../Pages/Student';

const EditForm = () => {
    const [active,setActive] = useState();
    const [isShown, setIsShown] = useState(true);
    const navigate = useNavigate();

   const location= useLocation();
   const { theStudent } = location.state;
   console.log(theStudent)

    const id = theStudent.stu.id;
    const [name,setName] = useState(theStudent.stu.name);
    const [age,setAge] = useState(theStudent.stu.age);
    const [course,setCourse] = useState(theStudent.stu.course);
    const [batch,setBatch] = useState(theStudent.stu.batch);

    const {updateStudent} = useContext(StudentContext);

    const updatedStudent = {id, name, age, course, batch}

    function handleSubmit(e){
        e.preventDefault();
        updateStudent(id, updatedStudent);
     navigate('/student')
    }
    console.log(id,name,age,course,batch)
    return (
       <>
        <div className='container' style={{display: isShown ? 'block' : 'none'}}>
     <form onSubmit={handleSubmit}>
        <div className='form'>
           <fieldset className='field'>
              <legend>Name</legend>
              <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} required />
            </fieldset>

            <fieldset className='field'>
              <legend> Age </legend>
              <input type="number" name='age' value={age} onChange={(e) => setAge(e.target.value)}  required />
            </fieldset>

            <fieldset className='field'>
              <legend> Course </legend>
              <input type="text" name='course' value={course} onChange={(e) => setCourse(e.target.value)} required />   
            </fieldset>
           
            <fieldset className='field'>
               <legend> Batch </legend>
               <input type="text" name='batch' value={batch} onChange={(e) => setBatch(e.target.value)} required /> 
            </fieldset>  
         </div>
         <div className='grid-btn'>
            <button className=' button btn1' onClick={() => {setActive(!active);setIsShown(current => !current);}}>Cancel</button> 
            <button className=' button btn2' >Update</button> 
            
        </div>  
      </form>
     </div>
     {active ? <Student/>: null}
       </>
    );
}

export default EditForm;