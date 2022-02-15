import Image from "next/image";
import Link from "next/link";

const Articles = ({ articles }) => {
  return (
    <section id="popular-articles" className="articles">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>articles</h2>
          <p>Recent articles</p>
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          {articles?.data.length
            ? articles.data.map((post) => (
                <div
                  key={post.id}
                  className="col-lg-4 col-md-6 d-flex align-items-stretch blog no-padding"
                >
                  <article className="entry mx-2">
                    <div className="entry-img">
                      <Image
                        width="100%"
                        height="100%"
                        layout="responsive"
                        src={post.imageUrl}
                        alt=""
                        className="img-fluid"
                      />
                    </div>

                    <h2 className="entry-title">
                      <Link href={`/articles/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <div className="entry-meta">
                      <ul>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-person text-capitalize"></i>{" "}
                          <a>
                            {post.Member.role.charAt(0).toUpperCase() +
                              post.Member.role.substr(1)}
                          </a>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-clock"></i>{" "}
                          <a>
                            <time
                              dateTime={new Date(post.createdAt).toDateString()}
                            >
                              {new Date(post.createdAt).toDateString()}
                            </time>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="entry-content">
                      <p></p>
                      <div className="read-more">
                        <Link href={`/articles/${post.slug}`}>Read More</Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default Articles;
