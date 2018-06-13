import React from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";

import config from "./config";
import App from "./src/components/App";

const serverRender = () =>
  axios.get(`${config.serverURL}/api/contests`).then(resp => ({
    initialData: resp.data,
    initialMarkup: ReactDOMServer.renderToString(
      <App initialContests={resp.data.contests} />
    )
  }));

export default serverRender;
