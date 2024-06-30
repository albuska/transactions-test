import{r as E,p as w,g as $,R as q,j as S}from"./index-xG2KB4yp.js";import{u as B,g as N,a as J,I as R,o as M,r as W,b as V}from"./api-NSKM4WK-.js";var A=function(e){var r=e.as,o=e.errors,s=e.name,n=e.message,t=e.render,d=function(f,m){if(f==null)return{};var h,i,l={},v=Object.keys(f);for(i=0;i<v.length;i++)m.indexOf(h=v[i])>=0||(l[h]=f[h]);return l}(e,["as","errors","name","message","render"]),p=B(),a=N(o||p.formState.errors,s);if(!a)return null;var u=a.message,g=a.types,x=Object.assign({},d,{children:u||n});return E.isValidElement(r)?E.cloneElement(r,x):t?t({message:u||n,messages:g}):E.createElement(r||E.Fragment,x)};const Z=w.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  .show-password-icon {
    position: absolute;
    right: 20px;
    top: 60%;
    color: var(--grey-color);
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: var(--main-color);
    }
  }
`,G=w.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 100%;
`,K=w.h2`
  margin-top: 10px;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  color: var(--main-color);
  margin-bottom: 0;
`,Q=w.form`
  width: 500px;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  margin-top: 40px;
  padding: 10px 15px;

  @media (min-width: 768px) {
    padding: 20px 30px;
  }
`,L=w.label`
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: var(--main-color);
  margin-top: 20px;
`,D=w.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  background-color: transparent;
  padding: 0;
  padding: 15px 10px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  transition: border-color 0.3s ease;

  &:focus,
  &:hover {
    border-color: var(--accent-color);
  }
`,F=w.p`
  color: var(--error-color);
`,X=w.button`
  display: block;
  width: 30%;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  background-color: transparent;
  padding: 10px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  cursor: pointer;
  margin-top: 40px;

  &:hover {
    background-color: var(--grey-color);
  }
