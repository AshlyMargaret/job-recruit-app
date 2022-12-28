import React from 'react'
import SearchHeader from '../../Components/SearchHeader/SearchHeader'
import SideBar from '../../Components/SideBar/SideBar'
import './JobView_Page.css'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

function JobView_Page() {

  const [jobData, setJobData] = useState([])

  const location = useLocation();

  console.log("job id loction:",location.state.jobid);


useEffect(() => {
     axios.get(`https://techangels.ai/company/api/v1/jobs?jobid=${location.state.jobid}`).then((response)=>{
      console.log("single value:",response.data.data);
      setJobData(response.data.data)
      
     })
}, [])

  return (
    <div className='JobView_Page'>
        <div className="sideBarComponent">
            <SideBar/>
        </div>
        <div className="mainPageOfJobView">
          <div className="searchHeader">
            <SearchHeader/>
          </div>
          <div className="jobDetails">

             <div className="jobDetailsBox1">

             <div className="titleBox box" >
              <div className="titleBox1 bbb">
              <h5>Title:</h5>
              </div>
              <div className="titleBox2 bbb">
              <p>{jobData.Title}</p>
              </div>           
             </div>

              <div className="positionBox box" >
              <div className="positionBox1 bbb">
              <h5>Positon:</h5>
              </div>
              <div className="positionBox2 bbb">
              <p>{jobData.Position}</p>
              </div>
             </div>


             <div className="typeBox box" >
              <div className="bbb">
              <h5>Type:</h5>
              </div>
              <div className="bbb">
              <p>{jobData.Type}</p>
              </div>             
             </div>

             <div className="industryBox box" >
              <div className="bbb">
              <h5>Industry:</h5>
              </div>
              <div className="bbb">
              <p>{jobData.Industry}</p>
              </div>             
             </div>

            
             <div className="experienceBox box" >
              <div className="bbb">
              <h5>Experience:</h5>
              </div>
              <div className="bbb">
              <p>{jobData.Experience}</p>
              </div>            
             </div>

             <div className="skillsBox box" >
              <div className="bbb">
              <h5>Skills:</h5>
              </div>
              <div className="bbb">
              <p>{jobData.skills}</p>
              </div>             
             </div>

          
             </div>
             <div className="jobDetailsBox2">
              <div className="descriptionTitle">
                <h5>Description:</h5>
              </div>
              <div className="desc">
                <p>{jobData.Description}</p>  
              </div>             
          </div>
        </div>
        <div className="editBtn">
          <button>Edit</button>
        </div>
    </div>
    
    </div>
  )
}

export default JobView_Page
