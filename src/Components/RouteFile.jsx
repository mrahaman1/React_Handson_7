import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from "./Home"
import Students from './Students'
import Contact from "./Contact"
import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent'
import { StudentContext } from './Context'


const RouteFile = () => {
  var list=[
   {id:1,name:'Mustafijur Rahaman',age:26,course:"MERN",batch:"september"},
   {id:2,name:'Raiyan Ashab',age:28,course:"MERN",batch:"october"},
   {id:3,name:'Aynan Tasneem',age:27,course:"MERN",batch:"November"},
   {id:4,name:'Atif Aslam',age:25,course:"MERN",batch:"December"},
];
  const [newstudent,setNewStudent]=useState(list)
  return (
    <div>
         <Routes>
            <Route path='/' element={<Navbar />}/>
            <Route index element={ <Home />} />
            <Route path='/student' element={
               <StudentContext.Provider value={{entries:newstudent ,updateFunction:setNewStudent}}>
               <Students />
             </StudentContext.Provider>
            } />
            <Route path='/contact' element={ <Contact />} />
            <Route path='/addnewstudent' element={
               <StudentContext.Provider value={{entries:newstudent ,updateFunction:setNewStudent}}>
               <AddNewStudent />
             </StudentContext.Provider>
            } />
            <Route path='/editstudent' element={
               <StudentContext.Provider value={{entries:newstudent ,updateFunction:setNewStudent}}>
               <EditStudent />
             </StudentContext.Provider>
            } />
        </Routes>
    </div>
  )
}

export default RouteFile