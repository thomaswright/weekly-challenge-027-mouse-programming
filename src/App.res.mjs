// Generated by ReScript, PLEASE EDIT WITH CARE

import OtherJsx from "./other.jsx";
import * as JsxRuntime from "react/jsx-runtime";

var make = OtherJsx;

function App(props) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx(make, {}),
                JsxRuntime.jsx("div", {
                      children: "Dragon Ball Locations!",
                      className: "w-[500px] text-center text-3xl italic font-black text-[#ff8500]"
                    }),
                JsxRuntime.jsx("div", {
                      children: "Pick a spot on the globe to see where the Dragon Balls go.",
                      className: "w-[500px] text-center italic font-bold text-[#0049c9]"
                    })
              ]
            });
}

var make$1 = App;

export {
  make$1 as make,
}
/* make Not a pure module */