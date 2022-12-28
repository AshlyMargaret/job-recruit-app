import React, { useState } from 'react'
import './SideBar.css'
import { useNavigate } from 'react-router-dom'


function SideBar() {

 const [show, setShow] = useState()
   

    const navigate = useNavigate()
    
  return (
    <div className='sideBar'>
        <div className="logoSection_box">
            <h1>Logo</h1>
        </div>
        <div className="menuSection_box">
          
   <ul className='menuUlConatiner'>
    <li onClick={()=>{
      navigate("*")
    }}><i class="fa-solid fa-id-card"></i>Dashboard</li>

    <li className='dropdown'  onClick={()=>{
      setShow(!show)
 
    }}> <a href="javascript:void(0)"><i class="fa-solid fa-pen-to-square"></i>Job Listing</a> </li>
    {/* <a href="javascript:void(0)" className='dropbtn'>Job Listing</a> */}
    
       {
        show ?  <div className="dropdown-content">
       
        <li onClick={()=>{
          navigate("/")
          }}> <a href="javascript:void(0)"><i className='angle' class="fa fa-angle-right" aria-hidden="true"></i>Add New Job  </a>
        </li>
        <li onClick={()=>{
         navigate("/joblist")
         }}> <a href="javascript:void(0)"> <i className='angle' class="fa fa-angle-right " aria-hidden="true"></i> Job Management 
          </a> 
        </li>
     </div> : null
       }
    
    
  <li onClick={()=>{
      navigate("*")
    }}> <i class="fa-solid fa-user"></i> Upcoming Interviews  
</li>

  <li onClick={()=>{
      navigate("*")
    }}> <i class="fa-sharp fa-solid fa-id-card-clip"></i> Users</li>

  </ul> 
        </div>
        <div className="settingAndLogoutSection">
            <button><i class="fa-sharp fa-solid fa-gear"></i> Settings</button>
            <button><i class="fa-sharp fa-solid fa-right-from-bracket"></i>Logout</button>
        </div>
    </div>
  )
}

export default SideBar
