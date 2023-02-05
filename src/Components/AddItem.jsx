import React,{useState,useContext} from 'react'
import Student from '../Pages/Student';
import { StudentContext } from '../context/StudentContextProvider';

export default function AddItem() {
    const [active,setActive] = useState();
    const [isShown, setIsShown] = useState(true);
    const {addStudent} = useContext(StudentContext)

    const [newStudent, setNewStudent] = useState({
      name:"", age:"", course:"", batch:""
  });

 
    function onInputChange(e){
      setNewStudent({...newStudent,[e.target.name]: e.target.value})
    }

    const {name, age, course, batch} = newStudent;

    function onSubmit(e){
        e.preventDefault();
        addStudent(name,age,course,batch)
        console.log("new",newStudent)
        setActive(!active);
        setIsShown(current => !current);
        // console.log("Name value : "+name+age+course+batch);
        
       

    }
  return (
    <>
     <div className='container' style={{display: isShown ? 'block' : 'none'}}>
     <form onSubmit={onSubmit}>
        <div className='form'>
           <fieldset className='field'>
              <legend>Name</legend>
              <input type="text" name='name' value={name} onChange={(e) => onInputChange(e) } required />
            </fieldset>

            <fieldset className='field'>
              <legend> Age </legend>
              <input type="number" name='age' value={age} onChange={(e) => onInputChange(e) }  required />
            </fieldset>

            <fieldset className='field'>
              <legend> Course </legend>
              <input type="text" name='course' value={course} onChange={(e) => onInputChange(e) } required />   
            </fieldset>
           
            <fieldset className='field'>
               <legend> Batch </legend>
               <input type="text" name='batch' value={batch} onChange={(e) => onInputChange(e) } required /> 
            </fieldset>  
         </div>
         <div className='grid-btn'>
            <button className=' button btn1' onClick={() => {setActive(!active);setIsShown(current => !current);}}>Cancel</button> 
            <button className=' button btn2' >Submit</button> 
            
        </div>  
      </form>
     </div>
     {active ? <Student/>: null}
    </>
  )
}