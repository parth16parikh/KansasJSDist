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
})({"SEFJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENE: {
    LOAD_SCENE: "Load",
    MENU_SCENE: "Menu",
    NAME_SCENE: "NameScene"
  },
  IMAGES: {
    POUP_UP: "Popup.png",
    NEXT_BUTTON: "NextButton.png",
    INPUT_BOX: "InputBox.png"
  },
  HTML: {
    NAME_INPUT: "InputNameForm.html"
  },
  STORAGE_KEY: {
    PLAYER_NAME: "PlayerName"
  }
};
exports.CST = CST;
},{}],"vu3y":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../Helper/CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LoadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  var _super = _createSuper(LoadScene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _super.call(this, {
      key: _CST.CST.SCENE.LOAD_SCENE
    });
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {
      //  Inject our CSS
      var element = document.createElement('style');
      document.head.appendChild(element);
      var sheet = element.sheet;
      var styles = '@font-face { font-family: "BalooBold"; src: url("assets/font/Baloo2-Bold.ttf") format("opentype"); }\n';
      sheet.insertRule(styles, 0);
    }
  }, {
    key: "preload",
    value: function preload() {
      this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }
  }, {
    key: "create",
    value: function create() {
      var add = this.add;
      var input = this.input;
      WebFont.load({
        custom: {
          families: ['BalooBold']
        }
      });

      if (localStorage.getItem(_CST.CST.STORAGE_KEY.PLAYER_NAME) == null || localStorage.getItem(_CST.CST.STORAGE_KEY.PLAYER_NAME) == "") {
        this.scene.start(_CST.CST.SCENE.NAME_SCENE);
      } else {
        this.scene.start(_CST.CST.SCENE.MENU_SCENE);
      }
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../Helper/CST":"SEFJ"}],"ytE1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../Helper/CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MenuScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  var _super = _createSuper(MenuScene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _super.call(this, {
      key: _CST.CST.SCENE.MENU_SCENE,
      pack: {
        files: [{
          type: 'scenePlugin',
          key: 'SpinePlugin',
          url: 'SpinePlugin.min.js',
          sceneKey: 'spine'
        }]
      }
    });
  }

  _createClass(MenuScene, [{
    key: "preload",
    value: function preload() {
      this.load.spine("girl", "./assets/spine/Girl/Girl_1.json", ["./assets/spine/Girl/Girl_1.atlas"]);
      this.load.spine("bjj", "./assets/spine/BJJ_HNS/BJJ_HNS.json", ["./assets/spine/BJJ_HNS/BJJ_HNS.atlas"]);
    }
  }, {
    key: "create",
    value: function create() {
      var girl = this.add.spine(200, 600, "girl", "Idle", true);
      var bjj = this.add.spine(600, 550, "bjj", "Idle", true);
      bjj.setScale(0.3);
      var skeletonData = bjj.skeletonData;
      var skin = bjj.skeletonData.findSkin("default");
      var skinName = ["Bjj_Face", "Costumes/Bjj_Dress"];

      for (var item in skinName) {
        var tempSkin = skeletonData.findSkin(skinName[item]);
        skin.addSkin(tempSkin);
      }

      bjj.setSkin(skin);
      bjj.setSlotsToSetupPose();
      var text = this.add.text(5, 20, localStorage.getItem(_CST.CST.STORAGE_KEY.PLAYER_NAME), _defineProperty({
        color: 'white',
        fontFamily: 'BalooBold',
        fontSize: '30px',
        align: "left"
      }, "color", "#ffffff"));
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../Helper/CST":"SEFJ"}],"JCWi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NameScene = void 0;

var _CST = require("../Helper/CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NameScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(NameScene, _Phaser$Scene);

  var _super = _createSuper(NameScene);

  function NameScene() {
    _classCallCheck(this, NameScene);

    return _super.call(this, {
      key: _CST.CST.SCENE.NAME_SCENE
    });
  }

  _createClass(NameScene, [{
    key: "preload",
    value: function preload() {
      this.load.image(_CST.CST.IMAGES.INPUT_BOX, "./assets/images/Popup/" + _CST.CST.IMAGES.INPUT_BOX);
      this.load.image(_CST.CST.IMAGES.NEXT_BUTTON, "./assets/images/Popup/" + _CST.CST.IMAGES.NEXT_BUTTON);
      this.load.image(_CST.CST.IMAGES.POUP_UP, "./assets/images/Popup/" + _CST.CST.IMAGES.POUP_UP);
      this.load.html(_CST.CST.HTML.NAME_INPUT, "./assets/text/" + _CST.CST.HTML.NAME_INPUT);
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, _CST.CST.IMAGES.POUP_UP);
      var text = this.add.text(this.game.renderer.width / 2 - 255, this.game.renderer.height / 2 - 185, 'Enter Your Name', _defineProperty({
        color: 'white',
        fontFamily: 'BalooBold',
        fontSize: '70px',
        align: "left"
      }, "color", "#834f2a"));
      this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 10, _CST.CST.IMAGES.INPUT_BOX);
      var element = this.add.dom(this.game.renderer.width / 2 + 10, this.game.renderer.height / 2 - 10).createFromCache(_CST.CST.HTML.NAME_INPUT);
      var nextButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 150, _CST.CST.IMAGES.NEXT_BUTTON);
      nextButton.setInteractive();
      nextButton.on("pointerup", function () {
        var inputUsername = element.getChildByName('username');

        _this.tweens.add({
          targets: nextButton,
          duration: 100,
          ease: 'Bounce',
          scaleX: 1.1,
          scaleY: 1.1,
          yoyo: true
        }).on("complete", function () {
          if (inputUsername.value != "") {
            localStorage.setItem(_CST.CST.STORAGE_KEY.PLAYER_NAME, inputUsername.value);

            _this.scene.start(_CST.CST.SCENE.MENU_SCENE);
          }
        });
      });
    }
  }]);

  return NameScene;
}(Phaser.Scene);

exports.NameScene = NameScene;
},{"../Helper/CST":"SEFJ"}],"HJDO":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./Scene/LoadScene");

var _MenuScene = require("./Scene/MenuScene");

var _NameScene = require("./Scene/NameScene");

/** @type {import("../typing/phaser")} */
var game = new Phaser.Game({
  type: Phaser.WEBGL,
  width: 1280,
  height: 720,
  render: {
    pixelArt: true
  },
  backgroundColor: "#4c4c4c",
  parent: 'KansasGame',
  dom: {
    createContainer: true
  },
  scene: [_LoadScene.LoadScene, _NameScene.NameScene, _MenuScene.MenuScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
});
},{"./Scene/LoadScene":"vu3y","./Scene/MenuScene":"ytE1","./Scene/NameScene":"JCWi"}]},{},["HJDO"], null)
//# sourceMappingURL=/main.72494890.js.map