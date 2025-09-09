"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require_interop_require_default = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports2) {
    "use strict";
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2._ = _interop_require_default;
  }
});

// node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js
var require_app_router_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js"(exports2) {
    "use strict";
    "use client";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      AppRouterContext: function() {
        return AppRouterContext;
      },
      GlobalLayoutRouterContext: function() {
        return GlobalLayoutRouterContext;
      },
      LayoutRouterContext: function() {
        return LayoutRouterContext;
      },
      MissingSlotContext: function() {
        return MissingSlotContext;
      },
      TemplateContext: function() {
        return TemplateContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(require("react"));
    var AppRouterContext = _react.default.createContext(null);
    var LayoutRouterContext = _react.default.createContext(null);
    var GlobalLayoutRouterContext = _react.default.createContext(null);
    var TemplateContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      AppRouterContext.displayName = "AppRouterContext";
      LayoutRouterContext.displayName = "LayoutRouterContext";
      GlobalLayoutRouterContext.displayName = "GlobalLayoutRouterContext";
      TemplateContext.displayName = "TemplateContext";
    }
    var MissingSlotContext = _react.default.createContext(/* @__PURE__ */ new Set());
  }
});

// node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js
var require_hooks_client_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js"(exports2) {
    "use strict";
    "use client";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      PathParamsContext: function() {
        return PathParamsContext;
      },
      PathnameContext: function() {
        return PathnameContext;
      },
      SearchParamsContext: function() {
        return SearchParamsContext;
      }
    });
    var _react = require("react");
    var SearchParamsContext = (0, _react.createContext)(null);
    var PathnameContext = (0, _react.createContext)(null);
    var PathParamsContext = (0, _react.createContext)(null);
    if (process.env.NODE_ENV !== "production") {
      SearchParamsContext.displayName = "SearchParamsContext";
      PathnameContext.displayName = "PathnameContext";
      PathParamsContext.displayName = "PathParamsContext";
    }
  }
});

// node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js
var require_get_segment_value = __commonJS({
  "node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "getSegmentValue", {
      enumerable: true,
      get: function() {
        return getSegmentValue;
      }
    });
    function getSegmentValue(segment) {
      return Array.isArray(segment) ? segment[1] : segment;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/shared/lib/segment.js
var require_segment = __commonJS({
  "node_modules/next/dist/shared/lib/segment.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
      },
      PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
      },
      addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
      },
      isGroupSegment: function() {
        return isGroupSegment;
      },
      isParallelRouteSegment: function() {
        return isParallelRouteSegment;
      }
    });
    function isGroupSegment(segment) {
      return segment[0] === "(" && segment.endsWith(")");
    }
    function isParallelRouteSegment(segment) {
      return segment.startsWith("@") && segment !== "@children";
    }
    function addSearchParamsIfPageSegment(segment, searchParams) {
      const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
      if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== "{}" ? PAGE_SEGMENT_KEY + "?" + stringifiedQuery : PAGE_SEGMENT_KEY;
      }
      return segment;
    }
    var PAGE_SEGMENT_KEY = "__PAGE__";
    var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
  }
});

// node_modules/next/dist/client/components/redirect-status-code.js
var require_redirect_status_code = __commonJS({
  "node_modules/next/dist/client/components/redirect-status-code.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "RedirectStatusCode", {
      enumerable: true,
      get: function() {
        return RedirectStatusCode;
      }
    });
    var RedirectStatusCode = /* @__PURE__ */ (function(RedirectStatusCode2) {
      RedirectStatusCode2[RedirectStatusCode2["SeeOther"] = 303] = "SeeOther";
      RedirectStatusCode2[RedirectStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
      RedirectStatusCode2[RedirectStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
      return RedirectStatusCode2;
    })({});
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/redirect-error.js
var require_redirect_error = __commonJS({
  "node_modules/next/dist/client/components/redirect-error.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
      },
      RedirectType: function() {
        return RedirectType;
      },
      isRedirectError: function() {
        return isRedirectError;
      }
    });
    var _redirectstatuscode = require_redirect_status_code();
    var REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
    var RedirectType = /* @__PURE__ */ (function(RedirectType2) {
      RedirectType2["push"] = "push";
      RedirectType2["replace"] = "replace";
      return RedirectType2;
    })({});
    function isRedirectError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
      }
      const digest = error.digest.split(";");
      const [errorCode, type] = digest;
      const destination = digest.slice(2, -2).join(";");
      const status = digest.at(-2);
      const statusCode = Number(status);
      return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/server/app-render/async-local-storage.js
var require_async_local_storage = __commonJS({
  "node_modules/next/dist/server/app-render/async-local-storage.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      bindSnapshot: function() {
        return bindSnapshot;
      },
      createAsyncLocalStorage: function() {
        return createAsyncLocalStorage;
      },
      createSnapshot: function() {
        return createSnapshot;
      }
    });
    var sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
      value: "E504",
      enumerable: false,
      configurable: true
    });
    var FakeAsyncLocalStorage = class {
      disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      getStore() {
        return void 0;
      }
      run() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      static bind(fn) {
        return fn;
      }
    };
    var maybeGlobalAsyncLocalStorage = typeof globalThis !== "undefined" && globalThis.AsyncLocalStorage;
    function createAsyncLocalStorage() {
      if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
      }
      return new FakeAsyncLocalStorage();
    }
    function bindSnapshot(fn) {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
      }
      return FakeAsyncLocalStorage.bind(fn);
    }
    function createSnapshot() {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
      }
      return function(fn, ...args) {
        return fn(...args);
      };
    }
  }
});

// node_modules/next/dist/server/app-render/action-async-storage-instance.js
var require_action_async_storage_instance = __commonJS({
  "node_modules/next/dist/server/app-render/action-async-storage-instance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "actionAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return actionAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var actionAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// node_modules/next/dist/server/app-render/action-async-storage.external.js
var require_action_async_storage_external = __commonJS({
  "node_modules/next/dist/server/app-render/action-async-storage.external.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "actionAsyncStorage", {
      enumerable: true,
      get: function() {
        return _actionasyncstorageinstance.actionAsyncStorageInstance;
      }
    });
    var _actionasyncstorageinstance = require_action_async_storage_instance();
  }
});

