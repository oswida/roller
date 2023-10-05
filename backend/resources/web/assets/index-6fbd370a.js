import{$ as hr,a as so,g as Rl,b as Qc,d as Be,e as eu,f as ci,c as _,m as Ze,D as tu,h as Ba,u as Ua,j as Mn,k as Ga,l as gi,s as Xt,n as be,P as fr,p as $t,q as Dl,r as qs,E as Ll,v as iu,w as Sn,x as Se,y as Ot,o as En,z as ti,A as Bt,B as Pl,t as Ue,F as kl,C as Il,G as ru,H as Fl,I as zl,J as Nl,K as nu,L as su,M as Ol,N as au,O as bt,Q as ou,R as lu,U as wt,V as Mt,W as cu,X as uu,Y as Je,Z as hu,i as ge,_ as du,a0 as pu,a1 as mu,a2 as fu,a3 as gu,a4 as vu,a5 as _u,a6 as xu,a7 as yu,a8 as bu,a9 as wu,aa as Pe,ab as me,ac as Yr,ad as Mu,ae as Su,af as Eu,ag as Tu,ah as Cu,ai as nt,aj as ui,ak as di,al as Fs,am as Va,an as dr,ao as gr,ap as Tn,aq as Me,ar as Au,as as In,at as js,au as Fn,av as Ms,aw as Ha,ax as fe,ay as Hr,az as Ss,aA as Wr,aB as Wa,aC as Bl,aD as sr,aE as Ru,aF as _s,aG as xs,aH as Du,aI as ys,aJ as qe,aK as rt,aL as zs,aM as Lu,aN as Pu,aO as qa,aP as Ul,aQ as Gl,aR as Vl,aS as ji,aT as $i,aU as Xi,aV as vn,aW as ku,aX as ao,aY as oo,aZ as Iu,a_ as Hl,a$ as Wl,b0 as ja,b1 as $s,b2 as lo,b3 as Fu,b4 as ql,b5 as Es,b6 as jl,b7 as co,b8 as Xs,b9 as zu,ba as Tt,bb as Nu,bc as $l,bd as Wi,be as Ou,bf as Bu,bg as Uu,bh as $a,bi as Gu,bj as zn,bk as tn,bl as uo,bm as Vu,bn as Nn,bo as Hu,bp as Wu,bq as Xl,br as qu,bs as ju,bt as Ts,bu as Yl,bv as Ur,bw as On,bx as rn,by as Zl,bz as $u,bA as Xu,bB as Yu,bC as Zu,bD as Jl,bE as Di,bF as Kl,bG as Cs,bH as As,bI as ho,bJ as qi,bK as Ju,bL as Ku,bM as Qu,bN as eh,bO as th,bP as ih,bQ as rh,bR as Ql,bS as Ft,bT as nh,bU as sh,bV as nn,bW as ah,bX as ec,bY as oh,bZ as tc,b_ as lh,b$ as ch,c0 as uh,c1 as hh,c2 as dh,c3 as ph,c4 as mh,c5 as Ys,c6 as fh,c7 as po,c8 as gh,c9 as vh,ca as _h,cb as xh,cc as mo,cd as yh,ce as bh,cf as wh,cg as Mh,ch as ic,ci as Sh,cj as Eh,ck as Th,cl as Zs,cm as Ch}from"./index-f0c46e6f.js";const Rs=Symbol("store-raw"),_n=Symbol("store-node");function rc(s){let e=s[hr];if(!e&&(Object.defineProperty(s,hr,{value:e=new Proxy(s,Dh)}),!Array.isArray(s))){const t=Object.keys(s),i=Object.getOwnPropertyDescriptors(s);for(let r=0,n=t.length;r<n;r++){const o=t[r];i[o].get&&Object.defineProperty(s,o,{enumerable:i[o].enumerable,get:i[o].get.bind(e)})}}return e}function qr(s){let e;return s!=null&&typeof s=="object"&&(s[hr]||!(e=Object.getPrototypeOf(s))||e===Object.prototype||Array.isArray(s))}function jr(s,e=new Set){let t,i,r,n;if(t=s!=null&&s[Rs])return t;if(!qr(s)||e.has(s))return s;if(Array.isArray(s)){Object.isFrozen(s)?s=s.slice(0):e.add(s);for(let o=0,a=s.length;o<a;o++)r=s[o],(i=jr(r,e))!==r&&(s[o]=i)}else{Object.isFrozen(s)?s=Object.assign({},s):e.add(s);const o=Object.keys(s),a=Object.getOwnPropertyDescriptors(s);for(let l=0,c=o.length;l<c;l++)n=o[l],!a[n].get&&(r=s[n],(i=jr(r,e))!==r&&(s[n]=i))}return s}function Xa(s){let e=s[_n];return e||Object.defineProperty(s,_n,{value:e=Object.create(null)}),e}function Fa(s,e,t){return s[e]||(s[e]=sc(t))}function Ah(s,e){const t=Reflect.getOwnPropertyDescriptor(s,e);return!t||t.get||!t.configurable||e===hr||e===_n||(delete t.value,delete t.writable,t.get=()=>s[hr][e]),t}function nc(s){if(Rl()){const e=Xa(s);(e._||(e._=sc()))()}}function Rh(s){return nc(s),Reflect.ownKeys(s)}function sc(s){const[e,t]=Be(s,{equals:!1,internal:!0});return e.$=t,e}const Dh={get(s,e,t){if(e===Rs)return s;if(e===hr)return t;if(e===so)return nc(s),t;const i=Xa(s),r=i[e];let n=r?r():s[e];if(e===_n||e==="__proto__")return n;if(!r){const o=Object.getOwnPropertyDescriptor(s,e);Rl()&&(typeof n!="function"||s.hasOwnProperty(e))&&!(o&&o.get)&&(n=Fa(i,e,n)())}return qr(n)?rc(n):n},has(s,e){return e===Rs||e===hr||e===so||e===_n||e==="__proto__"?!0:(this.get(s,e,s),e in s)},set(){return!0},deleteProperty(){return!0},ownKeys:Rh,getOwnPropertyDescriptor:Ah};function $r(s,e,t,i=!1){if(!i&&s[e]===t)return;const r=s[e],n=s.length;t===void 0?delete s[e]:s[e]=t;let o=Xa(s),a;if((a=Fa(o,e,r))&&a.$(()=>t),Array.isArray(s)&&s.length!==n){for(let l=s.length;l<n;l++)(a=o[l])&&a.$();(a=Fa(o,"length",n))&&a.$(s.length)}(a=o._)&&a.$()}function ac(s,e){const t=Object.keys(e);for(let i=0;i<t.length;i+=1){const r=t[i];$r(s,r,e[r])}}function Lh(s,e){if(typeof e=="function"&&(e=e(s)),e=jr(e),Array.isArray(e)){if(s===e)return;let t=0,i=e.length;for(;t<i;t++){const r=e[t];s[t]!==r&&$r(s,t,r)}$r(s,"length",i)}else ac(s,e)}function pn(s,e,t=[]){let i,r=s;if(e.length>1){i=e.shift();const o=typeof i,a=Array.isArray(s);if(Array.isArray(i)){for(let l=0;l<i.length;l++)pn(s,[i[l]].concat(e),t);return}else if(a&&o==="function"){for(let l=0;l<s.length;l++)i(s[l],l)&&pn(s,[l].concat(e),t);return}else if(a&&o==="object"){const{from:l=0,to:c=s.length-1,by:u=1}=i;for(let d=l;d<=c;d+=u)pn(s,[d].concat(e),t);return}else if(e.length>1){pn(s[i],e,[i].concat(t));return}r=s[i],t=[i].concat(t)}let n=e[0];typeof n=="function"&&(n=n(r,t),n===r)||i===void 0&&n==null||(n=jr(n),i===void 0||qr(r)&&qr(n)&&!Array.isArray(n)?ac(r,n):$r(s,i,n))}function Ph(...[s,e]){const t=jr(s||{}),i=Array.isArray(t),r=rc(t);function n(...o){Qc(()=>{i&&o.length===1?Lh(t,o[0]):pn(t,o)})}return[r,n]}const Ds=new WeakMap,oc={get(s,e){if(e===Rs)return s;const t=s[e];let i;return qr(t)?Ds.get(t)||(Ds.set(t,i=new Proxy(t,oc)),i):t},set(s,e,t){return $r(s,e,jr(t)),!0},deleteProperty(s,e){return $r(s,e,void 0,!0),!0}};function Bn(s){return e=>{if(qr(e)){let t;(t=Ds.get(e))||Ds.set(e,t=new Proxy(e,oc)),s(t)}return e}}/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/a13802d8be6f83af1450e56f7a88527b10d9cadf/packages/@react-stately/toggle/src/useToggleState.ts
 */function kh(s={}){const[e,t]=eu({value:()=>ci(s.isSelected),defaultValue:()=>!!ci(s.defaultIsSelected),onChange:n=>s.onSelectedChange?.(n)});return{isSelected:e,setIsSelected:n=>{!ci(s.isReadOnly)&&!ci(s.isDisabled)&&t(n)},toggle:()=>{!ci(s.isReadOnly)&&!ci(s.isDisabled)&&t(!e())}}}function Ih(s){return _(tu,Ze({role:"alertdialog"},s))}const lc=Ba();function cc(){const s=Ua(lc);if(s===void 0)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return s}const uc=Ba();function Ns(){const s=Ua(uc);if(s===void 0)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return s}function Fh(s){const e=Mn(),t=cc(),i=`${e.generateId("item")}-${Ga()}`;s=gi({id:i},s);const[r,n]=Xt(s,["value","disabled","onPointerDown"]),[o,a]=Be(),[l,c]=Be(),[u,d]=Be(),[h,f]=Be(),[g,p]=Be(!1),m=be(()=>t.isSelectedValue(r.value)),v=be(()=>r.disabled||e.isDisabled()||!1),x=S=>{$t(S,r.onPointerDown),g()&&S.preventDefault()},b=be(()=>({...e.dataset(),"data-disabled":v()?"":void 0,"data-checked":m()?"":void 0})),y={value:()=>r.value,dataset:b,isSelected:m,isDisabled:v,inputId:o,labelId:l,descriptionId:u,inputRef:h,select:()=>t.setSelectedValue(r.value),generateId:Dl(()=>n.id),registerInput:qs(a),registerLabel:qs(c),registerDescription:qs(d),setIsFocused:p,setInputRef:f};return _(uc.Provider,{value:y,get children(){return _(fr,Ze({as:"div",role:"group",onPointerDown:x},b,n))}})}function zh(s){const e=Ns();s=gi({id:e.generateId("control")},s);const[t,i]=Xt(s,["onClick","onKeyDown"]);return _(fr,Ze({as:"div",onClick:o=>{$t(o,t.onClick),e.select(),e.inputRef()?.focus()},onKeyDown:o=>{$t(o,t.onKeyDown),o.key===Ll.Space&&(e.select(),e.inputRef()?.focus())}},()=>e.dataset(),i))}function Nh(s){const e=Ns();s=gi({id:e.generateId("indicator")},s);const[t,i]=Xt(s,["ref","forceMount"]),r=iu(()=>t.forceMount||e.isSelected());return _(Se,{get when(){return r.isPresent()},get children(){return _(fr,Ze({as:"div",ref(n){const o=Sn(r.setRef,t.ref);typeof o=="function"&&o(n)}},()=>e.dataset(),i))}})}const Oh=Ue('<input type="radio">');function Bh(s){const e=Mn(),t=cc(),i=Ns();s=gi({id:i.generateId("input")},s);const[r,n]=Xt(s,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),o=()=>[r["aria-labelledby"],i.labelId(),r["aria-labelledby"]!=null&&n["aria-label"]!=null?n.id:void 0].filter(Boolean).join(" ")||void 0,a=()=>[r["aria-describedby"],i.descriptionId(),t.ariaDescribedBy()].filter(Boolean).join(" ")||void 0,l=d=>{$t(d,r.onChange),d.stopPropagation(),t.setSelectedValue(i.value());const h=d.target;h.checked=i.isSelected()},c=d=>{$t(d,r.onFocus),i.setIsFocused(!0)},u=d=>{$t(d,r.onBlur),i.setIsFocused(!1)};return Ot(()=>En(i.registerInput(n.id))),(()=>{const d=Oh();d.addEventListener("blur",u),d.addEventListener("focus",c),d.addEventListener("change",l);const h=Sn(i.setInputRef,r.ref);return typeof h=="function"&&ti(h,d),Bt(d,Ze({get name(){return e.name()},get value(){return i.value()},get checked(){return i.isSelected()},get required(){return e.isRequired()},get disabled(){return i.isDisabled()},get readonly(){return e.isReadOnly()},get style(){return{...Pl,...r.style}},get"aria-labelledby"(){return o()},get"aria-describedby"(){return a()}},()=>i.dataset(),n),!1,!1),d})()}const Uh=Ue("<label>");function Gh(s){const e=Ns();return s=gi({id:e.generateId("label")},s),Ot(()=>En(e.registerLabel(s.id))),(()=>{const t=Uh();return Bt(t,Ze({get for(){return e.inputId()}},()=>e.dataset(),s),!1,!1),t})()}function Vh(s){return _(kl,Ze({as:"span"},s))}function Hh(s){let e;const t=`radiogroup-${Ga()}`;s=gi({id:t,orientation:"vertical"},s);const[i,r,n]=Xt(s,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],Il),[o,a]=ru({value:()=>i.value,defaultValue:()=>i.defaultValue,onChange:f=>i.onChange?.(f)}),{formControlContext:l}=Fl(r);zl(()=>e,()=>a(i.defaultValue??""));const c=()=>l.getAriaLabelledBy(ci(r.id),n["aria-label"],i["aria-labelledby"]),u=()=>l.getAriaDescribedBy(i["aria-describedby"]),d=f=>f===o(),h={ariaDescribedBy:u,isSelectedValue:d,setSelectedValue:f=>{l.isReadOnly()||l.isDisabled()||(a(f),e?.querySelectorAll("[type='radio']").forEach(g=>{const p=g;p.checked=d(p.value)}))}};return _(Nl.Provider,{value:l,get children(){return _(lc.Provider,{value:h,get children(){return _(fr,Ze({as:"div",ref(f){const g=Sn(p=>e=p,i.ref);typeof g=="function"&&g(f)},role:"radiogroup",get id(){return ci(r.id)},get"aria-invalid"(){return l.validationState()==="invalid"||void 0},get"aria-required"(){return l.isRequired()||void 0},get"aria-disabled"(){return l.isDisabled()||void 0},get"aria-readonly"(){return l.isReadOnly()||void 0},get"aria-orientation"(){return i.orientation},get"aria-labelledby"(){return c()},get"aria-describedby"(){return u()}},()=>l.dataset(),n))}})}})}const hc=Ba();function Os(){const s=Ua(hc);if(s===void 0)throw new Error("[kobalte]: `useSwitchContext` must be used within a `Switch` component");return s}function Wh(s){const e=Mn(),t=Os();s=gi({id:t.generateId("control")},s);const[i,r]=Xt(s,["onClick","onKeyDown"]);return _(fr,Ze({as:"div",onClick:a=>{$t(a,i.onClick),t.toggle(),t.inputRef()?.focus()},onKeyDown:a=>{$t(a,i.onKeyDown),a.key===Ll.Space&&(t.toggle(),t.inputRef()?.focus())}},()=>e.dataset(),()=>t.dataset(),r))}const qh=Ue('<input type="checkbox" role="switch">');function jh(s){const e=Mn(),t=Os();s=gi({id:t.generateId("input")},s);const[i,r,n]=Xt(s,["ref","style","onChange","onFocus","onBlur"],nu),{fieldProps:o}=su(r),a=u=>{$t(u,i.onChange),u.stopPropagation();const d=u.target;t.setIsChecked(d.checked),d.checked=t.checked()},l=u=>{$t(u,i.onFocus),t.setIsFocused(!0)},c=u=>{$t(u,i.onBlur),t.setIsFocused(!1)};return(()=>{const u=qh();u.addEventListener("blur",c),u.addEventListener("focus",l),u.addEventListener("change",a);const d=Sn(t.setInputRef,i.ref);return typeof d=="function"&&ti(d,u),Bt(u,Ze({get id(){return o.id()},get name(){return e.name()},get value(){return t.value()},get checked(){return t.checked()},get required(){return e.isRequired()},get disabled(){return e.isDisabled()},get readonly(){return e.isReadOnly()},get style(){return{...Pl,...i.style}},get"aria-label"(){return o.ariaLabel()},get"aria-labelledby"(){return o.ariaLabelledBy()},get"aria-describedby"(){return o.ariaDescribedBy()},get"aria-invalid"(){return e.validationState()==="invalid"||void 0},get"aria-required"(){return e.isRequired()||void 0},get"aria-disabled"(){return e.isDisabled()||void 0},get"aria-readonly"(){return e.isReadOnly()||void 0}},()=>e.dataset(),()=>t.dataset(),n),!1,!1),u})()}function $h(s){const e=Os();return _(kl,Ze(()=>e.dataset(),s))}function Xh(s){let e;const t=`switch-${Ga()}`;s=gi({value:"on",id:t},s);const[i,r,n]=Xt(s,["ref","children","value","checked","defaultChecked","onChange","onPointerDown"],Il),[o,a]=Be(),[l,c]=Be(!1),{formControlContext:u}=Fl(r),d=kh({isSelected:()=>i.checked,defaultIsSelected:()=>i.defaultChecked,onSelectedChange:p=>i.onChange?.(p),isDisabled:()=>u.isDisabled(),isReadOnly:()=>u.isReadOnly()});zl(()=>e,()=>d.setIsSelected(i.defaultChecked??!1));const h=p=>{$t(p,i.onPointerDown),l()&&p.preventDefault()},f=be(()=>({"data-checked":d.isSelected()?"":void 0})),g={value:()=>i.value,dataset:f,checked:()=>d.isSelected(),inputRef:o,generateId:Dl(()=>ci(r.id)),toggle:()=>d.toggle(),setIsChecked:p=>d.setIsSelected(p),setIsFocused:c,setInputRef:a};return _(Nl.Provider,{value:u,get children(){return _(hc.Provider,{value:g,get children(){return _(fr,Ze({as:"div",ref(p){const m=Sn(v=>e=v,i.ref);typeof m=="function"&&m(p)},role:"group",get id(){return ci(r.id)},onPointerDown:h},()=>u.dataset(),f,n,{get children(){return _(Yh,{state:g,get children(){return i.children}})}}))}})}})}function Yh(s){const e=Ol(()=>{const t=s.children;return au(t)?t(s.state):t});return be(e)}function Zh(s){const e=Mn(),t=Os();return s=gi({id:t.generateId("thumb")},s),_(fr,Ze({as:"div"},()=>e.dataset(),()=>t.dataset(),s))}const fo=Ue("<div>"),xn=s=>{const[e,t]=Xt(s,["children","title"]);return _(Mt,{get children(){return[_(bt,{get children(){return _(ou,Ze({get class(){return lu({})}},t,{get children(){return e.children}}))}}),_(wt,{get children(){return e.title}})]}})},yn=s=>{const[e,t]=Xt(s,["title","children"]);return _(bu,{get children(){return[_(cu,{class:uu}),(()=>{const i=fo();return Je(i,hu),ge(i,_(Ih,Ze({class:yu},t,{get children(){return[(()=>{const r=fo();return Je(r,du),ge(r,_(pu,{class:mu,get children(){return s.title}}),null),ge(r,_(fu,{class:gu,get children(){return _(vu,{})}}),null),r})(),_(_u,{class:xu,get children(){return s.children}})]}}))),i})()]}})},bn=wu;var Jh="_1qnkk9w1f _1qnkk9w1r _1qnkk9w2c _1qnkk9w23 _1qnkk9w66",Kh="_18ok7dp3 _1qnkk9w1f",Qh="_18ok7dp6",ed="_18ok7dp8 _1qnkk9wzc",td="_18ok7dp9",id="_1qnkk9w1f _1qnkk9w1u _1qnkk9w63";const go=s=>{const[e,t]=Xt(s,["variant","label","items","selected","onChange"]);return _(Hh,{class:id,get defaultValue(){return be(()=>!!e.selected)()?e.selected():void 0},get onChange(){return e.onChange},get children(){return[_(Se,{get when(){return e.label},get children(){return _(Vh,{class:Kh,get children(){return _(Pe,{colorSchema:"secondary",get children(){return e.label}})}})}}),_(me,Ze({gap:"medium",style:{"flex-wrap":"wrap"},get direction(){return e.variant=="line"?"row":"column"}},t,{get children(){return _(Yr,{get each(){return e.items},children:i=>_(Fh,{get value(){return i.id},class:Jh,get children(){return[_(Bh,{}),_(zh,{class:ed,get children(){return _(Nh,{class:Qh})}}),_(Gh,{class:td,get children(){return i.label}})]}})})}}))]}})},Un=s=>_(Xh,{class:Mu,get checked(){return s.checked()},get onChange(){return s.setChecked},get children(){return[_($h,{get children(){return _(Pe,{fontSize:"smaller",colorSchema:"secondary",get children(){return s.label}})}}),_(jh,{}),_(Wh,{get class(){return Su({checked:s.checked()})},get children(){return _(Zh,{get class(){return Eu({checked:s.checked()})}})}})]}}),rd=s=>typeof s=="function",Ls=(s,e)=>rd(s)?s(e):s;var at;(function(s){s[s.ADD_TOAST=0]="ADD_TOAST",s[s.UPDATE_TOAST=1]="UPDATE_TOAST",s[s.UPSERT_TOAST=2]="UPSERT_TOAST",s[s.DISMISS_TOAST=3]="DISMISS_TOAST",s[s.REMOVE_TOAST=4]="REMOVE_TOAST",s[s.START_PAUSE=5]="START_PAUSE",s[s.END_PAUSE=6]="END_PAUSE"})(at||(at={}));const[ar,Ii]=Ph({toasts:[],pausedAt:void 0}),nd=()=>{const{pausedAt:s,toasts:e}=ar;if(s)return;const t=Date.now();return e.map(r=>{if(r.duration===1/0)return;const n=(r.duration||0)+r.pauseDuration-(t-r.createdAt);if(n<=0){r.visible&&ii({type:at.DISMISS_TOAST,toastId:r.id});return}return setTimeout(()=>{ii({type:at.DISMISS_TOAST,toastId:r.id})},n)})},gn=new Map,vo=(s,e)=>{if(gn.has(s))return;const t=setTimeout(()=>{gn.delete(s),ii({type:at.REMOVE_TOAST,toastId:s})},e);gn.set(s,t)},sd=s=>{const e=gn.get(s);gn.delete(s),e&&clearTimeout(e)},ii=s=>{switch(s.type){case at.ADD_TOAST:Ii("toasts",r=>{const n=r;return[s.toast,...n]});break;case at.DISMISS_TOAST:const{toastId:e}=s,t=ar.toasts;if(e){const r=t.find(n=>n.id===e);r&&vo(e,r.unmountDelay),Ii("toasts",n=>n.id===e,Bn(n=>n.visible=!1))}else t.forEach(r=>{vo(r.id,r.unmountDelay)}),Ii("toasts",r=>r.id!==void 0,Bn(r=>r.visible=!1));break;case at.REMOVE_TOAST:if(!s.toastId){Ii("toasts",[]);break}Ii("toasts",r=>r.filter(o=>o.id!==s.toastId));break;case at.UPDATE_TOAST:s.toast.id&&sd(s.toast.id),Ii("toasts",r=>r.id===s.toast.id,r=>({...r,...s.toast}));break;case at.UPSERT_TOAST:ar.toasts.find(r=>r.id===s.toast.id)?ii({type:at.UPDATE_TOAST,toast:s.toast}):ii({type:at.ADD_TOAST,toast:s.toast});break;case at.START_PAUSE:Ii(Bn(r=>{r.pausedAt=Date.now(),r.toasts.forEach(n=>{n.paused=!0})}));break;case at.END_PAUSE:const i=s.time-(ar.pausedAt||0);Ii(Bn(r=>{r.pausedAt=void 0,r.toasts.forEach(n=>{n.pauseDuration+=i,n.paused=!1})}));break}},ad={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Vr={id:"",icon:"",unmountDelay:500,duration:3e3,ariaProps:{role:"status","aria-live":"polite"},className:"",style:{},position:"top-right",iconTheme:{}},dc={position:"top-right",toastOptions:Vr,gutter:8,containerStyle:{},containerClassName:""},Gn="16px",od={position:"fixed","z-index":9999,top:Gn,bottom:Gn,left:Gn,right:Gn,"pointer-events":"none"},ld=(()=>{let s=0;return()=>String(++s)})(),cd=s=>{gd(e=>({containerClassName:s.containerClassName??e.containerClassName,containerStyle:s.containerStyle??e.containerStyle,gutter:s.gutter??e.gutter,position:s.position??e.position,toastOptions:{...s.toastOptions}}))},ud=(s,e)=>{const i=s.includes("top")?{top:0,"margin-top":`${e}px`}:{bottom:0,"margin-bottom":`${e}px`},r=s.includes("center")?{"justify-content":"center"}:s.includes("right")?{"justify-content":"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:"all 230ms cubic-bezier(.21,1.02,.73,1)",...i,...r}},hd=(s,e)=>{const t=s.getBoundingClientRect();t.height!==e.height&&ii({type:at.UPDATE_TOAST,toast:{id:e.id,height:t.height}})},dd=(s,e)=>{const{toasts:t}=ar,i=Nr().gutter||dc.gutter||8,r=t.filter(l=>(l.position||e)===e&&l.height),n=r.findIndex(l=>l.id===s.id),o=r.filter((l,c)=>c<n&&l.visible).length;return r.slice(0,o).reduce((l,c)=>l+i+(c.height||0),0)},pd=(s,e)=>(s.position||e).includes("top")?1:-1,md={display:"flex","align-items":"center",color:"#363636",background:"white","box-shadow":"0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)","max-width":"350px","pointer-events":"auto",padding:"8px 10px","border-radius":"4px","line-height":"1.3","will-change":"transform"},fd={display:"flex","align-items":"center",flex:"1 1 auto",margin:"4px 10px","white-space":"pre-line"},Vn={"flex-shrink":0,"min-width":"20px","min-height":"20px",display:"flex","align-items":"center","justify-content":"center","text-align":"center"},Ps=s=>({calcMode:"spline",keyTimes:"0; 1",keySplines:s}),[Nr,gd]=Be(dc),vd=(s,e="blank",t)=>({...Vr,...Nr().toastOptions,...t,type:e,message:s,pauseDuration:0,createdAt:Date.now(),visible:!0,id:t.id||ld(),paused:!1,style:{...Vr.style,...Nr().toastOptions?.style,...t.style},duration:t.duration||Nr().toastOptions?.duration||ad[e],position:t.position||Nr().toastOptions?.position||Nr().position||Vr.position}),Cn=s=>(e,t={})=>Cu(()=>{const i=ar.toasts.find(n=>n.id===t.id),r=vd(e,s,{...i,duration:void 0,...t});return ii({type:at.UPSERT_TOAST,toast:r}),r.id}),je=(s,e)=>Cn("blank")(s,e);Tu(()=>je);je.error=Cn("error");je.success=Cn("success");je.loading=Cn("loading");je.custom=Cn("custom");je.dismiss=s=>{ii({type:at.DISMISS_TOAST,toastId:s})};je.promise=(s,e,t)=>{const i=je.loading(e.loading,{...t});return s.then(r=>(je.success(Ls(e.success,r),{id:i,...t}),r)).catch(r=>{je.error(Ls(e.error,r),{id:i,...t})}),s};je.remove=s=>{ii({type:at.REMOVE_TOAST,toastId:s})};const _d=Ue("<div><style>.sldt-active{z-index:9999;}.sldt-active>*{pointer-events:auto;}"),xd=s=>(Ot(()=>{cd(s)}),Ot(()=>{const e=nd();En(()=>{e&&e.forEach(t=>t&&clearTimeout(t))})}),(()=>{const e=_d();return e.firstChild,ge(e,_(Yr,{get each(){return ar.toasts},children:t=>_(Md,{toast:t})}),null),nt(t=>{const i={...od,...s.containerStyle},r=s.containerClassName;return t._v$=ui(e,i,t._v$),r!==t._v$2&&Je(e,t._v$2=r),t},{_v$:void 0,_v$2:void 0}),e})()),Hn=Ue("<div>"),yd=Ue("<div><div>"),bd=s=>{let e;return Ot(()=>{if(!e)return;const t=pd(s.toast,s.position);s.toast.visible?e.animate([{transform:`translate3d(0,${t*-200}%,0) scale(.6)`,opacity:.5},{transform:"translate3d(0,0,0) scale(1)",opacity:1}],{duration:350,fill:"forwards",easing:"cubic-bezier(.21,1.02,.73,1)"}):e.animate([{transform:"translate3d(0,0,-1px) scale(1)",opacity:1},{transform:`translate3d(0,${t*-150}%,-1px) scale(.4)`,opacity:0}],{duration:400,fill:"forwards",easing:"cubic-bezier(.06,.71,.55,1)"})}),(()=>{const t=yd(),i=t.firstChild,r=e;return typeof r=="function"?ti(r,t):e=t,ge(t,_(Fs,{get children(){return[_(di,{get when(){return s.toast.icon},get children(){const n=Hn();return ge(n,()=>s.toast.icon),nt(o=>ui(n,Vn,o)),n}}),_(di,{get when(){return s.toast.type==="loading"},get children(){const n=Hn();return ge(n,_(Ld,Ze(()=>s.toast.iconTheme))),nt(o=>ui(n,Vn,o)),n}}),_(di,{get when(){return s.toast.type==="success"},get children(){const n=Hn();return ge(n,_(Cd,Ze(()=>s.toast.iconTheme))),nt(o=>ui(n,Vn,o)),n}}),_(di,{get when(){return s.toast.type==="error"},get children(){const n=Hn();return ge(n,_(Rd,Ze(()=>s.toast.iconTheme))),nt(o=>ui(n,Vn,o)),n}})]}}),i),Bt(i,Ze(()=>s.toast.ariaProps),!1,!0),ge(i,()=>Ls(s.toast.message,s.toast)),nt(n=>{const o=s.toast.className,a={...md,...s.toast.style},l=fd;return o!==n._v$&&Je(t,n._v$=o),n._v$2=ui(t,a,n._v$2),n._v$3=ui(i,l,n._v$3),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()},wd=Ue("<div>"),Md=s=>{const e=()=>{const r=s.toast.position||Vr.position,n=dd(s.toast,r);return ud(r,n)},t=be(()=>e());let i;return Va(()=>{i&&hd(i,s.toast)}),(()=>{const r=wd();r.addEventListener("mouseleave",()=>ii({type:at.END_PAUSE,time:Date.now()})),r.addEventListener("mouseenter",()=>ii({type:at.START_PAUSE,time:Date.now()}));const n=i;return typeof n=="function"?ti(n,r):i=r,ge(r,(()=>{const o=be(()=>s.toast.type==="custom");return()=>o()?Ls(s.toast.message,s.toast):_(bd,{get toast(){return s.toast},get position(){return s.toast.position||Vr.position}})})()),nt(o=>{const a=t(),l=s.toast.visible?"sldt-active":"";return o._v$=ui(r,a,o._v$),l!==o._v$2&&Je(r,o._v$2=l),o},{_v$:void 0,_v$2:void 0}),r})()},Sd=Ue('<svg><circle cx="16" cy="16" r="0"><animate attributeName="opacity" values="0; 1; 1"></animate><animate attributeName="r" values="0; 17.5; 16"></svg>',!1,!0),Ed=Ue('<svg><circle cx="16" cy="16" r="12" opacity="0"><animate attributeName="opacity" values="1; 0"></animate><animate attributeName="r" values="12; 26"></svg>',!1,!0),pc=s=>{const e={dur:"0.35s",begin:"100ms",fill:"freeze",calcMode:"spline",keyTimes:"0; 0.6; 1",keySplines:"0.25 0.71 0.4 0.88; .59 .22 .87 .63"};return(()=>{const t=Sd(),i=t.firstChild,r=i.nextSibling;return Bt(i,e,!0,!1),Bt(r,e,!0,!1),nt(()=>dr(t,"fill",s.fill)),t})()},mc=s=>{const e={dur:"1s",begin:s.begin||"320ms",fill:"freeze",...Ps("0.0 0.0 0.2 1")};return(()=>{const t=Ed(),i=t.firstChild,r=i.nextSibling;return Bt(i,e,!0,!1),Bt(r,e,!0,!1),nt(()=>dr(t,"fill",s.fill)),t})()},Td=Ue('<svg viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><path fill="none" stroke-width="4" stroke-dasharray="22" stroke-dashoffset="22" stroke-linecap="round" stroke-miterlimit="10" d="M9.8,17.2l3.8,3.6c0.1,0.1,0.3,0.1,0.4,0l9.6-9.7"><animate attributeName="stroke-dashoffset" values="22;0" dur="0.25s" begin="250ms" fill="freeze">'),Cd=s=>{const e=s.primary||"#34C759";return(()=>{const t=Td(),i=t.firstChild,r=i.firstChild;return t.style.setProperty("overflow","visible"),ge(t,_(pc,{fill:e}),i),ge(t,_(mc,{fill:e,begin:"350ms"}),i),Bt(r,Ze(()=>Ps("0.0, 0.0, 0.58, 1.0")),!0,!1),nt(()=>dr(i,"stroke",s.secondary||"#FCFCFC")),t})()},Ad=Ue('<svg viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><path fill="none" stroke-width="4" stroke-dasharray="9" stroke-dashoffset="9" stroke-linecap="round" d="M16,7l0,9"><animate attributeName="stroke-dashoffset" values="9;0" dur="0.2s" begin="250ms" fill="freeze"></animate></path><circle cx="16" cy="23" r="2.5" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.25s" begin="350ms" fill="freeze">'),Rd=s=>{const e=s.primary||"#FF3B30";return(()=>{const t=Ad(),i=t.firstChild,r=i.firstChild,n=i.nextSibling,o=n.firstChild;return t.style.setProperty("overflow","visible"),ge(t,_(pc,{fill:e}),i),ge(t,_(mc,{fill:e}),i),Bt(r,Ze(()=>Ps("0.0, 0.0, 0.58, 1.0")),!0,!1),Bt(o,Ze(()=>Ps("0.0, 0.0, 0.58, 1.0")),!0,!1),nt(a=>{const l=s.secondary||"#FFFFFF",c=s.secondary||"#FFFFFF";return l!==a._v$&&dr(i,"stroke",a._v$=l),c!==a._v$2&&dr(n,"fill",a._v$2=c),a},{_v$:void 0,_v$2:void 0}),t})()},Dd=Ue('<svg viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><path fill="none" stroke-width="4" stroke-miterlimit="10" d="M16,6c3,0,5.7,1.3,7.5,3.4c1.5,1.8,2.5,4,2.5,6.6c0,5.5-4.5,10-10,10S6,21.6,6,16S10.5,6,16,6z"></path><path fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M16,6c3,0,5.7,1.3,7.5,3.4c0.6,0.7,1.1,1.4,1.5,2.2"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.75s" repeatCount="indefinite">'),Ld=s=>(()=>{const e=Dd(),t=e.firstChild,i=t.nextSibling;return e.style.setProperty("overflow","visible"),nt(r=>{const n=s.primary||"#E5E7EB",o=s.secondary||"#4b5563";return n!==r._v$&&dr(t,"stroke",r._v$=n),o!==r._v$2&&dr(i,"stroke",r._v$2=o),r},{_v$:void 0,_v$2:void 0}),e})();var Pd="e75iczo _1qnkk9wvc _1qnkk9wal _1qnkk9w2o",_o=gr({defaultClassName:"e75iczc _1qnkk9w2r _1qnkk9w36 _1qnkk9w3l _1qnkk9w40 _1qnkk9w1f _1qnkk9w1u _1qnkk9wbr _1qnkk9wj3 _1qnkk9w7u _1qnkk9w8o _1qnkk9w63 _1qnkk9w6i",variantClassNames:{old:{true:"e75iczd",false:"e75icze"}},defaultVariants:{},compoundVariants:[]}),kd=gr({defaultClassName:"e75iczi _1qnkk9w3l _1qnkk9w40 _1qnkk9w2o _1qnkk9w33 _1qnkk9wj3 _1qnkk9wbr _1qnkk9w1f _1qnkk9w26 _1qnkk9w2c _1qnkk9w7f _1qnkk9w89",variantClassNames:{old:{true:"e75iczj",false:"e75iczk"},private:{false:"_1qnkk9wa9 _1qnkk9wri",true:"_1qnkk9wa9 _1qnkk9wrc"}},defaultVariants:{old:!1,private:!1},compoundVariants:[]}),Id=gr({defaultClassName:"e75icz6",variantClassNames:{old:{true:"e75icz7",false:"e75icz8"},private:{false:"_1qnkk9w9f _1qnkk9w93 _1qnkk9wni",true:"_1qnkk9w9f _1qnkk9w93 _1qnkk9wnc"}},defaultVariants:{old:!1,private:!1},compoundVariants:[]}),Fd="e75icz3 _1qnkk9w2o _1qnkk9w33 _1qnkk9w3i _1qnkk9w3x _1qnkk9w7u _1qnkk9w7f _1qnkk9w89 _1qnkk9w8o _1qnkk9w6f _1qnkk9w1f _1qnkk9w1u _1qnkk9wbr _1qnkk9w60",zd="e75icz1 _1qnkk9w2o _1qnkk9w33 _1qnkk9w3i _1qnkk9w3x _1qnkk9wj6 _1qnkk9wbr _1qnkk9w1f _1qnkk9w1u _1qnkk9w60",Nd=gr({defaultClassName:"_1qnkk9w2r _1qnkk9w36 _1qnkk9w3l _1qnkk9w40 _1qnkk9w7u _1qnkk9w7f _1qnkk9w89 _1qnkk9w8o _1qnkk9w1f _1qnkk9w1u _1qnkk9wbr _1qnkk9w63 _1qnkk9w6i _1qnkk9wnc _1qnkk9w93 _1qnkk9w9f",variantClassNames:{sel:{true:"_1qnkk9wjf",false:"_1qnkk9wj3"}},defaultVariants:{sel:!1},compoundVariants:[]}),Od="e75iczq _1qnkk9w2o _1qnkk9w33 _1qnkk9w3i _1qnkk9w3x _1qnkk9w7u _1qnkk9w7f _1qnkk9w89 _1qnkk9w8o _1qnkk9wj3 _1qnkk9w6f _1qnkk9w1f _1qnkk9w1u _1qnkk9wbr _1qnkk9w63";gr({defaultClassName:"e75icz11 _1qnkk9w3i _1qnkk9w3x _1qnkk9w7u _1qnkk9w7f _1qnkk9w89 _1qnkk9w8o _1qnkk9w1f _1qnkk9w2c _1qnkk9w1x _1qnkk9wnc _1qnkk9w93 _1qnkk9w9f",variantClassNames:{sel:{true:"_1qnkk9wj3"}},defaultVariants:{},compoundVariants:[]});function fc(s){return Tn({a:{viewBox:"0 0 24 24"},c:'<circle cx="12" cy="12" r="3"/><path d="M13 4.069V2h-2v2.069A8.008 8.008 0 0 0 4.069 11H2v2h2.069A8.007 8.007 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"/>'},s)}function Bd(s){return Tn({a:{viewBox:"0 0 24 24"},c:'<path d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2z"/><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3v2z"/>'},s)}const Ud=Ue("<div><div>"),Wn=Ue("<div>"),Gd=s=>{const[e,t]=Be(!1),i=be(()=>{const l=s.item.tstamp.split("__");return l&&l.length==2?l[1]:s.item.tstamp}),r=be(()=>s.item.private&&s.item.userId==Me()?.id&&!s.item.revealed),n=be(()=>!s.item.result.modifier||s.item.result.modifier==0?"":s.item.result.modifier>0?`+${s.item.result.modifier}`:`${s.item.result.modifier}`),o=be(()=>Au(s.item.result,s.item.successRule,s.item.successTarget)),a=()=>{t(!1);const l={...s.item};s.item.revealed=!0,Hr(Wr(Wa),Ss(l)),Bl(c=>({...c,[s.item.id]:l}))};return _(me,{grow:!0,gap:"none",direction:"column",get class(){return Id({private:s.item.private&&!s.item.revealed})},get children(){return[(()=>{const l=Ud(),c=l.firstChild;return ge(c,()=>s.item.user),ge(l,_(me,{get title(){return s.item.tstamp},get children(){return i()}}),null),nt(()=>Je(l,kd({private:s.item.private&&!s.item.revealed}))),l})(),_(Se,{get when(){return!s.item.result.sets},get children(){const l=Wn();return ge(l,()=>s.item.comment),nt(()=>Je(l,_o({old:!0}))),l}}),_(Se,{get when(){return s.item.result.sets},get children(){const l=Wn();return ge(l,_(me,{gap:"medium",direction:"column",grow:!0,get children(){return[_(me,{justify:"space",align:"center",style:{width:"100%"},get children(){return[_(Se,{get when(){return Me()?.settings.showRollTotal&&s.item.result.total},get children(){return _(In,{style:{width:"45%"},get children(){return[_(js,{backgroundSchema:"primary300",colorSchema:"primary900",scale:"flex6",get children(){return _(Pe,{colorSchema:"secondary",get children(){return["Total ",be(()=>n())]}})}}),_(Fn,{backgroundSchema:"primary300",colorSchema:"primary900",scale:"flex4",get children(){const c=Wn();return ge(c,()=>s.item.result.total),c}})]}})}}),_(Se,{get when(){return be(()=>!!(s.item.successRule&&Me()?.settings.showRollSuccess))()&&o()!==""},get children(){return[_(Se,{get when(){return s.item.successTarget&&s.item.successTarget!==0},get children(){return _(In,{style:{width:"57%"},get children(){return[_(js,{backgroundSchema:"primary700",colorSchema:"primary100",scale:"flex2",get children(){return _(me,{align:"center",justify:"center",style:{gap:"2px"},get children(){return[_(fc,{fill:"currentcolor"}),_(Pe,{colorSchema:"background",fontSize:"smaller",get children(){return s.item.successTarget}})]}})}}),_(Fn,{backgroundSchema:"primary700",colorSchema:"primary100",scale:"flex8",get children(){return _(Pe,{colorSchema:"background",get title(){return s.item.successRule},get children(){return o()}})}})]}})}}),_(Se,{get when(){return!s.item.successTarget||s.item.successTarget==0},get children(){return _(In,{get children(){return _(Fn,{backgroundSchema:"primary700",colorSchema:"primary100",get children(){return _(Pe,{colorSchema:"background",get title(){return s.item.successRule},get children(){return o()}})}})}})}})]}})]}}),_(me,{align:"center",grow:!0,style:{"flex-wrap":"wrap",gap:"0px"},get children(){return _(Yr,{get each(){return s.item.result.sets},children:c=>_(In,{style:{flex:1},get children(){return[_(js,{scale:"flex3",style:{"padding-bottom":"0px","padding-top":"0px"},get children(){return _(Pe,{colorSchema:"secondary",get children(){return`${c.num}${c.type}: `}})}}),_(Fn,{scale:"flex7",style:{"justify-content":"start","padding-bottom":"0px","padding-top":"0px"},get children(){return _(Pe,{get children(){return c.rolls.map(u=>u.value).join(", ")}})}})]}})})}})]}}),null),ge(l,_(me,{align:"center",justify:"end",get children(){return[_(Se,{get when(){return s.item.comment!==void 0&&s.item.comment!==""},get children(){const c=Wn();return Je(c,Pd),ge(c,()=>s.item.comment),c}}),_(Se,{get when(){return r()},get children(){return _(bn,{get open(){return e()},onOpenChange:t,get children(){return[_(xn,{title:"Reveal private roll",get children(){return _(Ms,{get color(){return Ha.info900}})}}),_(yn,{title:"Reveal",get children(){return[_(Pe,{get children(){return["Reveal ",be(()=>s.item.result.notation)," roll?"]}}),_(me,{gap:"large",get children(){return[_(fe,{onClick:()=>t(!1),children:"Cancel"}),_(fe,{onClick:a,children:"Accept"})]}})]}})]}})}})]}}),null),nt(()=>Je(l,_o({}))),l}})]}})},Vd=Ue("<div>"),Hd=s=>{const[e,t]=Be(!1);let i;const r=be(()=>{const l=sr(),c=Me()?.settings;return!l||!c||c.currentRoom===""||!l[c.currentRoom]?[]:Object.values(Ru()).sort((u,d)=>d.realtstamp-u.realtstamp).filter(u=>!(u.private&&!u.revealed&&u.userId!==Me()?.id))}),n=()=>{const l=rt();l&&(Bl({}),Lu(l.id),Hr(Wr(Pu),""),je("Rolls cleared",{position:"bottom-right"}))},o=l=>{qa(l),s.adjustSize()},a=l=>{if(i&&(l.code=="Enter"||l.key=="Enter")){t(!1);const c={id:Ul(),userId:Me()?.id,user:Me()?.name,userColor:Me()?.color,result:{},diceColor:Me()?.settings.diceColor,diceMaterial:Me()?.settings.diceMaterial,tstamp:Gl(),comment:i.value,realtstamp:Date.now(),private:!1,revealed:!0};Hr(Wr(Wa),Ss(c)),Vl(c),i.value=""}};return Ot(()=>{e()&&setTimeout(()=>{document.getElementById("chat-message")?.focus()},300)}),[_(me,{gap:"medium",justify:"space",get children(){return[_(me,{style:{"min-height":"35px"},align:"center",get children(){return[_(fe,{toggled:!0,style:{height:"30px"},get children(){return _(Pe,{colorSchema:"background",fontSize:"smaller",title:"Rolls",children:"Rolls"})}}),_(fe,{onClick:()=>o("cs"),style:{height:"30px"},get children(){return _(Pe,{fontSize:"smaller",title:"Roll definitions",children:"Defs"})}})]}}),_(me,{justify:"end",get children(){return[_(_s,{modal:!0,onOpenChange:t,get open(){return e()},get children(){return[_(xs,{title:"Send chat message",get children(){return _(Du,{})}}),_(ys,{title:"Send chat message",get children(){return _(qe,{id:"chat-message",onFocus:l=>l.target.select(),onKeyPress:a,style:{width:"20em"},value:"",ref:l=>i=l})}})]}}),_(Se,{get when(){return Me()?.id==rt()?.owner},get children(){return _(me,{get children(){return _(fe,{title:"Clear rolls",onClick:n,get children(){return _(zs,{})}})}})}})]}})]}}),(()=>{const l=Vd();return ti(c=>s.ref(c),l),Je(l,Fd),ge(l,_(Yr,{get each(){return r()},children:c=>_(Gd,{item:c})})),l})()]},Wd=Ue("<i>"),qd=Ue("<div>"),jd=s=>{const[e,t]=Xt(s,["item","selected","adjustSize"]),[i,r]=Be(!1);let n;const o=be(()=>{const d=e.selected();return d?d.id==e.item.id:!1}),a=async()=>{r(!1),await l()},l=async()=>{qa("rolls"),e.adjustSize();const d=await ku(e.item,u());d&&je(JSON.stringify(d))},c=be(()=>{if(!e.item.modifier)return e.item.dice;const d=e.item.modifier&&e.item.modifier>0?`+${e.item.modifier}`:`${e.item.modifier}`;return`${e.item.dice}${d}`}),u=be(()=>!(e.item.successTarget&&e.item.successTarget.trim()!==""||!e.item.successRule||e.item.successRule==""||e.item.successRule=="pbta:standard"));return Ot(()=>{!i()||!n||(document.getElementById("valInput")?.focus(),n.focus())}),(()=>{const d=qd();return Bt(d,Ze({get class(){return Nd({sel:o()})}},t),!1,!0),ge(d,_(me,{justify:"space",get children(){return[_(Pe,{fontSize:"bigger",get children(){return e.item.name}}),_(Se,{get when(){return u()},get children(){return _(ji,{get open(){return i()},onOpenChange:r,get children(){return[_($i,{get children(){return[_(Se,{get when(){return e.item.comment},get children(){return _(Mt,{get children(){return[_(bt,{get children(){return _(fe,{get children(){return _(Pe,{fontSize:"bigger",get children(){return c()}})}})}}),_(wt,{get children(){return e.item.comment}})]}})}}),_(Se,{get when(){return!e.item.comment},get children(){return _(fe,{get children(){return _(Pe,{fontSize:"bigger",get children(){return c()}})}})}})]}}),_(Xi,{title:"Target value",get children(){return[_(qe,{id:"valInput",ref:h=>n=h,style:{width:"5em"},get value(){return e.item.successTarget},onChange:h=>e.item.successTarget=h.target.value}),_(fe,{onClick:()=>vn(a),children:"Roll"})]}})]}})}}),_(Se,{get when(){return!u()},get children(){return _(fe,{get style(){return{"background-color":Ha.primary400}},onClick:()=>vn(l),get children(){return _(Pe,{fontSize:"bigger",get children(){return c()}})}})}})]}}),null),ge(d,_(me,{justify:"space",get children(){return[_(Se,{get when(){return e.item.successRule!==""},get children(){return _(Pe,{colorSchema:"secondary",fontSize:"small",get children(){const h=Wd();return ge(h,()=>e.item.successRule),h}})}}),_(Se,{get when(){return e.item.successTarget&&e.item.successTarget!==""},get children(){return _(me,{align:"center",justify:"center",get children(){return[_(fc,{fill:"currentColor"})," ",_(Pe,{colorSchema:"primary",get children(){return e.item.successTarget}})]}})}})]}}),null),d})()},$d=Ue("<div>"),xo=[{id:"",label:"None"},{id:"pbta:standard",label:"Standard PBTA"},{id:"pio3s:standard",label:"Pio 3S"},{id:"pio3s:hard",label:"Pio 3S Hard"},{id:"total:ueq",label:"Total under/equal"},{id:"total:oeq",label:"Total over/equal"},{id:"cairn:standard",label:"Cairn/ItO standard"},{id:"cairn:hard",label:"Cairn/ItO hard"},{id:"ironsworn:standard",label:"Ironsworn"},{id:"ironsworn:glina",label:"Glina RPG"}],Xd=s=>{const[e,t]=Be(!1),[i,r]=Be(!1),[n,o]=Be(!1),[a,l]=Be(),[c,u]=Be(ao()),d=b=>{qa(b),s.adjustSize()},h=be(()=>Object.values(oo()).sort((b,y)=>b.name.localeCompare(y.name))),f=()=>{const b=c();b&&($s(b),t(!1),je("New definition created",{icon:_(lo,{})}),u(ao()))},g=()=>{o(!1);const b=a();b&&Fu(b.id)},p=(b,y,S)=>{b&&(y!=="modifier"?b[y]=S:b.modifier=Number.parseInt(S))},m=()=>{const b=a();b&&($s(b),r(!1),je("Definition updated",{icon:_(lo,{})}))},v=()=>{ql(b=>{Object.values(b).forEach(S=>{$s(S)}),je("Definitions imported",{icon:_(Es,{})})})},x=()=>{const b=`defs-${Gl()}.json`;jl(oo(),b),je("Definitions exported",{icon:_(Es,{})})};return[_(me,{gap:"medium",justify:"space",get children(){return[_(me,{style:{"min-height":"35px"},align:"center",get children(){return[_(fe,{onClick:()=>d("rolls"),style:{height:"30px"},get children(){return _(Pe,{fontSize:"smaller",title:"Roll list",children:"Rolls"})}}),_(fe,{toggled:!0,style:{height:"30px"},get children(){return _(Pe,{fontSize:"smaller",colorSchema:"background",children:"Defs"})}})]}}),_(me,{align:"center",gap:"small",get children(){return[_(Se,{get when(){return a()},get children(){return _(me,{get children(){return[_(bn,{get open(){return n()},onOpenChange:o,get children(){return[_(xn,{title:"Delete definition",get children(){return _(fe,{get children(){return _(zs,{})}})}}),_(yn,{title:"Delete definition",get children(){return[_(Pe,{get children(){return["Delete ",be(()=>a()?.name)," ","?"]}}),_(me,{gap:"large",style:{"margin-top":"10px"},get children(){return[_(fe,{onClick:()=>o(!1),children:"Cancel"}),_(fe,{onClick:g,children:"Delete"})]}})]}})]}}),_(ji,{get open(){return i()},onOpenChange:r,get children(){return[_($i,{title:"Edit definition",get children(){return _(fe,{get children(){return _(Iu,{})}})}}),_(Xi,{title:"Edit definition",get children(){return _(Se,{get when(){return i()},get children(){return[_(me,{get children(){return[_(qe,{label:"Name",style:{width:"14em"},get value(){return a()?.name},onChange:b=>p(a(),"name",b.target.value)}),_(qe,{label:"Comment",style:{width:"14em"},onChange:b=>p(c(),"comment",b.target.value)})]}}),_(me,{direction:"row",gap:"large",get children(){return[_(qe,{label:"Dice",style:{width:"6em"},onChange:b=>p(a(),"dice",b.target.value),get value(){return a()?.dice}}),_(qe,{label:"Modifier",style:{width:"6em"},onChange:b=>p(a(),"modifier",b.target.value),get value(){return a()?.modifier}}),_(qe,{label:"Success target",style:{width:"6em"},onChange:b=>p(a(),"successTarget",b.target.value),get value(){return a()?.successTarget}})]}}),_(go,{label:"Success rule",items:xo,variant:"list",selected:()=>a()?.successRule,onChange:b=>p(a(),"successRule",b),style:{"flex-wrap":"wrap","flex-grow":1,"max-height":"150px","min-width":"400px","align-self":"start",flex:1}}),_(me,{gap:"large",style:{"margin-top":"10px"},get children(){return[_(fe,{onClick:()=>r(!1),children:"Cancel"}),_(fe,{onClick:m,children:"Update"})]}})]}})}})]}})]}})}}),_(Mt,{get children(){return[_(bt,{get children(){return _(fe,{onClick:v,get children(){return _(Hl,{})}})}}),_(wt,{children:"Import definitions"})]}}),_(Mt,{get children(){return[_(bt,{get children(){return _(fe,{onClick:x,get children(){return _(Wl,{})}})}}),_(wt,{children:"Export definitions"})]}}),_(ji,{get open(){return e()},onOpenChange:t,get children(){return[_($i,{get children(){return _(Mt,{get children(){return[_(bt,{get children(){return _(fe,{get children(){return _(ja,{})}})}}),_(wt,{children:"Create definition"})]}})}}),_(Xi,{title:"Create definition",style:{width:"500px"},get children(){return _(Se,{get when(){return e()},get children(){return[_(me,{get children(){return[_(qe,{label:"Name",style:{width:"14em"},onChange:b=>p(c(),"name",b.target.value)}),_(qe,{label:"Comment",style:{width:"14em"},onChange:b=>p(c(),"comment",b.target.value)})]}}),_(me,{direction:"row",get children(){return[_(qe,{label:"Dice",style:{width:"6em"},onChange:b=>p(c(),"dice",b.target.value)}),_(qe,{label:"Modifier",style:{width:"6em"},onChange:b=>p(c(),"modifier",b.target.value)}),_(qe,{label:"Success target",style:{width:"6em"},onChange:b=>p(c(),"successTarget",b.target.value)})]}}),_(go,{label:"Success rule",items:xo,variant:"list",selected:()=>"",onChange:b=>p(c(),"successRule",b),style:{"flex-wrap":"wrap","flex-grow":1,"max-height":"150px","min-width":"400px","align-self":"start",flex:1}}),_(me,{gap:"large",style:{"margin-top":"10px"},get children(){return[_(fe,{onClick:()=>t(!1),children:"Cancel"}),_(fe,{onClick:f,children:"Create"})]}})]}})}})]}})]}})]}}),(()=>{const b=$d();return ti(y=>s.ref(y),b),Je(b,Od),ge(b,_(Yr,{get each(){return h()},children:y=>_(jd,{item:y,onClick:()=>l(y),selected:a,get adjustSize(){return s.adjustSize}})})),b})()]},Yd=Ue("<div>"),Zd=s=>(()=>{const e=Yd();return Je(e,zd),ge(e,_(Se,{get when(){return co()=="rolls"},get children(){return _(Hd,{ref(t){const i=s.chatRef;typeof i=="function"?i(t):s.chatRef=t},get adjustSize(){return s.adjustSize}})}}),null),ge(e,_(Se,{get when(){return co()=="cs"},get children(){return _(Xd,{ref(t){const i=s.csRef;typeof i=="function"?i(t):s.csRef=t},get adjustSize(){return s.adjustSize}})}}),null),e})();function Jd(s){return Tn({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2ZM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10Z"/>'},s)}function Kd(s){return Tn({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>'},s)}var Qd="_16p4fxg1 _1qnkk9w3i _1qnkk9w3x _1qnkk9w2r _1qnkk9w36 _1qnkk9w7u _1qnkk9w7f _1qnkk9w89 _1qnkk9w8o _1qnkk9wj3 _1qnkk9wnc _1qnkk9w9f _1qnkk9w93";const ep=Ue("<div>"),tp=()=>{let s;const[e,t]=Be(!1),[i,r]=Be(!1),[n,o]=Be(!1),[a,l]=Be(!1),[c,u]=Be(""),[d,h]=Be(""),[f,g]=Be(""),[p,m]=Be(""),v=()=>{s&&(s.style.height=`calc(100vh - ${Xl+100}px)`)},x=A=>{v()};Va(()=>{window.addEventListener("resize",x),v()}),En(()=>{window.removeEventListener("resize",x)});const b=be(()=>Object.values(Xs()).sort((A,P)=>A.name.localeCompare(P.name)).map(A=>{let P=A.name;if(A.shared){const I=zu()[A.id];I?P=`${A.name} (${sr()[I].name})`:P=`${A.name} (*)`}return{id:A.id,label:P}})),y=()=>{if(t(!1),c().trim()==""||f().trim()=="")return;const A=Me()?.id;if(!A)return;const P={id:Ul(),name:f(),template:c(),values:{},owner:A,shared:!1};zn(P);const I=b().filter(W=>W.id==P.id);I.length>0&&(tn(void 0),tn(Xs()[I[0].id]))},S=A=>{if(A){tn(void 0);const P=Xs()[A.id];tn(P);const I=uo[P.template];if(!I)return;const W=Vu()[P.id];W?Nn(W):Nn(I.sections.map(j=>j.title))}},T=be(()=>{const A=b().filter(P=>P.id===Tt()?.id);if(!(A.length<=0))return A[0]}),D=()=>{r(!1);const A=Tt();A&&Hu(A.id)},w=()=>{l(!1);const A=Tt(),P=rt();!A||!P||(A.shared?A.shared=!1:A.shared=!0,zn(A))},C=()=>{const A=Tt();if(!A)return;const P=uo[A.template];P&&(Wu().length<=0?Nn(P.sections.map(I=>I.title)):Nn([]))},k=()=>{const A=Tt();if(!A)return;const P=`${A.name}.json`;jl(A,P)},F=()=>{ql(A=>{const P=A;zn(P),Tt(),tn(P)})},O=()=>{o(!1);const A=p();if(!A||A.trim()==="")return;const P=Tt();P&&(P.name=A,zn(P),Hr(Wr(qu),P))},z=be(()=>{const A=Nu[d()];return A?(u(""),A.map(P=>({id:P.id,label:P.name}))):[]});return(()=>{const A=ep();return Je(A,Qd),ge(A,_(me,{direction:"column",get children(){return[_(me,{gap:"small",justify:"space",get children(){return _($l,{component:Wi,labelLeft:!0,selected:T,label:"Char: ",options:b,onChange:S})}}),_(Ou,{ref:P=>s=P}),_(me,{justify:"space",align:"center",grow:!0,get children(){return[_(me,{get children(){return[_(ji,{get open(){return e()},onOpenChange:t,get children(){return[_($i,{title:"Create charsheet",get children(){return _(fe,{get children(){return _(ja,{})}})}}),_(Xi,{title:"Create charsheet",get children(){return[_(qe,{label:"Name",onChange:P=>g(P.target.value)}),_(Wi,{modal:!0,label:"Game",options:()=>Bu,onChange:P=>h(P.id)}),_(Wi,{modal:!0,label:"Type",options:z,onChange:P=>{P&&u(P.id)}}),_(me,{gap:"large",style:{"margin-top":"10px"},get children(){return[_(fe,{onClick:()=>t(!1),children:"Cancel"}),_(fe,{onClick:y,children:"Create"})]}})]}})]}}),_(Mt,{get children(){return[_(bt,{get children(){return _(fe,{onClick:F,get children(){return _(Hl,{})}})}}),_(wt,{children:"Import charsheet"})]}})]}}),_(Se,{get when(){return Tt()},get children(){return _(me,{get children(){return[_(Se,{get when(){return Uu(Tt())},get children(){return[_(bn,{get open(){return i()},onOpenChange:r,get children(){return[_(xn,{title:"Delete charsheet",get children(){return _(fe,{get children(){return _(zs,{})}})}}),_(yn,{title:"Delete charsheet",get children(){return[_(Pe,{get children(){return["Delete ",be(()=>Tt()?.name)," ","?"]}}),_(me,{gap:"large",style:{"margin-top":"10px"},get children(){return[_(fe,{onClick:()=>r(!1),children:"Cancel"}),_(fe,{onClick:D,children:"Delete"})]}})]}})]}}),_(bn,{get open(){return a()},onOpenChange:l,get children(){return[_(xn,{title:"Share charsheet",get children(){return _(fe,{get children(){return _($a,{})}})}}),_(yn,{title:"Share charsheet",get children(){return[_(Fs,{get children(){return[_(di,{get when(){return Tt()?.shared},get children(){return _(Pe,{get children(){return["Stop sharing ",be(()=>Tt()?.name)," ","?"]}})}}),_(di,{get when(){return!Tt()?.shared},get children(){return _(Pe,{get children(){return["Share ",be(()=>Tt()?.name)," ","?"]}})}})]}}),_(me,{gap:"large",style:{"margin-top":"10px"},get children(){return[_(fe,{onClick:()=>l(!1),children:"Cancel"}),_(fe,{onClick:w,children:"Accept"})]}})]}})]}}),_(ji,{get open(){return n()},onOpenChange:o,get children(){return[_($i,{title:"Rename charsheet",get children(){return _(fe,{get children(){return _(Gu,{})}})}}),_(Xi,{title:"Rename charsheet",get children(){return[_(qe,{label:"Name",get value(){return Tt()?.name},onChange:P=>m(P.target.value)}),_(me,{gap:"large",style:{"margin-top":"10px"},get children(){return[_(fe,{onClick:()=>o(!1),children:"Cancel"}),_(fe,{onClick:O,children:"Rename"})]}})]}})]}})]}}),_(Mt,{get children(){return[_(bt,{get children(){return _(fe,{onClick:k,get children(){return _(Wl,{})}})}}),_(wt,{children:"Export charsheet"})]}}),_(Mt,{get children(){return[_(bt,{get children(){return _(fe,{onClick:C,get children(){return _(Jd,{})}})}}),_(wt,{children:"Toggle expand all"})]}})]}})}})]}})]}})),A})()};function ip(s){return Tn({a:{viewBox:"0 0 1024 1024"},c:'<path d="m899.1 869.6-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-.3 1.5-.4 3-.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-.1 4.4-.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"/>'},s)}var rp="_11sash83 _1qnkk9w2r _1qnkk9w36 _1qnkk9w3l _1qnkk9w40 _1qnkk9w83 _1qnkk9w7o _1qnkk9w8i _1qnkk9w8x _1qnkk9w1f _1qnkk9wj9 _1qnkk9wjd _1qnkk9wbr _1qnkk9w2c _1qnkk9wnr _1qnkk9w1x _1qnkk9w6o",np="_11sash85 _1qnkk9w2o _1qnkk9w33 _1qnkk9w3i _1qnkk9w3x _1qnkk9w83 _1qnkk9w7o _1qnkk9w8i _1qnkk9w8x _1qnkk9w1f _1qnkk9wjr _1qnkk9wb3 _1qnkk9w2c _1qnkk9wnc _1qnkk9w9f _1qnkk9w1x _1qnkk9w6i",sp=gr({defaultClassName:"_1qnkk9w2l _1qnkk9w30 _1qnkk9w3f _1qnkk9w3u _1qnkk9w1f _1qnkk9w1r _1qnkk9w63",variantClassNames:{},defaultVariants:{},compoundVariants:[]}),ap="_11sash81 _1qnkk9w3l _1qnkk9w40 _1qnkk9w1f _1qnkk9w26 _1qnkk9wj3 _1qnkk9w36 _1qnkk9w2u _1qnkk9w2c _1qnkk9w63";const op=Ue("<div>"),lp=Ue('<div title="Click to increase dice pool. Shift+click to decrease."><div>'),Js=15,Fi=s=>{const e=i=>{let r=Ts()[s.face];r||(r=0),i.shiftKey?r-=1:r+=1,r<0&&(r=0),r>Js&&(r=Js,je(`Maximum dice pool size for a dice face is ${Js}.`)),Yl(n=>({...n,[s.face]:r}))},t=be(()=>{const i=Ts()[s.face];return i||0});return(()=>{const i=lp(),r=i.firstChild;return i.$$click=n=>e(n),Je(i,rp),ge(r,()=>s.label),ge(i,_(Se,{get when(){return t()>0},get children(){const n=op();return Je(n,np),ge(n,t),n}}),null),i})()};ju(["click"]);const cp=Ue("<div>"),up=()=>(()=>{const s=cp();return ge(s,_(Fi,{face:"4",label:"4"}),null),ge(s,_(Fi,{face:"6",label:"6"}),null),ge(s,_(Fi,{face:"8",label:"8"}),null),ge(s,_(Fi,{face:"10",label:"10"}),null),ge(s,_(Fi,{face:"12",label:"12"}),null),ge(s,_(Fi,{face:"20",label:"20"}),null),ge(s,_(Fi,{face:"100",label:"100"}),null),ge(s,_(Fi,{face:"f",label:"F"}),null),nt(()=>Je(s,sp({}))),s})(),hp=Ue("<div>"),dp=({priv:s})=>{const[e,t]=Be(!1),i=async()=>{const r=document.getElementById("dice-modifier");if(!r)return;let n=Number.parseInt(r.value);if(t(!1),Number.isNaN(n)&&(n=0),Ur()||!rt()||rt()?.id==""){je("You need to select a room for a roll");return}const o=Di();if(!o)return;const a=Ts();if(!a||Object.values(a).length==0){je("No dice selected");return}const l=Object.entries(a).filter(([c,u])=>u>0).map(([c,u])=>`${u}d${c}`);if(l.length<=0){je("No proper dice selected");return}Cs(!0),await o.updateConfig({theme_colorset:Me()?.settings.diceColor,theme_texture:Me()?.settings.diceMaterial}),n!==0?await o.roll(`${l.join("+")}+${n}`):await o.roll(`${l.join("+")}`)};return _(ji,{get open(){return e()},onOpenChange:t,modal:!0,get children(){return[_($i,{get children(){return _(fe,{get children(){return[_(Se,{when:s,get children(){return _(Ms,{fill:"currentColor"})}}),_(Se,{when:!s,get children(){return _(Zl,{fill:"currentColor"})}}),_(Pe,{colorSchema:s?"secondary":void 0,children:"Roll"})]}})}}),_(Xi,{title:"Roll modifier",get children(){return[_(qe,{id:"dice-modifier",label:"Value"}),_(me,{gap:"large",align:"center",justify:"center",get children(){return _(fe,{onClick:()=>vn(i),children:"Roll"})}})]}})]}})},pp=s=>{let e;const t=()=>{Yl({})},i=async()=>{if(Ur()||!rt()||rt()?.id==""){je("You need to select a room for a roll");return}const o=Di();if(!o)return;const a=Ts();if(!a||Object.values(a).length==0){je("No dice selected");return}const l=Object.entries(a).filter(([c,u])=>u>0).map(([c,u])=>`${u}d${c}`);l.length<=0||(Cs(!0),await o.updateConfig({theme_colorset:Me()?.settings.diceColor,theme_texture:Me()?.settings.diceMaterial}),await o.roll(l.join("+")))},r=o=>{e&&Jl(e.value)},n=()=>{const o=Di();!o||Ur()||Kl()||o.clearDice()};return(()=>{const o=hp(),a=s.ref;return typeof a=="function"?ti(a,o):s.ref=o,Je(o,ap),ge(o,_(me,{align:"center",gap:"small",get children(){return[_(Se,{get when(){return!Ur()},get children(){return[_(Se,{get when(){return!On()},get children(){return _(Fs,{get children(){return[_(di,{get when(){return rn()},get children(){return _(fe,{onClick:()=>vn(i),get children(){return[_(Ms,{}),_(Pe,{colorSchema:"secondary",children:"Roll"})]}})}}),_(di,{get when(){return!rn()},get children(){return _(fe,{onClick:()=>vn(i),get children(){return[_(Zl,{}),_(Pe,{children:"Roll"})]}})}})]}})}}),_(Se,{get when(){return On()},get children(){return _(dp,{get priv(){return rn()}})}}),_(Mt,{get children(){return[_(bt,{get children(){return _(fe,{get toggled(){return rn()},onClick:()=>$u(!rn()),get children(){return _(Ms,{})}})}}),_(wt,{children:"Toggle private roll"})]}}),_(Mt,{get children(){return[_(bt,{get children(){return _(fe,{get toggled(){return On()},onClick:()=>Xu(!On()),get children(){return _(Bd,{fill:"currentColor"})}})}}),_(wt,{children:"Toggle additional modifier"})]}}),_(Mt,{get children(){return[_(bt,{get children(){return _(qe,{placeholder:"Comment",ref:l=>e=l,style:{width:"12em"},onInput:l=>r()})}}),_(wt,{children:"Comment"})]}})]}}),_(Se,{get when(){return Ur()},get children(){return[_(fe,{get children(){return[_(Yu,{}),_(Pe,{children:"Rolling..."})]}}),_(qe,{placeholder:"Please wait",disabled:!0})]}})]}}),null),ge(o,_(me,{gap:"medium",align:"center",justify:"center",get children(){return[_(Mt,{get children(){return[_(bt,{get children(){return _(fe,{onClick:t,get children(){return _(Zu,{})}})}}),_(wt,{children:"Reset dice pool"})]}}),_(up,{}),_(Mt,{get children(){return[_(bt,{get children(){return _(fe,{onClick:n,get children(){return _(ip,{})}})}}),_(wt,{children:"Clear table"})]}})]}}),null),o})()};var mp=Object.defineProperty,fp=(s,e,t)=>e in s?mp(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,gp=(s,e,t)=>(fp(s,typeof e!="symbol"?e+"":e,t),t);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="143",Ri="srgb",nr="srgb-linear",yo="300 es";class Zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,za=180/Math.PI;function An(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[s&255]+_t[s>>8&255]+_t[s>>16&255]+_t[s>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function zt(s,e,t){return Math.max(e,Math.min(t,s))}function vp(s,e){return(s%e+e)%e}function Qs(s,e,t){return(1-t)*s+t*e}function bo(s){return(s&s-1)===0&&s!==0}function Na(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*r+e.x,this.y=n*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,n,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=n,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],p=r[0],m=r[3],v=r[6],x=r[1],b=r[4],y=r[7],S=r[2],T=r[5],D=r[8];return n[0]=o*p+a*x+l*S,n[3]=o*m+a*b+l*T,n[6]=o*v+a*y+l*D,n[1]=c*p+u*x+d*S,n[4]=c*m+u*b+d*T,n[7]=c*v+u*y+d*D,n[2]=h*p+f*x+g*S,n[5]=h*m+f*b+g*T,n[8]=h*v+f*y+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*n*u+i*a*l+r*n*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*n,f=c*n-o*l,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(r*c-u*i)*p,e[2]=(a*i-r*o)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*n-a*t)*p,e[6]=f*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*n)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,o,a){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,n=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*n+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*n+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function gc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ea={[Ri]:{[nr]:or},[nr]:{[Ri]:bs}},Yt={legacyMode:!0,get workingColorSpace(){return nr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(ea[e]&&ea[e][t]!==void 0){const i=ea[e][t];return s.r=i(s.r),s.g=i(s.g),s.b=i(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ct={r:0,g:0,b:0},Zt={h:0,s:0,l:0},qn={h:0,s:0,l:0};function ta(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function jn(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nr){return this.r=e,this.g=t,this.b=i,Yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nr){if(e=vp(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=ta(o,n,e+1/3),this.g=ta(o,n,e),this.b=ta(o,n,e-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ri){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,Yt.toWorkingColorSpace(this,t),i(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,Yt.toWorkingColorSpace(this,t),i(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(n[1])/360,c=parseInt(n[2],10)/100,u=parseInt(n[3],10)/100;return i(n[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],o=n.length;if(o===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,Yt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,Yt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ri){const i=vc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Yt.fromWorkingColorSpace(jn(this,ct),e),zt(ct.r*255,0,255)<<16^zt(ct.g*255,0,255)<<8^zt(ct.b*255,0,255)<<0}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nr){Yt.fromWorkingColorSpace(jn(this,ct),t);const i=ct.r,r=ct.g,n=ct.b,o=Math.max(i,r,n),a=Math.min(i,r,n);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-n)/d+(r<n?6:0);break;case r:l=(n-i)/d+2;break;case n:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nr){return Yt.fromWorkingColorSpace(jn(this,ct),t),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=Ri){return Yt.fromWorkingColorSpace(jn(this,ct),e),e!==Ri?`color(${e} ${ct.r} ${ct.g} ${ct.b})`:`rgb(${ct.r*255|0},${ct.g*255|0},${ct.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Zt),Zt.h+=e,Zt.s+=t,Zt.l+=i,this.setHSL(Zt.h,Zt.s,Zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zt),e.getHSL(qn);const i=Qs(Zt.h,qn.h,t),r=Qs(Zt.s,qn.s,t),n=Qs(Zt.l,qn.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ze.NAMES=vc;let br;class _c{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=ks("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let o=0;o<n.length;o++)n[o]=or(n[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(or(t[i]/255)*255):t[i]=or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class xc{constructor(e=null){this.isSource=!0,this.uuid=An(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?n.push(ia(r[o].image)):n.push(ia(r[o]))}else n=ia(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function ia(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_c.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _p=0;class Ut extends Zr{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=1001,r=1001,n=1006,o=1008,a=1023,l=1009,c=1,u=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=An(),this.name="",this.source=new xc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=300;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const o=e.elements,a=o[0],l=o[4],c=o[8],u=o[1],d=o[5],h=o[9],f=o[2],g=o[6],p=o[10];if(Math.abs(l-u)<.01&&Math.abs(c-f)<.01&&Math.abs(h-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+f)<.1&&Math.abs(h+g)<.1&&Math.abs(a+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(a+1)/2,x=(d+1)/2,b=(p+1)/2,y=(l+u)/4,S=(c+f)/4,T=(h+g)/4;return v>x&&v>b?v<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(v),r=y/i,n=S/i):x>b?x<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(x),i=y/r,n=T/r):b<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(b),i=S/n,r=T/n),this.set(i,r,n,t),this}let m=Math.sqrt((g-h)*(g-h)+(c-f)*(c-f)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(g-h)/m,this.y=(c-f)/m,this.z=(u-l)/m,this.w=Math.acos((a+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pr extends Zr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:1006,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yc extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xp extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=n[o+0],f=n[o+1],g=n[o+2],p=n[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==h||c!==f||u!==g){let m=1-a;const v=l*h+c*f+u*g+d*p,x=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const S=Math.sqrt(b),T=Math.atan2(S,v*x);m=Math.sin(m*T)/S,a=Math.sin(a*T)/S}const y=a*x;if(l=l*m+h*y,c=c*m+f*y,u=u*m+g*y,d=d*m+p*y,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,n,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=n[o],h=n[o+1],f=n[o+2],g=n[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,n=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(n/2),h=l(i/2),f=l(r/2),g=l(n/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(n-c)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(n+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(n-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(n+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-n*l,this._y=r*u+o*l+n*a-i*c,this._z=n*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+n*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=n,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=n*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-n*r,d=l*r+n*i-o*t,h=-n*t-o*i-a*r;return this.x=c*l+h*-n+u*-a-d*-o,this.y=u*l+h*-o+d*-n-c*-a,this.z=d*l+h*-a+c*-o-u*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-n*a,this.y=n*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new U,wo=new Rn;class Dn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<i&&(i=d),h<r&&(r=h),u>n&&(n=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(n,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<i&&(i=d),h<r&&(r=h),u>n&&(n=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(n,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const n=i.attributes.position;for(let o=0,a=n.count;o<a;o++)Zi.fromBufferAttribute(n,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zi)}else i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox),na.applyMatrix4(e.matrixWorld),this.union(na);const r=e.children;for(let n=0,o=r.length;n<o;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sn),$n.subVectors(this.max,sn),wr.subVectors(e.a,sn),Mr.subVectors(e.b,sn),Sr.subVectors(e.c,sn),zi.subVectors(Mr,wr),Ni.subVectors(Sr,Mr),Ji.subVectors(wr,Sr);let t=[0,-zi.z,zi.y,0,-Ni.z,Ni.y,0,-Ji.z,Ji.y,zi.z,0,-zi.x,Ni.z,0,-Ni.x,Ji.z,0,-Ji.x,-zi.y,zi.x,0,-Ni.y,Ni.x,0,-Ji.y,Ji.x,0];return!sa(t,wr,Mr,Sr,$n)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,wr,Mr,Sr,$n))?!1:(Xn.crossVectors(zi,Ni),t=[Xn.x,Xn.y,Xn.z],sa(t,wr,Mr,Sr,$n))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Zi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new U,new U,new U,new U,new U,new U,new U,new U],Zi=new U,na=new Dn,wr=new U,Mr=new U,Sr=new U,zi=new U,Ni=new U,Ji=new U,sn=new U,$n=new U,Xn=new U,Ki=new U;function sa(s,e,t,i,r){for(let n=0,o=s.length-3;n<=o;n+=3){Ki.fromArray(s,n);const a=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yp=new Dn,Mo=new U,Yn=new U,aa=new U;class wn{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yp.setFromPoints(e).getCenter(i);let r=0;for(let n=0,o=e.length;n<o;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){aa.subVectors(e,this.center);const t=aa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(aa.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Yn.set(0,0,1).multiplyScalar(e.radius):Yn.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Mo.copy(e.center).add(Yn)),this.expandByPoint(Mo.copy(e.center).sub(Yn)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new U,oa=new U,Zn=new U,Oi=new U,la=new U,Jn=new U,ca=new U;class bp{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.direction).multiplyScalar(t).add(this.origin),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){oa.copy(e).add(t).multiplyScalar(.5),Zn.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(oa);const n=e.distanceTo(t)*.5,o=-this.direction.dot(Zn),a=Oi.dot(this.direction),l=-Oi.dot(Zn),c=Oi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=n*u,d>=0)if(h>=-g)if(h<=g){const p=1/u;d*=p,h*=p,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=n,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-n,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*n+a)),h=d>0?-n:Math.min(Math.max(-n,-l),n),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-n,-l),n),f=h*(h+2*l)+c):(d=Math.max(0,-(o*n+a)),h=d>0?n:Math.min(Math.max(-n,-l),n),f=-d*d+h*(h+2*l)+c);else h=o>0?-n:n,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Zn).multiplyScalar(h).add(oa),f}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,n=e.radius*e.radius;if(r>n)return null;const o=Math.sqrt(n-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(n=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(n=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||n>r||((n>i||i!==i)&&(i=n),(o<r||r!==r)&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,n){la.subVectors(t,e),Jn.subVectors(i,e),ca.crossVectors(la,Jn);let o=this.direction.dot(ca),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(Jn.crossVectors(Oi,Jn));if(l<0)return null;const c=a*this.direction.dot(la.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(ca);return u<0?null:this.at(u/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,n,o,a,l,c,u,d,h,f,g,p,m){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=n,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=d,v[14]=h,v[3]=f,v[7]=g,v[11]=p,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),n=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,p=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,p=c*d;t[0]=h+p*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,p=c*d;t[0]=h-p*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,p=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+p,t[1]=l*d,t[5]=p*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-p*d}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+p,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=p*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wp,e,Mp)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Bi.crossVectors(i,kt),Bi.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Bi.crossVectors(i,kt)),Bi.normalize(),Kn.crossVectors(kt,Bi),r[0]=Bi.x,r[4]=Kn.x,r[8]=kt.x,r[1]=Bi.y,r[5]=Kn.y,r[9]=kt.y,r[2]=Bi.z,r[6]=Kn.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],p=i[6],m=i[10],v=i[14],x=i[3],b=i[7],y=i[11],S=i[15],T=r[0],D=r[4],w=r[8],C=r[12],k=r[1],F=r[5],O=r[9],z=r[13],A=r[2],P=r[6],I=r[10],W=r[14],j=r[3],B=r[7],q=r[11],ee=r[15];return n[0]=o*T+a*k+l*A+c*j,n[4]=o*D+a*F+l*P+c*B,n[8]=o*w+a*O+l*I+c*q,n[12]=o*C+a*z+l*W+c*ee,n[1]=u*T+d*k+h*A+f*j,n[5]=u*D+d*F+h*P+f*B,n[9]=u*w+d*O+h*I+f*q,n[13]=u*C+d*z+h*W+f*ee,n[2]=g*T+p*k+m*A+v*j,n[6]=g*D+p*F+m*P+v*B,n[10]=g*w+p*O+m*I+v*q,n[14]=g*C+p*z+m*W+v*ee,n[3]=x*T+b*k+y*A+S*j,n[7]=x*D+b*F+y*P+S*B,n[11]=x*w+b*O+y*I+S*q,n[15]=x*C+b*z+y*W+S*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],p=e[7],m=e[11],v=e[15];return g*(+n*l*d-r*c*d-n*a*h+i*c*h+r*a*f-i*l*f)+p*(+t*l*f-t*c*h+n*o*h-r*o*f+r*c*u-n*l*u)+m*(+t*c*d-t*a*f-n*o*d+i*o*f+n*a*u-i*c*u)+v*(-r*a*u-t*l*d+t*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],p=e[13],m=e[14],v=e[15],x=d*m*c-p*h*c+p*l*f-a*m*f-d*l*v+a*h*v,b=g*h*c-u*m*c-g*l*f+o*m*f+u*l*v-o*h*v,y=u*p*c-g*d*c+g*a*f-o*p*f-u*a*v+o*d*v,S=g*d*l-u*p*l-g*a*h+o*p*h+u*a*m-o*d*m,T=t*x+i*b+r*y+n*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=x*D,e[1]=(p*h*n-d*m*n-p*r*f+i*m*f+d*r*v-i*h*v)*D,e[2]=(a*m*n-p*l*n+p*r*c-i*m*c-a*r*v+i*l*v)*D,e[3]=(d*l*n-a*h*n-d*r*c+i*h*c+a*r*f-i*l*f)*D,e[4]=b*D,e[5]=(u*m*n-g*h*n+g*r*f-t*m*f-u*r*v+t*h*v)*D,e[6]=(g*l*n-o*m*n-g*r*c+t*m*c+o*r*v-t*l*v)*D,e[7]=(o*h*n-u*l*n+u*r*c-t*h*c-o*r*f+t*l*f)*D,e[8]=y*D,e[9]=(g*d*n-u*p*n-g*i*f+t*p*f+u*i*v-t*d*v)*D,e[10]=(o*p*n-g*a*n+g*i*c-t*p*c-o*i*v+t*a*v)*D,e[11]=(u*a*n-o*d*n-u*i*c+t*d*c+o*i*f-t*a*f)*D,e[12]=S*D,e[13]=(u*p*r-g*d*r+g*i*h-t*p*h-u*i*m+t*d*m)*D,e[14]=(g*a*r-o*p*r-g*i*l+t*p*l+o*i*m-t*a*m)*D,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*h+t*a*h)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,o=e.x,a=e.y,l=e.z,c=n*o,u=n*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,o){return this.set(1,i,n,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,o=t._y,a=t._z,l=t._w,c=n+n,u=o+o,d=a+a,h=n*c,f=n*u,g=n*d,p=o*u,m=o*d,v=a*d,x=l*c,b=l*u,y=l*d,S=i.x,T=i.y,D=i.z;return r[0]=(1-(p+v))*S,r[1]=(f+y)*S,r[2]=(g-b)*S,r[3]=0,r[4]=(f-y)*T,r[5]=(1-(h+v))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(g+b)*D,r[9]=(m-x)*D,r[10]=(1-(h+p))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Er.set(r[0],r[1],r[2]).length();const o=Er.set(r[4],r[5],r[6]).length(),a=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const l=1/n,c=1/o,u=1/a;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=c,Jt.elements[5]*=c,Jt.elements[6]*=c,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),i.x=n,i.y=o,i.z=a,this}makePerspective(e,t,i,r,n,o){const a=this.elements,l=2*n/(t-e),c=2*n/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),h=-(o+n)/(o-n),f=-2*o*n/(o-n);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,n,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-n),d=(t+e)*l,h=(i+r)*c,f=(o+n)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Er=new U,Jt=new dt,wp=new U(0,0,0),Mp=new U(1,1,1),Bi=new U,Kn=new U,kt=new U,So=new dt,Eo=new Rn;class Ln{constructor(e=0,t=0,i=0,r=Ln.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return So.makeRotationFromQuaternion(e),this.setFromRotationMatrix(So,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eo.setFromEuler(this),this.setFromQuaternion(Eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ln.DefaultOrder="XYZ";Ln.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sp=0;const To=new U,Tr=new Rn,bi=new dt,Qn=new U,an=new U,Ep=new U,Tp=new Rn,Co=new U(1,0,0),Ao=new U(0,1,0),Ro=new U(0,0,1),Cp={type:"added"},Do={type:"removed"};class Ct extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DefaultUp.clone();const e=new U,t=new Ln,i=new Rn,r=new U(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new jt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Ct.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Co,e)}rotateY(e){return this.rotateOnAxis(Ao,e)}rotateZ(e){return this.rotateOnAxis(Ro,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Co,e)}translateY(e){return this.translateOnAxis(Ao,e)}translateZ(e){return this.translateOnAxis(Ro,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qn.copy(e):Qn.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),an.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(an,Qn,this.up):bi.lookAt(Qn,an,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(bi),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Do)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Do)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(an,e,Ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(an,Tp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,o=r.length;n<o;n++)r[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];n(e.shapes,d)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(n(e.materials,this.material[l]));r.material=a}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(n(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DefaultUp=new U(0,1,0);Ct.DefaultMatrixAutoUpdate=!0;const Kt=new U,wi=new U,ua=new U,Mi=new U,Cr=new U,Ar=new U,Lo=new U,ha=new U,da=new U,pa=new U;class Li{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kt.subVectors(e,t),r.cross(Kt);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Kt.subVectors(r,t),wi.subVectors(i,t),ua.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(wi),l=Kt.dot(ua),c=wi.dot(wi),u=wi.dot(ua),d=o*c-a*a;if(d===0)return n.set(-2,-1,-1);const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return n.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mi),Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,i,r,n,o,a,l){return this.getBarycoord(e,t,i,r,Mi),l.set(0,0),l.addScaledVector(n,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l}static isFrontFacing(e,t,i,r){return Kt.subVectors(i,t),wi.subVectors(e,t),Kt.cross(wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Kt.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Li.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let o,a;Cr.subVectors(r,i),Ar.subVectors(n,i),ha.subVectors(e,i);const l=Cr.dot(ha),c=Ar.dot(ha);if(l<=0&&c<=0)return t.copy(i);da.subVectors(e,r);const u=Cr.dot(da),d=Ar.dot(da);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Cr,o);pa.subVectors(e,n);const f=Cr.dot(pa),g=Ar.dot(pa);if(g>=0&&f<=g)return t.copy(n);const p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ar,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Lo.subVectors(n,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Lo,a);const v=1/(m+p+h);return o=p*v,a=h*v,t.copy(i).addScaledVector(Cr,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ap=0;class vr extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=An(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===1;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(n){const o=[];for(const a in n){const l=n[a];delete l.metadata,o.push(l)}return o}if(t){const n=r(e.textures),o=r(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wc extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new U,es=new Ne;class mi{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new ze),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Ne),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new U),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new ht),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Mc extends mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sc extends mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Rp=0;const Wt=new dt,ma=new Ct,Rr=new U,It=new Dn,on=new Dn,ft=new U;class fi extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gc(e)?Sc:Mc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new jt().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];It.setFromBufferAttribute(n),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];on.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(It.min,on.min),It.expandByPoint(ft),ft.addVectors(It.max,on.max),It.expandByPoint(ft)):(It.expandByPoint(on.min),It.expandByPoint(on.max))}It.getCenter(i);let r=0;for(let n=0,o=e.count;n<o;n++)ft.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(ft));if(t)for(let n=0,o=t.length;n<o;n++){const a=t[n],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ft.fromBufferAttribute(a,c),l&&(Rr.fromBufferAttribute(e,c),ft.add(Rr)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let k=0;k<a;k++)c[k]=new U,u[k]=new U;const d=new U,h=new U,f=new U,g=new Ne,p=new Ne,m=new Ne,v=new U,x=new U;function b(k,F,O){d.fromArray(r,k*3),h.fromArray(r,F*3),f.fromArray(r,O*3),g.fromArray(o,k*2),p.fromArray(o,F*2),m.fromArray(o,O*2),h.sub(d),f.sub(d),p.sub(g),m.sub(g);const z=1/(p.x*m.y-m.x*p.y);!isFinite(z)||(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(z),x.copy(f).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(z),c[k].add(v),c[F].add(v),c[O].add(v),u[k].add(x),u[F].add(x),u[O].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let k=0,F=y.length;k<F;++k){const O=y[k],z=O.start,A=O.count;for(let P=z,I=z+A;P<I;P+=3)b(i[P+0],i[P+1],i[P+2])}const S=new U,T=new U,D=new U,w=new U;function C(k){D.fromArray(n,k*3),w.copy(D);const F=c[k];S.copy(F),S.sub(D.multiplyScalar(D.dot(F))).normalize(),T.crossVectors(w,F);const O=T.dot(u[k])<0?-1:1;l[k*4]=S.x,l[k*4+1]=S.y,l[k*4+2]=S.z,l[k*4+3]=O}for(let k=0,F=y.length;k<F;++k){const O=y[k],z=O.start,A=O.count;for(let P=z,I=z+A;P<I;P+=3)C(i[P+0]),C(i[P+1]),C(i[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new U,n=new U,o=new U,a=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),p=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),n.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,n),d.subVectors(r,n),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,n),d.subVectors(r,n),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const n=i[r].array,o=e.attributes[r],a=o.array,l=o.itemSize*t,c=Math.min(a.length,n.length-l);for(let u=0,d=l;u<c;u++,d++)n[d]=a[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*u;for(let v=0;v<u;v++)h[g++]=c[f++]}return new mi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const n=this.morphAttributes;for(const a in n){const l=[],c=n[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const n=e.morphAttributes;for(const c in n){const u=[],d=n[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new dt,Dr=new bp,fa=new wn,Ui=new U,Gi=new U,Vi=new U,ga=new U,va=new U,_a=new U,ts=new U,is=new U,rs=new U,ns=new Ne,ss=new Ne,as=new Ne,xa=new U,os=new U;class pi extends Ct{constructor(e=new fi,t=new wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(n),e.ray.intersectsSphere(fa)===!1)||(Po.copy(n).invert(),Dr.copy(e.ray).applyMatrix4(Po),i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,d=i.attributes.uv,h=i.attributes.uv2,f=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,m=f.length;p<m;p++){const v=f[p],x=r[v.materialIndex],b=Math.max(v.start,g.start),y=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let S=b,T=y;S<T;S+=3){const D=a.getX(S),w=a.getX(S+1),C=a.getX(S+2);o=ls(this,x,e,Dr,l,c,u,d,h,D,w,C),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let v=p,x=m;v<x;v+=3){const b=a.getX(v),y=a.getX(v+1),S=a.getX(v+2);o=ls(this,r,e,Dr,l,c,u,d,h,b,y,S),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,m=f.length;p<m;p++){const v=f[p],x=r[v.materialIndex],b=Math.max(v.start,g.start),y=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let S=b,T=y;S<T;S+=3){const D=S,w=S+1,C=S+2;o=ls(this,x,e,Dr,l,c,u,d,h,D,w,C),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let v=p,x=m;v<x;v+=3){const b=v,y=v+1,S=v+2;o=ls(this,r,e,Dr,l,c,u,d,h,b,y,S),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Dp(s,e,t,i,r,n,o,a){let l;if(e.side===1?l=i.intersectTriangle(o,n,r,!0,a):l=i.intersectTriangle(r,n,o,e.side!==2,a),l===null)return null;os.copy(a),os.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(os);return c<t.near||c>t.far?null:{distance:c,point:os.clone(),object:s}}function ls(s,e,t,i,r,n,o,a,l,c,u,d){Ui.fromBufferAttribute(r,c),Gi.fromBufferAttribute(r,u),Vi.fromBufferAttribute(r,d);const h=s.morphTargetInfluences;if(n&&h){ts.set(0,0,0),is.set(0,0,0),rs.set(0,0,0);for(let g=0,p=n.length;g<p;g++){const m=h[g],v=n[g];m!==0&&(ga.fromBufferAttribute(v,c),va.fromBufferAttribute(v,u),_a.fromBufferAttribute(v,d),o?(ts.addScaledVector(ga,m),is.addScaledVector(va,m),rs.addScaledVector(_a,m)):(ts.addScaledVector(ga.sub(Ui),m),is.addScaledVector(va.sub(Gi),m),rs.addScaledVector(_a.sub(Vi),m)))}Ui.add(ts),Gi.add(is),Vi.add(rs)}s.isSkinnedMesh&&(s.boneTransform(c,Ui),s.boneTransform(u,Gi),s.boneTransform(d,Vi));const f=Dp(s,e,t,i,Ui,Gi,Vi,xa);if(f){a&&(ns.fromBufferAttribute(a,c),ss.fromBufferAttribute(a,u),as.fromBufferAttribute(a,d),f.uv=Li.getUV(xa,Ui,Gi,Vi,ns,ss,as,new Ne)),l&&(ns.fromBufferAttribute(l,c),ss.fromBufferAttribute(l,u),as.fromBufferAttribute(l,d),f.uv2=Li.getUV(xa,Ui,Gi,Vi,ns,ss,as,new Ne));const g={a:c,b:u,c:d,normal:new U,materialIndex:0};Li.getNormal(Ui,Gi,Vi,g.normal),f.face=g}return f}class Pn extends fi{constructor(e=1,t=1,i=1,r=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:o};const a=this;r=Math.floor(r),n=Math.floor(n),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,n,0),g("z","y","x",1,-1,i,t,-e,o,n,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,n,4),g("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function g(p,m,v,x,b,y,S,T,D,w,C){const k=y/D,F=S/w,O=y/2,z=S/2,A=T/2,P=D+1,I=w+1;let W=0,j=0;const B=new U;for(let q=0;q<I;q++){const ee=q*F-z;for(let H=0;H<P;H++){const Q=H*k-O;B[p]=Q*x,B[m]=ee*b,B[v]=A,c.push(B.x,B.y,B.z),B[p]=0,B[m]=0,B[v]=T>0?1:-1,u.push(B.x,B.y,B.z),d.push(H/D),d.push(1-q/w),W+=1}}for(let q=0;q<w;q++)for(let ee=0;ee<D;ee++){const H=h+ee+P*q,Q=h+ee+P*(q+1),he=h+(ee+1)+P*(q+1),ke=h+(ee+1)+P*q;l.push(H,Q,ke),l.push(Q,he,ke),j+=6}a.addGroup(f,j,C),f+=j,h+=W}}static fromJSON(e){return new Pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xr(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const r=s[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function xt(s){const e={};for(let t=0;t<s.length;t++){const i=Xr(s[t]);for(const r in i)e[r]=i[r]}return e}function Lp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const Pp={clone:Xr,merge:xt};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=Lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ec extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends Ec{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;n+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=90,Pr=1;class Fp extends Ct{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Nt(Lr,Pr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new U(1,0,0)),this.add(r);const n=new Nt(Lr,Pr,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new U(-1,0,0)),this.add(n);const o=new Nt(Lr,Pr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new U(0,1,0)),this.add(o);const a=new Nt(Lr,Pr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new U(0,-1,0)),this.add(a);const l=new Nt(Lr,Pr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new U(0,0,1)),this.add(l);const c=new Nt(Lr,Pr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new U(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Tc extends Ut{constructor(e,t,i,r,n,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,i,r,n,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zp extends pr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Pn(5,5,5),n=new mr({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});n.uniforms.tEquirect.value=t;const o=new pi(r,n),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Fp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(n)}}const ya=new U,Np=new U,Op=new jt;class er{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ya.subVectors(i,t).cross(Np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(ya),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Op.getNormalMatrix(e),r=this.coplanarPoint(ya).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new wn,cs=new U;class Za{constructor(e=new er,t=new er,i=new er,r=new er,n=new er,o=new er){this.planes=[e,t,i,r,n,o]}set(e,t,i,r,n,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(n),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7],h=i[8],f=i[9],g=i[10],p=i[11],m=i[12],v=i[13],x=i[14],b=i[15];return t[0].setComponents(a-r,d-l,p-h,b-m).normalize(),t[1].setComponents(a+r,d+l,p+h,b+m).normalize(),t[2].setComponents(a+n,d+c,p+f,b+v).normalize(),t[3].setComponents(a-n,d-c,p-f,b-v).normalize(),t[4].setComponents(a-o,d-u,p-g,b-x).normalize(),t[5].setComponents(a+o,d+u,p+g,b+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cs.x=r.normal.x>0?e.max.x:e.min.x,cs.y=r.normal.y>0?e.max.y:e.min.y,cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cc(){let s=null,e=!1,t=null,i=null;function r(n,o){t(n,o),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){s=n}}}function Bp(s,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,f=s.createBuffer();s.bindBuffer(u,f),s.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function n(c,u,d){const h=u.array,f=u.updateRange;s.bindBuffer(d,c),f.count===-1?s.bufferSubData(d,0,h):(t?s.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):s.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(s.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(n(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class Bs extends fi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],p=[],m=[];for(let v=0;v<u;v++){const x=v*h-o;for(let b=0;b<c;b++){const y=b*d-n;g.push(y,-x,0),p.push(0,0,1),m.push(b/a),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const b=x+c*v,y=x+c*(v+1),S=x+1+c*(v+1),T=x+1+c*v;f.push(b,y,T),f.push(y,S,T)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(p,3)),this.setAttribute("uv",new yt(m,2))}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp="vec3 transformed = vec3( position );",$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Yp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,om=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Sm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Cm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Am=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,km=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Qm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_f=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,yf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Af=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Df=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Lf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Pf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,kf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,If=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ff=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,zf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,og=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:Up,alphamap_pars_fragment:Gp,alphatest_fragment:Vp,alphatest_pars_fragment:Hp,aomap_fragment:Wp,aomap_pars_fragment:qp,begin_vertex:jp,beginnormal_vertex:$p,bsdfs:Xp,iridescence_fragment:Yp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:em,color_fragment:tm,color_pars_fragment:im,color_pars_vertex:rm,color_vertex:nm,common:sm,cube_uv_reflection_fragment:am,defaultnormal_vertex:om,displacementmap_pars_vertex:lm,displacementmap_vertex:cm,emissivemap_fragment:um,emissivemap_pars_fragment:hm,encodings_fragment:dm,encodings_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:fm,envmap_pars_fragment:gm,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Am,envmap_vertex:_m,fog_vertex:xm,fog_pars_vertex:ym,fog_fragment:bm,fog_pars_fragment:wm,gradientmap_pars_fragment:Mm,lightmap_fragment:Sm,lightmap_pars_fragment:Em,lights_lambert_vertex:Tm,lights_pars_begin:Cm,lights_toon_fragment:Rm,lights_toon_pars_fragment:Dm,lights_phong_fragment:Lm,lights_phong_pars_fragment:Pm,lights_physical_fragment:km,lights_physical_pars_fragment:Im,lights_fragment_begin:Fm,lights_fragment_maps:zm,lights_fragment_end:Nm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Gm,map_fragment:Vm,map_pars_fragment:Hm,map_particle_fragment:Wm,map_particle_pars_fragment:qm,metalnessmap_fragment:jm,metalnessmap_pars_fragment:$m,morphcolor_vertex:Xm,morphnormal_vertex:Ym,morphtarget_pars_vertex:Zm,morphtarget_vertex:Jm,normal_fragment_begin:Km,normal_fragment_maps:Qm,normal_pars_fragment:ef,normal_pars_vertex:tf,normal_vertex:rf,normalmap_pars_fragment:nf,clearcoat_normal_fragment_begin:sf,clearcoat_normal_fragment_maps:af,clearcoat_pars_fragment:of,iridescence_pars_fragment:lf,output_fragment:cf,packing:uf,premultiplied_alpha_fragment:hf,project_vertex:df,dithering_fragment:pf,dithering_pars_fragment:mf,roughnessmap_fragment:ff,roughnessmap_pars_fragment:gf,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:_f,shadowmap_vertex:xf,shadowmask_pars_fragment:yf,skinbase_vertex:bf,skinning_pars_vertex:wf,skinning_vertex:Mf,skinnormal_vertex:Sf,specularmap_fragment:Ef,specularmap_pars_fragment:Tf,tonemapping_fragment:Cf,tonemapping_pars_fragment:Af,transmission_fragment:Rf,transmission_pars_fragment:Df,uv_pars_fragment:Lf,uv_pars_vertex:Pf,uv_vertex:kf,uv2_pars_fragment:If,uv2_pars_vertex:Ff,uv2_vertex:zf,worldpos_vertex:Nf,background_vert:Of,background_frag:Bf,cube_vert:Uf,cube_frag:Gf,depth_vert:Vf,depth_frag:Hf,distanceRGBA_vert:Wf,distanceRGBA_frag:qf,equirect_vert:jf,equirect_frag:$f,linedashed_vert:Xf,linedashed_frag:Yf,meshbasic_vert:Zf,meshbasic_frag:Jf,meshlambert_vert:Kf,meshlambert_frag:Qf,meshmatcap_vert:eg,meshmatcap_frag:tg,meshnormal_vert:ig,meshnormal_frag:rg,meshphong_vert:ng,meshphong_frag:sg,meshphysical_vert:ag,meshphysical_frag:og,meshtoon_vert:lg,meshtoon_frag:cg,points_vert:ug,points_frag:hg,shadow_vert:dg,shadow_frag:pg,sprite_vert:mg,sprite_frag:fg},se={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new jt},uv2Transform:{value:new jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}}},hi={basic:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new ze(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:xt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:xt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ze(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:xt([se.points,se.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:xt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:xt([se.common,se.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:xt([se.sprite,se.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:xt([se.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:xt([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:xt([se.lights,se.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};hi.physical={uniforms:xt([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function gg(s,e,t,i,r,n){const o=new ze(0);let a=r===!0?0:1,l,c,u=null,d=0,h=null;function f(p,m){let v=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=e.get(x));const b=s.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(o,a):x&&x.isColor&&(g(x,1),v=!0),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(c===void 0&&(c=new pi(new Pn(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:Xr(hi.cube.uniforms),vertexShader:hi.cube.vertexShader,fragmentShader:hi.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||d!==x.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new pi(new Bs(2,2),new mr({name:"BackgroundMaterial",uniforms:Xr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,m){t.buffers.color.setClear(p.r,p.g,p.b,m,n)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),a=m,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:f}}function vg(s,e,t,i){const r=s.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||n!==null,a={},l=m(null);let c=l,u=!1;function d(A,P,I,W,j){let B=!1;if(o){const q=p(W,I,P);c!==q&&(c=q,f(c.object)),B=v(A,W,I,j),B&&x(A,W,I,j)}else{const q=P.wireframe===!0;(c.geometry!==W.id||c.program!==I.id||c.wireframe!==q)&&(c.geometry=W.id,c.program=I.id,c.wireframe=q,B=!0)}j!==null&&t.update(j,34963),(B||u)&&(u=!1,w(A,P,I,W),j!==null&&s.bindBuffer(34963,t.get(j).buffer))}function h(){return i.isWebGL2?s.createVertexArray():n.createVertexArrayOES()}function f(A){return i.isWebGL2?s.bindVertexArray(A):n.bindVertexArrayOES(A)}function g(A){return i.isWebGL2?s.deleteVertexArray(A):n.deleteVertexArrayOES(A)}function p(A,P,I){const W=I.wireframe===!0;let j=a[A.id];j===void 0&&(j={},a[A.id]=j);let B=j[P.id];B===void 0&&(B={},j[P.id]=B);let q=B[W];return q===void 0&&(q=m(h()),B[W]=q),q}function m(A){const P=[],I=[],W=[];for(let j=0;j<r;j++)P[j]=0,I[j]=0,W[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:W,object:A,attributes:{},index:null}}function v(A,P,I,W){const j=c.attributes,B=P.attributes;let q=0;const ee=I.getAttributes();for(const H in ee)if(ee[H].location>=0){const Q=j[H];let he=B[H];if(he===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(he=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(he=A.instanceColor)),Q===void 0||Q.attribute!==he||he&&Q.data!==he.data)return!0;q++}return c.attributesNum!==q||c.index!==W}function x(A,P,I,W){const j={},B=P.attributes;let q=0;const ee=I.getAttributes();for(const H in ee)if(ee[H].location>=0){let Q=B[H];Q===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor));const he={};he.attribute=Q,Q&&Q.data&&(he.data=Q.data),j[H]=he,q++}c.attributes=j,c.attributesNum=q,c.index=W}function b(){const A=c.newAttributes;for(let P=0,I=A.length;P<I;P++)A[P]=0}function y(A){S(A,0)}function S(A,P){const I=c.newAttributes,W=c.enabledAttributes,j=c.attributeDivisors;I[A]=1,W[A]===0&&(s.enableVertexAttribArray(A),W[A]=1),j[A]!==P&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,P),j[A]=P)}function T(){const A=c.newAttributes,P=c.enabledAttributes;for(let I=0,W=P.length;I<W;I++)P[I]!==A[I]&&(s.disableVertexAttribArray(I),P[I]=0)}function D(A,P,I,W,j,B){i.isWebGL2===!0&&(I===5124||I===5125)?s.vertexAttribIPointer(A,P,I,j,B):s.vertexAttribPointer(A,P,I,W,j,B)}function w(A,P,I,W){if(i.isWebGL2===!1&&(A.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const j=W.attributes,B=I.getAttributes(),q=P.defaultAttributeValues;for(const ee in B){const H=B[ee];if(H.location>=0){let Q=j[ee];if(Q===void 0&&(ee==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),ee==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor)),Q!==void 0){const he=Q.normalized,ke=Q.itemSize,J=t.get(Q);if(J===void 0)continue;const Ge=J.buffer,we=J.type,Ee=J.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ce=Q.data,Ke=ce.stride,De=Q.offset;if(ce.isInstancedInterleavedBuffer){for(let ye=0;ye<H.locationSize;ye++)S(H.location+ye,ce.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<H.locationSize;ye++)y(H.location+ye);s.bindBuffer(34962,Ge);for(let ye=0;ye<H.locationSize;ye++)D(H.location+ye,ke/H.locationSize,we,he,Ke*Ee,(De+ke/H.locationSize*ye)*Ee)}else{if(Q.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)S(H.location+ce,Q.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ce=0;ce<H.locationSize;ce++)y(H.location+ce);s.bindBuffer(34962,Ge);for(let ce=0;ce<H.locationSize;ce++)D(H.location+ce,ke/H.locationSize,we,he,ke*Ee,ke/H.locationSize*ce*Ee)}}else if(q!==void 0){const he=q[ee];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(H.location,he);break;case 3:s.vertexAttrib3fv(H.location,he);break;case 4:s.vertexAttrib4fv(H.location,he);break;default:s.vertexAttrib1fv(H.location,he)}}}}T()}function C(){O();for(const A in a){const P=a[A];for(const I in P){const W=P[I];for(const j in W)g(W[j].object),delete W[j];delete P[I]}delete a[A]}}function k(A){if(a[A.id]===void 0)return;const P=a[A.id];for(const I in P){const W=P[I];for(const j in W)g(W[j].object),delete W[j];delete P[I]}delete a[A.id]}function F(A){for(const P in a){const I=a[P];if(I[A.id]===void 0)continue;const W=I[A.id];for(const j in W)g(W[j].object),delete W[j];delete I[A.id]}}function O(){z(),u=!0,c!==l&&(c=l,f(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:y,disableUnusedAttributes:T}}function _g(s,e,t,i){const r=i.isWebGL2;let n;function o(c){n=c}function a(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function l(c,u,d){if(d===0)return;let h,f;if(r)h=s,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](n,c,u,d),t.update(u,n,d)}this.setMode=o,this.render=a,this.renderInstances=l}function xg(s,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(D){if(D==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=n(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(34930),h=s.getParameter(35660),f=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),m=s.getParameter(36347),v=s.getParameter(36348),x=s.getParameter(36349),b=h>0,y=o||e.has("OES_texture_float"),S=b&&y,T=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:n,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:T}}function yg(s){const e=this;let t=null,i=0,r=!1,n=!1;const o=new er,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,f){const g=d.length!==0||h||i!==0||r;return r=h,t=u(d,f,0),i=d.length,g},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1,c()},this.setState=function(d,h,f){const g=d.clippingPlanes,p=d.clipIntersection,m=d.clipShadows,v=s.get(d);if(!r||g===null||g.length===0||n&&!m)n?u(null):c();else{const x=n?0:i,b=x*4;let y=v.clippingState||null;l.value=y,y=u(g,h,b,f);for(let S=0;S!==b;++S)y[S]=t[S];v.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const p=d!==null?d.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const v=f+p*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<v)&&(m=new Float32Array(v));for(let b=0,y=f;b!==p;++b,y+=4)o.copy(d[b]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function bg(s){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zp(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class wg extends Ec{constructor(e=-1,t=1,i=1,r=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,o=n+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(n,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,ko=[.125,.215,.35,.446,.526,.582],ir=20,ba=new wg,Io=new ze;let wa=null;const tr=(1+Math.sqrt(5))/2,Ir=1/tr,Fo=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,tr,Ir),new U(0,tr,-Ir),new U(Ir,0,tr),new U(-Ir,0,tr),new U(tr,Ir,0),new U(-tr,Ir,0)];class zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){wa=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa),e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},r=No(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=No(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(n)),this._blurMaterial=Sg(n,e,t)}return r}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,i,r){const n=new Nt(90,1,t,i),o=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(Io),l.toneMapping=0,l.autoClear=!1;const d=new wc({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),h=new pi(new Pn,d);let f=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,f=!0):(d.color.copy(Io),f=!0);for(let p=0;p<6;p++){const m=p%3;m===0?(n.up.set(0,o[p],0),n.lookAt(a[p],0,0)):m===1?(n.up.set(0,0,o[p]),n.lookAt(0,a[p],0)):(n.up.set(0,o[p],0),n.lookAt(0,0,a[p]));const v=this._cubeSize;us(r,m*v,p>2?v:0,v,v),l.setRenderTarget(r),f&&l.render(h,n),l.render(e,n)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oo());const n=r?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],n),a=n.uniforms;a.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fo[(r-1)%Fo.length];this._blur(e,r-1,r,n,o)}t.autoClear=i}_blur(e,t,i,r,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",n),this._halfBlur(o,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new pi(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*ir-1),p=n/g,m=isFinite(n)?1+Math.floor(u*p):ir;m>ir&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);const v=[];let x=0;for(let D=0;D<ir;++D){const w=D/p,C=Math.exp(-w*w/2);v.push(C),D===0?x+=C:D<m&&(x+=2*C)}for(let D=0;D<v.length;D++)v[D]=v[D]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const y=this._sizeLods[r],S=3*y*(r>b-Gr?r-b+Gr:0),T=4*(this._cubeSize-y);us(t,S,T,3*y,2*y),l.setRenderTarget(t),l.render(d,ba)}}function Mg(s){const e=[],t=[],i=[];let r=s;const n=s-Gr+1+ko.length;for(let o=0;o<n;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>s-Gr?l=ko[o-s+Gr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,p=3,m=2,v=1,x=new Float32Array(p*g*f),b=new Float32Array(m*g*f),y=new Float32Array(v*g*f);for(let T=0;T<f;T++){const D=T%3*2/3-1,w=T>2?0:-1,C=[D,w,0,D+2/3,w,0,D+2/3,w+1,0,D,w,0,D+2/3,w+1,0,D,w+1,0];x.set(C,p*g*T),b.set(h,m*g*T);const k=[T,T,T,T,T,T];y.set(k,v*g*T)}const S=new fi;S.setAttribute("position",new mi(x,p)),S.setAttribute("uv",new mi(b,m)),S.setAttribute("faceIndex",new mi(y,v)),e.push(S),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function No(s,e,t){const i=new pr(s,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(s,e,t,i,r){s.viewport.set(e,t,i,r),s.scissor.set(e,t,i,r)}function Sg(s,e,t){const i=new Float32Array(ir),r=new U(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Oo(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bo(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Eg(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new zo(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new zo(s));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",n),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function n(a){const l=a.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Tg(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Cg(s,e,t,i){const r={},n=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const f=n.get(h);f&&(e.remove(f),n.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const f=d.morphAttributes;for(const g in f){const p=f[g];for(let m=0,v=p.length;m<v;m++)e.update(p[m],34962)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let p=0;if(f!==null){const x=f.array;p=f.version;for(let b=0,y=x.length;b<y;b+=3){const S=x[b+0],T=x[b+1],D=x[b+2];h.push(S,T,T,D,D,S)}}else{const x=g.array;p=g.version;for(let b=0,y=x.length/3-1;b<y;b+=3){const S=b+0,T=b+1,D=b+2;h.push(S,T,T,D,D,S)}}const m=new(gc(h)?Sc:Mc)(h,1);m.version=p;const v=n.get(d);v&&e.remove(v),n.set(d,m)}function u(d){const h=n.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return n.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Ag(s,e,t,i){const r=i.isWebGL2;let n;function o(h){n=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,f){s.drawElements(n,f,a,h*l),t.update(f,n,1)}function d(h,f,g){if(g===0)return;let p,m;if(r)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](n,f,a,h*l,g),t.update(f,n,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function Rg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(n/3);break;case 1:t.lines+=a*(n/2);break;case 3:t.lines+=a*(n-1);break;case 2:t.lines+=a*n;break;case 0:t.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Dg(s,e){return s[0]-e[0]}function Lg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Ma(s,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),s.divideScalar(t)}function Pg(s,e,t){const i={},r=new Float32Array(8),n=new WeakMap,o=new ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let m=n.get(u);if(m===void 0||m.count!==p){let b=function(){A.dispose(),n.delete(u),u.removeEventListener("dispose",b)};m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let k=0;y===!0&&(k=1),S===!0&&(k=2),T===!0&&(k=3);let F=u.attributes.position.count*k,O=1;F>e.maxTextureSize&&(O=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*O*4*p),A=new yc(z,F,O,p);A.type=1015,A.needsUpdate=!0;const P=k*4;for(let I=0;I<p;I++){const W=D[I],j=w[I],B=C[I],q=F*O*4*I;for(let ee=0;ee<W.count;ee++){const H=ee*P;y===!0&&(o.fromBufferAttribute(W,ee),W.normalized===!0&&Ma(o,W),z[q+H+0]=o.x,z[q+H+1]=o.y,z[q+H+2]=o.z,z[q+H+3]=0),S===!0&&(o.fromBufferAttribute(j,ee),j.normalized===!0&&Ma(o,j),z[q+H+4]=o.x,z[q+H+5]=o.y,z[q+H+6]=o.z,z[q+H+7]=0),T===!0&&(o.fromBufferAttribute(B,ee),B.normalized===!0&&Ma(o,B),z[q+H+8]=o.x,z[q+H+9]=o.y,z[q+H+10]=o.z,z[q+H+11]=B.itemSize===4?o.w:1)}}m={count:p,texture:A,size:new Ne(F,O)},n.set(u,m),u.addEventListener("dispose",b)}let v=0;for(let b=0;b<f.length;b++)v+=f[b];const x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];i[u.id]=p}for(let y=0;y<g;y++){const S=p[y];S[0]=y,S[1]=f[y]}p.sort(Lg);for(let y=0;y<8;y++)y<g&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Dg);const m=u.morphAttributes.position,v=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const S=a[y],T=S[0],D=S[1];T!==Number.MAX_SAFE_INTEGER&&D?(m&&u.getAttribute("morphTarget"+y)!==m[T]&&u.setAttribute("morphTarget"+y,m[T]),v&&u.getAttribute("morphNormal"+y)!==v[T]&&u.setAttribute("morphNormal"+y,v[T]),r[y]=D,x+=D):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),v&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const b=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(s,"morphTargetBaseInfluence",b),h.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:l}}function kg(s,e,t,i){let r=new WeakMap;function n(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:o}}const Ac=new Ut,Rc=new yc,Dc=new xp,Lc=new Tc,Uo=[],Go=[],Vo=new Float32Array(16),Ho=new Float32Array(9),Wo=new Float32Array(4);function Jr(s,e,t){const i=s[0];if(i<=0||i>0)return s;const r=e*t;let n=Uo[r];if(n===void 0&&(n=new Float32Array(r),Uo[r]=n),e!==0){i.toArray(n,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(n,a)}return n}function At(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Us(s,e){let t=Go[e];t===void 0&&(t=new Int32Array(e),Go[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Ig(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function Ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function Og(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Wo.set(i),s.uniformMatrix2fv(this.addr,!1,Wo),Rt(t,i)}}function Bg(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Ho.set(i),s.uniformMatrix3fv(this.addr,!1,Ho),Rt(t,i)}}function Ug(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Vo.set(i),s.uniformMatrix4fv(this.addr,!1,Vo),Rt(t,i)}}function Gg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Vg(s,e){const t=this.cache;At(t,e)||(s.uniform2iv(this.addr,e),Rt(t,e))}function Hg(s,e){const t=this.cache;At(t,e)||(s.uniform3iv(this.addr,e),Rt(t,e))}function Wg(s,e){const t=this.cache;At(t,e)||(s.uniform4iv(this.addr,e),Rt(t,e))}function qg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jg(s,e){const t=this.cache;At(t,e)||(s.uniform2uiv(this.addr,e),Rt(t,e))}function $g(s,e){const t=this.cache;At(t,e)||(s.uniform3uiv(this.addr,e),Rt(t,e))}function Xg(s,e){const t=this.cache;At(t,e)||(s.uniform4uiv(this.addr,e),Rt(t,e))}function Yg(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ac,r)}function Zg(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Dc,r)}function Jg(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Lc,r)}function Kg(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Rc,r)}function Qg(s){switch(s){case 5126:return Ig;case 35664:return Fg;case 35665:return zg;case 35666:return Ng;case 35674:return Og;case 35675:return Bg;case 35676:return Ug;case 5124:case 35670:return Gg;case 35667:case 35671:return Vg;case 35668:case 35672:return Hg;case 35669:case 35673:return Wg;case 5125:return qg;case 36294:return jg;case 36295:return $g;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Kg}}function e0(s,e){s.uniform1fv(this.addr,e)}function t0(s,e){const t=Jr(e,this.size,2);s.uniform2fv(this.addr,t)}function i0(s,e){const t=Jr(e,this.size,3);s.uniform3fv(this.addr,t)}function r0(s,e){const t=Jr(e,this.size,4);s.uniform4fv(this.addr,t)}function n0(s,e){const t=Jr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function s0(s,e){const t=Jr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function a0(s,e){const t=Jr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function o0(s,e){s.uniform1iv(this.addr,e)}function l0(s,e){s.uniform2iv(this.addr,e)}function c0(s,e){s.uniform3iv(this.addr,e)}function u0(s,e){s.uniform4iv(this.addr,e)}function h0(s,e){s.uniform1uiv(this.addr,e)}function d0(s,e){s.uniform2uiv(this.addr,e)}function p0(s,e){s.uniform3uiv(this.addr,e)}function m0(s,e){s.uniform4uiv(this.addr,e)}function f0(s,e,t){const i=e.length,r=Us(t,i);s.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.setTexture2D(e[n]||Ac,r[n])}function g0(s,e,t){const i=e.length,r=Us(t,i);s.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.setTexture3D(e[n]||Dc,r[n])}function v0(s,e,t){const i=e.length,r=Us(t,i);s.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.setTextureCube(e[n]||Lc,r[n])}function _0(s,e,t){const i=e.length,r=Us(t,i);s.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.setTexture2DArray(e[n]||Rc,r[n])}function x0(s){switch(s){case 5126:return e0;case 35664:return t0;case 35665:return i0;case 35666:return r0;case 35674:return n0;case 35675:return s0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return u0;case 5125:return h0;case 36294:return d0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return _0}}class y0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Qg(t.type)}}class b0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=x0(t.type)}}class w0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,o=r.length;n!==o;++n){const a=r[n];a.setValue(e,t[a.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function qo(s,e){s.seq.push(e),s.map[e.id]=e}function M0(s,e,t){const i=s.name,r=i.length;for(Sa.lastIndex=0;;){const n=Sa.exec(i),o=Sa.lastIndex;let a=n[1];const l=n[2]==="]",c=n[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qo(t,c===void 0?new y0(a,s,e):new b0(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new w0(a),qo(t,u)),t=u}}}class ws{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),o=e.getUniformLocation(t,n.name);M0(n,o,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,o=t.length;n!==o;++n){const a=t[n],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function jo(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let S0=0;function E0(s,e){const t=s.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=r;o<n;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function T0(s){switch(s){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function $o(s,e,t){const i=s.getShaderParameter(e,35713),r=s.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const o=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+E0(s.getShaderSource(e),o)}else return r}function C0(s,e){const t=T0(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function A0(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function R0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mn).join(`
`)}function D0(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function L0(s,e){const t={},i=s.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=s.getActiveAttrib(e,r),o=n.name;let a=1;n.type===35674&&(a=2),n.type===35675&&(a=3),n.type===35676&&(a=4),t[o]={type:n.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function mn(s){return s!==""}function Xo(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(s){return s.replace(P0,k0)}function k0(s,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Oa(t)}const I0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zo(s){return s.replace(F0,Pc).replace(I0,z0)}function z0(s,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Pc(s,e,t,i)}function Pc(s,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function Jo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function O0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function U0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function G0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function V0(s,e,t,i){const r=s.getContext(),n=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=N0(t),c=O0(t),u=B0(t),d=U0(t),h=G0(t),f=t.isWebGL2?"":R0(t),g=D0(n),p=r.createProgram();let m,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(mn).join(`
`),m.length>0&&(m+=`
`),v=[f,g].filter(mn).join(`
`),v.length>0&&(v+=`
`)):(m=[Jo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mn).join(`
`),v=[f,Jo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Le.tonemapping_pars_fragment:"",t.toneMapping!==0?A0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,C0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mn).join(`
`)),o=Oa(o),o=Xo(o,t),o=Yo(o,t),a=Oa(a),a=Xo(a,t),a=Yo(a,t),o=Zo(o),a=Zo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=x+m+o,y=x+v+a,S=jo(r,35633,b),T=jo(r,35632,y);if(r.attachShader(p,S),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),s.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),k=r.getShaderInfoLog(S).trim(),F=r.getShaderInfoLog(T).trim();let O=!0,z=!0;if(r.getProgramParameter(p,35714)===!1){O=!1;const A=$o(r,S,"vertex"),P=$o(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+A+`
`+P)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(k===""||F==="")&&(z=!1);z&&(this.diagnostics={runnable:O,programLog:C,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:v}})}r.deleteShader(S),r.deleteShader(T);let D;this.getUniforms=function(){return D===void 0&&(D=new ws(r,p)),D};let w;return this.getAttributes=function(){return w===void 0&&(w=L0(r,p)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=S0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=T,this}let H0=0;class W0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new q0(e);t.set(e,i)}return t.get(e)}}class q0{constructor(e){this.id=H0++,this.code=e,this.usedTimes=0}}function j0(s,e,t,i,r,n,o){const a=new bc,l=new W0,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,C,k,F,O){const z=F.fog,A=O.geometry,P=w.isMeshStandardMaterial?F.environment:null,I=(w.isMeshStandardMaterial?t:e).get(w.envMap||P),W=I&&I.mapping===306?I.image.height:null,j=g[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const B=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,q=B!==void 0?B.length:0;let ee=0;A.morphAttributes.position!==void 0&&(ee=1),A.morphAttributes.normal!==void 0&&(ee=2),A.morphAttributes.color!==void 0&&(ee=3);let H,Q,he,ke;if(j){const ce=hi[j];H=ce.vertexShader,Q=ce.fragmentShader}else H=w.vertexShader,Q=w.fragmentShader,l.update(w),he=l.getVertexShaderID(w),ke=l.getFragmentShaderID(w);const J=s.getRenderTarget(),Ge=w.alphaTest>0,we=w.clearcoat>0,Ee=w.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:w.type,vertexShader:H,fragmentShader:Q,defines:w.defines,customVertexShaderID:he,customFragmentShaderID:ke,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:h,outputEncoding:J===null?s.outputEncoding:J.isXRRenderTarget===!0?J.texture.encoding:3e3,map:!!w.map,matcap:!!w.matcap,envMap:!!I,envMapMode:I&&I.mapping,envMapCubeUVHeight:W,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===1,tangentSpaceNormalMap:w.normalMapType===0,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===3001,clearcoat:we,clearcoatMap:we&&!!w.clearcoatMap,clearcoatRoughnessMap:we&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!w.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!w.iridescenceMap,iridescenceThicknessMap:Ee&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===1,alphaMap:!!w.alphaMap,alphaTest:Ge,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!A.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!z,useFog:w.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:w.toneMapped?s.toneMapping:0,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===2,flipSided:w.side===1,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function m(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)C.push(k),C.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(v(C,w),x(C,w),C.push(s.outputEncoding)),C.push(w.customProgramCacheKey),C.join()}function v(w,C){w.push(C.precision),w.push(C.outputEncoding),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.combine),w.push(C.vertexUvs),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function x(w,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),C.fog&&a.enable(33),w.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),w.push(a.mask)}function b(w){const C=g[w.type];let k;if(C){const F=hi[C];k=Pp.clone(F.uniforms)}else k=w.uniforms;return k}function y(w,C){let k;for(let F=0,O=c.length;F<O;F++){const z=c[F];if(z.cacheKey===C){k=z,++k.usedTimes;break}}return k===void 0&&(k=new V0(s,C,w,n),c.push(k)),k}function S(w){if(--w.usedTimes===0){const C=c.indexOf(w);c[C]=c[c.length-1],c.pop(),w.destroy()}}function T(w){l.remove(w)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:D}}function $0(){let s=new WeakMap;function e(n){let o=s.get(n);return o===void 0&&(o={},s.set(n,o)),o}function t(n){s.delete(n)}function i(n,o,a){s.get(n)[o]=a}function r(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function X0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ko(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qo(){const s=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,f,g,p,m){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:p,group:m},s[e]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=f,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=p,v.group=m),e++,v}function a(d,h,f,g,p,m){const v=o(d,h,f,g,p,m);f.transmission>0?i.push(v):f.transparent===!0?r.push(v):t.push(v)}function l(d,h,f,g,p,m){const v=o(d,h,f,g,p,m);f.transmission>0?i.unshift(v):f.transparent===!0?r.unshift(v):t.unshift(v)}function c(d,h){t.length>1&&t.sort(d||X0),i.length>1&&i.sort(h||Ko),r.length>1&&r.sort(h||Ko)}function u(){for(let d=e,h=s.length;d<h;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:a,unshift:l,finish:u,sort:c}}function Y0(){let s=new WeakMap;function e(i,r){let n;return s.has(i)===!1?(n=new Qo,s.set(i,[n])):r>=s.get(i).length?(n=new Qo,s.get(i).push(n)):n=s.get(i)[r],n}function t(){s=new WeakMap}return{get:e,dispose:t}}function Z0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ze};break;case"SpotLight":t={position:new U,direction:new U,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function J0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let K0=0;function Q0(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function ev(s,e){const t=new Z0,i=J0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new U);const n=new U,o=new dt,a=new dt;function l(u,d){let h=0,f=0,g=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let p=0,m=0,v=0,x=0,b=0,y=0,S=0,T=0;u.sort(Q0);const D=d!==!0?Math.PI:1;for(let C=0,k=u.length;C<k;C++){const F=u[C],O=F.color,z=F.intensity,A=F.distance,P=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=O.r*z*D,f+=O.g*z*D,g+=O.b*z*D;else if(F.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(F.sh.coefficients[I],z);else if(F.isDirectionalLight){const I=t.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity*D),F.castShadow){const W=F.shadow,j=i.get(F);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.directionalShadow[p]=j,r.directionalShadowMap[p]=P,r.directionalShadowMatrix[p]=F.shadow.matrix,y++}r.directional[p]=I,p++}else if(F.isSpotLight){const I=t.get(F);if(I.position.setFromMatrixPosition(F.matrixWorld),I.color.copy(O).multiplyScalar(z*D),I.distance=A,I.coneCos=Math.cos(F.angle),I.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),I.decay=F.decay,F.castShadow){const W=F.shadow,j=i.get(F);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.spotShadow[v]=j,r.spotShadowMap[v]=P,r.spotShadowMatrix[v]=F.shadow.matrix,T++}r.spot[v]=I,v++}else if(F.isRectAreaLight){const I=t.get(F);I.color.copy(O).multiplyScalar(z),I.halfWidth.set(F.width*.5,0,0),I.halfHeight.set(0,F.height*.5,0),r.rectArea[x]=I,x++}else if(F.isPointLight){const I=t.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity*D),I.distance=F.distance,I.decay=F.decay,F.castShadow){const W=F.shadow,j=i.get(F);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,r.pointShadow[m]=j,r.pointShadowMap[m]=P,r.pointShadowMatrix[m]=F.shadow.matrix,S++}r.point[m]=I,m++}else if(F.isHemisphereLight){const I=t.get(F);I.skyColor.copy(F.color).multiplyScalar(z*D),I.groundColor.copy(F.groundColor).multiplyScalar(z*D),r.hemi[b]=I,b++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==p||w.pointLength!==m||w.spotLength!==v||w.rectAreaLength!==x||w.hemiLength!==b||w.numDirectionalShadows!==y||w.numPointShadows!==S||w.numSpotShadows!==T)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=x,r.point.length=m,r.hemi.length=b,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=T,w.directionalLength=p,w.pointLength=m,w.spotLength=v,w.rectAreaLength=x,w.hemiLength=b,w.numDirectionalShadows=y,w.numPointShadows=S,w.numSpotShadows=T,r.version=K0++)}function c(u,d){let h=0,f=0,g=0,p=0,m=0;const v=d.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){const y=u[x];if(y.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(v),h++}else if(y.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(v),g++}else if(y.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(v),a.identity(),o.copy(y.matrixWorld),o.premultiply(v),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const S=r.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(v),f++}else if(y.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(v),m++}}}return{setup:l,setupView:c,state:r}}function el(s,e){const t=new ev(s,e),i=[],r=[];function n(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function tv(s,e){let t=new WeakMap;function i(n,o=0){let a;return t.has(n)===!1?(a=new el(s,e),t.set(n,[a])):o>=t.get(n).length?(a=new el(s,e),t.get(n).push(a)):a=t.get(n)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class iv extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rv extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function av(s,e,t){let i=new Za;const r=new Ne,n=new Ne,o=new ht,a=new iv({depthPacking:3201}),l=new rv,c={},u=t.maxTextureSize,d={0:1,1:0,2:2},h=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:nv,fragmentShader:sv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new fi;g.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new pi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(y,S,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),k=s.state;k.setBlending(0),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let F=0,O=y.length;F<O;F++){const z=y[F],A=z.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;r.copy(A.mapSize);const P=A.getFrameExtents();if(r.multiply(P),n.copy(A.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(n.x=Math.floor(u/P.x),r.x=n.x*P.x,A.mapSize.x=n.x),r.y>u&&(n.y=Math.floor(u/P.y),r.y=n.y*P.y,A.mapSize.y=n.y)),A.map===null){const W=this.type!==3?{minFilter:1003,magFilter:1003}:{};A.map=new pr(r.x,r.y,W),A.map.texture.name=z.name+".shadowMap",A.camera.updateProjectionMatrix()}s.setRenderTarget(A.map),s.clear();const I=A.getViewportCount();for(let W=0;W<I;W++){const j=A.getViewport(W);o.set(n.x*j.x,n.y*j.y,n.x*j.z,n.y*j.w),k.viewport(o),A.updateMatrices(z,W),i=A.getFrustum(),b(S,T,A.camera,z,this.type)}A.isPointLightShadow!==!0&&this.type===3&&v(A,T),A.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(D,w,C)};function v(y,S){const T=e.update(p);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new pr(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(S,null,T,h,p,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(S,null,T,f,p,null)}function x(y,S,T,D,w,C){let k=null;const F=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(F!==void 0?k=F:k=T.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const O=k.uuid,z=S.uuid;let A=c[O];A===void 0&&(A={},c[O]=A);let P=A[z];P===void 0&&(P=k.clone(),A[z]=P),k=P}return k.visible=S.visible,k.wireframe=S.wireframe,C===3?k.side=S.shadowSide!==null?S.shadowSide:S.side:k.side=S.shadowSide!==null?S.shadowSide:d[S.side],k.alphaMap=S.alphaMap,k.alphaTest=S.alphaTest,k.clipShadows=S.clipShadows,k.clippingPlanes=S.clippingPlanes,k.clipIntersection=S.clipIntersection,k.displacementMap=S.displacementMap,k.displacementScale=S.displacementScale,k.displacementBias=S.displacementBias,k.wireframeLinewidth=S.wireframeLinewidth,k.linewidth=S.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(T.matrixWorld),k.nearDistance=D,k.farDistance=w),k}function b(y,S,T,D,w){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&w===3)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const k=e.update(y),F=y.material;if(Array.isArray(F)){const O=k.groups;for(let z=0,A=O.length;z<A;z++){const P=O[z],I=F[P.materialIndex];if(I&&I.visible){const W=x(y,I,D,T.near,T.far,w);s.renderBufferDirect(T,null,k,W,y,P)}}}else if(F.visible){const O=x(y,F,D,T.near,T.far,w);s.renderBufferDirect(T,null,k,O,y,null)}}const C=y.children;for(let k=0,F=C.length;k<F;k++)b(C[k],S,T,D,w)}}function ov(s,e,t){const i=t.isWebGL2;function r(){let N=!1;const oe=new ht;let Y=null;const ue=new ht(0,0,0,0);return{setMask:function(re){Y!==re&&!N&&(s.colorMask(re,re,re,re),Y=re)},setLocked:function(re){N=re},setClear:function(re,Xe,pt,it,Pi){Pi===!0&&(re*=it,Xe*=it,pt*=it),oe.set(re,Xe,pt,it),ue.equals(oe)===!1&&(s.clearColor(re,Xe,pt,it),ue.copy(oe))},reset:function(){N=!1,Y=null,ue.set(-1,0,0,0)}}}function n(){let N=!1,oe=null,Y=null,ue=null;return{setTest:function(re){re?Ge(2929):we(2929)},setMask:function(re){oe!==re&&!N&&(s.depthMask(re),oe=re)},setFunc:function(re){if(Y!==re){if(re)switch(re){case 0:s.depthFunc(512);break;case 1:s.depthFunc(519);break;case 2:s.depthFunc(513);break;case 3:s.depthFunc(515);break;case 4:s.depthFunc(514);break;case 5:s.depthFunc(518);break;case 6:s.depthFunc(516);break;case 7:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);Y=re}},setLocked:function(re){N=re},setClear:function(re){ue!==re&&(s.clearDepth(re),ue=re)},reset:function(){N=!1,oe=null,Y=null,ue=null}}}function o(){let N=!1,oe=null,Y=null,ue=null,re=null,Xe=null,pt=null,it=null,Pi=null;return{setTest:function(Qe){N||(Qe?Ge(2960):we(2960))},setMask:function(Qe){oe!==Qe&&!N&&(s.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,_i,Vt){(Y!==Qe||ue!==_i||re!==Vt)&&(s.stencilFunc(Qe,_i,Vt),Y=Qe,ue=_i,re=Vt)},setOp:function(Qe,_i,Vt){(Xe!==Qe||pt!==_i||it!==Vt)&&(s.stencilOp(Qe,_i,Vt),Xe=Qe,pt=_i,it=Vt)},setLocked:function(Qe){N=Qe},setClear:function(Qe){Pi!==Qe&&(s.clearStencil(Qe),Pi=Qe)},reset:function(){N=!1,oe=null,Y=null,ue=null,re=null,Xe=null,pt=null,it=null,Pi=null}}}const a=new r,l=new n,c=new o,u=new WeakMap,d=new WeakMap;let h={},f={},g=new WeakMap,p=[],m=null,v=!1,x=null,b=null,y=null,S=null,T=null,D=null,w=null,C=!1,k=null,F=null,O=null,z=null,A=null;const P=s.getParameter(35661);let I=!1,W=0;const j=s.getParameter(7938);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),I=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),I=W>=2);let B=null,q={};const ee=s.getParameter(3088),H=s.getParameter(2978),Q=new ht().fromArray(ee),he=new ht().fromArray(H);function ke(N,oe,Y){const ue=new Uint8Array(4),re=s.createTexture();s.bindTexture(N,re),s.texParameteri(N,10241,9728),s.texParameteri(N,10240,9728);for(let Xe=0;Xe<Y;Xe++)s.texImage2D(oe+Xe,0,6408,1,1,0,6408,5121,ue);return re}const J={};J[3553]=ke(3553,3553,1),J[34067]=ke(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ge(2929),l.setFunc(3),St(!1),ri(1),Ge(2884),gt(0);function Ge(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function we(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ee(N,oe){return f[N]!==oe?(s.bindFramebuffer(N,oe),f[N]=oe,i&&(N===36009&&(f[36160]=oe),N===36160&&(f[36009]=oe)),!0):!1}function ce(N,oe){let Y=p,ue=!1;if(N)if(Y=g.get(oe),Y===void 0&&(Y=[],g.set(oe,Y)),N.isWebGLMultipleRenderTargets){const re=N.texture;if(Y.length!==re.length||Y[0]!==36064){for(let Xe=0,pt=re.length;Xe<pt;Xe++)Y[Xe]=36064+Xe;Y.length=re.length,ue=!0}}else Y[0]!==36064&&(Y[0]=36064,ue=!0);else Y[0]!==1029&&(Y[0]=1029,ue=!0);ue&&(t.isWebGL2?s.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Ke(N){return m!==N?(s.useProgram(N),m=N,!0):!1}const De={100:32774,101:32778,102:32779};if(i)De[103]=32775,De[104]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(De[103]=N.MIN_EXT,De[104]=N.MAX_EXT)}const ye={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function gt(N,oe,Y,ue,re,Xe,pt,it){if(N===0){v===!0&&(we(3042),v=!1);return}if(v===!1&&(Ge(3042),v=!0),N!==5){if(N!==x||it!==C){if((b!==100||T!==100)&&(s.blendEquation(32774),b=100,T=100),it)switch(N){case 1:s.blendFuncSeparate(1,771,1,771);break;case 2:s.blendFunc(1,1);break;case 3:s.blendFuncSeparate(0,769,0,1);break;case 4:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case 1:s.blendFuncSeparate(770,771,1,771);break;case 2:s.blendFunc(770,1);break;case 3:s.blendFuncSeparate(0,769,0,1);break;case 4:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,S=null,D=null,w=null,x=N,C=it}return}re=re||oe,Xe=Xe||Y,pt=pt||ue,(oe!==b||re!==T)&&(s.blendEquationSeparate(De[oe],De[re]),b=oe,T=re),(Y!==y||ue!==S||Xe!==D||pt!==w)&&(s.blendFuncSeparate(ye[Y],ye[ue],ye[Xe],ye[pt]),y=Y,S=ue,D=Xe,w=pt),x=N,C=null}function Lt(N,oe){N.side===2?we(2884):Ge(2884);let Y=N.side===1;oe&&(Y=!Y),St(Y),N.blending===1&&N.transparent===!1?gt(0):gt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const ue=N.stencilWrite;c.setTest(ue),ue&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),$e(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ge(32926):we(32926)}function St(N){k!==N&&(N?s.frontFace(2304):s.frontFace(2305),k=N)}function ri(N){N!==0?(Ge(2884),N!==F&&(N===1?s.cullFace(1029):N===2?s.cullFace(1028):s.cullFace(1032))):we(2884),F=N}function vt(N){N!==O&&(I&&s.lineWidth(N),O=N)}function $e(N,oe,Y){N?(Ge(32823),(z!==oe||A!==Y)&&(s.polygonOffset(oe,Y),z=oe,A=Y)):we(32823)}function vi(N){N?Ge(3089):we(3089)}function ni(N){N===void 0&&(N=33984+P-1),B!==N&&(s.activeTexture(N),B=N)}function L(N,oe){B===null&&ni();let Y=q[B];Y===void 0&&(Y={type:void 0,texture:void 0},q[B]=Y),(Y.type!==N||Y.texture!==oe)&&(s.bindTexture(N,oe||J[N]),Y.type=N,Y.texture=oe)}function E(){const N=q[B];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(N){Q.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Q.copy(N))}function pe(N){he.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),he.copy(N))}function Re(N,oe){let Y=d.get(oe);Y===void 0&&(Y=new WeakMap,d.set(oe,Y));let ue=Y.get(N);ue===void 0&&(ue=s.getUniformBlockIndex(oe,N.name),Y.set(N,ue))}function He(N,oe){const Y=d.get(oe).get(N);u.get(N)!==Y&&(s.uniformBlockBinding(oe,Y,N.__bindingPointIndex),u.set(N,Y))}function tt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),i===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},B=null,q={},f={},g=new WeakMap,p=[],m=null,v=!1,x=null,b=null,y=null,S=null,T=null,D=null,w=null,C=!1,k=null,F=null,O=null,z=null,A=null,Q.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ge,disable:we,bindFramebuffer:Ee,drawBuffers:ce,useProgram:Ke,setBlending:gt,setMaterial:Lt,setFlipSided:St,setCullFace:ri,setLineWidth:vt,setPolygonOffset:$e,setScissorTest:vi,activeTexture:ni,bindTexture:L,unbindTexture:E,compressedTexImage2D:Z,texImage2D:xe,texImage3D:de,updateUBOMapping:Re,uniformBlockBinding:He,texStorage2D:Te,texStorage3D:X,texSubImage2D:te,texSubImage3D:ie,compressedTexSubImage2D:ae,scissor:ve,viewport:pe,reset:tt}}function lv(s,e,t,i,r,n,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return v?new OffscreenCanvas(L,E):ks("canvas")}function b(L,E,Z,te){let ie=1;if((L.width>te||L.height>te)&&(ie=te/Math.max(L.width,L.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ae=E?Na:Math.floor,Te=ae(ie*L.width),X=ae(ie*L.height);p===void 0&&(p=x(Te,X));const xe=Z?x(Te,X):p;return xe.width=Te,xe.height=X,xe.getContext("2d").drawImage(L,0,0,Te,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Te+"x"+X+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return bo(L.width)&&bo(L.height)}function S(L){return a?!1:L.wrapS!==1001||L.wrapT!==1001||L.minFilter!==1003&&L.minFilter!==1006}function T(L,E){return L.generateMipmaps&&E&&L.minFilter!==1003&&L.minFilter!==1006}function D(L){s.generateMipmap(L)}function w(L,E,Z,te,ie=!1){if(a===!1)return E;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=E;return E===6403&&(Z===5126&&(ae=33326),Z===5131&&(ae=33325),Z===5121&&(ae=33321)),E===33319&&(Z===5126&&(ae=33328),Z===5131&&(ae=33327),Z===5121&&(ae=33323)),E===6408&&(Z===5126&&(ae=34836),Z===5131&&(ae=34842),Z===5121&&(ae=te===3001&&ie===!1?35907:32856),Z===32819&&(ae=32854),Z===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function C(L,E,Z){return T(L,Z)===!0||L.isFramebufferTexture&&L.minFilter!==1003&&L.minFilter!==1006?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function k(L){return L===1003||L===1004||L===1005?9728:9729}function F(L){const E=L.target;E.removeEventListener("dispose",F),z(E),E.isVideoTexture&&g.delete(E)}function O(L){const E=L.target;E.removeEventListener("dispose",O),P(E)}function z(L){const E=i.get(L);if(E.__webglInit===void 0)return;const Z=L.source,te=m.get(Z);if(te){const ie=te[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(L),Object.keys(te).length===0&&m.delete(Z)}i.remove(L)}function A(L){const E=i.get(L);s.deleteTexture(E.__webglTexture);const Z=L.source,te=m.get(Z);delete te[E.__cacheKey],o.memory.textures--}function P(L){const E=L.texture,Z=i.get(L),te=i.get(E);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(Z.__webglFramebuffer[ie]),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ie=0;ie<Z.__webglColorRenderbuffer.length;ie++)Z.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(Z.__webglColorRenderbuffer[ie]);Z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ie=0,ae=E.length;ie<ae;ie++){const Te=i.get(E[ie]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(E[ie])}i.remove(E),i.remove(L)}let I=0;function W(){I=0}function j(){const L=I;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),I+=1,L}function B(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.encoding),E.join()}function q(L,E){const Z=i.get(L);if(L.isVideoTexture&&vi(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(Z,L,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,Z.__webglTexture)}function ee(L,E){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){we(Z,L,E);return}t.activeTexture(33984+E),t.bindTexture(35866,Z.__webglTexture)}function H(L,E){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){we(Z,L,E);return}t.activeTexture(33984+E),t.bindTexture(32879,Z.__webglTexture)}function Q(L,E){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){Ee(Z,L,E);return}t.activeTexture(33984+E),t.bindTexture(34067,Z.__webglTexture)}const he={1e3:10497,1001:33071,1002:33648},ke={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function J(L,E,Z){if(Z?(s.texParameteri(L,10242,he[E.wrapS]),s.texParameteri(L,10243,he[E.wrapT]),(L===32879||L===35866)&&s.texParameteri(L,32882,he[E.wrapR]),s.texParameteri(L,10240,ke[E.magFilter]),s.texParameteri(L,10241,ke[E.minFilter])):(s.texParameteri(L,10242,33071),s.texParameteri(L,10243,33071),(L===32879||L===35866)&&s.texParameteri(L,32882,33071),(E.wrapS!==1001||E.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,10240,k(E.magFilter)),s.texParameteri(L,10241,k(E.minFilter)),E.minFilter!==1003&&E.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.type===1015&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(s.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Ge(L,E){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const te=E.source;let ie=m.get(te);ie===void 0&&(ie={},m.set(te,ie));const ae=B(E);if(ae!==L.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ie[ae].usedTimes++;const Te=ie[L.__cacheKey];Te!==void 0&&(ie[L.__cacheKey].usedTimes--,Te.usedTimes===0&&A(E)),L.__cacheKey=ae,L.__webglTexture=ie[ae].texture}return Z}function we(L,E,Z){let te=3553;E.isDataArrayTexture&&(te=35866),E.isData3DTexture&&(te=32879);const ie=Ge(L,E),ae=E.source;if(t.activeTexture(33984+Z),t.bindTexture(te,L.__webglTexture),ae.version!==ae.__currentVersion||ie===!0){s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const Te=S(E)&&y(E.image)===!1;let X=b(E.image,Te,!1,u);X=ni(E,X);const xe=y(X)||a,de=n.convert(E.format,E.encoding);let ve=n.convert(E.type),pe=w(E.internalFormat,de,ve,E.encoding,E.isVideoTexture);J(te,E,xe);let Re;const He=E.mipmaps,tt=a&&E.isVideoTexture!==!0,N=ae.__currentVersion===void 0||ie===!0,oe=C(E,X,xe);if(E.isDepthTexture)pe=6402,a?E.type===1015?pe=36012:E.type===1014?pe=33190:E.type===1020?pe=35056:pe=33189:E.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===1026&&pe===6402&&E.type!==1012&&E.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=1014,ve=n.convert(E.type)),E.format===1027&&pe===6402&&(pe=34041,E.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=1020,ve=n.convert(E.type))),N&&(tt?t.texStorage2D(3553,1,pe,X.width,X.height):t.texImage2D(3553,0,pe,X.width,X.height,0,de,ve,null));else if(E.isDataTexture)if(He.length>0&&xe){tt&&N&&t.texStorage2D(3553,oe,pe,He[0].width,He[0].height);for(let Y=0,ue=He.length;Y<ue;Y++)Re=He[Y],tt?t.texSubImage2D(3553,Y,0,0,Re.width,Re.height,de,ve,Re.data):t.texImage2D(3553,Y,pe,Re.width,Re.height,0,de,ve,Re.data);E.generateMipmaps=!1}else tt?(N&&t.texStorage2D(3553,oe,pe,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,de,ve,X.data)):t.texImage2D(3553,0,pe,X.width,X.height,0,de,ve,X.data);else if(E.isCompressedTexture){tt&&N&&t.texStorage2D(3553,oe,pe,He[0].width,He[0].height);for(let Y=0,ue=He.length;Y<ue;Y++)Re=He[Y],E.format!==1023?de!==null?tt?t.compressedTexSubImage2D(3553,Y,0,0,Re.width,Re.height,de,Re.data):t.compressedTexImage2D(3553,Y,pe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(3553,Y,0,0,Re.width,Re.height,de,ve,Re.data):t.texImage2D(3553,Y,pe,Re.width,Re.height,0,de,ve,Re.data)}else if(E.isDataArrayTexture)tt?(N&&t.texStorage3D(35866,oe,pe,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,de,ve,X.data)):t.texImage3D(35866,0,pe,X.width,X.height,X.depth,0,de,ve,X.data);else if(E.isData3DTexture)tt?(N&&t.texStorage3D(32879,oe,pe,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,de,ve,X.data)):t.texImage3D(32879,0,pe,X.width,X.height,X.depth,0,de,ve,X.data);else if(E.isFramebufferTexture){if(N)if(tt)t.texStorage2D(3553,oe,pe,X.width,X.height);else{let Y=X.width,ue=X.height;for(let re=0;re<oe;re++)t.texImage2D(3553,re,pe,Y,ue,0,de,ve,null),Y>>=1,ue>>=1}}else if(He.length>0&&xe){tt&&N&&t.texStorage2D(3553,oe,pe,He[0].width,He[0].height);for(let Y=0,ue=He.length;Y<ue;Y++)Re=He[Y],tt?t.texSubImage2D(3553,Y,0,0,de,ve,Re):t.texImage2D(3553,Y,pe,de,ve,Re);E.generateMipmaps=!1}else tt?(N&&t.texStorage2D(3553,oe,pe,X.width,X.height),t.texSubImage2D(3553,0,0,0,de,ve,X)):t.texImage2D(3553,0,pe,de,ve,X);T(E,xe)&&D(te),ae.__currentVersion=ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ee(L,E,Z){if(E.image.length!==6)return;const te=Ge(L,E),ie=E.source;if(t.activeTexture(33984+Z),t.bindTexture(34067,L.__webglTexture),ie.version!==ie.__currentVersion||te===!0){s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,Te=E.image[0]&&E.image[0].isDataTexture,X=[];for(let Y=0;Y<6;Y++)!ae&&!Te?X[Y]=b(E.image[Y],!1,!0,c):X[Y]=Te?E.image[Y].image:E.image[Y],X[Y]=ni(E,X[Y]);const xe=X[0],de=y(xe)||a,ve=n.convert(E.format,E.encoding),pe=n.convert(E.type),Re=w(E.internalFormat,ve,pe,E.encoding),He=a&&E.isVideoTexture!==!0,tt=ie.__currentVersion===void 0||te===!0;let N=C(E,xe,de);J(34067,E,de);let oe;if(ae){He&&tt&&t.texStorage2D(34067,N,Re,xe.width,xe.height);for(let Y=0;Y<6;Y++){oe=X[Y].mipmaps;for(let ue=0;ue<oe.length;ue++){const re=oe[ue];E.format!==1023?ve!==null?He?t.compressedTexSubImage2D(34069+Y,ue,0,0,re.width,re.height,ve,re.data):t.compressedTexImage2D(34069+Y,ue,Re,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(34069+Y,ue,0,0,re.width,re.height,ve,pe,re.data):t.texImage2D(34069+Y,ue,Re,re.width,re.height,0,ve,pe,re.data)}}}else{oe=E.mipmaps,He&&tt&&(oe.length>0&&N++,t.texStorage2D(34067,N,Re,X[0].width,X[0].height));for(let Y=0;Y<6;Y++)if(Te){He?t.texSubImage2D(34069+Y,0,0,0,X[Y].width,X[Y].height,ve,pe,X[Y].data):t.texImage2D(34069+Y,0,Re,X[Y].width,X[Y].height,0,ve,pe,X[Y].data);for(let ue=0;ue<oe.length;ue++){const re=oe[ue].image[Y].image;He?t.texSubImage2D(34069+Y,ue+1,0,0,re.width,re.height,ve,pe,re.data):t.texImage2D(34069+Y,ue+1,Re,re.width,re.height,0,ve,pe,re.data)}}else{He?t.texSubImage2D(34069+Y,0,0,0,ve,pe,X[Y]):t.texImage2D(34069+Y,0,Re,ve,pe,X[Y]);for(let ue=0;ue<oe.length;ue++){const re=oe[ue];He?t.texSubImage2D(34069+Y,ue+1,0,0,ve,pe,re.image[Y]):t.texImage2D(34069+Y,ue+1,Re,ve,pe,re.image[Y])}}}T(E,de)&&D(34067),ie.__currentVersion=ie.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ce(L,E,Z,te,ie){const ae=n.convert(Z.format,Z.encoding),Te=n.convert(Z.type),X=w(Z.internalFormat,ae,Te,Z.encoding);i.get(E).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,X,E.width,E.height,E.depth,0,ae,Te,null):t.texImage2D(ie,0,X,E.width,E.height,0,ae,Te,null)),t.bindFramebuffer(36160,L),$e(E)?h.framebufferTexture2DMultisampleEXT(36160,te,ie,i.get(Z).__webglTexture,0,vt(E)):s.framebufferTexture2D(36160,te,ie,i.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ke(L,E,Z){if(s.bindRenderbuffer(36161,L),E.depthBuffer&&!E.stencilBuffer){let te=33189;if(Z||$e(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===1015?te=36012:ie.type===1014&&(te=33190));const ae=vt(E);$e(E)?h.renderbufferStorageMultisampleEXT(36161,ae,te,E.width,E.height):s.renderbufferStorageMultisample(36161,ae,te,E.width,E.height)}else s.renderbufferStorage(36161,te,E.width,E.height);s.framebufferRenderbuffer(36160,36096,36161,L)}else if(E.depthBuffer&&E.stencilBuffer){const te=vt(E);Z&&$e(E)===!1?s.renderbufferStorageMultisample(36161,te,35056,E.width,E.height):$e(E)?h.renderbufferStorageMultisampleEXT(36161,te,35056,E.width,E.height):s.renderbufferStorage(36161,34041,E.width,E.height),s.framebufferRenderbuffer(36160,33306,36161,L)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0;ie<te.length;ie++){const ae=te[ie],Te=n.convert(ae.format,ae.encoding),X=n.convert(ae.type),xe=w(ae.internalFormat,Te,X,ae.encoding),de=vt(E);Z&&$e(E)===!1?s.renderbufferStorageMultisample(36161,de,xe,E.width,E.height):$e(E)?h.renderbufferStorageMultisampleEXT(36161,de,xe,E.width,E.height):s.renderbufferStorage(36161,xe,E.width,E.height)}}s.bindRenderbuffer(36161,null)}function De(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const Z=i.get(E.depthTexture).__webglTexture,te=vt(E);if(E.depthTexture.format===1026)$e(E)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,te):s.framebufferTexture2D(36160,36096,3553,Z,0);else if(E.depthTexture.format===1027)$e(E)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,te):s.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function ye(L){const E=i.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");De(E.__webglFramebuffer,L)}else if(Z){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=s.createRenderbuffer(),Ke(E.__webglDepthbuffer[te],L,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Ke(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function gt(L,E,Z){const te=i.get(L);E!==void 0&&ce(te.__webglFramebuffer,L,L.texture,36064,3553),Z!==void 0&&ye(L)}function Lt(L){const E=L.texture,Z=i.get(L),te=i.get(E);L.addEventListener("dispose",O),L.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=E.version,o.memory.textures++);const ie=L.isWebGLCubeRenderTarget===!0,ae=L.isWebGLMultipleRenderTargets===!0,Te=y(L)||a;if(ie){Z.__webglFramebuffer=[];for(let X=0;X<6;X++)Z.__webglFramebuffer[X]=s.createFramebuffer()}else{if(Z.__webglFramebuffer=s.createFramebuffer(),ae)if(r.drawBuffers){const X=L.texture;for(let xe=0,de=X.length;xe<de;xe++){const ve=i.get(X[xe]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&$e(L)===!1){const X=ae?E:[E];Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let xe=0;xe<X.length;xe++){const de=X[xe];Z.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[xe]);const ve=n.convert(de.format,de.encoding),pe=n.convert(de.type),Re=w(de.internalFormat,ve,pe,de.encoding),He=vt(L);s.renderbufferStorageMultisample(36161,He,Re,L.width,L.height),s.framebufferRenderbuffer(36160,36064+xe,36161,Z.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(36161,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ke(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,te.__webglTexture),J(34067,E,Te);for(let X=0;X<6;X++)ce(Z.__webglFramebuffer[X],L,E,36064,34069+X);T(E,Te)&&D(34067),t.unbindTexture()}else if(ae){const X=L.texture;for(let xe=0,de=X.length;xe<de;xe++){const ve=X[xe],pe=i.get(ve);t.bindTexture(3553,pe.__webglTexture),J(3553,ve,Te),ce(Z.__webglFramebuffer,L,ve,36064+xe,3553),T(ve,Te)&&D(3553)}t.unbindTexture()}else{let X=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?X=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(X,te.__webglTexture),J(X,E,Te),ce(Z.__webglFramebuffer,L,E,36064,X),T(E,Te)&&D(X),t.unbindTexture()}L.depthBuffer&&ye(L)}function St(L){const E=y(L)||a,Z=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let te=0,ie=Z.length;te<ie;te++){const ae=Z[te];if(T(ae,E)){const Te=L.isWebGLCubeRenderTarget?34067:3553,X=i.get(ae).__webglTexture;t.bindTexture(Te,X),D(Te),t.unbindTexture()}}}function ri(L){if(a&&L.samples>0&&$e(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Z=L.width,te=L.height;let ie=16384;const ae=[],Te=L.stencilBuffer?33306:36096,X=i.get(L),xe=L.isWebGLMultipleRenderTargets===!0;if(xe)for(let de=0;de<E.length;de++)t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,X.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,X.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,X.__webglFramebuffer);for(let de=0;de<E.length;de++){ae.push(36064+de),L.depthBuffer&&ae.push(Te);const ve=X.__ignoreDepthValues!==void 0?X.__ignoreDepthValues:!1;if(ve===!1&&(L.depthBuffer&&(ie|=256),L.stencilBuffer&&(ie|=1024)),xe&&s.framebufferRenderbuffer(36008,36064,36161,X.__webglColorRenderbuffer[de]),ve===!0&&(s.invalidateFramebuffer(36008,[Te]),s.invalidateFramebuffer(36009,[Te])),xe){const pe=i.get(E[de]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,pe,0)}s.blitFramebuffer(0,0,Z,te,0,0,Z,te,ie,9728),f&&s.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),xe)for(let de=0;de<E.length;de++){t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,X.__webglColorRenderbuffer[de]);const ve=i.get(E[de]).__webglTexture;t.bindFramebuffer(36160,X.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,ve,0)}t.bindFramebuffer(36009,X.__webglMultisampledFramebuffer)}}function vt(L){return Math.min(d,L.samples)}function $e(L){const E=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vi(L){const E=o.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function ni(L,E){const Z=L.encoding,te=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===1035||Z!==3e3&&(Z===3001?a===!1?e.has("EXT_sRGB")===!0&&te===1023?(L.format=1035,L.minFilter=1006,L.generateMipmaps=!1):E=_c.sRGBToLinear(E):(te!==1023||ie!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),E}this.allocateTextureUnit=j,this.resetTextureUnits=W,this.setTexture2D=q,this.setTexture2DArray=ee,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=gt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=ri,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=$e}function cv(s,e,t){const i=t.isWebGL2;function r(n,o=null){let a;if(n===1009)return 5121;if(n===1017)return 32819;if(n===1018)return 32820;if(n===1010)return 5120;if(n===1011)return 5122;if(n===1012)return 5123;if(n===1013)return 5124;if(n===1014)return 5125;if(n===1015)return 5126;if(n===1016)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return 6406;if(n===1023)return 6408;if(n===1024)return 6409;if(n===1025)return 6410;if(n===1026)return 6402;if(n===1027)return 34041;if(n===1028)return 6403;if(n===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(n===1035)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1029)return 36244;if(n===1030)return 33319;if(n===1031)return 33320;if(n===1033)return 36249;if(n===33776||n===33777||n===33778||n===33779)if(o===3001)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===37492||n===37496)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===37492)return o===3001?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===37808)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===36492)return o===3001?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return n===1020?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[n]!==void 0?s[n]:null}return{convert:r}}class uv extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hs extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hv={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const x=new hs;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[p.jointName]=x,c.add(x)}const v=c.joints[p.jointName];m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=m.radius),v.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=o!==null),this}}class dv extends Ut{constructor(e,t,i,r,n,o,a,l,c,u){if(u=u!==void 0?u:1026,u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===1026&&(i=1014),i===void 0&&u===1027&&(i=1020),super(null,r,n,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}class pv extends Zr{constructor(e,t){super();const i=this;let r=null,n=1,o=null,a="local-floor",l=null,c=null,u=null,d=null,h=null,f=null;const g=t.getContextAttributes();let p=null,m=null;const v=[],x=[],b=new Nt;b.layers.enable(1),b.viewport=new ht;const y=new Nt;y.layers.enable(2),y.viewport=new ht;const S=[b,y],T=new uv;T.layers.enable(1),T.layers.enable(2);let D=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=v[B];return q===void 0&&(q=new Ea,v[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=v[B];return q===void 0&&(q=new Ea,v[B]=q),q.getGripSpace()},this.getHand=function(B){let q=v[B];return q===void 0&&(q=new Ea,v[B]=q),q.getHandSpace()};function C(B){const q=x.indexOf(B.inputSource);if(q===-1)return;const ee=v[q];ee!==void 0&&ee.dispatchEvent({type:B.type,data:B.inputSource})}function k(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",F);for(let B=0;B<v.length;B++){const q=x[B];q!==null&&(x[B]=null,v[B].disconnect(q))}D=null,w=null,e.setRenderTarget(p),h=null,d=null,u=null,r=null,m=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){n=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",k),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:n};h=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:h}),m=new pr(h.framebufferWidth,h.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding})}else{let q=null,ee=null,H=null;g.depth&&(H=g.stencil?35056:33190,q=g.stencil?1027:1026,ee=g.stencil?1020:1014);const Q={colorFormat:32856,depthFormat:H,scaleFactor:n};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Q),r.updateRenderState({layers:[d]}),m=new pr(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new dv(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const he=e.properties.get(m);he.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(B){for(let q=0;q<B.removed.length;q++){const ee=B.removed[q],H=x.indexOf(ee);H>=0&&(x[H]=null,v[H].dispatchEvent({type:"disconnected",data:ee}))}for(let q=0;q<B.added.length;q++){const ee=B.added[q];let H=x.indexOf(ee);if(H===-1){for(let he=0;he<v.length;he++)if(he>=x.length){x.push(ee),H=he;break}else if(x[he]===null){x[he]=ee,H=he;break}if(H===-1)break}const Q=v[H];Q&&Q.dispatchEvent({type:"connected",data:ee})}}const O=new U,z=new U;function A(B,q,ee){O.setFromMatrixPosition(q.matrixWorld),z.setFromMatrixPosition(ee.matrixWorld);const H=O.distanceTo(z),Q=q.projectionMatrix.elements,he=ee.projectionMatrix.elements,ke=Q[14]/(Q[10]-1),J=Q[14]/(Q[10]+1),Ge=(Q[9]+1)/Q[5],we=(Q[9]-1)/Q[5],Ee=(Q[8]-1)/Q[0],ce=(he[8]+1)/he[0],Ke=ke*Ee,De=ke*ce,ye=H/(-Ee+ce),gt=ye*-Ee;q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(gt),B.translateZ(ye),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Lt=ke+ye,St=J+ye,ri=Ke-gt,vt=De+(H-gt),$e=Ge*J/St*Lt,vi=we*J/St*Lt;B.projectionMatrix.makePerspective(ri,vt,$e,vi,Lt,St)}function P(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;T.near=y.near=b.near=B.near,T.far=y.far=b.far=B.far,(D!==T.near||w!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,w=T.far);const q=B.parent,ee=T.cameras;P(T,q);for(let Q=0;Q<ee.length;Q++)P(ee[Q],q);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),B.position.copy(T.position),B.quaternion.copy(T.quaternion),B.scale.copy(T.scale),B.matrix.copy(T.matrix),B.matrixWorld.copy(T.matrixWorld);const H=B.children;for(let Q=0,he=H.length;Q<he;Q++)H[Q].updateMatrixWorld(!0);ee.length===2?A(T,b,y):T.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){d!==null&&(d.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)};let I=null;function W(B,q){if(c=q.getViewerPose(l||o),f=q,c!==null){const ee=c.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let H=!1;ee.length!==T.cameras.length&&(T.cameras.length=0,H=!0);for(let Q=0;Q<ee.length;Q++){const he=ee[Q];let ke=null;if(h!==null)ke=h.getViewport(he);else{const Ge=u.getViewSubImage(d,he);ke=Ge.viewport,Q===0&&(e.setRenderTargetTextures(m,Ge.colorTexture,d.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(m))}let J=S[Q];J===void 0&&(J=new Nt,J.layers.enable(Q),J.viewport=new ht,S[Q]=J),J.matrix.fromArray(he.transform.matrix),J.projectionMatrix.fromArray(he.projectionMatrix),J.viewport.set(ke.x,ke.y,ke.width,ke.height),Q===0&&T.matrix.copy(J.matrix),H===!0&&T.cameras.push(J)}}for(let ee=0;ee<v.length;ee++){const H=x[ee],Q=v[ee];H!==null&&Q!==void 0&&Q.update(H,q,l||o)}I&&I(B,q),f=null}const j=new Cc;j.setAnimationLoop(W),this.setAnimationLoop=function(B){I=B},this.dispose=function(){}}}function mv(s,e){function t(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,x,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),f(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(n(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,v,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let x;m.map?x=m.map:m.specularMap?x=m.specularMap:m.displacementMap?x=m.displacementMap:m.normalMap?x=m.normalMap:m.bumpMap?x=m.bumpMap:m.roughnessMap?x=m.roughnessMap:m.metalnessMap?x=m.metalnessMap:m.alphaMap?x=m.alphaMap:m.emissiveMap?x=m.emissiveMap:m.clearcoatMap?x=m.clearcoatMap:m.clearcoatNormalMap?x=m.clearcoatNormalMap:m.clearcoatRoughnessMap?x=m.clearcoatRoughnessMap:m.iridescenceMap?x=m.iridescenceMap:m.iridescenceThicknessMap?x=m.iridescenceThicknessMap:m.specularIntensityMap?x=m.specularIntensityMap:m.specularColorMap?x=m.specularColorMap:m.transmissionMap?x=m.transmissionMap:m.thicknessMap?x=m.thicknessMap:m.sheenColorMap?x=m.sheenColorMap:m.sheenRoughnessMap&&(x=m.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let b;m.aoMap?b=m.aoMap:m.lightMap&&(b=m.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function n(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===1&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function fv(s,e,t,i){let r={},n={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(x,b){const y=b.program;i.uniformBlockBinding(x,y)}function c(x,b){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const S=b.program;i.updateUBOMapping(x,S);const T=e.render.frame;n[x.id]!==T&&(h(x),n[x.id]=T)}function u(x){const b=d();x.__bindingPointIndex=b;const y=s.createBuffer(),S=x.__size,T=x.usage;return s.bindBuffer(35345,y),s.bufferData(35345,S,T),s.bindBuffer(35345,null),s.bindBufferBase(35345,b,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=r[x.id],y=x.uniforms,S=x.__cache;s.bindBuffer(35345,b);for(let T=0,D=y.length;T<D;T++){const w=y[T];if(f(w,T,S)===!0){const C=w.value,k=w.__offset;typeof C=="number"?(w.__data[0]=C,s.bufferSubData(35345,k,w.__data)):(w.value.isMatrix3?(w.__data[0]=w.value.elements[0],w.__data[1]=w.value.elements[1],w.__data[2]=w.value.elements[2],w.__data[3]=w.value.elements[0],w.__data[4]=w.value.elements[3],w.__data[5]=w.value.elements[4],w.__data[6]=w.value.elements[5],w.__data[7]=w.value.elements[0],w.__data[8]=w.value.elements[6],w.__data[9]=w.value.elements[7],w.__data[10]=w.value.elements[8],w.__data[11]=w.value.elements[0]):C.toArray(w.__data),s.bufferSubData(35345,k,w.__data))}}s.bindBuffer(35345,null)}function f(x,b,y){const S=x.value;if(y[b]===void 0)return typeof S=="number"?y[b]=S:y[b]=S.clone(),!0;if(typeof S=="number"){if(y[b]!==S)return y[b]=S,!0}else{const T=y[b];if(T.equals(S)===!1)return T.copy(S),!0}return!1}function g(x){const b=x.uniforms;let y=0;const S=16;let T=0;for(let D=0,w=b.length;D<w;D++){const C=b[D],k=p(C);if(C.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,D>0){T=y%S;const F=S-T;T!==0&&F-k.boundary<0&&(y+=S-T,C.__offset=y)}y+=k.storage}return T=y%S,T>0&&(y+=S-T),x.__size=y,x.__cache={},this}function p(x){const b=x.value,y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(x){const b=x.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(r[b.id]),delete r[b.id],delete n[b.id]}function v(){for(const x in r)s.deleteBuffer(r[x]);o=[],r={},n={}}return{bind:l,update:c,dispose:v}}function gv(){const s=ks("canvas");return s.style.display="block",s}function kc(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:gv(),t=s.context!==void 0?s.context:null,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,n=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let d=null,h=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let m=!1,v=0,x=0,b=null,y=-1,S=null;const T=new ht,D=new ht;let w=null,C=e.width,k=e.height,F=1,O=null,z=null;const A=new ht(0,0,C,k),P=new ht(0,0,C,k);let I=!1;const W=new Za;let j=!1,B=!1,q=null;const ee=new dt,H=new Ne,Q=new U,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return b===null?F:1}let J=t;function Ge(R,G){for(let $=0;$<R.length;$++){const V=R[$],K=e.getContext(V,G);if(K!==null)return K}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",He,!1),e.addEventListener("webglcontextcreationerror",tt,!1),J===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),J=Ge(G,R),J===null)throw Ge(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let we,Ee,ce,Ke,De,ye,gt,Lt,St,ri,vt,$e,vi,ni,L,E,Z,te,ie,ae,Te,X,xe,de;function ve(){we=new Tg(J),Ee=new xg(J,we,s),we.init(Ee),X=new cv(J,we,Ee),ce=new ov(J,we,Ee),Ke=new Rg,De=new $0,ye=new lv(J,we,ce,De,Ee,X,Ke),gt=new bg(p),Lt=new Eg(p),St=new Bp(J,Ee),xe=new vg(J,we,St,Ee),ri=new Cg(J,St,Ke,xe),vt=new kg(J,ri,St,Ke),ie=new Pg(J,Ee,ye),E=new yg(De),$e=new j0(p,gt,Lt,we,Ee,xe,E),vi=new mv(p,De),ni=new Y0,L=new tv(we,Ee),te=new gg(p,gt,ce,vt,u,o),Z=new av(p,vt,Ee),de=new fv(J,Ke,Ee,ce),ae=new _g(J,we,Ke,Ee),Te=new Ag(J,we,Ke,Ee),Ke.programs=$e.programs,p.capabilities=Ee,p.extensions=we,p.properties=De,p.renderLists=ni,p.shadowMap=Z,p.state=ce,p.info=Ke}ve();const pe=new pv(p,J);this.xr=pe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const R=we.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=we.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(C,k,!1))},this.getSize=function(R){return R.set(C,k)},this.setSize=function(R,G,$){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=R,k=G,e.width=Math.floor(R*F),e.height=Math.floor(G*F),$!==!1&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(C*F,k*F).floor()},this.setDrawingBufferSize=function(R,G,$){C=R,k=G,F=$,e.width=Math.floor(R*$),e.height=Math.floor(G*$),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(A)},this.setViewport=function(R,G,$,V){R.isVector4?A.set(R.x,R.y,R.z,R.w):A.set(R,G,$,V),ce.viewport(T.copy(A).multiplyScalar(F).floor())},this.getScissor=function(R){return R.copy(P)},this.setScissor=function(R,G,$,V){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,G,$,V),ce.scissor(D.copy(P).multiplyScalar(F).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(R){ce.setScissorTest(I=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){z=R},this.getClearColor=function(R){return R.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(R=!0,G=!0,$=!0){let V=0;R&&(V|=16384),G&&(V|=256),$&&(V|=1024),J.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",He,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),ni.dispose(),L.dispose(),De.dispose(),gt.dispose(),Lt.dispose(),vt.dispose(),xe.dispose(),de.dispose(),$e.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Xe),pe.removeEventListener("sessionend",pt),q&&(q.dispose(),q=null),it.stop()};function Re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const R=Ke.autoReset,G=Z.enabled,$=Z.autoUpdate,V=Z.needsUpdate,K=Z.type;ve(),Ke.autoReset=R,Z.enabled=G,Z.autoUpdate=$,Z.needsUpdate=V,Z.type=K}function tt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function N(R){const G=R.target;G.removeEventListener("dispose",N),oe(G)}function oe(R){Y(R),De.remove(R)}function Y(R){const G=De.get(R).programs;G!==void 0&&(G.forEach(function($){$e.releaseProgram($)}),R.isShaderMaterial&&$e.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,$,V,K,_e){G===null&&(G=he);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,Ae=Yc(R,G,$,V,K);ce.setMaterial(V,Ce);let Ie=$.index;const et=$.attributes.position;if(Ie===null){if(et===void 0||et.count===0)return}else if(Ie.count===0)return;let Fe=1;V.wireframe===!0&&(Ie=ri.getWireframeAttribute($),Fe=2),xe.setup(K,V,Ae,$,Ie);let Oe,mt=ae;Ie!==null&&(Oe=St.get(Ie),mt=Te,mt.setIndex(Oe));const Yi=Ie!==null?Ie.count:et.count,_r=$.drawRange.start*Fe,xr=$.drawRange.count*Fe,si=_e!==null?_e.start*Fe:0,We=_e!==null?_e.count*Fe:1/0,yr=Math.max(_r,si),Kr=Math.min(Yi,_r+xr,si+We)-1,Ht=Math.max(0,Kr-yr+1);if(Ht!==0){if(K.isMesh)V.wireframe===!0?(ce.setLineWidth(V.wireframeLinewidth*ke()),mt.setMode(1)):mt.setMode(4);else if(K.isLine){let ki=V.linewidth;ki===void 0&&(ki=1),ce.setLineWidth(ki*ke()),K.isLineSegments?mt.setMode(1):K.isLineLoop?mt.setMode(2):mt.setMode(3)}else K.isPoints?mt.setMode(0):K.isSprite&&mt.setMode(4);if(K.isInstancedMesh)mt.renderInstances(yr,Ht,K.count);else if($.isInstancedBufferGeometry){const ki=Math.min($.instanceCount,$._maxInstanceCount);mt.renderInstances(yr,Ht,ki)}else mt.render(yr,Ht)}},this.compile=function(R,G){h=L.get(R),h.init(),g.push(h),R.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),h.setupLights(p.physicallyCorrectLights),R.traverse(function($){const V=$.material;if(V)if(Array.isArray(V))for(let K=0;K<V.length;K++){const _e=V[K];Gs(_e,R,$)}else Gs(V,R,$)}),g.pop(),h=null};let ue=null;function re(R){ue&&ue(R)}function Xe(){it.stop()}function pt(){it.start()}const it=new Cc;it.setAnimationLoop(re),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(R){ue=R,pe.setAnimationLoop(R),R===null?it.stop():it.start()},pe.addEventListener("sessionstart",Xe),pe.addEventListener("sessionend",pt),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;R.autoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),R.isScene===!0&&R.onBeforeRender(p,R,G,b),h=L.get(R,g.length),h.init(),g.push(h),ee.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),W.setFromProjectionMatrix(ee),B=this.localClippingEnabled,j=E.init(this.clippingPlanes,B,G),d=ni.get(R,f.length),d.init(),f.push(d),Pi(R,G,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(O,z),j===!0&&E.beginShadows();const $=h.state.shadowsArray;if(Z.render($,R,G),j===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,R),h.setupLights(p.physicallyCorrectLights),G.isArrayCamera){const V=G.cameras;for(let K=0,_e=V.length;K<_e;K++){const Ce=V[K];Qe(d,R,Ce,Ce.viewport)}}else Qe(d,R,G);b!==null&&(ye.updateMultisampleRenderTarget(b),ye.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(p,R,G),xe.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function Pi(R,G,$,V){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){V&&Q.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);const _e=vt.update(R),Ce=R.material;Ce.visible&&d.push(R,_e,Ce,$,Q.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Ke.render.frame&&(R.skeleton.update(),R.skeleton.frame=Ke.render.frame),!R.frustumCulled||W.intersectsObject(R))){V&&Q.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);const _e=vt.update(R),Ce=R.material;if(Array.isArray(Ce)){const Ae=_e.groups;for(let Ie=0,et=Ae.length;Ie<et;Ie++){const Fe=Ae[Ie],Oe=Ce[Fe.materialIndex];Oe&&Oe.visible&&d.push(R,_e,Oe,$,Q.z,Fe)}}else Ce.visible&&d.push(R,_e,Ce,$,Q.z,null)}}const K=R.children;for(let _e=0,Ce=K.length;_e<Ce;_e++)Pi(K[_e],G,$,V)}function Qe(R,G,$,V){const K=R.opaque,_e=R.transmissive,Ce=R.transparent;h.setupLightsView($),_e.length>0&&_i(K,G,$),V&&ce.viewport(T.copy(V)),K.length>0&&Vt(K,G,$),_e.length>0&&Vt(_e,G,$),Ce.length>0&&Vt(Ce,G,$),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function _i(R,G,$){const V=Ee.isWebGL2;q===null&&(q=new pr(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:V&&n===!0?4:0})),p.getDrawingBufferSize(H),V?q.setSize(H.x,H.y):q.setSize(Na(H.x),Na(H.y));const K=p.getRenderTarget();p.setRenderTarget(q),p.clear();const _e=p.toneMapping;p.toneMapping=0,Vt(R,G,$),p.toneMapping=_e,ye.updateMultisampleRenderTarget(q),ye.updateRenderTargetMipmap(q),p.setRenderTarget(K)}function Vt(R,G,$){const V=G.isScene===!0?G.overrideMaterial:null;for(let K=0,_e=R.length;K<_e;K++){const Ce=R[K],Ae=Ce.object,Ie=Ce.geometry,et=V===null?Ce.material:V,Fe=Ce.group;Ae.layers.test($.layers)&&Xc(Ae,G,$,Ie,et,Fe)}}function Xc(R,G,$,V,K,_e){R.onBeforeRender(p,G,$,V,K,_e),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(p,G,$,V,R,_e),K.transparent===!0&&K.side===2?(K.side=1,K.needsUpdate=!0,p.renderBufferDirect($,G,V,K,R,_e),K.side=0,K.needsUpdate=!0,p.renderBufferDirect($,G,V,K,R,_e),K.side=2):p.renderBufferDirect($,G,V,K,R,_e),R.onAfterRender(p,G,$,V,K,_e)}function Gs(R,G,$){G.isScene!==!0&&(G=he);const V=De.get(R),K=h.state.lights,_e=h.state.shadowsArray,Ce=K.state.version,Ae=$e.getParameters(R,K.state,_e,G,$),Ie=$e.getProgramCacheKey(Ae);let et=V.programs;V.environment=R.isMeshStandardMaterial?G.environment:null,V.fog=G.fog,V.envMap=(R.isMeshStandardMaterial?Lt:gt).get(R.envMap||V.environment),et===void 0&&(R.addEventListener("dispose",N),et=new Map,V.programs=et);let Fe=et.get(Ie);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===Ce)return ro(R,Ae),Fe}else Ae.uniforms=$e.getUniforms(R),R.onBuild($,Ae,p),R.onBeforeCompile(Ae,p),Fe=$e.acquireProgram(Ae,Ie),et.set(Ie,Fe),V.uniforms=Ae.uniforms;const Oe=V.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Oe.clippingPlanes=E.uniform),ro(R,Ae),V.needsLights=Jc(R),V.lightsStateVersion=Ce,V.needsLights&&(Oe.ambientLightColor.value=K.state.ambient,Oe.lightProbe.value=K.state.probe,Oe.directionalLights.value=K.state.directional,Oe.directionalLightShadows.value=K.state.directionalShadow,Oe.spotLights.value=K.state.spot,Oe.spotLightShadows.value=K.state.spotShadow,Oe.rectAreaLights.value=K.state.rectArea,Oe.ltc_1.value=K.state.rectAreaLTC1,Oe.ltc_2.value=K.state.rectAreaLTC2,Oe.pointLights.value=K.state.point,Oe.pointLightShadows.value=K.state.pointShadow,Oe.hemisphereLights.value=K.state.hemi,Oe.directionalShadowMap.value=K.state.directionalShadowMap,Oe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Oe.spotShadowMap.value=K.state.spotShadowMap,Oe.spotShadowMatrix.value=K.state.spotShadowMatrix,Oe.pointShadowMap.value=K.state.pointShadowMap,Oe.pointShadowMatrix.value=K.state.pointShadowMatrix);const mt=Fe.getUniforms(),Yi=ws.seqWithValue(mt.seq,Oe);return V.currentProgram=Fe,V.uniformsList=Yi,Fe}function ro(R,G){const $=De.get(R);$.outputEncoding=G.outputEncoding,$.instancing=G.instancing,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Yc(R,G,$,V,K){G.isScene!==!0&&(G=he),ye.resetTextureUnits();const _e=G.fog,Ce=V.isMeshStandardMaterial?G.environment:null,Ae=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:3e3,Ie=(V.isMeshStandardMaterial?Lt:gt).get(V.envMap||Ce),et=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Fe=!!V.normalMap&&!!$.attributes.tangent,Oe=!!$.morphAttributes.position,mt=!!$.morphAttributes.normal,Yi=!!$.morphAttributes.color,_r=V.toneMapped?p.toneMapping:0,xr=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,si=xr!==void 0?xr.length:0,We=De.get(V),yr=h.state.lights;if(j===!0&&(B===!0||R!==S)){const Pt=R===S&&V.id===y;E.setState(V,R,Pt)}let Kr=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==yr.state.version||We.outputEncoding!==Ae||K.isInstancedMesh&&We.instancing===!1||!K.isInstancedMesh&&We.instancing===!0||K.isSkinnedMesh&&We.skinning===!1||!K.isSkinnedMesh&&We.skinning===!0||We.envMap!==Ie||V.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==E.numPlanes||We.numIntersection!==E.numIntersection)||We.vertexAlphas!==et||We.vertexTangents!==Fe||We.morphTargets!==Oe||We.morphNormals!==mt||We.morphColors!==Yi||We.toneMapping!==_r||Ee.isWebGL2===!0&&We.morphTargetsCount!==si)&&(Kr=!0):(Kr=!0,We.__version=V.version);let Ht=We.currentProgram;Kr===!0&&(Ht=Gs(V,G,K));let ki=!1,Qr=!1,Vs=!1;const Et=Ht.getUniforms(),en=We.uniforms;if(ce.useProgram(Ht.program)&&(ki=!0,Qr=!0,Vs=!0),V.id!==y&&(y=V.id,Qr=!0),ki||S!==R){if(Et.setValue(J,"projectionMatrix",R.projectionMatrix),Ee.logarithmicDepthBuffer&&Et.setValue(J,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),S!==R&&(S=R,Qr=!0,Vs=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Pt=Et.map.cameraPosition;Pt!==void 0&&Pt.setValue(J,Q.setFromMatrixPosition(R.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Et.setValue(J,"isOrthographic",R.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||K.isSkinnedMesh)&&Et.setValue(J,"viewMatrix",R.matrixWorldInverse)}if(K.isSkinnedMesh){Et.setOptional(J,K,"bindMatrix"),Et.setOptional(J,K,"bindMatrixInverse");const Pt=K.skeleton;Pt&&(Ee.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),Et.setValue(J,"boneTexture",Pt.boneTexture,ye),Et.setValue(J,"boneTextureSize",Pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hs=$.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0&&Ee.isWebGL2===!0)&&ie.update(K,$,V,Ht),(Qr||We.receiveShadow!==K.receiveShadow)&&(We.receiveShadow=K.receiveShadow,Et.setValue(J,"receiveShadow",K.receiveShadow)),Qr&&(Et.setValue(J,"toneMappingExposure",p.toneMappingExposure),We.needsLights&&Zc(en,Vs),_e&&V.fog===!0&&vi.refreshFogUniforms(en,_e),vi.refreshMaterialUniforms(en,V,F,k,q),ws.upload(J,We.uniformsList,en,ye)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ws.upload(J,We.uniformsList,en,ye),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Et.setValue(J,"center",K.center),Et.setValue(J,"modelViewMatrix",K.modelViewMatrix),Et.setValue(J,"normalMatrix",K.normalMatrix),Et.setValue(J,"modelMatrix",K.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Pt=V.uniformsGroups;for(let Ws=0,Kc=Pt.length;Ws<Kc;Ws++)if(Ee.isWebGL2){const no=Pt[Ws];de.update(no,Ht),de.bind(no,Ht)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ht}function Zc(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Jc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,G,$){De.get(R.texture).__webglTexture=G,De.get(R.depthTexture).__webglTexture=$;const V=De.get(R);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=$===void 0,V.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){const $=De.get(R);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,$=0){b=R,v=G,x=$;let V=!0;if(R){const Ae=De.get(R);Ae.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),V=!1):Ae.__webglFramebuffer===void 0?ye.setupRenderTarget(R):Ae.__hasExternalTextures&&ye.rebindTextures(R,De.get(R.texture).__webglTexture,De.get(R.depthTexture).__webglTexture)}let K=null,_e=!1,Ce=!1;if(R){const Ae=R.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture)&&(Ce=!0);const Ie=De.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(K=Ie[G],_e=!0):Ee.isWebGL2&&R.samples>0&&ye.useMultisampledRTT(R)===!1?K=De.get(R).__webglMultisampledFramebuffer:K=Ie,T.copy(R.viewport),D.copy(R.scissor),w=R.scissorTest}else T.copy(A).multiplyScalar(F).floor(),D.copy(P).multiplyScalar(F).floor(),w=I;if(ce.bindFramebuffer(36160,K)&&Ee.drawBuffers&&V&&ce.drawBuffers(R,K),ce.viewport(T),ce.scissor(D),ce.setScissorTest(w),_e){const Ae=De.get(R.texture);J.framebufferTexture2D(36160,36064,34069+G,Ae.__webglTexture,$)}else if(Ce){const Ae=De.get(R.texture),Ie=G||0;J.framebufferTextureLayer(36160,36064,Ae.__webglTexture,$||0,Ie)}y=-1},this.readRenderTargetPixels=function(R,G,$,V,K,_e,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=De.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ae=Ae[Ce]),Ae){ce.bindFramebuffer(36160,Ae);try{const Ie=R.texture,et=Ie.format,Fe=Ie.type;if(et!==1023&&X.convert(et)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Fe===1016&&(we.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&we.has("EXT_color_buffer_float"));if(Fe!==1009&&X.convert(Fe)!==J.getParameter(35738)&&!(Fe===1015&&(Ee.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-V&&$>=0&&$<=R.height-K&&J.readPixels(G,$,V,K,X.convert(et),X.convert(Fe),_e)}finally{const Ie=b!==null?De.get(b).__webglFramebuffer:null;ce.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(R,G,$=0){const V=Math.pow(2,-$),K=Math.floor(G.image.width*V),_e=Math.floor(G.image.height*V);ye.setTexture2D(G,0),J.copyTexSubImage2D(3553,$,0,0,R.x,R.y,K,_e),ce.unbindTexture()},this.copyTextureToTexture=function(R,G,$,V=0){const K=G.image.width,_e=G.image.height,Ce=X.convert($.format),Ae=X.convert($.type);ye.setTexture2D($,0),J.pixelStorei(37440,$.flipY),J.pixelStorei(37441,$.premultiplyAlpha),J.pixelStorei(3317,$.unpackAlignment),G.isDataTexture?J.texSubImage2D(3553,V,R.x,R.y,K,_e,Ce,Ae,G.image.data):G.isCompressedTexture?J.compressedTexSubImage2D(3553,V,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,Ce,G.mipmaps[0].data):J.texSubImage2D(3553,V,R.x,R.y,Ce,Ae,G.image),V===0&&$.generateMipmaps&&J.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(R,G,$,V,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=R.max.x-R.min.x+1,Ce=R.max.y-R.min.y+1,Ae=R.max.z-R.min.z+1,Ie=X.convert(V.format),et=X.convert(V.type);let Fe;if(V.isData3DTexture)ye.setTexture3D(V,0),Fe=32879;else if(V.isDataArrayTexture)ye.setTexture2DArray(V,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,V.flipY),J.pixelStorei(37441,V.premultiplyAlpha),J.pixelStorei(3317,V.unpackAlignment);const Oe=J.getParameter(3314),mt=J.getParameter(32878),Yi=J.getParameter(3316),_r=J.getParameter(3315),xr=J.getParameter(32877),si=$.isCompressedTexture?$.mipmaps[0]:$.image;J.pixelStorei(3314,si.width),J.pixelStorei(32878,si.height),J.pixelStorei(3316,R.min.x),J.pixelStorei(3315,R.min.y),J.pixelStorei(32877,R.min.z),$.isDataTexture||$.isData3DTexture?J.texSubImage3D(Fe,K,G.x,G.y,G.z,_e,Ce,Ae,Ie,et,si.data):$.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Fe,K,G.x,G.y,G.z,_e,Ce,Ae,Ie,si.data)):J.texSubImage3D(Fe,K,G.x,G.y,G.z,_e,Ce,Ae,Ie,et,si),J.pixelStorei(3314,Oe),J.pixelStorei(32878,mt),J.pixelStorei(3316,Yi),J.pixelStorei(3315,_r),J.pixelStorei(32877,xr),K===0&&V.generateMipmaps&&J.generateMipmap(Fe),ce.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ye.setTextureCube(R,0):R.isData3DTexture?ye.setTexture3D(R,0):R.isDataArrayTexture?ye.setTexture2DArray(R,0):ye.setTexture2D(R,0),ce.unbindTexture()},this.resetState=function(){v=0,x=0,b=null,ce.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class vv extends kc{}vv.prototype.isWebGL1Renderer=!0;class _v extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class tl extends Ut{constructor(e,t,i,r,n,o,a,l,c){super(e,t,i,r,n,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ka extends fi{constructor(e=1,t=1,i=1,r=8,n=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),n=Math.floor(n);const u=[],d=[],h=[],f=[];let g=0;const p=[],m=i/2;let v=0;x(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function x(){const y=new U,S=new U;let T=0;const D=(t-e)/i;for(let w=0;w<=n;w++){const C=[],k=w/n,F=k*(t-e)+e;for(let O=0;O<=r;O++){const z=O/r,A=z*l+a,P=Math.sin(A),I=Math.cos(A);S.x=F*P,S.y=-k*i+m,S.z=F*I,d.push(S.x,S.y,S.z),y.set(P,D,I).normalize(),h.push(y.x,y.y,y.z),f.push(z,1-k),C.push(g++)}p.push(C)}for(let w=0;w<r;w++)for(let C=0;C<n;C++){const k=p[C][w],F=p[C+1][w],O=p[C+1][w+1],z=p[C][w+1];u.push(k,F,z),u.push(F,O,z),T+=6}c.addGroup(v,T,0),v+=T}function b(y){const S=g,T=new Ne,D=new U;let w=0;const C=y===!0?e:t,k=y===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,m*k,0),h.push(0,k,0),f.push(.5,.5),g++;const F=g;for(let O=0;O<=r;O++){const z=O/r*l+a,A=Math.cos(z),P=Math.sin(z);D.x=C*P,D.y=m*k,D.z=C*A,d.push(D.x,D.y,D.z),h.push(0,k,0),T.x=A*.5+.5,T.y=P*.5*k+.5,f.push(T.x,T.y),g++}for(let O=0;O<r;O++){const z=S+O,A=F+O;y===!0?u.push(A,A+1,z):u.push(A+1,A,z),w+=3}c.addGroup(v,w,y===!0?1:2),v+=w}}static fromJSON(e){return new Ka(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xv extends vr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class yv extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bv extends vr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ic extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class wv extends Ic{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DefaultUp),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const il=new dt,rl=new U,nl=new U;class Mv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(rl),nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nl),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sv extends Mv{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=za*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||r!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ev extends Ic{constructor(e,t,i=0,r=Math.PI/3,n=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DefaultUp),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=r,this.penumbra=n,this.decay=o,this.shadow=new Sv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);class ei{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const i=this.elements,r=e.x,n=e.y,o=e.z;return t.x=i[0]*r+i[1]*n+i[2]*o,t.y=i[3]*r+i[4]*n+i[5]*o,t.z=i[6]*r+i[7]*n+i[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new ei);const i=this.elements,r=e.elements,n=t.elements,o=i[0],a=i[1],l=i[2],c=i[3],u=i[4],d=i[5],h=i[6],f=i[7],g=i[8],p=r[0],m=r[1],v=r[2],x=r[3],b=r[4],y=r[5],S=r[6],T=r[7],D=r[8];return n[0]=o*p+a*x+l*S,n[1]=o*m+a*b+l*T,n[2]=o*v+a*y+l*D,n[3]=c*p+u*x+d*S,n[4]=c*m+u*b+d*T,n[5]=c*v+u*y+d*D,n[6]=h*p+f*x+g*S,n[7]=h*m+f*b+g*T,n[8]=h*v+f*y+g*D,t}scale(e,t){t===void 0&&(t=new ei);const i=this.elements,r=t.elements;for(let n=0;n!==3;n++)r[3*n+0]=e.x*i[3*n+0],r[3*n+1]=e.y*i[3*n+1],r[3*n+2]=e.z*i[3*n+2];return t}solve(e,t){t===void 0&&(t=new M);const i=3,r=4,n=[];let o,a;for(o=0;o<i*r;o++)n.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)n[o+r*a]=this.elements[o+3*a];n[3+4*0]=e.x,n[3+4*1]=e.y,n[3+4*2]=e.z;let l=3;const c=l;let u;const d=4;let h;do{if(o=c-l,n[o+r*o]===0){for(a=o+1;a<c;a++)if(n[o+r*a]!==0){u=d;do h=d-u,n[h+r*o]+=n[h+r*a];while(--u);break}}if(n[o+r*o]!==0)for(a=o+1;a<c;a++){const f=n[o+r*a]/n[o+r*o];u=d;do h=d-u,n[h+r*a]=h<=o?0:n[h+r*a]-n[h+r*o]*f;while(--u)}}while(--l);if(t.z=n[2*r+3]/n[2*r+2],t.y=(n[1*r+3]-n[1*r+2]*t.z)/n[1*r+1],t.x=(n[0*r+3]-n[0*r+2]*t.z-n[0*r+1]*t.y)/n[0*r+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new ei);const t=3,i=6,r=Tv;let n,o;for(n=0;n<3;n++)for(o=0;o<3;o++)r[n+i*o]=this.elements[n+3*o];r[3+6*0]=1,r[3+6*1]=0,r[3+6*2]=0,r[4+6*0]=0,r[4+6*1]=1,r[4+6*2]=0,r[5+6*0]=0,r[5+6*1]=0,r[5+6*2]=1;let a=3;const l=a;let c;const u=i;let d;do{if(n=l-a,r[n+i*n]===0){for(o=n+1;o<l;o++)if(r[n+i*o]!==0){c=u;do d=u-c,r[d+i*n]+=r[d+i*o];while(--c);break}}if(r[n+i*n]!==0)for(o=n+1;o<l;o++){const h=r[n+i*o]/r[n+i*n];c=u;do d=u-c,r[d+i*o]=d<=n?0:r[d+i*o]-r[d+i*n]*h;while(--c)}}while(--a);n=2;do{o=n-1;do{const h=r[n+i*o]/r[n+i*n];c=i;do d=i-c,r[d+i*o]=r[d+i*o]-r[d+i*n]*h;while(--c)}while(o--)}while(--n);n=2;do{const h=1/r[n+i*n];c=i;do d=i-c,r[d+i*n]=r[d+i*n]*h;while(--c)}while(n--);n=2;do{o=2;do{if(d=r[t+o+i*n],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(n,o,d)}while(o--)}while(n--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,r=e.z,n=e.w,o=t+t,a=i+i,l=r+r,c=t*o,u=t*a,d=t*l,h=i*a,f=i*l,g=r*l,p=n*o,m=n*a,v=n*l,x=this.elements;return x[3*0+0]=1-(h+g),x[3*0+1]=u-v,x[3*0+2]=d+m,x[3*1+0]=u+v,x[3*1+1]=1-(c+g),x[3*1+2]=f-p,x[3*2+0]=d-m,x[3*2+1]=f+p,x[3*2+2]=1-(c+h),this}transpose(e){e===void 0&&(e=new ei);const t=this.elements,i=e.elements;let r;return i[0]=t[0],i[4]=t[4],i[8]=t[8],r=t[1],i[1]=t[3],i[3]=r,r=t[2],i[2]=t[6],i[6]=r,r=t[5],i[5]=t[7],i[7]=r,e}}const Tv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new M);const i=e.x,r=e.y,n=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*n-l*r,t.y=l*i-o*n,t.z=o*r-a*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new ei([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,r=Math.sqrt(e*e+t*t+i*i);if(r>0){const n=1/r;this.x*=n,this.y*=n,this.z*=n}else this.x=0,this.y=0,this.z=0;return r}unit(e){e===void 0&&(e=new M);const t=this.x,i=this.y,r=this.z;let n=Math.sqrt(t*t+i*i+r*r);return n>0?(n=1/n,e.x=t*n,e.y=i*n,e.z=r*n):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,r=this.z,n=e.x,o=e.y,a=e.z;return Math.sqrt((n-t)*(n-t)+(o-i)*(o-i)+(a-r)*(a-r))}distanceSquared(e){const t=this.x,i=this.y,r=this.z,n=e.x,o=e.y,a=e.z;return(n-t)*(n-t)+(o-i)*(o-i)+(a-r)*(a-r)}scale(e,t){t===void 0&&(t=new M);const i=this.x,r=this.y,n=this.z;return t.x=e*i,t.y=e*r,t.z=e*n,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new M),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const r=Cv,n=1/i;r.set(this.x*n,this.y*n,this.z*n);const o=Av;Math.abs(r.x)<.9?(o.set(1,0,0),r.cross(o,e)):(o.set(0,1,0),r.cross(o,e)),r.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const r=this.x,n=this.y,o=this.z;i.x=r+(e.x-r)*t,i.y=n+(e.y-n)*t,i.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(sl),sl.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const Cv=new M,Av=new M,sl=new M;class Gt{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,r){const n=this.lowerBound,o=this.upperBound,a=i;n.copy(e[0]),a&&a.vmult(n,n),o.copy(n);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,al),c=al),c.x>o.x&&(o.x=c.x),c.x<n.x&&(n.x=c.x),c.y>o.y&&(o.y=c.y),c.y<n.y&&(n.y=c.y),c.z>o.z&&(o.z=c.z),c.z<n.z&&(n.z=c.z)}return t&&(t.vadd(n,n),t.vadd(o,o)),r&&(n.x-=r,n.y-=r,n.z-=r,o.x+=r,o.y+=r,o.z+=r),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Gt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,n=e.upperBound,o=r.x<=i.x&&i.x<=n.x||t.x<=n.x&&n.x<=i.x,a=r.y<=i.y&&i.y<=n.y||t.y<=n.y&&n.y<=i.y,l=r.z<=i.z&&i.z<=n.z||t.z<=n.z&&n.z<=i.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,n=e.upperBound;return t.x<=r.x&&i.x>=n.x&&t.y<=r.y&&i.y>=n.y&&t.z<=r.z&&i.z>=n.z}getCorners(e,t,i,r,n,o,a,l){const c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),i.set(u.x,u.y,c.z),r.set(c.x,u.y,u.z),n.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){const i=ol,r=i[0],n=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7];this.getCorners(r,n,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=i[h];e.pointToLocal(f,f)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=ol,r=i[0],n=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7];this.getCorners(r,n,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=i[h];e.pointToWorld(f,f)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,r=1/t.x,n=1/t.y,o=1/t.z,a=(this.lowerBound.x-i.x)*r,l=(this.upperBound.x-i.x)*r,c=(this.lowerBound.y-i.y)*n,u=(this.upperBound.y-i.y)*n,d=(this.lowerBound.z-i.z)*o,h=(this.upperBound.z-i.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(g<0||f>g)}}const al=new M,ol=[new M,new M,new M,new M,new M,new M,new M,new M];class ll{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:r}=t;if(r>i){const n=r;r=i,i=n}return this.matrix[(i*(i+1)>>1)+r-1]}set(e,t,i){let{index:r}=e,{index:n}=t;if(n>r){const o=n;n=r,r=o}this.matrix[(r*(r+1)>>1)+n-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Fc{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const r=i[e].indexOf(t);return r!==-1&&i[e].splice(r,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const t=this._listeners[e.type];if(t!==void 0){e.target=this;for(let i=0,r=t.length;i<r;i++)t[i].call(this,e)}return this}}class lt{constructor(e,t,i,r){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),r===void 0&&(r=1),this.x=e,this.y=t,this.z=i,this.w=r}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=Rv,r=Dv;e.tangents(i,r),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new lt);const i=this.x,r=this.y,n=this.z,o=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=i*u+o*a+r*c-n*l,t.y=r*u+o*l+n*a-i*c,t.z=n*u+o*c+i*l-r*a,t.w=o*u-i*a-r*l-n*c,t}inverse(e){e===void 0&&(e=new lt);const t=this.x,i=this.y,r=this.z,n=this.w;this.conjugate(e);const o=1/(t*t+i*i+r*r+n*n);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new lt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const i=e.x,r=e.y,n=e.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*i+a*n-l*r,d=c*r+l*i-o*n,h=c*n+o*r-a*i,f=-o*i-a*r-l*n;return t.x=u*c+f*-o+d*-l-h*-a,t.y=d*c+f*-a+h*-o-u*-l,t.z=h*c+f*-l+u*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,r,n;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const u=o*a+l*c;if(u>.499&&(i=2*Math.atan2(o,c),r=Math.PI/2,n=0),u<-.499&&(i=-2*Math.atan2(o,c),r=-Math.PI/2,n=0),i===void 0){const d=o*o,h=a*a,f=l*l;i=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),r=Math.asin(2*u),n=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=r,e.x=n}setFromEuler(e,t,i,r){r===void 0&&(r="XYZ");const n=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(i/2);return r==="XYZ"?(this.x=l*o*a+n*c*u,this.y=n*c*a-l*o*u,this.z=n*o*u+l*c*a,this.w=n*o*a-l*c*u):r==="YXZ"?(this.x=l*o*a+n*c*u,this.y=n*c*a-l*o*u,this.z=n*o*u-l*c*a,this.w=n*o*a+l*c*u):r==="ZXY"?(this.x=l*o*a-n*c*u,this.y=n*c*a+l*o*u,this.z=n*o*u+l*c*a,this.w=n*o*a-l*c*u):r==="ZYX"?(this.x=l*o*a-n*c*u,this.y=n*c*a+l*o*u,this.z=n*o*u-l*c*a,this.w=n*o*a+l*c*u):r==="YZX"?(this.x=l*o*a+n*c*u,this.y=n*c*a+l*o*u,this.z=n*o*u-l*c*a,this.w=n*o*a-l*c*u):r==="XZY"&&(this.x=l*o*a-n*c*u,this.y=n*c*a-l*o*u,this.z=n*o*u+l*c*a,this.w=n*o*a+l*c*u),this}clone(){return new lt(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new lt);const r=this.x,n=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,u=e.z,d=e.w,h,f,g,p,m;return f=r*l+n*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),p=Math.sin((1-t)*h)/g,m=Math.sin(t*h)/g):(p=1-t,m=t),i.x=p*r+m*l,i.y=p*n+m*c,i.z=p*o+m*u,i.w=p*a+m*d,i}integrate(e,t,i,r){r===void 0&&(r=new lt);const n=e.x*i.x,o=e.y*i.y,a=e.z*i.z,l=this.x,c=this.y,u=this.z,d=this.w,h=t*.5;return r.x+=h*(n*d+o*u-a*c),r.y+=h*(o*d+a*l-n*u),r.z+=h*(a*d+n*c-o*l),r.w+=h*(-n*l-o*c-a*u),r}}const Rv=new M,Dv=new M,Lv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class le{constructor(e){e===void 0&&(e={}),this.id=le.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}le.idCounter=0;le.types=Lv;class Ve{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new lt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ve.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ve.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,r){return r===void 0&&(r=new M),i.vsub(e,r),t.conjugate(cl),cl.vmult(r,r),r}static pointToWorldFrame(e,t,i,r){return r===void 0&&(r=new M),t.vmult(i,r),r.vadd(e,r),r}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new M),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,r){return r===void 0&&(r=new M),t.w*=-1,t.vmult(i,r),t.w*=-1,r}}const cl=new lt;class lr extends le{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:r=[],axes:n,boundingSphereRadius:o}=e;super({type:le.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=n?n.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const r=new M;for(let n=0;n!==e.length;n++){const o=e[n],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],r),r.normalize();let u=!1;for(let d=0;d!==i.length;d++)if(i[d].almostEquals(r)||i[d].almostEquals(r)){u=!0;break}u||i.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let r=0;r<this.faces[e].length;r++)if(!this.vertices[this.faces[e][r]])throw new Error(`Vertex ${this.faces[e][r]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[e].length;r++)console.warn(`.vertices[${this.faces[e][r]}] = Vec3(${this.vertices[this.faces[e][r]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],r=this.vertices[i[0]],n=this.vertices[i[1]],o=this.vertices[i[2]];lr.computeNormal(r,n,o,t)}static computeNormal(e,t,i,r){const n=new M,o=new M;t.vsub(e,o),i.vsub(t,n),n.cross(o,r),r.isZero()||r.normalize()}clipAgainstHull(e,t,i,r,n,o,a,l,c){const u=new M;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){u.copy(i.faceNormals[g]),n.vmult(u,u);const p=u.dot(o);p>h&&(h=p,d=g)}const f=[];for(let g=0;g<i.faces[d].length;g++){const p=i.vertices[i.faces[d][g]],m=new M;m.copy(p),n.vmult(m,m),r.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,i,r,n,o,a,l){const c=new M,u=new M,d=new M,h=new M,f=new M,g=new M;let p=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let v=0;v!==m.uniqueAxes.length;v++){i.vmult(m.uniqueAxes[v],c);const x=m.testSepAxis(c,e,t,i,r,n);if(x===!1)return!1;x<p&&(p=x,o.copy(c))}else{const v=a?a.length:m.faces.length;for(let x=0;x<v;x++){const b=a?a[x]:x;c.copy(m.faceNormals[b]),i.vmult(c,c);const y=m.testSepAxis(c,e,t,i,r,n);if(y===!1)return!1;y<p&&(p=y,o.copy(c))}}if(e.uniqueAxes)for(let v=0;v!==e.uniqueAxes.length;v++){n.vmult(e.uniqueAxes[v],u);const x=m.testSepAxis(u,e,t,i,r,n);if(x===!1)return!1;x<p&&(p=x,o.copy(u))}else{const v=l?l.length:e.faces.length;for(let x=0;x<v;x++){const b=l?l[x]:x;u.copy(e.faceNormals[b]),n.vmult(u,u);const y=m.testSepAxis(u,e,t,i,r,n);if(y===!1)return!1;y<p&&(p=y,o.copy(u))}}for(let v=0;v!==m.uniqueEdges.length;v++){i.vmult(m.uniqueEdges[v],h);for(let x=0;x!==e.uniqueEdges.length;x++)if(n.vmult(e.uniqueEdges[x],f),h.cross(f,g),!g.almostZero()){g.normalize();const b=m.testSepAxis(g,e,t,i,r,n);if(b===!1)return!1;b<p&&(p=b,o.copy(g))}}return r.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,i,r,n,o){const a=this;lr.project(a,e,i,r,Ta),lr.project(t,e,n,o,Ca);const l=Ta[0],c=Ta[1],u=Ca[0],d=Ca[1];if(l<d||u<c)return!1;const h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(e,t){const i=new M,r=new M;this.computeLocalAABB(r,i);const n=i.x-r.x,o=i.y-r.y,a=i.z-r.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*n*2*n+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*n*2*n)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],r=this.vertices[t[0]];return-i.dot(r)}clipFaceAgainstHull(e,t,i,r,n,o,a){const l=new M,c=new M,u=new M,d=new M,h=new M,f=new M,g=new M,p=new M,m=this,v=[],x=r,b=v;let y=-1,S=Number.MAX_VALUE;for(let k=0;k<m.faces.length;k++){l.copy(m.faceNormals[k]),i.vmult(l,l);const F=l.dot(e);F<S&&(S=F,y=k)}if(y<0)return;const T=m.faces[y];T.connectedFaces=[];for(let k=0;k<m.faces.length;k++)for(let F=0;F<m.faces[k].length;F++)T.indexOf(m.faces[k][F])!==-1&&k!==y&&T.connectedFaces.indexOf(k)===-1&&T.connectedFaces.push(k);const D=T.length;for(let k=0;k<D;k++){const F=m.vertices[T[k]],O=m.vertices[T[(k+1)%D]];F.vsub(O,c),u.copy(c),i.vmult(u,u),t.vadd(u,u),d.copy(this.faceNormals[y]),i.vmult(d,d),t.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(F),i.vmult(f,f),t.vadd(f,f);const z=T.connectedFaces[k];g.copy(this.faceNormals[z]);const A=this.getPlaneConstantOfFace(z);p.copy(g),i.vmult(p,p);const P=A-p.dot(t);for(this.clipFaceAgainstPlane(x,b,p,P);x.length;)x.shift();for(;b.length;)x.push(b.shift())}g.copy(this.faceNormals[y]);const w=this.getPlaneConstantOfFace(y);p.copy(g),i.vmult(p,p);const C=w-p.dot(t);for(let k=0;k<x.length;k++){let F=p.dot(x[k])+C;if(F<=n&&(F=n),F<=o){const O=x[k];if(F<=1e-6){const z={point:O,normal:p,depth:F};a.push(z)}}}}clipFaceAgainstPlane(e,t,i,r){let n,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];n=i.dot(l)+r;for(let u=0;u<a;u++){if(c=e[u],o=i.dot(c)+r,n<0)if(o<0){const d=new M;d.copy(c),t.push(d)}else{const d=new M;l.lerp(c,n/(n-o),d),t.push(d)}else if(o<0){const d=new M;l.lerp(c,n/(n-o),d),t.push(d),t.push(c)}l=c,n=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const i=this.vertices,r=this.worldVertices;for(let n=0;n!==this.vertices.length;n++)t.vmult(i[n],r[n]),e.vadd(r[n],r[n]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const n=i[r];n.x<e.x?e.x=n.x:n.x>t.x&&(t.x=n.x),n.y<e.y?e.y=n.y:n.y>t.y&&(t.y=n.y),n.z<e.z?e.z=n.z:n.z>t.z&&(t.z=n.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const i=this.faceNormals,r=this.worldFaceNormals;for(let n=0;n!==t;n++)e.vmult(i[n],r[n]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const r=t[i].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,r){const n=this.vertices;let o,a,l,c,u,d,h=new M;for(let f=0;f<n.length;f++){h.copy(n[f]),t.vmult(h,h),e.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}i.set(o,a,l),r.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,r=this.vertices;if(t){for(let n=0;n<i;n++){const o=r[n];t.vmult(o,o)}for(let n=0;n<this.faceNormals.length;n++){const o=this.faceNormals[n];t.vmult(o,o)}}if(e)for(let n=0;n<i;n++){const o=r[n];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,i=this.faces,r=this.faceNormals,n=null,o=new M;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=r[a];const c=t[i[a][0]],u=new M;e.vsub(c,u);const d=l.dot(u),h=new M;o.vsub(c,h);const f=l.dot(h);if(d<0&&f>0||d>0&&f<0)return!1}return n?1:-1}static project(e,t,i,r,n){const o=e.vertices.length,a=Pv;let l=0,c=0;const u=kv,d=e.vertices;u.setZero(),Ve.vectorToLocalFrame(i,r,t,a),Ve.pointToLocalFrame(i,r,u,u);const h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}n[0]=l,n[1]=c}}const Ta=[],Ca=[];new M;const Pv=new M,kv=new M;class Qa extends le{constructor(e){super({type:le.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,r=M,n=[new r(-e,-t,-i),new r(e,-t,-i),new r(e,t,-i),new r(-e,t,-i),new r(-e,-t,i),new r(e,-t,i),new r(e,t,i),new r(-e,t,i)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],l=new lr({vertices:n,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),Qa.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const r=e;i.x=1/12*t*(2*r.y*2*r.y+2*r.z*2*r.z),i.y=1/12*t*(2*r.x*2*r.x+2*r.z*2*r.z),i.z=1/12*t*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,t){const i=e,r=this.halfExtents;if(i[0].set(r.x,0,0),i[1].set(0,r.y,0),i[2].set(0,0,r.z),i[3].set(-r.x,0,0),i[4].set(0,-r.y,0),i[5].set(0,0,-r.z),t!==void 0)for(let n=0;n!==i.length;n++)t.vmult(i[n],i[n]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const r=this.halfExtents,n=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let o=0;o<n.length;o++)Hi.set(n[o][0],n[o][1],n[o][2]),t.vmult(Hi,Hi),e.vadd(Hi,Hi),i(Hi.x,Hi.y,Hi.z)}calculateWorldAABB(e,t,i,r){const n=this.halfExtents;ai[0].set(n.x,n.y,n.z),ai[1].set(-n.x,n.y,n.z),ai[2].set(-n.x,-n.y,n.z),ai[3].set(-n.x,-n.y,-n.z),ai[4].set(n.x,-n.y,-n.z),ai[5].set(n.x,n.y,-n.z),ai[6].set(-n.x,n.y,-n.z),ai[7].set(n.x,-n.y,n.z);const o=ai[0];t.vmult(o,o),e.vadd(o,o),r.copy(o),i.copy(o);for(let a=1;a<8;a++){const l=ai[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>r.x&&(r.x=c),u>r.y&&(r.y=u),d>r.z&&(r.z=d),c<i.x&&(i.x=c),u<i.y&&(i.y=u),d<i.z&&(i.z=d)}}}const Hi=new M,ai=[new M,new M,new M,new M,new M,new M,new M,new M],eo={DYNAMIC:1,STATIC:2,KINEMATIC:4},to={AWAKE:0,SLEEPY:1,SLEEPING:2};class ne extends Fc{constructor(e){e===void 0&&(e={}),super(),this.id=ne.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ne.STATIC:ne.DYNAMIC,typeof e.type==typeof ne.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ne.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new lt,this.initQuaternion=new lt,this.previousQuaternion=new lt,this.interpolatedQuaternion=new lt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new ei,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new ei,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Gt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ne.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ne.SLEEPING&&this.dispatchEvent(ne.wakeupEvent)}sleep(){this.sleepState=ne.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;t===ne.AWAKE&&i<r?(this.sleepState=ne.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ne.sleepyEvent)):t===ne.SLEEPY&&i>r?this.wakeUp():t===ne.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ne.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ne.SLEEPING||this.type===ne.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,i){const r=new M,n=new lt;return t&&r.copy(t),i&&n.copy(i),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(n),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let r=0;for(let n=0;n!==i;n++){const o=e[n];o.updateBoundingSphereRadius();const a=t[n].length(),l=o.boundingSphereRadius;a+l>r&&(r=a+l)}this.boundingRadius=r}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,r=e.length,n=Iv,o=Fv,a=this.quaternion,l=this.aabb,c=zv;for(let u=0;u!==r;u++){const d=e[u];a.vmult(t[u],n),n.vadd(this.position,n),a.mult(i[u],o),d.calculateWorldAABB(n,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=Nv,r=Ov;i.setRotationFromQuaternion(this.quaternion),i.transpose(r),i.scale(t,i),i.mmult(r,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==ne.DYNAMIC)return;this.sleepState===ne.SLEEPING&&this.wakeUp();const i=Bv;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==ne.DYNAMIC)return;const i=Uv,r=Gv;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyForce(i,r)}applyTorque(e){this.type===ne.DYNAMIC&&(this.sleepState===ne.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==ne.DYNAMIC)return;this.sleepState===ne.SLEEPING&&this.wakeUp();const i=t,r=Vv;r.copy(e),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const n=Hv;i.cross(e,n),this.invInertiaWorld.vmult(n,n),this.angularVelocity.vadd(n,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==ne.DYNAMIC)return;const i=Wv,r=qv;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyImpulse(i,r)}updateMassProperties(){const e=jv;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Qa.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new M;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ne.DYNAMIC||this.type===ne.KINEMATIC)||this.sleepState===ne.SLEEPING)return;const r=this.velocity,n=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*e;r.x+=a.x*f*h.x,r.y+=a.y*f*h.y,r.z+=a.z*f*h.z;const g=d.elements,p=this.angularFactor,m=l.x*p.x,v=l.y*p.y,x=l.z*p.z;n.x+=e*(g[0]*m+g[1]*v+g[2]*x),n.y+=e*(g[3]*m+g[4]*v+g[5]*x),n.z+=e*(g[6]*m+g[7]*v+g[8]*x),o.x+=r.x*e,o.y+=r.y*e,o.z+=r.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ne.idCounter=0;ne.COLLIDE_EVENT_NAME="collide";ne.DYNAMIC=eo.DYNAMIC;ne.STATIC=eo.STATIC;ne.KINEMATIC=eo.KINEMATIC;ne.AWAKE=to.AWAKE;ne.SLEEPY=to.SLEEPY;ne.SLEEPING=to.SLEEPING;ne.wakeupEvent={type:"wakeup"};ne.sleepyEvent={type:"sleepy"};ne.sleepEvent={type:"sleep"};const Iv=new M,Fv=new lt,zv=new Gt,Nv=new ei,Ov=new ei;new ei;const Bv=new M,Uv=new M,Gv=new M,Vv=new M,Hv=new M,Wv=new M,qv=new M,jv=new M;class $v{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&ne.STATIC||e.sleepState===ne.SLEEPING)&&(t.type&ne.STATIC||t.sleepState===ne.SLEEPING))}intersectionTest(e,t,i,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,r):this.doBoundingSphereBroadphase(e,t,i,r)}doBoundingSphereBroadphase(e,t,i,r){const n=Xv;t.position.vsub(e.position,n);const o=(e.boundingRadius+t.boundingRadius)**2;n.lengthSquared()<o&&(i.push(e),r.push(t))}doBoundingBoxBroadphase(e,t,i,r){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),r.push(t))}makePairsUnique(e,t){const i=Yv,r=Zv,n=Jv,o=e.length;for(let a=0;a!==o;a++)r[a]=e[a],n[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=r[a].id,c=n[a].id,u=l<c?`${l},${c}`:`${c},${l}`;i[u]=a,i.keys.push(u)}for(let a=0;a!==i.keys.length;a++){const l=i.keys.pop(),c=i[l];e.push(r[c]),t.push(n[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new M;e.position.vsub(t.position,i);const r=e.shapes[0],n=t.shapes[0];return Math.pow(r.boundingSphereRadius+n.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Xv=new M;new M;new lt;new M;const Yv={keys:[]},Zv=[],Jv=[];new M;new M;new M;class zc extends $v{constructor(){super()}collisionPairs(e,t,i){const r=e.bodies,n=r.length;let o,a;for(let l=0;l!==n;l++)for(let c=0;c!==l;c++)o=r[l],a=r[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let r=0;r<e.bodies.length;r++){const n=e.bodies[r];n.aabbNeedsUpdate&&n.updateAABB(),n.aabb.overlaps(t)&&i.push(n)}return i}}class Is{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,r,n,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(r),this.shape=n,this.body=o,this.distance=a}}let Nc,Oc,Bc,Uc,Gc,Vc,Hc;const io={CLOSEST:1,ANY:2,ALL:4};Nc=le.types.SPHERE;Oc=le.types.PLANE;Bc=le.types.BOX;Uc=le.types.CYLINDER;Gc=le.types.CONVEXPOLYHEDRON;Vc=le.types.HEIGHTFIELD;Hc=le.types.TRIMESH;class ot{get[Nc](){return this._intersectSphere}get[Oc](){return this._intersectPlane}get[Bc](){return this._intersectBox}get[Uc](){return this._intersectConvex}get[Gc](){return this._intersectConvex}get[Vc](){return this._intersectHeightfield}get[Hc](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ot.ANY,this.result=new Is,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||ot.ANY,this.result=t.result||new Is,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ul),Aa.length=0,e.broadphase.aabbQuery(e,ul,Aa),this.intersectBodies(Aa),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const r=Kv,n=Qv;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],n),e.quaternion.vmult(e.shapeOffsets[o],r),r.vadd(e.position,r),this.intersectShape(l,n,r,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,r=e.length;!this.result.shouldStop&&i<r;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,r){const n=this.from;if(p_(n,this.direction,i)>e.boundingSphereRadius)return;const o=this[e.type];o&&o.call(this,e,t,i,r,e)}_intersectBox(e,t,i,r,n){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,r,n)}_intersectPlane(e,t,i,r,n){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);t.vmult(c,c);const u=new M;o.vsub(i,u);const d=u.dot(c);a.vsub(i,u);const h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new M,p=new M,m=new M;o.vsub(i,g);const v=-c.dot(g)/f;l.scale(v,p),o.vadd(p,m),this.reportIntersection(c,m,n,r,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,r=this.to,n=this.from;t.x=Math.min(r.x,n.x),t.y=Math.min(r.y,n.y),t.z=Math.min(r.z,n.z),i.x=Math.max(r.x,n.x),i.y=Math.max(r.y,n.y),i.z=Math.max(r.z,n.z)}_intersectHeightfield(e,t,i,r,n){e.data,e.elementSize;const o=e_;o.from.copy(this.from),o.to.copy(this.to),Ve.pointToLocalFrame(i,t,o.from,o.from),Ve.pointToLocalFrame(i,t,o.to,o.to),o.updateDirection();const a=t_;let l,c,u,d;l=c=0,u=d=e.data.length-1;const h=new Gt;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(f,g,!1),Ve.pointToWorldFrame(i,t,e.pillarOffset,ds),this._intersectConvex(e.pillarConvex,t,ds,r,n,hl),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),Ve.pointToWorldFrame(i,t,e.pillarOffset,ds),this._intersectConvex(e.pillarConvex,t,ds,r,n,hl)}}}_intersectSphere(e,t,i,r,n){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-i.x)+(a.y-o.y)*(o.y-i.y)+(a.z-o.z)*(o.z-i.z)),d=(o.x-i.x)**2+(o.y-i.y)**2+(o.z-i.z)**2-l**2,h=u**2-4*c*d,f=i_,g=r_;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,n,r,-1);else{const p=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,n,r,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,n,r,-1))}}_intersectConvex(e,t,i,r,n,o){const a=n_,l=dl,c=o&&o.faceList||null,u=e.faces,d=e.vertices,h=e.faceNormals,f=this.direction,g=this.from,p=this.to,m=g.distanceTo(p),v=c?c.length:u.length,x=this.result;for(let b=0;!x.shouldStop&&b<v;b++){const y=c?c[b]:b,S=u[y],T=h[y],D=t,w=i;l.copy(d[S[0]]),D.vmult(l,l),l.vadd(w,l),l.vsub(g,l),D.vmult(T,a);const C=f.dot(a);if(Math.abs(C)<this.precision)continue;const k=a.dot(l)/C;if(!(k<0)){f.scale(k,Dt),Dt.vadd(g,Dt),Qt.copy(d[S[0]]),D.vmult(Qt,Qt),w.vadd(Qt,Qt);for(let F=1;!x.shouldStop&&F<S.length-1;F++){oi.copy(d[S[F]]),li.copy(d[S[F+1]]),D.vmult(oi,oi),D.vmult(li,li),w.vadd(oi,oi),w.vadd(li,li);const O=Dt.distanceTo(g);!(ot.pointInTriangle(Dt,Qt,oi,li)||ot.pointInTriangle(Dt,oi,Qt,li))||O>m||this.reportIntersection(a,Dt,n,r,y)}}}}_intersectTrimesh(e,t,i,r,n,o){const a=s_,l=h_,c=d_,u=dl,d=a_,h=o_,f=l_,g=u_,p=c_,m=e.indices;e.vertices;const v=this.from,x=this.to,b=this.direction;c.position.copy(i),c.quaternion.copy(t),Ve.vectorToLocalFrame(i,t,b,d),Ve.pointToLocalFrame(i,t,v,h),Ve.pointToLocalFrame(i,t,x,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,d),d.normalize();const y=h.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let S=0,T=l.length;!this.result.shouldStop&&S!==T;S++){const D=l[S];e.getNormal(D,a),e.getVertex(m[D*3],Qt),Qt.vsub(h,u);const w=d.dot(a),C=a.dot(u)/w;if(C<0)continue;d.scale(C,Dt),Dt.vadd(h,Dt),e.getVertex(m[D*3+1],oi),e.getVertex(m[D*3+2],li);const k=Dt.distanceSquared(h);!(ot.pointInTriangle(Dt,oi,Qt,li)||ot.pointInTriangle(Dt,Qt,oi,li))||k>y||(Ve.vectorToWorldFrame(t,a,p),Ve.pointToWorldFrame(i,t,Dt,g),this.reportIntersection(p,g,n,r,D))}l.length=0}reportIntersection(e,t,i,r,n){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof n<"u"?n:-1,this.mode){case ot.ALL:this.hasHit=!0,c.set(o,a,e,t,i,r,l),c.hasHit=!0,this.callback(c);break;case ot.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,r,l));break;case ot.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,r,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,r){r.vsub(t,rr),i.vsub(t,ln),e.vsub(t,Ra);const n=rr.dot(rr),o=rr.dot(ln),a=rr.dot(Ra),l=ln.dot(ln),c=ln.dot(Ra);let u,d;return(u=l*a-o*c)>=0&&(d=n*c-o*a)>=0&&u+d<n*l-o*o}}ot.CLOSEST=io.CLOSEST;ot.ANY=io.ANY;ot.ALL=io.ALL;const ul=new Gt,Aa=[],ln=new M,Ra=new M,Kv=new M,Qv=new lt,Dt=new M,Qt=new M,oi=new M,li=new M;new M;new Is;const hl={faceList:[0]},ds=new M,e_=new ot,t_=[],i_=new M,r_=new M,n_=new M;new M;new M;const dl=new M,s_=new M,a_=new M,o_=new M,l_=new M,c_=new M,u_=new M;new Gt;const h_=[],d_=new Ve,rr=new M,ps=new M;function p_(s,e,t){t.vsub(s,rr);const i=rr.dot(e);return e.scale(i,ps),ps.vadd(s,ps),t.distanceTo(ps)}class m_{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class pl{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class kn{constructor(e,t,i,r){i===void 0&&(i=-1e6),r===void 0&&(r=1e6),this.id=kn.idCounter++,this.minForce=i,this.maxForce=r,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new pl,this.jacobianElementB=new pl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){const r=t,n=e,o=i;this.a=4/(o*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(o*o*n*(1+4*r))}computeB(e,t,i){const r=this.computeGW(),n=this.computeGq(),o=this.computeGiMf();return-n*e-r*t-o*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,n=i.position,o=r.position;return e.spatial.dot(n)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,n=i.velocity,o=r.velocity,a=i.angularVelocity,l=r.angularVelocity;return e.multiplyVectors(n,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,n=i.vlambda,o=r.vlambda,a=i.wlambda,l=r.wlambda;return e.multiplyVectors(n,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,n=i.force,o=i.torque,a=r.force,l=r.torque,c=i.invMassSolve,u=r.invMassSolve;return n.scale(c,ml),a.scale(u,fl),i.invInertiaWorldSolve.vmult(o,gl),r.invInertiaWorldSolve.vmult(l,vl),e.multiplyVectors(ml,gl)+t.multiplyVectors(fl,vl)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,n=i.invMassSolve,o=r.invMassSolve,a=i.invInertiaWorldSolve,l=r.invInertiaWorldSolve;let c=n+o;return a.vmult(e.rotational,ms),c+=ms.dot(e.rotational),l.vmult(t.rotational,ms),c+=ms.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,o=f_;r.vlambda.addScaledVector(r.invMassSolve*e,t.spatial,r.vlambda),n.vlambda.addScaledVector(n.invMassSolve*e,i.spatial,n.vlambda),r.invInertiaWorldSolve.vmult(t.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda),n.invInertiaWorldSolve.vmult(i.rotational,o),n.wlambda.addScaledVector(e,o,n.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}kn.idCounter=0;const ml=new M,fl=new M,gl=new M,vl=new M,ms=new M,f_=new M;class g_ extends kn{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,i=this.b,r=this.bi,n=this.bj,o=this.ri,a=this.rj,l=v_,c=__,u=r.velocity,d=r.angularVelocity;r.force,r.torque;const h=n.velocity,f=n.angularVelocity;n.force,n.torque;const g=x_,p=this.jacobianElementA,m=this.jacobianElementB,v=this.ni;o.cross(v,l),a.cross(v,c),v.negate(p.spatial),l.negate(p.rotational),m.spatial.copy(v),m.rotational.copy(c),g.copy(n.position),g.vadd(a,g),g.vsub(r.position,g),g.vsub(o,g);const x=v.dot(g),b=this.restitution+1,y=b*h.dot(v)-b*u.dot(v)+f.dot(c)-d.dot(l),S=this.computeGiMf();return-x*t-y*i-e*S}getImpactVelocityAlongNormal(){const e=y_,t=b_,i=w_,r=M_,n=S_;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(r,t),e.vsub(t,n),this.ni.dot(n)}}const v_=new M,__=new M,x_=new M,y_=new M,b_=new M,w_=new M,M_=new M,S_=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class _l extends kn{constructor(e,t,i){super(e,t,-i,i),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,r=this.rj,n=E_,o=T_,a=this.t;i.cross(a,n),r.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),n.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*t-e*d}}const E_=new M,T_=new M;class cr{constructor(e,t,i){i=m_.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=cr.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}cr.idCounter=0;class ur{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=ur.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}ur.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new ot;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class C_ extends lr{constructor(e,t,i,r){if(e===void 0&&(e=1),t===void 0&&(t=1),i===void 0&&(i=1),r===void 0&&(r=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const n=r,o=[],a=[],l=[],c=[],u=[],d=Math.cos,h=Math.sin;o.push(new M(-t*h(0),-i*.5,t*d(0))),c.push(0),o.push(new M(-e*h(0),i*.5,e*d(0))),u.push(1);for(let g=0;g<n;g++){const p=2*Math.PI/n*(g+1),m=2*Math.PI/n*(g+.5);g<n-1?(o.push(new M(-t*h(p),-i*.5,t*d(p))),c.push(2*g+2),o.push(new M(-e*h(p),i*.5,e*d(p))),u.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(n%2===1||g<n/2)&&a.push(new M(-h(m),0,d(m)))}l.push(c),a.push(new M(0,1,0));const f=[];for(let g=0;g<u.length;g++)f.push(u[u.length-g-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=le.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=i,this.numSegments=r}}class cn extends le{constructor(){super({type:le.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new M),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,i,r){Si.set(0,0,1),t.vmult(Si,Si);const n=Number.MAX_VALUE;i.set(-n,-n,-n),r.set(n,n,n),Si.x===1?r.x=e.x:Si.x===-1&&(i.x=e.x),Si.y===1?r.y=e.y:Si.y===-1&&(i.y=e.y),Si.z===1?r.z=e.z:Si.z===-1&&(i.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Si=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Gt;new M;new Gt;new M;new M;new M;new M;new M;new M;new M;new Gt;new M;new Ve;new Gt;class A_{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class R_ extends A_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const r=this.iterations,n=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,u=e;let d,h,f,g,p,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const v=L_,x=P_,b=D_;v.length=a,x.length=a,b.length=a;for(let y=0;y!==a;y++){const S=o[y];b[y]=0,x[y]=S.computeB(u),v[y]=1/S.computeC()}if(a!==0){for(let T=0;T!==c;T++){const D=l[T],w=D.vlambda,C=D.wlambda;w.set(0,0,0),C.set(0,0,0)}for(i=0;i!==r;i++){g=0;for(let T=0;T!==a;T++){const D=o[T];d=x[T],h=v[T],m=b[T],p=D.computeGWlambda(),f=h*(d-p-D.eps*m),m+f<D.minForce?f=D.minForce-m:m+f>D.maxForce&&(f=D.maxForce-m),b[T]+=f,g+=f>0?f:-f,D.addToWlambda(f)}if(g*g<n)break}for(let T=0;T!==c;T++){const D=l[T],w=D.velocity,C=D.angularVelocity;D.vlambda.vmul(D.linearFactor,D.vlambda),w.vadd(D.vlambda,w),D.wlambda.vmul(D.angularFactor,D.wlambda),C.vadd(D.wlambda,C)}let y=o.length;const S=1/u;for(;y--;)o[y].multiplier=b[y]*S}return i}}const D_=[],L_=[],P_=[];ne.STATIC;class k_{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class I_ extends k_{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const Ye={sphereSphere:le.types.SPHERE,spherePlane:le.types.SPHERE|le.types.PLANE,boxBox:le.types.BOX|le.types.BOX,sphereBox:le.types.SPHERE|le.types.BOX,planeBox:le.types.PLANE|le.types.BOX,convexConvex:le.types.CONVEXPOLYHEDRON,sphereConvex:le.types.SPHERE|le.types.CONVEXPOLYHEDRON,planeConvex:le.types.PLANE|le.types.CONVEXPOLYHEDRON,boxConvex:le.types.BOX|le.types.CONVEXPOLYHEDRON,sphereHeightfield:le.types.SPHERE|le.types.HEIGHTFIELD,boxHeightfield:le.types.BOX|le.types.HEIGHTFIELD,convexHeightfield:le.types.CONVEXPOLYHEDRON|le.types.HEIGHTFIELD,sphereParticle:le.types.PARTICLE|le.types.SPHERE,planeParticle:le.types.PLANE|le.types.PARTICLE,boxParticle:le.types.BOX|le.types.PARTICLE,convexParticle:le.types.PARTICLE|le.types.CONVEXPOLYHEDRON,cylinderCylinder:le.types.CYLINDER,sphereCylinder:le.types.SPHERE|le.types.CYLINDER,planeCylinder:le.types.PLANE|le.types.CYLINDER,boxCylinder:le.types.BOX|le.types.CYLINDER,convexCylinder:le.types.CONVEXPOLYHEDRON|le.types.CYLINDER,heightfieldCylinder:le.types.HEIGHTFIELD|le.types.CYLINDER,particleCylinder:le.types.PARTICLE|le.types.CYLINDER,sphereTrimesh:le.types.SPHERE|le.types.TRIMESH,planeTrimesh:le.types.PLANE|le.types.TRIMESH};class F_{get[Ye.sphereSphere](){return this.sphereSphere}get[Ye.spherePlane](){return this.spherePlane}get[Ye.boxBox](){return this.boxBox}get[Ye.sphereBox](){return this.sphereBox}get[Ye.planeBox](){return this.planeBox}get[Ye.convexConvex](){return this.convexConvex}get[Ye.sphereConvex](){return this.sphereConvex}get[Ye.planeConvex](){return this.planeConvex}get[Ye.boxConvex](){return this.boxConvex}get[Ye.sphereHeightfield](){return this.sphereHeightfield}get[Ye.boxHeightfield](){return this.boxHeightfield}get[Ye.convexHeightfield](){return this.convexHeightfield}get[Ye.sphereParticle](){return this.sphereParticle}get[Ye.planeParticle](){return this.planeParticle}get[Ye.boxParticle](){return this.boxParticle}get[Ye.convexParticle](){return this.convexParticle}get[Ye.cylinderCylinder](){return this.convexConvex}get[Ye.sphereCylinder](){return this.sphereConvex}get[Ye.planeCylinder](){return this.planeConvex}get[Ye.boxCylinder](){return this.boxConvex}get[Ye.convexCylinder](){return this.convexConvex}get[Ye.heightfieldCylinder](){return this.heightfieldCylinder}get[Ye.particleCylinder](){return this.particleCylinder}get[Ye.sphereTrimesh](){return this.sphereTrimesh}get[Ye.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new I_,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,r,n,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new g_(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&r.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,u=r.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=n||i,a.sj=o||r,a}createFrictionEquationsFromContact(e,t){const i=e.bi,r=e.bj,n=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=n.material||i.material,d=o.material||r.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=i.invMass+r.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,p=g.length?g.pop():new _l(i,r,h*f),m=g.length?g.pop():new _l(i,r,h*f);return p.bi=m.bi=i,p.bj=m.bj=r,p.minForce=m.minForce=-h*f,p.maxForce=m.maxForce=h*f,p.ri.copy(e.ri),p.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(p.t,m.t),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.enabled=m.enabled=e.enabled,t.push(p,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Qi.setZero(),Fr.setZero(),zr.setZero();const n=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==n?(Qi.vadd(t.ni,Qi),Fr.vadd(t.ri,Fr),zr.vadd(t.rj,zr)):(Qi.vsub(t.ni,Qi),Fr.vadd(t.rj,Fr),zr.vadd(t.ri,zr));const o=1/e;Fr.scale(o,i.ri),zr.scale(o,i.rj),r.ri.copy(i.ri),r.rj.copy(i.rj),Qi.normalize(),Qi.tangents(i.t,r.t)}getContacts(e,t,i,r,n,o,a){this.contactPointPool=n,this.frictionEquationPool=a,this.result=r,this.frictionResult=o;const l=O_,c=B_,u=z_,d=N_;for(let h=0,f=e.length;h!==f;h++){const g=e[h],p=t[h];let m=null;g.material&&p.material&&(m=i.getContactMaterial(g.material,p.material)||null);const v=g.type&ne.KINEMATIC&&p.type&ne.STATIC||g.type&ne.STATIC&&p.type&ne.KINEMATIC||g.type&ne.KINEMATIC&&p.type&ne.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],u),u.vadd(g.position,u);const b=g.shapes[x];for(let y=0;y<p.shapes.length;y++){p.quaternion.mult(p.shapeOrientations[y],c),p.quaternion.vmult(p.shapeOffsets[y],d),d.vadd(p.position,d);const S=p.shapes[y];if(!(b.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&b.collisionFilterGroup)||u.distanceTo(d)>b.boundingSphereRadius+S.boundingSphereRadius)continue;let T=null;b.material&&S.material&&(T=i.getContactMaterial(b.material,S.material)||null),this.currentContactMaterial=T||m||i.defaultContactMaterial;const D=b.type|S.type,w=this[D];if(w){let C=!1;b.type<S.type?C=w.call(this,b,S,u,d,l,c,g,p,b,S,v):C=w.call(this,S,b,d,u,c,l,p,g,b,S,v),C&&v&&(i.shapeOverlapKeeper.set(b.id,S.id),i.bodyOverlapKeeper.set(g.id,p.id))}}}}}sphereSphere(e,t,i,r,n,o,a,l,c,u,d){if(d)return i.distanceSquared(r)<(e.radius+t.radius)**2;const h=this.createContactEquation(a,l,e,t,c,u);r.vsub(i,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(i,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(r,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,i,r,n,o,a,l,c,u,d){const h=this.createContactEquation(a,l,e,t,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),i.vsub(r,fs),h.ni.scale(h.ni.dot(fs),xl),fs.vsub(xl,h.rj),-fs.dot(h.ni)<=e.radius){if(d)return!0;const f=h.ri,g=h.rj;f.vadd(i,f),f.vsub(a.position,f),g.vadd(r,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,i,r,n,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,r,n,o,a,l,e,t,d)}sphereBox(e,t,i,r,n,o,a,l,c,u,d){const h=this.v3pool,f=hx;i.vsub(r,gs),t.getSideNormals(f,o);const g=e.radius;let p=!1;const m=px,v=mx,x=fx;let b=null,y=0,S=0,T=0,D=null;for(let I=0,W=f.length;I!==W&&p===!1;I++){const j=lx;j.copy(f[I]);const B=j.length();j.normalize();const q=gs.dot(j);if(q<B+g&&q>0){const ee=cx,H=ux;ee.copy(f[(I+1)%3]),H.copy(f[(I+2)%3]);const Q=ee.length(),he=H.length();ee.normalize(),H.normalize();const ke=gs.dot(ee),J=gs.dot(H);if(ke<Q&&ke>-Q&&J<he&&J>-he){const Ge=Math.abs(q-B-g);if((D===null||Ge<D)&&(D=Ge,S=ke,T=J,b=B,m.copy(j),v.copy(ee),x.copy(H),y++,d))return!0}}}if(y){p=!0;const I=this.createContactEquation(a,l,e,t,c,u);m.scale(-g,I.ri),I.ni.copy(m),I.ni.negate(I.ni),m.scale(b,m),v.scale(S,v),m.vadd(v,m),x.scale(T,x),m.vadd(x,I.rj),I.ri.vadd(i,I.ri),I.ri.vsub(a.position,I.ri),I.rj.vadd(r,I.rj),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let w=h.get();const C=dx;for(let I=0;I!==2&&!p;I++)for(let W=0;W!==2&&!p;W++)for(let j=0;j!==2&&!p;j++)if(w.set(0,0,0),I?w.vadd(f[0],w):w.vsub(f[0],w),W?w.vadd(f[1],w):w.vsub(f[1],w),j?w.vadd(f[2],w):w.vsub(f[2],w),r.vadd(w,C),C.vsub(i,C),C.lengthSquared()<g*g){if(d)return!0;p=!0;const B=this.createContactEquation(a,l,e,t,c,u);B.ri.copy(C),B.ri.normalize(),B.ni.copy(B.ri),B.ri.scale(g,B.ri),B.rj.copy(w),B.ri.vadd(i,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(r,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}h.release(w),w=null;const k=h.get(),F=h.get(),O=h.get(),z=h.get(),A=h.get(),P=f.length;for(let I=0;I!==P&&!p;I++)for(let W=0;W!==P&&!p;W++)if(I%3!==W%3){f[W].cross(f[I],k),k.normalize(),f[I].vadd(f[W],F),O.copy(i),O.vsub(F,O),O.vsub(r,O);const j=O.dot(k);k.scale(j,z);let B=0;for(;B===I%3||B===W%3;)B++;A.copy(i),A.vsub(z,A),A.vsub(F,A),A.vsub(r,A);const q=Math.abs(j),ee=A.length();if(q<f[B].length()&&ee<g){if(d)return!0;p=!0;const H=this.createContactEquation(a,l,e,t,c,u);F.vadd(z,H.rj),H.rj.copy(H.rj),A.negate(H.ni),H.ni.normalize(),H.ri.copy(H.rj),H.ri.vadd(r,H.ri),H.ri.vsub(i,H.ri),H.ri.normalize(),H.ri.scale(g,H.ri),H.ri.vadd(i,H.ri),H.ri.vsub(a.position,H.ri),H.rj.vadd(r,H.rj),H.rj.vsub(l.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}h.release(k,F,O,z,A)}planeBox(e,t,i,r,n,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,r,n,o,a,l,e,t,d)}convexConvex(e,t,i,r,n,o,a,l,c,u,d,h,f){const g=Dx;if(!(i.distanceTo(r)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,n,r,o,g,h,f)){const p=[],m=Lx;e.clipAgainstHull(i,n,t,r,o,g,-100,100,p);let v=0;for(let x=0;x!==p.length;x++){if(d)return!0;const b=this.createContactEquation(a,l,e,t,c,u),y=b.ri,S=b.rj;g.negate(b.ni),p[x].normal.negate(m),m.scale(p[x].depth,m),p[x].point.vadd(m,y),S.copy(p[x].point),y.vsub(i,y),S.vsub(r,S),y.vadd(i,y),y.vsub(a.position,y),S.vadd(r,S),S.vsub(l.position,S),this.result.push(b),v++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}this.enableFrictionReduction&&v&&this.createFrictionFromAverage(v)}}sphereConvex(e,t,i,r,n,o,a,l,c,u,d){const h=this.v3pool;i.vsub(r,gx);const f=t.faceNormals,g=t.faces,p=t.vertices,m=e.radius;let v=!1;for(let x=0;x!==p.length;x++){const b=p[x],y=yx;o.vmult(b,y),r.vadd(y,y);const S=xx;if(y.vsub(i,S),S.lengthSquared()<m*m){if(d)return!0;v=!0;const T=this.createContactEquation(a,l,e,t,c,u);T.ri.copy(S),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),y.vsub(r,T.rj),T.ri.vadd(i,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(r,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let x=0,b=g.length;x!==b&&v===!1;x++){const y=f[x],S=g[x],T=bx;o.vmult(y,T);const D=wx;o.vmult(p[S[0]],D),D.vadd(r,D);const w=Mx;T.scale(-m,w),i.vadd(w,w);const C=Sx;w.vsub(D,C);const k=C.dot(T),F=Ex;if(i.vsub(D,F),k<0&&F.dot(T)>0){const O=[];for(let z=0,A=S.length;z!==A;z++){const P=h.get();o.vmult(p[S[z]],P),r.vadd(P,P),O.push(P)}if(ox(O,T,i)){if(d)return!0;v=!0;const z=this.createContactEquation(a,l,e,t,c,u);T.scale(-m,z.ri),T.negate(z.ni);const A=h.get();T.scale(-k,A);const P=h.get();T.scale(-m,P),i.vsub(r,z.rj),z.rj.vadd(P,z.rj),z.rj.vadd(A,z.rj),z.rj.vadd(r,z.rj),z.rj.vsub(l.position,z.rj),z.ri.vadd(i,z.ri),z.ri.vsub(a.position,z.ri),h.release(A),h.release(P),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(let I=0,W=O.length;I!==W;I++)h.release(O[I]);return}else for(let z=0;z!==S.length;z++){const A=h.get(),P=h.get();o.vmult(p[S[(z+1)%S.length]],A),o.vmult(p[S[(z+2)%S.length]],P),r.vadd(A,A),r.vadd(P,P);const I=vx;P.vsub(A,I);const W=_x;I.unit(W);const j=h.get(),B=h.get();i.vsub(A,B);const q=B.dot(W);W.scale(q,j),j.vadd(A,j);const ee=h.get();if(j.vsub(i,ee),q>0&&q*q<I.lengthSquared()&&ee.lengthSquared()<m*m){if(d)return!0;const H=this.createContactEquation(a,l,e,t,c,u);j.vsub(r,H.rj),j.vsub(i,H.ni),H.ni.normalize(),H.ni.scale(m,H.ri),H.rj.vadd(r,H.rj),H.rj.vsub(l.position,H.rj),H.ri.vadd(i,H.ri),H.ri.vsub(a.position,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);for(let Q=0,he=O.length;Q!==he;Q++)h.release(O[Q]);h.release(A),h.release(P),h.release(j),h.release(ee),h.release(B);return}h.release(A),h.release(P),h.release(j),h.release(ee),h.release(B)}for(let z=0,A=O.length;z!==A;z++)h.release(O[z])}}}planeConvex(e,t,i,r,n,o,a,l,c,u,d){const h=Tx,f=Cx;f.set(0,0,1),n.vmult(f,f);let g=0;const p=Ax;for(let m=0;m!==t.vertices.length;m++)if(h.copy(t.vertices[m]),o.vmult(h,h),r.vadd(h,h),h.vsub(i,p),f.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,u),x=Rx;f.scale(f.dot(p),x),h.vsub(x,x),x.vsub(i,v.ri),v.ni.copy(f),h.vsub(r,v.rj),v.ri.vadd(i,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(r,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,i,r,n,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,r,n,o,a,l,e,t,d)}sphereHeightfield(e,t,i,r,n,o,a,l,c,u,d){const h=t.data,f=e.radius,g=t.elementSize,p=Hx,m=Vx;Ve.pointToLocalFrame(r,o,i,m);let v=Math.floor((m.x-f)/g)-1,x=Math.ceil((m.x+f)/g)+1,b=Math.floor((m.y-f)/g)-1,y=Math.ceil((m.y+f)/g)+1;if(x<0||y<0||v>h.length||b>h[0].length)return;v<0&&(v=0),x<0&&(x=0),b<0&&(b=0),y<0&&(y=0),v>=h.length&&(v=h.length-1),x>=h.length&&(x=h.length-1),y>=h[0].length&&(y=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);const S=[];t.getRectMinMax(v,b,x,y,S);const T=S[0],D=S[1];if(m.z-f>D||m.z+f<T)return;const w=this.result;for(let C=v;C<x;C++)for(let k=b;k<y;k++){const F=w.length;let O=!1;if(t.getConvexTrianglePillar(C,k,!1),Ve.pointToWorldFrame(r,o,t.pillarOffset,p),i.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,i,p,n,o,a,l,e,t,d)),d&&O||(t.getConvexTrianglePillar(C,k,!0),Ve.pointToWorldFrame(r,o,t.pillarOffset,p),i.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,i,p,n,o,a,l,e,t,d)),d&&O))return!0;if(w.length-F>2)return}}boxHeightfield(e,t,i,r,n,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,r,n,o,a,l,e,t,d)}convexHeightfield(e,t,i,r,n,o,a,l,c,u,d){const h=t.data,f=t.elementSize,g=e.boundingSphereRadius,p=Ux,m=Gx,v=Bx;Ve.pointToLocalFrame(r,o,i,v);let x=Math.floor((v.x-g)/f)-1,b=Math.ceil((v.x+g)/f)+1,y=Math.floor((v.y-g)/f)-1,S=Math.ceil((v.y+g)/f)+1;if(b<0||S<0||x>h.length||y>h[0].length)return;x<0&&(x=0),b<0&&(b=0),y<0&&(y=0),S<0&&(S=0),x>=h.length&&(x=h.length-1),b>=h.length&&(b=h.length-1),S>=h[0].length&&(S=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const T=[];t.getRectMinMax(x,y,b,S,T);const D=T[0],w=T[1];if(!(v.z-g>w||v.z+g<D))for(let C=x;C<b;C++)for(let k=y;k<S;k++){let F=!1;if(t.getConvexTrianglePillar(C,k,!1),Ve.pointToWorldFrame(r,o,t.pillarOffset,p),i.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,i,p,n,o,a,l,null,null,d,m,null)),d&&F||(t.getConvexTrianglePillar(C,k,!0),Ve.pointToWorldFrame(r,o,t.pillarOffset,p),i.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,i,p,n,o,a,l,null,null,d,m,null)),d&&F))return!0}}sphereParticle(e,t,i,r,n,o,a,l,c,u,d){const h=Fx;if(h.set(0,0,1),r.vsub(i,h),h.lengthSquared()<=e.radius*e.radius){if(d)return!0;const f=this.createContactEquation(l,a,t,e,c,u);h.normalize(),f.rj.copy(h),f.rj.scale(e.radius,f.rj),f.ni.copy(h),f.ni.negate(f.ni),f.ri.set(0,0,0),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}planeParticle(e,t,i,r,n,o,a,l,c,u,d){const h=Px;h.set(0,0,1),a.quaternion.vmult(h,h);const f=kx;if(r.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const g=this.createContactEquation(l,a,t,e,c,u);g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0);const p=Ix;h.scale(h.dot(r),p),r.vsub(p,p),g.rj.copy(p),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,i,r,n,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,r,n,o,a,l,e,t,d)}convexParticle(e,t,i,r,n,o,a,l,c,u,d){let h=-1;const f=Nx,g=Ox;let p=null;const m=zx;if(m.copy(r),m.vsub(i,m),n.conjugate(yl),yl.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,n),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(n);for(let v=0,x=e.faces.length;v!==x;v++){const b=[e.worldVertices[e.faces[v][0]]],y=e.worldFaceNormals[v];r.vsub(b[0],bl);const S=-y.dot(bl);if(p===null||Math.abs(S)<Math.abs(p)){if(d)return!0;p=S,h=v,f.copy(y)}}if(h!==-1){const v=this.createContactEquation(l,a,t,e,c,u);f.scale(p,g),g.vadd(r,g),g.vsub(i,g),v.rj.copy(g),f.negate(v.ni),v.ri.set(0,0,0);const x=v.ri,b=v.rj;x.vadd(r,x),x.vsub(l.position,x),b.vadd(i,b),b.vsub(a.position,b),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,r,n,o,a,l,c,u,d){return this.convexHeightfield(t,e,r,i,o,n,l,a,c,u,d)}particleCylinder(e,t,i,r,n,o,a,l,c,u,d){return this.convexParticle(t,e,r,i,o,n,l,a,c,u,d)}sphereTrimesh(e,t,i,r,n,o,a,l,c,u,d){const h=$_,f=X_,g=Y_,p=Z_,m=J_,v=K_,x=ix,b=j_,y=W_,S=rx;Ve.pointToLocalFrame(r,o,i,m);const T=e.radius;x.lowerBound.set(m.x-T,m.y-T,m.z-T),x.upperBound.set(m.x+T,m.y+T,m.z+T),t.getTrianglesInAABB(x,S);const D=q_,w=e.radius*e.radius;for(let z=0;z<S.length;z++)for(let A=0;A<3;A++)if(t.getVertex(t.indices[S[z]*3+A],D),D.vsub(m,y),y.lengthSquared()<=w){if(b.copy(D),Ve.pointToWorldFrame(r,o,b,D),D.vsub(i,y),d)return!0;let P=this.createContactEquation(a,l,e,t,c,u);P.ni.copy(y),P.ni.normalize(),P.ri.copy(P.ni),P.ri.scale(e.radius,P.ri),P.ri.vadd(i,P.ri),P.ri.vsub(a.position,P.ri),P.rj.copy(D),P.rj.vsub(l.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}for(let z=0;z<S.length;z++)for(let A=0;A<3;A++){t.getVertex(t.indices[S[z]*3+A],h),t.getVertex(t.indices[S[z]*3+(A+1)%3],f),f.vsub(h,g),m.vsub(f,v);const P=v.dot(g);m.vsub(h,v);let I=v.dot(g);if(I>0&&P<0&&(m.vsub(h,v),p.copy(g),p.normalize(),I=v.dot(p),p.scale(I,v),v.vadd(h,v),v.distanceTo(m)<e.radius)){if(d)return!0;const W=this.createContactEquation(a,l,e,t,c,u);v.vsub(m,W.ni),W.ni.normalize(),W.ni.scale(e.radius,W.ri),W.ri.vadd(i,W.ri),W.ri.vsub(a.position,W.ri),Ve.pointToWorldFrame(r,o,v,v),v.vsub(l.position,W.rj),Ve.vectorToWorldFrame(o,W.ni,W.ni),Ve.vectorToWorldFrame(o,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}const C=Q_,k=ex,F=tx,O=H_;for(let z=0,A=S.length;z!==A;z++){t.getTriangleVertices(S[z],C,k,F),t.getNormal(S[z],O),m.vsub(C,v);let P=v.dot(O);if(O.scale(P,v),m.vsub(v,v),P=v.distanceTo(m),ot.pointInTriangle(v,C,k,F)&&P<e.radius){if(d)return!0;let I=this.createContactEquation(a,l,e,t,c,u);v.vsub(m,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(i,I.ri),I.ri.vsub(a.position,I.ri),Ve.pointToWorldFrame(r,o,v,v),v.vsub(l.position,I.rj),Ve.vectorToWorldFrame(o,I.ni,I.ni),Ve.vectorToWorldFrame(o,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}S.length=0}planeTrimesh(e,t,i,r,n,o,a,l,c,u,d){const h=new M,f=U_;f.set(0,0,1),n.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,h);const p=new M;p.copy(h),Ve.pointToWorldFrame(r,o,p,h);const m=G_;if(h.vsub(i,m),f.dot(m)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,u);v.ni.copy(f);const x=V_;f.scale(m.dot(f),x),h.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Qi=new M,Fr=new M,zr=new M,z_=new M,N_=new M,O_=new lt,B_=new lt,U_=new M,G_=new M,V_=new M,H_=new M,W_=new M;new M;const q_=new M,j_=new M,$_=new M,X_=new M,Y_=new M,Z_=new M,J_=new M,K_=new M,Q_=new M,ex=new M,tx=new M,ix=new Gt,rx=[],fs=new M,xl=new M,nx=new M,sx=new M,ax=new M;function ox(s,e,t){let i=null;const r=s.length;for(let n=0;n!==r;n++){const o=s[n],a=nx;s[(n+1)%r].vsub(o,a);const l=sx;a.cross(e,l);const c=ax;t.vsub(o,c);const u=l.dot(c);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}const gs=new M,lx=new M,cx=new M,ux=new M,hx=[new M,new M,new M,new M,new M,new M],dx=new M,px=new M,mx=new M,fx=new M,gx=new M,vx=new M,_x=new M,xx=new M,yx=new M,bx=new M,wx=new M,Mx=new M,Sx=new M,Ex=new M;new M;new M;const Tx=new M,Cx=new M,Ax=new M,Rx=new M,Dx=new M,Lx=new M,Px=new M,kx=new M,Ix=new M,Fx=new M,yl=new lt,zx=new M;new M;const Nx=new M,bl=new M,Ox=new M,Bx=new M,Ux=new M,Gx=[0],Vx=new M,Hx=new M;class wl{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),r=this.current;let n=0;for(;i>r[n];)n++;if(i!==r[n]){for(let o=r.length-1;o>=n;o--)r[o+1]=r[o];r[n]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,r=this.previous,n=i.length,o=r.length;let a=0;for(let l=0;l<n;l++){let c=!1;const u=i[l];for(;u>r[a];)a++;c=u===r[a],c||Ml(e,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=r[l];for(;u>i[a];)a++;c=i[a]===u,c||Ml(t,u)}}}function Ml(s,e){s.push((e&4294901760)>>16,e&65535)}const Da=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class Wx{constructor(){this.data={keys:[]}}get(e,t){const i=Da(e,t);return this.data[i]}set(e,t,i){const r=Da(e,t);this.get(e,t)||this.data.keys.push(r),this.data[r]=i}delete(e,t){const i=Da(e,t),r=this.data.keys.indexOf(i);r!==-1&&this.data.keys.splice(r,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class qx extends Fc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new zc,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new R_,this.constraints=[],this.narrowphase=new F_(this),this.collisionMatrix=new ll,this.collisionMatrixPrevious=new ll,this.bodyOverlapKeeper=new wl,this.shapeOverlapKeeper=new wl,this.contactmaterials=[],this.contactMaterialTable=new Wx,this.defaultMaterial=new ur("default"),this.defaultContactMaterial=new cr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof Is?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,r){return i===void 0&&(i={}),i.mode=ot.ALL,i.from=e,i.to=t,i.callback=r,La.intersectWorld(this,i)}raycastAny(e,t,i,r){return i===void 0&&(i={}),i.mode=ot.ANY,i.from=e,i.to=t,i.result=r,La.intersectWorld(this,i)}raycastClosest(e,t,i,r){return i===void 0&&(i={}),i.mode=ot.CLOSEST,i.from=e,i.to=t,i.result=r,La.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ne&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,r=i.indexOf(e);if(r!==-1){i.splice(r,1);for(let n=0;n!==i.length;n++)i[n].index=n;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const r=t[i].shapes;for(let n=0;n<r.length;n++){const o=r[n];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const i=ut.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const r=i-this.lastCallTime;this.step(e,r,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const r=ut.now();let n=0;for(;this.accumulator>=e&&n<i&&(this.internalStep(e),this.accumulator-=e,n++,!(ut.now()-r>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=Zx,r=Jx,n=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=ne.DYNAMIC;let h=-1/0;const f=this.constraints,g=Yx;l.length();const p=l.x,m=l.y,v=l.z;let x=0;for(c&&(h=ut.now()),x=0;x!==n;x++){const O=o[x];if(O.type===d){const z=O.force,A=O.mass;z.x+=A*p,z.y+=A*m,z.z+=A*v}}for(let O=0,z=this.subsystems.length;O!==z;O++)this.subsystems[O].update();c&&(h=ut.now()),i.length=0,r.length=0,this.broadphase.collisionPairs(this,i,r),c&&(u.broadphase=ut.now()-h);let b=f.length;for(x=0;x!==b;x++){const O=f[x];if(!O.collideConnected)for(let z=i.length-1;z>=0;z-=1)(O.bodyA===i[z]&&O.bodyB===r[z]||O.bodyB===i[z]&&O.bodyA===r[z])&&(i.splice(z,1),r.splice(z,1))}this.collisionMatrixTick(),c&&(h=ut.now());const y=Xx,S=t.length;for(x=0;x!==S;x++)y.push(t[x]);t.length=0;const T=this.frictionEquations.length;for(x=0;x!==T;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,r,this,t,y,this.frictionEquations,g),c&&(u.narrowphase=ut.now()-h),c&&(h=ut.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const D=t.length;for(let O=0;O!==D;O++){const z=t[O],A=z.bi,P=z.bj,I=z.si,W=z.sj;let j;if(A.material&&P.material?j=this.getContactMaterial(A.material,P.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,A.material&&P.material&&(A.material.friction>=0&&P.material.friction>=0&&A.material.friction*P.material.friction,A.material.restitution>=0&&P.material.restitution>=0&&(z.restitution=A.material.restitution*P.material.restitution)),a.addEquation(z),A.allowSleep&&A.type===ne.DYNAMIC&&A.sleepState===ne.SLEEPING&&P.sleepState===ne.AWAKE&&P.type!==ne.STATIC){const B=P.velocity.lengthSquared()+P.angularVelocity.lengthSquared(),q=P.sleepSpeedLimit**2;B>=q*2&&(A.wakeUpAfterNarrowphase=!0)}if(P.allowSleep&&P.type===ne.DYNAMIC&&P.sleepState===ne.SLEEPING&&A.sleepState===ne.AWAKE&&A.type!==ne.STATIC){const B=A.velocity.lengthSquared()+A.angularVelocity.lengthSquared(),q=A.sleepSpeedLimit**2;B>=q*2&&(P.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(A,P,!0),this.collisionMatrixPrevious.get(A,P)||(un.body=P,un.contact=z,A.dispatchEvent(un),un.body=A,P.dispatchEvent(un)),this.bodyOverlapKeeper.set(A.id,P.id),this.shapeOverlapKeeper.set(I.id,W.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=ut.now()-h,h=ut.now()),x=0;x!==n;x++){const O=o[x];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(b=f.length,x=0;x!==b;x++){const O=f[x];O.update();for(let z=0,A=O.equations.length;z!==A;z++){const P=O.equations[z];a.addEquation(P)}}a.solve(e,this),c&&(u.solve=ut.now()-h),a.removeAllEquations();const w=Math.pow;for(x=0;x!==n;x++){const O=o[x];if(O.type&d){const z=w(1-O.linearDamping,e),A=O.velocity;A.scale(z,A);const P=O.angularVelocity;if(P){const I=w(1-O.angularDamping,e);P.scale(I,P)}}}this.dispatchEvent($x),c&&(h=ut.now());const C=this.stepnumber%(this.quatNormalizeSkip+1)===0,k=this.quatNormalizeFast;for(x=0;x!==n;x++)o[x].integrate(e,C,k);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=ut.now()-h),this.stepnumber+=1,this.dispatchEvent(jx);let F=!0;if(this.allowSleep)for(F=!1,x=0;x!==n;x++){const O=o[x];O.sleepTick(this.time),O.sleepState!==ne.SLEEPING&&(F=!0)}this.hasActiveBodies=F}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Ei,Ti),e){for(let n=0,o=Ei.length;n<o;n+=2)hn.bodyA=this.getBodyById(Ei[n]),hn.bodyB=this.getBodyById(Ei[n+1]),this.dispatchEvent(hn);hn.bodyA=hn.bodyB=null}if(t){for(let n=0,o=Ti.length;n<o;n+=2)dn.bodyA=this.getBodyById(Ti[n]),dn.bodyB=this.getBodyById(Ti[n+1]),this.dispatchEvent(dn);dn.bodyA=dn.bodyB=null}Ei.length=Ti.length=0;const i=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((i||r)&&this.shapeOverlapKeeper.getDiff(Ei,Ti),i){for(let n=0,o=Ei.length;n<o;n+=2){const a=this.getShapeById(Ei[n]),l=this.getShapeById(Ei[n+1]);Ci.shapeA=a,Ci.shapeB=l,a&&(Ci.bodyA=a.body),l&&(Ci.bodyB=l.body),this.dispatchEvent(Ci)}Ci.bodyA=Ci.bodyB=Ci.shapeA=Ci.shapeB=null}if(r){for(let n=0,o=Ti.length;n<o;n+=2){const a=this.getShapeById(Ti[n]),l=this.getShapeById(Ti[n+1]);Ai.shapeA=a,Ai.shapeB=l,a&&(Ai.bodyA=a.body),l&&(Ai.bodyB=l.body),this.dispatchEvent(Ai)}Ai.bodyA=Ai.bodyB=Ai.shapeA=Ai.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const r=e[i];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new Gt;const La=new ot,ut=globalThis.performance||{};if(!ut.now){let s=Date.now();ut.timing&&ut.timing.navigationStart&&(s=ut.timing.navigationStart),ut.now=()=>Date.now()-s}new M;const jx={type:"postStep"},$x={type:"preStep"},un={type:ne.COLLIDE_EVENT_NAME,body:null,contact:null},Xx=[],Yx=[],Zx=[],Jx=[],Ei=[],Ti=[],hn={type:"beginContact",bodyA:null,bodyB:null},dn={type:"endContact",bodyA:null,bodyB:null},Ci={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ai={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Sl{constructor(e){typeof e=="object"&&(e=e.notation),this.set=[],this.setkeys=[],this.setid=0,this.groups=[],this.totalDice=0,this.op="",this.constant=null,this.result=[],this.error=!1,this.boost=1,this.notation="",this.vectors=[],(!e||e=="0")&&(this.error=!0),this.parseNotation(e)}parseNotation(e){if(e){let h=e.split("!").length-1||0;h>0&&(this.boost=Math.min(Math.max(h,0),3)*4),e=e.split("!").join(""),e=e.split(" ").join("");let f=e.split("(").length-1,g=e.split(")").length-1;f!=g&&(this.error=!0)}const t=this.notation.length>0?"+":"";this.notation+=t+e;let i=e.split("@"),r=i[0],n=new RegExp(/(\+|\-|\*|\/|\%|\^|){0,1}()(\d*)([a-z]+\d+|[a-z]+|)(?:\{([a-z]+)(.*?|)\}|)()/,"i"),o=new RegExp(/(\b)*(\-\d+|\d+)(\b)*/,"gi"),a,l=0,c=30,u=0,d=0;for(;!this.error&&r.length>0&&(a=n.exec(r))!==null&&l<c;){l++,r=r.substring(a[0].length);let h=a[1],f=a[2]&&a[2].length>0,g=a[3],p=a[4],m=a[5]||"",v=a[6]||"",x=a[7]&&a[7].length>0,b=!0;f&&(u+=a[2].length),v=v.split(","),(!v||v.length<1)&&(v=""),v.shift(),l==1&&r.length==0&&!p&&h&&g?(p="d20",this.op=h,this.constant=parseInt(g),g=1):l>1&&r.length==0&&!p&&(this.op=h,this.constant=parseInt(g),b=!1),b&&this.addSet(g,p,d,u,m,v,h),x&&(u-=a[7].length,d+=a[7].length)}!this.error&&i[1]&&(a=i[1].match(o))!==null&&this.result.push(...a)}stringify(e=!0){let t="";if(this.set.length<1)return t;for(let i=0;i<this.set.length;i++){let r=this.set[i];t+=i>0&&r.op?r.op:"",t+=r.num+r.type,r.func&&(t+="{",t+=r.func?r.func:"",t+=r.args?","+(Array.isArray(r.args)?r.args.join(","):r.args):"",t+="}")}return t+=this.constant?this.op+""+Math.abs(this.constant):"",e&&this.result&&this.result.length>0&&(t+="@"+this.result.join(",")),this.boost>1&&(t+="!".repeat(this.boost/4)),t}addSet(e,t,i=0,r=0,n="",o="",a="+"){e=Math.abs(parseInt(e||1));let l=a+""+t+i+r+n+o,c=this.setkeys[l]!=null,u={};c&&(u=this.set[this.setkeys[l]-1]),e>0&&(u.num=c?e+u.num:e,u.type=t,u.sid=this.setid,u.gid=i,u.glvl=r,n&&(u.func=n),o&&(u.args=o),a&&(u.op=a),c?this.set[this.setkeys[l]-1]=u:this.setkeys[l]=this.set.push(u)),c||++this.setid}static mergeNotation(e,t){return{...e,constant:e.constant+t.constant,notation:e.notation+"+"+t.notation,set:[...e.set,...t.set],totalDice:e.vectors.length+t.vectors.length,vectors:[...e.vectors,...t.vectors]}}}const Pa={d2:{name:"d2",labels:["1","2"],values:[1,2],inertia:8,mass:400,scale:.9,system:"dweird"},dc:{type:"d2",name:"Coin",labels:["textures/silvercoin/tail.png","textures/silvercoin/heads.png"],setBumpMaps:["textures/silvercoin/tail_bump.png","textures/silvercoin/heads_bump.png"],values:[0,1],inertia:8,mass:400,scale:.9,colorset:"coin_silver"},d1:{name:"One-sided Dice",type:"d6",labels:["1"],values:[1,1],scale:.9,system:"dweird"},d3:{name:"Three-Sided Dice",type:"d6",labels:["1","2","3"],values:[1,3],scale:.9,system:"dweird"},df:{name:"Fudge Dice",type:"d6",labels:["-","0","+"],values:[-1,1],scale:.9,system:"dweird"},d4:{name:"Four-Sided Dice",labels:["1","2","3","4"],values:[1,4],inertia:5,scale:1.2},d6:{name:"Six-Sided Dice (Numbers)",labels:["1","2","3","4","5","6"],values:[1,6],scale:.9},dpip:{name:"Six-Sided Dice (Pips)",type:"d6",labels:[`   
 ⬤ 
   `,`⬤  
   
  ⬤`,`⬤  
 ⬤ 
  ⬤`,`⬤ ⬤
   
⬤ ⬤`,`⬤ ⬤
 ⬤ 
⬤ ⬤`,`⬤ ⬤
⬤ ⬤
⬤ ⬤`],values:[1,6],scale:.9,font:"monospace"},dsex:{name:"Sex-Sided Emoji Dice",type:"d6",labels:["🍆","🍑","👌","💦","🙏","💥"],values:[1,6],scale:.9,display:"labels",system:"dweird"},dpoker:{name:"Poker Dice (9-Ace)",type:"d6",labels:["A","9","10","J","Q","K"],values:[1,6],scale:.9,display:"labels",system:"dweird",font:"Times New Roman"},dspanpoker:{name:"Spanish Poker Dice (7-Ace)",type:"d8",labels:["A","7","8","9","10","J","Q","K"],values:[1,8],display:"labels",system:"dweird",font:"Times New Roman"},disotope:{name:"Radioactive Twelve-Sided Dice",type:"d12",labels:["","","","","","","","","","","","☢️"],values:[0,0,0,0,0,0,0,0,0,0,0,1],mass:350,inertia:8,scale:.9,system:"dweird"},dsuit:{name:"Four-Suited Dice",type:"d4",labels:["♠️","♥️","♦️","♣️"],values:[1,4],inertia:5,scale:1.2,display:"labels",system:"dweird"},d8:{name:"Eight-Sided Dice",labels:["1","2","3","4","5","6","7","8"],values:[1,8]},d10:{name:"Ten-Sided Dice (Single Digit)",labels:["1","2","3","4","5","6","7","8","9","0"],values:[1,10],mass:350,inertia:9,scale:.9},d100:{name:"Ten-Sided Dice (Tens Digit)",type:"d10",labels:["10","20","30","40","50","60","70","80","90","00"],values:[10,100,10],mass:350,inertia:9,scale:.9},d12:{name:"Twelve-Sided Dice",labels:["1","2","3","4","5","6","7","8","9","10","11","12"],values:[1,12],mass:350,inertia:8,scale:.9},d20:{name:"Twenty-Sided Dice",labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],values:[1,20],mass:400,inertia:6},dabi:{name:"Star Wars RPG: Ability Dice",type:"d8",labels:["s","a",`s
a`,`s
s`,"a","s",`a
a`,""],values:[1,8],font:"SWRPG-Symbol-Regular",color:"#00FF00",colorset:"swrpg_abi",display:"labels",system:"swrpg"},ddif:{name:"Star Wars RPG: Difficulty Dice",type:"d8",labels:["t","f",`f
t`,"t","",`t
t`,`f
f`,"t"],values:[1,8],font:"SWRPG-Symbol-Regular",color:"#8000FC",colorset:"swrpg_dif",display:"labels",system:"swrpg"},dpro:{name:"Star Wars RPG: Proficiency Dice",type:"d12",labels:[`a
a`,"a",`a
a`,"x","s",`s
a`,"s",`s
a`,`s
s`,`s
a`,`s
s`,""],values:[1,12],mass:350,inertia:8,scale:.9,font:"SWRPG-Symbol-Regular",color:"#FFFF00",colorset:"swrpg_pro",display:"labels",system:"swrpg"},dcha:{name:"Star Wars RPG: Challenge Dice",type:"d12",labels:[`t
t`,"t",`t
t`,"t",`t
f`,"f",`t
f`,"f",`f
f`,"y",`f
f`,""],values:[1,12],mass:350,inertia:8,scale:.9,font:"SWRPG-Symbol-Regular",color:"#FF0000",colorset:"swrpg_cha",display:"labels",system:"swrpg"},dfor:{name:"Star Wars RPG: Force Dice",type:"d12",labels:["z",`Z
Z`,"z",`Z
Z`,"z",`Z
Z`,"z","Z","z","Z","z",`z
z`],values:[1,12],mass:350,inertia:8,scale:.9,font:"SWRPG-Symbol-Regular",color:"#FFFFFF",colorset:"swrpg_for",display:"labels",system:"swrpg"},dboo:{name:"Star Wars RPG: Boost Dice",type:"d6",labels:[`s  
  a`,`a  
  a`,"s","a","",""],values:[1,6],scale:.9,font:"SWRPG-Symbol-Regular",color:"#00FFFF",colorset:"swrpg_boo",display:"labels",system:"swrpg"},dset:{name:"Star Wars RPG: Setback Dice",type:"d6",labels:["","t","f"],values:[1,3],scale:.9,font:"SWRPG-Symbol-Regular",color:"#111111",colorset:"swrpg_set",display:"labels",system:"swrpg"},swar:{name:"Star Wars Armada: Red Attack Dice",type:"d8",labels:["F","F",`F
F`,"E","E","G","",""],values:[1,8],font:"Armada-Symbol-Regular",color:"#FF0000",colorset:"swa_red",display:"labels",system:"swarmada"},swab:{name:"Star Wars Armada: Blue Attack Dice",type:"d8",labels:["F","F","F","F","E","E","G","G"],values:[1,8],font:"Armada-Symbol-Regular",color:"#0000FF",colorset:"swa_blue",display:"labels",system:"swarmada"},swak:{name:"Star Wars Armada: Black Attack Dice",type:"d8",labels:["F","F","F","F",`F
E`,`F
E`,"",""],values:[1,8],font:"Armada-Symbol-Regular",color:"#111111",colorset:"swa_black",display:"labels",system:"swarmada"},xwatk:{name:"Star Wars X-Wing: Red Attack Dice",type:"d8",labels:["c","d","d","d","f","f","",""],values:[1,8],font:"XWing-Symbol-Regular",color:"#FF0000",colorset:"xwing_red",display:"labels",system:"xwing"},xwdef:{name:"Star Wars X-Wing: Green Defense Dice",type:"d8",labels:["e","e","e","f","f","","",""],values:[1,8],font:"XWing-Symbol-Regular",color:"#00FF00",colorset:"xwing_green",display:"labels",system:"xwing"},swlar:{name:"Star Wars Legion: Red Attack Dice",type:"d8",labels:["h","h","h","h","h","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#FF0000",colorset:"swl_atkred",display:"labels",system:"legion"},swlab:{name:"Star Wars Legion: Black Attack Dice",type:"d8",labels:["h","h","h","","","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#111111",colorset:"swl_atkblack",display:"labels",system:"legion"},swlaw:{name:"Star Wars Legion: White Attack Dice",type:"d8",labels:["h","","","","","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#FFFFFF",colorset:"swl_atkwhite",display:"labels",system:"legion"},swldr:{name:"Star Wars Legion: Red Defense Dice",type:"d6",labels:["s","s","s","d","",""],values:[1,6],scale:.9,font:"Legion-Symbol-Regular",color:"#FF0000",colorset:"swl_defred",display:"labels",system:"legion"},swldw:{name:"Star Wars Legion: White Defense Dice",type:"d6",labels:["s","","","d","",""],values:[1,6],scale:.9,font:"Legion-Symbol-Regular",color:"#FFFFFF",colorset:"swl_defwhite",display:"labels",system:"legion"}},qt={d4:{vertices:[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],faces:[[1,0,2,1],[0,1,3,2],[0,3,2,3],[1,2,3,4]]},d6:{vertices:[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],faces:[[0,3,2,1,1],[1,2,6,5,2],[0,1,5,4,3],[3,7,6,2,4],[0,4,7,3,5],[4,5,6,7,6]]},d8:{vertices:[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],faces:[[0,2,4,1],[0,4,3,2],[0,3,5,3],[0,5,2,4],[1,3,4,5],[1,4,2,6],[1,2,5,7],[1,5,3,8]]},d10:{vertices:[[1,0,-.105],[.809,.5877,.105],[.309,.951,-.105],[-.309,.951,.105],[-.809,.5877,-.105],[-1,0,.105],[-.809,-.587,-.105],[-.309,-.951,.105],[.309,-.951,-.105],[.809,-.5877,.105],[0,0,-1],[0,0,1]],faces:[[5,6,7,11,0],[4,3,2,10,1],[1,2,3,11,2],[0,9,8,10,3],[7,8,9,11,4],[8,7,6,10,5],[9,0,1,11,6],[2,1,0,10,7],[3,4,5,11,8],[6,5,4,10,9]]},d12:{vertices:[[0,.618,1.618],[0,.618,-1.618],[0,-.618,1.618],[0,-.618,-1.618],[1.618,0,.618],[1.618,0,-.618],[-1.618,0,.618],[-1.618,0,-.618],[.618,1.618,0],[.618,-1.618,0],[-.618,1.618,0],[-.618,-1.618,0],[1,1,1],[1,1,-1],[1,-1,1],[1,-1,-1],[-1,1,1],[-1,1,-1],[-1,-1,1],[-1,-1,-1]],faces:[[2,14,4,12,0,1],[15,9,11,19,3,2],[16,10,17,7,6,3],[6,7,19,11,18,4],[6,18,2,0,16,5],[18,11,9,14,2,6],[1,17,10,8,13,7],[1,13,5,15,3,8],[13,8,12,4,5,9],[5,4,14,9,15,10],[0,12,8,10,16,11],[3,19,7,17,1,12]]},d20:{vertices:[[-1,1.618,0],[1,1.618,0],[-1,-1.618,0],[1,-1.618,0],[0,-1,1.618],[0,1,1.618],[0,-1,-1.618],[0,1,-1.618],[1.618,0,-1],[1.618,0,1],[-1.618,0,-1],[-1.618,0,1]],faces:[[0,11,5,1],[0,5,1,2],[0,1,7,3],[0,7,10,4],[0,10,11,5],[1,5,9,6],[5,11,4,7],[11,10,2,8],[10,7,6,9],[7,1,8,10],[3,9,4,11],[3,4,2,12],[3,2,6,13],[3,6,8,14],[3,8,9,15],[4,9,5,16],[2,4,11,17],[6,2,10,18],[8,6,7,19],[9,8,1,20]]}},Kx={name:"",scale:1,font:"Arial",color:"",labels:[],valueMap:[],values:[],normals:[],mass:300,inertia:13,geometry:null,display:"values",system:"d20"};class Qx{constructor(e){if(!Pa.hasOwnProperty(e))return console.error("dice type unavailable");Object.assign(this,Kx,Pa[e]),this.shape=Pa[e].type||e,this.type=e,this.setLabels(this.labels),this.setValues(this.values[0],this.values[1],this.values[2]),this.setValueMap(this.valueMap),this.bumpMaps&&this.setBumpMaps(this.bumpMaps)}setValues(e=1,t=20,i=1){this.values=this.range(e,t,i)}setValueMap(e){for(let t=0;t<this.values.length;t++){let i=this.values[t];e[i]!=null&&(this.valueMap[i]=e[i])}}registerFaces(e,t="labels"){let i;if(t=="labels"?i=this.labels:i=this.normals,i.unshift(""),["d2","d10"].includes(this.shape)||i.unshift(""),this.shape=="d4"){let r=e[0],n=e[1],o=e[2],a=e[3];this.labels=[[[],[0,0,0],[n,a,o],[r,o,a],[n,r,a],[r,n,o]],[[],[0,0,0],[n,o,a],[o,r,a],[n,a,r],[o,n,r]],[[],[0,0,0],[a,o,n],[o,a,r],[a,n,r],[o,r,n]],[[],[0,0,0],[a,n,o],[r,a,o],[a,r,n],[r,o,n]]]}else Array.prototype.push.apply(i,e)}setLabels(e){this.loadTextures(e,this.registerFaces.bind(this),"labels")}setBumpMaps(e){this.loadTextures(e,this.registerFaces.bind(this),"bump")}loadTextures(e,t,i){let r=0,n=e.length,o=/\.(PNG|JPG|GIF|WEBP)$/i,a=Array(e.length),l=!1;for(let c=0;c<n;c++){if(e[c]==""||!e[c].match(o)){a[c]=e[c],++r;continue}l=!0,a[c]=new Image,a[c].onload=function(){++r>=n&&t(a,i)},a[c].src=e[c]}l||t(a,i)}range(e,t,i=1){for(var r=[e],n=e;n<t;)r.push(n+=i||1);return r}}const e1={none:{name:"Plastic"},perfectmetal:{name:"Perfect Metal",color:14540253,roughness:0,metalness:1,envMapIntensity:1},metal:{name:"Metal",color:14540253,roughness:.5,metalness:.6,envMapIntensity:1},wood:{name:"Wood",color:14540253,roughness:.9,metalness:0,envMapIntensity:1},glass:{name:"Glass",color:14540253,roughness:.1,metalness:0,envMapIntensity:1}},t1={baseScale:100,bumpMapping:!0},fn=class{constructor(s){this.geometries={},this.materials_cache={},this.cache_hits=0,this.cache_misses=0,this.label_color="",this.dice_color="",this.edge_color="",this.label_outline="",this.dice_texture="",this.dice_material="",this.material_options={specular:16777215,color:11908533,shininess:5,flatShading:!0},Object.assign(this,t1,s)}updateConfig(s={}){Object.assign(this,s),s.scale&&this.scaleGeometry()}setBumpMapping(s){this.bumpMapping=s,this.materials_cache={}}create(s){let e=this.get(s);if(!e)return null;let t=this.geometries[s];if(t||(t=this.createGeometry(e.shape,e.scale*this.baseScale),this.geometries[s]=t),!t)return null;this.setMaterialInfo();let i=new pi(t,this.createMaterials(e,this.baseScale/2,1));switch(i.result=[],i.shape=e.shape,i.rerolls=0,i.resultReason="natural",i.mass=e.mass,i.getFaceValue=function(){let r=this.resultReason,n=new U(0,0,this.shape=="d4"?-1:1),o,a=Math.PI*2,l=this.geometry.getAttribute("normal").array;for(let g=0,p=this.geometry.groups.length;g<p;++g){let m=this.geometry.groups[g];if(m.materialIndex==0)continue;let v=g*9,x=new U(l[v],l[v+1],l[v+2]).clone().applyQuaternion(this.body.quaternion).angleTo(n);x<a&&(a=x,o=m)}let c=o.materialIndex-1,u=2;const d=fn.dice[this.notation.type];if(this.shape=="d4"){let g=c-1==0?5:c;return{value:c,label:d.labels[c-1][g][0],reason:r}}["d10","d2"].includes(this.shape)&&(c+=1,u-=1);let h=d.values[(c-1)%d.values.length],f=d.labels[(c-1)%(d.labels.length-2)+u];return{value:h,label:f,reason:r}},i.storeRolledValue=function(r){this.resultReason=r||this.resultReason,this.result.push(this.getFaceValue())},i.getLastValue=function(){return!this.result||this.result.length<1?{value:void 0,label:"",reason:""}:this.result[this.result.length-1]},i.ignoreLastValue=function(r){let n=this.getLastValue();n.value!==void 0&&(n.ignore=r,this.setLastValue(n))},i.setLastValue=function(r){if(!(!this.result||this.result.length<1)&&!(!r||r.length<1))return this.result[this.result.length-1]=r},e.color&&(i.material[0].color=new ze(e.color),i.material[0].emissive=new ze(e.color),i.material[0].emissiveIntensity=1,i.material[0].needsUpdate=!0),e.values.length){case 1:return this.fixmaterials(i,1);case 2:return this.fixmaterials(i,2);case 3:return this.fixmaterials(i,3);default:return i}}get(s){let e;return fn.dice.hasOwnProperty(s)?e=fn.dice[s]:(e=new Qx(s),fn.dice[s]=e),e}getGeometry(s){return this.geometries[s]}scaleGeometry(){}createMaterials(s,e,t,i=!0,r=0){let n=[],o=s.labels;s.shape=="d4"&&(o=s.labels[r],e=this.baseScale/2,t=this.baseScale*2);for(var a=0;a<o.length;++a){var l;this.dice_material!="none"?(l=new yv(e1[this.dice_material]),l.envMapIntensity=0):l=new bv(this.material_options);let c;if(a==0){let u={name:"none"};this.dice_texture_rand.composite!="source-over"&&(u=this.dice_texture_rand),c=this.createTextMaterial(s,o,a,e,t,u,this.label_color_rand,this.label_outline_rand,this.edge_color_rand,i),l.map=c.composite}else if(c=this.createTextMaterial(s,o,a,e,t,this.dice_texture_rand,this.label_color_rand,this.label_outline_rand,this.dice_color_rand,i),l.map=c.composite,this.bumpMapping){{let u=.75;e>35&&(u=1),e>40&&(u=2.5),e>45&&(u=4),l.bumpScale=u}c.bump&&(l.bumpMap=c.bump),s.shape!="d4"&&s.normals[a]&&(l.bumpMap=new Ut(s.normals[a]),l.bumpScale=4,l.bumpMap.needsUpdate=!0)}l.opacity=1,l.transparent=!0,l.depthTest=!1,l.needUpdate=!0,n.push(l)}return n}createTextMaterial(s,e,t,i,r,n,o,a,l,c){if(e[t]===void 0)return null;n=n||this.dice_texture_rand,o=o||this.label_color_rand,a=a||this.label_outline_rand,l=l||this.dice_color_rand,c=c??!0;let u=e[t],d=!1,h=u;u instanceof HTMLImageElement?h=u.src:u instanceof Array&&u.forEach(D=>{h+=D.src});let f=s.type+h+t+n.name+o+a+l;if(s.shape=="d4"&&(f=s.type+h+n.name+o+a+l),c&&this.materials_cache[f]!=null)return this.cache_hits++,this.materials_cache[f];let g=document.createElement("canvas"),p=g.getContext("2d",{alpha:!0});p.globalAlpha=0,p.clearRect(0,0,g.width,g.height);let m=document.createElement("canvas"),v=m.getContext("2d",{alpha:!0});v.globalAlpha=0,v.clearRect(0,0,m.width,m.height);let x;if(s.shape=="d4"?x=this.calc_texture_size(i+r)*4:x=this.calc_texture_size(i+i*2*r)*4,g.width=g.height=x,m.width=m.height=x,p.fillStyle=l,p.fillRect(0,0,g.width,g.height),v.fillStyle="#FFFFFF",v.fillRect(0,0,m.width,m.height),n.texture&&n.name!=""&&n.name!="none"?(p.globalCompositeOperation=n.composite||"source-over",p.drawImage(n.texture,0,0,g.width,g.height),p.globalCompositeOperation="source-over",n.bump&&(v.globalCompositeOperation="source-over",v.drawImage(n.bump,0,0,g.width,g.height))):p.globalCompositeOperation="source-over",p.globalCompositeOperation="source-over",p.textAlign="center",p.textBaseline="middle",v.textAlign="center",v.textBaseline="middle",s.shape!="d4"){let D={d8:{even:-7.5,odd:-127.5},d10:{all:-6},d12:{all:5},d20:{all:-7.5}}[s.shape];if(D){let w;if(D.hasOwnProperty("all")?w=D.all:t>0&&t%2!=0?w=D.odd:w=D.even,w&&w!=0){var b=g.width/2,y=g.height/2;p.translate(b,y),p.rotate(w*(Math.PI/180)),p.translate(-b,-y),v.translate(b,y),v.rotate(w*(Math.PI/180)),v.translate(-b,-y)}}if(u instanceof HTMLImageElement)d=!0,p.drawImage(u,0,0,u.width,u.height,0,0,g.width,g.height);else{let w=x/(1+2*r),C=g.height/2+10,k=g.width/2;s.shape=="d10"?(w=w*.75,C=C*1.15-10):s.shape=="d20"&&(k=k*.98),p.font=w+"pt "+s.font,v.font=w+"pt "+s.font;let F=p.measureText("M").width*1.4,O=u.split(`
`);O.length>1&&(w=w/O.length,p.font=w+"pt "+s.font,v.font=w+"pt "+s.font,F=p.measureText("M").width*1.2,C-=F*O.length/2);for(let z=0,A=O.length;z<A;z++){let P=O[z].trim();a!="none"&&a!=l&&(p.strokeStyle=a,p.lineWidth=5,p.strokeText(O[z],k,C),v.strokeStyle="#000000",v.lineWidth=5,v.strokeText(O[z],k,C),(P=="6"||P=="9")&&(p.strokeText("  .",k,C),v.strokeText("  .",k,C))),p.fillStyle=o,p.fillText(O[z],k,C),v.fillStyle="#000000",v.fillText(O[z],k,C),(P=="6"||P=="9")&&(p.fillText("  .",k,C),v.fillText("  .",k,C)),C+=F*1.5}}}else{var b=g.width/2,y=g.height/2;p.font=x/128*24+"pt "+s.font,v.font=x/128*24+"pt "+s.font;for(let C=0;C<u.length;C++){if(u[C]instanceof HTMLImageElement){let k=u[C].width/g.width;p.drawImage(u[C],0,0,u[C].width,u[C].height,100/k,25/k,60/k,60/k)}else a!="none"&&a!=l&&(p.strokeStyle=a,p.lineWidth=5,p.strokeText(u[C],b,y-x*.3),v.strokeStyle="#000000",v.lineWidth=5,v.strokeText(u[C],b,y-x*.3)),p.fillStyle=o,p.fillText(u[C],b,y-x*.3),v.fillStyle="#000000",v.fillText(u[C],b,y-x*.3);p.translate(b,y),p.rotate(Math.PI*2/3),p.translate(-b,-y),v.translate(b,y),v.rotate(Math.PI*2/3),v.translate(-b,-y)}}var S=new tl(g),T;return d?T=null:T=new tl(m),c&&(this.cache_misses++,this.materials_cache[f]={composite:S,bump:T}),{composite:S,bump:T}}applyColorSet(s){var e;this.colordata=s,this.label_color=s.foreground,this.dice_color=s.background,this.label_outline=s.outline,this.dice_texture=s.texture,this.dice_material=((e=s?.texture)==null?void 0:e.material)||"none",this.edge_color=s.hasOwnProperty("edge")?s.edge:s.background}setMaterialInfo(s=""){let e=this.colordata,t=this.dice_texture,i=this.dice_material;if(this.dice_color_rand="",this.label_color_rand="",this.label_outline_rand="",this.dice_texture_rand="",this.dice_material_rand="",this.edge_color_rand="",Array.isArray(this.dice_color)){var r=Math.floor(Math.random()*this.dice_color.length);Array.isArray(this.label_color)&&this.label_color.length==this.dice_color.length&&(this.label_color_rand=this.label_color[r],Array.isArray(this.label_outline)&&this.label_outline.length==this.label_color.length&&(this.label_outline_rand=this.label_outline[r])),Array.isArray(this.dice_texture)&&this.dice_texture.length==this.dice_color.length&&(this.dice_texture_rand=this.dice_texture[r],this.dice_material_rand=this.dice_texture_rand.material),Array.isArray(this.edge_color)&&this.edge_color.length==this.dice_color.length&&(this.edge_color_rand=this.edge_color[r]),this.dice_color_rand=this.dice_color[r]}else this.dice_color_rand=this.dice_color;if(this.edge_color_rand=="")if(Array.isArray(this.edge_color)){var r=Math.floor(Math.random()*this.edge_color.length);this.edge_color_rand=this.edge_color[r]}else this.edge_color_rand=this.edge_color;if(this.label_color_rand==""&&Array.isArray(this.label_color)){var r=this.label_color[Math.floor(Math.random()*this.label_color.length)];Array.isArray(this.label_outline)&&this.label_outline.length==this.label_color.length&&(this.label_outline_rand=this.label_outline[r]),this.label_color_rand=this.label_color[r]}else this.label_color_rand==""&&(this.label_color_rand=this.label_color);if(this.label_outline_rand==""&&Array.isArray(this.label_outline)){var r=this.label_outline[Math.floor(Math.random()*this.label_outline.length)];this.label_outline_rand=this.label_outline[r]}else this.label_outline_rand==""&&(this.label_outline_rand=this.label_outline);this.dice_texture_rand==""&&Array.isArray(this.dice_texture)?(this.dice_texture_rand=this.dice_texture[Math.floor(Math.random()*this.dice_texture.length)],this.dice_material_rand=this.dice_texture_rand.material||this.dice_material):this.dice_texture_rand==""&&(this.dice_texture_rand=this.dice_texture,this.dice_material_rand=this.dice_texture_rand.material||this.dice_material),this.dice_material_rand==""&&Array.isArray(this.dice_material)?this.dice_material_rand=this.dice_material[Math.floor(Math.random()*this.dice_material.length)]:this.dice_material_rand==""&&(this.dice_material_rand=this.dice_material),this.colordata&&this.colordata.id!=e.id&&this.applyColorSet(e,t,i)}calc_texture_size(s){return Math.pow(2,Math.floor(Math.log(s)/Math.log(2)))}createGeometry(s,e,t=!1){const i=t?"create_shape":"create_geom";switch(s){case"d2":var r=new Ka(1*e,1*e,.1*e,32);return r.cannon_shape=new C_(1*e,1*e,.1*e,8),r;case"d4":return this[i](qt.d4.vertices,qt.d4.faces,e,-.1,Math.PI*7/6,.96);case"d6":return this[i](qt.d6.vertices,qt.d6.faces,e,.1,Math.PI/4,.96);case"d8":return this[i](qt.d8.vertices,qt.d8.faces,e,0,-Math.PI/4/2,.965);case"d10":return this[i](qt.d10.vertices,qt.d10.faces,e,.3,Math.PI,.945);case"d12":return this[i](qt.d12.vertices,qt.d12.faces,e,.2,-Math.PI/4/2,.968);case"d20":return this[i](qt.d20.vertices,qt.d20.faces,e,-.2,-Math.PI/4/2,.955);default:return console.error(`Geometry for ${s} is not available`),null}}fixmaterials(s,e){for(let i=0,r=s.geometry.groups.length;i<r;++i){var t=s.geometry.groups[i].materialIndex-2;if(t<e)continue;let n=t%e;s.geometry.groups[i].materialIndex=n+2}return s.geometry.elementsNeedUpdate=!0,s}create_shape(s,e,t){for(var i=new Array(s.length),r=0;r<s.length;++r)i[r]=new U().fromArray(s[r]).normalize();for(var n=new Array(s.length),o=new Array(e.length),r=0;r<i.length;++r){var a=i[r];n[r]=new M(a.x*t,a.y*t,a.z*t)}for(var r=0;r<e.length;++r)o[r]=e[r].slice(0,e[r].length-1);return new lr({vertices:n,faces:o})}make_geom(s,e,t,i,r){let n=new fi;for(let f=0;f<s.length;++f)s[f]=s[f].multiplyScalar(t);let o=[];const a=[],l=[],c=new U,u=new U;let d,h=0;for(let f=0;f<e.length;++f){let g=e[f],p=g.length-1,m=Math.PI*2/p;d=g[p]+1;for(let x=0;x<p-2;++x)o.push(...s[g[0]].toArray()),o.push(...s[g[x+1]].toArray()),o.push(...s[g[x+2]].toArray()),c.subVectors(s[g[x+2]],s[g[x+1]]),u.subVectors(s[g[0]],s[g[x+1]]),c.cross(u),c.normalize(),a.push(...c.toArray()),a.push(...c.toArray()),a.push(...c.toArray()),l.push((Math.cos(r)+1+i)/2/(1+i),(Math.sin(r)+1+i)/2/(1+i)),l.push((Math.cos(m*(x+1)+r)+1+i)/2/(1+i),(Math.sin(m*(x+1)+r)+1+i)/2/(1+i)),l.push((Math.cos(m*(x+2)+r)+1+i)/2/(1+i),(Math.sin(m*(x+2)+r)+1+i)/2/(1+i));let v=(p-2)*3;for(let x=0;x<v/3;x++)n.addGroup(h,3,d),h+=3}return n.setAttribute("position",new yt(o,3)),n.setAttribute("normal",new yt(a,3)),n.setAttribute("uv",new yt(l,2)),n.boundingSphere=new wn(new U,t),n}make_d10_geom(s,e,t,i,r){let n=new fi;for(let x=0;x<s.length;++x)s[x]=s[x].multiplyScalar(t);let o=[];const a=[],l=[],c=new U,u=new U;let d,h=0;for(let x=0;x<e.length;++x){let b=e[x],y=b.length-1,S=Math.PI*2/y;d=b[y]+1;var f=.65,g=.85,p=1-1*g,m=1-.895/1.105*g,v=1;for(let D=0;D<y-2;++D)o.push(...s[b[0]].toArray()),o.push(...s[b[D+1]].toArray()),o.push(...s[b[D+2]].toArray()),c.subVectors(s[b[D+2]],s[b[D+1]]),u.subVectors(s[b[0]],s[b[D+1]]),c.cross(u),c.normalize(),a.push(...c.toArray()),a.push(...c.toArray()),a.push(...c.toArray()),e[x][e[x].length-1]==-1||D>=2?(l.push((Math.cos(r)+1+i)/2/(1+i),(Math.sin(r)+1+i)/2/(1+i)),l.push((Math.cos(S*(D+1)+r)+1+i)/2/(1+i),(Math.sin(S*(D+1)+r)+1+i)/2/(1+i)),l.push((Math.cos(S*(D+2)+r)+1+i)/2/(1+i),(Math.sin(S*(D+2)+r)+1+i)/2/(1+i))):D==0?(l.push(.5-f/2,m),l.push(.5,p),l.push(.5+f/2,m)):D==1&&(l.push(.5-f/2,m),l.push(.5+f/2,m),l.push(.5,v));let T=(y-2)*3;for(let D=0;D<T/3;D++)n.addGroup(h,3,d),h+=3}return n.setAttribute("position",new yt(o,3)),n.setAttribute("normal",new yt(a,3)),n.setAttribute("uv",new yt(l,2)),n.boundingSphere=new wn(new U,t),n}chamfer_geom(s,e,t){for(var i=[],r=[],n=new Array(s.length),o=0;o<s.length;++o)n[o]=[];for(var o=0;o<e.length;++o){for(var a=e[o],l=a.length-1,c=new U,u=new Array(l),d=0;d<l;++d){var h=s[a[d]].clone();c.add(h),n[a[d]].push(u[d]=i.push(h)-1)}c.divideScalar(l);for(var d=0;d<l;++d){var h=i[u[d]];h.subVectors(h,c).multiplyScalar(t).addVectors(h,c)}u.push(a[l]),r.push(u)}for(var o=0;o<e.length-1;++o)for(var d=o+1;d<e.length;++d){for(var f=[],g=-1,p=0;p<e[o].length-1;++p){var m=e[d].indexOf(e[o][p]);m>=0&&m<e[d].length-1&&(g>=0&&p!=g+1?f.unshift([o,p],[d,m]):f.push([o,p],[d,m]),g=p)}f.length==4&&r.push([r[f[0][0]][f[0][1]],r[f[1][0]][f[1][1]],r[f[3][0]][f[3][1]],r[f[2][0]][f[2][1]],-1])}for(var o=0;o<n.length;++o){for(var v=n[o],u=[v[0]],x=v.length-1;x;){for(var p=e.length;p<r.length;++p){var b=r[p].indexOf(u[u.length-1]);if(b>=0&&b<4){--b==-1&&(b=3);var y=r[p][b];if(v.indexOf(y)>=0){u.push(y);break}}}--x}u.push(-1),r.push(u)}return{vectors:i,faces:r}}create_geom(s,e,t,i,r,n){for(var o=new Array(s.length),a=0;a<s.length;++a)o[a]=new U().fromArray(s[a]).normalize();var l=this.chamfer_geom(o,e,n);if(e.length!=10)var c=this.make_geom(l.vectors,l.faces,t,i,r);else var c=this.make_d10_geom(l.vectors,l.faces,t,i,r);return c.cannon_shape=this.create_shape(s,e,t),c.name="d"+e.length,c}};let Wc=fn;gp(Wc,"dice",{});const ka={cloudy:{name:"Clouds (Transparent)",composite:"destination-in",source:"textures/cloudy.webp",source_bump:"textures/cloudy.alt.webp"},cloudy_2:{name:"Clouds",composite:"multiply",source:"textures/cloudy.alt.webp",source_bump:"textures/cloudy.alt.webp"},fire:{name:"Fire",composite:"multiply",source:"textures/fire.webp",source_bump:"textures/fire.webp",material:"metal"},marble:{name:"Marble",composite:"multiply",source:"textures/marble.webp",source_bump:"",material:"glass"},water:{name:"Water",composite:"destination-in",source:"textures/water.webp",source_bump:"textures/water.webp",material:"glass"},ice:{name:"Ice",composite:"destination-in",source:"textures/ice.webp",source_bump:"textures/ice.webp",material:"glass"},paper:{name:"Paper",composite:"multiply",source:"textures/paper.webp",source_bump:"textures/paper-bump.webp",material:"wood"},speckles:{name:"Speckles",composite:"multiply",source:"textures/speckles.webp",source_bump:"textures/speckles.webp",material:"none"},glitter:{name:"Glitter",composite:"multiply",source:"textures/glitter.webp",source_bump:"textures/glitter-bump.webp",material:"none"},glitter_2:{name:"Glitter (Transparent)",composite:"destination-in",source:"textures/glitter-alpha.webp",source_bump:"",material:"none"},stars:{name:"Stars",composite:"multiply",source:"textures/stars.webp",source_bump:"textures/stars.webp",material:"none"},stainedglass:{name:"Stained Glass",composite:"multiply",source:"textures/stainedglass.webp",source_bump:"textures/stainedglass-bump.webp",material:"glass"},wood:{name:"Wood",composite:"multiply",source:"textures/wood.webp",source_bump:"textures/wood.webp",material:"wood"},metal:{name:"Stainless Steel",composite:"multiply",source:"textures/metal.webp",source_bump:"textures/metal-bump.webp",material:"metal"},skulls:{name:"Skulls",composite:"multiply",source:"textures/skulls.webp",source_bump:"textures/skulls.webp"},leopard:{name:"Leopard",composite:"multiply",source:"textures/leopard.webp",source_bump:"textures/leopard.webp",material:"wood"},tiger:{name:"Tiger",composite:"multiply",source:"textures/tiger.webp",source_bump:"textures/tiger.webp",material:"wood"},cheetah:{name:"Cheetah",composite:"multiply",source:"textures/cheetah.webp",source_bump:"textures/cheetah.webp",material:"wood"},dragon:{name:"Dragon",composite:"multiply",source:"textures/dragon.webp",source_bump:"textures/dragon-bump.webp",material:"none"},lizard:{name:"Lizard",composite:"multiply",source:"textures/lizard.webp",source_bump:"textures/lizard.webp",material:"none"},bird:{name:"Bird",composite:"multiply",source:"textures/feather.webp",source_bump:"textures/feather-bump.webp",material:"wood"},astral:{name:"Astral Sea",composite:"multiply",source:"textures/astral.webp",source_bump:"textures/stars.webp",material:"none"},acleaf:{name:"AC Leaf",composite:"multiply",source:"textures/acleaf.webp",source_bump:"textures/acleaf.webp",material:"none"},thecage:{name:"Nicholas Cage",composite:"multiply",source:"textures/thecage.webp",source_bump:"",material:"metal"},isabelle:{name:"Isabelle",composite:"source-over",source:"textures/isabelle.webp",source_bump:"",material:"none"},bronze01:{name:"bronze01",composite:"difference",source:"textures/bronze01.webp",source_bump:"",material:"metal"},bronze02:{name:"bronze02",composite:"difference",source:"textures/bronze02.webp",source_bump:"",material:"metal"},bronze03:{name:"bronze03",composite:"difference",source:"textures/bronze03.webp",source_bump:"",material:"metal"},bronze03a:{name:"bronze03a",composite:"difference",source:"textures/bronze03a.webp",source_bump:"",material:"metal"},bronze03b:{name:"bronze03b",composite:"difference",source:"textures/bronze03b.webp",source_bump:"",material:"metal"},bronze04:{name:"bronze04",composite:"difference",source:"textures/bronze04.webp",source_bump:"",material:"metal"},none:{name:"none",composite:"source-over",source:"",source_bump:"",material:""},"":{name:"~ Preset ~",composite:"source-over",source:"",source_bump:"",material:""}},El={coin_default:{name:"Gold Coin",description:"Gold Dragonhead Coin",category:"Other",foreground:"#f6c928",background:"#f6c928",outline:"none",texture:"metal"},coin_silver:{name:"Silver Coin",description:"Gold Dragonhead Coin",category:"Other",foreground:"#f6c928",background:"#f6c928",outline:"none",texture:"metal"},radiant:{name:"Radiant",category:"Damage Types",foreground:"#F9B333",background:"#FFFFFF",outline:"",texture:"paper",description:"Radiant"},fire:{name:"Fire",category:"Damage Types",foreground:"#f8d84f",background:["#f8d84f","#f9b02d","#f43c04","#910200","#4c1009"],outline:"black",texture:"fire",description:"Fire"},ice:{name:"Ice",category:"Damage Types",foreground:"#60E9FF",background:["#214fa3","#3c6ac1","#253f70","#0b56e2","#09317a"],outline:"black",texture:"ice",description:"Ice"},poison:{name:"Poison",category:"Damage Types",foreground:"#D6A8FF",background:["#313866","#504099","#66409e","#934fc3","#c949fc"],outline:"black",texture:"cloudy",description:"Poison"},acid:{name:"Acid",category:"Damage Types",foreground:"#A9FF70",background:["#a6ff00","#83b625","#5ace04","#69f006","#b0f006","#93bc25"],outline:"black",texture:"marble",description:"Acid"},thunder:{name:"Thunder",category:"Damage Types",foreground:"#FFC500",background:"#7D7D7D",outline:"black",texture:"cloudy",description:"Thunder"},lightning:{name:"Lightning",category:"Damage Types",foreground:"#FFC500",background:["#f17105","#f3ca40","#eddea4","#df9a57","#dea54b"],outline:"#7D7D7D",texture:"ice",description:"Lightning"},air:{name:"Air",category:"Damage Types",foreground:"#ffffff",background:["#d0e5ea","#c3dee5","#a4ccd6","#8dafb7","#80a4ad"],outline:"black",texture:"cloudy",description:"Air"},water:{name:"Water",category:"Damage Types",foreground:"#60E9FF",background:["#87b8c4","#77a6b2","#6b98a3","#5b8691","#4b757f"],outline:"black",texture:"water",description:"Water"},earth:{name:"Earth",category:"Damage Types",foreground:"#6C9943",background:["#346804","#184200","#527f22","#3a1d04","#56341a","#331c17","#5a352a","#302210"],outline:"black",texture:"speckles",description:"Earth"},force:{name:"Force",category:"Damage Types",foreground:"white",background:["#FF97FF","#FF68FF","#C651C6"],outline:"#570000",texture:"stars",description:"Force"},psychic:{name:"Psychic",category:"Damage Types",foreground:"#D6A8FF",background:["#313866","#504099","#66409E","#934FC3","#C949FC","#313866"],outline:"black",texture:"speckles",description:"Psychic"},necrotic:{name:"Necrotic",category:"Damage Types",foreground:"#ffffff",background:"#6F0000",outline:"black",texture:"skulls",description:"Necrotic"},breebaby:{name:"Pastel Sunset",category:"Custom Sets",foreground:["#5E175E","#564A5E","#45455E","#3D5A5E","#1E595E","#5E3F3D","#5E1E29","#283C5E","#25295E"],background:["#FE89CF","#DFD4F2","#C2C2E8","#CCE7FA","#A1D9FC","#F3C3C2","#EB8993","#8EA1D2","#7477AD"],outline:"white",texture:"marble",description:"Pastel Sunset, for Breyanna"},pinkdreams:{name:"Pink Dreams",category:"Custom Sets",foreground:"white",background:["#ff007c","#df73ff","#f400a1","#df00ff","#ff33cc"],outline:"#570000",texture:"skulls",description:"Pink Dreams, for Ethan"},inspired:{name:"Inspired",category:"Custom Sets",foreground:"#FFD800",background:"#C4C4B6",outline:"#8E8E86",texture:"none",description:"Inspired, for Austin"},bloodmoon:{name:"Blood Moon",category:"Custom Sets",foreground:"#CDB800",background:"#6F0000",outline:"black",texture:"marble",description:"Blood Moon, for Jared"},starynight:{name:"Stary Night",category:"Custom Sets",foreground:"#4F708F",background:["#091636","#233660","#4F708F","#8597AD","#E2E2E2"],outline:"white",texture:"speckles",description:"Stary Night, for Mai"},glitterparty:{name:"Glitter Party",category:"Custom Sets",foreground:"white",background:["#FFB5F5","#7FC9FF","#A17FFF"],outline:"none",texture:"glitter",description:"Glitter Party, for Austin"},astralsea:{name:"Astral Sea",category:"Custom Sets",foreground:"#565656",background:"white",outline:"none",texture:"astral",description:"The Astral Sea, for Austin"},bronze:{name:"Thylean Bronze",description:"Thylean Bronze by @SpencerThayer",category:"Custom Sets",foreground:["#FF9159","#FFB066","#FFBF59","#FFD059"],background:["#705206","#7A4E06","#643100","#7A2D06"],outline:["#3D2D03","#472D04","#301700","#471A04"],edge:["#FF5D0D","#FF7B00","#FFA20D","#FFBA0D"],texture:["bronze01","bronze02","bronze03","bronze03a","bronze03b","bronze04"]},dragons:{name:"Here be Dragons",category:"Custom Sets",foreground:"#FFFFFF",background:["#B80000","#4D5A5A","#5BB8FF","#7E934E","#FFFFFF","#F6ED7C","#7797A3","#A78437","#862C1A","#FFDF8A"],outline:"black",texture:["dragon","lizard"],description:"Here be Dragons"},birdup:{name:"Bird Up",category:"Custom Sets",foreground:"#FFFFFF",background:["#F11602","#FFC000","#6EC832","#0094BC","#05608D","#FEABB3","#F75680","#F3F0DF","#C7A57F"],outline:"black",texture:"bird",description:"Bird Up!"},tigerking:{name:"Tiger King",category:"Other",foreground:"#ffffff",background:"#FFCC40",outline:"black",texture:["leopard","tiger","cheetah"],description:"Leopard Print"},covid:{name:"COViD",category:"Other",foreground:"#A9FF70",background:["#a6ff00","#83b625","#5ace04","#69f006","#b0f006","#93bc25"],outline:"black",texture:"fire",description:"Covid-19"},acleaf:{name:"Animal Crossing",category:"Other",foreground:"#00FF00",background:"#07540A",outline:"black",texture:"acleaf",description:"Animal Crossing Leaf"},isabelle:{name:"Isabelle",category:"Other",foreground:"white",background:"#FEE5CC",outline:"black",texture:"isabelle",description:"Isabelle"},thecage:{name:"Nicholas Cage",category:"Other",foreground:"#ffffff",background:"#ffffff",outline:"black",texture:"thecage",description:"Nicholas Cage"},test:{name:"Test",category:"Colors",foreground:["#00FF00","#0000FF","#FF0000"],background:["#FF0000","#00FF00","#0000FF"],outline:"black",texture:"none",description:"Test"},rainbow:{name:"Rainblow",category:"Colors",foreground:["#FF5959","#FFA74F","#FFFF56","#59FF59","#2374FF","#00FFFF","#FF59FF"],background:["#900000","#CE3900","#BCBC00","#00B500","#00008E","#008282","#A500A5"],outline:"black",texture:"none",description:"Rainblow"},black:{name:"Black",category:"Colors",foreground:"#ffffff",background:"#000000",outline:"black",texture:"none",description:"Black"},white:{name:"White",category:"Colors",foreground:"#000000",background:"#FFFFFF",outline:"#FFFFFF",texture:"none",description:"White"},swrpg_abi:{name:"Star Wars RPG - Ability",category:"Star Wars™ RPG",foreground:"#00FF00",background:["#3D9238","#52B848","#5EAC56","#9ECB9A"],outline:"#000000",texture:"cloudy_2",description:"Star Wars™ RPG Ability Dice"},swrpg_pro:{name:"Star Wars RPG - Proficiency",category:"Star Wars™ RPG",foreground:"#FFFF00",background:["#CABB1C","#F9E33B","#FFE900","#F0E49D"],outline:"#000000",texture:"paper",description:"Star Wars™ RPG Proficiency Dice"},swrpg_dif:{name:"Star Wars RPG - Difficulty",category:"Star Wars™ RPG",foreground:"#8000FC",background:["#39165F","#664B84","#50247E","#745F88"],outline:"#000000",texture:"cloudy_2",description:"Star Wars™ RPG Difficulty Dice"},swrpg_cha:{name:"Star Wars RPG - Challenge",category:"Star Wars™ RPG",foreground:"#FF0000",background:["#A91F32","#EB4254","#E51836","#BA3645"],outline:"#000000",texture:"paper",description:"Star Wars™ RPG Challenge Dice"},swrpg_boo:{name:"Star Wars RPG - Boost",category:"Star Wars™ RPG",foreground:"#00FFFF",background:["#4B9DC6","#689FC4","#85CFF2","#8FC0D8"],outline:"#000000",texture:"glitter",description:"Star Wars™ RPG Boost Dice"},swrpg_set:{name:"Star Wars RPG - Setback",category:"Star Wars™ RPG",foreground:"#111111",background:["#252223","#241F21","#282828","#111111"],outline:"#ffffff",texture:"glitter",description:"Star Wars™ RPG Setback Dice"},swrpg_for:{name:"Star Wars RPG - Force",category:"Star Wars™ RPG",foreground:"#000000",background:["#F3F3F3","#D3D3D3","#BABABA","#FFFFFF"],outline:"#FFFFFF",texture:"stars",description:"Star Wars™ RPG Force Dice"},swa_red:{name:"Armada Attack - Red",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Red Attack Dice"},swa_blue:{name:"Armada Attack - Blue",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#212642","#28286E","#2B348C","#3D4BB5","#5D64AB"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Blue Attack Dice"},swa_black:{name:"Armada Attack - Black",category:"Star Wars™ Armada",foreground:"#ffffff",background:["#252223","#241F21","#282828","#111111"],outline:"none",texture:"stainedglass",description:"Star Wars™ Armada Black Attack Dice"},xwing_red:{name:"X-Wing Attack - Red",category:"Star Wars™ X-Wing",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"stars",description:"Star Wars™ X-Wing Red Attack Dice"},xwing_green:{name:"X-Wing Attack - Green",category:"Star Wars™ X-Wing",foreground:"#ffffff",background:["#3D9238","#52B848","#5EAC56","#9ECB9A"],outline:"none",texture:"stars",description:"Star Wars™ X-Wing Green Attack Dice"},swl_atkred:{name:"Legion Attack - Red",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"fire",description:"Star Wars™ Legion Red Attack Dice"},swl_atkblack:{name:"Legion Attack - Black",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#252223","#241F21","#282828","#111111"],outline:"none",texture:"fire",description:"Star Wars™ Legion Black Attack Dice"},swl_atkwhite:{name:"Legion Attack - White",category:"Star Wars™ Legion",foreground:"#000000",background:["#ffffff","#DFF4FA","#BCBCBC","#F1EDE2","#F2ECE0"],outline:"none",texture:"fire",description:"Star Wars™ Legion White Attack Dice"},swl_defred:{name:"Legion Defense - Red",category:"Star Wars™ Legion",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"fire",description:"Star Wars™ Legion Red Defense Dice"},swl_defwhite:{name:"Legion Defense - White",category:"Star Wars™ Legion",foreground:"#000000",background:["#ffffff","#DFF4FA","#BCBCBC","#F1EDE2","#F2ECE0"],outline:"none",texture:"fire",description:"Star Wars™ Legion White Defense Dice"}};class i1{constructor(e={}){this.colorsets=[],this.assetPath=e.assetPath}async ImageLoader(e){if(Array.isArray(e)){for(let t=0,i=e.length;t<i;t++)e[t]=await this.ImageLoader(e[t]);return e}return e.source&&e.source!=""&&(e.texture=await this.loadImage(e.source)),e.source_bump&&e.source_bump!=""&&(e.bump=await this.loadImage(e.source_bump)),e}loadImage(e){return new Promise((t,i)=>{let r=new Image;r.onload=()=>t(r),r.crossOrigin="anonymous",r.src=this.assetPath+e,r.onerror=n=>i(n)}).catch(t=>{console.error("Unable to load image texture")})}async getColorSet(e){let t,i;if(typeof e=="string"&&(t=e),typeof e=="object"&&(t=e.colorset),this.colorsets.hasOwnProperty(t))return this.colorsets[t];let r=El[t];return i=e.texture||r.texture,r.texture=this.getTexture(i),r.texture=await this.ImageLoader(r.texture),e.material&&(r.texture.material=e.material),this.colorsets[t]=r,r}async makeColorSet(e={}){if(this.colorsets.hasOwnProperty(e.name))return this.colorsets[e.name];let t=El.white,i=Object.assign({},t,e),r=this.getTexture(i.texture);return i.texture=await this.ImageLoader(r),e.material&&(i.texture.material=e.material),i.name.toLowerCase()==="white"&&(i.name=`${Date.now()}`),this.colorsets[i.name]=i,i}getTexture(e){if(Array.isArray(e)){let t=[];for(let i=0,r=e.length;i<r;i++)t.push(this.getTexture(e[i]));return t}return ka.hasOwnProperty(e)?ka[e]:ka.none}}const r1={default:{name:"Solid Color",author:"MajorVictory",showColorPicker:!0,surface:"wood_tray",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"blue-felt":{name:"Blue Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"red-felt":{name:"Red Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#ff9494",bg:"#4d1e1e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"green-felt":{name:"Green Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#97ff94",bg:"#244d1e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},taverntable:{name:"Old Tavern Table",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},mahogany:{name:"(Mah-Hog-Any)",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},stainless:{name:"Stainless Steel",author:"MajorVictory",showColorPicker:!0,surface:"metal",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},cyberpunk:{name:"Neo-New-Future-City",author:"MajorVictory",showColorPicker:!0,surface:"metal",colors:{fg:"#3494A6",bg:"#440B28"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},cagetown:{name:"Cage Town",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#D7A866",bg:"#282811"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]}},n1=s=>{let e;return function(){let t=this,i=arguments;e&&window.cancelAnimationFrame(e),e=window.requestAnimationFrame(function(){s.apply(t,i)})}},s1={assetPath:"./",framerate:1/60,sounds:!1,volume:100,color_spotlight:15720405,shadows:!0,theme_surface:"green-felt",sound_dieMaterial:"plastic",theme_customColorset:null,theme_colorset:"white",theme_texture:"",theme_material:"glass",gravity_multiplier:400,light_intensity:.7,baseScale:100,strength:1,iterationLimit:1e3,onRollComplete:()=>{},onRerollComplete:()=>{},onAddDiceComplete:()=>{},onRemoveDiceComplete:()=>{}};class a1{constructor(e,t={}){this.initialized=!1,this.container=document.querySelector(e),this.dimensions=new Ne(this.container.clientWidth,this.container.clientHeight),this.adaptive_timestep=!1,this.last_time=0,this.running=!1,this.rolling=!1,this.threadid,this.display={currentWidth:null,currentHeight:null,containerWidth:null,containerHeight:null,aspect:null,scale:null},this.cameraHeight={max:null,close:null,medium:null,far:null},this.scene=new _v,this.world=new qx,this.dice_body_material=new ur,this.sounds_table={},this.sounds_dice=[],this.lastSoundType="",this.lastSoundStep=0,this.lastSound=0,this.iteration,this.renderer,this.barrier,this.camera,this.light,this.light_amb,this.desk,this.box_body={},this.bodies=[],this.meshes=[],this.diceList=[],this.notationVectors=null,this.dieIndex=0,this.soundDelay=10,this.animstate="",this.selector={animate:!0,rotate:!0,intersected:null,dice:[]},Object.assign(this,s1,t),this.DiceColors=new i1({assetPath:this.assetPath}),this.DiceFactory=new Wc({baseScale:this.baseScale}),this.DiceFactory.setBumpMapping(!0),this.surface=r1[this.theme_surface].surface}enableShadows(){this.shadows=!0,this.renderer&&(this.renderer.shadowMap.enabled=this.shadows),this.light&&(this.light.castShadow=this.shadows),this.desk&&(this.desk.receiveShadow=this.shadows)}disableShadows(){this.shadows=!1,this.renderer&&(this.renderer.shadowMap.enabled=this.shadows),this.light&&(this.light.castShadow=this.shadows),this.desk&&(this.desk.receiveShadow=this.shadows)}async initialize(){this.renderer=new kc({antialias:!0,alpha:!0}),this.container.appendChild(this.renderer.domElement),this.renderer.shadowMap.enabled=this.shadows,this.renderer.shadowMap.type=2,this.renderer.setClearColor(0,0),this.setDimensions(this.dimensions),this.world.gravity.set(0,0,-9.8*this.gravity_multiplier),this.world.broadphase=new zc,this.world.solver.iterations=14,this.world.allowSleep=!0,this.makeWorldBox(),this.resizeWorld(),await this.loadTheme({colorset:this.theme_colorset,texture:this.theme_texture,material:this.theme_material}).catch(e=>{throw new Error("Unable to load theme")}),this.sounds&&await this.loadSounds().catch(e=>{throw new Error("Unable to load sounds")}),this.initialized=!0,this.renderer.render(this.scene,this.camera)}makeWorldBox(){Object.keys(this.box_body).length&&(this.world.removeBody(this.box_body.desk),this.world.removeBody(this.box_body.topWall),this.world.removeBody(this.box_body.bottomWall),this.world.removeBody(this.box_body.leftWall),this.world.removeBody(this.box_body.rightWall));const e=new ur,t=new ur;this.world.addContactMaterial(new cr(e,this.dice_body_material,{mass:0,friction:.6,restitution:.5})),this.world.addContactMaterial(new cr(t,this.dice_body_material,{mass:0,friction:.6,restitution:1})),this.world.addContactMaterial(new cr(this.dice_body_material,this.dice_body_material,{mass:0,friction:.6,restitution:.5})),this.box_body.desk=new ne({allowSleep:!1,mass:0,shape:new cn,material:e}),this.world.addBody(this.box_body.desk),this.box_body.topWall=new ne({allowSleep:!1,mass:0,shape:new cn,material:t}),this.box_body.topWall.quaternion.setFromAxisAngle(new M(1,0,0),Math.PI/2),this.box_body.topWall.position.set(0,this.display.containerHeight*.93,0),this.world.addBody(this.box_body.topWall),this.box_body.bottomWall=new ne({allowSleep:!1,mass:0,shape:new cn,material:t}),this.box_body.bottomWall.quaternion.setFromAxisAngle(new M(1,0,0),-Math.PI/2),this.box_body.bottomWall.position.set(0,-this.display.containerHeight*.93,0),this.world.addBody(this.box_body.bottomWall),this.box_body.leftWall=new ne({allowSleep:!1,mass:0,shape:new cn,material:t}),this.box_body.leftWall.quaternion.setFromAxisAngle(new M(0,1,0),-Math.PI/2),this.box_body.leftWall.position.set(this.display.containerWidth*.93,0,0),this.world.addBody(this.box_body.leftWall),this.box_body.rightWall=new ne({allowSleep:!1,mass:0,shape:new cn,material:t}),this.box_body.rightWall.quaternion.setFromAxisAngle(new M(0,1,0),Math.PI/2),this.box_body.rightWall.position.set(-this.display.containerWidth*.93,0,0),this.world.addBody(this.box_body.rightWall)}async loadTheme(e){let t;this.theme_customColorset?t=await this.DiceColors.makeColorSet(this.theme_customColorset):t=await this.DiceColors.getColorSet(e),this.DiceFactory.applyColorSet(t),this.colorData=t}async loadSounds(){let e={felt:7,wood_table:7,wood_tray:7,metal:9},t={coin:6,metal:12,plastic:15,wood:12};const i=this.colorData.texture.material.match(/wood|metal/g);if(this.sound_dieMaterial=i?this.colorData.texture.material:"plastic",!this.sounds_table.hasOwnProperty(this.surface)){this.sounds_table[this.surface]=[];let r=e[this.surface];for(let n=1;n<=r;++n){const o=await this.loadAudio(this.assetPath+"sounds/surfaces/surface_"+this.surface+n+".mp3");this.sounds_table[this.surface].push(o)}}if(!this.sounds_dice.hasOwnProperty("coin")){this.sounds_dice.coin=[];let r=t.coin;for(let n=1;n<=r;++n){const o=await this.loadAudio(this.assetPath+"sounds/dicehit/dicehit_coin"+n+".mp3");this.sounds_dice.coin.push(o)}}if(!this.sounds_dice.hasOwnProperty(this.sound_dieMaterial)){this.sounds_dice[this.sound_dieMaterial]=[];let r=t[this.sound_dieMaterial];for(let n=1;n<=r;++n){const o=await this.loadAudio(this.assetPath+"sounds/dicehit/dicehit_"+this.sound_dieMaterial+n+".mp3");this.sounds_dice[this.sound_dieMaterial].push(o)}}}loadAudio(e){return new Promise((t,i)=>{let r=new Audio;r.oncanplaythrough=()=>t(r),r.crossOrigin="anonymous",r.src=e,r.onerror=n=>i(n)}).catch(t=>{console.error("Unable to load audio")})}async updateConfig(e={}){Object.apply(this,e),this.theme_customColorset=e.theme_customColorset?e.theme_customColorset:null,e.theme_colorset&&(this.theme_colorset=e.theme_colorset),e.theme_texture&&(this.theme_texture=e.theme_texture),e.theme_material&&(this.theme_material=e.theme_material),(e.theme_colorset||e.theme_texture||e.theme_material||e.theme_customColorset)&&await this.loadTheme({colorset:this.theme_colorset,texture:this.theme_texture,material:this.theme_material})}setDimensions(e){switch(this.display.currentWidth=this.container.clientWidth/2,this.display.currentHeight=this.container.clientHeight/2,e?(this.display.containerWidth=e.x,this.display.containerHeight=e.y):(this.display.containerWidth=this.display.currentWidth,this.display.containerHeight=this.display.currentHeight),this.display.aspect=Math.min(this.display.currentWidth/this.display.containerWidth,this.display.currentHeight/this.display.containerHeight),this.display.scale=Math.sqrt(this.display.containerWidth*this.display.containerWidth+this.display.containerHeight*this.display.containerHeight)/13,this.makeWorldBox(),this.renderer.setSize(this.display.currentWidth*2,this.display.currentHeight*2),this.cameraHeight.max=this.display.currentHeight/this.display.aspect/Math.tan(10*Math.PI/180),this.cameraHeight.medium=this.cameraHeight.max/1.5,this.cameraHeight.far=this.cameraHeight.max,this.cameraHeight.close=this.cameraHeight.max/2,this.camera&&this.scene.remove(this.camera),this.camera=new Nt(20,this.display.currentWidth/this.display.currentHeight,1,this.cameraHeight.max*1.3),this.animstate){case"selector":this.camera.position.z=this.selector.dice.length>9?this.cameraHeight.far:this.selector.dice.length<6?this.cameraHeight.close:this.cameraHeight.medium;break;case"throw":case"afterthrow":default:this.camera.position.z=this.cameraHeight.far}this.camera.lookAt(new U(0,0,0));const t=Math.max(this.display.containerWidth,this.display.containerHeight);this.light&&this.scene.remove(this.light),this.light_amb&&this.scene.remove(this.light_amb),this.light=new Ev(this.color_spotlight,this.light_intensity),this.light.position.set(-t/2,t/2,t*3),this.light.target.position.set(0,0,0),this.light.distance=t*5,this.light.angle=Math.PI/4,this.light.castShadow=this.shadows,this.light.shadow.camera.near=t/10,this.light.shadow.camera.far=t*5,this.light.shadow.camera.fov=50,this.light.shadow.bias=.001,this.light.shadow.mapSize.width=1024,this.light.shadow.mapSize.height=1024,this.scene.add(this.light),this.light_amb=new wv(16777147,6776689,this.light_intensity),this.scene.add(this.light_amb),this.desk&&this.scene.remove(this.desk);let i=new xv;i.opacity=.5,this.desk=new pi(new Bs(this.display.containerWidth*6,this.display.containerHeight*6,1,1),i),this.desk.receiveShadow=this.shadows,this.scene.add(this.desk),this.renderer.render(this.scene,this.camera)}resizeWorld(){const e=n1(()=>{const t=this.renderer.domElement,i=this.container.clientWidth,r=this.container.clientHeight,n=t.width!==i||t.height!==r;return n&&this.setDimensions(new Ne(this.container.clientWidth,this.container.clientHeight)),n});window.addEventListener("resize",e)}vectorRand({x:e,y:t}){let i=Math.random()*Math.PI/5-Math.PI/5/2,r={x:e*Math.cos(i)-t*Math.sin(i),y:e*Math.sin(i)+t*Math.cos(i)};return r.x==0&&(r.x=.01),r.y==0&&(r.y=.01),r}getNotationVectors(e,t,i,r){let n=new Sl(e);for(let o in n.set){const a=this.DiceFactory.get(n.set[o].type);let l=n.set[o].num,c=n.set[o].op,u=n.set[o].sid,d=n.set[o].gid,h=n.set[o].glvl,f=n.set[o].func,g=n.set[o].args;for(let p=0;p<l;p++){let m=this.vectorRand(t);m.x/=r,m.y/=r;let v={x:this.display.containerWidth*(m.x>0?-1:1)*.9,y:this.display.containerHeight*(m.y>0?-1:1)*.9,z:Math.random()*200+200},x=Math.abs(m.x/m.y);x>1?v.y/=x:v.x*=x;let b=this.vectorRand(t);b.x/=r,b.y/=r;let y,S,T;a.shape!="d2"?(y={x:b.x*i,y:b.y*i,z:-10},S={x:-(Math.random()*m.y*5+a.inertia*m.y),y:Math.random()*m.x*5+a.inertia*m.x,z:0},T={x:Math.random(),y:Math.random(),z:Math.random(),a:Math.random()}):(y={x:b.x*i/10,y:b.y*i/10,z:3e3},S={x:12*a.inertia,y:1*a.inertia,z:0},T={x:1,y:1,z:Math.random(),a:Math.random()}),n.vectors.push({index:this.dieIndex++,type:a.type,op:c,sid:u,gid:d,glvl:h,func:f,args:g,pos:v,velocity:y,angle:S,axis:T})}}return n}swapDiceFace(e,t){const i=this.DiceFactory.get(e.notation.type);if(e.resultReason="forced",i.shape=="d4"){this.swapDiceFace_D4(e,t);return}i.values;let r=parseInt(e.getLastValue().value);t=parseInt(t),e.notation.type=="d10"&&r==0&&(r=10),e.notation.type=="d100"&&r==0&&(r=100),e.notation.type=="d100"&&r>0&&r<10&&(r*=10),e.notation.type=="d10"&&t==0&&(t=10),e.notation.type=="d100"&&t==0&&(t=100),e.notation.type=="d100"&&t>0&&t<10&&(t*=10);let n=i.values.indexOf(r),o=i.values.indexOf(t);if(n<0||o<0||n==o)return;let a=e.geometry.clone(),l=[],c=[],u=2;i.shape=="d10"&&(u=1);let d,h=o+u;i.shape!="d2"?(d=n+u,h=o+u):(d=n+1,h=o+1);for(var f=0,g=a.groups.length;f<g;++f){const p=a.groups[f].materialIndex;if(p==d){l.push(f);continue}if(p==h){c.push(f);continue}}if(!(l.length<=0||c.length<=0)){for(let p=0,m=c.length;p<m;p++)a.groups[c[p]].materialIndex=d;for(let p=0,m=l.length;p<m;p++)a.groups[l[p]].materialIndex=h;e.geometry=a,e.result=[]}}swapDiceFace_D4(e,t){const i=this.DiceFactory.get(e.notation.type);let r=parseInt(e.getLastValue().value);if(t=parseInt(t),!(r>=1&&r<=4))return;let n=t-r,o=e.geometry.clone();for(let a=0,l=o.groups.length;a<l;++a){const c=o.groups[a];let u=c.materialIndex;if(u!=0){for(u+=n-1;u>4;)u-=4;for(;u<1;)u+=4;c.materialIndex=u+1}}n!=0&&(n<0&&(n+=4),e.material=this.DiceFactory.createMaterials(i,0,0,!1,n)),e.geometry=o}spawnDice(e,t=!1){const{pos:i,axis:r,angle:n,velocity:o}=e;let a;if(t)a=t,a.stopped=0,this.world.removeBody(a.body);else{if(a=this.DiceFactory.create(e.type,this.colorData),!a)return;a.notation=e,a.result=[],a.stopped=0,a.castShadow=this.shadows,this.scene.add(a),this.diceList.push(a)}a.body=new ne({allowSleep:!0,sleepSpeedLimit:75,sleepTimeLimit:.9,mass:a.mass,shape:a.geometry.cannon_shape,material:this.dice_body_material}),a.body.type=ne.DYNAMIC,a.body.position.set(i.x,i.y,i.z),a.body.quaternion.setFromAxisAngle(new M(r.x,r.y,r.z),r.a*Math.PI*2),a.body.angularVelocity.set(n.x,n.y,n.z),a.body.velocity.set(o.x,o.y,o.z),a.body.linearDamping=.1,a.body.angularDamping=.1,a.body.diceShape=a.shape,a.body.sleepState=0,a.body.addEventListener("collide",this.eventCollide.bind(this)),this.world.addBody(a.body)}eventCollide({body:e,target:t}){if(this.animstate=="simulate"||!this.sounds||!e||this.volume<=0)return;let i=Date.now(),r=e.mass>0?"dice":"table";if(!((this.lastSoundStep==e.world.stepnumber||this.lastSound>i)&&r!="dice")&&!((this.lastSoundStep==e.world.stepnumber||this.lastSound>i)&&r=="dice"&&this.lastSoundType=="dice")){if(e.mass>0){let n=e.velocity.length();if(n<250)return;let o;e.diceShape==="d2"?o=this.sounds_dice.coin[Math.floor(Math.random()*this.sounds_dice.coin.length)]:o=this.sounds_dice[this.sound_dieMaterial][Math.floor(Math.random()*this.sounds_dice[this.sound_dieMaterial].length)],o&&(o.volume=Math.min(n/8e3,this.volume/100),o.play().catch(a=>{})),this.lastSoundType="dice"}else{let n=t.velocity.length();if(n<250)return;let o=this.surface,a=this.sounds_table[o],l=a[Math.floor(Math.random()*a.length)];l&&(l.volume=Math.min(n/8e3,this.volume/100),l.play().catch(c=>{})),this.lastSoundType="table"}this.lastSoundStep=e.world.stepnumber,this.lastSound=i+this.soundDelay}}checkForRethrow(e){let t=e.notation.func?e.notation.func.toLowerCase():"",i,r=!1;if(t!=""&&i&&i.method){t=e.notation.func.toLowerCase();let n=e.notation.args||"";r=i.method(e,n)}return r}throwFinished(){const e=this.iteration>this.iterationLimit;for(let t=0,i=this.diceList.length;t<i;++t){const r=this.diceList[t],n=ne.SLEEPING;if(r.body.sleepState<n&&!e)return!1;if(r.body.sleepState==n||e){if(r.body.type===ne.KINEMATIC)continue;let o=!1;if(r.result.length==0?(r.storeRolledValue(r.resultReason),o=this.checkForRethrow(r)):r.result.length>0&&r.rerolling&&(r.rerolling=!1,r.storeRolledValue("reroll"),o=this.checkForRethrow(r)),o)return r.rerolls+=1,r.rerolling=!0,r.body.wakeUp(),r.body.type=ne.DYNAMIC,r.body.angularVelocity=new M(25,25,25),r.body.velocity=new M(0,0,3e3),!1;r.rerolling=!1,r.body.type=ne.KINEMATIC}}return!0}simulateThrow(){for(this.animstate="simulate",this.iteration=0,this.rolling=!0;!this.throwFinished(!0);)++this.iteration,this.world.step(this.framerate)}animateThrow(e,t){this.animstate="throw";let i=Date.now();this.last_time=this.last_time||i-this.framerate*1e3;let r=(i-this.last_time)/1e3;++this.iteration;let n=Math.floor(r/this.framerate);for(let o=0;o<n;o++)this.world.step(this.framerate),++this.steps;for(let o in this.scene.children){let a=this.scene.children[o];a.body!=null&&(a.position.copy(a.body.position),a.quaternion.copy(a.body.quaternion))}if(this.renderer.render(this.scene,this.camera),this.last_time=this.last_time+n*this.framerate*1e3,this.running==e&&this.throwFinished()){this.running=!1,this.rolling=!1,t&&t.call(this,this.notationVectors),this.running=Date.now(),this.animateAfterThrow(this.running);return}this.running==e&&((o,a,l,c,u)=>{!l&&r<this.framerate?setTimeout(()=>{requestAnimationFrame(()=>{o.call(this,a,c,u)})},(this.framerate-r)*1e3):requestAnimationFrame(()=>{o.call(this,a,c,u)})}).bind(this)(this.animateThrow,e,this.adaptive_timestep,t)}animateAfterThrow(e){this.animstate="afterthrow";let t=Date.now(),i=(t-this.last_time)/1e3;i>3&&(i=this.framerate),this.running=!1,this.last_time=t,this.renderer.render(this.scene,this.camera),this.running==e&&((r,n,o)=>{!o&&i<this.framerate?setTimeout(()=>{requestAnimationFrame(()=>{r.call(this,n)})},(this.framerate-i)*1e3):requestAnimationFrame(()=>{r.call(this,n)})}).bind(this)(this.animateAfterThrow,e,this.adaptive_timestep)}startClickThrow(e){this.rolling&&(this.clearDice(),this.rolling=!1);let t={x:(Math.random()*2-.5)*this.display.currentWidth,y:-(Math.random()*2-.5)*this.display.currentHeight},i=Math.sqrt(t.x*t.x+t.y*t.y)+100,r=(Math.random()+3)*i*this.strength;return this.getNotationVectors(e,t,r,i)}clearDice(){this.running=!1;let e;for(;e=this.diceList.pop();)this.scene.remove(e),e.body&&this.world.removeBody(e.body);this.renderer.render(this.scene,this.camera),setTimeout(()=>{this.renderer.render(this.scene,this.camera)},100)}getDiceResults(e){if(e!==void 0)return{type:this.diceList[e].shape,sides:parseInt(this.diceList[e].shape.substring(1)),id:e,...this.diceList[e].result.at(-1)};let t=0;const i=this.notationVectors.constant?parseInt(`${this.notationVectors.op}${this.notationVectors.constant}`):0;let r=i;return{notation:this.notationVectors.notation,sets:this.notationVectors.set.map(n=>{const o=t+n.num-1;let a=0;const l=[];for(let u=t;u<=o;u++){if(this.diceList[t].result.at(-1).reason==="remove"){t++;continue}l.push({type:n.type,sides:parseInt(n.type.substring(1)),id:t,...this.diceList[t].result.at(-1)}),a+=this.diceList[t].result.at(-1).value,t++}const c={num:n.num,type:n.type,sides:parseInt(n.type.substring(1)),rolls:l,total:a};return r+=a,c}),modifier:i,total:r}}async roll(e){if(this.notationVectors=this.startClickThrow(e),this.notationVectors)return new Promise((t,i)=>{this.rollDice(()=>{const r=this.getDiceResults();this.onRollComplete(r);const n=new CustomEvent("rollComplete",{detail:r});document.dispatchEvent(n),t(r)})})}async reroll(e){return this.rolling=!0,this.running=Date.now(),this.iteration=0,new Promise((t,i)=>{e.forEach(r=>{const n=this.diceList[r];n.rerolls+=1,n.rerolling=!0,n.body.wakeUp(),n.body.type=ne.DYNAMIC,n.body.angularVelocity=new M(25,25,25),n.body.velocity=new M(0,0,3e3)}),this.animateThrow(this.running,()=>{const r=e.map(o=>this.getDiceResults(o));this.onRerollComplete(r);const n=new CustomEvent("rerollComplete",{detail:r});document.dispatchEvent(n),t(r)})})}async add(e){let t=this.diceList.length;if(!t)return this.roll(e);let i=this.startClickThrow(e),r=[];for(let n=0,o=i.vectors.length;n<o;++n)this.spawnDice(i.vectors[n]);this.simulateThrow(),this.steps=0,this.iteration=0;for(let n=0,o=i.vectors.length;n<o;++n){const a=t+n;!this.diceList[a]||(this.spawnDice(i.vectors[n],this.diceList[a]),r.push(a))}if(i.result&&i.result.length>0)for(let n=0;n<i.result.length;n++){const o=t+n;let a=this.diceList[o];!a||a.getLastValue().value!=i.result[n]&&this.swapDiceFace(a,i.result[n])}return this.notationVectors=Sl.mergeNotation(this.notationVectors,i),new Promise((n,o)=>{const a=()=>{const l=r.map(u=>this.getDiceResults(u));this.onAddDiceComplete(l);const c=new CustomEvent("addDiceComplete",{detail:l});document.dispatchEvent(c),n(l)};this.rolling=!0,this.running=Date.now(),this.last_time=0,this.animateThrow(this.running,a)})}async remove(e){return new Promise((t,i)=>{const r=[];e.forEach(o=>{const a=this.diceList[o];a.body&&this.world.removeBody(a.body),this.scene.remove(a),a.storeRolledValue("remove"),r.push(this.getDiceResults(o))}),this.renderer.render(this.scene,this.camera),this.onRemoveDiceComplete(r);const n=new CustomEvent("removeDiceComplete",{detail:r});document.dispatchEvent(n),t(r)})}rollDice(e){if(this.notationVectors.error){e.call(this);return}this.clearDice();for(let t=0,i=this.notationVectors.vectors.length;t<i;++t)this.spawnDice(this.notationVectors.vectors[t]);this.simulateThrow(),this.steps=0,this.iteration=0;for(let t=0,i=this.diceList.length;t<i;++t)!this.diceList[t]||this.spawnDice(this.notationVectors.vectors[t],this.diceList[t]);if(this.notationVectors.result&&this.notationVectors.result.length>0)for(let t=0;t<this.notationVectors.result.length;t++){let i=this.diceList[t];!i||i.getLastValue().value!=this.notationVectors.result[t]&&this.swapDiceFace(i,this.notationVectors.result[t])}this.rolling=!0,this.running=Date.now(),this.last_time=0,this.animateThrow(this.running,e)}}var Tl=gr({defaultClassName:"_1qnkk9w2o _1qnkk9w33 _1qnkk9w3i _1qnkk9w3x _1qnkk9w1f _1qnkk9wj6",variantClassNames:{expanded:{false:"id7tgm2",true:"id7tgm3"}},defaultVariants:{},compoundVariants:[]});const Cl=Ue('<div id="dice-table">'),o1={framerate:1/60,sounds:!1,volume:100,color_spotlight:16777215,shadows:!0,theme_surface:"green-felt",sound_dieMaterial:"plastic",theme_customColorset:null,theme_colorset:"white",theme_texture:"none",theme_material:"none",gravity_multiplier:400,light_intensity:.8,baseScale:100,strength:2,onRollComplete:()=>{}},l1=s=>{Ot(async()=>{const t=Di();t&&(Me()?.settings.strongerRoll,await t.updateConfig({gravity_multiplier:Me()?.settings.strongerRoll?300:400}))}),Ot(As(qi,()=>{Di()&&Di().clearDice(),ho(void 0)})),Ot(As(Di,()=>{if(Di()!==void 0)return;const t=new a1("#dice-table",{...o1,baseScale:Me()?.settings.smallerDice?75:95,gravity_multiplier:Me()?.settings.strongerRoll?300:400});ho(t),t.initialize().then(()=>{t.loadTheme({colorset:Me()?Me()?.settings.diceColor:"white",texture:Me()?Me()?.settings.diceMaterial:"none",material:"none"})}).catch(i=>{console.log("box initialize",i)}),t.onRollComplete=i=>{if(Kl()){Cs(!1);return}const r=Ju(i,Ku());if(r.successRule=Qu(),r.successTarget=eh(),th(""),ih(0),Jl(""),Vl(r),Cs(!1),!r.private)Hr(Wr(Wa),Ss(r));else{const n=rt();if(!n)return;rh(n.id,Ss(r))}}})),Ot(async()=>{const t=Di();t&&await t.updateConfig({theme_colorset:Me()?.settings.diceColor,theme_texture:Me()?.settings.diceMaterial})});const e=be(()=>{const t=rt();if(console.log("bkg room",t),!t||!t.bkg||t.bkg=="")return;const i={"background-image":`url('${t.bkg}')`,"background-repeat":"no-repeat","background-position":"center","background-size":"cover"};return console.log("bkg result",i),i});return _(Fs,{get children(){return[_(di,{get when(){return qi()!==""},get children(){const t=Cl(),i=s.ref;return typeof i=="function"?ti(i,t):s.ref=t,nt(r=>{const n=Tl({expanded:!1}),o=e();return n!==r._v$&&Je(t,r._v$=n),r._v$2=ui(t,o,r._v$2),r},{_v$:void 0,_v$2:void 0}),t}}),_(di,{get when(){return qi()===""},get children(){const t=Cl(),i=s.ref;return typeof i=="function"?ti(i,t):s.ref=t,nt(r=>{const n=Tl({expanded:!0}),o=e();return n!==r._v$3&&Je(t,r._v$3=n),r._v$4=ui(t,o,r._v$4),r},{_v$3:void 0,_v$4:void 0}),t}})]}})},c1=Ue("<div>"),u1=s=>{let e,t,i,r;const[n,o]=Be({height:window.innerHeight,width:window.innerWidth}),a=()=>{if(!e||!r)return;const c=Xl+e.getBoundingClientRect().height+60;t&&(t.style.height=`calc(100vh - ${c}px + 10px)`),i&&(i.style.height=`calc(100vh - ${c}px)`),r.style.height=`calc(100vh - ${c}px + 60px)`},l=c=>{o({height:window.innerHeight,width:window.innerWidth}),a()};return Va(()=>{window.addEventListener("resize",l),a()}),En(()=>{window.removeEventListener("resize",l)}),Ot(As(qi,()=>{a()})),(()=>{const c=c1();return ge(c,_(me,{get children(){return[_(Zd,{chatRef:u=>t=u,csRef:u=>i=u,adjustSize:a}),_(l1,{ref:u=>r=u})]}}),null),ge(c,_(pp,{ref:u=>e=u}),null),nt(()=>(s.visible()?"visible":"hidden")!=null?c.style.setProperty("visibility",s.visible()?"visible":"hidden"):c.style.removeProperty("visibility")),c})()},h1=({onOpenChange:s})=>{let e;const t=()=>{if(!e)return;const i=Ql(e.value);let r=Me()?.settings.rooms;r||(r=[]),r.push(i),Ft("rooms",r),Ft("currentRoom",e.value),nh([e.value]),s(!1)};return _(me,{direction:"column",gap:"medium",align:"center",get children(){return[_(qe,{label:"Room identifier",ref:i=>e=i}),_(fe,{onClick:t,children:"Connect"})]}})};var d1=function(){var s=document.getSelection();if(!s.rangeCount)return function(){};for(var e=document.activeElement,t=[],i=0;i<s.rangeCount;i++)t.push(s.getRangeAt(i));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return s.removeAllRanges(),function(){s.type==="Caret"&&s.removeAllRanges(),s.rangeCount||t.forEach(function(r){s.addRange(r)}),e&&e.focus()}},p1=d1,Al={"text/plain":"Text","text/html":"Url",default:"Text"},m1="Copy to clipboard: #{key}, Enter";function f1(s){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return s.replace(/#{\s*key\s*}/g,e)}function g1(s,e){var t,i,r,n,o,a,l=!1;e||(e={}),t=e.debug||!1;try{r=p1(),n=document.createRange(),o=document.getSelection(),a=document.createElement("span"),a.textContent=s,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(u){if(u.stopPropagation(),e.format)if(u.preventDefault(),typeof u.clipboardData>"u"){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=Al[e.format]||Al.default;window.clipboardData.setData(d,s)}else u.clipboardData.clearData(),u.clipboardData.setData(e.format,s);e.onCopy&&(u.preventDefault(),e.onCopy(u.clipboardData))}),document.body.appendChild(a),n.selectNodeContents(a),o.addRange(n);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");l=!0}catch(u){t&&console.error("unable to copy using execCommand: ",u),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",s),e.onCopy&&e.onCopy(window.clipboardData),l=!0}catch(d){t&&console.error("unable to copy using clipboardData: ",d),t&&console.error("falling back to prompt"),i=f1("message"in e?e.message:m1),window.prompt(i,s)}}finally{o&&(typeof o.removeRange=="function"?o.removeRange(n):o.removeAllRanges()),a&&document.body.removeChild(a),r()}return l}var v1=g1;const _1=sh(v1),x1=Ue("<div>"),qc=s=>{const e=Ol(()=>s.children),t={[s.eventTrigger??"onClick"]:()=>{const i=_1(s.text,s.options);s.onCopy&&s.onCopy(s.text,i)}};return(()=>{const i=x1();return Bt(i,t,!1,!0),ge(i,e),i})()},y1=Ue('<div title="Copy room id">'),b1=s=>{let e;const[t,i]=Be(!1),r=(d,h)=>{if(!{...sr()}[Me()?.settings.currentRoom])return;const g=rt();if(g){switch(d){case"name":g.name=h;break;case"bkguri":g.bkg=h;break;case"owner":g.owner=h;break}tc(g),nn()&&Hr(Wr(lh),g)}},n=()=>{!e||!e.value||e.value.trim()==""||(r("owner",e.value),s.onOpenChange(!1))},o=be(()=>{const d=rt();return d?d.name:""}),a=be(()=>{const d=rt();return d&&d.bkg?d.bkg:""}),l=()=>{i(!1);const d=rt();if(!d||d.owner!==Me()?.id){je("Cannot delete room. Room can be deleted only by an owner.",{icon:_(ch,{})});return}uh(d),s.onOpenChange(!1)},c=be(()=>{const d=rt();return d?d.id:""}),u=()=>{const d=rt();if(!d)return;let h=Me()?.settings.rooms;if(!h)return;h=h.filter(g=>g!==d.id),Ft("rooms",h),Ft("currentRoom",void 0);const f={...sr()};delete f[d.id],hh(f),s.onOpenChange(!1)};return _(me,{direction:"column",gap:"large",get children(){return[_(Se,{get when(){return nn()},get children(){return[_(qe,{label:"Room name",get value(){return o()},onChange:d=>r("name",d.target.value),style:{width:"20em"}}),_(qe,{label:"Room background URI",get value(){return a()},onChange:d=>r("bkguri",d.target.value),style:{width:"20em"}})]}}),_(Se,{get when(){return!nn()},get children(){return _(fe,{onClick:u,get children(){return[_(ah,{}),"Remove room from list"]}})}}),_(me,{justify:"space",grow:!0,get children(){return[_(qc,{get text(){return c()},options:{debug:!0},onCopy:()=>{je("Room ID copied to clipboard",{icon:_(Es,{})}),s.onOpenChange(!1)},eventTrigger:"onClick",get children(){const d=y1();return ge(d,_($a,{style:{fill:"currentcolor"}}),null),ge(d,_(Pe,{children:"Copy room ID "}),null),nt(()=>Je(d,ec({}))),d}}),_(Se,{get when(){return nn()},get children(){return _(bn,{onOpenChange:i,get open(){return t()},get children(){return[_(xn,{get children(){return _(Mt,{get children(){return[_(bt,{get children(){return _(fe,{get children(){return[_(zs,{get style(){return{fill:Ha.danger600}}}),_(Pe,{children:"Delete room"})]}})}}),_(wt,{children:"Delete room"})]}})}}),_(yn,{title:"Delete room",get children(){return[_(Pe,{children:"Are you sure? "}),_(Pe,{get children(){return["Delete room ",be(()=>rt()?.name),"?"]}}),_(me,{align:"center",justify:"center",gap:"large",style:{"margin-top":"10px"},get children(){return[_(fe,{onClick:()=>i(!1),children:"Cancel"}),_(fe,{onClick:l,children:"Delete"})]}})]}})]}})}})]}}),_(Se,{get when(){return nn()},get children(){return _(me,{align:"end",justify:"space",grow:!0,get children(){return[_(qe,{label:"Pass ownership to user",style:{flex:1,width:"16em"},ref:d=>e=d}),_(fe,{onClick:n,get children(){return _(oh,{})}})]}})}})]}})},w1=Ue('<div title="Copy user id">'),M1=({onOpenChange:s})=>{const e=p=>{const m=Me();m&&(m.name=p,Ys(m))},t=p=>{const m=Me();return!m||!m.settings||!m.settings[p]?!1:m.settings[p]},i=be(()=>dh.map(p=>({id:p,label:p}))),r=be(()=>ph.map(p=>({id:p,label:p}))),n=be(()=>{const p=Me();if(!p)return;const m=i().filter(v=>v.id==p.settings.diceColor);if(m.length>0)return m[0]}),o=be(()=>{const p=Me();if(!p)return;const m=r().filter(v=>v.id==p.settings.diceMaterial);if(m.length>0)return m[0]}),a=p=>{const m=Me();m&&(m.settings.diceColor=p.id,Ys(m))},l=p=>{const m=Me();m&&(m.settings.diceMaterial=p.id,Ys(m))},c=be(()=>[{id:"blue",label:"Blue"},{id:"blueDark",label:"Blue Dark"},{id:"brown",label:"Brown"},{id:"brownDark",label:"Brown Dark"},{id:"green",label:"Green"},{id:"greenDark",label:"Green Dark"},{id:"red",label:"Red"},{id:"redDark",label:"Red Dark"},{id:"teal",label:"Teal"},{id:"tealDark",label:"Teal Dark"}]),u=p=>{Ft("appTheme",p.id)},d=be(()=>{const p=c().filter(m=>m.id==Me()?.settings.appTheme);if(p.length>0)return p[0]}),h=be(()=>[{id:"Alegreya",label:"Alegreya"},{id:"Lato",label:"Lato"},{id:"Merriweather",label:"Merriweather"},{id:"Oxanium",label:"Oxanium"},{id:"Quattrocento",label:"Quattrocento"},{id:"Roboto",label:"Roboto"}]),f=p=>{Ft("appFont",p.id)},g=be(()=>{const p=h().filter(m=>m.id==Me()?.settings.appFont);if(p.length>0)return p[0]});return _(me,{direction:"column",gap:"medium",get children(){return[_(me,{align:"center",justify:"center",grow:!0,get children(){return _(qe,{label:"User name",title:"User name",get value(){return Me()?.name},style:{width:"20em"},onChange:p=>e(p.target.value)})}}),_(me,{align:"center",style:{"margin-bottom":"10px"},justify:"space",grow:!0,get children(){return[_(Se,{get when(){return Me()!==void 0},get children(){return _(qc,{get text(){return Me().id},onCopy:()=>{je("User ID copied to clipboard",{icon:_(Es,{})}),s(!1)},eventTrigger:"onClick",get children(){const p=w1();return ge(p,_($a,{style:{fill:"currentcolor"}}),null),ge(p,_(Pe,{children:"Copy user ID "}),null),nt(()=>Je(p,ec({}))),p}})}}),_(ji,{get children(){return[_($i,{get children(){return _(fe,{title:"Change password",get children(){return[_(mh,{}),"Change password"]}})}}),_(Xi,{title:"Change user password",get children(){return[_(qe,{label:"Old password",type:"password"}),_(qe,{label:"New password",type:"password"}),_(qe,{label:"Repeat new password",type:"password"})]}})]}})]}}),_(me,{justify:"space",grow:!0,get children(){return[_(Wi,{modal:!0,label:"UI Color Theme",labelLeft:!0,options:c,selected:d,onChange:u}),_(Wi,{modal:!0,label:"UI Font",labelLeft:!0,options:h,selected:g,onChange:f})]}}),_(me,{justify:"space",grow:!0,get children(){return[_(Wi,{modal:!0,label:"Dice color",labelLeft:!0,options:i,selected:n,onChange:a}),_(Wi,{label:"Dice material",labelLeft:!0,options:r,selected:o,onChange:l})]}}),_(me,{justify:"space",grow:!0,get children(){return[_(Un,{label:"Stronger roll",checked:()=>t("strongerRoll"),setChecked:p=>Ft("strongerRoll",p)}),_(Un,{label:"Smaller dice",checked:()=>t("smallerDice"),setChecked:p=>Ft("smallerDice",p)})]}}),_(me,{justify:"space",get children(){return[_(Un,{label:"Show roll total",checked:()=>t("showRollTotal"),setChecked:p=>Ft("showRollTotal",p)}),_(Un,{label:"Show roll success",checked:()=>t("showRollSuccess"),setChecked:p=>Ft("showRollSuccess",p)})]}})]}})};var Ia="_1vvalm53 _1qnkk9w3i _1qnkk9w3x _1qnkk9w1f _1qnkk9w1r _1qnkk9w26 _1qnkk9w2c _1qnkk9w63",S1="_1qnkk9w2o _1qnkk9w33 _1qnkk9w3i _1qnkk9w3x _1qnkk9w1f _1qnkk9w1r _1qnkk9w26 _1qnkk9w2c _1qnkk9w63";const E1=Ue("<div>"),T1=s=>{const[e,t]=Be(!1),[i,r]=Be(!1),[n,o]=Be(!1),a=be(()=>{const v=Me();return v?v.name:""}),l=()=>{const v=Me()?.id;if(!v)return;const x=Ql();x.name=`room-${wh(4,"-")}`,x.owner=v;const b=tc(x);Ft("rooms",Object.values(b).map(y=>y.id)),Ft("currentRoom",x.id)},c=be(()=>{const v=rt();if(!v)return;const b=Object.values(sr()).map(y=>({id:y.id,label:y.name})).find(y=>y.id==v.id);if(b)return b}),u=be(()=>Object.values(sr()).map(v=>({id:v.id,label:v.name}))),d=v=>{if(!v)return;const x=Object.values(sr()).find(b=>b.id==v.id);x&&Ft("currentRoom",x.id)};Ot(As(rt,()=>{const v=rt();v&&(Mh(),ic(v.id),Sh(v.id))}));const h=()=>{Eh(void 0),Th()},f=v=>{if(qi()==v){Zs("");return}Zs(""),Zs(v)},[g,p]=Be({name:"",pass:"",repeatPass:""}),m=()=>{if(g().name.trim()==""||g().pass.trim()==""||g().repeatPass.trim()==""){je("User data cannot be empty");return}if(g().pass!==g().repeatPass){je("Passwords do not match");return}Ch(g())};return(()=>{const v=E1(),x=s.ref;return typeof x=="function"?ti(x,v):s.ref=v,Je(v,S1),ge(v,_(me,{gap:"large",align:"center",get children(){return[_(me,{class:Ia,get children(){return[_(_s,{modal:!0,get open(){return n()},onOpenChange:o,get children(){return[_(xs,{title:"User settings",get children(){return _(fh,{style:{height:"1.5em",width:"1.5em"}})}}),_(ys,{title:"User settings",get children(){return _(M1,{onOpenChange:o})}})]}}),_($l,{component:"Text",get children(){return a()}})]}}),_(me,{class:Ia,get children(){return[_(Se,{get when(){return u().length>0},get children(){return[_(_s,{get open(){return e()},onOpenChange:t,get children(){return[_(xs,{title:"Room settings",get children(){return _(po,{style:{height:"1.5em",width:"1.5em"}})}}),_(ys,{get title(){return rt()?.name},get children(){return _(b1,{onOpenChange:t})}})]}}),_(Wi,{options:u,selected:c,onChange:d})]}}),_(Se,{get when(){return u().length<=0},get children(){return _(po,{title:"Rooms",style:{height:"1.5em",width:"1.5em"},fill:"currentColor"})}}),_(fe,{variant:"icon",title:"Create room",onClick:l,get children(){return _(ja,{})}}),_(_s,{get open(){return i()},onOpenChange:r,get children(){return[_(xs,{title:"Connect to room",get children(){return _(gh,{style:{height:"1.5em",width:"1.5em"}})}}),_(ys,{title:"Connect to room",get children(){return _(h1,{onOpenChange:r})}})]}})]}}),_(Se,{get when(){return!Ur()},get children(){return _(me,{gap:"medium",align:"center",class:Ia,get children(){return[_(Mt,{get children(){return[_(bt,{get children(){return _(fe,{variant:"icon",get toggled(){return qi()==="cs"},onClick:()=>f("cs"),get children(){return _(Kd,{size:24})}})}}),_(wt,{children:"Character sheets"})]}}),_(Se,{get when(){return qi()==="cs"},get children(){return _(Pe,{colorSchema:"accent",children:" Charsheets"})}})]}})}})]}}),null),ge(v,_(me,{gap:"large",align:"center",justify:"center",get children(){return[_(Se,{get when(){return Me()?.is_admin},get children(){return _(ji,{get children(){return[_($i,{get children(){return _(fe,{variant:"icon",title:"Add user",get children(){return _(vh,{})}})}}),_(Xi,{title:"Create new user",get children(){return[_(qe,{label:"User name",onChange:b=>p(y=>({...y,name:b.target.value}))}),_(qe,{label:"Password",type:"password",onChange:b=>p(y=>({...y,pass:b.target.value}))}),_(qe,{label:"Repeat password",type:"password",onChange:b=>p(y=>({...y,repeatPass:b.target.value}))}),_(_h,{get children(){return[_(Pe,{children:"Cancel"}),_(Pe,{onClick:m,children:"Create"})]}})]}})]}})}}),_(Se,{get when(){return be(()=>!!xh())()&&Object.values(mo()).length>0},get children(){return _(Mt,{get children(){return[_(bt,{get children(){return _(yh,{style:{fill:"currentcolor"}})}}),_(wt,{get children(){return _(Yr,{get each(){return Object.values(mo())},children:b=>_(Pe,{children:b})})}})]}})}}),_(fe,{variant:"icon",title:"Logout",onClick:h,get children(){return _(bh,{})}})]}}),null),v})()};var C1="_1lgmbyj1 _1qnkk9wj3 _1qnkk9wbr",A1="_1qnkk9w1f _1qnkk9w1u",R1=class{store;constructor(){this.store={}}attach(s,e){this.store[s]||(this.store[s]=[]),this.store[s].push(e)}fire(s,e){this.store[s]&&this.store[s].forEach(t=>{t(e)})}remove(s,e){e||delete this.store[s],this.store[s]&&(this.store[s]=this.store[s].filter(t=>e!==t))}},Or,Br;function jc(s){if(Br===void 0&&(s.hidden!==void 0?(Or="hidden",Br="visibilitychange"):s.mozHidden!==void 0?(Or="mozHidden",Br="mozvisibilitychange"):s.msHidden!==void 0?(Or="msHidden",Br="msvisibilitychange"):s.webkitHidden!==void 0&&(Or="webkitHidden",Br="webkitvisibilitychange"),Or===void 0))throw new Error("Unable to determine browser event.  This may be an incompatible browser.  See https://github.com/rosskevin/ifvisible#browsers")}function D1(s){return jc(s),s[Or]}function L1(s){return jc(s),Br}function vs(s,e){let t,i;return function(...r){return t||(t=!0,setTimeout(()=>t=!1,e),i=s.apply(this,r)),i}}var P1=class{id;ifvInstance;seconds;callback;constructor(s,e,t){this.ifvInstance=s,this.seconds=e,this.callback=t,this.start(),this.ifvInstance.on("statusChanged",i=>{i?.status==="active"?this.start():this.pause()})}stop(){clearInterval(this.id)}resume(){this.start()}pause(){this.stop()}start(){this.id!==void 0&&clearInterval(this.id),this.id=setInterval(this.callback,this.seconds*1e3)}},k1=class{status="active";timers=[];idleTime=3e4;idleStartedTime;win;doc;eventBus;winListeners;docListeners;focusListener;throttleDuration=500;constructor(s,e){this.win=s,this.doc=e,this.eventBus=new R1,this.trackChange(),this.reattach()}on(s,e){return this.eventBus.attach(s,e),this}off(s,e){return this.eventBus.remove(s,e),this}setIdleDuration(s){return this.idleTime=s*1e3,this.reattach(),this}getIdleDuration(){return this.idleTime}getIdleInfo(){const s=+new Date;let e;const t=this.idleStartedTime?s-this.idleStartedTime:0;if(this.status==="idle")e={isIdle:!0,idleFor:t,timeLeft:0,timeLeftPer:100};else{const i=this.idleStartedTime?this.idleStartedTime+this.idleTime-s:this.idleTime;e={isIdle:!1,idleFor:t,timeLeft:i,timeLeftPer:parseFloat((100-i*100/this.idleTime).toFixed(2))}}return e}setThrottleDuration(s){return this.throttleDuration=s,this.reattach,this}idle(s){return s?this.on("idle",s):(this.status="idle",this.eventBus.fire("idle"),this.eventBus.fire("statusChanged",{status:this.status})),this}blur(s){return s?this.on("blur",s):(this.status="hidden",this.eventBus.fire("blur"),this.eventBus.fire("statusChanged",{status:this.status})),this}focus(s){return s?this.on("focus",s):this.status!=="active"&&(this.status="active",this.eventBus.fire("focus"),this.eventBus.fire("wakeup"),this.eventBus.fire("statusChanged",{status:this.status})),this}wakeup(s){return s?this.on("wakeup",s):this.status!=="active"&&(this.status="active",this.eventBus.fire("wakeup"),this.eventBus.fire("statusChanged",{status:this.status})),this}onEvery(s,e){return new P1(this,s,e)}now(s){return s!==void 0?this.status===s:this.status==="active"}getStatus(){return this.status}detach(){if(this.winListeners!==void 0&&this.docListeners!==void 0&&this.focusListener!==void 0){for(const s of Object.getOwnPropertyNames(this.winListeners))this.win.removeEventListener(s,this.winListeners[s]);for(const s of Object.getOwnPropertyNames(this.docListeners))this.doc.removeEventListener(s,this.docListeners[s]);this.off("focus",this.focusListener)}this.winListeners=void 0,this.docListeners=void 0,this.focusListener=void 0}reattach(){this.detach(),this.winListeners={},this.docListeners={},this.focusListener=void 0,this.docListeners[L1(this.doc)]=vs(()=>this.trackChange(),this.throttleDuration);for(const s of["mousemove","mousedown","keyup","touchstart"])this.docListeners[s]=vs(()=>this.startIdleTimer(),this.throttleDuration);this.winListeners.scroll=vs(()=>this.startIdleTimer(),this.throttleDuration),this.focusListener=vs(()=>this.startIdleTimer(),this.throttleDuration);for(const s of Object.getOwnPropertyNames(this.docListeners))this.doc.addEventListener(s,this.docListeners[s]);for(const s of Object.getOwnPropertyNames(this.winListeners))this.win.addEventListener(s,this.winListeners[s]);this.focus(this.focusListener),this.startIdleTimer()}trackChange(){D1(this.doc)?this.blur():this.focus()}startIdleTimer(s){s instanceof MouseEvent&&s.movementX===0&&s.movementY===0||(this.timers.map(clearTimeout),this.timers.length=0,this.status==="idle"&&this.wakeup(),this.idleStartedTime=+new Date,this.timers.push(setTimeout(()=>{(this.status==="active"||this.status==="hidden")&&this.idle()},this.idleTime)))}},$c=new k1(window,document);window.ifvisible=$c;const I1=Ue('<main><div id="app">');function z1(){const s=()=>{const e=rt();e&&ic(e.id)};return $c.on("wakeup",()=>{s()}),(()=>{const e=I1(),t=e.firstChild;return Je(e,C1),ti(i=>i,t),Je(t,A1),ge(t,_(T1,{ref:i=>i}),null),ge(t,_(me,{style:{width:"100vw"},get children(){return[_(u1,{visible:()=>!0}),_(Se,{get when(){return qi()==="cs"},get children(){return _(tp,{})}})]}}),null),ge(t,_(xd,{}),null),e})()}export{z1 as default};
