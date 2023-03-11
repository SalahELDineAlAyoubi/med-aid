import React from 'react'
import { useState } from 'react';
import { Button } from "react-bootstrap";
import { deletePost } from '../../Redux1/api/PostsRequests';
import FinalAcceptModal from './FinalAcceptModal';
  import "./Noti.css";

const AcceptationCard = ({ item, users }) => {
 const [modalOpened, setModalOpened] = useState(false);
 
   const handleAccept = async() => { 
 
setModalOpened(true);
   };
   return (
     <div className="row product">
       <div className="col-md-8 product-detail">
         <div className="nameofbookpers  not">{users.name}</div>
         <div>
           Owner of<span style={{ color: "red" }}> {item.name}</span> Asked you
           to receive your order
           <span style={{ color: "red" }}>{item.note}</span>
         </div>
       </div>
       <div className="col-md-4">
         <div className="col-md-4 but">
           <Button variant="outline-success " size="sm" onClick={handleAccept}>
             Done
           </Button>
           <FinalAcceptModal
             modalOpened={modalOpened}
             setModalOpened={setModalOpened}
             item={item}
             users={users}
           />
         </div>
       </div>
     </div>
   );
};

export default AcceptationCard
