import axios from "axios";
import ErrorPage from "next/error";
import AudioPlayer from "react-h5-audio-player";
import Breadcrumb from "../../components/Breadcrumb";

const audioList = ({ data }) => {
  if (!data) return <ErrorPage statusCode={404} />
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
                        <button type="button" className="btn btn-primary my-2">Info</button>
                      </div>
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
      props: {}
    };
  }
};

export default audioList;
