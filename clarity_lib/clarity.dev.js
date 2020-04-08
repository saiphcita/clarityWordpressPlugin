/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/globalize.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clarity.ts":
/*!************************!*\
  !*** ./src/clarity.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core = __webpack_require__(/*! @src/core */ "./src/core/index.ts");
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var event_1 = __webpack_require__(/*! @src/core/event */ "./src/core/event.ts");
var data = __webpack_require__(/*! @src/data */ "./src/data/index.ts");
var diagnostic = __webpack_require__(/*! @src/diagnostic */ "./src/diagnostic/index.ts");
var interaction = __webpack_require__(/*! @src/interaction */ "./src/interaction/index.ts");
var layout = __webpack_require__(/*! @src/layout */ "./src/layout/index.ts");
var status = false;
function config(override) {
    // Process custom configuration overrides, if available
    if (status) {
        return false;
    }
    for (var key in override) {
        if (key in config_1.default) {
            config_1.default[key] = override[key];
        }
    }
    return true;
}
exports.config = config;
function start(override) {
    if (override === void 0) { override = {}; }
    console.log('Clarity Start!! 12', override);
    if (core.check()) {
        console.log('Everything will start now Start!!');
        config(override);
        status = true;
        core.start();
        console.log('1');
        data.start();
        console.log('2');
        diagnostic.start();
        console.log('3');
        layout.start();
        console.log('4');
        interaction.start();
    }
}
exports.start = start;
function pause() {
    end();
    event_1.bind(document, "mousemove", resume);
    event_1.bind(document, "touchstart", resume);
    event_1.bind(window, "resize", resume);
    event_1.bind(window, "scroll", resume);
    event_1.bind(window, "pageshow", resume);
}
exports.pause = pause;
function resume() {
    console.log("resume");
    start();
}
exports.resume = resume;
function end() {
    if (status) {
        interaction.end();
        layout.end();
        diagnostic.end();
        data.end();
        core.end();
        status = false;
    }
}
exports.end = end;
function tag(key, value) {
    // Do not process tags if Clarity is not already activated
    if (status) {
        data.tag(key, value);
    }
}
exports.tag = tag;
function active() {
    return status;
}
exports.active = active;


/***/ }),

/***/ "./src/core/config.ts":
/*!****************************!*\
  !*** ./src/core/config.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    projectId: null,
    longtask: 30,
    lookahead: 500,
    distance: 20,
    interval: 25,
    delay: 1000,
    expire: 7,
    ping: 60 * 1000,
    timeout: 10 * 60 * 1000,
    shutdown: 2 * 60 * 60 * 1000,
    cssRules: false,
    lean: false,
    tokens: [],
    url: "",
    onstart: null,
    upload: null,
    wp_upload: null
};
exports.default = config;


/***/ }),

/***/ "./src/core/event.ts":
/*!***************************!*\
  !*** ./src/core/event.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bindings = [];
function bind(target, event, listener, capture) {
    if (capture === void 0) { capture = false; }
    console.log('bind addEventListener');
    target.addEventListener(event, listener, capture);
    bindings.push({ event: event, target: target, listener: listener, capture: capture });
}
exports.bind = bind;
function reset() {
    // Walk through existing list of bindings and remove them all
    for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
        var binding = bindings_1[_i];
        (binding.target).removeEventListener(binding.event, binding.listener, binding.capture);
    }
    bindings = [];
}
exports.reset = reset;


/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event = __webpack_require__(/*! @src/core/event */ "./src/core/event.ts");
exports.startTime = 0;
function start() {
    exports.startTime = performance.now();
    event.reset();
}
exports.start = start;
function end() {
    event.reset();
    exports.startTime = 0;
}
exports.end = end;
function check() {
    try {
        return typeof Promise !== "undefined" &&
            window["MutationObserver"] &&
            document["createTreeWalker"] &&
            "now" in Date &&
            "now" in performance &&
            typeof WeakMap !== "undefined";
    }
    catch (ex) {
        return false;
    }
}
exports.check = check;


/***/ }),

/***/ "./src/core/mask.ts":
/*!**************************!*\
  !*** ./src/core/mask.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(value) {
    var wasWhiteSpace = false;
    var textCount = 0;
    var wordCount = 0;
    for (var i = 0; i < value.length; i++) {
        var code = value.charCodeAt(i);
        var isWhiteSpace = (code === 32 || code === 10 || code === 9 || code === 13);
        var isNotCharacter = ((code >= 33 && code <= 47) || (code >= 91 && code <= 96) || (code >= 123 && code <= 126));
        textCount += isWhiteSpace || isNotCharacter ? 0 : 1;
        wordCount += isWhiteSpace && !wasWhiteSpace ? 1 : 0;
        wasWhiteSpace = isWhiteSpace;
    }
    return "*" + textCount.toString(36) + "*" + wordCount.toString(36);
}
exports.default = default_1;


/***/ }),

/***/ "./src/core/task.ts":
/*!**************************!*\
  !*** ./src/core/task.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var metrics = __webpack_require__(/*! @src/data/metric */ "./src/data/metric.ts");
var tracker = {};
var threshold = config_1.default.longtask;
var queue = [];
var active = null;
function schedule(task) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, queue_1, q, promise;
        return __generator(this, function (_a) {
            // If this task is already scheduled, skip it
            for (_i = 0, queue_1 = queue; _i < queue_1.length; _i++) {
                q = queue_1[_i];
                if (q.task === task) {
                    return [2 /*return*/];
                }
            }
            promise = new Promise(function (resolve) {
                queue.push({ task: task, resolve: resolve });
            });
            if (active === null) {
                run();
            }
            return [2 /*return*/, promise];
        });
    });
}
exports.schedule = schedule;
function run() {
    var entry = queue.shift();
    if (entry) {
        active = entry;
        entry.task().then(function () {
            entry.resolve();
            active = null;
            run();
        });
    }
}
function longtask(method) {
    var elapsed = Date.now() - tracker[method];
    return (elapsed > threshold);
}
exports.longtask = longtask;
function start(method) {
    if (!(method in tracker)) {
        tracker[method] = 0;
    }
    tracker[method] = Date.now();
}
exports.start = start;
function stop(method) {
    var end = Date.now();
    var duration = end - tracker[method];
    metrics.counter(method, duration);
}
exports.stop = stop;
function idle(method) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stop(method);
                    return [4 /*yield*/, wait()];
                case 1:
                    _a.sent();
                    start(method);
                    return [2 /*return*/];
            }
        });
    });
}
exports.idle = idle;
function wait() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    requestAnimationFrame(resolve);
                })];
        });
    });
}


/***/ }),

/***/ "./src/core/time.ts":
/*!**************************!*\
  !*** ./src/core/time.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @src/core */ "./src/core/index.ts");
function default_1() {
    return Math.round(performance.now() - core_1.startTime);
}
exports.default = default_1;


/***/ }),

/***/ "./src/core/version.ts":
/*!*****************************!*\
  !*** ./src/core/version.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var version = "1.0.0-b10";
exports.default = version;


/***/ }),

/***/ "./src/data/encode.ts":
/*!****************************!*\
  !*** ./src/data/encode.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var time_1 = __webpack_require__(/*! @src/core/time */ "./src/core/time.ts");
var metadata_1 = __webpack_require__(/*! @src/data/metadata */ "./src/data/metadata.ts");
var metric = __webpack_require__(/*! @src/data/metric */ "./src/data/metric.ts");
var ping = __webpack_require__(/*! @src/data/ping */ "./src/data/ping.ts");
var tag = __webpack_require__(/*! @src/data/tag */ "./src/data/tag.ts");
var upload_1 = __webpack_require__(/*! ./upload */ "./src/data/upload.ts");
function default_1(event) {
    var t = time_1.default();
    var tokens = [t, event];
    switch (event) {
        case 22 /* Ping */:
            tokens.push(ping.data.gap);
            upload_1.queue(tokens);
            break;
        case 20 /* Page */:
            metric.counter(15 /* StartTime */, Math.round(performance.now()));
            tokens.push(metadata_1.metadata.page.timestamp);
            tokens.push(metadata_1.metadata.page.ua);
            tokens.push(metadata_1.metadata.page.url);
            tokens.push(metadata_1.metadata.page.referrer);
            tokens.push(metadata_1.metadata.page.lean);
            upload_1.queue(tokens);
            break;
        case 21 /* Tag */:
            tokens.push(tag.data.key);
            tokens.push(tag.data.value);
            upload_1.queue(tokens);
            break;
        case 32 /* Upload */:
            tokens.push(upload_1.track.sequence);
            tokens.push(upload_1.track.attempts);
            tokens.push(upload_1.track.status);
            upload_1.queue(tokens);
            break;
        case 0 /* Metric */:
            if (metric.updates.length > 0) {
                for (var d in metric.data) {
                    if (metric.data[d]) {
                        var m = parseInt(d, 10);
                        if (metric.updates.indexOf(m) >= 0) {
                            tokens.push(m);
                            tokens.push(metric.data[d]);
                        }
                    }
                }
                metric.reset();
                upload_1.queue(tokens);
            }
            break;
    }
}
exports.default = default_1;


/***/ }),

/***/ "./src/data/hash.ts":
/*!**************************!*\
  !*** ./src/data/hash.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable: no-bitwise
function default_1(input) {
    // Code inspired from C# GetHashCode: https://github.com/Microsoft/referencesource/blob/master/mscorlib/system/string.cs
    var hash = 0;
    var hashOne = 5381;
    var hashTwo = hashOne;
    for (var i = 0; i < input.length; i += 2) {
        var charOne = input.charCodeAt(i);
        hashOne = ((hashOne << 5) + hashOne) ^ charOne;
        if (i + 1 < input.length) {
            var charTwo = input.charCodeAt(i + 1);
            hashTwo = ((hashTwo << 5) + hashTwo) ^ charTwo;
        }
    }
    // Replace the magic number from C# implementation (1566083941) with a smaller prime number (11579)
    // This ensures we don't hit integer overflow and prevent collisions
    hash = Math.abs(hashOne + (hashTwo * 11579));
    return hash.toString(36).slice(-6); // Limit hashes to 6 characters
}
exports.default = default_1;


/***/ }),

/***/ "./src/data/index.ts":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata = __webpack_require__(/*! @src/data/metadata */ "./src/data/metadata.ts");
var metric = __webpack_require__(/*! @src/data/metric */ "./src/data/metric.ts");
var ping = __webpack_require__(/*! @src/data/ping */ "./src/data/ping.ts");
var tag = __webpack_require__(/*! @src/data/tag */ "./src/data/tag.ts");
var upload = __webpack_require__(/*! @src/data/upload */ "./src/data/upload.ts");
var tag_1 = __webpack_require__(/*! @src/data/tag */ "./src/data/tag.ts");
exports.tag = tag_1.tag;
function start() {
    console.log('Data Start!!');
    upload.start();
    metric.start();
    metadata.start();
    ping.start();
    tag.reset();
}
exports.start = start;
function end() {
    tag.reset();
    ping.end();
    upload.end();
    metadata.end();
    metric.end();
}
exports.end = end;


/***/ }),

/***/ "./src/data/metadata.ts":
/*!******************************!*\
  !*** ./src/data/metadata.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var version_1 = __webpack_require__(/*! @src/core/version */ "./src/core/version.ts");
var encode_1 = __webpack_require__(/*! @src/data/encode */ "./src/data/encode.ts");
var hash_1 = __webpack_require__(/*! @src/data/hash */ "./src/data/hash.ts");
var CLARITY_COOKIE_NAME = "_clarity";
var CLARITY_COOKIE_SEPARATOR = "|";
var CLARITY_SESSION_LENGTH = 30 * 60 * 1000;
exports.metadata = null;
function start() {
    var cookie = read();
    var ts = Date.now();
    var projectId = config_1.default.projectId || hash_1.default(location.host);
    var userId = cookie && cookie.userId ? cookie.userId : guid();
    var sessionId = cookie && cookie.sessionId && ts - cookie.timestamp < CLARITY_SESSION_LENGTH ? cookie.sessionId : ts.toString(36);
    var pageId = guid();
    var ua = navigator && "userAgent" in navigator ? navigator.userAgent : "";
    var upload = 0 /* Async */;
    var lean = config_1.default.lean ? 1 /* True */ : 0 /* False */;
    var e = { sequence: 0, version: version_1.default, pageId: pageId, userId: userId, sessionId: sessionId, projectId: projectId, upload: upload, end: 0 /* False */ };
    var p = { timestamp: ts, ua: ua, url: location.href, referrer: document.referrer, lean: lean };
    exports.metadata = { page: p, envelope: e };
    track({ userId: userId, sessionId: sessionId, timestamp: ts });
    encode_1.default(20 /* Page */);
    if (config_1.default.onstart) {
        config_1.default.onstart({ userId: userId, sessionId: sessionId, pageId: pageId });
    }
}
exports.start = start;
function end() {
    exports.metadata = null;
}
exports.end = end;
function envelope(last) {
    var e = exports.metadata.envelope;
    e.upload = last && "sendBeacon" in navigator ? 1 /* Beacon */ : 0 /* Async */;
    e.end = last ? 1 /* True */ : 0 /* False */;
    e.sequence++;
    return [e.sequence, e.version, e.projectId, e.userId, e.sessionId, e.pageId, e.upload, e.end];
}
exports.envelope = envelope;
// Credit: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
// Excluding 3rd party code from tslint
// tslint:disable
function guid() {
    var d = new Date().getTime();
    if (window.performance && performance.now) {
        // Use high-precision timer if available
        d += performance.now();
    }
    var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
// tslint:enable
function track(data) {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + config_1.default.expire);
    var expires = expiry ? "expires=" + expiry.toUTCString() : "";
    var value = data.userId + "|" + data.sessionId + "|" + data.timestamp + ";" + expires + ";path=/";
    document.cookie = CLARITY_COOKIE_NAME + "=" + value;
}
function read() {
    var cookies = document.cookie.split(";");
    if (cookies) {
        for (var i = 0; i < cookies.length; i++) {
            var pair = cookies[i].split("=");
            if (pair.length > 1 && pair[0].indexOf(CLARITY_COOKIE_NAME) >= 0 && pair[1].indexOf(CLARITY_COOKIE_SEPARATOR) > 0) {
                var parts = pair[1].split(CLARITY_COOKIE_SEPARATOR);
                if (parts.length === 3) {
                    return { userId: parts[0], sessionId: parts[1], timestamp: parseInt(parts[2], 10) };
                }
            }
        }
    }
    return null;
}


/***/ }),

/***/ "./src/data/metric.ts":
/*!****************************!*\
  !*** ./src/data/metric.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var encode_1 = __webpack_require__(/*! ./encode */ "./src/data/encode.ts");
exports.data = null;
exports.updates = [];
function start() {
    exports.data = {};
}
exports.start = start;
function end() {
    exports.data = {};
}
exports.end = end;
function counter(metric, increment) {
    if (increment === void 0) { increment = 1; }
    if (!(metric in exports.data)) {
        exports.data[metric] = 0;
    }
    exports.data[metric] += increment;
    track(metric);
}
exports.counter = counter;
function measure(metric, value) {
    if (!(metric in exports.data)) {
        exports.data[metric] = 0;
    }
    exports.data[metric] = Math.max(value, exports.data[metric]);
    track(metric);
}
exports.measure = measure;
function compute() {
    encode_1.default(0 /* Metric */);
}
exports.compute = compute;
function track(metric) {
    if (exports.updates.indexOf(metric) === -1) {
        exports.updates.push(metric);
    }
}
function reset() {
    exports.updates = [];
}
exports.reset = reset;


/***/ }),

/***/ "./src/data/ping.ts":
/*!**************************!*\
  !*** ./src/data/ping.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var clarity_1 = __webpack_require__(/*! @src/clarity */ "./src/clarity.ts");
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var time_1 = __webpack_require__(/*! @src/core/time */ "./src/core/time.ts");
var encode_1 = __webpack_require__(/*! ./encode */ "./src/data/encode.ts");
var last = 0;
var interval = 0;
var timeout = null;
function start() {
    interval = config_1.default.ping;
}
exports.start = start;
function reset() {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = window.setTimeout(ping, interval);
}
exports.reset = reset;
function ping() {
    var now = time_1.default();
    exports.data = { gap: now - last };
    encode_1.default(22 /* Ping */);
    if (exports.data.gap < config_1.default.timeout) {
        interval = Math.min(interval * 2, config_1.default.timeout);
        timeout = window.setTimeout(ping, interval);
    }
    else {
        clarity_1.pause();
    }
    last = now;
}
function end() {
    clearTimeout(timeout);
    last = 0;
    interval = 0;
}
exports.end = end;


/***/ }),

/***/ "./src/data/tag.ts":
/*!*************************!*\
  !*** ./src/data/tag.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var encode_1 = __webpack_require__(/*! @src/data/encode */ "./src/data/encode.ts");
exports.data = null;
function reset() {
    exports.data = null;
}
exports.reset = reset;
function tag(key, value) {
    exports.data = { key: key, value: value };
    encode_1.default(21 /* Tag */);
}
exports.tag = tag;


/***/ }),

/***/ "./src/data/token.ts":
/*!***************************!*\
  !*** ./src/data/token.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tokens = [];
function check(hash) {
    var output = tokens.indexOf(hash) >= 0;
    return output;
}
exports.check = check;
function resolve(hash) {
    return check(hash) ? tokens[hash] : [];
}
exports.resolve = resolve;


/***/ }),

/***/ "./src/data/upload.ts":
/*!****************************!*\
  !*** ./src/data/upload.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var time_1 = __webpack_require__(/*! @src/core/time */ "./src/core/time.ts");
var encode_1 = __webpack_require__(/*! @src/data/encode */ "./src/data/encode.ts");
var metadata_1 = __webpack_require__(/*! @src/data/metadata */ "./src/data/metadata.ts");
var metric = __webpack_require__(/*! @src/data/metric */ "./src/data/metric.ts");
var ping = __webpack_require__(/*! @src/data/ping */ "./src/data/ping.ts");
// import { $ } from ""
var MAX_RETRIES = 2;
var events;
var timeout = null;
var transit;
var active;
function start() {
    console.log('Upload Start!!');
    active = true;
    events = [];
    transit = {};
    exports.track = null;
}
exports.start = start;
function queue(data) {
    // console.log("queuett ", data);
    if (active) {
        var type = data.length > 1 ? data[1] : null;
        var event_1 = JSON.stringify(data);
        // console.log('type ', type);
        console.log('event ', data);
        events.push(event_1);
        switch (type) {
            case 0 /* Metric */:
            case 32 /* Upload */:
                return; // do not schedule upload callback
            case 1 /* Discover */:
            case 2 /* Mutation */:
            case 3 /* BoxModel */:
            case 4 /* Hash */:
            case 6 /* Document */:
            case 33 /* Target */:
                metric.counter(1 /* LayoutBytes */, event_1.length);
                break;
            case 26 /* Network */:
            case 27 /* Performance */:
                metric.counter(3 /* NetworkBytes */, event_1.length);
                break;
            case 28 /* ScriptError */:
            case 29 /* ImageError */:
                metric.counter(4 /* DiagnosticBytes */, event_1.length);
                break;
            default:
                metric.counter(2 /* InteractionBytes */, event_1.length);
                break;
        }
        // This is a precautionary check acting as a fail safe mechanism to get out of
        // unexpected situations. Ideally, expectation is that pause / resume will work as designed.
        // However, in some cases involving script errors, we may fail to pause Clarity instrumentation.
        // In those edge cases, we will cut the cord after a configurable shutdown value.
        // The only exception is the very last payload, for which we will attempt one final delivery to the server.
        if (time_1.default() < config_1.default.shutdown) {
            clearTimeout(timeout);
            timeout = window.setTimeout(upload, config_1.default.delay);
        }
    }
}
exports.queue = queue;
function end() {
    clearTimeout(timeout);
    upload(true);
    events = [];
    transit = {};
    exports.track = null;
    active = false;
}
exports.end = end;
function upload(last) {
    if (last === void 0) { last = false; }
    console.log('upload! xxx', config_1.default);
    console.log('upload! xxx', config_1.default.wp_upload);
    metric.compute();
    console.log('	metric.compute();! ');
    var e = metadata_1.envelope(last);
    var d = "[" + events.join() + "]";
    console.log(e);
    // send_wp(e, d)
    var payload = { e: JSON.stringify(e), d: d };
    console.log('payload', payload);
    var data = stringify(payload);
    var sequence = metadata_1.metadata.envelope.sequence;
    send(data, sequence, last);
    if (!last) {
        ping.reset();
    }
    // Send data to upload hook, if defined in the config
    if (config_1.default.upload) {
        config_1.default.upload(data, sequence, last);
    }
    // Send data to wordpress if configured
    if (config_1.default.wp_upload) {
        config_1.default.wp_upload(e, d);
    }
    // Clear out events now that payload has been dispatched
    events = [];
}
function stringify(payload) {
    return "{\"e\":" + payload.e + ",\"d\":" + payload.d + "}";
}
function send(data, sequence, last) {
    if (sequence === void 0) { sequence = null; }
    if (last === void 0) { last = false; }
    // Upload data if a valid URL is defined in the config
    console.log("Sending data!!", data);
    if (config_1.default.url.length > 0) {
        if (last && "sendBeacon" in navigator) {
            navigator.sendBeacon(config_1.default.url, data);
        }
        else {
            if (sequence in transit) {
                transit[sequence].attempts++;
            }
            else {
                transit[sequence] = { data: data, attempts: 1 };
            }
            var xhr_1 = new XMLHttpRequest();
            xhr_1.open("POST", config_1.default.url);
            if (sequence !== null) {
                xhr_1.onreadystatechange = function () { check(xhr_1, sequence); };
            }
            xhr_1.send(data);
        }
    }
}
function check(xhr, sequence) {
    if (xhr && xhr.readyState === XMLHttpRequest.DONE && sequence in transit) {
        if ((xhr.status < 200 || xhr.status > 208) && transit[sequence].attempts <= MAX_RETRIES) {
            send(transit[sequence].data, sequence);
        }
        else {
            exports.track = { sequence: sequence, attempts: transit[sequence].attempts, status: xhr.status };
            encode_1.default(32 /* Upload */);
            delete transit[sequence];
        }
    }
}


/***/ }),

/***/ "./src/diagnostic/encode.ts":
/*!**********************************!*\
  !*** ./src/diagnostic/encode.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var time_1 = __webpack_require__(/*! @src/core/time */ "./src/core/time.ts");
var metric = __webpack_require__(/*! @src/data/metric */ "./src/data/metric.ts");
var upload_1 = __webpack_require__(/*! @src/data/upload */ "./src/data/upload.ts");
var image = __webpack_require__(/*! @src/diagnostic/image */ "./src/diagnostic/image.ts");
var script = __webpack_require__(/*! @src/diagnostic/script */ "./src/diagnostic/script.ts");
function default_1(type) {
    var tokens = [time_1.default(), type];
    switch (type) {
        case 28 /* ScriptError */:
            tokens.push(script.data.message);
            tokens.push(script.data.line);
            tokens.push(script.data.column);
            tokens.push(script.data.stack);
            tokens.push(script.data.source);
            upload_1.queue(tokens);
            metric.counter(10 /* ScriptErrors */);
            break;
        case 29 /* ImageError */:
            tokens.push(image.data.source);
            tokens.push(image.data.target);
            upload_1.queue(tokens);
            break;
    }
    return tokens;
}
exports.default = default_1;


/***/ }),

/***/ "./src/diagnostic/image.ts":
/*!*********************************!*\
  !*** ./src/diagnostic/image.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = __webpack_require__(/*! @src/core/event */ "./src/core/event.ts");
var dom_1 = __webpack_require__(/*! @src/layout/dom */ "./src/layout/dom.ts");
var encode_1 = __webpack_require__(/*! ./encode */ "./src/diagnostic/encode.ts");
function start() {
    event_1.bind(document, "error", handler, true);
}
exports.start = start;
function handler(error) {
    var target = error.target;
    if (target && target.tagName === "IMG") {
        exports.data = {
            source: target.src,
            target: dom_1.getId(target)
        };
        encode_1.default(29 /* ImageError */);
    }
}


/***/ }),

/***/ "./src/diagnostic/index.ts":
/*!*********************************!*\
  !*** ./src/diagnostic/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var image = __webpack_require__(/*! ./image */ "./src/diagnostic/image.ts");
var script = __webpack_require__(/*! ./script */ "./src/diagnostic/script.ts");
function start() {
    script.start();
    image.start();
}
exports.start = start;
function end() {
    /* cleanup operation */
}
exports.end = end;


/***/ }),

/***/ "./src/diagnostic/script.ts":
/*!**********************************!*\
  !*** ./src/diagnostic/script.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = __webpack_require__(/*! @src/core/event */ "./src/core/event.ts");
var encode_1 = __webpack_require__(/*! ./encode */ "./src/diagnostic/encode.ts");
function start() {
    event_1.bind(window, "error", handler);
}
exports.start = start;
function handler(error) {
    var e = error["error"] || error;
    exports.data = {
        message: e.message,
        line: error["lineno"],
        column: error["colno"],
        stack: e.stack,
        source: error["filename"]
    };
    encode_1.default(28 /* ScriptError */);
}


/***/ }),

/***/ "./src/interaction/change.ts":
/*!***********************************!*\
  !*** ./src/interaction/change.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = __webpack_require__(/*! @src/core/event */ "./src/core/event.ts");
var mask_1 = __webpack_require__(/*! @src/core/mask */ "./src/core/mask.ts");
var dom_1 = __webpack_require__(/*! @src/layout/dom */ "./src/layout/dom.ts");
var target = __webpack_require__(/*! @src/layout/target */ "./src/layout/target.ts");
var encode_1 = __webpack_require__(/*! ./encode */ "./src/interaction/encode.ts");
function start() {
    event_1.bind(document, "change", recompute, true);
}
exports.start = start;
function recompute(evt) {
    var input = evt.target;
    var value = dom_1.get(input);
    if (input && value) {
        target.observe(value.id);
        exports.data = { target: value.id, value: value.metadata.masked ? mask_1.default(input.value) : input.value };
        encode_1.default(24 /* InputChange */);
    }
}
function reset() {
    exports.data = null;
}
exports.reset = reset;


/***/ }),

/***/ "./src/interaction/encode.ts":
/*!***********************************!*\
  !*** ./src/interaction/encode.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var time_1 = __webpack_require__(/*! @src/core/time */ "./src/core/time.ts");
