global.React = global.React || require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils.js');
var $j = require('jquery');
var _ = require('lodash');

global.$j = $j;

var nodes = [];

$j('body').prepend('<iframe id="component-iframe" style="width: 100%; height: 300px"></iframe>');

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
    nodes.forEach(n => {
        var container = $j(n).parent().get(0);
        container && ReactDom.unmountComponentAtNode(container);
    });
    nodes = [];
});

var iframeExists = () => {
    return !!$j('#component-iframe').length;
};

var renderInIframe = component => {
    global.$cWin = $j($j('#component-iframe').get(0).contentDocument);
    $cWin.find('#component-container').length || $cWin.find('body').html('<div id="component-container"></div>');
    var c = ReactDom.render(component, $cWin.find('#component-container').get(0));
    c = c || ReactDom.render(statelessWrapper(component), $cWin.find('#component-container').get(0));
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
