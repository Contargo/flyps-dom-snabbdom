import { mount as defaultMount } from "flyps";

import { init } from "snabbdom";
import attrs from "snabbdom/modules/attributes";
import cls from "snabbdom/modules/class";
import events from "snabbdom/modules/eventlisteners";
import style from "snabbdom/modules/style";

export { h } from "snabbdom/h";

let snabbdom = init([attrs, cls, events, style]);

function patch(prevNode, nextNode) {
  return snabbdom(prevNode, nextNode);
}

function cleanup(prevNode) {
  return prevNode.elm.parentNode.removeChild(prevNode.elm);
}

export function mount(root, viewFn) {
  return defaultMount(root, viewFn, patch, cleanup);
}
