import Image from "next/image";

const Books = () => {
  return (
    <section id="popular-articles" className="articles">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Books</h2>
          <p>Recent Books</p>
        </div>
        <div className="books">
          <div
            className="row books-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 books-item filter-app">
              <div className="books-wrap">
                <Image
                  src="/assets/img/course-1.jpg"
                  className="img-fluid"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt=""
                />
                <div className="books-info">
                  <h4>
                    TRANSFORMATIVE COUNSELLING: A PRACTICAL TOOL FOR
                    TRANSFORMING LIVES AND NATIONS
                  </h4>
                  <div className="books-links">
                    <a
                      href="/assets/img/course-1.jpg"
                      data-gallery="booksGallery"
                      className="books-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="books-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 books-item filter-web">
              <div className="books-wrap">
                <Image
                  src="/assets/img/course-2.jpg"
                  className="img-fluid"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt=""
                />
                <div className="books-info">
                  <h4>THE JOURNEY OF PURPOSE DISCOVERY AND FULFILLMENT</h4>
                  <div className="books-links">
                    <a
                      href="/assets/img/course-2.jpg"
                      data-gallery="booksGallery"
                      className="books-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="books-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 books-item filter-app">
              <div className="books-wrap">
                <Image
                  src="/assets/img/course-3.jpg"
                  className="img-fluid"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt=""
                />
                <div className="books-info">
                  <h4>GETTING IT RIGHT ON RELATIONSHIP MATTERS</h4>
                  <div className="books-links">
                    <a
                      href="/assets/img/course-3.jpg"
                      data-gallery="booksGallery"
                      className="books-lightbox"
                      title="App 2"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="books-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
