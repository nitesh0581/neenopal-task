import React, { useState } from "react";
import { userData } from "../Component/CardData";
// import Delete from "../Assets/Delete.svg";
import { ReactComponent as Delete } from "../Assets/Delete.svg";
import { ReactComponent as Edit } from "../Assets/Edit.svg";
import { ReactComponent as EmptyHeart } from "../Assets/EmptyHeart.svg";
import { ReactComponent as FilledHeart } from "../Assets/FilledHeart.svg";
import { ReactComponent as Call } from "../Assets/Call.svg";
import { ReactComponent as Mail } from "../Assets/Mail.svg";
import { ReactComponent as Web } from "../Assets/Web.svg";
import Spinner from "./Spinner";
import EditModal from "./EditModal";

const CardDetails = () => {
  const [data, setData] = useState(userData);
  const [open,setOpen]=useState(false);
  const[editUser,setEditUser]=useState();

  const handleEditUser=(currentUser)=>{
    // console.log(currentUser,"currentUser")
    const updatedData=data.map((el)=>{
      return el.key===currentUser.key?currentUser:el;
    })
    setData(updatedData);
    setOpen(false);
  }
  const handleLikeToggle=(ind)=>{
    const likedData=data.map((user,index)=>{
      return index!==ind? user:{...user, like:!user.like}
    })
    setData(likedData);
  }
  const handleDeleteUser=(ind)=>{
    const filteredData=data.filter((user,index)=>index!==ind);
    setData(filteredData);
  }
  const modalHandler=(user)=>{
    setOpen(true);
    setEditUser(user);
  }
  return (
    <>
      {data && data.length ? (
        data.map((user, ind) => {
            return (
          <div className="container">
            <div key={ind} className="card">
              <div className="card-image">
                <img src={user.image?.url} alt={user.image.alt} />
              </div>
              <div className="card-details">
                <p className="name-text">{user.name}</p>
                <div>
                  <Mail />
                  <p>{user.email}</p>
                </div>
                <div>
                  <Call />
                  <p>{user.phone}</p>
                </div>
                <div>
                  <Web />
                  <p>{user.website}</p>
                </div>
              </div>
              <div className="card-actions">
                <li>
                  <li className="icon like" onClick={()=>handleLikeToggle(ind)}>
                  {/* <li className="icon like"> */}
                    {user.like ? <FilledHeart /> : <EmptyHeart />}
                  </li>
                </li>

                <li className="edit-icon hover">
                  <li className="icon" onClick={()=>modalHandler(user)}>
                    <Edit />
                  </li>
                  
                </li>
                <li>
                  <li className="hover" onClick={()=>handleDeleteUser(ind)}>
                    <Delete/>
                  </li>
                </li>
              </div>
            </div>
          </div>
            )})
      ) : (
        <Spinner />
      )}
      {
          open?<EditModal handleEditUser={handleEditUser} setOpen={setOpen} user={editUser}/>:""
      }
    </>
  );
};

export default CardDetails;
