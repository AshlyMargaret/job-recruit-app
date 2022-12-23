import React from 'react'
import './SideBar.css'
// import Tree, { useTreeState } from 'react-hyper-tree'
import { useNavigate } from 'react-router-dom'


// const data = {
//     id: 1,
//     name: 'Job Listing',
//     children: [
//       {
//         id: 2,
//         name: 'Add New Job',
        
//       },
//       {
//         id: 2,
//         name: 'Job Management',
        
        
//       },
//     ],
//   }



function SideBar() {
    // const { required, handlers } = useTreeState({
    //     data,
    //     id: 'your_tree_id',
    //     data: data,
    //   defaultOpened: true,
    //   multipleSelect: false,
    //   })

    const navigate = useNavigate()
    
  return (
    <div className='sideBar'>
        <div className="logoSection_box">
            <h1>Logo</h1>
        </div>
        <div className="menuSection_box">
          
        {/* <Tree
      {...required}
      {...handlers}
      horizontalLineStyles={{
        stroke: '#F0F0F0',
        strokeWidth: 1,
        strokeDasharray: '1 4',
  }}
  verticalLineStyles={{
    stroke: '#F0F0F0',
    strokeWidth: 1,
    strokeDasharray: '1 4',
}}
/> */}

   <ul>
   <li onClick={()=>{
      navigate("/")
    }}>Add New Job <i className='angle' class="fa fa-angle-right" aria-hidden="true"></i>
    </li>
    <li onClick={()=>{
      navigate("/joblist")
    }}>Job Listing <i class="fa fa-angle-right " aria-hidden="true"></i>
    </li>
    <li onClick={()=>{
      navigate("*")
    }}>Upcoming Interviews  <i class="fa fa-angle-right" aria-hidden="true"></i>
</li>
    <li onClick={()=>{
      navigate("*")
    }}>Users <i class="fa fa-angle-right" aria-hidden="true"></i>
</li>
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
