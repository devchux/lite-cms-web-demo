import Breadcrumb from "../../components/Breadcrumb";
import axios from "axios"
import Link from "next/link";
import slug from "slug";

const videos = ({ subjects: { subjects } }) => {
  return (
    <div className="blog-page">
      <Breadcrumb title="Videos" />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
          {subjects?.data?.length ? subjects.data.map(subject => (
            <div key={subject.id} className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <Link href={`/videos/${slug(subject.title)}`}>{subject.title}</Link>
                  </h5>
                </div>
              </div>
            </div>
          )) : ""}
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { page } = context.query;
  const { data: subjects } = await axios.get(
    `${process.env.BE_URL}/videos/subjects?page=${Number(page || 1) - 1}&size=10`
  );
  return {
    props: {
      subjects
    }
  }
}

export default videos;