// node_modules/next/dist/client/components/redirect.js
var require_redirect = __commonJS({
  "node_modules/next/dist/client/components/redirect.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getRedirectError: function() {
        return getRedirectError;
      },
      getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
      },
      getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
      },
      getURLFromRedirectError: function() {
        return getURLFromRedirectError;
      },
      permanentRedirect: function() {
        return permanentRedirect;
      },
      redirect: function() {
        return redirect;
      }
    });
    var _redirectstatuscode = require_redirect_status_code();
    var _redirecterror = require_redirect_error();
    var actionAsyncStorage = typeof window === "undefined" ? require_action_async_storage_external().actionAsyncStorage : void 0;
    function getRedirectError(url, type, statusCode) {
      if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
      const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
      return error;
    }
    function redirect(url, type) {
      var _actionAsyncStorage_getStore;
      type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
      throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
    }
    function permanentRedirect(url, type) {
      if (type === void 0) type = _redirecterror.RedirectType.replace;
      throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
    }
    function getURLFromRedirectError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) return null;
      return error.digest.split(";").slice(2, -2).join(";");
    }
    function getRedirectTypeFromError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: false,
          configurable: true
        });
      }
      return error.digest.split(";", 2)[1];
    }
    function getRedirectStatusCodeFromError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: false,
          configurable: true
        });
      }
      return Number(error.digest.split(";").at(-2));
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js
var require_http_access_fallback = __commonJS({
  "node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
      },
      HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
      },
      getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
      },
      getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
      },
      isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
      }
    });
    var HTTPAccessErrorStatus = {
      NOT_FOUND: 404,
      FORBIDDEN: 403,
      UNAUTHORIZED: 401
    };
    var ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
    var HTTP_ERROR_FALLBACK_ERROR_CODE = "NEXT_HTTP_ERROR_FALLBACK";
    function isHTTPAccessFallbackError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
      }
      const [prefix, httpStatus] = error.digest.split(";");
      return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
    }
    function getAccessFallbackHTTPStatus(error) {
      const httpStatus = error.digest.split(";")[1];
      return Number(httpStatus);
    }
    function getAccessFallbackErrorTypeByStatus(status) {
      switch (status) {
        case 401:
          return "unauthorized";
        case 403:
          return "forbidden";
        case 404:
          return "not-found";
        default:
          return;
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/not-found.js
var require_not_found = __commonJS({
  "node_modules/next/dist/client/components/not-found.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "notFound", {
      enumerable: true,
      get: function() {
        return notFound;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
    function notFound() {
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/forbidden.js
var require_forbidden = __commonJS({
  "node_modules/next/dist/client/components/forbidden.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "forbidden", {
      enumerable: true,
      get: function() {
        return forbidden;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
    function forbidden() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E488",
          enumerable: false,
          configurable: true
        });
      }
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/unauthorized.js
var require_unauthorized = __commonJS({
  "node_modules/next/dist/client/components/unauthorized.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "unauthorized", {
      enumerable: true,
      get: function() {
        return unauthorized;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
    function unauthorized() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E411",
          enumerable: false,
          configurable: true
        });
      }
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/server/dynamic-rendering-utils.js
var require_dynamic_rendering_utils = __commonJS({
  "node_modules/next/dist/server/dynamic-rendering-utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
      },
      makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
      },
      makeHangingPromise: function() {
        return makeHangingPromise;
      }
    });
    function isHangingPromiseRejectionError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === HANGING_PROMISE_REJECTION;
    }
    var HANGING_PROMISE_REJECTION = "HANGING_PROMISE_REJECTION";
    var HangingPromiseRejectionError = class extends Error {
      constructor(route, expression) {
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
      }
    };
    var abortListenersBySignal = /* @__PURE__ */ new WeakMap();
    function makeHangingPromise(signal, route, expression) {
      if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
      } else {
        const hangingPromise = new Promise((_, reject) => {
          const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
          let currentListeners = abortListenersBySignal.get(signal);
          if (currentListeners) {
            currentListeners.push(boundRejection);
          } else {
            const listeners = [
              boundRejection
            ];
            abortListenersBySignal.set(signal, listeners);
            signal.addEventListener("abort", () => {
              for (let i = 0; i < listeners.length; i++) {
                listeners[i]();
              }
            }, {
              once: true
            });
          }
        });
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
      }
    }
    function ignoreReject() {
    }
    function makeDevtoolsIOAwarePromise(underlying) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(underlying);
        }, 0);
      });
    }
  }
});

// node_modules/next/dist/server/lib/router-utils/is-postpone.js
var require_is_postpone = __commonJS({
  "node_modules/next/dist/server/lib/router-utils/is-postpone.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isPostpone", {
      enumerable: true,
      get: function() {
        return isPostpone;
      }
    });
    var REACT_POSTPONE_TYPE = Symbol.for("react.postpone");
    function isPostpone(error) {
      return typeof error === "object" && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
    }
  }
});

// node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js
var require_bailout_to_csr = __commonJS({
  "node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      BailoutToCSRError: function() {
        return BailoutToCSRError;
      },
      isBailoutToCSRError: function() {
        return isBailoutToCSRError;
      }
    });
    var BAILOUT_TO_CSR = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
    var BailoutToCSRError = class extends Error {
      constructor(reason) {
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
      }
    };
    function isBailoutToCSRError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === BAILOUT_TO_CSR;
    }
  }
});

// node_modules/next/dist/client/components/is-next-router-error.js
var require_is_next_router_error = __commonJS({
  "node_modules/next/dist/client/components/is-next-router-error.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "isNextRouterError", {
      enumerable: true,
      get: function() {
        return isNextRouterError;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var _redirecterror = require_redirect_error();
    function isNextRouterError(error) {
      return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/hooks-server-context.js
var require_hooks_server_context = __commonJS({
  "node_modules/next/dist/client/components/hooks-server-context.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      DynamicServerError: function() {
        return DynamicServerError;
      },
      isDynamicServerError: function() {
        return isDynamicServerError;
      }
    });
    var DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
    var DynamicServerError = class extends Error {
      constructor(description) {
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
      }
    };
    function isDynamicServerError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
        return false;
      }
      return err.digest === DYNAMIC_ERROR_CODE;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/static-generation-bailout.js
var require_static_generation_bailout = __commonJS({
  "node_modules/next/dist/client/components/static-generation-bailout.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      StaticGenBailoutError: function() {
        return StaticGenBailoutError;
      },
      isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
      }
    });
    var NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
    var StaticGenBailoutError = class extends Error {
      constructor(...args) {
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
      }
    };
    function isStaticGenBailoutError(error) {
      if (typeof error !== "object" || error === null || !("code" in error)) {
        return false;
      }
      return error.code === NEXT_STATIC_GEN_BAILOUT;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js
var require_work_unit_async_storage_instance = __commonJS({
  "node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "workUnitAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workUnitAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// node_modules/next/dist/client/components/app-router-headers.js
var require_app_router_headers = __commonJS({
  "node_modules/next/dist/client/components/app-router-headers.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      ACTION_HEADER: function() {
        return ACTION_HEADER;
      },
      FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
      },
      NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
      },
      NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
      },
      NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
      },
      NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
      },
      NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
      },
      NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
      },
      NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
      },
      NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
      },
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
      },
      NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
      },
      NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
      },
      NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
      },
      NEXT_URL: function() {
        return NEXT_URL;
      },
      RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
      },
      RSC_HEADER: function() {
        return RSC_HEADER;
      }
    });
    var RSC_HEADER = "rsc";
    var ACTION_HEADER = "next-action";
    var NEXT_ROUTER_STATE_TREE_HEADER = "next-router-state-tree";
    var NEXT_ROUTER_PREFETCH_HEADER = "next-router-prefetch";
    var NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = "next-router-segment-prefetch";
    var NEXT_HMR_REFRESH_HEADER = "next-hmr-refresh";
    var NEXT_HMR_REFRESH_HASH_COOKIE = "__next_hmr_refresh_hash__";
    var NEXT_URL = "next-url";
    var RSC_CONTENT_TYPE_HEADER = "text/x-component";
    var FLIGHT_HEADERS = [
      RSC_HEADER,
      NEXT_ROUTER_STATE_TREE_HEADER,
      NEXT_ROUTER_PREFETCH_HEADER,
      NEXT_HMR_REFRESH_HEADER,
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
    ];
    var NEXT_RSC_UNION_QUERY = "_rsc";
    var NEXT_ROUTER_STALE_TIME_HEADER = "x-nextjs-stale-time";
    var NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed";
    var NEXT_REWRITTEN_PATH_HEADER = "x-nextjs-rewritten-path";
    var NEXT_REWRITTEN_QUERY_HEADER = "x-nextjs-rewritten-query";
    var NEXT_IS_PRERENDER_HEADER = "x-nextjs-prerender";
    var NEXT_ACTION_NOT_FOUND_HEADER = "x-nextjs-action-not-found";
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/shared/lib/invariant-error.js
var require_invariant_error = __commonJS({
  "node_modules/next/dist/shared/lib/invariant-error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "InvariantError", {
      enumerable: true,
      get: function() {
        return InvariantError;
      }
    });
    var InvariantError = class extends Error {
      constructor(message, options) {
        super("Invariant: " + (message.endsWith(".") ? message : message + ".") + " This is a bug in Next.js.", options);
        this.name = "InvariantError";
      }
    };
  }
});

