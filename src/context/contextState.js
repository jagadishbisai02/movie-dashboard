import MovieContext from "./context";

const MovieState = (props) => {
  const state = {};
  return (
    <MovieContext.Provider value={state}>
      {props.childern}
    </MovieContext.Provider>
  );
};

export default MovieState;
