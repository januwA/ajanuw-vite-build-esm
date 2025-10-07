import { jsxs as e, jsx as o } from "react/jsx-runtime";
import { create as u } from "zustand";
const i = u()((n) => ({
  count: 0,
  increment: () => n((t) => ({ count: t.count + 1 })),
  decrement: () => n((t) => ({ count: t.count - 1 })),
  reset: () => n(() => ({ count: 0 }))
})), l = () => {
  const { count: n, increment: t, decrement: c, reset: r } = i();
  return /* @__PURE__ */ e("div", { children: [
    /* @__PURE__ */ e("h3", { children: [
      "Count: ",
      n
    ] }),
    /* @__PURE__ */ o("button", { onClick: c, children: "-" }),
    /* @__PURE__ */ o("button", { onClick: r, children: "Reset" }),
    /* @__PURE__ */ o("button", { onClick: t, children: "+" })
  ] });
};
export {
  l as CountComponent,
  i as useCountStore
};
