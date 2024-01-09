import { render, h, hydrate } from "preact";
import App from "./App.jsx";

const pages = import.meta.glob("./pages/*.page.js");

const pageMap = Object.fromEntries(
  Object.entries(pages).map(([k, v]) => {
    const moduleUrl = k
      .replace(/^\.\/(pages)\//, "/")
      .replace(/\.page\.js$/, "")
      .replace(/\/?(index)$/, "/");

    console.log({ moduleUrl });

    return [
      moduleUrl,
      {
        module: v,
      },
    ];
  })
);

const url = window.location.pathname;
const root = document.getElementById("root");

if (!pageMap[url]) {
  render(h("h1", {}, "404"), root);
} else {
  const { default: Children } = await pageMap[url].module();
  hydrate(h(App, {}, h(Children)), root);
}
