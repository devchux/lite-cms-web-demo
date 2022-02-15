import { Fragment } from "react";
import Head from "next/head";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          name="title"
          content="OTU Youth Development and Empowerment Initiative"
        />
        <meta
          name="description"
          content="OYDEI provides confidential, professional, and trusted counselling services to children, youths and adults on an individual and collective basis"
        />
        <meta
          name="keywords"
          content="NGO, OTU, OYDEI, YEDI, Foundation, Non Profit Organization, mentorship, counselling, teaching, guidance, youth, empowerment, development, initiative, children, adult"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Header />
      {children}
      <Footer />
      <div id="preloader"></div>
      <a className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <Script src="/assets/vendor/aos/aos.js" />
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
      <Script src="/assets/vendor/php-email-form/validate.js" />
      <Script src="/assets/vendor/purecounter/purecounter.js" />
      <Script src="/assets/vendor/swiper/swiper-bundle.min.js" />
      <Script src="https://popupsmart.com/freechat.js"></Script>
      <Script src="/assets/js/main.js" />
    </Fragment>
  );
};

export default Layout;
