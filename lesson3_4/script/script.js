
window.onload = function(){
    var div = DOMCreator.createElement('div', document.body, 'header');
    DOMCreator.createElement('h3', div, '', 'Programming test');
    var content = DOMCreator.createElement('ul', document.body, 'content');
    for (var i = 1; i <= 3; i++) {
        var li1 = DOMCreator.createElement('li', content);
        DOMCreator.createElement('h4', li1, '', i+'.Question '+i);
        var ul = DOMCreator.createElement('ul', li1);
        for (var j = 1; j <= 3; j++) {
            var li2 = DOMCreator.createElement('li', ul);
            DOMCreator.createCheckBox(li2, 'Variant '+j);
        }
    }

    var button = DOMCreator.createElement('div', document.body, 'button');
    var btn = DOMCreator.createElement('button', button, 'btn btn-primary', 'Check result');
    btn.type = 'button';
};