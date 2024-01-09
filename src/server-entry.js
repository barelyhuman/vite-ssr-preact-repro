import App from "./App";
import { h } from "preact";
import { renderToString } from "preact-render-to-string";

const pages = import.meta.glob("./pages/*.page.js");

const pageMap = Object.fromEntries(
  Object.entries(pages).map(([k, v]) => {
    const moduleUrl = k
      .replace(/^\.\/(pages)\//, "/")
      .replace(/\.page\.js$/, "")
      .replace(/\/?(index)$/, "/");

    return [
      moduleUrl,
      {
        module: v,
      },
    ];
  })
);

export const render = async (url) => {
  if (!pageMap[url]) {
    return renderToString(h("h1", {}, "404"));
  }

  const { default: Children } = await pageMap[url].module();
  return renderToString(h(App, {}, h(Children)));
};
