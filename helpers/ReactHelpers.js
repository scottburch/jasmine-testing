var ReactDom = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils.js');
var $j = require('jquery');
var _ = require('lodash');

var nodes = [];
var $cWin;
window.$j = $j;

var toggleContentIframe = () => {
    var iframe = $j('#component-iframe');
    iframe.is(':visible') ? iframe.hide() : iframe.show();
};

$j('body').prepend('<iframe id="component-iframe" style="width: 100%; height: 300px; display: none"></iframe>');
var contentButton = $j('<button style="position: fixed; right: 200px; top: 0">Toggle content</button>').click(toggleContentIframe);
$j('body').prepend(contentButton);



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
    click: n => ReactHelpers.Simulate.click($j(n).get(0)),
    change: (n, v) => ReactHelpers.Simulate.change($j(n).get(0), v !== undefined ? {target: {value: v, checked: v}} : undefined),
    keyUp: (n, keyCode) => ReactHelpers.Simulate.keyUp($j(n).get(0), {keyCode: keyCode}),
    keyDown: (n, keyCode) => ReactHelpers.Simulate.keyDown($j(n).get(0), {keyCode: keyCode}),
    keyPress: (n, keyCode) => ReactHelpers.Simulate.keyPress($j(n).get(0), {keyCode: keyCode}),
    mouseDown: (n) => ReactHelpers.Simulate.mouseDown($j(n).get(0), {}),
    mouseUp: (n) => ReactHelpers.Simulate.mouseUp($j(n).get(0), {}),
    mouseOver: (n) => ReactHelpers.Simulate.mouseOver($j(n).get(0), {}),
    mouseOut: (n) => ReactHelpers.Simulate.mouseOut($j(n).get(0), {}),
    fillForm: (n, values) => _.each(values, (value, name) => ReactHelpers.change($j(n).find(`[name="${name}"]`), value))
};

beforeEach(() => {
    unmountRenderedComponents();
    iframeExists() && setupIframe();

    function setupIframe() {
        $cWin = $j($j('#component-iframe').get(0).contentDocument);
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

    // copy over the included styling from document head
    $j('head').find('link[href*=blob]').each((idx, link) =>
        $cWin.find('body').append(link));

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





