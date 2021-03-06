import { getAnimationEnd, getStyle, setStyle, type } from 'css3support';
import classnames from 'classnames';

const animationend = getAnimationEnd();

export function toggleAnimate(elem, clsObj, callback) {
  const enter = clsObj.enter;
  const leave = clsObj.leave;
  const elemCls = elem.className.split(' ');
  
  const hasEnter = elemCls.indexOf(enter) !== -1;
  const hasLeave = elemCls.indexOf(leave) !== -1;
  
  let anicurrent = Number(elem.dataset.anicurrent || 0);
  let isEnd = Number(elem.dataset.animationend || 1);
  
  let hasSetVisibility = Number(elem.dataset.visibility || 0);
  
  if (getStyle(elem, 'visibility') == 'hidden') {
    elem.dataset.visibility = 1;
    setStyle(elem, {
      visibility: 'visible'
    });
  }
  
  if (isEnd) {
    if (!hasEnter && !hasLeave) {
      elem.classList.add(enter);
    }
    
    if (hasEnter && !hasLeave) {
      elem.classList.add(leave);
    }
    
    elem.dataset.animationend = 0;
    
    const aniend = () => {
      elem.removeEventListener(animationend, aniend);
      
      if (anicurrent == 0) {
        elem.dataset.anicurrent = 1;
      } else {
        elem.dataset.anicurrent = 0;
        elem.classList.remove(enter, leave);
        console.log(hasSetVisibility);
        
        hasSetVisibility &&
        setStyle(elem, {
          visibility: 'hidden'
        });
      }
      
      elem.dataset.animationend = 1;
      
      callback && callback();
    };
    
    elem.addEventListener(animationend, aniend, false);
  }
}

export const animate = (elem, animation, callback) => {
  let animationName, animationActiveName;
  if (type(animation) === 'object') {
    animationName = animation.name;
    animationActiveName = animation.active;
  } else {
    animationName = animation;
  }

  let isEnd = Number(elem.dataset.animationend || 1);
  
  const cls = classnames({
    [animationName]: !!animationName,
    [`${animationName}-active`]: !!animationActiveName
  });

  if (isEnd) {
    elem.classList.add(cls);
  }
  
  const aniend = () => {
    elem.removeEventListener(animationend, aniend);
    elem.classList.remove(cls);
    elem.dataset.animationend = 1;
    callback && callback();
  }

  elem.addEventListener(animationend, aniend, !1);
}

export default animate;