import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

const events = () => {
  return (
    <div className="events-page">
      <Breadcrumb title="Events" />

      <section id="events" className="events">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <Image
                    src="/assets/img/course-1.jpg"
                    width="100%"
                    height="80px"
                    layout="responsive"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Introduction to webdesign</a>
                  </h5>
                  <p className="fst-italic text-center">
                    Sunday, September 26th at 7:00 pm
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <Image
                    src="/assets/img/course-2.jpg"
                    width="100%"
                    height="80px"
                    layout="responsive"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Marketing Strategies</a>
                  </h5>
                  <p className="fst-italic text-center">
                    Sunday, November 15th at 7:00 pm
                  </p>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="blog-pagination">
        <ul className="justify-content-center">
          <li>
            <a href="#">1</a>
          </li>
          <li className="active">
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default events;
