import Image from "next/image";
import Link from "next/link";

const Books = ({ books: { data } }) => {
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
            {data.length
              ? data.map((book) => (
                  <div
                    key={book.id}
                    className="col-lg-4 col-md-6 books-item filter-app"
                  >
                    <div className="books-wrap">
                      <Image
                        src={book.imageUrl}
                        className="img-fluid"
                        width="100%"
                        height="100%"
                        layout="responsive"
                        alt=""
                      />
                      <div className="books-info">
                        <h4>{book.title.toUpperCase()}</h4>
                        <div className="books-links">
                          <Link href={`/books/${book.id}`} title="More Details" passHref>
                            <i className="bx bx-link"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
