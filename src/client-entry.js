import { h, hydrate } from "preact";

import App from "./App.jsx";

hydrate(h(App), document.getElementById("root"));
