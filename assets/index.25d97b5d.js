import{k as f,A as l,b as a,a as d,z as p}from"./index.2814604b.js";function x(r,i,t){const n=f(r,null);n!==null&&(i in n||(n[i]=[]),n[i].push(t.value),l(t,(e,s)=>{const u=n[i],o=u.findIndex(c=>c===s);~o&&u.splice(o,1),u.push(e)}),a(()=>{const e=n[i],s=e.findIndex(u=>u===t.value);~s&&e.splice(s,1)}))}function I(r,i,t){const n=f(r,null);n!==null&&(i in n||(n[i]=[]),d(()=>{const e=t();!e||n[i].push(e)}),a(()=>{const e=n[i],s=t(),u=e.findIndex(o=>o===s);~u&&e.splice(u,1)}))}function j(r,i,t){if(!i)return r;const n=p(r.value);let e=null;return l(r,s=>{e!==null&&window.clearTimeout(e),s===!0?t&&!t.value?n.value=!0:e=window.setTimeout(()=>{n.value=!0},i):n.value=!1}),n}export{x as a,I as b,j as u};
