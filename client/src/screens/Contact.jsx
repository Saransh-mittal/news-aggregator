import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { AppContext } from "../contextAPI/appContext";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const {state,dispatch} = useContext(AppContext);
  const button = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    backgroundColor: isHovered ? "#f9f9f9" : "#6c757d",
    borderColor: isHovered ? "#f9f9f9" : "#6c757d",
    transition: "all 0.3s ease-in-out",
    color: isHovered ? "#6c757d" : "#f9f9f9",
  };
  const handleLoginAlert = () => {
    if(state.show===true){
      navigate("/signin");
    }
  };

  useEffect(()=>{
    handleLoginAlert();
  },[state.show]);
  return (
    <div style={{ minHeight: "77vh" }}>
      <div className="container-fluid px-5 my-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div
              className="card border-0 rounded-3 shadow-lg overflow-hidden text-white"
              style={{
                backgroundColor: "#0f0d15",
                backgroundImage:
                  "linear-gradient(-180deg,#1a1527,#0e0c16 88%,#0e0c16 99%)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="card-body p-0 text-white">
                <div className="row g-0 text-white">
                  <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.4360256189!2d75.62574591255678!3d26.885421389874878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1697119671386!5m2!1sen!2sin"
                      width="90%"
                      height="70%"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="col-12 col-md-6 p-4">
                    <div className="text-center">
                      <div className="h3 fw-light text-white">
                        How can we help?
                      </div>
                      <p className="mb-4 text-white">
                        Contact our team for any query
                      </p>
                    </div>

                    <form
                      id="contactForm"
                      action="https://formspree.io/f/mgejrpqk"
                      method="POST"
                    >
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          autoComplete="off"
                          required
                          style={{
                            backgroundColor: "#1a1527",
                            borderColor: "#6c757d",
                            color: "#f9f9f9",
                          }}
                        />
                        <label htmlFor="name">Name</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="emailAddress"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          autoComplete="off"
                          required
                          style={{
                            backgroundColor: "#1a1527",
                            borderColor: "#6c757d",
                            color: "#f9f9f9",
                          }}
                        />
                        <label htmlFor="emailAddress">Email Address</label>
                      </div>

                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          id="message"
                          type="text"
                          name="message"
                          placeholder="Message"
                          autoComplete="off"
                          required
                          style={{
                            height: "10rem",
                            backgroundColor: "#1a1527",
                            borderColor: "#6c757d",
                            color: "#f9f9f9",
                          }}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          id="submitButton"
                          type="submit"
                          style={buttonStyle}
                          ref={button}
                          onMouseEnter={(e) => setIsHovered(true)}
                          onMouseLeave={(e) => setIsHovered(false)}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
