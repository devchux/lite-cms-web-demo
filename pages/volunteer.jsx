import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

const volunteer = () => {
  return (
    <div className="programs-page">
      <Breadcrumb title="Become A Volunteer" />
      <section
        id="contact"
        className="container my-5 d-flex justify-content-center align-items-center contact"
        data-aos="fade-up"
      >
        <form method="post" role="form" className="w-50 php-email-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Full Name"
            />
          </div><br />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
            />
          </div><br />
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              name="phoneNumber"
              placeholder="Enter Phone Number"
            />
          </div><br />
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              rows="5"
            ></textarea>
          </div><br />
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default volunteer;
