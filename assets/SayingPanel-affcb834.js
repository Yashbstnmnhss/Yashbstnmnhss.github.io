import{a as m,r as f,bU as p,ah as c,D as s,w as n,x as o,y as t,E as u,G as _,H as l,Z as y}from"./index-fe2ea4cb.js";import{N as k,a as d}from"./CollapseItem-082aecbd.js";import{N as v}from"./Empty-a09f9183.js";import{N as x}from"./blockquote-11e73311.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const N={key:1,class:"keep-space"},S=m({__name:"SayingPanel",props:{author:{},target:{}},setup(g){const a=g,e=f(p(a.author,a.target)),r=()=>e.value=p(a.author,a.target);return c(()=>a.author,()=>r()),c(()=>a.target,()=>r()),(i,w)=>e.value&&e.value.text?(s(),n(t(x),{key:0},{default:o(()=>[e.value.translation?(s(),n(t(k),{key:0,"default-expanded-names":"1"},{default:o(()=>[u(t(d),{class:"keep-space",title:i.$texta.get(["views","jokes","saying-panel","original-text"]),name:"1"},{default:o(()=>[_(l(e.value.text),1)]),_:1},8,["title"]),u(t(d),{class:"keep-space",title:i.$texta.get(["views","jokes","saying-panel","translated-text"])},{default:o(()=>[_(l(e.value.translation),1)]),_:1},8,["title"])]),_:1})):(s(),y("div",N,l(e.value.text),1))]),_:1})):(s(),n(t(v),{key:1}))}});const D=h(S,[["__scopeId","data-v-217df9a1"]]);export{D as S};
