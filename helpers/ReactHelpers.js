global.React = global.React || require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils.js');
var $j = require('jquery');
var _ = require('lodash');

global.$j = $j;
global.React = global.React || require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils.js');
var $j = require('jquery');
var _ = require('lodash');
var M = require('simple-monads');

global.$j = $j;

var nodes = [];

global.toggleContentIframe = () => {
    var iframe = $j('#component-iframe');
    iframe.is(':visible') ? iframe.hide() : iframe.show();
};

$j('body').prepend('<iframe id="component-iframe" style="width: 100%; height: 300px; display: none"></iframe>');
$j('body').prepend('<button style="position: fixed; right: 200px; top: 0" onclick="toggleContentIframe()">Toggle content</button>');

var ReactHelpers = module.exports = {
    render: (component) => {
        var c = iframeExists() ? renderInIframe(component) : renderIntoDocument(component);
        var n = ReactDom.findDOMNode(c);
        nodes.push(n);
        var $n = $j(n);
        $n.component = c;
        return $n;
    },
    Simulate: TestUtils.Simulate,
    click: n => ReactHelpers.Simulate.click(n.get ? n.get(0) : n),
    change: (n, v) => ReactHelpers.Simulate.change(n.get ? n.get(0) : n, {target: {value: v, checked: v}}),
    fillForm: (n, values) => _.each(values, (value, name) => ReactHelpers.change(n.find(`[name="${name}"]`), value))
};

beforeEach(() => {
    unmountRenderedComponents();
    iframeExists() && setupIframe();

    function setupIframe() {
        global.$cWin = $j($j('#component-iframe').get(0).contentDocument);
        $cWin.find('body').html('');
    }

    function unmountRenderedComponents() {
        nodes.forEach(n => {
            var container = $j(n).parent().get(0);
            container && ReactDom.unmountComponentAtNode(container);
        });
        nodes = [];
    }
});

var iframeExists = () => {
    return !!$j('#component-iframe').length;
};

var renderInIframe = component => {
    var containerId = `container-${_.uniqueId()}`;
    $cWin.find('body').append(`<div id="${containerId}"></div>`);
    var container = $cWin.find(`#${containerId}`).get(0);
    var c = ReactDom.render(component, container);
    c = c || ReactDom.render(statelessWrapper(component), container);
    return c;
};

var renderIntoDocument = component => {
    var c = TestUtils.renderIntoDocument(component);
    c = c || TestUtils.renderIntoDocument(statelessWrapper(component));
    return c;
};




function statelessWrapper(component) {
    var Wrapper = React.createClass({
        render: () => component
    });
    return <Wrapper/>
}



