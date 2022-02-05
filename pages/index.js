import axios from "axios";
import About from "../components/About";
import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Books from "../components/Books";
import Count from "../components/Count";
import Event from "../components/Event";

export default function Home({ books: { books }, events: { events }, posts: { articles } }) {
  return (
    <div className="home">
      <Banner />
      <About />
      <Count />
      <Event events={events} />
      <Articles articles={articles} />
      <Books books={books} />
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const {
    data: posts,
  } = await axios.get(`${process.env.BE_URL}/posts/published?page=0&size=3`);
  const {
    data: events,
  } = await axios.get(`${process.env.BE_URL}/events?page=0&size=3`);
  const {
    data: books,
  } = await axios.get(`${process.env.BE_URL}/books?page=0&size=3`);

  return {
    props: {
      posts,
      events,
      books,
    },
  };
};
