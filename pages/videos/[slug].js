import axios from "axios";
import ErrorPage from "next/error";
import Breadcrumb from "../../components/Breadcrumb";

const videoList = ({ data }) => {
  if (!data) return <ErrorPage statusCode={404} />;
  return (
    <div className="blog-page">
      <Breadcrumb title="videos" />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            {data.videos?.data.length
              ? data.videos.data.map(({ id, videoUrl, title, description }) => (
                  <div
                    key={id}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="row my-3"
                  >
                    <div className="col-lg-7 order-1">
                      <iframe
                        title={title}
                        width="100%"
                        height="400"
                        src={videoUrl}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="col-lg-5 pt-4 pt-lg-0 order-2 content">
                      <h3>{title}</h3>
                      <br />
                      <p className="">
                        <pre style={{ fontFamily: "inherit" }}>
                          {description}
                        </pre>
                      </p>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async ({ query, params, res }) => {
  const { page } = query;
  const { slug } = params;
  try {
    const { data } = await axios.get(
      `${process.env.BE_URL}/videos/list/${slug}?page=${
        Number(page || 1) - 1
      }&size=10`
    );
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

export default videoList;
