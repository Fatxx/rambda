function add(a,b){if(b===void 0){return c=>add(a,c);}return a+b;}function adjust(d,e,f){if(e===void 0){return(g,h)=>adjust(d,g,h);}else if(f===void 0){return j=>adjust(d,e,j);}return f.map((k,l)=>{if(l===e){return d(f[e]);}return k;});}function any(m,n){if(n===void 0){return o=>any(m,o);}let p=0;while(p<n.length){if(m(n[p])){return!0;}p++;}return!1;}function append(q,r){if(r===void 0){return s=>append(q,s);}const t=r;t.push(q);return t;}function isFunction(u){return typeof u==="function";}function compose(){const v=arguments;let w=v.length;while(w--){if(!isFunction(v[w])){throw new TypeError();}}return function(){let x=arguments,y=v.length;while(y--){x=[v[y].apply(this,x)];}return x[0];};}function filter(z,A){if(A===void 0){return B=>filter(z,B);}let C=-1,D=0;const E=A.length,F=[];while(++C<E){const G=A[C];if(z(G)){F[D++]=G;}}return F;}function find(H,I){if(I===void 0){return J=>find(H,J);}return I.find(H);}function findIndex(K,L){if(L===void 0){return M=>findIndex(K,M);}const N=L.length;let O=0;while(++O<N){if(K(L[O])){return O;}}return-1;}function flatten(P,Q){Q=Q===void 0?[]:Q;for(let i=0;i<P.length;i++){if(Array.isArray(P[i])){flatten(P[i],Q);}else{Q.push(P[i]);}}return Q;}function drop(R,S){if(S===void 0){return T=>drop(R,T);}const U=S;return U.slice(R);}function dropLast(V,W){if(W===void 0){return X=>dropLast(V,X);}const Y=W;return Y.slice(0,-V);}function equals(a,b){if(b===void 0){return Z=>equals(a,Z);}else if(a===b){return a!==0||1/a===1/b;}const a1=type(a);if(a1!==type(b)){return!1;}if(a1==="Array"){const b1=a,c1=b;return b1.sort().toString()===c1.sort().toString();}if(a1==="Object"){const d1=Object.keys(a);if(d1.length===Object.keys(b).length){if(d1.length===0){return!0;}let e1=!0;d1.map(f1=>{if(e1){const g1=type(a[f1]),h1=type(b[f1]);if(g1===h1){if(g1==="Object"){if(Object.keys(a[f1]).length===Object.keys(b[f1]).length){if(Object.keys(a[f1]).length!==0){if(!equals(a[f1],b[f1])){e1=!1;}}}else{e1=!1;}}else if(!equals(a[f1],b[f1])){e1=!1;}}else{e1=!1;}}});return e1;}}return!1;}function contains(i1,j1){if(j1===void 0){return k1=>contains(i1,k1);}let l1=-1,m1=!1;while(++l1<j1.length&&!m1){if(equals(j1[l1],i1)){m1=!0;}}return m1;}function head(a){if(typeof a==="string"){return a[0]||"";}return a[0];}function indexOf(n1,o1){if(o1===void 0){return p1=>indexOf(n1,p1);}let q1=-1;const r1=o1.length;while(++q1<r1){if(o1[q1]===n1){return q1;}}return-1;}function baseSlice(s1,t1,u1){let v1=-1,w1=s1.length;u1=u1>w1?w1:u1;if(u1<0){u1+=w1;}w1=t1>u1?0:u1-t1>>>0;t1>>>=0;const x1=Array(w1);while(++v1<w1){x1[v1]=s1[v1+t1];}return x1;}function init(a){if(typeof a==="string"){return a.slice(0,-1);}return a.length?baseSlice(a,0,-1):[];}function join(y1,z1){if(z1===void 0){return A1=>join(y1,A1);}return z1.join(y1);}function map(fn,C1){if(C1===void 0){return D1=>map(fn,D1);}let E1=-1;const F1=C1.length,G1=Array(F1);while(++E1<F1){G1[E1]=fn(C1[E1]);}return G1;}function last(a){if(typeof a==="string"){return a[a.length-1]||"";}return a[a.length-1];}function length(H1){return H1.length;}function match(I1,J1){if(J1===void 0){return K1=>match(I1,K1);}const L1=J1.match(I1);return L1===null?[]:L1;}function merge(M1,N1){if(N1===void 0){return O1=>merge(M1,O1);}return Object.assign({},M1,N1);}function omit(P1,Q1){if(Q1===void 0){return R1=>omit(P1,R1);}const S1={};for(key in Q1){if(!P1.includes(key)){S1[key]=Q1[key];}}return S1;}function path(T1,U1){if(U1===void 0){return V1=>path(T1,V1);}let W1=U1,X1=0;while(X1<T1.length){if(W1===null){return void 0;}W1=W1[T1[X1]];X1++;}return W1;}function pick(Y1,Z1){if(Z1===void 0){return a2=>pick(Y1,a2);}const b2={};let c2=0;while(c2<Y1.length){if(Y1[c2]in Z1){b2[Y1[c2]]=Z1[Y1[c2]];}c2++;}return b2;}function prepend(d2,e2){if(e2===void 0){return f2=>prepend(d2,f2);}const g2=e2;g2.unshift(d2);return g2;}function prop(h2,i2){if(i2===void 0){return j2=>prop(h2,j2);}return i2[h2];}function propEq(k2,l2,m2){if(l2===void 0){return(n2,o2)=>propEq(k2,n2,o2);}else if(m2===void 0){return p2=>propEq(k2,l2,p2);}return m2[k2]===l2;}function range(q2,r2){const s2=[];for(let i=q2;i<r2;i++){s2.push(i);}return s2;}function repeat(a,t2){if(t2===void 0){return u2=>repeat(a,u2);}const v2=Array(t2);return v2.fill(a);}function replace(w2,x2,y2){if(x2===void 0){return(z2,A2)=>replace(w2,z2,A2);}else if(y2===void 0){return B2=>replace(w2,x2,B2);}return y2.replace(w2,x2);}function subtract(a,b){if(b===void 0){return C2=>subtract(a,C2);}return a-b;}function sort(fn,E2){if(E2===void 0){return F2=>sort(fn,F2);}const G2=E2;return G2.sort(fn);}function sortBy(fn,I2){if(I2===void 0){return J2=>sortBy(fn,J2);}const K2=I2;return K2.sort((a,b)=>{const L2=fn(a),M2=fn(b);return L2<M2?-1:L2>M2?1:0;});}function split(N2,O2){if(O2===void 0){return P2=>split(N2,P2);}return O2.split(N2);}function splitEvery(Q2,a){if(a===void 0){return R2=>splitEvery(Q2,R2);}Q2=Q2>1?Q2:1;const S2=[];let T2=0;while(T2<a.length){S2.push(a.slice(T2,T2+=Q2));}return S2;}function tail(U2){return drop(1,U2);}function take(V2,a){if(a===void 0){return W2=>take(V2,W2);}else if(typeof a==="string"){return a.slice(0,V2);}return baseSlice(a,0,V2);}function takeLast(X2,a){if(a===void 0){return Y2=>takeLast(X2,Y2);}const Z2=a.length;X2=X2>Z2?Z2:X2;if(typeof a==="string"){return a.slice(Z2-X2);}X2=Z2-X2;return baseSlice(a,X2,Z2);}function toLower(a3){return a3.toLowerCase();}function toUpper(b3){return b3.toUpperCase();}function test(c3,d3){if(d3===void 0){return e3=>test(c3,e3);}return d3.search(c3)===-1?!1:!0;}function trim(f3){return f3.trim();}function type(a){if(a===null){return"Null";}else if(Array.isArray(a)){return"Array";}else if(typeof a==="boolean"){return"Boolean";}else if(typeof a==="number"){return"Number";}else if(typeof a==="string"){return"String";}else if(a===void 0){return"Undefined";}else if(a instanceof RegExp){return"RegExp";}return"Object";}function values(g3){const h3=[];for(key in g3){h3.push(g3[key]);}return h3;}function uniq(i3){let j3=-1;const k3=[];while(++j3<i3.length){const l3=i3[j3];if(!contains(l3,k3)){k3.push(l3);}}return k3;}function update(m3,n3,o3){if(n3===void 0){return(p3,q3)=>update(m3,p3,q3);}else if(o3===void 0){return r3=>update(m3,n3,r3);}const s3=o3;return s3.fill(n3,m3,m3+1);}module.exports.add=add;module.exports.adjust=adjust;module.exports.any=any;module.exports.append=append;module.exports.compose=compose;module.exports.contains=contains;module.exports.drop=drop;module.exports.dropLast=dropLast;module.exports.equals=equals;module.exports.filter=filter;module.exports.find=find;module.exports.findIndex=findIndex;module.exports.flatten=flatten;module.exports.head=head;module.exports.indexOf=indexOf;module.exports.init=init;module.exports.join=join;module.exports.last=last;module.exports.length=length;module.exports.map=map;module.exports.match=match;module.exports.merge=merge;module.exports.omit=omit;module.exports.path=path;module.exports.pick=pick;module.exports.prepend=prepend;module.exports.prop=prop;module.exports.propEq=propEq;module.exports.range=range;module.exports.repeat=repeat;module.exports.replace=replace;module.exports.sort=sort;module.exports.sortBy=sortBy;module.exports.split=split;module.exports.splitEvery=splitEvery;module.exports.subtract=subtract;module.exports.tail=tail;module.exports.take=take;module.exports.takeLast=takeLast;module.exports.test=test;module.exports.toLower=toLower;module.exports.toUpper=toUpper;module.exports.trim=trim;module.exports.type=type;module.exports.uniq=uniq;module.exports.update=update;module.exports.values=values;