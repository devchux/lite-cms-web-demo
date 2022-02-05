import Image from "next/image";
import axios from "axios";
import ErrorPage from "next/error";
import Breadcrumb from "../../components/Breadcrumb";

const eventDetail = ({ data }) => {
  if (!data) return <ErrorPage statusCode={404} />;
  const { event } = data;
  return (
    <div className="events-page">
      <Breadcrumb title="Event Details" />

      <section id="course-details" className="course-details">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-7">
              <Image
                src={event?.imageUrl}
                className="img-fluid"
                width="80%"
                height="50%"
                layout="responsive"
                alt=""
              />
              <h3>{event?.title}</h3>
              <p>
                <pre style={{ fontFamily: "inherit" }}>
                  {event?.description}
                </pre>
              </p>
            </div>
            <div className="col-lg-5">
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Venue</h5>
                <p>
                  <a>{event?.venue}</a>
                </p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Date</h5>
                <p>{event?.date}</p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Time</h5>
                <p>{event?.time}</p>
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
    const { data } = await axios.get(`${process.env.BE_URL}/events/${id}`);
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

export default eventDetail;
