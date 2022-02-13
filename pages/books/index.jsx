import Image from "next/image";
import axios from "axios"
import Breadcrumb from "../../components/Breadcrumb";
import Paginate from "../../components/Paginate";

const books = ({ data }) => {
  return (
    <div className="books-page">
      <Breadcrumb title="Books" />

      <section id="events" className="events">
        <div className="container" data-aos="fade-up">
          <div className="books">
            <div
              className="row books-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {data?.books?.data.length ?
                data?.books.data.map((book) => (
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
                          <a href={`/books/${book.id}`} title="More Details">
                            <i className="bx bx-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )): ""}
            </div>
          </div>
          <Paginate pageCount={data.books.totalPages} />
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { page } = context.query;
  const { data } = await axios.get(
    `${process.env.BE_URL}/books?page=${Number(page - 1) || 0}&size=10`
  );

  return {
    props: {
      data,
    },
  };
};

export default books;
