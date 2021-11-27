import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/" passHref>
          <span className="logo me-auto">
            <Image
              src="/assets/img/logo.png"
              width="50"
              height="50"
              alt=""
              className="img-fluid"
            />
          </span>
        </Link>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link className="active" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
            <li>
              <Link href="/programs">Programs</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li className="dropdown">
              <a>
                <span>Resources</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <Link href="/audios">Audios</Link>
                </li>
                <li>
                  <Link href="/books">Books</Link>
                </li>
                <li>
                  <Link href="/videos">Videos</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
