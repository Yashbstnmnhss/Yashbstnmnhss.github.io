import{as as N,aF as T,am as $}from"./index.f590f622.js";var A=/\s/;function F(n){for(var e=n.length;e--&&A.test(n.charAt(e)););return e}var L=/^\s+/;function M(n){return n&&n.slice(0,F(n)+1).replace(L,"")}var W=0/0,_=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,U=/^0o[0-7]+$/i,X=parseInt;function k(n){if(typeof n=="number")return n;if(N(n))return W;if(T(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=T(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=M(n);var i=B.test(n);return i||U.test(n)?X(n.slice(2),i?2:8):_.test(n)?W:+n}var j=function(){return $.Date.now()};const E=j;var D="Expected a function",H=Math.max,P=Math.min;function q(n,e,i){var a,f,l,d,t,c,s=0,I=!1,o=!1,x=!0;if(typeof n!="function")throw new TypeError(D);e=k(e)||0,T(i)&&(I=!!i.leading,o="maxWait"in i,l=o?H(k(i.maxWait)||0,e):l,x="trailing"in i?!!i.trailing:x);function h(r){var u=a,m=f;return a=f=void 0,s=r,d=n.apply(m,u),d}function O(r){return s=r,t=setTimeout(g,e),I?h(r):d}function R(r){var u=r-c,m=r-s,p=e-u;return o?P(p,l-m):p}function y(r){var u=r-c,m=r-s;return c===void 0||u>=e||u<0||o&&m>=l}function g(){var r=E();if(y(r))return b(r);t=setTimeout(g,R(r))}function b(r){return t=void 0,x&&a?h(r):(a=f=void 0,d)}function S(){t!==void 0&&clearTimeout(t),s=0,a=c=f=t=void 0}function C(){return t===void 0?d:b(E())}function v(){var r=E(),u=y(r);if(a=arguments,f=this,c=r,u){if(t===void 0)return O(c);if(o)return clearTimeout(t),t=setTimeout(g,e),h(c)}return t===void 0&&(t=setTimeout(g,e)),d}return v.cancel=S,v.flush=C,v}var w="Expected a function";function G(n,e,i){var a=!0,f=!0;if(typeof n!="function")throw new TypeError(w);return T(i)&&(a="leading"in i?!!i.leading:a,f="trailing"in i?!!i.trailing:f),q(n,e,{leading:a,maxWait:e,trailing:f})}export{k as a,G as t};
