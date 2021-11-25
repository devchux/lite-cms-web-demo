import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
                  <Link href="programs">Programs</Link>
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
                  <Link href="/videos">Videos</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/audios">Audios</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Subscribe to our news letter to get first hand information about
                our events and more.
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
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
