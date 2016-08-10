(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-dom"), require("react/lib/ReactTestUtils.js"), require("jquery"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react-dom", "react/lib/ReactTestUtils.js", "jquery", "lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react-dom"), require("react/lib/ReactTestUtils.js"), require("jquery"), require("lodash")) : factory(root["react-dom"], root["react/lib/ReactTestUtils.js"], root["jquery"], root["lodash"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactDom = __webpack_require__(1);
	var TestUtils = __webpack_require__(2);
	var $j = __webpack_require__(3);
	var _ = __webpack_require__(4);

	var nodes = [];
	var $cWin;
	window.$j = $j;

	var toggleContentIframe = function toggleContentIframe() {
	    var iframe = $j('#component-iframe');
	    iframe.is(':visible') ? iframe.hide() : iframe.show();
	};

	$j('body').prepend('<iframe id="component-iframe" style="width: 100%; height: 300px; display: none"></iframe>');
	var contentButton = $j('<button style="position: fixed; right: 200px; top: 0">Toggle content</button>').click(toggleContentIframe);
	$j('body').prepend(contentButton);

	var ReactHelpers = module.exports = {
	    render: function render(component) {
	        var c = iframeExists() ? renderInIframe(component) : renderIntoDocument(component);
	        var n = ReactDom.findDOMNode(c);
	        nodes.push(n);
	        var $n = $j(n);
	        $n.component = c;
	        return $n;
	    },
	    Simulate: TestUtils.Simulate,
	    click: function click(n) {
	        return ReactHelpers.Simulate.click($j(n).get(0));
	    },
	    change: function change(n, v) {
	        return ReactHelpers.Simulate.change($j(n).get(0), v !== undefined ? { target: { value: v, checked: v } } : undefined);
	    },
	    keyUp: function keyUp(n, keyCode) {
	        return ReactHelpers.Simulate.keyUp($j(n).get(0), { keyCode: keyCode });
	    },
	    keyDown: function keyDown(n, keyCode) {
	        return ReactHelpers.Simulate.keyDown($j(n).get(0), { keyCode: keyCode });
	    },
	    keyPress: function keyPress(n, keyCode) {
	        return ReactHelpers.Simulate.keyPress($j(n).get(0), { keyCode: keyCode });
	    },
	    mouseDown: function mouseDown(n) {
	        return ReactHelpers.Simulate.mouseDown($j(n).get(0), {});
	    },
	    mouseUp: function mouseUp(n) {
	        return ReactHelpers.Simulate.mouseUp($j(n).get(0), {});
	    },
	    mouseOver: function mouseOver(n) {
	        return ReactHelpers.Simulate.mouseOver($j(n).get(0), {});
	    },
	    mouseOut: function mouseOut(n) {
	        return ReactHelpers.Simulate.mouseOut($j(n).get(0), {});
	    },
	    fillForm: function fillForm(n, values) {
	        return _.each(values, function (value, name) {
	            return ReactHelpers.change($j(n).find('[name="' + name + '"]'), value);
	        });
	    }
	};

	beforeEach(function () {
	    unmountRenderedComponents();
	    iframeExists() && setupIframe();

	    function setupIframe() {
	        $cWin = $j($j('#component-iframe').get(0).contentDocument);
	        $cWin.find('body').html('');
	    }

	    function unmountRenderedComponents() {
	        nodes.forEach(function (n) {
	            var container = $j(n).parent().get(0);
	            container && ReactDom.unmountComponentAtNode(container);
	        });
	        nodes = [];
	    }
	});

	var iframeExists = function iframeExists() {
	    return !!$j('#component-iframe').length;
	};

	var renderInIframe = function renderInIframe(component) {
	    var containerId = 'container-' + _.uniqueId();
	    $cWin.find('body').append('<div id="' + containerId + '"></div>');

	    // copy over the included styling from document head
	    $j('head').find('link[href*=blob]').each(function (idx, link) {
	        return $cWin.find('body').append(link);
	    });

	    var container = $cWin.find('#' + containerId).get(0);
	    var c = ReactDom.render(component, container);
	    c = c || ReactDom.render(statelessWrapper(component), container);
	    return c;
	};

	var renderIntoDocument = function renderIntoDocument(component) {
	    var c = TestUtils.renderIntoDocument(component);
	    c = c || TestUtils.renderIntoDocument(statelessWrapper(component));
	    return c;
	};

	function statelessWrapper(component) {
	    var Wrapper = React.createClass({
	        displayName: 'Wrapper',

	        render: function render() {
	            return component;
	        }
	    });
	    return React.createElement(Wrapper, null);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;