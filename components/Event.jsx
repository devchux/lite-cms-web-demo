import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Event = ({ events }) => {
  return (
    <section id="popular-articles" className="articles">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Events</h2>
          <p>Recent events</p>
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          {events.data.length ?
            events.data.map((event) => (
              <div
                key={event.id}
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
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
                      <h4>{(new Date(event.date)).toDateString()}</h4>
                      <p className="price">{(new Date(`${event.date} ${event.time}`)).toLocaleTimeString()}</p>
                    </div>

                    <h3>
                      <Link href={`/events/${event.id}`}>{event.title}</Link>
                    </h3>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )) : ""}
        </div>
      </div>
    </section>
  );
};

export default Event;
