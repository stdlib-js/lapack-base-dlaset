"use strict";var m=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var j=m(function(N,b){
var h=require('@stdlib/ndarray-base-assert-is-row-major/dist'),z=require('@stdlib/ndarray-base-nullary-loop-interchange-order/dist'),w=require('@stdlib/math-base-special-fast-min/dist');function y(e,a,f,s,u,i,n){var o,r,t;for(o=u+i,r=n,t=0;t<w(e,a);t++)s[r]=f,r+=o;return s}function B(e,a,f,s,u,i,n,o){var r,t,l,v,R,q,c,g,x,p;for(p=z([e,a],[i,n]),l=p.sh,q=p.sx,v=l[0],R=l[1],r=q[0],t=q[1]-v*q[0],c=o,x=0;x<R;x++){for(g=0;g<v;g++)u[c]=f,c+=r;c+=t}return y(e,a,s,u,i,n,o),u}function G(e,a,f,s,u,i,n,o){var r,t,l,v;if(t=o,h([i,n]))for(v=0;v<e;v++){for(r=t+v*n,l=v;l<a;l++)u[r]=f,r+=n;t+=i}else for(v=0;v<a;v++){for(r=t,l=0;l<=w(v,e-1);l++)u[r]=f,r+=i;t+=n}return y(e,a,s,u,i,n,o),u}function H(e,a,f,s,u,i,n,o){var r,t,l,v;if(t=o,h([i,n]))for(v=0;v<e;v++){for(r=t,l=0;l<=w(v,a-1);l++)u[r]=f,r+=n;t+=i}else for(v=0;v<a;v++){for(r=t+v*i,l=v;l<e;l++)u[r]=f,r+=i;t+=n}return y(e,a,s,u,i,n,o),u}function I(e,a,f,s,u,i,n,o,r){return e==="upper"?G(a,f,s,u,i,n,o,r):e==="lower"?H(a,f,s,u,i,n,o,r):B(a,f,s,u,i,n,o,r)}b.exports=I
});var V=m(function(A,S){
var J=require('@stdlib/blas-base-assert-is-layout/dist'),K=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist'),P=j();function Q(e,a,f,s,u,i,n,o){var r,t;if(!J(e))throw new TypeError(O('2OFFx',e));if(K(e))r=1,t=o;else{if(o<s)throw new RangeError(O('2OFG9',s,o));r=o,t=1}return P(a,f,s,u,i,n,r,t,0)}S.exports=Q
});var C=m(function(rr,_){
var W=j();function X(e,a,f,s,u,i,n,o,r){return W(e,a,f,s,u,i,n,o,r)}_.exports=X
});var U=m(function(ar,T){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=V(),Z=C();Y(F,"ndarray",Z);T.exports=F
});var $=require("path").join,L=require('@stdlib/utils-try-require/dist'),d=require('@stdlib/assert-is-error/dist'),D=U(),E,k=L($(__dirname,"./native.js"));d(k)?E=D:E=k;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
