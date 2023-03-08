import { Modal, useMantineTheme } from "@mantine/core";
 import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { createChat, findChat } from "../../Redux1/api/ChatRequest";
import Chat from "../Chat/Chat";
import "../Profile Model/ProfileModel.css";
import "./DisplayModel.css";
function DisplayModel({ modalOpened, setModalOpened ,item}) {
    const [isMobile, setIsMobile] = useState(false);

  const theme = useMantineTheme(); 
   const { user } = useSelector((state) => state.authReducer.authData)||{};
    
  const [currentChat, setCurrentChat] = useState(null);
const [myPost, setMyPost] = useState(true);

 useEffect(() => {
  
console.log(item.image);
 }, []);


 useEffect(() => {
  if(user) {
    const testMyPost = async () => {
      try {
        if (item.userId == user._id) setMyPost(false);
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (item !== null && user !== null) testMyPost();
  }
 }, []);


const navigate=useNavigate()
const handleLogin =()=> { navigate("/login")   }
const handlegotoChat =()=> {
  if(user) {
    const findChatUser = async () => {
      try {
        const { data } = await findChat(item.userId, user._id);
        setCurrentChat(data);
        console.log(data);
        console.log(currentChat);
        console.log(currentChat);
        navigate("/chat", { state: data });
        /*  if (!data) {
          const datae = {
            senderId: item.userId,
            receiverId: user._id,
          };
          const { data } = await createChat(datae);
           navigate("/chat", { state: data });
        } */
      } catch (error) {
        console.log(error);
      }
    };
    if (item !== null) {
      findChatUser();
    }
  }
    

}
 useEffect(() => {
   const handleResize = () => {
     setIsMobile(window.innerWidth <= 768);
   };

   handleResize(); // Call handleResize function on component mount to initialize the isMobile variable

   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
 }, []);
  return (
    <Modal
      className="model"
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.2}
      overlayBlur={0.5}
      size={isMobile ? "auto" : "80%"} // Set size to "auto" when isMobile is true, otherwise set to "80%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div className="container cont">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="imgDisplay">
              <img
                className="imageDisp"
                src={
                  item.image
                    ? process.env.REACT_APP_PUBLIC_FOLDER + item.image
                    : ""
                }
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="display-6 fw-bold my-4">{item.name}</div>
            <span className="display-8 fw-normal my-4">{item.dosage}</span>
            <span className="display-8 fw-normal my-4">{item.quantity}</span>
          </div>
        </div>

        {/* //put your code here */}
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-6 col-sm-6">
            {user && myPost && (
              <button
                type="bitton"
                className="btn btn-info "
                onClick={handlegotoChat}
              >
                <span className="textbtn">go to chat</span>
              </button>
            )}

            {!user && (
              <button
                className="btn btn-info bton"
                type="button"
                onClick={handleLogin}
              >
                <span className="textbtn"> Login to chat</span>
              </button>
            )}
          </div>
          <div className="col-6 col-sm-6">
            <button type="button" className="btn btn-secondary">
              <span className="textbtn"> Cancel</span>
            </button>
          </div>
        </div>
      </div>
      {/* //put your code here */}
    </Modal>
  );
}

export default DisplayModel;
