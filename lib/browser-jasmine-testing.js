(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash")) : factory(root["lodash"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_32__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {//bindPolyfill();

__webpack_require__(92);
//require('babel-polyfill');
var scripts = [__webpack_require__(90), __webpack_require__(89), __webpack_require__(88), __webpack_require__(87)].join(';');

eval.call(global, scripts);
__webpack_require__(86);
__webpack_require__(85);

sourceMapSupport.install();

// Needed for phantomJS which does not include Function.prototype.bind()
function bindPolyfill() {
    if (!Function.prototype.bind) {
        Function.prototype.bind = function (oThis) {
            if (typeof this !== 'function') {
                // closest thing possible to the ECMAScript 5
                // internal IsCallable function
                throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
            }

            var aArgs = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP = function () {},
                fBound = function () {
                return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
            };

            if (this.prototype) {
                // native functions don't have a prototype
                fNOP.prototype = this.prototype;
            }
            fBound.prototype = new fNOP();

            return fBound;
        };
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(102)(undefined);
// imports


// module
exports.push([module.i, "body { overflow-y: scroll; }\n\n.jasmine_html-reporter { background-color: #eee; padding: 5px; margin: -8px; font-size: 11px; font-family: Monaco, \"Lucida Console\", monospace; line-height: 14px; color: #333; }\n.jasmine_html-reporter a { text-decoration: none; }\n.jasmine_html-reporter a:hover { text-decoration: underline; }\n.jasmine_html-reporter p, .jasmine_html-reporter h1, .jasmine_html-reporter h2, .jasmine_html-reporter h3, .jasmine_html-reporter h4, .jasmine_html-reporter h5, .jasmine_html-reporter h6 { margin: 0; line-height: 14px; }\n.jasmine_html-reporter .jasmine-banner, .jasmine_html-reporter .jasmine-symbol-summary, .jasmine_html-reporter .jasmine-summary, .jasmine_html-reporter .jasmine-result-message, .jasmine_html-reporter .jasmine-spec .jasmine-description, .jasmine_html-reporter .jasmine-spec-detail .jasmine-description, .jasmine_html-reporter .jasmine-alert .jasmine-bar, .jasmine_html-reporter .jasmine-stack-trace { padding-left: 9px; padding-right: 9px; }\n.jasmine_html-reporter .jasmine-banner { position: relative; }\n.jasmine_html-reporter .jasmine-banner .jasmine-title { background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAZCAMAAACGusnyAAACdlBMVEX/////AP+AgICqVaqAQICZM5mAVYCSSZKAQICOOY6ATYCLRouAQICJO4mSSYCIRIiPQICHPIeOR4CGQ4aMQICGPYaLRoCFQ4WKQICPPYWJRYCOQoSJQICNPoSIRICMQoSHQICHRICKQoOHQICKPoOJO4OJQYOMQICMQ4CIQYKLQICIPoKLQ4CKQICNPoKJQISMQ4KJQoSLQYKJQISLQ4KIQoSKQYKIQICIQISMQoSKQYKLQIOLQoOJQYGLQIOKQIOMQoGKQYOLQYGKQIOLQoGJQYOJQIOKQYGJQIOKQoGKQIGLQIKLQ4KKQoGLQYKJQIGKQYKJQIGKQIKJQoGKQYKLQIGKQYKLQIOJQoKKQoOJQYKKQIOJQoKKQoOKQIOLQoKKQYOLQYKJQIOKQoKKQYKKQoKJQYOKQYKLQIOKQoKLQYOKQYKLQIOJQoGKQYKJQYGJQoGKQYKLQoGLQYGKQoGJQYKKQYGJQIKKQoGJQYKLQIKKQYGLQYKKQYGKQYGKQYKJQYOKQoKJQYOKQYKLQYOLQYOKQYKLQYOKQoKKQYKKQYOKQYOJQYKKQYKLQYKKQIKKQoKKQYKKQYKKQoKJQIKKQYKLQYKKQYKKQIKKQYKKQYKKQYKKQIKKQYKJQYGLQYGKQYKKQYKKQYGKQIKKQYGKQYOJQoKKQYOLQYKKQYOKQoKKQYKKQoKKQYKKQYKJQYKLQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKJQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKLQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKmIDpEAAAA0XRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAiIyQlJycoKissLS4wMTQ1Njc4OTo7PDw+P0BCQ0RISUpLTE1OUFNUVVdYWFlaW15fYGFiY2ZnaGlqa2xtb3BxcnN0dnh5ent8fX5/gIGChIWIioyNjo+QkZOUlZaYmZqbnJ2eoKGio6WmqKmsra6vsLGztre4ubq7vL2+wMHDxMjJysvNzs/Q0dLU1tfY2dvc3t/g4eLj5ebn6Onq6+zt7u/w8vP09fb3+Pn6+/z9/vkVQXAAAAMaSURBVHhe5dXxV1N1GMfxz2ABbDgIAm5VDJOyVDIJLUMaVpBWUZUaGbmqoGpZRSiGiRWp6KoZ5AB0ZY50RImZQIlahKkMYXv/R90dBvET/rJfOr3Ouc8v99zPec59zvf56j+vYKlViSf7250X4Mr3O29Tgq08BdGB4DhcekEJ5YkQKFsgWZdtj9JpV+I8xPjLFqkrsEIqO8PHSpis36jWazcqjEsfJjkvRssVU37SdIOu4XCf5vEJPsnwJpnRNU9JmxhMk8l1gehIrq7hTFjzOD+Vf88629qKMJVNltInFeRexRQyJlNeqd1iGDlSzrIUIyXbyFfm3RYprcQRe7lqtWyGYbfc6dT0R2vmdOOkX3u55C1rP37ftiH+tDby4r/RBT0w8TyEkr+epB9XgPDmSYYWbrhCuFYaIyw3fDQAXTnSkh+ANofiHmWf9l+FY1I90FdQTetstO00o23novzVsJ7uB3/C5TkbjRwZ5JerwV4iRWq9HFbFMaK/d0TYqayRiQPuIxxS3Bu8JWU90/60tKi7vkhaznez0a/TbVOKj5CaOZh6fWG6/Lyv9B/ZLR1gw/S/fpbeVD3MCW1li6SvWDOn65tr99/uvWtBS0XDm4s1t+sOHpG0kpBKx/l77wOSnxLpcx6TXmXLTPQOKYOf9Q1dfr8/SJ2mFdCvl1Yl93DiHUZvXeLJbGSzYu5gVJ2slbSakOR8dxCq5adQ2oFLqsE9Ex3L4qQO0eOPeU5x56bypXp4onSEb5OkICX6lDat55TeoztNKQcJaakrz9KCb95oD69IKq+yKW4XPjknaS52V0TZqE2cTtXjcHSCRmUO88e+85hj3EP74i9p8pylw7lxgMDyyl6OV7ZejnjNMfatu87LxRbH0IS35gt2a4ZjmGpVBdKK3Wr6INk8jWWSGqbA55CKgjBRC6E9w78ydTg3ABS3AFV1QN0Y4Aa2pgEjWnQURj9L0ayK6R2ysEqxHUKzYnLvvyU+i9KM2JHJzE4vyZOyDcOwOsySajeLPc8sNvPJkFlyJd20wpqAzZeAfZ3oWybxd+P/3j+SG3uSBdf2VQAAAABJRU5ErkJggg==') no-repeat; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iNjgxLjk2MjUyIgogICBoZWlnaHQ9IjE4Ny41IgogICBpZD0ic3ZnMiIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhOCI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgICBpZD0iZGVmczYiPjxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoMTgiPjxwYXRoCiAgICAgICAgIGQ9Ik0gMCwxNTAwIDAsMCBsIDU0NTUuNzQsMCAwLDE1MDAgTCAwLDE1MDAgeiIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InBhdGgyMCIgLz48L2NsaXBQYXRoPjwvZGVmcz48ZwogICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLC0xLjI1LDAsMTg3LjUpIgogICAgIGlkPSJnMTAiPjxnCiAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuMSwwLjEpIgogICAgICAgaWQ9ImcxMiI+PGcKICAgICAgICAgaWQ9ImcxNCI+PGcKICAgICAgICAgICBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgxOCkiCiAgICAgICAgICAgaWQ9ImcxNiI+PHBhdGgKICAgICAgICAgICAgIGQ9Im0gMTU0NCw1OTkuNDM0IGMgMC45MiwtNDAuMzUyIDI1LjY4LC04MS42MDIgNzEuNTMsLTgxLjYwMiAyNy41MSwwIDQ3LjY4LDEyLjgzMiA2MS40NCwzNS43NTQgMTIuODMsMjIuOTMgMTIuODMsNTYuODUyIDEyLjgzLDgyLjUyNyBsIDAsMzI5LjE4NCAtNzEuNTIsMCAwLDEwNC41NDMgMjY2LjgzLDAgMCwtMTA0LjU0MyAtNzAuNiwwIDAsLTM0NC43NyBjIDAsLTU4LjY5MSAtMy42OCwtMTA0LjUzMSAtNDQuOTMsLTE1Mi4yMTggLTM2LjY4LC00Mi4xOCAtOTYuMjgsLTY2LjAyIC0xNTMuMTQsLTY2LjAyIC0xMTcuMzcsMCAtMjA3LjI0LDc3Ljk0MSAtMjAyLjY0LDE5Ny4xNDUgbCAxMzAuMiwwIgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoMjIiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDIzMDEuNCw2NjIuNjk1IGMgMCw4MC43MDMgLTY2Ljk0LDE0NS44MTMgLTE0Ny42MywxNDUuODEzIC04My40NCwwIC0xNDcuNjMsLTY4Ljc4MSAtMTQ3LjYzLC0xNTEuMzAxIDAsLTc5Ljc4NSA2Ni45NCwtMTQ1LjgwMSAxNDUuOCwtMTQ1LjgwMSA4NC4zNSwwIDE0OS40Niw2Ny44NTIgMTQ5LjQ2LDE1MS4yODkgeiBtIC0xLjgzLC0xODEuNTQ3IGMgLTM1Ljc3LC01NC4wOTcgLTkzLjUzLC03OC44NTkgLTE1Ny43MiwtNzguODU5IC0xNDAuMywwIC0yNTEuMjQsMTE2LjQ0OSAtMjUxLjI0LDI1NC45MTggMCwxNDIuMTI5IDExMy43LDI2MC40MSAyNTYuNzQsMjYwLjQxIDYzLjI3LDAgMTE4LjI5LC0yOS4zMzYgMTUyLjIyLC04Mi41MjMgbCAwLDY5LjY4NyAxNzUuMTQsMCAwLC0xMDQuNTI3IC02MS40NCwwIDAsLTI4MC41OTggNjEuNDQsMCAwLC0xMDQuNTI3IC0xNzUuMTQsMCAwLDY2LjAxOSIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDI0IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSAyNjIyLjMzLDU1Ny4yNTggYyAzLjY3LC00NC4wMTYgMzMuMDEsLTczLjM0OCA3OC44NiwtNzMuMzQ4IDMzLjkzLDAgNjYuOTMsMjMuODI0IDY2LjkzLDYwLjUwNCAwLDQ4LjYwNiAtNDUuODQsNTYuODU2IC04My40NCw2Ni45NDEgLTg1LjI4LDIyLjAwNCAtMTc4LjgxLDQ4LjYwNiAtMTc4LjgxLDE1NS44NzkgMCw5My41MzYgNzguODYsMTQ3LjYzMyAxNjUuOTgsMTQ3LjYzMyA0NCwwIDgzLjQzLC05LjE3NiAxMTAuOTQsLTQ0LjAwOCBsIDAsMzMuOTIyIDgyLjUzLDAgMCwtMTMyLjk2NSAtMTA4LjIxLDAgYyAtMS44MywzNC44NTYgLTI4LjQyLDU3Ljc3NCAtNjMuMjYsNTcuNzc0IC0zMC4yNiwwIC02Mi4zNSwtMTcuNDIyIC02Mi4zNSwtNTEuMzQ4IDAsLTQ1Ljg0NyA0NC45MywtNTUuOTMgODAuNjksLTY0LjE4IDg4LjAyLC0yMC4xNzUgMTgyLjQ3LC00Ny42OTUgMTgyLjQ3LC0xNTcuNzM0IDAsLTk5LjAyNyAtODMuNDQsLTE1NC4wMzkgLTE3NS4xMywtMTU0LjAzOSAtNDkuNTMsMCAtOTQuNDYsMTUuNTgyIC0xMjYuNTUsNTMuMTggbCAwLC00MC4zNCAtODUuMjcsMCAwLDE0Mi4xMjkgMTE0LjYyLDAiCiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgICAgaWQ9InBhdGgyNiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiM4YTQxODI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIC8+PHBhdGgKICAgICAgICAgICAgIGQ9Im0gMjk4OC4xOCw4MDAuMjU0IC02My4yNiwwIDAsMTA0LjUyNyAxNjUuMDUsMCAwLC03My4zNTUgYyAzMS4xOCw1MS4zNDcgNzguODYsODUuMjc3IDE0MS4yMSw4NS4yNzcgNjcuODUsMCAxMjQuNzEsLTQxLjI1OCAxNTIuMjEsLTEwMi42OTkgMjYuNiw2Mi4zNTEgOTIuNjIsMTAyLjY5OSAxNjAuNDcsMTAyLjY5OSA1My4xOSwwIDEwNS40NiwtMjIgMTQxLjIxLC02Mi4zNTEgMzguNTIsLTQ0LjkzOCAzOC41MiwtOTMuNTMyIDM4LjUyLC0xNDkuNDU3IGwgMCwtMTg1LjIzOSA2My4yNywwIDAsLTEwNC41MjcgLTIzOC40MiwwIDAsMTA0LjUyNyA2My4yOCwwIDAsMTU3LjcxNSBjIDAsMzIuMTAyIDAsNjAuNTI3IC0xNC42Nyw4OC45NTcgLTE4LjM0LDI2LjU4MiAtNDguNjEsNDAuMzQ0IC03OS43Nyw0MC4zNDQgLTMwLjI2LDAgLTYzLjI4LC0xMi44NDQgLTgyLjUzLC0zNi42NzIgLTIyLjkzLC0yOS4zNTUgLTIyLjkzLC01Ni44NjMgLTIyLjkzLC05Mi42MjkgbCAwLC0xNTcuNzE1IDYzLjI3LDAgMCwtMTA0LjUyNyAtMjM4LjQxLDAgMCwxMDQuNTI3IDYzLjI4LDAgMCwxNTAuMzgzIGMgMCwyOS4zNDggMCw2Ni4wMjMgLTE0LjY3LDkxLjY5OSAtMTUuNTksMjkuMzM2IC00Ny42OSw0NC45MzQgLTgwLjcsNDQuOTM0IC0zMS4xOCwwIC01Ny43NywtMTEuMDA4IC03Ny45NCwtMzUuNzc0IC0yNC43NywtMzAuMjUzIC0yNi42LC02Mi4zNDMgLTI2LjYsLTk5Ljk0MSBsIDAsLTE1MS4zMDEgNjMuMjcsMCAwLC0xMDQuNTI3IC0yMzguNCwwIDAsMTA0LjUyNyA2My4yNiwwIDAsMjgwLjU5OCIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDI4IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSAzOTk4LjY2LDk1MS41NDcgLTExMS44NywwIDAsMTE4LjI5MyAxMTEuODcsMCAwLC0xMTguMjkzIHogbSAwLC00MzEuODkxIDYzLjI3LDAgMCwtMTA0LjUyNyAtMjM5LjMzLDAgMCwxMDQuNTI3IDY0LjE5LDAgMCwyODAuNTk4IC02My4yNywwIDAsMTA0LjUyNyAxNzUuMTQsMCAwLC0zODUuMTI1IgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoMzAiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDQxNTkuMTIsODAwLjI1NCAtNjMuMjcsMCAwLDEwNC41MjcgMTc1LjE0LDAgMCwtNjkuNjg3IGMgMjkuMzUsNTQuMTAxIDg0LjM2LDgwLjY5OSAxNDQuODcsODAuNjk5IDUzLjE5LDAgMTA1LjQ1LC0yMi4wMTYgMTQxLjIyLC02MC41MjcgNDAuMzQsLTQ0LjkzNCA0MS4yNiwtODguMDMyIDQxLjI2LC0xNDMuOTU3IGwgMCwtMTkxLjY1MyA2My4yNywwIDAsLTEwNC41MjcgLTIzOC40LDAgMCwxMDQuNTI3IDYzLjI2LDAgMCwxNTguNjM3IGMgMCwzMC4yNjIgMCw2MS40MzQgLTE5LjI2LDg4LjAzNSAtMjAuMTcsMjYuNTgyIC01My4xOCwzOS40MTQgLTg2LjE5LDM5LjQxNCAtMzMuOTMsMCAtNjguNzcsLTEzLjc1IC04OC45NCwtNDEuMjUgLTIxLjA5LC0yNy41IC0yMS4wOSwtNjkuNjg3IC0yMS4wOSwtMTAyLjcwNyBsIDAsLTE0Mi4xMjkgNjMuMjYsMCAwLC0xMDQuNTI3IC0yMzguNCwwIDAsMTA0LjUyNyA2My4yNywwIDAsMjgwLjU5OCIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDMyIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSA1MDgyLjQ4LDcwMy45NjUgYyAtMTkuMjQsNzAuNjA1IC04MS42LDExNS41NDcgLTE1NC4wNCwxMTUuNTQ3IC02Ni4wNCwwIC0xMjkuMywtNTEuMzQ4IC0xNDMuMDUsLTExNS41NDcgbCAyOTcuMDksMCB6IG0gODUuMjcsLTE0NC44ODMgYyAtMzguNTEsLTkzLjUyMyAtMTI5LjI3LC0xNTYuNzkzIC0yMzEuMDUsLTE1Ni43OTMgLTE0My4wNywwIC0yNTcuNjgsMTExLjg3MSAtMjU3LjY4LDI1NS44MzYgMCwxNDQuODgzIDEwOS4xMiwyNjEuMzI4IDI1NC45MSwyNjEuMzI4IDY3Ljg3LDAgMTM1LjcyLC0zMC4yNTggMTgzLjM5LC03OC44NjMgNDguNjIsLTUxLjM0NCA2OC43OSwtMTEzLjY5NSA2OC43OSwtMTgzLjM4MyBsIC0zLjY3LC0zOS40MzQgLTM5Ni4xMywwIGMgMTQuNjcsLTY3Ljg2MyA3Ny4wMywtMTE3LjM2MyAxNDYuNzIsLTExNy4zNjMgNDguNTksMCA5MC43NiwxOC4zMjggMTE4LjI4LDU4LjY3MiBsIDExNi40NCwwIgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoMzQiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDY5MC44OTUsODUwLjcwMyA5MC43NSwwIDIyLjU0MywzMS4wMzUgMCwyNDMuMTIyIC0xMzUuODI5LDAgMCwtMjQzLjE0MSAyMi41MzYsLTMxLjAxNiIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDM2IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSA2MzIuMzk1LDc0Mi4yNTggMjguMDM5LDg2LjMwNCAtMjIuNTUxLDMxLjA0IC0yMzEuMjIzLDc1LjEyOCAtNDEuOTc2LC0xMjkuMTgzIDIzMS4yNTcsLTc1LjEzNyAzNi40NTQsMTEuODQ4IgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoMzgiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDcxNy40NDksNjUzLjEwNSAtNzMuNDEsNTMuMzYgLTM2LjQ4OCwtMTEuODc1IC0xNDIuOTAzLC0xOTYuNjkyIDEwOS44ODMsLTc5LjgyOCAxNDIuOTE4LDE5Ni43MDMgMCwzOC4zMzIiCiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgICAgaWQ9InBhdGg0MCIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiM4YTQxODI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIC8+PHBhdGgKICAgICAgICAgICAgIGQ9Im0gODI4LjUyLDcwNi40NjUgLTczLjQyNiwtNTMuMzQgMC4wMTEsLTM4LjM1OSBMIDg5OC4wMDQsNDE4LjA3IDEwMDcuOSw0OTcuODk4IDg2NC45NzMsNjk0LjYwOSA4MjguNTIsNzA2LjQ2NSIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDQyIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSA4MTIuMDg2LDgyOC41ODYgMjguMDU1LC04Ni4zMiAzNi40ODQsLTExLjgzNiAyMzEuMjI1LDc1LjExNyAtNDEuOTcsMTI5LjE4MyAtMjMxLjIzOSwtNzUuMTQgLTIyLjU1NSwtMzEuMDA0IgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoNDQiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDczNi4zMDEsMTMzNS44OCBjIC0zMjMuMDQ3LDAgLTU4NS44NzUsLTI2Mi43OCAtNTg1Ljg3NSwtNTg1Ljc4MiAwLC0zMjMuMTE4IDI2Mi44MjgsLTU4NS45NzcgNTg1Ljg3NSwtNTg1Ljk3NyAzMjMuMDE5LDAgNTg1LjgwOSwyNjIuODU5IDU4NS44MDksNTg1Ljk3NyAwLDMyMy4wMDIgLTI2Mi43OSw1ODUuNzgyIC01ODUuODA5LDU4NS43ODIgbCAwLDAgeiBtIDAsLTExOC42MSBjIDI1Ny45NzIsMCA0NjcuMTg5LC0yMDkuMTMgNDY3LjE4OSwtNDY3LjE3MiAwLC0yNTguMTI5IC0yMDkuMjE3LC00NjcuMzQ4IC00NjcuMTg5LC00NjcuMzQ4IC0yNTguMDc0LDAgLTQ2Ny4yNTQsMjA5LjIxOSAtNDY3LjI1NCw0NjcuMzQ4IDAsMjU4LjA0MiAyMDkuMTgsNDY3LjE3MiA0NjcuMjU0LDQ2Ny4xNzIiCiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgICAgaWQ9InBhdGg0NiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiM4YTQxODI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIC8+PHBhdGgKICAgICAgICAgICAgIGQ9Im0gMTA5MS4xMyw2MTkuODgzIC0xNzUuNzcxLDU3LjEyMSAxMS42MjksMzUuODA4IDE3NS43NjIsLTU3LjEyMSAtMTEuNjIsLTM1LjgwOCIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDQ4IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0iTSA4NjYuOTU3LDkwMi4wNzQgODM2LjUsOTI0LjE5OSA5NDUuMTIxLDEwNzMuNzMgOTc1LjU4NiwxMDUxLjYxIDg2Ni45NTcsOTAyLjA3NCIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDUwIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0iTSA2MDcuNDY1LDkwMy40NDUgNDk4Ljg1NSwxMDUyLjk3IDUyOS4zMiwxMDc1LjEgNjM3LjkzLDkyNS41NjYgNjA3LjQ2NSw5MDMuNDQ1IgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoNTIiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDM4MC42ODgsNjIyLjEyOSAtMTEuNjI2LDM1LjgwMSAxNzUuNzU4LDU3LjA5IDExLjYyMSwtMzUuODAxIC0xNzUuNzUzLC01Ny4wOSIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDU0IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSA3MTYuMjg5LDM3Ni41OSAzNy42NDA2LDAgMCwxODQuODE2IC0zNy42NDA2LDAgMCwtMTg0LjgxNiB6IgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoNTYiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=') no-repeat, none; -moz-background-size: 100%; -o-background-size: 100%; -webkit-background-size: 100%; background-size: 100%; display: block; float: left; width: 90px; height: 25px; }\n.jasmine_html-reporter .jasmine-banner .jasmine-version { margin-left: 14px; position: relative; top: 6px; }\n.jasmine_html-reporter #jasmine_content { position: fixed; right: 100%; }\n.jasmine_html-reporter .jasmine-version { color: #aaa; }\n.jasmine_html-reporter .jasmine-banner { margin-top: 14px; }\n.jasmine_html-reporter .jasmine-duration { color: #fff; float: right; line-height: 28px; padding-right: 9px; }\n.jasmine_html-reporter .jasmine-symbol-summary { overflow: hidden; *zoom: 1; margin: 14px 0; }\n.jasmine_html-reporter .jasmine-symbol-summary li { display: inline-block; height: 10px; width: 14px; font-size: 16px; }\n.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-passed { font-size: 14px; }\n.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-passed:before { color: #007069; content: \"\\2022\"; }\n.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-failed { line-height: 9px; }\n.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-failed:before { color: #ca3a11; content: \"\\D7\"; font-weight: bold; margin-left: -1px; }\n.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-disabled { font-size: 14px; }\n.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-disabled:before { color: #bababa; content: \"\\2022\"; }\n.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-pending { line-height: 17px; }\n.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-pending:before { color: #ba9d37; content: \"*\"; }\n.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-empty { font-size: 14px; }\n.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-empty:before { color: #ba9d37; content: \"\\2022\"; }\n.jasmine_html-reporter .jasmine-run-options { float: right; margin-right: 5px; border: 1px solid #8a4182; color: #8a4182; position: relative; line-height: 20px; }\n.jasmine_html-reporter .jasmine-run-options .jasmine-trigger { cursor: pointer; padding: 8px 16px; }\n.jasmine_html-reporter .jasmine-run-options .jasmine-payload { position: absolute; display: none; right: -1px; border: 1px solid #8a4182; background-color: #eee; white-space: nowrap; padding: 4px 8px; }\n.jasmine_html-reporter .jasmine-run-options .jasmine-payload.jasmine-open { display: block; }\n.jasmine_html-reporter .jasmine-bar { line-height: 28px; font-size: 14px; display: block; color: #eee; }\n.jasmine_html-reporter .jasmine-bar.jasmine-failed { background-color: #ca3a11; }\n.jasmine_html-reporter .jasmine-bar.jasmine-passed { background-color: #007069; }\n.jasmine_html-reporter .jasmine-bar.jasmine-skipped { background-color: #bababa; }\n.jasmine_html-reporter .jasmine-bar.jasmine-errored { background-color: #ca3a11; }\n.jasmine_html-reporter .jasmine-bar.jasmine-menu { background-color: #fff; color: #aaa; }\n.jasmine_html-reporter .jasmine-bar.jasmine-menu a { color: #333; }\n.jasmine_html-reporter .jasmine-bar a { color: white; }\n.jasmine_html-reporter.jasmine-spec-list .jasmine-bar.jasmine-menu.jasmine-failure-list, .jasmine_html-reporter.jasmine-spec-list .jasmine-results .jasmine-failures { display: none; }\n.jasmine_html-reporter.jasmine-failure-list .jasmine-bar.jasmine-menu.jasmine-spec-list, .jasmine_html-reporter.jasmine-failure-list .jasmine-summary { display: none; }\n.jasmine_html-reporter .jasmine-results { margin-top: 14px; }\n.jasmine_html-reporter .jasmine-summary { margin-top: 14px; }\n.jasmine_html-reporter .jasmine-summary ul { list-style-type: none; margin-left: 14px; padding-top: 0; padding-left: 0; }\n.jasmine_html-reporter .jasmine-summary ul.jasmine-suite { margin-top: 7px; margin-bottom: 7px; }\n.jasmine_html-reporter .jasmine-summary li.jasmine-passed a { color: #007069; }\n.jasmine_html-reporter .jasmine-summary li.jasmine-failed a { color: #ca3a11; }\n.jasmine_html-reporter .jasmine-summary li.jasmine-empty a { color: #ba9d37; }\n.jasmine_html-reporter .jasmine-summary li.jasmine-pending a { color: #ba9d37; }\n.jasmine_html-reporter .jasmine-summary li.jasmine-disabled a { color: #bababa; }\n.jasmine_html-reporter .jasmine-description + .jasmine-suite { margin-top: 0; }\n.jasmine_html-reporter .jasmine-suite { margin-top: 14px; }\n.jasmine_html-reporter .jasmine-suite a { color: #333; }\n.jasmine_html-reporter .jasmine-failures .jasmine-spec-detail { margin-bottom: 28px; }\n.jasmine_html-reporter .jasmine-failures .jasmine-spec-detail .jasmine-description { background-color: #ca3a11; }\n.jasmine_html-reporter .jasmine-failures .jasmine-spec-detail .jasmine-description a { color: white; }\n.jasmine_html-reporter .jasmine-result-message { padding-top: 14px; color: #333; white-space: pre; }\n.jasmine_html-reporter .jasmine-result-message span.jasmine-result { display: block; }\n.jasmine_html-reporter .jasmine-stack-trace { margin: 5px 0 0 0; max-height: 224px; overflow: auto; line-height: 18px; color: #666; border: 1px solid #ddd; background: white; white-space: pre; }\n", ""]);

// exports


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96).Buffer))

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(199);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 199:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {};

