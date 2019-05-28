import { h, mount } from "./index";

beforeEach(() => {
  document.body.innerHTML = '<main><div id="mount-point"></div></main>';
});

describe("mount", () => {
  it("mounts to provided root node", () => {
    let viewFn = () => h("h1", "foo");
    mount(document.querySelector("#mount-point"), viewFn);
    expect(document.body.innerHTML).toBe("<main><h1>foo</h1></main>");
  });
  it("unmounts patched node", () => {
    let viewFn = () => h("h1", "foo");
    let unmount = mount(document.querySelector("#mount-point"), viewFn);
    unmount();
    expect(document.body.innerHTML).toBe("<main></main>");
  });
});
