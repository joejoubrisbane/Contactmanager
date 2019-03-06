import React, { Component } from "react";
import Contacts from "./Components/Contacts/Contacts";
import AddContact from "./Components/Contacts/AddContact";
import Header from "./Components/layout/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/pages/About";
import Notfound from "./Components/pages/Notfound";
import Test from "./Components/test/Test";
import EditContact from "./Components/Contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
