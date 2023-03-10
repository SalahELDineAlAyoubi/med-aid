import React, { useEffect, useState } from 'react'
import { Button, Card , Placeholder } from 'react-bootstrap';
import   "./RequestPost.css"
import { format } from "timeago.js";
import { findChat } from '../../Redux1/api/ChatRequest';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Notifications';

const RequestPost = ({ item, loading }) => {
  const { user } = useSelector((state) => state.authReducer.authData) || {};
  let navigate = useNavigate();
  const [currentChat, setCurrentChat] = useState(null);

  const handlegotoChat = () => {
    console.log("hello");
    if (user) {
      const findChatUser = async () => {
        try {
          const { data } = await findChat(item.userId, user._id);
          setCurrentChat(data);

          navigate("/chat", { state: data });
        } catch (error) {
          console.log(error);
        }
      };
      if (item !== null) {
        findChatUser();
      }
    }
  };
  return (
    <div className="d-flex justify-content-around">
      {loading ? (
        <Card style={{ width: "18rem", backgroundColor: "rgb(227,242, 253)" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card>
      ) : (
        <Card style={{ width: "18rem", backgroundColor: "rgb(227,242, 253)" }}>
          <Card.Img
            style={{ backgroundColor: "rgb(227,242, 253)" }}
            variant="top"
            src={
              item.form ? process.env.REACT_APP_PUBLIC_FOLDER + item.form : ""
            }
            height="200px"
          />
          <Card.Body>
            <Card.Title> {item.name}</Card.Title>
            <Card.Text>
              <span className="tittle">Dosage:</span> {item.dosage}
            </Card.Text>
            <Card.Text className="quantite">
              <span className="tittle"> Quantity(apx):</span> {item.quantity}
            </Card.Text>
            <Card.Text className="quantite">
              <span className="tittle"> Location:</span> {item.location}{" "}
            </Card.Text>
            <Card.Text className="quantite">
              <span className="postedTime">{format(item.createdAt)} </span>
            </Card.Text>
            {user ? (
              <Button variant="primary" onClick={handlegotoChat}>
                Go to chat
              </Button>
            ) : (
              <Button variant="primary" onClick={() => navigate("/login")}>
                Login to chat
              </Button>
            )}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default RequestPost
