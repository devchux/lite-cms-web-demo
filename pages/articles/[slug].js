import Image from "next/image";
import ErrorPage from "next/error";
import parse from "html-react-parser";
import axios from "axios";
import Disqus from "disqus-react";
import Breadcrumb from "../../components/Breadcrumb";
import dynamic from "next/dynamic";
import Link from "next/link";

const Speech = dynamic(() => import("react-speech"), { ssr: false });

const BlogDetail = ({ data, recentPosts }) => {
  if (!data) return <ErrorPage statusCode={404} />;
  return (
    <div className="blog-page">
      <Breadcrumb title="Articles" />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <div className="entry-img">
                  <Image
                    src={data?.article.imageUrl}
                    width="100%"
                    height="70px"
                    layout="responsive"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <h2 className="entry-title">
                  <a href={`/articles/${data.article.slug}`}>
                    {data.article.title}
                  </a>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <a>
                        {data.article.Member.role.charAt(0).toUpperCase() +
                          data.article.Member.role.substr(1)}
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <a href="blog-single.html">
                        <time
                          dateTime={new Date(
                            data.article.createdAt
                          ).toDateString()}
                        >
                          {new Date(data.article.createdAt).toDateString()}
                        </time>
                      </a>
                    </li>
                  </ul>
                </div>

                <p
                  className="mt-3"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Listen to this article
                </p>
                {typeof window !== "undefined" && (
                  <Speech
                    stop={true}
                    pause={true}
                    resume={true}
                    text={data.article.body}
                    styles={{
                      container: {
                        width: "100%",
                      },
                      text: {
                        width: "100%",
                        display: "",
                      },
                      play: {
                        hover: {
                          backgroundColor: "GhostWhite",
                        },
                        button: {
                          width: "34px",
                          height: "34px",
                          cursor: "pointer",
                          pointerEvents: "none",
                          outline: "none",
                          backgroundColor: "Gainsboro",
                          border: "solid 1px rgba(255,255,255,1)",
                          borderRadius: 6,
                        },
                      },
                      stop: {
                        hover: {
                          backgroundColor: "GhostWhite",
                        },
                        button: {
                          width: "34px",
                          height: "34px",
                          cursor: "pointer",
                          pointerEvents: "none",
                          outline: "none",
                          backgroundColor: "Gainsboro",
                          border: "solid 1px rgba(255,255,255,1)",
                          borderRadius: 6,
                        },
                      },
                      pause: {
                        hover: {
                          backgroundColor: "GhostWhite",
                        },
                        button: {
                          width: "34px",
                          height: "34px",
                          cursor: "pointer",
                          pointerEvents: "none",
                          outline: "none",
                          backgroundColor: "Gainsboro",
                          border: "solid 1px rgba(255,255,255,1)",
                          borderRadius: 6,
                        },
                      },
                      resume: {
                        hover: {
                          backgroundColor: "GhostWhite",
                        },
                        button: {
                          width: "34px",
                          height: "34px",
                          cursor: "pointer",
                          pointerEvents: "none",
                          outline: "none",
                          backgroundColor: "Gainsboro",
                          border: "solid 1px rgba(255,255,255,1)",
                          borderRadius: 6,
                        },
                      },
                    }}
                  />
                )}
                <div className="mt-5 entry-content">
                  {parse(data.article.body)}
                </div>
              </article>
              <Disqus.DiscussionEmbed
                shortname="otufoundation"
                config={{
                  url: `http://localhost:3000/articles/${data.article.slug}`,
                  identifier: data.article.id,
                  title: data.article.title,
                }}
              />
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

export const getServerSideProps = async ({ params, res }) => {
  const { slug } = params;
  try {
    const { data } = await axios.get(
      `${process.env.BE_URL}/posts/slug/${slug}`
    );
    const { data: recentPosts } = await axios.get(
      `${process.env.BE_URL}/posts/published?page=0&size=5`
    );
    return {
      props: {
        data,
        recentPosts,
      },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default BlogDetail;
