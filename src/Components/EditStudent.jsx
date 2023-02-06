import React, { useContext} from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"
import "./AddNewStudent.css"
import { StudentContext } from './Context'

const EditStudent = () => {
    const context=useContext(StudentContext)
    console.log(context);
    const location=useLocation();
    console.log(location);
    const navigate=useNavigate();
    const index=(location.state.newstudent);
    const newObj={
        name:context.entries[index].name,
        age:context.entries[index].age,
        course:context.entries[index].course,
        batch:context.entries[index].batch,
    }
    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;
       // console.log(newObj);     
    }

   const handleUpdate = (event) =>{
       console.log(context.entries[index])
       context.updateFunction(
        (prevObj)=>{
            prevObj[index] = newObj;
            return (prevObj)  //updated prevobj is the new state
        }
       );
       navigate('/');
    }
  return (
    <div className='addnewstudentform'>
        <form>
            <h2>Edit Student Details</h2>
            <div className="input-container ic1">
                <input name="name" type="text" onChange={handleChange} className="input" placeholder={context.entries[index].name} />
                <div className="cut"></div>
                {/* <label htmlFor='name'className="placeholder">Name</label> */}
            </div>
            <div className="input-container ic2">
                <input name='age'className="input" onChange={handleChange} type="number" placeholder={context.entries[index].age}/>
                <div className="cut"></div>
                {/* <label htmlFor="age" className="placeholder">Age</label> */}
            </div>
            <div className="input-container ic3">
                <input name="course"  className="input" onChange={handleChange} type="text" placeholder={context.entries[index].course} />
                <div className="cut"></div>
                {/* <label htmlFor="course" className="placeholder">Course</label> */}
            </div>
            <div className="input-container ic4">
                <input name="batch" className="input" onChange={handleChange} type="text" placeholder={context.entries[index].batch} />
                <div className="cut"></div>
                {/* <label htmlFor="batch" className="placeholder">Batch</label> */}
            </div>
            <Link to="/student"><button className="submit-btn" onClick={handleUpdate} type='submit'>Update</button></Link>
            <Link to="/student"><button  className="cancel-btn" type='cancel'>Cancel</button></Link>
        </form>
    </div> 
  )
}

export default EditStudent