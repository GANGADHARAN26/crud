//description of individual profile
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfile } from '../profileCrud';
import prof from "./man.png"
import "./profile.css"

const Profile=()=>{
    const {profileId} = useParams();
    const [profileData,setData]=useState({
        first: "",
        last: "",
        email: "",
        phone: "",
        position: "",
        date: "",
    });
    const loadProfile =async()=>{
        const response = await getProfile(profileId);
        setData(response)
    }
    useEffect(()=>{
        loadProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

return(
    <div className='singleProfile'>
         <div className='card'>
              <h1>{profileData.first+" "+profileData.last +"'s"} Profile </h1>
              <div className="card " id="profileCard">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={prof} className="img-fluid rounded-start"  alt=""></img>
                </div>
                <div className="col-md-8">
                  <div class="card-body">
                    <p id='pp'>NAME : {profileData.first + " " + profileData.last}</p>
                    <p id='pp'>EMAIL: {profileData.email}</p>
                    <p  id='pp'>PHONE: {profileData.phone}</p>
                    <p id='pp'>POSITIOIN: {profileData.position}</p>
                    <p id='pp'>DATE OF JOINED: {profileData.date}</p>
                  </div>
                </div>
              </div>
              </div>
         </div>
    </div>
)
}


export default Profile;