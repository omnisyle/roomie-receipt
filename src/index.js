import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from "./components/nav";
import App from "./pages/app";
import AddReceipt from "./pages/add_receipt";

const Root = () => (
  <Router>
    <React.Fragment>
      <CssBaseline />
      <div className="container">
        <Nav />
        <Route path="/" exact component={App} />
        <Route path="/add_receipt" exact component={AddReceipt} />
      </div>
    </React.Fragment>
  </Router>
);

ReactDOM.render(
  <Root />,
  document.getElementById("root")
);
