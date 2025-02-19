import {
  useEventCallback
} from "./chunk-TLMFO54Y.js";
import {
  useButtonProps
} from "./chunk-4GS46MZO.js";
import {
  require_jsx_runtime
} from "./chunk-NXRFPZOB.js";
import {
  require_react
} from "./chunk-O6O4HUXW.js";
import {
  __toESM
} from "./chunk-LQ2VYIYD.js";

// node_modules/@restart/hooks/esm/useForceUpdate.js
var import_react = __toESM(require_react());
function useForceUpdate() {
  const [, dispatch] = (0, import_react.useReducer)((state) => !state, false);
  return dispatch;
}

// node_modules/@restart/ui/esm/NavContext.js
var React = __toESM(require_react());
var NavContext = React.createContext(null);
NavContext.displayName = "NavContext";
var NavContext_default = NavContext;

// node_modules/@restart/hooks/esm/useEventListener.js
var import_react2 = __toESM(require_react());
function useEventListener(eventTarget, event, listener, capture = false) {
  const handler = useEventCallback(listener);
  (0, import_react2.useEffect)(() => {
    const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return () => target.removeEventListener(event, handler, capture);
  }, [eventTarget]);
}

// node_modules/@restart/ui/esm/Anchor.js
var React2 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useCallbackRef.js
var import_react3 = __toESM(require_react());
function useCallbackRef() {
  return (0, import_react3.useState)(null);
}

// node_modules/@restart/hooks/esm/useGlobalListener.js
var import_react4 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useInterval.js
var import_react5 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useRafInterval.js
var import_react6 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMergeState.js
var import_react7 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useImage.js
var import_react8 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useResizeObserver.js
var import_react9 = __toESM(require_react());

// node_modules/@restart/ui/esm/Anchor.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["onKeyDown"];
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isTrivialHref(href) {
  return !href || href.trim() === "#";
}
var Anchor = React2.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [buttonProps] = useButtonProps(Object.assign({
    tagName: "a"
  }, props));
  const handleKeyDown = useEventCallback((e) => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });
  if (isTrivialHref(props.href) || props.role === "button") {
    return (0, import_jsx_runtime.jsx)("a", Object.assign({
      ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }
  return (0, import_jsx_runtime.jsx)("a", Object.assign({
    ref
  }, props, {
    onKeyDown
  }));
});
Anchor.displayName = "Anchor";
var Anchor_default = Anchor;

export {
  useForceUpdate,
  NavContext_default,
  useCallbackRef,
  useEventListener,
  Anchor_default
};
//# sourceMappingURL=chunk-OS3F4VA6.js.map
