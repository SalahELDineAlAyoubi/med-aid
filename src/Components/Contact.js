import React from 'react'
import contact from "../Images/best-contact-us-pages-2.png";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import phone from "../Images/phone-removebg-preview.png";
import mail from "../Images/unitymail_104064.png";



const Contact = () => {

  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <><div>
      <img src={contact} />
    </div><div class="container">
        <div className="container mt-5" style={{ backgroundColor: "aliceblue" }}><br></br>
          <h2 className="mb-3">Get in touch</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="btn btn-dark" type="submit">
              {formStatus}
            </button><br></br>
          </form><br></br>
        </div>
      </div><br></br>
      <div class="container">
        <h3> Contact Us </h3><br></br>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={phone} style={{width:"45%", margin:"auto"}}/>
        <Card.Body>
          <Card.Title> Phone </Card.Title>
          <Card.Text>
            +961 79 123 456 <br></br>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={mail} style={{width:"45%", margin:"auto"}}/>
        <Card.Body>
          <Card.Title> Email </Card.Title>
          <Card.Text>
            info@medaid.com
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
      </div>
      <div>
        <br></br>
        <h3>Where you can find us</h3><br></br>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.4627398046473!2d35.83403051463988!3d34.44039968050207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f402806fff9b%3A0x84cffbe12c3f6239!2sLASeR%20-%20Lebanese%20Association%20for%20Scientific%20Research!5e0!3m2!1sen!2slb!4v1674420401684!5m2!1sen!2slb"
        width="90%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      </div>
    </>
  );
}

export default Contact
