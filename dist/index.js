"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=c(function(H,q){
var x=require("path").resolve,A=require('@stdlib/fs-read-wasm/dist').sync,O=A(x(__dirname,"..","src","main.wasm"));q.exports=O
});var l=c(function(I,w){
var S=require('@stdlib/assert-is-wasm-memory/dist'),h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),B=require('@stdlib/error-tools-fmtprodmsg/dist'),V=f();function n(e){if(!(this instanceof n))return new n(e);if(!S(e))throw new TypeError(B('26PH0',e));return m.call(this,V,e,{env:{memory:e}}),this}T(n,m);h(n.prototype,"main",function(r,t,i,a){return this._instance.exports.c_cscal(r,t,i,a),i});h(n.prototype,"ndarray",function(r,t,i,a,o){return this._instance.exports.c_cscal_ndarray(r,t,i,a,o),i});w.exports=n
});var E=c(function(J,b){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),j=require('@stdlib/strided-base-stride2offset/dist'),z=require('@stdlib/strided-base-read-dataview/dist').ndarray,D=require('@stdlib/wasm-memory/dist'),L=require('@stdlib/wasm-base-arrays2ptrs/dist'),P=require('@stdlib/complex-float32-reim/dist'),M=require('@stdlib/wasm-base-strided2object/dist'),p=l();function u(){return this instanceof u?(p.call(this,new D({initial:0})),this):new u}g(u,p);_(u.prototype,"main",function(r,t,i,a){return this.ndarray(r,t,i,a,j(r,a))});_(u.prototype,"ndarray",function(r,t,i,a,o){var v,s,y;return v=L(this,[M(r,i,a,o),M(2,P(t),1,0)]),s=v[0],y=v[1],p.prototype.ndarray.call(this,r,y.ptr,s.ptr,s.stride,s.offset),s.copy&&z(r,this.view,s.stride*s.BYTES_PER_ELEMENT,s.ptr,i,a,o,!0),i});b.exports=u
});var W=c(function(K,R){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=E(),C=l(),d=new k;d.initializeSync();Y(d,"Module",C.bind(null));R.exports=d
});var F=W();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
