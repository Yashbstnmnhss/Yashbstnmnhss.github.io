import{bE as S,cl as b}from"./index-1b78ee11.js";import{t as W}from"./toNumber-4c63ee10.js";var _=function(){return S.Date.now()};const h=_;var p="Expected a function",F=Math.max,N=Math.min;function O(d,t,e){var r,a,g,l,i,f,c=0,x=!1,o=!1,v=!0;if(typeof d!="function")throw new TypeError(p);t=W(t)||0,b(e)&&(x=!!e.leading,o="maxWait"in e,g=o?F(W(e.maxWait)||0,t):g,v="trailing"in e?!!e.trailing:v);function T(n){var u=r,m=a;return r=a=void 0,c=n,l=d.apply(m,u),l}function y(n){return c=n,i=setTimeout(s,t),x?T(n):l}function C(n){var u=n-f,m=n-c,R=t-u;return o?N(R,g-m):R}function k(n){var u=n-f,m=n-c;return f===void 0||u>=t||u<0||o&&m>=g}function s(){var n=h();if(k(n))return I(n);i=setTimeout(s,C(n))}function I(n){return i=void 0,v&&r?T(n):(r=a=void 0,l)}function L(){i!==void 0&&clearTimeout(i),c=0,r=f=a=i=void 0}function M(){return i===void 0?l:I(h())}function E(){var n=h(),u=k(n);if(r=arguments,a=this,f=n,u){if(i===void 0)return y(f);if(o)return clearTimeout(i),i=setTimeout(s,t),T(f)}return i===void 0&&(i=setTimeout(s,t)),l}return E.cancel=L,E.flush=M,E}var A="Expected a function";function $(d,t,e){var r=!0,a=!0;if(typeof d!="function")throw new TypeError(A);return b(e)&&(r="leading"in e?!!e.leading:r,a="trailing"in e?!!e.trailing:a),O(d,t,{leading:r,maxWait:t,trailing:a})}export{$ as t};
