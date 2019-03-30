// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/utils/api-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest
};
exports.default = _default;
},{}],"js/utils/event-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function on(element, eventType, callback) {
  element.addEventListener(eventType, function (event) {
    return callback(event);
  });
}

var _default = {
  on: on
};
exports.default = _default;
},{}],"js/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

function Header() {
  return "\n    \n    <div class=\"main-header__title\">\n        <img class=\"nhl__logo\" src=\"http://hockeyonly.com/NhlNewLogo.gif\">\n        <h1>National Hockey League</h1>\n    </div>\n    <nav class=\"main-header__nav\">\n        <button class=\"view__all-conferences button\">Conferences</button>\n        <button class=\"view__all-divisions button\">Divisions</button>\n        <button class=\"view__all-teams button\">Teams</button>\n    </nav>\n    ";
}
},{}],"js/components/Teams.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Teams;

function Teams(teams) {
  return "\n    <ul class=\"flex-list\">\n    ".concat(teams.map(function (team) {
    return "\n        <li class=\"flex-list__item\">\n          <div class=\"flex-item-container\">\n            <img id=\"".concat(team.id, "\" class=\"team__logo\" src=\"").concat(team.logo, "\" alt=\"Team Logo\">\n        </div>\n      </li>\n    ");
  }).join(''), "\n  </ul>\n  ");
}
},{}],"js/components/Divisions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Divisions;

var _Teams = _interopRequireDefault(require("./Teams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Divisions(divisions) {
  return "\n      <ul class=\"list\">\n      ".concat(divisions.map(function (division) {
    return "\n          <li class=\"list__item\">\n            <div class=\"item-container\">\n              <h3 class=\"division__name\" id=\"".concat(division.id, "\">").concat(division.name, "</h3>\n              ").concat((0, _Teams.default)(division.teams), "\n          </div>\n        </li>\n      ");
  }).join(''), "\n    </ul>\n    ");
}
},{"./Teams":"js/components/Teams.js"}],"js/components/Conferences.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Conferences;

var _Divisions = _interopRequireDefault(require("./Divisions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Conferences(conferences) {
  return "\n      <ul class=\"list\">\n      ".concat(conferences.map(function (conference) {
    return "\n          <li class=\"list__item\">\n            <div class=\"item-container\">\n              <h2 class=\"conference__name\" id=\"".concat(conference.id, "\">").concat(conference.name, "</h2>\n              ").concat((0, _Divisions.default)(conference.divisions), "\n          </div>\n        </li>\n      ");
  }).join(''), "\n    </ul>\n    ");
}
},{"./Divisions":"js/components/Divisions.js"}],"js/components/Conference.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Conference;

var _Divisions = _interopRequireDefault(require("./Divisions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Conference(conference) {
  return "\n    <h2 class=\"single-conference__name\">".concat(conference.name, "</h2>\n    <ul class=\"conference__divisions\">\n        <li class=\"conference__division>\n            ").concat((0, _Divisions.default)(conference.divisions), "\n        </li>\n    </ul>\n    ");
}
},{"./Divisions":"js/components/Divisions.js"}],"js/components/Division.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Division;

var _Teams = _interopRequireDefault(require("./Teams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Division(division) {
  return "\n    <h2 class=\"single-division__name\">".concat(division.name, "</h2>\n    ").concat((0, _Teams.default)(division.teams), "\n    ");
}
},{"./Teams":"js/components/Teams.js"}],"js/components/Team.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Team;

function Team(team) {
  return "\n    <h2 class=\"single-team__name\">".concat(team.location, " ").concat(team.name, "</h2>\n    <img class=\"single-team__logo\" src=\"").concat(team.logo, "\">\n    <section class=\"add__comment\">\n        <h3>Add Team Comment</h3>\n        <input type=\"select\" class=\"add__team-id\" placeholder=\"team name\">\n            <input type=\"text\" class=\"add__team--comment\" placeholder=\"comment\">\n            <button class=\"add__comment--submit clickable\">Add Comment</button>\n        </section> \n    ");
}
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

var _apiActions = _interopRequireDefault(require("./utils/api-actions"));

var _eventActions = _interopRequireDefault(require("./utils/event-actions"));

var _Header = _interopRequireDefault(require("./components/Header"));

var _Conferences = _interopRequireDefault(require("./components/Conferences"));

var _Conference = _interopRequireDefault(require("./components/Conference"));

var _Divisions = _interopRequireDefault(require("./components/Divisions"));

var _Division = _interopRequireDefault(require("./components/Division"));

var _Teams = _interopRequireDefault(require("./components/Teams"));

var _Team = _interopRequireDefault(require("./components/Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

header();
main();

function header() {
  getHeaderContext().innerHTML = (0, _Header.default)();
  viewAllConferences();
  viewAllDivisions();
  viewAllTeams();
}

function main() {
  _apiActions.default.getRequest('http://localhost:8080/conferences', function (conferences) {
    getAppContext().innerHTML = (0, _Conferences.default)(conferences);
  });

  viewSingleConference();
  viewSingleDivision();
  viewSingleTeam();
}

function viewAllConferences() {
  _eventActions.default.on(getHeaderContext(), 'click', function () {
    if (event.target.classList.contains('view__all-conferences')) {
      _apiActions.default.getRequest("http://localhost:8080/conferences", function (conferences) {
        getAppContext().innerHTML = (0, _Conferences.default)(conferences);
      });
    }
  });
}

function viewSingleConference() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('conference__name')) {
      _apiActions.default.getRequest("http://localhost:8080/conferences/".concat(event.target.id), function (conference) {
        getAppContext().innerHTML = (0, _Conference.default)(conference);
      });
    }
  });
}

function viewAllDivisions() {
  _eventActions.default.on(getHeaderContext(), 'click', function () {
    if (event.target.classList.contains('view__all-divisions')) {
      _apiActions.default.getRequest("http://localhost:8080/divisions", function (divisions) {
        getAppContext().innerHTML = (0, _Divisions.default)(divisions);
      });
    }
  });
}

function viewSingleDivision() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('division__name')) {
      _apiActions.default.getRequest("http://localhost:8080/divisions/".concat(event.target.id), function (division) {
        getAppContext().innerHTML = (0, _Division.default)(division);
      });
    }
  });
}

function viewAllTeams() {
  _eventActions.default.on(getHeaderContext(), 'click', function () {
    if (event.target.classList.contains('view__all-teams')) {
      _apiActions.default.getRequest("http://localhost:8080/teams", function (teams) {
        getAppContext().innerHTML = (0, _Teams.default)(teams);
      });
    }
  });
}

function viewSingleTeam() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('team__logo')) {
      _apiActions.default.getRequest("http://localhost:8080/teams/".concat(event.target.id), function (team) {
        getAppContext().innerHTML = (0, _Team.default)(team);
      });
    }
  });
}

function getHeaderContext() {
  return document.querySelector("#header");
}

function getAppContext() {
  return document.querySelector("#app");
}
},{"./utils/api-actions":"js/utils/api-actions.js","./utils/event-actions":"js/utils/event-actions.js","./components/Header":"js/components/Header.js","./components/Conferences":"js/components/Conferences.js","./components/Conference":"js/components/Conference.js","./components/Divisions":"js/components/Divisions.js","./components/Division":"js/components/Division.js","./components/Teams":"js/components/Teams.js","./components/Team":"js/components/Team.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51115" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map