// node_modules/next/dist/server/app-render/work-unit-async-storage.external.js
var require_work_unit_async_storage_external = __commonJS({
  "node_modules/next/dist/server/app-render/work-unit-async-storage.external.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getCacheSignal: function() {
        return getCacheSignal;
      },
      getDraftModeProviderForCacheScope: function() {
        return getDraftModeProviderForCacheScope;
      },
      getHmrRefreshHash: function() {
        return getHmrRefreshHash;
      },
      getPrerenderResumeDataCache: function() {
        return getPrerenderResumeDataCache;
      },
      getRenderResumeDataCache: function() {
        return getRenderResumeDataCache;
      },
      getRuntimeStagePromise: function() {
        return getRuntimeStagePromise;
      },
      getServerComponentsHmrCache: function() {
        return getServerComponentsHmrCache;
      },
      isHmrRefresh: function() {
        return isHmrRefresh;
      },
      throwForMissingRequestStore: function() {
        return throwForMissingRequestStore;
      },
      throwInvariantForMissingStore: function() {
        return throwInvariantForMissingStore;
      },
      workUnitAsyncStorage: function() {
        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
      }
    });
    var _workunitasyncstorageinstance = require_work_unit_async_storage_instance();
    var _approuterheaders = require_app_router_headers();
    var _invarianterror = require_invariant_error();
    function throwForMissingRequestStore(callingExpression) {
      throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: false,
        configurable: true
      });
    }
    function throwInvariantForMissingStore() {
      throw Object.defineProperty(new _invarianterror.InvariantError("Expected workUnitAsyncStorage to have a store."), "__NEXT_ERROR_CODE", {
        value: "E696",
        enumerable: false,
        configurable: true
      });
    }
    function getPrerenderResumeDataCache(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-runtime":
        case "prerender-ppr":
          return workUnitStore.prerenderResumeDataCache;
        case "prerender-client":
          return workUnitStore.prerenderResumeDataCache;
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getRenderResumeDataCache(workUnitStore) {
      switch (workUnitStore.type) {
        case "request":
          return workUnitStore.renderResumeDataCache;
        case "prerender":
        case "prerender-runtime":
        case "prerender-client":
          if (workUnitStore.renderResumeDataCache) {
            return workUnitStore.renderResumeDataCache;
          }
        // fallthrough
        case "prerender-ppr":
          return workUnitStore.prerenderResumeDataCache;
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "prerender-legacy":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getHmrRefreshHash(workStore, workUnitStore) {
      if (workStore.dev) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "prerender":
          case "prerender-runtime":
            return workUnitStore.hmrRefreshHash;
          case "request":
            var _workUnitStore_cookies_get;
            return (_workUnitStore_cookies_get = workUnitStore.cookies.get(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : _workUnitStore_cookies_get.value;
          case "prerender-client":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function isHmrRefresh(workStore, workUnitStore) {
      if (workStore.dev) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "request":
            return workUnitStore.isHmrRefresh ?? false;
          case "prerender":
          case "prerender-client":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
      return false;
    }
    function getServerComponentsHmrCache(workStore, workUnitStore) {
      if (workStore.dev) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "request":
            return workUnitStore.serverComponentsHmrCache;
          case "prerender":
          case "prerender-client":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
      if (workStore.isDraftMode) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "unstable-cache":
          case "prerender-runtime":
          case "request":
            return workUnitStore.draftMode;
          case "prerender":
          case "prerender-client":
          case "prerender-ppr":
          case "prerender-legacy":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function getCacheSignal(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-client":
        case "prerender-runtime":
          return workUnitStore.cacheSignal;
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getRuntimeStagePromise(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender-runtime":
        case "private-cache":
          return workUnitStore.runtimeStagePromise;
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "unstable-cache":
          return null;
        default:
          return workUnitStore;
      }
    }
  }
});

// node_modules/next/dist/server/app-render/work-async-storage-instance.js
var require_work_async_storage_instance = __commonJS({
  "node_modules/next/dist/server/app-render/work-async-storage-instance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "workAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// node_modules/next/dist/server/app-render/work-async-storage.external.js
var require_work_async_storage_external = __commonJS({
  "node_modules/next/dist/server/app-render/work-async-storage.external.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "workAsyncStorage", {
      enumerable: true,
      get: function() {
        return _workasyncstorageinstance.workAsyncStorageInstance;
      }
    });
    var _workasyncstorageinstance = require_work_async_storage_instance();
  }
});

// node_modules/next/dist/lib/framework/boundary-constants.js
var require_boundary_constants = __commonJS({
  "node_modules/next/dist/lib/framework/boundary-constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
      },
      OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
      },
      ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
      },
      VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
      }
    });
    var METADATA_BOUNDARY_NAME = "__next_metadata_boundary__";
    var VIEWPORT_BOUNDARY_NAME = "__next_viewport_boundary__";
    var OUTLET_BOUNDARY_NAME = "__next_outlet_boundary__";
    var ROOT_LAYOUT_BOUNDARY_NAME = "__next_root_layout_boundary__";
  }
});

// node_modules/next/dist/lib/scheduler.js
var require_scheduler = __commonJS({
  "node_modules/next/dist/lib/scheduler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      atLeastOneTask: function() {
        return atLeastOneTask;
      },
      scheduleImmediate: function() {
        return scheduleImmediate;
      },
      scheduleOnNextTick: function() {
        return scheduleOnNextTick;
      },
      waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
      }
    });
    var scheduleOnNextTick = (cb) => {
      Promise.resolve().then(() => {
        if (process.env.NEXT_RUNTIME === "edge") {
          setTimeout(cb, 0);
        } else {
          process.nextTick(cb);
        }
      });
    };
    var scheduleImmediate = (cb) => {
      if (process.env.NEXT_RUNTIME === "edge") {
        setTimeout(cb, 0);
      } else {
        setImmediate(cb);
      }
    };
    function atLeastOneTask() {
      return new Promise((resolve) => scheduleImmediate(resolve));
    }
    function waitAtLeastOneReactRenderTask() {
      if (process.env.NEXT_RUNTIME === "edge") {
        return new Promise((r) => setTimeout(r, 0));
      } else {
        return new Promise((r) => setImmediate(r));
      }
    }
  }
});

