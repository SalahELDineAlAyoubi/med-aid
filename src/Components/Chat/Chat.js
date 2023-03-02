  import React, { useEffect, useRef, useState } from 'react'
import "./Chat.css";
  import {   useSelector } from "react-redux";
import { userChats } from '../../Redux1/api/ChatRequest';
import Conversation from './Conversation/Conversation';
import ChatBox from './ChatBox/ChatBox';
import { io } from "socket.io-client";
import { useLocation } from 'react-router-dom';

const Chat = ({chat}) => {
   const socket = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
    const location = useLocation();

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  // Get the chat in chat section
  useEffect(() => {
    console.log(location.state);
    if (location) setCurrentChat(location.state);
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data);
      setReceivedMessage(data);
    });
  }, []);

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 col-sm-7">
          <div className="Right-side-chat">
            <div style={{ width: "20rem", alignSelf: "flex-end" }}></div>
            <ChatBox
              chat={currentChat}
              currentUser={user._id}
              setSendMessage={setSendMessage}
              receivedMessage={receivedMessage}
            />
          </div>
        </div>
        <div className="col-0 col-md-4 col-sm-5">
          <div className="Left-side-chat">
            <div className="Chat-container">
              <h2>Chats</h2>
              <div className="Chat-list">
                {chats.map((chat,id) => (
                  <div className={id}
                    onClick={() => {
                      setCurrentChat(chat);
                    }}
                  >
                    <Conversation
                      data={chat}
                      currentUser={user._id}
                      online={checkOnlineStatus(chat)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
