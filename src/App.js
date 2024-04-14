import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import TopRated from "./components/TopRated/topRated";
import Header from "./components/Header/header";
import Upcoming from "./components/Upcoming/upcoming";
import MovieDetail from "./components/MovieDetails/moviedetail";
import SearchProvider from "./context/context";


const App = () => {
  
  return (
    <SearchProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/top-rated" component={TopRated} />
        <Route exact path="/upcoming" component={Upcoming} />
        <Route exact path="/movie/:id" component={MovieDetail} />
      </Switch>
    </SearchProvider>
  );
};

export default App;
