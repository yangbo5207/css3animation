import animate from 'css-animation';
import './style.scss';

var node = document.querySelector('.anibox');
var btn = document.querySelector('.btn');

var show = true;

btn.onclick = function() {
    if (!show) {
        node.style.visibility = 'visible';
    }
    animate(node, `fade-${show ? 'leave' : 'enter'}`, function() {
        console.log('fade-enter end.');
        node.style.visibility = show ? 'hidden' : 'visible';
        show = !show;
    });
};
