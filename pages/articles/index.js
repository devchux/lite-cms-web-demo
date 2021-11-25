import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";

const Articles = () => {
  return (
    <div className="blog-page">
      <Breadcrumb title="Articles" />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry">
                <div className="entry-img">
                  <Image
                    width="100%"
                    height="100%"
                    layout="responsive"
                    src="/assets/img/course-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title">
                  <a href="blog-single.html">
                    Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam quia
                  </a>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <a href="blog-single.html">John Doe</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <a href="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas.
                    Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                    nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                    ea dolorem doloremque deleniti aperiam unde soluta. Est cum
                    et quod quos aut ut et sit sunt. Voluptate porro consequatur
                    assumenda perferendis dolore.
                  </p>
                  <div className="read-more">
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </article>

              <article className="entry">
                <div className="entry-img">
                  <Image
                    width="100%"
                    height="100%"
                    layout="responsive"
                    src="/assets/img/course-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title">
                  <a href="blog-single.html">
                    Nisi magni odit consequatur autem nulla dolorem
                  </a>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <a href="blog-single.html">John Doe</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <a href="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    Incidunt voluptate sit temporibus aperiam. Quia vitae aut
                    sint ullam quis illum voluptatum et. Quo libero rerum
                    voluptatem pariatur nam. Ad impedit qui officiis est in non
                    aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et
                    quia molestias laboriosam. Tempora nam odit omnis eum
                    corrupti qui aliquid excepturi molestiae. Facilis et sint
                    quos sed voluptas. Maxime sed tempore enim omnis non alias
                    odio quos distinctio.
                  </p>
                  <div className="read-more">
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </article>

              <article className="entry">
                <div className="entry-img">
                  <Image
                    width="100%"
                    height="100%"
                    layout="responsive"
                    src="/assets/img/course-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title">
                  <a href="blog-single.html">
                    Possimus soluta ut id suscipit ea ut. In quo quia et soluta
                    libero sit sint.
                  </a>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <a href="blog-single.html">John Doe</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <a href="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    Aut iste neque ut illum qui perspiciatis similique
                    recusandae non. Fugit autem dolorem labore omnis et. Eum
                    temporibus fugiat voluptate enim tenetur sunt omnis.
                    Doloremque est saepe laborum aut. Ipsa cupiditate ex harum
                    at recusandae nesciunt. Ut dolores velit.
                  </p>
                  <div className="read-more">
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </article>

              <article className="entry">
                <div className="entry-img">
                  <Image
                    width="100%"
                    height="100%"
                    layout="responsive"
                    src="/assets/img/course-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title">
                  <a href="blog-single.html">
                    Non rem rerum nam cum quo minus. Dolor distinctio deleniti
                    explicabo eius exercitationem.
                  </a>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <a href="blog-single.html">John Doe</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <a href="blog-single.html">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    Aspernatur rerum perferendis et sint. Voluptates cupiditate
                    voluptas atque quae. Rem veritatis rerum enim et autem.
                    Saepe atque cum eligendi eaque iste omnis a qui. Quia sed
                    sunt. Ea asperiores expedita et et delectus voluptates
                    rerum. Id saepe ut itaque quod qui voluptas nobis porro
                    rerum. Quam quia nesciunt qui aut est non omnis. Inventore
                    occaecati et quaerat magni itaque nam voluptas. Voluptatem
                    ducimus sint id earum ut nesciunt sed corrupti nemo.
                  </p>
                  <div className="read-more">
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </article>

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

            <div className="col-lg-4">
              <div className="sidebar">
                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <Image
                      width="50"
                      height="50"
                      src="/assets/img/course-1.jpg"
                      alt=""
                    />
                    <h4>
                      <a href="blog-single.html">
                        Nihil blanditiis at in nihil autem
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <Image
                      width="50"
                      height="50"
                      src="/assets/img/course-2.jpg"
                      alt=""
                    />
                    <h4>
                      <a href="blog-single.html">Quidem autem et impedit</a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <Image
                      width="50"
                      height="50"
                      src="/assets/img/course-3.jpg"
                      alt=""
                    />
                    <h4>
                      <a href="blog-single.html">
                        Id quia et et ut maxime similique occaecati ut
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <Image
                      width="50"
                      height="50"
                      src="/assets/img/course-1.jpg"
                      alt=""
                    /><div></div>
                    <h4>
                      <a href="blog-single.html">
                        Laborum corporis quo dara net para
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item d-flex ">
                    <Image
                      width="50"
                      height="50"
                      src="/assets/img/course-2.jpg"
                      alt=""
                    />
                    <div>
                    <h4>
                      <a href="blog-single.html">
                        Et dolores corrupti quae illo quod dolor
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
