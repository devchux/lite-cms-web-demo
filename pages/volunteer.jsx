import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

const Volunteer = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
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
    if (
      !inputs.name ||
      !inputs.email ||
      !inputs.message ||
      !inputs.phoneNumber
    ) {
      setError("Fill all the fields");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      await axios.post("http://localhost:8000/api/volunteers", inputs);
      setSuccess(true);
      setLoading(false);
      setInputs({
        name: "",
        email: "",
        phoneNumber: "",
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
    <div className="programs-page">
      <Breadcrumb title="Become A Volunteer" />
      <section
        id="contact"
        className="container my-5 d-flex justify-content-center align-items-center contact"
        data-aos="fade-up"
      >
        <form
          method="post"
          role="form"
          onSubmit={handleSubmit}
          className="w-50 php-email-form"
        >
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Full Name"
              value={inputs.name}
              onChange={({ target: { value } }) => handleChange("name", value)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              required
              placeholder="name@example.com"
              value={inputs.email}
              onChange={({ target: { value } }) => handleChange("email", value)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="tel"
              required
              className="form-control"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={inputs.phoneNumber}
              onChange={({ target: { value } }) =>
                handleChange("phoneNumber", value)
              }
            />
          </div>
          <br />
          <div className="form-group">
            <textarea
              placeholder="Message"
              className="form-control"
              name="message"
              rows="5"
              value={inputs.message}
              onChange={({ target: { value } }) =>
                handleChange("message", value)
              }
            ></textarea>
          </div>
          <br />
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Volunteer;
