import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { useState as u } from "react";
import { create as m } from "zustand";
import { useNavigate as a } from "react-router-dom";
const l = m()((t) => ({
  count: 0,
  increment: () => t((n) => ({ count: n.count + 1 })),
  decrement: () => t((n) => ({ count: n.count - 1 })),
  reset: () => t(() => ({ count: 0 }))
})), C = () => {
  const { count: t, increment: n, decrement: o, reset: r } = l();
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ c("h3", { children: [
      "Count: ",
      t
    ] }),
    /* @__PURE__ */ e("button", { onClick: o, children: "-" }),
    /* @__PURE__ */ e("button", { onClick: r, children: "Reset" }),
    /* @__PURE__ */ e("button", { onClick: n, children: "+" })
  ] });
}, g = () => {
  const [t, n] = u(""), o = a();
  return /* @__PURE__ */ c("div", { children: [
    /* @__PURE__ */ e("h3", { children: "Dynamic Jump" }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: t,
        onChange: (i) => n(i.target.value),
        placeholder: "输入跳转路径 (如: /about)",
        style: { marginRight: "10px", padding: "5px" }
      }
    ),
    /* @__PURE__ */ e("button", { onClick: () => {
      t.trim() && o(t);
    }, children: "跳转" })
  ] });
};
export {
  C as CountComponent,
  g as DynamicJump,
  l as useCountStore
};
