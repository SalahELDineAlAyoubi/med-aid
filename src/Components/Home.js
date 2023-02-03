import React, { useState } from 'react'
import img1 from "../Images/triangle-geometric-graphic-pattern-template.jpg";
import img2 from "../Images/frame-pills-with-tablet.jpg";
import img3 from "../Images/headerbackground.jpg";
import Med1 from "../Images/tech.png";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Health from "../Images/fbLogo3.jpg";
import Laser from "../Images/jdid.png";
import Giz from "../Images/download.png";
import Alert from 'react-bootstrap/Alert';
import Logo from "../Images/logs.png";
import Footer from './Footer';



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [{ url: img3 }, { url: img2 }, { url: img1 }];
  const slydeStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const slyderStyles = {
    height: "100%",
    position: "relative",
  };
  const containerStyles = {
    width: "100%",
    height: "680px",
    margin: "0 auto",
  };

  const dotContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "-100px ",
  };
  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "80px",
    color: "black",
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndx = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndx);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndx = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndx);
  };

  return (
    <div>
      <div>
        {/* Images Carousels Section */}
        <div style={containerStyles}>
          <div style={slyderStyles}>
            <button
              className="carousel-control-prev"
              type="button"
              onClick={goToPrevious}
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <div style={slydeStyles}> </div>

            <button
              className="carousel-control-next"
              type="button"
              onClick={goToNext}
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div><br></br>
        <div className="container" >
          <Card.Img  src={Logo} style={{ width: "50%" }} />
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header> <b>Our MISION</b></Accordion.Header>
              <Accordion.Body>
                We manage our business a safe, productive, fulfilling work environment,
                legendary services for customers
              </Accordion.Body>
            </Accordion.Item><br></br>
            <Accordion.Item eventKey="1">
              <Accordion.Header> <b>Our VISION</b></Accordion.Header>
              <Accordion.Body>
                We are a successful company that provides superior services that
                satisfy customers peace and prosperity
              </Accordion.Body>
            </Accordion.Item><br></br>
            <Accordion.Item eventKey="2">
              <Accordion.Header> <b>Our VALUES</b></Accordion.Header>
              <Accordion.Body>
                Customer commitment:
                Develop relationships that makes positive difference in customer's live <br></br>
                Respect for people:
                We value our people and encourage their development

              </Accordion.Body>
            </Accordion.Item><br></br>
            <Accordion.Item eventKey="3" >
              <Accordion.Header> <b>Our INSPIRATIONS</b> </Accordion.Header>
              <Accordion.Body>
                Our inspiration comes from the children and families we serve. Their resilience,
                hope and courage in the face of medical obstacles continually emboldens us to fulfill our mission.
              </Accordion.Body>
            </Accordion.Item><br></br>
          </Accordion><br></br>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img src={Med1} style={{ width: "100%" }} />
      </div>

      {/* Cards info Section */}
      <div>
        <div className="container" style={{ width: "100%" }}><br></br>
          <Card border="light">
            <Card.Body>
              <Card.Title><i className=" material-icons" style={{ fontSize: "40px", color: "darkblue" }}>info_outline</i></Card.Title>
              <Card.Text>
                Technology is advancing rapidly, with new developments in areas such as artificial intelligence, biotechnology,
                and robotics leading to new and improved products and services
              </Card.Text>
            </Card.Body>
          </Card><br></br>
          <Card border="light" >
            <Card.Body>
              <Card.Title><i className=" material-icons" style={{ fontSize: "40px", color: "darkblue" }}>info_outline</i></Card.Title>
              <Card.Text>
                The integration of technology with medicine has also led to improved patient outcomes and increased access to healthcare.
                There are various startups and companies in healthcare industry that are using technology to make healthcare more accessible, affordable, and effective
              </Card.Text>
            </Card.Body>
          </Card><br></br>
          <Card border="light">
            <Card.Body>
              <Card.Title><i className=" material-icons" style={{ fontSize: "40px", color: "darkblue" }}>info_outline</i></Card.Title>
              <Card.Text>
                MedAid was built with the collaboration of technology and medical care to ensure the communication between people about non
                usable medicines. All you need to do is to view the medicines you need and get them with zero payments
              </Card.Text>
            </Card.Body>
          </Card><br></br>
        </div>
      </div><br></br>
      <div className="container">
        <CardGroup>
          <Card >
            <Card.Img variant="top" src={Health} />
          </Card>
          <Card style={{ padding: "20px 20px" }}>
            <Card.Img variant="top" src={Laser} />
          </Card>
          <Card>
            <Card.Img variant="top" src={Giz} />
          </Card>
        </CardGroup>
      </div><br></br><br></br>
      <div className="container">
        <Alert style={{ backgroundColor: "white", width:"100%", margin:"auto" }}>
          <Alert.Heading>Having issues in finding your Medicine ?</Alert.Heading>
          <p>
            All you need to do is signing in through our system and have an access on: <br></br>
            1. Viewing the available medicines sorted by people <br></br>
            2. Searching for a specific medicine you are looking for <br></br>
            3. Add a medicine you don't need it anymore <br></br>
          </p>
          <hr />
          <p classNameName="mb-0">
            <Alert.Link href="Account.js"> Sign Up Now </Alert.Link>
          </p>
        </Alert>
      </div><br></br><br></br>
      <div><br></br>
        <Footer />
      </div>
    </div>
  );
};

export default Home;