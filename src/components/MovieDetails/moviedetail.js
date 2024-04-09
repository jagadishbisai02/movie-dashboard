import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import "./moviedetail.css";

const Api_key = "ae5f31e6a117648d9a5029a810f766e5";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

export default function MovieDetail(props) {
  const { match } = props;
  const { params } = match;
  const { id } = params;

  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    movieDetail: null,
    errorMsg: null,
  });
  useEffect(() => {
    const getMovie = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        movieDetail: null,
        errorMsg: null,
      });

      const apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`;
      const option = {
        method: "GET",
      };

      const response = await fetch(apiUrl, option);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setApiResponse((prev) => ({
          ...prev,
          status: apiStatusConstants.success,
          movieDetail: data.cast,
        }));
      } else {
        setApiResponse((prev) => ({
          ...prev,
          status: apiStatusConstants.success,
          errorMsg: data.error_msg,
        }));
      }
    };

    getMovie();
  }, [id]);

  const renderSuccess = () => {
    const { movieDetail } = apiResponse;
    return (
      <div className="cast-container">
        <h1>Cast</h1>
        <ul>
          {movieDetail.map((each) => (
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w500${each.profile_path}`}
                alt={each.name}
              />
              <p>{each.name}</p>
              <p>
                Popularity: <span>{Math.round(each.popularity)}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

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

  return <div className="movie-cast-container">{renderLeaderboard()}</div>;
}
