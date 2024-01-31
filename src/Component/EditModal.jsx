import React, { useState } from "react";
import { ReactComponent as Close } from "../Assets/Close.svg";
const EditModal = ({ handleEditUser, setOpen, user }) => {
  const { name, email, website, phone } = user;
  const [currentUser, setCurrent] = useState({
    name: name,
    email: email,
    phone: phone,
    website: website,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditUser({ ...user, ...currentUser });
  };
  const handleChange = (e) => {
    setCurrent({
      ...currentUser,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <p className="modal-heading">Edit Modal</p>
          <Close onClick={() => setOpen(false)}/>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="modal-fields">
            <label htmlFor="name"><span style={{color:"red"}}>*</span> Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={currentUser.name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={currentUser.email}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={currentUser.phone}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="website">Website: </label>
            <input
              type="text"
              name="website"
              id="website"
              value={currentUser.website}
              onChange={handleChange}
            />
            </div>
            <div className="action-button">
              <button className="cancelBtn" onClick={() => setOpen(false)}>Cancel</button>
              <button className="okBtn" type="submit">OK</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
