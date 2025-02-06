"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=c(function(H,y){
var A=require("path").resolve,O=require('@stdlib/fs-read-wasm/dist').sync,S=O(A(__dirname,"..","src","main.wasm"));y.exports=S
});var l=c(function(I,m){
var T=require('@stdlib/assert-is-wasm-memory/dist'),f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=require('@stdlib/utils-inherit/dist'),h=require('@stdlib/wasm-module-wrapper/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),g=q();function n(e){if(!(this instanceof n))return new n(e);if(!T(e))throw new TypeError(V('nullH0',e));return h.call(this,g,e,{env:{memory:e}}),this}B(n,h);f(n.prototype,"main",function(r,s,i,t){return this._instance.exports.c_cscal(r,s,i,t),i});f(n.prototype,"ndarray",function(r,s,i,t,o){return this._instance.exports.c_cscal_ndarray(r,s,i,t,o),i});m.exports=n
});var E=c(function(J,_){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),z=require('@stdlib/strided-base-stride2offset/dist'),D=require('@stdlib/strided-base-read-dataview/dist').ndarray,L=require('@stdlib/wasm-memory/dist'),P=require('@stdlib/wasm-base-arrays2ptrs/dist'),Y=require('@stdlib/complex-float32-reim/dist'),w=require('@stdlib/wasm-base-strided2object/dist'),p=l();function u(){return this instanceof u?(p.call(this,new L({initial:0})),this):new u}j(u,p);M(u.prototype,"main",function(r,s,i,t){return this.ndarray(r,s,i,t,z(r,t))});M(u.prototype,"ndarray",function(r,s,i,t,o){var v,a,d;return v=P(this,[w(r,i,t,o),w(2,Y(s),1,0)]),a=v[0],d=v[1],p.prototype.ndarray.call(this,r,d.ptr,a.ptr,a.stride,a.offset),a.copy&&D(r,this.view,a.stride*a.BYTES_PER_ELEMENT,a.ptr,i,t,o,!0),i});_.exports=u
});var W=c(function(K,b){
var k=E(),R=new k;R.initializeSync();b.exports=R
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=W(),F=l();C(x,"Module",F);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
