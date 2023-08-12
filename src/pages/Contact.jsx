import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <h2 className="contact-heading">Send us a message</h2>
        <form className="contact-form">
          <div className="names">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="email">
            <input type="email" placeholder="Email" />
          </div>
          <div className="text-message">
            <textarea
              rows="8"
              cols="99"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="submit-button">
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