// node_modules/next/dist/server/app-render/dynamic-rendering.js
var require_dynamic_rendering = __commonJS({
  "node_modules/next/dist/server/app-render/dynamic-rendering.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      Postpone: function() {
        return Postpone;
      },
      PreludeState: function() {
        return PreludeState;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
      },
      abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
      },
      accessedDynamicData: function() {
        return accessedDynamicData;
      },
      annotateDynamicAccess: function() {
        return annotateDynamicAccess;
      },
      consumeDynamicAccess: function() {
        return consumeDynamicAccess;
      },
      createDynamicTrackingState: function() {
        return createDynamicTrackingState;
      },
      createDynamicValidationState: function() {
        return createDynamicValidationState;
      },
      createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
      },
      createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
      },
      delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
      },
      formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
      },
      getFirstDynamicReason: function() {
        return getFirstDynamicReason;
      },
      isDynamicPostpone: function() {
        return isDynamicPostpone;
      },
      isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
      },
      logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
      },
      markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
      },
      postponeWithTracking: function() {
        return postponeWithTracking;
      },
      throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
      },
      throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
      },
      trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
      },
      trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
      },
      trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
      },
      trackSynchronousRequestDataAccessInDev: function() {
        return trackSynchronousRequestDataAccessInDev;
      },
      useDynamicRouteParams: function() {
        return useDynamicRouteParams;
      },
      warnOnSyncDynamicError: function() {
        return warnOnSyncDynamicError;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require("react"));
    var _hooksservercontext = require_hooks_server_context();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _boundaryconstants = require_boundary_constants();
    var _scheduler = require_scheduler();
    var _bailouttocsr = require_bailout_to_csr();
    var _invarianterror = require_invariant_error();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var hasPostpone = typeof _react.default.unstable_postpone === "function";
    function createDynamicTrackingState(isDebugDynamicAccesses) {
      return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
      };
    }
    function createDynamicValidationState() {
      return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
      };
    }
    function getFirstDynamicReason(trackingState) {
      var _trackingState_dynamicAccesses_;
      return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
    }
    function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "cache":
          case "unstable-cache":
            return;
          case "private-cache":
            return;
          case "prerender-legacy":
          case "prerender-ppr":
          case "request":
            break;
          default:
            workUnitStore;
        }
      }
      if (store.forceDynamic || store.forceStatic) return;
      if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E553",
          enumerable: false,
          configurable: true
        });
      }
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender-ppr":
            return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
          case "prerender-legacy":
            workUnitStore.revalidate = 0;
            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
              value: "E550",
              enumerable: false,
              configurable: true
            });
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
          case "request":
            if (process.env.NODE_ENV !== "production") {
              workUnitStore.usedDynamic = true;
            }
            break;
          default:
            workUnitStore;
        }
      }
    }
    function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
      const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
      });
      prerenderStore.revalidate = 0;
      store.dynamicUsageDescription = expression;
      store.dynamicUsageStack = err.stack;
      throw err;
    }
    function trackDynamicDataInDynamicRender(workUnitStore) {
      switch (workUnitStore.type) {
        case "cache":
        case "unstable-cache":
          return;
        case "private-cache":
          return;
        case "prerender":
        case "prerender-runtime":
        case "prerender-legacy":
        case "prerender-ppr":
        case "prerender-client":
          break;
        case "request":
          if (process.env.NODE_ENV !== "production") {
            workUnitStore.usedDynamic = true;
          }
          break;
        default:
          workUnitStore;
      }
    }
    function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
      const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
      const error = createPrerenderInterruptedError(reason);
      prerenderStore.controller.abort(error);
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
      if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
          dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
      }
    }
    function trackSynchronousPlatformIOAccessInDev(requestStore) {
      requestStore.prerenderPhase = false;
    }
    function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
      const prerenderSignal = prerenderStore.controller.signal;
      if (prerenderSignal.aborted === false) {
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
          if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
          }
        }
      }
      throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
    }
    function warnOnSyncDynamicError(dynamicTracking) {
      if (dynamicTracking.syncDynamicErrorWithStack) {
        console.error(dynamicTracking.syncDynamicErrorWithStack);
      }
    }
    var trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
    function Postpone({ reason, route }) {
      const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      const dynamicTracking = prerenderStore && prerenderStore.type === "prerender-ppr" ? prerenderStore.dynamicTracking : null;
      postponeWithTracking(route, reason, dynamicTracking);
    }
    function postponeWithTracking(route, expression, dynamicTracking) {
      assertPostpone();
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
      _react.default.unstable_postpone(createPostponeReason(route, expression));
    }
    function createPostponeReason(route, expression) {
      return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    }
    function isDynamicPostpone(err) {
      if (typeof err === "object" && err !== null && typeof err.message === "string") {
        return isDynamicPostponeReason(err.message);
      }
      return false;
    }
    function isDynamicPostponeReason(reason) {
      return reason.includes("needs to bail out of prerendering at this point because it used") && reason.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
    }
    if (isDynamicPostponeReason(createPostponeReason("%%%", "^^^")) === false) {
      throw Object.defineProperty(new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
      });
    }
    var NEXT_PRERENDER_INTERRUPTED = "NEXT_PRERENDER_INTERRUPTED";
    function createPrerenderInterruptedError(message) {
      const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = NEXT_PRERENDER_INTERRUPTED;
      return error;
    }
    function isPrerenderInterruptedError(error) {
      return typeof error === "object" && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && "name" in error && "message" in error && error instanceof Error;
    }
    function accessedDynamicData(dynamicAccesses) {
      return dynamicAccesses.length > 0;
    }
    function consumeDynamicAccess(serverDynamic, clientDynamic) {
      serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
      return serverDynamic.dynamicAccesses;
    }
    function formatDynamicAPIAccesses(dynamicAccesses) {
      return dynamicAccesses.filter((access) => typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack }) => {
        stack = stack.split("\n").slice(4).filter((line) => {
          if (line.includes("node_modules/next/")) {
            return false;
          }
          if (line.includes(" (<anonymous>)")) {
            return false;
          }
          if (line.includes(" (node:")) {
            return false;
          }
          return true;
        }).join("\n");
        return `Dynamic API Usage Debug - ${expression}:
${stack}`;
      });
    }
    function assertPostpone() {
      if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
          value: "E224",
          enumerable: false,
          configurable: true
        });
      }
    }
    function createRenderInBrowserAbortSignal() {
      const controller = new AbortController();
      controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
      }));
      return controller.signal;
    }
    function createHangingInputAbortSignal(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-runtime":
          const controller = new AbortController();
          if (workUnitStore.cacheSignal) {
            workUnitStore.cacheSignal.inputReady().then(() => {
              controller.abort();
            });
          } else {
            const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
            if (runtimeStagePromise) {
              runtimeStagePromise.then(() => (0, _scheduler.scheduleOnNextTick)(() => controller.abort()));
            } else {
              (0, _scheduler.scheduleOnNextTick)(() => controller.abort());
            }
          }
          return controller.signal;
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return void 0;
        default:
          workUnitStore;
      }
    }
    function annotateDynamicAccess(expression, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function useDynamicRouteParams(expression) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore && workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender-client":
          case "prerender": {
            const fallbackParams = workUnitStore.fallbackRouteParams;
            if (fallbackParams && fallbackParams.size > 0) {
              _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
            }
            break;
          }
          case "prerender-ppr": {
            const fallbackParams = workUnitStore.fallbackRouteParams;
            if (fallbackParams && fallbackParams.size > 0) {
              return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
            }
            break;
          }
          case "prerender-runtime":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E771",
              enumerable: false,
              configurable: true
            });
          case "cache":
          case "private-cache":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E745",
              enumerable: false,
              configurable: true
            });
          case "prerender-legacy":
          case "request":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
    }
    var hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
    var bodyAndImplicitTags = "body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6";
    var hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
    var hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
    var hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
    var hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
    function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
      if (hasOutletRegex.test(componentStack)) {
        return;
      } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
      } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
      } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
      } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        return;
      } else if (clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
      } else {
        const message = `Route "${workStore.route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
      }
    }
    function createErrorWithComponentOrOwnerStack(message, componentStack) {
      const ownerStack = process.env.NODE_ENV !== "production" && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
      const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.stack = error.name + ": " + message + (ownerStack ?? componentStack);
      return error;
    }
    var PreludeState = /* @__PURE__ */ (function(PreludeState2) {
      PreludeState2[PreludeState2["Full"] = 0] = "Full";
      PreludeState2[PreludeState2["Empty"] = 1] = "Empty";
      PreludeState2[PreludeState2["Errored"] = 2] = "Errored";
      return PreludeState2;
    })({});
    function logDisallowedDynamicError(workStore, error) {
      console.error(error);
      if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
          console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
          console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
      }
    }
    function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
      if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
          return;
        }
        if (serverDynamic.syncDynamicErrorWithStack) {
          logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          for (let i = 0; i < dynamicErrors.length; i++) {
            logDisallowedDynamicError(workStore, dynamicErrors[i]);
          }
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (dynamicValidation.hasDynamicViewport) {
          console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
          console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
      } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
          console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
      }
    }
    function delayUntilRuntimeStage(prerenderStore, result) {
      if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(() => result);
      }
      return result;
    }
  }
});

// node_modules/next/dist/client/components/unstable-rethrow.server.js
var require_unstable_rethrow_server = __commonJS({
  "node_modules/next/dist/client/components/unstable-rethrow.server.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _ispostpone = require_is_postpone();
    var _bailouttocsr = require_bailout_to_csr();
    var _isnextroutererror = require_is_next_router_error();
    var _dynamicrendering = require_dynamic_rendering();
    var _hooksservercontext = require_hooks_server_context();
    function unstable_rethrow(error) {
      if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
        throw error;
      }
      if (error instanceof Error && "cause" in error) {
        unstable_rethrow(error.cause);
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/unstable-rethrow.browser.js
var require_unstable_rethrow_browser = __commonJS({
  "node_modules/next/dist/client/components/unstable-rethrow.browser.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var _bailouttocsr = require_bailout_to_csr();
    var _isnextroutererror = require_is_next_router_error();
    function unstable_rethrow(error) {
      if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
        throw error;
      }
      if (error instanceof Error && "cause" in error) {
        unstable_rethrow(error.cause);
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/unstable-rethrow.js
var require_unstable_rethrow = __commonJS({
  "node_modules/next/dist/client/components/unstable-rethrow.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var unstable_rethrow = typeof window === "undefined" ? require_unstable_rethrow_server().unstable_rethrow : require_unstable_rethrow_browser().unstable_rethrow;
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/navigation.react-server.js
var require_navigation_react_server = __commonJS({
  "node_modules/next/dist/client/components/navigation.react-server.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return _redirecterror.RedirectType;
      },
      forbidden: function() {
        return _forbidden.forbidden;
      },
      notFound: function() {
        return _notfound.notFound;
      },
      permanentRedirect: function() {
        return _redirect.permanentRedirect;
      },
      redirect: function() {
        return _redirect.redirect;
      },
      unauthorized: function() {
        return _unauthorized.unauthorized;
      },
      unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
      },
      unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
      }
    });
    var _redirect = require_redirect();
    var _redirecterror = require_redirect_error();
    var _notfound = require_not_found();
    var _forbidden = require_forbidden();
    var _unauthorized = require_unauthorized();
    var _unstablerethrow = require_unstable_rethrow();
    var ReadonlyURLSearchParamsError = class extends Error {
      constructor() {
        super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
      }
    };
    var ReadonlyURLSearchParams = class extends URLSearchParams {
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      append() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      delete() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      set() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      sort() {
        throw new ReadonlyURLSearchParamsError();
      }
    };
    function unstable_isUnrecognizedActionError() {
      throw Object.defineProperty(new Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
      });
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require_interop_require_wildcard = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports2) {
    "use strict";
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = { __proto__: null };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
          else newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      if (cache) cache.set(obj, newObj);
      return newObj;
    }
    exports2._ = _interop_require_wildcard;
  }
});

// node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js
var require_server_inserted_html_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js"(exports2) {
    "use strict";
    "use client";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      ServerInsertedHTMLContext: function() {
        return ServerInsertedHTMLContext;
      },
      useServerInsertedHTML: function() {
        return useServerInsertedHTML;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _react = /* @__PURE__ */ _interop_require_wildcard._(require("react"));
    var ServerInsertedHTMLContext = /* @__PURE__ */ _react.default.createContext(null);
    function useServerInsertedHTML(callback) {
      const addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
      if (addInsertedServerHTMLCallback) {
        addInsertedServerHTMLCallback(callback);
      }
    }
  }
});

// node_modules/next/dist/client/components/unrecognized-action-error.js
var require_unrecognized_action_error = __commonJS({
  "node_modules/next/dist/client/components/unrecognized-action-error.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      UnrecognizedActionError: function() {
        return UnrecognizedActionError;
      },
      unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
      }
    });
    var UnrecognizedActionError = class extends Error {
      constructor(...args) {
        super(...args);
        this.name = "UnrecognizedActionError";
      }
    };
    function unstable_isUnrecognizedActionError(error) {
      return !!(error && typeof error === "object" && error instanceof UnrecognizedActionError);
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/bailout-to-client-rendering.js
var require_bailout_to_client_rendering = __commonJS({
  "node_modules/next/dist/client/components/bailout-to-client-rendering.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "bailoutToClientRendering", {
      enumerable: true,
      get: function() {
        return bailoutToClientRendering;
      }
    });
    var _bailouttocsr = require_bailout_to_csr();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    function bailoutToClientRendering(reason) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (workStore == null ? void 0 : workStore.forceStatic) return;
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender":
          case "prerender-runtime":
          case "prerender-client":
          case "prerender-ppr":
          case "prerender-legacy":
            throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
              value: "E394",
              enumerable: false,
              configurable: true
            });
          case "request":
          case "cache":
          case "private-cache":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/navigation.js
var require_navigation = __commonJS({
  "node_modules/next/dist/client/components/navigation.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return _navigationreactserver.RedirectType;
      },
      ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
      },
      forbidden: function() {
        return _navigationreactserver.forbidden;
      },
      notFound: function() {
        return _navigationreactserver.notFound;
      },
      permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
      },
      redirect: function() {
        return _navigationreactserver.redirect;
      },
      unauthorized: function() {
        return _navigationreactserver.unauthorized;
      },
      unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
      },
      unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
      },
      useParams: function() {
        return useParams;
      },
      usePathname: function() {
        return usePathname2;
      },
      useRouter: function() {
        return useRouter;
      },
      useSearchParams: function() {
        return useSearchParams;
      },
      useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
      },
      useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
      },
      useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
      }
    });
    var _react = require("react");
    var _approutercontextsharedruntime = require_app_router_context_shared_runtime();
    var _hooksclientcontextsharedruntime = require_hooks_client_context_shared_runtime();
    var _getsegmentvalue = require_get_segment_value();
    var _segment = require_segment();
    var _navigationreactserver = require_navigation_react_server();
    var _serverinsertedhtmlsharedruntime = require_server_inserted_html_shared_runtime();
    var _unrecognizedactionerror = require_unrecognized_action_error();
    var useDynamicRouteParams = typeof window === "undefined" ? require_dynamic_rendering().useDynamicRouteParams : void 0;
    function useSearchParams() {
      const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
      const readonlySearchParams = (0, _react.useMemo)(() => {
        if (!searchParams) {
          return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
      }, [
        searchParams
      ]);
      if (typeof window === "undefined") {
        const { bailoutToClientRendering } = require_bailout_to_client_rendering();
        bailoutToClientRendering("useSearchParams()");
      }
      return readonlySearchParams;
    }
    function usePathname2() {
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("usePathname()");
      return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    }
    function useRouter() {
      const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
      if (router === null) {
        throw Object.defineProperty(new Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
          value: "E238",
          enumerable: false,
          configurable: true
        });
      }
      return router;
    }
    function useParams() {
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useParams()");
      return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    }
    function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
      if (first === void 0) first = true;
      if (segmentPath === void 0) segmentPath = [];
      let node;
      if (first) {
        node = tree[1][parallelRouteKey];
      } else {
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
      }
      if (!node) return segmentPath;
      const segment = node[0];
      let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
      if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
      }
      segmentPath.push(segmentValue);
      return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
    }
    function useSelectedLayoutSegments(parallelRouteKey) {
      if (parallelRouteKey === void 0) parallelRouteKey = "children";
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useSelectedLayoutSegments()");
      const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
      if (!context) return null;
      return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
    }
    function useSelectedLayoutSegment(parallelRouteKey) {
      if (parallelRouteKey === void 0) parallelRouteKey = "children";
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useSelectedLayoutSegment()");
      const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
      if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
      }
      const selectedLayoutSegment = parallelRouteKey === "children" ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
      return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/navigation.js
var require_navigation2 = __commonJS({
  "node_modules/next/navigation.js"(exports2, module2) {
    "use strict";
    module2.exports = require_navigation();
  }
});

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  DevPageIndicator: () => DevPageIndicator_default,
  devIdentify: () => devIdentify,
  withDevIdentify: () => withDevIdentify
});
module.exports = __toCommonJS(index_exports);

// src/DevPageIndicator.tsx
var import_react = require("react");
var import_react_hot_toast = __toESM(require("react-hot-toast"));
var import_jsx_runtime = require("react/jsx-runtime");
var usePathname;
try {
  const nextNavigation = require_navigation2();
  usePathname = nextNavigation.usePathname;
} catch {
}
var DevPageIndicator = ({
  defaultVisible = true,
  position = "bottom-left",
  customComponentMap = {},
  enableFiberDetection = true,
  maxParentSearchDepth = 5,
  customRouteMap = {},
  showShortcutHints = true,
  zIndex = 50
}) => {
  const pathname = usePathname ? usePathname() : typeof window !== "undefined" ? window.location.pathname : "/";
  const [pageFile, setPageFile] = (0, import_react.useState)("");
  const [isVisible, setIsVisible] = (0, import_react.useState)(defaultVisible);
  const [justCopied, setJustCopied] = (0, import_react.useState)(false);
  const [selectorMode, setSelectorMode] = (0, import_react.useState)(false);
  const [hoveredComponent, setHoveredComponent] = (0, import_react.useState)(null);
  const [selectedComponent, setSelectedComponent] = (0, import_react.useState)(null);
  const overlayRef = (0, import_react.useRef)(null);
  const handleCopyPath = async (text) => {
    const textToCopy = text || pageFile;
    try {
      await navigator.clipboard.writeText(textToCopy);
      import_react_hot_toast.default.success(`Copied: ${textToCopy}`, {
        duration: 2e3,
        style: {
          background: "#10b981",
          color: "white",
          fontSize: "14px"
        }
      });
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2e3);
    } catch (err) {
      import_react_hot_toast.default.error("Failed to copy to clipboard");
    }
  };
  const handleCopyFullContext = async () => {
    let contextText = `\u{1F4CD} Page: ${pageFile}
`;
    contextText += `\u{1F517} Route: ${pathname}
`;
    if (selectedComponent) {
      contextText += `
\u{1F3AF} Component: ${selectedComponent.name}
`;
      if (selectedComponent.file) {
        contextText += `\u{1F4C1} File: ${selectedComponent.file}
`;
      }
      if (selectedComponent.parentComponent) {
        contextText += `\u{1F446} Parent: ${selectedComponent.parentComponent}
`;
      }
      if (selectedComponent.props && selectedComponent.props.length > 0) {
        contextText += `\u{1F3A8} Classes: ${selectedComponent.props.join(", ")}
`;
      }
    }
    const markdownContext = `
## Development Context

### Page Information
- **Page File:** \`${pageFile}\`
- **Route:** \`${pathname}\`
${selectedComponent ? `
### Selected Component
- **Component:** ${selectedComponent.name}
${selectedComponent.file ? `- **File:** \`${selectedComponent.file}\`` : ""}
${selectedComponent.parentComponent ? `- **Parent:** ${selectedComponent.parentComponent}` : ""}
${selectedComponent.props && selectedComponent.props.length > 0 ? `- **Classes:** \`${selectedComponent.props.join(", ")}\`` : ""}
` : ""}
---
*Copied from DevPageIndicator at ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}*
`;
    try {
      if (navigator.clipboard.write) {
        const blob = new Blob([markdownContext], { type: "text/plain" });
        const richBlob = new Blob([markdownContext], { type: "text/markdown" });
        const data = [
          new ClipboardItem({
            "text/plain": blob,
            "text/markdown": richBlob
          })
        ];
        await navigator.clipboard.write(data);
      } else {
        await navigator.clipboard.writeText(contextText);
      }
      import_react_hot_toast.default.success("Copied full context to clipboard!", {
        duration: 2500,
        style: {
          background: "#8b5cf6",
          color: "white",
          fontSize: "14px"
        },
        icon: "\u{1F4CB}"
      });
    } catch (err) {
      try {
        await navigator.clipboard.writeText(contextText);
        import_react_hot_toast.default.success("Copied context (plain text)", {
          duration: 2e3,
          style: {
            background: "#10b981",
            color: "white",
            fontSize: "14px"
          }
        });
      } catch (fallbackErr) {
        import_react_hot_toast.default.error("Failed to copy to clipboard");
      }
    }
  };
  const getReactFiber = (element) => {
    if (!enableFiberDetection) return null;
    const key = Object.keys(element).find(
      (key2) => key2.startsWith("__reactFiber") || key2.startsWith("__reactInternalInstance")
    );
    return key ? element[key] : null;
  };
  const getComponentNameFromFiber = (fiber) => {
    if (!fiber) return null;
    let currentFiber = fiber;
    while (currentFiber) {
      if (currentFiber.elementType && typeof currentFiber.elementType === "function") {
        const name = currentFiber.elementType.displayName || currentFiber.elementType.name;
        if (name && name !== "Anonymous" && !name.startsWith("_")) {
          return name;
        }
      }
      if (currentFiber.type && typeof currentFiber.type === "function") {
        const name = currentFiber.type.displayName || currentFiber.type.name;
        if (name && name !== "Anonymous" && !name.startsWith("_")) {
          return name;
        }
      }
      if (currentFiber.elementType?.$$typeof) {
        const symbolString = currentFiber.elementType.$$typeof.toString();
        if (symbolString.includes("memo") || symbolString.includes("forward_ref")) {
          const innerType = currentFiber.elementType.type || currentFiber.elementType.render;
          if (innerType) {
            const name = innerType.displayName || innerType.name;
            if (name && name !== "Anonymous") {
              return name;
            }
          }
        }
      }
      currentFiber = currentFiber.return;
    }
    return null;
  };
  const identifyByClasses = (classList) => {
    const classString = classList.join(" ").toLowerCase();
    for (const [className, componentInfo] of Object.entries(customComponentMap)) {
      if (classString.includes(className.toLowerCase())) {
        return componentInfo;
      }
    }
    if (classList.includes("space-y-3") || classList.includes("space-x-3")) {
      return null;
    }
    if (classString.includes("btn") || classString.includes("button")) {
      return { name: "Button" };
    }
    if (classString.includes("modal")) {
      return { name: "Modal" };
    }
    if (classString.includes("card")) {
      return { name: "Card" };
    }
    if (classString.includes("header")) {
      return { name: "Header" };
    }
    if (classString.includes("footer")) {
      return { name: "Footer" };
    }
    return null;
  };
  const findParentComponent = (element) => {
    let current = element.parentElement;
    let depth = 0;
    while (current && depth < maxParentSearchDepth) {
      const componentName = current.getAttribute("data-component-name");
      if (componentName) {
        return {
          name: componentName,
          file: current.getAttribute("data-component-file") || void 0
        };
      }
      const classList = Array.from(current.classList);
      const identified = identifyByClasses(classList);
      if (identified && identified.name !== "Unknown") {
        return identified;
      }
      current = current.parentElement;
      depth++;
    }
    return null;
  };
  const getComponentInfo = (0, import_react.useCallback)((element) => {
    const componentName = element.getAttribute("data-component-name");
    const componentFile = element.getAttribute("data-component-file");
    if (componentName) {
      return {
        name: componentName,
        file: componentFile || void 0,
        props: Array.from(element.attributes).filter((attr) => attr.name.startsWith("data-") && !attr.name.includes("component")).map((attr) => attr.name.replace("data-", ""))
      };
    }
    const fiber = getReactFiber(element);
    const fiberName = getComponentNameFromFiber(fiber);
    if (fiberName) {
      return {
        name: fiberName,
        props: Array.from(element.classList)
      };
    }
    const classList = Array.from(element.classList);
    const id = element.id;
    const tagName = element.tagName.toLowerCase();
    const identified = identifyByClasses(classList);
    if (identified) {
      return {
        ...identified,
        props: classList
      };
    }
    const parentComponent = findParentComponent(element);
    if (parentComponent) {
      return {
        name: `${tagName}${id ? `#${id}` : ""}`,
        props: classList,
        parentComponent: `${parentComponent.name}${parentComponent.file ? ` (${parentComponent.file})` : ""}`
      };
    }
    return {
      name: `<${tagName}${id ? `#${id}` : ""}${classList.length > 0 ? `.${classList[0]}` : ""}>`,
      props: classList
    };
  }, [customComponentMap, enableFiberDetection, maxParentSearchDepth]);
  const handleElementHover = (0, import_react.useCallback)((e) => {
    if (!selectorMode) return;
    const target = e.target;
    if (overlayRef.current?.contains(target)) return;
    const componentInfo = getComponentInfo(target);
    setHoveredComponent(componentInfo);
    target.style.outline = "2px solid #8b5cf6";
    target.style.outlineOffset = "2px";
    target.style.cursor = "pointer";
  }, [selectorMode, getComponentInfo]);
  const handleElementClick = (0, import_react.useCallback)((e) => {
    if (!selectorMode) return;
    const target = e.target;
    if (overlayRef.current?.contains(target)) return;
    e.preventDefault();
    e.stopPropagation();
    const componentInfo = getComponentInfo(target);
    setSelectedComponent(componentInfo);
    setSelectorMode(false);
  }, [selectorMode, getComponentInfo]);
  const handleElementLeave = (0, import_react.useCallback)((e) => {
    if (!selectorMode) return;
    const target = e.target;
    target.style.outline = "";
    target.style.cursor = "";
    setHoveredComponent(null);
  }, [selectorMode]);
  const handleKeyDown = (0, import_react.useCallback)((e) => {
    if (e.key === "Escape" && selectorMode) {
      setSelectorMode(false);
      setHoveredComponent(null);
    }
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === "c") {
      e.preventDefault();
      handleCopyFullContext();
    }
  }, [selectorMode, handleCopyFullContext]);
  (0, import_react.useEffect)(() => {
    if (selectorMode) {
      document.addEventListener("mouseover", handleElementHover);
      document.addEventListener("click", handleElementClick);
      document.addEventListener("mouseout", handleElementLeave);
      document.body.style.userSelect = "none";
      return () => {
        document.removeEventListener("mouseover", handleElementHover);
        document.removeEventListener("click", handleElementClick);
        document.removeEventListener("mouseout", handleElementLeave);
        document.body.style.userSelect = "";
        document.querySelectorAll('[style*="outline"]').forEach((el) => {
          el.style.outline = "";
          el.style.cursor = "";
        });
      };
    }
    return void 0;
  }, [selectorMode, handleElementHover, handleElementClick, handleElementLeave]);
  (0, import_react.useEffect)(() => {
    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
    return void 0;
  }, [isVisible, handleKeyDown]);
  (0, import_react.useEffect)(() => {
    const getPageFile = (path) => {
      const normalizedPath = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
      if (customRouteMap[normalizedPath]) {
        return customRouteMap[normalizedPath];
      }
      const defaultRouteMap = {
        "/": "app/page.tsx",
        "/dashboard": "app/dashboard/page.tsx",
        "/settings": "app/settings/page.tsx",
        "/signin": "app/signin/page.tsx",
        ...customRouteMap
      };
      if (defaultRouteMap[normalizedPath]) {
        return defaultRouteMap[normalizedPath];
      }
      if (normalizedPath.startsWith("/api/")) {
        return `app${normalizedPath}/route.ts`;
      }
      return normalizedPath === "" ? "app/page.tsx" : `app${normalizedPath}/page.tsx`;
    };
    setPageFile(getPageFile(pathname));
  }, [pathname, customRouteMap]);
  if (process.env.NODE_ENV !== "development") {
    return null;
  }
  const positionStyles = {
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4"
  };
  if (!isVisible) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_hot_toast.Toaster, { position: "top-center" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          onClick: () => setIsVisible(true),
          className: `fixed ${positionStyles[position]}`,
          style: {
            zIndex,
            backgroundColor: "#8b5cf6",
            color: "white",
            fontSize: "12px",
            padding: "4px 8px",
            borderRadius: "4px",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            transition: "all 0.2s",
            opacity: 0.5
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.backgroundColor = "#7c3aed";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.opacity = "0.5";
            e.currentTarget.style.backgroundColor = "#8b5cf6";
          },
          title: "Show page indicator",
          children: "\u{1F441}\uFE0F"
        }
      )
    ] });
  }
  (0, import_react.useEffect)(() => {
    const styleId = "dev-page-indicator-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes dev-page-indicator-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `;
      document.head.appendChild(style);
    }
    return () => {
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_hot_toast.Toaster, { position: "top-center" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref: overlayRef,
        className: `fixed ${positionStyles[position]}`,
        style: {
          zIndex,
          backgroundColor: "rgba(17, 24, 39, 0.95)",
          backdropFilter: "blur(4px)",
          color: "white",
          padding: "8px 12px",
          borderRadius: "8px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(139, 92, 246, 0.3)",
          maxWidth: "24rem"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { color: "#a78bfa", fontSize: "12px", fontWeight: "600" }, children: "DEV" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { color: "#9ca3af", fontSize: "12px" }, children: "|" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  onClick: () => {
                    setSelectorMode(!selectorMode);
                    setSelectedComponent(null);
                  },
                  style: {
                    padding: "4px 8px",
                    fontSize: "12px",
                    borderRadius: "4px",
                    transition: "all 0.2s",
                    backgroundColor: selectorMode ? "#8b5cf6" : "#374151",
                    color: selectorMode ? "white" : "#d1d5db",
                    animation: selectorMode ? "dev-page-indicator-pulse 2s infinite" : "none",
                    border: "none",
                    cursor: "pointer"
                  },
                  onMouseEnter: (e) => {
                    if (!selectorMode) {
                      e.currentTarget.style.backgroundColor = "#4b5563";
                    }
                  },
                  onMouseLeave: (e) => {
                    if (!selectorMode) {
                      e.currentTarget.style.backgroundColor = "#374151";
                    }
                  },
                  title: selectorMode ? "Exit selector mode" : "Enable component selector",
                  children: selectorMode ? "\u{1F3AF} Selecting..." : "\u{1F3AF} Select"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  onClick: handleCopyFullContext,
                  style: {
                    padding: "4px 8px",
                    fontSize: "12px",
                    borderRadius: "4px",
                    backgroundColor: "#047857",
                    color: "white",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    border: "none",
                    cursor: "pointer"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.backgroundColor = "#059669";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.backgroundColor = "#047857";
                  },
                  title: "Copy full context (page + component)",
                  children: "\u{1F4CB} Copy All"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => setIsVisible(false),
                style: {
                  color: "#9ca3af",
                  fontSize: "12px",
                  transition: "color 0.2s",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "2px"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.color = "white";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.color = "#9ca3af";
                },
                title: "Hide indicator",
                children: "\u2715"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { marginTop: "8px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { fontSize: "12px", color: "#d1d5db", display: "flex", alignItems: "center", gap: "4px" }, children: [
              "Page:",
              justCopied && !selectedComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { color: "#34d399", fontSize: "12px", animation: "dev-page-indicator-pulse 2s infinite" }, children: "\u2713 Copied!" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "div",
              {
                style: {
                  fontSize: "14px",
                  fontFamily: "monospace",
                  color: "#34d399",
                  wordBreak: "break-all",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  userSelect: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.color = "#86efac";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.color = "#34d399";
                },
                onClick: () => handleCopyPath(pageFile),
                title: "Click to copy path",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { color: "#6b7280", transition: "color 0.2s" }, children: "\u{1F4CB}" }),
                  pageFile
                ]
              }
            )
          ] }),
          selectedComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-2 pt-2 border-t border-gray-700", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-xs text-gray-300 flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Selected Component:" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  onClick: () => setSelectedComponent(null),
                  className: "text-gray-500 hover:text-gray-300 text-xs",
                  title: "Clear selection",
                  children: "\u2715"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm font-bold text-blue-400 mt-1", children: selectedComponent.name }),
            selectedComponent.parentComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-xs text-purple-400 mt-1", children: [
              "Parent: ",
              selectedComponent.parentComponent
            ] }),
            selectedComponent.file && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "div",
              {
                className: "text-xs font-mono text-yellow-400 break-all cursor-pointer hover:text-yellow-300 transition-colors duration-200 select-none group flex items-center gap-1 mt-1",
                onClick: () => handleCopyPath(selectedComponent.file),
                title: "Click to copy component path",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-gray-500 group-hover:text-gray-400 transition-colors", children: "\u{1F4CB}" }),
                  selectedComponent.file
                ]
              }
            ),
            !selectedComponent.file && selectedComponent.parentComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-gray-400 mt-1 italic", children: "This element is part of the parent component" }),
            selectedComponent.props && selectedComponent.props.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs text-gray-400", children: "Classes:" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-xs text-gray-300 font-mono mt-1 max-h-20 overflow-y-auto", children: [
                selectedComponent.props.slice(0, 3).join(", "),
                selectedComponent.props.length > 3 && ` +${selectedComponent.props.length - 3} more`
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "8px", paddingTop: "8px", borderTop: "1px solid #374151" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { fontSize: "12px", color: "#9ca3af", fontFamily: "monospace" }, children: [
            "Route: ",
            pathname
          ] }) }),
          showShortcutHints && (selectorMode || selectedComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-2 pt-2 border-t border-gray-700", children: [
            selectorMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-yellow-400 animate-pulse", children: "\u26A1 Click any element to inspect" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-gray-400 mt-1", children: "Press ESC to cancel" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-xs text-gray-500 mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-gray-600", children: "Shortcut:" }),
              " ",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { className: "px-1 py-0.5 text-xs bg-gray-800 rounded", children: "\u2318/Ctrl" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-0.5", children: "+" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { className: "px-1 py-0.5 text-xs bg-gray-800 rounded", children: "Shift" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-0.5", children: "+" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { className: "px-1 py-0.5 text-xs bg-gray-800 rounded", children: "C" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 text-gray-600", children: "to copy all" })
            ] })
          ] })
        ]
      }
    ),
    selectorMode && hoveredComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "fixed pointer-events-none",
        style: {
          left: "50%",
          top: "20px",
          transform: "translateX(-50%)",
          zIndex: zIndex + 1e4
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "bg-purple-900/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-lg border border-purple-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm font-bold", children: hoveredComponent.name }),
          hoveredComponent.parentComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-xs text-purple-200 mt-1", children: [
            "Parent: ",
            hoveredComponent.parentComponent
          ] }),
          hoveredComponent.file && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-purple-300 mt-1", children: hoveredComponent.file }),
          !hoveredComponent.file && !hoveredComponent.parentComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-purple-200 mt-1 italic", children: "DOM Element" })
        ] })
      }
    )
  ] });
};
var DevPageIndicator_default = DevPageIndicator;

// src/dev-utils.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function devIdentify(componentName, componentFile, additionalProps) {
  if (process.env.NODE_ENV !== "development") {
    return {};
  }
  const props = {
    "data-component-name": componentName
  };
  if (componentFile) {
    props["data-component-file"] = componentFile;
  }
  if (additionalProps) {
    Object.entries(additionalProps).forEach(([key, value]) => {
      if (!key.startsWith("data-")) {
        props[`data-${key}`] = value;
      } else {
        props[key] = value;
      }
    });
  }
  return props;
}
function withDevIdentify(Component, componentName, componentFile) {
  if (process.env.NODE_ENV !== "development") {
    return Component;
  }
  const WrappedComponent = (props) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ...devIdentify(componentName, componentFile), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Component, { ...props }) });
  };
  WrappedComponent.displayName = `DevIdentified(${componentName})`;
  return WrappedComponent;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DevPageIndicator,
  devIdentify,
  withDevIdentify
});
