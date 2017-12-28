import { getAnimationEnd } from './support';

const animationend = getAnimationEnd();

function animate(elem, clsObj, callback) {
    const enter = clsObj.enter;
    const leave = clsObj.leave;
    const elemCls = elem.className.split(' ');

    const hasEnter = elemCls.indexOf(enter) !== -1;
    const hasLeave = elemCls.indexOf(leave) !== -1;

    let isEnd = Boolean(elem.dataset.animationend || true);
    let anicurrent = Number(elem.dataset.anicurrent || 0);

    if (isEnd) {
        if (!hasEnter && !hasLeave) {
            elem.classList.add(enter);
        }

        if (hasEnter && !hasLeave) {
            elem.classList.add(leave);
        }

        elem.dataset.animationend = false;

        const aniend = () => {
            elem.removeEventListener(animationend, aniend);

            if (anicurrent == 0) {
                elem.dataset.anicurrent = 1;
            } else {
                elem.dataset.anicurrent = 0;
                elem.classList.remove(enter, leave);
            }

            elem.dataset.animationend = true;

            callback && callback();
        };

        elem.addEventListener(animationend, aniend, false);
    }
}

export default animate;
