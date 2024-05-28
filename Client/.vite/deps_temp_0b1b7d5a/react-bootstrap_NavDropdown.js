"use client";
import {
  Dropdown_default
} from "./chunk-PRHGCW7J.js";
import "./chunk-DTWNEB56.js";
import "./chunk-3EF4MKQU.js";
import "./chunk-O63ZRILJ.js";
import "./chunk-GRRJENS5.js";
import {
  NavLink_default
} from "./chunk-HPIKSFGU.js";
import "./chunk-OS3F4VA6.js";
import "./chunk-TLMFO54Y.js";
import "./chunk-4GS46MZO.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-NXRFPZOB.js";
import {
  require_react
} from "./chunk-O6O4HUXW.js";
import {
  __toESM
} from "./chunk-LQ2VYIYD.js";

// node_modules/react-bootstrap/esm/NavDropdown.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var NavDropdown = React.forwardRef(({
  id,
  title,
  children,
  bsPrefix,
  className,
  rootCloseEvent,
  menuRole,
  disabled,
  active,
  renderMenuOnMount,
  menuVariant,
  ...props
}, ref) => {
  const navItemPrefix = useBootstrapPrefix(void 0, "nav-item");
  return (0, import_jsx_runtime2.jsxs)(Dropdown_default, {
    ref,
    ...props,
    className: (0, import_classnames.default)(className, navItemPrefix),
    children: [(0, import_jsx_runtime.jsx)(Dropdown_default.Toggle, {
      id,
      eventKey: null,
      active,
      disabled,
      childBsPrefix: bsPrefix,
      as: NavLink_default,
      children: title
    }), (0, import_jsx_runtime.jsx)(Dropdown_default.Menu, {
      role: menuRole,
      renderOnMount: renderMenuOnMount,
      rootCloseEvent,
      variant: menuVariant,
      children
    })]
  });
});
NavDropdown.displayName = "NavDropdown";
var NavDropdown_default = Object.assign(NavDropdown, {
  Item: Dropdown_default.Item,
  ItemText: Dropdown_default.ItemText,
  Divider: Dropdown_default.Divider,
  Header: Dropdown_default.Header
});
export {
  NavDropdown_default as default
};
//# sourceMappingURL=react-bootstrap_NavDropdown.js.map
