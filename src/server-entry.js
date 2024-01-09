import App from "./App";
import { h } from "preact";
import { renderToString } from "preact-render-to-string";

export const render = () => {
  return renderToString(h(App));
};
