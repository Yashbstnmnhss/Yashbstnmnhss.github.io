import{br as N,bE as T,bl as $}from"./index.b8789f58.js";var A=/\s/;function L(n){for(var e=n.length;e--&&A.test(n.charAt(e)););return e}var M=/^\s+/;function _(n){return n&&n.slice(0,L(n)+1).replace(M,"")}var W=0/0,B=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,U=/^0o[0-7]+$/i,X=parseInt;function k(n){if(typeof n=="number")return n;if(N(n))return W;if(T(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=T(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=_(n);var i=F.test(n);return i||U.test(n)?X(n.slice(2),i?2:8):B.test(n)?W:+n}var j=function(){return $.Date.now()},E=j,D="Expected a function",H=Math.max,P=Math.min;function q(n,e,i){var a,f,l,d,t,c,o=0,I=!1,s=!1,x=!0;if(typeof n!="function")throw new TypeError(D);e=k(e)||0,T(i)&&(I=!!i.leading,s="maxWait"in i,l=s?H(k(i.maxWait)||0,e):l,x="trailing"in i?!!i.trailing:x);function v(r){var u=a,m=f;return a=f=void 0,o=r,d=n.apply(m,u),d}function O(r){return o=r,t=setTimeout(g,e),I?v(r):d}function R(r){var u=r-c,m=r-o,p=e-u;return s?P(p,l-m):p}function b(r){var u=r-c,m=r-o;return c===void 0||u>=e||u<0||s&&m>=l}function g(){var r=E();if(b(r))return y(r);t=setTimeout(g,R(r))}function y(r){return t=void 0,x&&a?v(r):(a=f=void 0,d)}function S(){t!==void 0&&clearTimeout(t),o=0,a=c=f=t=void 0}function C(){return t===void 0?d:y(E())}function h(){var r=E(),u=b(r);if(a=arguments,f=this,c=r,u){if(t===void 0)return O(c);if(s)return clearTimeout(t),t=setTimeout(g,e),v(c)}return t===void 0&&(t=setTimeout(g,e)),d}return h.cancel=S,h.flush=C,h}var w="Expected a function";function G(n,e,i){var a=!0,f=!0;if(typeof n!="function")throw new TypeError(w);return T(i)&&(a="leading"in i?!!i.leading:a,f="trailing"in i?!!i.trailing:f),q(n,e,{leading:a,maxWait:e,trailing:f})}export{G as t};
