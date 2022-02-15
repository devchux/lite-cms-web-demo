import axios from "axios";
import ErrorPage from "next/error";
import AudioPlayer from "react-h5-audio-player";
import Breadcrumb from "../../components/Breadcrumb";
import Paginate from "../../components/Paginate";

const AudioList = ({ data }) => {
  if (!data) return <ErrorPage statusCode={404} />;
  return (
    <div className="audio-list-page">
      <Breadcrumb title="Audios" />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            {data.audios?.data.length
              ? data.audios.data.map((audio) => (
                  <div key={audio.id} className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h6 className="card-title">{audio.title}</h6>
                        <AudioPlayer src={audio.audioUrl} />
                        <button
                          type="button"
                          className="btn btn-primary my-2"
                          data-bs-toggle="modal"
                          data-bs-target={`#${audio.slug}`}
                        >
                          Info
                        </button>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id={audio.slug}
                      tabIndex="-1"
                      data-bs-backdrop="false"
                      data-bs-keyboard="false"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                      data-backdrop="false"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <pre style={{ fontFamily: "inherit" }}>
                              {audio.description}
                            </pre>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <a
                              href={`https://res.cloudinary.com/dcrshimso/raw/upload/fl_attachment/v1643912410/${audio.publicId}`}
                              target="_blank"
                              className="btn btn-primary"
                              rel="noreferrer"
                            >
                              Download
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>

          <Paginate pageCount={data.audios?.totalPages} />
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
      `${process.env.BE_URL}/audios/list/${slug}?page=${
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

export default AudioList;