global.waitUntilTrue = fn => {
    return new Promise(function looper(resolve) {
        fn() ? resolve() : setTimeout(looper.bind(null, resolve), 10);
    });
};

global.spyOnPrivate = function () {
    var removeSpyFunctions = [];

    afterEach(() => {
        removeSpyFunctions.forEach(fn => fn());
        removeSpyFunctions = [];
    });

    return function (obj, prop) {
        var mySpy = jasmine.createSpy();
        var oldFn = obj.__get__(prop);
        obj.__set__(prop, mySpy);

        removeSpyFunctions.push(() => obj.__set__(prop, oldFn));

        return mySpy;
    };
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(32);

var matchers = {};

matchers.toHaveLength = makeMatcherFactory('to have length', actual => actual.length);
matchers.toHaveClass = makeMatcherFactory('to have class', (actual, expected) => $j(actual).hasClass(expected) ? expected : '');
matchers.toHaveFieldWithLabel = makeMatcherFactory('to have field with label', (actual, expected) => {
    var { name, label } = expected;
    return actual.find('.input-form__group').filter((idx, el) => $j(el).find(`label:contains(${label})`).length && $j(el).find(`[name="${name}"]`).length).length ? expected : [];
});
matchers.toContainChild = makeMatcherFactory('to contain', (actual, expected) => $j(actual).find(expected).length ? expected : 'not found');
matchers.toContainText = makeMatcherFactory('to contain text', (actual, expected) => $j(actual).text().includes(expected) ? expected : '');
matchers.toContainDomEl = makeMatcherFactory('to contain DOM Element', matchers.toContain);
matchers.toContainInBody = makeMatcherFactory('to contain in body', (actual, expected) => _.contains(actual.html(), expected) ? expected : '');

beforeEach(() => jasmine.addMatchers(matchers));

function makeMatcherFactory(text, fn) {
    return (util, customEqualityTesters) => ({
        compare: (actual, expected) => {
            var pass = util.equals(fn(actual, expected), expected, customEqualityTesters);
            try {
                var expectedString = JSON.stringify(expected);
            } catch (e) {
                var expectedString = expected;
            }
            try {
                actualString = _.property('component.nodeName')(actual);
                actualString = actualString || actual.selector;
                actualString = actualString || JSON.stringify(actual);
            } catch (e) {
                var actualString = actual;
            }
            var message = pass ? `expected ${actualString} not ${text} ${expectedString}` : `expected ${actualString} ${text} ${expectedString}`;
            return { pass: pass, message: message };
        }
    });
}

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = "/**\n Starting with version 2.0, this file \"boots\" Jasmine, performing all of the necessary initialization before executing the loaded environment and all of a project's specs. This file should be loaded after `jasmine.js` and `jasmine_html.js`, but before any project source files or spec files are loaded. Thus this file can also be used to customize Jasmine for a project.\n\n If a project is using Jasmine via the standalone distribution, this file can be customized directly. If a project is using Jasmine via the [Ruby gem][jasmine-gem], this file can be copied into the support directory via `jasmine copy_boot_js`. Other environments (e.g., Python) will have different mechanisms.\n\n The location of `boot.js` can be specified and/or overridden in `jasmine.yml`.\n\n [jasmine-gem]: http://github.com/pivotal/jasmine-gem\n */\n\n(function() {\n\n  /**\n   * ## Require &amp; Instantiate\n   *\n   * Require Jasmine's core files. Specifically, this requires and attaches all of Jasmine's code to the `jasmine` reference.\n   */\n  window.jasmine = jasmineRequire.core(jasmineRequire);\n\n  /**\n   * Since this is being run in a browser and the results should populate to an HTML page, require the HTML-specific Jasmine code, injecting the same reference.\n   */\n  jasmineRequire.html(jasmine);\n\n  /**\n   * Create the Jasmine environment. This is used to run all specs in a project.\n   */\n  var env = jasmine.getEnv();\n\n  /**\n   * ## The Global Interface\n   *\n   * Build up the functions that will be exposed as the Jasmine public interface. A project can customize, rename or alias any of these functions as desired, provided the implementation remains unchanged.\n   */\n  var jasmineInterface = jasmineRequire.interface(jasmine, env);\n\n  /**\n   * Add all of the Jasmine global/public interface to the global scope, so a project can use the public interface directly. For example, calling `describe` in specs instead of `jasmine.getEnv().describe`.\n   */\n  extend(window, jasmineInterface);\n\n  /**\n   * ## Runner Parameters\n   *\n   * More browser specific code - wrap the query string in an object and to allow for getting/setting parameters from the runner user interface.\n   */\n\n  var queryString = new jasmine.QueryString({\n    getWindowLocation: function() { return window.location; }\n  });\n\n  var catchingExceptions = queryString.getParam(\"catch\");\n  env.catchExceptions(typeof catchingExceptions === \"undefined\" ? true : catchingExceptions);\n\n  var throwingExpectationFailures = queryString.getParam(\"throwFailures\");\n  env.throwOnExpectationFailure(throwingExpectationFailures);\n\n  var random = queryString.getParam(\"random\");\n  env.randomizeTests(random);\n\n  var seed = queryString.getParam(\"seed\");\n  if (seed) {\n    env.seed(seed);\n  }\n\n  /**\n   * ## Reporters\n   * The `HtmlReporter` builds all of the HTML UI for the runner page. This reporter paints the dots, stars, and x's for specs, as well as all spec names and all failures (if any).\n   */\n  var htmlReporter = new jasmine.HtmlReporter({\n    env: env,\n    onRaiseExceptionsClick: function() { queryString.navigateWithNewParam(\"catch\", !env.catchingExceptions()); },\n    onThrowExpectationsClick: function() { queryString.navigateWithNewParam(\"throwFailures\", !env.throwingExpectationFailures()); },\n    onRandomClick: function() { queryString.navigateWithNewParam(\"random\", !env.randomTests()); },\n    addToExistingQueryString: function(key, value) { return queryString.fullStringWithNewParam(key, value); },\n    getContainer: function() { return document.body; },\n    createElement: function() { return document.createElement.apply(document, arguments); },\n    createTextNode: function() { return document.createTextNode.apply(document, arguments); },\n    timer: new jasmine.Timer()\n  });\n\n  /**\n   * The `jsApiReporter` also receives spec results, and is used by any environment that needs to extract the results  from JavaScript.\n   */\n  env.addReporter(jasmineInterface.jsApiReporter);\n  env.addReporter(htmlReporter);\n\n  /**\n   * Filter which specs will be run by matching the start of the full name against the `spec` query param.\n   */\n  var specFilter = new jasmine.HtmlSpecFilter({\n    filterString: function() { return queryString.getParam(\"spec\"); }\n  });\n\n  env.specFilter = function(spec) {\n    return specFilter.matches(spec.getFullName());\n  };\n\n  /**\n   * Setting up timing functions to be able to be overridden. Certain browsers (Safari, IE 8, phantomjs) require this hack.\n   */\n  window.setTimeout = window.setTimeout;\n  window.setInterval = window.setInterval;\n  window.clearTimeout = window.clearTimeout;\n  window.clearInterval = window.clearInterval;\n\n  /**\n   * ## Execution\n   *\n   * Replace the browser window's `onload`, ensure it's called, and then run all of the loaded specs. This includes initializing the `HtmlReporter` instance and then executing the loaded Jasmine environment. All of this will happen after all of the specs are loaded.\n   */\n  var currentWindowOnload = window.onload;\n\n  window.onload = function() {\n    if (currentWindowOnload) {\n      currentWindowOnload();\n    }\n    htmlReporter.initialize();\n    env.execute();\n  };\n\n  /**\n   * Helper function for readability above.\n   */\n  function extend(destination, source) {\n    for (var property in source) destination[property] = source[property];\n    return destination;\n  }\n\n}());\n";

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

module.exports = "/*\nCopyright (c) 2008-2015 Pivotal Labs\n\nPermission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n\"Software\"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:\n\nThe above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\njasmineRequire.html = function(j$) {\n  j$.ResultsNode = jasmineRequire.ResultsNode();\n  j$.HtmlReporter = jasmineRequire.HtmlReporter(j$);\n  j$.QueryString = jasmineRequire.QueryString();\n  j$.HtmlSpecFilter = jasmineRequire.HtmlSpecFilter();\n};\n\njasmineRequire.HtmlReporter = function(j$) {\n\n  var noopTimer = {\n    start: function() {},\n    elapsed: function() { return 0; }\n  };\n\n  function HtmlReporter(options) {\n    var env = options.env || {},\n      getContainer = options.getContainer,\n      createElement = options.createElement,\n      createTextNode = options.createTextNode,\n      onRaiseExceptionsClick = options.onRaiseExceptionsClick || function() {},\n      onThrowExpectationsClick = options.onThrowExpectationsClick || function() {},\n      onRandomClick = options.onRandomClick || function() {},\n      addToExistingQueryString = options.addToExistingQueryString || defaultQueryString,\n      timer = options.timer || noopTimer,\n      results = [],\n      specsExecuted = 0,\n      failureCount = 0,\n      pendingSpecCount = 0,\n      htmlReporterMain,\n      symbols,\n      failedSuites = [];\n\n    this.initialize = function() {\n      clearPrior();\n      htmlReporterMain = createDom('div', {className: 'jasmine_html-reporter'},\n        createDom('div', {className: 'jasmine-banner'},\n          createDom('a', {className: 'jasmine-title', href: 'http://jasmine.github.io/', target: '_blank'}),\n          createDom('span', {className: 'jasmine-version'}, j$.version)\n        ),\n        createDom('ul', {className: 'jasmine-symbol-summary'}),\n        createDom('div', {className: 'jasmine-alert'}),\n        createDom('div', {className: 'jasmine-results'},\n          createDom('div', {className: 'jasmine-failures'})\n        )\n      );\n      getContainer().appendChild(htmlReporterMain);\n    };\n\n    var totalSpecsDefined;\n    this.jasmineStarted = function(options) {\n      totalSpecsDefined = options.totalSpecsDefined || 0;\n      timer.start();\n    };\n\n    var summary = createDom('div', {className: 'jasmine-summary'});\n\n    var topResults = new j$.ResultsNode({}, '', null),\n      currentParent = topResults;\n\n    this.suiteStarted = function(result) {\n      currentParent.addChild(result, 'suite');\n      currentParent = currentParent.last();\n    };\n\n    this.suiteDone = function(result) {\n      if (result.status == 'failed') {\n        failedSuites.push(result);\n      }\n\n      if (currentParent == topResults) {\n        return;\n      }\n\n      currentParent = currentParent.parent;\n    };\n\n    this.specStarted = function(result) {\n      currentParent.addChild(result, 'spec');\n    };\n\n    var failures = [];\n    this.specDone = function(result) {\n      if(noExpectations(result) && typeof console !== 'undefined' && typeof console.error !== 'undefined') {\n        console.error('Spec \\'' + result.fullName + '\\' has no expectations.');\n      }\n\n      if (result.status != 'disabled') {\n        specsExecuted++;\n      }\n\n      if (!symbols){\n        symbols = find('.jasmine-symbol-summary');\n      }\n\n      symbols.appendChild(createDom('li', {\n          className: noExpectations(result) ? 'jasmine-empty' : 'jasmine-' + result.status,\n          id: 'spec_' + result.id,\n          title: result.fullName\n        }\n      ));\n\n      if (result.status == 'failed') {\n        failureCount++;\n\n        var failure =\n          createDom('div', {className: 'jasmine-spec-detail jasmine-failed'},\n            createDom('div', {className: 'jasmine-description'},\n              createDom('a', {title: result.fullName, href: specHref(result)}, result.fullName)\n            ),\n            createDom('div', {className: 'jasmine-messages'})\n          );\n        var messages = failure.childNodes[1];\n\n        for (var i = 0; i < result.failedExpectations.length; i++) {\n          var expectation = result.failedExpectations[i];\n          messages.appendChild(createDom('div', {className: 'jasmine-result-message'}, expectation.message));\n          messages.appendChild(createDom('div', {className: 'jasmine-stack-trace'}, expectation.stack));\n        }\n\n        failures.push(failure);\n      }\n\n      if (result.status == 'pending') {\n        pendingSpecCount++;\n      }\n    };\n\n    this.jasmineDone = function(doneResult) {\n      var banner = find('.jasmine-banner');\n      var alert = find('.jasmine-alert');\n      var order = doneResult && doneResult.order;\n      alert.appendChild(createDom('span', {className: 'jasmine-duration'}, 'finished in ' + timer.elapsed() / 1000 + 's'));\n\n      banner.appendChild(\n        createDom('div', { className: 'jasmine-run-options' },\n          createDom('span', { className: 'jasmine-trigger' }, 'Options'),\n          createDom('div', { className: 'jasmine-payload' },\n            createDom('div', { className: 'jasmine-exceptions' },\n              createDom('input', {\n                className: 'jasmine-raise',\n                id: 'jasmine-raise-exceptions',\n                type: 'checkbox'\n              }),\n              createDom('label', { className: 'jasmine-label', 'for': 'jasmine-raise-exceptions' }, 'raise exceptions')),\n            createDom('div', { className: 'jasmine-throw-failures' },\n              createDom('input', {\n                className: 'jasmine-throw',\n                id: 'jasmine-throw-failures',\n                type: 'checkbox'\n              }),\n              createDom('label', { className: 'jasmine-label', 'for': 'jasmine-throw-failures' }, 'stop spec on expectation failure')),\n            createDom('div', { className: 'jasmine-random-order' },\n              createDom('input', {\n                className: 'jasmine-random',\n                id: 'jasmine-random-order',\n                type: 'checkbox'\n              }),\n              createDom('label', { className: 'jasmine-label', 'for': 'jasmine-random-order' }, 'run tests in random order'))\n          )\n        ));\n\n      var raiseCheckbox = find('#jasmine-raise-exceptions');\n\n      raiseCheckbox.checked = !env.catchingExceptions();\n      raiseCheckbox.onclick = onRaiseExceptionsClick;\n\n      var throwCheckbox = find('#jasmine-throw-failures');\n      throwCheckbox.checked = env.throwingExpectationFailures();\n      throwCheckbox.onclick = onThrowExpectationsClick;\n\n      var randomCheckbox = find('#jasmine-random-order');\n      randomCheckbox.checked = env.randomTests();\n      randomCheckbox.onclick = onRandomClick;\n\n      var optionsMenu = find('.jasmine-run-options'),\n          optionsTrigger = optionsMenu.querySelector('.jasmine-trigger'),\n          optionsPayload = optionsMenu.querySelector('.jasmine-payload'),\n          isOpen = /\\bjasmine-open\\b/;\n\n      optionsTrigger.onclick = function() {\n        if (isOpen.test(optionsPayload.className)) {\n          optionsPayload.className = optionsPayload.className.replace(isOpen, '');\n        } else {\n          optionsPayload.className += ' jasmine-open';\n        }\n      };\n\n      if (specsExecuted < totalSpecsDefined) {\n        var skippedMessage = 'Ran ' + specsExecuted + ' of ' + totalSpecsDefined + ' specs - run all';\n        alert.appendChild(\n          createDom('span', {className: 'jasmine-bar jasmine-skipped'},\n            createDom('a', {href: '?', title: 'Run all specs'}, skippedMessage)\n          )\n        );\n      }\n      var statusBarMessage = '';\n      var statusBarClassName = 'jasmine-bar ';\n\n      if (totalSpecsDefined > 0) {\n        statusBarMessage += pluralize('spec', specsExecuted) + ', ' + pluralize('failure', failureCount);\n        if (pendingSpecCount) { statusBarMessage += ', ' + pluralize('pending spec', pendingSpecCount); }\n        statusBarClassName += (failureCount > 0) ? 'jasmine-failed' : 'jasmine-passed';\n      } else {\n        statusBarClassName += 'jasmine-skipped';\n        statusBarMessage += 'No specs found';\n      }\n\n      var seedBar;\n      if (order && order.random) {\n        seedBar = createDom('span', {className: 'jasmine-seed-bar'},\n          ', randomized with seed ',\n          createDom('a', {title: 'randomized with seed ' + order.seed, href: seedHref(order.seed)}, order.seed)\n        );\n      }\n\n      alert.appendChild(createDom('span', {className: statusBarClassName}, statusBarMessage, seedBar));\n\n      for(i = 0; i < failedSuites.length; i++) {\n        var failedSuite = failedSuites[i];\n        for(var j = 0; j < failedSuite.failedExpectations.length; j++) {\n          var errorBarMessage = 'AfterAll ' + failedSuite.failedExpectations[j].message;\n          var errorBarClassName = 'jasmine-bar jasmine-errored';\n          alert.appendChild(createDom('span', {className: errorBarClassName}, errorBarMessage));\n        }\n      }\n\n      var results = find('.jasmine-results');\n      results.appendChild(summary);\n\n      summaryList(topResults, summary);\n\n      function summaryList(resultsTree, domParent) {\n        var specListNode;\n        for (var i = 0; i < resultsTree.children.length; i++) {\n          var resultNode = resultsTree.children[i];\n          if (resultNode.type == 'suite') {\n            var suiteListNode = createDom('ul', {className: 'jasmine-suite', id: 'suite-' + resultNode.result.id},\n              createDom('li', {className: 'jasmine-suite-detail'},\n                createDom('a', {href: specHref(resultNode.result)}, resultNode.result.description)\n              )\n            );\n\n            summaryList(resultNode, suiteListNode);\n            domParent.appendChild(suiteListNode);\n          }\n          if (resultNode.type == 'spec') {\n            if (domParent.getAttribute('class') != 'jasmine-specs') {\n              specListNode = createDom('ul', {className: 'jasmine-specs'});\n              domParent.appendChild(specListNode);\n            }\n            var specDescription = resultNode.result.description;\n            if(noExpectations(resultNode.result)) {\n              specDescription = 'SPEC HAS NO EXPECTATIONS ' + specDescription;\n            }\n            if(resultNode.result.status === 'pending' && resultNode.result.pendingReason !== '') {\n              specDescription = specDescription + ' PENDING WITH MESSAGE: ' + resultNode.result.pendingReason;\n            }\n            specListNode.appendChild(\n              createDom('li', {\n                  className: 'jasmine-' + resultNode.result.status,\n                  id: 'spec-' + resultNode.result.id\n                },\n                createDom('a', {href: specHref(resultNode.result)}, specDescription)\n              )\n            );\n          }\n        }\n      }\n\n      if (failures.length) {\n        alert.appendChild(\n          createDom('span', {className: 'jasmine-menu jasmine-bar jasmine-spec-list'},\n            createDom('span', {}, 'Spec List | '),\n            createDom('a', {className: 'jasmine-failures-menu', href: '#'}, 'Failures')));\n        alert.appendChild(\n          createDom('span', {className: 'jasmine-menu jasmine-bar jasmine-failure-list'},\n            createDom('a', {className: 'jasmine-spec-list-menu', href: '#'}, 'Spec List'),\n            createDom('span', {}, ' | Failures ')));\n\n        find('.jasmine-failures-menu').onclick = function() {\n          setMenuModeTo('jasmine-failure-list');\n        };\n        find('.jasmine-spec-list-menu').onclick = function() {\n          setMenuModeTo('jasmine-spec-list');\n        };\n\n        setMenuModeTo('jasmine-failure-list');\n\n        var failureNode = find('.jasmine-failures');\n        for (var i = 0; i < failures.length; i++) {\n          failureNode.appendChild(failures[i]);\n        }\n      }\n    };\n\n    return this;\n\n    function find(selector) {\n      return getContainer().querySelector('.jasmine_html-reporter ' + selector);\n    }\n\n    function clearPrior() {\n      // return the reporter\n      var oldReporter = find('');\n\n      if(oldReporter) {\n        getContainer().removeChild(oldReporter);\n      }\n    }\n\n    function createDom(type, attrs, childrenVarArgs) {\n      var el = createElement(type);\n\n      for (var i = 2; i < arguments.length; i++) {\n        var child = arguments[i];\n\n        if (typeof child === 'string') {\n          el.appendChild(createTextNode(child));\n        } else {\n          if (child) {\n            el.appendChild(child);\n          }\n        }\n      }\n\n      for (var attr in attrs) {\n        if (attr == 'className') {\n          el[attr] = attrs[attr];\n        } else {\n          el.setAttribute(attr, attrs[attr]);\n        }\n      }\n\n      return el;\n    }\n\n    function pluralize(singular, count) {\n      var word = (count == 1 ? singular : singular + 's');\n\n      return '' + count + ' ' + word;\n    }\n\n    function specHref(result) {\n      return addToExistingQueryString('spec', result.fullName);\n    }\n\n    function seedHref(seed) {\n      return addToExistingQueryString('seed', seed);\n    }\n\n    function defaultQueryString(key, value) {\n      return '?' + key + '=' + value;\n    }\n\n    function setMenuModeTo(mode) {\n      htmlReporterMain.setAttribute('class', 'jasmine_html-reporter ' + mode);\n    }\n\n    function noExpectations(result) {\n      return (result.failedExpectations.length + result.passedExpectations.length) === 0 &&\n        result.status === 'passed';\n    }\n  }\n\n  return HtmlReporter;\n};\n\njasmineRequire.HtmlSpecFilter = function() {\n  function HtmlSpecFilter(options) {\n    var filterString = options && options.filterString() && options.filterString().replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, '\\\\$&');\n    var filterPattern = new RegExp(filterString);\n\n    this.matches = function(specName) {\n      return filterPattern.test(specName);\n    };\n  }\n\n  return HtmlSpecFilter;\n};\n\njasmineRequire.ResultsNode = function() {\n  function ResultsNode(result, type, parent) {\n    this.result = result;\n    this.type = type;\n    this.parent = parent;\n\n    this.children = [];\n\n    this.addChild = function(result, type) {\n      this.children.push(new ResultsNode(result, type, this));\n    };\n\n    this.last = function() {\n      return this.children[this.children.length - 1];\n    };\n  }\n\n  return ResultsNode;\n};\n\njasmineRequire.QueryString = function() {\n  function QueryString(options) {\n\n    this.navigateWithNewParam = function(key, value) {\n      options.getWindowLocation().search = this.fullStringWithNewParam(key, value);\n    };\n\n    this.fullStringWithNewParam = function(key, value) {\n      var paramMap = queryStringToParamMap();\n      paramMap[key] = value;\n      return toQueryString(paramMap);\n    };\n\n    this.getParam = function(key) {\n      return queryStringToParamMap()[key];\n    };\n\n    return this;\n\n    function toQueryString(paramMap) {\n      var qStrPairs = [];\n      for (var prop in paramMap) {\n        qStrPairs.push(encodeURIComponent(prop) + '=' + encodeURIComponent(paramMap[prop]));\n      }\n      return '?' + qStrPairs.join('&');\n    }\n\n    function queryStringToParamMap() {\n      var paramStr = options.getWindowLocation().search.substring(1),\n        params = [],\n        paramMap = {};\n\n      if (paramStr.length > 0) {\n        params = paramStr.split('&');\n        for (var i = 0; i < params.length; i++) {\n          var p = params[i].split('=');\n          var value = decodeURIComponent(p[1]);\n          if (value === 'true' || value === 'false') {\n            value = JSON.parse(value);\n          }\n          paramMap[decodeURIComponent(p[0])] = value;\n        }\n      }\n\n      return paramMap;\n    }\n\n  }\n\n  return QueryString;\n};\n";

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

module.exports = "/*\nCopyright (c) 2008-2015 Pivotal Labs\n\nPermission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n\"Software\"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:\n\nThe above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\nvar getJasmineRequireObj = (function (jasmineGlobal) {\n  var jasmineRequire;\n\n  if (typeof module !== 'undefined' && module.exports) {\n    if (typeof global !== 'undefined') {\n      jasmineGlobal = global;\n    } else {\n      jasmineGlobal = {};\n    }\n    jasmineRequire = exports;\n  } else {\n    if (typeof window !== 'undefined' && typeof window.toString === 'function' && window.toString() === '[object GjsGlobal]') {\n      jasmineGlobal = window;\n    }\n    jasmineRequire = jasmineGlobal.jasmineRequire = jasmineGlobal.jasmineRequire || {};\n  }\n\n  function getJasmineRequire() {\n    return jasmineRequire;\n  }\n\n  getJasmineRequire().core = function(jRequire) {\n    var j$ = {};\n\n    jRequire.base(j$, jasmineGlobal);\n    j$.util = jRequire.util();\n    j$.errors = jRequire.errors();\n    j$.Any = jRequire.Any(j$);\n    j$.Anything = jRequire.Anything(j$);\n    j$.CallTracker = jRequire.CallTracker();\n    j$.MockDate = jRequire.MockDate();\n    j$.Clock = jRequire.Clock();\n    j$.DelayedFunctionScheduler = jRequire.DelayedFunctionScheduler();\n    j$.Env = jRequire.Env(j$);\n    j$.ExceptionFormatter = jRequire.ExceptionFormatter();\n    j$.Expectation = jRequire.Expectation();\n    j$.buildExpectationResult = jRequire.buildExpectationResult();\n    j$.JsApiReporter = jRequire.JsApiReporter();\n    j$.matchersUtil = jRequire.matchersUtil(j$);\n    j$.ObjectContaining = jRequire.ObjectContaining(j$);\n    j$.ArrayContaining = jRequire.ArrayContaining(j$);\n    j$.pp = jRequire.pp(j$);\n    j$.QueueRunner = jRequire.QueueRunner(j$);\n    j$.ReportDispatcher = jRequire.ReportDispatcher();\n    j$.Spec = jRequire.Spec(j$);\n    j$.SpyRegistry = jRequire.SpyRegistry(j$);\n    j$.SpyStrategy = jRequire.SpyStrategy();\n    j$.StringMatching = jRequire.StringMatching(j$);\n    j$.Suite = jRequire.Suite(j$);\n    j$.Timer = jRequire.Timer();\n    j$.TreeProcessor = jRequire.TreeProcessor();\n    j$.version = jRequire.version();\n    j$.Order = jRequire.Order();\n\n    j$.matchers = jRequire.requireMatchers(jRequire, j$);\n\n    return j$;\n  };\n\n  return getJasmineRequire;\n})(this);\n\ngetJasmineRequireObj().requireMatchers = function(jRequire, j$) {\n  var availableMatchers = [\n      'toBe',\n      'toBeCloseTo',\n      'toBeDefined',\n      'toBeFalsy',\n      'toBeGreaterThan',\n      'toBeLessThan',\n      'toBeNaN',\n      'toBeNull',\n      'toBeTruthy',\n      'toBeUndefined',\n      'toContain',\n      'toEqual',\n      'toHaveBeenCalled',\n      'toHaveBeenCalledWith',\n      'toHaveBeenCalledTimes',\n      'toMatch',\n      'toThrow',\n      'toThrowError'\n    ],\n    matchers = {};\n\n  for (var i = 0; i < availableMatchers.length; i++) {\n    var name = availableMatchers[i];\n    matchers[name] = jRequire[name](j$);\n  }\n\n  return matchers;\n};\n\ngetJasmineRequireObj().base = function(j$, jasmineGlobal) {\n  j$.unimplementedMethod_ = function() {\n    throw new Error('unimplemented method');\n  };\n\n  j$.MAX_PRETTY_PRINT_DEPTH = 40;\n  j$.MAX_PRETTY_PRINT_ARRAY_LENGTH = 100;\n  j$.DEFAULT_TIMEOUT_INTERVAL = 5000;\n\n  j$.getGlobal = function() {\n    return jasmineGlobal;\n  };\n\n  j$.getEnv = function(options) {\n    var env = j$.currentEnv_ = j$.currentEnv_ || new j$.Env(options);\n    //jasmine. singletons in here (setTimeout blah blah).\n    return env;\n  };\n\n  j$.isArray_ = function(value) {\n    return j$.isA_('Array', value);\n  };\n\n  j$.isString_ = function(value) {\n    return j$.isA_('String', value);\n  };\n\n  j$.isNumber_ = function(value) {\n    return j$.isA_('Number', value);\n  };\n\n  j$.isA_ = function(typeName, value) {\n    return Object.prototype.toString.apply(value) === '[object ' + typeName + ']';\n  };\n\n  j$.isDomNode = function(obj) {\n    return obj.nodeType > 0;\n  };\n\n  j$.fnNameFor = function(func) {\n    return func.name || func.toString().match(/^\\s*function\\s*(\\w*)\\s*\\(/)[1];\n  };\n\n  j$.any = function(clazz) {\n    return new j$.Any(clazz);\n  };\n\n  j$.anything = function() {\n    return new j$.Anything();\n  };\n\n  j$.objectContaining = function(sample) {\n    return new j$.ObjectContaining(sample);\n  };\n\n  j$.stringMatching = function(expected) {\n    return new j$.StringMatching(expected);\n  };\n\n  j$.arrayContaining = function(sample) {\n    return new j$.ArrayContaining(sample);\n  };\n\n  j$.createSpy = function(name, originalFn) {\n\n    var spyStrategy = new j$.SpyStrategy({\n        name: name,\n        fn: originalFn,\n        getSpy: function() { return spy; }\n      }),\n      callTracker = new j$.CallTracker(),\n      spy = function() {\n        var callData = {\n          object: this,\n          args: Array.prototype.slice.apply(arguments)\n        };\n\n        callTracker.track(callData);\n        var returnValue = spyStrategy.exec.apply(this, arguments);\n        callData.returnValue = returnValue;\n\n        return returnValue;\n      };\n\n    for (var prop in originalFn) {\n      if (prop === 'and' || prop === 'calls') {\n        throw new Error('Jasmine spies would overwrite the \\'and\\' and \\'calls\\' properties on the object being spied upon');\n      }\n\n      spy[prop] = originalFn[prop];\n    }\n\n    spy.and = spyStrategy;\n    spy.calls = callTracker;\n\n    return spy;\n  };\n\n  j$.isSpy = function(putativeSpy) {\n    if (!putativeSpy) {\n      return false;\n    }\n    return putativeSpy.and instanceof j$.SpyStrategy &&\n      putativeSpy.calls instanceof j$.CallTracker;\n  };\n\n  j$.createSpyObj = function(baseName, methodNames) {\n    if (j$.isArray_(baseName) && j$.util.isUndefined(methodNames)) {\n      methodNames = baseName;\n      baseName = 'unknown';\n    }\n\n    if (!j$.isArray_(methodNames) || methodNames.length === 0) {\n      throw 'createSpyObj requires a non-empty array of method names to create spies for';\n    }\n    var obj = {};\n    for (var i = 0; i < methodNames.length; i++) {\n      obj[methodNames[i]] = j$.createSpy(baseName + '.' + methodNames[i]);\n    }\n    return obj;\n  };\n};\n\ngetJasmineRequireObj().util = function() {\n\n  var util = {};\n\n  util.inherit = function(childClass, parentClass) {\n    var Subclass = function() {\n    };\n    Subclass.prototype = parentClass.prototype;\n    childClass.prototype = new Subclass();\n  };\n\n  util.htmlEscape = function(str) {\n    if (!str) {\n      return str;\n    }\n    return str.replace(/&/g, '&amp;')\n      .replace(/</g, '&lt;')\n      .replace(/>/g, '&gt;');\n  };\n\n  util.argsToArray = function(args) {\n    var arrayOfArgs = [];\n    for (var i = 0; i < args.length; i++) {\n      arrayOfArgs.push(args[i]);\n    }\n    return arrayOfArgs;\n  };\n\n  util.isUndefined = function(obj) {\n    return obj === void 0;\n  };\n\n  util.arrayContains = function(array, search) {\n    var i = array.length;\n    while (i--) {\n      if (array[i] === search) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  util.clone = function(obj) {\n    if (Object.prototype.toString.apply(obj) === '[object Array]') {\n      return obj.slice();\n    }\n\n    var cloned = {};\n    for (var prop in obj) {\n      if (obj.hasOwnProperty(prop)) {\n        cloned[prop] = obj[prop];\n      }\n    }\n\n    return cloned;\n  };\n\n  return util;\n};\n\ngetJasmineRequireObj().Spec = function(j$) {\n  function Spec(attrs) {\n    this.expectationFactory = attrs.expectationFactory;\n    this.resultCallback = attrs.resultCallback || function() {};\n    this.id = attrs.id;\n    this.description = attrs.description || '';\n    this.queueableFn = attrs.queueableFn;\n    this.beforeAndAfterFns = attrs.beforeAndAfterFns || function() { return {befores: [], afters: []}; };\n    this.userContext = attrs.userContext || function() { return {}; };\n    this.onStart = attrs.onStart || function() {};\n    this.getSpecName = attrs.getSpecName || function() { return ''; };\n    this.expectationResultFactory = attrs.expectationResultFactory || function() { };\n    this.queueRunnerFactory = attrs.queueRunnerFactory || function() {};\n    this.catchingExceptions = attrs.catchingExceptions || function() { return true; };\n    this.throwOnExpectationFailure = !!attrs.throwOnExpectationFailure;\n\n    if (!this.queueableFn.fn) {\n      this.pend();\n    }\n\n    this.result = {\n      id: this.id,\n      description: this.description,\n      fullName: this.getFullName(),\n      failedExpectations: [],\n      passedExpectations: [],\n      pendingReason: ''\n    };\n  }\n\n  Spec.prototype.addExpectationResult = function(passed, data, isError) {\n    var expectationResult = this.expectationResultFactory(data);\n    if (passed) {\n      this.result.passedExpectations.push(expectationResult);\n    } else {\n      this.result.failedExpectations.push(expectationResult);\n\n      if (this.throwOnExpectationFailure && !isError) {\n        throw new j$.errors.ExpectationFailed();\n      }\n    }\n  };\n\n  Spec.prototype.expect = function(actual) {\n    return this.expectationFactory(actual, this);\n  };\n\n  Spec.prototype.execute = function(onComplete, enabled) {\n    var self = this;\n\n    this.onStart(this);\n\n    if (!this.isExecutable() || this.markedPending || enabled === false) {\n      complete(enabled);\n      return;\n    }\n\n    var fns = this.beforeAndAfterFns();\n    var allFns = fns.befores.concat(this.queueableFn).concat(fns.afters);\n\n    this.queueRunnerFactory({\n      queueableFns: allFns,\n      onException: function() { self.onException.apply(self, arguments); },\n      onComplete: complete,\n      userContext: this.userContext()\n    });\n\n    function complete(enabledAgain) {\n      self.result.status = self.status(enabledAgain);\n      self.resultCallback(self.result);\n\n      if (onComplete) {\n        onComplete();\n      }\n    }\n  };\n\n  Spec.prototype.onException = function onException(e) {\n    if (Spec.isPendingSpecException(e)) {\n      this.pend(extractCustomPendingMessage(e));\n      return;\n    }\n\n    if (e instanceof j$.errors.ExpectationFailed) {\n      return;\n    }\n\n    this.addExpectationResult(false, {\n      matcherName: '',\n      passed: false,\n      expected: '',\n      actual: '',\n      error: e\n    }, true);\n  };\n\n  Spec.prototype.disable = function() {\n    this.disabled = true;\n  };\n\n  Spec.prototype.pend = function(message) {\n    this.markedPending = true;\n    if (message) {\n      this.result.pendingReason = message;\n    }\n  };\n\n  Spec.prototype.getResult = function() {\n    this.result.status = this.status();\n    return this.result;\n  };\n\n  Spec.prototype.status = function(enabled) {\n    if (this.disabled || enabled === false) {\n      return 'disabled';\n    }\n\n    if (this.markedPending) {\n      return 'pending';\n    }\n\n    if (this.result.failedExpectations.length > 0) {\n      return 'failed';\n    } else {\n      return 'passed';\n    }\n  };\n\n  Spec.prototype.isExecutable = function() {\n    return !this.disabled;\n  };\n\n  Spec.prototype.getFullName = function() {\n    return this.getSpecName(this);\n  };\n\n  var extractCustomPendingMessage = function(e) {\n    var fullMessage = e.toString(),\n        boilerplateStart = fullMessage.indexOf(Spec.pendingSpecExceptionMessage),\n        boilerplateEnd = boilerplateStart + Spec.pendingSpecExceptionMessage.length;\n\n    return fullMessage.substr(boilerplateEnd);\n  };\n\n  Spec.pendingSpecExceptionMessage = '=> marked Pending';\n\n  Spec.isPendingSpecException = function(e) {\n    return !!(e && e.toString && e.toString().indexOf(Spec.pendingSpecExceptionMessage) !== -1);\n  };\n\n  return Spec;\n};\n\nif (typeof window == void 0 && typeof exports == 'object') {\n  exports.Spec = jasmineRequire.Spec;\n}\n\n/*jshint bitwise: false*/\n\ngetJasmineRequireObj().Order = function() {\n  function Order(options) {\n    this.random = 'random' in options ? options.random : true;\n    var seed = this.seed = options.seed || generateSeed();\n    this.sort = this.random ? randomOrder : naturalOrder;\n\n    function naturalOrder(items) {\n      return items;\n    }\n\n    function randomOrder(items) {\n      var copy = items.slice();\n      copy.sort(function(a, b) {\n        return jenkinsHash(seed + a.id) - jenkinsHash(seed + b.id);\n      });\n      return copy;\n    }\n\n    function generateSeed() {\n      return String(Math.random()).slice(-5);\n    }\n\n    // Bob Jenkins One-at-a-Time Hash algorithm is a non-cryptographic hash function\n    // used to get a different output when the key changes slighly.\n    // We use your return to sort the children randomly in a consistent way when\n    // used in conjunction with a seed\n\n    function jenkinsHash(key) {\n      var hash, i;\n      for(hash = i = 0; i < key.length; ++i) {\n        hash += key.charCodeAt(i);\n        hash += (hash << 10);\n        hash ^= (hash >> 6);\n      }\n      hash += (hash << 3);\n      hash ^= (hash >> 11);\n      hash += (hash << 15);\n      return hash;\n    }\n\n  }\n\n  return Order;\n};\n\ngetJasmineRequireObj().Env = function(j$) {\n  function Env(options) {\n    options = options || {};\n\n    var self = this;\n    var global = options.global || j$.getGlobal();\n\n    var totalSpecsDefined = 0;\n\n    var catchExceptions = true;\n\n    var realSetTimeout = j$.getGlobal().setTimeout;\n    var realClearTimeout = j$.getGlobal().clearTimeout;\n    this.clock = new j$.Clock(global, function () { return new j$.DelayedFunctionScheduler(); }, new j$.MockDate(global));\n\n    var runnableLookupTable = {};\n    var runnableResources = {};\n\n    var currentSpec = null;\n    var currentlyExecutingSuites = [];\n    var currentDeclarationSuite = null;\n    var throwOnExpectationFailure = false;\n    var random = false;\n    var seed = null;\n\n    var currentSuite = function() {\n      return currentlyExecutingSuites[currentlyExecutingSuites.length - 1];\n    };\n\n    var currentRunnable = function() {\n      return currentSpec || currentSuite();\n    };\n\n    var reporter = new j$.ReportDispatcher([\n      'jasmineStarted',\n      'jasmineDone',\n      'suiteStarted',\n      'suiteDone',\n      'specStarted',\n      'specDone'\n    ]);\n\n    this.specFilter = function() {\n      return true;\n    };\n\n    this.addCustomEqualityTester = function(tester) {\n      if(!currentRunnable()) {\n        throw new Error('Custom Equalities must be added in a before function or a spec');\n      }\n      runnableResources[currentRunnable().id].customEqualityTesters.push(tester);\n    };\n\n    this.addMatchers = function(matchersToAdd) {\n      if(!currentRunnable()) {\n        throw new Error('Matchers must be added in a before function or a spec');\n      }\n      var customMatchers = runnableResources[currentRunnable().id].customMatchers;\n      for (var matcherName in matchersToAdd) {\n        customMatchers[matcherName] = matchersToAdd[matcherName];\n      }\n    };\n\n    j$.Expectation.addCoreMatchers(j$.matchers);\n\n    var nextSpecId = 0;\n    var getNextSpecId = function() {\n      return 'spec' + nextSpecId++;\n    };\n\n    var nextSuiteId = 0;\n    var getNextSuiteId = function() {\n      return 'suite' + nextSuiteId++;\n    };\n\n    var expectationFactory = function(actual, spec) {\n      return j$.Expectation.Factory({\n        util: j$.matchersUtil,\n        customEqualityTesters: runnableResources[spec.id].customEqualityTesters,\n        customMatchers: runnableResources[spec.id].customMatchers,\n        actual: actual,\n        addExpectationResult: addExpectationResult\n      });\n\n      function addExpectationResult(passed, result) {\n        return spec.addExpectationResult(passed, result);\n      }\n    };\n\n    var defaultResourcesForRunnable = function(id, parentRunnableId) {\n      var resources = {spies: [], customEqualityTesters: [], customMatchers: {}};\n\n      if(runnableResources[parentRunnableId]){\n        resources.customEqualityTesters = j$.util.clone(runnableResources[parentRunnableId].customEqualityTesters);\n        resources.customMatchers = j$.util.clone(runnableResources[parentRunnableId].customMatchers);\n      }\n\n      runnableResources[id] = resources;\n    };\n\n    var clearResourcesForRunnable = function(id) {\n        spyRegistry.clearSpies();\n        delete runnableResources[id];\n    };\n\n    var beforeAndAfterFns = function(suite) {\n      return function() {\n        var befores = [],\n          afters = [];\n\n        while(suite) {\n          befores = befores.concat(suite.beforeFns);\n          afters = afters.concat(suite.afterFns);\n\n          suite = suite.parentSuite;\n        }\n\n        return {\n          befores: befores.reverse(),\n          afters: afters\n        };\n      };\n    };\n\n    var getSpecName = function(spec, suite) {\n      return suite.getFullName() + ' ' + spec.description;\n    };\n\n    // TODO: we may just be able to pass in the fn instead of wrapping here\n    var buildExpectationResult = j$.buildExpectationResult,\n        exceptionFormatter = new j$.ExceptionFormatter(),\n        expectationResultFactory = function(attrs) {\n          attrs.messageFormatter = exceptionFormatter.message;\n          attrs.stackFormatter = exceptionFormatter.stack;\n\n          return buildExpectationResult(attrs);\n        };\n\n    // TODO: fix this naming, and here's where the value comes in\n    this.catchExceptions = function(value) {\n      catchExceptions = !!value;\n      return catchExceptions;\n    };\n\n    this.catchingExceptions = function() {\n      return catchExceptions;\n    };\n\n    var maximumSpecCallbackDepth = 20;\n    var currentSpecCallbackDepth = 0;\n\n    function clearStack(fn) {\n      currentSpecCallbackDepth++;\n      if (currentSpecCallbackDepth >= maximumSpecCallbackDepth) {\n        currentSpecCallbackDepth = 0;\n        realSetTimeout(fn, 0);\n      } else {\n        fn();\n      }\n    }\n\n    var catchException = function(e) {\n      return j$.Spec.isPendingSpecException(e) || catchExceptions;\n    };\n\n    this.throwOnExpectationFailure = function(value) {\n      throwOnExpectationFailure = !!value;\n    };\n\n    this.throwingExpectationFailures = function() {\n      return throwOnExpectationFailure;\n    };\n\n    this.randomizeTests = function(value) {\n      random = !!value;\n    };\n\n    this.randomTests = function() {\n      return random;\n    };\n\n    this.seed = function(value) {\n      if (value) {\n        seed = value;\n      }\n      return seed;\n    };\n\n    var queueRunnerFactory = function(options) {\n      options.catchException = catchException;\n      options.clearStack = options.clearStack || clearStack;\n      options.timeout = {setTimeout: realSetTimeout, clearTimeout: realClearTimeout};\n      options.fail = self.fail;\n\n      new j$.QueueRunner(options).execute();\n    };\n\n    var topSuite = new j$.Suite({\n      env: this,\n      id: getNextSuiteId(),\n      description: 'Jasmine__TopLevel__Suite',\n      queueRunner: queueRunnerFactory\n    });\n    runnableLookupTable[topSuite.id] = topSuite;\n    defaultResourcesForRunnable(topSuite.id);\n    currentDeclarationSuite = topSuite;\n\n    this.topSuite = function() {\n      return topSuite;\n    };\n\n    this.execute = function(runnablesToRun) {\n      if(!runnablesToRun) {\n        if (focusedRunnables.length) {\n          runnablesToRun = focusedRunnables;\n        } else {\n          runnablesToRun = [topSuite.id];\n        }\n      }\n\n      var order = new j$.Order({\n        random: random,\n        seed: seed\n      });\n\n      var processor = new j$.TreeProcessor({\n        tree: topSuite,\n        runnableIds: runnablesToRun,\n        queueRunnerFactory: queueRunnerFactory,\n        nodeStart: function(suite) {\n          currentlyExecutingSuites.push(suite);\n          defaultResourcesForRunnable(suite.id, suite.parentSuite.id);\n          reporter.suiteStarted(suite.result);\n        },\n        nodeComplete: function(suite, result) {\n          if (!suite.disabled) {\n            clearResourcesForRunnable(suite.id);\n          }\n          currentlyExecutingSuites.pop();\n          reporter.suiteDone(result);\n        },\n        orderChildren: function(node) {\n          return order.sort(node.children);\n        }\n      });\n\n      if(!processor.processTree().valid) {\n        throw new Error('Invalid order: would cause a beforeAll or afterAll to be run multiple times');\n      }\n\n      reporter.jasmineStarted({\n        totalSpecsDefined: totalSpecsDefined\n      });\n\n      processor.execute(function() {\n        reporter.jasmineDone({\n          order: order\n        });\n      });\n    };\n\n    this.addReporter = function(reporterToAdd) {\n      reporter.addReporter(reporterToAdd);\n    };\n\n    var spyRegistry = new j$.SpyRegistry({currentSpies: function() {\n      if(!currentRunnable()) {\n        throw new Error('Spies must be created in a before function or a spec');\n      }\n      return runnableResources[currentRunnable().id].spies;\n    }});\n\n    this.spyOn = function() {\n      return spyRegistry.spyOn.apply(spyRegistry, arguments);\n    };\n\n    var suiteFactory = function(description) {\n      var suite = new j$.Suite({\n        env: self,\n        id: getNextSuiteId(),\n        description: description,\n        parentSuite: currentDeclarationSuite,\n        expectationFactory: expectationFactory,\n        expectationResultFactory: expectationResultFactory,\n        throwOnExpectationFailure: throwOnExpectationFailure\n      });\n\n      runnableLookupTable[suite.id] = suite;\n      return suite;\n    };\n\n    this.describe = function(description, specDefinitions) {\n      var suite = suiteFactory(description);\n      if (specDefinitions.length > 0) {\n        throw new Error('describe does not expect a done parameter');\n      }\n      if (currentDeclarationSuite.markedPending) {\n        suite.pend();\n      }\n      addSpecsToSuite(suite, specDefinitions);\n      return suite;\n    };\n\n    this.xdescribe = function(description, specDefinitions) {\n      var suite = suiteFactory(description);\n      suite.pend();\n      addSpecsToSuite(suite, specDefinitions);\n      return suite;\n    };\n\n    var focusedRunnables = [];\n\n    this.fdescribe = function(description, specDefinitions) {\n      var suite = suiteFactory(description);\n      suite.isFocused = true;\n\n      focusedRunnables.push(suite.id);\n      unfocusAncestor();\n      addSpecsToSuite(suite, specDefinitions);\n\n      return suite;\n    };\n\n    function addSpecsToSuite(suite, specDefinitions) {\n      var parentSuite = currentDeclarationSuite;\n      parentSuite.addChild(suite);\n      currentDeclarationSuite = suite;\n\n      var declarationError = null;\n      try {\n        specDefinitions.call(suite);\n      } catch (e) {\n        declarationError = e;\n      }\n\n      if (declarationError) {\n        self.it('encountered a declaration exception', function() {\n          throw declarationError;\n        });\n      }\n\n      currentDeclarationSuite = parentSuite;\n    }\n\n    function findFocusedAncestor(suite) {\n      while (suite) {\n        if (suite.isFocused) {\n          return suite.id;\n        }\n        suite = suite.parentSuite;\n      }\n\n      return null;\n    }\n\n    function unfocusAncestor() {\n      var focusedAncestor = findFocusedAncestor(currentDeclarationSuite);\n      if (focusedAncestor) {\n        for (var i = 0; i < focusedRunnables.length; i++) {\n          if (focusedRunnables[i] === focusedAncestor) {\n            focusedRunnables.splice(i, 1);\n            break;\n          }\n        }\n      }\n    }\n\n    var specFactory = function(description, fn, suite, timeout) {\n      totalSpecsDefined++;\n      var spec = new j$.Spec({\n        id: getNextSpecId(),\n        beforeAndAfterFns: beforeAndAfterFns(suite),\n        expectationFactory: expectationFactory,\n        resultCallback: specResultCallback,\n        getSpecName: function(spec) {\n          return getSpecName(spec, suite);\n        },\n        onStart: specStarted,\n        description: description,\n        expectationResultFactory: expectationResultFactory,\n        queueRunnerFactory: queueRunnerFactory,\n        userContext: function() { return suite.clonedSharedUserContext(); },\n        queueableFn: {\n          fn: fn,\n          timeout: function() { return timeout || j$.DEFAULT_TIMEOUT_INTERVAL; }\n        },\n        throwOnExpectationFailure: throwOnExpectationFailure\n      });\n\n      runnableLookupTable[spec.id] = spec;\n\n      if (!self.specFilter(spec)) {\n        spec.disable();\n      }\n\n      return spec;\n\n      function specResultCallback(result) {\n        clearResourcesForRunnable(spec.id);\n        currentSpec = null;\n        reporter.specDone(result);\n      }\n\n      function specStarted(spec) {\n        currentSpec = spec;\n        defaultResourcesForRunnable(spec.id, suite.id);\n        reporter.specStarted(spec.result);\n      }\n    };\n\n    this.it = function(description, fn, timeout) {\n      var spec = specFactory(description, fn, currentDeclarationSuite, timeout);\n      if (currentDeclarationSuite.markedPending) {\n        spec.pend();\n      }\n      currentDeclarationSuite.addChild(spec);\n      return spec;\n    };\n\n    this.xit = function() {\n      var spec = this.it.apply(this, arguments);\n      spec.pend('Temporarily disabled with xit');\n      return spec;\n    };\n\n    this.fit = function(description, fn, timeout){\n      var spec = specFactory(description, fn, currentDeclarationSuite, timeout);\n      currentDeclarationSuite.addChild(spec);\n      focusedRunnables.push(spec.id);\n      unfocusAncestor();\n      return spec;\n    };\n\n    this.expect = function(actual) {\n      if (!currentRunnable()) {\n        throw new Error('\\'expect\\' was used when there was no current spec, this could be because an asynchronous test timed out');\n      }\n\n      return currentRunnable().expect(actual);\n    };\n\n    this.beforeEach = function(beforeEachFunction, timeout) {\n      currentDeclarationSuite.beforeEach({\n        fn: beforeEachFunction,\n        timeout: function() { return timeout || j$.DEFAULT_TIMEOUT_INTERVAL; }\n      });\n    };\n\n    this.beforeAll = function(beforeAllFunction, timeout) {\n      currentDeclarationSuite.beforeAll({\n        fn: beforeAllFunction,\n        timeout: function() { return timeout || j$.DEFAULT_TIMEOUT_INTERVAL; }\n      });\n    };\n\n    this.afterEach = function(afterEachFunction, timeout) {\n      currentDeclarationSuite.afterEach({\n        fn: afterEachFunction,\n        timeout: function() { return timeout || j$.DEFAULT_TIMEOUT_INTERVAL; }\n      });\n    };\n\n    this.afterAll = function(afterAllFunction, timeout) {\n      currentDeclarationSuite.afterAll({\n        fn: afterAllFunction,\n        timeout: function() { return timeout || j$.DEFAULT_TIMEOUT_INTERVAL; }\n      });\n    };\n\n    this.pending = function(message) {\n      var fullMessage = j$.Spec.pendingSpecExceptionMessage;\n      if(message) {\n        fullMessage += message;\n      }\n      throw fullMessage;\n    };\n\n    this.fail = function(error) {\n      var message = 'Failed';\n      if (error) {\n        message += ': ';\n        message += error.message || error;\n      }\n\n      currentRunnable().addExpectationResult(false, {\n        matcherName: '',\n        passed: false,\n        expected: '',\n        actual: '',\n        message: message,\n        error: error && error.message ? error : null\n      });\n    };\n  }\n\n  return Env;\n};\n\ngetJasmineRequireObj().JsApiReporter = function() {\n\n  var noopTimer = {\n    start: function(){},\n    elapsed: function(){ return 0; }\n  };\n\n  function JsApiReporter(options) {\n    var timer = options.timer || noopTimer,\n        status = 'loaded';\n\n    this.started = false;\n    this.finished = false;\n    this.runDetails = {};\n\n    this.jasmineStarted = function() {\n      this.started = true;\n      status = 'started';\n      timer.start();\n    };\n\n    var executionTime;\n\n    this.jasmineDone = function(runDetails) {\n      this.finished = true;\n      this.runDetails = runDetails;\n      executionTime = timer.elapsed();\n      status = 'done';\n    };\n\n    this.status = function() {\n      return status;\n    };\n\n    var suites = [],\n      suites_hash = {};\n\n    this.suiteStarted = function(result) {\n      suites_hash[result.id] = result;\n    };\n\n    this.suiteDone = function(result) {\n      storeSuite(result);\n    };\n\n    this.suiteResults = function(index, length) {\n      return suites.slice(index, index + length);\n    };\n\n    function storeSuite(result) {\n      suites.push(result);\n      suites_hash[result.id] = result;\n    }\n\n    this.suites = function() {\n      return suites_hash;\n    };\n\n    var specs = [];\n\n    this.specDone = function(result) {\n      specs.push(result);\n    };\n\n    this.specResults = function(index, length) {\n      return specs.slice(index, index + length);\n    };\n\n    this.specs = function() {\n      return specs;\n    };\n\n    this.executionTime = function() {\n      return executionTime;\n    };\n\n  }\n\n  return JsApiReporter;\n};\n\ngetJasmineRequireObj().CallTracker = function() {\n\n  function CallTracker() {\n    var calls = [];\n\n    this.track = function(context) {\n      calls.push(context);\n    };\n\n    this.any = function() {\n      return !!calls.length;\n    };\n\n    this.count = function() {\n      return calls.length;\n    };\n\n    this.argsFor = function(index) {\n      var call = calls[index];\n      return call ? call.args : [];\n    };\n\n    this.all = function() {\n      return calls;\n    };\n\n    this.allArgs = function() {\n      var callArgs = [];\n      for(var i = 0; i < calls.length; i++){\n        callArgs.push(calls[i].args);\n      }\n\n      return callArgs;\n    };\n\n    this.first = function() {\n      return calls[0];\n    };\n\n    this.mostRecent = function() {\n      return calls[calls.length - 1];\n    };\n\n    this.reset = function() {\n      calls = [];\n    };\n  }\n\n  return CallTracker;\n};\n\ngetJasmineRequireObj().Clock = function() {\n  function Clock(global, delayedFunctionSchedulerFactory, mockDate) {\n    var self = this,\n      realTimingFunctions = {\n        setTimeout: global.setTimeout,\n        clearTimeout: global.clearTimeout,\n        setInterval: global.setInterval,\n        clearInterval: global.clearInterval\n      },\n      fakeTimingFunctions = {\n        setTimeout: setTimeout,\n        clearTimeout: clearTimeout,\n        setInterval: setInterval,\n        clearInterval: clearInterval\n      },\n      installed = false,\n      delayedFunctionScheduler,\n      timer;\n\n\n    self.install = function() {\n      if(!originalTimingFunctionsIntact()) {\n        throw new Error('Jasmine Clock was unable to install over custom global timer functions. Is the clock already installed?');\n      }\n      replace(global, fakeTimingFunctions);\n      timer = fakeTimingFunctions;\n      delayedFunctionScheduler = delayedFunctionSchedulerFactory();\n      installed = true;\n\n      return self;\n    };\n\n    self.uninstall = function() {\n      delayedFunctionScheduler = null;\n      mockDate.uninstall();\n      replace(global, realTimingFunctions);\n\n      timer = realTimingFunctions;\n      installed = false;\n    };\n\n    self.withMock = function(closure) {\n      this.install();\n      try {\n        closure();\n      } finally {\n        this.uninstall();\n      }\n    };\n\n    self.mockDate = function(initialDate) {\n      mockDate.install(initialDate);\n    };\n\n    self.setTimeout = function(fn, delay, params) {\n      if (legacyIE()) {\n        if (arguments.length > 2) {\n          throw new Error('IE < 9 cannot support extra params to setTimeout without a polyfill');\n        }\n        return timer.setTimeout(fn, delay);\n      }\n      return Function.prototype.apply.apply(timer.setTimeout, [global, arguments]);\n    };\n\n    self.setInterval = function(fn, delay, params) {\n      if (legacyIE()) {\n        if (arguments.length > 2) {\n          throw new Error('IE < 9 cannot support extra params to setInterval without a polyfill');\n        }\n        return timer.setInterval(fn, delay);\n      }\n      return Function.prototype.apply.apply(timer.setInterval, [global, arguments]);\n    };\n\n    self.clearTimeout = function(id) {\n      return Function.prototype.call.apply(timer.clearTimeout, [global, id]);\n    };\n\n    self.clearInterval = function(id) {\n      return Function.prototype.call.apply(timer.clearInterval, [global, id]);\n    };\n\n    self.tick = function(millis) {\n      if (installed) {\n        mockDate.tick(millis);\n        delayedFunctionScheduler.tick(millis);\n      } else {\n        throw new Error('Mock clock is not installed, use jasmine.clock().install()');\n      }\n    };\n\n    return self;\n\n    function originalTimingFunctionsIntact() {\n      return global.setTimeout === realTimingFunctions.setTimeout &&\n        global.clearTimeout === realTimingFunctions.clearTimeout &&\n        global.setInterval === realTimingFunctions.setInterval &&\n        global.clearInterval === realTimingFunctions.clearInterval;\n    }\n\n    function legacyIE() {\n      //if these methods are polyfilled, apply will be present\n      return !(realTimingFunctions.setTimeout || realTimingFunctions.setInterval).apply;\n    }\n\n    function replace(dest, source) {\n      for (var prop in source) {\n        dest[prop] = source[prop];\n      }\n    }\n\n    function setTimeout(fn, delay) {\n      return delayedFunctionScheduler.scheduleFunction(fn, delay, argSlice(arguments, 2));\n    }\n\n    function clearTimeout(id) {\n      return delayedFunctionScheduler.removeFunctionWithId(id);\n    }\n\n    function setInterval(fn, interval) {\n      return delayedFunctionScheduler.scheduleFunction(fn, interval, argSlice(arguments, 2), true);\n    }\n\n    function clearInterval(id) {\n      return delayedFunctionScheduler.removeFunctionWithId(id);\n    }\n\n    function argSlice(argsObj, n) {\n      return Array.prototype.slice.call(argsObj, n);\n    }\n  }\n\n  return Clock;\n};\n\ngetJasmineRequireObj().DelayedFunctionScheduler = function() {\n  function DelayedFunctionScheduler() {\n    var self = this;\n    var scheduledLookup = [];\n    var scheduledFunctions = {};\n    var currentTime = 0;\n    var delayedFnCount = 0;\n\n    self.tick = function(millis) {\n      millis = millis || 0;\n      var endTime = currentTime + millis;\n\n      runScheduledFunctions(endTime);\n      currentTime = endTime;\n    };\n\n    self.scheduleFunction = function(funcToCall, millis, params, recurring, timeoutKey, runAtMillis) {\n      var f;\n      if (typeof(funcToCall) === 'string') {\n        /* jshint evil: true */\n        f = function() { return eval(funcToCall); };\n        /* jshint evil: false */\n      } else {\n        f = funcToCall;\n      }\n\n      millis = millis || 0;\n      timeoutKey = timeoutKey || ++delayedFnCount;\n      runAtMillis = runAtMillis || (currentTime + millis);\n\n      var funcToSchedule = {\n        runAtMillis: runAtMillis,\n        funcToCall: f,\n        recurring: recurring,\n        params: params,\n        timeoutKey: timeoutKey,\n        millis: millis\n      };\n\n      if (runAtMillis in scheduledFunctions) {\n        scheduledFunctions[runAtMillis].push(funcToSchedule);\n      } else {\n        scheduledFunctions[runAtMillis] = [funcToSchedule];\n        scheduledLookup.push(runAtMillis);\n        scheduledLookup.sort(function (a, b) {\n          return a - b;\n        });\n      }\n\n      return timeoutKey;\n    };\n\n    self.removeFunctionWithId = function(timeoutKey) {\n      for (var runAtMillis in scheduledFunctions) {\n        var funcs = scheduledFunctions[runAtMillis];\n        var i = indexOfFirstToPass(funcs, function (func) {\n          return func.timeoutKey === timeoutKey;\n        });\n\n        if (i > -1) {\n          if (funcs.length === 1) {\n            delete scheduledFunctions[runAtMillis];\n            deleteFromLookup(runAtMillis);\n          } else {\n            funcs.splice(i, 1);\n          }\n\n          // intervals get rescheduled when executed, so there's never more\n          // than a single scheduled function with a given timeoutKey\n          break;\n        }\n      }\n    };\n\n    return self;\n\n    function indexOfFirstToPass(array, testFn) {\n      var index = -1;\n\n      for (var i = 0; i < array.length; ++i) {\n        if (testFn(array[i])) {\n          index = i;\n          break;\n        }\n      }\n\n      return index;\n    }\n\n    function deleteFromLookup(key) {\n      var value = Number(key);\n      var i = indexOfFirstToPass(scheduledLookup, function (millis) {\n        return millis === value;\n      });\n\n      if (i > -1) {\n        scheduledLookup.splice(i, 1);\n      }\n    }\n\n    function reschedule(scheduledFn) {\n      self.scheduleFunction(scheduledFn.funcToCall,\n        scheduledFn.millis,\n        scheduledFn.params,\n        true,\n        scheduledFn.timeoutKey,\n        scheduledFn.runAtMillis + scheduledFn.millis);\n    }\n\n    function forEachFunction(funcsToRun, callback) {\n      for (var i = 0; i < funcsToRun.length; ++i) {\n        callback(funcsToRun[i]);\n      }\n    }\n\n    function runScheduledFunctions(endTime) {\n      if (scheduledLookup.length === 0 || scheduledLookup[0] > endTime) {\n        return;\n      }\n\n      do {\n        currentTime = scheduledLookup.shift();\n\n        var funcsToRun = scheduledFunctions[currentTime];\n        delete scheduledFunctions[currentTime];\n\n        forEachFunction(funcsToRun, function(funcToRun) {\n          if (funcToRun.recurring) {\n            reschedule(funcToRun);\n          }\n        });\n\n        forEachFunction(funcsToRun, function(funcToRun) {\n          funcToRun.funcToCall.apply(null, funcToRun.params || []);\n        });\n      } while (scheduledLookup.length > 0 &&\n              // checking first if we're out of time prevents setTimeout(0)\n              // scheduled in a funcToRun from forcing an extra iteration\n                 currentTime !== endTime  &&\n                 scheduledLookup[0] <= endTime);\n    }\n  }\n\n  return DelayedFunctionScheduler;\n};\n\ngetJasmineRequireObj().ExceptionFormatter = function() {\n  function ExceptionFormatter() {\n    this.message = function(error) {\n      var message = '';\n\n      if (error.name && error.message) {\n        message += error.name + ': ' + error.message;\n      } else {\n        message += error.toString() + ' thrown';\n      }\n\n      if (error.fileName || error.sourceURL) {\n        message += ' in ' + (error.fileName || error.sourceURL);\n      }\n\n      if (error.line || error.lineNumber) {\n        message += ' (line ' + (error.line || error.lineNumber) + ')';\n      }\n\n      return message;\n    };\n\n    this.stack = function(error) {\n      return error ? error.stack : null;\n    };\n  }\n\n  return ExceptionFormatter;\n};\n\ngetJasmineRequireObj().Expectation = function() {\n\n  function Expectation(options) {\n    this.util = options.util || { buildFailureMessage: function() {} };\n    this.customEqualityTesters = options.customEqualityTesters || [];\n    this.actual = options.actual;\n    this.addExpectationResult = options.addExpectationResult || function(){};\n    this.isNot = options.isNot;\n\n    var customMatchers = options.customMatchers || {};\n    for (var matcherName in customMatchers) {\n      this[matcherName] = Expectation.prototype.wrapCompare(matcherName, customMatchers[matcherName]);\n    }\n  }\n\n  Expectation.prototype.wrapCompare = function(name, matcherFactory) {\n    return function() {\n      var args = Array.prototype.slice.call(arguments, 0),\n        expected = args.slice(0),\n        message = '';\n\n      args.unshift(this.actual);\n\n      var matcher = matcherFactory(this.util, this.customEqualityTesters),\n          matcherCompare = matcher.compare;\n\n      function defaultNegativeCompare() {\n        var result = matcher.compare.apply(null, args);\n        result.pass = !result.pass;\n        return result;\n      }\n\n      if (this.isNot) {\n        matcherCompare = matcher.negativeCompare || defaultNegativeCompare;\n      }\n\n      var result = matcherCompare.apply(null, args);\n\n      if (!result.pass) {\n        if (!result.message) {\n          args.unshift(this.isNot);\n          args.unshift(name);\n          message = this.util.buildFailureMessage.apply(null, args);\n        } else {\n          if (Object.prototype.toString.apply(result.message) === '[object Function]') {\n            message = result.message();\n          } else {\n            message = result.message;\n          }\n        }\n      }\n\n      if (expected.length == 1) {\n        expected = expected[0];\n      }\n\n      // TODO: how many of these params are needed?\n      this.addExpectationResult(\n        result.pass,\n        {\n          matcherName: name,\n          passed: result.pass,\n          message: message,\n          actual: this.actual,\n          expected: expected // TODO: this may need to be arrayified/sliced\n        }\n      );\n    };\n  };\n\n  Expectation.addCoreMatchers = function(matchers) {\n    var prototype = Expectation.prototype;\n    for (var matcherName in matchers) {\n      var matcher = matchers[matcherName];\n      prototype[matcherName] = prototype.wrapCompare(matcherName, matcher);\n    }\n  };\n\n  Expectation.Factory = function(options) {\n    options = options || {};\n\n    var expect = new Expectation(options);\n\n    // TODO: this would be nice as its own Object - NegativeExpectation\n    // TODO: copy instead of mutate options\n    options.isNot = true;\n    expect.not = new Expectation(options);\n\n    return expect;\n  };\n\n  return Expectation;\n};\n\n//TODO: expectation result may make more sense as a presentation of an expectation.\ngetJasmineRequireObj().buildExpectationResult = function() {\n  function buildExpectationResult(options) {\n    var messageFormatter = options.messageFormatter || function() {},\n      stackFormatter = options.stackFormatter || function() {};\n\n    var result = {\n      matcherName: options.matcherName,\n      message: message(),\n      stack: stack(),\n      passed: options.passed\n    };\n\n    if(!result.passed) {\n      result.expected = options.expected;\n      result.actual = options.actual;\n    }\n\n    return result;\n\n    function message() {\n      if (options.passed) {\n        return 'Passed.';\n      } else if (options.message) {\n        return options.message;\n      } else if (options.error) {\n        return messageFormatter(options.error);\n      }\n      return '';\n    }\n\n    function stack() {\n      if (options.passed) {\n        return '';\n      }\n\n      var error = options.error;\n      if (!error) {\n        try {\n          throw new Error(message());\n        } catch (e) {\n          error = e;\n        }\n      }\n      return stackFormatter(error);\n    }\n  }\n\n  return buildExpectationResult;\n};\n\ngetJasmineRequireObj().MockDate = function() {\n  function MockDate(global) {\n    var self = this;\n    var currentTime = 0;\n\n    if (!global || !global.Date) {\n      self.install = function() {};\n      self.tick = function() {};\n      self.uninstall = function() {};\n      return self;\n    }\n\n    var GlobalDate = global.Date;\n\n    self.install = function(mockDate) {\n      if (mockDate instanceof GlobalDate) {\n        currentTime = mockDate.getTime();\n      } else {\n        currentTime = new GlobalDate().getTime();\n      }\n\n      global.Date = FakeDate;\n    };\n\n    self.tick = function(millis) {\n      millis = millis || 0;\n      currentTime = currentTime + millis;\n    };\n\n    self.uninstall = function() {\n      currentTime = 0;\n      global.Date = GlobalDate;\n    };\n\n    createDateProperties();\n\n    return self;\n\n    function FakeDate() {\n      switch(arguments.length) {\n        case 0:\n          return new GlobalDate(currentTime);\n        case 1:\n          return new GlobalDate(arguments[0]);\n        case 2:\n          return new GlobalDate(arguments[0], arguments[1]);\n        case 3:\n          return new GlobalDate(arguments[0], arguments[1], arguments[2]);\n        case 4:\n          return new GlobalDate(arguments[0], arguments[1], arguments[2], arguments[3]);\n        case 5:\n          return new GlobalDate(arguments[0], arguments[1], arguments[2], arguments[3],\n                                arguments[4]);\n        case 6:\n          return new GlobalDate(arguments[0], arguments[1], arguments[2], arguments[3],\n                                arguments[4], arguments[5]);\n        default:\n          return new GlobalDate(arguments[0], arguments[1], arguments[2], arguments[3],\n                                arguments[4], arguments[5], arguments[6]);\n      }\n    }\n\n    function createDateProperties() {\n      FakeDate.prototype = GlobalDate.prototype;\n\n      FakeDate.now = function() {\n        if (GlobalDate.now) {\n          return currentTime;\n        } else {\n          throw new Error('Browser does not support Date.now()');\n        }\n      };\n\n      FakeDate.toSource = GlobalDate.toSource;\n      FakeDate.toString = GlobalDate.toString;\n      FakeDate.parse = GlobalDate.parse;\n      FakeDate.UTC = GlobalDate.UTC;\n    }\n\t}\n\n  return MockDate;\n};\n\ngetJasmineRequireObj().pp = function(j$) {\n\n  function PrettyPrinter() {\n    this.ppNestLevel_ = 0;\n    this.seen = [];\n  }\n\n  PrettyPrinter.prototype.format = function(value) {\n    this.ppNestLevel_++;\n    try {\n      if (j$.util.isUndefined(value)) {\n        this.emitScalar('undefined');\n      } else if (value === null) {\n        this.emitScalar('null');\n      } else if (value === 0 && 1/value === -Infinity) {\n        this.emitScalar('-0');\n      } else if (value === j$.getGlobal()) {\n        this.emitScalar('<global>');\n      } else if (value.jasmineToString) {\n        this.emitScalar(value.jasmineToString());\n      } else if (typeof value === 'string') {\n        this.emitString(value);\n      } else if (j$.isSpy(value)) {\n        this.emitScalar('spy on ' + value.and.identity());\n      } else if (value instanceof RegExp) {\n        this.emitScalar(value.toString());\n      } else if (typeof value === 'function') {\n        this.emitScalar('Function');\n      } else if (typeof value.nodeType === 'number') {\n        this.emitScalar('HTMLNode');\n      } else if (value instanceof Date) {\n        this.emitScalar('Date(' + value + ')');\n      } else if (value.toString && typeof value === 'object' && !(value instanceof Array) && value.toString !== Object.prototype.toString) {\n        this.emitScalar(value.toString());\n      } else if (j$.util.arrayContains(this.seen, value)) {\n        this.emitScalar('<circular reference: ' + (j$.isArray_(value) ? 'Array' : 'Object') + '>');\n      } else if (j$.isArray_(value) || j$.isA_('Object', value)) {\n        this.seen.push(value);\n        if (j$.isArray_(value)) {\n          this.emitArray(value);\n        } else {\n          this.emitObject(value);\n        }\n        this.seen.pop();\n      } else {\n        this.emitScalar(value.toString());\n      }\n    } finally {\n      this.ppNestLevel_--;\n    }\n  };\n\n  PrettyPrinter.prototype.iterateObject = function(obj, fn) {\n    for (var property in obj) {\n      if (!Object.prototype.hasOwnProperty.call(obj, property)) { continue; }\n      fn(property, obj.__lookupGetter__ ? (!j$.util.isUndefined(obj.__lookupGetter__(property)) &&\n          obj.__lookupGetter__(property) !== null) : false);\n    }\n  };\n\n  PrettyPrinter.prototype.emitArray = j$.unimplementedMethod_;\n  PrettyPrinter.prototype.emitObject = j$.unimplementedMethod_;\n  PrettyPrinter.prototype.emitScalar = j$.unimplementedMethod_;\n  PrettyPrinter.prototype.emitString = j$.unimplementedMethod_;\n\n  function StringPrettyPrinter() {\n    PrettyPrinter.call(this);\n\n    this.string = '';\n  }\n\n  j$.util.inherit(StringPrettyPrinter, PrettyPrinter);\n\n  StringPrettyPrinter.prototype.emitScalar = function(value) {\n    this.append(value);\n  };\n\n  StringPrettyPrinter.prototype.emitString = function(value) {\n    this.append('\\'' + value + '\\'');\n  };\n\n  StringPrettyPrinter.prototype.emitArray = function(array) {\n    if (this.ppNestLevel_ > j$.MAX_PRETTY_PRINT_DEPTH) {\n      this.append('Array');\n      return;\n    }\n    var length = Math.min(array.length, j$.MAX_PRETTY_PRINT_ARRAY_LENGTH);\n    this.append('[ ');\n    for (var i = 0; i < length; i++) {\n      if (i > 0) {\n        this.append(', ');\n      }\n      this.format(array[i]);\n    }\n    if(array.length > length){\n      this.append(', ...');\n    }\n\n    var self = this;\n    var first = array.length === 0;\n    this.iterateObject(array, function(property, isGetter) {\n      if (property.match(/^\\d+$/)) {\n        return;\n      }\n\n      if (first) {\n        first = false;\n      } else {\n        self.append(', ');\n      }\n\n      self.formatProperty(array, property, isGetter);\n    });\n\n    this.append(' ]');\n  };\n\n  StringPrettyPrinter.prototype.emitObject = function(obj) {\n    var constructorName = obj.constructor ? j$.fnNameFor(obj.constructor) : 'null';\n    this.append(constructorName);\n\n    if (this.ppNestLevel_ > j$.MAX_PRETTY_PRINT_DEPTH) {\n      return;\n    }\n\n    var self = this;\n    this.append('({ ');\n    var first = true;\n\n    this.iterateObject(obj, function(property, isGetter) {\n      if (first) {\n        first = false;\n      } else {\n        self.append(', ');\n      }\n\n      self.formatProperty(obj, property, isGetter);\n    });\n\n    this.append(' })');\n  };\n\n  StringPrettyPrinter.prototype.formatProperty = function(obj, property, isGetter) {\n      this.append(property);\n      this.append(': ');\n      if (isGetter) {\n        this.append('<getter>');\n      } else {\n        this.format(obj[property]);\n      }\n  };\n\n  StringPrettyPrinter.prototype.append = function(value) {\n    this.string += value;\n  };\n\n  return function(value) {\n    var stringPrettyPrinter = new StringPrettyPrinter();\n    stringPrettyPrinter.format(value);\n    return stringPrettyPrinter.string;\n  };\n};\n\ngetJasmineRequireObj().QueueRunner = function(j$) {\n\n  function once(fn) {\n    var called = false;\n    return function() {\n      if (!called) {\n        called = true;\n        fn();\n      }\n    };\n  }\n\n  function QueueRunner(attrs) {\n    this.queueableFns = attrs.queueableFns || [];\n    this.onComplete = attrs.onComplete || function() {};\n    this.clearStack = attrs.clearStack || function(fn) {fn();};\n    this.onException = attrs.onException || function() {};\n    this.catchException = attrs.catchException || function() { return true; };\n    this.userContext = attrs.userContext || {};\n    this.timeout = attrs.timeout || {setTimeout: setTimeout, clearTimeout: clearTimeout};\n    this.fail = attrs.fail || function() {};\n  }\n\n  QueueRunner.prototype.execute = function() {\n    this.run(this.queueableFns, 0);\n  };\n\n  QueueRunner.prototype.run = function(queueableFns, recursiveIndex) {\n    var length = queueableFns.length,\n      self = this,\n      iterativeIndex;\n\n\n    for(iterativeIndex = recursiveIndex; iterativeIndex < length; iterativeIndex++) {\n      var queueableFn = queueableFns[iterativeIndex];\n      if (queueableFn.fn.length > 0) {\n        attemptAsync(queueableFn);\n        return;\n      } else {\n        attemptSync(queueableFn);\n      }\n    }\n\n    var runnerDone = iterativeIndex >= length;\n\n    if (runnerDone) {\n      this.clearStack(this.onComplete);\n    }\n\n    function attemptSync(queueableFn) {\n      try {\n        queueableFn.fn.call(self.userContext);\n      } catch (e) {\n        handleException(e, queueableFn);\n      }\n    }\n\n    function attemptAsync(queueableFn) {\n      var clearTimeout = function () {\n          Function.prototype.apply.apply(self.timeout.clearTimeout, [j$.getGlobal(), [timeoutId]]);\n        },\n        next = once(function () {\n          clearTimeout(timeoutId);\n          self.run(queueableFns, iterativeIndex + 1);\n        }),\n        timeoutId;\n\n      next.fail = function() {\n        self.fail.apply(null, arguments);\n        next();\n      };\n\n      if (queueableFn.timeout) {\n        timeoutId = Function.prototype.apply.apply(self.timeout.setTimeout, [j$.getGlobal(), [function() {\n          var error = new Error('Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.');\n          onException(error);\n          next();\n        }, queueableFn.timeout()]]);\n      }\n\n      try {\n        queueableFn.fn.call(self.userContext, next);\n      } catch (e) {\n        handleException(e, queueableFn);\n        next();\n      }\n    }\n\n    function onException(e) {\n      self.onException(e);\n    }\n\n    function handleException(e, queueableFn) {\n      onException(e);\n      if (!self.catchException(e)) {\n        //TODO: set a var when we catch an exception and\n        //use a finally block to close the loop in a nice way..\n        throw e;\n      }\n    }\n  };\n\n  return QueueRunner;\n};\n\ngetJasmineRequireObj().ReportDispatcher = function() {\n  function ReportDispatcher(methods) {\n\n    var dispatchedMethods = methods || [];\n\n    for (var i = 0; i < dispatchedMethods.length; i++) {\n      var method = dispatchedMethods[i];\n      this[method] = (function(m) {\n        return function() {\n          dispatch(m, arguments);\n        };\n      }(method));\n    }\n\n    var reporters = [];\n\n    this.addReporter = function(reporter) {\n      reporters.push(reporter);\n    };\n\n    return this;\n\n    function dispatch(method, args) {\n      for (var i = 0; i < reporters.length; i++) {\n        var reporter = reporters[i];\n        if (reporter[method]) {\n          reporter[method].apply(reporter, args);\n        }\n      }\n    }\n  }\n\n  return ReportDispatcher;\n};\n\n\ngetJasmineRequireObj().SpyRegistry = function(j$) {\n\n  function SpyRegistry(options) {\n    options = options || {};\n    var currentSpies = options.currentSpies || function() { return []; };\n\n    this.spyOn = function(obj, methodName) {\n      if (j$.util.isUndefined(obj)) {\n        throw new Error('spyOn could not find an object to spy upon for ' + methodName + '()');\n      }\n\n      if (j$.util.isUndefined(methodName)) {\n        throw new Error('No method name supplied');\n      }\n\n      if (j$.util.isUndefined(obj[methodName])) {\n        throw new Error(methodName + '() method does not exist');\n      }\n\n      if (obj[methodName] && j$.isSpy(obj[methodName])) {\n        //TODO?: should this return the current spy? Downside: may cause user confusion about spy state\n        throw new Error(methodName + ' has already been spied upon');\n      }\n\n      var descriptor;\n      try {\n        descriptor = Object.getOwnPropertyDescriptor(obj, methodName);\n      } catch(e) {\n        // IE 8 doesn't support `definePropery` on non-DOM nodes\n      }\n\n      if (descriptor && !(descriptor.writable || descriptor.set)) {\n        throw new Error(methodName + ' is not declared writable or has no setter');\n      }\n\n      var spy = j$.createSpy(methodName, obj[methodName]);\n\n      currentSpies().push({\n        spy: spy,\n        baseObj: obj,\n        methodName: methodName,\n        originalValue: obj[methodName]\n      });\n\n      obj[methodName] = spy;\n\n      return spy;\n    };\n\n    this.clearSpies = function() {\n      var spies = currentSpies();\n      for (var i = 0; i < spies.length; i++) {\n        var spyEntry = spies[i];\n        spyEntry.baseObj[spyEntry.methodName] = spyEntry.originalValue;\n      }\n    };\n  }\n\n  return SpyRegistry;\n};\n\ngetJasmineRequireObj().SpyStrategy = function() {\n\n  function SpyStrategy(options) {\n    options = options || {};\n\n    var identity = options.name || 'unknown',\n        originalFn = options.fn || function() {},\n        getSpy = options.getSpy || function() {},\n        plan = function() {};\n\n    this.identity = function() {\n      return identity;\n    };\n\n    this.exec = function() {\n      return plan.apply(this, arguments);\n    };\n\n    this.callThrough = function() {\n      plan = originalFn;\n      return getSpy();\n    };\n\n    this.returnValue = function(value) {\n      plan = function() {\n        return value;\n      };\n      return getSpy();\n    };\n\n    this.returnValues = function() {\n      var values = Array.prototype.slice.call(arguments);\n      plan = function () {\n        return values.shift();\n      };\n      return getSpy();\n    };\n\n    this.throwError = function(something) {\n      var error = (something instanceof Error) ? something : new Error(something);\n      plan = function() {\n        throw error;\n      };\n      return getSpy();\n    };\n\n    this.callFake = function(fn) {\n      plan = fn;\n      return getSpy();\n    };\n\n    this.stub = function(fn) {\n      plan = function() {};\n      return getSpy();\n    };\n  }\n\n  return SpyStrategy;\n};\n\ngetJasmineRequireObj().Suite = function(j$) {\n  function Suite(attrs) {\n    this.env = attrs.env;\n    this.id = attrs.id;\n    this.parentSuite = attrs.parentSuite;\n    this.description = attrs.description;\n    this.expectationFactory = attrs.expectationFactory;\n    this.expectationResultFactory = attrs.expectationResultFactory;\n    this.throwOnExpectationFailure = !!attrs.throwOnExpectationFailure;\n\n    this.beforeFns = [];\n    this.afterFns = [];\n    this.beforeAllFns = [];\n    this.afterAllFns = [];\n    this.disabled = false;\n\n    this.children = [];\n\n    this.result = {\n      id: this.id,\n      description: this.description,\n      fullName: this.getFullName(),\n      failedExpectations: []\n    };\n  }\n\n  Suite.prototype.expect = function(actual) {\n    return this.expectationFactory(actual, this);\n  };\n\n  Suite.prototype.getFullName = function() {\n    var fullName = this.description;\n    for (var parentSuite = this.parentSuite; parentSuite; parentSuite = parentSuite.parentSuite) {\n      if (parentSuite.parentSuite) {\n        fullName = parentSuite.description + ' ' + fullName;\n      }\n    }\n    return fullName;\n  };\n\n  Suite.prototype.disable = function() {\n    this.disabled = true;\n  };\n\n  Suite.prototype.pend = function(message) {\n    this.markedPending = true;\n  };\n\n  Suite.prototype.beforeEach = function(fn) {\n    this.beforeFns.unshift(fn);\n  };\n\n  Suite.prototype.beforeAll = function(fn) {\n    this.beforeAllFns.push(fn);\n  };\n\n  Suite.prototype.afterEach = function(fn) {\n    this.afterFns.unshift(fn);\n  };\n\n  Suite.prototype.afterAll = function(fn) {\n    this.afterAllFns.push(fn);\n  };\n\n  Suite.prototype.addChild = function(child) {\n    this.children.push(child);\n  };\n\n  Suite.prototype.status = function() {\n    if (this.disabled) {\n      return 'disabled';\n    }\n\n    if (this.markedPending) {\n      return 'pending';\n    }\n\n    if (this.result.failedExpectations.length > 0) {\n      return 'failed';\n    } else {\n      return 'finished';\n    }\n  };\n\n  Suite.prototype.isExecutable = function() {\n    return !this.disabled;\n  };\n\n  Suite.prototype.canBeReentered = function() {\n    return this.beforeAllFns.length === 0 && this.afterAllFns.length === 0;\n  };\n\n  Suite.prototype.getResult = function() {\n    this.result.status = this.status();\n    return this.result;\n  };\n\n  Suite.prototype.sharedUserContext = function() {\n    if (!this.sharedContext) {\n      this.sharedContext = this.parentSuite ? clone(this.parentSuite.sharedUserContext()) : {};\n    }\n\n    return this.sharedContext;\n  };\n\n  Suite.prototype.clonedSharedUserContext = function() {\n    return clone(this.sharedUserContext());\n  };\n\n  Suite.prototype.onException = function() {\n    if (arguments[0] instanceof j$.errors.ExpectationFailed) {\n      return;\n    }\n\n    if(isAfterAll(this.children)) {\n      var data = {\n        matcherName: '',\n        passed: false,\n        expected: '',\n        actual: '',\n        error: arguments[0]\n      };\n      this.result.failedExpectations.push(this.expectationResultFactory(data));\n    } else {\n      for (var i = 0; i < this.children.length; i++) {\n        var child = this.children[i];\n        child.onException.apply(child, arguments);\n      }\n    }\n  };\n\n  Suite.prototype.addExpectationResult = function () {\n    if(isAfterAll(this.children) && isFailure(arguments)){\n      var data = arguments[1];\n      this.result.failedExpectations.push(this.expectationResultFactory(data));\n      if(this.throwOnExpectationFailure) {\n        throw new j$.errors.ExpectationFailed();\n      }\n    } else {\n      for (var i = 0; i < this.children.length; i++) {\n        var child = this.children[i];\n        try {\n          child.addExpectationResult.apply(child, arguments);\n        } catch(e) {\n          // keep going\n        }\n      }\n    }\n  };\n\n  function isAfterAll(children) {\n    return children && children[0].result.status;\n  }\n\n  function isFailure(args) {\n    return !args[0];\n  }\n\n  function clone(obj) {\n    var clonedObj = {};\n    for (var prop in obj) {\n      if (obj.hasOwnProperty(prop)) {\n        clonedObj[prop] = obj[prop];\n      }\n    }\n\n    return clonedObj;\n  }\n\n  return Suite;\n};\n\nif (typeof window == void 0 && typeof exports == 'object') {\n  exports.Suite = jasmineRequire.Suite;\n}\n\ngetJasmineRequireObj().Timer = function() {\n  var defaultNow = (function(Date) {\n    return function() { return new Date().getTime(); };\n  })(Date);\n\n  function Timer(options) {\n    options = options || {};\n\n    var now = options.now || defaultNow,\n      startTime;\n\n    this.start = function() {\n      startTime = now();\n    };\n\n    this.elapsed = function() {\n      return now() - startTime;\n    };\n  }\n\n  return Timer;\n};\n\ngetJasmineRequireObj().TreeProcessor = function() {\n  function TreeProcessor(attrs) {\n    var tree = attrs.tree,\n        runnableIds = attrs.runnableIds,\n        queueRunnerFactory = attrs.queueRunnerFactory,\n        nodeStart = attrs.nodeStart || function() {},\n        nodeComplete = attrs.nodeComplete || function() {},\n        orderChildren = attrs.orderChildren || function(node) { return node.children; },\n        stats = { valid: true },\n        processed = false,\n        defaultMin = Infinity,\n        defaultMax = 1 - Infinity;\n\n    this.processTree = function() {\n      processNode(tree, false);\n      processed = true;\n      return stats;\n    };\n\n    this.execute = function(done) {\n      if (!processed) {\n        this.processTree();\n      }\n\n      if (!stats.valid) {\n        throw 'invalid order';\n      }\n\n      var childFns = wrapChildren(tree, 0);\n\n      queueRunnerFactory({\n        queueableFns: childFns,\n        userContext: tree.sharedUserContext(),\n        onException: function() {\n          tree.onException.apply(tree, arguments);\n        },\n        onComplete: done\n      });\n    };\n\n    function runnableIndex(id) {\n      for (var i = 0; i < runnableIds.length; i++) {\n        if (runnableIds[i] === id) {\n          return i;\n        }\n      }\n    }\n\n    function processNode(node, parentEnabled) {\n      var executableIndex = runnableIndex(node.id);\n\n      if (executableIndex !== undefined) {\n        parentEnabled = true;\n      }\n\n      parentEnabled = parentEnabled && node.isExecutable();\n\n      if (!node.children) {\n        stats[node.id] = {\n          executable: parentEnabled && node.isExecutable(),\n          segments: [{\n            index: 0,\n            owner: node,\n            nodes: [node],\n            min: startingMin(executableIndex),\n            max: startingMax(executableIndex)\n          }]\n        };\n      } else {\n        var hasExecutableChild = false;\n\n        var orderedChildren = orderChildren(node);\n\n        for (var i = 0; i < orderedChildren.length; i++) {\n          var child = orderedChildren[i];\n\n          processNode(child, parentEnabled);\n\n          if (!stats.valid) {\n            return;\n          }\n\n          var childStats = stats[child.id];\n\n          hasExecutableChild = hasExecutableChild || childStats.executable;\n        }\n\n        stats[node.id] = {\n          executable: hasExecutableChild\n        };\n\n        segmentChildren(node, orderedChildren, stats[node.id], executableIndex);\n\n        if (!node.canBeReentered() && stats[node.id].segments.length > 1) {\n          stats = { valid: false };\n        }\n      }\n    }\n\n    function startingMin(executableIndex) {\n      return executableIndex === undefined ? defaultMin : executableIndex;\n    }\n\n    function startingMax(executableIndex) {\n      return executableIndex === undefined ? defaultMax : executableIndex;\n    }\n\n    function segmentChildren(node, orderedChildren, nodeStats, executableIndex) {\n      var currentSegment = { index: 0, owner: node, nodes: [], min: startingMin(executableIndex), max: startingMax(executableIndex) },\n          result = [currentSegment],\n          lastMax = defaultMax,\n          orderedChildSegments = orderChildSegments(orderedChildren);\n\n      function isSegmentBoundary(minIndex) {\n        return lastMax !== defaultMax && minIndex !== defaultMin && lastMax < minIndex - 1;\n      }\n\n      for (var i = 0; i < orderedChildSegments.length; i++) {\n        var childSegment = orderedChildSegments[i],\n          maxIndex = childSegment.max,\n          minIndex = childSegment.min;\n\n        if (isSegmentBoundary(minIndex)) {\n          currentSegment = {index: result.length, owner: node, nodes: [], min: defaultMin, max: defaultMax};\n          result.push(currentSegment);\n        }\n\n        currentSegment.nodes.push(childSegment);\n        currentSegment.min = Math.min(currentSegment.min, minIndex);\n        currentSegment.max = Math.max(currentSegment.max, maxIndex);\n        lastMax = maxIndex;\n      }\n\n      nodeStats.segments = result;\n    }\n\n    function orderChildSegments(children) {\n      var specifiedOrder = [],\n          unspecifiedOrder = [];\n\n      for (var i = 0; i < children.length; i++) {\n        var child = children[i],\n            segments = stats[child.id].segments;\n\n        for (var j = 0; j < segments.length; j++) {\n          var seg = segments[j];\n\n          if (seg.min === defaultMin) {\n            unspecifiedOrder.push(seg);\n          } else {\n            specifiedOrder.push(seg);\n          }\n        }\n      }\n\n      specifiedOrder.sort(function(a, b) {\n        return a.min - b.min;\n      });\n\n      return specifiedOrder.concat(unspecifiedOrder);\n    }\n\n    function executeNode(node, segmentNumber) {\n      if (node.children) {\n        return {\n          fn: function(done) {\n            nodeStart(node);\n\n            queueRunnerFactory({\n              onComplete: function() {\n                nodeComplete(node, node.getResult());\n                done();\n              },\n              queueableFns: wrapChildren(node, segmentNumber),\n              userContext: node.sharedUserContext(),\n              onException: function() {\n                node.onException.apply(node, arguments);\n              }\n            });\n          }\n        };\n      } else {\n        return {\n          fn: function(done) { node.execute(done, stats[node.id].executable); }\n        };\n      }\n    }\n\n    function wrapChildren(node, segmentNumber) {\n      var result = [],\n          segmentChildren = stats[node.id].segments[segmentNumber].nodes;\n\n      for (var i = 0; i < segmentChildren.length; i++) {\n        result.push(executeNode(segmentChildren[i].owner, segmentChildren[i].index));\n      }\n\n      if (!stats[node.id].executable) {\n        return result;\n      }\n\n      return node.beforeAllFns.concat(result).concat(node.afterAllFns);\n    }\n  }\n\n  return TreeProcessor;\n};\n\ngetJasmineRequireObj().Any = function(j$) {\n\n  function Any(expectedObject) {\n    if (typeof expectedObject === 'undefined') {\n      throw new TypeError(\n        'jasmine.any() expects to be passed a constructor function. ' +\n        'Please pass one or use jasmine.anything() to match any object.'\n      );\n    }\n    this.expectedObject = expectedObject;\n  }\n\n  Any.prototype.asymmetricMatch = function(other) {\n    if (this.expectedObject == String) {\n      return typeof other == 'string' || other instanceof String;\n    }\n\n    if (this.expectedObject == Number) {\n      return typeof other == 'number' || other instanceof Number;\n    }\n\n    if (this.expectedObject == Function) {\n      return typeof other == 'function' || other instanceof Function;\n    }\n\n    if (this.expectedObject == Object) {\n      return typeof other == 'object';\n    }\n\n    if (this.expectedObject == Boolean) {\n      return typeof other == 'boolean';\n    }\n\n    return other instanceof this.expectedObject;\n  };\n\n  Any.prototype.jasmineToString = function() {\n    return '<jasmine.any(' + j$.fnNameFor(this.expectedObject) + ')>';\n  };\n\n  return Any;\n};\n\ngetJasmineRequireObj().Anything = function(j$) {\n\n  function Anything() {}\n\n  Anything.prototype.asymmetricMatch = function(other) {\n    return !j$.util.isUndefined(other) && other !== null;\n  };\n\n  Anything.prototype.jasmineToString = function() {\n    return '<jasmine.anything>';\n  };\n\n  return Anything;\n};\n\ngetJasmineRequireObj().ArrayContaining = function(j$) {\n  function ArrayContaining(sample) {\n    this.sample = sample;\n  }\n\n  ArrayContaining.prototype.asymmetricMatch = function(other) {\n    var className = Object.prototype.toString.call(this.sample);\n    if (className !== '[object Array]') { throw new Error('You must provide an array to arrayContaining, not \\'' + this.sample + '\\'.'); }\n\n    for (var i = 0; i < this.sample.length; i++) {\n      var item = this.sample[i];\n      if (!j$.matchersUtil.contains(other, item)) {\n        return false;\n      }\n    }\n\n    return true;\n  };\n\n  ArrayContaining.prototype.jasmineToString = function () {\n    return '<jasmine.arrayContaining(' + jasmine.pp(this.sample) +')>';\n  };\n\n  return ArrayContaining;\n};\n\ngetJasmineRequireObj().ObjectContaining = function(j$) {\n\n  function ObjectContaining(sample) {\n    this.sample = sample;\n  }\n\n  function getPrototype(obj) {\n    if (Object.getPrototypeOf) {\n      return Object.getPrototypeOf(obj);\n    }\n\n    if (obj.constructor.prototype == obj) {\n      return null;\n    }\n\n    return obj.constructor.prototype;\n  }\n\n  function hasProperty(obj, property) {\n    if (!obj) {\n      return false;\n    }\n\n    if (Object.prototype.hasOwnProperty.call(obj, property)) {\n      return true;\n    }\n\n    return hasProperty(getPrototype(obj), property);\n  }\n\n  ObjectContaining.prototype.asymmetricMatch = function(other) {\n    if (typeof(this.sample) !== 'object') { throw new Error('You must provide an object to objectContaining, not \\''+this.sample+'\\'.'); }\n\n    for (var property in this.sample) {\n      if (!hasProperty(other, property) ||\n          !j$.matchersUtil.equals(this.sample[property], other[property])) {\n        return false;\n      }\n    }\n\n    return true;\n  };\n\n  ObjectContaining.prototype.jasmineToString = function() {\n    return '<jasmine.objectContaining(' + j$.pp(this.sample) + ')>';\n  };\n\n  return ObjectContaining;\n};\n\ngetJasmineRequireObj().StringMatching = function(j$) {\n\n  function StringMatching(expected) {\n    if (!j$.isString_(expected) && !j$.isA_('RegExp', expected)) {\n      throw new Error('Expected is not a String or a RegExp');\n    }\n\n    this.regexp = new RegExp(expected);\n  }\n\n  StringMatching.prototype.asymmetricMatch = function(other) {\n    return this.regexp.test(other);\n  };\n\n  StringMatching.prototype.jasmineToString = function() {\n    return '<jasmine.stringMatching(' + this.regexp + ')>';\n  };\n\n  return StringMatching;\n};\n\ngetJasmineRequireObj().errors = function() {\n  function ExpectationFailed() {}\n\n  ExpectationFailed.prototype = new Error();\n  ExpectationFailed.prototype.constructor = ExpectationFailed;\n\n  return {\n    ExpectationFailed: ExpectationFailed\n  };\n};\ngetJasmineRequireObj().matchersUtil = function(j$) {\n  // TODO: what to do about jasmine.pp not being inject? move to JSON.stringify? gut PrettyPrinter?\n\n  return {\n    equals: function(a, b, customTesters) {\n      customTesters = customTesters || [];\n\n      return eq(a, b, [], [], customTesters);\n    },\n\n    contains: function(haystack, needle, customTesters) {\n      customTesters = customTesters || [];\n\n      if ((Object.prototype.toString.apply(haystack) === '[object Array]') ||\n        (!!haystack && !haystack.indexOf))\n      {\n        for (var i = 0; i < haystack.length; i++) {\n          if (eq(haystack[i], needle, [], [], customTesters)) {\n            return true;\n          }\n        }\n        return false;\n      }\n\n      return !!haystack && haystack.indexOf(needle) >= 0;\n    },\n\n    buildFailureMessage: function() {\n      var args = Array.prototype.slice.call(arguments, 0),\n        matcherName = args[0],\n        isNot = args[1],\n        actual = args[2],\n        expected = args.slice(3),\n        englishyPredicate = matcherName.replace(/[A-Z]/g, function(s) { return ' ' + s.toLowerCase(); });\n\n      var message = 'Expected ' +\n        j$.pp(actual) +\n        (isNot ? ' not ' : ' ') +\n        englishyPredicate;\n\n      if (expected.length > 0) {\n        for (var i = 0; i < expected.length; i++) {\n          if (i > 0) {\n            message += ',';\n          }\n          message += ' ' + j$.pp(expected[i]);\n        }\n      }\n\n      return message + '.';\n    }\n  };\n\n  function isAsymmetric(obj) {\n    return obj && j$.isA_('Function', obj.asymmetricMatch);\n  }\n\n  function asymmetricMatch(a, b) {\n    var asymmetricA = isAsymmetric(a),\n        asymmetricB = isAsymmetric(b);\n\n    if (asymmetricA && asymmetricB) {\n      return undefined;\n    }\n\n    if (asymmetricA) {\n      return a.asymmetricMatch(b);\n    }\n\n    if (asymmetricB) {\n      return b.asymmetricMatch(a);\n    }\n  }\n\n  // Equality function lovingly adapted from isEqual in\n  //   [Underscore](http://underscorejs.org)\n  function eq(a, b, aStack, bStack, customTesters) {\n    var result = true;\n\n    var asymmetricResult = asymmetricMatch(a, b);\n    if (!j$.util.isUndefined(asymmetricResult)) {\n      return asymmetricResult;\n    }\n\n    for (var i = 0; i < customTesters.length; i++) {\n      var customTesterResult = customTesters[i](a, b);\n      if (!j$.util.isUndefined(customTesterResult)) {\n        return customTesterResult;\n      }\n    }\n\n    if (a instanceof Error && b instanceof Error) {\n      return a.message == b.message;\n    }\n\n    // Identical objects are equal. `0 === -0`, but they aren't identical.\n    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).\n    if (a === b) { return a !== 0 || 1 / a == 1 / b; }\n    // A strict comparison is necessary because `null == undefined`.\n    if (a === null || b === null) { return a === b; }\n    var className = Object.prototype.toString.call(a);\n    if (className != Object.prototype.toString.call(b)) { return false; }\n    switch (className) {\n      // Strings, numbers, dates, and booleans are compared by value.\n      case '[object String]':\n        // Primitives and their corresponding object wrappers are equivalent; thus, `\"5\"` is\n        // equivalent to `new String(\"5\")`.\n        return a == String(b);\n      case '[object Number]':\n        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for\n        // other numeric values.\n        return a != +a ? b != +b : (a === 0 ? 1 / a == 1 / b : a == +b);\n      case '[object Date]':\n      case '[object Boolean]':\n        // Coerce dates and booleans to numeric primitive values. Dates are compared by their\n        // millisecond representations. Note that invalid dates with millisecond representations\n        // of `NaN` are not equivalent.\n        return +a == +b;\n      // RegExps are compared by their source patterns and flags.\n      case '[object RegExp]':\n        return a.source == b.source &&\n          a.global == b.global &&\n          a.multiline == b.multiline &&\n          a.ignoreCase == b.ignoreCase;\n    }\n    if (typeof a != 'object' || typeof b != 'object') { return false; }\n\n    var aIsDomNode = j$.isDomNode(a);\n    var bIsDomNode = j$.isDomNode(b);\n    if (aIsDomNode && bIsDomNode) {\n      // At first try to use DOM3 method isEqualNode\n      if (a.isEqualNode) {\n        return a.isEqualNode(b);\n      }\n      // IE8 doesn't support isEqualNode, try to use outerHTML && innerText\n      var aIsElement = a instanceof Element;\n      var bIsElement = b instanceof Element;\n      if (aIsElement && bIsElement) {\n        return a.outerHTML == b.outerHTML;\n      }\n      if (aIsElement || bIsElement) {\n        return false;\n      }\n      return a.innerText == b.innerText && a.textContent == b.textContent;\n    }\n    if (aIsDomNode || bIsDomNode) {\n      return false;\n    }\n\n    // Assume equality for cyclic structures. The algorithm for detecting cyclic\n    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.\n    var length = aStack.length;\n    while (length--) {\n      // Linear search. Performance is inversely proportional to the number of\n      // unique nested structures.\n      if (aStack[length] == a) { return bStack[length] == b; }\n    }\n    // Add the first object to the stack of traversed objects.\n    aStack.push(a);\n    bStack.push(b);\n    var size = 0;\n    // Recursively compare objects and arrays.\n    // Compare array lengths to determine if a deep comparison is necessary.\n    if (className == '[object Array]' && a.length !== b.length) {\n      result = false;\n    }\n\n    if (result) {\n      // Objects with different constructors are not equivalent, but `Object`s\n      // or `Array`s from different frames are.\n      if (className !== '[object Array]') {\n        var aCtor = a.constructor, bCtor = b.constructor;\n        if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor &&\n               isFunction(bCtor) && bCtor instanceof bCtor)) {\n          return false;\n        }\n      }\n      // Deep compare objects.\n      for (var key in a) {\n        if (has(a, key)) {\n          // Count the expected number of properties.\n          size++;\n          // Deep compare each member.\n          if (!(result = has(b, key) && eq(a[key], b[key], aStack, bStack, customTesters))) { break; }\n        }\n      }\n      // Ensure that both objects contain the same number of properties.\n      if (result) {\n        for (key in b) {\n          if (has(b, key) && !(size--)) { break; }\n        }\n        result = !size;\n      }\n    }\n    // Remove the first object from the stack of traversed objects.\n    aStack.pop();\n    bStack.pop();\n\n    return result;\n\n    function has(obj, key) {\n      return Object.prototype.hasOwnProperty.call(obj, key);\n    }\n\n    function isFunction(obj) {\n      return typeof obj === 'function';\n    }\n  }\n};\n\ngetJasmineRequireObj().toBe = function() {\n  function toBe() {\n    return {\n      compare: function(actual, expected) {\n        return {\n          pass: actual === expected\n        };\n      }\n    };\n  }\n\n  return toBe;\n};\n\ngetJasmineRequireObj().toBeCloseTo = function() {\n\n  function toBeCloseTo() {\n    return {\n      compare: function(actual, expected, precision) {\n        if (precision !== 0) {\n          precision = precision || 2;\n        }\n\n        return {\n          pass: Math.abs(expected - actual) < (Math.pow(10, -precision) / 2)\n        };\n      }\n    };\n  }\n\n  return toBeCloseTo;\n};\n\ngetJasmineRequireObj().toBeDefined = function() {\n  function toBeDefined() {\n    return {\n      compare: function(actual) {\n        return {\n          pass: (void 0 !== actual)\n        };\n      }\n    };\n  }\n\n  return toBeDefined;\n};\n\ngetJasmineRequireObj().toBeFalsy = function() {\n  function toBeFalsy() {\n    return {\n      compare: function(actual) {\n        return {\n          pass: !!!actual\n        };\n      }\n    };\n  }\n\n  return toBeFalsy;\n};\n\ngetJasmineRequireObj().toBeGreaterThan = function() {\n\n  function toBeGreaterThan() {\n    return {\n      compare: function(actual, expected) {\n        return {\n          pass: actual > expected\n        };\n      }\n    };\n  }\n\n  return toBeGreaterThan;\n};\n\n\ngetJasmineRequireObj().toBeLessThan = function() {\n  function toBeLessThan() {\n    return {\n\n      compare: function(actual, expected) {\n        return {\n          pass: actual < expected\n        };\n      }\n    };\n  }\n\n  return toBeLessThan;\n};\ngetJasmineRequireObj().toBeNaN = function(j$) {\n\n  function toBeNaN() {\n    return {\n      compare: function(actual) {\n        var result = {\n          pass: (actual !== actual)\n        };\n\n        if (result.pass) {\n          result.message = 'Expected actual not to be NaN.';\n        } else {\n          result.message = function() { return 'Expected ' + j$.pp(actual) + ' to be NaN.'; };\n        }\n\n        return result;\n      }\n    };\n  }\n\n  return toBeNaN;\n};\n\ngetJasmineRequireObj().toBeNull = function() {\n\n  function toBeNull() {\n    return {\n      compare: function(actual) {\n        return {\n          pass: actual === null\n        };\n      }\n    };\n  }\n\n  return toBeNull;\n};\n\ngetJasmineRequireObj().toBeTruthy = function() {\n\n  function toBeTruthy() {\n    return {\n      compare: function(actual) {\n        return {\n          pass: !!actual\n        };\n      }\n    };\n  }\n\n  return toBeTruthy;\n};\n\ngetJasmineRequireObj().toBeUndefined = function() {\n\n  function toBeUndefined() {\n    return {\n      compare: function(actual) {\n        return {\n          pass: void 0 === actual\n        };\n      }\n    };\n  }\n\n  return toBeUndefined;\n};\n\ngetJasmineRequireObj().toContain = function() {\n  function toContain(util, customEqualityTesters) {\n    customEqualityTesters = customEqualityTesters || [];\n\n    return {\n      compare: function(actual, expected) {\n\n        return {\n          pass: util.contains(actual, expected, customEqualityTesters)\n        };\n      }\n    };\n  }\n\n  return toContain;\n};\n\ngetJasmineRequireObj().toEqual = function() {\n\n  function toEqual(util, customEqualityTesters) {\n    customEqualityTesters = customEqualityTesters || [];\n\n    return {\n      compare: function(actual, expected) {\n        var result = {\n          pass: false\n        };\n\n        result.pass = util.equals(actual, expected, customEqualityTesters);\n\n        return result;\n      }\n    };\n  }\n\n  return toEqual;\n};\n\ngetJasmineRequireObj().toHaveBeenCalled = function(j$) {\n\n  function toHaveBeenCalled() {\n    return {\n      compare: function(actual) {\n        var result = {};\n\n        if (!j$.isSpy(actual)) {\n          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');\n        }\n\n        if (arguments.length > 1) {\n          throw new Error('toHaveBeenCalled does not take arguments, use toHaveBeenCalledWith');\n        }\n\n        result.pass = actual.calls.any();\n\n        result.message = result.pass ?\n          'Expected spy ' + actual.and.identity() + ' not to have been called.' :\n          'Expected spy ' + actual.and.identity() + ' to have been called.';\n\n        return result;\n      }\n    };\n  }\n\n  return toHaveBeenCalled;\n};\n\ngetJasmineRequireObj().toHaveBeenCalledTimes = function(j$) {\n\n  function toHaveBeenCalledTimes() {\n    return {\n      compare: function(actual, expected) {\n        if (!j$.isSpy(actual)) {\n          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');\n        }\n\n        var args = Array.prototype.slice.call(arguments, 0),\n          result = { pass: false };\n\n        if(!expected){\n          throw new Error('Expected times failed is required as an argument.');\n        }\n\n        actual = args[0];\n        var calls = actual.calls.count();\n        var timesMessage = expected === 1 ? 'once' : expected + ' times';\n        result.pass = calls === expected;\n        result.message = result.pass ?\n          'Expected spy ' + actual.and.identity() + ' not to have been called ' + timesMessage + '. It was called ' +  calls + ' times.' :\n          'Expected spy ' + actual.and.identity() + ' to have been called ' + timesMessage + '. It was called ' +  calls + ' times.';\n        return result;\n      }\n    };\n  }\n\n  return toHaveBeenCalledTimes;\n};\n\ngetJasmineRequireObj().toHaveBeenCalledWith = function(j$) {\n\n  function toHaveBeenCalledWith(util, customEqualityTesters) {\n    return {\n      compare: function() {\n        var args = Array.prototype.slice.call(arguments, 0),\n          actual = args[0],\n          expectedArgs = args.slice(1),\n          result = { pass: false };\n\n        if (!j$.isSpy(actual)) {\n          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');\n        }\n\n        if (!actual.calls.any()) {\n          result.message = function() { return 'Expected spy ' + actual.and.identity() + ' to have been called with ' + j$.pp(expectedArgs) + ' but it was never called.'; };\n          return result;\n        }\n\n        if (util.contains(actual.calls.allArgs(), expectedArgs, customEqualityTesters)) {\n          result.pass = true;\n          result.message = function() { return 'Expected spy ' + actual.and.identity() + ' not to have been called with ' + j$.pp(expectedArgs) + ' but it was.'; };\n        } else {\n          result.message = function() { return 'Expected spy ' + actual.and.identity() + ' to have been called with ' + j$.pp(expectedArgs) + ' but actual calls were ' + j$.pp(actual.calls.allArgs()).replace(/^\\[ | \\]$/g, '') + '.'; };\n        }\n\n        return result;\n      }\n    };\n  }\n\n  return toHaveBeenCalledWith;\n};\n\ngetJasmineRequireObj().toMatch = function(j$) {\n\n  function toMatch() {\n    return {\n      compare: function(actual, expected) {\n        if (!j$.isString_(expected) && !j$.isA_('RegExp', expected)) {\n          throw new Error('Expected is not a String or a RegExp');\n        }\n\n        var regexp = new RegExp(expected);\n\n        return {\n          pass: regexp.test(actual)\n        };\n      }\n    };\n  }\n\n  return toMatch;\n};\n\ngetJasmineRequireObj().toThrow = function(j$) {\n\n  function toThrow(util) {\n    return {\n      compare: function(actual, expected) {\n        var result = { pass: false },\n          threw = false,\n          thrown;\n\n        if (typeof actual != 'function') {\n          throw new Error('Actual is not a Function');\n        }\n\n        try {\n          actual();\n        } catch (e) {\n          threw = true;\n          thrown = e;\n        }\n\n        if (!threw) {\n          result.message = 'Expected function to throw an exception.';\n          return result;\n        }\n\n        if (arguments.length == 1) {\n          result.pass = true;\n          result.message = function() { return 'Expected function not to throw, but it threw ' + j$.pp(thrown) + '.'; };\n\n          return result;\n        }\n\n        if (util.equals(thrown, expected)) {\n          result.pass = true;\n          result.message = function() { return 'Expected function not to throw ' + j$.pp(expected) + '.'; };\n        } else {\n          result.message = function() { return 'Expected function to throw ' + j$.pp(expected) + ', but it threw ' +  j$.pp(thrown) + '.'; };\n        }\n\n        return result;\n      }\n    };\n  }\n\n  return toThrow;\n};\n\ngetJasmineRequireObj().toThrowError = function(j$) {\n  function toThrowError () {\n    return {\n      compare: function(actual) {\n        var threw = false,\n          pass = {pass: true},\n          fail = {pass: false},\n          thrown;\n\n        if (typeof actual != 'function') {\n          throw new Error('Actual is not a Function');\n        }\n\n        var errorMatcher = getMatcher.apply(null, arguments);\n\n        try {\n          actual();\n        } catch (e) {\n          threw = true;\n          thrown = e;\n        }\n\n        if (!threw) {\n          fail.message = 'Expected function to throw an Error.';\n          return fail;\n        }\n\n        if (!(thrown instanceof Error)) {\n          fail.message = function() { return 'Expected function to throw an Error, but it threw ' + j$.pp(thrown) + '.'; };\n          return fail;\n        }\n\n        if (errorMatcher.hasNoSpecifics()) {\n          pass.message = 'Expected function not to throw an Error, but it threw ' + j$.fnNameFor(thrown) + '.';\n          return pass;\n        }\n\n        if (errorMatcher.matches(thrown)) {\n          pass.message = function() {\n            return 'Expected function not to throw ' + errorMatcher.errorTypeDescription + errorMatcher.messageDescription() + '.';\n          };\n          return pass;\n        } else {\n          fail.message = function() {\n            return 'Expected function to throw ' + errorMatcher.errorTypeDescription + errorMatcher.messageDescription() +\n              ', but it threw ' + errorMatcher.thrownDescription(thrown) + '.';\n          };\n          return fail;\n        }\n      }\n    };\n\n    function getMatcher() {\n      var expected = null,\n          errorType = null;\n\n      if (arguments.length == 2) {\n        expected = arguments[1];\n        if (isAnErrorType(expected)) {\n          errorType = expected;\n          expected = null;\n        }\n      } else if (arguments.length > 2) {\n        errorType = arguments[1];\n        expected = arguments[2];\n        if (!isAnErrorType(errorType)) {\n          throw new Error('Expected error type is not an Error.');\n        }\n      }\n\n      if (expected && !isStringOrRegExp(expected)) {\n        if (errorType) {\n          throw new Error('Expected error message is not a string or RegExp.');\n        } else {\n          throw new Error('Expected is not an Error, string, or RegExp.');\n        }\n      }\n\n      function messageMatch(message) {\n        if (typeof expected == 'string') {\n          return expected == message;\n        } else {\n          return expected.test(message);\n        }\n      }\n\n      return {\n        errorTypeDescription: errorType ? j$.fnNameFor(errorType) : 'an exception',\n        thrownDescription: function(thrown) {\n          var thrownName = errorType ? j$.fnNameFor(thrown.constructor) : 'an exception',\n              thrownMessage = '';\n\n          if (expected) {\n            thrownMessage = ' with message ' + j$.pp(thrown.message);\n          }\n\n          return thrownName + thrownMessage;\n        },\n        messageDescription: function() {\n          if (expected === null) {\n            return '';\n          } else if (expected instanceof RegExp) {\n            return ' with a message matching ' + j$.pp(expected);\n          } else {\n            return ' with message ' + j$.pp(expected);\n          }\n        },\n        hasNoSpecifics: function() {\n          return expected === null && errorType === null;\n        },\n        matches: function(error) {\n          return (errorType === null || error instanceof errorType) &&\n            (expected === null || messageMatch(error.message));\n        }\n      };\n    }\n\n    function isStringOrRegExp(potential) {\n      return potential instanceof RegExp || (typeof potential == 'string');\n    }\n\n    function isAnErrorType(type) {\n      if (typeof type !== 'function') {\n        return false;\n      }\n\n      var Surrogate = function() {};\n      Surrogate.prototype = type.prototype;\n      return (new Surrogate()) instanceof Error;\n    }\n  }\n\n  return toThrowError;\n};\n\ngetJasmineRequireObj().interface = function(jasmine, env) {\n  var jasmineInterface = {\n    describe: function(description, specDefinitions) {\n      return env.describe(description, specDefinitions);\n    },\n\n    xdescribe: function(description, specDefinitions) {\n      return env.xdescribe(description, specDefinitions);\n    },\n\n    fdescribe: function(description, specDefinitions) {\n      return env.fdescribe(description, specDefinitions);\n    },\n\n    it: function() {\n      return env.it.apply(env, arguments);\n    },\n\n    xit: function() {\n      return env.xit.apply(env, arguments);\n    },\n\n    fit: function() {\n      return env.fit.apply(env, arguments);\n    },\n\n    beforeEach: function() {\n      return env.beforeEach.apply(env, arguments);\n    },\n\n    afterEach: function() {\n      return env.afterEach.apply(env, arguments);\n    },\n\n    beforeAll: function() {\n      return env.beforeAll.apply(env, arguments);\n    },\n\n    afterAll: function() {\n      return env.afterAll.apply(env, arguments);\n    },\n\n    expect: function(actual) {\n      return env.expect(actual);\n    },\n\n    pending: function() {\n      return env.pending.apply(env, arguments);\n    },\n\n    fail: function() {\n      return env.fail.apply(env, arguments);\n    },\n\n    spyOn: function(obj, methodName) {\n      return env.spyOn(obj, methodName);\n    },\n\n    jsApiReporter: new jasmine.JsApiReporter({\n      timer: new jasmine.Timer()\n    }),\n\n    jasmine: jasmine\n  };\n\n  jasmine.addCustomEqualityTester = function(tester) {\n    env.addCustomEqualityTester(tester);\n  };\n\n  jasmine.addMatchers = function(matchers) {\n    return env.addMatchers(matchers);\n  };\n\n  jasmine.clock = function() {\n    return env.clock;\n  };\n\n  return jasmineInterface;\n};\n\ngetJasmineRequireObj().version = function() {\n  return '2.4.1';\n};\n";

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = "/*\n * Support for source maps in V8 stack traces\n * https://github.com/evanw/node-source-map-support\n */\n/*\n The buffer module from node.js, for the browser.\n\n @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>\n license  MIT\n*/\n(this.define||function(N,O){this.sourceMapSupport=O()})(\"browser-source-map-support\",function(N){(function p(v,l,b){function e(d,a){if(!l[d]){if(!v[d]){var h=\"function\"==typeof require&&require;if(!a&&h)return h(d,!0);if(k)return k(d,!0);throw Error(\"Cannot find module '\"+d+\"'\");}h=l[d]={exports:{}};v[d][0].call(h.exports,function(a){var b=v[d][1][a];return e(b?b:a)},h,h.exports,p,v,l,b)}return l[d].exports}for(var k=\"function\"==typeof require&&require,r=0;r<b.length;r++)e(b[r]);return e})({1:[function(p,\nv,l){N=p(\"./source-map-support\")},{\"./source-map-support\":19}],2:[function(p,v,l){(function(b){function e(b){b=b.charCodeAt(0);if(43===b||45===b)return 62;if(47===b||95===b)return 63;if(48>b)return-1;if(58>b)return b-48+52;if(91>b)return b-65;if(123>b)return b-97+26}var k=\"undefined\"!==typeof Uint8Array?Uint8Array:Array;b.toByteArray=function(b){function d(a){c[f++]=a}var a,h,n,t,c;if(0<b.length%4)throw Error(\"Invalid string. Length must be a multiple of 4\");a=b.length;t=\"=\"===b.charAt(a-2)?2:\"=\"===\nb.charAt(a-1)?1:0;c=new k(3*b.length/4-t);h=0<t?b.length-4:b.length;var f=0;for(a=0;a<h;a+=4)n=e(b.charAt(a))<<18|e(b.charAt(a+1))<<12|e(b.charAt(a+2))<<6|e(b.charAt(a+3)),d((n&16711680)>>16),d((n&65280)>>8),d(n&255);2===t?(n=e(b.charAt(a))<<2|e(b.charAt(a+1))>>4,d(n&255)):1===t&&(n=e(b.charAt(a))<<10|e(b.charAt(a+1))<<4|e(b.charAt(a+2))>>2,d(n>>8&255),d(n&255));return c};b.fromByteArray=function(b){var d,a=b.length%3,h=\"\",n,e;d=0;for(e=b.length-a;d<e;d+=3)n=(b[d]<<16)+(b[d+1]<<8)+b[d+2],n=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\".charAt(n>>\n18&63)+\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\".charAt(n>>12&63)+\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\".charAt(n>>6&63)+\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\".charAt(n&63),h+=n;switch(a){case 1:n=b[b.length-1];h+=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\".charAt(n>>2);h+=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\".charAt(n<<4&63);h+=\"==\";break;case 2:n=(b[b.length-2]<<8)+\nb[b.length-1],h+=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\".charAt(n>>10),h+=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\".charAt(n>>4&63),h+=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\".charAt(n<<2&63),h+=\"=\"}return h}})(\"undefined\"===typeof l?this.base64js={}:l)},{}],3:[function(p,v,l){},{}],4:[function(p,v,l){function b(g,m,c){if(!(this instanceof b))return new b(g,m,c);var y=typeof g;if(\"base64\"===m&&\"string\"===y)for(g=g.trim?\ng.trim():g.replace(/^\\s+|\\s+$/g,\"\");0!==g.length%4;)g+=\"=\";var a;if(\"number\"===y)a=A(g);else if(\"string\"===y)a=b.byteLength(g,m);else if(\"object\"===y)a=A(g.length);else throw Error(\"First argument needs to be a number, array or string.\");var f;b._useTypedArrays?f=b._augment(new Uint8Array(a)):(f=this,f.length=a,f._isBuffer=!0);if(b._useTypedArrays&&\"number\"===typeof g.byteLength)f._set(g);else{var d=g;if(L(d)||b.isBuffer(d)||d&&\"object\"===typeof d&&\"number\"===typeof d.length)for(m=0;m<a;m++)b.isBuffer(g)?\nf[m]=g.readUInt8(m):f[m]=g[m];else if(\"string\"===y)f.write(g,0,m);else if(\"number\"===y&&!b._useTypedArrays&&!c)for(m=0;m<a;m++)f[m]=0}return f}function e(g,m,c){var y=\"\";for(c=Math.min(g.length,c);m<c;m++)y+=String.fromCharCode(g[m]);return y}function k(g,m,c,a){a||(q(\"boolean\"===typeof c,\"missing or invalid endian\"),q(void 0!==m&&null!==m,\"missing offset\"),q(m+1<g.length,\"Trying to read beyond buffer length\"));a=g.length;if(!(m>=a))return c?(c=g[m],m+1<a&&(c|=g[m+1]<<8)):(c=g[m]<<8,m+1<a&&(c|=g[m+\n1])),c}function r(g,m,c,a){a||(q(\"boolean\"===typeof c,\"missing or invalid endian\"),q(void 0!==m&&null!==m,\"missing offset\"),q(m+3<g.length,\"Trying to read beyond buffer length\"));a=g.length;if(!(m>=a)){var y;c?(m+2<a&&(y=g[m+2]<<16),m+1<a&&(y|=g[m+1]<<8),y|=g[m],m+3<a&&(y+=g[m+3]<<24>>>0)):(m+1<a&&(y=g[m+1]<<16),m+2<a&&(y|=g[m+2]<<8),m+3<a&&(y|=g[m+3]),y+=g[m]<<24>>>0);return y}}function d(g,m,c,a){a||(q(\"boolean\"===typeof c,\"missing or invalid endian\"),q(void 0!==m&&null!==m,\"missing offset\"),q(m+\n1<g.length,\"Trying to read beyond buffer length\"));if(!(m>=g.length))return g=k(g,m,c,!0),g&32768?-1*(65535-g+1):g}function a(g,m,c,a){a||(q(\"boolean\"===typeof c,\"missing or invalid endian\"),q(void 0!==m&&null!==m,\"missing offset\"),q(m+3<g.length,\"Trying to read beyond buffer length\"));if(!(m>=g.length))return g=r(g,m,c,!0),g&2147483648?-1*(4294967295-g+1):g}function h(g,m,c,a){a||(q(\"boolean\"===typeof c,\"missing or invalid endian\"),q(m+3<g.length,\"Trying to read beyond buffer length\"));return J.read(g,\nm,c,23,4)}function n(g,m,c,a){a||(q(\"boolean\"===typeof c,\"missing or invalid endian\"),q(m+7<g.length,\"Trying to read beyond buffer length\"));return J.read(g,m,c,52,8)}function t(g,m,c,a,b){b||(q(void 0!==m&&null!==m,\"missing value\"),q(\"boolean\"===typeof a,\"missing or invalid endian\"),q(void 0!==c&&null!==c,\"missing offset\"),q(c+1<g.length,\"trying to write beyond buffer length\"),H(m,65535));var y=g.length;if(!(c>=y))for(b=0,y=Math.min(y-c,2);b<y;b++)g[c+b]=(m&255<<8*(a?b:1-b))>>>8*(a?b:1-b)}function c(g,\nc,a,b,f){f||(q(void 0!==c&&null!==c,\"missing value\"),q(\"boolean\"===typeof b,\"missing or invalid endian\"),q(void 0!==a&&null!==a,\"missing offset\"),q(a+3<g.length,\"trying to write beyond buffer length\"),H(c,4294967295));var m=g.length;if(!(a>=m))for(f=0,m=Math.min(m-a,4);f<m;f++)g[a+f]=c>>>8*(b?f:3-f)&255}function f(g,c,a,b,f){f||(q(void 0!==c&&null!==c,\"missing value\"),q(\"boolean\"===typeof b,\"missing or invalid endian\"),q(void 0!==a&&null!==a,\"missing offset\"),q(a+1<g.length,\"Trying to write beyond buffer length\"),\nz(c,32767,-32768));a>=g.length||(0<=c?t(g,c,a,b,f):t(g,65535+c+1,a,b,f))}function G(g,m,a,b,f){f||(q(void 0!==m&&null!==m,\"missing value\"),q(\"boolean\"===typeof b,\"missing or invalid endian\"),q(void 0!==a&&null!==a,\"missing offset\"),q(a+3<g.length,\"Trying to write beyond buffer length\"),z(m,2147483647,-2147483648));a>=g.length||(0<=m?c(g,m,a,b,f):c(g,4294967295+m+1,a,b,f))}function u(g,c,a,b,f){f||(q(void 0!==c&&null!==c,\"missing value\"),q(\"boolean\"===typeof b,\"missing or invalid endian\"),q(void 0!==\na&&null!==a,\"missing offset\"),q(a+3<g.length,\"Trying to write beyond buffer length\"),E(c,3.4028234663852886E38,-3.4028234663852886E38));a>=g.length||J.write(g,c,a,b,23,4)}function M(g,c,a,b,f){f||(q(void 0!==c&&null!==c,\"missing value\"),q(\"boolean\"===typeof b,\"missing or invalid endian\"),q(void 0!==a&&null!==a,\"missing offset\"),q(a+7<g.length,\"Trying to write beyond buffer length\"),E(c,1.7976931348623157E308,-1.7976931348623157E308));a>=g.length||J.write(g,c,a,b,52,8)}function I(g,c,a){if(\"number\"!==\ntypeof g)return a;g=~~g;if(g>=c)return c;if(0<=g)return g;g+=c;return 0<=g?g:0}function A(g){g=~~Math.ceil(+g);return 0>g?0:g}function L(g){return(Array.isArray||function(g){return\"[object Array]\"===Object.prototype.toString.call(g)})(g)}function C(g){return 16>g?\"0\"+g.toString(16):g.toString(16)}function x(g){for(var c=[],a=0;a<g.length;a++){var b=g.charCodeAt(a);if(127>=b)c.push(g.charCodeAt(a));else{var f=a;55296<=b&&57343>=b&&a++;b=encodeURIComponent(g.slice(f,a+1)).substr(1).split(\"%\");for(f=\n0;f<b.length;f++)c.push(parseInt(b[f],16))}}return c}function K(g){for(var c=[],a=0;a<g.length;a++)c.push(g.charCodeAt(a)&255);return c}function B(g,c,a,b){for(var m=0;m<b&&!(m+a>=c.length||m>=g.length);m++)c[m+a]=g[m];return m}function F(g){try{return decodeURIComponent(g)}catch(m){return String.fromCharCode(65533)}}function H(g,c){q(\"number\"===typeof g,\"cannot write a non-number as a number\");q(0<=g,\"specified a negative value for writing an unsigned value\");q(g<=c,\"value is larger than maximum value for type\");\nq(Math.floor(g)===g,\"value has a fractional component\")}function z(g,c,a){q(\"number\"===typeof g,\"cannot write a non-number as a number\");q(g<=c,\"value larger than maximum allowed value\");q(g>=a,\"value smaller than minimum allowed value\");q(Math.floor(g)===g,\"value has a fractional component\")}function E(g,c,a){q(\"number\"===typeof g,\"cannot write a non-number as a number\");q(g<=c,\"value larger than maximum allowed value\");q(g>=a,\"value smaller than minimum allowed value\")}function q(g,c){if(!g)throw Error(c||\n\"Failed assertion\");}var D=p(\"base64-js\"),J=p(\"ieee754\");l.Buffer=b;l.SlowBuffer=b;l.INSPECT_MAX_BYTES=50;b.poolSize=8192;b._useTypedArrays=function(){try{var g=new ArrayBuffer(0),c=new Uint8Array(g);c.foo=function(){return 42};return 42===c.foo()&&\"function\"===typeof c.subarray}catch(y){return!1}}();b.isEncoding=function(g){switch(String(g).toLowerCase()){case \"hex\":case \"utf8\":case \"utf-8\":case \"ascii\":case \"binary\":case \"base64\":case \"raw\":case \"ucs2\":case \"ucs-2\":case \"utf16le\":case \"utf-16le\":return!0;\ndefault:return!1}};b.isBuffer=function(g){return!(null===g||void 0===g||!g._isBuffer)};b.byteLength=function(g,c){var a;g+=\"\";switch(c||\"utf8\"){case \"hex\":a=g.length/2;break;case \"utf8\":case \"utf-8\":a=x(g).length;break;case \"ascii\":case \"binary\":case \"raw\":a=g.length;break;case \"base64\":a=D.toByteArray(g).length;break;case \"ucs2\":case \"ucs-2\":case \"utf16le\":case \"utf-16le\":a=2*g.length;break;default:throw Error(\"Unknown encoding\");}return a};b.concat=function(g,c){q(L(g),\"Usage: Buffer.concat(list, [totalLength])\\nlist should be an Array.\");\nif(0===g.length)return new b(0);if(1===g.length)return g[0];var a;if(\"number\"!==typeof c)for(a=c=0;a<g.length;a++)c+=g[a].length;var m=new b(c),f=0;for(a=0;a<g.length;a++){var d=g[a];d.copy(m,f);f+=d.length}return m};b.prototype.write=function(g,c,a,f){if(isFinite(c))isFinite(a)||(f=a,a=void 0);else{var m=f;f=c;c=a;a=m}c=Number(c)||0;m=this.length-c;a?(a=Number(a),a>m&&(a=m)):a=m;f=String(f||\"utf8\").toLowerCase();switch(f){case \"hex\":c=Number(c)||0;f=this.length-c;a?(a=Number(a),a>f&&(a=f)):a=f;f=\ng.length;q(0===f%2,\"Invalid hex string\");a>f/2&&(a=f/2);for(f=0;f<a;f++)m=parseInt(g.substr(2*f,2),16),q(!isNaN(m),\"Invalid hex string\"),this[c+f]=m;b._charsWritten=2*f;g=f;break;case \"utf8\":case \"utf-8\":g=b._charsWritten=B(x(g),this,c,a);break;case \"ascii\":g=b._charsWritten=B(K(g),this,c,a);break;case \"binary\":g=b._charsWritten=B(K(g),this,c,a);break;case \"base64\":g=b._charsWritten=B(D.toByteArray(g),this,c,a);break;case \"ucs2\":case \"ucs-2\":case \"utf16le\":case \"utf-16le\":for(var d,m=[],h=0;h<g.length;h++)d=\ng.charCodeAt(h),f=d>>8,d%=256,m.push(d),m.push(f);g=b._charsWritten=B(m,this,c,a);break;default:throw Error(\"Unknown encoding\");}return g};b.prototype.toString=function(g,c,a){g=String(g||\"utf8\").toLowerCase();c=Number(c)||0;a=void 0!==a?Number(a):a=this.length;if(a===c)return\"\";switch(g){case \"hex\":g=this.length;if(!c||0>c)c=0;if(!a||0>a||a>g)a=g;for(g=\"\";c<a;c++)g+=C(this[c]);a=g;break;case \"utf8\":case \"utf-8\":var f=g=\"\";for(a=Math.min(this.length,a);c<a;c++)127>=this[c]?(g+=F(f)+String.fromCharCode(this[c]),\nf=\"\"):f+=\"%\"+this[c].toString(16);a=g+F(f);break;case \"ascii\":a=e(this,c,a);break;case \"binary\":a=e(this,c,a);break;case \"base64\":a=0===c&&a===this.length?D.fromByteArray(this):D.fromByteArray(this.slice(c,a));break;case \"ucs2\":case \"ucs-2\":case \"utf16le\":case \"utf-16le\":a=this.slice(c,a);c=\"\";for(g=0;g<a.length;g+=2)c+=String.fromCharCode(a[g]+256*a[g+1]);a=c;break;default:throw Error(\"Unknown encoding\");}return a};b.prototype.toJSON=function(){return{type:\"Buffer\",data:Array.prototype.slice.call(this._arr||\nthis,0)}};b.prototype.copy=function(g,c,a,f){a||(a=0);f||0===f||(f=this.length);c||(c=0);if(f!==a&&0!==g.length&&0!==this.length)if(q(f>=a,\"sourceEnd < sourceStart\"),q(0<=c&&c<g.length,\"targetStart out of bounds\"),q(0<=a&&a<this.length,\"sourceStart out of bounds\"),q(0<=f&&f<=this.length,\"sourceEnd out of bounds\"),f>this.length&&(f=this.length),g.length-c<f-a&&(f=g.length-c+a),f-=a,100>f||!b._useTypedArrays)for(var m=0;m<f;m++)g[m+c]=this[m+a];else g._set(this.subarray(a,a+f),c)};b.prototype.slice=\nfunction(a,c){var g=this.length;a=I(a,g,0);c=I(c,g,g);if(b._useTypedArrays)return b._augment(this.subarray(a,c));for(var g=c-a,f=new b(g,void 0,!0),m=0;m<g;m++)f[m]=this[m+a];return f};b.prototype.get=function(a){console.log(\".get() is deprecated. Access using array indexes instead.\");return this.readUInt8(a)};b.prototype.set=function(a,c){console.log(\".set() is deprecated. Access using array indexes instead.\");return this.writeUInt8(a,c)};b.prototype.readUInt8=function(a,c){c||(q(void 0!==a&&null!==\na,\"missing offset\"),q(a<this.length,\"Trying to read beyond buffer length\"));if(!(a>=this.length))return this[a]};b.prototype.readUInt16LE=function(a,c){return k(this,a,!0,c)};b.prototype.readUInt16BE=function(a,c){return k(this,a,!1,c)};b.prototype.readUInt32LE=function(a,c){return r(this,a,!0,c)};b.prototype.readUInt32BE=function(a,c){return r(this,a,!1,c)};b.prototype.readInt8=function(a,c){c||(q(void 0!==a&&null!==a,\"missing offset\"),q(a<this.length,\"Trying to read beyond buffer length\"));if(!(a>=\nthis.length))return this[a]&128?-1*(255-this[a]+1):this[a]};b.prototype.readInt16LE=function(a,c){return d(this,a,!0,c)};b.prototype.readInt16BE=function(a,c){return d(this,a,!1,c)};b.prototype.readInt32LE=function(c,f){return a(this,c,!0,f)};b.prototype.readInt32BE=function(c,f){return a(this,c,!1,f)};b.prototype.readFloatLE=function(a,c){return h(this,a,!0,c)};b.prototype.readFloatBE=function(a,c){return h(this,a,!1,c)};b.prototype.readDoubleLE=function(a,c){return n(this,a,!0,c)};b.prototype.readDoubleBE=\nfunction(a,c){return n(this,a,!1,c)};b.prototype.writeUInt8=function(a,c,f){f||(q(void 0!==a&&null!==a,\"missing value\"),q(void 0!==c&&null!==c,\"missing offset\"),q(c<this.length,\"trying to write beyond buffer length\"),H(a,255));c>=this.length||(this[c]=a)};b.prototype.writeUInt16LE=function(a,c,f){t(this,a,c,!0,f)};b.prototype.writeUInt16BE=function(a,c,f){t(this,a,c,!1,f)};b.prototype.writeUInt32LE=function(a,f,b){c(this,a,f,!0,b)};b.prototype.writeUInt32BE=function(a,f,b){c(this,a,f,!1,b)};b.prototype.writeInt8=\nfunction(a,c,f){f||(q(void 0!==a&&null!==a,\"missing value\"),q(void 0!==c&&null!==c,\"missing offset\"),q(c<this.length,\"Trying to write beyond buffer length\"),z(a,127,-128));c>=this.length||(0<=a?this.writeUInt8(a,c,f):this.writeUInt8(255+a+1,c,f))};b.prototype.writeInt16LE=function(a,c,b){f(this,a,c,!0,b)};b.prototype.writeInt16BE=function(a,c,b){f(this,a,c,!1,b)};b.prototype.writeInt32LE=function(a,c,f){G(this,a,c,!0,f)};b.prototype.writeInt32BE=function(a,c,f){G(this,a,c,!1,f)};b.prototype.writeFloatLE=\nfunction(a,c,f){u(this,a,c,!0,f)};b.prototype.writeFloatBE=function(a,c,f){u(this,a,c,!1,f)};b.prototype.writeDoubleLE=function(a,c,f){M(this,a,c,!0,f)};b.prototype.writeDoubleBE=function(a,c,f){M(this,a,c,!1,f)};b.prototype.fill=function(a,c,f){a||(a=0);c||(c=0);f||(f=this.length);\"string\"===typeof a&&(a=a.charCodeAt(0));q(\"number\"===typeof a&&!isNaN(a),\"value is not a number\");q(f>=c,\"end < start\");if(f!==c&&0!==this.length)for(q(0<=c&&c<this.length,\"start out of bounds\"),q(0<=f&&f<=this.length,\n\"end out of bounds\");c<f;c++)this[c]=a};b.prototype.inspect=function(){for(var a=[],c=this.length,f=0;f<c;f++)if(a[f]=C(this[f]),f===l.INSPECT_MAX_BYTES){a[f+1]=\"...\";break}return\"<Buffer \"+a.join(\" \")+\">\"};b.prototype.toArrayBuffer=function(){if(\"undefined\"!==typeof Uint8Array){if(b._useTypedArrays)return(new b(this)).buffer;for(var a=new Uint8Array(this.length),c=0,f=a.length;c<f;c+=1)a[c]=this[c];return a.buffer}throw Error(\"Buffer.toArrayBuffer not supported in this browser\");};var w=b.prototype;\nb._augment=function(a){a._isBuffer=!0;a._get=a.get;a._set=a.set;a.get=w.get;a.set=w.set;a.write=w.write;a.toString=w.toString;a.toLocaleString=w.toString;a.toJSON=w.toJSON;a.copy=w.copy;a.slice=w.slice;a.readUInt8=w.readUInt8;a.readUInt16LE=w.readUInt16LE;a.readUInt16BE=w.readUInt16BE;a.readUInt32LE=w.readUInt32LE;a.readUInt32BE=w.readUInt32BE;a.readInt8=w.readInt8;a.readInt16LE=w.readInt16LE;a.readInt16BE=w.readInt16BE;a.readInt32LE=w.readInt32LE;a.readInt32BE=w.readInt32BE;a.readFloatLE=w.readFloatLE;\na.readFloatBE=w.readFloatBE;a.readDoubleLE=w.readDoubleLE;a.readDoubleBE=w.readDoubleBE;a.writeUInt8=w.writeUInt8;a.writeUInt16LE=w.writeUInt16LE;a.writeUInt16BE=w.writeUInt16BE;a.writeUInt32LE=w.writeUInt32LE;a.writeUInt32BE=w.writeUInt32BE;a.writeInt8=w.writeInt8;a.writeInt16LE=w.writeInt16LE;a.writeInt16BE=w.writeInt16BE;a.writeInt32LE=w.writeInt32LE;a.writeInt32BE=w.writeInt32BE;a.writeFloatLE=w.writeFloatLE;a.writeFloatBE=w.writeFloatBE;a.writeDoubleLE=w.writeDoubleLE;a.writeDoubleBE=w.writeDoubleBE;\na.fill=w.fill;a.inspect=w.inspect;a.toArrayBuffer=w.toArrayBuffer;return a}},{\"base64-js\":2,ieee754:5}],5:[function(p,v,l){l.read=function(b,e,k,r,d){var a;a=8*d-r-1;var h=(1<<a)-1,n=h>>1,t=-7;d=k?d-1:0;var c=k?-1:1,f=b[e+d];d+=c;k=f&(1<<-t)-1;f>>=-t;for(t+=a;0<t;k=256*k+b[e+d],d+=c,t-=8);a=k&(1<<-t)-1;k>>=-t;for(t+=r;0<t;a=256*a+b[e+d],d+=c,t-=8);if(0===k)k=1-n;else{if(k===h)return a?NaN:Infinity*(f?-1:1);a+=Math.pow(2,r);k-=n}return(f?-1:1)*a*Math.pow(2,k-r)};l.write=function(b,e,k,r,d,a){var h,\nn=8*a-d-1,t=(1<<n)-1,c=t>>1,f=23===d?Math.pow(2,-24)-Math.pow(2,-77):0;a=r?0:a-1;var G=r?1:-1,u=0>e||0===e&&0>1/e?1:0;e=Math.abs(e);isNaN(e)||Infinity===e?(e=isNaN(e)?1:0,r=t):(r=Math.floor(Math.log(e)/Math.LN2),1>e*(h=Math.pow(2,-r))&&(r--,h*=2),e=1<=r+c?e+f/h:e+f*Math.pow(2,1-c),2<=e*h&&(r++,h/=2),r+c>=t?(e=0,r=t):1<=r+c?(e=(e*h-1)*Math.pow(2,d),r+=c):(e=e*Math.pow(2,c-1)*Math.pow(2,d),r=0));for(;8<=d;b[k+a]=e&255,a+=G,e/=256,d-=8);r=r<<d|e;for(n+=d;0<n;b[k+a]=r&255,a+=G,r/=256,n-=8);b[k+a-G]|=\n128*u}},{}],6:[function(p,v,l){(function(b){function e(a,b){for(var d=0,h=a.length-1;0<=h;h--){var c=a[h];\".\"===c?a.splice(h,1):\"..\"===c?(a.splice(h,1),d++):d&&(a.splice(h,1),d--)}if(b)for(;d--;d)a.unshift(\"..\");return a}function k(a,b){if(a.filter)return a.filter(b);for(var d=[],h=0;h<a.length;h++)b(a[h],h,a)&&d.push(a[h]);return d}var r=/^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;l.resolve=function(){for(var a=\"\",d=!1,n=arguments.length-1;-1<=n&&!d;n--){var t=0<=n?arguments[n]:\nb.cwd();if(\"string\"!==typeof t)throw new TypeError(\"Arguments to path.resolve must be strings\");t&&(a=t+\"/\"+a,d=\"/\"===t.charAt(0))}a=e(k(a.split(\"/\"),function(a){return!!a}),!d).join(\"/\");return(d?\"/\":\"\")+a||\".\"};l.normalize=function(a){var b=l.isAbsolute(a),n=\"/\"===d(a,-1);(a=e(k(a.split(\"/\"),function(a){return!!a}),!b).join(\"/\"))||b||(a=\".\");a&&n&&(a+=\"/\");return(b?\"/\":\"\")+a};l.isAbsolute=function(a){return\"/\"===a.charAt(0)};l.join=function(){var a=Array.prototype.slice.call(arguments,0);return l.normalize(k(a,\nfunction(a,b){if(\"string\"!==typeof a)throw new TypeError(\"Arguments to path.join must be strings\");return a}).join(\"/\"))};l.relative=function(a,b){function d(a){for(var c=0;c<a.length&&\"\"===a[c];c++);for(var f=a.length-1;0<=f&&\"\"===a[f];f--);return c>f?[]:a.slice(c,f-c+1)}a=l.resolve(a).substr(1);b=l.resolve(b).substr(1);for(var h=d(a.split(\"/\")),c=d(b.split(\"/\")),f=Math.min(h.length,c.length),G=f,u=0;u<f;u++)if(h[u]!==c[u]){G=u;break}f=[];for(u=G;u<h.length;u++)f.push(\"..\");f=f.concat(c.slice(G));\nreturn f.join(\"/\")};l.sep=\"/\";l.delimiter=\":\";l.dirname=function(a){var b=r.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return\".\";b&&(b=b.substr(0,b.length-1));return a+b};l.basename=function(a,b){var d=r.exec(a).slice(1)[2];b&&d.substr(-1*b.length)===b&&(d=d.substr(0,d.length-b.length));return d};l.extname=function(a){return r.exec(a).slice(1)[3]};var d=\"b\"===\"ab\".substr(-1)?function(a,b,d){return a.substr(b,d)}:function(a,b,d){0>b&&(b=a.length+b);return a.substr(b,d)}}).call(this,p(\"node_modules/process/browser.js\"))},\n{\"node_modules/process/browser.js\":7}],7:[function(p,v,l){function b(){}p=v.exports={};p.nextTick=function(){if(\"undefined\"!==typeof window&&window.setImmediate)return function(b){return window.setImmediate(b)};if(\"undefined\"!==typeof window&&window.postMessage&&window.addEventListener){var b=[];window.addEventListener(\"message\",function(e){var k=e.source;k!==window&&null!==k||\"process-tick\"!==e.data||(e.stopPropagation(),0<b.length&&b.shift()())},!0);return function(e){b.push(e);window.postMessage(\"process-tick\",\n\"*\")}}return function(b){setTimeout(b,0)}}();p.title=\"browser\";p.browser=!0;p.env={};p.argv=[];p.on=b;p.once=b;p.off=b;p.emit=b;p.binding=function(b){throw Error(\"process.binding is not supported\");};p.cwd=function(){return\"/\"};p.chdir=function(b){throw Error(\"process.chdir is not supported\");}},{}],8:[function(p,v,l){function b(){this._array=[];this._set=Object.create(null)}var e=p(\"./util\"),k=Object.prototype.hasOwnProperty;b.fromArray=function(e,d){for(var a=new b,h=0,n=e.length;h<n;h++)a.add(e[h],\nd);return a};b.prototype.size=function(){return Object.getOwnPropertyNames(this._set).length};b.prototype.add=function(b,d){var a=e.toSetString(b),h=k.call(this._set,a),n=this._array.length;h&&!d||this._array.push(b);h||(this._set[a]=n)};b.prototype.has=function(b){b=e.toSetString(b);return k.call(this._set,b)};b.prototype.indexOf=function(b){var d=e.toSetString(b);if(k.call(this._set,d))return this._set[d];throw Error('\"'+b+'\" is not in the set.');};b.prototype.at=function(b){if(0<=b&&b<this._array.length)return this._array[b];\nthrow Error(\"No element indexed by \"+b);};b.prototype.toArray=function(){return this._array.slice()};l.ArraySet=b},{\"./util\":17}],9:[function(p,v,l){var b=p(\"./base64\");l.encode=function(e){var k=\"\",r=0>e?(-e<<1)+1:(e<<1)+0;do e=r&31,r>>>=5,0<r&&(e|=32),k+=b.encode(e);while(0<r);return k};l.decode=function(e,k,r){var d=e.length,a=0,h=0,n,t;do{if(k>=d)throw Error(\"Expected more digits in base 64 VLQ value.\");t=b.decode(e.charCodeAt(k++));if(-1===t)throw Error(\"Invalid base64 digit: \"+e.charAt(k-1));\nn=!!(t&32);t&=31;a+=t<<h;h+=5}while(n);e=a>>1;r.value=1===(a&1)?-e:e;r.rest=k}},{\"./base64\":10}],10:[function(p,v,l){var b=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\".split(\"\");l.encode=function(e){if(0<=e&&e<b.length)return b[e];throw new TypeError(\"Must be between 0 and 63: \"+e);};l.decode=function(b){return 65<=b&&90>=b?b-65:97<=b&&122>=b?b-97+26:48<=b&&57>=b?b-48+52:43==b?62:47==b?63:-1}},{}],11:[function(p,v,l){function b(e,k,r,d,a,h){var n=Math.floor((k-e)/2)+e,t=a(r,\nd[n],!0);return 0===t?n:0<t?1<k-n?b(n,k,r,d,a,h):h==l.LEAST_UPPER_BOUND?k<d.length?k:-1:n:1<n-e?b(e,n,r,d,a,h):h==l.LEAST_UPPER_BOUND?n:0>e?-1:e}l.GREATEST_LOWER_BOUND=1;l.LEAST_UPPER_BOUND=2;l.search=function(e,k,r,d){if(0===k.length)return-1;e=b(-1,k.length,e,k,r,d||l.GREATEST_LOWER_BOUND);if(0>e)return-1;for(;0<=e-1&&0===r(k[e],k[e-1],!0);)--e;return e}},{}],12:[function(p,v,l){function b(){this._array=[];this._sorted=!0;this._last={generatedLine:-1,generatedColumn:0}}var e=p(\"./util\");b.prototype.unsortedForEach=\nfunction(b,e){this._array.forEach(b,e)};b.prototype.add=function(b){var k=this._last,d=k.generatedLine,a=b.generatedLine,h=k.generatedColumn,n=b.generatedColumn;a>d||a==d&&n>=h||0>=e.compareByGeneratedPositionsInflated(k,b)?this._last=b:this._sorted=!1;this._array.push(b)};b.prototype.toArray=function(){this._sorted||(this._array.sort(e.compareByGeneratedPositionsInflated),this._sorted=!0);return this._array};l.MappingList=b},{\"./util\":17}],13:[function(p,v,l){function b(b,e,d){var a=b[e];b[e]=b[d];\nb[d]=a}function e(k,l,d,a){if(d<a){var h=d-1;b(k,Math.round(d+Math.random()*(a-d)),a);for(var n=k[a],t=d;t<a;t++)0>=l(k[t],n)&&(h+=1,b(k,h,t));b(k,h+1,t);h+=1;e(k,l,d,h-1);e(k,l,h+1,a)}}l.quickSort=function(b,l){e(b,l,0,b.length-1)}},{}],14:[function(p,v,l){function b(a){var c=a;\"string\"===typeof a&&(c=JSON.parse(a.replace(/^\\)\\]\\}'/,\"\")));return null!=c.sections?new r(c):new e(c)}function e(a){var c=a;\"string\"===typeof a&&(c=JSON.parse(a.replace(/^\\)\\]\\}'/,\"\")));a=d.getArg(c,\"version\");var b=d.getArg(c,\n\"sources\"),u=d.getArg(c,\"names\",[]),e=d.getArg(c,\"sourceRoot\",null),n=d.getArg(c,\"sourcesContent\",null),t=d.getArg(c,\"mappings\"),c=d.getArg(c,\"file\",null);if(a!=this._version)throw Error(\"Unsupported version: \"+a);b=b.map(String).map(d.normalize).map(function(a){return e&&d.isAbsolute(e)&&d.isAbsolute(a)?d.relative(e,a):a});this._names=h.fromArray(u.map(String),!0);this._sources=h.fromArray(b,!0);this.sourceRoot=e;this.sourcesContent=n;this._mappings=t;this.file=c}function k(){this.generatedColumn=\nthis.generatedLine=0;this.name=this.originalColumn=this.originalLine=this.source=null}function r(a){var c=a;\"string\"===typeof a&&(c=JSON.parse(a.replace(/^\\)\\]\\}'/,\"\")));a=d.getArg(c,\"version\");c=d.getArg(c,\"sections\");if(a!=this._version)throw Error(\"Unsupported version: \"+a);this._sources=new h;this._names=new h;var e={line:-1,column:0};this._sections=c.map(function(a){if(a.url)throw Error(\"Support for url field in sections not implemented.\");var c=d.getArg(a,\"offset\"),f=d.getArg(c,\"line\"),u=d.getArg(c,\n\"column\");if(f<e.line||f===e.line&&u<e.column)throw Error(\"Section offsets must be ordered and non-overlapping.\");e=c;return{generatedOffset:{generatedLine:f+1,generatedColumn:u+1},consumer:new b(d.getArg(a,\"map\"))}})}var d=p(\"./util\"),a=p(\"./binary-search\"),h=p(\"./array-set\").ArraySet,n=p(\"./base64-vlq\"),t=p(\"./quick-sort\").quickSort;b.fromSourceMap=function(a){return e.fromSourceMap(a)};b.prototype._version=3;b.prototype.__generatedMappings=null;Object.defineProperty(b.prototype,\"_generatedMappings\",\n{get:function(){this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot);return this.__generatedMappings}});b.prototype.__originalMappings=null;Object.defineProperty(b.prototype,\"_originalMappings\",{get:function(){this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot);return this.__originalMappings}});b.prototype._charIsMappingSeparator=function(a,b){var c=a.charAt(b);return\";\"===c||\",\"===c};b.prototype._parseMappings=function(a,b){throw Error(\"Subclasses must implement _parseMappings\");\n};b.GENERATED_ORDER=1;b.ORIGINAL_ORDER=2;b.GREATEST_LOWER_BOUND=1;b.LEAST_UPPER_BOUND=2;b.prototype.eachMapping=function(a,f,e){f=f||null;switch(e||b.GENERATED_ORDER){case b.GENERATED_ORDER:e=this._generatedMappings;break;case b.ORIGINAL_ORDER:e=this._originalMappings;break;default:throw Error(\"Unknown order of iteration.\");}var c=this.sourceRoot;e.map(function(a){var b=null===a.source?null:this._sources.at(a.source);null!=b&&null!=c&&(b=d.join(c,b));return{source:b,generatedLine:a.generatedLine,\ngeneratedColumn:a.generatedColumn,originalLine:a.originalLine,originalColumn:a.originalColumn,name:null===a.name?null:this._names.at(a.name)}},this).forEach(a,f)};b.prototype.allGeneratedPositionsFor=function(c){var b=d.getArg(c,\"line\"),e={source:d.getArg(c,\"source\"),originalLine:b,originalColumn:d.getArg(c,\"column\",0)};null!=this.sourceRoot&&(e.source=d.relative(this.sourceRoot,e.source));if(!this._sources.has(e.source))return[];e.source=this._sources.indexOf(e.source);var u=[],e=this._findMapping(e,\nthis._originalMappings,\"originalLine\",\"originalColumn\",d.compareByOriginalPositions,a.LEAST_UPPER_BOUND);if(0<=e){var h=this._originalMappings[e];if(void 0===c.column)for(b=h.originalLine;h&&h.originalLine===b;)u.push({line:d.getArg(h,\"generatedLine\",null),column:d.getArg(h,\"generatedColumn\",null),lastColumn:d.getArg(h,\"lastGeneratedColumn\",null)}),h=this._originalMappings[++e];else for(c=h.originalColumn;h&&h.originalLine===b&&h.originalColumn==c;)u.push({line:d.getArg(h,\"generatedLine\",null),column:d.getArg(h,\n\"generatedColumn\",null),lastColumn:d.getArg(h,\"lastGeneratedColumn\",null)}),h=this._originalMappings[++e]}return u};l.SourceMapConsumer=b;e.prototype=Object.create(b.prototype);e.prototype.consumer=b;e.fromSourceMap=function(a){var c=Object.create(e.prototype),b=c._names=h.fromArray(a._names.toArray(),!0),u=c._sources=h.fromArray(a._sources.toArray(),!0);c.sourceRoot=a._sourceRoot;c.sourcesContent=a._generateSourcesContent(c._sources.toArray(),c.sourceRoot);c.file=a._file;a=a._mappings.toArray().slice();\nfor(var n=c.__generatedMappings=[],l=c.__originalMappings=[],r=0,p=a.length;r<p;r++){var C=a[r],x=new k;x.generatedLine=C.generatedLine;x.generatedColumn=C.generatedColumn;C.source&&(x.source=u.indexOf(C.source),x.originalLine=C.originalLine,x.originalColumn=C.originalColumn,C.name&&(x.name=b.indexOf(C.name)),l.push(x));n.push(x)}t(c.__originalMappings,d.compareByOriginalPositions);return c};e.prototype._version=3;Object.defineProperty(e.prototype,\"sources\",{get:function(){return this._sources.toArray().map(function(a){return null!=\nthis.sourceRoot?d.join(this.sourceRoot,a):a},this)}});e.prototype._parseMappings=function(a,b){for(var c=1,f=0,e=0,h=0,l=0,r=0,p=a.length,x=0,v={},B={},F=[],H=[],z,E,q,D,J;x<p;)if(\";\"===a.charAt(x))c++,x++,f=0;else if(\",\"===a.charAt(x))x++;else{z=new k;z.generatedLine=c;for(D=x;D<p&&!this._charIsMappingSeparator(a,D);D++);E=a.slice(x,D);if(q=v[E])x+=E.length;else{for(q=[];x<D;)n.decode(a,x,B),J=B.value,x=B.rest,q.push(J);if(2===q.length)throw Error(\"Found a source, but no line and column\");if(3===\nq.length)throw Error(\"Found a source and line, but no column\");v[E]=q}z.generatedColumn=f+q[0];f=z.generatedColumn;1<q.length&&(z.source=l+q[1],l+=q[1],z.originalLine=e+q[2],e=z.originalLine,z.originalLine+=1,z.originalColumn=h+q[3],h=z.originalColumn,4<q.length&&(z.name=r+q[4],r+=q[4]));H.push(z);\"number\"===typeof z.originalLine&&F.push(z)}t(H,d.compareByGeneratedPositionsDeflated);this.__generatedMappings=H;t(F,d.compareByOriginalPositions);this.__originalMappings=F};e.prototype._findMapping=function(c,\nb,d,e,h,n){if(0>=c[d])throw new TypeError(\"Line must be greater than or equal to 1, got \"+c[d]);if(0>c[e])throw new TypeError(\"Column must be greater than or equal to 0, got \"+c[e]);return a.search(c,b,h,n)};e.prototype.computeColumnSpans=function(){for(var a=0;a<this._generatedMappings.length;++a){var b=this._generatedMappings[a];if(a+1<this._generatedMappings.length){var d=this._generatedMappings[a+1];if(b.generatedLine===d.generatedLine){b.lastGeneratedColumn=d.generatedColumn-1;continue}}b.lastGeneratedColumn=\nInfinity}};e.prototype.originalPositionFor=function(a){var c={generatedLine:d.getArg(a,\"line\"),generatedColumn:d.getArg(a,\"column\")};a=this._findMapping(c,this._generatedMappings,\"generatedLine\",\"generatedColumn\",d.compareByGeneratedPositionsDeflated,d.getArg(a,\"bias\",b.GREATEST_LOWER_BOUND));if(0<=a&&(a=this._generatedMappings[a],a.generatedLine===c.generatedLine)){c=d.getArg(a,\"source\",null);null!==c&&(c=this._sources.at(c),null!=this.sourceRoot&&(c=d.join(this.sourceRoot,c)));var e=d.getArg(a,\n\"name\",null);null!==e&&(e=this._names.at(e));return{source:c,line:d.getArg(a,\"originalLine\",null),column:d.getArg(a,\"originalColumn\",null),name:e}}return{source:null,line:null,column:null,name:null}};e.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(a){return null==a}):!1};e.prototype.sourceContentFor=function(a,b){if(!this.sourcesContent)return null;null!=this.sourceRoot&&(a=d.relative(this.sourceRoot,\na));if(this._sources.has(a))return this.sourcesContent[this._sources.indexOf(a)];var c;if(null!=this.sourceRoot&&(c=d.urlParse(this.sourceRoot))){var f=a.replace(/^file:\\/\\//,\"\");if(\"file\"==c.scheme&&this._sources.has(f))return this.sourcesContent[this._sources.indexOf(f)];if((!c.path||\"/\"==c.path)&&this._sources.has(\"/\"+a))return this.sourcesContent[this._sources.indexOf(\"/\"+a)]}if(b)return null;throw Error('\"'+a+'\" is not in the SourceMap.');};e.prototype.generatedPositionFor=function(a){var c=\nd.getArg(a,\"source\");null!=this.sourceRoot&&(c=d.relative(this.sourceRoot,c));if(!this._sources.has(c))return{line:null,column:null,lastColumn:null};c=this._sources.indexOf(c);c={source:c,originalLine:d.getArg(a,\"line\"),originalColumn:d.getArg(a,\"column\")};a=this._findMapping(c,this._originalMappings,\"originalLine\",\"originalColumn\",d.compareByOriginalPositions,d.getArg(a,\"bias\",b.GREATEST_LOWER_BOUND));return 0<=a&&(a=this._originalMappings[a],a.source===c.source)?{line:d.getArg(a,\"generatedLine\",\nnull),column:d.getArg(a,\"generatedColumn\",null),lastColumn:d.getArg(a,\"lastGeneratedColumn\",null)}:{line:null,column:null,lastColumn:null}};l.BasicSourceMapConsumer=e;r.prototype=Object.create(b.prototype);r.prototype.constructor=b;r.prototype._version=3;Object.defineProperty(r.prototype,\"sources\",{get:function(){for(var a=[],b=0;b<this._sections.length;b++)for(var d=0;d<this._sections[b].consumer.sources.length;d++)a.push(this._sections[b].consumer.sources[d]);return a}});r.prototype.originalPositionFor=\nfunction(c){var b={generatedLine:d.getArg(c,\"line\"),generatedColumn:d.getArg(c,\"column\")},e=a.search(b,this._sections,function(a,c){var b=a.generatedLine-c.generatedOffset.generatedLine;return b?b:a.generatedColumn-c.generatedOffset.generatedColumn});return(e=this._sections[e])?e.consumer.originalPositionFor({line:b.generatedLine-(e.generatedOffset.generatedLine-1),column:b.generatedColumn-(e.generatedOffset.generatedLine===b.generatedLine?e.generatedOffset.generatedColumn-1:0),bias:c.bias}):{source:null,\nline:null,column:null,name:null}};r.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(a){return a.consumer.hasContentsOfAllSources()})};r.prototype.sourceContentFor=function(a,b){for(var c=0;c<this._sections.length;c++){var f=this._sections[c].consumer.sourceContentFor(a,!0);if(f)return f}if(b)return null;throw Error('\"'+a+'\" is not in the SourceMap.');};r.prototype.generatedPositionFor=function(a){for(var c=0;c<this._sections.length;c++){var b=this._sections[c];if(-1!==\nb.consumer.sources.indexOf(d.getArg(a,\"source\"))){var e=b.consumer.generatedPositionFor(a);if(e)return{line:e.line+(b.generatedOffset.generatedLine-1),column:e.column+(b.generatedOffset.generatedLine===e.line?b.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}};r.prototype._parseMappings=function(a,b){this.__generatedMappings=[];this.__originalMappings=[];for(var c=0;c<this._sections.length;c++)for(var f=this._sections[c],e=f.consumer._generatedMappings,h=0;h<e.length;h++){var n=\ne[h],k=f.consumer._sources.at(n.source);null!==f.consumer.sourceRoot&&(k=d.join(f.consumer.sourceRoot,k));this._sources.add(k);var k=this._sources.indexOf(k),l=f.consumer._names.at(n.name);this._names.add(l);l=this._names.indexOf(l);n={source:k,generatedLine:n.generatedLine+(f.generatedOffset.generatedLine-1),generatedColumn:n.generatedColumn+(f.generatedOffset.generatedLine===n.generatedLine?f.generatedOffset.generatedColumn-1:0),originalLine:n.originalLine,originalColumn:n.originalColumn,name:l};\nthis.__generatedMappings.push(n);\"number\"===typeof n.originalLine&&this.__originalMappings.push(n)}t(this.__generatedMappings,d.compareByGeneratedPositionsDeflated);t(this.__originalMappings,d.compareByOriginalPositions)};l.IndexedSourceMapConsumer=r},{\"./array-set\":8,\"./base64-vlq\":9,\"./binary-search\":11,\"./quick-sort\":13,\"./util\":17}],15:[function(p,v,l){function b(a){a||(a={});this._file=k.getArg(a,\"file\",null);this._sourceRoot=k.getArg(a,\"sourceRoot\",null);this._skipValidation=k.getArg(a,\"skipValidation\",\n!1);this._sources=new r;this._names=new r;this._mappings=new d;this._sourcesContents=null}var e=p(\"./base64-vlq\"),k=p(\"./util\"),r=p(\"./array-set\").ArraySet,d=p(\"./mapping-list\").MappingList;b.prototype._version=3;b.fromSourceMap=function(a){var d=a.sourceRoot,e=new b({file:a.file,sourceRoot:d});a.eachMapping(function(a){var c={generated:{line:a.generatedLine,column:a.generatedColumn}};null!=a.source&&(c.source=a.source,null!=d&&(c.source=k.relative(d,c.source)),c.original={line:a.originalLine,column:a.originalColumn},\nnull!=a.name&&(c.name=a.name));e.addMapping(c)});a.sources.forEach(function(b){var c=a.sourceContentFor(b);null!=c&&e.setSourceContent(b,c)});return e};b.prototype.addMapping=function(a){var b=k.getArg(a,\"generated\"),d=k.getArg(a,\"original\",null),e=k.getArg(a,\"source\",null);a=k.getArg(a,\"name\",null);this._skipValidation||this._validateMapping(b,d,e,a);null!=e&&(e=String(e),this._sources.has(e)||this._sources.add(e));null!=a&&(a=String(a),this._names.has(a)||this._names.add(a));this._mappings.add({generatedLine:b.line,\ngeneratedColumn:b.column,originalLine:null!=d&&d.line,originalColumn:null!=d&&d.column,source:e,name:a})};b.prototype.setSourceContent=function(a,b){var d=a;null!=this._sourceRoot&&(d=k.relative(this._sourceRoot,d));null!=b?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[k.toSetString(d)]=b):this._sourcesContents&&(delete this._sourcesContents[k.toSetString(d)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))};b.prototype.applySourceMap=\nfunction(a,b,d){var e=b;if(null==b){if(null==a.file)throw Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\\'s \"file\" property. Both were omitted.');e=a.file}var c=this._sourceRoot;null!=c&&(e=k.relative(c,e));var f=new r,h=new r;this._mappings.unsortedForEach(function(b){if(b.source===e&&null!=b.originalLine){var n=a.originalPositionFor({line:b.originalLine,column:b.originalColumn});null!=n.source&&(b.source=n.source,null!=d&&(b.source=\nk.join(d,b.source)),null!=c&&(b.source=k.relative(c,b.source)),b.originalLine=n.line,b.originalColumn=n.column,null!=n.name&&(b.name=n.name))}n=b.source;null==n||f.has(n)||f.add(n);b=b.name;null==b||h.has(b)||h.add(b)},this);this._sources=f;this._names=h;a.sources.forEach(function(b){var f=a.sourceContentFor(b);null!=f&&(null!=d&&(b=k.join(d,b)),null!=c&&(b=k.relative(c,b)),this.setSourceContent(b,f))},this)};b.prototype._validateMapping=function(a,b,d,e){if(!(a&&\"line\"in a&&\"column\"in a&&0<a.line&&\n0<=a.column&&!b&&!d&&!e||a&&\"line\"in a&&\"column\"in a&&b&&\"line\"in b&&\"column\"in b&&0<a.line&&0<=a.column&&0<b.line&&0<=b.column&&d))throw Error(\"Invalid mapping: \"+JSON.stringify({generated:a,source:d,original:b,name:e}));};b.prototype._serializeMappings=function(){for(var a=0,b=1,d=0,l=0,c=0,f=0,r=\"\",u,p,I,A=this._mappings.toArray(),v=0,C=A.length;v<C;v++){p=A[v];u=\"\";if(p.generatedLine!==b)for(a=0;p.generatedLine!==b;)u+=\";\",b++;else if(0<v){if(!k.compareByGeneratedPositionsInflated(p,A[v-1]))continue;\nu+=\",\"}u+=e.encode(p.generatedColumn-a);a=p.generatedColumn;null!=p.source&&(I=this._sources.indexOf(p.source),u+=e.encode(I-f),f=I,u+=e.encode(p.originalLine-1-l),l=p.originalLine-1,u+=e.encode(p.originalColumn-d),d=p.originalColumn,null!=p.name&&(p=this._names.indexOf(p.name),u+=e.encode(p-c),c=p));r+=u}return r};b.prototype._generateSourcesContent=function(a,b){return a.map(function(a){if(!this._sourcesContents)return null;null!=b&&(a=k.relative(b,a));a=k.toSetString(a);return Object.prototype.hasOwnProperty.call(this._sourcesContents,\na)?this._sourcesContents[a]:null},this)};b.prototype.toJSON=function(){var a={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};null!=this._file&&(a.file=this._file);null!=this._sourceRoot&&(a.sourceRoot=this._sourceRoot);this._sourcesContents&&(a.sourcesContent=this._generateSourcesContent(a.sources,a.sourceRoot));return a};b.prototype.toString=function(){return JSON.stringify(this.toJSON())};l.SourceMapGenerator=b},{\"./array-set\":8,\n\"./base64-vlq\":9,\"./mapping-list\":12,\"./util\":17}],16:[function(p,v,l){function b(b,a,e,n,k){this.children=[];this.sourceContents={};this.line=null==b?null:b;this.column=null==a?null:a;this.source=null==e?null:e;this.name=null==k?null:k;this.$$$isSourceNode$$$=!0;null!=n&&this.add(n)}var e=p(\"./source-map-generator\").SourceMapGenerator,k=p(\"./util\"),r=/(\\r?\\n)/;b.fromStringWithSourceMap=function(d,a,e){function h(a,c){if(null===a||void 0===a.source)l.add(c);else{var f=e?k.join(e,a.source):a.source;\nl.add(new b(a.originalLine,a.originalColumn,f,c,a.name))}}var l=new b,c=d.split(r),f=function(){var a=c.shift(),b=c.shift()||\"\";return a+b},p=1,u=0,v=null;a.eachMapping(function(a){if(null!==v)if(p<a.generatedLine)h(v,f()),p++,u=0;else{var b=c[0],d=b.substr(0,a.generatedColumn-u);c[0]=b.substr(a.generatedColumn-u);u=a.generatedColumn;h(v,d);v=a;return}for(;p<a.generatedLine;)l.add(f()),p++;u<a.generatedColumn&&(b=c[0],l.add(b.substr(0,a.generatedColumn)),c[0]=b.substr(a.generatedColumn),u=a.generatedColumn);\nv=a},this);0<c.length&&(v&&h(v,f()),l.add(c.join(\"\")));a.sources.forEach(function(c){var b=a.sourceContentFor(c);null!=b&&(null!=e&&(c=k.join(e,c)),l.setSourceContent(c,b))});return l};b.prototype.add=function(b){if(Array.isArray(b))b.forEach(function(a){this.add(a)},this);else if(b.$$$isSourceNode$$$||\"string\"===typeof b)b&&this.children.push(b);else throw new TypeError(\"Expected a SourceNode, string, or an array of SourceNodes and strings. Got \"+b);return this};b.prototype.prepend=function(b){if(Array.isArray(b))for(var a=\nb.length-1;0<=a;a--)this.prepend(b[a]);else if(b.$$$isSourceNode$$$||\"string\"===typeof b)this.children.unshift(b);else throw new TypeError(\"Expected a SourceNode, string, or an array of SourceNodes and strings. Got \"+b);return this};b.prototype.walk=function(b){for(var a,d=0,e=this.children.length;d<e;d++)a=this.children[d],a.$$$isSourceNode$$$?a.walk(b):\"\"!==a&&b(a,{source:this.source,line:this.line,column:this.column,name:this.name})};b.prototype.join=function(b){var a,d,e=this.children.length;\nif(0<e){a=[];for(d=0;d<e-1;d++)a.push(this.children[d]),a.push(b);a.push(this.children[d]);this.children=a}return this};b.prototype.replaceRight=function(b,a){var d=this.children[this.children.length-1];d.$$$isSourceNode$$$?d.replaceRight(b,a):\"string\"===typeof d?this.children[this.children.length-1]=d.replace(b,a):this.children.push(\"\".replace(b,a));return this};b.prototype.setSourceContent=function(b,a){this.sourceContents[k.toSetString(b)]=a};b.prototype.walkSourceContents=function(b){for(var a=\n0,d=this.children.length;a<d;a++)this.children[a].$$$isSourceNode$$$&&this.children[a].walkSourceContents(b);for(var e=Object.keys(this.sourceContents),a=0,d=e.length;a<d;a++)b(k.fromSetString(e[a]),this.sourceContents[e[a]])};b.prototype.toString=function(){var b=\"\";this.walk(function(a){b+=a});return b};b.prototype.toStringWithSourceMap=function(b){var a=\"\",d=1,k=0,l=new e(b),c=!1,f=null,p=null,u=null,r=null;this.walk(function(b,e){a+=b;null!==e.source&&null!==e.line&&null!==e.column?(f===e.source&&\np===e.line&&u===e.column&&r===e.name||l.addMapping({source:e.source,original:{line:e.line,column:e.column},generated:{line:d,column:k},name:e.name}),f=e.source,p=e.line,u=e.column,r=e.name,c=!0):c&&(l.addMapping({generated:{line:d,column:k}}),f=null,c=!1);for(var h=0,n=b.length;h<n;h++)10===b.charCodeAt(h)?(d++,k=0,h+1===n?(f=null,c=!1):c&&l.addMapping({source:e.source,original:{line:e.line,column:e.column},generated:{line:d,column:k},name:e.name})):k++});this.walkSourceContents(function(a,b){l.setSourceContent(a,\nb)});return{code:a,map:l}};l.SourceNode=b},{\"./source-map-generator\":15,\"./util\":17}],17:[function(p,v,l){function b(a){return(a=a.match(n))?{scheme:a[1],auth:a[2],host:a[3],port:a[4],path:a[5]}:null}function e(a){var b=\"\";a.scheme&&(b+=a.scheme+\":\");b+=\"//\";a.auth&&(b+=a.auth+\"@\");a.host&&(b+=a.host);a.port&&(b+=\":\"+a.port);a.path&&(b+=a.path);return b}function k(a){var c=a,d=b(a);if(d){if(!d.path)return a;c=d.path}a=l.isAbsolute(c);for(var c=c.split(/\\/+/),h,k=0,n=c.length-1;0<=n;n--)h=c[n],\".\"===\nh?c.splice(n,1):\"..\"===h?k++:0<k&&(\"\"===h?(c.splice(n+1,k),k=0):(c.splice(n,2),k--));c=c.join(\"/\");\"\"===c&&(c=a?\"/\":\".\");return d?(d.path=c,e(d)):c}function r(a){return a}function d(a){return h(a)?\"$\"+a:a}function a(a){return h(a)?a.slice(1):a}function h(a){if(!a)return!1;var b=a.length;if(9>b||95!==a.charCodeAt(b-1)||95!==a.charCodeAt(b-2)||111!==a.charCodeAt(b-3)||116!==a.charCodeAt(b-4)||111!==a.charCodeAt(b-5)||114!==a.charCodeAt(b-6)||112!==a.charCodeAt(b-7)||95!==a.charCodeAt(b-8)||95!==a.charCodeAt(b-\n9))return!1;for(b-=10;0<=b;b--)if(36!==a.charCodeAt(b))return!1;return!0}l.getArg=function(a,b,d){if(b in a)return a[b];if(3===arguments.length)return d;throw Error('\"'+b+'\" is a required argument.');};var n=/^(?:([\\w+\\-.]+):)?\\/\\/(?:(\\w+:\\w+)@)?([\\w.]*)(?::(\\d+))?(\\S*)$/,t=/^data:.+\\,.+$/;l.urlParse=b;l.urlGenerate=e;l.normalize=k;l.join=function(a,d){\"\"===a&&(a=\".\");\"\"===d&&(d=\".\");var c=b(d),f=b(a);f&&(a=f.path||\"/\");if(c&&!c.scheme)return f&&(c.scheme=f.scheme),e(c);if(c||d.match(t))return d;\nif(f&&!f.host&&!f.path)return f.host=d,e(f);c=\"/\"===d.charAt(0)?d:k(a.replace(/\\/+$/,\"\")+\"/\"+d);return f?(f.path=c,e(f)):c};l.isAbsolute=function(a){return\"/\"===a.charAt(0)||!!a.match(n)};l.relative=function(a,b){\"\"===a&&(a=\".\");a=a.replace(/\\/$/,\"\");for(var c=0;0!==b.indexOf(a+\"/\");){var d=a.lastIndexOf(\"/\");if(0>d)return b;a=a.slice(0,d);if(a.match(/^([^\\/]+:\\/)?\\/*$/))return b;++c}return Array(c+1).join(\"../\")+b.substr(a.length+1)};p=!(\"__proto__\"in Object.create(null));l.toSetString=p?r:d;l.fromSetString=\np?r:a;l.compareByOriginalPositions=function(a,b,d){var c=a.source-b.source;if(0!==c)return c;c=a.originalLine-b.originalLine;if(0!==c)return c;c=a.originalColumn-b.originalColumn;if(0!==c||d)return c;c=a.generatedColumn-b.generatedColumn;if(0!==c)return c;c=a.generatedLine-b.generatedLine;return 0!==c?c:a.name-b.name};l.compareByGeneratedPositionsDeflated=function(a,b,d){var c=a.generatedLine-b.generatedLine;if(0!==c)return c;c=a.generatedColumn-b.generatedColumn;if(0!==c||d)return c;c=a.source-b.source;\nif(0!==c)return c;c=a.originalLine-b.originalLine;if(0!==c)return c;c=a.originalColumn-b.originalColumn;return 0!==c?c:a.name-b.name};l.compareByGeneratedPositionsInflated=function(a,b){var c=a.generatedLine-b.generatedLine;if(0!==c)return c;c=a.generatedColumn-b.generatedColumn;if(0!==c)return c;var c=a.source,d=b.source,c=c===d?0:c>d?1:-1;if(0!==c)return c;c=a.originalLine-b.originalLine;if(0!==c)return c;c=a.originalColumn-b.originalColumn;0===c&&(c=a.name,d=b.name,c=c===d?0:c>d?1:-1);return c}},\n{}],18:[function(p,v,l){l.SourceMapGenerator=p(\"./lib/source-map-generator\").SourceMapGenerator;l.SourceMapConsumer=p(\"./lib/source-map-consumer\").SourceMapConsumer;l.SourceNode=p(\"./lib/source-node\").SourceNode},{\"./lib/source-map-consumer\":14,\"./lib/source-map-generator\":15,\"./lib/source-node\":16}],19:[function(p,v,l){(function(b,e){function k(){return\"browser\"===K?!0:\"node\"===K?!1:\"undefined\"!==typeof window&&\"function\"===typeof XMLHttpRequest&&!(window.require&&window.module&&window.process&&\n\"renderer\"===window.process.type)}function r(a){return function(b){for(var c=0;c<a.length;c++){var d=a[c](b);if(d)return d}return null}}function d(a,b){if(!a)return b;var c=I.dirname(a),d=/^\\w+:\\/\\/[^\\/]*/.exec(c),d=d?d[0]:\"\";return d+I.resolve(c.slice(d.length),b)}function a(a){var b=F[a.source];if(!b){var c=D(a.source);c?(b=F[a.source]={url:c.url,map:new M(c.map)},b.map.sourcesContent&&b.map.sources.forEach(function(a,c){var g=b.map.sourcesContent[c];if(g){var e=d(b.url,a);B[e]=g}})):b=F[a.source]=\n{url:null,map:null}}return b&&b.map&&(c=b.map.originalPositionFor(a),null!==c.source)?(c.source=d(b.url,c.source),c):a}function h(b){var c=/^eval at ([^(]+) \\((.+):(\\d+):(\\d+)\\)$/.exec(b);return c?(b=a({source:c[2],line:+c[3],column:c[4]-1}),\"eval at \"+c[1]+\" (\"+b.source+\":\"+b.line+\":\"+(b.column+1)+\")\"):(c=/^eval at ([^(]+) \\((.+)\\)$/.exec(b))?\"eval at \"+c[1]+\" (\"+h(c[2])+\")\":b}function n(){var a,b=\"\";this.isNative()?b=\"native\":(a=this.getScriptNameOrSourceURL(),!a&&this.isEval()&&(b=this.getEvalOrigin(),\nb+=\", \"),b=a?b+a:b+\"<anonymous>\",a=this.getLineNumber(),null!=a&&(b+=\":\"+a,(a=this.getColumnNumber())&&(b+=\":\"+a)));a=\"\";var c=this.getFunctionName(),d=!0,e=this.isConstructor();if(this.isToplevel()||e)e?a+=\"new \"+(c||\"<anonymous>\"):c?a+=c:(a+=b,d=!1);else{e=this.getTypeName();\"[object Object]\"===e&&(e=\"null\");var f=this.getMethodName();c?(e&&0!=c.indexOf(e)&&(a+=e+\".\"),a+=c,f&&c.indexOf(\".\"+f)!=c.length-f.length-1&&(a+=\" [as \"+f+\"]\")):a+=e+\".\"+(f||\"<anonymous>\")}d&&(a+=\" (\"+b+\")\");return a}function t(a){var b=\n{};Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(function(c){b[c]=/^(?:is|get)/.test(c)?function(){return a[c].call(a)}:a[c]});b.toString=n;return b}function c(b){if(b.isNative())return b;var c=b.getFileName()||b.getScriptNameOrSourceURL();if(c){var d=b.getLineNumber(),e=b.getColumnNumber()-1;1!==d||k()||b.isEval()||(e-=62);var f=a({source:c,line:d,column:e});b=t(b);b.getFileName=function(){return f.source};b.getLineNumber=function(){return f.line};b.getColumnNumber=function(){return f.column+\n1};b.getScriptNameOrSourceURL=function(){return f.source};return b}var l=b.isEval()&&b.getEvalOrigin();l&&(l=h(l),b=t(b),b.getEvalOrigin=function(){return l});return b}function f(a,b){x&&(B={},F={});return a+b.map(function(a){return\"\\n    at \"+c(a)}).join(\"\")}function v(a){var b=/\\n    at [^(]+ \\((.*):(\\d+):(\\d+)\\)/.exec(a.stack);if(b){a=b[1];var c=+b[2],b=+b[3],d=B[a];!d&&A&&A.existsSync(a)&&(d=A.readFileSync(a,\"utf8\"));if(d&&(d=d.split(/(?:\\r\\n|\\r|\\n)/)[c-1]))return a+\":\"+c+\"\\n\"+d+\"\\n\"+Array(b).join(\" \")+\n\"^\"}return null}function u(){var a=b.emit;b.emit=function(c){if(\"uncaughtException\"===c){var d=arguments[1]&&arguments[1].stack,e=0<this.listeners(c).length;if(d&&!e){d=arguments[1];if(e=v(d))console.error(),console.error(e);console.error(d.stack);b.exit(1);return}}return a.apply(this,arguments)}}var M=p(\"source-map\").SourceMapConsumer,I=p(\"path\"),A;try{A=p(\"fs\"),A.existsSync&&A.readFileSync||(A=null)}catch(J){}var L=!1,C=!1,x=!1,K=\"auto\",B={},F={},H=/^data:application\\/json[^,]+base64,/,z=[],E=[],\nq=r(z);z.push(function(a){a=a.trim();if(a in B)return B[a];var b=null;if(A)A.existsSync(a)&&(b=A.readFileSync(a,\"utf8\"));else{var c=new XMLHttpRequest;c.open(\"GET\",a,!1);c.send(null);b=null;4===c.readyState&&200===c.status&&(b=c.responseText)}return B[a]=b});var D=r(E);E.push(function(a){var b;a:{if(k())try{var c=new XMLHttpRequest;c.open(\"GET\",a,!1);c.send(null);var f=c.getResponseHeader(\"SourceMap\")||c.getResponseHeader(\"X-SourceMap\");if(f){b=f;break a}}catch(P){}b=q(a);for(var c=/(?:\\/\\/[@#][ \\t]+sourceMappingURL=([^\\s'\"]+?)[ \\t]*$)|(?:\\/\\*[@#][ \\t]+sourceMappingURL=([^\\*]+?)[ \\t]*(?:\\*\\/)[ \\t]*$)/mg,\nh;f=c.exec(b);)h=f;b=h?h[1]:null}if(!b)return null;H.test(b)?(h=b.slice(b.indexOf(\",\")+1),h=(new e(h,\"base64\")).toString(),b=a):(b=d(a,b),h=q(b));return h?{url:b,map:h}:null});l.wrapCallSite=c;l.getErrorSource=v;l.mapSourcePosition=a;l.retrieveSourceMap=D;l.install=function(a){a=a||{};if(a.environment&&(K=a.environment,-1===[\"node\",\"browser\",\"auto\"].indexOf(K)))throw Error(\"environment \"+K+\" was unknown. Available options are {auto, browser, node}\");a.retrieveFile&&(a.overrideRetrieveFile&&(z.length=\n0),z.unshift(a.retrieveFile));a.retrieveSourceMap&&(a.overrideRetrieveSourceMap&&(E.length=0),E.unshift(a.retrieveSourceMap));if(a.hookRequire&&!k()){var c;try{c=p(\"module\")}catch(m){}var d=c.prototype._compile;d.__sourceMapSupport||(c.prototype._compile=function(a,b){B[b]=a;F[b]=void 0;return d.call(this,a,b)},c.prototype._compile.__sourceMapSupport=!0)}x||(x=\"emptyCacheBetweenOperations\"in a?a.emptyCacheBetweenOperations:!1);L||(L=!0,Error.prepareStackTrace=f);!C&&(\"handleUncaughtExceptions\"in a?\na.handleUncaughtExceptions:1)&&\"object\"===typeof b&&null!==b&&\"function\"===typeof b.on&&(C=!0,u())}}).call(this,p(\"node_modules/process/browser.js\"),p(\"buffer\").Buffer)},{\"node_modules/process/browser.js\":7,buffer:4,fs:3,module:3,path:6,\"source-map\":18}]},{},[1]);return N});\n"

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(198)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../css-loader/index.js!./jasmine.css", function() {
			var newContent = require("!!../../../../css-loader/index.js!./jasmine.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(95)
var ieee754 = __webpack_require__(97)
var isArray = __webpack_require__(98)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ })

/******/ });
});