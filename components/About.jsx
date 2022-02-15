import Image from "next/image";

const About = () => {
  return (
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
              non-profit organization that provides confidential, professional,
              and trusted counselling services to children, youths and adults on
              an individual and collective basis. OYDEI uses transformative
              counselling techniques to solve human problems. OYDEI provides a
              way out for people, allowing them to release negative emotions and
              start their healing process. OYDEI offers professional therapeutic
              intervention to help with personal, educational, vocational and
              spiritual problems and challenges.
              <br />
              <br />
              To sustain, expand and enlarge these activities, OYDEI has been
              training volunteers to work with the youths. Also, peer education
              and counselling system have been adapted to give volunteer ample
              opportunity to master certain skills, techniques and ethics so
              they can organize our programmes in their territory. Also, online
              platforms are utilized to consolidate and sustain interactions
              with the youths far and near.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
