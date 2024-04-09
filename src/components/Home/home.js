import Movie from "../Movies/movie";
import "./home.css";

export default function Home({ searchValue }) {
  return (
    <>
      <div className="home-container">
        <Movie searchValue={searchValue} />
      </div>
    </>
  );
}
