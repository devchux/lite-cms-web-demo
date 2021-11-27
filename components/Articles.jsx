import Image from "next/image";

const Articles = () => {
  return (
    <section id="popular-articles" className="articles">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>articles</h2>
          <p>Recent articles</p>
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch blog no-padding">
            <article className="entry mx-2">
              <div className="entry-img">
                <Image
                  width="100%"
                  height="100%"
                  layout="responsive"
                  src="/assets/img/course-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <h2 className="entry-title">
                <a href="blog-single.html">
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person"></i>{" "}
                    <a href="blog-single.html">John Doe</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock"></i>{" "}
                    <a href="blog-single.html">
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta.
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 blog no-padding">
            <article className="entry mx-2">
              <div className="entry-img">
                <Image
                  width="100%"
                  height="100%"
                  layout="responsive"
                  src="/assets/img/course-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <h2 className="entry-title">
                <a href="blog-single.html">
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person"></i>{" "}
                    <a href="blog-single.html">John Doe</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock"></i>{" "}
                    <a href="blog-single.html">
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta.
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 blog no-padding">
            <article className="entry mx-2">
              <div className="entry-img">
                <Image
                  width="100%"
                  height="100%"
                  layout="responsive"
                  src="/assets/img/course-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <h2 className="entry-title">
                <a href="blog-single.html">
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person"></i>{" "}
                    <a href="blog-single.html">John Doe</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock"></i>{" "}
                    <a href="blog-single.html">
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta.
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
