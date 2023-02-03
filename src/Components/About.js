import React from 'react';
import styled from 'styled-components';
import cover from "../Images/logo.png";
import logo from "../Images/Screenshot 2023-01-22 001149.png";
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import mission from "../Images/mission-removebg-preview.png";
import vision from "../Images/vision-removebg-preview.png";
import inspire from "../Images/inspire.png";
import Footer from './Footer';
import salah from "../Images/salah.png";
import maroun from "../Images/maroun.png";
import jana from "../Images/jana.jpg";
import elie from "../Images/elie.jpg"

const AboutUsContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const AboutUsImage = styled.img`
  width: 30%;
`;

const AboutUsText = styled.div`
width: 50%;
padding: 0 20px;
`;

const AboutUs = () => {
  return (
    <><div>
      <img src={logo} style={{ width: "100%" }} />
    </div><br></br>
      <AboutUsContainer>
        <AboutUsImage src={cover} alt="About Us" />
        <AboutUsText>
          <h1>About Us</h1><br></br>
          <p>We are a team of dedicated developers, working to build the best possible user experience for our customers. Our goal is to create user-friendly, high-performance applications that solve real-world problems. We have a passion for technology and innovation, and we're always looking for new ways to push the boundaries of what's possible.</p>
        </AboutUsText>
      </AboutUsContainer><hr></hr>
      <AboutUsContainer>
        <AboutUsText>
          <h1>Our Mission </h1><br></br>
          <p>We are a team of dedicated developers, working to build the best possible user experience for our customers. Our goal is to create user-friendly, high-performance applications that solve real-world problems. We have a passion for technology and innovation, and we're always looking for new ways to push the boundaries of what's possible.</p>
        </AboutUsText>
        <AboutUsImage src={mission} alt="About Us" style={{height:"280px"}} />
      </AboutUsContainer><hr></hr>
      <AboutUsContainer>
        <AboutUsImage src={vision} alt="About Us" />
        <AboutUsText>
          <h1>Our Vision</h1><br></br>
          <p>We are a team of dedicated developers, working to build the best possible user experience for our customers. Our goal is to create user-friendly, high-performance applications that solve real-world problems. We have a passion for technology and innovation, and we're always looking for new ways to push the boundaries of what's possible.</p>
        </AboutUsText>
      </AboutUsContainer><hr></hr>
      <AboutUsContainer>
        <AboutUsText>
          <h1>Our Inspiration</h1><br></br>
          <p>We are a team of dedicated developers, working to build the best possible user experience for our customers. Our goal is to create user-friendly, high-performance applications that solve real-world problems. We have a passion for technology and innovation, and we're always looking for new ways to push the boundaries of what's possible.</p>
        </AboutUsText>
        <AboutUsImage src={inspire} alt="About Us" />
      </AboutUsContainer><hr></hr>
      <div className="container">
        <Alert style={{ backgroundColor: "whitesmoke", width:"100%", margin:"auto" }}>
          <Alert.Heading> Quick facts about MedAid</Alert.Heading><hr></hr><br></br>
          <p style={{textAlign:"left", padding:"10px"}}>
            
          1. <b>Safety:</b> A doctor can ensure that the medication being exchanged is safe for the individual to take and that it will not interact negatively with any other medications they are currently taking. <br></br>
          2. <b>Effectiveness:</b> A doctor can also ensure that the medication being exchanged is appropriate for the individual's condition and will be effective in treating their symptoms. <br></br>
          3. <b>Cost savings:</b> Exchanging medications can save individuals money, as they may be able to obtain a medication they need at a lower cost from another person who no longer needs it. <br></br>
          4. <b>Reducing waste:</b> Exchanging medicines can also help to reduce the amount of medication waste, by giving medications a new home that would otherwise go to waste.<br></br>
          5. <b>Access:</b> It can also provide access to medication that might not be available or affordable for individuals, such as expensive or rare medication. </p>
        </Alert><br></br>
      </div><br></br>
      <div className="container">
        <h3> Meet Our Members </h3><br></br>
      <CardGroup>
      <Card><br></br>
        <Card.Img variant="top" src={salah} style={{width:"233.17px", height:"294.16px", margin:"auto"}} />
        <Card.Body>
          <Card.Title>Salah Ayoubi</Card.Title>
          <Card.Text>
            Computer Scientist
          </Card.Text>
        </Card.Body>
      </Card>
      <Card><br></br>
        <Card.Img variant="top" src={elie} style={{width:"233.17px", height:"294.16px", margin:"auto"}} />
        <Card.Body>
          <Card.Title> Elie Kfoury</Card.Title>
          <Card.Text>
            Computer Engineer
          </Card.Text>
        </Card.Body>
      </Card>
      <Card><br></br>
        <Card.Img variant="top" src={jana} style={{width:"233.17px", height:"294.16px", margin:"auto"}}/>
        <Card.Body>
          <Card.Title> Jana Jamous </Card.Title>
          <Card.Text>
            Computer Scientist
          </Card.Text>
        </Card.Body>
      </Card>
      <Card><br></br>
        <Card.Img variant="top" src={maroun} style={{width:"233.17px", height:"294.16px", margin:"auto"}}/>
        <Card.Body>
          <Card.Title> Maroun Saleh </Card.Title>
          <Card.Text>
            Computer Scientist
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup><br></br>
      </div><br></br>
      <Footer />
      </>
  )
}

export default AboutUs;
