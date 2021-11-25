import Link from "next/link";

const Banner = () => {
  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center"
    >
      <div
        className="container position-relative"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1>
          OTU Youth Development and
          <br />
          Empowerment Initiative
        </h1>
        <h2>Centre for Youth Development and Counselling</h2>
        <Link href="/programmes" passHref>
          <span className="btn-get-started">Our Programs</span>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
