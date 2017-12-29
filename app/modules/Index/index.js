import animate from 'css3animation';
import './style.scss';

var node = document.querySelector('.anibox');
var btn = document.querySelector('.btn');

btn.onclick = function() {
    animate(node, { enter: 'flyTopIn', leave: 'flyTopOut' }, function() {
        console.log('animation end');
    });
};
