import React from "react";
import ReactDOM from "react-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import "./index.css";
import Chart from "./Chart";

// const App = () => <div>Hi there, I'm React from Webpack 5.</div>;

const App = () => <Chart />

ReactDOM.render(<App />, document.getElementById("app"));
