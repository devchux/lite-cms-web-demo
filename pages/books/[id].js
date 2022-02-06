import Image from "next/image";
import axios from "axios";
import ErrorPage from "next/error";
import Breadcrumb from "../../components/Breadcrumb";

const bookDetail = ({ data }) => {
  if (!data) return <ErrorPage statusCode={404} />;
  const { book } = data;
  return (
    <div className="Books-page">
      <Breadcrumb title="Book Details" />

      <section id="course-details" className="course-details">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-7">
              <Image
                src={book?.imageUrl}
                className="img-fluid"
                width="80%"
                height="50%"
                layout="responsive"
                alt=""
              />
              <h3>{book?.title}</h3>
              <p>
                <pre style={{ fontFamily: "inherit" }}>
                  {book?.description}
                </pre>
              </p>
            </div>
            <div className="col-lg-5">
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Author</h5>
                <p>
                  <a>{book?.author}</a>
                </p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Price</h5>
                <p>&#8358;{book?.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  try {
    const { data } = await axios.get(`${process.env.BE_URL}/books/${id}`);
    return {
      props: {
        data,
      },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default bookDetail;
