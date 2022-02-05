import Image from "next/image";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumb";

const events = ({ data: { events } }) => {
  return (
    <div className="events-page">
      <Breadcrumb title="Events" />

      <section id="events" className="articles">
        <div className="container" data-aos="fade-up">
          <div className="row">
            {events?.data.length ?
              events.data.map((event) => (
                <div
                  key={event.id}
                  className="col-md-6 d-flex align-items-stretch"
                >
                  <div className="article-item w-100">
                    <Image
                      src={event.imageUrl}
                      className="img-fluid"
                      width="100%"
                      height="100%"
                      layout="responsive"
                      alt="..."
                    />
                    <div className="article-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>{new Date(event.date).toDateString()}</h4>
                        <p className="price">
                          {new Date(
                            `${event.date} ${event.time}`
                          ).toLocaleTimeString()}
                        </p>
                      </div>

                      <h3>
                        <a href={`/events/${event.id}`}>{event.title}</a>
                      </h3>
                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                        <span>{event.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )): ""}
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

export const getServerSideProps = async (context) => {
  const { page } = context.query;
  const { data } = await axios.get(
    `${process.env.BE_URL}/events?page=${Number(page || 1) - 1}&size=10`
  );
  return {
    props: { data },
  };
};

export default events;
