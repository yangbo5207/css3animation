import './style.scss';
import animate from 'css3animation';

var node = document.querySelector('.anibox');
var btn = document.querySelector('.btn');

btn.onclick = function() {
    animate(node, { enter: 'enter', leave: 'leave' }, function() {
        console.log('animation end');
    });
};
