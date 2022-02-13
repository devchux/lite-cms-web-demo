import Breadcrumb from "../../components/Breadcrumb";
import axios from "axios"
import Link from "next/link";
import slug from "slug";
import Paginate from "../../components/Paginate";

const audios = ({ subjects: { subjects } }) => {
  return (
    <div className="blog-page">
      <Breadcrumb title="Audios" />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
          {subjects?.data?.length ? subjects.data.map(subject => (
            <div key={subject.id} className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <Link href={`/audios/${slug(subject.title)}`}>{subject.title}</Link>
                  </h5>
                </div>
              </div>
            </div>
          )) : ""}
          </div>
          <Paginate pageCount={subjects.totalPages} />
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { page } = context.query;
  const { data: subjects } = await axios.get(
    `${process.env.BE_URL}/audios/subjects?page=${Number(page || 1) - 1}&size=10`
  );
  return {
    props: {
      subjects
    }
  }
}

export default audios;
