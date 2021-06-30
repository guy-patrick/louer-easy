import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";
import Results from "./pages/Results";
import "./App.scss";

export const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/results" component={Results} />
    </Switch>
  </div>
);
