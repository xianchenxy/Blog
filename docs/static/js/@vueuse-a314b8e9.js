import"./vue-126afe2a.js";import{g as _e,d as me,n as ae,i as Oe,r as O,u as ye,e as ge,f as we,s as oe,w as se,h as V,j as F,k as D}from"./@vue-268a4df7.js";var he=Object.defineProperty,Pe=Object.defineProperties,be=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ee=(e,t)=>{for(var r in t||(t={}))Se.call(t,r)&&W(e,r,t[r]);if(Q)for(var r of Q(t))$e.call(t,r)&&W(e,r,t[r]);return e},Ie=(e,t)=>Pe(e,be(t));function bt(e,t){var r;const n=oe();return se(()=>{n.value=e()},Ie(Ee({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),V(n)}var x;const N=typeof window<"u",je=e=>typeof e=="function",Ae=e=>typeof e=="string",ie=()=>{},Ne=N&&((x=window==null?void 0:window.navigator)==null?void 0:x.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function A(e){return typeof e=="function"?e():ye(e)}function Ce(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const ue=e=>e();function De(e=ue){const t=O(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:V(t),pause:r,resume:n,eventFilter:a}}function Fe(e){return e}function T(e){return ge()?(we(e),!0):!1}function Le(e){return typeof e=="function"?F(e):O(e)}function le(e,t=!0){_e()?me(e):t?e():ae(e)}function St(e,t,r={}){const{immediate:n=!0}=r,a=O(!1);let o=null;function u(){o&&(clearTimeout(o),o=null)}function s(){a.value=!1,u()}function f(...d){u(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...d)},A(t))}return n&&(a.value=!0,N&&f()),T(s),{isPending:V(a),start:f,stop:s}}function $t(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=Oe(e),o=O(e);function u(s){if(arguments.length)return o.value=s,o.value;{const f=A(r);return o.value=o.value===f?A(n):f,o.value}}return a?u:[o,u]}var z=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,ke=(e,t)=>{var r={};for(var n in e)Te.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&z)for(var n of z(e))t.indexOf(n)<0&&Me.call(e,n)&&(r[n]=e[n]);return r};function Re(e,t,r={}){const n=r,{eventFilter:a=ue}=n,o=ke(n,["eventFilter"]);return D(e,Ce(a,t),o)}var Ve=Object.defineProperty,Qe=Object.defineProperties,We=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,B=(e,t,r)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,xe=(e,t)=>{for(var r in t||(t={}))ce.call(t,r)&&B(e,r,t[r]);if(L)for(var r of L(t))fe.call(t,r)&&B(e,r,t[r]);return e},ze=(e,t)=>Qe(e,We(t)),Be=(e,t)=>{var r={};for(var n in e)ce.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&L)for(var n of L(e))t.indexOf(n)<0&&fe.call(e,n)&&(r[n]=e[n]);return r};function Je(e,t,r={}){const n=r,{eventFilter:a}=n,o=Be(n,["eventFilter"]),{eventFilter:u,pause:s,resume:f,isActive:d}=De(a);return{stop:Re(e,t,ze(xe({},o),{eventFilter:u})),pause:s,resume:f,isActive:d}}function j(e){var t;const r=A(e);return(t=r==null?void 0:r.$el)!=null?t:r}const h=N?window:void 0,He=N?window.document:void 0;N&&window.navigator;N&&window.location;function S(...e){let t,r,n,a;if(Ae(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=h):[t,r,n,a]=e,!t)return ie;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],u=()=>{o.forEach(v=>v()),o.length=0},s=(v,_,i,l)=>(v.addEventListener(_,i,l),()=>v.removeEventListener(_,i,l)),f=D(()=>[j(t),A(a)],([v,_])=>{u(),v&&o.push(...r.flatMap(i=>n.map(l=>s(v,i,l,_))))},{immediate:!0,flush:"post"}),d=()=>{f(),u()};return T(d),d}let J=!1;function Et(e,t,r={}){const{window:n=h,ignore:a=[],capture:o=!0,detectIframe:u=!1}=r;if(!n)return;Ne&&!J&&(J=!0,Array.from(n.document.body.children).forEach(i=>i.addEventListener("click",ie)));let s=!0;const f=i=>a.some(l=>{if(typeof l=="string")return Array.from(n.document.querySelectorAll(l)).some(p=>p===i.target||i.composedPath().includes(p));{const p=j(l);return p&&(i.target===p||i.composedPath().includes(p))}}),v=[S(n,"click",i=>{const l=j(e);if(!(!l||l===i.target||i.composedPath().includes(l))){if(i.detail===0&&(s=!f(i)),!s){s=!0;return}t(i)}},{passive:!0,capture:o}),S(n,"pointerdown",i=>{const l=j(e);l&&(s=!i.composedPath().includes(l)&&!f(i))},{passive:!0}),u&&S(n,"blur",i=>{var l;const p=j(e);((l=n.document.activeElement)==null?void 0:l.tagName)==="IFRAME"&&!(p!=null&&p.contains(n.document.activeElement))&&t(i)})].filter(Boolean);return()=>v.forEach(i=>i())}function pe(e,t=!1){const r=O(),n=()=>r.value=Boolean(e());return n(),le(n,t),r}function Ue(e,t={}){const{window:r=h}=t,n=pe(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=O(!1),u=()=>{!a||("removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s))},s=()=>{!n.value||(u(),a=r.matchMedia(Le(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",s):a.addListener(s))};return se(s),T(()=>u()),o}const k=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R="__vueuse_ssr_handlers__";k[R]=k[R]||{};const qe=k[R];function de(e,t){return qe[e]||t}function Ge(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ke=Object.defineProperty,H=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,q=(e,t)=>{for(var r in t||(t={}))Xe.call(t,r)&&U(e,r,t[r]);if(H)for(var r of H(t))Ye.call(t,r)&&U(e,r,t[r]);return e};const Ze={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},G="vueuse-storage";function et(e,t,r,n={}){var a;const{flush:o="pre",deep:u=!0,listenToStorageChanges:s=!0,writeDefaults:f=!0,mergeDefaults:d=!1,shallow:v,window:_=h,eventFilter:i,onError:l=c=>{console.error(c)}}=n,p=(v?oe:O)(t);if(!r)try{r=de("getDefaultStorage",()=>{var c;return(c=h)==null?void 0:c.localStorage})()}catch(c){l(c)}if(!r)return p;const g=A(t),C=Ge(g),P=(a=n.serializer)!=null?a:Ze[C],{pause:y,resume:b}=Je(p,()=>$(p.value),{flush:o,deep:u,eventFilter:i});return _&&s&&(S(_,"storage",w),S(_,G,M)),w(),p;function $(c){try{if(c==null)r.removeItem(e);else{const m=P.write(c),E=r.getItem(e);E!==m&&(r.setItem(e,m),_&&_.dispatchEvent(new CustomEvent(G,{detail:{key:e,oldValue:E,newValue:m,storageArea:r}})))}}catch(m){l(m)}}function I(c){const m=c?c.newValue:r.getItem(e);if(m==null)return f&&g!==null&&r.setItem(e,P.write(g)),g;if(!c&&d){const E=P.read(m);return je(d)?d(E,g):C==="object"&&!Array.isArray(E)?q(q({},g),E):E}else return typeof m!="string"?m:P.read(m)}function M(c){w(c.detail)}function w(c){if(!(c&&c.storageArea!==r)){if(c&&c.key==null){p.value=g;return}if(!(c&&c.key!==e)){y();try{p.value=I(c)}catch(m){l(m)}finally{c?ae(b):b()}}}}}function ve(e){return Ue("(prefers-color-scheme: dark)",e)}var tt=Object.defineProperty,K=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,at=(e,t)=>{for(var r in t||(t={}))rt.call(t,r)&&X(e,r,t[r]);if(K)for(var r of K(t))nt.call(t,r)&&X(e,r,t[r]);return e};function ot(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=h,storage:o,storageKey:u="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:f,emitAuto:d}=e,v=at({auto:"",light:"light",dark:"dark"},e.modes||{}),_=ve({window:a}),i=F(()=>_.value?"dark":"light"),l=f||(u==null?O(n):et(u,n,o,{window:a,listenToStorageChanges:s})),p=F({get(){return l.value==="auto"&&!d?i.value:l.value},set(y){l.value=y}}),g=de("updateHTMLAttrs",(y,b,$)=>{const I=a==null?void 0:a.document.querySelector(y);if(!!I)if(b==="class"){const M=$.split(/\s/g);Object.values(v).flatMap(w=>(w||"").split(/\s/g)).filter(Boolean).forEach(w=>{M.includes(w)?I.classList.add(w):I.classList.remove(w)})}else I.setAttribute(b,$)});function C(y){var b;const $=y==="auto"?i.value:y;g(t,r,(b=v[$])!=null?b:$)}function P(y){e.onChanged?e.onChanged(y,C):C(y)}return D(p,P,{flush:"post",immediate:!0}),d&&D(i,()=>P(p.value),{flush:"post"}),le(()=>P(p.value)),p}var st=Object.defineProperty,it=Object.defineProperties,ut=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ft=(e,t)=>{for(var r in t||(t={}))lt.call(t,r)&&Z(e,r,t[r]);if(Y)for(var r of Y(t))ct.call(t,r)&&Z(e,r,t[r]);return e},pt=(e,t)=>it(e,ut(t));function It(e={}){const{valueDark:t="dark",valueLight:r="",window:n=h}=e,a=ot(pt(ft({},e),{onChanged:(s,f)=>{var d;e.onChanged?(d=e.onChanged)==null||d.call(e,s==="dark"):f(s)},modes:{dark:t,light:r}})),o=ve({window:n});return F({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}function jt({document:e=He}={}){if(!e)return O("visible");const t=O(e.visibilityState);return S(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var ee=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,_t=(e,t)=>{var r={};for(var n in e)dt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ee)for(var n of ee(e))t.indexOf(n)<0&&vt.call(e,n)&&(r[n]=e[n]);return r};function At(e,t,r={}){const n=r,{window:a=h}=n,o=_t(n,["window"]);let u;const s=pe(()=>a&&"ResizeObserver"in a),f=()=>{u&&(u.disconnect(),u=void 0)},d=D(()=>j(e),_=>{f(),s.value&&a&&_&&(u=new ResizeObserver(t),u.observe(_,o))},{immediate:!0,flush:"post"}),v=()=>{f(),d()};return T(v),{isSupported:s,stop:v}}var te;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(te||(te={}));var mt=Object.defineProperty,re=Object.getOwnPropertySymbols,Ot=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable,ne=(e,t,r)=>t in e?mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,gt=(e,t)=>{for(var r in t||(t={}))Ot.call(t,r)&&ne(e,r,t[r]);if(re)for(var r of re(t))yt.call(t,r)&&ne(e,r,t[r]);return e};const wt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};gt({linear:Fe},wt);function Nt({window:e=h}={}){if(!e)return O(!1);const t=O(e.document.hasFocus());return S(e,"blur",()=>{t.value=!1}),S(e,"focus",()=>{t.value=!0}),t}export{At as a,j as b,St as c,jt as d,Nt as e,bt as f,It as g,$t as h,N as i,Et as o,T as t,S as u};
