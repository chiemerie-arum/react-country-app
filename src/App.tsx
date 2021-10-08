import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CountryList } from "./pages/CountryList";
import { CountryDetails } from "./pages/CountryDetails";
import { Test } from "./components/Test";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Header />

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test" component={Test} />
          <Route path="/countries" component={CountryList} />
          <Route path="/country/:id" component={CountryDetails} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

const Home = () => {
  const linkStyles = {
    color: "grey",
    textDecoration: "none",
  };
  return (
    <div>
      <h1>
        Welcome to the Country App! Click
        <Link style={linkStyles} to="/countries">
          <span> here </span>
        </Link>
        to see the list of countries.
      </h1>
    </div>
  );
};
