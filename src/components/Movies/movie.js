import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import MovieCard from "../MovieCards/moviesCard";
import "./movie.css";

const Api_key = "ae5f31e6a117648d9a5029a810f766e5";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Movie = ({ searchValue }) => {
  console.log(searchValue);
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    movieList: null,
    errorMsg: null,
  });

  useEffect(() => {
    const getMovies = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        movieList: null,
        errorMsg: null,
      });

      const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&query=${searchValue}&page=1`;
      const option = {
        method: "GET",
      };

      const response = await fetch(apiUrl, option);
      const data = await response.json();

      if (response.ok) {
        setApiResponse((prev) => ({
          ...prev,
          status: apiStatusConstants.success,
          movieList: data.results,
        }));
      } else {
        setApiResponse((prev) => ({
          ...prev,
          status: apiStatusConstants.success,
          errorMsg: data.error_msg,
        }));
      }
    };

    getMovies();
  }, [searchValue]);

  const renderFailureView = () => {
    const { errorMsg } = apiResponse;
    return <p>{errorMsg}</p>;
  };

  const renderLoadingView = () => (
    <div className="loader-spinner-container">
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );

  const renderSuccess = () => {
    const { movieList } = apiResponse;

    return (
      <ul className="movie-card-container">
        {movieList.map((eachMovie) => (
          <MovieCard movie={eachMovie} key={eachMovie.id} />
        ))}
      </ul>
    );
  };

  const renderLeaderboard = () => {
    const { status } = apiResponse;

    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.success:
        return renderSuccess();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return <>{renderLeaderboard()}</>;
};

export default Movie;
