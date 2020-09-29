import React, { Component, Fragment } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import Menu from "./components/Menu";
import About from "./components/About";
import "./App.css";

const client = new ApolloClient({
  uri: "/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Menu />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Launches} />
                <Route exact path="/about" component={About} />
                <Route exact path="/launch/:flight_number" component={Launch} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
