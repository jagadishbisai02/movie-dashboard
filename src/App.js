import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import TopRated from "./components/TopRated/topRated";
import Header from "./components/Header/header";
import Upcoming from "./components/Upcoming/upcoming";
import MovieDetail from "./components/MovieDetails/moviedetail";
import { useState } from "react";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <>
      <Header onSearch={handleSearch} />
      <Switch>
        <Route exact path="/" component={Home} searchValue={searchValue} />
        <Route exact path="/top-rated" component={TopRated} />
        <Route exact path="/upcoming" component={Upcoming} />
        <Route exact path="/movie/:id" component={MovieDetail} />
      </Switch>
    </>
  );
};

export default App;
