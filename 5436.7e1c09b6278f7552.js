"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5436],{15436:(W,m,E)=>{E.r(m),E.d(m,{startTapClick:()=>k});var u=E(20690);const k=o=>{let e,p,i,s=10*-h,r=0;const _=o.getBoolean("animated",!0)&&o.getBoolean("rippleEffect",!0),f=new WeakMap,L=t=>{s=(0,u.u)(t),R(t)},A=()=>{i&&clearTimeout(i),i=void 0,e&&(S(!1),e=void 0)},D=t=>{e||w(M(t),t)},R=t=>{w(void 0,t)},w=(t,n)=>{if(t&&t===e)return;i&&clearTimeout(i),i=void 0;const{x:d,y:a}=(0,u.p)(n);if(e){if(f.has(e))throw new Error("internal error");e.classList.contains(l)||C(e,d,a),S(!0)}if(t){const g=f.get(t);g&&(clearTimeout(g),f.delete(t)),t.classList.remove(l);const I=()=>{C(t,d,a),i=void 0};v(t)?I():i=setTimeout(I,U)}e=t},C=(t,n,d)=>{if(r=Date.now(),t.classList.add(l),!_)return;const a=P(t);null!==a&&(b(),p=a.addRipple(n,d))},b=()=>{void 0!==p&&(p.then(t=>t()),p=void 0)},S=t=>{b();const n=e;if(!n)return;const d=T-Date.now()+r;if(t&&d>0&&!v(n)){const a=setTimeout(()=>{n.classList.remove(l),f.delete(n)},T);f.set(n,a)}else n.classList.remove(l)},c=document;c.addEventListener("ionGestureCaptured",A),c.addEventListener("touchstart",t=>{s=(0,u.u)(t),D(t)},!0),c.addEventListener("touchcancel",L,!0),c.addEventListener("touchend",L,!0),c.addEventListener("pointercancel",A,!0),c.addEventListener("mousedown",t=>{if(2===t.button)return;const n=(0,u.u)(t)-h;s<n&&D(t)},!0),c.addEventListener("mouseup",t=>{const n=(0,u.u)(t)-h;s<n&&R(t)},!0)},M=o=>{if(void 0===o.composedPath)return o.target.closest(".ion-activatable");{const s=o.composedPath();for(let r=0;r<s.length-2;r++){const e=s[r];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},v=o=>o.classList.contains("ion-activatable-instant"),P=o=>{if(o.shadowRoot){const s=o.shadowRoot.querySelector("ion-ripple-effect");if(s)return s}return o.querySelector("ion-ripple-effect")},l="ion-activated",U=200,T=200,h=2500}}]);