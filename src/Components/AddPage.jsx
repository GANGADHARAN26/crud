import React, { useState } from "react";
import { createProfile } from "../profileCrud";
import  './AddPagedesign.css'
const AddPage = () => {
  //intial state of the page
  const initialState = {
    first: "",
    last: "",
    email: "",
    phone: "",
    position: "",
    date: "",
  };
  //use state of the page to push profile data to object
  const [formData, setFormData] = useState(initialState);
  //pushing profile data to object using handlechange

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //passing profile data as object to api by handleclick event
  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile(formData);
    setFormData(initialState);
  };

  return (
    //form to add profile data
    <div className="card add" >
      <form >
        <h2>Add Profile</h2>
       
        <div className="user-box">
          <label htmlFor="Firstname"></label>
          <input
            type="text"
            name="first"
            id="first"
            placeholder="first name"
            value={formData.first}
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-box">
          <label htmlFor="last"></label>
          <input
            type="text"
            name="last"
            id="last"
            placeholder="Lastname"
            value={formData.last}
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-box">
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-box">
          <label htmlFor="phone"></label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            onChange={handleChange}
            value={formData.phone}
            required
          />
        </div>
        <div  className="user-box">
          <label htmlFor="position"></label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div s className="user-box">
          <label htmlFor="date"></label>
          <input
            type="text"
            name="date"
            id="date"
            placeholder="Date of Joined"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="btn"
          type="submit"
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>
    </div>
  );
};
export default AddPage;
