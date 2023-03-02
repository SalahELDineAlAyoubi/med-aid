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
  const theme = useMantineTheme(); 
   const { user } = useSelector((state) => state.authReducer.authData);
  const [currentChat, setCurrentChat] = useState(null);
const [myPost, setMyPost] = useState(true);

 useEffect(() => {
   /*const findChatUser = async () => {
     try {
       const createUserChat = async () => {
         const data = {
           senderId: item.userId,
           receiverId: user._id,
         };
         createChat(data);
         console.log("iam herrrr");
       };
       const { data } = await findChat(item.userId, user._id);

       if (!data) {
         createUserChat();
         const { data } = await findChat(item.userId, user._id);
         setCurrentChat(data);
         console.log("iam herrrr2");
       }
       setCurrentChat(data);
       console.log(data);
     } catch (error) {
       console.log(error);
     }
   };
   if (item !== null) findChatUser();*/
    const findChatUser = async () => {
     try {
      
       const { data } = await findChat(item.userId, user._id);
 
       setCurrentChat(data);
       //console.log(data);
     } catch (error) {
       console.log(error);
     }
   };
      if (item !== null) findChatUser(); 

 }, [item ,user._id]);


 useEffect(() => {
 const testMyPost = async () => {
   try {
     if(item.userId==user._id)
     setMyPost(false);
     //console.log(data);
   } catch (error) {
     console.log(error);
   }
 };
 if (item !== null && user !==null) testMyPost(); 

 }, []);


const navigate=useNavigate()
const handlegotoChat =()=> {
navigate("/chat", { state:currentChat });
}

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
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div>
        {/* //put your code here */}
       { myPost && (<button type="bitton" onClick={handlegotoChat}>go to chat</button>)}
        {/* //put your code here */}
      </div>
    </Modal>
  );
}

export default DisplayModel;
