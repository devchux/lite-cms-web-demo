import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

const events = () => {
  return (
    <div className="events-page">
      <Breadcrumb title="Events" />

      <section id="events" className="articles">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="article-item">
                <Image
                  src="/assets/img/course-1.jpg"
                  className="img-fluid"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt="..."
                />
                <div className="article-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Feb 21, 2022</h4>
                    <p className="price">9:30 am</p>
                  </div>

                  <h3>
                    <a href="article-details.html">Website Design</a>
                  </h3>
                  <p>
                    Et architecto provident deleniti facere repellat nobis iste.
                    Id facere quia quae dolores dolorem tempore.
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <span>Antonio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="article-item">
                <Image
                  src="/assets/img/course-1.jpg"
                  className="img-fluid"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt="..."
                />
                <div className="article-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Feb 21, 2022</h4>
                    <p className="price">9:30 am</p>
                  </div>

                  <h3>
                    <a href="article-details.html">Website Design</a>
                  </h3>
                  <p>
                    Et architecto provident deleniti facere repellat nobis iste.
                    Id facere quia quae dolores dolorem tempore.
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <span>Antonio</span>
                    </div>
                  </div>
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
