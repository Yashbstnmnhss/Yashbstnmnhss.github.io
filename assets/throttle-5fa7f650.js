import{b0 as S,b1 as W}from"./index-8198a965.js";import{t as R}from"./toNumber-6c5cbec1.js";var _=function(){return S.Date.now()};const x=_;var p="Expected a function",F=Math.max,N=Math.min;function O(d,t,e){var r,a,g,l,i,f,o=0,E=!1,c=!1,v=!0;if(typeof d!="function")throw new TypeError(p);t=R(t)||0,W(e)&&(E=!!e.leading,c="maxWait"in e,g=c?F(R(e.maxWait)||0,t):g,v="trailing"in e?!!e.trailing:v);function T(n){var u=r,m=a;return r=a=void 0,o=n,l=d.apply(m,u),l}function y(n){return o=n,i=setTimeout(s,t),E?T(n):l}function C(n){var u=n-f,m=n-o,I=t-u;return c?N(I,g-m):I}function b(n){var u=n-f,m=n-o;return f===void 0||u>=t||u<0||c&&m>=g}function s(){var n=x();if(b(n))return k(n);i=setTimeout(s,C(n))}function k(n){return i=void 0,v&&r?T(n):(r=a=void 0,l)}function L(){i!==void 0&&clearTimeout(i),o=0,r=f=a=i=void 0}function M(){return i===void 0?l:k(x())}function h(){var n=x(),u=b(n);if(r=arguments,a=this,f=n,u){if(i===void 0)return y(f);if(c)return clearTimeout(i),i=setTimeout(s,t),T(f)}return i===void 0&&(i=setTimeout(s,t)),l}return h.cancel=L,h.flush=M,h}var A="Expected a function";function $(d,t,e){var r=!0,a=!0;if(typeof d!="function")throw new TypeError(A);return W(e)&&(r="leading"in e?!!e.leading:r,a="trailing"in e?!!e.trailing:a),O(d,t,{leading:r,maxWait:t,trailing:a})}export{$ as t};
