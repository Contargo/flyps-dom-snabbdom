import { mount as defaultMount } from "flyps";

import {
  init,
  attributesModule,
  classModule,
  eventListenersModule,
  styleModule,
} from "snabbdom";

export { fragment, h, jsx } from "snabbdom";

let snabbdomPatch = init(
  [attributesModule, classModule, eventListenersModule, styleModule],
  undefined,
  {
    experimental: { fragments: true },
  },
);

function patch(prevNode, nextNode) {
  return snabbdomPatch(prevNode, nextNode);
}

function cleanup(prevNode) {
  return prevNode.elm.parentNode.removeChild(prevNode.elm);
}

export function mount(root, viewFn) {
  return defaultMount(root, viewFn, patch, cleanup);
}
