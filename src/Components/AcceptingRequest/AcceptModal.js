 import { Modal, useMantineTheme } from "@mantine/core";
 import { useEffect, useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { useNavigate } from "react-router-dom";
 import { updatePost } from "../../Redux1/actions/postAction";
 import { uploadPost, uploadImage } from "../../Redux1/actions/uploadAction";
 import { acceptRequest, deletePost, unbookMed } from "../../Redux1/api/PostsRequests";
 import { format } from "timeago.js";

 function AcceptModal({
   modalOpened,
   setModalOpened,
   user,
 item
 }) {
      const [locationReceive, setlocationReceive] = useState("");
      const [time, setTime] = useState("");

   const theme = useMantineTheme();
    const dispatch = useDispatch();
   let navigate = useNavigate();
   const handleSubmit = async (e) => {
     e.preventDefault();
const note =" in "+ locationReceive +" from "+ time;
console.log(note);
 
     await acceptRequest(item._id, note);
     //handleUnBook(true);
 
     setModalOpened(false);
     window.location.reload()
   };

  

   return (
     <Modal
       style={{ marginTop: "15%" }}
       overlayColor={
         theme.colorScheme === "dark"
           ? theme.colors.dark[9]
           : theme.colors.gray[2]
       }
       overlayOpacity={0.1}
       overlayBlur={0.1}
       size="auto"
       opened={modalOpened}
       onClose={() => setModalOpened(false)}
     >
       <div className="container">
         {user && (
           <form onSubmit={handleSubmit}>
             <div className="container">
               <div className="row">
                 <div
                   className="col-12"
                   style={{
                     marginBottom: "30px",
                     fontWeight: "600",
                     marginTop: "-20px",
                   }}
                 >
                   Delivery place:
                   <input
                     type="text"
                     className="medInput"
                     name="locationDelivery"
                     placeholder="Location... "
                     onChange={(e) => setlocationReceive(e.target.value)}
                     required
                   />
                 </div>
                 <div
                   className="col-12"
                   style={{
                     marginBottom: "30px",
                     fontWeight: "600",
                     marginTop: "-20px",
                   }}
                 >
                   Available from.. (Time) :
                   <input
                     type="text"
                     className="medInput"
                     name="time"
                     placeholder="Time from... "
                     onChange={(e) => setTime(e.target.value)}
                     required
                   />
                 </div>
               </div>
               <div className="row">
                 <div className="col-12 col-sm-6">
                   <button type="submit" className="btn btn-danger">
                     Accept
                   </button>
                 </div>
                 <div className="col-12 col-sm-6">
                   <button
                     type="button"
                     className="btn btn-secondary"
                     onClick={() => setModalOpened(false)}
                   >
                     Cancel
                   </button>
                 </div>
               </div>
             </div>
           </form>
         )}
       </div>
     </Modal>
   );
 }

 export default AcceptModal;
