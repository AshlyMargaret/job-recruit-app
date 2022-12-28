import React from 'react'
import SearchHeader from '../../Components/SearchHeader/SearchHeader'
import SideBar from '../../Components/SideBar/SideBar'
import './JobDetail_Page.css'
import Icon from '../../Images/icon-button.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useRef } from 'react'


function JobDetail_Page() {

    const titleRef = useRef()
    const jobDescRef = useRef()
    const jobTypeRef = useRef()
    const jobIndustryRef = useRef()
    const availabilityRef = useRef()
    const experienceRef = useRef()
    const skillsRef = useRef()

    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();

        const enteredTitle = titleRef.current.value;
        const enteredDesc = jobDescRef.current.value;
        const enteredjobType = jobTypeRef.current.value;
        const enteredIndustry = jobIndustryRef.current.value;
        const enteredAvailabilty = availabilityRef.current.value;
        const enteredExperience = experienceRef.current.value;
        const enteredSkills = skillsRef.current.value;

        const data = {

            Title : enteredTitle,
            Description : enteredDesc,
            Position : enteredjobType,
            Type : enteredAvailabilty,
            Industry : enteredIndustry,
            Experience : enteredExperience,
            skills : enteredSkills
        }
    
        console.log("data:",data);

         axios.post('https://techangels.ai/company/api/v1/jobs?username=test',{
            data: data,
            headers :{
                'Content-Type':'application/json'
            }
         })
         .then(function (response) {
            console.log("response:",response);
            console.log("job_id:",response.data);
            navigate("jobView",

            {state:{jobid : response.data}}
            )
          })
          .catch(function (error) {
            console.log("error:",error);
          });

         

       
      }

    
  return (
    <div className='jobDetail_Page'>
        <div className="jobDetail_Page_LeftSideBar">
            <SideBar/>
        </div>
        <div className="jobDetail_MainPage">
            <div className="ccc">
            <div className="header">
          <img src={Icon} alt="Icon" />
          </div> 
          <div className="jobDetailsForm">
            <div className="jobDetailTitle">
                <h2>Job Details</h2>
            </div>
            <form action="" className='job_form' onSubmit = {handleSubmit }>
            <div className="jobTitle job">
                <label htmlFor="">Title *</label>
                <input type="text" ref={titleRef} />
            </div>
            <div className="jobDesc job">
                <label htmlFor="">Description *</label>
                <input type="text" ref={jobDescRef}/>
            </div>
            <div className="jobType job">
                <label htmlFor="">Type of position *</label>
                <input type="text" ref={jobTypeRef} />
            </div>
            <div className="jobIndustry job">
                <label htmlFor="">Industry *</label>
                <input type="text" ref={jobIndustryRef}/>
            </div>
            <div className="jobAvailabity job">
                <label htmlFor="">Remote/On-site/Hybrid *</label>
                <input type="text" ref={availabilityRef} />
            </div>
            <div className="jobExperience job">
                <label htmlFor="">Work Experience *</label>
                <input type="text" ref={experienceRef} />
            </div>
            <div className="jobSkills job">
                <label htmlFor="">Skills *</label>
                <input type="text" ref={skillsRef}/>
            </div>
            {/* <div className="cityCountry "> 
            <div className="jobCity">
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div className="jobCountry">
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            </div> */}
            
            {/* <div className="jobsalary">
                <label htmlFor=""></label>
                <input type="text" />
            </div> */}
            <div className="saveBtn">
            <button type = "submit" className='savebtn'>Save</button>
          </div>

            </form>

            
          </div>
            </div>
          
          
        </div>
       
    </div>
  )
}

export default JobDetail_Page
