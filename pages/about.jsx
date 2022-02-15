import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
  return (
    <div className="about-page">
      <Breadcrumb title="About Us" />
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Image
                src="/assets/img/about.jpg"
                width="100%"
                height="70px"
                layout="responsive"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>WHAT WE DO</h3>
              <br />
              <p className="">
                OTU Youth Development and Empowerment Initiative (OYDEI) is a
                non-profit organization that provides confidential,
                professional, and trusted counselling services to children,
                youths and adults on an individual and collective basis. OYDEI
                uses transformative counselling techniques to solve human
                problems. OYDEI provides a way out for people, allowing them to
                release negative emotions and start their healing process. OYDEI
                offers professional therapeutic intervention to help with
                personal, educational, vocational and spiritual problems and
                challenges.
                <br />
                <br />
                To sustain, expand and enlarge these activities, OYDEI has been
                training volunteers to work with the youths. Also, peer
                education and counselling system have been adapted to give
                volunteer ample opportunity to master certain skills, techniques
                and ethics so they can organize our programmes in their
                territory. Also, online platforms are utilized to consolidate
                and sustain interactions with the youths far and near.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-1"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Image
                src="/assets/img/vision.png"
                width="100%"
                height="70px"
                layout="responsive"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-2 content">
              <h3>OUR VISION</h3>
              <br />
              <p className="">
                Our vision is to develop and empower youths by transforming
                their minds so they can make right choices, exhibit acceptable
                behaviours, maximize their talents, gifts and potentials; and
                ultimately transform the society.
                <br />
                <br />
                The youth that passes through any of the OYDEI programmes are
                endued with knowledge, wisdom and understanding; and they are
                enlightened on the right choices to make in life. As a result,
                they are skillful, well-behaved, and have the ability to
                function effectively and take responsibility in society.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="trainers" className="trainers">
        <div className="container" data-aos="fade-up">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <Image
                  src="/assets/img/trainers/trainer-1.jpg"
                  width="100%"
                  height="70px"
                  layout="responsive"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-content">
                  <h4>Walter White</h4>
                  <span>Web Development</span>
                  <p>
                    Magni qui quod omnis unde et eos fuga et exercitationem.
                    Odio veritatis perspiciatis quaerat qui aut aut aut
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <Image
                  src="/assets/img/trainers/trainer-2.jpg"
                  width="100%"
                  height="70px"
                  layout="responsive"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-content">
                  <h4>Sarah Jhinson</h4>
                  <span>Marketing</span>
                  <p>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas
                    repellendus. In architecto rerum rerum temporibus
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <Image
                  src="/assets/img/trainers/trainer-3.jpg"
                  width="100%"
                  height="70px"
                  layout="responsive"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-content">
                  <h4>William Anderson</h4>
                  <span>Content</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
