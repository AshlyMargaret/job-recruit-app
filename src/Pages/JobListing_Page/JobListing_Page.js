import React from 'react'
import SearchHeader from '../../Components/SearchHeader/SearchHeader'
import SideBar from '../../Components/SideBar/SideBar'
import './JobListing_Page.css'
import {useState,useEffect } from 'react'
import axios from 'axios'

function JobListing_Page() {

    const [jobList, setJobList] = useState([])

    useEffect(() => {
        axios.get("https://techangels.ai/company/api/v1/jobs?jobid=").then((respone)=>{
            console.log("all:",respone.data);
            setJobList(respone.data)
        })
        
    }, [])
  return (
    <div className='jobListing_Page'>
        <div className="jobListing_Page_SideBar">
            <SideBar/>
        </div>
        <div className="jobListing_Page_MainPage">
            <div className="jobListing_Page_MainPagHeader">
                <SearchHeader/>
            </div>
            <div className="jobListingView">
                {
                    jobList.map((job,index)=>{
                        return(
                            
                            <div className="jobListingBox" key={index}>
                                <div className="left">
                            <div className="flex1">
                                <h3>{job.data.Title}</h3>
                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </div>
                            <div className="flex2">
                                <p>{job.data.Description}</p>
                            </div>
                            <div className="flex3">
                                <h6>{job.data.Position}</h6>
                                <p>Experience:{job.data.Experience}</p>
                            </div>
                            <div className="deleteIcon">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            </div>
                            </div>
                            <div className="right">
                                <div className="rightBox1">
                                    <h5>Matches Found</h5>
                                </div>
                                <div className="rightBox2">
                                    <h3>456</h3>
                                    <h6>Candidates</h6>
                                </div>
                                <div className="rightBox3">
                                    <button>View Matches</button>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }

                

            </div>
        </div>
      
    </div>
  )
}

export default JobListing_Page