var metric = __webpack_require__(/*! @src/data/metric */ "./src/data/metric.ts");
var upload_1 = __webpack_require__(/*! @src/data/upload */ "./src/data/upload.ts");
var change = __webpack_require__(/*! ./change */ "./src/interaction/change.ts");
var pointer = __webpack_require__(/*! ./pointer */ "./src/interaction/pointer.ts");
var resize = __webpack_require__(/*! ./resize */ "./src/interaction/resize.ts");
var scroll = __webpack_require__(/*! ./scroll */ "./src/interaction/scroll.ts");
var selection = __webpack_require__(/*! ./selection */ "./src/interaction/selection.ts");
var unload = __webpack_require__(/*! ./unload */ "./src/interaction/unload.ts");
var visibility = __webpack_require__(/*! ./visibility */ "./src/interaction/visibility.ts");
function default_1(type) {
    var t = time_1.default();
    var tokens = [t, type];
    switch (type) {
        case 10 /* MouseDown */:
        case 11 /* MouseUp */:
        case 9 /* MouseMove */:
        case 12 /* MouseWheel */:
        case 8 /* Click */:
        case 13 /* DoubleClick */:
        case 14 /* RightClick */:
        case 15 /* TouchStart */:
        case 16 /* TouchEnd */:
        case 17 /* TouchMove */:
        case 18 /* TouchCancel */:
            for (var i = 0; i < pointer.data[type].length; i++) {
                var entry = pointer.data[type][i];
                tokens = [entry.time, type];
                tokens.push(entry.target);
                tokens.push(entry.x);
                tokens.push(entry.y);
                console.log("calling queuge", tokens);
                upload_1.queue(tokens);
            }
            pointer.reset();
            break;
        case 5 /* Resize */:
            var r = resize.data;
            tokens.push(r.width);
            tokens.push(r.height);
            upload_1.queue(tokens);
            metric.measure(18 /* ViewportWidth */, r.width);
            metric.measure(19 /* ViewportHeight */, r.height);
            resize.reset();
            break;
        case 23 /* Unload */:
            var u = unload.data;
            tokens.push(u.name);
            upload_1.queue(tokens);
            metric.counter(17 /* EndTime */, t);
            unload.reset();
            break;
        case 24 /* InputChange */:
            var ch = change.data;
            tokens.push(ch.target);
            tokens.push(ch.value);
            upload_1.queue(tokens);
            metric.counter(9 /* Changes */);
            change.reset();
            break;
        case 19 /* Selection */:
            var s = selection.data;
            tokens.push(s.start);
            tokens.push(s.startOffset);
            tokens.push(s.end);
            tokens.push(s.endOffset);
            upload_1.queue(tokens);
            metric.counter(8 /* Selections */);
            selection.reset();
            break;
        case 7 /* Scroll */:
            for (var i = 0; i < scroll.data.length; i++) {
                var entry = scroll.data[i];
                tokens = [entry.time, type];
                tokens.push(entry.target);
                tokens.push(entry.x);
                tokens.push(entry.y);
                upload_1.queue(tokens);
            }
            scroll.reset();
            break;
        case 25 /* Visibility */:
            var v = visibility.data;
            tokens.push(v.visible);
            upload_1.queue(tokens);
            visibility.reset();
            break;
    }
}
exports.default = default_1;


/***/ }),

/***/ "./src/interaction/index.ts":
/*!**********************************!*\
  !*** ./src/interaction/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pointer = __webpack_require__(/*! @src/interaction/pointer */ "./src/interaction/pointer.ts");
var resize = __webpack_require__(/*! @src/interaction/resize */ "./src/interaction/resize.ts");
var scroll = __webpack_require__(/*! @src/interaction/scroll */ "./src/interaction/scroll.ts");
var selection = __webpack_require__(/*! @src/interaction/selection */ "./src/interaction/selection.ts");
var unload = __webpack_require__(/*! @src/interaction/unload */ "./src/interaction/unload.ts");
var visibility = __webpack_require__(/*! @src/interaction/visibility */ "./src/interaction/visibility.ts");
function start() {
    console.log('interaction.start');
    pointer.start();
    resize.start();
    visibility.start();
    scroll.start();
    selection.start();
    unload.start();
}
exports.start = start;
function end() {
    pointer.end();
    scroll.end();
    selection.end();
}
exports.end = end;


/***/ }),

/***/ "./src/interaction/pointer.ts":
/*!************************************!*\
  !*** ./src/interaction/pointer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var event_1 = __webpack_require__(/*! @src/core/event */ "./src/core/event.ts");
var time_1 = __webpack_require__(/*! @src/core/time */ "./src/core/time.ts");
var dom_1 = __webpack_require__(/*! @src/layout/dom */ "./src/layout/dom.ts");
var target = __webpack_require__(/*! @src/layout/target */ "./src/layout/target.ts");
var encode_1 = __webpack_require__(/*! ./encode */ "./src/interaction/encode.ts");
exports.data = {};
var timeout = null;
function start() {
    reset();
    event_1.bind(document, "mousedown", mouse.bind(this, 10 /* MouseDown */), true);
    event_1.bind(document, "mouseup", mouse.bind(this, 11 /* MouseUp */), true);
    event_1.bind(document, "mousemove", mouse.bind(this, 9 /* MouseMove */), true);
    event_1.bind(document, "mousewheel", mouse.bind(this, 12 /* MouseWheel */), true);
    event_1.bind(document, "dblclick", mouse.bind(this, 13 /* DoubleClick */), true);
    event_1.bind(document, "click", mouse.bind(this, 8 /* Click */), true);
    event_1.bind(document, "touchstart", touch.bind(this, 15 /* TouchStart */), true);
    event_1.bind(document, "touchend", touch.bind(this, 16 /* TouchEnd */), true);
    event_1.bind(document, "touchmove", touch.bind(this, 17 /* TouchMove */), true);
    event_1.bind(document, "touchcancel", touch.bind(this, 18 /* TouchCancel */), true);
}
exports.start = start;
function mouse(event, evt) {
    // console.log('mouse event', evt);
    var de = document.documentElement;
    var x = "pageX" in evt ? Math.round(evt.pageX) : ("clientX" in evt ? Math.round(evt["clientX"] + de.scrollLeft) : null);
    var y = "pageY" in evt ? Math.round(evt.pageY) : ("clientY" in evt ? Math.round(evt["clientY"] + de.scrollTop) : null);
    var id = evt.target ? dom_1.getId(evt.target) : null;
    target.observe(id);
    event = event === 8 /* Click */ && (evt.buttons === 2 || evt.button === 2) ? 14 /* RightClick */ : event;
    handler(event, { target: id, x: x, y: y, time: time_1.default() });
}
function touch(event, evt) {
    var de = document.documentElement;
    var touches = evt.changedTouches;
    var id = evt.target ? dom_1.getId(evt.target) : null;
    var t = time_1.default();
    target.observe(id);
    if (touches) {
        for (var i = 0; i < touches.length; i++) {
            var entry = touches[i];
            var x = "clientX" in entry ? Math.round(entry["clientX"] + de.scrollLeft) : null;
            var y = "clientY" in entry ? Math.round(entry["clientY"] + de.scrollTop) : null;
            handler(event, { target: id, x: x, y: y, time: t });
        }
    }
}
function handler(event, current) {
    switch (event) {
        case 9 /* MouseMove */:
        case 12 /* MouseWheel */:
        case 17 /* TouchMove */:
            var length_1 = exports.data[event].length;
            var last = length_1 > 1 ? exports.data[event][length_1 - 2] : null;
            if (last && similar(last, current)) {
                exports.data[event].pop();
            }
            exports.data[event].push(current);
            clearTimeout(timeout);
            timeout = window.setTimeout(encode_1.default, config_1.default.lookahead, event);
            break;
        default:
            exports.data[event].push(current);
            encode_1.default(event);
            break;
    }
}
function reset() {
    exports.data = {};
    var mouseEvents = [10 /* MouseDown */, 11 /* MouseUp */, 12 /* MouseWheel */, 9 /* MouseMove */, 13 /* DoubleClick */, 8 /* Click */, 14 /* RightClick */];
    var touchEvents = [15 /* TouchStart */, 17 /* TouchMove */, 16 /* TouchEnd */, 18 /* TouchCancel */];
    var events = mouseEvents.concat(touchEvents);
    for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
        var event_2 = events_1[_i];
        exports.data[event_2] = [];
    }
}
exports.reset = reset;
function similar(last, current) {
    var dx = last.x - current.x;
    var dy = last.y - current.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    return (distance < config_1.default.distance) && (current.time - last.time < config_1.default.interval) && current.target === last.target;
}
function end() {
    clearTimeout(timeout);
    exports.data = {};
}
exports.end = end;


/***/ }),

/***/ "./src/interaction/resize.ts":
/*!***********************************!*\
  !*** ./src/interaction/resize.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = __webpack_require__(/*! @src/core/event */ "./src/core/event.ts");
var encode_1 = __webpack_require__(/*! ./encode */ "./src/interaction/encode.ts");
function start() {
    event_1.bind(window, "resize", recompute);
    recompute();
}
exports.start = start;
function recompute() {
    exports.data = {
        width: "innerWidth" in window ? window.innerWidth : document.documentElement.clientWidth,
        height: "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    };
    encode_1.default(5 /* Resize */);
}
function reset() {
    exports.data = null;
}
exports.reset = reset;


/***/ }),

/***/ "./src/interaction/scroll.ts":
/*!***********************************!*\
  !*** ./src/interaction/scroll.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var event_1 = __webpack_require__(/*! @src/core/event */ "./src/core/event.ts");
var time_1 = __webpack_require__(/*! @src/core/time */ "./src/core/time.ts");
var dom_1 = __webpack_require__(/*! @src/layout/dom */ "./src/layout/dom.ts");
var target = __webpack_require__(/*! @src/layout/target */ "./src/layout/target.ts");
var encode_1 = __webpack_require__(/*! ./encode */ "./src/interaction/encode.ts");
exports.data = [];
var timeout = null;
function start() {
    event_1.bind(window, "scroll", recompute, true);
    recompute();
}
exports.start = start;
function recompute(event) {
    if (event === void 0) { event = null; }
    // console.log('recompute ', event);
    var eventTarget = event ? (event.target === document ? document.documentElement : event.target) : document.documentElement;
    var x = Math.round(eventTarget.scrollLeft);
    var y = Math.round(eventTarget.scrollTop);
    var id = dom_1.getId(eventTarget);
    target.observe(id);
    var current = { target: id, x: x, y: y, time: time_1.default() };
    var length = exports.data.length;
    var last = length > 1 ? exports.data[length - 2] : null;
    if (last && similar(last, current)) {
        exports.data.pop();
    }
    exports.data.push(current);
    clearTimeout(timeout);
    timeout = window.setTimeout(encode_1.default, config_1.default.lookahead, 7 /* Scroll */);
}
function reset() {
    exports.data = [];
}
exports.reset = reset;
function similar(last, current) {
    var dx = last.x - current.x;
    var dy = last.y - current.y;
    return (dx * dx + dy * dy < config_1.default.distance * config_1.default.distance) && (current.time - last.time < config_1.default.interval);
}
function end() {
    clearTimeout(timeout);
    exports.data = [];
}
exports.end = end;


/***/ }),

/***/ "./src/interaction/selection.ts":
/*!**************************************!*\
  !*** ./src/interaction/selection.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var event_1 = __webpack_require__(/*! @src/core/event */ "./src/core/event.ts");
var dom_1 = __webpack_require__(/*! @src/layout/dom */ "./src/layout/dom.ts");
var target = __webpack_require__(/*! @src/layout/target */ "./src/layout/target.ts");
var encode_1 = __webpack_require__(/*! ./encode */ "./src/interaction/encode.ts");
exports.data = null;
var previous = null;
var timeout = null;
function start() {
    reset();
    event_1.bind(document, "selectstart", recompute, true);
    event_1.bind(document, "selectionchange", recompute, true);
}
exports.start = start;
function recompute() {
    // sconsole.log("recompute")
    var current = document.getSelection();
    // Bail out if we don't have a valid selection
    if (current === null) {
        return;
    }
    var anchorNode = dom_1.getId(current.anchorNode);
    var focusNode = dom_1.getId(current.focusNode);
    // Bail out if we got valid selection but not valid nodes
    // In Edge, selectionchange gets fired even on interactions like right clicks and
    // can result in null anchorNode and focusNode if there was no previous selection on page
    if (anchorNode === null && focusNode === null) {
        return;
    }
    if (previous !== null && exports.data.start !== null && exports.data.start !== anchorNode) {
        clearTimeout(timeout);
        target.observe(exports.data.start);
        target.observe(exports.data.end);
        encode_1.default(19 /* Selection */);
    }
    exports.data = {
        start: anchorNode,
        startOffset: current.anchorOffset,
        end: focusNode,
        endOffset: current.focusOffset
    };
    previous = current;
    clearTimeout(timeout);
    timeout = window.setTimeout(encode_1.default, config_1.default.lookahead, 19 /* Selection */);
}
function reset() {
    previous = null;
    exports.data = { start: 0, startOffset: 0, end: 0, endOffset: 0 };
}
exports.reset = reset;
function end() {
    reset();
    clearTimeout(timeout);
}
exports.end = end;


/***/ }),

/***/ "./src/interaction/unload.ts":
/*!***********************************!*\
  !*** ./src/interaction/unload.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var clarity_1 = __webpack_require__(/*! @src/clarity */ "./src/clarity.ts");
var event_1 = __webpack_require__(/*! @src/core/event */ "./src/core/event.ts");
var encode_1 = __webpack_require__(/*! ./encode */ "./src/interaction/encode.ts");
function start() {
    event_1.bind(window, "beforeunload", recompute);
    event_1.bind(window, "unload", recompute);
    event_1.bind(window, "pagehide", recompute);
}
exports.start = start;
function recompute(evt) {
    exports.data = { name: evt.type };
    encode_1.default(23 /* Unload */);
    clarity_1.end();
}
function reset() {
    exports.data = null;
}
exports.reset = reset;


/***/ }),

/***/ "./src/interaction/visibility.ts":
/*!***************************************!*\
  !*** ./src/interaction/visibility.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = __webpack_require__(/*! @src/core/event */ "./src/core/event.ts");
var encode_1 = __webpack_require__(/*! ./encode */ "./src/interaction/encode.ts");
function start() {
    event_1.bind(document, "visibilitychange", recompute);
    recompute();
}
exports.start = start;
function recompute() {
    exports.data = { visible: "visibilityState" in document ? document.visibilityState : "default" };
    encode_1.default(25 /* Visibility */);
}
function reset() {
    exports.data = null;
}
exports.reset = reset;


/***/ }),

/***/ "./src/layout/boxmodel.ts":
/*!********************************!*\
  !*** ./src/layout/boxmodel.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var task = __webpack_require__(/*! @src/core/task */ "./src/core/task.ts");
var encode_1 = __webpack_require__(/*! @src/layout/encode */ "./src/layout/encode.ts");
var dom = __webpack_require__(/*! ./dom */ "./src/layout/dom.ts");
var bm = {};
var updateMap = [];
var timeout = null;
function compute() {
    clearTimeout(timeout);
    timeout = window.setTimeout(schedule, config_1.default.lookahead);
}
exports.compute = compute;
function schedule() {
    task.schedule(boxmodel);
}
function boxmodel() {
    return __awaiter(this, void 0, void 0, function () {
        var timer, values, doc, x, y, _i, values_1, value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timer = 14 /* BoxModelTime */;
                    task.start(timer);
                    values = dom.boxmodel();
                    doc = document.documentElement;
                    x = "pageXOffset" in window ? window.pageXOffset : doc.scrollLeft;
                    y = "pageYOffset" in window ? window.pageYOffset : doc.scrollTop;
                    _i = 0, values_1 = values;
                    _a.label = 1;
                case 1:
                    if (!(_i < values_1.length)) return [3 /*break*/, 5];
                    value = values_1[_i];
                    if (!task.longtask(timer)) return [3 /*break*/, 3];
                    return [4 /*yield*/, task.idle(timer)];
                case 2:
                    _a.sent();
                    x = "pageXOffset" in window ? window.pageXOffset : doc.scrollLeft;
                    y = "pageYOffset" in window ? window.pageYOffset : doc.scrollTop;
                    _a.label = 3;
                case 3:
                    update(value.id, layout(dom.getNode(value.id), x, y));
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5:
                    if (!(updateMap.length > 0)) return [3 /*break*/, 7];
                    return [4 /*yield*/, encode_1.default(3 /* BoxModel */)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    task.stop(timer);
                    return [2 /*return*/];
            }
        });
    });
}
function updates() {
    var summary = [];
    for (var _i = 0, updateMap_1 = updateMap; _i < updateMap_1.length; _i++) {
        var id = updateMap_1[_i];
        summary.push(bm[id]);
    }
    updateMap = [];
    return summary;
}
exports.updates = updates;
function update(id, box) {
    var changed = box !== null;
    if (id in bm && box !== null && bm[id].box !== null) {
        changed = box.length === bm[id].box.length ? false : true;
        if (changed === false) {
            for (var i = 0; i < box.length; i++) {
                if (box[i] !== bm[id].box[i]) {
                    changed = true;
                    break;
                }
            }
        }
    }
    if (changed) {
        if (updateMap.indexOf(id) === -1) {
            updateMap.push(id);
        }
        bm[id] = { id: id, box: box };
    }
}
function layout(element, x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    var box = null;
    var rect = element.getBoundingClientRect();
    if (rect && rect.width > 0 && rect.height > 0) {
        // getBoundingClientRect returns relative positioning to viewport and therefore needs
        // addition of window scroll position to get position relative to document
        // Also: using Math.floor() instead of Math.round() below because in Edge,
        // getBoundingClientRect returns partial pixel values (e.g. 162.5px) and Chrome already
        // floors the value (e.g. 162px). Keeping behavior consistent across
        box = [
            Math.floor(rect.left + x),
            Math.floor(rect.top + y),
            Math.floor(rect.width),
            Math.floor(rect.height)
        ];
    }
    return box;
}
exports.layout = layout;
function reset() {
    clearTimeout(timeout);
    updateMap = [];
    bm = {};
}
exports.reset = reset;


/***/ }),

/***/ "./src/layout/discover.ts":
/*!********************************!*\
  !*** ./src/layout/discover.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var task = __webpack_require__(/*! @src/core/task */ "./src/core/task.ts");
var boxmodel = __webpack_require__(/*! @src/layout/boxmodel */ "./src/layout/boxmodel.ts");
var doc = __webpack_require__(/*! @src/layout/document */ "./src/layout/document.ts");
var encode_1 = __webpack_require__(/*! @src/layout/encode */ "./src/layout/encode.ts");
var node_1 = __webpack_require__(/*! ./node */ "./src/layout/node.ts");
function start() {
    task.schedule(discover).then(function () {
        doc.compute();
        boxmodel.compute();
    });
}
exports.start = start;
function discover() {
    return __awaiter(this, void 0, void 0, function () {
        var timer, walker, node;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timer = 12 /* DiscoverTime */;
                    task.start(timer);
                    walker = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, false);
                    node = walker.nextNode();
                    _a.label = 1;
                case 1:
                    if (!node) return [3 /*break*/, 4];
                    if (!task.longtask(timer)) return [3 /*break*/, 3];
                    return [4 /*yield*/, task.idle(timer)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    node_1.default(node, 0 /* Discover */);
                    node = walker.nextNode();
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, encode_1.default(config_1.default.lean ? 4 /* Hash */ : 1 /* Discover */)];
                case 5:
                    _a.sent();
                    task.stop(timer);
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/layout/document.ts":
/*!********************************!*\
  !*** ./src/layout/document.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var encode_1 = __webpack_require__(/*! ./encode */ "./src/layout/encode.ts");
function reset() {
    exports.data = null;
}
exports.reset = reset;
function compute() {
    var body = document.body;
    var d = document.documentElement;
    var width = body ? body.clientWidth : null;
    var bodyClientHeight = body ? body.clientHeight : null;
    var bodyScrollHeight = body ? body.scrollHeight : null;
    var bodyOffsetHeight = body ? body.offsetHeight : null;
    var documentClientHeight = d ? d.clientHeight : null;
    var documentScrollHeight = d ? d.scrollHeight : null;
    var documentOffsetHeight = d ? d.offsetHeight : null;
    var height = Math.max(bodyClientHeight, bodyScrollHeight, bodyOffsetHeight, documentClientHeight, documentScrollHeight, documentOffsetHeight);
    if (exports.data === null || width !== exports.data.width || height !== exports.data.height) {
        exports.data = { width: width, height: height };
        encode_1.default(6 /* Document */);
    }
}
exports.compute = compute;


/***/ }),

/***/ "./src/layout/dom.ts":
/*!***************************!*\
  !*** ./src/layout/dom.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var time_1 = __webpack_require__(/*! @src/core/time */ "./src/core/time.ts");
var selector_1 = __webpack_require__(/*! @src/layout/selector */ "./src/layout/selector.ts");
var index = 1;
var nodes = [];
var values = [];
var changes = [];
var updateMap = [];
var selectorMap = [];
var idMap = null;
function reset() {
    index = 1;
    nodes = [];
    values = [];
    updateMap = [];
    changes = [];
    selectorMap = [];
    idMap = new WeakMap();
    if ("__CLARITY_DEVTOOLS_HOOK__" /* DEVTOOLS_HOOK */ in window) {
        window["__CLARITY_DEVTOOLS_HOOK__" /* DEVTOOLS_HOOK */] = { get: get, getNode: getNode, history: history };
    }
}
exports.reset = reset;
function getId(node, autogen) {
    if (autogen === void 0) { autogen = false; }
    if (node === null) {
        return null;
    }
    var id = idMap.get(node);
    if (!id && autogen) {
        id = index++;
        idMap.set(node, id);
    }
    return id ? id : null;
}
exports.getId = getId;
function add(node, data, source) {
    var id = getId(node, true);
    var parentId = node.parentElement ? getId(node.parentElement) : null;
    var nextId = getNextId(node);
    var masked = true;
    var parent = null;
    if (parentId >= 0 && values[parentId]) {
        parent = values[parentId];
        parent.children.push(id);
        masked = parent.metadata.masked;
    }
    if (data.attributes && "data-clarity-mask" /* MASK_ATTRIBUTE */ in data.attributes) {
        masked = true;
    }
    if (data.attributes && "data-clarity-unmask" /* UNMASK_ATTRIBUTE */ in data.attributes) {
        masked = false;
    }
    nodes[id] = node;
    values[id] = {
        id: id,
        parent: parentId,
        next: nextId,
        children: [],
        position: null,
        data: data,
        selector: "",
        metadata: { active: true, boxmodel: false, masked: masked }
    };
    updateSelector(values[id]);
    layout(data.tag, id, parentId);
    track(id, source);
}
exports.add = add;
function update(node, data, source) {
    var id = getId(node);
    var parentId = node.parentElement ? getId(node.parentElement) : null;
    var nextId = getNextId(node);
    if (id in values) {
        var value = values[id];
        value.metadata.active = true;
        // Handle case where internal ordering may have changed
        if (value["next"] !== nextId) {
            value["next"] = nextId;
        }
        // Handle case where parent might have been updated
        if (value["parent"] !== parentId) {
            var oldParentId = value["parent"];
            value["parent"] = parentId;
            // Move this node to the right location under new parent
            if (parentId !== null && parentId >= 0) {
                if (nextId !== null && nextId >= 0) {
                    values[parentId].children.splice(nextId + 1, 0, id);
                }
                else {
                    values[parentId].children.push(id);
                }
            }
            else {
                // Mark this element as deleted if the parent has been updated to null
                remove(id, source);
            }
            // Remove reference to this node from the old parent
            if (oldParentId !== null && oldParentId >= 0) {
                var nodeIndex = values[oldParentId].children.indexOf(id);
                if (nodeIndex >= 0) {
                    values[oldParentId].children.splice(nodeIndex, 1);
                }
            }
        }
        // Update data
        for (var key in data) {
            if (key in value["data"]) {
                value["data"][key] = data[key];
            }
        }
        // Update selector
        updateSelector(value);
        layout(data.tag, id, parentId);
        track(id, source);
    }
}
exports.update = update;
function position(parent, child) {
    var tag = child.data.tag;
    // Find relative position of the element to generate :nth-of-type selector
    // We restrict relative positioning to handful of tags for now.
    if (parent && (tag === "DIV" || tag === "TR" || tag === "P" || tag === "LI")) {
        child.position = 1;
        var idx = parent ? parent.children.indexOf(child.id) : -1;
        while (idx-- > 0) {
            var sibling = values[parent.children[idx]];
            if (child.data.tag === sibling.data.tag) {
                child.position = sibling.position + 1;
            }
            break;
        }
    }
    return child.position;
}
function updateSelector(value) {
    var parent = value.parent && value.parent in values ? values[value.parent] : null;
    var prefix = parent ? parent.selector + ">" : null;
    var ex = value.selector;
    var current = selector_1.default(value.data.tag, prefix, value.data.attributes, position(parent, value));
    if (current !== ex && selectorMap.indexOf(value.id) === -1) {
        selectorMap.push(value.id);
    }
    value.selector = current;
}
function getNode(id) {
    if (id in nodes) {
        return nodes[id];
    }
    return null;
}
exports.getNode = getNode;
function getValue(id) {
    if (id in values) {
        return values[id];
    }
    return null;
}
exports.getValue = getValue;
function get(node) {
    var id = getId(node);
    return values[id];
}
exports.get = get;
function has(node) {
    return getId(node) in nodes;
}
exports.has = has;
function boxmodel() {
    var v = [];
    for (var id in values) {
        if (values[id].metadata.active && values[id].metadata.boxmodel) {
            v.push(values[id]);
        }
    }
    return v;
}
exports.boxmodel = boxmodel;
function updates() {
    var output = [];
    for (var _i = 0, updateMap_1 = updateMap; _i < updateMap_1.length; _i++) {
        var id = updateMap_1[_i];
        if (id in values) {
            var v = values[id];
            var p = v.parent;
            var hasId = "attributes" in v.data && "id" in v.data.attributes;
            v.data.path = p === null || p in updateMap || hasId || v.selector.length === 0 ? null : values[p].selector;
            output.push(values[id]);
        }
    }
    updateMap = [];
    return output;
}
exports.updates = updates;
function selectors() {
    var v = [];
    for (var _i = 0, selectorMap_1 = selectorMap; _i < selectorMap_1.length; _i++) {
        var id = selectorMap_1[_i];
        if (id in values) {
            v.push(values[id]);
        }
    }
    selectorMap = [];
    return v;
}
exports.selectors = selectors;
function remove(id, source) {
    var value = values[id];
    value.metadata.active = false;
    value.parent = null;
    track(id, source);
    for (var _i = 0, _a = value.children; _i < _a.length; _i++) {
        var child = _a[_i];
        remove(child, source);
    }
    value.children = [];
}
function layout(tag, id, parentId) {
    if (id !== null && parentId !== null) {
        switch (tag) {
            case "*T":
                // Mark parent as a leaf node only if the text node has valid text and parent is masked.
                // For nodes with whitespaces and not real text, skip them.
                if (values[parentId].metadata.masked) {
                    var value = values[id].data.value;
                    for (var i = 0; i < value.length; i++) {
                        var code = value.charCodeAt(i);
                        if (!(code === 32 || code === 10 || code === 9 || code === 13)) {
                            values[parentId].metadata.boxmodel = true;
                            break;
                        }
                    }
                }
                break;
            case "IMG":
            case "IFRAME":
                values[id].metadata.boxmodel = true;
                break;
            default:
                // Capture layout for any element with a user defined selector
                values[id].metadata.boxmodel = values[id].selector.indexOf("*") === 0;
                break;
        }
    }
}
function getNextId(node) {
    var id = null;
    while (id === null && node.nextSibling) {
        id = getId(node.nextSibling);
        node = node.nextSibling;
    }
    return id;
}
function copy(input) {
    return JSON.parse(JSON.stringify(input));
}
function track(id, source) {
    // Keep track of the order in which mutations happened, they may not be sequential
    // Edge case: If an element is added later on, and pre-discovered element is moved as a child.
    // In that case, we need to reorder the prediscovered element in the update list to keep visualization consistent.
    var uIndex = updateMap.indexOf(id);
    if (uIndex >= 0 && source === 1 /* ChildListAdd */) {
        updateMap.splice(uIndex, 1);
        updateMap.push(id);
    }
    else if (uIndex === -1) {
        updateMap.push(id);
    }
    if ("__CLARITY_DEVTOOLS_HOOK__" /* DEVTOOLS_HOOK */ in window) {
        var value = copy([values[id]])[0];
        var change = { time: time_1.default(), source: source, value: value };
        if (!(id in changes)) {
            changes[id] = [];
        }
        changes[id].push(change);
    }
}
function history(id) {
    if (id in changes) {
        return changes[id];
    }
    return [];
}


/***/ }),

/***/ "./src/layout/encode.ts":
/*!******************************!*\
  !*** ./src/layout/encode.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mask_1 = __webpack_require__(/*! @src/core/mask */ "./src/core/mask.ts");
