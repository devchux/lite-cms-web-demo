import Image from "next/image";
import axios from "axios";
import parse from "html-react-parser";
import Breadcrumb from "../../components/Breadcrumb";
import Paginate from "../../components/Paginate";
import Link from "next/link";

const Articles = ({ posts, recentPosts }) => {
  return (
    <div className="blog-page">
      <Breadcrumb title="Articles" />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              {posts.articles?.data.length
                ? posts.articles.data.map((post) => (
                    <article key={post.id} className="entry">
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
                            <i className="bi bi-person"></i>{" "}
                            <a>
                              {post.Member.role.charAt(0).toUpperCase() +
                                post.Member.role.substr(1)}
                            </a>
                          </li>
                          <li className="d-flex align-items-center">
                            <i className="bi bi-clock"></i>{" "}
                            <a>
                              <time
                                dateTime={new Date(
                                  post.createdAt
                                ).toDateString()}
                              >
                                {new Date(post.createdAt).toDateString()}
                              </time>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="entry-content">
                        <p>
                          {parse(
                            post.body
                              .replace(/<img[^>]+>/g, "")
                              .substr(0, 300) + "..."
                          )}
                        </p>
                        <div className="read-more">
                          <Link href={`/articles/${post.slug}`}>Read More</Link>
                        </div>
                      </div>
                    </article>
                  ))
                : ""}

              <Paginate pageCount={posts?.articles?.totalPages} />
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  {recentPosts.articles?.data
                    ? recentPosts.articles.data.slice(0, 5).map((post) => (
                        <div
                          key={post.id}
                          className="post-item clearfix d-flex gap-2"
                        >
                          <Image
                            width="150px"
                            height="80px"
                            src={post.imageUrl}
                            alt=""
                          />
                          <div>
                            <h4>
                              <Link href={`/articles/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h4>
                            <time
                              dateTime={new Date(post.createdAt).toDateString()}
                            >
                              {new Date(post.createdAt).toDateString()}
                            </time>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { page } = context.query;
  const { data: posts } = await axios.get(
    `${process.env.BE_URL}/posts/published?page=${
      Number(page || 1) - 1
    }&size=10`
  );

  const { data: recentPosts } = await axios.get(
    `${process.env.BE_URL}/posts/published?page=0&size=5`
  );
  return {
    props: { posts, recentPosts },
  };
};

export default Articles;
