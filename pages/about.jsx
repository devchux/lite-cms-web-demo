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
                OYDEI organizes a weekly public and community youth development
                and counselling programme for youths in her Centre for Youth
                Development and Counselling at Nsukka, Enugu State Nigeria.
                Livestreams, audio, video, and transcribed resources are often
                made available to youths who cannot attend the programme
                physically. <br />
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
                src="/assets/img/about.jpg"
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
    </div>
  );
};

export default About;
