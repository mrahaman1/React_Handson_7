import React,{useContext} from 'react'
import {Link,useNavigate} from "react-router-dom"
import "./AddNewStudent.css"
import { StudentContext } from './Context'


const AddNewStudent = () => {
    const context=useContext(StudentContext)
    console.log(context);
    const navigate=useNavigate();
    const newObj={
        id:"",
        name:"",
        age:"",
        course:"",
        batch:"",
    }
    const handleChange = (event) =>{
        newObj[event.target.name] = event.target.value;
       // console.log(newObj);     
    }
    const handlesubmit = () =>{
        context.updateFunction(
         (prevObj)=>{
             prevObj.push(newObj)
             return (prevObj)  //updated prevobj is the new state
         }
        );
        navigate('/');
    }
    
  return (
    <div className='addnewstudentform'>
        <form>
            <h2>Add New Student</h2>
            <div className="input-container ic1">
                <input name="name" type="text"  onChange={handleChange} className="input" placeholder=" " />
                <div className="cut"></div>
                <label htmlFor='name'className="placeholder">Name</label>
            </div>
            <div className="input-container ic2">
                <input name='age'className="input" type="number" onChange={handleChange} placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">Age</label>
            </div>
            <div className="input-container ic3">
                <input name="course"  className="input" type="text" onChange={handleChange} placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="course" className="placeholder">Course</label>
            </div>
            <div className="input-container ic4">
                <input name="batch" className="input" type="text" onChange={handleChange} placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="batch" className="placeholder">Batch</label>
            </div>
            <Link to="/student"><button className="submit-btn" type='submit' onClick={handlesubmit}>submit</button></Link>
            <Link to="/student"><button  className="cancel-btn" type='cancel'>Cancel</button></Link>
        </form>
    </div>
  )
}

export default AddNewStudent