import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [emailValue, setEmailValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);

  useEffect(() => {
    setStatusValue(status);
    if (status === "success") {
      setEmailValue("");
      setTimeout(() => {
        setStatusValue("");
      }, 2000);
    }
  }, [status]);

  const submit = () => {
    const isEmailValid =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailValue.toLowerCase()
      );
    setEmailValid(isEmailValid);
    if (isEmailValid) {
      onValidated({ EMAIL: emailValue });
    }
  };

  return (
    <>
      {statusValue === "sending" && <div className="loading">Sending...</div>}
      {(statusValue === "error" || !isEmailValid) && (
        <div className="error-message">
          {isEmailValid
            ? "Already subscribed to our mailing list!"
            : "Invalid email address!"}
        </div>
      )}
      {statusValue === "success" && (
        <div className="success-message">Thanks for subscribing!</div>
      )}
      <h4>Join Our Newsletter</h4>
      <p>
        Subscribe to our news letter to get first hand information about our
        events and more.
      </p>
      <form onSubmit={submit} method="post">
        <input
          type="email"
          name="email"
          required
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <input
          type="submit"
          disabled={!emailValue || status === "sending"}
          value="Subscribe"
        />
      </form>
    </>
  );
};

const Footer = () => {
  const url =
    "https://myclinify.us2.list-manage.com/subscribe/post?u=27b5a34cec7f78e32543f829a&id=47db04cdef";
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <Image
                src="/assets/img/logo.png"
                width="50"
                height="50"
                alt=""
                className="img-fluid"
              />
              <br />
              <p>
                Suite A9/10 Bethany Plaza
                <br />
                Odenigbo road, Nsukka <br />
                Enugu, Nigeria. <br />
                <br />
                <strong>Phone:</strong> 08146119566, 07067961216, 08035599525
                <br />
                <strong>Email:</strong> o.youthdei@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/programs">Programs</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/articles">Articles</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/events">Events</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Resources</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/audios">Audios</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/books">Books</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/videos">Videos</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => {
                  return (
                    <NewsletterForm
                      status={status}
                      message={message}
                      onValidated={(formData) => subscribe(formData)}
                    />
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
