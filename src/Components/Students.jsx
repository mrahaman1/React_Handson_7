import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Students.css'
import { StudentContext } from './Context'


const Students = () => {
    const addHandler=()=>{
        console.log("add called");
    }
    const context=useContext(StudentContext);
    //context is the data which provided in form..
    console.log(context);
  return (
    <div className='StudentPage'>
       <div className='top'>
        <ul> 
            <li><h3>Student Details</h3></li>
            <li><Link to="/addnewstudent" onClick={addHandler}><button>Add New Student</button></Link></li>
        </ul>
        <div className='student-data'>
        <table className="data-table" border={"2"}>
            <thead>
                <tr>
                    {/* <th>S.No</th> */}
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    context.entries.map((studentdata,index)=>(
                <tr key={index}>
                    {console.log(studentdata)}
                    {/* <td>{studentdata.id}</td> */}
                    <td>{studentdata.name}</td>
                    <td>{studentdata.age}</td>
                    <td>{studentdata.course}</td>
                    <td>{studentdata.batch}</td>
                    <td>
                        <Link to="/editstudent" state={{newstudent:index}}>Edit</Link> 
                       {/* <Link to="/editstudent" state={{newstudent:index}}><button><i class="fa-solid fa-pen"></i></button></Link>  */}
                       {/* <button><i class="fa-solid fa-trash"></i></button> */}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
       </div>
    </div>
  )
}

export default Students