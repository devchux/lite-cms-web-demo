import About from "../components/About";
import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Count from "../components/Count";
import Event from "../components/Event";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <About />
      <Count />
      <Event />
      <Articles />
    </div>
  );
}
