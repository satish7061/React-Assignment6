import React,{createContext, useState} from 'react'

export const StudentContext = createContext()

const StudentContextProvider = (props) => {
    
  const [student,setStudent] = useState([
        {id:'1', name: 'SATISH KUMAR', age:'22', course: 'MERN', batch: "EA-16"},
  ])
  
  const addStudent = (name, age, course, batch) => {
    setStudent([...student , {id:student.length, name, age, course, batch}])
  }
 const updateStudent = (id, updatedStudent) => {
    setStudent(student.map((stu) => stu.id === id  ? updatedStudent : stu))
  }
  console.log("new detail",student)
  return (
    <StudentContext.Provider value={{student, addStudent,updateStudent}}>
        {props.children}
    </StudentContext.Provider>
  )
}
export default StudentContextProvider