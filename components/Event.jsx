import Image from "next/image"

const Event = () => {
  return (
    <section id="popular-articles" className="articles">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Events</h2>
          <p>Recent events</p>
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
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
                  <h4>Web Development</h4>
                  <p className="price">$169</p>
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
                    <Image
                      src="/assets/img/trainers/trainer-1.jpg"
                      className="img-fluid"
                      width="100%"
                      height="100%"
                      layout="responsive"
                      alt=""
                    />
                    <span>Antonio</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;50 &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;65
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="article-item">
              <Image
                src="/assets/img/course-2.jpg"
                className="img-fluid"
                width="100%"
                height="100%"
                layout="responsive"
                alt="..."
              />
              <div className="article-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Marketing</h4>
                  <p className="price">$250</p>
                </div>

                <h3>
                  <a href="article-details.html">Search Engine Optimization</a>
                </h3>
                <p>
                  Et architecto provident deleniti facere repellat nobis iste.
                  Id facere quia quae dolores dolorem tempore.
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <Image
                      src="/assets/img/trainers/trainer-2.jpg"
                      className="img-fluid"
                      width="100%"
                      height="100%"
                      layout="responsive"
                      alt=""
                    />
                    <span>Lana</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;35 &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;42
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="article-item">
              <Image
                src="/assets/img/course-3.jpg"
                className="img-fluid"
                width="100%"
                height="100%"
                layout="responsive"
                alt="..."
              />
              <div className="article-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3>
                  <a href="article-details.html">Copywriting</a>
                </h3>
                <p>
                  Et architecto provident deleniti facere repellat nobis iste.
                  Id facere quia quae dolores dolorem tempore.
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <Image
                      src="/assets/img/trainers/trainer-3.jpg"
                      className="img-fluid"
                      width="100%"
                      height="100%"
                      layout="responsive"
                      alt=""
                    />
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;20 &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;85
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Event
