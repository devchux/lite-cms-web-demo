import Layout from "../components/Layout";

import "../styles/animate.min.css";
import "../styles/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/bootstrap-icons.css";
import "../styles/boxicons/css/boxicons.min.css";
import "../styles/remixicon/remixicon.css";
import "../styles/swiper-bundle.min.css";
import "../styles/style.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
