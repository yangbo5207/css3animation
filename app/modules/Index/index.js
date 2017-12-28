import animate from 'utils/css3animation';
// import animate from 'css-animation';
import './style.scss';

var node = document.querySelector('.anibox');
var btn = document.querySelector('.btn');

var show = true;

var i = 0;

btn.onclick = function() {
    animate(node, { enter: 'flyTopIn', leave: 'flyTopOut' }, function() {
        console.log('hahahah' + i++);
    });
};

const test = {
    enter: 'enter',
    out: 'outer'
};