`;var Y={VITE_BASE_URL:"http://localhost:5000",BASE_URL:"/transactions-test",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const P=e=>{let r;const o=new Set,s=(g,x)=>{const f=typeof g=="function"?g(r):g;if(!Object.is(f,r)){const m=r;r=x??(typeof f!="object"||f===null)?f:Object.assign({},r,f),o.forEach(h=>h(r,m))}},n=()=>r,a={setState:s,getState:n,getInitialState:()=>u,subscribe:g=>(o.add(g),()=>o.delete(g)),destroy:()=>{(Y?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}},u=r=e(s,n,a);return a},ee=e=>e?P(e):P;var k={exports:{}},z={},T={exports:{}},U={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=E;function te(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var re=typeof Object.is=="function"?Object.is:te,oe=b.useState,ne=b.useEffect,se=b.useLayoutEffect,ae=b.useDebugValue;function ie(e,r){var o=r(),s=oe({inst:{value:o,getSnapshot:r}}),n=s[0].inst,t=s[1];return se(function(){n.value=o,n.getSnapshot=r,j(n)&&t({inst:n})},[e,o,r]),ne(function(){return j(n)&&t({inst:n}),e(function(){j(n)&&t({inst:n})})},[e]),ae(o),o}function j(e){var r=e.getSnapshot;e=e.value;try{var o=r();return!re(e,o)}catch{return!0}}function le(e,r){return r()}var ce=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?le:ie;U.useSyncExternalStore=b.useSyncExternalStore!==void 0?b.useSyncExternalStore:ce;T.exports=U;var ue=T.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=E,de=ue;function me(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var pe=typeof Object.is=="function"?Object.is:me,he=de.useSyncExternalStore,fe=_.useRef,ve=_.useEffect,ge=_.useMemo,Se=_.useDebugValue;z.useSyncExternalStoreWithSelector=function(e,r,o,s,n){var t=fe(null);if(t.current===null){var d={hasValue:!1,value:null};t.current=d}else d=t.current;t=ge(function(){function a(m){if(!u){if(u=!0,g=m,m=s(m),n!==void 0&&d.hasValue){var h=d.value;if(n(h,m))return x=h}return x=m}if(h=x,pe(g,m))return h;var i=s(m);return n!==void 0&&n(h,i)?h:(g=m,x=i)}var u=!1,g,x,f=o===void 0?null:o;return[function(){return a(r())},f===null?void 0:function(){return a(f())}]},[r,o,s,n]);var p=he(e,t[0],t[1]);return ve(function(){d.hasValue=!0,d.value=p},[p]),Se(p),p};k.exports=z;var xe=k.exports;const ye=$(xe);var H={VITE_BASE_URL:"http://localhost:5000",BASE_URL:"/transactions-test",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:we}=q,{useSyncExternalStoreWithSelector:Ee}=ye;let O=!1;const be=e=>e;function Ie(e,r=be,o){(H?"production":void 0)!=="production"&&o&&!O&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),O=!0);const s=Ee(e.subscribe,e.getState,e.getServerState||e.getInitialState,r,o);return we(s),s}const C=e=>{(H?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const r=typeof e=="function"?ee(e):e,o=(s,n)=>Ie(r,s,n);return Object.assign(o,r),o},_e=e=>e?C(e):C;var je={VITE_BASE_URL:"http://localhost:5000",BASE_URL:"/transactions-test",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function Re(e,r){let o;try{o=e()}catch{return}return{getItem:n=>{var t;const d=a=>a===null?null:JSON.parse(a,void 0),p=(t=o.getItem(n))!=null?t:null;return p instanceof Promise?p.then(d):d(p)},setItem:(n,t)=>o.setItem(n,JSON.stringify(t,void 0)),removeItem:n=>o.removeItem(n)}}const I=e=>r=>{try{const o=e(r);return o instanceof Promise?o:{then(s){return I(s)(o)},catch(s){return this}}}catch(o){return{then(s){return this},catch(s){return I(s)(o)}}}},Ae=(e,r)=>(o,s,n)=>{let t={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:l=>l,version:0,merge:(l,v)=>({...v,...l}),...r},d=!1;const p=new Set,a=new Set;let u;try{u=t.getStorage()}catch{}if(!u)return e((...l)=>{console.warn(`[zustand persist middleware] Unable to update item '${t.name}', the given storage is currently unavailable.`),o(...l)},s,n);const g=I(t.serialize),x=()=>{const l=t.partialize({...s()});let v;const c=g({state:l,version:t.version}).then(y=>u.setItem(t.name,y)).catch(y=>{v=y});if(v)throw v;return c},f=n.setState;n.setState=(l,v)=>{f(l,v),x()};const m=e((...l)=>{o(...l),x()},s,n);let h;const i=()=>{var l;if(!u)return;d=!1,p.forEach(c=>c(s()));const v=((l=t.onRehydrateStorage)==null?void 0:l.call(t,s()))||void 0;return I(u.getItem.bind(u))(t.name).then(c=>{if(c)return t.deserialize(c)}).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==t.version){if(t.migrate)return t.migrate(c.state,c.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return c.state}).then(c=>{var y;return h=t.merge(c,(y=s())!=null?y:m),o(h,!0),x()}).then(()=>{v==null||v(h,void 0),d=!0,a.forEach(c=>c(h))}).catch(c=>{v==null||v(void 0,c)})};return n.persist={setOptions:l=>{t={...t,...l},l.getStorage&&(u=l.getStorage())},clearStorage:()=>{u==null||u.removeItem(t.name)},getOptions:()=>t,rehydrate:()=>i(),hasHydrated:()=>d,onHydrate:l=>(p.add(l),()=>{p.delete(l)}),onFinishHydration:l=>(a.add(l),()=>{a.delete(l)})},i(),h||m},Le=(e,r)=>(o,s,n)=>{let t={storage:Re(()=>localStorage),partialize:i=>i,version:0,merge:(i,l)=>({...l,...i}),...r},d=!1;const p=new Set,a=new Set;let u=t.storage;if(!u)return e((...i)=>{console.warn(`[zustand persist middleware] Unable to update item '${t.name}', the given storage is currently unavailable.`),o(...i)},s,n);const g=()=>{const i=t.partialize({...s()});return u.setItem(t.name,{state:i,version:t.version})},x=n.setState;n.setState=(i,l)=>{x(i,l),g()};const f=e((...i)=>{o(...i),g()},s,n);n.getInitialState=()=>f;let m;const h=()=>{var i,l;if(!u)return;d=!1,p.forEach(c=>{var y;return c((y=s())!=null?y:f)});const v=((l=t.onRehydrateStorage)==null?void 0:l.call(t,(i=s())!=null?i:f))||void 0;return I(u.getItem.bind(u))(t.name).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==t.version){if(t.migrate)return t.migrate(c.state,c.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return c.state}).then(c=>{var y;return m=t.merge(c,(y=s())!=null?y:f),o(m,!0),g()}).then(()=>{v==null||v(m,void 0),m=s(),d=!0,a.forEach(c=>c(m))}).catch(c=>{v==null||v(void 0,c)})};return n.persist={setOptions:i=>{t={...t,...i},i.storage&&(u=i.storage)},clearStorage:()=>{u==null||u.removeItem(t.name)},getOptions:()=>t,rehydrate:()=>h(),hasHydrated:()=>d,onHydrate:i=>(p.add(i),()=>{p.delete(i)}),onFinishHydration:i=>(a.add(i),()=>{a.delete(i)})},t.skipHydration||h(),m||f},De=(e,r)=>"getStorage"in r||"serialize"in r||"deserialize"in r?((je?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Ae(e,r)):Le(e,r),Fe=De,Pe=_e(Fe(e=>({isLoggedIn:!1,registerZustandUser:()=>{const r=localStorage.getItem("accessToken");console.log(r,"localStorage"),r&&e({isLoggedIn:!0})},logout:()=>{e({isLoggedIn:!1}),localStorage.clear()}}),{name:"userLoginStatus"})),Oe=()=>{const[e,r]=E.useState(!1),{registerZustandUser:o}=Pe(),{register:s,handleSubmit:n,formState:{errors:t}}=J({resolver:M(V),defaultValues:{email:"",password:""}}),d=()=>{r(a=>!a)},p=async a=>{console.log(a,"data"),await W(a),o()};return S.jsxs(Z,{children:[S.jsxs(G,{children:[S.jsx(R,{name:"icon-auth",width:40,height:40}),S.jsx(K,{children:"Sign in to your account"})]}),S.jsxs(Q,{onSubmit:n(p),children:[S.jsxs(L,{children:["Email address",S.jsx(D,{type:"email",autoComplete:"email",...s("email",{required:{value:!0,message:"Email is required"},validate:{isValidEmail:a=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a)||"Email is not valid"}})}),S.jsx(A,{errors:t,name:"email",render:({message:a})=>S.jsx(F,{children:a})})]}),S.jsxs(L,{children:["Password",S.jsx(D,{type:e?"text":"password",autoComplete:"current-password",...s("password",{required:{value:!0,message:"Password is required"},validate:{minLength:a=>a.length>=8||"Password should has more than 8 characters",isCapitalLetter:a=>/[A-Z]/.test(a)||"Password should has at least one capital letter",isLowerCaseLetter:a=>/[a-z]/.test(a)||"Password should has at least one lower case letter",isContainNumber:a=>/\d/.test(a)||"Password should has at least one number"}})}),S.jsx(R,{name:e?"icon-eye-open":"icon-eye-close",width:30,height:20,onClick:d,className:"show-password-icon"}),S.jsx(A,{errors:t,name:"password",render:({message:a})=>S.jsx(F,{children:a})})]}),S.jsx(X,{type:"submit",children:"Sign in"})]})]})},ze=()=>S.jsx(S.Fragment,{children:S.jsx(Oe,{})});export{ze as default};
