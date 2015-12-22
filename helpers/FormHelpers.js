var $j = require('jquery');

module.exports = {
    fieldAndLabel: (node, name, label) =>
        node.find('.input-form_group').filter((idx, el) => $j(el).find(`span:contains(${label})`).length && $j(el).find(`[name="${name}"]`).length)
};