var task = __webpack_require__(/*! @src/core/task */ "./src/core/task.ts");
var time_1 = __webpack_require__(/*! @src/core/time */ "./src/core/time.ts");
var hash_1 = __webpack_require__(/*! @src/data/hash */ "./src/data/hash.ts");
var metric = __webpack_require__(/*! @src/data/metric */ "./src/data/metric.ts");
var token_1 = __webpack_require__(/*! @src/data/token */ "./src/data/token.ts");
var upload_1 = __webpack_require__(/*! @src/data/upload */ "./src/data/upload.ts");
var boxmodel = __webpack_require__(/*! ./boxmodel */ "./src/layout/boxmodel.ts");
var doc = __webpack_require__(/*! ./document */ "./src/layout/document.ts");
var dom = __webpack_require__(/*! ./dom */ "./src/layout/dom.ts");
var target = __webpack_require__(/*! ./target */ "./src/layout/target.ts");
function default_1(type) {
    return __awaiter(this, void 0, void 0, function () {
        var tokens, timer, addEventToQueue, _a, d, bm, _i, bm_1, value, targets, _b, targets_1, value, selectors, reference, _c, selectors_1, value, h, pointer, values, _d, values_1, value, metadata, data, active, keys, _e, keys_1, key, attr, parent_1, parentTag, tag, _f, metadata_1, token, index;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    tokens = [time_1.default(), type];
                    timer = type === 1 /* Discover */ ? 12 /* DiscoverTime */ : 13 /* MutationTime */;
                    addEventToQueue = true;
                    _a = type;
                    switch (_a) {
                        case 6 /* Document */: return [3 /*break*/, 1];
                        case 3 /* BoxModel */: return [3 /*break*/, 2];
                        case 33 /* Target */: return [3 /*break*/, 3];
                        case 4 /* Hash */: return [3 /*break*/, 4];
                        case 1 /* Discover */: return [3 /*break*/, 10];
                        case 2 /* Mutation */: return [3 /*break*/, 10];
                    }
                    return [3 /*break*/, 16];
                case 1:
                    d = doc.data;
                    tokens.push(d.width);
                    tokens.push(d.height);
                    metric.measure(20 /* DocumentWidth */, d.width);
                    metric.measure(21 /* DocumentHeight */, d.height);
                    upload_1.queue(tokens);
                    return [3 /*break*/, 16];
                case 2:
                    bm = boxmodel.updates();
                    for (_i = 0, bm_1 = bm; _i < bm_1.length; _i++) {
                        value = bm_1[_i];
                        tokens.push(value.id);
                        tokens.push(value.box);
                    }
                    upload_1.queue(tokens);
                    return [3 /*break*/, 16];
                case 3:
                    targets = target.updates();
                    for (_b = 0, targets_1 = targets; _b < targets_1.length; _b++) {
                        value = targets_1[_b];
                        tokens.push(value.id);
                        tokens.push(value.hash);
                        tokens.push(value.box);
                    }
                    upload_1.queue(tokens);
                    return [3 /*break*/, 16];
                case 4:
                    selectors = dom.selectors();
                    reference = 0;
                    _c = 0, selectors_1 = selectors;
                    _g.label = 5;
                case 5:
                    if (!(_c < selectors_1.length)) return [3 /*break*/, 9];
                    value = selectors_1[_c];
                    if (!task.longtask(timer)) return [3 /*break*/, 7];
                    return [4 /*yield*/, task.idle(timer)];
                case 6:
                    _g.sent();
                    _g.label = 7;
                case 7:
                    h = hash_1.default(value.selector);
                    pointer = tokens.indexOf(h);
                    tokens.push(value.id - reference);
                    tokens.push(pointer >= 0 ? [pointer] : h);
                    reference = value.id;
                    _g.label = 8;
                case 8:
                    _c++;
                    return [3 /*break*/, 5];
                case 9:
                    upload_1.queue(tokens);
                    return [3 /*break*/, 16];
                case 10:
                    values = dom.updates();
                    _d = 0, values_1 = values;
                    _g.label = 11;
                case 11:
                    if (!(_d < values_1.length)) return [3 /*break*/, 15];
                    value = values_1[_d];
                    if (!task.longtask(timer)) return [3 /*break*/, 13];
                    return [4 /*yield*/, task.idle(timer)];
                case 12:
                    _g.sent();
                    _g.label = 13;
                case 13:
                    metadata = [];
                    data = value.data;
                    active = value.metadata.active;
                    keys = active ? ["tag", "path", "attributes", "value"] : ["tag"];
                    for (_e = 0, keys_1 = keys; _e < keys_1.length; _e++) {
                        key = keys_1[_e];
                        if (data[key]) {
                            switch (key) {
                                case "tag":
                                    metric.counter(0 /* Nodes */);
                                    tokens.push(value.id);
                                    if (value.parent && active) {
                                        tokens.push(value.parent);
                                    }
                                    if (value.next && active) {
                                        tokens.push(value.next);
                                    }
                                    metadata.push(value.position ? data[key] + "~" + value.position : data[key]);
                                    break;
                                case "path":
                                    metadata.push(value.data.path + ">");
                                    break;
                                case "attributes":
                                    for (attr in data[key]) {
                                        if (data[key][attr] !== undefined) {
                                            metadata.push(attribute(value.metadata.masked, attr, data[key][attr]));
                                            if (attr === "clarity") {
                                                switch (data[key][attr]) {
                                                    case "no-track":
                                                        addEventToQueue = false;
                                                        break;
                                                }
                                            }
                                        }
                                    }
                                    break;
                                case "value":
                                    parent_1 = dom.getNode(value.parent);
                                    parentTag = dom.get(parent_1) ? dom.get(parent_1).data.tag : null;
                                    tag = value.data.tag === "STYLE" ? value.data.tag : parentTag;
                                    metadata.push(text(value.metadata.masked, tag, data[key]));
                                    break;
                            }
                        }
                    }
                    // Add metadata
                    metadata = meta(metadata);
                    for (_f = 0, metadata_1 = metadata; _f < metadata_1.length; _f++) {
                        token = metadata_1[_f];
                        index = typeof token === "string" ? tokens.indexOf(token) : -1;
                        tokens.push(index >= 0 && token.length > index.toString().length ? [index] : token);
                    }
                    _g.label = 14;
                case 14:
                    _d++;
                    return [3 /*break*/, 11];
                case 15:
                    if (addEventToQueue) {
                        upload_1.queue(tokens);
                    }
                    return [3 /*break*/, 16];
                case 16: return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
function meta(metadata) {
    var value = JSON.stringify(metadata);
    var hashed = hash_1.default(value);
    return token_1.check(hashed) && hashed.length < value.length ? [[hashed]] : metadata;
}
function attribute(masked, key, value) {
    switch (key) {
        case "src":
        case "srcset":
        case "title":
        case "alt":
            return key + "=" + (masked ? "" : value);
        case "value":
        case "placeholder":
            return key + "=" + (masked ? mask_1.default(value) : value);
        default:
            return key + "=" + value;
    }
}
function text(masked, tag, value) {
    switch (tag) {
        case "STYLE":
        case "TITLE":
            return value;
        default:
            return masked ? mask_1.default(value) : value;
    }
}


/***/ }),

/***/ "./src/layout/index.ts":
/*!*****************************!*\
  !*** ./src/layout/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var boxmodel = __webpack_require__(/*! @src/layout/boxmodel */ "./src/layout/boxmodel.ts");
var discover = __webpack_require__(/*! @src/layout/discover */ "./src/layout/discover.ts");
var doc = __webpack_require__(/*! @src/layout/document */ "./src/layout/document.ts");
var dom = __webpack_require__(/*! @src/layout/dom */ "./src/layout/dom.ts");
var mutation = __webpack_require__(/*! @src/layout/mutation */ "./src/layout/mutation.ts");
var target = __webpack_require__(/*! @src/layout/target */ "./src/layout/target.ts");
function start() {
    doc.reset();
    dom.reset();
    mutation.start();
    discover.start();
    boxmodel.reset();
    target.reset();
}
exports.start = start;
function end() {
    dom.reset();
    mutation.end();
    boxmodel.reset();
    target.reset();
    doc.reset();
}
exports.end = end;


/***/ }),

/***/ "./src/layout/mutation.ts":
/*!********************************!*\
  !*** ./src/layout/mutation.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var task = __webpack_require__(/*! @src/core/task */ "./src/core/task.ts");
var boxmodel = __webpack_require__(/*! @src/layout/boxmodel */ "./src/layout/boxmodel.ts");
var doc = __webpack_require__(/*! @src/layout/document */ "./src/layout/document.ts");
var encode_1 = __webpack_require__(/*! @src/layout/encode */ "./src/layout/encode.ts");
var node_1 = __webpack_require__(/*! ./node */ "./src/layout/node.ts");
var observer;
var mutations = [];
var insertRule = null;
var deleteRule = null;
function start() {
    if (observer) {
        observer.disconnect();
    }
    observer = window["MutationObserver"] ? new MutationObserver(handle) : null;
    observer.observe(document, { attributes: true, childList: true, characterData: true, subtree: true });
    if (insertRule === null) {
        insertRule = CSSStyleSheet.prototype.insertRule;
    }
    if (deleteRule === null) {
        deleteRule = CSSStyleSheet.prototype.deleteRule;
    }
    // Some popular open source libraries, like styled-components, optimize performance
    // by injecting CSS using insertRule API vs. appending text node. A side effect of
    // using javascript API is that it doesn't trigger DOM mutation and therefore we
    // need to override the insertRule API and listen for changes manually.
    CSSStyleSheet.prototype.insertRule = function (rule, index) {
        var value = insertRule.call(this, rule, index);
        generate(this.ownerNode, "characterData");
        return value;
    };
    CSSStyleSheet.prototype.deleteRule = function (index) {
        deleteRule.call(this, index);
        generate(this.ownerNode, "characterData");
    };
}
exports.start = start;
function end() {
    if (observer) {
        observer.disconnect();
    }
    observer = null;
    // Restoring original insertRule
    if (insertRule !== null) {
        CSSStyleSheet.prototype.insertRule = insertRule;
        insertRule = null;
    }
    // Restoring original deleteRule
    if (deleteRule !== null) {
        CSSStyleSheet.prototype.deleteRule = deleteRule;
        deleteRule = null;
    }
    mutations = [];
}
exports.end = end;
function handle(m) {
    // Queue up mutation records for asynchronous processing
    for (var i = 0; i < m.length; i++) {
        mutations.push(m[i]);
    }
    task.schedule(process).then(function () {
        doc.compute();
        boxmodel.compute();
    });
}
function process() {
    return __awaiter(this, void 0, void 0, function () {
        var timer, mutation, target, _a, addedLength, j, walker, node, removedLength, j;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    timer = 13 /* MutationTime */;
                    task.start(timer);
                    _b.label = 1;
                case 1:
                    if (!(mutations.length > 0)) return [3 /*break*/, 22];
                    mutation = mutations.shift();
                    target = mutation.target;
                    _a = mutation.type;
                    switch (_a) {
                        case "attributes": return [3 /*break*/, 2];
                        case "characterData": return [3 /*break*/, 5];
                        case "childList": return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 20];
                case 2:
                    if (!task.longtask(timer)) return [3 /*break*/, 4];
                    return [4 /*yield*/, task.idle(timer)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    node_1.default(target, 3 /* Attributes */);
                    return [3 /*break*/, 21];
                case 5:
                    if (!task.longtask(timer)) return [3 /*break*/, 7];
                    return [4 /*yield*/, task.idle(timer)];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7:
                    node_1.default(target, 4 /* CharacterData */);
                    return [3 /*break*/, 21];
                case 8:
                    addedLength = mutation.addedNodes.length;
                    j = 0;
                    _b.label = 9;
                case 9:
                    if (!(j < addedLength)) return [3 /*break*/, 14];
                    walker = document.createTreeWalker(mutation.addedNodes[j], NodeFilter.SHOW_ALL, null, false);
                    node = walker.currentNode;
                    _b.label = 10;
                case 10:
                    if (!node) return [3 /*break*/, 13];
                    if (!task.longtask(timer)) return [3 /*break*/, 12];
                    return [4 /*yield*/, task.idle(timer)];
                case 11:
                    _b.sent();
                    _b.label = 12;
                case 12:
                    node_1.default(node, 1 /* ChildListAdd */);
                    node = walker.nextNode();
                    return [3 /*break*/, 10];
                case 13:
                    j++;
                    return [3 /*break*/, 9];
                case 14:
                    removedLength = mutation.removedNodes.length;
                    j = 0;
                    _b.label = 15;
                case 15:
                    if (!(j < removedLength)) return [3 /*break*/, 19];
                    if (!task.longtask(timer)) return [3 /*break*/, 17];
                    return [4 /*yield*/, task.idle(timer)];
                case 16:
                    _b.sent();
                    _b.label = 17;
                case 17:
                    node_1.default(mutation.removedNodes[j], 2 /* ChildListRemove */);
                    _b.label = 18;
                case 18:
                    j++;
                    return [3 /*break*/, 15];
                case 19: return [3 /*break*/, 21];
                case 20: return [3 /*break*/, 21];
                case 21: return [3 /*break*/, 1];
                case 22: return [4 /*yield*/, encode_1.default(config_1.default.lean ? 4 /* Hash */ : 2 /* Mutation */)];
                case 23:
                    _b.sent();
                    task.stop(timer);
                    return [2 /*return*/];
            }
        });
    });
}
function generate(target, type) {
    handle([{
            addedNodes: null,
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: null,
            target: target,
            type: type
        }]);
}


/***/ }),

/***/ "./src/layout/node.ts":
/*!****************************!*\
  !*** ./src/layout/node.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var dom = __webpack_require__(/*! ./dom */ "./src/layout/dom.ts");
var IGNORE_ATTRIBUTES = ["title", "alt", "onload", "onfocus"];
function default_1(node, source) {
    // Do not track this change if we are attempting to remove a node before discovering it
    if (source === 2 /* ChildListRemove */ && dom.has(node) === false) {
        return;
    }
    // Special handling for text nodes that belong to style nodes
    if (source !== 0 /* Discover */ &&
        node.nodeType === Node.TEXT_NODE &&
        node.parentElement &&
        node.parentElement.tagName === "STYLE") {
        node = node.parentNode;
    }
    var call = dom.has(node) ? "update" : "add";
    switch (node.nodeType) {
        case Node.DOCUMENT_TYPE_NODE:
            var doctype = node;
            var docAttributes = { name: doctype.name, publicId: doctype.publicId, systemId: doctype.systemId };
            var docData = { tag: "*D", attributes: docAttributes };
            dom[call](node, docData, source);
            break;
        case Node.TEXT_NODE:
            // Account for this text node only if we are tracking the parent node
            // We do not wish to track text nodes for ignored parent nodes, like script tags
            // Also, we do not track text nodes for STYLE tags
            // The only exception is when we receive a mutation to remove the text node, in that case
            // parent will be null, but we can still process the node by checking it's an update call.
            var parent_1 = node.parentElement;
            if (call === "update" || (parent_1 && dom.has(parent_1) && parent_1.tagName !== "STYLE")) {
                var textData = { tag: "*T", value: node.nodeValue };
                dom[call](node, textData, source);
            }
            break;
        case Node.ELEMENT_NODE:
            var element = node;
            var tag = element.tagName;
            tag = (element.namespaceURI === "http://www.w3.org/2000/svg" /* SVG_NAMESPACE */) ? "svg:" /* SVG_PREFIX */ + tag : tag;
            switch (tag) {
                case "SCRIPT":
                case "NOSCRIPT":
                case "META":
                    break;
                case "HEAD":
                    var head = { tag: tag, attributes: getAttributes(element.attributes) };
                    // Capture base href as part of discovering DOM
                    if (call === "add") {
                        head.attributes["*B"] = location.protocol + "//" + location.hostname;
                    }
                    dom[call](node, head, source);
                    break;
                case "STYLE":
                    var attributes = getAttributes(element.attributes);
                    var styleData = { tag: tag, attributes: attributes, value: getStyleValue(element) };
                    dom[call](node, styleData, source);
                    break;
                default:
                    var data = { tag: tag, attributes: getAttributes(element.attributes) };
                    dom[call](node, data, source);
                    break;
            }
            break;
        default:
            break;
    }
}
exports.default = default_1;
function getStyleValue(style) {
    var value = style.textContent;
    if (value.length === 0 || config_1.default.cssRules) {
        var cssRules = null;
        // Firefox throws a SecurityError when trying to access cssRules of a stylesheet from a different domain
        try {
            var sheet = style.sheet;
            cssRules = sheet ? sheet.cssRules : [];
        }
        catch (e) {
            if (e.name !== "SecurityError") {
                throw e;
            }
        }
        if (cssRules !== null) {
            for (var i = 0; i < cssRules.length; i++) {
                value += cssRules[i].cssText;
            }
        }
    }
    return value;
}
function getAttributes(attributes) {
    var output = {};
    if (attributes && attributes.length > 0) {
        for (var i = 0; i < attributes.length; i++) {
            var name_1 = attributes[i].name;
            if (IGNORE_ATTRIBUTES.indexOf(name_1) < 0) {
                output[name_1] = attributes[i].value;
            }
        }
    }
    return output;
}


/***/ }),

/***/ "./src/layout/selector.ts":
/*!********************************!*\
  !*** ./src/layout/selector.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(tag, prefix, attributes, position) {
    var empty = "";
    var suffix = position ? ":nth-of-type(" + position + ")" : empty;
    switch (tag) {
        case "STYLE":
        case "TITLE":
        case "LINK":
        case "META":
        case "*T":
        case "*D":
            return empty;
        case "HTML":
            return "HTML";
        default:
            if (prefix === null) {
                return empty;
            }
            tag = tag.indexOf("svg:" /* SVG_PREFIX */) === 0 ? tag.substr("svg:" /* SVG_PREFIX */.length) : tag;
            var selector = "" + prefix + tag + suffix;
            if ("data-clarity" /* ID_ATTRIBUTE */ in attributes) {
                selector = "*" + attributes["data-clarity" /* ID_ATTRIBUTE */];
            }
            else if ("id" in attributes && attributes["id"].length > 0) {
                selector = tag + "#" + attributes.id;
            }
            else if ("class" in attributes && attributes["class"].length > 0) {
                selector = "" + prefix + tag + "." + attributes.class.trim().split(/\s+/).join(".") + suffix;
            }
            return selector;
    }
}
exports.default = default_1;


/***/ }),

/***/ "./src/layout/target.ts":
/*!******************************!*\
  !*** ./src/layout/target.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! @src/core/config */ "./src/core/config.ts");
var hash_1 = __webpack_require__(/*! @src/data/hash */ "./src/data/hash.ts");
var boxmodel_1 = __webpack_require__(/*! @src/layout/boxmodel */ "./src/layout/boxmodel.ts");
var encode_1 = __webpack_require__(/*! @src/layout/encode */ "./src/layout/encode.ts");
var dom = __webpack_require__(/*! ./dom */ "./src/layout/dom.ts");
var queue = [];
var timeout = null;
function reset() {
    queue = [];
    clearTimeout(timeout);
    timeout = null;
}
exports.reset = reset;
function observe(id) {
    if (queue.indexOf(id) === -1) {
        queue.push(id);
    }
    clearTimeout(timeout);
    timeout = window.setTimeout(encode_1.default, config_1.default.lookahead, 33 /* Target */);
}
exports.observe = observe;
function updates() {
    var data = [];
    if (queue.length > 0) {
        var doc = document.documentElement;
        var x = "pageXOffset" in window ? window.pageXOffset : doc.scrollLeft;
        var y = "pageYOffset" in window ? window.pageYOffset : doc.scrollTop;
        // Process all layout computations in single batch to avoid reflows
        for (var _i = 0, queue_1 = queue; _i < queue_1.length; _i++) {
            var id = queue_1[_i];
            var value = dom.getValue(id);
            var node = dom.getNode(id);
            data.push({
                id: id,
                hash: value ? hash_1.default(value.selector) : "",
                box: node && node.nodeType !== Node.TEXT_NODE ? boxmodel_1.layout(node, x, y) : []
            });
        }
        reset();
    }
    return data;
}
exports.updates = updates;


/***/ }),

/***/ "./webpack/globalize.ts":
/*!******************************!*\
  !*** ./webpack/globalize.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var clarity = __webpack_require__(/*! @src/clarity */ "./src/clarity.ts");
