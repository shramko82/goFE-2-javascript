var DOMCreator = {};

DOMCreator.createElement = function(tag, parent, className, innerHTML){
    var elem = document.createElement(tag);
    parent.appendChild(elem);
    if (className) {
        elem.className = className;
    }
    if (innerHTML) {
        elem.innerHTML = innerHTML;
    }
    return elem;
};

DOMCreator.createCheckBox = function(parent, text){
    var div = DOMCreator.createElement('div', parent, 'checkbox');
    var label = DOMCreator.createElement('label', div);
    var input = DOMCreator.createElement('input', label);
    input.type = 'checkbox';
    DOMCreator.createElement('p', label, '', text);
};
