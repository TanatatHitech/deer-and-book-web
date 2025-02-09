import{aF as Pr,r as p,u as Lr,s as Mr,be as gt,bf as A,bg as Rr,j as m,b as i,L as Dr,a4 as Vr,S as Ur}from"./index-b88e1732.js";import{C as re}from"./Highlight-71997208.js";import{I as ae}from"./IconCode-24e24bcd.js";var Gr=function(t){return Br(t)&&!qr(t)};function Br(e){return!!e&&typeof e=="object"}function qr(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Hr(e)}var zr=typeof Symbol=="function"&&Symbol.for,Yr=zr?Symbol.for("react.element"):60103;function Hr(e){return e.$$typeof===Yr}function Zr(e){return Array.isArray(e)?[]:{}}function Se(e,t){return t.clone!==!1&&t.isMergeableObject(e)?fe(Zr(e),e,t):e}function Kr(e,t,r){return e.concat(t).map(function(a){return Se(a,r)})}function Wr(e,t,r){var a={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(s){a[s]=Se(e[s],r)}),Object.keys(t).forEach(function(s){!r.isMergeableObject(t[s])||!e[s]?a[s]=Se(t[s],r):a[s]=fe(e[s],t[s],r)}),a}function fe(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Kr,r.isMergeableObject=r.isMergeableObject||Gr;var a=Array.isArray(t),s=Array.isArray(e),l=a===s;return l?a?r.arrayMerge(e,t,r):Wr(e,t,r):Se(t,r)}fe.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,s){return fe(a,s,r)},{})};var Ue=fe,Xr=typeof global=="object"&&global&&global.Object===Object&&global;const Ht=Xr;var Jr=typeof self=="object"&&self&&self.Object===Object&&self,Qr=Ht||Jr||Function("return this")();const V=Qr;var ea=V.Symbol;const B=ea;var Zt=Object.prototype,ta=Zt.hasOwnProperty,ra=Zt.toString,ce=B?B.toStringTag:void 0;function aa(e){var t=ta.call(e,ce),r=e[ce];try{e[ce]=void 0;var a=!0}catch{}var s=ra.call(e);return a&&(t?e[ce]=r:delete e[ce]),s}var ia=Object.prototype,na=ia.toString;function sa(e){return na.call(e)}var oa="[object Null]",la="[object Undefined]",yt=B?B.toStringTag:void 0;function W(e){return e==null?e===void 0?la:oa:yt&&yt in Object(e)?aa(e):sa(e)}function Kt(e,t){return function(r){return e(t(r))}}var ca=Kt(Object.getPrototypeOf,Object);const Ze=ca;function X(e){return e!=null&&typeof e=="object"}var da="[object Object]",ua=Function.prototype,ma=Object.prototype,Wt=ua.toString,fa=ma.hasOwnProperty,pa=Wt.call(Object);function Nt(e){if(!X(e)||W(e)!=da)return!1;var t=Ze(e);if(t===null)return!0;var r=fa.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Wt.call(r)==pa}function ha(){this.__data__=[],this.size=0}function Xt(e,t){return e===t||e!==e&&t!==t}function Fe(e,t){for(var r=e.length;r--;)if(Xt(e[r][0],t))return r;return-1}var ba=Array.prototype,va=ba.splice;function ga(e){var t=this.__data__,r=Fe(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():va.call(t,r,1),--this.size,!0}function ya(e){var t=this.__data__,r=Fe(t,e);return r<0?void 0:t[r][1]}function Na(e){return Fe(this.__data__,e)>-1}function xa(e,t){var r=this.__data__,a=Fe(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}function G(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}G.prototype.clear=ha;G.prototype.delete=ga;G.prototype.get=ya;G.prototype.has=Na;G.prototype.set=xa;function Sa(){this.__data__=new G,this.size=0}function Fa(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Ea(e){return this.__data__.get(e)}function Ta(e){return this.__data__.has(e)}function be(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var wa="[object AsyncFunction]",Ca="[object Function]",_a="[object GeneratorFunction]",ka="[object Proxy]";function Jt(e){if(!be(e))return!1;var t=W(e);return t==Ca||t==_a||t==wa||t==ka}var Aa=V["__core-js_shared__"];const Me=Aa;var xt=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ja(e){return!!xt&&xt in e}var Oa=Function.prototype,$a=Oa.toString;function J(e){if(e!=null){try{return $a.call(e)}catch{}try{return e+""}catch{}}return""}var Ia=/[\\^$.*+?()[\]{}|]/g,Pa=/^\[object .+?Constructor\]$/,La=Function.prototype,Ma=Object.prototype,Ra=La.toString,Da=Ma.hasOwnProperty,Va=RegExp("^"+Ra.call(Da).replace(Ia,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ua(e){if(!be(e)||ja(e))return!1;var t=Jt(e)?Va:Pa;return t.test(J(e))}function Ga(e,t){return e==null?void 0:e[t]}function Q(e,t){var r=Ga(e,t);return Ua(r)?r:void 0}var Ba=Q(V,"Map");const pe=Ba;var qa=Q(Object,"create");const he=qa;function za(){this.__data__=he?he(null):{},this.size=0}function Ya(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ha="__lodash_hash_undefined__",Za=Object.prototype,Ka=Za.hasOwnProperty;function Wa(e){var t=this.__data__;if(he){var r=t[e];return r===Ha?void 0:r}return Ka.call(t,e)?t[e]:void 0}var Xa=Object.prototype,Ja=Xa.hasOwnProperty;function Qa(e){var t=this.__data__;return he?t[e]!==void 0:Ja.call(t,e)}var ei="__lodash_hash_undefined__";function ti(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=he&&t===void 0?ei:t,this}function K(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}K.prototype.clear=za;K.prototype.delete=Ya;K.prototype.get=Wa;K.prototype.has=Qa;K.prototype.set=ti;function ri(){this.size=0,this.__data__={hash:new K,map:new(pe||G),string:new K}}function ai(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Ee(e,t){var r=e.__data__;return ai(t)?r[typeof t=="string"?"string":"hash"]:r.map}function ii(e){var t=Ee(this,e).delete(e);return this.size-=t?1:0,t}function ni(e){return Ee(this,e).get(e)}function si(e){return Ee(this,e).has(e)}function oi(e,t){var r=Ee(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}function q(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}q.prototype.clear=ri;q.prototype.delete=ii;q.prototype.get=ni;q.prototype.has=si;q.prototype.set=oi;var li=200;function ci(e,t){var r=this.__data__;if(r instanceof G){var a=r.__data__;if(!pe||a.length<li-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new q(a)}return r.set(e,t),this.size=r.size,this}function oe(e){var t=this.__data__=new G(e);this.size=t.size}oe.prototype.clear=Sa;oe.prototype.delete=Fa;oe.prototype.get=Ea;oe.prototype.has=Ta;oe.prototype.set=ci;function di(e,t){for(var r=-1,a=e==null?0:e.length;++r<a&&t(e[r],r,e)!==!1;);return e}var ui=function(){try{var e=Q(Object,"defineProperty");return e({},"",{}),e}catch{}}();const St=ui;function Qt(e,t,r){t=="__proto__"&&St?St(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var mi=Object.prototype,fi=mi.hasOwnProperty;function er(e,t,r){var a=e[t];(!(fi.call(e,t)&&Xt(a,r))||r===void 0&&!(t in e))&&Qt(e,t,r)}function Te(e,t,r,a){var s=!r;r||(r={});for(var l=-1,c=t.length;++l<c;){var o=t[l],d=a?a(r[o],e[o],o,r,e):void 0;d===void 0&&(d=e[o]),s?Qt(r,o,d):er(r,o,d)}return r}function pi(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}var hi="[object Arguments]";function Ft(e){return X(e)&&W(e)==hi}var tr=Object.prototype,bi=tr.hasOwnProperty,vi=tr.propertyIsEnumerable,gi=Ft(function(){return arguments}())?Ft:function(e){return X(e)&&bi.call(e,"callee")&&!vi.call(e,"callee")};const yi=gi;var Ni=Array.isArray;const ve=Ni;function xi(){return!1}var rr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Et=rr&&typeof module=="object"&&module&&!module.nodeType&&module,Si=Et&&Et.exports===rr,Tt=Si?V.Buffer:void 0,Fi=Tt?Tt.isBuffer:void 0,Ei=Fi||xi;const ar=Ei;var Ti=9007199254740991,wi=/^(?:0|[1-9]\d*)$/;function Ci(e,t){var r=typeof e;return t=t??Ti,!!t&&(r=="number"||r!="symbol"&&wi.test(e))&&e>-1&&e%1==0&&e<t}var _i=9007199254740991;function ir(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=_i}var ki="[object Arguments]",Ai="[object Array]",ji="[object Boolean]",Oi="[object Date]",$i="[object Error]",Ii="[object Function]",Pi="[object Map]",Li="[object Number]",Mi="[object Object]",Ri="[object RegExp]",Di="[object Set]",Vi="[object String]",Ui="[object WeakMap]",Gi="[object ArrayBuffer]",Bi="[object DataView]",qi="[object Float32Array]",zi="[object Float64Array]",Yi="[object Int8Array]",Hi="[object Int16Array]",Zi="[object Int32Array]",Ki="[object Uint8Array]",Wi="[object Uint8ClampedArray]",Xi="[object Uint16Array]",Ji="[object Uint32Array]",F={};F[qi]=F[zi]=F[Yi]=F[Hi]=F[Zi]=F[Ki]=F[Wi]=F[Xi]=F[Ji]=!0;F[ki]=F[Ai]=F[Gi]=F[ji]=F[Bi]=F[Oi]=F[$i]=F[Ii]=F[Pi]=F[Li]=F[Mi]=F[Ri]=F[Di]=F[Vi]=F[Ui]=!1;function Qi(e){return X(e)&&ir(e.length)&&!!F[W(e)]}function Ke(e){return function(t){return e(t)}}var nr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ue=nr&&typeof module=="object"&&module&&!module.nodeType&&module,en=ue&&ue.exports===nr,Re=en&&Ht.process,tn=function(){try{var e=ue&&ue.require&&ue.require("util").types;return e||Re&&Re.binding&&Re.binding("util")}catch{}}();const se=tn;var wt=se&&se.isTypedArray,rn=wt?Ke(wt):Qi;const an=rn;var nn=Object.prototype,sn=nn.hasOwnProperty;function sr(e,t){var r=ve(e),a=!r&&yi(e),s=!r&&!a&&ar(e),l=!r&&!a&&!s&&an(e),c=r||a||s||l,o=c?pi(e.length,String):[],d=o.length;for(var v in e)(t||sn.call(e,v))&&!(c&&(v=="length"||s&&(v=="offset"||v=="parent")||l&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Ci(v,d)))&&o.push(v);return o}var on=Object.prototype;function We(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||on;return e===r}var ln=Kt(Object.keys,Object);const cn=ln;var dn=Object.prototype,un=dn.hasOwnProperty;function mn(e){if(!We(e))return cn(e);var t=[];for(var r in Object(e))un.call(e,r)&&r!="constructor"&&t.push(r);return t}function or(e){return e!=null&&ir(e.length)&&!Jt(e)}function Xe(e){return or(e)?sr(e):mn(e)}function fn(e,t){return e&&Te(t,Xe(t),e)}function pn(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var hn=Object.prototype,bn=hn.hasOwnProperty;function vn(e){if(!be(e))return pn(e);var t=We(e),r=[];for(var a in e)a=="constructor"&&(t||!bn.call(e,a))||r.push(a);return r}function Je(e){return or(e)?sr(e,!0):vn(e)}function gn(e,t){return e&&Te(t,Je(t),e)}var lr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ct=lr&&typeof module=="object"&&module&&!module.nodeType&&module,yn=Ct&&Ct.exports===lr,_t=yn?V.Buffer:void 0,kt=_t?_t.allocUnsafe:void 0;function Nn(e,t){if(t)return e.slice();var r=e.length,a=kt?kt(r):new e.constructor(r);return e.copy(a),a}function cr(e,t){var r=-1,a=e.length;for(t||(t=Array(a));++r<a;)t[r]=e[r];return t}function xn(e,t){for(var r=-1,a=e==null?0:e.length,s=0,l=[];++r<a;){var c=e[r];t(c,r,e)&&(l[s++]=c)}return l}function dr(){return[]}var Sn=Object.prototype,Fn=Sn.propertyIsEnumerable,At=Object.getOwnPropertySymbols,En=At?function(e){return e==null?[]:(e=Object(e),xn(At(e),function(t){return Fn.call(e,t)}))}:dr;const Qe=En;function Tn(e,t){return Te(e,Qe(e),t)}function ur(e,t){for(var r=-1,a=t.length,s=e.length;++r<a;)e[s+r]=t[r];return e}var wn=Object.getOwnPropertySymbols,Cn=wn?function(e){for(var t=[];e;)ur(t,Qe(e)),e=Ze(e);return t}:dr;const mr=Cn;function _n(e,t){return Te(e,mr(e),t)}function fr(e,t,r){var a=t(e);return ve(e)?a:ur(a,r(e))}function kn(e){return fr(e,Xe,Qe)}function An(e){return fr(e,Je,mr)}var jn=Q(V,"DataView");const Ge=jn;var On=Q(V,"Promise");const Be=On;var $n=Q(V,"Set");const qe=$n;var In=Q(V,"WeakMap");const ze=In;var jt="[object Map]",Pn="[object Object]",Ot="[object Promise]",$t="[object Set]",It="[object WeakMap]",Pt="[object DataView]",Ln=J(Ge),Mn=J(pe),Rn=J(Be),Dn=J(qe),Vn=J(ze),Y=W;(Ge&&Y(new Ge(new ArrayBuffer(1)))!=Pt||pe&&Y(new pe)!=jt||Be&&Y(Be.resolve())!=Ot||qe&&Y(new qe)!=$t||ze&&Y(new ze)!=It)&&(Y=function(e){var t=W(e),r=t==Pn?e.constructor:void 0,a=r?J(r):"";if(a)switch(a){case Ln:return Pt;case Mn:return jt;case Rn:return Ot;case Dn:return $t;case Vn:return It}return t});const et=Y;var Un=Object.prototype,Gn=Un.hasOwnProperty;function Bn(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&Gn.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var qn=V.Uint8Array;const Lt=qn;function tt(e){var t=new e.constructor(e.byteLength);return new Lt(t).set(new Lt(e)),t}function zn(e,t){var r=t?tt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Yn=/\w*$/;function Hn(e){var t=new e.constructor(e.source,Yn.exec(e));return t.lastIndex=e.lastIndex,t}var Mt=B?B.prototype:void 0,Rt=Mt?Mt.valueOf:void 0;function Zn(e){return Rt?Object(Rt.call(e)):{}}function Kn(e,t){var r=t?tt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Wn="[object Boolean]",Xn="[object Date]",Jn="[object Map]",Qn="[object Number]",es="[object RegExp]",ts="[object Set]",rs="[object String]",as="[object Symbol]",is="[object ArrayBuffer]",ns="[object DataView]",ss="[object Float32Array]",os="[object Float64Array]",ls="[object Int8Array]",cs="[object Int16Array]",ds="[object Int32Array]",us="[object Uint8Array]",ms="[object Uint8ClampedArray]",fs="[object Uint16Array]",ps="[object Uint32Array]";function hs(e,t,r){var a=e.constructor;switch(t){case is:return tt(e);case Wn:case Xn:return new a(+e);case ns:return zn(e,r);case ss:case os:case ls:case cs:case ds:case us:case ms:case fs:case ps:return Kn(e,r);case Jn:return new a;case Qn:case rs:return new a(e);case es:return Hn(e);case ts:return new a;case as:return Zn(e)}}var Dt=Object.create,bs=function(){function e(){}return function(t){if(!be(t))return{};if(Dt)return Dt(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const vs=bs;function gs(e){return typeof e.constructor=="function"&&!We(e)?vs(Ze(e)):{}}var ys="[object Map]";function Ns(e){return X(e)&&et(e)==ys}var Vt=se&&se.isMap,xs=Vt?Ke(Vt):Ns;const Ss=xs;var Fs="[object Set]";function Es(e){return X(e)&&et(e)==Fs}var Ut=se&&se.isSet,Ts=Ut?Ke(Ut):Es;const ws=Ts;var Cs=1,_s=2,ks=4,pr="[object Arguments]",As="[object Array]",js="[object Boolean]",Os="[object Date]",$s="[object Error]",hr="[object Function]",Is="[object GeneratorFunction]",Ps="[object Map]",Ls="[object Number]",br="[object Object]",Ms="[object RegExp]",Rs="[object Set]",Ds="[object String]",Vs="[object Symbol]",Us="[object WeakMap]",Gs="[object ArrayBuffer]",Bs="[object DataView]",qs="[object Float32Array]",zs="[object Float64Array]",Ys="[object Int8Array]",Hs="[object Int16Array]",Zs="[object Int32Array]",Ks="[object Uint8Array]",Ws="[object Uint8ClampedArray]",Xs="[object Uint16Array]",Js="[object Uint32Array]",S={};S[pr]=S[As]=S[Gs]=S[Bs]=S[js]=S[Os]=S[qs]=S[zs]=S[Ys]=S[Hs]=S[Zs]=S[Ps]=S[Ls]=S[br]=S[Ms]=S[Rs]=S[Ds]=S[Vs]=S[Ks]=S[Ws]=S[Xs]=S[Js]=!0;S[$s]=S[hr]=S[Us]=!1;function me(e,t,r,a,s,l){var c,o=t&Cs,d=t&_s,v=t&ks;if(r&&(c=s?r(e,a,s,l):r(e)),c!==void 0)return c;if(!be(e))return e;var _=ve(e);if(_){if(c=Bn(e),!o)return cr(e,c)}else{var O=et(e),h=O==hr||O==Is;if(ar(e))return Nn(e,o);if(O==br||O==pr||h&&!s){if(c=d||h?{}:gs(e),!o)return d?_n(e,gn(c,e)):Tn(e,fn(c,e))}else{if(!S[O])return s?e:{};c=hs(e,O,o)}}l||(l=new oe);var w=l.get(e);if(w)return w;l.set(e,c),ws(e)?e.forEach(function(k){c.add(me(k,t,r,k,e,l))}):Ss(e)&&e.forEach(function(k,T){c.set(T,me(k,t,r,T,e,l))});var L=v?d?An:kn:d?Je:Xe,$=_?void 0:L(e);return di($||e,function(k,T){$&&(T=k,k=e[T]),er(c,T,me(k,t,r,T,e,l))}),c}var Qs=1,eo=4;function Ne(e){return me(e,Qs|eo)}var Gt=Array.isArray,Bt=Object.keys,to=Object.prototype.hasOwnProperty,ro=typeof Element<"u";function Ye(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=Gt(e),a=Gt(t),s,l,c;if(r&&a){if(l=e.length,l!=t.length)return!1;for(s=l;s--!==0;)if(!Ye(e[s],t[s]))return!1;return!0}if(r!=a)return!1;var o=e instanceof Date,d=t instanceof Date;if(o!=d)return!1;if(o&&d)return e.getTime()==t.getTime();var v=e instanceof RegExp,_=t instanceof RegExp;if(v!=_)return!1;if(v&&_)return e.toString()==t.toString();var O=Bt(e);if(l=O.length,l!==Bt(t).length)return!1;for(s=l;s--!==0;)if(!to.call(t,O[s]))return!1;if(ro&&e instanceof Element&&t instanceof Element)return e===t;for(s=l;s--!==0;)if(c=O[s],!(c==="_owner"&&e.$$typeof)&&!Ye(e[c],t[c]))return!1;return!0}return e!==e&&t!==t}var ao=function(t,r){try{return Ye(t,r)}catch(a){if(a.message&&a.message.match(/stack|recursion/i)||a.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",a.name,a.message),!1;throw a}};const H=Pr(ao);var io=!0;function no(e,t){if(!io){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}var so=4;function qt(e){return me(e,so)}function vr(e,t){for(var r=-1,a=e==null?0:e.length,s=Array(a);++r<a;)s[r]=t(e[r],r,e);return s}var oo="[object Symbol]";function rt(e){return typeof e=="symbol"||X(e)&&W(e)==oo}var lo="Expected a function";function at(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(lo);var r=function(){var a=arguments,s=t?t.apply(this,a):a[0],l=r.cache;if(l.has(s))return l.get(s);var c=e.apply(this,a);return r.cache=l.set(s,c)||l,c};return r.cache=new(at.Cache||q),r}at.Cache=q;var co=500;function uo(e){var t=at(e,function(a){return r.size===co&&r.clear(),a}),r=t.cache;return t}var mo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fo=/\\(\\)?/g,po=uo(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(mo,function(r,a,s,l){t.push(s?l.replace(fo,"$1"):a||r)}),t});const ho=po;var bo=1/0;function vo(e){if(typeof e=="string"||rt(e))return e;var t=e+"";return t=="0"&&1/e==-bo?"-0":t}var go=1/0,zt=B?B.prototype:void 0,Yt=zt?zt.toString:void 0;function gr(e){if(typeof e=="string")return e;if(ve(e))return vr(e,gr)+"";if(rt(e))return Yt?Yt.call(e):"";var t=e+"";return t=="0"&&1/e==-go?"-0":t}function yo(e){return e==null?"":gr(e)}function yr(e){return ve(e)?vr(e,vo):rt(e)?[e]:cr(ho(yo(e)))}function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},E.apply(this,arguments)}function ne(e,t){if(e==null)return{};var r={},a=Object.keys(e),s,l;for(l=0;l<a.length;l++)s=a[l],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}var we=p.createContext(void 0);we.displayName="FormikContext";var No=we.Provider;we.Consumer;function Nr(){var e=p.useContext(we);return e||no(!1),e}var P=function(t){return typeof t=="function"},Ce=function(t){return t!==null&&typeof t=="object"},xo=function(t){return String(Math.floor(Number(t)))===t},De=function(t){return Object.prototype.toString.call(t)==="[object String]"},So=function(t){return p.Children.count(t)===0},Ve=function(t){return Ce(t)&&P(t.then)};function I(e,t,r,a){a===void 0&&(a=0);for(var s=yr(t);e&&a<s.length;)e=e[s[a++]];return a!==s.length&&!e||e===void 0?r:e}function Z(e,t,r){for(var a=qt(e),s=a,l=0,c=yr(t);l<c.length-1;l++){var o=c[l],d=I(e,c.slice(0,l+1));if(d&&(Ce(d)||Array.isArray(d)))s=s[o]=qt(d);else{var v=c[l+1];s=s[o]=xo(v)&&Number(v)>=0?[]:{}}}return(l===0?e:s)[c[l]]===r?e:(r===void 0?delete s[c[l]]:s[c[l]]=r,l===0&&r===void 0&&delete a[c[l]],a)}function xr(e,t,r,a){r===void 0&&(r=new WeakMap),a===void 0&&(a={});for(var s=0,l=Object.keys(e);s<l.length;s++){var c=l[s],o=e[c];Ce(o)?r.get(o)||(r.set(o,!0),a[c]=Array.isArray(o)?[]:{},xr(o,t,r,a[c])):a[c]=t}return a}function Fo(e,t){switch(t.type){case"SET_VALUES":return E({},e,{values:t.payload});case"SET_TOUCHED":return E({},e,{touched:t.payload});case"SET_ERRORS":return H(e.errors,t.payload)?e:E({},e,{errors:t.payload});case"SET_STATUS":return E({},e,{status:t.payload});case"SET_ISSUBMITTING":return E({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return E({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return E({},e,{values:Z(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return E({},e,{touched:Z(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return E({},e,{errors:Z(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return E({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return E({},e,{touched:xr(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return E({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return E({},e,{isSubmitting:!1});default:return e}}var z={},xe={};function Eo(e){var t=e.validateOnChange,r=t===void 0?!0:t,a=e.validateOnBlur,s=a===void 0?!0:a,l=e.validateOnMount,c=l===void 0?!1:l,o=e.isInitialValid,d=e.enableReinitialize,v=d===void 0?!1:d,_=e.onSubmit,O=ne(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),h=E({validateOnChange:r,validateOnBlur:s,validateOnMount:c,onSubmit:_},O),w=p.useRef(h.initialValues),L=p.useRef(h.initialErrors||z),$=p.useRef(h.initialTouched||xe),k=p.useRef(h.initialStatus),T=p.useRef(!1),M=p.useRef({});p.useEffect(function(){return T.current=!0,function(){T.current=!1}},[]);var _e=p.useState(0),ke=_e[1],ge=p.useRef({values:Ne(h.initialValues),errors:Ne(h.initialErrors)||z,touched:Ne(h.initialTouched)||xe,status:Ne(h.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),x=ge.current,N=p.useCallback(function(n){var u=ge.current;ge.current=Fo(u,n),u!==ge.current&&ke(function(f){return f+1})},[]),it=p.useCallback(function(n,u){return new Promise(function(f,b){var g=h.validate(n,u);g==null?f(z):Ve(g)?g.then(function(y){f(y||z)},function(y){b(y)}):f(g)})},[h.validate]),Ae=p.useCallback(function(n,u){var f=h.validationSchema,b=P(f)?f(u):f,g=u&&b.validateAt?b.validateAt(u,n):wo(n,b);return new Promise(function(y,C){g.then(function(){y(z)},function(U){U.name==="ValidationError"?y(To(U)):C(U)})})},[h.validationSchema]),nt=p.useCallback(function(n,u){return new Promise(function(f){return f(M.current[n].validate(u))})},[]),st=p.useCallback(function(n){var u=Object.keys(M.current).filter(function(b){return P(M.current[b].validate)}),f=u.length>0?u.map(function(b){return nt(b,I(n,b))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(f).then(function(b){return b.reduce(function(g,y,C){return y==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||y&&(g=Z(g,u[C],y)),g},{})})},[nt]),Sr=p.useCallback(function(n){return Promise.all([st(n),h.validationSchema?Ae(n):{},h.validate?it(n):{}]).then(function(u){var f=u[0],b=u[1],g=u[2],y=Ue.all([f,b,g],{arrayMerge:Co});return y})},[h.validate,h.validationSchema,st,it,Ae]),D=R(function(n){return n===void 0&&(n=x.values),N({type:"SET_ISVALIDATING",payload:!0}),Sr(n).then(function(u){return T.current&&(N({type:"SET_ISVALIDATING",payload:!1}),N({type:"SET_ERRORS",payload:u})),u})});p.useEffect(function(){c&&T.current===!0&&H(w.current,h.initialValues)&&D(w.current)},[c,D]);var le=p.useCallback(function(n){var u=n&&n.values?n.values:w.current,f=n&&n.errors?n.errors:L.current?L.current:h.initialErrors||{},b=n&&n.touched?n.touched:$.current?$.current:h.initialTouched||{},g=n&&n.status?n.status:k.current?k.current:h.initialStatus;w.current=u,L.current=f,$.current=b,k.current=g;var y=function(){N({type:"RESET_FORM",payload:{isSubmitting:!!n&&!!n.isSubmitting,errors:f,touched:b,status:g,values:u,isValidating:!!n&&!!n.isValidating,submitCount:n&&n.submitCount&&typeof n.submitCount=="number"?n.submitCount:0}})};if(h.onReset){var C=h.onReset(x.values,bt);Ve(C)?C.then(y):y()}else y()},[h.initialErrors,h.initialStatus,h.initialTouched,h.onReset]);p.useEffect(function(){T.current===!0&&!H(w.current,h.initialValues)&&v&&(w.current=h.initialValues,le(),c&&D(w.current))},[v,h.initialValues,le,c,D]),p.useEffect(function(){v&&T.current===!0&&!H(L.current,h.initialErrors)&&(L.current=h.initialErrors||z,N({type:"SET_ERRORS",payload:h.initialErrors||z}))},[v,h.initialErrors]),p.useEffect(function(){v&&T.current===!0&&!H($.current,h.initialTouched)&&($.current=h.initialTouched||xe,N({type:"SET_TOUCHED",payload:h.initialTouched||xe}))},[v,h.initialTouched]),p.useEffect(function(){v&&T.current===!0&&!H(k.current,h.initialStatus)&&(k.current=h.initialStatus,N({type:"SET_STATUS",payload:h.initialStatus}))},[v,h.initialStatus,h.initialTouched]);var ot=R(function(n){if(M.current[n]&&P(M.current[n].validate)){var u=I(x.values,n),f=M.current[n].validate(u);return Ve(f)?(N({type:"SET_ISVALIDATING",payload:!0}),f.then(function(b){return b}).then(function(b){N({type:"SET_FIELD_ERROR",payload:{field:n,value:b}}),N({type:"SET_ISVALIDATING",payload:!1})})):(N({type:"SET_FIELD_ERROR",payload:{field:n,value:f}}),Promise.resolve(f))}else if(h.validationSchema)return N({type:"SET_ISVALIDATING",payload:!0}),Ae(x.values,n).then(function(b){return b}).then(function(b){N({type:"SET_FIELD_ERROR",payload:{field:n,value:I(b,n)}}),N({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Fr=p.useCallback(function(n,u){var f=u.validate;M.current[n]={validate:f}},[]),Er=p.useCallback(function(n){delete M.current[n]},[]),lt=R(function(n,u){N({type:"SET_TOUCHED",payload:n});var f=u===void 0?s:u;return f?D(x.values):Promise.resolve()}),ct=p.useCallback(function(n){N({type:"SET_ERRORS",payload:n})},[]),dt=R(function(n,u){var f=P(n)?n(x.values):n;N({type:"SET_VALUES",payload:f});var b=u===void 0?r:u;return b?D(f):Promise.resolve()}),ye=p.useCallback(function(n,u){N({type:"SET_FIELD_ERROR",payload:{field:n,value:u}})},[]),ee=R(function(n,u,f){N({type:"SET_FIELD_VALUE",payload:{field:n,value:u}});var b=f===void 0?r:f;return b?D(Z(x.values,n,u)):Promise.resolve()}),ut=p.useCallback(function(n,u){var f=u,b=n,g;if(!De(n)){n.persist&&n.persist();var y=n.target?n.target:n.currentTarget,C=y.type,U=y.name,Pe=y.id,Le=y.value,$r=y.checked,jo=y.outerHTML,vt=y.options,Ir=y.multiple;f=u||U||Pe,b=/number|range/.test(C)?(g=parseFloat(Le),isNaN(g)?"":g):/checkbox/.test(C)?ko(I(x.values,f),$r,Le):vt&&Ir?_o(vt):Le}f&&ee(f,b)},[ee,x.values]),je=R(function(n){if(De(n))return function(u){return ut(u,n)};ut(n)}),te=R(function(n,u,f){u===void 0&&(u=!0),N({type:"SET_FIELD_TOUCHED",payload:{field:n,value:u}});var b=f===void 0?s:f;return b?D(x.values):Promise.resolve()}),mt=p.useCallback(function(n,u){n.persist&&n.persist();var f=n.target,b=f.name,g=f.id,y=f.outerHTML,C=u||b||g;te(C,!0)},[te]),Oe=R(function(n){if(De(n))return function(u){return mt(u,n)};mt(n)}),ft=p.useCallback(function(n){P(n)?N({type:"SET_FORMIK_STATE",payload:n}):N({type:"SET_FORMIK_STATE",payload:function(){return n}})},[]),pt=p.useCallback(function(n){N({type:"SET_STATUS",payload:n})},[]),ht=p.useCallback(function(n){N({type:"SET_ISSUBMITTING",payload:n})},[]),$e=R(function(){return N({type:"SUBMIT_ATTEMPT"}),D().then(function(n){var u=n instanceof Error,f=!u&&Object.keys(n).length===0;if(f){var b;try{if(b=wr(),b===void 0)return}catch(g){throw g}return Promise.resolve(b).then(function(g){return T.current&&N({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(T.current)throw N({type:"SUBMIT_FAILURE"}),g})}else if(T.current&&(N({type:"SUBMIT_FAILURE"}),u))throw n})}),Tr=R(function(n){n&&n.preventDefault&&P(n.preventDefault)&&n.preventDefault(),n&&n.stopPropagation&&P(n.stopPropagation)&&n.stopPropagation(),$e().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),bt={resetForm:le,validateForm:D,validateField:ot,setErrors:ct,setFieldError:ye,setFieldTouched:te,setFieldValue:ee,setStatus:pt,setSubmitting:ht,setTouched:lt,setValues:dt,setFormikState:ft,submitForm:$e},wr=R(function(){return _(x.values,bt)}),Cr=R(function(n){n&&n.preventDefault&&P(n.preventDefault)&&n.preventDefault(),n&&n.stopPropagation&&P(n.stopPropagation)&&n.stopPropagation(),le()}),_r=p.useCallback(function(n){return{value:I(x.values,n),error:I(x.errors,n),touched:!!I(x.touched,n),initialValue:I(w.current,n),initialTouched:!!I($.current,n),initialError:I(L.current,n)}},[x.errors,x.touched,x.values]),kr=p.useCallback(function(n){return{setValue:function(f,b){return ee(n,f,b)},setTouched:function(f,b){return te(n,f,b)},setError:function(f){return ye(n,f)}}},[ee,te,ye]),Ar=p.useCallback(function(n){var u=Ce(n),f=u?n.name:n,b=I(x.values,f),g={name:f,value:b,onChange:je,onBlur:Oe};if(u){var y=n.type,C=n.value,U=n.as,Pe=n.multiple;y==="checkbox"?C===void 0?g.checked=!!b:(g.checked=!!(Array.isArray(b)&&~b.indexOf(C)),g.value=C):y==="radio"?(g.checked=b===C,g.value=C):U==="select"&&Pe&&(g.value=g.value||[],g.multiple=!0)}return g},[Oe,je,x.values]),Ie=p.useMemo(function(){return!H(w.current,x.values)},[w.current,x.values]),jr=p.useMemo(function(){return typeof o<"u"?Ie?x.errors&&Object.keys(x.errors).length===0:o!==!1&&P(o)?o(h):o:x.errors&&Object.keys(x.errors).length===0},[o,Ie,x.errors,h]),Or=E({},x,{initialValues:w.current,initialErrors:L.current,initialTouched:$.current,initialStatus:k.current,handleBlur:Oe,handleChange:je,handleReset:Cr,handleSubmit:Tr,resetForm:le,setErrors:ct,setFormikState:ft,setFieldTouched:te,setFieldValue:ee,setFieldError:ye,setStatus:pt,setSubmitting:ht,setTouched:lt,setValues:dt,submitForm:$e,validateForm:D,validateField:ot,isValid:jr,dirty:Ie,unregisterField:Er,registerField:Fr,getFieldProps:Ar,getFieldMeta:_r,getFieldHelpers:kr,validateOnBlur:s,validateOnChange:r,validateOnMount:c});return Or}function de(e){var t=Eo(e),r=e.component,a=e.children,s=e.render,l=e.innerRef;return p.useImperativeHandle(l,function(){return t}),p.createElement(No,{value:t},r?p.createElement(r,t):s?s(t):a?P(a)?a(t):So(a)?null:p.Children.only(a):null)}function To(e){var t={};if(e.inner){if(e.inner.length===0)return Z(t,e.path,e.message);for(var s=e.inner,r=Array.isArray(s),a=0,s=r?s:s[Symbol.iterator]();;){var l;if(r){if(a>=s.length)break;l=s[a++]}else{if(a=s.next(),a.done)break;l=a.value}var c=l;I(t,c.path)||(t=Z(t,c.path,c.message))}}return t}function wo(e,t,r,a){r===void 0&&(r=!1);var s=He(e);return t[r?"validateSync":"validate"](s,{abortEarly:!1,context:a||s})}function He(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=String(r);Array.isArray(e[a])===!0?t[a]=e[a].map(function(s){return Array.isArray(s)===!0||Nt(s)?He(s):s!==""?s:void 0}):Nt(e[a])?t[a]=He(e[a]):t[a]=e[a]!==""?e[a]:void 0}return t}function Co(e,t,r){var a=e.slice();return t.forEach(function(l,c){if(typeof a[c]>"u"){var o=r.clone!==!1,d=o&&r.isMergeableObject(l);a[c]=d?Ue(Array.isArray(l)?[]:{},l,r):l}else r.isMergeableObject(l)?a[c]=Ue(e[c],l,r):e.indexOf(l)===-1&&a.push(l)}),a}function _o(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function ko(e,t,r){if(typeof e=="boolean")return!!t;var a=[],s=!1,l=-1;if(Array.isArray(e))a=e,l=e.indexOf(r),s=l>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!s?a.concat(r):s?a.slice(0,l).concat(a.slice(l+1)):a}var Ao=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?p.useLayoutEffect:p.useEffect;function R(e){var t=p.useRef(e);return Ao(function(){t.current=e}),p.useCallback(function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return t.current.apply(void 0,a)},[])}function j(e){var t=e.validate,r=e.name,a=e.render,s=e.children,l=e.as,c=e.component,o=e.className,d=ne(e,["validate","name","render","children","as","component","className"]),v=Nr(),_=ne(v,["validate","validationSchema"]),O=_.registerField,h=_.unregisterField;p.useEffect(function(){return O(r,{validate:t}),function(){h(r)}},[O,h,r,t]);var w=_.getFieldProps(E({name:r},d)),L=_.getFieldMeta(r),$={field:w,form:_};if(a)return a(E({},$,{meta:L}));if(P(s))return s(E({},$,{meta:L}));if(c){if(typeof c=="string"){var k=d.innerRef,T=ne(d,["innerRef"]);return p.createElement(c,E({ref:k},w,T,{className:o}),s)}return p.createElement(c,E({field:w,form:_},d,{className:o}),s)}var M=l||"input";if(typeof M=="string"){var _e=d.innerRef,ke=ne(d,["innerRef"]);return p.createElement(M,E({ref:_e},w,ke,{className:o}),s)}return p.createElement(M,E({},w,d,{className:o}),s)}var ie=p.forwardRef(function(e,t){var r=e.action,a=ne(e,["action"]),s=r??"#",l=Nr(),c=l.handleReset,o=l.handleSubmit;return p.createElement("form",E({onSubmit:o,ref:t,onReset:c,action:s},a))});ie.displayName="Form";const Po=()=>{const e=Lr();p.useEffect(()=>{e(Mr("Validation"))});const t=()=>{Ur.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}).fire({icon:"success",title:"Form submitted successfully",padding:"10px 20px"})},r=gt().shape({firstname:A().required("Please fill the first name"),lastname:A().required("Please fill the last name"),username:A().required("Please choose a userName"),city:A().required("Please provide a valid city"),state:A().required("Please provide a valid state"),zip:A().required("Please provide a valid zip"),agree:Rr().oneOf([!0],"You must agree before submitting.")}),a=gt().shape({fullName:A().required("Please fill the Name"),email:A().email("Invalid email").required("Please fill the Email"),color:A().required("Please Select the field"),firstname:A().required("Please fill the first name"),lastname:A().required("Please fill the last name"),username:A().required("Please choose a userName"),city:A().required("Please provide a valid city"),state:A().required("Please provide a valid state"),zip:A().required("Please provide a valid zip"),agree:A().required("You must agree before submitting."),select:A().required("Please Select the field")}),[s,l]=p.useState([]),c=o=>{s.includes(o)?l(d=>d.filter(v=>v!==o)):l([...s,o])};return m("div",{children:[m("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[i("li",{children:i(Dr,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),i("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:i("span",{children:"Validation"})})]}),m("div",{className:"pt-5 space-y-8",children:[m("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[i("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:i(Vr,{})}),i("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),i("a",{href:"https://www.npmjs.com/package/formik",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/formik"})]}),m("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[m("div",{className:"panel",id:"basic",children:[m("div",{className:"flex items-center justify-between mb-5",children:[i("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),i("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code1"),children:m("span",{className:"flex items-center",children:[i(ae,{className:"me-2"}),"Code"]})})]}),i("div",{className:"mb-5",children:i(de,{initialValues:{fullName:""},validationSchema:a,onSubmit:()=>{},children:({errors:o,submitCount:d,touched:v})=>m(ie,{className:"space-y-5",children:[m("div",{className:d?o.fullName?"has-error":"has-success":"",children:[i("label",{htmlFor:"fullName",children:"Full Name "}),i(j,{name:"fullName",type:"text",id:"fullName",placeholder:"Enter Full Name",className:"form-input"}),d?o.fullName?i("div",{className:"text-danger mt-1",children:o.fullName}):i("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),i("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{v.fullName&&!o.fullName&&t()},children:"Submit Form"})]})})}),s.includes("code1")&&i(re,{children:i("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const SubmittedForm = Yup.object().shape({
    fullName: Yup.string().required('Please fill the Name'),
});

<Formik
    initialValues={{
        fullName: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.fullName ? 'has-error' : 'has-success') : ''}>
                <label htmlFor="fullName">Full Name </label>
                <Field name="fullName" type="text" id="fullName" placeholder="Enter Full Name" className="form-input" />

                {submitCount ? errors.fullName ? <div className="text-danger mt-1">{errors.fullName}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.fullName && !errors.fullName) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),m("div",{className:"panel",id:"email",children:[m("div",{className:"flex items-center justify-between mb-5",children:[i("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Email"}),i("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code2"),children:m("span",{className:"flex items-center",children:[i(ae,{className:"me-2"}),"Code"]})})]}),i("div",{className:"mb-5",children:i(de,{initialValues:{email:""},validationSchema:a,onSubmit:()=>{},children:({errors:o,submitCount:d,touched:v})=>m(ie,{className:"space-y-5",children:[m("div",{className:d?o.email?"has-error":"has-success":"",children:[i("label",{htmlFor:"Email",children:"Email"}),i(j,{name:"email",type:"text",id:"Email",placeholder:"Enter Email",className:"form-input"}),d?o.email?i("div",{className:"text-danger mt-1",children:o.email}):i("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),i("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{v.email&&!o.email&&t()},children:"Submit Form"})]})})}),s.includes("code2")&&i(re,{children:i("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const SubmittedForm = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please fill the Email'),
});

<Formik
    initialValues={{
        email: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}>
                <label htmlFor="Email">Email</label>
                <Field name="email" type="text" id="Email" placeholder="Enter Email" className="form-input" />

                {submitCount ? errors.email ? <div className="text-danger mt-1">{errors.email}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.email && !errors.email) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),m("div",{className:"panel",id:"select",children:[m("div",{className:"flex items-center justify-between mb-5",children:[i("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Select"}),i("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code3"),children:m("span",{className:"flex items-center",children:[i(ae,{className:"me-2"}),"Code"]})})]}),i("div",{className:"mb-5",children:i(de,{initialValues:{select:""},validationSchema:a,onSubmit:()=>{},children:({errors:o,submitCount:d,touched:v})=>m(ie,{className:"space-y-5",children:[m("div",{className:d?o.select?"has-error":"has-success":"",children:[m(j,{as:"select",name:"select",className:"form-select",children:[i("option",{value:"",children:"Open this select menu"}),i("option",{value:"One",children:"One"}),i("option",{value:"Two",children:"Two"}),i("option",{value:"Three",children:"Three"})]}),d?o.select?i("div",{className:" text-danger mt-1",children:o.select}):i("div",{className:" text-[#1abc9c] mt-1",children:"Example valid custom select feedback"}):""]}),i("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{v.select&&!o.select&&t()},children:"Submit Form"})]})})}),s.includes("code3")&&i(re,{children:i("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const SubmittedForm = Yup.object().shape({
    select: Yup.string().required('Please Select the field'),
});

<Formik
    initialValues={{
        select: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.select ? 'has-error' : 'has-success') : ''}>
                <Field as="select" name="select" className="form-select">
                    <option value="">Open this select menu</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                </Field>
                {submitCount ? (
                    errors.select ? (
                        <div className=" text-danger mt-1">{errors.select}</div>
                    ) : (
                        <div className=" text-[#1abc9c] mt-1">Example valid custom select feedback</div>
                    )
                ) : (
                    ''
                )}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.select && !errors.select) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),m("div",{className:"panel",id:"custom_styles",children:[m("div",{className:"flex items-center justify-between mb-5",children:[i("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Custom Styles"}),i("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code4"),children:m("span",{className:"flex items-center",children:[i(ae,{className:"me-2"}),"Code"]})})]}),i("div",{className:"mb-5",children:i(de,{initialValues:{firstname:"Shaun",lastname:"Park",username:"",city:"",state:"",zip:"",agree:!1},validationSchema:r,onSubmit:()=>{},children:({errors:o,submitCount:d,touched:v,values:_})=>m(ie,{className:"space-y-5",children:[m("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[m("div",{className:d?o.firstname?"has-error":"has-success":"",children:[i("label",{htmlFor:"firstname",children:"First Name "}),i(j,{name:"firstname",type:"text",id:"firstname",placeholder:"Enter First Name",className:"form-input"}),d?o.firstname?i("div",{className:"text-danger mt-1",children:o.firstname}):i("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),m("div",{className:d?o.lastname?"has-error":"has-success":"",children:[i("label",{htmlFor:"fullName",children:"Last Name "}),i(j,{name:"lastname",type:"text",id:"lastname",placeholder:"Enter Last Name",className:"form-input"}),d?o.lastname?i("div",{className:"text-danger mt-1",children:o.lastname}):i("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),m("div",{className:d?o.username?"has-error":"has-success":"",children:[i("label",{htmlFor:"username",children:"Username"}),m("div",{className:"flex",children:[i("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),i(j,{name:"username",type:"text",id:"username",placeholder:"Enter Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),d?o.username?i("div",{className:"text-danger mt-1",children:o.username}):i("div",{className:"text-success mt-1",children:"Looks Good!"}):""]})]}),m("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-5",children:[m("div",{className:`md:col-span-2 ${d?o.city?"has-error":"has-success":""}`,children:[i("label",{htmlFor:"customeCity",children:"City"}),i(j,{name:"city",type:"text",id:"city",placeholder:"Enter City",className:"form-input"}),d?o.city?i("div",{className:"text-danger mt-1",children:o.city}):i("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),m("div",{className:d?o.state?"has-error":"has-success":"",children:[i("label",{htmlFor:"customeState",children:"State"}),i(j,{name:"state",type:"text",id:"customeState",placeholder:"Enter State",className:"form-input"}),d?o.state?i("div",{className:"text-danger mt-1",children:o.state}):i("div",{className:"text-success mt-1",children:"Looks Good!"}):""]}),m("div",{className:d?o.zip?"has-error":"has-success":"",children:[i("label",{htmlFor:"customeZip",children:"Zip"}),i(j,{name:"zip",type:"text",id:"customeZip",placeholder:"Enter Zip",className:"form-input"}),d?o.zip?i("div",{className:"text-danger mt-1",children:o.zip}):i("div",{className:"text-success mt-1",children:"Looks Good!"}):""]})]}),m("div",{className:d?o.agree?"has-error":"has-success":"",children:[m("div",{className:"flex",children:[i(j,{name:"agree",id:"agree",type:"checkbox",className:"form-checkbox"}),_.agree,i("label",{htmlFor:"agree",className:"text-white-dark font-semibold",children:"Agree to terms and conditions"})]}),d&&o.agree?i("div",{className:"text-danger mt-1",children:o.agree}):""]}),i("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{Object.keys(v).length!==0&&Object.keys(o).length===0&&t()},children:"Submit Form"})]})})}),s.includes("code4")&&i(re,{children:i("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const submitForm4 = Yup.object().shape({
    firstname: Yup.string().required('Please fill the first name'),
    lastname: Yup.string().required('Please fill the last name'),
    username: Yup.string().required('Please choose a userName'),
    city: Yup.string().required('Please provide a valid city'),
    state: Yup.string().required('Please provide a valid state'),
    zip: Yup.string().required('Please provide a valid zip'),
    agree: Yup.bool().oneOf([true], 'You must agree before submitting.'),
});

<Formik
    initialValues={{
        firstname: 'Shaun',
        lastname: 'Park',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
    }}
    validationSchema={submitForm4}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched, values }) => (
        <Form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={submitCount ? (errors.firstname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="firstname">First Name </label>
                    <Field name="firstname" type="text" id="firstname" placeholder="Enter First Name" className="form-input" />

                    {submitCount ? (
                        errors.firstname ? (
                            <div className="text-danger mt-1">{errors.firstname}</div>
                        ) : (
                            <div className="text-success mt-1">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.lastname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="fullName">Last Name </label>
                    <Field name="lastname" type="text" id="lastname" placeholder="Enter Last Name" className="form-input" />

                    {submitCount ? errors.lastname ? <div className="text-danger mt-1">{errors.lastname}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="username">Username</label>
                    <div className="flex">
                        <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            @
                        </div>
                        <Field name="username" type="text" id="username" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                    {submitCount ? errors.username ? <div className="text-danger mt-1">{errors.username}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className={\`md:col-span-2 \${submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}\`}>
                    <label htmlFor="customeCity">City</label>
                    <Field name="city" type="text" id="city" placeholder="Enter City" className="form-input" />

                    {submitCount ? errors.city ? <div className="text-danger mt-1">{errors.city}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.state ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeState">State</label>
                    <Field name="state" type="text" id="customeState" placeholder="Enter State" className="form-input" />
                    {submitCount ? errors.state ? <div className="text-danger mt-1">{errors.state}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.zip ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeZip">Zip</label>
                    <Field name="zip" type="text" id="customeZip" placeholder="Enter Zip" className="form-input" />
                    {submitCount ? errors.zip ? <div className="text-danger mt-1">{errors.zip}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>
            </div>

            <div className={submitCount ? (errors.agree ? 'has-error' : 'has-success') : ''}>
                <div className="flex">
                    <Field name="agree" id="agree" type="checkbox" className="form-checkbox" />
                    {values.agree}
                    <label htmlFor="agree" className="text-white-dark font-semibold">
                        Agree to terms and conditions
                    </label>
                </div>
                {submitCount ? errors.agree ? <div className="text-danger mt-1">{errors.agree}</div> : '' : ''}
            </div>

            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (Object.keys(touched).length !== 0 && Object.keys(errors).length === 0) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]}),m("div",{className:"panel",id:"browser_default",children:[m("div",{className:"flex items-center justify-between mb-5",children:[i("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Browser Default"}),i("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code5"),children:m("span",{className:"flex items-center",children:[i(ae,{className:"me-2"}),"Code"]})})]}),i("div",{className:"mb-5",children:m("form",{className:"space-y-5",onSubmit:o=>{o.preventDefault(),t()},children:[m("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[m("div",{children:[i("label",{htmlFor:"browserFname",children:"First Name"}),i("input",{id:"browserFname",type:"text",placeholder:"Enter First Name",className:"form-input",required:!0})]}),m("div",{children:[i("label",{htmlFor:"browserLname",children:"Last name"}),i("input",{id:"browserLname",type:"text",placeholder:"Enter Last name",className:"form-input",required:!0})]}),m("div",{children:[i("label",{htmlFor:"browserEmail",children:"Username"}),m("div",{className:"flex",children:[i("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),i("input",{id:"browserEmail",type:"text",placeholder:"Enter Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none",required:!0})]})]})]}),m("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-5",children:[m("div",{className:"md:col-span-2",children:[i("label",{htmlFor:"browserCity",children:"City"}),i("input",{id:"browserCity",type:"text",placeholder:"Enter City",className:"form-input",required:!0})]}),m("div",{children:[i("label",{htmlFor:"browserState",children:"State"}),i("input",{id:"browserState",type:"text",placeholder:"Enter State",className:"form-input",required:!0})]}),m("div",{children:[i("label",{htmlFor:"browserZip",children:"Zip"}),i("input",{id:"browserZip",type:"text",placeholder:"Enter Zip",className:"form-input",required:!0})]})]}),m("div",{className:"flex items-center cursor-pointer mt-1",children:[i("input",{type:"checkbox",id:"agree1",className:"form-checkbox",required:!0}),i("label",{htmlFor:"agree1",className:"text-white-dark font-semibold mb-0",children:"Agree to terms and conditions"})]}),i("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit Form"})]})}),s.includes("code5")&&i(re,{children:i("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

<form
    className="space-y-5"
    onSubmit={(e) => {
        e.preventDefault();
        submitForm();
    }}
>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
            <label htmlFor="browserFname">First Name</label>
            <input id="browserFname" type="text" placeholder="Enter First Name" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserLname">Last name</label>
            <input id="browserLname" type="text" placeholder="Enter Last name" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserEmail">Username</label>
            <div className="flex">
                <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                    @
                </div>
                <input id="browserEmail" type="text" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" required />
            </div>
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-2">
            <label htmlFor="browserCity">City</label>
            <input id="browserCity" type="text" placeholder="Enter City" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserState">State</label>
            <input id="browserState" type="text" placeholder="Enter State" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserZip">Zip</label>
            <input id="browserZip" type="text" placeholder="Enter Zip" className="form-input" required />
        </div>
    </div>
    <div className="flex items-center cursor-pointer mt-1">
        <input type="checkbox" id="agree1 className="form-checkbox" required />
        <label htmlFor="agree1" className="text-white-dark font-semibold mb-0">Agree to terms and conditions</label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit Form
    </button>
</form>`})})]}),m("div",{className:"panel",id:"tooltips",children:[m("div",{className:"flex items-center justify-between mb-5",children:[i("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Tooltips"}),i("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code6"),children:m("span",{className:"flex items-center",children:[i(ae,{className:"me-2"}),"Code"]})})]}),i("div",{className:"mb-5",children:i(de,{initialValues:{firstname:"Shaun",lastname:"Park",username:"",city:"",state:"",zip:"",agree:!1},validationSchema:r,onSubmit:()=>{},children:({errors:o,submitCount:d,touched:v})=>m(ie,{className:"space-y-5",children:[m("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[m("div",{className:d?o.firstname?"has-error":"has-success":"",children:[i("label",{htmlFor:"firstname",children:"First Name "}),i(j,{name:"firstname",type:"text",id:"firstname",placeholder:"Enter First Name",className:"form-input mb-2"}),d?o.firstname?i("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.firstname}):i("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),m("div",{className:d?o.lastname?"has-error":"has-success":"",children:[i("label",{htmlFor:"lastName",children:"Last name "}),i(j,{name:"lastname",type:"text",id:"lastname",placeholder:"Enter Last Name",className:"form-input mb-2"}),d?o.lastname?i("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.lastname}):i("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),m("div",{className:d?o.username?"has-error":"has-success":"",children:[i("label",{htmlFor:"username",children:"Username"}),m("div",{className:"flex",children:[i("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),i(j,{name:"username",type:"text",id:"username",placeholder:"Enter Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),i("div",{className:"mt-2",children:d?o.username?i("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.username}):i("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""})]})]}),m("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-5",children:[m("div",{className:`md:col-span-2 ${d?o.city?"has-error":"has-success":""}`,children:[i("label",{htmlFor:"customeCity",children:"City"}),i(j,{name:"city",type:"text",id:"city",placeholder:"Enter City",className:"form-input mb-2"}),d?o.city?i("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.city}):i("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),m("div",{className:d?o.state?"has-error":"has-success":"",children:[i("label",{htmlFor:"customeState",children:"State"}),i(j,{name:"state",type:"text",id:"customeState",placeholder:"Enter State",className:"form-input mb-2"}),d?o.state?i("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.state}):i("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]}),m("div",{className:d?o.zip?"has-error":"has-success":"",children:[i("label",{htmlFor:"customeZip",children:"Zip"}),i(j,{name:"zip",type:"text",id:"customeZip",placeholder:"Enter Zip",className:"form-input mb-2"}),d?o.zip?i("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.zip}):i("div",{className:"text-white bg-[#1abc9c] py-1 px-2 rounded inline-block",children:"Looks Good!"}):""]})]}),m("div",{className:d?o.agree?"has-error":"has-success":"",children:[m("div",{className:"flex",children:[i(j,{name:"agree",id:"agree2",type:"checkbox",className:"form-checkbox"}),i("label",{htmlFor:"agree2",className:"text-white-dark font-semibold",children:"Agree to terms and conditions"})]}),i("div",{className:"mt-2",children:d&&o.agree?i("div",{className:"text-white bg-danger py-1 px-2 rounded inline-block",children:o.agree}):""})]}),i("button",{type:"submit",className:"btn btn-primary !mt-6",onClick:()=>{Object.keys(v).length!==0&&Object.keys(o).length===0&&t()},children:"Submit Form"})]})})}),s.includes("code6")&&i(re,{children:i("pre",{className:"language-typescript",children:`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const submitForm4 = Yup.object().shape({
    firstname: Yup.string().required('Please fill the first name'),
    lastname: Yup.string().required('Please fill the last name'),
    username: Yup.string().required('Please choose a userName'),
    city: Yup.string().required('Please provide a valid city'),
    state: Yup.string().required('Please provide a valid state'),
    zip: Yup.string().required('Please provide a valid zip'),
    agree: Yup.bool().oneOf([true], 'You must agree before submitting.'),
});

<Formik
    initialValues={{
        firstname: 'Shaun',
        lastname: 'Park',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
    }}
    validationSchema={submitForm4}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={submitCount ? (errors.firstname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="firstname">First Name </label>
                    <Field name="firstname" type="text" id="firstname" placeholder="Enter First Name" className="form-input mb-2" />

                    {submitCount ? (
                        errors.firstname ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.firstname}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.lastname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="lastName">Last name </label>
                    <Field name="lastname" type="text" id="lastname" placeholder="Enter Last Name" className="form-input mb-2" />

                    {submitCount ? (
                        errors.lastname ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.lastname}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="username">Username</label>
                    <div className="flex">
                        <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            @
                        </div>

                        <Field name="username" type="text" id="username" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                    <div className="mt-2">
                        {submitCount ? (
                            errors.username ? (
                                <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.username}</div>
                            ) : (
                                <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                            )
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className={\`md:col-span-2 \${submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}\`}>
                    <label htmlFor="customeCity">City</label>
                    <Field name="city" type="text" id="city" placeholder="Enter City" className="form-input mb-2" />

                    {submitCount ? (
                        errors.city ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.city}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.state ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeState">State</label>
                    <Field name="state" type="text" id="customeState" placeholder="Enter State" className="form-input mb-2" />
                    {submitCount ? (
                        errors.state ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.state}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.zip ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeZip">Zip</label>
                    <Field name="zip" type="text" id="customeZip" placeholder="Enter Zip" className="form-input mb-2" />
                    {submitCount ? (
                        errors.zip ? (
                            <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.zip}</div>
                        ) : (
                            <div className="text-white bg-[#1abc9c] py-1 px-2 rounded inline-block">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>
            </div>

            <div className={submitCount ? (errors.agree ? 'has-error' : 'has-success') : ''}>
                <div className="flex">
                    <Field name="agree" id="agree2" type="checkbox" className="form-checkbox" />
                    <label htmlFor="agree2" className="text-white-dark font-semibold">
                        Agree to terms and conditions
                    </label>
                </div>
                <div className="mt-2">
                    {submitCount ? errors.agree ? <div className="text-white bg-danger py-1 px-2 rounded inline-block">{errors.agree}</div> : '' : ''}
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (Object.keys(touched).length !== 0 && Object.keys(errors).length === 0) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`})})]})]})]})]})};export{Po as default};