// When built with webpack for prod, compiled clarity-js bundle doesn't expose the module anywhere on the page.
// Since we need clarity-js to be available globally, we can create a wrapper module that would assign clarity to window.
if (typeof window !== "undefined") {
    window.clarity = clarity;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL21hc2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdGFzay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3ZlcnNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZW5jb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2hhc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvbWV0YWRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvbWV0cmljLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3BpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvdGFnLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3Rva2VuLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3VwbG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhZ25vc3RpYy9lbmNvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdub3N0aWMvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdub3N0aWMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdub3N0aWMvc2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGlvbi9jaGFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyYWN0aW9uL2VuY29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJhY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyYWN0aW9uL3BvaW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyYWN0aW9uL3Jlc2l6ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJhY3Rpb24vc2Nyb2xsLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGlvbi9zZWxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyYWN0aW9uL3VubG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJhY3Rpb24vdmlzaWJpbGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2JveG1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvZGlzY292ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9kb2N1bWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2RvbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2VuY29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvbXV0YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9ub2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC90YXJnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9nbG9iYWxpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5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TSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBRXJFLG1FQUFtRTtRQUNuRSxLQUFlLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7WUFBakIsSUFBSSxFQUFFO1lBQ1AsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBWSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ04sRUFBRTtnQkFDRixJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxjQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsaUJBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQzFFLENBQUMsQ0FBQztTQUNOO1FBQ0QsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFwQkQsMEJBb0JDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0QsMEVBQXdDO0FBRXhDLCtHQUErRztBQUMvRyx5SEFBeUg7QUFDekgsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7SUFDOUIsTUFBYyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDckMiLCJmaWxlIjoiY2xhcml0eS5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYnBhY2svZ2xvYmFsaXplLnRzXCIpO1xuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgY29yZSBmcm9tIFwiQHNyYy9jb3JlXCI7XHJcbmltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gXCJAc3JjL2NvcmUvY29uZmlnXCI7XHJcbmltcG9ydCB7IGJpbmQgfSBmcm9tIFwiQHNyYy9jb3JlL2V2ZW50XCI7XHJcbmltcG9ydCAqIGFzIGRhdGEgZnJvbSBcIkBzcmMvZGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFnbm9zdGljIGZyb20gXCJAc3JjL2RpYWdub3N0aWNcIjtcclxuaW1wb3J0ICogYXMgaW50ZXJhY3Rpb24gZnJvbSBcIkBzcmMvaW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgbGF5b3V0IGZyb20gXCJAc3JjL2xheW91dFwiO1xyXG5cclxubGV0IHN0YXR1cyA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyhvdmVycmlkZTogQ29uZmlnKTogYm9vbGVhbiB7XHJcbiAgLy8gUHJvY2VzcyBjdXN0b20gY29uZmlndXJhdGlvbiBvdmVycmlkZXMsIGlmIGF2YWlsYWJsZVxyXG4gIGlmIChzdGF0dXMpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgZm9yIChsZXQga2V5IGluIG92ZXJyaWRlKSB7XHJcbiAgICAgIGlmIChrZXkgaW4gY29uZmlndXJhdGlvbikgeyBjb25maWd1cmF0aW9uW2tleV0gPSBvdmVycmlkZVtrZXldOyB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQob3ZlcnJpZGU6IENvbmZpZyA9IHt9KTogdm9pZCB7XHJcblx0Y29uc29sZS5sb2coJ0NsYXJpdHkgU3RhcnQhISAxMicsIG92ZXJyaWRlKTtcclxuICBpZiAoY29yZS5jaGVjaygpKSB7XHJcblx0ICBjb25zb2xlLmxvZygnRXZlcnl0aGluZyB3aWxsIHN0YXJ0IG5vdyBTdGFydCEhJyk7XHJcbiAgICBjb25maWcob3ZlcnJpZGUpO1xyXG4gICAgc3RhdHVzID0gdHJ1ZTtcclxuXHRjb3JlLnN0YXJ0KCk7XHJcblx0Y29uc29sZS5sb2coJzEnKTtcclxuXHRkYXRhLnN0YXJ0KCk7XHJcblx0Y29uc29sZS5sb2coJzInKTtcclxuXHRcclxuICAgIGRpYWdub3N0aWMuc3RhcnQoKTtcclxuXHRjb25zb2xlLmxvZygnMycpO1xyXG5cclxuXHRsYXlvdXQuc3RhcnQoKTtcclxuXHRjb25zb2xlLmxvZygnNCcpO1xyXG5cclxuXHRpbnRlcmFjdGlvbi5zdGFydCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlKCk6IHZvaWQge1xyXG4gIGVuZCgpO1xyXG4gIGJpbmQoZG9jdW1lbnQsIFwibW91c2Vtb3ZlXCIsIHJlc3VtZSk7XHJcbiAgYmluZChkb2N1bWVudCwgXCJ0b3VjaHN0YXJ0XCIsIHJlc3VtZSk7XHJcbiAgYmluZCh3aW5kb3csIFwicmVzaXplXCIsIHJlc3VtZSk7XHJcbiAgYmluZCh3aW5kb3csIFwic2Nyb2xsXCIsIHJlc3VtZSk7XHJcbiAgYmluZCh3aW5kb3csIFwicGFnZXNob3dcIiwgcmVzdW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3VtZSgpOiB2b2lkIHtcclxuXHRjb25zb2xlLmxvZyhcInJlc3VtZVwiKVxyXG4gIHN0YXJ0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmQoKTogdm9pZCB7XHJcbiAgaWYgKHN0YXR1cykge1xyXG4gICAgaW50ZXJhY3Rpb24uZW5kKCk7XHJcbiAgICBsYXlvdXQuZW5kKCk7XHJcbiAgICBkaWFnbm9zdGljLmVuZCgpO1xyXG4gICAgZGF0YS5lbmQoKTtcclxuICAgIGNvcmUuZW5kKCk7XHJcblxyXG4gICAgc3RhdHVzID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgLy8gRG8gbm90IHByb2Nlc3MgdGFncyBpZiBDbGFyaXR5IGlzIG5vdCBhbHJlYWR5IGFjdGl2YXRlZFxyXG4gIGlmIChzdGF0dXMpIHtcclxuICAgIGRhdGEudGFnKGtleSwgdmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZSgpOiBib29sZWFuIHtcclxuICByZXR1cm4gc3RhdHVzO1xyXG59XHJcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9jb3JlXCI7XHJcblxyXG5sZXQgY29uZmlnOiBDb25maWcgPSB7XHJcbiAgICBwcm9qZWN0SWQ6IG51bGwsXHJcbiAgICBsb25ndGFzazogMzAsIC8vIDMwIG1pbGxpc2Vjb25kc1xyXG4gICAgbG9va2FoZWFkOiA1MDAsIC8vIDUwMCBtaWxsaXNlY29uZHNcclxuICAgIGRpc3RhbmNlOiAyMCwgLy8gMjAgcGl4ZWxzXHJcbiAgICBpbnRlcnZhbDogMjUsIC8vIDI1IG1pbGxpc2Vjb25kc1xyXG4gICAgZGVsYXk6IDEwMDAsIC8vIDEgc2Vjb25kXHJcbiAgICBleHBpcmU6IDcsIC8vIDcgZGF5c1xyXG4gICAgcGluZzogNjAgKiAxMDAwLCAvLyAxIG1pbnV0ZVxyXG4gICAgdGltZW91dDogMTAgKiA2MCAqIDEwMDAsIC8vIDEwIG1pbnV0ZXNcclxuICAgIHNodXRkb3duOiAyICogNjAgKiA2MCAqIDEwMDAsIC8vIDIgaG91cnNcclxuICAgIGNzc1J1bGVzOiBmYWxzZSxcclxuICAgIGxlYW46IGZhbHNlLFxyXG4gICAgdG9rZW5zOiBbXSxcclxuICAgIHVybDogXCJcIixcclxuICAgIG9uc3RhcnQ6IG51bGwsXHJcblx0XHR1cGxvYWQ6IG51bGwsXHJcblx0XHR3cF91cGxvYWQ6IG51bGxcclxuXHRcdFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iLCJpbXBvcnQgeyBCcm93c2VyRXZlbnQgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvY29yZVwiO1xyXG5cclxubGV0IGJpbmRpbmdzOiBCcm93c2VyRXZlbnRbXSA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQodGFyZ2V0OiBFdmVudFRhcmdldCwgZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIsIGNhcHR1cmU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG5cdGNvbnNvbGUubG9nKCdiaW5kIGFkZEV2ZW50TGlzdGVuZXInKTtcclxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSk7XHJcbiAgICBiaW5kaW5ncy5wdXNoKHsgZXZlbnQsIHRhcmdldCwgbGlzdGVuZXIsIGNhcHR1cmUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpOiB2b2lkIHtcclxuICAvLyBXYWxrIHRocm91Z2ggZXhpc3RpbmcgbGlzdCBvZiBiaW5kaW5ncyBhbmQgcmVtb3ZlIHRoZW0gYWxsXHJcbiAgZm9yIChsZXQgYmluZGluZyBvZiBiaW5kaW5ncykge1xyXG4gICAgKGJpbmRpbmcudGFyZ2V0KS5yZW1vdmVFdmVudExpc3RlbmVyKGJpbmRpbmcuZXZlbnQsIGJpbmRpbmcubGlzdGVuZXIsIGJpbmRpbmcuY2FwdHVyZSk7XHJcbiAgfVxyXG4gIGJpbmRpbmdzID0gW107XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZXZlbnQgZnJvbSBcIkBzcmMvY29yZS9ldmVudFwiO1xyXG5cclxuZXhwb3J0IGxldCBzdGFydFRpbWUgPSAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICBldmVudC5yZXNldCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5kKCk6IHZvaWQge1xyXG4gICAgZXZlbnQucmVzZXQoKTtcclxuICAgIHN0YXJ0VGltZSA9IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVjaygpOiBib29sZWFuIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgICAgICAgIHdpbmRvd1tcIk11dGF0aW9uT2JzZXJ2ZXJcIl0gJiZcclxuICAgICAgICAgICAgZG9jdW1lbnRbXCJjcmVhdGVUcmVlV2Fsa2VyXCJdICYmXHJcbiAgICAgICAgICAgIFwibm93XCIgaW4gRGF0ZSAmJlxyXG4gICAgICAgICAgICBcIm5vd1wiIGluIHBlcmZvcm1hbmNlICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiBXZWFrTWFwICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgd2FzV2hpdGVTcGFjZSA9IGZhbHNlO1xyXG4gICAgbGV0IHRleHRDb3VudCA9IDA7XHJcbiAgICBsZXQgd29yZENvdW50ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgbGV0IGlzV2hpdGVTcGFjZSA9IChjb2RlID09PSAzMiB8fCBjb2RlID09PSAxMCB8fCBjb2RlID09PSA5IHx8IGNvZGUgPT09IDEzKTtcclxuICAgICAgICBsZXQgaXNOb3RDaGFyYWN0ZXIgPSAoKGNvZGUgPj0gMzMgJiYgY29kZSA8PSA0NykgfHwgKGNvZGUgPj0gOTEgJiYgY29kZSA8PSA5NikgfHwgKGNvZGUgPj0gMTIzICYmIGNvZGUgPD0gMTI2KSk7XHJcbiAgICAgICAgdGV4dENvdW50ICs9IGlzV2hpdGVTcGFjZSB8fCBpc05vdENoYXJhY3RlciA/IDAgOiAxO1xyXG4gICAgICAgIHdvcmRDb3VudCArPSBpc1doaXRlU3BhY2UgJiYgIXdhc1doaXRlU3BhY2UgPyAxIDogMDtcclxuICAgICAgICB3YXNXaGl0ZVNwYWNlID0gaXNXaGl0ZVNwYWNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAqJHt0ZXh0Q291bnQudG9TdHJpbmcoMzYpfSoke3dvcmRDb3VudC50b1N0cmluZygzNil9YDtcclxufVxyXG4iLCJpbXBvcnQgeyBBc3luY1Rhc2ssIFRhc2tGdW5jdGlvbiwgVGFza1Jlc29sdmUsIFRhc2tUaW1pbmcgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvY29yZVwiO1xyXG5pbXBvcnQgeyBNZXRyaWMgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJAc3JjL2NvcmUvY29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIG1ldHJpY3MgZnJvbSBcIkBzcmMvZGF0YS9tZXRyaWNcIjtcclxuXHJcbmxldCB0cmFja2VyOiBUYXNrVGltaW5nID0ge307XHJcbmxldCB0aHJlc2hvbGQgPSBjb25maWcubG9uZ3Rhc2s7XHJcbmxldCBxdWV1ZTogQXN5bmNUYXNrW10gPSBbXTtcclxubGV0IGFjdGl2ZTogQXN5bmNUYXNrID0gbnVsbDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzY2hlZHVsZSh0YXNrOiBUYXNrRnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIC8vIElmIHRoaXMgdGFzayBpcyBhbHJlYWR5IHNjaGVkdWxlZCwgc2tpcCBpdFxyXG4gICAgZm9yIChsZXQgcSBvZiBxdWV1ZSkge1xyXG4gICAgICAgIGlmIChxLnRhc2sgPT09IHRhc2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlOiBUYXNrUmVzb2x2ZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHF1ZXVlLnB1c2goe3Rhc2ssIHJlc29sdmV9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChhY3RpdmUgPT09IG51bGwpIHsgcnVuKCk7IH1cclxuXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuKCk6IHZvaWQge1xyXG4gICAgbGV0IGVudHJ5ID0gcXVldWUuc2hpZnQoKTtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgIGFjdGl2ZSA9IGVudHJ5O1xyXG4gICAgICAgIGVudHJ5LnRhc2soKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZW50cnkucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICBhY3RpdmUgPSBudWxsO1xyXG4gICAgICAgICAgICBydW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvbmd0YXNrKG1ldGhvZDogTWV0cmljKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgZWxhcHNlZCA9IERhdGUubm93KCkgLSB0cmFja2VyW21ldGhvZF07XHJcbiAgICByZXR1cm4gKGVsYXBzZWQgPiB0aHJlc2hvbGQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQobWV0aG9kOiBNZXRyaWMpOiB2b2lkIHtcclxuICAgIGlmICghKG1ldGhvZCBpbiB0cmFja2VyKSkge1xyXG4gICAgICAgIHRyYWNrZXJbbWV0aG9kXSA9IDA7XHJcbiAgICB9XHJcbiAgICB0cmFja2VyW21ldGhvZF0gPSBEYXRlLm5vdygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcChtZXRob2Q6IE1ldHJpYyk6IHZvaWQge1xyXG4gICAgbGV0IGVuZCA9IERhdGUubm93KCk7XHJcbiAgICBsZXQgZHVyYXRpb24gPSBlbmQgLSB0cmFja2VyW21ldGhvZF07XHJcbiAgICBtZXRyaWNzLmNvdW50ZXIobWV0aG9kLCBkdXJhdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpZGxlKG1ldGhvZDogTWV0cmljKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBzdG9wKG1ldGhvZCk7XHJcbiAgICBhd2FpdCB3YWl0KCk7XHJcbiAgICBzdGFydChtZXRob2QpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB3YWl0KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZTogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spOiB2b2lkID0+IHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzb2x2ZSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBzdGFydFRpbWUgfSBmcm9tIFwiQHNyYy9jb3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQocGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWUpO1xyXG59XHJcbiIsImxldCB2ZXJzaW9uID0gXCIxLjAuMC1iMTBcIjtcclxuZXhwb3J0IGRlZmF1bHQgdmVyc2lvbjtcclxuIiwiaW1wb3J0IHtFdmVudCwgTWV0cmljLCBUb2tlbiB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9kYXRhXCI7XHJcbmltcG9ydCB0aW1lIGZyb20gXCJAc3JjL2NvcmUvdGltZVwiO1xyXG5pbXBvcnQgeyBtZXRhZGF0YSB9IGZyb20gXCJAc3JjL2RhdGEvbWV0YWRhdGFcIjtcclxuaW1wb3J0ICogYXMgbWV0cmljIGZyb20gXCJAc3JjL2RhdGEvbWV0cmljXCI7XHJcbmltcG9ydCAqIGFzIHBpbmcgZnJvbSBcIkBzcmMvZGF0YS9waW5nXCI7XHJcbmltcG9ydCAqIGFzIHRhZyBmcm9tIFwiQHNyYy9kYXRhL3RhZ1wiO1xyXG5pbXBvcnQgeyBxdWV1ZSwgdHJhY2sgfSBmcm9tIFwiLi91cGxvYWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgbGV0IHQgPSB0aW1lKCk7XHJcblx0XHRsZXQgdG9rZW5zOiBUb2tlbltdID0gW3QsIGV2ZW50XTtcclxuICAgIHN3aXRjaCAoZXZlbnQpIHtcclxuICAgICAgICBjYXNlIEV2ZW50LlBpbmc6XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHBpbmcuZGF0YS5nYXApO1xyXG4gICAgICAgICAgICBxdWV1ZSh0b2tlbnMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV2ZW50LlBhZ2U6XHJcbiAgICAgICAgICAgIG1ldHJpYy5jb3VudGVyKE1ldHJpYy5TdGFydFRpbWUsIE1hdGgucm91bmQocGVyZm9ybWFuY2Uubm93KCkpKTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2gobWV0YWRhdGEucGFnZS50aW1lc3RhbXApO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaChtZXRhZGF0YS5wYWdlLnVhKTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2gobWV0YWRhdGEucGFnZS51cmwpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaChtZXRhZGF0YS5wYWdlLnJlZmVycmVyKTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2gobWV0YWRhdGEucGFnZS5sZWFuKTtcclxuICAgICAgICAgICAgcXVldWUodG9rZW5zKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFdmVudC5UYWc6XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHRhZy5kYXRhLmtleSk7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHRhZy5kYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgcXVldWUodG9rZW5zKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFdmVudC5VcGxvYWQ6XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHRyYWNrLnNlcXVlbmNlKTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2godHJhY2suYXR0ZW1wdHMpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh0cmFjay5zdGF0dXMpO1xyXG4gICAgICAgICAgICBxdWV1ZSh0b2tlbnMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV2ZW50Lk1ldHJpYzpcclxuICAgICAgICAgICAgaWYgKG1ldHJpYy51cGRhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGQgaW4gbWV0cmljLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWV0cmljLmRhdGFbZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG0gPSBwYXJzZUludChkLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXRyaWMudXBkYXRlcy5pbmRleE9mKG0pID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKG0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2gobWV0cmljLmRhdGFbZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWV0cmljLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBxdWV1ZSh0b2tlbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOiBuby1iaXR3aXNlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gQ29kZSBpbnNwaXJlZCBmcm9tIEMjIEdldEhhc2hDb2RlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L3JlZmVyZW5jZXNvdXJjZS9ibG9iL21hc3Rlci9tc2NvcmxpYi9zeXN0ZW0vc3RyaW5nLmNzXHJcbiAgICBsZXQgaGFzaCA9IDA7XHJcbiAgICBsZXQgaGFzaE9uZSA9IDUzODE7XHJcbiAgICBsZXQgaGFzaFR3byA9IGhhc2hPbmU7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgbGV0IGNoYXJPbmUgPSBpbnB1dC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGhhc2hPbmUgPSAoKGhhc2hPbmUgPDwgNSkgKyBoYXNoT25lKSBeIGNoYXJPbmU7XHJcbiAgICAgICAgaWYgKGkgKyAxIDwgaW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyVHdvID0gaW5wdXQuY2hhckNvZGVBdChpICsgMSk7XHJcbiAgICAgICAgICAgIGhhc2hUd28gPSAoKGhhc2hUd28gPDwgNSkgKyBoYXNoVHdvKSBeIGNoYXJUd287XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gUmVwbGFjZSB0aGUgbWFnaWMgbnVtYmVyIGZyb20gQyMgaW1wbGVtZW50YXRpb24gKDE1NjYwODM5NDEpIHdpdGggYSBzbWFsbGVyIHByaW1lIG51bWJlciAoMTE1NzkpXHJcbiAgICAvLyBUaGlzIGVuc3VyZXMgd2UgZG9uJ3QgaGl0IGludGVnZXIgb3ZlcmZsb3cgYW5kIHByZXZlbnQgY29sbGlzaW9uc1xyXG4gICAgaGFzaCA9IE1hdGguYWJzKGhhc2hPbmUgKyAoaGFzaFR3byAqIDExNTc5KSk7XHJcbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygzNikuc2xpY2UoLTYpOyAvLyBMaW1pdCBoYXNoZXMgdG8gNiBjaGFyYWN0ZXJzXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgbWV0YWRhdGEgZnJvbSBcIkBzcmMvZGF0YS9tZXRhZGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBtZXRyaWMgZnJvbSBcIkBzcmMvZGF0YS9tZXRyaWNcIjtcclxuaW1wb3J0ICogYXMgcGluZyBmcm9tIFwiQHNyYy9kYXRhL3BpbmdcIjtcclxuaW1wb3J0ICogYXMgdGFnIGZyb20gXCJAc3JjL2RhdGEvdGFnXCI7XHJcbmltcG9ydCAqIGFzIHVwbG9hZCBmcm9tIFwiQHNyYy9kYXRhL3VwbG9hZFwiO1xyXG5leHBvcnQgeyB0YWcgfSBmcm9tIFwiQHNyYy9kYXRhL3RhZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCk6IHZvaWQge1xyXG5cdGNvbnNvbGUubG9nKCdEYXRhIFN0YXJ0ISEnKTtcclxuICAgIHVwbG9hZC5zdGFydCgpO1xyXG4gICAgbWV0cmljLnN0YXJ0KCk7XHJcbiAgICBtZXRhZGF0YS5zdGFydCgpO1xyXG4gICAgcGluZy5zdGFydCgpO1xyXG4gICAgdGFnLnJlc2V0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmQoKTogdm9pZCB7XHJcbiAgICB0YWcucmVzZXQoKTtcclxuICAgIHBpbmcuZW5kKCk7XHJcbiAgICB1cGxvYWQuZW5kKCk7XHJcbiAgICBtZXRhZGF0YS5lbmQoKTtcclxuICAgIG1ldHJpYy5lbmQoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCb29sZWFuRmxhZywgQ29va2llSW5mbywgRW52ZWxvcGUsIEV2ZW50LCBNZXRhZGF0YSwgUGFnZURhdGEsIFRva2VuLCBVcGxvYWQgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJAc3JjL2NvcmUvY29uZmlnXCI7XHJcbmltcG9ydCB2ZXJzaW9uIGZyb20gXCJAc3JjL2NvcmUvdmVyc2lvblwiO1xyXG5pbXBvcnQgZW5jb2RlIGZyb20gXCJAc3JjL2RhdGEvZW5jb2RlXCI7XHJcbmltcG9ydCBoYXNoIGZyb20gXCJAc3JjL2RhdGEvaGFzaFwiO1xyXG5cclxuY29uc3QgQ0xBUklUWV9DT09LSUVfTkFNRTogc3RyaW5nID0gXCJfY2xhcml0eVwiO1xyXG5jb25zdCBDTEFSSVRZX0NPT0tJRV9TRVBBUkFUT1I6IHN0cmluZyA9IFwifFwiO1xyXG5jb25zdCBDTEFSSVRZX1NFU1NJT05fTEVOR1RIID0gMzAgKiA2MCAqIDEwMDA7XHJcbmV4cG9ydCBsZXQgbWV0YWRhdGE6IE1ldGFkYXRhID0gbnVsbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpOiB2b2lkIHtcclxuICAgIGxldCBjb29raWU6IENvb2tpZUluZm8gPSByZWFkKCk7XHJcbiAgICBsZXQgdHMgPSBEYXRlLm5vdygpO1xyXG4gICAgbGV0IHByb2plY3RJZCA9IGNvbmZpZy5wcm9qZWN0SWQgfHwgaGFzaChsb2NhdGlvbi5ob3N0KTtcclxuICAgIGxldCB1c2VySWQgPSBjb29raWUgJiYgY29va2llLnVzZXJJZCA/IGNvb2tpZS51c2VySWQgOiBndWlkKCk7XHJcbiAgICBsZXQgc2Vzc2lvbklkID0gY29va2llICYmIGNvb2tpZS5zZXNzaW9uSWQgJiYgdHMgLSBjb29raWUudGltZXN0YW1wIDwgQ0xBUklUWV9TRVNTSU9OX0xFTkdUSCA/IGNvb2tpZS5zZXNzaW9uSWQgOiB0cy50b1N0cmluZygzNik7XHJcbiAgICBsZXQgcGFnZUlkID0gZ3VpZCgpO1xyXG4gICAgbGV0IHVhID0gbmF2aWdhdG9yICYmIFwidXNlckFnZW50XCIgaW4gbmF2aWdhdG9yID8gbmF2aWdhdG9yLnVzZXJBZ2VudCA6IFwiXCI7XHJcbiAgICBsZXQgdXBsb2FkID0gVXBsb2FkLkFzeW5jO1xyXG4gICAgbGV0IGxlYW4gPSBjb25maWcubGVhbiA/IEJvb2xlYW5GbGFnLlRydWUgOiBCb29sZWFuRmxhZy5GYWxzZTtcclxuICAgIGxldCBlOiBFbnZlbG9wZSA9IHsgc2VxdWVuY2U6IDAsIHZlcnNpb24sIHBhZ2VJZCwgdXNlcklkLCBzZXNzaW9uSWQsIHByb2plY3RJZCwgdXBsb2FkLCBlbmQ6IEJvb2xlYW5GbGFnLkZhbHNlIH07XHJcbiAgICBsZXQgcDogUGFnZURhdGEgPSB7IHRpbWVzdGFtcDogdHMsIHVhLCB1cmw6IGxvY2F0aW9uLmhyZWYsIHJlZmVycmVyOiBkb2N1bWVudC5yZWZlcnJlciwgbGVhbiB9O1xyXG5cclxuICAgIG1ldGFkYXRhID0geyBwYWdlOiBwLCBlbnZlbG9wZTogZSB9O1xyXG5cclxuICAgIHRyYWNrKHsgdXNlcklkLCBzZXNzaW9uSWQsIHRpbWVzdGFtcDogdHMgfSk7XHJcbiAgICBlbmNvZGUoRXZlbnQuUGFnZSk7XHJcbiAgICBpZiAoY29uZmlnLm9uc3RhcnQpIHsgY29uZmlnLm9uc3RhcnQoeyB1c2VySWQsIHNlc3Npb25JZCwgcGFnZUlkfSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZCgpOiB2b2lkIHtcclxuICAgIG1ldGFkYXRhID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVudmVsb3BlKGxhc3Q6IGJvb2xlYW4pOiBUb2tlbltdIHtcclxuICAgIGxldCBlID0gbWV0YWRhdGEuZW52ZWxvcGU7XHJcbiAgICBlLnVwbG9hZCA9IGxhc3QgJiYgXCJzZW5kQmVhY29uXCIgaW4gbmF2aWdhdG9yID8gVXBsb2FkLkJlYWNvbiA6IFVwbG9hZC5Bc3luYztcclxuICAgIGUuZW5kID0gbGFzdCA/IEJvb2xlYW5GbGFnLlRydWUgOiBCb29sZWFuRmxhZy5GYWxzZTtcclxuICAgIGUuc2VxdWVuY2UrKztcclxuXHJcbiAgICByZXR1cm4gW2Uuc2VxdWVuY2UsIGUudmVyc2lvbiwgZS5wcm9qZWN0SWQsIGUudXNlcklkLCBlLnNlc3Npb25JZCwgZS5wYWdlSWQsIGUudXBsb2FkLCBlLmVuZF07XHJcbn1cclxuXHJcbi8vIENyZWRpdDogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYXRlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XHJcbi8vIEV4Y2x1ZGluZyAzcmQgcGFydHkgY29kZSBmcm9tIHRzbGludFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZVxyXG5mdW5jdGlvbiBndWlkKCkge1xyXG4gIGxldCBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcclxuICAgIC8vIFVzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcclxuICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IFxyXG4gIH1cclxuICBsZXQgdXVpZCA9IFwieHh4eHh4eHh4eHh4NHh4eHl4eHh4eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgIGxldCByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xyXG4gICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcclxuICAgIHJldHVybiAoYyA9PSBcInhcIiA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcclxuICB9KTtcclxuICByZXR1cm4gdXVpZDtcclxufVxyXG4vLyB0c2xpbnQ6ZW5hYmxlXHJcblxyXG5mdW5jdGlvbiB0cmFjayhkYXRhOiBDb29raWVJbmZvKTogdm9pZCB7XHJcbiAgbGV0IGV4cGlyeSA9IG5ldyBEYXRlKCk7XHJcbiAgZXhwaXJ5LnNldERhdGUoZXhwaXJ5LmdldERhdGUoKSArIGNvbmZpZy5leHBpcmUpO1xyXG4gIGxldCBleHBpcmVzID0gZXhwaXJ5ID8gXCJleHBpcmVzPVwiICsgZXhwaXJ5LnRvVVRDU3RyaW5nKCkgOiBcIlwiO1xyXG4gIGxldCB2YWx1ZSA9IGAke2RhdGEudXNlcklkfXwke2RhdGEuc2Vzc2lvbklkfXwke2RhdGEudGltZXN0YW1wfWAgKyBcIjtcIiArIGV4cGlyZXMgKyBcIjtwYXRoPS9cIjtcclxuICBkb2N1bWVudC5jb29raWUgPSBDTEFSSVRZX0NPT0tJRV9OQU1FICsgXCI9XCIgKyB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZCgpOiBDb29raWVJbmZvIHtcclxuICBsZXQgY29va2llczogc3RyaW5nW10gPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gIGlmIChjb29raWVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHBhaXI6IHN0cmluZ1tdID0gY29va2llc1tpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgIGlmIChwYWlyLmxlbmd0aCA+IDEgJiYgcGFpclswXS5pbmRleE9mKENMQVJJVFlfQ09PS0lFX05BTUUpID49IDAgJiYgcGFpclsxXS5pbmRleE9mKENMQVJJVFlfQ09PS0lFX1NFUEFSQVRPUikgPiAwKSB7XHJcbiAgICAgICAgbGV0IHBhcnRzID0gcGFpclsxXS5zcGxpdChDTEFSSVRZX0NPT0tJRV9TRVBBUkFUT1IpO1xyXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgIHJldHVybiB7IHVzZXJJZDogcGFydHNbMF0sIHNlc3Npb25JZDogcGFydHNbMV0sIHRpbWVzdGFtcDogcGFyc2VJbnQocGFydHNbMl0sIDEwKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudCwgTWV0cmljLCBNZXRyaWNEYXRhIH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2RhdGFcIjtcclxuaW1wb3J0IGVuY29kZSBmcm9tIFwiLi9lbmNvZGVcIjtcclxuXHJcbmV4cG9ydCBsZXQgZGF0YTogTWV0cmljRGF0YSA9IG51bGw7XHJcbmV4cG9ydCBsZXQgdXBkYXRlczogTWV0cmljW10gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpOiB2b2lkIHtcclxuICAgIGRhdGEgPSB7fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZCgpOiB2b2lkIHtcclxuICAgIGRhdGEgPSB7fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXIobWV0cmljOiBNZXRyaWMsIGluY3JlbWVudDogbnVtYmVyID0gMSk6IHZvaWQge1xyXG4gICAgaWYgKCEobWV0cmljIGluIGRhdGEpKSB7IGRhdGFbbWV0cmljXSA9IDA7IH1cclxuICAgIGRhdGFbbWV0cmljXSArPSBpbmNyZW1lbnQ7XHJcbiAgICB0cmFjayhtZXRyaWMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZShtZXRyaWM6IE1ldHJpYywgdmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCEobWV0cmljIGluIGRhdGEpKSB7IGRhdGFbbWV0cmljXSA9IDA7IH1cclxuICAgIGRhdGFbbWV0cmljXSA9IE1hdGgubWF4KHZhbHVlLCBkYXRhW21ldHJpY10pO1xyXG4gICAgdHJhY2sobWV0cmljKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGUoKTogdm9pZCB7XHJcbiAgICBlbmNvZGUoRXZlbnQuTWV0cmljKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJhY2sobWV0cmljOiBNZXRyaWMpOiB2b2lkIHtcclxuICAgIGlmICh1cGRhdGVzLmluZGV4T2YobWV0cmljKSA9PT0gLTEpIHtcclxuICAgICAgICB1cGRhdGVzLnB1c2gobWV0cmljKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgdXBkYXRlcyA9IFtdO1xyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50LCBQaW5nRGF0YSB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9kYXRhXCI7XHJcbmltcG9ydCB7IHBhdXNlIH0gZnJvbSBcIkBzcmMvY2xhcml0eVwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJAc3JjL2NvcmUvY29uZmlnXCI7XHJcbmltcG9ydCB0aW1lIGZyb20gXCJAc3JjL2NvcmUvdGltZVwiO1xyXG5pbXBvcnQgZW5jb2RlIGZyb20gXCIuL2VuY29kZVwiO1xyXG5cclxuZXhwb3J0IGxldCBkYXRhOiBQaW5nRGF0YTtcclxubGV0IGxhc3QgPSAwO1xyXG5sZXQgaW50ZXJ2YWwgPSAwO1xyXG5sZXQgdGltZW91dDogbnVtYmVyID0gbnVsbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpOiB2b2lkIHtcclxuICAgIGludGVydmFsID0gY29uZmlnLnBpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpOiB2b2lkIHtcclxuICAgIGlmICh0aW1lb3V0KSB7IGNsZWFyVGltZW91dCh0aW1lb3V0KTsgfVxyXG4gICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHBpbmcsIGludGVydmFsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGluZygpOiB2b2lkIHtcclxuICAgIGxldCBub3cgPSB0aW1lKCk7XHJcbiAgICBkYXRhID0geyBnYXA6IG5vdyAtIGxhc3QgfTtcclxuICAgIGVuY29kZShFdmVudC5QaW5nKTtcclxuICAgIGlmIChkYXRhLmdhcCA8IGNvbmZpZy50aW1lb3V0KSB7XHJcbiAgICAgICAgaW50ZXJ2YWwgPSBNYXRoLm1pbihpbnRlcnZhbCAqIDIsIGNvbmZpZy50aW1lb3V0KTtcclxuICAgICAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocGluZywgaW50ZXJ2YWwpO1xyXG4gICAgfSBlbHNlIHsgcGF1c2UoKTsgfVxyXG5cclxuICAgIGxhc3QgPSBub3c7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmQoKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICBsYXN0ID0gMDtcclxuICAgIGludGVydmFsID0gMDtcclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudCwgVGFnRGF0YSB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9kYXRhXCI7XHJcbmltcG9ydCBlbmNvZGUgZnJvbSBcIkBzcmMvZGF0YS9lbmNvZGVcIjtcclxuXHJcbmV4cG9ydCBsZXQgZGF0YTogVGFnRGF0YSA9IG51bGw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKTogdm9pZCB7XHJcbiAgICBkYXRhID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRhZyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgZGF0YSA9IHsga2V5LCB2YWx1ZSB9O1xyXG4gICAgZW5jb2RlKEV2ZW50LlRhZyk7XHJcbn1cclxuIiwibGV0IHRva2Vuczogc3RyaW5nW10gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVjayhoYXNoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGxldCBvdXRwdXQgPSB0b2tlbnMuaW5kZXhPZihoYXNoKSA+PSAwO1xyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUoaGFzaDogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIGNoZWNrKGhhc2gpID8gdG9rZW5zW2hhc2hdIDogW107XHJcbn1cclxuIiwiaW1wb3J0IHsgRW5jb2RlZFBheWxvYWQsIEV2ZW50LCBNZXRyaWMsIFRva2VuLCBUcmFuc2l0LCBVcGxvYWREYXRhIH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2RhdGFcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiQHNyYy9jb3JlL2NvbmZpZ1wiO1xyXG5pbXBvcnQgdGltZSBmcm9tIFwiQHNyYy9jb3JlL3RpbWVcIjtcclxuaW1wb3J0IGVuY29kZSBmcm9tIFwiQHNyYy9kYXRhL2VuY29kZVwiO1xyXG5pbXBvcnQgeyBlbnZlbG9wZSwgbWV0YWRhdGEgfSBmcm9tIFwiQHNyYy9kYXRhL21ldGFkYXRhXCI7XHJcbmltcG9ydCAqIGFzIG1ldHJpYyBmcm9tIFwiQHNyYy9kYXRhL21ldHJpY1wiO1xyXG5pbXBvcnQgKiBhcyBwaW5nIGZyb20gXCJAc3JjL2RhdGEvcGluZ1wiO1xyXG4vLyBpbXBvcnQgeyAkIH0gZnJvbSBcIlwiXHJcblxyXG5jb25zdCBNQVhfUkVUUklFUyA9IDI7XHJcbmxldCBldmVudHM6IHN0cmluZ1tdO1xyXG5sZXQgdGltZW91dDogbnVtYmVyID0gbnVsbDtcclxubGV0IHRyYW5zaXQ6IFRyYW5zaXQ7XHJcbmxldCBhY3RpdmU6IGJvb2xlYW47XHJcbmV4cG9ydCBsZXQgdHJhY2s6IFVwbG9hZERhdGE7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKTogdm9pZCB7XHJcblx0Y29uc29sZS5sb2coJ1VwbG9hZCBTdGFydCEhJyk7XHJcbiAgICBhY3RpdmUgPSB0cnVlO1xyXG4gICAgZXZlbnRzID0gW107XHJcbiAgICB0cmFuc2l0ID0ge307XHJcbiAgICB0cmFjayA9IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxdWV1ZShkYXRhOiBUb2tlbltdKTogdm9pZCB7XHJcblx0Ly8gY29uc29sZS5sb2coXCJxdWV1ZXR0IFwiLCBkYXRhKTtcclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICBsZXQgdHlwZSA9IGRhdGEubGVuZ3RoID4gMSA/IGRhdGFbMV0gOiBudWxsO1xyXG5cdFx0XHRcdGxldCBldmVudCA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCd0eXBlICcsIHR5cGUpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdldmVudCAnLCBkYXRhKTtcclxuICAgICAgICBldmVudHMucHVzaChldmVudCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEV2ZW50Lk1ldHJpYzpcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5VcGxvYWQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIGRvIG5vdCBzY2hlZHVsZSB1cGxvYWQgY2FsbGJhY2tcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5EaXNjb3ZlcjpcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5NdXRhdGlvbjpcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5Cb3hNb2RlbDpcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5IYXNoOlxyXG4gICAgICAgICAgICBjYXNlIEV2ZW50LkRvY3VtZW50OlxyXG4gICAgICAgICAgICBjYXNlIEV2ZW50LlRhcmdldDpcclxuICAgICAgICAgICAgICAgIG1ldHJpYy5jb3VudGVyKE1ldHJpYy5MYXlvdXRCeXRlcywgZXZlbnQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEV2ZW50Lk5ldHdvcms6XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuUGVyZm9ybWFuY2U6XHJcbiAgICAgICAgICAgICAgICBtZXRyaWMuY291bnRlcihNZXRyaWMuTmV0d29ya0J5dGVzLCBldmVudC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuU2NyaXB0RXJyb3I6XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuSW1hZ2VFcnJvcjpcclxuICAgICAgICAgICAgICAgIG1ldHJpYy5jb3VudGVyKE1ldHJpYy5EaWFnbm9zdGljQnl0ZXMsIGV2ZW50Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIG1ldHJpYy5jb3VudGVyKE1ldHJpYy5JbnRlcmFjdGlvbkJ5dGVzLCBldmVudC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGlzIGlzIGEgcHJlY2F1dGlvbmFyeSBjaGVjayBhY3RpbmcgYXMgYSBmYWlsIHNhZmUgbWVjaGFuaXNtIHRvIGdldCBvdXQgb2ZcclxuICAgICAgICAvLyB1bmV4cGVjdGVkIHNpdHVhdGlvbnMuIElkZWFsbHksIGV4cGVjdGF0aW9uIGlzIHRoYXQgcGF1c2UgLyByZXN1bWUgd2lsbCB3b3JrIGFzIGRlc2lnbmVkLlxyXG4gICAgICAgIC8vIEhvd2V2ZXIsIGluIHNvbWUgY2FzZXMgaW52b2x2aW5nIHNjcmlwdCBlcnJvcnMsIHdlIG1heSBmYWlsIHRvIHBhdXNlIENsYXJpdHkgaW5zdHJ1bWVudGF0aW9uLlxyXG4gICAgICAgIC8vIEluIHRob3NlIGVkZ2UgY2FzZXMsIHdlIHdpbGwgY3V0IHRoZSBjb3JkIGFmdGVyIGEgY29uZmlndXJhYmxlIHNodXRkb3duIHZhbHVlLlxyXG4gICAgICAgIC8vIFRoZSBvbmx5IGV4Y2VwdGlvbiBpcyB0aGUgdmVyeSBsYXN0IHBheWxvYWQsIGZvciB3aGljaCB3ZSB3aWxsIGF0dGVtcHQgb25lIGZpbmFsIGRlbGl2ZXJ5IHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICAgICAgaWYgKHRpbWUoKSA8IGNvbmZpZy5zaHV0ZG93bikge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCh1cGxvYWQsIGNvbmZpZy5kZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5kKCk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgdXBsb2FkKHRydWUpO1xyXG4gICAgZXZlbnRzID0gW107XHJcbiAgICB0cmFuc2l0ID0ge307XHJcbiAgICB0cmFjayA9IG51bGw7XHJcbiAgICBhY3RpdmUgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkKGxhc3Q6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG5cdGNvbnNvbGUubG9nKCd1cGxvYWQhIHh4eCcsIGNvbmZpZyk7XHJcblx0Y29uc29sZS5sb2coJ3VwbG9hZCEgeHh4JywgY29uZmlnLndwX3VwbG9hZCk7XHJcblx0XHRtZXRyaWMuY29tcHV0ZSgpO1xyXG5cdGNvbnNvbGUubG9nKCdcdG1ldHJpYy5jb21wdXRlKCk7ISAnKTtcclxuXHRjb25zdCBlID0gZW52ZWxvcGUobGFzdCk7XHJcblxyXG5cdGNvbnN0IGQgPSBgWyR7ZXZlbnRzLmpvaW4oKX1dYDtcclxuXHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdC8vIHNlbmRfd3AoZSwgZClcclxuXHRcdGxldCBwYXlsb2FkOiBFbmNvZGVkUGF5bG9hZCA9IHtlOiBKU09OLnN0cmluZ2lmeShlKSwgZH07XHJcblx0XHRjb25zb2xlLmxvZygncGF5bG9hZCcsIHBheWxvYWQpO1xyXG4gICAgbGV0IGRhdGEgPSBzdHJpbmdpZnkocGF5bG9hZCk7XHJcbiAgICBsZXQgc2VxdWVuY2UgPSBtZXRhZGF0YS5lbnZlbG9wZS5zZXF1ZW5jZTtcclxuICAgIHNlbmQoZGF0YSwgc2VxdWVuY2UsIGxhc3QpO1xyXG4gICAgaWYgKCFsYXN0KSB7IHBpbmcucmVzZXQoKTsgfVxyXG5cclxuICAgIC8vIFNlbmQgZGF0YSB0byB1cGxvYWQgaG9vaywgaWYgZGVmaW5lZCBpbiB0aGUgY29uZmlnXHJcblx0XHRpZiAoY29uZmlnLnVwbG9hZCkgeyBjb25maWcudXBsb2FkKGRhdGEsIHNlcXVlbmNlLCBsYXN0KTsgfVxyXG5cdFx0Ly8gU2VuZCBkYXRhIHRvIHdvcmRwcmVzcyBpZiBjb25maWd1cmVkXHJcblx0XHRpZihjb25maWcud3BfdXBsb2FkKSB7IGNvbmZpZy53cF91cGxvYWQgKGUsIGQpO31cclxuICAgIC8vIENsZWFyIG91dCBldmVudHMgbm93IHRoYXQgcGF5bG9hZCBoYXMgYmVlbiBkaXNwYXRjaGVkXHJcblx0XHRldmVudHMgPSBbXTtcclxuXHRcdFxyXG59XHJcblxyXG5mdW5jdGlvbiBzdHJpbmdpZnkocGF5bG9hZDogRW5jb2RlZFBheWxvYWQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGB7XCJlXCI6JHtwYXlsb2FkLmV9LFwiZFwiOiR7cGF5bG9hZC5kfX1gO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZW5kKGRhdGE6IHN0cmluZywgc2VxdWVuY2U6IG51bWJlciA9IG51bGwsIGxhc3Q6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG5cdC8vIFVwbG9hZCBkYXRhIGlmIGEgdmFsaWQgVVJMIGlzIGRlZmluZWQgaW4gdGhlIGNvbmZpZ1xyXG5cdGNvbnNvbGUubG9nKFwiU2VuZGluZyBkYXRhISFcIiwgZGF0YSk7XHJcbiAgICBpZiAoY29uZmlnLnVybC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKGxhc3QgJiYgXCJzZW5kQmVhY29uXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5zZW5kQmVhY29uKGNvbmZpZy51cmwsIGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChzZXF1ZW5jZSBpbiB0cmFuc2l0KSB7IHRyYW5zaXRbc2VxdWVuY2VdLmF0dGVtcHRzKys7IH0gZWxzZSB7IHRyYW5zaXRbc2VxdWVuY2VdID0geyBkYXRhLCBhdHRlbXB0czogMSB9OyB9XHJcblx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBjb25maWcudXJsKTtcclxuICAgICAgICAgICAgaWYgKHNlcXVlbmNlICE9PSBudWxsKSB7IHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKTogdm9pZCA9PiB7IGNoZWNrKHhociwgc2VxdWVuY2UpOyB9OyB9XHJcbiAgICAgICAgICAgIHhoci5zZW5kKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2soeGhyOiBYTUxIdHRwUmVxdWVzdCwgc2VxdWVuY2U6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHhociAmJiB4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiBzZXF1ZW5jZSBpbiB0cmFuc2l0KSB7XHJcbiAgICAgICAgaWYgKCh4aHIuc3RhdHVzIDwgMjAwIHx8IHhoci5zdGF0dXMgPiAyMDgpICYmIHRyYW5zaXRbc2VxdWVuY2VdLmF0dGVtcHRzIDw9IE1BWF9SRVRSSUVTKSB7XHJcbiAgICAgICAgICAgIHNlbmQodHJhbnNpdFtzZXF1ZW5jZV0uZGF0YSwgc2VxdWVuY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyYWNrID0geyBzZXF1ZW5jZSwgYXR0ZW1wdHM6IHRyYW5zaXRbc2VxdWVuY2VdLmF0dGVtcHRzLCBzdGF0dXM6IHhoci5zdGF0dXMgfTtcclxuICAgICAgICAgICAgZW5jb2RlKEV2ZW50LlVwbG9hZCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0cmFuc2l0W3NlcXVlbmNlXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtFdmVudCwgTWV0cmljLCBUb2tlbn0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2RhdGFcIjtcclxuaW1wb3J0IHRpbWUgZnJvbSBcIkBzcmMvY29yZS90aW1lXCI7XHJcbmltcG9ydCAqIGFzIG1ldHJpYyBmcm9tIFwiQHNyYy9kYXRhL21ldHJpY1wiO1xyXG5pbXBvcnQgeyBxdWV1ZSB9IGZyb20gXCJAc3JjL2RhdGEvdXBsb2FkXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlIGZyb20gXCJAc3JjL2RpYWdub3N0aWMvaW1hZ2VcIjtcclxuaW1wb3J0ICogYXMgc2NyaXB0IGZyb20gXCJAc3JjL2RpYWdub3N0aWMvc2NyaXB0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlOiBFdmVudCk6IFRva2VuW10ge1xyXG4gICAgbGV0IHRva2VuczogVG9rZW5bXSA9IFt0aW1lKCksIHR5cGVdO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgRXZlbnQuU2NyaXB0RXJyb3I6XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHNjcmlwdC5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaChzY3JpcHQuZGF0YS5saW5lKTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2goc2NyaXB0LmRhdGEuY29sdW1uKTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2goc2NyaXB0LmRhdGEuc3RhY2spO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaChzY3JpcHQuZGF0YS5zb3VyY2UpO1xyXG4gICAgICAgICAgICBxdWV1ZSh0b2tlbnMpO1xyXG4gICAgICAgICAgICBtZXRyaWMuY291bnRlcihNZXRyaWMuU2NyaXB0RXJyb3JzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFdmVudC5JbWFnZUVycm9yOlxyXG4gICAgICAgICAgICB0b2tlbnMucHVzaChpbWFnZS5kYXRhLnNvdXJjZSk7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKGltYWdlLmRhdGEudGFyZ2V0KTtcclxuICAgICAgICAgICAgcXVldWUodG9rZW5zKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9kYXRhXCI7XHJcbmltcG9ydCB7IEltYWdlRXJyb3JEYXRhIH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2RpYWdub3N0aWNcIjtcclxuaW1wb3J0IHsgYmluZCB9IGZyb20gXCJAc3JjL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IHsgZ2V0SWQgfSBmcm9tIFwiQHNyYy9sYXlvdXQvZG9tXCI7XHJcbmltcG9ydCBlbmNvZGUgZnJvbSBcIi4vZW5jb2RlXCI7XHJcblxyXG5leHBvcnQgbGV0IGRhdGE6IEltYWdlRXJyb3JEYXRhO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgYmluZChkb2N1bWVudCwgXCJlcnJvclwiLCBoYW5kbGVyLCB0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlcihlcnJvcjogRXJyb3JFdmVudCk6IHZvaWQge1xyXG4gICAgbGV0IHRhcmdldCA9IGVycm9yLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUgPT09IFwiSU1HXCIpIHtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBzb3VyY2U6ICh0YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudCkuc3JjLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IGdldElkKHRhcmdldClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVuY29kZShFdmVudC5JbWFnZUVycm9yKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBpbWFnZSBmcm9tIFwiLi9pbWFnZVwiO1xyXG5pbXBvcnQgKiBhcyBzY3JpcHQgZnJvbSBcIi4vc2NyaXB0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKTogdm9pZCB7XHJcbiAgICBzY3JpcHQuc3RhcnQoKTtcclxuICAgIGltYWdlLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmQoKTogdm9pZCB7XHJcbiAgICAvKiBjbGVhbnVwIG9wZXJhdGlvbiAqL1xyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2RhdGFcIjtcclxuaW1wb3J0IHsgU2NyaXB0RXJyb3JEYXRhIH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2RpYWdub3N0aWNcIjtcclxuaW1wb3J0IHsgYmluZCB9IGZyb20gXCJAc3JjL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IGVuY29kZSBmcm9tIFwiLi9lbmNvZGVcIjtcclxuXHJcbmV4cG9ydCBsZXQgZGF0YTogU2NyaXB0RXJyb3JEYXRhO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgYmluZCh3aW5kb3csIFwiZXJyb3JcIiwgaGFuZGxlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZXIoZXJyb3I6IEVycm9yRXZlbnQpOiB2b2lkIHtcclxuICAgIGxldCBlID0gZXJyb3JbXCJlcnJvclwiXSB8fCBlcnJvcjtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcclxuICAgICAgICBsaW5lOiBlcnJvcltcImxpbmVub1wiXSxcclxuICAgICAgICBjb2x1bW46IGVycm9yW1wiY29sbm9cIl0sXHJcbiAgICAgICAgc3RhY2s6IGUuc3RhY2ssXHJcbiAgICAgICAgc291cmNlOiBlcnJvcltcImZpbGVuYW1lXCJdXHJcbiAgICB9O1xyXG5cclxuICAgIGVuY29kZShFdmVudC5TY3JpcHRFcnJvcik7XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgeyBJbnB1dENoYW5nZURhdGEgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvaW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0IHsgYmluZCB9IGZyb20gXCJAc3JjL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IG1hc2sgZnJvbSBcIkBzcmMvY29yZS9tYXNrXCI7XHJcbmltcG9ydCB7IGdldCB9IGZyb20gXCJAc3JjL2xheW91dC9kb21cIjtcclxuaW1wb3J0ICogYXMgdGFyZ2V0IGZyb20gXCJAc3JjL2xheW91dC90YXJnZXRcIjtcclxuaW1wb3J0IGVuY29kZSBmcm9tIFwiLi9lbmNvZGVcIjtcclxuXHJcbmV4cG9ydCBsZXQgZGF0YTogSW5wdXRDaGFuZ2VEYXRhO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgYmluZChkb2N1bWVudCwgXCJjaGFuZ2VcIiwgcmVjb21wdXRlLCB0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVjb21wdXRlKGV2dDogVUlFdmVudCk6IHZvaWQge1xyXG4gICAgbGV0IGlucHV0ID0gZXZ0LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgbGV0IHZhbHVlID0gZ2V0KGlucHV0KTtcclxuICAgIGlmIChpbnB1dCAmJiB2YWx1ZSkge1xyXG4gICAgICAgIHRhcmdldC5vYnNlcnZlKHZhbHVlLmlkKTtcclxuICAgICAgICBkYXRhID0geyB0YXJnZXQ6IHZhbHVlLmlkLCB2YWx1ZTogdmFsdWUubWV0YWRhdGEubWFza2VkID8gbWFzayhpbnB1dC52YWx1ZSkgOiBpbnB1dC52YWx1ZSB9O1xyXG4gICAgICAgIGVuY29kZShFdmVudC5JbnB1dENoYW5nZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpOiB2b2lkIHtcclxuICAgIGRhdGEgPSBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7RXZlbnQsIE1ldHJpYywgVG9rZW59IGZyb20gXCJAY2xhcml0eS10eXBlcy9kYXRhXCI7XHJcbmltcG9ydCB0aW1lIGZyb20gXCJAc3JjL2NvcmUvdGltZVwiO1xyXG5pbXBvcnQgKiBhcyBtZXRyaWMgZnJvbSBcIkBzcmMvZGF0YS9tZXRyaWNcIjtcclxuaW1wb3J0IHsgcXVldWUgfSBmcm9tIFwiQHNyYy9kYXRhL3VwbG9hZFwiO1xyXG5pbXBvcnQgKiBhcyBjaGFuZ2UgZnJvbSBcIi4vY2hhbmdlXCI7XHJcbmltcG9ydCAqIGFzIHBvaW50ZXIgZnJvbSBcIi4vcG9pbnRlclwiO1xyXG5pbXBvcnQgKiBhcyByZXNpemUgZnJvbSBcIi4vcmVzaXplXCI7XHJcbmltcG9ydCAqIGFzIHNjcm9sbCBmcm9tIFwiLi9zY3JvbGxcIjtcclxuaW1wb3J0ICogYXMgc2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyB1bmxvYWQgZnJvbSBcIi4vdW5sb2FkXCI7XHJcbmltcG9ydCAqIGFzIHZpc2liaWxpdHkgZnJvbSBcIi4vdmlzaWJpbGl0eVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGxldCB0ID0gdGltZSgpO1xyXG5cdFx0bGV0IHRva2VuczogVG9rZW5bXSA9IFt0LCB0eXBlXTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgRXZlbnQuTW91c2VEb3duOlxyXG4gICAgICAgIGNhc2UgRXZlbnQuTW91c2VVcDpcclxuICAgICAgICBjYXNlIEV2ZW50Lk1vdXNlTW92ZTpcclxuICAgICAgICBjYXNlIEV2ZW50Lk1vdXNlV2hlZWw6XHJcbiAgICAgICAgY2FzZSBFdmVudC5DbGljazpcclxuICAgICAgICBjYXNlIEV2ZW50LkRvdWJsZUNsaWNrOlxyXG4gICAgICAgIGNhc2UgRXZlbnQuUmlnaHRDbGljazpcclxuICAgICAgICBjYXNlIEV2ZW50LlRvdWNoU3RhcnQ6XHJcbiAgICAgICAgY2FzZSBFdmVudC5Ub3VjaEVuZDpcclxuICAgICAgICBjYXNlIEV2ZW50LlRvdWNoTW92ZTpcclxuICAgICAgICBjYXNlIEV2ZW50LlRvdWNoQ2FuY2VsOlxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50ZXIuZGF0YVt0eXBlXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudHJ5ID0gcG9pbnRlci5kYXRhW3R5cGVdW2ldO1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zID0gW2VudHJ5LnRpbWUsIHR5cGVdO1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goZW50cnkudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKGVudHJ5LngpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dG9rZW5zLnB1c2goZW50cnkueSk7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImNhbGxpbmcgcXVldWdlXCIsIHRva2Vucyk7XHJcbiAgICAgICAgICAgICAgICBxdWV1ZSh0b2tlbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvaW50ZXIucmVzZXQoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFdmVudC5SZXNpemU6XHJcbiAgICAgICAgICAgIGxldCByID0gcmVzaXplLmRhdGE7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHIud2lkdGgpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaChyLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHF1ZXVlKHRva2Vucyk7XHJcbiAgICAgICAgICAgIG1ldHJpYy5tZWFzdXJlKE1ldHJpYy5WaWV3cG9ydFdpZHRoLCByLndpZHRoKTtcclxuICAgICAgICAgICAgbWV0cmljLm1lYXN1cmUoTWV0cmljLlZpZXdwb3J0SGVpZ2h0LCByLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHJlc2l6ZS5yZXNldCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV2ZW50LlVubG9hZDpcclxuICAgICAgICAgICAgbGV0IHUgPSB1bmxvYWQuZGF0YTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2godS5uYW1lKTtcclxuICAgICAgICAgICAgcXVldWUodG9rZW5zKTtcclxuICAgICAgICAgICAgbWV0cmljLmNvdW50ZXIoTWV0cmljLkVuZFRpbWUsIHQpO1xyXG4gICAgICAgICAgICB1bmxvYWQucmVzZXQoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFdmVudC5JbnB1dENoYW5nZTpcclxuICAgICAgICAgICAgbGV0IGNoID0gY2hhbmdlLmRhdGE7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKGNoLnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKGNoLnZhbHVlKTtcclxuICAgICAgICAgICAgcXVldWUodG9rZW5zKTtcclxuICAgICAgICAgICAgbWV0cmljLmNvdW50ZXIoTWV0cmljLkNoYW5nZXMpO1xyXG4gICAgICAgICAgICBjaGFuZ2UucmVzZXQoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFdmVudC5TZWxlY3Rpb246XHJcbiAgICAgICAgICAgIGxldCBzID0gc2VsZWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHMuc3RhcnQpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaChzLnN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2gocy5lbmQpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaChzLmVuZE9mZnNldCk7XHJcbiAgICAgICAgICAgIHF1ZXVlKHRva2Vucyk7XHJcbiAgICAgICAgICAgIG1ldHJpYy5jb3VudGVyKE1ldHJpYy5TZWxlY3Rpb25zKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXZlbnQuU2Nyb2xsOlxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbC5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW50cnkgPSBzY3JvbGwuZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgIHRva2VucyA9IFtlbnRyeS50aW1lLCB0eXBlXTtcclxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChlbnRyeS54KTtcclxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKGVudHJ5LnkpO1xyXG4gICAgICAgICAgICAgICAgcXVldWUodG9rZW5zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzY3JvbGwucmVzZXQoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFdmVudC5WaXNpYmlsaXR5OlxyXG4gICAgICAgICAgICBsZXQgdiA9IHZpc2liaWxpdHkuZGF0YTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2godi52aXNpYmxlKTtcclxuICAgICAgICAgICAgcXVldWUodG9rZW5zKTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eS5yZXNldCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBwb2ludGVyIGZyb20gXCJAc3JjL2ludGVyYWN0aW9uL3BvaW50ZXJcIjtcclxuaW1wb3J0ICogYXMgcmVzaXplIGZyb20gXCJAc3JjL2ludGVyYWN0aW9uL3Jlc2l6ZVwiO1xyXG5pbXBvcnQgKiBhcyBzY3JvbGwgZnJvbSBcIkBzcmMvaW50ZXJhY3Rpb24vc2Nyb2xsXCI7XHJcbmltcG9ydCAqIGFzIHNlbGVjdGlvbiBmcm9tIFwiQHNyYy9pbnRlcmFjdGlvbi9zZWxlY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgdW5sb2FkIGZyb20gXCJAc3JjL2ludGVyYWN0aW9uL3VubG9hZFwiO1xyXG5pbXBvcnQgKiBhcyB2aXNpYmlsaXR5IGZyb20gXCJAc3JjL2ludGVyYWN0aW9uL3Zpc2liaWxpdHlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpOiB2b2lkIHtcclxuXHRjb25zb2xlLmxvZygnaW50ZXJhY3Rpb24uc3RhcnQnKVxyXG4gICAgcG9pbnRlci5zdGFydCgpO1xyXG4gICAgcmVzaXplLnN0YXJ0KCk7XHJcbiAgICB2aXNpYmlsaXR5LnN0YXJ0KCk7XHJcbiAgICBzY3JvbGwuc3RhcnQoKTtcclxuICAgIHNlbGVjdGlvbi5zdGFydCgpO1xyXG4gICAgdW5sb2FkLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmQoKTogdm9pZCB7XHJcbiAgICBwb2ludGVyLmVuZCgpO1xyXG4gICAgc2Nyb2xsLmVuZCgpO1xyXG4gICAgc2VsZWN0aW9uLmVuZCgpO1xyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2RhdGFcIjtcclxuaW1wb3J0IHsgUG9pbnRlckRhdGEgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvaW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiQHNyYy9jb3JlL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBiaW5kIH0gZnJvbSBcIkBzcmMvY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgdGltZSBmcm9tIFwiQHNyYy9jb3JlL3RpbWVcIjtcclxuaW1wb3J0IHsgZ2V0SWQgfSBmcm9tIFwiQHNyYy9sYXlvdXQvZG9tXCI7XHJcbmltcG9ydCAqIGFzIHRhcmdldCBmcm9tIFwiQHNyYy9sYXlvdXQvdGFyZ2V0XCI7XHJcbmltcG9ydCBlbmNvZGUgZnJvbSBcIi4vZW5jb2RlXCI7XHJcblxyXG5leHBvcnQgbGV0IGRhdGE6IHsgW2tleTogbnVtYmVyXTogUG9pbnRlckRhdGFbXSB9ID0ge307XHJcbmxldCB0aW1lb3V0OiBudW1iZXIgPSBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgcmVzZXQoKTtcclxuICAgIGJpbmQoZG9jdW1lbnQsIFwibW91c2Vkb3duXCIsIG1vdXNlLmJpbmQodGhpcywgRXZlbnQuTW91c2VEb3duKSwgdHJ1ZSk7XHJcbiAgICBiaW5kKGRvY3VtZW50LCBcIm1vdXNldXBcIiwgbW91c2UuYmluZCh0aGlzLCBFdmVudC5Nb3VzZVVwKSwgdHJ1ZSk7XHJcbiAgICBiaW5kKGRvY3VtZW50LCBcIm1vdXNlbW92ZVwiLCBtb3VzZS5iaW5kKHRoaXMsIEV2ZW50Lk1vdXNlTW92ZSksIHRydWUpO1xyXG4gICAgYmluZChkb2N1bWVudCwgXCJtb3VzZXdoZWVsXCIsIG1vdXNlLmJpbmQodGhpcywgRXZlbnQuTW91c2VXaGVlbCksIHRydWUpO1xyXG4gICAgYmluZChkb2N1bWVudCwgXCJkYmxjbGlja1wiLCBtb3VzZS5iaW5kKHRoaXMsIEV2ZW50LkRvdWJsZUNsaWNrKSwgdHJ1ZSk7XHJcbiAgICBiaW5kKGRvY3VtZW50LCBcImNsaWNrXCIsIG1vdXNlLmJpbmQodGhpcywgRXZlbnQuQ2xpY2spLCB0cnVlKTtcclxuICAgIGJpbmQoZG9jdW1lbnQsIFwidG91Y2hzdGFydFwiLCB0b3VjaC5iaW5kKHRoaXMsIEV2ZW50LlRvdWNoU3RhcnQpLCB0cnVlKTtcclxuICAgIGJpbmQoZG9jdW1lbnQsIFwidG91Y2hlbmRcIiwgdG91Y2guYmluZCh0aGlzLCBFdmVudC5Ub3VjaEVuZCksIHRydWUpO1xyXG4gICAgYmluZChkb2N1bWVudCwgXCJ0b3VjaG1vdmVcIiwgdG91Y2guYmluZCh0aGlzLCBFdmVudC5Ub3VjaE1vdmUpLCB0cnVlKTtcclxuICAgIGJpbmQoZG9jdW1lbnQsIFwidG91Y2hjYW5jZWxcIiwgdG91Y2guYmluZCh0aGlzLCBFdmVudC5Ub3VjaENhbmNlbCksIHRydWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VzZShldmVudDogRXZlbnQsIGV2dDogTW91c2VFdmVudCk6IHZvaWQge1xyXG5cclxuXHQvLyBjb25zb2xlLmxvZygnbW91c2UgZXZlbnQnLCBldnQpO1xyXG5cdFxyXG5cdGxldCBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGxldCB4ID0gXCJwYWdlWFwiIGluIGV2dCA/IE1hdGgucm91bmQoZXZ0LnBhZ2VYKSA6IChcImNsaWVudFhcIiBpbiBldnQgPyBNYXRoLnJvdW5kKGV2dFtcImNsaWVudFhcIl0gKyBkZS5zY3JvbGxMZWZ0KSA6IG51bGwpO1xyXG4gICAgbGV0IHkgPSBcInBhZ2VZXCIgaW4gZXZ0ID8gTWF0aC5yb3VuZChldnQucGFnZVkpIDogKFwiY2xpZW50WVwiIGluIGV2dCA/IE1hdGgucm91bmQoZXZ0W1wiY2xpZW50WVwiXSArIGRlLnNjcm9sbFRvcCkgOiBudWxsKTtcclxuICAgIGxldCBpZCA9IGV2dC50YXJnZXQgPyBnZXRJZChldnQudGFyZ2V0IGFzIE5vZGUpIDogbnVsbDtcclxuICAgIHRhcmdldC5vYnNlcnZlKGlkKTtcclxuICAgIGV2ZW50ID0gZXZlbnQgPT09IEV2ZW50LkNsaWNrICYmIChldnQuYnV0dG9ucyA9PT0gMiB8fCBldnQuYnV0dG9uID09PSAyKSA/IEV2ZW50LlJpZ2h0Q2xpY2sgOiBldmVudDtcclxuICAgIGhhbmRsZXIoZXZlbnQsIHt0YXJnZXQ6IGlkLCB4LCB5LCB0aW1lOiB0aW1lKCl9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG91Y2goZXZlbnQ6IEV2ZW50LCBldnQ6IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIGxldCBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGxldCB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzO1xyXG4gICAgbGV0IGlkID0gZXZ0LnRhcmdldCA/IGdldElkKGV2dC50YXJnZXQgYXMgTm9kZSkgOiBudWxsO1xyXG4gICAgbGV0IHQgPSB0aW1lKCk7XHJcbiAgICB0YXJnZXQub2JzZXJ2ZShpZCk7XHJcbiAgICBpZiAodG91Y2hlcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG91Y2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW50cnkgPSB0b3VjaGVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgeCA9IFwiY2xpZW50WFwiIGluIGVudHJ5ID8gTWF0aC5yb3VuZChlbnRyeVtcImNsaWVudFhcIl0gKyBkZS5zY3JvbGxMZWZ0KSA6IG51bGw7XHJcbiAgICAgICAgICAgIGxldCB5ID0gXCJjbGllbnRZXCIgaW4gZW50cnkgPyBNYXRoLnJvdW5kKGVudHJ5W1wiY2xpZW50WVwiXSArIGRlLnNjcm9sbFRvcCkgOiBudWxsO1xyXG4gICAgICAgICAgICBoYW5kbGVyKGV2ZW50LCB7dGFyZ2V0OiBpZCwgeCwgeSwgdGltZTogdH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlcihldmVudDogRXZlbnQsIGN1cnJlbnQ6IFBvaW50ZXJEYXRhKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgICAgY2FzZSBFdmVudC5Nb3VzZU1vdmU6XHJcbiAgICAgICAgY2FzZSBFdmVudC5Nb3VzZVdoZWVsOlxyXG4gICAgICAgIGNhc2UgRXZlbnQuVG91Y2hNb3ZlOlxyXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gZGF0YVtldmVudF0ubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgbGFzdCA9IGxlbmd0aCA+IDEgPyBkYXRhW2V2ZW50XVtsZW5ndGggLSAyXSA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChsYXN0ICYmIHNpbWlsYXIobGFzdCwgY3VycmVudCkpIHsgZGF0YVtldmVudF0ucG9wKCk7IH1cclxuICAgICAgICAgICAgZGF0YVtldmVudF0ucHVzaChjdXJyZW50KTtcclxuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGVuY29kZSwgY29uZmlnLmxvb2thaGVhZCwgZXZlbnQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBkYXRhW2V2ZW50XS5wdXNoKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICBlbmNvZGUoZXZlbnQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgZGF0YSA9IHt9O1xyXG4gICAgbGV0IG1vdXNlRXZlbnRzID0gW0V2ZW50Lk1vdXNlRG93biwgRXZlbnQuTW91c2VVcCwgRXZlbnQuTW91c2VXaGVlbCwgRXZlbnQuTW91c2VNb3ZlLCBFdmVudC5Eb3VibGVDbGljaywgRXZlbnQuQ2xpY2ssIEV2ZW50LlJpZ2h0Q2xpY2tdO1xyXG4gICAgbGV0IHRvdWNoRXZlbnRzID0gW0V2ZW50LlRvdWNoU3RhcnQsIEV2ZW50LlRvdWNoTW92ZSwgRXZlbnQuVG91Y2hFbmQsIEV2ZW50LlRvdWNoQ2FuY2VsXTtcclxuICAgIGxldCBldmVudHMgPSBtb3VzZUV2ZW50cy5jb25jYXQodG91Y2hFdmVudHMpO1xyXG4gICAgZm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgZGF0YVtldmVudF0gPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2ltaWxhcihsYXN0OiBQb2ludGVyRGF0YSwgY3VycmVudDogUG9pbnRlckRhdGEpOiBib29sZWFuIHtcclxuICAgIGxldCBkeCA9IGxhc3QueCAtIGN1cnJlbnQueDtcclxuICAgIGxldCBkeSA9IGxhc3QueSAtIGN1cnJlbnQueTtcclxuICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICByZXR1cm4gKGRpc3RhbmNlIDwgY29uZmlnLmRpc3RhbmNlKSAmJiAoY3VycmVudC50aW1lIC0gbGFzdC50aW1lIDwgY29uZmlnLmludGVydmFsKSAmJiBjdXJyZW50LnRhcmdldCA9PT0gbGFzdC50YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmQoKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICBkYXRhID0ge307XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgeyBSZXNpemVEYXRhIH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2ludGVyYWN0aW9uXCI7XHJcbmltcG9ydCB7IGJpbmQgfSBmcm9tIFwiQHNyYy9jb3JlL2V2ZW50XCI7XHJcbmltcG9ydCBlbmNvZGUgZnJvbSBcIi4vZW5jb2RlXCI7XHJcblxyXG5leHBvcnQgbGV0IGRhdGE6IFJlc2l6ZURhdGE7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKTogdm9pZCB7XHJcbiAgICBiaW5kKHdpbmRvdywgXCJyZXNpemVcIiwgcmVjb21wdXRlKTtcclxuICAgIHJlY29tcHV0ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWNvbXB1dGUoKTogdm9pZCB7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHdpZHRoOiBcImlubmVyV2lkdGhcIiBpbiB3aW5kb3cgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IFwiaW5uZXJIZWlnaHRcIiBpbiB3aW5kb3cgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgZW5jb2RlKEV2ZW50LlJlc2l6ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpOiB2b2lkIHtcclxuICAgIGRhdGEgPSBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2RhdGFcIjtcclxuaW1wb3J0IHsgU2Nyb2xsRGF0YSB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9pbnRlcmFjdGlvblwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJAc3JjL2NvcmUvY29uZmlnXCI7XHJcbmltcG9ydCB7IGJpbmQgfSBmcm9tIFwiQHNyYy9jb3JlL2V2ZW50XCI7XHJcbmltcG9ydCB0aW1lIGZyb20gXCJAc3JjL2NvcmUvdGltZVwiO1xyXG5pbXBvcnQgeyBnZXRJZCB9IGZyb20gXCJAc3JjL2xheW91dC9kb21cIjtcclxuaW1wb3J0ICogYXMgdGFyZ2V0IGZyb20gXCJAc3JjL2xheW91dC90YXJnZXRcIjtcclxuaW1wb3J0IGVuY29kZSBmcm9tIFwiLi9lbmNvZGVcIjtcclxuXHJcbmV4cG9ydCBsZXQgZGF0YTogU2Nyb2xsRGF0YVtdID0gW107XHJcbmxldCB0aW1lb3V0OiBudW1iZXIgPSBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgYmluZCh3aW5kb3csIFwic2Nyb2xsXCIsIHJlY29tcHV0ZSwgdHJ1ZSk7XHJcbiAgICByZWNvbXB1dGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVjb21wdXRlKGV2ZW50OiBVSUV2ZW50ID0gbnVsbCk6IHZvaWQge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ3JlY29tcHV0ZSAnLCBldmVudCk7XHJcbiAgICBsZXQgZXZlbnRUYXJnZXQgPSBldmVudCA/IChldmVudC50YXJnZXQgPT09IGRvY3VtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZXZlbnQudGFyZ2V0KSA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGxldCB4ID0gTWF0aC5yb3VuZCgoZXZlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnNjcm9sbExlZnQpO1xyXG4gICAgbGV0IHkgPSBNYXRoLnJvdW5kKChldmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuc2Nyb2xsVG9wKTtcclxuICAgIGxldCBpZCA9IGdldElkKGV2ZW50VGFyZ2V0IGFzIE5vZGUpO1xyXG4gICAgdGFyZ2V0Lm9ic2VydmUoaWQpO1xyXG4gICAgbGV0IGN1cnJlbnQ6IFNjcm9sbERhdGEgPSB7dGFyZ2V0OiBpZCwgeCwgeSwgdGltZTogdGltZSgpfTtcclxuXHJcbiAgICBsZXQgbGVuZ3RoID0gZGF0YS5sZW5ndGg7XHJcbiAgICBsZXQgbGFzdCA9IGxlbmd0aCA+IDEgPyBkYXRhW2xlbmd0aCAtIDJdIDogbnVsbDtcclxuICAgIGlmIChsYXN0ICYmIHNpbWlsYXIobGFzdCwgY3VycmVudCkpIHsgZGF0YS5wb3AoKTsgfVxyXG4gICAgZGF0YS5wdXNoKGN1cnJlbnQpO1xyXG5cclxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChlbmNvZGUsIGNvbmZpZy5sb29rYWhlYWQsIEV2ZW50LlNjcm9sbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpOiB2b2lkIHtcclxuICAgIGRhdGEgPSBbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2ltaWxhcihsYXN0OiBTY3JvbGxEYXRhLCBjdXJyZW50OiBTY3JvbGxEYXRhKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgZHggPSBsYXN0LnggLSBjdXJyZW50Lng7XHJcbiAgICBsZXQgZHkgPSBsYXN0LnkgLSBjdXJyZW50Lnk7XHJcbiAgICByZXR1cm4gKGR4ICogZHggKyBkeSAqIGR5IDwgY29uZmlnLmRpc3RhbmNlICogY29uZmlnLmRpc3RhbmNlKSAmJiAoY3VycmVudC50aW1lIC0gbGFzdC50aW1lIDwgY29uZmlnLmludGVydmFsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZCgpOiB2b2lkIHtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIGRhdGEgPSBbXTtcclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9kYXRhXCI7XHJcbmltcG9ydCB7IFNlbGVjdGlvbkRhdGEgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvaW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiQHNyYy9jb3JlL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBiaW5kIH0gZnJvbSBcIkBzcmMvY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgeyBnZXRJZCB9IGZyb20gXCJAc3JjL2xheW91dC9kb21cIjtcclxuaW1wb3J0ICogYXMgdGFyZ2V0IGZyb20gXCJAc3JjL2xheW91dC90YXJnZXRcIjtcclxuaW1wb3J0IGVuY29kZSBmcm9tIFwiLi9lbmNvZGVcIjtcclxuXHJcbmV4cG9ydCBsZXQgZGF0YTogU2VsZWN0aW9uRGF0YSA9IG51bGw7XHJcbmxldCBwcmV2aW91czogU2VsZWN0aW9uID0gbnVsbDtcclxubGV0IHRpbWVvdXQ6IG51bWJlciA9IG51bGw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKTogdm9pZCB7XHJcbiAgICByZXNldCgpO1xyXG4gICAgYmluZChkb2N1bWVudCwgXCJzZWxlY3RzdGFydFwiLCByZWNvbXB1dGUsIHRydWUpO1xyXG4gICAgYmluZChkb2N1bWVudCwgXCJzZWxlY3Rpb25jaGFuZ2VcIiwgcmVjb21wdXRlLCB0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVjb21wdXRlKCk6IHZvaWQge1xyXG5cdFx0Ly8gc2NvbnNvbGUubG9nKFwicmVjb21wdXRlXCIpXHJcbiAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xyXG5cclxuICAgIC8vIEJhaWwgb3V0IGlmIHdlIGRvbid0IGhhdmUgYSB2YWxpZCBzZWxlY3Rpb25cclxuICAgIGlmIChjdXJyZW50ID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuICAgIGxldCBhbmNob3JOb2RlID0gZ2V0SWQoY3VycmVudC5hbmNob3JOb2RlKTtcclxuICAgIGxldCBmb2N1c05vZGUgPSBnZXRJZChjdXJyZW50LmZvY3VzTm9kZSk7XHJcblxyXG4gICAgLy8gQmFpbCBvdXQgaWYgd2UgZ290IHZhbGlkIHNlbGVjdGlvbiBidXQgbm90IHZhbGlkIG5vZGVzXHJcbiAgICAvLyBJbiBFZGdlLCBzZWxlY3Rpb25jaGFuZ2UgZ2V0cyBmaXJlZCBldmVuIG9uIGludGVyYWN0aW9ucyBsaWtlIHJpZ2h0IGNsaWNrcyBhbmRcclxuICAgIC8vIGNhbiByZXN1bHQgaW4gbnVsbCBhbmNob3JOb2RlIGFuZCBmb2N1c05vZGUgaWYgdGhlcmUgd2FzIG5vIHByZXZpb3VzIHNlbGVjdGlvbiBvbiBwYWdlXHJcbiAgICBpZiAoYW5jaG9yTm9kZSA9PT0gbnVsbCAmJiBmb2N1c05vZGUgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgaWYgKHByZXZpb3VzICE9PSBudWxsICYmIGRhdGEuc3RhcnQgIT09IG51bGwgJiYgZGF0YS5zdGFydCAhPT0gYW5jaG9yTm9kZSkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICB0YXJnZXQub2JzZXJ2ZShkYXRhLnN0YXJ0KTtcclxuICAgICAgICB0YXJnZXQub2JzZXJ2ZShkYXRhLmVuZCk7XHJcbiAgICAgICAgZW5jb2RlKEV2ZW50LlNlbGVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBzdGFydDogYW5jaG9yTm9kZSxcclxuICAgICAgICBzdGFydE9mZnNldDogY3VycmVudC5hbmNob3JPZmZzZXQsXHJcbiAgICAgICAgZW5kOiBmb2N1c05vZGUsXHJcbiAgICAgICAgZW5kT2Zmc2V0OiBjdXJyZW50LmZvY3VzT2Zmc2V0XHJcbiAgICB9O1xyXG4gICAgcHJldmlvdXMgPSBjdXJyZW50O1xyXG5cclxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChlbmNvZGUsIGNvbmZpZy5sb29rYWhlYWQsIEV2ZW50LlNlbGVjdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpOiB2b2lkIHtcclxuICAgIHByZXZpb3VzID0gbnVsbDtcclxuICAgIGRhdGEgPSB7IHN0YXJ0OiAwLCBzdGFydE9mZnNldDogMCwgZW5kOiAwLCBlbmRPZmZzZXQ6IDAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZCgpOiB2b2lkIHtcclxuICAgIHJlc2V0KCk7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgeyBVbmxvYWREYXRhIH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2ludGVyYWN0aW9uXCI7XHJcbmltcG9ydCB7IGVuZCB9IGZyb20gXCJAc3JjL2NsYXJpdHlcIjtcclxuaW1wb3J0IHsgYmluZCB9IGZyb20gXCJAc3JjL2NvcmUvZXZlbnRcIjtcclxuaW1wb3J0IGVuY29kZSBmcm9tIFwiLi9lbmNvZGVcIjtcclxuXHJcbmV4cG9ydCBsZXQgZGF0YTogVW5sb2FkRGF0YTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpOiB2b2lkIHtcclxuICAgIGJpbmQod2luZG93LCBcImJlZm9yZXVubG9hZFwiLCByZWNvbXB1dGUpO1xyXG4gICAgYmluZCh3aW5kb3csIFwidW5sb2FkXCIsIHJlY29tcHV0ZSk7XHJcbiAgICBiaW5kKHdpbmRvdywgXCJwYWdlaGlkZVwiLCByZWNvbXB1dGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWNvbXB1dGUoZXZ0OiBVSUV2ZW50KTogdm9pZCB7XHJcbiAgICBkYXRhID0geyBuYW1lOiBldnQudHlwZSB9O1xyXG4gICAgZW5jb2RlKEV2ZW50LlVubG9hZCk7XHJcbiAgICBlbmQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgZGF0YSA9IG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgeyBWaXNpYmlsaXR5RGF0YSB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9pbnRlcmFjdGlvblwiO1xyXG5pbXBvcnQgeyBiaW5kIH0gZnJvbSBcIkBzcmMvY29yZS9ldmVudFwiO1xyXG5pbXBvcnQgZW5jb2RlIGZyb20gXCIuL2VuY29kZVwiO1xyXG5cclxuZXhwb3J0IGxldCBkYXRhOiBWaXNpYmlsaXR5RGF0YTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpOiB2b2lkIHtcclxuICAgIGJpbmQoZG9jdW1lbnQsIFwidmlzaWJpbGl0eWNoYW5nZVwiLCByZWNvbXB1dGUpO1xyXG4gICAgcmVjb21wdXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlY29tcHV0ZSgpOiB2b2lkIHtcclxuICAgIGRhdGEgPSB7IHZpc2libGU6IFwidmlzaWJpbGl0eVN0YXRlXCIgaW4gZG9jdW1lbnQgPyBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgOiBcImRlZmF1bHRcIiB9O1xyXG4gICAgZW5jb2RlKEV2ZW50LlZpc2liaWxpdHkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKTogdm9pZCB7XHJcbiAgICBkYXRhID0gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudCwgTWV0cmljIH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2RhdGFcIjtcclxuaW1wb3J0IHsgQm94TW9kZWxEYXRhIH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2xheW91dFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJAc3JjL2NvcmUvY29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIHRhc2sgZnJvbSBcIkBzcmMvY29yZS90YXNrXCI7XHJcbmltcG9ydCBlbmNvZGUgZnJvbSBcIkBzcmMvbGF5b3V0L2VuY29kZVwiO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vZG9tXCI7XHJcblxyXG5sZXQgYm06IHtba2V5OiBudW1iZXJdOiBCb3hNb2RlbERhdGF9ID0ge307XHJcbmxldCB1cGRhdGVNYXA6IG51bWJlcltdID0gW107XHJcbmxldCB0aW1lb3V0OiBudW1iZXIgPSBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGUoKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoc2NoZWR1bGUsIGNvbmZpZy5sb29rYWhlYWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY2hlZHVsZSgpOiB2b2lkIHtcclxuICAgIHRhc2suc2NoZWR1bGUoYm94bW9kZWwpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBib3htb2RlbCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGxldCB0aW1lciA9IE1ldHJpYy5Cb3hNb2RlbFRpbWU7XHJcbiAgICB0YXNrLnN0YXJ0KHRpbWVyKTtcclxuICAgIGxldCB2YWx1ZXMgPSBkb20uYm94bW9kZWwoKTtcclxuICAgIGxldCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBsZXQgeCA9IFwicGFnZVhPZmZzZXRcIiBpbiB3aW5kb3cgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiBkb2Muc2Nyb2xsTGVmdDtcclxuICAgIGxldCB5ID0gXCJwYWdlWU9mZnNldFwiIGluIHdpbmRvdyA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IGRvYy5zY3JvbGxUb3A7XHJcblxyXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgaWYgKHRhc2subG9uZ3Rhc2sodGltZXIpKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRhc2suaWRsZSh0aW1lcik7XHJcbiAgICAgICAgICAgIHggPSBcInBhZ2VYT2Zmc2V0XCIgaW4gd2luZG93ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogZG9jLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgIHkgPSBcInBhZ2VZT2Zmc2V0XCIgaW4gd2luZG93ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogZG9jLnNjcm9sbFRvcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlKHZhbHVlLmlkLCBsYXlvdXQoZG9tLmdldE5vZGUodmFsdWUuaWQpIGFzIEVsZW1lbnQsIHgsIHkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXBkYXRlTWFwLmxlbmd0aCA+IDApIHsgYXdhaXQgZW5jb2RlKEV2ZW50LkJveE1vZGVsKTsgfVxyXG4gICAgdGFzay5zdG9wKHRpbWVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZXMoKTogQm94TW9kZWxEYXRhW10ge1xyXG4gICAgbGV0IHN1bW1hcnkgPSBbXTtcclxuICAgIGZvciAobGV0IGlkIG9mIHVwZGF0ZU1hcCkge1xyXG4gICAgICAgIHN1bW1hcnkucHVzaChibVtpZF0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTWFwID0gW107XHJcbiAgICByZXR1cm4gc3VtbWFyeTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlKGlkOiBudW1iZXIsIGJveDogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgIGxldCBjaGFuZ2VkID0gYm94ICE9PSBudWxsO1xyXG4gICAgaWYgKGlkIGluIGJtICYmIGJveCAhPT0gbnVsbCAmJiBibVtpZF0uYm94ICE9PSBudWxsKSB7XHJcbiAgICAgICAgY2hhbmdlZCA9IGJveC5sZW5ndGggPT09IGJtW2lkXS5ib3gubGVuZ3RoID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIGlmIChjaGFuZ2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJveC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJveFtpXSAhPT0gYm1baWRdLmJveFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgaWYgKHVwZGF0ZU1hcC5pbmRleE9mKGlkKSA9PT0gLTEpIHsgdXBkYXRlTWFwLnB1c2goaWQpOyB9XHJcbiAgICAgICAgYm1baWRdID0ge2lkLCBib3h9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGF5b3V0KGVsZW1lbnQ6IEVsZW1lbnQsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApOiBudW1iZXJbXSB7XHJcbiAgICBsZXQgYm94OiBudW1iZXJbXSA9IG51bGw7XHJcbiAgICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgaWYgKHJlY3QgJiYgcmVjdC53aWR0aCA+IDAgJiYgcmVjdC5oZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IHJldHVybnMgcmVsYXRpdmUgcG9zaXRpb25pbmcgdG8gdmlld3BvcnQgYW5kIHRoZXJlZm9yZSBuZWVkc1xyXG4gICAgICAgIC8vIGFkZGl0aW9uIG9mIHdpbmRvdyBzY3JvbGwgcG9zaXRpb24gdG8gZ2V0IHBvc2l0aW9uIHJlbGF0aXZlIHRvIGRvY3VtZW50XHJcbiAgICAgICAgLy8gQWxzbzogdXNpbmcgTWF0aC5mbG9vcigpIGluc3RlYWQgb2YgTWF0aC5yb3VuZCgpIGJlbG93IGJlY2F1c2UgaW4gRWRnZSxcclxuICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgcmV0dXJucyBwYXJ0aWFsIHBpeGVsIHZhbHVlcyAoZS5nLiAxNjIuNXB4KSBhbmQgQ2hyb21lIGFscmVhZHlcclxuICAgICAgICAvLyBmbG9vcnMgdGhlIHZhbHVlIChlLmcuIDE2MnB4KS4gS2VlcGluZyBiZWhhdmlvciBjb25zaXN0ZW50IGFjcm9zc1xyXG4gICAgICAgIGJveCA9IFtcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihyZWN0LmxlZnQgKyB4KSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihyZWN0LnRvcCArIHkpLFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKHJlY3Qud2lkdGgpLFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKHJlY3QuaGVpZ2h0KVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYm94O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICB1cGRhdGVNYXAgPSBbXTtcclxuICAgIGJtID0ge307XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnQsIE1ldHJpYyB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9kYXRhXCI7XHJcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9sYXlvdXRcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiQHNyYy9jb3JlL2NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyB0YXNrIGZyb20gXCJAc3JjL2NvcmUvdGFza1wiO1xyXG5pbXBvcnQgKiBhcyBib3htb2RlbCBmcm9tIFwiQHNyYy9sYXlvdXQvYm94bW9kZWxcIjtcclxuaW1wb3J0ICogYXMgZG9jIGZyb20gXCJAc3JjL2xheW91dC9kb2N1bWVudFwiO1xyXG5pbXBvcnQgZW5jb2RlIGZyb20gXCJAc3JjL2xheW91dC9lbmNvZGVcIjtcclxuXHJcbmltcG9ydCBwcm9jZXNzTm9kZSBmcm9tIFwiLi9ub2RlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0YXNrLnNjaGVkdWxlKGRpc2NvdmVyKS50aGVuKCgpID0+IHtcclxuICAgICAgICBkb2MuY29tcHV0ZSgpO1xyXG4gICAgICAgIGJveG1vZGVsLmNvbXB1dGUoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNjb3ZlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGxldCB0aW1lciA9IE1ldHJpYy5EaXNjb3ZlclRpbWU7XHJcbiAgICB0YXNrLnN0YXJ0KHRpbWVyKTtcclxuICAgIGxldCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGRvY3VtZW50LCBOb2RlRmlsdGVyLlNIT1dfQUxMLCBudWxsLCBmYWxzZSk7XHJcbiAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgICBpZiAodGFzay5sb25ndGFzayh0aW1lcikpIHsgYXdhaXQgdGFzay5pZGxlKHRpbWVyKTsgfVxyXG4gICAgICAgIHByb2Nlc3NOb2RlKG5vZGUsIFNvdXJjZS5EaXNjb3Zlcik7XHJcbiAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgZW5jb2RlKGNvbmZpZy5sZWFuID8gRXZlbnQuSGFzaCA6IEV2ZW50LkRpc2NvdmVyKTtcclxuICAgIHRhc2suc3RvcCh0aW1lcik7XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgeyBEb2N1bWVudERhdGEgfSBmcm9tIFwiQGNsYXJpdHktdHlwZXMvbGF5b3V0XCI7XHJcbmltcG9ydCBlbmNvZGUgZnJvbSBcIi4vZW5jb2RlXCI7XHJcblxyXG5leHBvcnQgbGV0IGRhdGE6IERvY3VtZW50RGF0YTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpOiB2b2lkIHtcclxuICAgIGRhdGEgPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZSgpOiB2b2lkIHtcclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGxldCBkID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgbGV0IHdpZHRoID0gYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiBudWxsO1xyXG4gICAgbGV0IGJvZHlDbGllbnRIZWlnaHQgPSBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiBudWxsO1xyXG4gICAgbGV0IGJvZHlTY3JvbGxIZWlnaHQgPSBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiBudWxsO1xyXG4gICAgbGV0IGJvZHlPZmZzZXRIZWlnaHQgPSBib2R5ID8gYm9keS5vZmZzZXRIZWlnaHQgOiBudWxsO1xyXG4gICAgbGV0IGRvY3VtZW50Q2xpZW50SGVpZ2h0ID0gZCA/IGQuY2xpZW50SGVpZ2h0IDogbnVsbDtcclxuICAgIGxldCBkb2N1bWVudFNjcm9sbEhlaWdodCA9IGQgPyBkLnNjcm9sbEhlaWdodCA6IG51bGw7XHJcbiAgICBsZXQgZG9jdW1lbnRPZmZzZXRIZWlnaHQgPSBkID8gZC5vZmZzZXRIZWlnaHQgOiBudWxsO1xyXG4gICAgbGV0IGhlaWdodCA9IE1hdGgubWF4KGJvZHlDbGllbnRIZWlnaHQsIGJvZHlTY3JvbGxIZWlnaHQsIGJvZHlPZmZzZXRIZWlnaHQsXHJcbiAgICBkb2N1bWVudENsaWVudEhlaWdodCwgZG9jdW1lbnRTY3JvbGxIZWlnaHQsIGRvY3VtZW50T2Zmc2V0SGVpZ2h0KTtcclxuXHJcbiAgICBpZiAoZGF0YSA9PT0gbnVsbCB8fCB3aWR0aCAhPT0gZGF0YS53aWR0aCB8fCBoZWlnaHQgIT09IGRhdGEuaGVpZ2h0KSB7XHJcbiAgICAgICAgZGF0YSA9IHsgd2lkdGgsIGhlaWdodCB9O1xyXG4gICAgICAgIGVuY29kZShFdmVudC5Eb2N1bWVudCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RhbnQsIE5vZGVDaGFuZ2UsIE5vZGVJbmZvLCBOb2RlVmFsdWUsIFNvdXJjZSB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9sYXlvdXRcIjtcclxuaW1wb3J0IHRpbWUgZnJvbSBcIkBzcmMvY29yZS90aW1lXCI7XHJcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiQHNyYy9sYXlvdXQvc2VsZWN0b3JcIjtcclxuXHJcbmxldCBpbmRleDogbnVtYmVyID0gMTtcclxuXHJcbmxldCBub2RlczogTm9kZVtdID0gW107XHJcbmxldCB2YWx1ZXM6IE5vZGVWYWx1ZVtdID0gW107XHJcbmxldCBjaGFuZ2VzOiBOb2RlQ2hhbmdlW11bXSA9IFtdO1xyXG5sZXQgdXBkYXRlTWFwOiBudW1iZXJbXSA9IFtdO1xyXG5sZXQgc2VsZWN0b3JNYXA6IG51bWJlcltdID0gW107XHJcbmxldCBpZE1hcDogV2Vha01hcDxOb2RlLCBudW1iZXI+ID0gbnVsbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpOiB2b2lkIHtcclxuICAgIGluZGV4ID0gMTtcclxuICAgIG5vZGVzID0gW107XHJcbiAgICB2YWx1ZXMgPSBbXTtcclxuICAgIHVwZGF0ZU1hcCA9IFtdO1xyXG4gICAgY2hhbmdlcyA9IFtdO1xyXG4gICAgc2VsZWN0b3JNYXAgPSBbXTtcclxuICAgIGlkTWFwID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIGlmIChDb25zdGFudC5ERVZUT09MU19IT09LIGluIHdpbmRvdykgeyB3aW5kb3dbQ29uc3RhbnQuREVWVE9PTFNfSE9PS10gPSB7IGdldCwgZ2V0Tm9kZSwgaGlzdG9yeSB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJZChub2RlOiBOb2RlLCBhdXRvZ2VuOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXIge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgIGxldCBpZCA9IGlkTWFwLmdldChub2RlKTtcclxuICAgIGlmICghaWQgJiYgYXV0b2dlbikge1xyXG4gICAgICAgIGlkID0gaW5kZXgrKztcclxuICAgICAgICBpZE1hcC5zZXQobm9kZSwgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpZCA/IGlkIDogbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZChub2RlOiBOb2RlLCBkYXRhOiBOb2RlSW5mbywgc291cmNlOiBTb3VyY2UpOiB2b2lkIHtcclxuICAgIGxldCBpZCA9IGdldElkKG5vZGUsIHRydWUpO1xyXG4gICAgbGV0IHBhcmVudElkID0gbm9kZS5wYXJlbnRFbGVtZW50ID8gZ2V0SWQobm9kZS5wYXJlbnRFbGVtZW50KSA6IG51bGw7XHJcbiAgICBsZXQgbmV4dElkID0gZ2V0TmV4dElkKG5vZGUpO1xyXG4gICAgbGV0IG1hc2tlZCA9IHRydWU7XHJcbiAgICBsZXQgcGFyZW50ID0gbnVsbDtcclxuXHJcbiAgICBpZiAocGFyZW50SWQgPj0gMCAmJiB2YWx1ZXNbcGFyZW50SWRdKSB7XHJcbiAgICAgICAgcGFyZW50ID0gdmFsdWVzW3BhcmVudElkXTtcclxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChpZCk7XHJcbiAgICAgICAgbWFza2VkID0gcGFyZW50Lm1ldGFkYXRhLm1hc2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS5hdHRyaWJ1dGVzICYmIENvbnN0YW50Lk1BU0tfQVRUUklCVVRFIGluIGRhdGEuYXR0cmlidXRlcykgeyBtYXNrZWQgPSB0cnVlOyB9XHJcbiAgICBpZiAoZGF0YS5hdHRyaWJ1dGVzICYmIENvbnN0YW50LlVOTUFTS19BVFRSSUJVVEUgaW4gZGF0YS5hdHRyaWJ1dGVzKSB7IG1hc2tlZCA9IGZhbHNlOyB9XHJcblxyXG4gICAgbm9kZXNbaWRdID0gbm9kZTtcclxuICAgIHZhbHVlc1tpZF0gPSB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgcGFyZW50OiBwYXJlbnRJZCxcclxuICAgICAgICBuZXh0OiBuZXh0SWQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIHBvc2l0aW9uOiBudWxsLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgc2VsZWN0b3I6IFwiXCIsXHJcbiAgICAgICAgbWV0YWRhdGE6IHsgYWN0aXZlOiB0cnVlLCBib3htb2RlbDogZmFsc2UsIG1hc2tlZCB9XHJcbiAgICB9O1xyXG4gICAgdXBkYXRlU2VsZWN0b3IodmFsdWVzW2lkXSk7XHJcbiAgICBsYXlvdXQoZGF0YS50YWcsIGlkLCBwYXJlbnRJZCk7XHJcbiAgICB0cmFjayhpZCwgc291cmNlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShub2RlOiBOb2RlLCBkYXRhOiBOb2RlSW5mbywgc291cmNlOiBTb3VyY2UpOiB2b2lkIHtcclxuICAgIGxldCBpZCA9IGdldElkKG5vZGUpO1xyXG4gICAgbGV0IHBhcmVudElkID0gbm9kZS5wYXJlbnRFbGVtZW50ID8gZ2V0SWQobm9kZS5wYXJlbnRFbGVtZW50KSA6IG51bGw7XHJcbiAgICBsZXQgbmV4dElkID0gZ2V0TmV4dElkKG5vZGUpO1xyXG5cclxuICAgIGlmIChpZCBpbiB2YWx1ZXMpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaWRdO1xyXG4gICAgICAgIHZhbHVlLm1ldGFkYXRhLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBjYXNlIHdoZXJlIGludGVybmFsIG9yZGVyaW5nIG1heSBoYXZlIGNoYW5nZWRcclxuICAgICAgICBpZiAodmFsdWVbXCJuZXh0XCJdICE9PSBuZXh0SWQpIHtcclxuICAgICAgICAgICAgdmFsdWVbXCJuZXh0XCJdID0gbmV4dElkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgcGFyZW50IG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkXHJcbiAgICAgICAgaWYgKHZhbHVlW1wicGFyZW50XCJdICE9PSBwYXJlbnRJZCkge1xyXG4gICAgICAgICAgICBsZXQgb2xkUGFyZW50SWQgPSB2YWx1ZVtcInBhcmVudFwiXTtcclxuICAgICAgICAgICAgdmFsdWVbXCJwYXJlbnRcIl0gPSBwYXJlbnRJZDtcclxuICAgICAgICAgICAgLy8gTW92ZSB0aGlzIG5vZGUgdG8gdGhlIHJpZ2h0IGxvY2F0aW9uIHVuZGVyIG5ldyBwYXJlbnRcclxuICAgICAgICAgICAgaWYgKHBhcmVudElkICE9PSBudWxsICYmIHBhcmVudElkID49IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0SWQgIT09IG51bGwgJiYgbmV4dElkID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbcGFyZW50SWRdLmNoaWxkcmVuLnNwbGljZShuZXh0SWQgKyAxLCAwICwgaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbcGFyZW50SWRdLmNoaWxkcmVuLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTWFyayB0aGlzIGVsZW1lbnQgYXMgZGVsZXRlZCBpZiB0aGUgcGFyZW50IGhhcyBiZWVuIHVwZGF0ZWQgdG8gbnVsbFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlKGlkLCBzb3VyY2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgcmVmZXJlbmNlIHRvIHRoaXMgbm9kZSBmcm9tIHRoZSBvbGQgcGFyZW50XHJcbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnRJZCAhPT0gbnVsbCAmJiBvbGRQYXJlbnRJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZUluZGV4ID0gdmFsdWVzW29sZFBhcmVudElkXS5jaGlsZHJlbi5pbmRleE9mKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tvbGRQYXJlbnRJZF0uY2hpbGRyZW4uc3BsaWNlKG5vZGVJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBkYXRhXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGtleSBpbiB2YWx1ZVtcImRhdGFcIl0pIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlW1wiZGF0YVwiXVtrZXldID0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgc2VsZWN0b3JcclxuICAgICAgICB1cGRhdGVTZWxlY3Rvcih2YWx1ZSk7XHJcblxyXG4gICAgICAgIGxheW91dChkYXRhLnRhZywgaWQsIHBhcmVudElkKTtcclxuICAgICAgICB0cmFjayhpZCwgc291cmNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcG9zaXRpb24ocGFyZW50OiBOb2RlVmFsdWUsIGNoaWxkOiBOb2RlVmFsdWUpOiBudW1iZXIge1xyXG4gICAgbGV0IHRhZyA9IGNoaWxkLmRhdGEudGFnO1xyXG4gICAgLy8gRmluZCByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCB0byBnZW5lcmF0ZSA6bnRoLW9mLXR5cGUgc2VsZWN0b3JcclxuICAgIC8vIFdlIHJlc3RyaWN0IHJlbGF0aXZlIHBvc2l0aW9uaW5nIHRvIGhhbmRmdWwgb2YgdGFncyBmb3Igbm93LlxyXG4gICAgaWYgKHBhcmVudCAmJiAodGFnID09PSBcIkRJVlwiIHx8IHRhZyA9PT0gXCJUUlwiIHx8IHRhZyA9PT0gXCJQXCIgfHwgdGFnID09PSBcIkxJXCIpKSB7XHJcbiAgICAgICAgY2hpbGQucG9zaXRpb24gPSAxO1xyXG4gICAgICAgIGxldCBpZHggPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihjaGlsZC5pZCkgOiAtMTtcclxuICAgICAgICB3aGlsZSAoaWR4LS0gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzaWJsaW5nID0gdmFsdWVzW3BhcmVudC5jaGlsZHJlbltpZHhdXTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLmRhdGEudGFnID09PSBzaWJsaW5nLmRhdGEudGFnKSB7IGNoaWxkLnBvc2l0aW9uID0gc2libGluZy5wb3NpdGlvbiArIDE7IH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoaWxkLnBvc2l0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTZWxlY3Rvcih2YWx1ZTogTm9kZVZhbHVlKTogdm9pZCB7XHJcbiAgICBsZXQgcGFyZW50ID0gdmFsdWUucGFyZW50ICYmIHZhbHVlLnBhcmVudCBpbiB2YWx1ZXMgPyB2YWx1ZXNbdmFsdWUucGFyZW50XSA6IG51bGw7XHJcbiAgICBsZXQgcHJlZml4ID0gcGFyZW50ID8gYCR7cGFyZW50LnNlbGVjdG9yfT5gIDogbnVsbDtcclxuICAgIGxldCBleCA9IHZhbHVlLnNlbGVjdG9yO1xyXG4gICAgbGV0IGN1cnJlbnQgPSBzZWxlY3Rvcih2YWx1ZS5kYXRhLnRhZywgcHJlZml4LCB2YWx1ZS5kYXRhLmF0dHJpYnV0ZXMsIHBvc2l0aW9uKHBhcmVudCwgdmFsdWUpKTtcclxuICAgIGlmIChjdXJyZW50ICE9PSBleCAmJiBzZWxlY3Rvck1hcC5pbmRleE9mKHZhbHVlLmlkKSA9PT0gLTEpIHsgc2VsZWN0b3JNYXAucHVzaCh2YWx1ZS5pZCk7IH1cclxuICAgIHZhbHVlLnNlbGVjdG9yID0gY3VycmVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGUoaWQ6IG51bWJlcik6IE5vZGUge1xyXG4gICAgaWYgKGlkIGluIG5vZGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGVzW2lkXTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUoaWQ6IG51bWJlcik6IE5vZGVWYWx1ZSB7XHJcbiAgICBpZiAoaWQgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlc1tpZF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldChub2RlOiBOb2RlKTogTm9kZVZhbHVlIHtcclxuICAgIGxldCBpZCA9IGdldElkKG5vZGUpO1xyXG4gICAgcmV0dXJuIHZhbHVlc1tpZF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXMobm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGdldElkKG5vZGUpIGluIG5vZGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYm94bW9kZWwoKTogTm9kZVZhbHVlW10ge1xyXG4gICAgbGV0IHYgPSBbXTtcclxuICAgIGZvciAobGV0IGlkIGluIHZhbHVlcykge1xyXG4gICAgICAgIGlmICh2YWx1ZXNbaWRdLm1ldGFkYXRhLmFjdGl2ZSAmJiB2YWx1ZXNbaWRdLm1ldGFkYXRhLmJveG1vZGVsKSB7XHJcbiAgICAgICAgICAgIHYucHVzaCh2YWx1ZXNbaWRdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZXMoKTogTm9kZVZhbHVlW10ge1xyXG4gICAgbGV0IG91dHB1dCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaWQgb2YgdXBkYXRlTWFwKSB7XHJcbiAgICAgICAgaWYgKGlkIGluIHZhbHVlcykge1xyXG4gICAgICAgICAgICBsZXQgdiA9IHZhbHVlc1tpZF07XHJcbiAgICAgICAgICAgIGxldCBwID0gdi5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGxldCBoYXNJZCA9IFwiYXR0cmlidXRlc1wiIGluIHYuZGF0YSAmJiBcImlkXCIgaW4gdi5kYXRhLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgIHYuZGF0YS5wYXRoID0gcCA9PT0gbnVsbCB8fCBwIGluIHVwZGF0ZU1hcCB8fCBoYXNJZCB8fCB2LnNlbGVjdG9yLmxlbmd0aCA9PT0gMCA/IG51bGwgOiB2YWx1ZXNbcF0uc2VsZWN0b3I7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKHZhbHVlc1tpZF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZU1hcCA9IFtdO1xyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9ycygpOiBOb2RlVmFsdWVbXSB7XHJcbiAgICBsZXQgdiA9IFtdO1xyXG4gICAgZm9yIChsZXQgaWQgb2Ygc2VsZWN0b3JNYXApIHtcclxuICAgICAgICBpZiAoaWQgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHYucHVzaCh2YWx1ZXNbaWRdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3Rvck1hcCA9IFtdO1xyXG4gICAgcmV0dXJuIHY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZShpZDogbnVtYmVyLCBzb3VyY2U6IFNvdXJjZSk6IHZvaWQge1xyXG4gICAgbGV0IHZhbHVlID0gdmFsdWVzW2lkXTtcclxuICAgIHZhbHVlLm1ldGFkYXRhLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdmFsdWUucGFyZW50ID0gbnVsbDtcclxuICAgIHRyYWNrKGlkLCBzb3VyY2UpO1xyXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgdmFsdWUuY2hpbGRyZW4pIHsgcmVtb3ZlKGNoaWxkLCBzb3VyY2UpOyB9XHJcbiAgICB2YWx1ZS5jaGlsZHJlbiA9IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsYXlvdXQodGFnOiBzdHJpbmcsIGlkOiBudW1iZXIsIHBhcmVudElkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpZCAhPT0gbnVsbCAmJiBwYXJlbnRJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHN3aXRjaCAodGFnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIqVFwiOlxyXG4gICAgICAgICAgICAgICAgLy8gTWFyayBwYXJlbnQgYXMgYSBsZWFmIG5vZGUgb25seSBpZiB0aGUgdGV4dCBub2RlIGhhcyB2YWxpZCB0ZXh0IGFuZCBwYXJlbnQgaXMgbWFza2VkLlxyXG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vZGVzIHdpdGggd2hpdGVzcGFjZXMgYW5kIG5vdCByZWFsIHRleHQsIHNraXAgdGhlbS5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNbcGFyZW50SWRdLm1ldGFkYXRhLm1hc2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhbHVlc1tpZF0uZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoY29kZSA9PT0gMzIgfHwgY29kZSA9PT0gMTAgfHwgY29kZSA9PT0gOSB8fCBjb2RlID09PSAxMykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1twYXJlbnRJZF0ubWV0YWRhdGEuYm94bW9kZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIklNR1wiOlxyXG4gICAgICAgICAgICBjYXNlIFwiSUZSQU1FXCI6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaWRdLm1ldGFkYXRhLmJveG1vZGVsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSBsYXlvdXQgZm9yIGFueSBlbGVtZW50IHdpdGggYSB1c2VyIGRlZmluZWQgc2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIHZhbHVlc1tpZF0ubWV0YWRhdGEuYm94bW9kZWwgPSB2YWx1ZXNbaWRdLnNlbGVjdG9yLmluZGV4T2YoXCIqXCIpID09PSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZXh0SWQobm9kZTogTm9kZSk6IG51bWJlciB7XHJcbiAgICBsZXQgaWQgPSBudWxsO1xyXG4gICAgd2hpbGUgKGlkID09PSBudWxsICYmIG5vZGUubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICBpZCA9IGdldElkKG5vZGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5KGlucHV0OiBOb2RlVmFsdWVbXSk6IE5vZGVWYWx1ZVtdIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGlucHV0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYWNrKGlkOiBudW1iZXIsIHNvdXJjZTogU291cmNlKTogdm9pZCB7XHJcbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBvcmRlciBpbiB3aGljaCBtdXRhdGlvbnMgaGFwcGVuZWQsIHRoZXkgbWF5IG5vdCBiZSBzZXF1ZW50aWFsXHJcbiAgICAvLyBFZGdlIGNhc2U6IElmIGFuIGVsZW1lbnQgaXMgYWRkZWQgbGF0ZXIgb24sIGFuZCBwcmUtZGlzY292ZXJlZCBlbGVtZW50IGlzIG1vdmVkIGFzIGEgY2hpbGQuXHJcbiAgICAvLyBJbiB0aGF0IGNhc2UsIHdlIG5lZWQgdG8gcmVvcmRlciB0aGUgcHJlZGlzY292ZXJlZCBlbGVtZW50IGluIHRoZSB1cGRhdGUgbGlzdCB0byBrZWVwIHZpc3VhbGl6YXRpb24gY29uc2lzdGVudC5cclxuICAgIGxldCB1SW5kZXggPSB1cGRhdGVNYXAuaW5kZXhPZihpZCk7XHJcbiAgICBpZiAodUluZGV4ID49IDAgJiYgc291cmNlID09PSBTb3VyY2UuQ2hpbGRMaXN0QWRkKSB7XHJcbiAgICAgICAgdXBkYXRlTWFwLnNwbGljZSh1SW5kZXgsIDEpO1xyXG4gICAgICAgIHVwZGF0ZU1hcC5wdXNoKGlkKTtcclxuICAgIH0gZWxzZSBpZiAodUluZGV4ID09PSAtMSkgeyB1cGRhdGVNYXAucHVzaChpZCk7IH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnQuREVWVE9PTFNfSE9PSyBpbiB3aW5kb3cpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBjb3B5KFt2YWx1ZXNbaWRdXSlbMF07XHJcbiAgICAgICAgbGV0IGNoYW5nZSA9IHsgdGltZTogdGltZSgpLCBzb3VyY2UsIHZhbHVlIH07XHJcbiAgICAgICAgaWYgKCEoaWQgaW4gY2hhbmdlcykpIHsgY2hhbmdlc1tpZF0gPSBbXTsgfVxyXG4gICAgICAgIGNoYW5nZXNbaWRdLnB1c2goY2hhbmdlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGlzdG9yeShpZDogbnVtYmVyKTogTm9kZUNoYW5nZVtdIHtcclxuICAgIGlmIChpZCBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZXNbaWRdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59XHJcbiIsImltcG9ydCB7RXZlbnQsIE1ldHJpYywgVG9rZW59IGZyb20gXCJAY2xhcml0eS10eXBlcy9kYXRhXCI7XHJcbmltcG9ydCB7Tm9kZUluZm99IGZyb20gXCJAY2xhcml0eS10eXBlcy9sYXlvdXRcIjtcclxuaW1wb3J0IG1hc2sgZnJvbSBcIkBzcmMvY29yZS9tYXNrXCI7XHJcbmltcG9ydCAqIGFzIHRhc2sgZnJvbSBcIkBzcmMvY29yZS90YXNrXCI7XHJcbmltcG9ydCB0aW1lIGZyb20gXCJAc3JjL2NvcmUvdGltZVwiO1xyXG5pbXBvcnQgaGFzaCBmcm9tIFwiQHNyYy9kYXRhL2hhc2hcIjtcclxuaW1wb3J0ICogYXMgbWV0cmljIGZyb20gXCJAc3JjL2RhdGEvbWV0cmljXCI7XHJcbmltcG9ydCB7Y2hlY2t9IGZyb20gXCJAc3JjL2RhdGEvdG9rZW5cIjtcclxuaW1wb3J0IHsgcXVldWUgfSBmcm9tIFwiQHNyYy9kYXRhL3VwbG9hZFwiO1xyXG5pbXBvcnQgKiBhcyBib3htb2RlbCBmcm9tIFwiLi9ib3htb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBkb2MgZnJvbSBcIi4vZG9jdW1lbnRcIjtcclxuaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgKiBhcyB0YXJnZXQgZnJvbSBcIi4vdGFyZ2V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbih0eXBlOiBFdmVudCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgbGV0IHRva2VuczogVG9rZW5bXSA9IFt0aW1lKCksIHR5cGVdO1xyXG4gICAgbGV0IHRpbWVyID0gdHlwZSA9PT0gRXZlbnQuRGlzY292ZXIgPyBNZXRyaWMuRGlzY292ZXJUaW1lIDogTWV0cmljLk11dGF0aW9uVGltZTtcclxuICAgIGxldCBhZGRFdmVudFRvUXVldWUgPSB0cnVlO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgRXZlbnQuRG9jdW1lbnQ6XHJcbiAgICAgICAgICAgIGxldCBkID0gZG9jLmRhdGE7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKGQud2lkdGgpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaChkLmhlaWdodCk7XHJcbiAgICAgICAgICAgIG1ldHJpYy5tZWFzdXJlKE1ldHJpYy5Eb2N1bWVudFdpZHRoLCBkLndpZHRoKTtcclxuICAgICAgICAgICAgbWV0cmljLm1lYXN1cmUoTWV0cmljLkRvY3VtZW50SGVpZ2h0LCBkLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHF1ZXVlKHRva2Vucyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXZlbnQuQm94TW9kZWw6XHJcbiAgICAgICAgICAgIGxldCBibSA9IGJveG1vZGVsLnVwZGF0ZXMoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgYm0pIHtcclxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHZhbHVlLmlkKTtcclxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHZhbHVlLmJveCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcXVldWUodG9rZW5zKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFdmVudC5UYXJnZXQ6XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRzID0gdGFyZ2V0LnVwZGF0ZXMoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgdGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godmFsdWUuaWQpO1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godmFsdWUuaGFzaCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh2YWx1ZS5ib3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHF1ZXVlKHRva2Vucyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXZlbnQuSGFzaDpcclxuICAgICAgICAgICAgbGV0IHNlbGVjdG9ycyA9IGRvbS5zZWxlY3RvcnMoKTtcclxuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHNlbGVjdG9ycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2subG9uZ3Rhc2sodGltZXIpKSB7IGF3YWl0IHRhc2suaWRsZSh0aW1lcik7IH1cclxuICAgICAgICAgICAgICAgIGxldCBoID0gaGFzaCh2YWx1ZS5zZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnRlciA9IHRva2Vucy5pbmRleE9mKGgpO1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godmFsdWUuaWQgLSByZWZlcmVuY2UpO1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2gocG9pbnRlciA+PSAwID8gW3BvaW50ZXJdIDogaCk7XHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2UgPSB2YWx1ZS5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBxdWV1ZSh0b2tlbnMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV2ZW50LkRpc2NvdmVyOlxyXG4gICAgICAgIGNhc2UgRXZlbnQuTXV0YXRpb246XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBkb20udXBkYXRlcygpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXNrLmxvbmd0YXNrKHRpbWVyKSkgeyBhd2FpdCB0YXNrLmlkbGUodGltZXIpOyB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbWV0YWRhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhOiBOb2RlSW5mbyA9IHZhbHVlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZlID0gdmFsdWUubWV0YWRhdGEuYWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleXMgPSBhY3RpdmUgPyBbXCJ0YWdcIiwgXCJwYXRoXCIsIFwiYXR0cmlidXRlc1wiLCBcInZhbHVlXCJdIDogW1widGFnXCJdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGFnXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0cmljLmNvdW50ZXIoTWV0cmljLk5vZGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh2YWx1ZS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnBhcmVudCAmJiBhY3RpdmUpIHsgdG9rZW5zLnB1c2godmFsdWUucGFyZW50KTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5uZXh0ICYmIGFjdGl2ZSkgeyB0b2tlbnMucHVzaCh2YWx1ZS5uZXh0KTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhLnB1c2godmFsdWUucG9zaXRpb24gPyBgJHtkYXRhW2tleV19fiR7dmFsdWUucG9zaXRpb259YCA6IGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicGF0aFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhLnB1c2goYCR7dmFsdWUuZGF0YS5wYXRofT5gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhdHRyaWJ1dGVzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBkYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFba2V5XVthdHRyXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YS5wdXNoKGF0dHJpYnV0ZSh2YWx1ZS5tZXRhZGF0YS5tYXNrZWQsIGF0dHIsIGRhdGFba2V5XVthdHRyXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHIgPT09IFwiY2xhcml0eVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhW2tleV1bYXR0cl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vLXRyYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRFdmVudFRvUXVldWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSBkb20uZ2V0Tm9kZSh2YWx1ZS5wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnRUYWcgPSBkb20uZ2V0KHBhcmVudCkgPyBkb20uZ2V0KHBhcmVudCkuZGF0YS50YWcgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YWcgPSB2YWx1ZS5kYXRhLnRhZyA9PT0gXCJTVFlMRVwiID8gdmFsdWUuZGF0YS50YWcgOiBwYXJlbnRUYWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEucHVzaCh0ZXh0KHZhbHVlLm1ldGFkYXRhLm1hc2tlZCwgdGFnLCBkYXRhW2tleV0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgbWV0YWRhdGFcclxuICAgICAgICAgICAgICAgIG1ldGFkYXRhID0gbWV0YShtZXRhZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0b2tlbiBvZiBtZXRhZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiID8gdG9rZW5zLmluZGV4T2YodG9rZW4pIDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goaW5kZXggPj0gMCAmJiB0b2tlbi5sZW5ndGggPiBpbmRleC50b1N0cmluZygpLmxlbmd0aCA/IFtpbmRleF0gOiB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYoYWRkRXZlbnRUb1F1ZXVlKXtcclxuXHRcdFx0XHRcdFx0XHRxdWV1ZSh0b2tlbnMpO1xyXG5cdFx0XHRcdFx0XHR9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWV0YShtZXRhZGF0YTogc3RyaW5nW10pOiBzdHJpbmdbXSB8IHN0cmluZ1tdW10ge1xyXG4gICAgbGV0IHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobWV0YWRhdGEpO1xyXG4gICAgbGV0IGhhc2hlZCA9IGhhc2godmFsdWUpO1xyXG4gICAgcmV0dXJuIGNoZWNrKGhhc2hlZCkgJiYgaGFzaGVkLmxlbmd0aCA8IHZhbHVlLmxlbmd0aCA/IFtbaGFzaGVkXV0gOiBtZXRhZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0cmlidXRlKG1hc2tlZDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIFwic3JjXCI6XHJcbiAgICAgICAgY2FzZSBcInNyY3NldFwiOlxyXG4gICAgICAgIGNhc2UgXCJ0aXRsZVwiOlxyXG4gICAgICAgIGNhc2UgXCJhbHRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGAke2tleX09JHttYXNrZWQgPyBcIlwiIDogdmFsdWV9YDtcclxuICAgICAgICBjYXNlIFwidmFsdWVcIjpcclxuICAgICAgICBjYXNlIFwicGxhY2Vob2xkZXJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGAke2tleX09JHttYXNrZWQgPyBtYXNrKHZhbHVlKSA6IHZhbHVlfWA7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGAke2tleX09JHt2YWx1ZX1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXh0KG1hc2tlZDogYm9vbGVhbiwgdGFnOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoICh0YWcpIHtcclxuICAgICAgICBjYXNlIFwiU1RZTEVcIjpcclxuICAgICAgICBjYXNlIFwiVElUTEVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBtYXNrZWQgPyBtYXNrKHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGJveG1vZGVsIGZyb20gXCJAc3JjL2xheW91dC9ib3htb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBkaXNjb3ZlciBmcm9tIFwiQHNyYy9sYXlvdXQvZGlzY292ZXJcIjtcclxuaW1wb3J0ICogYXMgZG9jIGZyb20gXCJAc3JjL2xheW91dC9kb2N1bWVudFwiO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIkBzcmMvbGF5b3V0L2RvbVwiO1xyXG5pbXBvcnQgKiBhcyBtdXRhdGlvbiBmcm9tIFwiQHNyYy9sYXlvdXQvbXV0YXRpb25cIjtcclxuaW1wb3J0ICogYXMgdGFyZ2V0IGZyb20gXCJAc3JjL2xheW91dC90YXJnZXRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpOiB2b2lkIHtcclxuICAgIGRvYy5yZXNldCgpO1xyXG4gICAgZG9tLnJlc2V0KCk7XHJcbiAgICBtdXRhdGlvbi5zdGFydCgpO1xyXG4gICAgZGlzY292ZXIuc3RhcnQoKTtcclxuICAgIGJveG1vZGVsLnJlc2V0KCk7XHJcbiAgICB0YXJnZXQucmVzZXQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZCgpOiB2b2lkIHtcclxuICAgIGRvbS5yZXNldCgpO1xyXG4gICAgbXV0YXRpb24uZW5kKCk7XHJcbiAgICBib3htb2RlbC5yZXNldCgpO1xyXG4gICAgdGFyZ2V0LnJlc2V0KCk7XHJcbiAgICBkb2MucmVzZXQoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudCwgTWV0cmljIH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2RhdGFcIjtcclxuaW1wb3J0IHsgU291cmNlIH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2xheW91dFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJAc3JjL2NvcmUvY29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIHRhc2sgZnJvbSBcIkBzcmMvY29yZS90YXNrXCI7XHJcbmltcG9ydCAqIGFzIGJveG1vZGVsIGZyb20gXCJAc3JjL2xheW91dC9ib3htb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBkb2MgZnJvbSBcIkBzcmMvbGF5b3V0L2RvY3VtZW50XCI7XHJcbmltcG9ydCBlbmNvZGUgZnJvbSBcIkBzcmMvbGF5b3V0L2VuY29kZVwiO1xyXG5pbXBvcnQgcHJvY2Vzc05vZGUgZnJvbSBcIi4vbm9kZVwiO1xyXG5cclxubGV0IG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xyXG5sZXQgbXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdID0gW107XHJcbmxldCBpbnNlcnRSdWxlOiAocnVsZTogc3RyaW5nLCBpbmRleD86IG51bWJlcikgPT4gbnVtYmVyID0gbnVsbDtcclxubGV0IGRlbGV0ZVJ1bGU6IChpbmRleD86IG51bWJlcikgPT4gdm9pZCA9IG51bGw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKTogdm9pZCB7XHJcbiAgICBpZiAob2JzZXJ2ZXIpIHsgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOyB9XHJcbiAgICBvYnNlcnZlciA9IHdpbmRvd1tcIk11dGF0aW9uT2JzZXJ2ZXJcIl0gPyBuZXcgTXV0YXRpb25PYnNlcnZlcihoYW5kbGUpIDogbnVsbDtcclxuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xyXG4gICAgaWYgKGluc2VydFJ1bGUgPT09IG51bGwpIHsgaW5zZXJ0UnVsZSA9IENTU1N0eWxlU2hlZXQucHJvdG90eXBlLmluc2VydFJ1bGU7IH1cclxuICAgIGlmIChkZWxldGVSdWxlID09PSBudWxsKSB7IGRlbGV0ZVJ1bGUgPSBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZS5kZWxldGVSdWxlOyB9XHJcblxyXG4gICAgLy8gU29tZSBwb3B1bGFyIG9wZW4gc291cmNlIGxpYnJhcmllcywgbGlrZSBzdHlsZWQtY29tcG9uZW50cywgb3B0aW1pemUgcGVyZm9ybWFuY2VcclxuICAgIC8vIGJ5IGluamVjdGluZyBDU1MgdXNpbmcgaW5zZXJ0UnVsZSBBUEkgdnMuIGFwcGVuZGluZyB0ZXh0IG5vZGUuIEEgc2lkZSBlZmZlY3Qgb2ZcclxuICAgIC8vIHVzaW5nIGphdmFzY3JpcHQgQVBJIGlzIHRoYXQgaXQgZG9lc24ndCB0cmlnZ2VyIERPTSBtdXRhdGlvbiBhbmQgdGhlcmVmb3JlIHdlXHJcbiAgICAvLyBuZWVkIHRvIG92ZXJyaWRlIHRoZSBpbnNlcnRSdWxlIEFQSSBhbmQgbGlzdGVuIGZvciBjaGFuZ2VzIG1hbnVhbGx5LlxyXG4gICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uKHJ1bGU6IHN0cmluZywgaW5kZXg/OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICBsZXQgdmFsdWUgPSBpbnNlcnRSdWxlLmNhbGwodGhpcywgcnVsZSwgaW5kZXgpO1xyXG4gICAgICBnZW5lcmF0ZSh0aGlzLm93bmVyTm9kZSwgXCJjaGFyYWN0ZXJEYXRhXCIpO1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbihpbmRleD86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICBkZWxldGVSdWxlLmNhbGwodGhpcywgaW5kZXgpO1xyXG4gICAgICBnZW5lcmF0ZSh0aGlzLm93bmVyTm9kZSwgXCJjaGFyYWN0ZXJEYXRhXCIpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZCgpOiB2b2lkIHtcclxuICBpZiAob2JzZXJ2ZXIpIHsgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOyB9XHJcbiAgb2JzZXJ2ZXIgPSBudWxsO1xyXG5cclxuICAvLyBSZXN0b3Jpbmcgb3JpZ2luYWwgaW5zZXJ0UnVsZVxyXG4gIGlmIChpbnNlcnRSdWxlICE9PSBudWxsKSB7XHJcbiAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZS5pbnNlcnRSdWxlID0gaW5zZXJ0UnVsZTtcclxuICAgIGluc2VydFJ1bGUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVzdG9yaW5nIG9yaWdpbmFsIGRlbGV0ZVJ1bGVcclxuICBpZiAoZGVsZXRlUnVsZSAhPT0gbnVsbCkge1xyXG4gICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuZGVsZXRlUnVsZSA9IGRlbGV0ZVJ1bGU7XHJcbiAgICBkZWxldGVSdWxlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIG11dGF0aW9ucyA9IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGUobTogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQge1xyXG4gIC8vIFF1ZXVlIHVwIG11dGF0aW9uIHJlY29yZHMgZm9yIGFzeW5jaHJvbm91cyBwcm9jZXNzaW5nXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSsrKSB7IG11dGF0aW9ucy5wdXNoKG1baV0pOyB9XHJcbiAgdGFzay5zY2hlZHVsZShwcm9jZXNzKS50aGVuKCgpID0+IHtcclxuICAgICAgZG9jLmNvbXB1dGUoKTtcclxuICAgICAgYm94bW9kZWwuY29tcHV0ZSgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgbGV0IHRpbWVyID0gTWV0cmljLk11dGF0aW9uVGltZTtcclxuICAgIHRhc2suc3RhcnQodGltZXIpO1xyXG4gICAgd2hpbGUgKG11dGF0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBtdXRhdGlvbiA9IG11dGF0aW9ucy5zaGlmdCgpO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0O1xyXG5cclxuICAgICAgc3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImF0dHJpYnV0ZXNcIjpcclxuICAgICAgICAgICAgaWYgKHRhc2subG9uZ3Rhc2sodGltZXIpKSB7IGF3YWl0IHRhc2suaWRsZSh0aW1lcik7IH1cclxuICAgICAgICAgICAgcHJvY2Vzc05vZGUodGFyZ2V0LCBTb3VyY2UuQXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjaGFyYWN0ZXJEYXRhXCI6XHJcbiAgICAgICAgICAgIGlmICh0YXNrLmxvbmd0YXNrKHRpbWVyKSkgeyBhd2FpdCB0YXNrLmlkbGUodGltZXIpOyB9XHJcbiAgICAgICAgICAgIHByb2Nlc3NOb2RlKHRhcmdldCwgU291cmNlLkNoYXJhY3RlckRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY2hpbGRMaXN0XCI6XHJcbiAgICAgICAgICAvLyBQcm9jZXNzIGFkZGl0aW9uc1xyXG4gICAgICAgICAgbGV0IGFkZGVkTGVuZ3RoID0gbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFkZGVkTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobXV0YXRpb24uYWRkZWROb2Rlc1tqXSwgTm9kZUZpbHRlci5TSE9XX0FMTCwgbnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcclxuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXNrLmxvbmd0YXNrKHRpbWVyKSkgeyBhd2FpdCB0YXNrLmlkbGUodGltZXIpOyB9XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzTm9kZShub2RlLCBTb3VyY2UuQ2hpbGRMaXN0QWRkKTtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gUHJvY2VzcyByZW1vdmVzXHJcbiAgICAgICAgICBsZXQgcmVtb3ZlZExlbmd0aCA9IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlbW92ZWRMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAodGFzay5sb25ndGFzayh0aW1lcikpIHsgYXdhaXQgdGFzay5pZGxlKHRpbWVyKTsgfVxyXG4gICAgICAgICAgICBwcm9jZXNzTm9kZShtdXRhdGlvbi5yZW1vdmVkTm9kZXNbal0sIFNvdXJjZS5DaGlsZExpc3RSZW1vdmUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhd2FpdCBlbmNvZGUoY29uZmlnLmxlYW4gPyBFdmVudC5IYXNoIDogRXZlbnQuTXV0YXRpb24pO1xyXG4gICAgdGFzay5zdG9wKHRpbWVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGUodGFyZ2V0OiBOb2RlLCB0eXBlOiBNdXRhdGlvblJlY29yZFR5cGUpOiB2b2lkIHtcclxuICBoYW5kbGUoW3tcclxuICAgIGFkZGVkTm9kZXM6IG51bGwsXHJcbiAgICBhdHRyaWJ1dGVOYW1lOiBudWxsLFxyXG4gICAgYXR0cmlidXRlTmFtZXNwYWNlOiBudWxsLFxyXG4gICAgbmV4dFNpYmxpbmc6IG51bGwsXHJcbiAgICBvbGRWYWx1ZTogbnVsbCxcclxuICAgIHByZXZpb3VzU2libGluZzogbnVsbCxcclxuICAgIHJlbW92ZWROb2RlczogbnVsbCxcclxuICAgIHRhcmdldCxcclxuICAgIHR5cGVcclxuICB9XSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RhbnQsIFNvdXJjZSB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9sYXlvdXRcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiQHNyYy9jb3JlL2NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vZG9tXCI7XHJcblxyXG5jb25zdCBJR05PUkVfQVRUUklCVVRFUyA9IFtcInRpdGxlXCIsIFwiYWx0XCIsIFwib25sb2FkXCIsIFwib25mb2N1c1wiXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGU6IE5vZGUsIHNvdXJjZTogU291cmNlKTogdm9pZCB7XHJcbiAgICAvLyBEbyBub3QgdHJhY2sgdGhpcyBjaGFuZ2UgaWYgd2UgYXJlIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIGEgbm9kZSBiZWZvcmUgZGlzY292ZXJpbmcgaXRcclxuICAgIGlmIChzb3VyY2UgPT09IFNvdXJjZS5DaGlsZExpc3RSZW1vdmUgJiYgZG9tLmhhcyhub2RlKSA9PT0gZmFsc2UpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdGV4dCBub2RlcyB0aGF0IGJlbG9uZyB0byBzdHlsZSBub2Rlc1xyXG4gICAgaWYgKHNvdXJjZSAhPT0gU291cmNlLkRpc2NvdmVyICYmXHJcbiAgICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgJiZcclxuICAgICAgICBub2RlLnBhcmVudEVsZW1lbnQgJiZcclxuICAgICAgICBub2RlLnBhcmVudEVsZW1lbnQudGFnTmFtZSA9PT0gXCJTVFlMRVwiKSB7XHJcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2FsbCA9IGRvbS5oYXMobm9kZSkgPyBcInVwZGF0ZVwiIDogXCJhZGRcIjtcclxuICAgIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgTm9kZS5ET0NVTUVOVF9UWVBFX05PREU6XHJcbiAgICAgICAgICAgIGxldCBkb2N0eXBlID0gbm9kZSBhcyBEb2N1bWVudFR5cGU7XHJcbiAgICAgICAgICAgIGxldCBkb2NBdHRyaWJ1dGVzID0geyBuYW1lOiBkb2N0eXBlLm5hbWUsIHB1YmxpY0lkOiBkb2N0eXBlLnB1YmxpY0lkLCBzeXN0ZW1JZDogZG9jdHlwZS5zeXN0ZW1JZCB9O1xyXG4gICAgICAgICAgICBsZXQgZG9jRGF0YSA9IHsgdGFnOiBcIipEXCIsIGF0dHJpYnV0ZXM6IGRvY0F0dHJpYnV0ZXMgfTtcclxuICAgICAgICAgICAgZG9tW2NhbGxdKG5vZGUsIGRvY0RhdGEsIHNvdXJjZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTm9kZS5URVhUX05PREU6XHJcbiAgICAgICAgICAgIC8vIEFjY291bnQgZm9yIHRoaXMgdGV4dCBub2RlIG9ubHkgaWYgd2UgYXJlIHRyYWNraW5nIHRoZSBwYXJlbnQgbm9kZVxyXG4gICAgICAgICAgICAvLyBXZSBkbyBub3Qgd2lzaCB0byB0cmFjayB0ZXh0IG5vZGVzIGZvciBpZ25vcmVkIHBhcmVudCBub2RlcywgbGlrZSBzY3JpcHQgdGFnc1xyXG4gICAgICAgICAgICAvLyBBbHNvLCB3ZSBkbyBub3QgdHJhY2sgdGV4dCBub2RlcyBmb3IgU1RZTEUgdGFnc1xyXG4gICAgICAgICAgICAvLyBUaGUgb25seSBleGNlcHRpb24gaXMgd2hlbiB3ZSByZWNlaXZlIGEgbXV0YXRpb24gdG8gcmVtb3ZlIHRoZSB0ZXh0IG5vZGUsIGluIHRoYXQgY2FzZVxyXG4gICAgICAgICAgICAvLyBwYXJlbnQgd2lsbCBiZSBudWxsLCBidXQgd2UgY2FuIHN0aWxsIHByb2Nlc3MgdGhlIG5vZGUgYnkgY2hlY2tpbmcgaXQncyBhbiB1cGRhdGUgY2FsbC5cclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGNhbGwgPT09IFwidXBkYXRlXCIgfHwgKHBhcmVudCAmJiBkb20uaGFzKHBhcmVudCkgJiYgcGFyZW50LnRhZ05hbWUgIT09IFwiU1RZTEVcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0RGF0YSA9IHsgdGFnOiBcIipUXCIsIHZhbHVlOiBub2RlLm5vZGVWYWx1ZSB9O1xyXG4gICAgICAgICAgICAgICAgZG9tW2NhbGxdKG5vZGUsIHRleHREYXRhLCBzb3VyY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gKG5vZGUgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgICAgICBsZXQgdGFnID0gZWxlbWVudC50YWdOYW1lO1xyXG4gICAgICAgICAgICB0YWcgPSAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IENvbnN0YW50LlNWR19OQU1FU1BBQ0UpID8gQ29uc3RhbnQuU1ZHX1BSRUZJWCArIHRhZyA6IHRhZztcclxuICAgICAgICAgICAgc3dpdGNoICh0YWcpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTQ1JJUFRcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJOT1NDUklQVFwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1FVEFcIjpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJIRUFEXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWQgPSB7IHRhZywgYXR0cmlidXRlczogZ2V0QXR0cmlidXRlcyhlbGVtZW50LmF0dHJpYnV0ZXMpIH07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSBiYXNlIGhyZWYgYXMgcGFydCBvZiBkaXNjb3ZlcmluZyBET01cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbCA9PT0gXCJhZGRcIikgeyBoZWFkLmF0dHJpYnV0ZXNbXCIqQlwiXSA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdG5hbWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBkb21bY2FsbF0obm9kZSwgaGVhZCwgc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTVFlMRVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVzID0gZ2V0QXR0cmlidXRlcyhlbGVtZW50LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHlsZURhdGEgPSB7IHRhZywgYXR0cmlidXRlcywgdmFsdWU6IGdldFN0eWxlVmFsdWUoZWxlbWVudCBhcyBIVE1MU3R5bGVFbGVtZW50KSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbVtjYWxsXShub2RlLCBzdHlsZURhdGEsIHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0geyB0YWcsIGF0dHJpYnV0ZXM6IGdldEF0dHJpYnV0ZXMoZWxlbWVudC5hdHRyaWJ1dGVzKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbVtjYWxsXShub2RlLCBkYXRhLCBzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdHlsZVZhbHVlKHN0eWxlOiBIVE1MU3R5bGVFbGVtZW50KTogc3RyaW5nIHtcclxuICAgIGxldCB2YWx1ZSA9IHN0eWxlLnRleHRDb250ZW50O1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCBjb25maWcuY3NzUnVsZXMpIHtcclxuICAgICAgICBsZXQgY3NzUnVsZXMgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBGaXJlZm94IHRocm93cyBhIFNlY3VyaXR5RXJyb3Igd2hlbiB0cnlpbmcgdG8gYWNjZXNzIGNzc1J1bGVzIG9mIGEgc3R5bGVzaGVldCBmcm9tIGEgZGlmZmVyZW50IGRvbWFpblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzaGVldCA9IHN0eWxlLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQ7XHJcbiAgICAgICAgICAgIGNzc1J1bGVzID0gc2hlZXQgPyBzaGVldC5jc3NSdWxlcyA6IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUubmFtZSAhPT0gXCJTZWN1cml0eUVycm9yXCIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjc3NSdWxlcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNzc1J1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBjc3NSdWxlc1tpXS5jc3NUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXM6IE5hbWVkTm9kZU1hcCk6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9IHtcclxuICAgIGxldCBvdXRwdXQgPSB7fTtcclxuICAgIGlmIChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGF0dHJpYnV0ZXNbaV0ubmFtZTtcclxuICAgICAgICAgICAgaWYgKElHTk9SRV9BVFRSSUJVVEVTLmluZGV4T2YobmFtZSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRbbmFtZV0gPSBhdHRyaWJ1dGVzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG4iLCJpbXBvcnQgeyBBdHRyaWJ1dGVzLCBDb25zdGFudCB9IGZyb20gXCIuLi8uLi90eXBlcy9sYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRhZzogc3RyaW5nLCBwcmVmaXg6IHN0cmluZywgYXR0cmlidXRlczogQXR0cmlidXRlcywgcG9zaXRpb246IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgZW1wdHkgPSBcIlwiO1xyXG4gICAgbGV0IHN1ZmZpeCA9IHBvc2l0aW9uID8gYDpudGgtb2YtdHlwZSgke3Bvc2l0aW9ufSlgIDogZW1wdHk7XHJcbiAgICBzd2l0Y2ggKHRhZykge1xyXG4gICAgICAgIGNhc2UgXCJTVFlMRVwiOlxyXG4gICAgICAgIGNhc2UgXCJUSVRMRVwiOlxyXG4gICAgICAgIGNhc2UgXCJMSU5LXCI6XHJcbiAgICAgICAgY2FzZSBcIk1FVEFcIjpcclxuICAgICAgICBjYXNlIFwiKlRcIjpcclxuICAgICAgICBjYXNlIFwiKkRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5O1xyXG4gICAgICAgIGNhc2UgXCJIVE1MXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkhUTUxcIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBpZiAocHJlZml4ID09PSBudWxsKSB7IHJldHVybiBlbXB0eTsgfVxyXG4gICAgICAgICAgICB0YWcgPSB0YWcuaW5kZXhPZihDb25zdGFudC5TVkdfUFJFRklYKSA9PT0gMCA/IHRhZy5zdWJzdHIoQ29uc3RhbnQuU1ZHX1BSRUZJWC5sZW5ndGgpIDogdGFnO1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSBgJHtwcmVmaXh9JHt0YWd9JHtzdWZmaXh9YDtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50LklEX0FUVFJJQlVURSBpbiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IGAqJHthdHRyaWJ1dGVzW0NvbnN0YW50LklEX0FUVFJJQlVURV19YDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcImlkXCIgaW4gYXR0cmlidXRlcyAmJiBhdHRyaWJ1dGVzW1wiaWRcIl0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBgJHt0YWd9IyR7YXR0cmlidXRlcy5pZH1gO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFwiY2xhc3NcIiBpbiBhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXNbXCJjbGFzc1wiXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IGAke3ByZWZpeH0ke3RhZ30uJHthdHRyaWJ1dGVzLmNsYXNzLnRyaW0oKS5zcGxpdCgvXFxzKy8pLmpvaW4oXCIuXCIpfSR7c3VmZml4fWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIkBjbGFyaXR5LXR5cGVzL2RhdGFcIjtcclxuaW1wb3J0IHsgVGFyZ2V0RGF0YSB9IGZyb20gXCJAY2xhcml0eS10eXBlcy9sYXlvdXRcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiQHNyYy9jb3JlL2NvbmZpZ1wiO1xyXG5pbXBvcnQgaGFzaCBmcm9tIFwiQHNyYy9kYXRhL2hhc2hcIjtcclxuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcIkBzcmMvbGF5b3V0L2JveG1vZGVsXCI7XHJcbmltcG9ydCBlbmNvZGUgZnJvbSBcIkBzcmMvbGF5b3V0L2VuY29kZVwiO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vZG9tXCI7XHJcblxyXG5sZXQgcXVldWU6IG51bWJlcltdID0gW107XHJcbmxldCB0aW1lb3V0OiBudW1iZXIgPSBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgcXVldWUgPSBbXTtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHRpbWVvdXQgPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZShpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAocXVldWUuaW5kZXhPZihpZCkgPT09IC0xKSB7IHF1ZXVlLnB1c2goaWQpOyB9XHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZW5jb2RlLCBjb25maWcubG9va2FoZWFkLCBFdmVudC5UYXJnZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlcygpOiBUYXJnZXREYXRhW10ge1xyXG4gICAgbGV0IGRhdGE6IFRhcmdldERhdGFbXSA9IFtdO1xyXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgICAgIGxldCB4ID0gXCJwYWdlWE9mZnNldFwiIGluIHdpbmRvdyA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IGRvYy5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIGxldCB5ID0gXCJwYWdlWU9mZnNldFwiIGluIHdpbmRvdyA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IGRvYy5zY3JvbGxUb3A7XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgYWxsIGxheW91dCBjb21wdXRhdGlvbnMgaW4gc2luZ2xlIGJhdGNoIHRvIGF2b2lkIHJlZmxvd3NcclxuICAgICAgICBmb3IgKGxldCBpZCBvZiBxdWV1ZSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBkb20uZ2V0VmFsdWUoaWQpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGRvbS5nZXROb2RlKGlkKSBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBoYXNoOiB2YWx1ZSA/IGhhc2godmFsdWUuc2VsZWN0b3IpIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGJveDogbm9kZSAmJiBub2RlLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSA/IGxheW91dChub2RlLCB4LCB5KSA6IFtdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNldCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgY2xhcml0eSBmcm9tIFwiQHNyYy9jbGFyaXR5XCI7XHJcblxyXG4vLyBXaGVuIGJ1aWx0IHdpdGggd2VicGFjayBmb3IgcHJvZCwgY29tcGlsZWQgY2xhcml0eS1qcyBidW5kbGUgZG9lc24ndCBleHBvc2UgdGhlIG1vZHVsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZS5cclxuLy8gU2luY2Ugd2UgbmVlZCBjbGFyaXR5LWpzIHRvIGJlIGF2YWlsYWJsZSBnbG9iYWxseSwgd2UgY2FuIGNyZWF0ZSBhIHdyYXBwZXIgbW9kdWxlIHRoYXQgd291bGQgYXNzaWduIGNsYXJpdHkgdG8gd2luZG93LlxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgKHdpbmRvdyBhcyBhbnkpLmNsYXJpdHkgPSBjbGFyaXR5O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=