import animate from 'css3animation';
import './style.scss';

var node = document.querySelector('.anibox');
var btn = document.querySelector('.btn');

let show = true;

btn.onclick = function() {
    console.log(show);
    const aniName = show ? 'leave' : 'enter';
    node.style.visibility = '';
    animate(node, { name: aniName }, function() {
        node.style.visibility = show ? 'hidden' : '';
        show = !show;
    });
};
