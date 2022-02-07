import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      await axios.post(
        "http://localhost:8000/api/contacts",
        inputs
      );
      setSuccess(true);
      setLoading(false);
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        console.error(error);
        setError(error.message);
      }
    }
  };
  return (
    <div className="contact-page">
      <Breadcrumb title="Contact Us" />
      <section id="contact" className="contact">
        <div data-aos="fade-up">
          <iframe
            style={{ border: 0, width: "100%", height: "350px" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3961.302825756906!2d7.385628114267555!3d6.854259221132536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1638010697126!5m2!1sen!2sng"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Suite A9/10 Bethany Plaza, Odenigbo road, Nsukka</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>o.youthdei@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>08146119566</p>
                  <p>07067961216</p>
                  <p>08035599525</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                method="post"
                role="form"
                className="php-email-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      value={inputs.name}
                      onChange={({ target: { value } }) =>
                        handleChange("name", value)
                      }
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={inputs.email}
                      onChange={({ target: { value } }) =>
                        handleChange("email", value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={inputs.subject}
                    onChange={({ target: { value } }) =>
                      handleChange("subject", value)
                    }
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    value={inputs.message}
                    onChange={({ target: { value } }) =>
                      handleChange("message", value)
                    }
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  {loading ? <div className="loading">Loading</div> : ""}
                  {error ? <div className="error-message">{error}</div> : ""}
                  {success ? (
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
