import React, { useState, useEffect } from "react";
import { getProfiles} from "../profileCrud";
import "./HomeDesign.css";
import { Link } from "react-router-dom";
import prof from "./man.png";
const HomePage = () => {
  //usestate for geting and  load the profiledata
  const [profiles, setProfiles] = useState([]);
  const loadProfile = async () => {
    const response = await getProfiles();
    setProfiles(response);
  };

  //delete the profiledata
  const removeProfile = async (profileId) => {
    // eslint-disable-next-line no-unused-vars
   // const response = await deleteProfile(profileId);
    const newProfile = profiles.filter(({ id }) => profileId !== id);
    setProfiles(newProfile);
  };
  useEffect(() => {
    loadProfile();
  }, []);
  return (
    <div className="home">
      <div className="Container">
        <div className="row">
          <h1>Profiles</h1>
          {profiles.map((e) => (
            <div key={e.id} className="col-4">
              <Link to={`/profiles/${e.id}`}  style={{textDecoration:'none'}}>
                <div className="card " id="profileCard">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={prof}
                        className="img-fluid rounded-start"
                        alt=""
                      ></img>
                    </div>
                    <div className="col-md-8">
                      <div class="card-body">
                        <p>NAME : {e.first + " " + e.last}</p>
                        <p>EMAIL: {e.email}</p>
                        <p>PHONE: {e.phone}</p>
                        <p>POSITIOIN: {e.position}</p>
                        <p>DATE OF JOINED: {e.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div class="d-grid gap-2">
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                   <Link to={`/profiles/edit?id=${e.id}`}>
                   <button type="button" className="btn btn-primary" id="btn2">
                    <i className="fa-solid fa-user"></i> Edit
                  </button>

                   </Link>
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="btn1"
                    onClick={() => removeProfile(e.id)}
                  >
                    <i className="fa-solid fa-trash-can"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
