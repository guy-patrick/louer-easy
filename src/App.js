import { Component } from "react";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import { Homepage } from "./pages/Homepage";
import Results from "./pages/Results";
import { SignInAndSignUp } from "./pages/SignInAndSignUp";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/results" component={Results} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
