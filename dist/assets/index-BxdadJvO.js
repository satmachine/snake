(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Zo="182",Eu=0,Ol=1,bu=2,As=1,Mu=2,Es=3,Mn=0,Vt=1,Dn=2,En=0,ji=1,Lr=2,Ul=3,Fl=4,wu=5,li=100,Tu=101,Au=102,Ru=103,Cu=104,Pu=200,Iu=201,Lu=202,Nu=203,$a=204,ja=205,Du=206,Ou=207,Uu=208,Fu=209,ku=210,Bu=211,zu=212,Gu=213,Hu=214,qa=0,Xa=1,Ka=2,Yi=3,Ya=4,Ja=5,Za=6,Qa=7,Sh=0,Vu=1,Wu=2,bn=0,Qo=1,el=2,tl=3,Vr=4,nl=5,il=6,sl=7,Eh=300,mi=301,Ji=302,eo=303,to=304,Wr=306,Is=1e3,On=1001,no=1002,Ot=1003,$u=1004,Xs=1005,Ut=1006,ia=1007,di=1008,tn=1009,bh=1010,Mh=1011,Ls=1012,rl=1013,wn=1014,gn=1015,sn=1016,al=1017,ol=1018,Ns=1020,wh=35902,Th=35899,Ah=1021,Rh=1022,_n=1023,Fn=1026,fi=1027,ll=1028,cl=1029,Zi=1030,hl=1031,ul=1033,wr=33776,Tr=33777,Ar=33778,Rr=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,lo=37492,co=37496,ho=37488,uo=37489,fo=37490,po=37491,mo=37808,go=37809,_o=37810,vo=37811,yo=37812,xo=37813,So=37814,Eo=37815,bo=37816,Mo=37817,wo=37818,To=37819,Ao=37820,Ro=37821,Co=36492,Po=36494,Io=36495,Lo=36283,No=36284,Do=36285,Oo=36286,ju=3200,Ch=0,qu=1,Xn="",on="srgb",Qi="srgb-linear",Nr="linear",Ye="srgb",xi=7680,kl=519,Xu=512,Ku=513,Yu=514,dl=515,Ju=516,Zu=517,fl=518,Qu=519,Bl=35044,ed=35048,zl="300 es",Sn=2e3,Dr=2001;function Ph(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){const i=Or("canvas");return i.style.display="block",i}const Gl={};function Hl(...i){const e="THREE."+i.shift();console.log(e,...i)}function De(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Xe(...i){const e="THREE."+i.shift();console.error(e,...i)}function Ds(...i){const e=i.join(" ");e in Gl||(Gl[e]=!0,De(...i))}function nd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sa=Math.PI/180,Uo=180/Math.PI;function Hs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function id(i,e){return(i%e+e)%e}function ra(i,e,t){return(1-t)*i+t*e}function us(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const x=Math.acos(m),S=Math.sin(x);p=Math.sin(p*x)/S,o=Math.sin(o*x)/S,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new C,Vl=new Vs;class Fe{constructor(e,t,n,s,r,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],S=s[4],E=s[7],w=s[2],T=s[5],A=s[8];return r[0]=a*_+o*x+l*w,r[3]=a*m+o*S+l*T,r[6]=a*p+o*E+l*A,r[1]=c*_+h*x+u*w,r[4]=c*m+h*S+u*T,r[7]=c*p+h*E+u*A,r[2]=d*_+f*x+g*w,r[5]=d*m+f*S+g*T,r[8]=d*p+f*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Fe,Wl=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sd(){const i={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ye&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qi]:{primaries:e,whitePoint:n,transfer:Nr,toXYZ:Wl,fromXYZ:$l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:Ye,toXYZ:Wl,fromXYZ:$l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const We=sd();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class rd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=Or("canvas")),Si.width=e.width,Si.height=e.height;const s=Si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ad=0;class pl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(la(s[a].image)):r.push(la(s[a]))}else r=la(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let od=0;const ca=new C;class zt extends ns{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=On,s=On,r=Ut,a=di,o=_n,l=tn,c=zt.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Hs(),this.name="",this.source=new pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Eh;zt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,E=(f+1)/2,w=(p+1)/2,T=(h+d)/4,A=(u+_)/4,I=(g+m)/4;return S>E&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):E>w?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=I/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=I/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ld extends ns{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new zt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new pl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wt extends ld{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ih extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cd extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),Ys.subVectors(this.max,ds),Ei.subVectors(e.a,ds),bi.subVectors(e.b,ds),Mi.subVectors(e.c,ds),Bn.subVectors(bi,Ei),zn.subVectors(Mi,bi),Qn.subVectors(Ei,Mi);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Qn.z,Qn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Qn.z,0,-Qn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Qn.y,Qn.x,0];return!ha(t,Ei,bi,Mi,Ys)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,Ei,bi,Mi,Ys))?!1:(Js.crossVectors(Bn,zn),t=[Js.x,Js.y,Js.z],ha(t,Ei,bi,Mi,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new C,new C,new C,new C,new C,new C,new C,new C],ln=new C,Ks=new vi,Ei=new C,bi=new C,Mi=new C,Bn=new C,zn=new C,Qn=new C,ds=new C,Ys=new C,Js=new C,ei=new C;function ha(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ei.fromArray(i,r);const o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const hd=new vi,fs=new C,ua=new C;class is{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(ua)),this.expandByPoint(fs.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cn=new C,da=new C,Zs=new C,Gn=new C,fa=new C,Qs=new C,pa=new C;class Lh{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){da.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Zs),o=Gn.dot(this.direction),l=-Gn.dot(Zs),c=Gn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(da).addScaledVector(Zs,d),f}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,s,r){fa.subVectors(t,e),Qs.subVectors(n,e),pa.crossVectors(fa,Qs);let a=this.direction.dot(pa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const l=o*this.direction.dot(Qs.crossVectors(Gn,Qs));if(l<0)return null;const c=o*this.direction.dot(fa.cross(Gn));if(c<0||l+c>a)return null;const h=-o*Gn.dot(pa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ud,e,dd)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Hn.crossVectors(n,Zt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Hn.crossVectors(n,Zt)),Hn.normalize(),er.crossVectors(Zt,Hn),s[0]=Hn.x,s[4]=er.x,s[8]=Zt.x,s[1]=Hn.y,s[5]=er.y,s[9]=Zt.y,s[2]=Hn.z,s[6]=er.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],S=n[7],E=n[11],w=n[15],T=s[0],A=s[4],I=s[8],y=s[12],M=s[1],P=s[5],U=s[9],k=s[13],$=s[2],V=s[6],z=s[10],G=s[14],K=s[3],ne=s[7],ae=s[11],de=s[15];return r[0]=a*T+o*M+l*$+c*K,r[4]=a*A+o*P+l*V+c*ne,r[8]=a*I+o*U+l*z+c*ae,r[12]=a*y+o*k+l*G+c*de,r[1]=h*T+u*M+d*$+f*K,r[5]=h*A+u*P+d*V+f*ne,r[9]=h*I+u*U+d*z+f*ae,r[13]=h*y+u*k+d*G+f*de,r[2]=g*T+_*M+m*$+p*K,r[6]=g*A+_*P+m*V+p*ne,r[10]=g*I+_*U+m*z+p*ae,r[14]=g*y+_*k+m*G+p*de,r[3]=x*T+S*M+E*$+w*K,r[7]=x*A+S*P+E*V+w*ne,r[11]=x*I+S*U+E*z+w*ae,r[15]=x*y+S*k+E*G+w*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],x=l*f-c*d,S=o*f-c*u,E=o*d-l*u,w=a*f-c*h,T=a*d-l*h,A=a*u-o*h;return t*(_*x-m*S+p*E)-n*(g*x-m*w+p*T)+s*(g*S-_*w+p*A)-r*(g*E-_*T+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,S=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,E=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,w=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=t*x+n*S+s*E+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*A,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*A,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,e[4]=S*A,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*A,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*A,e[8]=E*A,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=w*A,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,x=l*c,S=l*h,E=l*u,w=n.x,T=n.y,A=n.z;return s[0]=(1-(_+p))*w,s[1]=(f+E)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(f-E)*T,s[5]=(1-(d+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+S)*A,s[9]=(m-x)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=wi.set(s[0],s[1],s[2]).length();const a=wi.set(s[4],s[5],s[6]).length(),o=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),cn.copy(this);const c=1/r,h=1/a,u=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Sn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Sn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Dr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Sn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Sn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Dr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wi=new C,cn=new Je,ud=new C(0,0,0),dd=new C(1,1,1),Hn=new C,er=new C,Zt=new C,jl=new Je,ql=new Vs;class Tn{constructor(e=0,t=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Nh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fd=0;const Xl=new C,Ti=new Vs,Pn=new Je,tr=new C,ps=new C,pd=new C,md=new Vs,Kl=new C(1,0,0),Yl=new C(0,1,0),Jl=new C(0,0,1),Zl={type:"added"},gd={type:"removed"},Ai={type:"childadded",child:null},ma={type:"childremoved",child:null};class ut extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new C,t=new Tn,n=new Vs,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Fe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tr.copy(e):tr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ps,tr,this.up):Pn.lookAt(tr,ps,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gd),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ut.DEFAULT_UP=new C(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new C,In=new C,ga=new C,Ln=new C,Ri=new C,Ci=new C,Ql=new C,_a=new C,va=new C,ya=new C,xa=new mt,Sa=new mt,Ea=new mt;class mn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),In.subVectors(n,t),ga.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(In),l=hn.dot(ga),c=In.dot(In),h=In.dot(ga),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return xa.setScalar(0),Sa.setScalar(0),Ea.setScalar(0),xa.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,n),Ea.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(xa,r.x),a.addScaledVector(Sa,r.y),a.addScaledVector(Ea,r.z),a}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),In.subVectors(e,t),hn.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),hn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ri.subVectors(s,n),Ci.subVectors(r,n),_a.subVectors(e,n);const l=Ri.dot(_a),c=Ci.dot(_a);if(l<=0&&c<=0)return t.copy(n);va.subVectors(e,s);const h=Ri.dot(va),u=Ci.dot(va);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ri,a);ya.subVectors(e,r);const f=Ri.dot(ya),g=Ci.dot(ya);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ci,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ql.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ql,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function ba(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=id(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ba(a,r,e+1/3),this.g=ba(a,r,e),this.b=ba(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=Dh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return We.workingToColorSpace(Bt.copy(this),e),Math.round(Ve(Bt.r*255,0,255))*65536+Math.round(Ve(Bt.g*255,0,255))*256+Math.round(Ve(Bt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Bt.copy(this),t);const n=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=on){We.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,s=Bt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(nr);const n=ra(Vn.h,nr.h,t),s=ra(Vn.s,nr.s,t),r=ra(Vn.l,nr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new ve;ve.NAMES=Dh;let _d=0;class ss extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=ji,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=ja,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ml extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new C,ir=new Le;let vd=0;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bl,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ir.fromBufferAttribute(this,t),ir.applyMatrix3(e),this.setXY(t,ir.x,ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=us(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),e}}class Oh extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uh extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yd=0;const an=new Je,Ma=new ut,Pi=new C,Qt=new vi,ms=new vi,It=new C;class Ft extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ph(e)?Uh:Oh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(Qt.min,ms.min),Qt.expandByPoint(It),It.addVectors(Qt.max,ms.max),Qt.expandByPoint(It)):(Qt.expandByPoint(ms.min),Qt.expandByPoint(ms.max))}Qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(e,c),It.add(Pi)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new C,l[I]=new C;const c=new C,h=new C,u=new C,d=new Le,f=new Le,g=new Le,_=new C,m=new C;function p(I,y,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[I].add(_),o[y].add(_),o[M].add(_),l[I].add(m),l[y].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,y=x.length;I<y;++I){const M=x[I],P=M.start,U=M.count;for(let k=P,$=P+U;k<$;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new C,E=new C,w=new C,T=new C;function A(I){w.fromBufferAttribute(s,I),T.copy(w);const y=o[I];S.copy(y),S.sub(w.multiplyScalar(w.dot(y))).normalize(),E.crossVectors(T,y);const P=E.dot(l[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,P)}for(let I=0,y=x.length;I<y;++I){const M=x[I],P=M.start,U=M.count;for(let k=P,$=P+U;k<$;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Kt(d,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new Je,ti=new Lh,sr=new is,tc=new C,rr=new C,ar=new C,or=new C,wa=new C,lr=new C,nc=new C,cr=new C;class St extends ut{constructor(e=new Ft,t=new ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(wa.fromBufferAttribute(u,e),a?lr.addScaledVector(wa,h):lr.addScaledVector(wa.sub(t),h))}t.add(lr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(sr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(sr,tc)===null||ti.origin.distanceToSquared(tc)>(e.far-e.near)**2))&&(ec.copy(r).invert(),ti.copy(e.ray).applyMatrix4(ec),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=x,w=S;E<w;E+=3){const T=o.getX(E),A=o.getX(E+1),I=o.getX(E+2);s=hr(this,p,e,n,c,h,u,T,A,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),S=o.getX(m+1),E=o.getX(m+2);s=hr(this,a,e,n,c,h,u,x,S,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=x,w=S;E<w;E+=3){const T=E,A=E+1,I=E+2;s=hr(this,p,e,n,c,h,u,T,A,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,S=m+1,E=m+2;s=hr(this,a,e,n,c,h,u,x,S,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function xd(i,e,t,n,s,r,a,o){let l;if(e.side===Vt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Mn,o),l===null)return null;cr.copy(o),cr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(cr);return c<t.near||c>t.far?null:{distance:c,point:cr.clone(),object:i}}function hr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,rr),i.getVertexPosition(l,ar),i.getVertexPosition(c,or);const h=xd(i,e,t,n,rr,ar,or,nc);if(h){const u=new C;mn.getBarycoord(nc,rr,ar,or,u),s&&(h.uv=mn.getInterpolatedAttribute(s,o,l,c,u,new Le)),r&&(h.uv1=mn.getInterpolatedAttribute(r,o,l,c,u,new Le)),a&&(h.normal=mn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};mn.getNormal(rr,ar,or,d.normal),h.face=d,h.barycoord=u}return h}class rs extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function g(_,m,p,x,S,E,w,T,A,I,y){const M=E/A,P=w/I,U=E/2,k=w/2,$=T/2,V=A+1,z=I+1;let G=0,K=0;const ne=new C;for(let ae=0;ae<z;ae++){const de=ae*P-k;for(let ke=0;ke<V;ke++){const Oe=ke*M-U;ne[_]=Oe*x,ne[m]=de*S,ne[p]=$,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[p]=T>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(ke/A),u.push(1-ae/I),G+=1}}for(let ae=0;ae<I;ae++)for(let de=0;de<A;de++){const ke=d+de+V*ae,Oe=d+de+V*(ae+1),_t=d+(de+1)+V*(ae+1),ft=d+(de+1)+V*ae;l.push(ke,Oe,ft),l.push(Oe,_t,ft),K+=6}o.addGroup(f,K,y),f+=K,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=es(i[t]);for(const s in n)e[s]=n[s]}return e}function Sd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const gi={clone:es,merge:Ht};var Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=Sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class kh extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new C,ic=new Le,sc=new Le;class Xt extends kh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,ic,sc),t.subVectors(sc,ic)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Li=1;class Md extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(Ii,Li,e,t);s.layers=this.layers,this.add(s);const r=new Xt(Ii,Li,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Ii,Li,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Ii,Li,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Ii,Li,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Ii,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bh extends zt{constructor(e=[],t=mi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zh extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Bh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rs(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:En});r.uniforms.tEquirect.value=t;const a=new St(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=Ut),new Md(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Wi extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wd={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ur{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new Ur(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Td extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gh extends zt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ot,h=Ot,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rc extends Kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ni=new Je,ac=new Je,ur=[],oc=new vi,Ad=new Je,gs=new St,_s=new is;class Rd extends St{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ad)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),oc.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(oc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),_s.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(_s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),e.ray.intersectsSphere(_s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ni),ac.multiplyMatrices(n,Ni),gs.matrixWorld=ac,gs.raycast(e,ur);for(let a=0,o=ur.length;a<o;a++){const l=ur[a];l.instanceId=r,l.object=this,t.push(l)}ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gh(new Float32Array(s*this.count),s,this.count,ll,gn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Aa=new C,Cd=new C,Pd=new Fe;class jn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Aa.subVectors(n,t).cross(Cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pd.getNormalMatrix(e),s=this.coplanarPoint(Aa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new is,Id=new Le(.5,.5),dr=new C;class gl{constructor(e=new jn,t=new jn,n=new jn,s=new jn,r=new jn,a=new jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],x=r[12],S=r[13],E=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-g,w-x).normalize(),s[1].setComponents(c+a,f+h,p+g,w+x).normalize(),s[2].setComponents(c+o,f+u,p+_,w+S).normalize(),s[3].setComponents(c-o,f-u,p-_,w-S).normalize(),n)s[4].setComponents(l,d,m,E).normalize(),s[5].setComponents(c-l,f-d,p-m,w-E).normalize();else if(s[4].setComponents(c-l,f-d,p-m,w-E).normalize(),t===Sn)s[5].setComponents(c+l,f+d,p+m,w+E).normalize();else if(t===Dr)s[5].setComponents(l,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=Id.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(dr.x=s.normal.x>0?e.max.x:e.min.x,dr.y=s.normal.y>0?e.max.y:e.min.y,dr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _l extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lc=new Je,Fo=new Lh,fr=new is,pr=new C;class Hh extends ut{constructor(e=new Ft,t=new _l){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,e.ray.intersectsSphere(fr)===!1)return;lc.copy(s).invert(),Fo.copy(e.ray).applyMatrix4(lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);pr.fromBufferAttribute(u,m),cc(pr,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)pr.fromBufferAttribute(u,g),cc(pr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cc(i,e,t,n,s,r,a){const o=Fo.distanceSqToPoint(i);if(o<t){const l=new C;Fo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class vl extends zt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Os extends zt{constructor(e,t,n=wn,s,r,a,o=Ot,l=Ot,c,h=Fn,u=1){if(h!==Fn&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ld extends Os{constructor(e,t=wn,n=mi,s,r,a=Ot,o=Ot,l,c=Fn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vh extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xi extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function x(){const E=new C,w=new C;let T=0;const A=(t-e)/n;for(let I=0;I<=r;I++){const y=[],M=I/r,P=M*(t-e)+e;for(let U=0;U<=s;U++){const k=U/s,$=k*l+o,V=Math.sin($),z=Math.cos($);w.x=P*V,w.y=-M*n+m,w.z=P*z,u.push(w.x,w.y,w.z),E.set(V,A,z).normalize(),d.push(E.x,E.y,E.z),f.push(k,1-M),y.push(g++)}_.push(y)}for(let I=0;I<s;I++)for(let y=0;y<r;y++){const M=_[y][I],P=_[y+1][I],U=_[y+1][I+1],k=_[y][I+1];(e>0||y!==0)&&(h.push(M,P,k),T+=3),(t>0||y!==r-1)&&(h.push(P,U,k),T+=3)}c.addGroup(p,T,0),p+=T}function S(E){const w=g,T=new Le,A=new C;let I=0;const y=E===!0?e:t,M=E===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let U=0;U<=s;U++){const $=U/s*l+o,V=Math.cos($),z=Math.sin($);A.x=y*z,A.y=m*M,A.z=y*V,u.push(A.x,A.y,A.z),d.push(0,M,0),T.x=V*.5+.5,T.y=z*.5*M+.5,f.push(T.x,T.y),g++}for(let U=0;U<s;U++){const k=w+U,$=P+U;E===!0?h.push($,$+1,k):h.push($+1,$,k),I+=3}c.addGroup(p,I,E===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yl extends Xi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new yl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ws extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const S=new C,E=new C,w=new C;for(let T=0;T<t.length;T+=3)f(t[T+0],S),f(t[T+1],E),f(t[T+2],w),l(S,E,w,x)}function l(x,S,E,w){const T=w+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const y=x.clone().lerp(E,I/T),M=S.clone().lerp(E,I/T),P=T-I;for(let U=0;U<=P;U++)U===0&&I===T?A[I][U]=y:A[I][U]=y.clone().lerp(M,U/P)}for(let I=0;I<T;I++)for(let y=0;y<2*(T-I)-1;y++){const M=Math.floor(y/2);y%2===0?(d(A[I][M+1]),d(A[I+1][M]),d(A[I][M])):(d(A[I][M+1]),d(A[I+1][M+1]),d(A[I+1][M]))}}function c(x){const S=new C;for(let E=0;E<r.length;E+=3)S.x=r[E+0],S.y=r[E+1],S.z=r[E+2],S.normalize().multiplyScalar(x),r[E+0]=S.x,r[E+1]=S.y,r[E+2]=S.z}function h(){const x=new C;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];const E=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(E,1-w)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const S=a[x+0],E=a[x+2],w=a[x+4],T=Math.max(S,E,w),A=Math.min(S,E,w);T>.9&&A<.1&&(S<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,S){const E=x*3;S.x=e[E+0],S.y=e[E+1],S.z=e[E+2]}function g(){const x=new C,S=new C,E=new C,w=new C,T=new Le,A=new Le,I=new Le;for(let y=0,M=0;y<r.length;y+=9,M+=6){x.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),E.set(r[y+6],r[y+7],r[y+8]),T.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),w.copy(x).add(S).add(E).divideScalar(3);const P=m(w);_(T,M+0,x,P),_(A,M+2,S,P),_(I,M+4,E,P)}}function _(x,S,E,w){w<0&&x.x===1&&(a[S]=x.x-1),E.x===0&&E.z===0&&(a[S]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.vertices,e.indices,e.radius,e.detail)}}class xl extends Ws{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xl(e.radius,e.detail)}}class $r extends Ws{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $r(e.radius,e.detail)}}class Sl extends Ws{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sl(e.radius,e.detail)}}class as extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let S=0;S<c;S++){const E=S*u-r;g.push(E,-x,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const S=x+c*p,E=x+c*(p+1),w=x+1+c*(p+1),T=x+1+c*p;f.push(S,E,T),f.push(E,w,T)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}class jr extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],S=p/n;let E=0;p===0&&a===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let w=0;w<=t;w++){const T=w/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+E,1-S),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const S=h[p][x+1],E=h[p][x],w=h[p+1][x],T=h[p+1][x+1];(p!==0||a>0)&&f.push(S,E,T),(p!==n-1||l<Math.PI)&&f.push(E,w,T)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fr extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;a.push(_,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wh extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dn extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nd extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dd extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class El extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Od extends El{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ra=new Je,hc=new C,uc=new C;class $h{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(hc),uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uc),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ud extends $h{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}}class Fd extends El{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ud}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class qr extends kh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kd extends $h{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bd extends El{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new kd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class zd extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Gd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function dc(i,e,t,n){const s=Hd(n);switch(t){case Ah:return i*e;case ll:return i*e/s.components*s.byteLength;case cl:return i*e/s.components*s.byteLength;case Zi:return i*e*2/s.components*s.byteLength;case hl:return i*e*2/s.components*s.byteLength;case Rh:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case ul:return i*e*4/s.components*s.byteLength;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:case ao:return Math.max(i,16)*Math.max(e,8)/4;case io:case ro:return Math.max(i,8)*Math.max(e,8)/2;case oo:case lo:case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Co:case Po:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lo:case No:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Do:case Oo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hd(i){switch(i){case tn:case bh:return{byteLength:1,components:1};case Ls:case Mh:case sn:return{byteLength:2,components:1};case al:case ol:return{byteLength:2,components:4};case wn:case rl:case gn:return{byteLength:4,components:1};case wh:case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);function jh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vd(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pf=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,gf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Ff=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ep=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Jp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Qp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,om=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,cm=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,um=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,fm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Em=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Wd,alphahash_pars_fragment:$d,alphamap_fragment:jd,alphamap_pars_fragment:qd,alphatest_fragment:Xd,alphatest_pars_fragment:Kd,aomap_fragment:Yd,aomap_pars_fragment:Jd,batching_pars_vertex:Zd,batching_vertex:Qd,begin_vertex:ef,beginnormal_vertex:tf,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:rf,clipping_planes_fragment:af,clipping_planes_pars_fragment:of,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:hf,color_pars_fragment:uf,color_pars_vertex:df,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:_f,displacementmap_vertex:vf,emissivemap_fragment:yf,emissivemap_pars_fragment:xf,colorspace_fragment:Sf,colorspace_pars_fragment:Ef,envmap_fragment:bf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:wf,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Ff,envmap_vertex:Af,fog_vertex:Rf,fog_pars_vertex:Cf,fog_fragment:Pf,fog_pars_fragment:If,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Nf,lights_lambert_fragment:Df,lights_lambert_pars_fragment:Of,lights_pars_begin:Uf,lights_toon_fragment:kf,lights_toon_pars_fragment:Bf,lights_phong_fragment:zf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Wf,lights_fragment_maps:$f,lights_fragment_end:jf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:Yf,map_fragment:Jf,map_pars_fragment:Zf,map_particle_fragment:Qf,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:ap,morphtarget_vertex:op,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:_p,opaque_fragment:vp,packing:yp,premultiplied_alpha_fragment:xp,project_vertex:Sp,dithering_fragment:Ep,dithering_pars_fragment:bp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Rp,shadowmask_pars_fragment:Cp,skinbase_vertex:Pp,skinning_pars_vertex:Ip,skinning_vertex:Lp,skinnormal_vertex:Np,specularmap_fragment:Dp,specularmap_pars_fragment:Op,tonemapping_fragment:Up,tonemapping_pars_fragment:Fp,transmission_fragment:kp,transmission_pars_fragment:Bp,uv_pars_fragment:zp,uv_pars_vertex:Gp,uv_vertex:Hp,worldpos_vertex:Vp,background_vert:Wp,background_frag:$p,backgroundCube_vert:jp,backgroundCube_frag:qp,cube_vert:Xp,cube_frag:Kp,depth_vert:Yp,depth_frag:Jp,distance_vert:Zp,distance_frag:Qp,equirect_vert:em,equirect_frag:tm,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:am,meshlambert_frag:om,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:_m,points_vert:vm,points_frag:ym,shadow_vert:xm,shadow_frag:Sm,sprite_vert:Em,sprite_frag:bm},le={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},xn={basic:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ve(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ht([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ht([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ve(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ht([le.points,le.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ht([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ht([le.common,le.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ht([le.sprite,le.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Ht([le.common,le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Ht([le.lights,le.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};xn.physical={uniforms:Ht([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const mr={r:0,b:0,g:0},ii=new Tn,Mm=new Je;function wm(i,e,t,n,s,r,a){const o=new ve(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function _(S){let E=!1;const w=g(S);w===null?p(o,l):w&&w.isColor&&(p(w,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,E){const w=g(E);w&&(w.isCubeTexture||w.mapping===Wr)?(h===void 0&&(h=new St(new rs(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:es(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(E.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(ii)),h.material.toneMapped=We.getTransfer(w.colorSpace)!==Ye,(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new St(new as(2,2),new Lt({name:"BackgroundMaterial",uniforms:es(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=We.getTransfer(w.colorSpace)!==Ye,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,E){S.getRGB(mr,Fh(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,E,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m,dispose:x}}function Tm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,P,U,k,$){let V=!1;const z=u(k,U,P);r!==z&&(r=z,c(r.object)),V=f(M,k,U,$),V&&g(M,k,U,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,E(M,P,U,k),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,U){const k=U.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let V=$[P.id];V===void 0&&(V={},$[P.id]=V);let z=V[k];return z===void 0&&(z=d(l()),V[k]=z),z}function d(M){const P=[],U=[],k=[];for(let $=0;$<t;$++)P[$]=0,U[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,P,U,k){const $=r.attributes,V=P.attributes;let z=0;const G=U.getAttributes();for(const K in G)if(G[K].location>=0){const ae=$[K];let de=V[K];if(de===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),ae===void 0||ae.attribute!==de||de&&ae.data!==de.data)return!0;z++}return r.attributesNum!==z||r.index!==k}function g(M,P,U,k){const $={},V=P.attributes;let z=0;const G=U.getAttributes();for(const K in G)if(G[K].location>=0){let ae=V[K];ae===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const de={};de.attribute=ae,ae&&ae.data&&(de.data=ae.data),$[K]=de,z++}r.attributes=$,r.attributesNum=z,r.index=k}function _(){const M=r.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const U=r.newAttributes,k=r.enabledAttributes,$=r.attributeDivisors;U[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),$[M]!==P&&(i.vertexAttribDivisor(M,P),$[M]=P)}function x(){const M=r.newAttributes,P=r.enabledAttributes;for(let U=0,k=P.length;U<k;U++)P[U]!==M[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function S(M,P,U,k,$,V,z){z===!0?i.vertexAttribIPointer(M,P,U,$,V):i.vertexAttribPointer(M,P,U,k,$,V)}function E(M,P,U,k){_();const $=k.attributes,V=U.getAttributes(),z=P.defaultAttributeValues;for(const G in V){const K=V[G];if(K.location>=0){let ne=$[G];if(ne===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const ae=ne.normalized,de=ne.itemSize,ke=e.get(ne);if(ke===void 0)continue;const Oe=ke.buffer,_t=ke.type,ft=ke.bytesPerElement,q=_t===i.INT||_t===i.UNSIGNED_INT||ne.gpuType===rl;if(ne.isInterleavedBufferAttribute){const J=ne.data,me=J.stride,Ue=ne.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<K.locationSize;ye++)p(K.location+ye,J.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<K.locationSize;ye++)m(K.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let ye=0;ye<K.locationSize;ye++)S(K.location+ye,de/K.locationSize,_t,ae,me*ft,(Ue+de/K.locationSize*ye)*ft,q)}else{if(ne.isInstancedBufferAttribute){for(let J=0;J<K.locationSize;J++)p(K.location+J,ne.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let J=0;J<K.locationSize;J++)m(K.location+J);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let J=0;J<K.locationSize;J++)S(K.location+J,de/K.locationSize,_t,ae,de*ft,de/K.locationSize*J*ft,q)}}else if(z!==void 0){const ae=z[G];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(K.location,ae);break;case 3:i.vertexAttrib3fv(K.location,ae);break;case 4:i.vertexAttrib4fv(K.location,ae);break;default:i.vertexAttrib1fv(K.location,ae)}}}}x()}function w(){I();for(const M in n){const P=n[M];for(const U in P){const k=P[U];for(const $ in k)h(k[$].object),delete k[$];delete P[U]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const U in P){const k=P[U];for(const $ in k)h(k[$].object),delete k[$];delete P[U]}delete n[M.id]}function A(M){for(const P in n){const U=n[P];if(U[M.id]===void 0)continue;const k=U[M.id];for(const $ in k)h(k[$].object),delete k[$];delete U[M.id]}}function I(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Am(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gn&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:E,maxSamples:w,samples:T}}function Cm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new jn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,S=x*4;let E=p.clippingState||null;l.value=E,E=h(g,d,S,f);for(let w=0;w!==S;++w)E[w]=t[w];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,E=f;S!==_;++S,E+=4)a.copy(u[S]).applyMatrix4(x,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Pm(i){let e=new WeakMap;function t(a,o){return o===eo?a.mapping=mi:o===to&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===eo||o===to)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Yn=4,fc=[.125,.215,.35,.446,.526,.582],ci=20,Im=256,vs=new qr,pc=new ve;let Ca=null,Pa=0,Ia=0,La=!1;const Lm=new C;class mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Lm}=r;Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ca,Pa,Ia),this._renderer.xr.enabled=La,e.scissorTest=!1,Di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:sn,format:_n,colorSpace:Qi,depthBuffer:!1},s=gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nm(r)),this._blurMaterial=Om(r,e,t),this._ggxMaterial=Dm(r,e,t)}return s}_compileMaterial(e){const t=new St(new Ft,e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,n,s,r){const l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(pc),u.toneMapping=bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new rs,new ml({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(pc),p=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const w=this._cubeSize;Di(s,E*w,S>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===mi||e.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Di(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Yn?n-g+Yn:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Di(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,vs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Di(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,vs)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ci-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ci;m>ci&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const p=[];let x=0;for(let A=0;A<ci;++A){const I=A/_,y=Math.exp(-I*I/2);p.push(y),A===0?x+=y:A<m&&(x+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const E=this._sizeLods[s],w=3*E*(s>S-Yn?s-S+Yn:0),T=4*(this._cubeSize-E);Di(t,w,T,3*E,2*E),l.setRenderTarget(t),l.render(u,vs)}}function Nm(i){const e=[],t=[],n=[];let s=i;const r=i-Yn+1+fc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Yn?l=fc[a-i+Yn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),S=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,I=T>2?0:-1,y=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(y,_*g*T),S.set(d,m*g*T);const M=[T,T,T,T,T,T];E.set(M,p*g*T)}const w=new Ft;w.setAttribute("position",new Kt(x,_)),w.setAttribute("uv",new Kt(S,m)),w.setAttribute("faceIndex",new Kt(E,p)),n.push(new St(w,null)),s>Yn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function gc(i,e,t){const n=new Wt(i,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Di(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dm(i,e,t){return new Lt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Im,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Om(i,e,t){const n=new Float32Array(ci),s=new C(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xr(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function _c(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xr(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function vc(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Xr(){return`

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
	`}function Um(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===eo||l===to,h=l===mi||l===Ji;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new mc(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new mc(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Fm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function km(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let S=0,E=x.length;S<E;S+=3){const w=x[S+0],T=x[S+1],A=x[S+2];d.push(w,T,T,A,A,w)}}else if(g!==void 0){const x=g.array;_=g.version;for(let S=0,E=x.length/3-1;S<E;S+=3){const w=S+0,T=S+1,A=S+2;d.push(w,T,T,A,A,w)}}else return;const m=new(Ph(d)?Uh:Oh)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Bm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gm(i,e,t){const n=new WeakMap,s=new mt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let w=o.attributes.position.count*E,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*T*4*u),I=new Ih(A,w,T,u);I.type=gn,I.needsUpdate=!0;const y=E*4;for(let P=0;P<u;P++){const U=p[P],k=x[P],$=S[P],V=w*T*4*P;for(let z=0;z<U.count;z++){const G=z*y;g===!0&&(s.fromBufferAttribute(U,z),A[V+G+0]=s.x,A[V+G+1]=s.y,A[V+G+2]=s.z,A[V+G+3]=0),_===!0&&(s.fromBufferAttribute(k,z),A[V+G+4]=s.x,A[V+G+5]=s.y,A[V+G+6]=s.z,A[V+G+7]=0),m===!0&&(s.fromBufferAttribute($,z),A[V+G+8]=s.x,A[V+G+9]=s.y,A[V+G+10]=s.z,A[V+G+11]=$.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new Le(w,T)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hm(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Vm={[Qo]:"LINEAR_TONE_MAPPING",[el]:"REINHARD_TONE_MAPPING",[tl]:"CINEON_TONE_MAPPING",[Vr]:"ACES_FILMIC_TONE_MAPPING",[il]:"AGX_TONE_MAPPING",[sl]:"NEUTRAL_TONE_MAPPING",[nl]:"CUSTOM_TONE_MAPPING"};function Wm(i,e,t,n,s){const r=new Wt(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Wt(e,t,{type:sn,depthBuffer:!1,stencilBuffer:!1}),o=new Ft;o.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new gt([0,2,0,0,2,0],2));const l=new Wh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new St(o,l),h=new qr(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(x,S){r.setSize(x,S),a.setSize(x,S);for(let E=0;E<m.length;E++){const w=m[E];w.setSize&&w.setSize(x,S)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;const S=r.width,E=r.height;for(let w=0;w<m.length;w++){const T=m[w];T.setSize&&T.setSize(S,E)}},this.begin=function(x,S){if(f||x.toneMapping===bn&&m.length===0)return!1;if(_=S,S!==null){const E=S.width,w=S.height;(r.width!==E||r.height!==w)&&this.setSize(E,w)}return p===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=bn,!0},this.hasRenderPass=function(){return p},this.end=function(x,S){x.toneMapping=g,f=!0;let E=r,w=a;for(let T=0;T<m.length;T++){const A=m[T];if(A.enabled!==!1&&(A.render(x,w,E,S),A.needsSwap!==!1)){const I=E;E=w,w=I}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,l.defines={},We.getTransfer(u)===Ye&&(l.defines.SRGB_TRANSFER="");const T=Vm[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(_),x.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const qh=new zt,ko=new Os(1,1),Xh=new Ih,Kh=new cd,Yh=new Bh,yc=[],xc=[],Sc=new Float32Array(16),Ec=new Float32Array(9),bc=new Float32Array(4);function os(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=yc[s];if(r===void 0&&(r=new Float32Array(s),yc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Kr(i,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;bc.set(n),i.uniformMatrix2fv(this.addr,!1,bc),Ct(t,n)}}function Ym(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Ec.set(n),i.uniformMatrix3fv(this.addr,!1,Ec),Ct(t,n)}}function Jm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Sc.set(n),i.uniformMatrix4fv(this.addr,!1,Sc),Ct(t,n)}}function Zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function ng(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function ag(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ko.compareFunction=t.isReversedDepthBuffer()?fl:dl,r=ko):r=qh,t.setTexture2D(e||r,s)}function og(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kh,s)}function lg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Yh,s)}function cg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xh,s)}function hg(i){switch(i){case 5126:return $m;case 35664:return jm;case 35665:return qm;case 35666:return Xm;case 35674:return Km;case 35675:return Ym;case 35676:return Jm;case 5124:case 35670:return Zm;case 35667:case 35671:return Qm;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(i,e){i.uniform1fv(this.addr,e)}function dg(i,e){const t=os(e,this.size,2);i.uniform2fv(this.addr,t)}function fg(i,e){const t=os(e,this.size,3);i.uniform3fv(this.addr,t)}function pg(i,e){const t=os(e,this.size,4);i.uniform4fv(this.addr,t)}function mg(i,e){const t=os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gg(i,e){const t=os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _g(i,e){const t=os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vg(i,e){i.uniform1iv(this.addr,e)}function yg(i,e){i.uniform2iv(this.addr,e)}function xg(i,e){i.uniform3iv(this.addr,e)}function Sg(i,e){i.uniform4iv(this.addr,e)}function Eg(i,e){i.uniform1uiv(this.addr,e)}function bg(i,e){i.uniform2uiv(this.addr,e)}function Mg(i,e){i.uniform3uiv(this.addr,e)}function wg(i,e){i.uniform4uiv(this.addr,e)}function Tg(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ko:a=qh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ag(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Kh,r[a])}function Rg(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Yh,r[a])}function Cg(i,e,t){const n=this.cache,s=e.length,r=Kr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xh,r[a])}function Pg(i){switch(i){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return xg;case 35669:case 35673:return Sg;case 5125:return Eg;case 36294:return bg;case 36295:return Mg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}class Ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hg(t.type)}}class Lg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pg(t.type)}}class Ng{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Mc(i,e){i.seq.push(e),i.map[e.id]=e}function Dg(i,e,t){const n=i.name,s=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),a=Na.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mc(t,c===void 0?new Ig(o,i,e):new Lg(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ng(o),Mc(t,u)),t=u}}}class Cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Dg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function wc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Og=37297;let Ug=0;function Fg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Tc=new Fe;function kg(i){We._getMatrix(Tc,We.workingColorSpace,i);const e=`mat3( ${Tc.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Nr:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ac(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Fg(i.getShaderSource(e),o)}else return r}function Bg(i,e){const t=kg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zg={[Qo]:"Linear",[el]:"Reinhard",[tl]:"Cineon",[Vr]:"ACESFilmic",[il]:"AgX",[sl]:"Neutral",[nl]:"Custom"};function Gg(i,e){const t=zg[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gr=new C;function Hg(){We.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),e=gr.y.toFixed(4),t=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function Wg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $g(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function bs(i){return i!==""}function Rc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(i){return i.replace(jg,Xg)}const qg=new Map;function Xg(i,e){let t=Be[e];if(t===void 0){const n=qg.get(e);if(n!==void 0)t=Be[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bo(t)}const Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(i){return i.replace(Kg,Yg)}function Yg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ic(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Jg={[As]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function Zg(i){return Jg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qg={[mi]:"ENVMAP_TYPE_CUBE",[Ji]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE_UV"};function e0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Qg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const t0={[Ji]:"ENVMAP_MODE_REFRACTION"};function n0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":t0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i0={[Sh]:"ENVMAP_BLENDING_MULTIPLY",[Vu]:"ENVMAP_BLENDING_MIX",[Wu]:"ENVMAP_BLENDING_ADD"};function s0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":i0[i.combine]||"ENVMAP_BLENDING_NONE"}function r0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function a0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zg(t),c=e0(t),h=n0(t),u=s0(t),d=r0(t),f=Vg(t),g=Wg(r),_=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Be.tonemapping_pars_fragment:"",t.toneMapping!==bn?Gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Bg("linearToOutputTexel",t.outputColorSpace),Hg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),a=Bo(a),a=Rc(a,t),a=Cc(a,t),o=Bo(o),o=Rc(o,t),o=Cc(o,t),a=Pc(a),o=Pc(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=x+m+a,E=x+p+o,w=wc(s,s.VERTEX_SHADER,S),T=wc(s,s.FRAGMENT_SHADER,E);s.attachShader(_,w),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(w)||"",$=s.getShaderInfoLog(T)||"",V=U.trim(),z=k.trim(),G=$.trim();let K=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,T);else{const ae=Ac(s,w,"vertex"),de=Ac(s,T,"fragment");Xe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ae+`
`+de)}else V!==""?De("WebGLProgram: Program Info Log:",V):(z===""||G==="")&&(ne=!1);ne&&(P.diagnostics={runnable:K,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(w),s.deleteShader(T),I=new Cr(s,_),y=$g(s,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Og)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ug++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let o0=0;class l0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new c0(e),t.set(e,n)),n}}class c0{constructor(e){this.id=o0++,this.code=e,this.usedTimes=0}}function h0(i,e,t,n,s,r,a){const o=new Nh,l=new l0,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,U,k){const $=U.fog,V=k.geometry,z=y.isMeshStandardMaterial?U.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||z),K=G&&G.mapping===Wr?G.image.height:null,ne=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&De("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=ae!==void 0?ae.length:0;let ke=0;V.morphAttributes.position!==void 0&&(ke=1),V.morphAttributes.normal!==void 0&&(ke=2),V.morphAttributes.color!==void 0&&(ke=3);let Oe,_t,ft,q;if(ne){const Qe=xn[ne];Oe=Qe.vertexShader,_t=Qe.fragmentShader}else Oe=y.vertexShader,_t=y.fragmentShader,l.update(y),ft=l.getVertexShaderID(y),q=l.getFragmentShaderID(y);const J=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,je=!!y.map,Pt=!!y.matcap,$e=!!G,Ze=!!y.aoMap,it=!!y.lightMap,ze=!!y.bumpMap,Et=!!y.normalMap,L=!!y.displacementMap,bt=!!y.emissiveMap,Ke=!!y.metalnessMap,rt=!!y.roughnessMap,Se=y.anisotropy>0,R=y.clearcoat>0,v=y.dispersion>0,D=y.iridescence>0,j=y.sheen>0,Y=y.transmission>0,W=Se&&!!y.anisotropyMap,Me=R&&!!y.clearcoatMap,se=R&&!!y.clearcoatNormalMap,xe=R&&!!y.clearcoatRoughnessMap,Ie=D&&!!y.iridescenceMap,ee=D&&!!y.iridescenceThicknessMap,oe=j&&!!y.sheenColorMap,_e=j&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,re=!!y.specularColorMap,Ge=!!y.specularIntensityMap,N=Y&&!!y.transmissionMap,ue=Y&&!!y.thicknessMap,te=!!y.gradientMap,fe=!!y.alphaMap,Q=y.alphaTest>0,X=!!y.alphaHash,ie=!!y.extensions;let Ne=bn;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const at={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:Oe,fragmentShader:_t,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Qi,alphaToCoverage:!!y.alphaToCoverage,map:je,matcap:Pt,envMap:$e,envMapMode:$e&&G.mapping,envMapCubeUVHeight:K,aoMap:Ze,lightMap:it,bumpMap:ze,normalMap:Et,displacementMap:L,emissiveMap:bt,normalMapObjectSpace:Et&&y.normalMapType===qu,normalMapTangentSpace:Et&&y.normalMapType===Ch,metalnessMap:Ke,roughnessMap:rt,anisotropy:Se,anisotropyMap:W,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:v,iridescence:D,iridescenceMap:Ie,iridescenceThicknessMap:ee,sheen:j,sheenColorMap:oe,sheenRoughnessMap:_e,specularMap:Ee,specularColorMap:re,specularIntensityMap:Ge,transmission:Y,transmissionMap:N,thicknessMap:ue,gradientMap:te,opaque:y.transparent===!1&&y.blending===ji&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:Q,alphaHash:X,combine:y.combine,mapUv:je&&_(y.map.channel),aoMapUv:Ze&&_(y.aoMap.channel),lightMapUv:it&&_(y.lightMap.channel),bumpMapUv:ze&&_(y.bumpMap.channel),normalMapUv:Et&&_(y.normalMap.channel),displacementMapUv:L&&_(y.displacementMap.channel),emissiveMapUv:bt&&_(y.emissiveMap.channel),metalnessMapUv:Ke&&_(y.metalnessMap.channel),roughnessMapUv:rt&&_(y.roughnessMap.channel),anisotropyMapUv:W&&_(y.anisotropyMap.channel),clearcoatMapUv:Me&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(y.sheenRoughnessMap.channel),specularMapUv:Ee&&_(y.specularMap.channel),specularColorMapUv:re&&_(y.specularColorMap.channel),specularIntensityMapUv:Ge&&_(y.specularIntensityMap.channel),transmissionMapUv:N&&_(y.transmissionMap.channel),thicknessMapUv:ue&&_(y.thicknessMap.channel),alphaMapUv:fe&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Et||Se),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(je||fe),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:je&&y.map.isVideoTexture===!0&&We.getTransfer(y.map.colorSpace)===Ye,decodeVideoTextureEmissive:bt&&y.emissiveMap.isVideoTexture===!0&&We.getTransfer(y.emissiveMap.colorSpace)===Ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dn,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ie&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&y.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(x(M,y),S(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function x(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){const M=g[y.type];let P;if(M){const U=xn[M];P=gi.clone(U.uniforms)}else P=y.uniforms;return P}function w(y,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new a0(i,M,y,r),h.push(P),u.set(M,P)),P}function T(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function A(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:w,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:I}}function u0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function d0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||d0),n.length>1&&n.sort(d||Lc),s.length>1&&s.sort(d||Lc)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function f0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Nc,i.set(n,[a])):s>=r.length?(a=new Nc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function p0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ve};break;case"SpotLight":t={position:new C,direction:new C,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function m0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let g0=0;function _0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v0(i){const e=new p0,t=m0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new Je,a=new Je;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,S=0,E=0,w=0,T=0,A=0;c.sort(_0);for(let y=0,M=c.length;y<M;y++){const P=c[y],U=P.color,k=P.intensity,$=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Zi?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=U.r*k,u+=U.g*k,d+=U.b*k;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],k);A++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=z,f++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(U).multiplyScalar(k),z.distance=$,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[_]=z;const G=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,G.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=G.matrix,P.castShadow){const K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=V,E++}_++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(U).multiplyScalar(k),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const G=P.shadow,K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=z,g++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(k),z.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==S||I.numSpotShadows!==E||I.numSpotMaps!==w||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=E+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=S,I.numSpotShadows=E,I.numSpotMaps=w,I.numLightProbes=A,n.version=g0++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const S=c[p];if(S.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(S.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Dc(i){const e=new v0(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function y0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Dc(i),e.set(s,[o])):r>=a.length?(o=new Dc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,E0=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],b0=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Oc=new Je,ys=new C,Da=new C;function M0(i,e,t){let n=new gl;const s=new Le,r=new Le,a=new mt,o=new Nd,l=new Dd,c={},h=t.maxTextureSize,u={[Mn]:Vt,[Vt]:Mn,[Dn]:Dn},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:x0,fragmentShader:S0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=As;let p=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;T.type===Mu&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=As);const y=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(En),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==this.type;k&&A.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(V=>V.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,V=T.length;$<V;$++){const z=T[$],G=z.shadow;if(G===void 0){De("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const K=G.getFrameExtents();if(s.multiply(K),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,G.mapSize.y=r.y)),G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Es){if(z.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Wt(s.x,s.y,{format:Zi,type:sn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new Os(s.x,s.y,gn),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=Fn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ot,G.map.depthTexture.magFilter=Ot}else{z.isPointLight?(G.map=new zh(s.x),G.map.depthTexture=new Ld(s.x,wn)):(G.map=new Wt(s.x,s.y),G.map.depthTexture=new Os(s.x,s.y,wn)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=Fn;const ae=i.state.buffers.depth.getReversed();this.type===As?(G.map.depthTexture.compareFunction=ae?fl:dl,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ot,G.map.depthTexture.magFilter=Ot)}G.camera.updateProjectionMatrix()}const ne=G.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<ne;ae++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(G.map),i.clear());const de=G.getViewport(ae);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),U.viewport(a)}if(z.isPointLight){const de=G.camera,ke=G.matrix,Oe=z.distance||de.far;Oe!==de.far&&(de.far=Oe,de.updateProjectionMatrix()),ys.setFromMatrixPosition(z.matrixWorld),de.position.copy(ys),Da.copy(de.position),Da.add(E0[ae]),de.up.copy(b0[ae]),de.lookAt(Da),de.updateMatrixWorld(),ke.makeTranslation(-ys.x,-ys.y,-ys.z),Oc.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Oc,de.coordinateSystem,de.reversedDepth)}else G.updateMatrices(z);n=G.getFrustum(),E(A,I,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Es&&x(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,P)};function x(T,A){const I=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wt(s.x,s.y,{format:Zi,type:sn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,f,_,null)}function S(T,A,I,y){let M=null;const P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=M.uuid,k=A.uuid;let $=c[U];$===void 0&&($={},c[U]=$);let V=$[k];V===void 0&&(V=M.clone(),$[k]=V,A.addEventListener("dispose",w)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,y===Es?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=I}return M}function E(T,A,I,y,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Es)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const k=e.update(T),$=T.material;if(Array.isArray($)){const V=k.groups;for(let z=0,G=V.length;z<G;z++){const K=V[z],ne=$[K.materialIndex];if(ne&&ne.visible){const ae=S(T,ne,y,M);T.onBeforeShadow(i,T,A,I,k,ae,K),i.renderBufferDirect(I,null,k,ae,T,K),T.onAfterShadow(i,T,A,I,k,ae,K)}}}else if($.visible){const V=S(T,$,y,M);T.onBeforeShadow(i,T,A,I,k,V,null),i.renderBufferDirect(I,null,k,V,T,null),T.onAfterShadow(i,T,A,I,k,V,null)}}const U=T.children;for(let k=0,$=U.length;k<$;k++)E(U[k],A,I,y,M)}function w(T){T.target.removeEventListener("dispose",w);for(const I in c){const y=c[I],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const w0={[qa]:Xa,[Ka]:Za,[Ya]:Qa,[Yi]:Ja,[Xa]:qa,[Za]:Ka,[Qa]:Ya,[Ja]:Yi};function T0(i,e){function t(){let N=!1;const ue=new mt;let te=null;const fe=new mt(0,0,0,0);return{setMask:function(Q){te!==Q&&!N&&(i.colorMask(Q,Q,Q,Q),te=Q)},setLocked:function(Q){N=Q},setClear:function(Q,X,ie,Ne,at){at===!0&&(Q*=Ne,X*=Ne,ie*=Ne),ue.set(Q,X,ie,Ne),fe.equals(ue)===!1&&(i.clearColor(Q,X,ie,Ne),fe.copy(ue))},reset:function(){N=!1,te=null,fe.set(-1,0,0,0)}}}function n(){let N=!1,ue=!1,te=null,fe=null,Q=null;return{setReversed:function(X){if(ue!==X){const ie=e.get("EXT_clip_control");X?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),ue=X;const Ne=Q;Q=null,this.setClear(Ne)}},getReversed:function(){return ue},setTest:function(X){X?J(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(X){te!==X&&!N&&(i.depthMask(X),te=X)},setFunc:function(X){if(ue&&(X=w0[X]),fe!==X){switch(X){case qa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=X}},setLocked:function(X){N=X},setClear:function(X){Q!==X&&(ue&&(X=1-X),i.clearDepth(X),Q=X)},reset:function(){N=!1,te=null,fe=null,Q=null,ue=!1}}}function s(){let N=!1,ue=null,te=null,fe=null,Q=null,X=null,ie=null,Ne=null,at=null;return{setTest:function(Qe){N||(Qe?J(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Qe){ue!==Qe&&!N&&(i.stencilMask(Qe),ue=Qe)},setFunc:function(Qe,vn,An){(te!==Qe||fe!==vn||Q!==An)&&(i.stencilFunc(Qe,vn,An),te=Qe,fe=vn,Q=An)},setOp:function(Qe,vn,An){(X!==Qe||ie!==vn||Ne!==An)&&(i.stencilOp(Qe,vn,An),X=Qe,ie=vn,Ne=An)},setLocked:function(Qe){N=Qe},setClear:function(Qe){at!==Qe&&(i.clearStencil(Qe),at=Qe)},reset:function(){N=!1,ue=null,te=null,fe=null,Q=null,X=null,ie=null,Ne=null,at=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,S=null,E=null,w=null,T=null,A=new ve(0,0,0),I=0,y=!1,M=null,P=null,U=null,k=null,$=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=G>=2);let ne=null,ae={};const de=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Oe=new mt().fromArray(de),_t=new mt().fromArray(ke);function ft(N,ue,te,fe){const Q=new Uint8Array(4),X=i.createTexture();i.bindTexture(N,X),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<te;ie++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ue+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return X}const q={};q[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Yi),ze(!1),Et(Ol),J(i.CULL_FACE),Ze(En);function J(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function me(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ue(N,ue){return u[N]!==ue?(i.bindFramebuffer(N,ue),u[N]=ue,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function ye(N,ue){let te=f,fe=!1;if(N){te=d.get(ue),te===void 0&&(te=[],d.set(ue,te));const Q=N.textures;if(te.length!==Q.length||te[0]!==i.COLOR_ATTACHMENT0){for(let X=0,ie=Q.length;X<ie;X++)te[X]=i.COLOR_ATTACHMENT0+X;te.length=Q.length,fe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,fe=!0);fe&&i.drawBuffers(te)}function je(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Pt={[li]:i.FUNC_ADD,[Tu]:i.FUNC_SUBTRACT,[Au]:i.FUNC_REVERSE_SUBTRACT};Pt[Ru]=i.MIN,Pt[Cu]=i.MAX;const $e={[Pu]:i.ZERO,[Iu]:i.ONE,[Lu]:i.SRC_COLOR,[$a]:i.SRC_ALPHA,[ku]:i.SRC_ALPHA_SATURATE,[Uu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[Fu]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA,[Bu]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(N,ue,te,fe,Q,X,ie,Ne,at,Qe){if(N===En){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),N!==wu){if(N!==m||Qe!==y){if((p!==li||E!==li)&&(i.blendEquation(i.FUNC_ADD),p=li,E=li),Qe)switch(N){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lr:i.blendFunc(i.ONE,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",N);break}else switch(N){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ul:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",N);break}x=null,S=null,w=null,T=null,A.set(0,0,0),I=0,m=N,y=Qe}return}Q=Q||ue,X=X||te,ie=ie||fe,(ue!==p||Q!==E)&&(i.blendEquationSeparate(Pt[ue],Pt[Q]),p=ue,E=Q),(te!==x||fe!==S||X!==w||ie!==T)&&(i.blendFuncSeparate($e[te],$e[fe],$e[X],$e[ie]),x=te,S=fe,w=X,T=ie),(Ne.equals(A)===!1||at!==I)&&(i.blendColor(Ne.r,Ne.g,Ne.b,at),A.copy(Ne),I=at),m=N,y=!1}function it(N,ue){N.side===Dn?me(i.CULL_FACE):J(i.CULL_FACE);let te=N.side===Vt;ue&&(te=!te),ze(te),N.blending===ji&&N.transparent===!1?Ze(En):Ze(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const fe=N.stencilWrite;o.setTest(fe),fe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function Et(N){N!==Eu?(J(i.CULL_FACE),N!==P&&(N===Ol?i.cullFace(i.BACK):N===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),P=N}function L(N){N!==U&&(z&&i.lineWidth(N),U=N)}function bt(N,ue,te){N?(J(i.POLYGON_OFFSET_FILL),(k!==ue||$!==te)&&(i.polygonOffset(ue,te),k=ue,$=te)):me(i.POLYGON_OFFSET_FILL)}function Ke(N){N?J(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function rt(N){N===void 0&&(N=i.TEXTURE0+V-1),ne!==N&&(i.activeTexture(N),ne=N)}function Se(N,ue,te){te===void 0&&(ne===null?te=i.TEXTURE0+V-1:te=ne);let fe=ae[te];fe===void 0&&(fe={type:void 0,texture:void 0},ae[te]=fe),(fe.type!==N||fe.texture!==ue)&&(ne!==te&&(i.activeTexture(te),ne=te),i.bindTexture(N,ue||q[N]),fe.type=N,fe.texture=ue)}function R(){const N=ae[ne];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function j(){try{i.texSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Y(){try{i.texSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function se(){try{i.texStorage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function xe(){try{i.texStorage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Ie(){try{i.texImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function ee(){try{i.texImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function oe(N){Oe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Oe.copy(N))}function _e(N){_t.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),_t.copy(N))}function Ee(N,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let fe=te.get(N);fe===void 0&&(fe=i.getUniformBlockIndex(ue,N.name),te.set(N,fe))}function re(N,ue){const fe=c.get(ue).get(N);l.get(ue)!==fe&&(i.uniformBlockBinding(ue,fe,N.__bindingPointIndex),l.set(ue,fe))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,ae={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,S=null,E=null,w=null,T=null,A=new ve(0,0,0),I=0,y=!1,M=null,P=null,U=null,k=null,$=null,Oe.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:me,bindFramebuffer:Ue,drawBuffers:ye,useProgram:je,setBlending:Ze,setMaterial:it,setFlipSided:ze,setCullFace:Et,setLineWidth:L,setPolygonOffset:bt,setScissorTest:Ke,activeTexture:rt,bindTexture:Se,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:D,texImage2D:Ie,texImage3D:ee,updateUBOMapping:Ee,uniformBlockBinding:re,texStorage2D:se,texStorage3D:xe,texSubImage2D:j,texSubImage3D:Y,compressedTexSubImage2D:W,compressedTexSubImage3D:Me,scissor:oe,viewport:_e,reset:Ge}}function A0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return f?new OffscreenCanvas(R,v):Or("canvas")}function _(R,v,D){let j=1;const Y=Se(R);if((Y.width>D||Y.height>D)&&(j=D/Math.max(Y.width,Y.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const W=Math.floor(j*Y.width),Me=Math.floor(j*Y.height);u===void 0&&(u=g(W,Me));const se=v?g(W,Me):u;return se.width=W,se.height=Me,se.getContext("2d").drawImage(R,0,0,W,Me),De("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+W+"x"+Me+")."),se}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,v,D,j,Y=!1){if(R!==null){if(i[R]!==void 0)return i[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=v;if(v===i.RED&&(D===i.FLOAT&&(W=i.R32F),D===i.HALF_FLOAT&&(W=i.R16F),D===i.UNSIGNED_BYTE&&(W=i.R8)),v===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.R8UI),D===i.UNSIGNED_SHORT&&(W=i.R16UI),D===i.UNSIGNED_INT&&(W=i.R32UI),D===i.BYTE&&(W=i.R8I),D===i.SHORT&&(W=i.R16I),D===i.INT&&(W=i.R32I)),v===i.RG&&(D===i.FLOAT&&(W=i.RG32F),D===i.HALF_FLOAT&&(W=i.RG16F),D===i.UNSIGNED_BYTE&&(W=i.RG8)),v===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RG8UI),D===i.UNSIGNED_SHORT&&(W=i.RG16UI),D===i.UNSIGNED_INT&&(W=i.RG32UI),D===i.BYTE&&(W=i.RG8I),D===i.SHORT&&(W=i.RG16I),D===i.INT&&(W=i.RG32I)),v===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RGB8UI),D===i.UNSIGNED_SHORT&&(W=i.RGB16UI),D===i.UNSIGNED_INT&&(W=i.RGB32UI),D===i.BYTE&&(W=i.RGB8I),D===i.SHORT&&(W=i.RGB16I),D===i.INT&&(W=i.RGB32I)),v===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),D===i.UNSIGNED_INT&&(W=i.RGBA32UI),D===i.BYTE&&(W=i.RGBA8I),D===i.SHORT&&(W=i.RGBA16I),D===i.INT&&(W=i.RGBA32I)),v===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),v===i.RGBA){const Me=Y?Nr:We.getTransfer(j);D===i.FLOAT&&(W=i.RGBA32F),D===i.HALF_FLOAT&&(W=i.RGBA16F),D===i.UNSIGNED_BYTE&&(W=Me===Ye?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(R,v){let D;return R?v===null||v===wn||v===Ns?D=i.DEPTH24_STENCIL8:v===gn?D=i.DEPTH32F_STENCIL8:v===Ls&&(D=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wn||v===Ns?D=i.DEPTH_COMPONENT24:v===gn?D=i.DEPTH_COMPONENT32F:v===Ls&&(D=i.DEPTH_COMPONENT16),D}function w(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ot&&R.minFilter!==Ut?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function T(R){const v=R.target;v.removeEventListener("dispose",T),I(v),v.isVideoTexture&&h.delete(v)}function A(R){const v=R.target;v.removeEventListener("dispose",A),M(v)}function I(R){const v=n.get(R);if(v.__webglInit===void 0)return;const D=R.source,j=d.get(D);if(j){const Y=j[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&y(R),Object.keys(j).length===0&&d.delete(D)}n.remove(R)}function y(R){const v=n.get(R);i.deleteTexture(v.__webglTexture);const D=R.source,j=d.get(D);delete j[v.__cacheKey],a.memory.textures--}function M(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let Y=0;Y<v.__webglFramebuffer[j].length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[j][Y]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=R.textures;for(let j=0,Y=D.length;j<Y;j++){const W=n.get(D[j]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(D[j])}n.remove(R)}let P=0;function U(){P=0}function k(){const R=P;return R>=s.maxTextures&&De("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function $(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function V(R,v){const D=n.get(R);if(R.isVideoTexture&&Ke(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&D.__version!==R.version){const j=R.image;if(j===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{q(D,R,v);return}}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+v)}function z(R,v){const D=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){q(D,R,v);return}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+v)}function G(R,v){const D=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){q(D,R,v);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+v)}function K(R,v){const D=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&D.__version!==R.version){J(D,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+v)}const ne={[Is]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},ae={[Ot]:i.NEAREST,[$u]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},de={[Xu]:i.NEVER,[Qu]:i.ALWAYS,[Ku]:i.LESS,[dl]:i.LEQUAL,[Yu]:i.EQUAL,[fl]:i.GEQUAL,[Ju]:i.GREATER,[Zu]:i.NOTEQUAL};function ke(R,v){if(v.type===gn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ut||v.magFilter===ia||v.magFilter===Xs||v.magFilter===di||v.minFilter===Ut||v.minFilter===ia||v.minFilter===Xs||v.minFilter===di)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ne[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ne[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ne[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ae[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ae[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,de[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ot||v.minFilter!==Xs&&v.minFilter!==di||v.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Oe(R,v){let D=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",T));const j=v.source;let Y=d.get(j);Y===void 0&&(Y={},d.set(j,Y));const W=$(v);if(W!==R.__cacheKey){Y[W]===void 0&&(Y[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Y[W].usedTimes++;const Me=Y[R.__cacheKey];Me!==void 0&&(Y[R.__cacheKey].usedTimes--,Me.usedTimes===0&&y(v)),R.__cacheKey=W,R.__webglTexture=Y[W].texture}return D}function _t(R,v,D){return Math.floor(Math.floor(R/D)/v)}function ft(R,v,D,j){const W=R.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,D,j,v.data);else{W.sort((ee,oe)=>ee.start-oe.start);let Me=0;for(let ee=1;ee<W.length;ee++){const oe=W[Me],_e=W[ee],Ee=oe.start+oe.count,re=_t(_e.start,v.width,4),Ge=_t(oe.start,v.width,4);_e.start<=Ee+1&&re===Ge&&_t(_e.start+_e.count-1,v.width,4)===re?oe.count=Math.max(oe.count,_e.start+_e.count-oe.start):(++Me,W[Me]=_e)}W.length=Me+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ee=0,oe=W.length;ee<oe;ee++){const _e=W[ee],Ee=Math.floor(_e.start/4),re=Math.ceil(_e.count/4),Ge=Ee%v.width,N=Math.floor(Ee/v.width),ue=re,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ge,N,ue,te,D,j,v.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function q(R,v,D){let j=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=i.TEXTURE_3D);const Y=Oe(R,v),W=v.source;t.bindTexture(j,R.__webglTexture,i.TEXTURE0+D);const Me=n.get(W);if(W.version!==Me.__version||Y===!0){t.activeTexture(i.TEXTURE0+D);const se=We.getPrimaries(We.workingColorSpace),xe=v.colorSpace===Xn?null:We.getPrimaries(v.colorSpace),Ie=v.colorSpace===Xn||se===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ee=_(v.image,!1,s.maxTextureSize);ee=rt(v,ee);const oe=r.convert(v.format,v.colorSpace),_e=r.convert(v.type);let Ee=S(v.internalFormat,oe,_e,v.colorSpace,v.isVideoTexture);ke(j,v);let re;const Ge=v.mipmaps,N=v.isVideoTexture!==!0,ue=Me.__version===void 0||Y===!0,te=W.dataReady,fe=w(v,ee);if(v.isDepthTexture)Ee=E(v.format===fi,v.type),ue&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ee,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ee,ee.width,ee.height,0,oe,_e,null));else if(v.isDataTexture)if(Ge.length>0){N&&ue&&t.texStorage2D(i.TEXTURE_2D,fe,Ee,Ge[0].width,Ge[0].height);for(let Q=0,X=Ge.length;Q<X;Q++)re=Ge[Q],N?te&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,oe,_e,re.data):t.texImage2D(i.TEXTURE_2D,Q,Ee,re.width,re.height,0,oe,_e,re.data);v.generateMipmaps=!1}else N?(ue&&t.texStorage2D(i.TEXTURE_2D,fe,Ee,ee.width,ee.height),te&&ft(v,ee,oe,_e)):t.texImage2D(i.TEXTURE_2D,0,Ee,ee.width,ee.height,0,oe,_e,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ee,Ge[0].width,Ge[0].height,ee.depth);for(let Q=0,X=Ge.length;Q<X;Q++)if(re=Ge[Q],v.format!==_n)if(oe!==null)if(N){if(te)if(v.layerUpdates.size>0){const ie=dc(re.width,re.height,v.format,v.type);for(const Ne of v.layerUpdates){const at=re.data.subarray(Ne*ie/re.data.BYTES_PER_ELEMENT,(Ne+1)*ie/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ne,re.width,re.height,1,oe,at)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,ee.depth,oe,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ee,re.width,re.height,ee.depth,0,re.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,ee.depth,oe,_e,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ee,re.width,re.height,ee.depth,0,oe,_e,re.data)}else{N&&ue&&t.texStorage2D(i.TEXTURE_2D,fe,Ee,Ge[0].width,Ge[0].height);for(let Q=0,X=Ge.length;Q<X;Q++)re=Ge[Q],v.format!==_n?oe!==null?N?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,oe,re.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ee,re.width,re.height,0,re.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?te&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,oe,_e,re.data):t.texImage2D(i.TEXTURE_2D,Q,Ee,re.width,re.height,0,oe,_e,re.data)}else if(v.isDataArrayTexture)if(N){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ee,ee.width,ee.height,ee.depth),te)if(v.layerUpdates.size>0){const Q=dc(ee.width,ee.height,v.format,v.type);for(const X of v.layerUpdates){const ie=ee.data.subarray(X*Q/ee.data.BYTES_PER_ELEMENT,(X+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,ee.width,ee.height,1,oe,_e,ie)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,oe,_e,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,ee.width,ee.height,ee.depth,0,oe,_e,ee.data);else if(v.isData3DTexture)N?(ue&&t.texStorage3D(i.TEXTURE_3D,fe,Ee,ee.width,ee.height,ee.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,oe,_e,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,ee.width,ee.height,ee.depth,0,oe,_e,ee.data);else if(v.isFramebufferTexture){if(ue)if(N)t.texStorage2D(i.TEXTURE_2D,fe,Ee,ee.width,ee.height);else{let Q=ee.width,X=ee.height;for(let ie=0;ie<fe;ie++)t.texImage2D(i.TEXTURE_2D,ie,Ee,Q,X,0,oe,_e,null),Q>>=1,X>>=1}}else if(Ge.length>0){if(N&&ue){const Q=Se(Ge[0]);t.texStorage2D(i.TEXTURE_2D,fe,Ee,Q.width,Q.height)}for(let Q=0,X=Ge.length;Q<X;Q++)re=Ge[Q],N?te&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,oe,_e,re):t.texImage2D(i.TEXTURE_2D,Q,Ee,oe,_e,re);v.generateMipmaps=!1}else if(N){if(ue){const Q=Se(ee);t.texStorage2D(i.TEXTURE_2D,fe,Ee,Q.width,Q.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,_e,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ee,oe,_e,ee);m(v)&&p(j),Me.__version=W.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function J(R,v,D){if(v.image.length!==6)return;const j=Oe(R,v),Y=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+D);const W=n.get(Y);if(Y.version!==W.__version||j===!0){t.activeTexture(i.TEXTURE0+D);const Me=We.getPrimaries(We.workingColorSpace),se=v.colorSpace===Xn?null:We.getPrimaries(v.colorSpace),xe=v.colorSpace===Xn||Me===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ie=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let X=0;X<6;X++)!Ie&&!ee?oe[X]=_(v.image[X],!0,s.maxCubemapSize):oe[X]=ee?v.image[X].image:v.image[X],oe[X]=rt(v,oe[X]);const _e=oe[0],Ee=r.convert(v.format,v.colorSpace),re=r.convert(v.type),Ge=S(v.internalFormat,Ee,re,v.colorSpace),N=v.isVideoTexture!==!0,ue=W.__version===void 0||j===!0,te=Y.dataReady;let fe=w(v,_e);ke(i.TEXTURE_CUBE_MAP,v);let Q;if(Ie){N&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ge,_e.width,_e.height);for(let X=0;X<6;X++){Q=oe[X].mipmaps;for(let ie=0;ie<Q.length;ie++){const Ne=Q[ie];v.format!==_n?Ee!==null?N?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,Ne.width,Ne.height,Ee,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,Ge,Ne.width,Ne.height,0,Ne.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,Ne.width,Ne.height,Ee,re,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,Ge,Ne.width,Ne.height,0,Ee,re,Ne.data)}}}else{if(Q=v.mipmaps,N&&ue){Q.length>0&&fe++;const X=Se(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ge,X.width,X.height)}for(let X=0;X<6;X++)if(ee){N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,oe[X].width,oe[X].height,Ee,re,oe[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ge,oe[X].width,oe[X].height,0,Ee,re,oe[X].data);for(let ie=0;ie<Q.length;ie++){const at=Q[ie].image[X].image;N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,at.width,at.height,Ee,re,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,Ge,at.width,at.height,0,Ee,re,at.data)}}else{N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ee,re,oe[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ge,Ee,re,oe[X]);for(let ie=0;ie<Q.length;ie++){const Ne=Q[ie];N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,Ee,re,Ne.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,Ge,Ee,re,Ne.image[X])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),W.__version=Y.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function me(R,v,D,j,Y,W){const Me=r.convert(D.format,D.colorSpace),se=r.convert(D.type),xe=S(D.internalFormat,Me,se,D.colorSpace),Ie=n.get(v),ee=n.get(D);if(ee.__renderTarget=v,!Ie.__hasExternalTextures){const oe=Math.max(1,v.width>>W),_e=Math.max(1,v.height>>W);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,W,xe,oe,_e,v.depth,0,Me,se,null):t.texImage2D(Y,W,xe,oe,_e,0,Me,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Y,ee.__webglTexture,0,L(v)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Y,ee.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(R,v,D){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){const j=v.depthTexture,Y=j&&j.isDepthTexture?j.type:null,W=E(v.stencilBuffer,Y),Me=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;bt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(v),W,v.width,v.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(v),W,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,W,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,R)}else{const j=v.textures;for(let Y=0;Y<j.length;Y++){const W=j[Y],Me=r.convert(W.format,W.colorSpace),se=r.convert(W.type),xe=S(W.internalFormat,Me,se,W.colorSpace);bt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(v),xe,v.width,v.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(v),xe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(R,v,D){const j=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);if(Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(i.TEXTURE_CUBE_MAP,v.depthTexture);const Ie=r.convert(v.depthTexture.format),ee=r.convert(v.depthTexture.type);let oe;v.depthTexture.format===Fn?oe=i.DEPTH_COMPONENT24:v.depthTexture.format===fi&&(oe=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,v.width,v.height,0,Ie,ee,null)}}else V(v.depthTexture,0);const W=Y.__webglTexture,Me=L(v),se=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,xe=v.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Fn)bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,se,W,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,xe,se,W,0);else if(v.depthTexture.format===fi)bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,se,W,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,xe,se,W,0);else throw new Error("Unknown depthTexture format")}function je(R){const v=n.get(R),D=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",Y)};j.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=j}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(D)for(let j=0;j<6;j++)ye(v.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?ye(v.__webglFramebuffer[0],R,0):ye(v.__webglFramebuffer,R,0)}else if(D){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=i.createRenderbuffer(),Ue(v.__webglDepthbuffer[j],R,!1);else{const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,W)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ue(v.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(R,v,D){const j=n.get(R);v!==void 0&&me(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&je(R)}function $e(R){const v=R.texture,D=n.get(R),j=n.get(v);R.addEventListener("dispose",A);const Y=R.textures,W=R.isWebGLCubeRenderTarget===!0,Me=Y.length>1;if(Me||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=v.version,a.memory.textures++),W){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let xe=0;xe<v.mipmaps.length;xe++)D.__webglFramebuffer[se][xe]=i.createFramebuffer()}else D.__webglFramebuffer[se]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)D.__webglFramebuffer[se]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(Me)for(let se=0,xe=Y.length;se<xe;se++){const Ie=n.get(Y[se]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&bt(R)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let se=0;se<Y.length;se++){const xe=Y[se];D.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[se]);const Ie=r.convert(xe.format,xe.colorSpace),ee=r.convert(xe.type),oe=S(xe.internalFormat,Ie,ee,xe.colorSpace,R.isXRRenderTarget===!0),_e=L(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,oe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,D.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(D.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ke(i.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)me(D.__webglFramebuffer[se][xe],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe);else me(D.__webglFramebuffer[se],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let se=0,xe=Y.length;se<xe;se++){const Ie=Y[se],ee=n.get(Ie);let oe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,ee.__webglTexture),ke(oe,Ie),me(D.__webglFramebuffer,R,Ie,i.COLOR_ATTACHMENT0+se,oe,0),m(Ie)&&p(oe)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),ke(se,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)me(D.__webglFramebuffer[xe],R,v,i.COLOR_ATTACHMENT0,se,xe);else me(D.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,se,0);m(v)&&p(se),t.unbindTexture()}R.depthBuffer&&je(R)}function Ze(R){const v=R.textures;for(let D=0,j=v.length;D<j;D++){const Y=v[D];if(m(Y)){const W=x(R),Me=n.get(Y).__webglTexture;t.bindTexture(W,Me),p(W),t.unbindTexture()}}}const it=[],ze=[];function Et(R){if(R.samples>0){if(bt(R)===!1){const v=R.textures,D=R.width,j=R.height;let Y=i.COLOR_BUFFER_BIT;const W=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(R),se=v.length>1;if(se)for(let Ie=0;Ie<v.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const xe=R.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ie=0;Ie<v.length;Ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ie]);const ee=n.get(v[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,D,j,0,0,D,j,Y,i.NEAREST),l===!0&&(it.length=0,ze.length=0,it.push(i.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(it.push(W),ze.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Ie=0;Ie<v.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ie]);const ee=n.get(v[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function L(R){return Math.min(s.maxSamples,R.samples)}function bt(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ke(R){const v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function rt(R,v){const D=R.colorSpace,j=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||D!==Qi&&D!==Xn&&(We.getTransfer(D)===Ye?(j!==_n||Y!==tn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",D)),v}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=Pt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=me,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function R0(i,e){function t(n,s=Xn){let r;const a=We.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bh)return i.BYTE;if(n===Mh)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===rl)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===Ah)return i.ALPHA;if(n===Rh)return i.RGB;if(n===_n)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===cl)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===hl)return i.RG_INTEGER;if(n===ul)return i.RGBA_INTEGER;if(n===wr||n===Tr||n===Ar||n===Rr)if(a===Ye)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ro||n===ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===lo)return a===Ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===co)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ho)return r.COMPRESSED_R11_EAC;if(n===uo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fo)return r.COMPRESSED_RG11_EAC;if(n===po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mo||n===go||n===_o||n===vo||n===yo||n===xo||n===So||n===Eo||n===bo||n===Mo||n===wo||n===To||n===Ao||n===Ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Po||n===Io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return a===Ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lo||n===No||n===Do||n===Oo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Vh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Lt({vertexShader:C0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new as(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L0 extends ns{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new I0,p={},x=t.getContextAttributes();let S=null,E=null;const w=[],T=[],A=new Le;let I=null;const y=new Xt;y.viewport=new mt;const M=new Xt;M.viewport=new mt;const P=[y,M],U=new zd;let k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=w[q];return J===void 0&&(J=new Ta,w[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=w[q];return J===void 0&&(J=new Ta,w[q]=J),J.getGripSpace()},this.getHand=function(q){let J=w[q];return J===void 0&&(J=new Ta,w[q]=J),J.getHandSpace()};function V(q){const J=T.indexOf(q.inputSource);if(J===-1)return;const me=w[J];me!==void 0&&(me.update(q.inputSource,q.frame,c||a),me.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",G);for(let q=0;q<w.length;q++){const J=T[q];J!==null&&(T[q]=null,w[q].disconnect(J))}k=null,$=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(S),f=null,d=null,u=null,s=null,E=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",z),s.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=x.stencil?fi:Fn,Ue=x.stencil?Ns:wn);const je={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Wt(d.textureWidth,d.textureHeight,{format:_n,type:tn,depthTexture:new Os(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Wt(f.framebufferWidth,f.framebufferHeight,{format:_n,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(q){for(let J=0;J<q.removed.length;J++){const me=q.removed[J],Ue=T.indexOf(me);Ue>=0&&(T[Ue]=null,w[Ue].disconnect(me))}for(let J=0;J<q.added.length;J++){const me=q.added[J];let Ue=T.indexOf(me);if(Ue===-1){for(let je=0;je<w.length;je++)if(je>=T.length){T.push(me),Ue=je;break}else if(T[je]===null){T[je]=me,Ue=je;break}if(Ue===-1)break}const ye=w[Ue];ye&&ye.connect(me)}}const K=new C,ne=new C;function ae(q,J,me){K.setFromMatrixPosition(J.matrixWorld),ne.setFromMatrixPosition(me.matrixWorld);const Ue=K.distanceTo(ne),ye=J.projectionMatrix.elements,je=me.projectionMatrix.elements,Pt=ye[14]/(ye[10]-1),$e=ye[14]/(ye[10]+1),Ze=(ye[9]+1)/ye[5],it=(ye[9]-1)/ye[5],ze=(ye[8]-1)/ye[0],Et=(je[8]+1)/je[0],L=Pt*ze,bt=Pt*Et,Ke=Ue/(-ze+Et),rt=Ke*-ze;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(rt),q.translateZ(Ke),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Se=Pt+Ke,R=$e+Ke,v=L-rt,D=bt+(Ue-rt),j=Ze*$e/R*Se,Y=it*$e/R*Se;q.projectionMatrix.makePerspective(v,D,j,Y,Se,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function de(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,me=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(me=m.depthFar)),U.near=M.near=y.near=J,U.far=M.far=y.far=me,(k!==U.near||$!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,$=U.far),U.layers.mask=q.layers.mask|6,y.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const Ue=q.parent,ye=U.cameras;de(U,Ue);for(let je=0;je<ye.length;je++)de(ye[je],Ue);ye.length===2?ae(U,y,M):U.projectionMatrix.copy(y.projectionMatrix),ke(q,U,Ue)};function ke(q,J,me){me===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(me.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Uo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(q){return p[q]};let Oe=null;function _t(q,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Ue=!1;me.length!==U.cameras.length&&(U.cameras.length=0,Ue=!0);for(let $e=0;$e<me.length;$e++){const Ze=me[$e];let it=null;if(f!==null)it=f.getViewport(Ze);else{const Et=u.getViewSubImage(d,Ze);it=Et.viewport,$e===0&&(e.setRenderTargetTextures(E,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(E))}let ze=P[$e];ze===void 0&&(ze=new Xt,ze.layers.enable($e),ze.viewport=new mt,P[$e]=ze),ze.matrix.fromArray(Ze.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ze.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(it.x,it.y,it.width,it.height),$e===0&&(U.matrix.copy(ze.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ue===!0&&U.cameras.push(ze)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const $e=u.getDepthInformation(me[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let $e=0;$e<me.length;$e++){const Ze=me[$e].camera;if(Ze){let it=p[Ze];it||(it=new Vh,p[Ze]=it);const ze=u.getCameraImage(Ze);it.sourceTexture=ze}}}}for(let me=0;me<w.length;me++){const Ue=T[me],ye=w[me];Ue!==null&&ye!==void 0&&ye.update(Ue,J,c||a)}Oe&&Oe(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ft=new jh;ft.setAnimationLoop(_t),this.setAnimationLoop=function(q){Oe=q},this.dispose=function(){}}}const si=new Tn,N0=new Je;function D0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),S=x.envMap,E=x.envMapRotation;S&&(m.envMap.value=S,si.copy(E),si.x*=-1,si.y*=-1,si.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(N0.makeRotationFromEuler(si)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const E=S.program;n.uniformBlockBinding(x,E)}function c(x,S){let E=s[x.id];E===void 0&&(g(x),E=h(x),s[x.id]=E,x.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(x,w);const T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){const S=u();x.__bindingPointIndex=S;const E=i.createBuffer(),w=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=s[x.id],E=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=E.length;T<A;T++){const I=Array.isArray(E[T])?E[T]:[E[T]];for(let y=0,M=I.length;y<M;y++){const P=I[y];if(f(P,T,y,w)===!0){const U=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let V=0;V<k.length;V++){const z=k[V],G=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,U+$,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,$),$+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,E,w){const T=x.value,A=S+"_"+E;if(w[A]===void 0)return typeof T=="number"||typeof T=="boolean"?w[A]=T:w[A]=T.clone(),!0;{const I=w[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return w[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(x){const S=x.uniforms;let E=0;const w=16;for(let A=0,I=S.length;A<I;A++){const y=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,P=y.length;M<P;M++){const U=y[M],k=Array.isArray(U.value)?U.value:[U.value];for(let $=0,V=k.length;$<V;$++){const z=k[$],G=_(z),K=E%w,ne=K%G.boundary,ae=K+ne;E+=ne,ae!==0&&w-ae<G.storage&&(E+=w-ae),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=G.storage}}}const T=E%w;return T>0&&(E+=w-T),x.__size=E,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const U0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function F0(){return yn===null&&(yn=new Gh(U0,16,16,Zi,sn),yn.name="DFG_LUT",yn.minFilter=Ut,yn.magFilter=Ut,yn.wrapS=On,yn.wrapT=On,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class k0{constructor(e={}){const{canvas:t=td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=tn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([ul,hl,cl]),p=new Set([tn,wn,Ls,Ns,al,ol]),x=new Uint32Array(4),S=new Int32Array(4);let E=null,w=null;const T=[],A=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let M=!1;this._outputColorSpace=on;let P=0,U=0,k=null,$=-1,V=null;const z=new mt,G=new mt;let K=null;const ne=new ve(0);let ae=0,de=t.width,ke=t.height,Oe=1,_t=null,ft=null;const q=new mt(0,0,de,ke),J=new mt(0,0,de,ke);let me=!1;const Ue=new gl;let ye=!1,je=!1;const Pt=new Je,$e=new C,Ze=new mt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Et(){return k===null?Oe:1}let L=n;function bt(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zo}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),L===null){const O="webgl2";if(L=bt(O,b),L===null)throw bt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Xe("WebGLRenderer: "+b.message),b}let Ke,rt,Se,R,v,D,j,Y,W,Me,se,xe,Ie,ee,oe,_e,Ee,re,Ge,N,ue,te,fe,Q;function X(){Ke=new Fm(L),Ke.init(),te=new R0(L,Ke),rt=new Rm(L,Ke,e,te),Se=new T0(L,Ke),rt.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),R=new zm(L),v=new u0,D=new A0(L,Ke,Se,v,rt,te,R),j=new Pm(y),Y=new Um(y),W=new Vd(L),fe=new Tm(L,W),Me=new km(L,W,R,fe),se=new Hm(L,Me,W,R),Ge=new Gm(L,rt,D),_e=new Cm(v),xe=new h0(y,j,Y,Ke,rt,fe,_e),Ie=new D0(y,v),ee=new f0,oe=new y0(Ke),re=new wm(y,j,Y,Se,se,g,l),Ee=new M0(y,se,rt),Q=new O0(L,R,rt,Se),N=new Am(L,Ke,R),ue=new Bm(L,Ke,R),R.programs=xe.programs,y.capabilities=rt,y.extensions=Ke,y.properties=v,y.renderLists=ee,y.shadowMap=Ee,y.state=Se,y.info=R}X(),_!==tn&&(I=new Wm(_,t.width,t.height,s,r));const ie=new L0(y,L);this.xr=ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(b){b!==void 0&&(Oe=b,this.setSize(de,ke,!1))},this.getSize=function(b){return b.set(de,ke)},this.setSize=function(b,O,H=!0){if(ie.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}de=b,ke=O,t.width=Math.floor(b*Oe),t.height=Math.floor(O*Oe),H===!0&&(t.style.width=b+"px",t.style.height=O+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(de*Oe,ke*Oe).floor()},this.setDrawingBufferSize=function(b,O,H){de=b,ke=O,Oe=H,t.width=Math.floor(b*H),t.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(_===tn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,O,H,B){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,O,H,B),Se.viewport(z.copy(q).multiplyScalar(Oe).round())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,O,H,B){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,O,H,B),Se.scissor(G.copy(J).multiplyScalar(Oe).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(b){Se.setScissorTest(me=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){ft=b},this.getClearColor=function(b){return b.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,H=!0){let B=0;if(b){let F=!1;if(k!==null){const ce=k.texture.format;F=m.has(ce)}if(F){const ce=k.texture.type,pe=p.has(ce),he=re.getClearColor(),ge=re.getClearAlpha(),we=he.r,Pe=he.g,Te=he.b;pe?(x[0]=we,x[1]=Pe,x[2]=Te,x[3]=ge,L.clearBufferuiv(L.COLOR,0,x)):(S[0]=we,S[1]=Pe,S[2]=Te,S[3]=ge,L.clearBufferiv(L.COLOR,0,S))}else B|=L.COLOR_BUFFER_BIT}O&&(B|=L.DEPTH_BUFFER_BIT),H&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),re.dispose(),ee.dispose(),oe.dispose(),v.dispose(),j.dispose(),Y.dispose(),se.dispose(),fe.dispose(),Q.dispose(),xe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Rl),ie.removeEventListener("sessionend",Cl),Jn.stop()};function Ne(b){b.preventDefault(),Hl("WebGLRenderer: Context Lost."),M=!0}function at(){Hl("WebGLRenderer: Context Restored."),M=!1;const b=R.autoReset,O=Ee.enabled,H=Ee.autoUpdate,B=Ee.needsUpdate,F=Ee.type;X(),R.autoReset=b,Ee.enabled=O,Ee.autoUpdate=H,Ee.needsUpdate=B,Ee.type=F}function Qe(b){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vn(b){const O=b.target;O.removeEventListener("dispose",vn),An(O)}function An(b){pu(b),v.remove(b)}function pu(b){const O=v.get(b).programs;O!==void 0&&(O.forEach(function(H){xe.releaseProgram(H)}),b.isShaderMaterial&&xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,B,F,ce){O===null&&(O=it);const pe=F.isMesh&&F.matrixWorld.determinant()<0,he=gu(b,O,H,B,F);Se.setMaterial(B,pe);let ge=H.index,we=1;if(B.wireframe===!0){if(ge=Me.getWireframeAttribute(H),ge===void 0)return;we=2}const Pe=H.drawRange,Te=H.attributes.position;let He=Pe.start*we,nt=(Pe.start+Pe.count)*we;ce!==null&&(He=Math.max(He,ce.start*we),nt=Math.min(nt,(ce.start+ce.count)*we)),ge!==null?(He=Math.max(He,0),nt=Math.min(nt,ge.count)):Te!=null&&(He=Math.max(He,0),nt=Math.min(nt,Te.count));const vt=nt-He;if(vt<0||vt===1/0)return;fe.setup(F,B,he,H,ge);let yt,st=N;if(ge!==null&&(yt=W.get(ge),st=ue,st.setIndex(yt)),F.isMesh)B.wireframe===!0?(Se.setLineWidth(B.wireframeLinewidth*Et()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(F.isLine){let Ae=B.linewidth;Ae===void 0&&(Ae=1),Se.setLineWidth(Ae*Et()),F.isLineSegments?st.setMode(L.LINES):F.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else F.isPoints?st.setMode(L.POINTS):F.isSprite&&st.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ds("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,et=F._multiDrawCounts,qe=F._multiDrawCount,Yt=ge?W.get(ge).bytesPerElement:1,yi=v.get(B).currentProgram.getUniforms();for(let Jt=0;Jt<qe;Jt++)yi.setValue(L,"_gl_DrawID",Jt),st.render(Ae[Jt]/Yt,et[Jt])}else if(F.isInstancedMesh)st.renderInstances(He,vt,F.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,et=Math.min(H.instanceCount,Ae);st.renderInstances(He,vt,et)}else st.render(He,vt)};function Al(b,O,H){b.transparent===!0&&b.side===Dn&&b.forceSinglePass===!1?(b.side=Vt,b.needsUpdate=!0,qs(b,O,H),b.side=Mn,b.needsUpdate=!0,qs(b,O,H),b.side=Dn):qs(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),w=oe.get(H),w.init(O),A.push(w),H.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),b!==H&&b.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),w.setupLights();const B=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ce=F.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){const he=ce[pe];Al(he,H,F),B.add(he)}else Al(ce,H,F),B.add(ce)}),w=A.pop(),B},this.compileAsync=function(b,O,H=null){const B=this.compile(b,O,H);return new Promise(F=>{function ce(){if(B.forEach(function(pe){v.get(pe).currentProgram.isReady()&&B.delete(pe)}),B.size===0){F(b);return}setTimeout(ce,10)}Ke.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ea=null;function mu(b){ea&&ea(b)}function Rl(){Jn.stop()}function Cl(){Jn.start()}const Jn=new jh;Jn.setAnimationLoop(mu),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(b){ea=b,ie.setAnimationLoop(b),b===null?Jn.stop():Jn.start()},ie.addEventListener("sessionstart",Rl),ie.addEventListener("sessionend",Cl),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const H=ie.enabled===!0&&ie.isPresenting===!0,B=I!==null&&(k===null||H)&&I.begin(y,k);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(O),O=ie.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,O,k),w=oe.get(b,A.length),w.init(O),A.push(w),Pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ue.setFromProjectionMatrix(Pt,Sn,O.reversedDepth),je=this.localClippingEnabled,ye=_e.init(this.clippingPlanes,je),E=ee.get(b,T.length),E.init(),T.push(E),ie.enabled===!0&&ie.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&ta(pe,O,-1/0,y.sortObjects)}ta(b,O,0,y.sortObjects),E.finish(),y.sortObjects===!0&&E.sort(_t,ft),ze=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ze&&re.addToRenderList(E,b),this.info.render.frame++,ye===!0&&_e.beginShadows();const F=w.state.shadowsArray;if(Ee.render(F,b,O),ye===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&I.hasRenderPass())===!1){const pe=E.opaque,he=E.transmissive;if(w.setupLights(),O.isArrayCamera){const ge=O.cameras;if(he.length>0)for(let we=0,Pe=ge.length;we<Pe;we++){const Te=ge[we];Il(pe,he,b,Te)}ze&&re.render(b);for(let we=0,Pe=ge.length;we<Pe;we++){const Te=ge[we];Pl(E,b,Te,Te.viewport)}}else he.length>0&&Il(pe,he,b,O),ze&&re.render(b),Pl(E,b,O)}k!==null&&U===0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),B&&I.end(y),b.isScene===!0&&b.onAfterRender(y,b,O),fe.resetDefaultState(),$=-1,V=null,A.pop(),A.length>0?(w=A[A.length-1],ye===!0&&_e.setGlobalState(y.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?E=T[T.length-1]:E=null};function ta(b,O,H,B){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){B&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pt);const pe=se.update(b),he=b.material;he.visible&&E.push(b,pe,he,H,Ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const pe=se.update(b),he=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ze.copy(pe.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(Pt)),Array.isArray(he)){const ge=pe.groups;for(let we=0,Pe=ge.length;we<Pe;we++){const Te=ge[we],He=he[Te.materialIndex];He&&He.visible&&E.push(b,pe,He,H,Ze.z,Te)}}else he.visible&&E.push(b,pe,he,H,Ze.z,null)}}const ce=b.children;for(let pe=0,he=ce.length;pe<he;pe++)ta(ce[pe],O,H,B)}function Pl(b,O,H,B){const{opaque:F,transmissive:ce,transparent:pe}=b;w.setupLightsView(H),ye===!0&&_e.setGlobalState(y.clippingPlanes,H),B&&Se.viewport(z.copy(B)),F.length>0&&js(F,O,H),ce.length>0&&js(ce,O,H),pe.length>0&&js(pe,O,H),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Il(b,O,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const He=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new Wt(1,1,{generateMipmaps:!0,type:He?sn:tn,minFilter:di,samples:rt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const ce=w.state.transmissionRenderTarget[B.id],pe=B.viewport||z;ce.setSize(pe.z*y.transmissionResolutionScale,pe.w*y.transmissionResolutionScale);const he=y.getRenderTarget(),ge=y.getActiveCubeFace(),we=y.getActiveMipmapLevel();y.setRenderTarget(ce),y.getClearColor(ne),ae=y.getClearAlpha(),ae<1&&y.setClearColor(16777215,.5),y.clear(),ze&&re.render(H);const Pe=y.toneMapping;y.toneMapping=bn;const Te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),ye===!0&&_e.setGlobalState(y.clippingPlanes,B),js(b,H,B),D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let nt=0,vt=O.length;nt<vt;nt++){const yt=O[nt],{object:st,geometry:Ae,material:et,group:qe}=yt;if(et.side===Dn&&st.layers.test(B.layers)){const Yt=et.side;et.side=Vt,et.needsUpdate=!0,Ll(st,H,B,Ae,et,qe),et.side=Yt,et.needsUpdate=!0,He=!0}}He===!0&&(D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce))}y.setRenderTarget(he,ge,we),y.setClearColor(ne,ae),Te!==void 0&&(B.viewport=Te),y.toneMapping=Pe}function js(b,O,H){const B=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ce=b.length;F<ce;F++){const pe=b[F],{object:he,geometry:ge,group:we}=pe;let Pe=pe.material;Pe.allowOverride===!0&&B!==null&&(Pe=B),he.layers.test(H.layers)&&Ll(he,O,H,ge,Pe,we)}}function Ll(b,O,H,B,F,ce){b.onBeforeRender(y,O,H,B,F,ce),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(y,O,H,B,b,ce),F.transparent===!0&&F.side===Dn&&F.forceSinglePass===!1?(F.side=Vt,F.needsUpdate=!0,y.renderBufferDirect(H,O,B,F,b,ce),F.side=Mn,F.needsUpdate=!0,y.renderBufferDirect(H,O,B,F,b,ce),F.side=Dn):y.renderBufferDirect(H,O,B,F,b,ce),b.onAfterRender(y,O,H,B,F,ce)}function qs(b,O,H){O.isScene!==!0&&(O=it);const B=v.get(b),F=w.state.lights,ce=w.state.shadowsArray,pe=F.state.version,he=xe.getParameters(b,F.state,ce,O,H),ge=xe.getProgramCacheKey(he);let we=B.programs;B.environment=b.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(b.isMeshStandardMaterial?Y:j).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,we===void 0&&(b.addEventListener("dispose",vn),we=new Map,B.programs=we);let Pe=we.get(ge);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===pe)return Dl(b,he),Pe}else he.uniforms=xe.getUniforms(b),b.onBeforeCompile(he,y),Pe=xe.acquireProgram(he,ge),we.set(ge,Pe),B.uniforms=he.uniforms;const Te=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=_e.uniform),Dl(b,he),B.needsLights=vu(b),B.lightsStateVersion=pe,B.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function Nl(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Cr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Dl(b,O){const H=v.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function gu(b,O,H,B,F){O.isScene!==!0&&(O=it),D.resetTextureUnits();const ce=O.fog,pe=B.isMeshStandardMaterial?O.environment:null,he=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Qi,ge=(B.isMeshStandardMaterial?Y:j).get(B.envMap||pe),we=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!H.morphAttributes.position,He=!!H.morphAttributes.normal,nt=!!H.morphAttributes.color;let vt=bn;B.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(vt=y.toneMapping);const yt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,st=yt!==void 0?yt.length:0,Ae=v.get(B),et=w.state.lights;if(ye===!0&&(je===!0||b!==V)){const Gt=b===V&&B.id===$;_e.setState(B,b,Gt)}let qe=!1;B.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==et.state.version||Ae.outputColorSpace!==he||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==ge||B.fog===!0&&Ae.fog!==ce||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==_e.numPlanes||Ae.numIntersection!==_e.numIntersection)||Ae.vertexAlphas!==we||Ae.vertexTangents!==Pe||Ae.morphTargets!==Te||Ae.morphNormals!==He||Ae.morphColors!==nt||Ae.toneMapping!==vt||Ae.morphTargetsCount!==st)&&(qe=!0):(qe=!0,Ae.__version=B.version);let Yt=Ae.currentProgram;qe===!0&&(Yt=qs(B,O,F));let yi=!1,Jt=!1,hs=!1;const ot=Yt.getUniforms(),$t=Ae.uniforms;if(Se.useProgram(Yt.program)&&(yi=!0,Jt=!0,hs=!0),B.id!==$&&($=B.id,Jt=!0),yi||V!==b){Se.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ot.setValue(L,"projectionMatrix",b.projectionMatrix),ot.setValue(L,"viewMatrix",b.matrixWorldInverse);const jt=ot.map.cameraPosition;jt!==void 0&&jt.setValue(L,$e.setFromMatrixPosition(b.matrixWorld)),rt.logarithmicDepthBuffer&&ot.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ot.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,Jt=!0,hs=!0)}if(Ae.needsLights&&(et.state.directionalShadowMap.length>0&&ot.setValue(L,"directionalShadowMap",et.state.directionalShadowMap,D),et.state.spotShadowMap.length>0&&ot.setValue(L,"spotShadowMap",et.state.spotShadowMap,D),et.state.pointShadowMap.length>0&&ot.setValue(L,"pointShadowMap",et.state.pointShadowMap,D)),F.isSkinnedMesh){ot.setOptional(L,F,"bindMatrix"),ot.setOptional(L,F,"bindMatrixInverse");const Gt=F.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),ot.setValue(L,"boneTexture",Gt.boneTexture,D))}F.isBatchedMesh&&(ot.setOptional(L,F,"batchingTexture"),ot.setValue(L,"batchingTexture",F._matricesTexture,D),ot.setOptional(L,F,"batchingIdTexture"),ot.setValue(L,"batchingIdTexture",F._indirectTexture,D),ot.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&ot.setValue(L,"batchingColorTexture",F._colorsTexture,D));const rn=H.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Ge.update(F,H,Yt),(Jt||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,ot.setValue(L,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&($t.envMap.value=ge,$t.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&O.environment!==null&&($t.envMapIntensity.value=O.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=F0()),Jt&&(ot.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&_u($t,hs),ce&&B.fog===!0&&Ie.refreshFogUniforms($t,ce),Ie.refreshMaterialUniforms($t,B,Oe,ke,w.state.transmissionRenderTarget[b.id]),Cr.upload(L,Nl(Ae),$t,D)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Cr.upload(L,Nl(Ae),$t,D),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ot.setValue(L,"center",F.center),ot.setValue(L,"modelViewMatrix",F.modelViewMatrix),ot.setValue(L,"normalMatrix",F.normalMatrix),ot.setValue(L,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Gt=B.uniformsGroups;for(let jt=0,na=Gt.length;jt<na;jt++){const Zn=Gt[jt];Q.update(Zn,Yt),Q.bind(Zn,Yt)}}return Yt}function _u(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function vu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,O,H){const B=v.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),v.get(b.texture).__webglTexture=O,v.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const H=v.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};const yu=L.createFramebuffer();this.setRenderTarget=function(b,O=0,H=0){k=b,P=O,U=H;let B=null,F=!1,ce=!1;if(b){const he=v.get(b);if(he.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),z.copy(b.viewport),G.copy(b.scissor),K=b.scissorTest,Se.viewport(z),Se.scissor(G),Se.setScissorTest(K),$=-1;return}else if(he.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(he.__hasExternalTextures)D.rebindTextures(b,v.get(b.texture).__webglTexture,v.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Pe=b.depthTexture;if(he.__boundDepthTexture!==Pe){if(Pe!==null&&v.has(Pe)&&(b.width!==Pe.image.width||b.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const ge=b.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ce=!0);const we=v.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(we[O])?B=we[O][H]:B=we[O],F=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?B=v.get(b).__webglMultisampledFramebuffer:Array.isArray(we)?B=we[H]:B=we,z.copy(b.viewport),G.copy(b.scissor),K=b.scissorTest}else z.copy(q).multiplyScalar(Oe).floor(),G.copy(J).multiplyScalar(Oe).floor(),K=me;if(H!==0&&(B=yu),Se.bindFramebuffer(L.FRAMEBUFFER,B)&&Se.drawBuffers(b,B),Se.viewport(z),Se.scissor(G),Se.setScissorTest(K),F){const he=v.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,he.__webglTexture,H)}else if(ce){const he=O;for(let ge=0;ge<b.textures.length;ge++){const we=v.get(b.textures[ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ge,we.__webglTexture,H,he)}}else if(b!==null&&H!==0){const he=v.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,H)}$=-1},this.readRenderTargetPixels=function(b,O,H,B,F,ce,pe,he=0){if(!(b&&b.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge){Se.bindFramebuffer(L.FRAMEBUFFER,ge);try{const we=b.textures[he],Pe=we.format,Te=we.type;if(!rt.textureFormatReadable(Pe)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Te)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-B&&H>=0&&H<=b.height-F&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),L.readPixels(O,H,B,F,te.convert(Pe),te.convert(Te),ce))}finally{const we=k!==null?v.get(k).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(b,O,H,B,F,ce,pe,he=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge)if(O>=0&&O<=b.width-B&&H>=0&&H<=b.height-F){Se.bindFramebuffer(L.FRAMEBUFFER,ge);const we=b.textures[he],Pe=we.format,Te=we.type;if(!rt.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),L.readPixels(O,H,B,F,te.convert(Pe),te.convert(Te),0);const nt=k!==null?v.get(k).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,nt);const vt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await nd(L,vt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce),L.deleteBuffer(He),L.deleteSync(vt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,H=0){const B=Math.pow(2,-H),F=Math.floor(b.image.width*B),ce=Math.floor(b.image.height*B),pe=O!==null?O.x:0,he=O!==null?O.y:0;D.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,pe,he,F,ce),Se.unbindTexture()};const xu=L.createFramebuffer(),Su=L.createFramebuffer();this.copyTextureToTexture=function(b,O,H=null,B=null,F=0,ce=null){ce===null&&(F!==0?(Ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=F,F=0):ce=0);let pe,he,ge,we,Pe,Te,He,nt,vt;const yt=b.isCompressedTexture?b.mipmaps[ce]:b.image;if(H!==null)pe=H.max.x-H.min.x,he=H.max.y-H.min.y,ge=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Pe=H.min.y,Te=H.isBox3?H.min.z:0;else{const rn=Math.pow(2,-F);pe=Math.floor(yt.width*rn),he=Math.floor(yt.height*rn),b.isDataArrayTexture?ge=yt.depth:b.isData3DTexture?ge=Math.floor(yt.depth*rn):ge=1,we=0,Pe=0,Te=0}B!==null?(He=B.x,nt=B.y,vt=B.z):(He=0,nt=0,vt=0);const st=te.convert(O.format),Ae=te.convert(O.type);let et;O.isData3DTexture?(D.setTexture3D(O,0),et=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),et=L.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),et=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const qe=L.getParameter(L.UNPACK_ROW_LENGTH),Yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),yi=L.getParameter(L.UNPACK_SKIP_PIXELS),Jt=L.getParameter(L.UNPACK_SKIP_ROWS),hs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te);const ot=b.isDataArrayTexture||b.isData3DTexture,$t=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const rn=v.get(b),Gt=v.get(O),jt=v.get(rn.__renderTarget),na=v.get(Gt.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,jt.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let Zn=0;Zn<ge;Zn++)ot&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(b).__webglTexture,F,Te+Zn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(O).__webglTexture,ce,vt+Zn)),L.blitFramebuffer(we,Pe,pe,he,He,nt,pe,he,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||v.has(b)){const rn=v.get(b),Gt=v.get(O);Se.bindFramebuffer(L.READ_FRAMEBUFFER,xu),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Su);for(let jt=0;jt<ge;jt++)ot?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rn.__webglTexture,F,Te+jt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,rn.__webglTexture,F),$t?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Gt.__webglTexture,ce,vt+jt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Gt.__webglTexture,ce),F!==0?L.blitFramebuffer(we,Pe,pe,he,He,nt,pe,he,L.COLOR_BUFFER_BIT,L.NEAREST):$t?L.copyTexSubImage3D(et,ce,He,nt,vt+jt,we,Pe,pe,he):L.copyTexSubImage2D(et,ce,He,nt,we,Pe,pe,he);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else $t?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(et,ce,He,nt,vt,pe,he,ge,st,Ae,yt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(et,ce,He,nt,vt,pe,he,ge,st,yt.data):L.texSubImage3D(et,ce,He,nt,vt,pe,he,ge,st,Ae,yt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ce,He,nt,pe,he,st,Ae,yt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ce,He,nt,yt.width,yt.height,st,yt.data):L.texSubImage2D(L.TEXTURE_2D,ce,He,nt,pe,he,st,Ae,yt);L.pixelStorei(L.UNPACK_ROW_LENGTH,qe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,hs),ce===0&&O.generateMipmaps&&L.generateMipmap(et),Se.unbindTexture()},this.initRenderTarget=function(b){v.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Se.unbindTexture()},this.resetState=function(){P=0,U=0,k=null,Se.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}const ht={name:"Spring",colors:{SNAKE_HEAD:16777215,SNAKE_BODY:14742257,SNAKE_EMISSIVE:16777215,APPLE:16744619,APPLE_EMISSIVE:16728193,GROUND_BASE:5093036,OBSTACLE_DARK:19776,OBSTACLE_LIGHT:8440772,CRYSTAL:16744619,GRASS:26972,SKY_TOP:8440772,SKY_MID:5093036,SKY_BOTTOM:26972,FOG:5093036,WATER:44225,UI_ACCENT:16744619},bloom:{strength:.4,radius:.8,threshold:.6},fog:{near:60,far:380}},Uc={name:"Summer",colors:{SNAKE_HEAD:16777215,SNAKE_BODY:16772078,SNAKE_EMISSIVE:16777215,APPLE:16766784,APPLE_EMISSIVE:16771584,GROUND_BASE:15037299,OBSTACLE_DARK:8916559,OBSTACLE_LIGHT:15702682,CRYSTAL:16766784,GRASS:12986408,SKY_TOP:15702682,SKY_MID:15037299,SKY_BOTTOM:13840175,FOG:15037299,WATER:12986408,UI_ACCENT:16766784},bloom:{strength:.5,radius:.9,threshold:.5},fog:{near:60,far:380}},Fc={name:"Autumn",colors:{SNAKE_HEAD:16777215,SNAKE_BODY:16775393,SNAKE_EMISSIVE:16777215,APPLE:8146431,APPLE_EMISSIVE:11766015,GROUND_BASE:16758605,OBSTACLE_DARK:4073251,OBSTACLE_LIGHT:16764032,CRYSTAL:8146431,GRASS:15094016,SKY_TOP:16769154,SKY_MID:16758605,SKY_BOTTOM:16088855,FOG:16758605,WATER:16485376,UI_ACCENT:8146431},bloom:{strength:.6,radius:1,threshold:.4},fog:{near:60,far:400}},kc={name:"Winter",colors:{SNAKE_HEAD:16777215,SNAKE_BODY:14938877,SNAKE_EMISSIVE:16777215,APPLE:16755601,APPLE_EMISSIVE:16764092,GROUND_BASE:6600182,OBSTACLE_DARK:870305,OBSTACLE_LIGHT:9489145,CRYSTAL:16755601,GRASS:1402304,SKY_TOP:9489145,SKY_MID:6600182,SKY_BOTTOM:1668818,FOG:9489145,WATER:2001125,UI_ACCENT:16755601},bloom:{strength:.3,radius:.6,threshold:.7},fog:{near:50,far:350}},Z={BASE_SNAKE_SPEED:14,SNAKE_TURN_SPEED:2.2,SNAKE_START_LENGTH:5,SEGMENT_SPACING:.7,SEGMENT_RADIUS:.5,GROWTH_PER_APPLE:3,SPEED_INCREMENT_PER_APPLE:.3,MAX_SPEED:50,GRAVITY_ACCEL:45,PHYSICS_GRAVITY:60,FRICTION:2,FRICTION_DOWNHILL:.5,FRICTION_UPHILL:3.5,MIN_STALL_SPEED:4,MAX_DOWNHILL_SPEED:200,SLOPE_SENSITIVITY:2.5,DOWNHILL_ACCEL_EXPONENT:1.3,AIR_CONTROL:.3,JUMP_ASSIST:10,TERRAIN_SCALE:.004,TERRAIN_HEIGHT:14,CHUNK_SIZE:100,RENDER_DISTANCE:4,ISLAND_MAIN_RADIUS:900,ISLAND_SHORE_FADE:350,ISLAND_SECONDARY_COUNT:4,ISLAND_SECONDARY_RADIUS_MIN:170,ISLAND_SECONDARY_RADIUS_MAX:280,ISLAND_SECONDARY_RING_MIN:750,ISLAND_SECONDARY_RING_MAX:1450,ISLAND_WATER_DEPTH_BIAS:36,WATER_LEVEL:-20,MAX_AIR_TIME:3,SKIM_SPEED_THRESHOLD:22,MAX_CLIMBABLE_SLOPE:2.5,BOOST_SPEED_MULTIPLIER:7.2,MAX_EP:100,EP_PER_APPLE:30,EP_DRAIN_PER_SEC:40,MAX_APPLES:80,SPAWN_CHANCE:.9,APPLE_CULL_DIST:450};var tt=(i=>(i[i.MENU=0]="MENU",i[i.PLAYING=1]="PLAYING",i[i.GAME_OVER=2]="GAME_OVER",i[i.LOBBY=3]="LOBBY",i[i.SPECTATING=4]="SPECTATING",i))(tt||{});const B0=50,z0=66,G0=4,_i=[{head:58879,body:11725810,emissive:58879,name:"Cyan"},{head:16728193,body:16301008,emissive:16728193,name:"Pink"},{head:7798531,body:13434768,emissive:7798531,name:"Green"},{head:16766784,body:16772275,emissive:16766784,name:"Gold"}],H0=.75,V0=.5,Bc=3,zc=1.5,W0=3,Oa=100,$0=150;function pt(i,e){return Math.random()*(e-i)+i}function j0(i,e){const t=Math.random(),n=Math.random();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*n)*e+i}const Tt=new Uint8Array(512),Ua=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function Pr(i){let e=i.s;return e^=e<<13,e^=e>>17,e^=e<<5,i.s=e,(e>>>0)/4294967296}function q0(i){zo=i|0||1;const e={s:zo};for(let t=0;t<256;t++)Tt[t]=t;for(let t=255;t>0;t--){const n=Math.floor(Pr(e)*(t+1)),s=Tt[t];Tt[t]=Tt[n],Tt[n]=s}for(let t=0;t<256;t++)Tt[t+256]=Tt[t];Jh(),Go()}for(let i=0;i<256;i++)Tt[i]=i;for(let i=0;i<256;i++){const e=Math.floor(Math.random()*256),t=Tt[i];Tt[i]=Tt[e],Tt[e]=t,Tt[i+256]=Tt[i]}function Fa(i,e,t){return i[0]*e+i[1]*t}let zo=1,kr=[];function Gc(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function Jh(){const i={s:zo|0||1};kr=[];for(let e=0;e<Z.ISLAND_SECONDARY_COUNT;e++){const t=Pr(i)*Math.PI*2,n=Z.ISLAND_SECONDARY_RING_MIN+Pr(i)*(Z.ISLAND_SECONDARY_RING_MAX-Z.ISLAND_SECONDARY_RING_MIN),s=Z.ISLAND_SECONDARY_RADIUS_MIN+Pr(i)*(Z.ISLAND_SECONDARY_RADIUS_MAX-Z.ISLAND_SECONDARY_RADIUS_MIN);kr.push({x:Math.cos(t)*n,z:Math.sin(t)*n,radius:s})}}function X0(i,e){const t=Math.hypot(i,e),n=Z.ISLAND_MAIN_RADIUS,s=Z.ISLAND_MAIN_RADIUS+Z.ISLAND_SHORE_FADE;let r=1-Gc(n,s,t);for(let a=0;a<kr.length;a++){const o=kr[a],l=Math.hypot(i-o.x,e-o.z),c=o.radius,h=o.radius+Z.ISLAND_SHORE_FADE*.55,u=1-Gc(c,h,l);r=Math.max(r,u*.9)}return Math.max(0,Math.min(1,r))}Jh();const Ms=new Map,Hc=.5,K0=5e3;function Vc(i){return Math.round(i/Hc)*Hc}function Go(){Ms.clear()}function ws(i,e){let t,n,s;const r=.5*(Math.sqrt(3)-1),a=(i+e)*r,o=Math.floor(i+a),l=Math.floor(e+a),c=(3-Math.sqrt(3))/6,h=(o+l)*c,u=o-h,d=l-h,f=i-u,g=e-d;let _,m;f>g?(_=1,m=0):(_=0,m=1);const p=f-_+c,x=g-m+c,S=f-1+2*c,E=g-1+2*c,w=o&255,T=l&255,A=Tt[w+Tt[T]]%12,I=Tt[w+_+Tt[T+m]]%12,y=Tt[w+1+Tt[T+1]]%12;let M=.5-f*f-g*g;M<0?t=0:(M*=M,t=M*M*Fa(Ua[A],f,g));let P=.5-p*p-x*x;P<0?n=0:(P*=P,n=P*P*Fa(Ua[I],p,x));let U=.5-S*S-E*E;return U<0?s=0:(U*=U,s=U*U*Fa(Ua[y],S,E)),70*(t+n+s)}function dt(i,e){const t=Vc(i),n=Vc(e),s=`${t},${n}`,r=Ms.get(s);if(r!==void 0)return r;const a=Z.TERRAIN_SCALE,o=X0(i,e),l=ws(i*a,e*a),c=ws(i*a*4,e*a*4)*.05,h=ws(i*a*.3,e*a*.3),u=Math.max(0,h)*2,d=ws(i*a*.15,e*a*.15),f=Math.min(0,d)*1.5,g=(l+c+u+f)*Z.TERRAIN_HEIGHT,_=Z.TERRAIN_HEIGHT*.9,m=(1-o)*Z.ISLAND_WATER_DEPTH_BIAS;let p=g*o+_*o-m;return p-=Z.TERRAIN_HEIGHT*.08,Ms.size>=K0&&Ms.clear(),Ms.set(s,p),p}function Y0(i,e){const n=dt(i,e),s=dt(i+.05,e),r=dt(i,e+.05),a=new C(.05,s-n,0),o=new C(0,r-n,.05);return new C().crossVectors(o,a).normalize()}function Wc(i,e){return dt(i,e)<=Z.WATER_LEVEL+2?"water":1-Y0(i,e).y>.45?"rock":ws(i*.02,e*.02)>.6?"flower":"grass"}function J0(i,e){if(i.y>e.maxY)return!1;const t=i.x-e.x,n=i.z-e.z,s=t*t+n*n,r=i.radius+e.radius;return s<r*r}function Z0(i,e,t,n=0,s=3){for(let r=n;r<e.length;r++){const a=e[r];if(Math.abs(i.y-a.y)>s)continue;const o=i.x-a.x,l=i.z-a.z,c=o*o+l*l,h=i.radius+t;if(c<h*h)return r}return-1}function Q0(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");if(!t)return null;t.fillStyle="#ffffff",t.fillRect(0,0,128,128);for(let s=0;s<5e3;s++){const r=Math.random()*128,a=Math.random()*128,o=Math.random()*50+205;t.fillStyle=`rgb(${o},${o},${o})`,t.fillRect(r,a,1,3)}const n=new vl(e);return n.wrapS=n.wrapT=Is,n.repeat.set(20,20),n}const $c=Q0(),ct={matTree:new dn({color:ht.colors.OBSTACLE_DARK,roughness:.1,flatShading:!0}),matRing:(()=>{const i=new dn({color:ht.colors.UI_ACCENT,emissive:ht.colors.UI_ACCENT,emissiveIntensity:1.5,roughness:0,flatShading:!0});return i.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("vec3 totalEmissiveRadiance = emissive;",`vec3 totalEmissiveRadiance = emissive;
                 #ifdef USE_INSTANCING_COLOR
                    totalEmissiveRadiance *= vInstanceColor.rgb;
                 #endif`)},i})(),matRock:new dn({color:ht.colors.OBSTACLE_LIGHT,roughness:.6,flatShading:!0,emissiveIntensity:.8}),matCrystal:new dn({color:ht.colors.CRYSTAL,roughness:0,metalness:.2,emissive:ht.colors.CRYSTAL,emissiveIntensity:.8,flatShading:!0,transparent:!0,opacity:.9}),geoRock:new xl(1,0),geoCrystal:new Xi(0,.3,1,5),geoApple:new $r(.5,0),geoGrass:new yl(.2,1.5,4),geoTreeTrunk:new Xi(0,1,1,4,1),geoTreeRing:new Fr(1.5,.2,4,12),matGrass:new dn({color:ht.colors.GRASS,roughness:.8,flatShading:!0}),matApple:new dn({color:ht.colors.APPLE,roughness:0,emissive:ht.colors.APPLE_EMISSIVE,emissiveIntensity:6,flatShading:!0}),matHumanLandmark:new dn({color:16777215,roughness:.2,metalness:.1,flatShading:!0}),matRedRock:new dn({color:12000284,roughness:.9,flatShading:!0}),matGround:new dn({color:ht.colors.GROUND_BASE,map:$c,roughnessMap:$c,roughness:.8,metalness:.1,flatShading:!1,side:Mn}),geoDome:new jr(1,4,8,0,Math.PI),geoArch:new Fr(1,.1,4,12,Math.PI),geoCylinder:new Xi(1,1,1,8),geoBox:new rs(1,1,1)};ct.geoTreeTrunk.translate(0,.5,0);class $n{type;position;radius;isBroken=!1;visuals=[];constructor(e,t,n){this.type=e,this.position=t,this.radius=n}break(){this.isBroken||(this.isBroken=!0,this.visuals.forEach(e=>{const t=new Je().makeScale(0,0,0);e.mesh.setMatrixAt(e.index,t),e.mesh.instanceMatrix.needsUpdate=!0}))}}class xs{static generateOperaHouse(e,t){const n=dt(e,t),s=new C(e,n-2,t),r=[],a=new ut;return a.position.copy(s),a.rotation.x=-Math.PI/2,a.rotation.z=.5,a.scale.set(15,15,25),a.updateMatrix(),r.push(a.matrix.clone()),a.position.copy(s).add(new C(12,0,5)),a.rotation.z=.3,a.scale.set(12,12,20),a.updateMatrix(),r.push(a.matrix.clone()),a.position.copy(s).add(new C(22,0,8)),a.rotation.z=.1,a.scale.set(8,8,15),a.updateMatrix(),r.push(a.matrix.clone()),{prop:new $n("landmark",s,30),matrices:{opera:r}}}static generateHarbourBridge(e,t){const n=dt(e,t),s=new C(e,n-5,t),r=[],a=new ut;return a.position.copy(s),a.rotation.z=.2,a.scale.set(60,60,60),a.updateMatrix(),r.push(a.matrix.clone()),{prop:new $n("landmark",s,60),matrices:{bridge:r}}}static generateSydneyTower(e,t){const n=dt(e,t),s=new C(e,n+2,t),r=[],a=new ut;a.position.copy(s),a.rotation.z=Math.PI/2+.1,a.rotation.x=.5,a.scale.set(2,60,2),a.updateMatrix(),r.push(a.matrix.clone());const o=s.clone().add(new C(50,0,0));return a.position.copy(o),a.rotation.z=Math.PI/2+.1,a.scale.set(8,6,8),a.updateMatrix(),r.push(a.matrix.clone()),{prop:new $n("landmark",s,50),matrices:{tower:r}}}static generateUluru(e,t){const n=dt(e,t),s=new C(e,n,t),r=[],a=new ut;return a.position.copy(s),a.scale.set(60,20,40),a.updateMatrix(),r.push(a.matrix.clone()),{prop:new $n("landmark",s,40),matrices:{uluru:r}}}static generateTree(e,t){const n=dt(e,t),s=new C(e,n,t),r=Math.random();let a,o;r<.7?(a=pt(15,30),o=pt(2.5,5)):r<.9?(a=pt(30,50),o=pt(5,8)):(a=pt(50,80),o=pt(8,12));const l=Math.min(3,Math.max(.5,j0(1,.7)));a*=l,o*=l;const c=pt(0,Math.PI),h=new ut;h.position.copy(s),h.rotation.y=c,h.scale.set(o,a,o),h.updateMatrix();const u=h.matrix.clone();h.position.y=n+a*.8,h.rotation.set(Math.PI/2,0,0),h.scale.set(o,o,o),h.updateMatrix();const d=h.matrix.clone();return{prop:new $n("tree",s,o*.75),matrices:{trunk:u,ring:d}}}static generateRock(e,t){const n=dt(e,t),s=new C(e,n,t),r=pt(.8,1.4),a=new ut;return a.position.copy(s),a.position.y+=1,a.rotation.set(pt(0,3),pt(0,3),pt(0,3)),a.scale.setScalar(r),a.updateMatrix(),{prop:new $n("rock",s,1*r),matrices:{rock:a.matrix.clone()}}}static generateCrystal(e,t){const n=dt(e,t),s=new C(e,n,t),r=[],a=3;for(let o=0;o<a;o++){const l=pt(1,3),c=new ut;c.position.set(s.x+pt(-.5,.5),s.y+l/2,s.z+pt(-.5,.5));const h=Math.atan2(c.position.z-s.z,c.position.x-s.x);c.rotation.z=Math.PI/8,c.rotation.y=h,c.scale.set(1,l,1),c.updateMatrix(),r.push(c.matrix.clone())}return{prop:new $n("crystal",s,1.2),matrices:{crystal:r}}}static generateGrass(e,t){const n=dt(e,t),s=new C(e,n,t),r=[],a=2+Math.floor(Math.random()*3);for(let o=0;o<a;o++){const l=.6+Math.random()*.4,c=new ut;c.position.set(s.x+pt(-.3,.3),s.y+l*.75,s.z+pt(-.3,.3)),c.rotation.y=pt(0,Math.PI*2),c.scale.setScalar(l),c.updateMatrix(),r.push(c.matrix.clone())}return{prop:new $n("grass",s,.3),matrices:{grass:r}}}}class jc{mesh;bodyMeshes=[];path=[];position=new C(0,0,0);angle=0;turnFactor=0;currentHeadColor=ht.colors.SNAKE_HEAD;targetBaseSpeed=Z.BASE_SNAKE_SPEED;actualSpeed=Z.BASE_SNAKE_SPEED;verticalVelocity=0;isAirborne=!1;growPending=0;isRemote=!1;isBoosting=!1;boostTimer=0;invulnerableTimer=0;isStalled=!1;isDead=!1;isUnderwater=!1;wasUnderwater=!1;isSkimming=!1;airTimer=Z.MAX_AIR_TIME;onBoostStart;onCrash;onLand;onBreak;onEnterWater;onExitWater;playerLight;headGeo;bodyGeo;headMat;bodyMat;constructor(e){this.mesh=new Wi,e.add(this.mesh);const t=Z.SEGMENT_RADIUS;this.headGeo=new Sl(t*1.2,0),this.bodyGeo=new $r(t,0),this.headMat=new dn({color:ht.colors.SNAKE_HEAD,emissive:ht.colors.SNAKE_HEAD,emissiveIntensity:1.2,roughness:0,flatShading:!0}),this.bodyMat=new dn({color:ht.colors.SNAKE_BODY,emissive:ht.colors.SNAKE_BODY,emissiveIntensity:.3,roughness:.3,flatShading:!0}),this.playerLight=new Fd(ht.colors.SNAKE_EMISSIVE,2,20),this.playerLight.position.y=2,this.mesh.add(this.playerLight),this.reset(Z.BASE_SNAKE_SPEED)}reset(e){this.bodyMeshes.forEach(r=>this.mesh.remove(r)),this.bodyMeshes=[],this.path=[];let t=!1,n=0;for(;!t&&n<100;){const r=pt(-100,100),a=pt(-100,100),o=dt(r,a);o>Z.WATER_LEVEL+3&&o<Z.TERRAIN_HEIGHT*.5&&(this.position.set(r,o,a),t=!0),n++}this.angle=0,this.turnFactor=0,this.growPending=0,this.targetBaseSpeed=e,this.actualSpeed=e,this.verticalVelocity=0,this.isAirborne=!1,this.isBoosting=!1,this.isSkimming=!1,this.airTimer=Z.MAX_AIR_TIME,this.invulnerableTimer=3,this.isStalled=!1;const s=Z.SNAKE_START_LENGTH;for(let r=0;r<=s*20;r++){const a=r*(Z.SEGMENT_SPACING/10);this.path.push(new C(this.position.x-a,this.position.y,this.position.z))}for(let r=0;r<s;r++)this.addSegment(r===0);this.updateBodyVisuals()}setBaseSpeed(e){this.targetBaseSpeed=e}setTurn(e){this.turnFactor=e}setInput(e,t){this.setTurn(e),this.setBoosting(t)}updatePalette(e){this.currentHeadColor=e.colors.SNAKE_HEAD,this.headMat.color.setHex(e.colors.SNAKE_HEAD),this.headMat.emissive.setHex(e.colors.SNAKE_HEAD),this.bodyMat.color.setHex(e.colors.SNAKE_BODY),this.bodyMat.emissive.setHex(e.colors.SNAKE_BODY),this.playerLight.color.setHex(e.colors.SNAKE_EMISSIVE)}setBoosting(e){e&&!this.isBoosting&&this.onBoostStart&&this.onBoostStart(),this.isBoosting=e}addSegment(e){const t=new St(e?this.headGeo:this.bodyGeo,e?this.headMat:this.bodyMat);t.castShadow=!0,t.receiveShadow=!0,this.mesh.add(t),this.bodyMeshes.push(t)}update(e,t=[]){this.invulnerableTimer>0&&(this.invulnerableTimer-=e);let n=this.targetBaseSpeed;this.isBoosting&&(n*=Z.BOOST_SPEED_MULTIPLIER);const s=2,r=this.position.x+Math.cos(this.angle)*s,a=this.position.z+Math.sin(this.angle)*s,o=dt(this.position.x,this.position.z),c=(dt(r,a)-o)/s;if(this.isAirborne)this.actualSpeed*=1-.1*e;else{const E=c<0;let w=-c*Z.GRAVITY_ACCEL*Z.SLOPE_SENSITIVITY;if(E&&this.actualSpeed>n){const I=(this.actualSpeed-n)/(Z.MAX_DOWNHILL_SPEED-n),y=Math.max(0,Math.min(1,I)),M=1+Math.pow(y,Z.DOWNHILL_ACCEL_EXPONENT);w*=M}this.actualSpeed+=w*e;const T=n-this.actualSpeed;let A;E&&this.actualSpeed>n?A=Z.FRICTION_DOWNHILL:!E&&this.actualSpeed<n?A=Z.FRICTION_UPHILL:A=Z.FRICTION,this.actualSpeed+=T*A*e}this.actualSpeed>Z.MAX_DOWNHILL_SPEED&&(this.actualSpeed=Z.MAX_DOWNHILL_SPEED),this.actualSpeed<Z.MIN_STALL_SPEED&&!this.isAirborne?(this.isStalled=!0,this.actualSpeed<0&&(this.actualSpeed=0)):this.isStalled=!1,isNaN(this.actualSpeed)&&(this.actualSpeed=0);let h=Z.SNAKE_TURN_SPEED;this.isAirborne?h*=Z.AIR_CONTROL:this.isStalled&&(h*=.2),this.turnFactor!==0&&(this.angle+=this.turnFactor*h*e);const u=this.actualSpeed*e,d=this.position.x+Math.cos(this.angle)*u,f=this.position.z+Math.sin(this.angle)*u;this.verticalVelocity-=Z.PHYSICS_GRAVITY*e,isNaN(this.verticalVelocity)&&(this.verticalVelocity=0);const g=this.position.y+this.verticalVelocity*e,_=dt(d,f);let m=_,p=!1;if((this.isBoosting||this.actualSpeed>=Z.SKIM_SPEED_THRESHOLD)&&Z.WATER_LEVEL>_&&(m=Z.WATER_LEVEL,p=!0),g<=m+Z.SEGMENT_RADIUS){const E=this.isAirborne,w=this.verticalVelocity;this.isAirborne=!1,this.isSkimming=p,this.position.y=m+Z.SEGMENT_RADIUS,E&&this.onLand&&w<-10&&this.onLand(Math.abs(w));const T=dt(this.position.x,this.position.z),A=(this.isBoosting||this.actualSpeed>=Z.SKIM_SPEED_THRESHOLD)&&Z.WATER_LEVEL>T?Z.WATER_LEVEL:T,y=(u<1e-4?0:(m-A)/u)*this.actualSpeed;y>this.verticalVelocity&&(this.verticalVelocity=y,isNaN(this.verticalVelocity)&&(this.verticalVelocity=0),y>5&&this.actualSpeed>20&&(this.verticalVelocity+=Z.JUMP_ASSIST*e))}else this.isAirborne=!0,this.isSkimming=!1,this.position.y=g;if(c>Z.MAX_CLIMBABLE_SLOPE*1.2&&this.invulnerableTimer<=0&&!this.isAirborne&&this.actualSpeed>5)return this.isDead=!0,this.onCrash&&this.onCrash(),!1;if(this.invulnerableTimer<=0){const E=Z.SEGMENT_RADIUS*1.5;for(const w of t){const T=d-w.position.x,A=f-w.position.z;if(Math.abs(T)>10||Math.abs(A)>10)continue;const I=w.radius>3?w.radius*2:w.radius,y=w.radius>3?8:2;if(J0({x:d,y:this.position.y,z:f,radius:E},{x:w.position.x,z:w.position.z,minY:w.position.y,maxY:w.position.y+I+y,radius:w.radius})){if(this.isBoosting&&w.type==="rock"&&!w.isBroken){w.break?.(),this.onBreak&&this.onBreak(w.position,w.type);continue}if(w.isBroken)continue;return this.isDead=!0,this.onCrash&&this.onCrash(),!1}}}if(this.position.x=d,this.position.z=f,isNaN(this.position.x)&&(this.position.x=0),isNaN(this.position.y)&&(this.position.y=0),isNaN(this.position.z)&&(this.position.z=0),isNaN(this.angle)&&(this.angle=0),this.wasUnderwater=this.isUnderwater,this.isUnderwater=!this.isSkimming&&this.position.y<Z.WATER_LEVEL,this.isUnderwater){if(this.airTimer-=e,this.airTimer<=0)return this.isDead=!0,this.onCrash&&this.onCrash(),!1}else this.airTimer=Z.MAX_AIR_TIME;this.isUnderwater&&!this.wasUnderwater&&this.onEnterWater&&this.onEnterWater(),!this.isUnderwater&&this.wasUnderwater&&this.onExitWater&&this.onExitWater(),(this.path.length===0||this.position.distanceTo(this.path[0])>=.2)&&this.path.unshift(this.position.clone());const S=50+this.bodyMeshes.length*20;if(this.path.length>S&&(this.path.length=S),this.growPending>0&&(this.addSegment(!1),this.growPending--),this.invulnerableTimer<=0&&this.bodyMeshes.length>25){const w=Z.SEGMENT_RADIUS*1.8;for(let T=25;T<this.bodyMeshes.length;T+=3){const A=this.bodyMeshes[T].position,I=Math.abs(this.position.x-A.x),y=Math.abs(this.position.z-A.z);if(I>3||y>3)continue;if(I*I+y*y<w*w&&Math.abs(this.position.y-A.y)<3)return this.isDead=!0,this.onCrash&&this.onCrash(),!1}}return!0}updateBodyVisuals(){let e=0,t=0;const n=this.bodyMeshes[0];n.position.copy(this.position);const s=Date.now()*.002,r=Math.max(-.8,Math.min(.8,this.verticalVelocity*.05));if(n.rotation.set(0,0,0),n.rotation.y=-this.angle,n.rotation.z=this.isStalled?.5:this.turnFactor*-.2,n.rotateX(r),this.playerLight.position.copy(this.position),this.playerLight.position.y+=3,this.isStalled){const a=(Math.sin(s*10)+1)*.5;this.headMat.emissiveIntensity=1.2+a*1,this.headMat.color.setHex(16711680)}else this.headMat.emissiveIntensity=1.2,this.headMat.color.setHex(this.currentHeadColor);for(let a=1;a<this.bodyMeshes.length;a++){const o=this.bodyMeshes[a],l=a*Z.SEGMENT_SPACING;if(e===0&&this.path.length>0){const c=this.position.distanceTo(this.path[0]);if(t+c>=l){const h=(l-t)/c;o.position.lerpVectors(this.position,this.path[0],h),o.updateMatrix();continue}t+=c}for(;e<this.path.length-1;){const c=this.path[e],h=this.path[e+1],u=c.distanceTo(h);if(t+u>=l){const d=(l-t)/u;o.position.lerpVectors(c,h,d),o.updateMatrix();break}t+=u,e++}}if(this.invulnerableTimer>0){const o=this.invulnerableTimer*3%1,l=.3+.7*Math.abs(Math.sin(o*Math.PI));this.mesh.traverse(c=>{if(c instanceof St&&c.material){const h=c.material;h.transparent=!0,h.opacity=l}})}else this.mesh.traverse(a=>{if(a instanceof St&&a.material){const o=a.material;o.transparent=!1,o.opacity=1}})}setMultiplayerColor(e){const t=_i[e]||_i[0];this.currentHeadColor=t.head,this.headMat.color.setHex(t.head),this.headMat.emissive.setHex(t.head),this.bodyMat.color.setHex(t.body),this.bodyMat.emissive.setHex(t.body),this.playerLight.color.setHex(t.emissive)}resetAt(e,t,n,s){this.bodyMeshes.forEach(o=>this.mesh.remove(o)),this.bodyMeshes=[],this.path=[];const r=dt(e,t);this.position.set(e,r,t),this.angle=n,this.turnFactor=0,this.growPending=0,this.targetBaseSpeed=s,this.actualSpeed=s,this.verticalVelocity=0,this.isAirborne=!1,this.isBoosting=!1,this.isSkimming=!1,this.airTimer=Z.MAX_AIR_TIME,this.invulnerableTimer=3,this.isStalled=!1;const a=Z.SNAKE_START_LENGTH;for(let o=0;o<=a*20;o++){const l=o*(Z.SEGMENT_SPACING/10);this.path.push(new C(this.position.x-Math.cos(n)*l,this.position.y,this.position.z-Math.sin(n)*l))}for(let o=0;o<a;o++)this.addSegment(o===0);this.updateBodyVisuals()}serialize(e,t=0){return{playerId:e,x:this.position.x,y:this.position.y,z:this.position.z,angle:this.angle,speed:this.actualSpeed,vy:this.verticalVelocity,alive:!0,score:0,segmentCount:this.bodyMeshes.length,isBoosting:this.isBoosting,lastProcessedSeq:t}}applyNetState(e){for(this.position.set(e.x,e.y,e.z),this.angle=e.angle,this.actualSpeed=e.speed,this.verticalVelocity=e.vy,this.isBoosting=e.isBoosting;this.bodyMeshes.length<e.segmentCount;)this.addSegment(!1);(this.path.length===0||this.position.distanceTo(this.path[0])>=.2)&&this.path.unshift(this.position.clone());const n=50+this.bodyMeshes.length*20;this.path.length>n&&(this.path.length=n)}getPathKeypoints(e=5){const t=[];for(let n=0;n<this.path.length;n+=e){const s=this.path[n];t.push({x:s.x,y:s.y,z:s.z})}return t}applyPathKeypoints(e){this.path=[];for(let t=0;t<e.length;t++)this.path.push(new C(e[t].x,e[t].y,e[t].z))}revive(){this.isDead=!1,this.invulnerableTimer=1}isAlive(){return!this.isDead}hide(){this.mesh.visible=!1}show(){this.mesh.visible=!0}}class _r{scene;activeApples=[];nextAppleId=0;getSnakeHeads;isHost;onEat;constructor(e,t,n=!0){this.scene=e,this.getSnakeHeads=t,this.isHost=n}spawnApple(e){if(e.type!=="tree")return"";const t=String(this.nextAppleId++),n=new St(ct.geoApple,ct.matApple),s=e.position,r=Math.random()*Math.PI*2,a=pt(4,10),o=s.x+Math.cos(r)*a,l=s.z+Math.sin(r)*a,h=dt(o,l)+pt(15,25);return n.position.set(o,h,l),this.scene.add(n),this.activeApples.push({id:t,mesh:n,velocity:new C(0,0,0),isFalling:!0,landed:!1,time:Math.random()*100}),t}update(e){const t=[],s=Z.APPLE_CULL_DIST*Z.APPLE_CULL_DIST,r=this.getSnakeHeads(),a=r.length>0?r[0].position:null;for(let o=this.activeApples.length-1;o>=0;o--){const l=this.activeApples[o];if(a&&a.distanceToSquared(l.mesh.position)>s){this.scene.remove(l.mesh),this.activeApples.splice(o,1);continue}if(l.isFalling){l.velocity.y-=25*e,l.mesh.position.addScaledVector(l.velocity,e);const c=dt(l.mesh.position.x,l.mesh.position.z);l.mesh.position.y<=c+.5&&(l.mesh.position.y=c+.5,Math.abs(l.velocity.y)>2?(l.velocity.y*=-.4,l.velocity.x*=.8,l.velocity.z*=.8):(l.isFalling=!1,l.landed=!0,l.velocity.set(0,0,0),l.baseY=c))}else{l.time+=e*2;const c=l.baseY??dt(l.mesh.position.x,l.mesh.position.z);l.mesh.position.y=c+.5+Math.sin(l.time)*.2,l.mesh.rotation.y+=e,l.mesh.rotation.z+=e*.5}if(this.isHost){let c=!1;for(const h of r)if(h.position.distanceToSquared(l.mesh.position)<2.5*2.5){const d=l.mesh.position.clone();this.scene.remove(l.mesh),this.activeApples.splice(o,1),this.onEat&&this.onEat(d),t.push({playerId:h.id,appleId:l.id,position:d}),c=!0;break}if(c)continue}}return t}addAppleFromNet(e,t,n,s){const r=new St(ct.geoApple,ct.matApple);r.position.set(t,n,s),this.scene.add(r),this.activeApples.push({id:e,mesh:r,velocity:new C(0,0,0),isFalling:!1,landed:!0,time:Math.random()*100,baseY:dt(t,s)})}removeAppleFromNet(e){const t=this.activeApples.findIndex(n=>n.id===e);t>=0&&(this.scene.remove(this.activeApples[t].mesh),this.activeApples.splice(t,1))}getAppleById(e){return this.activeApples.find(t=>t.id===e)}reset(){for(const e of this.activeApples)this.scene.remove(e.mesh);this.activeApples=[],this.nextAppleId=0}}function e_(i){ct.matTree.color.setHex(i.colors.OBSTACLE_DARK),ct.matRing.color.setHex(i.colors.UI_ACCENT),ct.matRing.emissive.setHex(i.colors.UI_ACCENT),ct.matRock.color.setHex(i.colors.OBSTACLE_LIGHT),ct.matCrystal.color.setHex(i.colors.CRYSTAL),ct.matCrystal.emissive.setHex(i.colors.CRYSTAL),ct.matGrass.color.setHex(i.colors.GRASS),ct.matApple.color.setHex(i.colors.APPLE),ct.matApple.emissive.setHex(i.colors.APPLE_EMISSIVE),ct.matGround.color.setHex(i.colors.GROUND_BASE)}class t_{queue=[];generating=!1;playerX=0;playerZ=0;updatePlayerPosition(e,t){this.playerX=e,this.playerZ=t}request(e,t){this.queue.some(n=>n.x===e&&n.z===t)||(this.queue.push({x:e,z:t}),this.queue.sort((n,s)=>{const r=Math.abs(n.x-this.playerX)+Math.abs(n.z-this.playerZ),a=Math.abs(s.x-this.playerX)+Math.abs(s.z-this.playerZ);return r-a}))}async generateNext(e,t){if(this.queue.length===0||this.generating)return null;this.generating=!0;const n=this.queue.shift();await new Promise(r=>setTimeout(r,0));const s=new qc(n.x,n.z,e,t);return this.generating=!1,{key:`${n.x},${n.z}`,chunk:s}}generateSync(e,t,n,s){const r=new qc(e,t,n,s);return{key:`${e},${t}`,chunk:r}}}class qc{mesh;instancedMeshes=[];props=[];x;z;constructor(e,t,n,s=!1){this.x=e,this.z=t;const r=Z.CHUNK_SIZE,a=s?32:64,o=new as(r,r,a,a),l=o.attributes.position;for(let c=0;c<l.count;c++){const h=l.getX(c),u=l.getY(c),d=e*r+h,f=t*r-u,g=dt(d,f);l.setZ(c,g)}o.computeVertexNormals(),this.mesh=new St(o,ct.matGround),this.mesh.rotation.x=-Math.PI/2,this.mesh.position.set(e*r,0,t*r),this.mesh.receiveShadow=!0,this.mesh.matrixAutoUpdate=!1,this.mesh.updateMatrix(),n.add(this.mesh),this.populate(n)}populate(e){const t=Z.CHUNK_SIZE,n={trunk:{props:[],matrices:[]},ring:{props:[],matrices:[]},rock:{props:[],matrices:[]},crystal:{props:[],matrices:[]},grass:{props:[],matrices:[]}},s=4+Math.floor(Math.random()*4);for(let a=0;a<s;a++){const o=pt(-t/2,t/2),l=pt(-t/2,t/2),c=this.x*t+o,h=this.z*t+l,u=Wc(c,h);if(u==="water")continue;let d=null;u==="rock"?(d=xs.generateRock(c,h),d&&(n.rock.props.push(d.prop),n.rock.matrices.push(d.matrices.rock))):u==="flower"?(d=xs.generateCrystal(c,h),d&&d.matrices.crystal.forEach(f=>{n.crystal.props.push(d.prop),n.crystal.matrices.push(f)})):Math.random()<.7?(d=xs.generateTree(c,h),d&&(n.trunk.props.push(d.prop),n.trunk.matrices.push(d.matrices.trunk),n.ring.props.push(d.prop),n.ring.matrices.push(d.matrices.ring))):(d=xs.generateRock(c,h),d&&(n.rock.props.push(d.prop),n.rock.matrices.push(d.matrices.rock))),d&&this.props.push(d.prop)}const r=15+Math.floor(Math.random()*20);for(let a=0;a<r;a++){const o=pt(-t/2,t/2),l=pt(-t/2,t/2),c=this.x*t+o,h=this.z*t+l;if(Wc(c,h)==="grass"){const d=xs.generateGrass(c,h);d&&(d.matrices.grass.forEach(f=>{n.grass.props.push(d.prop),n.grass.matrices.push(f)}),this.props.push(d.prop))}}this.createInstancedMesh(e,n.trunk.props,n.trunk.matrices,ct.geoTreeTrunk,ct.matTree,!0),this.createInstancedMesh(e,n.ring.props,n.ring.matrices,ct.geoTreeRing,ct.matRing,!0,!0),this.createInstancedMesh(e,n.rock.props,n.rock.matrices,ct.geoRock,ct.matRock,!0),this.createInstancedMesh(e,n.crystal.props,n.crystal.matrices,ct.geoCrystal,ct.matCrystal,!1),this.createInstancedMesh(e,n.grass.props,n.grass.matrices,ct.geoGrass,ct.matGrass,!1)}createInstancedMesh(e,t,n,s,r,a,o=!1){if(n.length===0)return;const l=new Rd(s,r,n.length);l.instanceMatrix.setUsage(ed);const c=new ve;for(let h=0;h<n.length;h++)if(l.setMatrixAt(h,n[h]),t[h]&&t[h].visuals.push({mesh:l,index:h}),o){const u=.8+Math.random()*.2;c.setRGB(u,u,u),l.setColorAt(h,c)}l.instanceMatrix.needsUpdate=!0,a&&(l.castShadow=!0,l.receiveShadow=!0),e.add(l),this.instancedMeshes.push(l)}dispose(e){e.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.instancedMeshes.forEach(t=>{e.remove(t),t.dispose()}),this.instancedMeshes=[],this.props=[]}}class n_{scene;group;chunks=new Map;isMobile;chunkGenerator=new t_;lastUpdateX=-9999;lastUpdateZ=-9999;constructor(e,t=!1){this.scene=e,this.isMobile=t,this.group=new Wi,this.scene.add(this.group)}ensureInitialChunks(e,t){const n=Z.CHUNK_SIZE,s=Math.floor(e/n),r=Math.floor(t/n),a=2;for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++){const h=s+l,u=r+c,d=`${h},${u}`;if(!this.chunks.has(d)){const f=this.chunkGenerator.generateSync(h,u,this.group,this.isMobile);this.chunks.set(f.key,f.chunk)}}const o=Z.RENDER_DISTANCE;for(let l=-o;l<=o;l++)for(let c=-o;c<=o;c++){const h=s+l,u=r+c,d=`${h},${u}`;Math.abs(l)<=a&&Math.abs(c)<=a||this.chunks.has(d)||this.chunkGenerator.request(h,u)}this.lastUpdateX=e,this.lastUpdateZ=t}update(e,t){if(Math.abs(e-this.lastUpdateX)+Math.abs(t-this.lastUpdateZ)<20)return;this.lastUpdateX=e,this.lastUpdateZ=t;const s=Z.CHUNK_SIZE,r=Math.floor(e/s),a=Math.floor(t/s);this.chunkGenerator.updatePlayerPosition(r,a);const o=new Set,l=Z.RENDER_DISTANCE;for(let u=-l;u<=l;u++)for(let d=-l;d<=l;d++){const f=r+u,g=a+d,_=`${f},${g}`;o.add(_),this.chunks.has(_)||this.chunkGenerator.request(f,g)}const c=this.isMobile?1:2;for(let u=0;u<c;u++)this.chunkGenerator.generateNext(this.group,this.isMobile).then(d=>{d&&this.chunks.set(d.key,d.chunk)}).catch(d=>{console.error("Chunk generation failed:",d)});const h=1;for(const[u,d]of this.chunks)o.has(u)||Math.abs(d.x-r)+Math.abs(d.z-a)>l+h&&(d.dispose(this.group),this.chunks.delete(u))}getObstacles(){const e=[];return this.chunks.forEach(t=>{t.props.forEach(n=>{n.type!=="crystal"&&n.type!=="grass"&&n.radius>.5&&e.push(n)})}),e}getRandomTree(){const e=[];return this.chunks.forEach(t=>{t.props.forEach(n=>{n.type==="tree"&&e.push(n)})}),e.length===0?null:e[Math.floor(Math.random()*e.length)]}reset(){this.chunks.forEach(e=>e.dispose(this.group)),this.chunks.clear(),this.lastUpdateX=-9999}}const Xc={fontFamily:"Courier New, monospace",sizeMd:"14px"};class Rs{score=0;container;scoreEl;epContainerEl;epBarEl;menuEl;gameOverEl;finalScoreEl;airContainerEl;airBarEl;leaderboardEl;nameInputEl;submitBtnEl;submitContainerEl;lobbyEl;lobbyPlayerListEl;lobbyCodeEl;lobbyStartBtnEl;spectatorEl;killFeedEl;mpResultsEl;countdownEl;menuHomeEl;menuNameEl;menuCodeEl;storedMpName="";static NAME_STORAGE_KEY="yume-snake-name";onStartClick=()=>{};onRestartClick=()=>{};onScoreSubmit=()=>{};onCreateGame=()=>{};onJoinGame=()=>{};onLobbyStart=()=>{};onLobbyLeave=()=>{};onMpPlayAgain=()=>{};onSpectateNext=()=>{};onHostDisconnectReturn=()=>{};currentAccentColor="#00E5FF";constructor(){this.container=document.createElement("div"),this.container.id="game-ui",document.body.appendChild(this.container);const e=(a,o)=>Object.assign(a.style,o),t=document.createElement("div");e(t,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"50",opacity:"0.08",backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,mixBlendMode:"multiply"}),this.container.appendChild(t);const n=document.createElement("div");e(n,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"45",background:"radial-gradient(circle, transparent 40%, rgba(0,0,0,0.15) 100%)",mixBlendMode:"multiply"}),this.container.appendChild(n),this.scoreEl=document.createElement("div"),this.scoreEl.innerText="0",e(this.scoreEl,{position:"absolute",top:"40px",left:"50%",transform:"translateX(-50%)",color:"rgba(255,255,255,0.8)",fontSize:"64px",fontFamily:'"Courier New", Courier, monospace',fontWeight:"100",letterSpacing:"5px",zIndex:"10",pointerEvents:"none",textShadow:"0 0 20px rgba(0,229,255,0.5)"}),this.container.appendChild(this.scoreEl),this.epContainerEl=document.createElement("div"),e(this.epContainerEl,{position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",width:"300px",height:"2px",backgroundColor:"rgba(255,255,255,0.2)",zIndex:"10"}),this.epBarEl=document.createElement("div"),e(this.epBarEl,{width:"0%",height:"100%",backgroundColor:"#00E5FF",transition:"width 0.1s linear",boxShadow:"0 0 10px #00E5FF"}),this.epContainerEl.appendChild(this.epBarEl),this.container.appendChild(this.epContainerEl),this.airContainerEl=document.createElement("div"),e(this.airContainerEl,{position:"absolute",bottom:"60px",left:"50%",transform:"translateX(-50%)",width:"200px",height:"2px",backgroundColor:"rgba(255,255,255,0.1)",zIndex:"10",display:"none"});const s=document.createElement("div");s.innerText="OXYGEN",e(s,{position:"absolute",top:"-15px",left:"0",fontSize:"8px",color:"rgba(255,255,255,0.5)",letterSpacing:"2px"}),this.airContainerEl.appendChild(s),this.airBarEl=document.createElement("div"),e(this.airBarEl,{width:"100%",height:"100%",backgroundColor:"white",transition:"width 0.1s linear"}),this.airContainerEl.appendChild(this.airBarEl),this.container.appendChild(this.airContainerEl),this.menuEl=document.createElement("div"),e(this.menuEl,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"white",zIndex:"20",fontFamily:'"Courier New", Courier, monospace',userSelect:"none"}),this.menuEl.innerHTML=`
        <div id="menu-home">
            <h1 style="
                margin: 0 0 20px 0;
                font-size: 80px;
                font-weight: 100;
                letter-spacing: 10px;
                color: #fff;
                text-shadow: 0 0 30px rgba(255,255,255,0.5);
            ">YUME SNAKE</h1>
            <div style="font-size: 14px; color: #aaa; letter-spacing: 2px; margin-bottom: 30px; text-transform: uppercase;">
                Drift . Explore . Ascend
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
                <button id="start-btn" style="
                    padding: 15px 60px;
                    font-size: 16px;
                    background: transparent;
                    color: white;
                    border: 1px solid rgba(255,255,255,0.3);
                    border-radius: 0;
                    cursor: pointer;
                    letter-spacing: 4px;
                    transition: all 0.2s;
                    font-family: inherit;
                ">SINGLE PLAYER</button>
                <button id="multiplayer-btn" style="
                    padding: 15px 60px;
                    font-size: 16px;
                    background: transparent;
                    color: #00E5FF;
                    border: 1px solid #00E5FF;
                    border-radius: 0;
                    cursor: pointer;
                    letter-spacing: 4px;
                    transition: all 0.2s;
                    font-family: inherit;
                ">MULTIPLAYER</button>
            </div>
            <div id="leaderboard-container" style="margin-top: 30px;"></div>
            <div style="margin-top: 30px; font-size: 10px; color: #666; letter-spacing: 1px;">
                [A/D / TOUCH SIDES] STEER &nbsp; &nbsp; [HOLD SPACE] BOOST &nbsp; &nbsp; [1-4] SEASONS
            </div>
        </div>
        <div id="menu-name" style="display: none;">
            <h1 style="
                margin: 0 0 15px 0;
                font-size: 40px;
                font-weight: 100;
                letter-spacing: 5px;
                color: #00E5FF;
                text-shadow: 0 0 20px rgba(0,229,255,0.5);
            ">MULTIPLAYER</h1>
            <div style="font-size: 12px; color: #aaa; letter-spacing: 2px; margin-bottom: 15px;">ENTER YOUR NAME</div>
            <input id="mp-name-input" type="text" maxlength="10" placeholder="YOUR NAME" style="
                width: 160px;
                padding: 10px 15px;
                font-size: 18px;
                background: transparent;
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                text-align: center;
                letter-spacing: 3px;
                font-family: inherit;
                text-transform: uppercase;
                margin-bottom: 25px;
            " />
            <div style="display: flex; gap: 15px; justify-content: center;">
                <button id="host-btn" style="
                    padding: 15px 50px;
                    font-size: 14px;
                    background: transparent;
                    color: #00E5FF;
                    border: 1px solid #00E5FF;
                    cursor: pointer;
                    letter-spacing: 3px;
                    transition: all 0.2s;
                    font-family: inherit;
                ">HOST</button>
                <button id="join-btn" style="
                    padding: 15px 50px;
                    font-size: 14px;
                    background: transparent;
                    color: #00E5FF;
                    border: 1px solid #00E5FF;
                    cursor: pointer;
                    letter-spacing: 3px;
                    transition: all 0.2s;
                    font-family: inherit;
                ">JOIN</button>
            </div>
            <div style="margin-top: 25px;">
                <button id="name-back-btn" style="
                    padding: 10px 30px;
                    font-size: 12px;
                    background: transparent;
                    color: #888;
                    border: 1px solid rgba(255,255,255,0.15);
                    cursor: pointer;
                    letter-spacing: 2px;
                    font-family: inherit;
                    transition: all 0.2s;
                ">BACK</button>
            </div>
        </div>
        <div id="menu-code" style="display: none;">
            <h1 style="
                margin: 0 0 15px 0;
                font-size: 40px;
                font-weight: 100;
                letter-spacing: 5px;
                color: #00E5FF;
                text-shadow: 0 0 20px rgba(0,229,255,0.5);
            ">JOIN GAME</h1>
            <div style="font-size: 12px; color: #aaa; letter-spacing: 2px; margin-bottom: 15px;">ENTER ROOM CODE</div>
            <input id="room-code-input" type="text" maxlength="4" placeholder="CODE" style="
                width: 100px;
                padding: 10px 15px;
                font-size: 24px;
                background: transparent;
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                text-align: center;
                letter-spacing: 6px;
                font-family: inherit;
                text-transform: uppercase;
                margin-bottom: 25px;
            " />
            <div>
                <button id="join-confirm-btn" style="
                    padding: 15px 50px;
                    font-size: 14px;
                    background: transparent;
                    color: #00E5FF;
                    border: 1px solid #00E5FF;
                    cursor: pointer;
                    letter-spacing: 3px;
                    transition: all 0.2s;
                    font-family: inherit;
                ">JOIN</button>
            </div>
            <div style="margin-top: 25px;">
                <button id="code-back-btn" style="
                    padding: 10px 30px;
                    font-size: 12px;
                    background: transparent;
                    color: #888;
                    border: 1px solid rgba(255,255,255,0.15);
                    cursor: pointer;
                    letter-spacing: 2px;
                    font-family: inherit;
                    transition: all 0.2s;
                ">BACK</button>
            </div>
        </div>
    `,this.menuHomeEl=this.menuEl.querySelector("#menu-home"),this.menuNameEl=this.menuEl.querySelector("#menu-name"),this.menuCodeEl=this.menuEl.querySelector("#menu-code"),this.leaderboardEl=this.menuEl.querySelector("#leaderboard-container"),this.container.appendChild(this.menuEl),this.gameOverEl=document.createElement("div"),e(this.gameOverEl,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"white",zIndex:"30",display:"none",fontFamily:'"Courier New", Courier, monospace'}),this.gameOverEl.innerHTML=`
        <h1 style="font-size: 40px; font-weight: 100; letter-spacing: 5px; color: #FF4081;">SEVERED</h1>
        <p style="font-size: 18px; color: #ccc; margin-bottom: 20px;">ECHO: <span id="final-score">0</span></p>
        <div id="submit-container" style="margin-bottom: 30px;">
            <div style="font-size: 12px; color: #aaa; letter-spacing: 2px; margin-bottom: 10px;">ENTER YOUR NAME</div>
            <input id="name-input" type="text" maxlength="10" placeholder="AAA" style="
                width: 120px;
                padding: 10px 15px;
                font-size: 18px;
                background: transparent;
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                text-align: center;
                letter-spacing: 3px;
                font-family: inherit;
                text-transform: uppercase;
                margin-bottom: 15px;
            " />
            <br/>
            <button id="submit-btn" style="
                padding: 10px 40px;
                font-size: 12px;
                background: transparent;
                border: 1px solid #FF4081;
                color: #FF4081;
                cursor: pointer;
                letter-spacing: 2px;
                font-family: inherit;
            ">SUBMIT</button>
        </div>
        <button id="restart-btn" style="
            padding: 12px 50px;
            font-size: 14px;
            background: transparent;
            border: 1px solid #FF4081;
            color: #FF4081;
            cursor: pointer;
            letter-spacing: 3px;
        ">TRY AGAIN</button>
    `,this.container.appendChild(this.gameOverEl),this.finalScoreEl=this.gameOverEl.querySelector("#final-score"),this.submitContainerEl=this.gameOverEl.querySelector("#submit-container"),this.nameInputEl=this.gameOverEl.querySelector("#name-input"),this.submitBtnEl=this.gameOverEl.querySelector("#submit-btn"),this.lobbyEl=document.createElement("div"),e(this.lobbyEl,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"white",zIndex:"25",display:"none",fontFamily:'"Courier New", Courier, monospace',userSelect:"none"}),this.lobbyEl.innerHTML=`
            <h1 style="font-size: 40px; font-weight: 100; letter-spacing: 5px; margin-bottom: 10px;">LOBBY</h1>
            <div id="lobby-code" style="font-size: 48px; letter-spacing: 10px; color: #00E5FF; margin-bottom: 20px; text-shadow: 0 0 20px rgba(0,229,255,0.5);"></div>
            <div style="font-size: 10px; color: #888; letter-spacing: 2px; margin-bottom: 20px;">SHARE THIS CODE WITH FRIENDS</div>
            <div id="lobby-player-list" style="margin-bottom: 30px;"></div>
            <button id="lobby-start-btn" style="
                padding: 15px 50px;
                font-size: 14px;
                background: transparent;
                color: #00E5FF;
                border: 1px solid #00E5FF;
                cursor: pointer;
                letter-spacing: 3px;
                font-family: inherit;
                display: none;
            ">START GAME</button>
            <button id="lobby-leave-btn" style="
                padding: 10px 30px;
                font-size: 12px;
                background: transparent;
                color: #FF4081;
                border: 1px solid rgba(255,64,129,0.3);
                cursor: pointer;
                letter-spacing: 2px;
                font-family: inherit;
                margin-top: 15px;
            ">LEAVE</button>
        `,this.container.appendChild(this.lobbyEl),this.lobbyCodeEl=this.lobbyEl.querySelector("#lobby-code"),this.lobbyPlayerListEl=this.lobbyEl.querySelector("#lobby-player-list"),this.lobbyStartBtnEl=this.lobbyEl.querySelector("#lobby-start-btn"),this.spectatorEl=document.createElement("div"),e(this.spectatorEl,{position:"absolute",top:"100px",left:"50%",transform:"translateX(-50%)",textAlign:"center",color:"rgba(255,255,255,0.7)",zIndex:"15",display:"none",fontFamily:'"Courier New", Courier, monospace',fontSize:"14px",letterSpacing:"3px",pointerEvents:"none"}),this.spectatorEl.innerHTML=`
            <div>SPECTATING</div>
            <div id="spectator-name" style="font-size: 20px; color: #00E5FF; margin-top: 5px;"></div>
            <div style="font-size: 10px; color: #666; margin-top: 10px;">[←/→ OR TAP SIDES] NEXT PLAYER</div>
        `,this.container.appendChild(this.spectatorEl),this.killFeedEl=document.createElement("div"),e(this.killFeedEl,{position:"absolute",top:"20px",right:"20px",textAlign:"right",color:"white",zIndex:"12",fontFamily:'"Courier New", Courier, monospace',fontSize:"12px",letterSpacing:"1px",pointerEvents:"none"}),this.container.appendChild(this.killFeedEl),this.mpResultsEl=document.createElement("div"),e(this.mpResultsEl,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"white",zIndex:"30",display:"none",fontFamily:'"Courier New", Courier, monospace',userSelect:"none"}),this.container.appendChild(this.mpResultsEl),this.countdownEl=document.createElement("div"),e(this.countdownEl,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"120px",fontFamily:'"Courier New", Courier, monospace',fontWeight:"100",color:"#00E5FF",textShadow:"0 0 40px rgba(0,229,255,0.8), 0 0 80px rgba(0,229,255,0.4)",zIndex:"35",display:"none",pointerEvents:"none",letterSpacing:"10px",transition:"transform 0.3s ease-out, opacity 0.3s ease"}),this.container.appendChild(this.countdownEl);const r=(a,o)=>{a.addEventListener("mouseenter",()=>{a.style.background=o,a.style.color="#000",a.style.boxShadow=`0 0 20px ${o}`,a.style.border=`1px solid ${o}`}),a.addEventListener("mouseleave",()=>{a.style.background="transparent",a.style.color=o,a.style.boxShadow="none"})};setTimeout(()=>{const a=document.getElementById("start-btn");a&&(r(a,"#fff"),a.addEventListener("click",()=>{this.onStartClick&&this.onStartClick()}));const o=document.getElementById("restart-btn");o&&(r(o,"#FF4081"),o.addEventListener("click",()=>{this.onRestartClick&&this.onRestartClick()}));const l=document.getElementById("submit-btn");l&&(r(l,"#FF4081"),l.addEventListener("click",()=>{const E=this.getNameInputValue();E&&this.onScoreSubmit&&this.onScoreSubmit(E)}));const c=document.getElementById("name-input");c&&c.addEventListener("input",()=>{c.value=c.value.toUpperCase()});const h=document.getElementById("multiplayer-btn"),u=document.getElementById("host-btn"),d=document.getElementById("join-btn"),f=document.getElementById("join-confirm-btn"),g=document.getElementById("room-code-input"),_=document.getElementById("mp-name-input"),m=document.getElementById("name-back-btn"),p=document.getElementById("code-back-btn");h&&(r(h,"#00E5FF"),h.addEventListener("click",()=>{const E=localStorage.getItem(Rs.NAME_STORAGE_KEY)||"";_&&(_.value=E),this.showMenuSubScreen("name"),setTimeout(()=>_?.focus(),50)})),u&&(r(u,"#00E5FF"),u.addEventListener("click",()=>{const E=_?.value?.toUpperCase().trim()||"HOST";localStorage.setItem(Rs.NAME_STORAGE_KEY,E),this.onCreateGame(E)})),d&&(r(d,"#00E5FF"),d.addEventListener("click",()=>{this.storedMpName=_?.value?.toUpperCase().trim()||"PLAYER",localStorage.setItem(Rs.NAME_STORAGE_KEY,this.storedMpName),g&&(g.value=""),this.showMenuSubScreen("code"),setTimeout(()=>g?.focus(),50)})),f&&(r(f,"#00E5FF"),f.addEventListener("click",()=>{const E=g?.value?.toUpperCase().trim()||"";E.length===4&&this.onJoinGame(E,this.storedMpName)})),g&&g.addEventListener("input",()=>{g.value=g.value.toUpperCase()}),_&&_.addEventListener("input",()=>{_.value=_.value.toUpperCase()}),m&&(r(m,"#aaa"),m.addEventListener("click",()=>{this.showMenuSubScreen("home")})),p&&(r(p,"#aaa"),p.addEventListener("click",()=>{this.showMenuSubScreen("name")}));const x=document.getElementById("lobby-start-btn");x&&(r(x,"#00E5FF"),x.addEventListener("click",()=>{this.onLobbyStart()}));const S=document.getElementById("lobby-leave-btn");S&&(r(S,"#FF4081"),S.addEventListener("click",()=>{this.onLobbyLeave()}))},0)}updateScore(e){this.score=e,this.scoreEl.innerText=`${this.score}`}updateEp(e,t){const n=Math.min(100,Math.max(0,e/t*100));this.epBarEl.style.width=`${n}%`,e>0?(this.epBarEl.style.backgroundColor=this.currentAccentColor,this.epBarEl.style.boxShadow=`0 0 15px ${this.currentAccentColor}`):(this.epBarEl.style.backgroundColor="rgba(255,255,255,0.4)",this.epBarEl.style.boxShadow="none")}updateAir(e,t,n){if(this.airContainerEl.style.display=n?"block":"none",!n)return;const s=Math.min(100,Math.max(0,e/t*100));this.airBarEl.style.width=`${s}%`,s<33?(this.airBarEl.style.backgroundColor="#FF5252",this.airBarEl.style.boxShadow="0 0 10px #FF5252"):(this.airBarEl.style.backgroundColor="white",this.airBarEl.style.boxShadow="none")}updateAccentColor(e){const t="#"+new ve(e).getHexString();this.currentAccentColor=t,this.scoreEl.style.textShadow=`0 0 20px ${t}80`}showMenuSubScreen(e){this.menuHomeEl&&(this.menuHomeEl.style.display=e==="home"?"block":"none"),this.menuNameEl&&(this.menuNameEl.style.display=e==="name"?"block":"none"),this.menuCodeEl&&(this.menuCodeEl.style.display=e==="code"?"block":"none")}showMenu(){this.menuEl.style.display="block",this.gameOverEl.style.display="none",this.epContainerEl.style.display="none",this.scoreEl.style.display="none",this.showMenuSubScreen("home")}hideMenu(){this.menuEl.style.display="none",this.epContainerEl.style.display="block",this.scoreEl.style.display="block"}showGameOver(e){this.finalScoreEl.innerText=e.toString(),this.gameOverEl.style.display="block"}hideGameOver(){this.gameOverEl.style.display="none"}updateLeaderboard(e){if(!this.leaderboardEl)return;if(e.length===0){this.leaderboardEl.innerHTML="";return}let t=`
            <div style="
                background: rgba(0,0,0,0.1);
                border: 1px solid rgba(255,255,255,0.3);
                border-radius: 12px;
                padding: 20px 30px;
            ">
                <div style="
                    font-family: 'Courier New', monospace;
                    font-size: 36px;
                    font-weight: 100;
                    color: #fff;
                    letter-spacing: 6px;
                    margin-bottom: 20px;
                    text-align: center;
                    text-shadow: 0 0 30px rgba(255,255,255,0.5);
                ">HIGH SCORES</div>
                <div style="line-height: 1.4;">
        `;e.forEach((n,s)=>{const r=s+1,a=r.toString().padStart(2," "),o=n.name.padEnd(10," "),l=n.score.toString().padStart(5," "),c=r<=3?"text-shadow: 0 0 20px rgba(255,255,255,0.4);":"";t+=`<div style="
                font-family: 'Courier New', monospace;
                font-size: 24px;
                font-weight: 100;
                color: rgba(255,255,255,0.8);
                letter-spacing: 4px;
                padding: 4px 0;
                ${c}
            ">${a}. ${o} ${l}</div>`}),t+="</div></div>",this.leaderboardEl.innerHTML=t}getNameInputValue(){return this.nameInputEl?this.nameInputEl.value.toUpperCase().trim().slice(0,10):""}resetNameInput(){this.nameInputEl&&(this.nameInputEl.value="")}hideSubmitForm(){this.submitContainerEl&&(this.submitContainerEl.style.display="none")}showSubmitForm(){this.submitContainerEl&&(this.submitContainerEl.style.display="block")}setSubmitButtonState(e){this.submitBtnEl&&(this.submitBtnEl.disabled=e,this.submitBtnEl.innerText=e?"SUBMITTING...":"SUBMIT")}showLobby(e,t){this.menuEl.style.display="none",this.lobbyEl.style.display="block",this.lobbyCodeEl.innerText=e,this.lobbyStartBtnEl.style.display=t?"inline-block":"none"}hideLobby(){this.lobbyEl.style.display="none"}updateLobbyPlayers(e){let t="";for(const n of e){const s=_i[n.colorIndex]||_i[0],r="#"+new ve(s.head).getHexString(),a=n.isHost?' <span style="color: #888;">[HOST]</span>':"";t+=`<div style="
                font-size: 18px;
                padding: 6px 0;
                letter-spacing: 3px;
            "><span style="color: ${r}; text-shadow: 0 0 10px ${r};">&#9679;</span> ${n.name}${a}</div>`}e.length<2&&(t+='<div style="font-size: 12px; color: #666; margin-top: 10px; letter-spacing: 1px;">WAITING FOR PLAYERS...</div>'),this.lobbyPlayerListEl.innerHTML=t,this.lobbyStartBtnEl.disabled=e.length<2,e.length<2?this.lobbyStartBtnEl.style.opacity="0.3":this.lobbyStartBtnEl.style.opacity="1"}startCountdown(e){const t=Math.floor(e/1e3);let n=0;const s=a=>{this.countdownEl.textContent=a,this.countdownEl.style.display="block",this.countdownEl.style.opacity="1",this.countdownEl.style.transform="translate(-50%, -50%) scale(2)",requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.countdownEl.style.transform="translate(-50%, -50%) scale(1)"})}),setTimeout(()=>{this.countdownEl.style.opacity="0.3"},700)};s(String(t-n)),n++;const r=setInterval(()=>{n<t?(s(String(t-n)),n++):(this.countdownEl.textContent="GO!",this.countdownEl.style.opacity="1",this.countdownEl.style.transform="translate(-50%, -50%) scale(2)",requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.countdownEl.style.transform="translate(-50%, -50%) scale(1)"})}),setTimeout(()=>{this.countdownEl.style.display="none",this.countdownEl.style.opacity="1"},500),clearInterval(r))},1e3)}showSpectator(e){this.spectatorEl.style.display="block";const t=this.spectatorEl.querySelector("#spectator-name");t&&(t.textContent=e)}hideSpectator(){this.spectatorEl.style.display="none"}showInvulnerabilityCountdown(e){let t=document.getElementById("invuln-countdown");if(!t){const s=document.createElement("div");s.id="invuln-countdown",s.style.position="fixed",s.style.top="20%",s.style.left="50%",s.style.transform="translateX(-50%)",s.style.fontSize="72px",s.style.color="#00E5FF",s.style.fontWeight="bold",s.style.textShadow="0 0 20px #00E5FF",s.style.zIndex="100",document.body.appendChild(s),t=s}const n=Math.ceil(e);t.textContent=n>0?n.toString():"GO!",t.style.display=e>0?"block":"none",e<=0&&setTimeout(()=>{t.style.display="none"},500)}showConnectionLost(){let e=document.getElementById("connection-lost");if(!e){const t=document.createElement("div");t.id="connection-lost",t.style.position="fixed",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%, -50%)",t.style.fontSize="32px",t.style.color="#FF4081",t.style.fontWeight="bold",t.style.textShadow="0 0 20px #FF4081",t.style.backgroundColor="rgba(0, 0, 0, 0.8)",t.style.padding="20px 40px",t.style.borderRadius="10px",t.style.zIndex="1000",t.textContent="Connection Lost - Reconnecting...",document.body.appendChild(t),e=t}e.style.display="block"}hideConnectionLost(){const e=document.getElementById("connection-lost");e&&(e.style.display="none")}showMessage(e){let t=document.getElementById("message-overlay");if(!t){const n=document.createElement("div");n.id="message-overlay",n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.transform="translate(-50%, -50%)",n.style.fontSize="24px",n.style.color="#FFFFFF",n.style.textShadow="0 0 20px #000000",n.style.backgroundColor="rgba(0, 0, 0, 0.8)",n.style.padding="20px 40px",n.style.borderRadius="10px",n.style.zIndex="1000",document.body.appendChild(n),t=n}t.textContent=e,t.style.display="block"}hideMessage(){const e=document.getElementById("message-overlay");e&&(e.style.display="none")}addKillFeedEntry(e,t="#FF4081"){const n=document.createElement("div");for(n.textContent=e,n.style.color=t,n.style.marginBottom="4px",n.style.opacity="1",n.style.transition="opacity 0.5s ease",this.killFeedEl.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),500)},5e3);this.killFeedEl.children.length>5;)this.killFeedEl.removeChild(this.killFeedEl.firstChild)}clearKillFeed(){this.killFeedEl.innerHTML=""}showMpResults(e){let t=`
            <h1 style="font-size: 40px; font-weight: 100; letter-spacing: 5px; color: #00E5FF; margin-bottom: 30px;">GAME OVER</h1>
            <div style="
                background: rgba(0,0,0,0.2);
                border: 1px solid rgba(255,255,255,0.2);
                border-radius: 8px;
                padding: 20px 40px;
                margin-bottom: 30px;
            ">
        `;for(const n of e){const s=n.placement===1?"&#9733; ":"",r=n.placement===1?"text-shadow: 0 0 20px rgba(0,229,255,0.5);":"";t+=`<div style="
                font-size: 20px;
                padding: 6px 0;
                letter-spacing: 3px;
                ${r}
            ">${s}#${n.placement} ${n.name.padEnd(10)} ${String(n.score).padStart(5)} ${n.kills>0?"("+n.kills+" KILLS)":""}</div>`}t+=`</div>
            <button id="mp-play-again-btn" style="
                padding: 15px 50px;
                font-size: 14px;
                background: transparent;
                color: #00E5FF;
                border: 1px solid #00E5FF;
                cursor: pointer;
                letter-spacing: 3px;
                font-family: inherit;
            ">PLAY AGAIN</button>
        `,this.mpResultsEl.innerHTML=t,this.mpResultsEl.style.display="block",setTimeout(()=>{const n=document.getElementById("mp-play-again-btn");n&&(n.addEventListener("mouseenter",()=>{n.style.background="#00E5FF",n.style.color="#000",n.style.boxShadow="0 0 20px #00E5FF"}),n.addEventListener("mouseleave",()=>{n.style.background="transparent",n.style.color="#00E5FF",n.style.boxShadow="none"}),n.addEventListener("click",()=>{this.onMpPlayAgain()}))},0)}hideMpResults(){this.mpResultsEl.style.display="none"}showHostDisconnected(){this.mpResultsEl.innerHTML=`
            <h1 style="font-size: 30px; font-weight: 100; letter-spacing: 5px; color: #FF4081; margin-bottom: 20px;">HOST DISCONNECTED</h1>
            <p style="font-size: 14px; color: #888; margin-bottom: 30px; letter-spacing: 2px;">The game has ended.</p>
            <button id="mp-back-menu-btn" style="
                padding: 12px 40px;
                font-size: 14px;
                background: transparent;
                color: #FF4081;
                border: 1px solid #FF4081;
                cursor: pointer;
                letter-spacing: 3px;
                font-family: inherit;
            ">RETURN TO MENU</button>
        `,this.mpResultsEl.style.display="block",setTimeout(()=>{const e=document.getElementById("mp-back-menu-btn");e&&(e.addEventListener("mouseenter",()=>{e.style.background="#FF4081",e.style.color="#000",e.style.boxShadow="0 0 20px #FF4081"}),e.addEventListener("mouseleave",()=>{e.style.background="transparent",e.style.color="#FF4081",e.style.boxShadow="none"}),e.addEventListener("click",()=>{this.onHostDisconnectReturn()}))},0)}}class i_{container;labels=new Map;constructor(){this.container=document.createElement("div"),this.container.style.position="fixed",this.container.style.top="0",this.container.style.left="0",this.container.style.width="100%",this.container.style.height="100%",this.container.style.pointerEvents="none",this.container.style.zIndex="11",document.body.appendChild(this.container)}addLabel(e,t,n){const s=document.createElement("div");s.textContent=t,s.style.position="absolute",s.style.fontSize=Xc.sizeMd,s.style.fontFamily=Xc.fontFamily,s.style.textTransform="uppercase",s.style.letterSpacing="2px",s.style.color=n,s.style.textShadow=`0 0 8px ${n}, 0 1px 3px rgba(0,0,0,0.8)`,s.style.whiteSpace="nowrap",s.style.transform="translate(-50%, -100%)",s.style.display="none",this.container.appendChild(s),this.labels.set(e,s)}removeLabel(e){const t=this.labels.get(e);t&&(t.remove(),this.labels.delete(e))}update(e){for(const[,t]of this.labels)t.style.display="none";for(const t of e){const n=this.labels.get(t.playerId);if(!n||!t.visible)continue;const s=$0-Oa,r=t.distance>Oa?Math.max(0,1-(t.distance-Oa)/s):1;r<=0||(n.style.display="block",n.style.left=`${t.screenX}px`,n.style.top=`${t.screenY}px`,n.style.opacity=r.toString())}}clear(){for(const[,e]of this.labels)e.remove();this.labels.clear()}hide(){this.container.style.display="none"}show(){this.container.style.display="block"}destroy(){this.clear(),this.container.remove()}}class s_{ctx=null;masterGain=null;musicNodes=[];isMusicPlaying=!1;nextNoteTime=0;beatIndex=0;tempo=70;lookahead=25;scheduleAheadTime=.1;progression=[[146.83,220,277.18,329.63],[164.81,246.94,293.66,369.99],[123.47,185,220,277.18],[110,164.81,220,277.18]];melodyNotes=[554.37,0,0,659.25,0,0,0,0,587.33,0,0,0,0,739.99,0,0,0,0,659.25,0,0,0,554.37,0,0,0,0,0,0,0,0,0];constructor(){try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.3,this.masterGain.connect(this.ctx.destination)}catch(e){console.error("Web Audio API not supported",e)}}async resumeContext(){this.ctx&&this.ctx.state==="suspended"&&await this.ctx.resume()}playBoostStart(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(880,e+.6),n.gain.setValueAtTime(.1,e),n.gain.linearRampToValueAtTime(.2,e+.1),n.gain.exponentialRampToValueAtTime(.01,e+.6),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.6)}playEat(){const e=this.ctx;if(!e||!this.masterGain)return;const t=e.currentTime;[1108.73,1318.51].forEach((s,r)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=s,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.15,t+.05+r*.05),o.gain.exponentialRampToValueAtTime(.001,t+1.2),a.connect(o),o.connect(this.masterGain),a.start(t),a.stop(t+1.2)})}playCrash(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(80,e),t.frequency.linearRampToValueAtTime(40,e+1),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.01,e+2),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+2)}playImpact(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.2,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let h=0;h<t;h++)s[h]=(Math.random()*2-1)*.2;const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(1e3,e),a.frequency.exponentialRampToValueAtTime(200,e+.2);const o=this.ctx.createGain();o.gain.setValueAtTime(.4,e),o.gain.exponentialRampToValueAtTime(.01,e+.2),r.connect(a),a.connect(o),o.connect(this.masterGain),r.start(e),r.stop(e+.2);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(120,e),l.frequency.exponentialRampToValueAtTime(60,e+.15),c.gain.setValueAtTime(.3,e),c.gain.exponentialRampToValueAtTime(.01,e+.15),l.connect(c),c.connect(this.masterGain),l.start(e),l.stop(e+.15)}waterNoiseNode=null;waterGainNode=null;isWaterSoundPlaying=!1;playWaterSplash(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource(),n=this.ctx.createBuffer(1,this.ctx.sampleRate*.3,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;t.buffer=n;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=800,r.Q.value=2;const a=this.ctx.createGain();a.gain.setValueAtTime(.15,e),a.gain.exponentialRampToValueAtTime(.01,e+.3),t.connect(r),r.connect(a),a.connect(this.masterGain),t.start(e),t.stop(e+.3);const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(150,e),o.frequency.exponentialRampToValueAtTime(80,e+.2),l.gain.setValueAtTime(.1,e),l.gain.exponentialRampToValueAtTime(.01,e+.2),o.connect(l),l.connect(this.masterGain),o.start(e),o.stop(e+.2)}startWaterSound(){if(!this.ctx||!this.masterGain||this.isWaterSoundPlaying)return;this.isWaterSoundPlaying=!0;const e=this.ctx.currentTime,t=this.ctx.createBuffer(1,this.ctx.sampleRate*.5,this.ctx.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=(Math.random()*2-1)*.3;this.waterNoiseNode=this.ctx.createBufferSource(),this.waterNoiseNode.buffer=t,this.waterNoiseNode.loop=!0;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=600,s.Q.value=1.5,this.waterGainNode=this.ctx.createGain(),this.waterGainNode.gain.value=.08,this.waterNoiseNode.connect(s),s.connect(this.waterGainNode),this.waterGainNode.connect(this.masterGain),this.waterNoiseNode.start(e)}stopWaterSound(){if(this.waterNoiseNode&&this.isWaterSoundPlaying){const e=this.ctx?.currentTime||0;this.waterGainNode&&this.waterGainNode.gain.exponentialRampToValueAtTime(.001,e+.2),setTimeout(()=>{try{this.waterNoiseNode?.stop(),this.waterNoiseNode?.disconnect(),this.waterGainNode?.disconnect()}catch{}this.waterNoiseNode=null,this.waterGainNode=null,this.isWaterSoundPlaying=!1},200)}}updateWaterSound(e){if(this.waterGainNode&&this.isWaterSoundPlaying){const t=this.ctx?.currentTime||0,n=.08+e/50*.05;this.waterGainNode.gain.linearRampToValueAtTime(n,t+.1)}}startMusic(){this.isMusicPlaying||(this.isMusicPlaying=!0,this.beatIndex=0,this.nextNoteTime=this.ctx?.currentTime||0,this.scheduleMusic())}stopMusic(){this.isMusicPlaying=!1,this.musicNodes.forEach(e=>{try{e.stop&&e.stop(),e.disconnect()}catch{}}),this.musicNodes=[]}scheduleMusic(){if(!this.isMusicPlaying||!this.ctx||!this.masterGain)return;const e=setInterval(()=>{if(!this.isMusicPlaying){clearInterval(e);return}for(;this.nextNoteTime<this.ctx.currentTime+this.scheduleAheadTime;)this.playMeasureBeat()},this.lookahead)}playMeasureBeat(){if(!this.ctx||!this.masterGain)return;const e=60/this.tempo,t=.25*e,n=Math.floor(this.beatIndex/16)%this.progression.length,s=this.beatIndex%16,r=this.progression[n];if(s%4===0){const o=r[Math.floor(Math.random()*4)];this.playPad(o,this.nextNoteTime,e*2)}s===0&&this.playBass(r[0]/2,this.nextNoteTime,e*4);const a=this.melodyNotes[Math.floor(this.beatIndex)%this.melodyNotes.length];a>0&&this.playSparkle(a,this.nextNoteTime),this.nextNoteTime+=t,this.beatIndex++}playPad(e,t,n){if(!this.ctx||!this.masterGain)return;const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="triangle",s.frequency.value=e,r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.08,t+n*.4),r.gain.linearRampToValueAtTime(0,t+n),s.connect(r),r.connect(this.masterGain),s.start(t),s.stop(t+n+1),this.musicNodes.push(s),this.musicNodes.push(r),setTimeout(()=>{this.cleanupNode(s),this.cleanupNode(r)},(n+1)*1e3)}playBass(e,t,n){if(!this.ctx||!this.masterGain)return;const s=this.ctx.createOscillator(),r=this.ctx.createGain(),a=this.ctx.createBiquadFilter();s.type="sawtooth",s.frequency.value=e,a.type="lowpass",a.frequency.setValueAtTime(200,t),a.frequency.linearRampToValueAtTime(100,t+n),r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.15,t+.2),r.gain.linearRampToValueAtTime(0,t+n),s.connect(a),a.connect(r),r.connect(this.masterGain),s.start(t),s.stop(t+n+1),this.musicNodes.push(s),this.musicNodes.push(r),setTimeout(()=>{this.cleanupNode(s),this.cleanupNode(r),this.cleanupNode(a)},(n+1)*1e3)}playSparkle(e,t){if(!this.ctx||!this.masterGain)return;const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.value=e,s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.05,t+.05),s.gain.exponentialRampToValueAtTime(.001,t+.4),n.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.5),this.musicNodes.push(n),this.musicNodes.push(s),setTimeout(()=>{this.cleanupNode(n),this.cleanupNode(s)},600)}cleanupNode(e){const t=this.musicNodes.indexOf(e);t>-1&&this.musicNodes.splice(t,1);try{e.disconnect()}catch{}}}function bl(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}class r_{scene;particles=[];geometry;material;mesh;maxParticles;constructor(e,t=500){this.scene=e,this.maxParticles=t,this.geometry=new Ft,this.geometry.setAttribute("position",new Kt(new Float32Array(this.maxParticles*3),3)),this.geometry.setAttribute("size",new Kt(new Float32Array(this.maxParticles),1)),this.geometry.setAttribute("color",new Kt(new Float32Array(this.maxParticles*3),3));const n=this.createParticleTexture();this.material=new _l({size:1,vertexColors:!0,map:n,transparent:!0,depthWrite:!1,blending:Lr}),this.mesh=new Hh(this.geometry,this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}createParticleTexture(){const e=document.createElement("canvas");e.width=32,e.height=32;const t=e.getContext("2d");if(!t)return null;const n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,32,32);const s=new vl(e);return s.minFilter=Ut,s}emit(e,t,n=16777215){for(let s=0;s<t&&!(this.particles.length>=this.maxParticles);s++){const r=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),o=2+Math.random()*4,l=o*Math.sin(a)*Math.cos(r),c=o*Math.sin(a)*Math.sin(r),h=o*Math.cos(a),u=1+Math.random()*.5,d=.5+Math.random()*.5;this.particles.push({position:e.clone(),velocity:new C(l,c,h),life:u,maxLife:u,size:d,initialSize:d,color:new ve(n)})}}emitBubbles(e,t){for(let n=0;n<t&&!(this.particles.length>=this.maxParticles);n++){const s=Math.random()*Math.PI*2,r=.5+Math.random()*1,a=3+Math.random()*4,o=Math.cos(s)*r,l=a,c=Math.sin(s)*r,h=2+Math.random()*1,u=.3+Math.random()*.4;this.particles.push({position:e.clone().add(new C((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2)),velocity:new C(o,l,c),life:h,maxLife:h,size:u,initialSize:u,color:new ve(8965375)})}}update(e){const t=this.geometry.attributes.position.array,n=this.geometry.attributes.color.array;let s=0;for(let r=this.particles.length-1;r>=0;r--){const a=this.particles[r];if(a.life-=e,a.life<=0){this.particles.splice(r,1);continue}a.position.addScaledVector(a.velocity,e);const o=a.color.getHex();o===8965375||(o===4886754?(a.position.y=Z.WATER_LEVEL+.1,a.velocity.y=0,a.velocity.multiplyScalar(.98)):o===5939440?(a.velocity.y+=-2*e,a.velocity.multiplyScalar(.92)):o===16777215||o===8978431?(a.velocity.multiplyScalar(.85),a.velocity.y-=3*e):(a.velocity.y<0&&(a.velocity.y+=-5*e),a.velocity.multiplyScalar(.95))),t[s*3]=a.position.x,t[s*3+1]=a.position.y,t[s*3+2]=a.position.z;const l=a.life/a.maxLife;n[s*3]=a.color.r*l,n[s*3+1]=a.color.g*l,n[s*3+2]=a.color.b*l,s++}for(let r=s;r<this.maxParticles;r++)t[r*3]=99999,t[r*3+1]=99999,t[r*3+2]=99999;this.geometry.setDrawRange(0,this.maxParticles),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0}emitRipples(e,t){for(let n=0;n<t&&!(this.particles.length>=this.maxParticles);n++){const s=n/t*Math.PI*2+Math.random()*.3,r=4+Math.random()*5,a=Math.cos(s)*r,o=0,l=Math.sin(s)*r,c=2.5+Math.random()*1.5,h=1.2+Math.random()*1.2;this.particles.push({position:new C(e.x,Z.WATER_LEVEL+.1,e.z),velocity:new C(a,o,l),life:c,maxLife:c,size:h,initialSize:h,color:new ve(4886754)})}}emitWaterTrail(e,t,n){const s=Math.floor(n*1.5)+3;for(let r=0;r<s&&!(this.particles.length>=this.maxParticles);r++){const a=Math.random()*Math.PI*2,o=.2+Math.random()*.4,l=n*.4,c=-t.x*l+Math.cos(a)*o,h=.05+Math.random()*.15,u=-t.z*l+Math.sin(a)*o,d=1.2+Math.random()*.6,f=.5+Math.random()*.4;this.particles.push({position:e.clone().add(new C((Math.random()-.5)*.8,(Math.random()-.5)*.6,(Math.random()-.5)*.8)),velocity:new C(c,h,u),life:d,maxLife:d,size:f,initialSize:f,color:new ve(5939440)})}}emitRockPieces(e,t){for(let n=0;n<t&&!(this.particles.length>=this.maxParticles);n++){const s=Math.random()*Math.PI*2,r=5+Math.random()*10,a=Math.cos(s)*r,o=5+Math.random()*8,l=Math.sin(s)*r,c=.8+Math.random()*.4,h=1+Math.random()*1;this.particles.push({position:e.clone(),velocity:new C(a,o,l),life:c,maxLife:c,size:h,initialSize:h,color:new ve(8947848)})}}emitBoostTrail(e,t,n,s){const r=6+Math.floor(Math.random()*5);for(let o=0;o<r&&!(this.particles.length>=this.maxParticles);o++){const l=Math.random()*Math.PI*2,c=.5+Math.random()*1.5,h=new C(Math.cos(l)*c,(Math.random()-.3)*1.5,Math.sin(l)*c),u=n*.6,d=-t.x*u+(Math.random()-.5)*2,f=(Math.random()-.5)*1.5,g=-t.z*u+(Math.random()-.5)*2,_=.3+Math.random()*.1,m=.4+Math.random()*.3;this.particles.push({position:e.clone().add(h),velocity:new C(d,f,g),life:_,maxLife:_,size:m,initialSize:m,color:new ve(16777215)})}const a=3+Math.floor(Math.random()*3);for(let o=0;o<a&&!(this.particles.length>=this.maxParticles);o++){const l=s*8+o/a*Math.PI*2+Math.random()*.5,c=3+Math.random()*4,h=Math.cos(l)*c,u=Math.sin(l)*c,d=h-t.x*n*.3,f=1+Math.random()*2,g=u-t.z*n*.3,_=.35+Math.random()*.1,m=.5+Math.random()*.4,p=1+Math.random()*.5,x=new C(Math.cos(l)*p-t.x*1.5,(Math.random()-.3)*1,Math.sin(l)*p-t.z*1.5);this.particles.push({position:e.clone().add(x),velocity:new C(d,f,g),life:_,maxLife:_,size:m,initialSize:m,color:new ve(8978431)})}}emitBoostBurst(e,t){for(let n=0;n<t&&!(this.particles.length>=this.maxParticles);n++){const s=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),a=8+Math.random()*12,o=a*Math.sin(r)*Math.cos(s)*.8,l=Math.abs(a*Math.cos(r))*.6+3,c=a*Math.sin(r)*Math.sin(s)*.8,h=.4+Math.random()*.2,u=.6+Math.random()*.5,d=Math.random()>.5?16777215:8978431;this.particles.push({position:e.clone().add(new C((Math.random()-.5)*2,(Math.random()-.5)*1,(Math.random()-.5)*2)),velocity:new C(o,l,c),life:h,maxLife:h,size:u,initialSize:u,color:new ve(d)})}}reset(){this.particles=[],this.geometry.attributes.position.array.fill(0),this.geometry.attributes.position.needsUpdate=!0}}function Yr(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(i);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(i,n[s])&&(t[n[s]]=i[n[s]]);return t}function a_(i,e,t,n){function s(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(h){try{c(n.next(h))}catch(u){a(u)}}function l(h){try{c(n.throw(h))}catch(u){a(u)}}function c(h){h.done?r(h.value):s(h.value).then(o,l)}c((n=n.apply(i,e||[])).next())})}const o_=i=>i?(...e)=>i(...e):(...e)=>fetch(...e);class Ml extends Error{constructor(e,t="FunctionsError",n){super(e),this.name=t,this.context=n}}class l_ extends Ml{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Kc extends Ml{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Yc extends Ml{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Ho;(function(i){i.Any="any",i.ApNortheast1="ap-northeast-1",i.ApNortheast2="ap-northeast-2",i.ApSouth1="ap-south-1",i.ApSoutheast1="ap-southeast-1",i.ApSoutheast2="ap-southeast-2",i.CaCentral1="ca-central-1",i.EuCentral1="eu-central-1",i.EuWest1="eu-west-1",i.EuWest2="eu-west-2",i.EuWest3="eu-west-3",i.SaEast1="sa-east-1",i.UsEast1="us-east-1",i.UsWest1="us-west-1",i.UsWest2="us-west-2"})(Ho||(Ho={}));class c_{constructor(e,{headers:t={},customFetch:n,region:s=Ho.Any}={}){this.url=e,this.headers=t,this.region=s,this.fetch=o_(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return a_(this,arguments,void 0,function*(t,n={}){var s;let r,a;try{const{headers:o,method:l,body:c,signal:h,timeout:u}=n;let d={},{region:f}=n;f||(f=this.region);const g=new URL(`${this.url}/${t}`);f&&f!=="any"&&(d["x-region"]=f,g.searchParams.set("forceFunctionRegion",f));let _;c&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)?typeof Blob<"u"&&c instanceof Blob||c instanceof ArrayBuffer?(d["Content-Type"]="application/octet-stream",_=c):typeof c=="string"?(d["Content-Type"]="text/plain",_=c):typeof FormData<"u"&&c instanceof FormData?_=c:(d["Content-Type"]="application/json",_=JSON.stringify(c)):c&&typeof c!="string"&&!(typeof Blob<"u"&&c instanceof Blob)&&!(c instanceof ArrayBuffer)&&!(typeof FormData<"u"&&c instanceof FormData)?_=JSON.stringify(c):_=c;let m=h;u&&(a=new AbortController,r=setTimeout(()=>a.abort(),u),h?(m=a.signal,h.addEventListener("abort",()=>a.abort())):m=a.signal);const p=yield this.fetch(g.toString(),{method:l||"POST",headers:Object.assign(Object.assign(Object.assign({},d),this.headers),o),body:_,signal:m}).catch(w=>{throw new l_(w)}),x=p.headers.get("x-relay-error");if(x&&x==="true")throw new Kc(p);if(!p.ok)throw new Yc(p);let S=((s=p.headers.get("Content-Type"))!==null&&s!==void 0?s:"text/plain").split(";")[0].trim(),E;return S==="application/json"?E=yield p.json():S==="application/octet-stream"||S==="application/pdf"?E=yield p.blob():S==="text/event-stream"?E=p:S==="multipart/form-data"?E=yield p.formData():E=yield p.text(),{data:E,error:null,response:p}}catch(o){return{data:null,error:o,response:o instanceof Yc||o instanceof Kc?o.context:void 0}}finally{r&&clearTimeout(r)}})}}var h_=class extends Error{constructor(i){super(i.message),this.name="PostgrestError",this.details=i.details,this.hint=i.hint,this.code=i.code}},u_=class{constructor(i){var e,t;this.shouldThrowOnError=!1,this.method=i.method,this.url=i.url,this.headers=new Headers(i.headers),this.schema=i.schema,this.body=i.body,this.shouldThrowOnError=(e=i.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=i.signal,this.isMaybeSingle=(t=i.isMaybeSingle)!==null&&t!==void 0?t:!1,i.fetch?this.fetch=i.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(i,e){return this.headers=new Headers(this.headers),this.headers.set(i,e),this}then(i,e){var t=this;this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const n=this.fetch;let s=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async r=>{let a=null,o=null,l=null,c=r.status,h=r.statusText;if(r.ok){var u,d;if(t.method!=="HEAD"){var f;const p=await r.text();p===""||(t.headers.get("Accept")==="text/csv"||t.headers.get("Accept")&&(!((f=t.headers.get("Accept"))===null||f===void 0)&&f.includes("application/vnd.pgrst.plan+text"))?o=p:o=JSON.parse(p))}const _=(u=t.headers.get("Prefer"))===null||u===void 0?void 0:u.match(/count=(exact|planned|estimated)/),m=(d=r.headers.get("content-range"))===null||d===void 0?void 0:d.split("/");_&&m&&m.length>1&&(l=parseInt(m[1])),t.isMaybeSingle&&t.method==="GET"&&Array.isArray(o)&&(o.length>1?(a={code:"PGRST116",details:`Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},o=null,l=null,c=406,h="Not Acceptable"):o.length===1?o=o[0]:o=null)}else{var g;const _=await r.text();try{a=JSON.parse(_),Array.isArray(a)&&r.status===404&&(o=[],a=null,c=200,h="OK")}catch{r.status===404&&_===""?(c=204,h="No Content"):a={message:_}}if(a&&t.isMaybeSingle&&(!(a==null||(g=a.details)===null||g===void 0)&&g.includes("0 rows"))&&(a=null,c=200,h="OK"),a&&t.shouldThrowOnError)throw new h_(a)}return{error:a,data:o,count:l,status:c,statusText:h}});return this.shouldThrowOnError||(s=s.catch(r=>{var a;let o="";const l=r?.cause;if(l){var c,h,u,d;const g=(c=l?.message)!==null&&c!==void 0?c:"",_=(h=l?.code)!==null&&h!==void 0?h:"";o=`${(u=r?.name)!==null&&u!==void 0?u:"FetchError"}: ${r?.message}`,o+=`

Caused by: ${(d=l?.name)!==null&&d!==void 0?d:"Error"}: ${g}`,_&&(o+=` (${_})`),l?.stack&&(o+=`
${l.stack}`)}else{var f;o=(f=r?.stack)!==null&&f!==void 0?f:""}return{error:{message:`${(a=r?.name)!==null&&a!==void 0?a:"FetchError"}: ${r?.message}`,details:o,hint:"",code:""},data:null,count:null,status:0,statusText:""}})),s.then(i,e)}returns(){return this}overrideTypes(){return this}},d_=class extends u_{select(i){let e=!1;const t=(i??"*").split("").map(n=>/\s/.test(n)&&!e?"":(n==='"'&&(e=!e),n)).join("");return this.url.searchParams.set("select",t),this.headers.append("Prefer","return=representation"),this}order(i,{ascending:e=!0,nullsFirst:t,foreignTable:n,referencedTable:s=n}={}){const r=s?`${s}.order`:"order",a=this.url.searchParams.get(r);return this.url.searchParams.set(r,`${a?`${a},`:""}${i}.${e?"asc":"desc"}${t===void 0?"":t?".nullsfirst":".nullslast"}`),this}limit(i,{foreignTable:e,referencedTable:t=e}={}){const n=typeof t>"u"?"limit":`${t}.limit`;return this.url.searchParams.set(n,`${i}`),this}range(i,e,{foreignTable:t,referencedTable:n=t}={}){const s=typeof n>"u"?"offset":`${n}.offset`,r=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(s,`${i}`),this.url.searchParams.set(r,`${e-i+1}`),this}abortSignal(i){return this.signal=i,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:i=!1,verbose:e=!1,settings:t=!1,buffers:n=!1,wal:s=!1,format:r="text"}={}){var a;const o=[i?"analyze":null,e?"verbose":null,t?"settings":null,n?"buffers":null,s?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${r}; for="${l}"; options=${o};`),r==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(i){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${i}`),this}};const Jc=new RegExp("[,()]");var Gi=class extends d_{eq(i,e){return this.url.searchParams.append(i,`eq.${e}`),this}neq(i,e){return this.url.searchParams.append(i,`neq.${e}`),this}gt(i,e){return this.url.searchParams.append(i,`gt.${e}`),this}gte(i,e){return this.url.searchParams.append(i,`gte.${e}`),this}lt(i,e){return this.url.searchParams.append(i,`lt.${e}`),this}lte(i,e){return this.url.searchParams.append(i,`lte.${e}`),this}like(i,e){return this.url.searchParams.append(i,`like.${e}`),this}likeAllOf(i,e){return this.url.searchParams.append(i,`like(all).{${e.join(",")}}`),this}likeAnyOf(i,e){return this.url.searchParams.append(i,`like(any).{${e.join(",")}}`),this}ilike(i,e){return this.url.searchParams.append(i,`ilike.${e}`),this}ilikeAllOf(i,e){return this.url.searchParams.append(i,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(i,e){return this.url.searchParams.append(i,`ilike(any).{${e.join(",")}}`),this}regexMatch(i,e){return this.url.searchParams.append(i,`match.${e}`),this}regexIMatch(i,e){return this.url.searchParams.append(i,`imatch.${e}`),this}is(i,e){return this.url.searchParams.append(i,`is.${e}`),this}isDistinct(i,e){return this.url.searchParams.append(i,`isdistinct.${e}`),this}in(i,e){const t=Array.from(new Set(e)).map(n=>typeof n=="string"&&Jc.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(i,`in.(${t})`),this}notIn(i,e){const t=Array.from(new Set(e)).map(n=>typeof n=="string"&&Jc.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(i,`not.in.(${t})`),this}contains(i,e){return typeof e=="string"?this.url.searchParams.append(i,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(i,`cs.{${e.join(",")}}`):this.url.searchParams.append(i,`cs.${JSON.stringify(e)}`),this}containedBy(i,e){return typeof e=="string"?this.url.searchParams.append(i,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(i,`cd.{${e.join(",")}}`):this.url.searchParams.append(i,`cd.${JSON.stringify(e)}`),this}rangeGt(i,e){return this.url.searchParams.append(i,`sr.${e}`),this}rangeGte(i,e){return this.url.searchParams.append(i,`nxl.${e}`),this}rangeLt(i,e){return this.url.searchParams.append(i,`sl.${e}`),this}rangeLte(i,e){return this.url.searchParams.append(i,`nxr.${e}`),this}rangeAdjacent(i,e){return this.url.searchParams.append(i,`adj.${e}`),this}overlaps(i,e){return typeof e=="string"?this.url.searchParams.append(i,`ov.${e}`):this.url.searchParams.append(i,`ov.{${e.join(",")}}`),this}textSearch(i,e,{config:t,type:n}={}){let s="";n==="plain"?s="pl":n==="phrase"?s="ph":n==="websearch"&&(s="w");const r=t===void 0?"":`(${t})`;return this.url.searchParams.append(i,`${s}fts${r}.${e}`),this}match(i){return Object.entries(i).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(i,e,t){return this.url.searchParams.append(i,`not.${e}.${t}`),this}or(i,{foreignTable:e,referencedTable:t=e}={}){const n=t?`${t}.or`:"or";return this.url.searchParams.append(n,`(${i})`),this}filter(i,e,t){return this.url.searchParams.append(i,`${e}.${t}`),this}},f_=class{constructor(i,{headers:e={},schema:t,fetch:n}){this.url=i,this.headers=new Headers(e),this.schema=t,this.fetch=n}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(i,e){const{head:t=!1,count:n}=e??{},s=t?"HEAD":"GET";let r=!1;const a=(i??"*").split("").map(c=>/\s/.test(c)&&!r?"":(c==='"'&&(r=!r),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),n&&l.append("Prefer",`count=${n}`),new Gi({method:s,url:o,headers:l,schema:this.schema,fetch:this.fetch})}insert(i,{count:e,defaultToNull:t=!0}={}){var n;const s="POST",{url:r,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),t||a.append("Prefer","missing=default"),Array.isArray(i)){const o=i.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);r.searchParams.set("columns",l.join(","))}}return new Gi({method:s,url:r,headers:a,schema:this.schema,body:i,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch})}upsert(i,{onConflict:e,ignoreDuplicates:t=!1,count:n,defaultToNull:s=!0}={}){var r;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${t?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),n&&l.append("Prefer",`count=${n}`),s||l.append("Prefer","missing=default"),Array.isArray(i)){const c=i.reduce((h,u)=>h.concat(Object.keys(u)),[]);if(c.length>0){const h=[...new Set(c)].map(u=>`"${u}"`);o.searchParams.set("columns",h.join(","))}}return new Gi({method:a,url:o,headers:l,schema:this.schema,body:i,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch})}update(i,{count:e}={}){var t;const n="PATCH",{url:s,headers:r}=this.cloneRequestState();return e&&r.append("Prefer",`count=${e}`),new Gi({method:n,url:s,headers:r,schema:this.schema,body:i,fetch:(t=this.fetch)!==null&&t!==void 0?t:fetch})}delete({count:i}={}){var e;const t="DELETE",{url:n,headers:s}=this.cloneRequestState();return i&&s.append("Prefer",`count=${i}`),new Gi({method:t,url:n,headers:s,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch})}},p_=class Zh{constructor(e,{headers:t={},schema:n,fetch:s}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.fetch=s}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new f_(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(e){return new Zh(this.url,{headers:this.headers,schema:e,fetch:this.fetch})}rpc(e,t={},{head:n=!1,get:s=!1,count:r}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const h=f=>f!==null&&typeof f=="object"&&(!Array.isArray(f)||f.some(h)),u=n&&Object.values(t).some(h);u?(o="POST",c=t):n||s?(o=n?"HEAD":"GET",Object.entries(t).filter(([f,g])=>g!==void 0).map(([f,g])=>[f,Array.isArray(g)?`{${g.join(",")}}`:`${g}`]).forEach(([f,g])=>{l.searchParams.append(f,g)})):(o="POST",c=t);const d=new Headers(this.headers);return u?d.set("Prefer",r?`count=${r},return=minimal`:"return=minimal"):r&&d.set("Prefer",`count=${r}`),new Gi({method:o,url:l,headers:d,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch})}};class m_{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const t=globalThis.process;if(t){const n=t.versions;if(n&&n.node){const s=n.node,r=parseInt(s.replace(/^v/,"").split(".")[0]);return r>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${r} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${r} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.constructor)return e.constructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static createWebSocket(e,t){const n=this.getWebSocketConstructor();return new n(e,t)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const g_="2.93.3",__=`realtime-js/${g_}`,v_="1.0.0",Qh="2.0.0",Zc=Qh,Vo=1e4,y_=1e3,x_=100;var qn;(function(i){i[i.connecting=0]="connecting",i[i.open=1]="open",i[i.closing=2]="closing",i[i.closed=3]="closed"})(qn||(qn={}));var At;(function(i){i.closed="closed",i.errored="errored",i.joined="joined",i.joining="joining",i.leaving="leaving"})(At||(At={}));var pn;(function(i){i.close="phx_close",i.error="phx_error",i.join="phx_join",i.reply="phx_reply",i.leave="phx_leave",i.access_token="access_token"})(pn||(pn={}));var Wo;(function(i){i.websocket="websocket"})(Wo||(Wo={}));var hi;(function(i){i.Connecting="connecting",i.Open="open",i.Closing="closing",i.Closed="closed"})(hi||(hi={}));class S_{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){var t;return this._isArrayBuffer((t=e.payload)===null||t===void 0?void 0:t.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var t,n;const s=(n=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&n!==void 0?n:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,s)}_encodeJsonUserBroadcastPush(e){var t,n;const s=(n=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&n!==void 0?n:{},a=new TextEncoder().encode(JSON.stringify(s)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,t,n){var s,r;const a=e.topic,o=(s=e.ref)!==null&&s!==void 0?s:"",l=(r=e.join_ref)!==null&&r!==void 0?r:"",c=e.payload.event,h=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},u=Object.keys(h).length===0?"":JSON.stringify(h);if(l.length>255)throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`ref length ${o.length} exceeds maximum of 255`);if(a.length>255)throw new Error(`topic length ${a.length} exceeds maximum of 255`);if(c.length>255)throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);if(u.length>255)throw new Error(`metadata length ${u.length} exceeds maximum of 255`);const d=this.USER_BROADCAST_PUSH_META_LENGTH+l.length+o.length+a.length+c.length+u.length,f=new ArrayBuffer(this.HEADER_LENGTH+d);let g=new DataView(f),_=0;g.setUint8(_++,this.KINDS.userBroadcastPush),g.setUint8(_++,l.length),g.setUint8(_++,o.length),g.setUint8(_++,a.length),g.setUint8(_++,c.length),g.setUint8(_++,u.length),g.setUint8(_++,t),Array.from(l,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(o,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(a,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(c,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(u,p=>g.setUint8(_++,p.charCodeAt(0)));var m=new Uint8Array(f.byteLength+n.byteLength);return m.set(new Uint8Array(f),0),m.set(new Uint8Array(n),f.byteLength),m.buffer}decode(e,t){if(this._isArrayBuffer(e)){let n=this._binaryDecode(e);return t(n)}if(typeof e=="string"){const n=JSON.parse(e),[s,r,a,o,l]=n;return t({join_ref:s,ref:r,topic:a,event:o,payload:l})}return t({})}_binaryDecode(e){const t=new DataView(e),n=t.getUint8(0),s=new TextDecoder;if(n===this.KINDS.userBroadcast)return this._decodeUserBroadcast(e,t,s)}_decodeUserBroadcast(e,t,n){const s=t.getUint8(1),r=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4);let l=this.HEADER_LENGTH+4;const c=n.decode(e.slice(l,l+s));l=l+s;const h=n.decode(e.slice(l,l+r));l=l+r;const u=n.decode(e.slice(l,l+a));l=l+a;const d=e.slice(l,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,g={type:this.BROADCAST_EVENT,event:h,payload:f};return a>0&&(g.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:g}}_isArrayBuffer(e){var t;return e instanceof ArrayBuffer||((t=e?.constructor)===null||t===void 0?void 0:t.name)==="ArrayBuffer"}_pick(e,t){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([n])=>t.includes(n)))}}class eu{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var lt;(function(i){i.abstime="abstime",i.bool="bool",i.date="date",i.daterange="daterange",i.float4="float4",i.float8="float8",i.int2="int2",i.int4="int4",i.int4range="int4range",i.int8="int8",i.int8range="int8range",i.json="json",i.jsonb="jsonb",i.money="money",i.numeric="numeric",i.oid="oid",i.reltime="reltime",i.text="text",i.time="time",i.timestamp="timestamp",i.timestamptz="timestamptz",i.timetz="timetz",i.tsrange="tsrange",i.tstzrange="tstzrange"})(lt||(lt={}));const Qc=(i,e,t={})=>{var n;const s=(n=t.skipTypes)!==null&&n!==void 0?n:[];return e?Object.keys(e).reduce((r,a)=>(r[a]=E_(a,i,e,s),r),{}):{}},E_=(i,e,t,n)=>{const s=e.find(o=>o.name===i),r=s?.type,a=t[i];return r&&!n.includes(r)?tu(r,a):$o(a)},tu=(i,e)=>{if(i.charAt(0)==="_"){const t=i.slice(1,i.length);return T_(e,t)}switch(i){case lt.bool:return b_(e);case lt.float4:case lt.float8:case lt.int2:case lt.int4:case lt.int8:case lt.numeric:case lt.oid:return M_(e);case lt.json:case lt.jsonb:return w_(e);case lt.timestamp:return A_(e);case lt.abstime:case lt.date:case lt.daterange:case lt.int4range:case lt.int8range:case lt.money:case lt.reltime:case lt.text:case lt.time:case lt.timestamptz:case lt.timetz:case lt.tsrange:case lt.tstzrange:return $o(e);default:return $o(e)}},$o=i=>i,b_=i=>{switch(i){case"t":return!0;case"f":return!1;default:return i}},M_=i=>{if(typeof i=="string"){const e=parseFloat(i);if(!Number.isNaN(e))return e}return i},w_=i=>{if(typeof i=="string")try{return JSON.parse(i)}catch{return i}return i},T_=(i,e)=>{if(typeof i!="string")return i;const t=i.length-1,n=i[t];if(i[0]==="{"&&n==="}"){let r;const a=i.slice(1,t);try{r=JSON.parse("["+a+"]")}catch{r=a?a.split(","):[]}return r.map(o=>tu(e,o))}return i},A_=i=>typeof i=="string"?i.replace(" ","T"):i,nu=i=>{const e=new URL(i);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};class ka{constructor(e,t,n={},s=Vo){this.channel=e,this.event=t,this.payload=n,this.timeout=s,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var n;return this._hasReceived(e)&&t((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=t=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=t,this._matchReceive(t)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(n=>n.status===e).forEach(n=>n.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var eh;(function(i){i.SYNC="sync",i.JOIN="join",i.LEAVE="leave"})(eh||(eh={}));class Cs{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=t?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},s=>{const{onJoin:r,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Cs.syncState(this.state,s,r,a),this.pendingDiffs.forEach(l=>{this.state=Cs.syncDiff(this.state,l,r,a)}),this.pendingDiffs=[],o()}),this.channel._on(n.diff,{},s=>{const{onJoin:r,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(s):(this.state=Cs.syncDiff(this.state,s,r,a),o())}),this.onJoin((s,r,a)=>{this.channel._trigger("presence",{event:"join",key:s,currentPresences:r,newPresences:a})}),this.onLeave((s,r,a)=>{this.channel._trigger("presence",{event:"leave",key:s,currentPresences:r,leftPresences:a})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,n,s){const r=this.cloneDeep(e),a=this.transformState(t),o={},l={};return this.map(r,(c,h)=>{a[c]||(l[c]=h)}),this.map(a,(c,h)=>{const u=r[c];if(u){const d=h.map(m=>m.presence_ref),f=u.map(m=>m.presence_ref),g=h.filter(m=>f.indexOf(m.presence_ref)<0),_=u.filter(m=>d.indexOf(m.presence_ref)<0);g.length>0&&(o[c]=g),_.length>0&&(l[c]=_)}else o[c]=h}),this.syncDiff(r,{joins:o,leaves:l},n,s)}static syncDiff(e,t,n,s){const{joins:r,leaves:a}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return n||(n=()=>{}),s||(s=()=>{}),this.map(r,(o,l)=>{var c;const h=(c=e[o])!==null&&c!==void 0?c:[];if(e[o]=this.cloneDeep(l),h.length>0){const u=e[o].map(f=>f.presence_ref),d=h.filter(f=>u.indexOf(f.presence_ref)<0);e[o].unshift(...d)}n(o,h,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;const h=l.map(u=>u.presence_ref);c=c.filter(u=>h.indexOf(u.presence_ref)<0),e[o]=c,s(o,c,l),c.length===0&&delete e[o]}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{const s=e[n];return"metas"in s?t[n]=s.metas.map(r=>(r.presence_ref=r.phx_ref,delete r.phx_ref,delete r.phx_ref_prev,r)):t[n]=s,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var th;(function(i){i.ALL="*",i.INSERT="INSERT",i.UPDATE="UPDATE",i.DELETE="DELETE"})(th||(th={}));var Ps;(function(i){i.BROADCAST="broadcast",i.PRESENCE="presence",i.POSTGRES_CHANGES="postgres_changes",i.SYSTEM="system"})(Ps||(Ps={}));var Nn;(function(i){i.SUBSCRIBED="SUBSCRIBED",i.TIMED_OUT="TIMED_OUT",i.CLOSED="CLOSED",i.CHANNEL_ERROR="CHANNEL_ERROR"})(Nn||(Nn={}));class $i{constructor(e,t={config:{}},n){var s,r;if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.state=At.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new ka(this,pn.join,this.params,this.timeout),this.rejoinTimer=new eu(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=At.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(a=>a.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=At.closed,this.socket._remove(this)}),this._onError(a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=At.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=At.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=At.errored,this.rejoinTimer.scheduleTimeout())}),this._on(pn.reply,{},(a,o)=>{this._trigger(this._replyEventName(o),a)}),this.presence=new Cs(this),this.broadcastEndpointURL=nu(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(!((r=(s=this.params.config)===null||s===void 0?void 0:s.broadcast)===null||r===void 0)&&r.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(e,t=this.timeout){var n,s,r;if(this.socket.isConnected()||this.socket.connect(),this.state==At.closed){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(s=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(f=>f.filter))!==null&&s!==void 0?s:[],h=!!this.bindings[Ps.PRESENCE]&&this.bindings[Ps.PRESENCE].length>0||((r=this.params.config.presence)===null||r===void 0?void 0:r.enabled)===!0,u={},d={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:h}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(f=>e?.(Nn.CHANNEL_ERROR,f)),this._onClose(()=>e?.(Nn.CLOSED)),this.updateJoinPayload(Object.assign({config:d},u)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",async({postgres_changes:f})=>{var g;if(this.socket._isManualToken()||this.socket.setAuth(),f===void 0){e?.(Nn.SUBSCRIBED);return}else{const _=this.bindings.postgres_changes,m=(g=_?.length)!==null&&g!==void 0?g:0,p=[];for(let x=0;x<m;x++){const S=_[x],{filter:{event:E,schema:w,table:T,filter:A}}=S,I=f&&f[x];if(I&&I.event===E&&$i.isFilterValueEqual(I.schema,w)&&$i.isFilterValueEqual(I.table,T)&&$i.isFilterValueEqual(I.filter,A))p.push(Object.assign(Object.assign({},S),{id:I.id}));else{this.unsubscribe(),this.state=At.errored,e?.(Nn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=p,e&&e(Nn.SUBSCRIBED);return}}).receive("error",f=>{this.state=At.errored,e?.(Nn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(f).join(", ")||"error")))}).receive("timeout",()=>{e?.(Nn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,n){return this.state===At.joined&&e===Ps.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(async()=>await this.subscribe())),this._on(e,t,n)}async httpSend(e,t,n={}){var s;if(t==null)return Promise.reject("Payload is required for httpSend()");const r={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(r.Authorization=`Bearer ${this.socket.accessTokenValue}`);const a={method:"POST",headers:r,body:JSON.stringify({messages:[{topic:this.subTopic,event:e,payload:t,private:this.private}]})},o=await this._fetchWithTimeout(this.broadcastEndpointURL,a,(s=n.timeout)!==null&&s!==void 0?s:this.timeout);if(o.status===202)return{success:!0};let l=o.statusText;try{const c=await o.json();l=c.error||c.message||l}catch{}return Promise.reject(new Error(l))}async send(e,t={}){var n,s;if(!this._canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:r,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:r,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=t.timeout)!==null&&n!==void 0?n:this.timeout);return await((s=c.body)===null||s===void 0?void 0:s.cancel()),c.ok?"ok":"error"}catch(c){return c.name==="AbortError"?"timed out":"error"}}else return new Promise(r=>{var a,o,l;const c=this._push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&r("ok"),c.receive("ok",()=>r("ok")),c.receive("error",()=>r("error")),c.receive("timeout",()=>r("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=At.leaving;const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(pn.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(s=>{n=new ka(this,pn.leave,{},e),n.receive("ok",()=>{t(),s("ok")}).receive("timeout",()=>{t(),s("timed out")}).receive("error",()=>{s("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n?.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=At.closed,this.bindings={}}async _fetchWithTimeout(e,t,n){const s=new AbortController,r=setTimeout(()=>s.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:s.signal}));return clearTimeout(r),a}_push(e,t,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let s=new ka(this,e,t,n);return this._canPush()?s.send():this._addToPushBuffer(s),s}_addToPushBuffer(e){if(e.startTimeout(),this.pushBuffer.push(e),this.pushBuffer.length>x_){const t=this.pushBuffer.shift();t&&(t.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${t.event}`,t.payload))}}_onMessage(e,t,n){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,n){var s,r;const a=e.toLocaleLowerCase(),{close:o,error:l,leave:c,join:h}=pn;if(n&&[o,l,c,h].indexOf(a)>=0&&n!==this._joinRef())return;let d=this._onMessage(a,t,n);if(t&&!d)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(a)?(s=this.bindings.postgres_changes)===null||s===void 0||s.filter(f=>{var g,_,m;return((g=f.filter)===null||g===void 0?void 0:g.event)==="*"||((m=(_=f.filter)===null||_===void 0?void 0:_.event)===null||m===void 0?void 0:m.toLocaleLowerCase())===a}).map(f=>f.callback(d,n)):(r=this.bindings[a])===null||r===void 0||r.filter(f=>{var g,_,m,p,x,S;if(["broadcast","presence","postgres_changes"].includes(a))if("id"in f){const E=f.id,w=(g=f.filter)===null||g===void 0?void 0:g.event;return E&&((_=t.ids)===null||_===void 0?void 0:_.includes(E))&&(w==="*"||w?.toLocaleLowerCase()===((m=t.data)===null||m===void 0?void 0:m.type.toLocaleLowerCase()))}else{const E=(x=(p=f?.filter)===null||p===void 0?void 0:p.event)===null||x===void 0?void 0:x.toLocaleLowerCase();return E==="*"||E===((S=t?.event)===null||S===void 0?void 0:S.toLocaleLowerCase())}else return f.type.toLocaleLowerCase()===a}).map(f=>{if(typeof d=="object"&&"ids"in d){const g=d.data,{schema:_,table:m,commit_timestamp:p,type:x,errors:S}=g;d=Object.assign(Object.assign({},{schema:_,table:m,commit_timestamp:p,eventType:x,new:{},old:{},errors:S}),this._getPayloadRecords(g))}f.callback(d,n)})}_isClosed(){return this.state===At.closed}_isJoined(){return this.state===At.joined}_isJoining(){return this.state===At.joining}_isLeaving(){return this.state===At.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,n){const s=e.toLocaleLowerCase(),r={type:s,filter:t,callback:n};return this.bindings[s]?this.bindings[s].push(r):this.bindings[s]=[r],this}_off(e,t){const n=e.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(s=>{var r;return!(((r=s.type)===null||r===void 0?void 0:r.toLocaleLowerCase())===n&&$i.isEqual(s.filter,t))})),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(pn.close,{},e)}_onError(e){this._on(pn.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=At.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=Qc(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=Qc(e.columns,e.old_record)),t}}const Ba=()=>{},vr={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},R_=[1e3,2e3,5e3,1e4],C_=1e4,P_=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class I_{constructor(e,t){var n;if(this.accessTokenValue=null,this.apiKey=null,this._manuallySetToken=!1,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=Vo,this.transport=null,this.heartbeatIntervalMs=vr.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=Ba,this.ref=0,this.reconnectTimer=null,this.vsn=Zc,this.logger=Ba,this.conn=null,this.sendBuffer=[],this.serializer=new S_,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._heartbeatSentAt=null,this._resolveFetch=s=>s?(...r)=>s(...r):(...r)=>fetch(...r),!(!((n=t?.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey,this.endPoint=`${e}/${Wo.websocket}`,this.httpEndpoint=nu(e),this._initializeOptions(t),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=m_.createWebSocket(this.endpointURL())}catch(e){this._setConnectionState("disconnected");const t=e.message;throw t.includes("Node.js")?new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${t}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:this.vsn}))}disconnect(e,t){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},typeof this.conn.close=="function"&&(e?this.conn.close(e,t??""):this.conn.close()),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),t}async removeAllChannels(){const e=await Promise.all(this.channels.map(t=>t.unsubscribe()));return this.channels=[],this.disconnect(),e}log(e,t,n){this.logger(e,t,n)}connectionState(){switch(this.conn&&this.conn.readyState){case qn.connecting:return hi.Connecting;case qn.open:return hi.Open;case qn.closing:return hi.Closing;default:return hi.Closed}}isConnected(){return this.connectionState()===hi.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(e,t={config:{}}){const n=`realtime:${e}`,s=this.getChannels().find(r=>r.topic===n);if(s)return s;{const r=new $i(`realtime:${e}`,t,this);return this.channels.push(r),r}}push(e){const{topic:t,event:n,payload:s,ref:r}=e,a=()=>{this.encode(e,o=>{var l;(l=this.conn)===null||l===void 0||l.send(o)})};this.log("push",`${t} ${n} (${r})`,s),this.isConnected()?a():this.sendBuffer.push(a)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){var e;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this._heartbeatSentAt=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this._wasManualDisconnect=!1,(e=this.conn)===null||e===void 0||e.close(y_,"heartbeat timeout"),setTimeout(()=>{var t;this.isConnected()||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout()},vr.HEARTBEAT_TIMEOUT_FALLBACK);return}this._heartbeatSentAt=Date.now(),this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this._setAuthSafely("heartbeat")}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find(n=>n.topic===e&&(n._isJoined()||n._isJoining()));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic)}_onConnMessage(e){this.decode(e.data,t=>{if(t.topic==="phoenix"&&t.event==="phx_reply"&&t.ref&&t.ref===this.pendingHeartbeatRef){const c=this._heartbeatSentAt?Date.now()-this._heartbeatSentAt:void 0;try{this.heartbeatCallback(t.payload.status==="ok"?"ok":"error",c)}catch(h){this.log("error","error in heartbeat callback",h)}this._heartbeatSentAt=null,this.pendingHeartbeatRef=null}const{topic:n,event:s,payload:r,ref:a}=t,o=a?`(${a})`:"",l=r.status||"";this.log("receive",`${l} ${n} ${s} ${o}`.trim(),r),this.channels.filter(c=>c._isMember(n)).forEach(c=>c._trigger(s,r,a)),this._triggerStateCallbacks("message",t)})}_clearTimer(e){var t;e==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):e==="reconnect"&&((t=this.reconnectTimer)===null||t===void 0||t.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e),this.conn.readyState===qn.open&&this._onConnOpen())}_teardownConnection(){if(this.conn){if(this.conn.readyState===qn.open||this.conn.readyState===qn.connecting)try{this.conn.close()}catch(e){this.log("error","Error closing connection",e)}this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null}this._clearAllTimers(),this._terminateWorker(),this.channels.forEach(e=>e.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).then(()=>{this.flushSendBuffer()}).catch(t=>{this.log("error","error waiting for auth on connect",t),this.flushSendBuffer()}),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this._terminateWorker()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_onConnClose(e){var t;this._setConnectionState("disconnected"),this.log("transport","close",e),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout(),this._triggerStateCallbacks("close",e)}_onConnError(e){this._setConnectionState("disconnected"),this.log("transport",`${e}`),this._triggerChanError(),this._triggerStateCallbacks("error",e);try{this.heartbeatCallback("error")}catch(t){this.log("error","error in heartbeat callback",t)}}_triggerChanError(){this.channels.forEach(e=>e._trigger(pn.error))}_appendParams(e,t){if(Object.keys(t).length===0)return e;const n=e.match(/\?/)?"&":"?",s=new URLSearchParams(t);return`${e}${n}${s}`}_workerObjectUrl(e){let t;if(e)t=e;else{const n=new Blob([P_],{type:"application/javascript"});t=URL.createObjectURL(n)}return t}_setConnectionState(e,t=!1){this._connectionState=e,e==="connecting"?this._wasManualDisconnect=!1:e==="disconnecting"&&(this._wasManualDisconnect=t)}async _performAuth(e=null){let t,n=!1;if(e)t=e,n=!0;else if(this.accessToken)try{t=await this.accessToken()}catch(s){this.log("error","Error fetching access token from callback",s),t=this.accessTokenValue}else t=this.accessTokenValue;n?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(s=>{const r={access_token:t,version:__};t&&s.updateJoinPayload(r),s.joinedOnce&&s._isJoined()&&s._push(pn.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(t=>{this.log("error",`Error setting auth in ${e}`,t)})}_triggerStateCallbacks(e,t){try{this.stateChangeCallbacks[e].forEach(n=>{try{n(t)}catch(s){this.log("error",`error in ${e} callback`,s)}})}catch(n){this.log("error",`error triggering ${e} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new eu(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},vr.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(e){var t,n,s,r,a,o,l,c,h,u,d,f;switch(this.transport=(t=e?.transport)!==null&&t!==void 0?t:null,this.timeout=(n=e?.timeout)!==null&&n!==void 0?n:Vo,this.heartbeatIntervalMs=(s=e?.heartbeatIntervalMs)!==null&&s!==void 0?s:vr.HEARTBEAT_INTERVAL,this.worker=(r=e?.worker)!==null&&r!==void 0?r:!1,this.accessToken=(a=e?.accessToken)!==null&&a!==void 0?a:null,this.heartbeatCallback=(o=e?.heartbeatCallback)!==null&&o!==void 0?o:Ba,this.vsn=(l=e?.vsn)!==null&&l!==void 0?l:Zc,e?.params&&(this.params=e.params),e?.logger&&(this.logger=e.logger),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(c=e?.reconnectAfterMs)!==null&&c!==void 0?c:(g=>R_[g-1]||C_),this.vsn){case v_:this.encode=(h=e?.encode)!==null&&h!==void 0?h:((g,_)=>_(JSON.stringify(g))),this.decode=(u=e?.decode)!==null&&u!==void 0?u:((g,_)=>_(JSON.parse(g)));break;case Qh:this.encode=(d=e?.encode)!==null&&d!==void 0?d:this.serializer.encode.bind(this.serializer),this.decode=(f=e?.decode)!==null&&f!==void 0?f:this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${this.vsn}`)}if(this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e?.workerUrl}}}var Us=class extends Error{constructor(i,e){super(i),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&e.icebergType?.includes("CommitState")===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function L_(i,e,t){const n=new URL(e,i);if(t)for(const[s,r]of Object.entries(t))r!==void 0&&n.searchParams.set(s,r);return n.toString()}async function N_(i){return!i||i.type==="none"?{}:i.type==="bearer"?{Authorization:`Bearer ${i.token}`}:i.type==="header"?{[i.name]:i.value}:i.type==="custom"?await i.getHeaders():{}}function D_(i){const e=i.fetchImpl??globalThis.fetch;return{async request({method:t,path:n,query:s,body:r,headers:a}){const o=L_(i.baseUrl,n,s),l=await N_(i.auth),c=await e(o,{method:t,headers:{...r?{"Content-Type":"application/json"}:{},...l,...a},body:r?JSON.stringify(r):void 0}),h=await c.text(),u=(c.headers.get("content-type")||"").includes("application/json"),d=u&&h?JSON.parse(h):h;if(!c.ok){const f=u?d:void 0,g=f?.error;throw new Us(g?.message??`Request failed with status ${c.status}`,{status:c.status,icebergType:g?.type,icebergCode:g?.code,details:f})}return{status:c.status,headers:c.headers,data:d}}}}function yr(i){return i.join("")}var O_=class{constructor(i,e=""){this.client=i,this.prefix=e}async listNamespaces(i){const e=i?{parent:yr(i.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(n=>({namespace:n}))}async createNamespace(i,e){const t={namespace:i.namespace,properties:e?.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:t})).data}async dropNamespace(i){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${yr(i.namespace)}`})}async loadNamespaceMetadata(i){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${yr(i.namespace)}`})).data.properties}}async namespaceExists(i){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${yr(i.namespace)}`}),!0}catch(e){if(e instanceof Us&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(i,e){try{return await this.createNamespace(i,e)}catch(t){if(t instanceof Us&&t.status===409)return;throw t}}};function Oi(i){return i.join("")}var U_=class{constructor(i,e="",t){this.client=i,this.prefix=e,this.accessDelegation=t}async listTables(i){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Oi(i.namespace)}/tables`})).data.identifiers}async createTable(i,e){const t={};return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Oi(i.namespace)}/tables`,body:e,headers:t})).data.metadata}async updateTable(i,e){const t=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Oi(i.namespace)}/tables/${i.name}`,body:e});return{"metadata-location":t.data["metadata-location"],metadata:t.data.metadata}}async dropTable(i,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Oi(i.namespace)}/tables/${i.name}`,query:{purgeRequested:String(e?.purge??!1)}})}async loadTable(i){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Oi(i.namespace)}/tables/${i.name}`,headers:e})).data.metadata}async tableExists(i){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Oi(i.namespace)}/tables/${i.name}`,headers:e}),!0}catch(t){if(t instanceof Us&&t.status===404)return!1;throw t}}async createTableIfNotExists(i,e){try{return await this.createTable(i,e)}catch(t){if(t instanceof Us&&t.status===409)return await this.loadTable({namespace:i.namespace,name:e.name});throw t}}},F_=class{constructor(i){let e="v1";i.catalogName&&(e+=`/${i.catalogName}`);const t=i.baseUrl.endsWith("/")?i.baseUrl:`${i.baseUrl}/`;this.client=D_({baseUrl:t,auth:i.auth,fetchImpl:i.fetch}),this.accessDelegation=i.accessDelegation?.join(","),this.namespaceOps=new O_(this.client,e),this.tableOps=new U_(this.client,e,this.accessDelegation)}async listNamespaces(i){return this.namespaceOps.listNamespaces(i)}async createNamespace(i,e){return this.namespaceOps.createNamespace(i,e)}async dropNamespace(i){await this.namespaceOps.dropNamespace(i)}async loadNamespaceMetadata(i){return this.namespaceOps.loadNamespaceMetadata(i)}async listTables(i){return this.tableOps.listTables(i)}async createTable(i,e){return this.tableOps.createTable(i,e)}async updateTable(i,e){return this.tableOps.updateTable(i,e)}async dropTable(i,e){await this.tableOps.dropTable(i,e)}async loadTable(i){return this.tableOps.loadTable(i)}async namespaceExists(i){return this.namespaceOps.namespaceExists(i)}async tableExists(i){return this.tableOps.tableExists(i)}async createNamespaceIfNotExists(i,e){return this.namespaceOps.createNamespaceIfNotExists(i,e)}async createTableIfNotExists(i,e){return this.tableOps.createTableIfNotExists(i,e)}},Jr=class extends Error{constructor(i,e="storage",t,n){super(i),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=t,this.statusCode=n}};function Zr(i){return typeof i=="object"&&i!==null&&"__isStorageError"in i}var xr=class extends Jr{constructor(i,e,t,n="storage"){super(i,n,e,t),this.name=n==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=t}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},iu=class extends Jr{constructor(i,e,t="storage"){super(i,t),this.name=t==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};const k_=i=>i?(...e)=>i(...e):(...e)=>fetch(...e),B_=i=>{if(typeof i!="object"||i===null)return!1;const e=Object.getPrototypeOf(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},jo=i=>{if(Array.isArray(i))return i.map(t=>jo(t));if(typeof i=="function"||i!==Object(i))return i;const e={};return Object.entries(i).forEach(([t,n])=>{const s=t.replace(/([-_][a-z])/gi,r=>r.toUpperCase().replace(/[-_]/g,""));e[s]=jo(n)}),e},z_=i=>!i||typeof i!="string"||i.length===0||i.length>100||i.trim()!==i||i.includes("/")||i.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(i);function Fs(i){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fs(i)}function G_(i,e){if(Fs(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(Fs(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function H_(i){var e=G_(i,"string");return Fs(e)=="symbol"?e:e+""}function V_(i,e,t){return(e=H_(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function nh(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable})),t.push.apply(t,n)}return t}function Ce(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?nh(Object(t),!0).forEach(function(n){V_(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):nh(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}const ih=i=>{var e;return i.msg||i.message||i.error_description||(typeof i.error=="string"?i.error:(e=i.error)===null||e===void 0?void 0:e.message)||JSON.stringify(i)},W_=async(i,e,t,n)=>{if(i&&typeof i=="object"&&"status"in i&&"ok"in i&&typeof i.status=="number"&&!t?.noResolveJson){const s=i,r=s.status||500;if(typeof s.json=="function")s.json().then(a=>{const o=a?.statusCode||a?.code||r+"";e(new xr(ih(a),r,o,n))}).catch(()=>{if(n==="vectors"){const a=r+"";e(new xr(s.statusText||`HTTP ${r} error`,r,a,n))}else{const a=r+"";e(new xr(s.statusText||`HTTP ${r} error`,r,a,n))}});else{const a=r+"";e(new xr(s.statusText||`HTTP ${r} error`,r,a,n))}}else e(new iu(ih(i),i,n))},$_=(i,e,t,n)=>{const s={method:i,headers:e?.headers||{}};return i==="GET"||i==="HEAD"||!n?Ce(Ce({},s),t):(B_(n)?(s.headers=Ce({"Content-Type":"application/json"},e?.headers),s.body=JSON.stringify(n)):s.body=n,e?.duplex&&(s.duplex=e.duplex),Ce(Ce({},s),t))};async function Ss(i,e,t,n,s,r,a){return new Promise((o,l)=>{i(t,$_(e,n,s,r)).then(c=>{if(!c.ok)throw c;if(n?.noResolveJson)return c;if(a==="vectors"){const h=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!h||!h.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>W_(c,l,n,a))})}function su(i="storage"){return{get:async(e,t,n,s)=>Ss(e,"GET",t,n,s,void 0,i),post:async(e,t,n,s,r)=>Ss(e,"POST",t,s,r,n,i),put:async(e,t,n,s,r)=>Ss(e,"PUT",t,s,r,n,i),head:async(e,t,n,s)=>Ss(e,"HEAD",t,Ce(Ce({},n),{},{noResolveJson:!0}),s,void 0,i),remove:async(e,t,n,s,r)=>Ss(e,"DELETE",t,s,r,n,i)}}const j_=su("storage"),{get:ks,post:fn,put:qo,head:q_,remove:wl}=j_,nn=su("vectors");var ls=class{constructor(i,e={},t,n="storage"){this.shouldThrowOnError=!1,this.url=i,this.headers=e,this.fetch=k_(t),this.namespace=n}throwOnError(){return this.shouldThrowOnError=!0,this}async handleOperation(i){var e=this;try{return{data:await i(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Zr(t))return{data:null,error:t};throw t}}},X_=class{constructor(i,e){this.downloadFn=i,this.shouldThrowOnError=e}then(i,e){return this.execute().then(i,e)}async execute(){var i=this;try{return{data:(await i.downloadFn()).body,error:null}}catch(e){if(i.shouldThrowOnError)throw e;if(Zr(e))return{data:null,error:e};throw e}}};let ru;ru=Symbol.toStringTag;var K_=class{constructor(i,e){this.downloadFn=i,this.shouldThrowOnError=e,this[ru]="BlobDownloadBuilder",this.promise=null}asStream(){return new X_(this.downloadFn,this.shouldThrowOnError)}then(i,e){return this.getPromise().then(i,e)}catch(i){return this.getPromise().catch(i)}finally(i){return this.getPromise().finally(i)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var i=this;try{return{data:await(await i.downloadFn()).blob(),error:null}}catch(e){if(i.shouldThrowOnError)throw e;if(Zr(e))return{data:null,error:e};throw e}}};const Y_={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},sh={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var J_=class extends ls{constructor(i,e={},t,n){super(i,e,n,"storage"),this.bucketId=t}async uploadOrUpdate(i,e,t,n){var s=this;return s.handleOperation(async()=>{let r;const a=Ce(Ce({},sh),n);let o=Ce(Ce({},s.headers),i==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;typeof Blob<"u"&&t instanceof Blob?(r=new FormData,r.append("cacheControl",a.cacheControl),l&&r.append("metadata",s.encodeMetadata(l)),r.append("",t)):typeof FormData<"u"&&t instanceof FormData?(r=t,r.has("cacheControl")||r.append("cacheControl",a.cacheControl),l&&!r.has("metadata")&&r.append("metadata",s.encodeMetadata(l))):(r=t,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=s.toBase64(s.encodeMetadata(l))),(typeof ReadableStream<"u"&&r instanceof ReadableStream||r&&typeof r=="object"&&"pipe"in r&&typeof r.pipe=="function")&&!a.duplex&&(a.duplex="half")),n?.headers&&(o=Ce(Ce({},o),n.headers));const c=s._removeEmptyFolders(e),h=s._getFinalPath(c),u=await(i=="PUT"?qo:fn)(s.fetch,`${s.url}/object/${h}`,r,Ce({headers:o},a?.duplex?{duplex:a.duplex}:{}));return{path:c,id:u.Id,fullPath:u.Key}})}async upload(i,e,t){return this.uploadOrUpdate("POST",i,e,t)}async uploadToSignedUrl(i,e,t,n){var s=this;const r=s._removeEmptyFolders(i),a=s._getFinalPath(r),o=new URL(s.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),s.handleOperation(async()=>{let l;const c=Ce({upsert:sh.upsert},n),h=Ce(Ce({},s.headers),{"x-upsert":String(c.upsert)});return typeof Blob<"u"&&t instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),l.append("",t)):typeof FormData<"u"&&t instanceof FormData?(l=t,l.append("cacheControl",c.cacheControl)):(l=t,h["cache-control"]=`max-age=${c.cacheControl}`,h["content-type"]=c.contentType),{path:r,fullPath:(await qo(s.fetch,o.toString(),l,{headers:h})).Key}})}async createSignedUploadUrl(i,e){var t=this;return t.handleOperation(async()=>{let n=t._getFinalPath(i);const s=Ce({},t.headers);e?.upsert&&(s["x-upsert"]="true");const r=await fn(t.fetch,`${t.url}/object/upload/sign/${n}`,{},{headers:s}),a=new URL(t.url+r.url),o=a.searchParams.get("token");if(!o)throw new Jr("No token returned by API");return{signedUrl:a.toString(),path:i,token:o}})}async update(i,e,t){return this.uploadOrUpdate("PUT",i,e,t)}async move(i,e,t){var n=this;return n.handleOperation(async()=>await fn(n.fetch,`${n.url}/object/move`,{bucketId:n.bucketId,sourceKey:i,destinationKey:e,destinationBucket:t?.destinationBucket},{headers:n.headers}))}async copy(i,e,t){var n=this;return n.handleOperation(async()=>({path:(await fn(n.fetch,`${n.url}/object/copy`,{bucketId:n.bucketId,sourceKey:i,destinationKey:e,destinationBucket:t?.destinationBucket},{headers:n.headers})).Key}))}async createSignedUrl(i,e,t){var n=this;return n.handleOperation(async()=>{let s=n._getFinalPath(i),r=await fn(n.fetch,`${n.url}/object/sign/${s}`,Ce({expiresIn:e},t?.transform?{transform:t.transform}:{}),{headers:n.headers});const a=t?.download?`&download=${t.download===!0?"":t.download}`:"";return{signedUrl:encodeURI(`${n.url}${r.signedURL}${a}`)}})}async createSignedUrls(i,e,t){var n=this;return n.handleOperation(async()=>{const s=await fn(n.fetch,`${n.url}/object/sign/${n.bucketId}`,{expiresIn:e,paths:i},{headers:n.headers}),r=t?.download?`&download=${t.download===!0?"":t.download}`:"";return s.map(a=>Ce(Ce({},a),{},{signedUrl:a.signedURL?encodeURI(`${n.url}${a.signedURL}${r}`):null}))})}download(i,e){const t=typeof e?.transform<"u"?"render/image/authenticated":"object",n=this.transformOptsToQueryString(e?.transform||{}),s=n?`?${n}`:"",r=this._getFinalPath(i),a=()=>ks(this.fetch,`${this.url}/${t}/${r}${s}`,{headers:this.headers,noResolveJson:!0});return new K_(a,this.shouldThrowOnError)}async info(i){var e=this;const t=e._getFinalPath(i);return e.handleOperation(async()=>jo(await ks(e.fetch,`${e.url}/object/info/${t}`,{headers:e.headers})))}async exists(i){var e=this;const t=e._getFinalPath(i);try{return await q_(e.fetch,`${e.url}/object/${t}`,{headers:e.headers}),{data:!0,error:null}}catch(n){if(e.shouldThrowOnError)throw n;if(Zr(n)&&n instanceof iu){const s=n.originalError;if([400,404].includes(s?.status))return{data:!1,error:n}}throw n}}getPublicUrl(i,e){const t=this._getFinalPath(i),n=[],s=e?.download?`download=${e.download===!0?"":e.download}`:"";s!==""&&n.push(s);const r=typeof e?.transform<"u"?"render/image":"object",a=this.transformOptsToQueryString(e?.transform||{});a!==""&&n.push(a);let o=n.join("&");return o!==""&&(o=`?${o}`),{data:{publicUrl:encodeURI(`${this.url}/${r}/public/${t}${o}`)}}}async remove(i){var e=this;return e.handleOperation(async()=>await wl(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:i},{headers:e.headers}))}async list(i,e,t){var n=this;return n.handleOperation(async()=>{const s=Ce(Ce(Ce({},Y_),e),{},{prefix:i||""});return await fn(n.fetch,`${n.url}/object/list/${n.bucketId}`,s,{headers:n.headers},t)})}async listV2(i,e){var t=this;return t.handleOperation(async()=>{const n=Ce({},i);return await fn(t.fetch,`${t.url}/object/list-v2/${t.bucketId}`,n,{headers:t.headers},e)})}encodeMetadata(i){return JSON.stringify(i)}toBase64(i){return typeof Buffer<"u"?Buffer.from(i).toString("base64"):btoa(i)}_getFinalPath(i){return`${this.bucketId}/${i.replace(/^\/+/,"")}`}_removeEmptyFolders(i){return i.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(i){const e=[];return i.width&&e.push(`width=${i.width}`),i.height&&e.push(`height=${i.height}`),i.resize&&e.push(`resize=${i.resize}`),i.format&&e.push(`format=${i.format}`),i.quality&&e.push(`quality=${i.quality}`),e.join("&")}};const Z_="2.93.3",$s={"X-Client-Info":`storage-js/${Z_}`};var Q_=class extends ls{constructor(i,e={},t,n){const s=new URL(i);n?.useNewHostname&&/supabase\.(co|in|red)$/.test(s.hostname)&&!s.hostname.includes("storage.supabase.")&&(s.hostname=s.hostname.replace("supabase.","storage.supabase."));const r=s.href.replace(/\/$/,""),a=Ce(Ce({},$s),e);super(r,a,t,"storage")}async listBuckets(i){var e=this;return e.handleOperation(async()=>{const t=e.listBucketOptionsToQueryString(i);return await ks(e.fetch,`${e.url}/bucket${t}`,{headers:e.headers})})}async getBucket(i){var e=this;return e.handleOperation(async()=>await ks(e.fetch,`${e.url}/bucket/${i}`,{headers:e.headers}))}async createBucket(i,e={public:!1}){var t=this;return t.handleOperation(async()=>await fn(t.fetch,`${t.url}/bucket`,{id:i,name:i,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async updateBucket(i,e){var t=this;return t.handleOperation(async()=>await qo(t.fetch,`${t.url}/bucket/${i}`,{id:i,name:i,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async emptyBucket(i){var e=this;return e.handleOperation(async()=>await fn(e.fetch,`${e.url}/bucket/${i}/empty`,{},{headers:e.headers}))}async deleteBucket(i){var e=this;return e.handleOperation(async()=>await wl(e.fetch,`${e.url}/bucket/${i}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(i){const e={};return i&&("limit"in i&&(e.limit=String(i.limit)),"offset"in i&&(e.offset=String(i.offset)),i.search&&(e.search=i.search),i.sortColumn&&(e.sortColumn=i.sortColumn),i.sortOrder&&(e.sortOrder=i.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},ev=class extends ls{constructor(i,e={},t){const n=i.replace(/\/$/,""),s=Ce(Ce({},$s),e);super(n,s,t,"storage")}async createBucket(i){var e=this;return e.handleOperation(async()=>await fn(e.fetch,`${e.url}/bucket`,{name:i},{headers:e.headers}))}async listBuckets(i){var e=this;return e.handleOperation(async()=>{const t=new URLSearchParams;i?.limit!==void 0&&t.set("limit",i.limit.toString()),i?.offset!==void 0&&t.set("offset",i.offset.toString()),i?.sortColumn&&t.set("sortColumn",i.sortColumn),i?.sortOrder&&t.set("sortOrder",i.sortOrder),i?.search&&t.set("search",i.search);const n=t.toString(),s=n?`${e.url}/bucket?${n}`:`${e.url}/bucket`;return await ks(e.fetch,s,{headers:e.headers})})}async deleteBucket(i){var e=this;return e.handleOperation(async()=>await wl(e.fetch,`${e.url}/bucket/${i}`,{},{headers:e.headers}))}from(i){var e=this;if(!z_(i))throw new Jr("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const t=new F_({baseUrl:this.url,catalogName:i,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),n=this.shouldThrowOnError;return new Proxy(t,{get(s,r){const a=s[r];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(s,o),error:null}}catch(l){if(n)throw l;return{data:null,error:l}}}}})}},tv=class extends ls{constructor(i,e={},t){const n=i.replace(/\/$/,""),s=Ce(Ce({},$s),{},{"Content-Type":"application/json"},e);super(n,s,t,"vectors")}async createIndex(i){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/CreateIndex`,i,{headers:e.headers})||{})}async getIndex(i,e){var t=this;return t.handleOperation(async()=>await nn.post(t.fetch,`${t.url}/GetIndex`,{vectorBucketName:i,indexName:e},{headers:t.headers}))}async listIndexes(i){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/ListIndexes`,i,{headers:e.headers}))}async deleteIndex(i,e){var t=this;return t.handleOperation(async()=>await nn.post(t.fetch,`${t.url}/DeleteIndex`,{vectorBucketName:i,indexName:e},{headers:t.headers})||{})}},nv=class extends ls{constructor(i,e={},t){const n=i.replace(/\/$/,""),s=Ce(Ce({},$s),{},{"Content-Type":"application/json"},e);super(n,s,t,"vectors")}async putVectors(i){var e=this;if(i.vectors.length<1||i.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/PutVectors`,i,{headers:e.headers})||{})}async getVectors(i){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/GetVectors`,i,{headers:e.headers}))}async listVectors(i){var e=this;if(i.segmentCount!==void 0){if(i.segmentCount<1||i.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(i.segmentIndex!==void 0&&(i.segmentIndex<0||i.segmentIndex>=i.segmentCount))throw new Error(`segmentIndex must be between 0 and ${i.segmentCount-1}`)}return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/ListVectors`,i,{headers:e.headers}))}async queryVectors(i){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/QueryVectors`,i,{headers:e.headers}))}async deleteVectors(i){var e=this;if(i.keys.length<1||i.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/DeleteVectors`,i,{headers:e.headers})||{})}},iv=class extends ls{constructor(i,e={},t){const n=i.replace(/\/$/,""),s=Ce(Ce({},$s),{},{"Content-Type":"application/json"},e);super(n,s,t,"vectors")}async createBucket(i){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:i},{headers:e.headers})||{})}async getBucket(i){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:i},{headers:e.headers}))}async listBuckets(i={}){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/ListVectorBuckets`,i,{headers:e.headers}))}async deleteBucket(i){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:i},{headers:e.headers})||{})}},sv=class extends iv{constructor(i,e={}){super(i,e.headers||{},e.fetch)}from(i){return new rv(this.url,this.headers,i,this.fetch)}async createBucket(i){var e=()=>super.createBucket,t=this;return e().call(t,i)}async getBucket(i){var e=()=>super.getBucket,t=this;return e().call(t,i)}async listBuckets(i={}){var e=()=>super.listBuckets,t=this;return e().call(t,i)}async deleteBucket(i){var e=()=>super.deleteBucket,t=this;return e().call(t,i)}},rv=class extends tv{constructor(i,e,t,n){super(i,e,n),this.vectorBucketName=t}async createIndex(i){var e=()=>super.createIndex,t=this;return e().call(t,Ce(Ce({},i),{},{vectorBucketName:t.vectorBucketName}))}async listIndexes(i={}){var e=()=>super.listIndexes,t=this;return e().call(t,Ce(Ce({},i),{},{vectorBucketName:t.vectorBucketName}))}async getIndex(i){var e=()=>super.getIndex,t=this;return e().call(t,t.vectorBucketName,i)}async deleteIndex(i){var e=()=>super.deleteIndex,t=this;return e().call(t,t.vectorBucketName,i)}index(i){return new av(this.url,this.headers,this.vectorBucketName,i,this.fetch)}},av=class extends nv{constructor(i,e,t,n,s){super(i,e,s),this.vectorBucketName=t,this.indexName=n}async putVectors(i){var e=()=>super.putVectors,t=this;return e().call(t,Ce(Ce({},i),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async getVectors(i){var e=()=>super.getVectors,t=this;return e().call(t,Ce(Ce({},i),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async listVectors(i={}){var e=()=>super.listVectors,t=this;return e().call(t,Ce(Ce({},i),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async queryVectors(i){var e=()=>super.queryVectors,t=this;return e().call(t,Ce(Ce({},i),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async deleteVectors(i){var e=()=>super.deleteVectors,t=this;return e().call(t,Ce(Ce({},i),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}},ov=class extends Q_{constructor(i,e={},t,n){super(i,e,t,n)}from(i){return new J_(this.url,this.headers,i,this.fetch)}get vectors(){return new sv(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new ev(this.url+"/iceberg",this.headers,this.fetch)}};const au="2.93.3",Hi=30*1e3,Xo=3,za=Xo*Hi,lv="http://localhost:9999",cv="supabase.auth.token",hv={"X-Client-Info":`gotrue-js/${au}`},Ko="X-Supabase-Api-Version",ou={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},uv=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,dv=600*1e3;class Bs extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=n}}function be(i){return typeof i=="object"&&i!==null&&"__isAuthError"in i}class fv extends Bs{constructor(e,t,n){super(e,t,n),this.name="AuthApiError",this.status=t,this.code=n}}function pv(i){return be(i)&&i.name==="AuthApiError"}class ui extends Bs{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class kn extends Bs{constructor(e,t,n,s){super(e,n,s),this.name=t,this.status=n}}class en extends kn{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Ga(i){return be(i)&&i.name==="AuthSessionMissingError"}class Ui extends kn{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Sr extends kn{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Er extends kn{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function mv(i){return be(i)&&i.name==="AuthImplicitGrantRedirectError"}class rh extends kn{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class gv extends kn{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Yo extends kn{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function Ha(i){return be(i)&&i.name==="AuthRetryableFetchError"}class ah extends kn{constructor(e,t,n){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=n}}class Jo extends kn{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Br="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),oh=` 	
\r=`.split(""),_v=(()=>{const i=new Array(128);for(let e=0;e<i.length;e+=1)i[e]=-1;for(let e=0;e<oh.length;e+=1)i[oh[e].charCodeAt(0)]=-2;for(let e=0;e<Br.length;e+=1)i[Br[e].charCodeAt(0)]=e;return i})();function lh(i,e,t){if(i!==null)for(e.queue=e.queue<<8|i,e.queuedBits+=8;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(Br[n]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(Br[n]),e.queuedBits-=6}}function lu(i,e,t){const n=_v[i];if(n>-1)for(e.queue=e.queue<<6|n,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`)}}function ch(i){const e=[],t=a=>{e.push(String.fromCodePoint(a))},n={utf8seq:0,codepoint:0},s={queue:0,queuedBits:0},r=a=>{xv(a,n,t)};for(let a=0;a<i.length;a+=1)lu(i.charCodeAt(a),s,r);return e.join("")}function vv(i,e){if(i<=127){e(i);return}else if(i<=2047){e(192|i>>6),e(128|i&63);return}else if(i<=65535){e(224|i>>12),e(128|i>>6&63),e(128|i&63);return}else if(i<=1114111){e(240|i>>18),e(128|i>>12&63),e(128|i>>6&63),e(128|i&63);return}throw new Error(`Unrecognized Unicode codepoint: ${i.toString(16)}`)}function yv(i,e){for(let t=0;t<i.length;t+=1){let n=i.charCodeAt(t);if(n>55295&&n<=56319){const s=(n-55296)*1024&65535;n=(i.charCodeAt(t+1)-56320&65535|s)+65536,t+=1}vv(n,e)}}function xv(i,e,t){if(e.utf8seq===0){if(i<=127){t(i);return}for(let n=1;n<6;n+=1)if((i>>7-n&1)===0){e.utf8seq=n;break}if(e.utf8seq===2)e.codepoint=i&31;else if(e.utf8seq===3)e.codepoint=i&15;else if(e.utf8seq===4)e.codepoint=i&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(i<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|i&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function Ki(i){const e=[],t={queue:0,queuedBits:0},n=s=>{e.push(s)};for(let s=0;s<i.length;s+=1)lu(i.charCodeAt(s),t,n);return new Uint8Array(e)}function Sv(i){const e=[];return yv(i,t=>e.push(t)),new Uint8Array(e)}function pi(i){const e=[],t={queue:0,queuedBits:0},n=s=>{e.push(s)};return i.forEach(s=>lh(s,t,n)),lh(null,t,n),e.join("")}function Ev(i){return Math.round(Date.now()/1e3)+i}function bv(){return Symbol("auth-callback")}const Dt=()=>typeof window<"u"&&typeof document<"u",ri={tested:!1,writable:!1},cu=()=>{if(!Dt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ri.tested)return ri.writable;const i=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(i,i),globalThis.localStorage.removeItem(i),ri.tested=!0,ri.writable=!0}catch{ri.tested=!0,ri.writable=!1}return ri.writable};function Mv(i){const e={},t=new URL(i);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((s,r)=>{e[r]=s})}catch{}return t.searchParams.forEach((n,s)=>{e[s]=n}),e}const hu=i=>i?(...e)=>i(...e):(...e)=>fetch(...e),wv=i=>typeof i=="object"&&i!==null&&"status"in i&&"ok"in i&&"json"in i&&typeof i.json=="function",Vi=async(i,e,t)=>{await i.setItem(e,JSON.stringify(t))},ai=async(i,e)=>{const t=await i.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return t}},Nt=async(i,e)=>{await i.removeItem(e)};class Qr{constructor(){this.promise=new Qr.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}Qr.promiseConstructor=Promise;function br(i){const e=i.split(".");if(e.length!==3)throw new Jo("Invalid JWT structure");for(let n=0;n<e.length;n++)if(!uv.test(e[n]))throw new Jo("JWT not in base64url format");return{header:JSON.parse(ch(e[0])),payload:JSON.parse(ch(e[1])),signature:Ki(e[2]),raw:{header:e[0],payload:e[1]}}}async function Tv(i){return await new Promise(e=>{setTimeout(()=>e(null),i)})}function Av(i,e){return new Promise((n,s)=>{(async()=>{for(let r=0;r<1/0;r++)try{const a=await i(r);if(!e(r,null,a)){n(a);return}}catch(a){if(!e(r,a)){s(a);return}}})()})}function Rv(i){return("0"+i.toString(16)).substr(-2)}function Cv(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=t.length;let s="";for(let r=0;r<56;r++)s+=t.charAt(Math.floor(Math.random()*n));return s}return crypto.getRandomValues(e),Array.from(e,Rv).join("")}async function Pv(i){const t=new TextEncoder().encode(i),n=await crypto.subtle.digest("SHA-256",t),s=new Uint8Array(n);return Array.from(s).map(r=>String.fromCharCode(r)).join("")}async function Iv(i){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),i;const t=await Pv(i);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Fi(i,e,t=!1){const n=Cv();let s=n;t&&(s+="/PASSWORD_RECOVERY"),await Vi(i,`${e}-code-verifier`,s);const r=await Iv(n);return[r,n===r?"plain":"s256"]}const Lv=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Nv(i){const e=i.headers.get(Ko);if(!e||!e.match(Lv))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function Dv(i){if(!i)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(i<=e)throw new Error("JWT has expired")}function Ov(i){switch(i){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const Uv=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function ki(i){if(!Uv.test(i))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Va(){const i={};return new Proxy(i,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const n=t.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Fv(i,e){return new Proxy(i,{get:(t,n,s)=>{if(n==="__isInsecureUserWarningProxy")return!0;if(typeof n=="symbol"){const r=n.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)"||r==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(t,n,s)}return!e.value&&typeof n=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(t,n,s)}})}function hh(i){return JSON.parse(JSON.stringify(i))}const oi=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),kv=[502,503,504];async function uh(i){var e;if(!wv(i))throw new Yo(oi(i),0);if(kv.includes(i.status))throw new Yo(oi(i),i.status);let t;try{t=await i.json()}catch(r){throw new ui(oi(r),r)}let n;const s=Nv(i);if(s&&s.getTime()>=ou["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?n=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(n=t.error_code),n){if(n==="weak_password")throw new ah(oi(t),i.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(n==="session_not_found")throw new en}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((r,a)=>r&&typeof a=="string",!0))throw new ah(oi(t),i.status,t.weak_password.reasons);throw new fv(oi(t),i.status||500,n)}const Bv=(i,e,t,n)=>{const s={method:i,headers:e?.headers||{}};return i==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e?.headers),s.body=JSON.stringify(n),Object.assign(Object.assign({},s),t))};async function Re(i,e,t,n){var s;const r=Object.assign({},n?.headers);r[Ko]||(r[Ko]=ou["2024-01-01"].name),n?.jwt&&(r.Authorization=`Bearer ${n.jwt}`);const a=(s=n?.query)!==null&&s!==void 0?s:{};n?.redirectTo&&(a.redirect_to=n.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await zv(i,e,t+o,{headers:r,noResolveJson:n?.noResolveJson},{},n?.body);return n?.xform?n?.xform(l):{data:Object.assign({},l),error:null}}async function zv(i,e,t,n,s,r){const a=Bv(e,n,s,r);let o;try{o=await i(t,Object.assign({},a))}catch(l){throw console.error(l),new Yo(oi(l),0)}if(o.ok||await uh(o),n?.noResolveJson)return o;try{return await o.json()}catch(l){await uh(l)}}function un(i){var e;let t=null;Vv(i)&&(t=Object.assign({},i),i.expires_at||(t.expires_at=Ev(i.expires_in)));const n=(e=i.user)!==null&&e!==void 0?e:i;return{data:{session:t,user:n},error:null}}function dh(i){const e=un(i);return!e.error&&i.weak_password&&typeof i.weak_password=="object"&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.message&&typeof i.weak_password.message=="string"&&i.weak_password.reasons.reduce((t,n)=>t&&typeof n=="string",!0)&&(e.data.weak_password=i.weak_password),e}function Kn(i){var e;return{data:{user:(e=i.user)!==null&&e!==void 0?e:i},error:null}}function Gv(i){return{data:i,error:null}}function Hv(i){const{action_link:e,email_otp:t,hashed_token:n,redirect_to:s,verification_type:r}=i,a=Yr(i,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:t,hashed_token:n,redirect_to:s,verification_type:r},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function fh(i){return i}function Vv(i){return i.access_token&&i.refresh_token&&i.expires_in}const Wa=["global","local","others"];class Wv{constructor({url:e="",headers:t={},fetch:n}){this.url=e,this.headers=t,this.fetch=hu(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}async signOut(e,t=Wa[0]){if(Wa.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Wa.join(", ")}`);try{return await Re(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(n){if(be(n))return{data:null,error:n};throw n}}async inviteUserByEmail(e,t={}){try{return await Re(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Kn})}catch(n){if(be(n))return{data:{user:null},error:n};throw n}}async generateLink(e){try{const{options:t}=e,n=Yr(e,["options"]),s=Object.assign(Object.assign({},n),t);return"newEmail"in n&&(s.new_email=n?.newEmail,delete s.newEmail),await Re(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:s,headers:this.headers,xform:Hv,redirectTo:t?.redirectTo})}catch(t){if(be(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await Re(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Kn})}catch(t){if(be(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,n,s,r,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},h=await Re(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(t=e?.page)===null||t===void 0?void 0:t.toString())!==null&&n!==void 0?n:"",per_page:(r=(s=e?.perPage)===null||s===void 0?void 0:s.toString())!==null&&r!==void 0?r:""},xform:fh});if(h.error)throw h.error;const u=await h.json(),d=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=h.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),m=JSON.parse(g.split(";")[1].split("=")[1]);c[`${m}Page`]=_}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(be(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){ki(e);try{return await Re(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Kn})}catch(t){if(be(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){ki(e);try{return await Re(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Kn})}catch(n){if(be(n))return{data:{user:null},error:n};throw n}}async deleteUser(e,t=!1){ki(e);try{return await Re(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:Kn})}catch(n){if(be(n))return{data:{user:null},error:n};throw n}}async _listFactors(e){ki(e.userId);try{const{data:t,error:n}=await Re(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:s=>({data:{factors:s},error:null})});return{data:t,error:n}}catch(t){if(be(t))return{data:null,error:t};throw t}}async _deleteFactor(e){ki(e.userId),ki(e.id);try{return{data:await Re(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(be(t))return{data:null,error:t};throw t}}async _listOAuthClients(e){var t,n,s,r,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},h=await Re(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(t=e?.page)===null||t===void 0?void 0:t.toString())!==null&&n!==void 0?n:"",per_page:(r=(s=e?.perPage)===null||s===void 0?void 0:s.toString())!==null&&r!==void 0?r:""},xform:fh});if(h.error)throw h.error;const u=await h.json(),d=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=h.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),m=JSON.parse(g.split(";")[1].split("=")[1]);c[`${m}Page`]=_}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(be(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await Re(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(be(t))return{data:null,error:t};throw t}}async _getOAuthClient(e){try{return await Re(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(be(t))return{data:null,error:t};throw t}}async _updateOAuthClient(e,t){try{return await Re(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(be(n))return{data:null,error:n};throw n}}async _deleteOAuthClient(e){try{return await Re(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(be(t))return{data:null,error:t};throw t}}async _regenerateOAuthClientSecret(e){try{return await Re(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(be(t))return{data:null,error:t};throw t}}}function ph(i={}){return{getItem:e=>i[e]||null,setItem:(e,t)=>{i[e]=t},removeItem:e=>{delete i[e]}}}const Bi={debug:!!(globalThis&&cu()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class uu extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class $v extends uu{}async function jv(i,e,t){Bi.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",i,e);const n=new globalThis.AbortController;return e>0&&setTimeout(()=>{n.abort(),Bi.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",i)},e),await Promise.resolve().then(()=>globalThis.navigator.locks.request(i,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async s=>{if(s){Bi.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",i,s.name);try{return await t()}finally{Bi.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",i,s.name)}}else{if(e===0)throw Bi.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",i),new $v(`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`);if(Bi.debug)try{const r=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(r,null,"  "))}catch(r){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",r)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await t()}}))}function qv(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function du(i){if(!/^0x[a-fA-F0-9]{40}$/.test(i))throw new Error(`@supabase/auth-js: Address "${i}" is invalid.`);return i.toLowerCase()}function Xv(i){return parseInt(i,16)}function Kv(i){const e=new TextEncoder().encode(i);return"0x"+Array.from(e,n=>n.toString(16).padStart(2,"0")).join("")}function Yv(i){var e;const{chainId:t,domain:n,expirationTime:s,issuedAt:r=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:h,uri:u,version:d}=i;{if(!Number.isInteger(t))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(d!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(!((e=i.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${i.statement}`)}const f=du(i.address),g=h?`${h}://${n}`:n,_=i.statement?`${i.statement}
`:"",m=`${g} wants you to sign in with your Ethereum account:
${f}

${_}`;let p=`URI: ${u}
Version: ${d}
Chain ID: ${t}${a?`
Nonce: ${a}`:""}
Issued At: ${r.toISOString()}`;if(s&&(p+=`
Expiration Time: ${s.toISOString()}`),o&&(p+=`
Not Before: ${o.toISOString()}`),l&&(p+=`
Request ID: ${l}`),c){let x=`
Resources:`;for(const S of c){if(!S||typeof S!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${S}`);x+=`
- ${S}`}p+=x}return`${m}
${p}`}class wt extends Error{constructor({message:e,code:t,cause:n,name:s}){var r;super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=(r=s??(n instanceof Error?n.name:void 0))!==null&&r!==void 0?r:"Unknown Error",this.code=t}}class zr extends wt{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}function Jv({error:i,options:e}){var t,n,s;const{publicKey:r}=e;if(!r)throw Error("options was missing required publicKey property");if(i.name==="AbortError"){if(e.signal instanceof AbortSignal)return new wt({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:i})}else if(i.name==="ConstraintError"){if(((t=r.authenticatorSelection)===null||t===void 0?void 0:t.requireResidentKey)===!0)return new wt({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:i});if(e.mediation==="conditional"&&((n=r.authenticatorSelection)===null||n===void 0?void 0:n.userVerification)==="required")return new wt({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:i});if(((s=r.authenticatorSelection)===null||s===void 0?void 0:s.userVerification)==="required")return new wt({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:i})}else{if(i.name==="InvalidStateError")return new wt({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:i});if(i.name==="NotAllowedError")return new wt({message:i.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i});if(i.name==="NotSupportedError")return r.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new wt({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:i}):new wt({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:i});if(i.name==="SecurityError"){const a=window.location.hostname;if(fu(a)){if(r.rp.id!==a)return new wt({message:`The RP ID "${r.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:i})}else return new wt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:i})}else if(i.name==="TypeError"){if(r.user.id.byteLength<1||r.user.id.byteLength>64)return new wt({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:i})}else if(i.name==="UnknownError")return new wt({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:i})}return new wt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i})}function Zv({error:i,options:e}){const{publicKey:t}=e;if(!t)throw Error("options was missing required publicKey property");if(i.name==="AbortError"){if(e.signal instanceof AbortSignal)return new wt({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:i})}else{if(i.name==="NotAllowedError")return new wt({message:i.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i});if(i.name==="SecurityError"){const n=window.location.hostname;if(fu(n)){if(t.rpId!==n)return new wt({message:`The RP ID "${t.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:i})}else return new wt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:i})}else if(i.name==="UnknownError")return new wt({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:i})}return new wt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i})}class Qv{createNewAbortSignal(){if(this.controller){const t=new Error("Cancelling existing WebAuthn API call for new one");t.name="AbortError",this.controller.abort(t)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const ey=new Qv;function ty(i){if(!i)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(i);const{challenge:e,user:t,excludeCredentials:n}=i,s=Yr(i,["challenge","user","excludeCredentials"]),r=Ki(e).buffer,a=Object.assign(Object.assign({},t),{id:Ki(t.id).buffer}),o=Object.assign(Object.assign({},s),{challenge:r,user:a});if(n&&n.length>0){o.excludeCredentials=new Array(n.length);for(let l=0;l<n.length;l++){const c=n[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:Ki(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function ny(i){if(!i)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(i);const{challenge:e,allowCredentials:t}=i,n=Yr(i,["challenge","allowCredentials"]),s=Ki(e).buffer,r=Object.assign(Object.assign({},n),{challenge:s});if(t&&t.length>0){r.allowCredentials=new Array(t.length);for(let a=0;a<t.length;a++){const o=t[a];r.allowCredentials[a]=Object.assign(Object.assign({},o),{id:Ki(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return r}function iy(i){var e;if("toJSON"in i&&typeof i.toJSON=="function")return i.toJSON();const t=i;return{id:i.id,rawId:i.id,response:{attestationObject:pi(new Uint8Array(i.response.attestationObject)),clientDataJSON:pi(new Uint8Array(i.response.clientDataJSON))},type:"public-key",clientExtensionResults:i.getClientExtensionResults(),authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function sy(i){var e;if("toJSON"in i&&typeof i.toJSON=="function")return i.toJSON();const t=i,n=i.getClientExtensionResults(),s=i.response;return{id:i.id,rawId:i.id,response:{authenticatorData:pi(new Uint8Array(s.authenticatorData)),clientDataJSON:pi(new Uint8Array(s.clientDataJSON)),signature:pi(new Uint8Array(s.signature)),userHandle:s.userHandle?pi(new Uint8Array(s.userHandle)):void 0},type:"public-key",clientExtensionResults:n,authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function fu(i){return i==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(i)}function mh(){var i,e;return!!(Dt()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((i=navigator?.credentials)===null||i===void 0?void 0:i.create)=="function"&&typeof((e=navigator?.credentials)===null||e===void 0?void 0:e.get)=="function")}async function ry(i){try{const e=await navigator.credentials.create(i);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new zr("Browser returned unexpected credential type",e)}:{data:null,error:new zr("Empty credential response",e)}}catch(e){return{data:null,error:Jv({error:e,options:i})}}}async function ay(i){try{const e=await navigator.credentials.get(i);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new zr("Browser returned unexpected credential type",e)}:{data:null,error:new zr("Empty credential response",e)}}catch(e){return{data:null,error:Zv({error:e,options:i})}}}const oy={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},ly={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Gr(...i){const e=s=>s!==null&&typeof s=="object"&&!Array.isArray(s),t=s=>s instanceof ArrayBuffer||ArrayBuffer.isView(s),n={};for(const s of i)if(s)for(const r in s){const a=s[r];if(a!==void 0)if(Array.isArray(a))n[r]=a;else if(t(a))n[r]=a;else if(e(a)){const o=n[r];e(o)?n[r]=Gr(o,a):n[r]=Gr(a)}else n[r]=a}return n}function cy(i,e){return Gr(oy,i,e||{})}function hy(i,e){return Gr(ly,i,e||{})}class uy{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:s},r){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!o)return{data:null,error:l};const c=s??ey.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:h}=o.webauthn.credential_options.publicKey;if(!h.name){const u=n;if(u)h.name=`${h.id}:${u}`;else{const f=(await this.client.getUser()).data.user,g=((a=f?.user_metadata)===null||a===void 0?void 0:a.name)||f?.email||f?.id||"User";h.name=`${h.id}:${g}`}}h.displayName||(h.displayName=h.name)}switch(o.webauthn.type){case"create":{const h=cy(o.webauthn.credential_options.publicKey,r?.create),{data:u,error:d}=await ry({publicKey:h,signal:c});return u?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:u}},error:null}:{data:null,error:d}}case"request":{const h=hy(o.webauthn.credential_options.publicKey,r?.request),{data:u,error:d}=await ay(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:h,signal:c}));return u?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:u}},error:null}:{data:null,error:d}}}}catch(o){return be(o)?{data:null,error:o}:{data:null,error:new ui("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:s}={}},r){if(!t)return{data:null,error:new Bs("rpId is required for WebAuthn authentication")};try{if(!mh())return{data:null,error:new ui("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:s},{request:r});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:t,rpOrigins:n,credential_response:l.credential_response}})}catch(a){return be(a)?{data:null,error:a}:{data:null,error:new ui("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:s}={}},r){if(!t)return{data:null,error:new Bs("rpId is required for WebAuthn registration")};try{if(!mh())return{data:null,error:new ui("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(h=>{var u;return(u=h.data)===null||u===void 0?void 0:u.all.find(d=>d.factor_type==="webauthn"&&d.friendly_name===e&&d.status!=="unverified")}).then(h=>h?this.client.mfa.unenroll({factorId:h?.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:s},{create:r});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:t,rpOrigins:n,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return be(a)?{data:null,error:a}:{data:null,error:new ui("Unexpected error in register",a)}}}}qv();const dy={url:lv,storageKey:cv,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:hv,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:1e4};async function gh(i,e,t){return await t()}const zi={};class zs{get jwks(){var e,t;return(t=(e=zi[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){zi[this.storageKey]=Object.assign(Object.assign({},zi[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=zi[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){zi[this.storageKey]=Object.assign(Object.assign({},zi[this.storageKey]),{cachedAt:e})}constructor(e){var t,n,s;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const r=Object.assign(Object.assign({},dy),e);if(this.storageKey=r.storageKey,this.instanceID=(t=zs.nextInstanceID[this.storageKey])!==null&&t!==void 0?t:0,zs.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug=="function"&&(this.logger=r.debug),this.instanceID>0&&Dt()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.admin=new Wv({url:r.url,headers:r.headers,fetch:r.fetch}),this.url=r.url,this.headers=r.headers,this.fetch=hu(r.fetch),this.lock=r.lock||gh,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock?this.lock=r.lock:this.persistSession&&Dt()&&(!((n=globalThis?.navigator)===null||n===void 0)&&n.locks)?this.lock=jv:this.lock=gh,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new uy(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:cu()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=ph(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=ph(this.memoryStorage)),Dt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(s=this.broadcastChannel)===null||s===void 0||s.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${au}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{let t={},n="none";if(Dt()&&(t=Mv(window.location.href),this._isImplicitGrantCallback(t)?n="implicit":await this._isPKCECallback(t)&&(n="pkce")),Dt()&&this.detectSessionInUrl&&n!=="none"){const{data:s,error:r}=await this._getSessionFromURL(t,n);if(r){if(this._debug("#_initialize()","error detecting session from URL",r),mv(r)){const l=(e=r.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:r}}return{error:r}}const{session:a,redirectType:o}=s;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return be(t)?this._returnResult({error:t}):this._returnResult({error:new ui("Unexpected error during initialization",t)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,n,s;try{const r=await Re(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(t=e?.options)===null||t===void 0?void 0:t.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(s=e?.options)===null||s===void 0?void 0:s.captchaToken}},xform:un}),{data:a,error:o}=r;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(r){if(be(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signUp(e){var t,n,s;try{let r;if("email"in e){const{email:h,password:u,options:d}=e;let f=null,g=null;this.flowType==="pkce"&&([f,g]=await Fi(this.storage,this.storageKey)),r=await Re(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:d?.emailRedirectTo,body:{email:h,password:u,data:(t=d?.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:d?.captchaToken},code_challenge:f,code_challenge_method:g},xform:un})}else if("phone"in e){const{phone:h,password:u,options:d}=e;r=await Re(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:h,password:u,data:(n=d?.data)!==null&&n!==void 0?n:{},channel:(s=d?.channel)!==null&&s!==void 0?s:"sms",gotrue_meta_security:{captcha_token:d?.captchaToken}},xform:un})}else throw new Sr("You must provide either an email or phone number and a password");const{data:a,error:o}=r;if(o||!a)return await Nt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(r){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),be(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithPassword(e){try{let t;if("email"in e){const{email:r,password:a,options:o}=e;t=await Re(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:r,password:a,gotrue_meta_security:{captcha_token:o?.captchaToken}},xform:dh})}else if("phone"in e){const{phone:r,password:a,options:o}=e;t=await Re(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:r,password:a,gotrue_meta_security:{captcha_token:o?.captchaToken}},xform:dh})}else throw new Sr("You must provide either an email or phone number and a password");const{data:n,error:s}=t;if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!n||!n.session||!n.user){const r=new Ui;return this._returnResult({data:{user:null,session:null},error:r})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:s})}catch(t){if(be(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOAuth(e){var t,n,s,r;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(n=e.options)===null||n===void 0?void 0:n.scopes,queryParams:(s=e.options)===null||s===void 0?void 0:s.queryParams,skipBrowserRedirect:(r=e.options)===null||r===void 0?void 0:r.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,n,s,r,a,o,l,c,h,u,d;let f,g;if("message"in e)f=e.message,g=e.signature;else{const{chain:_,wallet:m,statement:p,options:x}=e;let S;if(Dt())if(typeof m=="object")S=m;else{const y=window;if("ethereum"in y&&typeof y.ethereum=="object"&&"request"in y.ethereum&&typeof y.ethereum.request=="function")S=y.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!x?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");S=m}const E=new URL((t=x?.url)!==null&&t!==void 0?t:window.location.href),w=await S.request({method:"eth_requestAccounts"}).then(y=>y).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!w||w.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const T=du(w[0]);let A=(n=x?.signInWithEthereum)===null||n===void 0?void 0:n.chainId;if(!A){const y=await S.request({method:"eth_chainId"});A=Xv(y)}const I={domain:E.host,address:T,statement:p,uri:E.href,version:"1",chainId:A,nonce:(s=x?.signInWithEthereum)===null||s===void 0?void 0:s.nonce,issuedAt:(a=(r=x?.signInWithEthereum)===null||r===void 0?void 0:r.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=x?.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=x?.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=x?.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(h=x?.signInWithEthereum)===null||h===void 0?void 0:h.resources};f=Yv(I),g=await S.request({method:"personal_sign",params:[Kv(f),T]})}try{const{data:_,error:m}=await Re(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:f,signature:g},!((u=e.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:(d=e.options)===null||d===void 0?void 0:d.captchaToken}}:null),xform:un});if(m)throw m;if(!_||!_.session||!_.user){const p=new Ui;return this._returnResult({data:{user:null,session:null},error:p})}return _.session&&(await this._saveSession(_.session),await this._notifyAllSubscribers("SIGNED_IN",_.session)),this._returnResult({data:Object.assign({},_),error:m})}catch(_){if(be(_))return this._returnResult({data:{user:null,session:null},error:_});throw _}}async signInWithSolana(e){var t,n,s,r,a,o,l,c,h,u,d,f;let g,_;if("message"in e)g=e.message,_=e.signature;else{const{chain:m,wallet:p,statement:x,options:S}=e;let E;if(Dt())if(typeof p=="object")E=p;else{const T=window;if("solana"in T&&typeof T.solana=="object"&&("signIn"in T.solana&&typeof T.solana.signIn=="function"||"signMessage"in T.solana&&typeof T.solana.signMessage=="function"))E=T.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof p!="object"||!S?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");E=p}const w=new URL((t=S?.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in E&&E.signIn){const T=await E.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},S?.signInWithSolana),{version:"1",domain:w.host,uri:w.href}),x?{statement:x}:null));let A;if(Array.isArray(T)&&T[0]&&typeof T[0]=="object")A=T[0];else if(T&&typeof T=="object"&&"signedMessage"in T&&"signature"in T)A=T;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in A&&"signature"in A&&(typeof A.signedMessage=="string"||A.signedMessage instanceof Uint8Array)&&A.signature instanceof Uint8Array)g=typeof A.signedMessage=="string"?A.signedMessage:new TextDecoder().decode(A.signedMessage),_=A.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in E)||typeof E.signMessage!="function"||!("publicKey"in E)||typeof E!="object"||!E.publicKey||!("toBase58"in E.publicKey)||typeof E.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");g=[`${w.host} wants you to sign in with your Solana account:`,E.publicKey.toBase58(),...x?["",x,""]:[""],"Version: 1",`URI: ${w.href}`,`Issued At: ${(s=(n=S?.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&s!==void 0?s:new Date().toISOString()}`,...!((r=S?.signInWithSolana)===null||r===void 0)&&r.notBefore?[`Not Before: ${S.signInWithSolana.notBefore}`]:[],...!((a=S?.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${S.signInWithSolana.expirationTime}`]:[],...!((o=S?.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${S.signInWithSolana.chainId}`]:[],...!((l=S?.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${S.signInWithSolana.nonce}`]:[],...!((c=S?.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${S.signInWithSolana.requestId}`]:[],...!((u=(h=S?.signInWithSolana)===null||h===void 0?void 0:h.resources)===null||u===void 0)&&u.length?["Resources",...S.signInWithSolana.resources.map(A=>`- ${A}`)]:[]].join(`
`);const T=await E.signMessage(new TextEncoder().encode(g),"utf8");if(!T||!(T instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");_=T}}try{const{data:m,error:p}=await Re(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:g,signature:pi(_)},!((d=e.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:un});if(p)throw p;if(!m||!m.session||!m.user){const x=new Ui;return this._returnResult({data:{user:null,session:null},error:x})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:Object.assign({},m),error:p})}catch(m){if(be(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async _exchangeCodeForSession(e){const t=await ai(this.storage,`${this.storageKey}-code-verifier`),[n,s]=(t??"").split("/");try{if(!n&&this.flowType==="pkce")throw new gv;const{data:r,error:a}=await Re(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:n},xform:un});if(await Nt(this.storage,`${this.storageKey}-code-verifier`),a)throw a;if(!r||!r.session||!r.user){const o=new Ui;return this._returnResult({data:{user:null,session:null,redirectType:null},error:o})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign(Object.assign({},r),{redirectType:s??null}),error:a})}catch(r){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),be(r))return this._returnResult({data:{user:null,session:null,redirectType:null},error:r});throw r}}async signInWithIdToken(e){try{const{options:t,provider:n,token:s,access_token:r,nonce:a}=e,o=await Re(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:s,access_token:r,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:un}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const h=new Ui;return this._returnResult({data:{user:null,session:null},error:h})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(t){if(be(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOtp(e){var t,n,s,r,a;try{if("email"in e){const{email:o,options:l}=e;let c=null,h=null;this.flowType==="pkce"&&([c,h]=await Fi(this.storage,this.storageKey));const{error:u}=await Re(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(t=l?.data)!==null&&t!==void 0?t:{},create_user:(n=l?.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l?.captchaToken},code_challenge:c,code_challenge_method:h},redirectTo:l?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:u})}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:h}=await Re(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(s=l?.data)!==null&&s!==void 0?s:{},create_user:(r=l?.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l?.captchaToken},channel:(a=l?.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:c?.message_id},error:h})}throw new Sr("You must provide either an email or phone number.")}catch(o){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),be(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async verifyOtp(e){var t,n;try{let s,r;"options"in e&&(s=(t=e.options)===null||t===void 0?void 0:t.redirectTo,r=(n=e.options)===null||n===void 0?void 0:n.captchaToken);const{data:a,error:o}=await Re(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:r}}),redirectTo:s,xform:un});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l?.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(be(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithSSO(e){var t,n,s,r,a;try{let o=null,l=null;this.flowType==="pkce"&&([o,l]=await Fi(this.storage,this.storageKey));const c=await Re(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(n=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&n!==void 0?n:void 0}),!((s=e?.options)===null||s===void 0)&&s.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:Gv});return!((r=c.data)===null||r===void 0)&&r.url&&Dt()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),be(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new en;const{error:s}=await Re(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:s})})}catch(e){if(be(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const t=`${this.url}/resend`;if("email"in e){const{email:n,type:s,options:r}=e,{error:a}=await Re(this.fetch,"POST",t,{headers:this.headers,body:{email:n,type:s,gotrue_meta_security:{captcha_token:r?.captchaToken}},redirectTo:r?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}else if("phone"in e){const{phone:n,type:s,options:r}=e,{data:a,error:o}=await Re(this.fetch,"POST",t,{headers:this.headers,body:{phone:n,type:s,gotrue_meta_security:{captcha_token:r?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new Sr("You must provide either an email or phone number and a type")}catch(t){if(be(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async t=>t))}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),s=(async()=>(await n,await t()))();return this.pendingInLock.push((async()=>{try{await s}catch{}})()),s}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=t();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const s=[...this.pendingInLock];await Promise.all(s),this.pendingInLock.splice(0,s.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await ai(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const n=e.expires_at?e.expires_at*1e3-Date.now()<za:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",e.expires_at),!n){if(this.userStorage){const a=await ai(this.userStorage,this.storageKey+"-user");a?.user?e.user=a.user:e.user=Va()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=Fv(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:s,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{session:null},error:r}):this._returnResult({data:{session:s},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;const t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await Re(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Kn}):await this._useSession(async t=>{var n,s,r;const{data:a,error:o}=t;if(o)throw o;return!(!((n=a.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new en}:await Re(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(r=(s=a.session)===null||s===void 0?void 0:s.access_token)!==null&&r!==void 0?r:void 0,xform:Kn})})}catch(t){if(be(t))return Ga(t)&&(await this._removeSession(),await Nt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:t});throw t}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{const{data:s,error:r}=n;if(r)throw r;if(!s.session)throw new en;const a=s.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await Fi(this.storage,this.storageKey));const{data:c,error:h}=await Re(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:Kn});if(h)throw h;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),this._returnResult({data:{user:a.user},error:null})})}catch(n){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),be(n))return this._returnResult({data:{user:null},error:n});throw n}}async setSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new en;const t=Date.now()/1e3;let n=t,s=!0,r=null;const{payload:a}=br(e.access_token);if(a.exp&&(n=a.exp,s=n<=t),s){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};r=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});r={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:n-t,expires_at:n},await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)}return this._returnResult({data:{user:r.user,session:r},error:null})}catch(t){if(be(t))return this._returnResult({data:{session:null,user:null},error:t});throw t}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{var n;if(!e){const{data:a,error:o}=t;if(o)throw o;e=(n=a.session)!==null&&n!==void 0?n:void 0}if(!e?.refresh_token)throw new en;const{data:s,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):s?this._returnResult({data:{user:s.user,session:s},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(t){if(be(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async _getSessionFromURL(e,t){try{if(!Dt())throw new Er("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Er(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new rh("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Er("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new rh("No code detected.");const{data:x,error:S}=await this._exchangeCodeForSession(e.code);if(S)throw S;const E=new URL(window.location.href);return E.searchParams.delete("code"),window.history.replaceState(window.history.state,"",E.toString()),{data:{session:x.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:s,access_token:r,refresh_token:a,expires_in:o,expires_at:l,token_type:c}=e;if(!r||!o||!a||!c)throw new Er("No session defined in URL");const h=Math.round(Date.now()/1e3),u=parseInt(o);let d=h+u;l&&(d=parseInt(l));const f=d-h;f*1e3<=Hi&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);const g=d-u;h-g>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",g,d,h):h-g<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",g,d,h);const{data:_,error:m}=await this._getUser(r);if(m)throw m;const p={provider_token:n,provider_refresh_token:s,access_token:r,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:_.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:p,redirectType:e.type},error:null})}catch(n){if(be(n))return this._returnResult({data:{session:null,redirectType:null},error:n});throw n}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error_description)}async _isPKCECallback(e){const t=await ai(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var n;const{data:s,error:r}=t;if(r&&!Ga(r))return this._returnResult({error:r});const a=(n=s.session)===null||n===void 0?void 0:n.access_token;if(a){const{error:o}=await this.admin.signOut(a,e);if(o&&!(pv(o)&&(o.status===404||o.status===401||o.status===403)||Ga(o)))return this._returnResult({error:o})}return e!=="others"&&(await this._removeSession(),await Nt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const t=bv(),n={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,n),(async()=>(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})))(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{var n,s;try{const{data:{session:r},error:a}=t;if(a)throw a;await((n=this.stateChangeEmitters.get(e))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",r)),this._debug("INITIAL_SESSION","callback id",e,"session",r)}catch(r){await((s=this.stateChangeEmitters.get(e))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",r),console.error(r)}})}async resetPasswordForEmail(e,t={}){let n=null,s=null;this.flowType==="pkce"&&([n,s]=await Fi(this.storage,this.storageKey,!0));try{return await Re(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:s,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(r){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),be(r))return this._returnResult({data:null,error:r});throw r}}async getUserIdentities(){var e;try{const{data:t,error:n}=await this.getUser();if(n)throw n;return this._returnResult({data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(t){if(be(t))return this._returnResult({data:null,error:t});throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t;try{const{data:n,error:s}=await this._useSession(async r=>{var a,o,l,c,h;const{data:u,error:d}=r;if(d)throw d;const f=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await Re(this.fetch,"GET",f,{headers:this.headers,jwt:(h=(c=u.session)===null||c===void 0?void 0:c.access_token)!==null&&h!==void 0?h:void 0})});if(s)throw s;return Dt()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(n?.url),this._returnResult({data:{provider:e.provider,url:n?.url},error:null})}catch(n){if(be(n))return this._returnResult({data:{provider:e.provider,url:null},error:n});throw n}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var n;try{const{error:s,data:{session:r}}=t;if(s)throw s;const{options:a,provider:o,token:l,access_token:c,nonce:h}=e,u=await Re(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(n=r?.access_token)!==null&&n!==void 0?n:void 0,body:{provider:o,id_token:l,access_token:c,nonce:h,link_identity:!0,gotrue_meta_security:{captcha_token:a?.captchaToken}},xform:un}),{data:d,error:f}=u;return f?this._returnResult({data:{user:null,session:null},error:f}):!d||!d.session||!d.user?this._returnResult({data:{user:null,session:null},error:new Ui}):(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("USER_UPDATED",d.session)),this._returnResult({data:d,error:f}))}catch(s){if(await Nt(this.storage,`${this.storageKey}-code-verifier`),be(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var n,s;const{data:r,error:a}=t;if(a)throw a;return await Re(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(s=(n=r.session)===null||n===void 0?void 0:n.access_token)!==null&&s!==void 0?s:void 0})})}catch(t){if(be(t))return this._returnResult({data:null,error:t});throw t}}async _refreshAccessToken(e){const t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,"begin");try{const n=Date.now();return await Av(async s=>(s>0&&await Tv(200*Math.pow(2,s-1)),this._debug(t,"refreshing attempt",s),await Re(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:un})),(s,r)=>{const a=200*Math.pow(2,s);return r&&Ha(r)&&Date.now()+a-n<Hi})}catch(n){if(this._debug(t,"error",n),be(n))return this._returnResult({data:{session:null,user:null},error:n});throw n}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",n),Dt()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){var e,t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const s=await ai(this.storage,this.storageKey);if(s&&this.userStorage){let a=await ai(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:s.user},await Vi(this.userStorage,this.storageKey+"-user",a)),s.user=(e=a?.user)!==null&&e!==void 0?e:Va()}else if(s&&!s.user&&!s.user){const a=await ai(this.storage,this.storageKey+"-user");a&&a?.user?(s.user=a.user,await Nt(this.storage,this.storageKey+"-user"),await Vi(this.storage,this.storageKey,s)):s.user=Va()}if(this._debug(n,"session from storage",s),!this._isValidSession(s)){this._debug(n,"session is not valid"),s!==null&&await this._removeSession();return}const r=((t=s.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<za;if(this._debug(n,`session has${r?"":" not"} expired with margin of ${za}s`),r){if(this.autoRefreshToken&&s.refresh_token){const{error:a}=await this._callRefreshToken(s.refresh_token);a&&(console.error(a),Ha(a)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",a),await this._removeSession()))}}else if(s.user&&s.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(s.access_token);!o&&a?.user?(s.user=a.user,await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(n,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){this._debug(n,"error",s),console.error(s);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var t,n;if(!e)throw new en;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const s=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(s,"begin");try{this.refreshingDeferred=new Qr;const{data:r,error:a}=await this._refreshAccessToken(e);if(a)throw a;if(!r.session)throw new en;await this._saveSession(r.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",r.session);const o={data:r.session,error:null};return this.refreshingDeferred.resolve(o),o}catch(r){if(this._debug(s,"error",r),be(r)){const a={data:null,error:r};return Ha(r)||await this._removeSession(),(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(r),r}finally{this.refreshingDeferred=null,this._debug(s,"end")}}async _notifyAllSubscribers(e,t,n=!0){const s=`#_notifyAllSubscribers(${e})`;this._debug(s,"begin",t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});const r=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,t)}catch(l){r.push(l)}});if(await Promise.all(a),r.length>0){for(let o=0;o<r.length;o+=1)console.error(r[o]);throw r[0]}}finally{this._debug(s,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await Nt(this.storage,`${this.storageKey}-code-verifier`);const t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await Vi(this.userStorage,this.storageKey+"-user",{user:t.user});const s=Object.assign({},t);delete s.user;const r=hh(s);await Vi(this.storage,this.storageKey,r)}else{const s=hh(t);await Vi(this.storage,this.storageKey,s)}}async _removeSession(){this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await Nt(this.storage,this.storageKey),await Nt(this.storage,this.storageKey+"-code-verifier"),await Nt(this.storage,this.storageKey+"-user"),this.userStorage&&await Nt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Dt()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Hi);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((n.expires_at*1e3-e)/Hi);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${Hi}ms, refresh threshold is ${Xo} ticks`),s<=Xo&&await this._callRefreshToken(n.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof uu)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Dt()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){const s=[`provider=${encodeURIComponent(t)}`];if(n?.redirectTo&&s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n?.scopes&&s.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[r,a]=await Fi(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(r)}`,code_challenge_method:`${encodeURIComponent(a)}`});s.push(o.toString())}if(n?.queryParams){const r=new URLSearchParams(n.queryParams);s.push(r.toString())}return n?.skipBrowserRedirect&&s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${s.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var n;const{data:s,error:r}=t;return r?this._returnResult({data:null,error:r}):await Re(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(n=s?.session)===null||n===void 0?void 0:n.access_token})})}catch(t){if(be(t))return this._returnResult({data:null,error:t});throw t}}async _enroll(e){try{return await this._useSession(async t=>{var n,s;const{data:r,error:a}=t;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await Re(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(n=r?.session)===null||n===void 0?void 0:n.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((s=l?.totp)===null||s===void 0)&&s.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(t){if(be(t))return this._returnResult({data:null,error:t});throw t}}async _verify(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async t=>{var n;const{data:s,error:r}=t;if(r)return this._returnResult({data:null,error:r});const a=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?iy(e.webauthn.credential_response):sy(e.webauthn.credential_response)})}:{code:e.code}),{data:o,error:l}=await Re(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:a,headers:this.headers,jwt:(n=s?.session)===null||n===void 0?void 0:n.access_token});return l?this._returnResult({data:null,error:l}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),this._returnResult({data:o,error:l}))})}catch(t){if(be(t))return this._returnResult({data:null,error:t});throw t}})}async _challenge(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async t=>{var n;const{data:s,error:r}=t;if(r)return this._returnResult({data:null,error:r});const a=await Re(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(n=s?.session)===null||n===void 0?void 0:n.access_token});if(a.error)return a;const{data:o}=a;if(o.type!=="webauthn")return{data:o,error:null};switch(o.webauthn.type){case"create":return{data:Object.assign(Object.assign({},o),{webauthn:Object.assign(Object.assign({},o.webauthn),{credential_options:Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:ty(o.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},o),{webauthn:Object.assign(Object.assign({},o.webauthn),{credential_options:Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:ny(o.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(t){if(be(t))return this._returnResult({data:null,error:t});throw t}})}async _challengeAndVerify(e){const{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e;const{data:{user:t},error:n}=await this.getUser();if(n)return{data:null,error:n};const s={all:[],phone:[],totp:[],webauthn:[]};for(const r of(e=t?.factors)!==null&&e!==void 0?e:[])s.all.push(r),r.status==="verified"&&s[r.factor_type].push(r);return{data:s,error:null}}async _getAuthenticatorAssuranceLevel(e){var t,n,s,r;if(e)try{const{payload:f}=br(e);let g=null;f.aal&&(g=f.aal);let _=g;const{data:{user:m},error:p}=await this.getUser(e);if(p)return this._returnResult({data:null,error:p});((n=(t=m?.factors)===null||t===void 0?void 0:t.filter(E=>E.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(_="aal2");const S=f.amr||[];return{data:{currentLevel:g,nextLevel:_,currentAuthenticationMethods:S},error:null}}catch(f){if(be(f))return this._returnResult({data:null,error:f});throw f}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=br(a.access_token);let c=null;l.aal&&(c=l.aal);let h=c;((r=(s=a.user.factors)===null||s===void 0?void 0:s.filter(f=>f.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(h="aal2");const d=l.amr||[];return{data:{currentLevel:c,nextLevel:h,currentAuthenticationMethods:d},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{const{data:{session:n},error:s}=t;return s?this._returnResult({data:null,error:s}):n?await Re(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:r=>({data:r,error:null})}):this._returnResult({data:null,error:new en})})}catch(t){if(be(t))return this._returnResult({data:null,error:t});throw t}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{const{data:{session:s},error:r}=n;if(r)return this._returnResult({data:null,error:r});if(!s)return this._returnResult({data:null,error:new en});const a=await Re(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:s.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Dt()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(n){if(be(n))return this._returnResult({data:null,error:n});throw n}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{const{data:{session:s},error:r}=n;if(r)return this._returnResult({data:null,error:r});if(!s)return this._returnResult({data:null,error:new en});const a=await Re(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:s.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Dt()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(n){if(be(n))return this._returnResult({data:null,error:n});throw n}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await Re(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:s=>({data:s,error:null})}):this._returnResult({data:null,error:new en})})}catch(e){if(be(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{const{data:{session:n},error:s}=t;return s?this._returnResult({data:null,error:s}):n?(await Re(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new en})})}catch(t){if(be(t))return this._returnResult({data:null,error:t});throw t}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(o=>o.kid===e);if(n)return n;const s=Date.now();if(n=this.jwks.keys.find(o=>o.kid===e),n&&this.jwks_cached_at+dv>s)return n;const{data:r,error:a}=await Re(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!r.keys||r.keys.length===0||(this.jwks=r,this.jwks_cached_at=s,n=r.keys.find(o=>o.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){const{data:f,error:g}=await this.getSession();if(g||!f.session)return this._returnResult({data:null,error:g});n=f.session.access_token}const{header:s,payload:r,signature:a,raw:{header:o,payload:l}}=br(n);t?.allowExpired||Dv(r.exp);const c=!s.alg||s.alg.startsWith("HS")||!s.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(s.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){const{error:f}=await this.getUser(n);if(f)throw f;return{data:{claims:r,header:s,signature:a},error:null}}const h=Ov(s.alg),u=await crypto.subtle.importKey("jwk",c,h,!0,["verify"]);if(!await crypto.subtle.verify(h,u,a,Sv(`${o}.${l}`)))throw new Jo("Invalid JWT signature");return{data:{claims:r,header:s,signature:a},error:null}}catch(n){if(be(n))return this._returnResult({data:null,error:n});throw n}}}zs.nextInstanceID={};const fy=zs,py="2.93.3";let Ts="";typeof Deno<"u"?Ts="deno":typeof document<"u"?Ts="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Ts="react-native":Ts="node";const my={"X-Client-Info":`supabase-js-${Ts}/${py}`},gy={headers:my},_y={schema:"public"},vy={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},yy={};function Gs(i){"@babel/helpers - typeof";return Gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gs(i)}function xy(i,e){if(Gs(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(Gs(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Sy(i){var e=xy(i,"string");return Gs(e)=="symbol"?e:e+""}function Ey(i,e,t){return(e=Sy(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function _h(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable})),t.push.apply(t,n)}return t}function xt(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_h(Object(t),!0).forEach(function(n){Ey(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):_h(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}const by=i=>i?(...e)=>i(...e):(...e)=>fetch(...e),My=()=>Headers,wy=(i,e,t)=>{const n=by(t),s=My();return async(r,a)=>{var o;const l=(o=await e())!==null&&o!==void 0?o:i;let c=new s(a?.headers);return c.has("apikey")||c.set("apikey",i),c.has("Authorization")||c.set("Authorization",`Bearer ${l}`),n(r,xt(xt({},a),{},{headers:c}))}};function Ty(i){return i.endsWith("/")?i:i+"/"}function Ay(i,e){var t,n;const{db:s,auth:r,realtime:a,global:o}=i,{db:l,auth:c,realtime:h,global:u}=e,d={db:xt(xt({},l),s),auth:xt(xt({},c),r),realtime:xt(xt({},h),a),storage:{},global:xt(xt(xt({},u),o),{},{headers:xt(xt({},(t=u?.headers)!==null&&t!==void 0?t:{}),(n=o?.headers)!==null&&n!==void 0?n:{})}),accessToken:async()=>""};return i.accessToken?d.accessToken=i.accessToken:delete d.accessToken,d}function Ry(i){const e=i?.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Ty(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var Cy=class extends fy{constructor(i){super(i)}},Py=class{constructor(i,e,t){var n,s;this.supabaseUrl=i,this.supabaseKey=e;const r=Ry(i);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",r),this.storageUrl=new URL("storage/v1",r),this.functionsUrl=new URL("functions/v1",r);const a=`sb-${r.hostname.split(".")[0]}-auth-token`,o={db:_y,realtime:yy,auth:xt(xt({},vy),{},{storageKey:a}),global:gy},l=Ay(t??{},o);if(this.storageKey=(n=l.auth.storageKey)!==null&&n!==void 0?n:"",this.headers=(s=l.global.headers)!==null&&s!==void 0?s:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(h,u)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(u)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=wy(e,this._getAccessToken.bind(this),l.global.fetch),this.realtime=this._initRealtimeClient(xt({headers:this.headers,accessToken:this._getAccessToken.bind(this)},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(h=>this.realtime.setAuth(h)).catch(h=>console.warn("Failed to set initial Realtime auth token:",h)),this.rest=new p_(new URL("rest/v1",r).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch}),this.storage=new ov(this.storageUrl.href,this.headers,this.fetch,t?.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new c_(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(i){return this.rest.from(i)}schema(i){return this.rest.schema(i)}rpc(i,e={},t={head:!1,get:!1,count:void 0}){return this.rest.rpc(i,e,t)}channel(i,e={config:{}}){return this.realtime.channel(i,e)}getChannels(){return this.realtime.getChannels()}removeChannel(i){return this.realtime.removeChannel(i)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var i=this,e,t;if(i.accessToken)return await i.accessToken();const{data:n}=await i.auth.getSession();return(e=(t=n.session)===null||t===void 0?void 0:t.access_token)!==null&&e!==void 0?e:i.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:i,persistSession:e,detectSessionInUrl:t,storage:n,userStorage:s,storageKey:r,flowType:a,lock:o,debug:l,throwOnError:c},h,u){const d={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Cy({url:this.authUrl.href,headers:xt(xt({},d),h),storageKey:r,autoRefreshToken:i,persistSession:e,detectSessionInUrl:t,storage:n,userStorage:s,flowType:a,lock:o,debug:l,throwOnError:c,fetch:u,hasCustomAuthorizationHeader:Object.keys(this.headers).some(f=>f.toLowerCase()==="authorization")})}_initRealtimeClient(i){return new I_(this.realtimeUrl.href,xt(xt({},i),{},{params:xt(xt({},{apikey:this.supabaseKey}),i?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((i,e)=>{this._handleTokenChanged(i,"CLIENT",e?.access_token)})}_handleTokenChanged(i,e,t){(i==="TOKEN_REFRESHED"||i==="SIGNED_IN")&&this.changedAccessToken!==t?(this.changedAccessToken=t,this.realtime.setAuth(t)):i==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const Iy=(i,e,t)=>new Py(i,e,t);function Ly(){if(typeof window<"u")return!1;const i=globalThis.process;if(!i)return!1;const e=i.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=18:!1}Ly()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Ny="https://wrlwpzxltkmuxaexnrym.supabase.co",Dy="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndybHdwenhsdGttdXhhZXhucnltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxMTMxNTUsImV4cCI6MjA4NTY4OTE1NX0.VlQuu1tfBcIMeBd2uZPTFIEsVmgUCuYqZlHTSi9DPLo",Hr=Iy(Ny,Dy);async function Oy(i=10){const{data:e,error:t}=await Hr.from("leaderboard").select("*").order("score",{ascending:!1}).limit(i);return t?(console.error("Error fetching leaderboard:",t),[]):e||[]}async function Uy(i,e){const{error:t}=await Hr.from("leaderboard").insert([{name:i.toUpperCase().slice(0,10),score:e}]);return t?(console.error("Error submitting score:",t),!1):!0}class vh{channel=null;listeners=new Map;lastInputSend=0;lastStateSend=0;lastStateReceived=Date.now();connectionTimeout=5e3;pingInterval=null;playerId;roomCode="";isHost=!1;connected=!1;constructor(){this.playerId=this.generatePlayerId()}generatePlayerId(){return"p_"+Math.random().toString(36).substring(2,10)}generateRoomCode(){const e=["ACID","AGED","ARCH","AVID","BAKE","BAND","BARK","BARN","BASE","BATH","BEAD","BEAM","BEAN","BEAR","BEAT","BEEF","BELL","BELT","BEND","BIKE","BIRD","BITE","BLOW","BLUE","BLUR","BOAT","BOLD","BOLT","BOMB","BOND","BONE","BOOK","BOOM","BOOT","BOWL","BULK","BUMP","BURN","BURP","BUSY","BUZZ","CAFE","CAGE","CAKE","CALM","CAME","CAMP","CAPE","CARD","CART","CASH","CAST","CAVE","CHAP","CHEF","CHIP","CHOP","CITY","CLAM","CLAP","CLAW","CLAY","CLIP","CLUB","CLUE","COAL","COAT","CODE","COIL","COIN","COLD","CONE","COOK","COOL","COPY","CORD","CORE","CORK","CORN","COZY","CRAB","CREW","CROP","CROW","CUBE","CURL","CUTE","DARE","DARK","DART","DASH","DAWN","DEAL","DEAR","DECK","DEEP","DEER","DEMO","DESK","DICE","DIME","DINE","DIRT","DISH","DISK","DIVE","DOCK","DOME","DONE","DOOR","DOSE","DOVE","DOWN","DRAW","DRIP","DROP","DRUM","DUAL","DUCK","DUKE","DUNE","DUSK","DUST","EACH","EARN","EASE","EAST","EASY","ECHO","EDGE","EDIT","EPIC","EVEN","EVER","EXIT","FACE","FACT","FADE","FAIR","FAKE","FAME","FANG","FARM","FAST","FATE","FAWN","FERN","FILM","FIND","FINE","FIRE","FIRM","FISH","FIST","FLAG","FLAP","FLAT","FLAW","FLED","FLEW","FLIP","FLOW","FOAM","FOLD","FOLK","FOND","FONT","FOOD","FOOL","FORK","FORM","FORT","FOUL","FOUR","FREE","FROG","FROM","FUEL","FULL","FUND","FURY","FUSE","GAIN","GALE","GAME","GANG","GATE","GAVE","GAZE","GEAR","GIFT","GILD","GLAD","GLOW","GLUE","GOAT","GOLD","GOLF","GONE","GOOD","GRAB","GRAY","GREW","GRID","GRIM","GRIN","GRIP","GRIT","GROW","GULF","GUST","HACK","HAIL","HAIR","HALF","HALL","HALT","HAND","HANG","HARD","HARE","HARM","HARP","HASH","HAZE","HEAD","HEAL","HEAP","HEAT","HELD","HELM","HELP","HERB","HERD","HERE","HERO","HIGH","HIKE","HILL","HINT","HIVE","HOLD","HOLE","HOME","HOOD","HOOK","HOPE","HORN","HOST","HOWL","HUGE","HULL","HUNT","HYMN","ICON","IDEA","IDLE","INCH","INTO","IRON","ISLE","ITEM","JADE","JAIL","JAVA","JAZZ","JEDI","JEST","JIVE","JOIN","JOKE","JOLT","JUMP","JUNE","JURY","JUST","KEEN","KELP","KEPT","KICK","KIDS","KIND","KING","KITE","KNOB","KNOT","KNOW","LACE","LAID","LAKE","LAMB","LAMP","LAND","LANE","LARK","LAST","LATE","LAVA","LAWN","LEAD","LEAF","LEAN","LEAP","LEFT","LEND","LENS","LESS","LIFE","LIFT","LIKE","LIME","LIMP","LINE","LINK","LION","LIST","LIVE","LOAD","LOAF","LOAN","LOCK","LOFT","LOGO","LONG","LOOK","LOOP","LORD","LORE","LOST","LOUD","LOVE","LUCK","LUMP","LUNG","LURE","LYNX","MACE","MADE","MAIL","MAIN","MAKE","MALT","MANE","MANY","MAPS","MARE","MARK","MARS","MASH","MASK","MASS","MAST","MATE","MAZE","MEAL","MEAN","MEAT","MELD","MELT","MEMO","MENU","MESH","MILD","MILE","MILK","MILL","MIME","MIND","MINE","MINT","MIST","MOAT","MODE","MOLD","MOLE","MOOD","MOON","MOOR","MORE","MOSS","MOST","MOTH","MOVE","MUCH","MULE","MUSE","MUST","MYTH","NAIL","NAME","NAVY","NEAR","NEAT","NECK","NEED","NEST","NEWS","NEXT","NICE","NINE","NODE","NONE","NOON","NORM","NOSE","NOTE","NOUN","OAKS","OATH","ODDS","OMEN","ONCE","ONLY","ONTO","OPEN","ORCA","OVEN","OVER","OWLS","PACE","PACK","PAGE","PAID","PAIL","PAIR","PALE","PALM","PANE","PARK","PART","PASS","PAST","PATH","PAVE","PEAK","PEAR","PEEL","PIER","PIKE","PILE","PINE","PINK","PIPE","PLAN","PLAY","PLOT","PLOW","PLUM","PLUS","POEM","POET","POKE","POLE","POLO","POND","POOL","POPE","PORK","PORT","POSE","POST","POUR","PRAY","PROP","PULL","PULP","PUMP","PUNK","PURE","PUSH","QUIZ","RACE","RACK","RAFT","RAGE","RAID","RAIL","RAIN","RAKE","RAMP","RANG","RANK","RARE","RASH","RATE","RAVE","READ","REAL","REEF","REEL","RENT","REST","RICE","RICH","RIDE","RIFT","RIND","RING","RISE","RISK","ROAD","ROAM","ROAR","ROBE","ROCK","RODE","ROLE","ROLL","ROOF","ROOM","ROOT","ROPE","ROSE","RUIN","RULE","RUSH","RUST","SAFE","SAGE","SAID","SAIL","SAKE","SALE","SALT","SAME","SAND","SANE","SAVE","SEAL","SEAM","SEAT","SEED","SELF","SEND","SHED","SHIP","SHOP","SHOW","SHUT","SIDE","SIFT","SIGN","SILK","SINK","SITE","SIZE","SKIP","SLAM","SLAP","SLED","SLID","SLIM","SLIP","SLOT","SLOW","SLUG","SNAP","SNOW","SOAK","SOAR","SOCK","SOFT","SOIL","SOLD","SOLE","SOME","SONG","SOON","SORT","SOUL","SOUR","SPAN","SPAR","SPIN","SPIT","SPOT","STAR","STAY","STEM","STEP","STEW","STIR","STOP","STUD","SUCH","SUIT","SULK","SURE","SURF","SWAN","SWAP","SWIM","TABS","TACK","TAIL","TAKE","TALE","TALK","TALL","TAME","TANK","TAPE","TART","TASK","TAXI","TEAM","TEAR","TELL","TEND","TENT","TERM","TEST","TEXT","THAN","THAT","THEM","THEN","THEY","THIN","THIS","TICK","TIDE","TIDY","TIED","TIER","TILE","TILT","TIME","TINY","TIRE","TOAD","TOLL","TOMB","TONE","TOOK","TOOL","TOPS","TORE","TORN","TOUR","TOWN","TRAP","TRAY","TREE","TREK","TRIM","TRIP","TROT","TRUE","TUBE","TUCK","TUNA","TUNE","TURN","TUSK","TWIN","UNIT","UPON","URGE","USED","VALE","VANE","VARY","VASE","VAST","VEIL","VEIN","VENT","VERB","VERY","VEST","VIBE","VINE","VOID","VOLT","VOTE","VOWS","WADE","WAGE","WAIT","WAKE","WALK","WALL","WAND","WARD","WARM","WARN","WARP","WASH","WAVE","WAVY","WAXY","WEAK","WEAR","WEED","WEEK","WELL","WENT","WERE","WEST","WHAT","WHEN","WHOM","WIDE","WIFE","WILD","WILL","WILT","WIMP","WIND","WINE","WING","WINK","WIRE","WISE","WISH","WITH","WOKE","WOLF","WOOD","WOOL","WORD","WORE","WORK","WORM","WORN","WRAP","WREN","YARD","YARN","YEAR","YELL","YOUR","YURT","ZEAL","ZERO","ZEST","ZINC","ZONE","ZOOM"];return e[Math.floor(Math.random()*e.length)]}async createRoom(){return this.roomCode=this.generateRoomCode(),this.isHost=!0,await this.connectToChannel(),this.roomCode}async joinRoom(e){return this.roomCode=e.toUpperCase(),this.isHost=!1,await this.connectToChannel(),this.connected}async connectToChannel(){const e=`snake-mp-${this.roomCode}`;return this.channel=Hr.channel(e,{config:{broadcast:{self:!0},presence:{key:this.playerId}}}),this.channel.on("broadcast",{event:"lobby:join"},t=>this.emit("lobby:join",t.payload)).on("broadcast",{event:"lobby:state"},t=>this.emit("lobby:state",t.payload)).on("broadcast",{event:"lobby:start"},t=>this.emit("lobby:start",t.payload)).on("broadcast",{event:"lobby:leave"},t=>this.emit("lobby:leave",t.payload)).on("broadcast",{event:"input"},t=>this.emit("input",t.payload)).on("broadcast",{event:"state"},t=>{this.lastStateReceived=Date.now(),this.emit("state",t.payload)}),this.channel.on("presence",{event:"sync"},()=>{const t=this.channel.presenceState();this.emit("presence:sync",t)}).on("presence",{event:"join"},({key:t,newPresences:n})=>{this.emit("presence:join",{key:t,presences:n})}).on("presence",{event:"leave"},({key:t,leftPresences:n})=>{this.emit("presence:leave",{key:t,presences:n})}),new Promise(t=>{this.channel.subscribe(async n=>{n==="SUBSCRIBED"&&(this.connected=!0,await this.channel.track({playerId:this.playerId,joinedAt:Date.now()}),this.pingInterval=setInterval(()=>{Date.now()-this.lastStateReceived>this.connectionTimeout&&this.connected&&(console.warn("Connection timeout detected"),this.emit("connection:timeout",{}))},1e3),t())})})}sendBroadcast(e,t){!this.channel||!this.connected||this.channel.send({type:"broadcast",event:e,payload:t})}sendInput(e){const t=Date.now();t-this.lastInputSend<B0||(this.lastInputSend=t,this.sendBroadcast("input",e))}sendState(e){const t=Date.now();t-this.lastStateSend<z0||(this.lastStateSend=t,this.sendBroadcast("state",e))}sendLobbyJoin(e){this.sendBroadcast("lobby:join",e)}sendLobbyState(e){this.sendBroadcast("lobby:state",e)}sendLobbyStart(e){this.sendBroadcast("lobby:start",e)}sendLobbyLeave(){this.sendBroadcast("lobby:leave",{playerId:this.playerId})}on(e,t){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t)}off(e,t){const n=this.listeners.get(e);if(n){const s=n.indexOf(t);s>=0&&n.splice(s,1)}}emit(e,t){const n=this.listeners.get(e);if(n)for(const s of n)s(t)}getPresenceState(){return this.channel?this.channel.presenceState():{}}async disconnect(){this.pingInterval&&(clearInterval(this.pingInterval),this.pingInterval=null),this.channel&&(await this.channel.untrack(),Hr.removeChannel(this.channel),this.channel=null),this.connected=!1,this.listeners.clear()}}class yh{network;players=new Map;onPlayersChanged;onGameStart;onPlayerLeft;localName="PLAYER";constructor(e){this.network=e,this.setupListeners()}setupListeners(){this.network.on("lobby:join",e=>{this.network.isHost&&this.handleJoin(e.playerId,e.name)}),this.network.on("lobby:state",e=>{if(!this.network.isHost){this.players.clear();for(const t of e.players)this.players.set(t.id,t);this.notifyPlayersChanged()}}),this.network.on("lobby:start",e=>{this.onGameStart&&this.onGameStart(e)}),this.network.on("lobby:leave",e=>{this.network.isHost&&this.handleLeave(e.playerId)}),this.network.on("presence:leave",e=>{if(this.network.isHost&&e.presences)for(const t of e.presences)t.playerId&&t.playerId!==this.network.playerId&&this.handleLeave(t.playerId)})}async createRoom(e){this.localName=e.toUpperCase().slice(0,10)||"HOST";const t=await this.network.createRoom(),n={id:this.network.playerId,name:this.localName,colorIndex:0,isHost:!0,ready:!0};return this.players.set(this.network.playerId,n),this.broadcastLobbyState(),t}async joinRoom(e,t){return this.localName=t.toUpperCase().slice(0,10)||"PLAYER",await this.network.joinRoom(e)?(this.network.sendLobbyJoin({playerId:this.network.playerId,name:this.localName}),!0):!1}handleJoin(e,t){if(this.players.size>=G0||this.players.has(e))return;const n=this.getNextColorIndex(),s={id:e,name:t||"PLAYER",colorIndex:n,isHost:!1,ready:!1};this.players.set(e,s),this.broadcastLobbyState()}handleLeave(e){if(!this.players.has(e))return;this.players.delete(e);let t=0;for(const[,n]of this.players)n.colorIndex=t++;this.broadcastLobbyState(),this.onPlayerLeft&&this.onPlayerLeft(e)}getNextColorIndex(){const e=new Set;for(const[,t]of this.players)e.add(t.colorIndex);for(let t=0;t<_i.length;t++)if(!e.has(t))return t;return 0}broadcastLobbyState(){const e={players:Array.from(this.players.values()),roomCode:this.network.roomCode,hostId:this.network.playerId};this.network.sendLobbyState(e),this.notifyPlayersChanged()}notifyPlayersChanged(){this.onPlayersChanged&&this.onPlayersChanged(Array.from(this.players.values()))}startGame(){if(!this.network.isHost||this.players.size<2)return;const e=Math.floor(Math.random()*2147483647)+1,t=Array.from(this.players.keys()),n=this.generateSpawns(t,e),s={terrainSeed:e,spawns:n,playerOrder:t,countdownEndTime:Date.now()+3500};this.network.sendLobbyStart(s),this.onGameStart&&this.onGameStart(s)}generateSpawns(e,t){const n={},a=[];for(const o of e){let l=!1,c=0;for(;!l&&c<300;){const h=(Math.random()-.5)*200,u=(Math.random()-.5)*200,d=dt(h,u);if(d>-18&&d<10){let f=!1;for(const g of a){const _=h-g.x,m=u-g.z;if(_*_+m*m<2500){f=!0;break}}if(!f){let g=!1;for(let _=-20;_<=20;_+=5){for(let m=-20;m<=20;m+=5){const p=h+_,x=u+m,S=dt(p,x);if(Math.abs(S-d)>5){g=!0;break}}if(g)break}if(!g){const _=Math.random()*Math.PI*2;n[o]={x:h,z:u,angle:_},a.push({x:h,z:u}),l=!0}}}c++}if(!l){console.warn(`Could not find safe spawn for player ${o}, using fallback`);const h=e.indexOf(o)/e.length*Math.PI*2,u=60;n[o]={x:Math.cos(h)*u,z:Math.sin(h)*u,angle:h}}}return n}leaveRoom(){this.network.sendLobbyLeave(),this.players.clear()}getLocalPlayer(){return this.players.get(this.network.playerId)}getPlayerList(){return Array.from(this.players.values())}cleanup(){this.players.clear(),this.onPlayersChanged=void 0,this.onGameStart=void 0,this.onPlayerLeft=void 0}}class Fy{players=new Map;tick=0;pendingEvents=[];deathOrder=[];gameOver=!1;addPlayer(e,t,n){this.players.set(e,{snake:t,colorIndex:n,ep:Z.MAX_EP,maxEp:Z.MAX_EP,score:0,kills:0,alive:!0,lastInput:null,inputBuffer:[],lastAckedSeq:0})}removePlayer(e){const t=this.players.get(e);t&&(t.alive=!1,this.deathOrder.push(e),this.pendingEvents.push({type:"death",playerId:e,reason:"disconnect"}))}receiveInput(e){const t=this.players.get(e.playerId);!t||!t.alive||(t.inputBuffer.push(e),t.inputBuffer.length>3&&t.inputBuffer.shift())}simulate(e,t){for(const[n,s]of this.players){if(!s.alive)continue;if(s.inputBuffer.length>0&&(s.lastInput=s.inputBuffer.pop(),s.inputBuffer.length=0),s.lastInput){const a=s.lastInput.turn,o=s.lastInput.boost&&s.ep>0;s.snake.setInput(a,o),s.lastAckedSeq=s.lastInput.seq}s.snake.isBoosting?(s.ep=Math.max(0,s.ep-Z.EP_DRAIN_PER_SEC*e),s.ep<=0&&s.snake.setBoosting(!1)):s.snake.isStalled||(s.ep=Math.min(s.maxEp,s.ep+e*2)),s.snake.update(e,t)||(s.alive=!1,this.deathOrder.push(n),this.pendingEvents.push({type:"death",playerId:n,reason:"obstacle"}))}this.checkPvPCollisions(),this.tick++}checkPvPCollisions(){const e=[];for(const[n,s]of this.players)s.alive&&e.push([n,s]);const t=new Set;for(const[n,s]of e){if(t.has(n))continue;const r=s.snake.position;for(const[a,o]of e){if(n===a||t.has(a))continue;const c=o.snake.bodyMeshes.map(u=>u.position);if(Z0({x:r.x,y:r.y,z:r.z,radius:H0},c,V0,W0,Bc)>=0){s.alive=!1,o.kills++,t.add(n),this.deathOrder.push(n),this.pendingEvents.push({type:"death",playerId:n,killerId:a,reason:"pvp"});break}}}for(let n=0;n<e.length;n++){const[s,r]=e[n];if(!t.has(s))for(let a=n+1;a<e.length;a++){const[o,l]=e[a];if(t.has(o))continue;const c=r.snake.position,h=l.snake.position,u=c.x-h.x,d=c.z-h.z;if(u*u+d*d<zc*zc&&Math.abs(c.y-h.y)<Bc){const g=r.snake.bodyMeshes.length,_=l.snake.bodyMeshes.length;g>_?(l.alive=!1,r.kills++,t.add(o),this.deathOrder.push(o),this.pendingEvents.push({type:"death",playerId:o,killerId:s,reason:"pvp"})):_>g?(r.alive=!1,l.kills++,t.add(s),this.deathOrder.push(s),this.pendingEvents.push({type:"death",playerId:s,killerId:o,reason:"pvp"})):(r.alive=!1,l.alive=!1,t.add(s),t.add(o),this.deathOrder.push(s),this.deathOrder.push(o),this.pendingEvents.push({type:"death",playerId:s,killerId:o,reason:"pvp"}),this.pendingEvents.push({type:"death",playerId:o,killerId:s,reason:"pvp"}))}}}}checkGameEnd(){if(this.gameOver)return null;let e=0,t=null;for(const[r,a]of this.players)a.alive&&(e++,t=r);if(this.players.size<2||e>1)return null;this.gameOver=!0;const n=[];if(this.players.size,t){const r=this.players.get(t);n.push({playerId:t,name:"",score:r.score,kills:r.kills,placement:1})}let s=t?2:1;for(let r=this.deathOrder.length-1;r>=0;r--){const a=this.deathOrder[r];if(a===t||n.find(l=>l.playerId===a))continue;const o=this.players.get(a);n.push({playerId:a,name:"",score:o?.score??0,kills:o?.kills??0,placement:s}),s++}return{type:"game_over",rankings:n}}getPlayerKills(e){return this.players.get(e)?.kills??0}handleEat(e,t,n){const s=this.players.get(e);if(!s||!s.alive)return;s.score+=10,s.ep=Math.min(s.maxEp,s.ep+Z.EP_PER_APPLE),s.snake.growPending+=Z.GROWTH_PER_APPLE;const r=Math.min(Z.MAX_SPEED,s.snake.targetBaseSpeed+Z.SPEED_INCREMENT_PER_APPLE);s.snake.setBaseSpeed(r),this.pendingEvents.push({type:"eat",playerId:e,appleId:t,position:n})}getStatePayload(){const e=[];for(const[s,r]of this.players){const a=r.snake.serialize(s,r.lastAckedSeq);a.alive=r.alive,a.score=r.score,e.push(a)}const t=this.pendingEvents.splice(0),n={tick:this.tick,snakes:e,events:t};if(this.tick%5===0){const s={};for(const[r,a]of this.players)a.alive&&(s[r]=a.snake.getPathKeypoints(5));n.paths=s}return n}getAliveCount(){let e=0;for(const[,t]of this.players)t.alive&&e++;return e}getPlayerEp(e){const t=this.players.get(e);return t?{ep:t.ep,maxEp:t.maxEp}:null}getPlayerScore(e){return this.players.get(e)?.score??0}}const ky=.3;function By(i){return Math.max(5,Math.min(30,i*.15))}class zy{snake;pendingInputs=[];constructor(e){this.snake=e}addInput(e){this.pendingInputs.push(e)}predict(e,t){this.snake.update(e,t)}reconcile(e){this.pendingInputs=this.pendingInputs.filter(l=>l.seq>e.lastProcessedSeq);const t=this.snake.position.x-e.x,n=this.snake.position.z-e.z,s=Math.sqrt(t*t+n*n),r=By(e.speed);if(s>r)this.snake.position.set(e.x,e.y,e.z),this.snake.angle=e.angle,this.snake.actualSpeed=e.speed,this.snake.verticalVelocity=e.vy;else if(s>.1){const l=ky;this.snake.position.x+=(e.x-this.snake.position.x)*l,this.snake.position.y+=(e.y-this.snake.position.y)*l,this.snake.position.z+=(e.z-this.snake.position.z)*l;const c=bl(e.angle-this.snake.angle);this.snake.angle+=c*l,this.snake.actualSpeed+=(e.speed-this.snake.actualSpeed)*l,this.snake.verticalVelocity+=(e.vy-this.snake.verticalVelocity)*l}for(;this.snake.bodyMeshes.length<e.segmentCount;)this.snake.addSegment(!1);this.snake.isBoosting=e.isBoosting,(this.snake.path.length===0||this.snake.position.distanceTo(this.snake.path[0])>=.2)&&this.snake.path.unshift(this.snake.position.clone());const o=50+this.snake.bodyMeshes.length*20;this.snake.path.length>o&&(this.snake.path.length=o)}reset(){this.pendingInputs=[]}}const Gy=100,Hy=500,Vy=20;class Wy{buffer=[];pushState(e,t){this.buffer.push({state:e,timestamp:t}),this.buffer.length>Vy&&this.buffer.shift()}getInterpolatedState(e){if(this.buffer.length===0)return null;const t=e-Gy;let n=null,s=null;for(let r=0;r<this.buffer.length;r++)if(this.buffer[r].timestamp<=t)n=this.buffer[r];else{s=this.buffer[r];break}if(n&&s){const r=s.timestamp-n.timestamp,a=r>0?(t-n.timestamp)/r:0;return this.lerpState(n.state,s.state,Math.max(0,Math.min(1,a)))}if(n&&!s){const r=t-n.timestamp;return r>Hy?n.state:this.extrapolate(n.state,r/1e3)}return!n&&s?s.state:null}lerpState(e,t,n){const s=bl(t.angle-e.angle);return{...t,x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:e.z+(t.z-e.z)*n,angle:e.angle+s*n,speed:e.speed+(t.speed-e.speed)*n,vy:e.vy+(t.vy-e.vy)*n}}extrapolate(e,t){return{...e,x:e.x+Math.cos(e.angle)*e.speed*t,y:e.y+e.vy*t,z:e.z+Math.sin(e.angle)*e.speed*t}}reset(){this.buffer=[]}}const Ir={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class cs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $y=new qr(-1,1,1,-1,0,1);class jy extends Ft{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}}const qy=new jy;class Tl{constructor(e){this._mesh=new St(qy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$y)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Xy extends cs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gi.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Tl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xh extends cs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Ky extends cs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Yy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Le);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xy(Ir),this.copyPass.material.blending=En,this.clock=new Gd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xh!==void 0&&(a instanceof xh?n=!0:a instanceof Ky&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jy extends cs{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ve}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const Zy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ts extends cs{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,a,{type:sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Wt(r,a,{type:sn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Wt(r,a,{type:sn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=Zy;this.highPassUniforms=gi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Le(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gi.clone(Ir.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader,premultipliedAlpha:!0,blending:Lr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ve,this._oldClearAlpha=1,this._basic=new ml,this._fsQuad=new Tl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ts.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ts.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new Lt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ts.BlurDirectionX=new Le(1,0);ts.BlurDirectionY=new Le(0,1);const Mr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Qy extends cs{constructor(){super(),this.isOutputPass=!0,this.uniforms=gi.clone(Mr.uniforms),this.material=new Wh({name:Mr.name,uniforms:this.uniforms,vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader}),this._fsQuad=new Tl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===Ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===el?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===il?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ex extends St{constructor(e,t={}){super(e),this.isWater=!0;const n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new C(.70707,.70707,0),u=new ve(t.sunColor!==void 0?t.sunColor:16777215),d=new ve(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new C(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,_=t.side!==void 0?t.side:Mn,m=t.fog!==void 0?t.fog:!1,p=new jn,x=new C,S=new C,E=new C,w=new Je,T=new C(0,0,-1),A=new mt,I=new C,y=new C,M=new mt,P=new Je,U=new Xt,k=new Wt(s,r),$={name:"MirrorShader",uniforms:gi.merge([le.fog,le.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Je},sunColor:{value:new ve(8355711)},sunDirection:{value:new C(.70707,.70707,0)},eye:{value:new C},waterColor:{value:new ve(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},V=new Lt({name:$.name,uniforms:gi.clone($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,lights:!0,side:_,fog:m});V.uniforms.mirrorSampler.value=k.texture,V.uniforms.textureMatrix.value=P,V.uniforms.alpha.value=o,V.uniforms.time.value=l,V.uniforms.normalSampler.value=c,V.uniforms.sunColor.value=u,V.uniforms.waterColor.value=d,V.uniforms.sunDirection.value=h,V.uniforms.distortionScale.value=g,V.uniforms.eye.value=f,n.material=V,n.onBeforeRender=function(z,G,K){if(S.setFromMatrixPosition(n.matrixWorld),E.setFromMatrixPosition(K.matrixWorld),w.extractRotation(n.matrixWorld),x.set(0,0,1),x.applyMatrix4(w),I.subVectors(S,E),I.dot(x)>0)return;I.reflect(x).negate(),I.add(S),w.extractRotation(K.matrixWorld),T.set(0,0,-1),T.applyMatrix4(w),T.add(E),y.subVectors(S,T),y.reflect(x).negate(),y.add(S),U.position.copy(I),U.up.set(0,1,0),U.up.applyMatrix4(w),U.up.reflect(x),U.lookAt(y),U.far=K.far,U.updateMatrixWorld(),U.projectionMatrix.copy(K.projectionMatrix),P.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),P.multiply(U.projectionMatrix),P.multiply(U.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(x,S),p.applyMatrix4(U.matrixWorldInverse),A.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const ne=U.projectionMatrix;M.x=(Math.sign(A.x)+ne.elements[8])/ne.elements[0],M.y=(Math.sign(A.y)+ne.elements[9])/ne.elements[5],M.z=-1,M.w=(1+ne.elements[10])/ne.elements[14],A.multiplyScalar(2/A.dot(M)),ne.elements[2]=A.x,ne.elements[6]=A.y,ne.elements[10]=A.z+1-a,ne.elements[14]=A.w,f.setFromMatrixPosition(K.matrixWorld);const ae=z.getRenderTarget(),de=z.xr.enabled,ke=z.shadowMap.autoUpdate;n.visible=!1,z.xr.enabled=!1,z.shadowMap.autoUpdate=!1,z.setRenderTarget(k),z.state.buffers.depth.setMask(!0),z.autoClear===!1&&z.clear(),z.render(G,U),n.visible=!0,z.xr.enabled=de,z.shadowMap.autoUpdate=ke,z.setRenderTarget(ae);const Oe=K.viewport;Oe!==void 0&&z.state.viewport(Oe)}}}function tx(i){return{name:i.name,colors:{...i.colors},bloom:{...i.bloom},fog:{...i.fog}}}class nx{particles;constructor(e){const n=new Ft,s=[];for(let a=0;a<300;a++)s.push((Math.random()-.5)*60,(Math.random()-.5)*60,(Math.random()-.5)*60);n.setAttribute("position",new gt(s,3));const r=new _l({color:16777215,size:.15,transparent:!0,opacity:.6});this.particles=new Hh(n,r),e.add(this.particles)}update(e){this.particles.position.copy(e),this.particles.rotation.y+=5e-4,this.particles.rotation.z+=2e-4}}class ix{scene;camera;renderer;composer;snake;world;appleManager;ui;audio;dust;burstSystem;hemiLight;bloomPass;targetPalette;visualPalette;state=tt.MENU;score=0;ep=0;maxEp=Z.MAX_EP;lastTime=0;keys={left:!1,right:!1,boost:!1};cameraLookAtCurrent=new C;cameraAngle=0;cameraHeightOffset=18;_tempVec3=new C;_tempColor1=new ve;_tempColor2=new ve;_underwaterClearColor=new ve(4386);_defaultClearColor=new ve(0);sunLight;water;skyMesh;underwaterOverlay;lastRippleTime=0;lastTrailPosition=new C;dayTime=0;isMobile=!1;scoreSubmitted=!1;mode="singleplayer";isHost=!1;networkManager=null;lobbyManager=null;hostSimulation=null;multiplayerSnakes=new Map;localPlayerId="";pendingStartPayload=null;inputSeq=0;clientPredictor=null;remoteInterpolators=new Map;spectatingPlayerId=null;hostPlayerId="";playerNames=new Map;nameLabelManager=null;countdownActive=!1;countdownEndTime=0;deathAnimations=new Map;alivePlayers=new Set;constructor(){this.isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.matchMedia("(max-width: 768px)").matches,this.audio=new s_,this.targetPalette=ht,this.visualPalette=tx(ht),this.scene=new Td,this.createSky(),this.createWater(),this.scene.fog=new Ur(ht.colors.FOG,ht.fog.near,ht.fog.far),this.camera=new Xt(55,window.innerWidth/window.innerHeight,.1,1e3);const e=window.devicePixelRatio,t=Math.min(e,1.5);this.renderer=new k0({antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!0}),this.renderer.setPixelRatio(t),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!this.isMobile,this.renderer.shadowMap.type=As,this.renderer.toneMapping=Vr,this.renderer.toneMappingExposure=.6,document.body.appendChild(this.renderer.domElement),this.composer=new Yy(this.renderer);const n=new Jy(this.scene,this.camera);this.composer.addPass(n),this.isMobile||(this.bloomPass=new ts(new Le(window.innerWidth,window.innerHeight),ht.bloom.strength,ht.bloom.radius,ht.bloom.threshold),this.composer.addPass(this.bloomPass));const s=new Qy;this.composer.addPass(s),this.ui=new Rs,this.ui.onStartClick=()=>{this.audio.resumeContext().then(()=>{this.audio.startMusic(),this.startGame()})},this.ui.onRestartClick=()=>{this.audio.startMusic(),this.startGame()},this.ui.onScoreSubmit=async o=>{if(this.scoreSubmitted)return;this.ui.setSubmitButtonState(!0),await Uy(o,this.score)&&(this.scoreSubmitted=!0,this.ui.hideSubmitForm(),await this.loadLeaderboard()),this.ui.setSubmitButtonState(!1)},this.ui.onCreateGame=o=>{this.audio.resumeContext(),this.createMultiplayerRoom(o)},this.ui.onJoinGame=(o,l)=>{this.audio.resumeContext(),this.joinMultiplayerRoom(o,l)},this.ui.onLobbyStart=()=>{this.lobbyManager&&this.lobbyManager.startGame()},this.ui.onLobbyLeave=()=>{this.leaveMultiplayerRoom()},this.ui.onMpPlayAgain=()=>{this.ui.hideMpResults(),this.ui.hideSpectator(),this.ui.clearKillFeed(),this.hostSimulation=null,this.clientPredictor=null,this.remoteInterpolators.clear(),this.spectatingPlayerId=null,this.alivePlayers.clear(),this.nameLabelManager?.destroy(),this.nameLabelManager=null;for(const[o,l]of this.multiplayerSnakes)o!==this.localPlayerId&&l.mesh.parent?.remove(l.mesh);this.multiplayerSnakes.clear(),this.networkManager?.connected&&this.lobbyManager?(this.state=tt.LOBBY,this.ui.showLobby(this.networkManager.roomCode,this.networkManager.isHost),this.ui.updateLobbyPlayers(this.lobbyManager.getPlayerList())):(this.state=tt.MENU,this.ui.showMenu())},this.ui.onSpectateNext=()=>{this.spectateNextPlayer()},this.ui.onHostDisconnectReturn=()=>{this.leaveMultiplayerRoom()},this.loadLeaderboard(),this.hemiLight=new Od(this.visualPalette.colors.SKY_TOP,this.visualPalette.colors.GROUND_BASE,.4),this.scene.add(this.hemiLight),this.sunLight=new Bd(16769202,.7),this.sunLight.position.set(50,100,50),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.bias=-5e-4;const r=80;this.sunLight.shadow.camera.left=-r,this.sunLight.shadow.camera.right=r,this.sunLight.shadow.camera.top=r,this.sunLight.shadow.camera.bottom=-r,this.scene.add(this.sunLight),this.world=new n_(this.scene,this.isMobile),this.burstSystem=new r_(this.scene,this.isMobile?200:500),this.snake=new jc(this.scene),this.snake.onBoostStart=()=>{this.audio.playBoostStart();const o=this.isMobile?15:30;this.burstSystem.emitBoostBurst(this.snake.position,o)},this.snake.onCrash=()=>this.gameOver(),this.snake.onLand=o=>{this.burstSystem.emit(this.snake.position,Math.floor(o*.5),this.visualPalette.colors.GROUND_BASE)},this.snake.onEnterWater=()=>{this.burstSystem.emitBubbles(this.snake.position,40),this.audio.playWaterSplash(),this.audio.startWaterSound()},this.snake.onExitWater=()=>{this.burstSystem.emit(this.snake.position,20,16777215),this.audio.playWaterSplash(),this.audio.stopWaterSound()},this.snake.onBreak=o=>{this.burstSystem.emitRockPieces(o,30),this.audio.playImpact()},this.appleManager=new _r(this.scene,()=>[{id:"local",position:this.snake.bodyMeshes[0].position}],!0),this.appleManager.onEat=o=>{this.audio.playEat(),this.burstSystem.emit(o,15,this.visualPalette.colors.APPLE)},this.dust=new nx(this.scene),this.createUnderwaterOverlay(),window.addEventListener("keydown",o=>this.handleKey(o,!0)),window.addEventListener("keyup",o=>this.handleKey(o,!1)),window.addEventListener("resize",()=>this.onWindowResize());const a=this.renderer.domElement;a.addEventListener("touchstart",o=>this.handleTouch(o),{passive:!1}),a.addEventListener("touchmove",o=>this.handleTouch(o),{passive:!1}),a.addEventListener("touchend",o=>this.handleTouch(o),{passive:!1}),a.addEventListener("pointerdown",o=>this.handleSpectatorPointer(o)),this.renderer.setAnimationLoop(o=>this.animate(o))}createSky(){const e=`
        varying vec3 vWorldPosition;
        void main() {
            vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `,t=`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
            float h = normalize( vWorldPosition + offset ).y;
            float val = max( pow( max( h , 0.0), exponent ), 0.0 );
            vec3 col;
            if (val < 0.5) {
                col = mix(bottomColor, midColor, val * 2.0);
            } else {
                col = mix(midColor, topColor, (val - 0.5) * 2.0);
            }
            gl_FragColor = vec4( col, 1.0 );
        }
      `,n={topColor:{value:new ve(this.visualPalette.colors.SKY_TOP)},midColor:{value:new ve(this.visualPalette.colors.SKY_MID)},bottomColor:{value:new ve(this.visualPalette.colors.SKY_BOTTOM)},offset:{value:20},exponent:{value:.6}},s=new jr(600,32,15),r=new Lt({vertexShader:e,fragmentShader:t,uniforms:n,side:Vt,fog:!1});this.skyMesh=new St(s,r),this.skyMesh.matrixAutoUpdate=!1,this.skyMesh.updateMatrix(),this.scene.add(this.skyMesh)}async loadLeaderboard(){const e=await Oy(10);this.ui.updateLeaderboard(e)}startGame(){this.keys={left:!1,right:!1,boost:!1},this.score=0,this.ep=Z.MAX_EP,this.dayTime=0,this.scoreSubmitted=!1,this.ui.resetNameInput(),this.ui.showSubmitForm(),Go(),this.audio.stopWaterSound(),this.ui.updateScore(0),this.ui.updateEp(this.ep,this.maxEp),this.state=tt.PLAYING,this.ui.hideMenu(),this.ui.hideGameOver(),this.world.reset(),this.snake.reset(Z.BASE_SNAKE_SPEED),this.appleManager.reset(),this.burstSystem.reset(),this.world.ensureInitialChunks(this.snake.position.x,this.snake.position.z);for(let t=0;t<5;t++){const n=this.world.getRandomTree();n&&this.appleManager.spawnApple(n)}const e=this.snake.bodyMeshes[0].position.clone();this.cameraLookAtCurrent.copy(e),this.cameraAngle=this.snake.angle}handleKey(e,t){if(this.state===tt.SPECTATING&&t)switch(e.key){case"Tab":case"ArrowRight":case"d":case"D":e.preventDefault(),this.spectateNextPlayer(1);return;case"ArrowLeft":case"a":case"A":e.preventDefault(),this.spectateNextPlayer(-1);return}if(this.state===tt.PLAYING&&!this.countdownActive)switch(e.key){case"ArrowLeft":case"a":case"A":this.keys.left=t;break;case"ArrowRight":case"d":case"D":this.keys.right=t;break;case" ":case"Spacebar":e.preventDefault(),this.keys.boost=t;break;case"1":t&&this.setSeason(ht);break;case"2":t&&this.setSeason(Uc);break;case"3":t&&this.setSeason(Fc);break;case"4":t&&this.setSeason(kc);break}}setSeason(e){this.targetPalette=e}handleTouch(e){if(this.state!==tt.PLAYING||this.countdownActive)return;e.preventDefault(),this.keys.left=!1,this.keys.right=!1,this.keys.boost=!1;const t=window.innerWidth/2;for(let n=0;n<e.touches.length;n++)e.touches[n].clientX<t?this.keys.left=!0:this.keys.right=!0;e.touches.length>=2&&(this.keys.boost=!0)}handleSpectatorPointer(e){if(this.state!==tt.SPECTATING)return;const t=window.innerWidth/2;e.clientX<t?this.spectateNextPlayer(-1):this.spectateNextPlayer(1)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}animate(e){const t=Math.min((e-this.lastTime)/1e3,.1);if(this.lastTime=e,this.state===tt.PLAYING||this.state===tt.SPECTATING)this.state===tt.PLAYING?this.updatePhysics(t):this.updatePhysicsSpectating(t),this.updateVisuals(t),this.water&&(this.water.material.uniforms.time.value+=t*.5);else if(this.state===tt.GAME_OVER||this.state===tt.MENU||this.state===tt.LOBBY){const n=(e||0)*1e-4;this.camera.position.x=Math.cos(n)*60,this.camera.position.z=Math.sin(n)*60,this.camera.position.y=40,this.camera.lookAt(0,0,0)}try{this.composer.render()}catch{this.renderer.render(this.scene,this.camera)}}updatePhysics(e){this.mode==="multiplayer"?this.updatePhysicsMultiplayer(e):this.updatePhysicsSingleplayer(e)}updatePhysicsSingleplayer(e){this.dayTime+=e*.05,this.sunLight.position.x=this.snake.position.x+50,this.sunLight.position.z=this.snake.position.z+50;const t=(this.keys.right?1:0)-(this.keys.left?1:0);this.snake.setTurn(t),this.keys.boost&&this.ep>0?(this.snake.setBoosting(!0),this.ep=Math.max(0,this.ep-Z.EP_DRAIN_PER_SEC*e)):(this.snake.setBoosting(!1),!this.keys.boost&&!this.snake.isStalled&&(this.ep=Math.min(this.maxEp,this.ep+e*2))),this.ui.updateEp(this.ep,this.maxEp),this.world.update(this.snake.position.x,this.snake.position.z),this.water&&this.water.material.uniforms.sunDirection.value.copy(this.sunLight.position).normalize();const n=this.world.getObstacles();this.snake.update(e,n)||(this.mode==="singleplayer"||this.isHost)&&this.gameOver();const r=this.appleManager.update(e);for(const a of r){this.score+=10,this.ui.updateScore(this.score),this.ep=Math.min(this.maxEp,this.ep+Z.EP_PER_APPLE),this.ui.updateEp(this.ep,this.maxEp),this.snake.growPending+=Z.GROWTH_PER_APPLE;const o=Math.min(Z.MAX_SPEED,this.snake.targetBaseSpeed+Z.SPEED_INCREMENT_PER_APPLE);this.snake.setBaseSpeed(o)}if(this.appleManager.activeApples.length<Z.MAX_APPLES&&Math.random()<Z.SPAWN_CHANCE){const a=this.world.getRandomTree();a&&this.appleManager.spawnApple(a)}this.burstSystem.update(e)}updatePhysicsMultiplayer(e){if(this.dayTime+=e*.05,this.sunLight.position.x=this.snake.position.x+50,this.sunLight.position.z=this.snake.position.z+50,this.world.update(this.snake.position.x,this.snake.position.z),this.water&&this.water.material.uniforms.sunDirection.value.copy(this.sunLight.position).normalize(),this.countdownActive)if(Date.now()>=this.countdownEndTime)this.countdownActive=!1;else{this.burstSystem.update(e);return}const t=(this.keys.right?1:0)-(this.keys.left?1:0),n=this.keys.boost,s={playerId:this.localPlayerId,seq:this.inputSeq++,turn:t,boost:n};if(this.networkManager&&this.networkManager.sendInput(s),!this.isHost&&this.clientPredictor){this.clientPredictor.addInput(s),this.snake.setInput(t,n);const r=this.world.getObstacles();this.clientPredictor.predict(e,r)}if(!this.isHost){const r=performance.now();for(const[a,o]of this.remoteInterpolators){if(a===this.localPlayerId)continue;const l=this.multiplayerSnakes.get(a);if(!l||!l.mesh.visible)continue;const c=o.getInterpolatedState(r);c&&l.applyNetState(c)}}if(this.isHost&&this.hostSimulation){this.hostSimulation.receiveInput(s);const r=this.world.getObstacles();this.hostSimulation.simulate(e,r);const a=this.appleManager.update(e);for(const h of a)this.hostSimulation.handleEat(h.playerId,h.appleId,{x:h.position.x,y:h.position.y,z:h.position.z});if(this.appleManager.activeApples.length<Z.MAX_APPLES&&Math.random()<Z.SPAWN_CHANCE){const h=this.world.getRandomTree();if(h){const u=this.appleManager.spawnApple(h);if(u){const d=this.appleManager.getAppleById(u);d&&this.hostSimulation.pendingEvents.push({type:"apple_spawn",appleId:u,x:d.mesh.position.x,y:d.mesh.position.y,z:d.mesh.position.z})}}}const o=this.hostSimulation.checkGameEnd();if(o&&o.type==="game_over"){const h=this.lobbyManager?.getPlayerList()||[];for(const u of o.rankings){const d=h.find(f=>f.id===u.playerId);u.name=d?.name||"UNKNOWN"}this.hostSimulation.pendingEvents.push(o)}const l=this.hostSimulation.getStatePayload();this.networkManager?.sendState(l);const c=this.hostSimulation.getPlayerEp(this.localPlayerId);c&&(this.ep=c.ep,this.maxEp=c.maxEp),this.ui.updateEp(this.ep,this.maxEp),this.score=this.hostSimulation.getPlayerScore(this.localPlayerId),this.ui.updateScore(this.score)}this.burstSystem.update(e)}handleStateUpdate(e){const t=performance.now();for(const n of e.snakes){const s=this.multiplayerSnakes.get(n.playerId);if(s){if(n.playerId===this.localPlayerId)this.clientPredictor?this.clientPredictor.reconcile(n):s.applyNetState(n),n.alive&&!s.isAlive()&&s.revive(),this.score=n.score,this.ui.updateScore(this.score);else{const r=this.remoteInterpolators.get(n.playerId);r?r.pushState(n,t):s.applyNetState(n)}n.alive?this.alivePlayers.add(n.playerId):(this.alivePlayers.delete(n.playerId),s.hide(),n.playerId===this.localPlayerId&&(this.audio.playCrash(),this.burstSystem.emit(s.position,30,16728193)))}}if(e.paths)for(const[n,s]of Object.entries(e.paths)){if(n===this.localPlayerId)continue;const r=this.multiplayerSnakes.get(n);r&&r.applyPathKeypoints(s)}for(const n of e.events)this.handleGameEvent(n)}handleGameEvent(e){switch(e.type){case"eat":{this.appleManager.removeAppleFromNet(e.appleId);const t=new C(e.position.x,e.position.y,e.position.z);this.audio.playEat(),this.burstSystem.emit(t,15,this.visualPalette.colors.APPLE);break}case"apple_spawn":{this.appleManager.addAppleFromNet(e.appleId,e.x,e.y,e.z);break}case"apple_despawn":{this.appleManager.removeAppleFromNet(e.appleId);break}case"death":{const t=this.multiplayerSnakes.get(e.playerId);t&&(this.audio.playCrash(),this.burstSystem.emit(t.position,30,16728193),this.animateSnakeDeath(t));const n=this.playerNames.get(e.playerId)||"UNKNOWN";if(e.reason==="disconnect")this.ui.addKillFeedEntry(`${n} DISCONNECTED`,"#888888");else if(e.killerId){const s=this.playerNames.get(e.killerId)||"UNKNOWN";this.ui.addKillFeedEntry(`${s} SEVERED ${n}`)}else this.ui.addKillFeedEntry(`${n} SEVERED (${e.reason})`);this.nameLabelManager?.removeLabel(e.playerId),this.alivePlayers.delete(e.playerId),e.playerId===this.localPlayerId&&this.mode==="multiplayer"&&this.enterSpectatorMode(),this.state===tt.SPECTATING&&this.spectatingPlayerId===e.playerId&&this.spectateNextPlayer();break}case"game_over":{this.state=tt.GAME_OVER,this.audio.stopMusic(),this.audio.stopWaterSound(),this.ui.hideSpectator(),this.nameLabelManager?.hide(),this.ui.showMpResults(e.rankings);break}}}animateSnakeDeath(e){this.deathAnimations.set(e,{startTime:Date.now()})}updateVisuals(e){if(this.updateSeason(e),this.mode==="multiplayer")for(const[,t]of this.multiplayerSnakes)t.updateBodyVisuals();else this.snake.updateBodyVisuals();this.snake.invulnerableTimer>0?this.ui.showInvulnerabilityCountdown(this.snake.invulnerableTimer):this.ui.showInvulnerabilityCountdown(0);for(const[t,n]of this.deathAnimations){const s=(Date.now()-n.startTime)/1e3;if(s<1){t.mesh.position.y-=2*e;const r=1-s;t.mesh.traverse(a=>{if(a instanceof St&&a.material){const o=a.material;o.transparent=!0,o.opacity=r}})}else t.mesh.visible=!1,this.deathAnimations.delete(t)}if(this.updateCamera(e),this.dust.update(this.camera.position),this.state===tt.PLAYING?(this.updateUnderwaterEffects(),this.ui.updateAir(this.snake.airTimer,Z.MAX_AIR_TIME,this.snake.isUnderwater)):this.state===tt.SPECTATING&&(this.underwaterOverlay.style.opacity="0",this.renderer.setClearColor(this._defaultClearColor,1),this.ui.updateAir(Z.MAX_AIR_TIME,Z.MAX_AIR_TIME,!1)),this.snake.isUnderwater||this.snake.isSkimming){this.audio.updateWaterSound(this.snake.actualSpeed),Math.random()<.1&&this.burstSystem.emitBubbles(this.snake.position.clone().add(new C((Math.random()-.5)*2,(Math.random()-.5)*1,(Math.random()-.5)*2)),1),this._tempVec3.set(Math.cos(this.snake.angle),0,Math.sin(this.snake.angle)),Math.random()<.4&&this.burstSystem.emitWaterTrail(this.snake.position,this._tempVec3,this.snake.actualSpeed);const t=this.lastTime/1e3;t-this.lastRippleTime>.15&&(this.burstSystem.emitRipples(this.snake.position,16),this.lastRippleTime=t)}else this.audio.isWaterSoundPlaying&&this.audio.stopWaterSound();if(this.snake.isBoosting&&(this._tempVec3.set(Math.cos(this.snake.angle),0,Math.sin(this.snake.angle)),(!this.isMobile||Math.random()<.5)&&this.burstSystem.emitBoostTrail(this.snake.position,this._tempVec3,this.snake.actualSpeed,this.lastTime/1e3)),this.mode==="multiplayer"){for(const[t,n]of this.multiplayerSnakes)t!==this.localPlayerId&&n.isBoosting&&(this._tempVec3.set(Math.cos(n.angle),0,Math.sin(n.angle)),Math.random()<.3&&this.burstSystem.emitBoostTrail(n.position,this._tempVec3,n.actualSpeed,this.lastTime/1e3));if(this.nameLabelManager){const t=[],n=window.innerWidth/2,s=window.innerHeight/2;for(const[r,a]of this.multiplayerSnakes){if(!a.mesh.visible||a.bodyMeshes.length===0){t.push({playerId:r,screenX:0,screenY:0,visible:!1,distance:0});continue}if(this._tempVec3.copy(a.bodyMeshes[0].position),this._tempVec3.y+=3,this._tempVec3.project(this.camera),this._tempVec3.z>1){t.push({playerId:r,screenX:0,screenY:0,visible:!1,distance:0});continue}const o=this._tempVec3.x*n+n,l=-(this._tempVec3.y*s)+s,c=this.camera.position.distanceTo(a.bodyMeshes[0].position);t.push({playerId:r,screenX:o,screenY:l,visible:!0,distance:c})}this.nameLabelManager.update(t)}}}updateCamera(e){let t=this.snake;if(this.state===tt.SPECTATING&&this.spectatingPlayerId){const x=this.multiplayerSnakes.get(this.spectatingPlayerId);x&&x.mesh.visible&&(t=x)}if(!t.bodyMeshes.length)return;const s=t.bodyMeshes[0].position,r=t.angle,a=bl(r-this.cameraAngle);isNaN(a)?this.cameraAngle=r:this.cameraAngle+=a*(1.2*e),isNaN(this.cameraAngle)&&(this.cameraAngle=0);const o=t.actualSpeed/t.targetBaseSpeed,c=28*Math.max(1,Math.min(1.4,o*.8)),h=18+Math.max(0,(s.y-Z.WATER_LEVEL)*.2);this.cameraHeightOffset+=(h-this.cameraHeightOffset)*e*2;const u=s.x-Math.cos(this.cameraAngle)*c,d=s.z-Math.sin(this.cameraAngle)*c,f=dt(u,d),g=Math.max(f+5,s.y+this.cameraHeightOffset);this._tempVec3.set(u,g,d),this.camera.position.lerp(this._tempVec3,3*e);const _=12,m=s.x+Math.cos(this.cameraAngle)*_,p=s.z+Math.sin(this.cameraAngle)*_;this._tempVec3.set(m,s.y,p),this.cameraLookAtCurrent.lerp(this._tempVec3,4*e),this.camera.lookAt(this.cameraLookAtCurrent),this.sunLight.target.position.copy(s),this.skyMesh.position.copy(s),this.water&&(this.water.position.x=s.x,this.water.position.z=s.z)}createUnderwaterOverlay(){this.underwaterOverlay=document.createElement("div"),this.underwaterOverlay.style.position="fixed",this.underwaterOverlay.style.top="0",this.underwaterOverlay.style.left="0",this.underwaterOverlay.style.width="100%",this.underwaterOverlay.style.height="100%",this.underwaterOverlay.style.pointerEvents="none",this.underwaterOverlay.style.zIndex="1000",this.underwaterOverlay.style.background="linear-gradient(to bottom, rgba(0, 100, 200, 0.3) 0%, rgba(0, 150, 255, 0.4) 50%, rgba(0, 100, 200, 0.3) 100%)",this.underwaterOverlay.style.opacity="0",this.underwaterOverlay.style.transition="opacity 0.3s ease",document.body.appendChild(this.underwaterOverlay)}updateUnderwaterEffects(){if(this.snake.isUnderwater){const e=Math.max(0,Z.WATER_LEVEL-this.snake.position.y),t=Math.min(.7,e*.05);this.underwaterOverlay.style.opacity=t.toString(),this.renderer.setClearColor(this._underwaterClearColor,1)}else this.underwaterOverlay.style.opacity="0",this.renderer.setClearColor(this._defaultClearColor,1)}gameOver(){this.state!==tt.GAME_OVER&&(this.audio.playCrash(),this.audio.stopMusic(),this.audio.stopWaterSound(),this.state=tt.GAME_OVER,this.ui.showGameOver(this.score))}updateSeason(e){this.score<=250?this.targetPalette=ht:this.score<=500?this.targetPalette=Uc:this.score<=750?this.targetPalette=Fc:this.targetPalette=kc;const t=this.visualPalette,n=this.targetPalette;if(!t||!n)return;const s=Math.min(1,e*1.5);if(isNaN(s))return;const r=(o,l)=>(this._tempColor1.setHex(o),this._tempColor2.setHex(l),this._tempColor1.lerp(this._tempColor2,s),this._tempColor1.getHex()),a=(o,l)=>o+(l-o)*s;for(const o in t.colors){const l=o;t.colors[l]=r(t.colors[l],n.colors[l])}t.bloom.strength=a(t.bloom.strength,n.bloom.strength),t.bloom.radius=a(t.bloom.radius,n.bloom.radius),t.bloom.threshold=a(t.bloom.threshold,n.bloom.threshold),t.fog.near=a(t.fog.near,n.fog.near),t.fog.far=a(t.fog.far,n.fog.far),this.applyPalette(t)}applyPalette(e){if(e_(e),this.mode==="singleplayer"&&this.snake.updatePalette(e),this.skyMesh){const t=this.skyMesh.material;t.uniforms.topColor.value.setHex(e.colors.SKY_TOP),t.uniforms.midColor.value.setHex(e.colors.SKY_MID),t.uniforms.bottomColor.value.setHex(e.colors.SKY_BOTTOM)}this.hemiLight.color.setHex(e.colors.SKY_TOP),this.hemiLight.groundColor.setHex(e.colors.GROUND_BASE),this.scene.fog instanceof Ur&&(this.scene.fog.color.setHex(e.colors.FOG),this.scene.fog.near=e.fog.near,this.scene.fog.far=e.fog.far),this.bloomPass&&(this.bloomPass.strength=e.bloom.strength,this.bloomPass.radius=e.bloom.radius,this.bloomPass.threshold=e.bloom.threshold),this.water&&this.water.material.uniforms.waterColor.value.setHex(e.colors.WATER),this.ui.updateAccentColor(e.colors.UI_ACCENT),document.documentElement.style.setProperty("--primary-color","#"+new ve(e.colors.UI_ACCENT).getHexString())}createWater(){const e=new as(1e3,1e3),t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d");if(n){n.fillStyle="#8080ff",n.fillRect(0,0,256,256);for(let r=0;r<20;r++){const a=Math.random()*256,o=Math.random()*256,l=20+Math.random()*50,c=n.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,"rgba(140, 140, 255, 0.2)"),c.addColorStop(1,"rgba(128, 128, 255, 0)"),n.fillStyle=c,n.fillRect(0,0,256,256)}}const s=new vl(t);s.wrapS=s.wrapT=Is,this.water=new ex(e,{textureWidth:512,textureHeight:512,waterNormals:s,sunDirection:new C,sunColor:16777215,waterColor:this.visualPalette.colors.WATER,distortionScale:3.7,fog:this.scene.fog!==void 0}),this.water.rotation.x=-Math.PI/2,this.water.position.y=Z.WATER_LEVEL,this.water.material.transparent=!0,this.water.material.fragmentShader=this.water.material.fragmentShader.replace("gl_FragColor = vec4( color, 1.0 );","gl_FragColor = vec4( color, 0.75 );"),this.scene.add(this.water)}handleHostDisconnected(){this.state=tt.GAME_OVER,this.audio.stopMusic(),this.audio.stopWaterSound(),this.ui.hideSpectator(),this.nameLabelManager?.hide(),this.ui.showHostDisconnected()}async attemptReconnect(){if(!this.networkManager||!this.lobbyManager)return;const e=this.networkManager.roomCode,t=this.networkManager.isHost;await this.networkManager.disconnect(),await new Promise(n=>setTimeout(n,1e3)),t?(this.ui.hideConnectionLost(),this.ui.showMessage("Cannot reconnect as host. Returning to menu."),setTimeout(()=>this.leaveMultiplayerRoom(),2e3)):await this.networkManager.joinRoom(e)?this.ui.hideConnectionLost():(this.ui.hideConnectionLost(),this.ui.showMessage("Reconnect failed. Returning to menu."),setTimeout(()=>this.leaveMultiplayerRoom(),2e3))}enterSpectatorMode(){this.state=tt.SPECTATING,this.keys={left:!1,right:!1,boost:!1},this.spectateNextPlayer()}spectateNextPlayer(e=1){const t=[];for(const[a,o]of this.multiplayerSnakes)a!==this.localPlayerId&&this.alivePlayers.has(a)&&t.push(a);if(t.length===0){this.spectatingPlayerId=null,this.ui.hideSpectator();return}const s=((this.spectatingPlayerId?t.indexOf(this.spectatingPlayerId):-1)+e+t.length)%t.length;this.spectatingPlayerId=t[s];const r=this.playerNames.get(this.spectatingPlayerId)||"UNKNOWN";this.ui.showSpectator(r)}updatePhysicsSpectating(e){this.dayTime+=e*.05;const t=this.spectatingPlayerId?this.multiplayerSnakes.get(this.spectatingPlayerId):null,n=t&&this.spectatingPlayerId&&this.alivePlayers.has(this.spectatingPlayerId)?t:this.snake;if(this.world.update(n.position.x,n.position.z),this.sunLight.position.x=n.position.x+50,this.sunLight.position.z=n.position.z+50,this.water&&this.water.material.uniforms.sunDirection.value.copy(this.sunLight.position).normalize(),this.isHost&&this.hostSimulation){this.hostSimulation.receiveInput({playerId:this.localPlayerId,seq:this.inputSeq++,turn:0,boost:!1});const s=this.world.getObstacles();this.hostSimulation.simulate(e,s);const r=this.appleManager.update(e);for(const l of r)this.hostSimulation.handleEat(l.playerId,l.appleId,{x:l.position.x,y:l.position.y,z:l.position.z});if(this.appleManager.activeApples.length<Z.MAX_APPLES&&Math.random()<Z.SPAWN_CHANCE){const l=this.world.getRandomTree();if(l){const c=this.appleManager.spawnApple(l);if(c){const h=this.appleManager.getAppleById(c);h&&this.hostSimulation.pendingEvents.push({type:"apple_spawn",appleId:c,x:h.mesh.position.x,y:h.mesh.position.y,z:h.mesh.position.z})}}}const a=this.hostSimulation.checkGameEnd();if(a&&a.type==="game_over"){const l=this.lobbyManager?.getPlayerList()||[];for(const c of a.rankings){const h=l.find(u=>u.id===c.playerId);c.name=h?.name||"UNKNOWN"}this.hostSimulation.pendingEvents.push(a)}const o=this.hostSimulation.getStatePayload();this.networkManager?.sendState(o)}else{const s=performance.now();for(const[r,a]of this.remoteInterpolators){const o=this.multiplayerSnakes.get(r);if(!o||!o.mesh.visible)continue;const l=a.getInterpolatedState(s);l&&o.applyNetState(l)}}this.burstSystem.update(e)}addSnake(e,t,n,s,r){const a=e===this.localPlayerId,o=a?this.snake:new jc(this.scene);return o.resetAt(t,n,s,Z.BASE_SNAKE_SPEED),o.setMultiplayerColor(r),o.isRemote=!a,a||(o.onLand=l=>{this.burstSystem.emit(o.position,Math.floor(l*.3),this.visualPalette.colors.GROUND_BASE)},o.onBreak=l=>{this.burstSystem.emitRockPieces(l,20)}),this.multiplayerSnakes.set(e,o),o}removeSnake(e){const t=this.multiplayerSnakes.get(e);t&&(t.mesh.parent?.remove(t.mesh),this.multiplayerSnakes.delete(e),this.remoteInterpolators.delete(e),this.alivePlayers.delete(e))}async createMultiplayerRoom(e){this.mode="multiplayer",this.isHost=!0,this.networkManager=new vh,this.lobbyManager=new yh(this.networkManager),this.localPlayerId=this.networkManager.playerId,this.lobbyManager.onPlayersChanged=n=>{this.ui.updateLobbyPlayers(n)},this.lobbyManager.onGameStart=n=>{this.pendingStartPayload=n,this.startMultiplayerGame(n)};const t=await this.lobbyManager.createRoom(e);this.state=tt.LOBBY,this.ui.showLobby(t,!0),this.ui.updateLobbyPlayers(this.lobbyManager.getPlayerList())}async joinMultiplayerRoom(e,t){this.mode="multiplayer",this.isHost=!1,this.networkManager=new vh,this.lobbyManager=new yh(this.networkManager),this.localPlayerId=this.networkManager.playerId,this.lobbyManager.onPlayersChanged=s=>{this.ui.updateLobbyPlayers(s)},this.lobbyManager.onGameStart=s=>{this.pendingStartPayload=s,this.startMultiplayerGame(s)},await this.lobbyManager.joinRoom(e,t)?(this.state=tt.LOBBY,this.ui.showLobby(e,!1)):(this.mode="singleplayer",this.networkManager=null,this.lobbyManager=null)}leaveMultiplayerRoom(){this.hostSimulation=null,this.clientPredictor=null,this.remoteInterpolators.clear(),this.spectatingPlayerId=null,this.alivePlayers.clear(),this.hostPlayerId="",this.playerNames.clear(),this.nameLabelManager?.destroy(),this.nameLabelManager=null,this.lobbyManager&&(this.lobbyManager.leaveRoom(),this.lobbyManager.cleanup(),this.lobbyManager=null),this.networkManager&&(this.networkManager.disconnect(),this.networkManager=null);for(const[e,t]of this.multiplayerSnakes)e!==this.localPlayerId&&t.mesh.parent?.remove(t.mesh);this.multiplayerSnakes.clear(),this.isHost=!1,this.mode="singleplayer",this.state=tt.MENU,this.ui.hideLobby(),this.ui.showMenu(),this.appleManager=new _r(this.scene,()=>[{id:"local",position:this.snake.bodyMeshes[0].position}],!0),this.appleManager.onEat=e=>{this.audio.playEat(),this.burstSystem.emit(e,15,this.visualPalette.colors.APPLE)}}startMultiplayerGame(e){q0(e.terrainSeed),Go(),this.state=tt.PLAYING,this.ui.hideLobby(),this.ui.hideMenu(),this.ui.hideGameOver(),this.score=0,this.ep=Z.MAX_EP,this.dayTime=0,this.inputSeq=0,this.keys={left:!1,right:!1,boost:!1},this.ui.updateScore(0),this.ui.updateEp(this.ep,this.maxEp),this.world.reset(),this.burstSystem.reset(),this.audio.stopWaterSound();for(const[r,a]of this.multiplayerSnakes)r!==this.localPlayerId&&a.mesh.parent?.remove(a.mesh);this.multiplayerSnakes.clear(),this.hostSimulation=null,this.clientPredictor=null,this.remoteInterpolators.clear(),this.spectatingPlayerId=null,this.alivePlayers.clear();const t=this.lobbyManager?.getPlayerList()||[],n=t.find(r=>r.isHost);this.hostPlayerId=n?.id||"",this.playerNames.clear();for(const r of t)this.playerNames.set(r.id,r.name);for(const r of e.playerOrder){const a=e.spawns[r],l=t.find(c=>c.id===r)?.colorIndex??0;this.addSnake(r,a.x,a.z,a.angle,l)}this.alivePlayers=new Set(e.playerOrder),this.nameLabelManager?.destroy(),this.nameLabelManager=new i_;for(const r of t){const a=_i[r.colorIndex]||_i[0],o="#"+new ve(a.head).getHexString();this.nameLabelManager.addLabel(r.id,r.name,o)}if(this.isHost){this.appleManager=new _r(this.scene,()=>{const r=[];for(const[a,o]of this.multiplayerSnakes)o.bodyMeshes.length>0&&this.alivePlayers.has(a)&&r.push({id:a,position:o.bodyMeshes[0].position});return r},!0),this.appleManager.onEat=r=>{this.audio.playEat(),this.burstSystem.emit(r,15,this.visualPalette.colors.APPLE)},this.hostSimulation=new Fy;for(const r of e.playerOrder){const a=this.multiplayerSnakes.get(r),l=t.find(c=>c.id===r)?.colorIndex??0;this.hostSimulation.addPlayer(r,a,l)}this.networkManager?.on("input",r=>{r.playerId!==this.localPlayerId&&this.hostSimulation&&this.hostSimulation.receiveInput(r)}),this.networkManager?.on("presence:leave",r=>{if(r.presences)for(const a of r.presences)a.playerId&&a.playerId!==this.localPlayerId&&this.hostSimulation&&this.hostSimulation.removePlayer(a.playerId)})}else{this.appleManager=new _r(this.scene,()=>this.snake.bodyMeshes.length>0?[{id:this.localPlayerId,position:this.snake.bodyMeshes[0].position}]:[],!1),this.networkManager?.on("state",r=>{this.handleStateUpdate(r)}),this.networkManager?.on("presence:leave",r=>{if(r.presences)for(const a of r.presences)a.playerId&&a.playerId===this.hostPlayerId&&this.handleHostDisconnected()}),this.networkManager?.on("connection:timeout",()=>{this.mode==="multiplayer"&&this.state===tt.PLAYING&&(this.ui.showConnectionLost(),this.attemptReconnect())}),this.clientPredictor=new zy(this.snake);for(const r of e.playerOrder)r!==this.localPlayerId&&this.remoteInterpolators.set(r,new Wy)}if(this.appleManager.reset(),this.world.ensureInitialChunks(this.snake.position.x,this.snake.position.z),this.isHost)for(let r=0;r<5;r++){const a=this.world.getRandomTree();a&&this.appleManager.spawnApple(a)}const s=this.snake.bodyMeshes[0].position.clone();this.cameraLookAtCurrent.copy(s),this.cameraAngle=this.snake.angle,this.countdownActive=!0,this.countdownEndTime=e.countdownEndTime,this.ui.startCountdown(3e3),this.audio.startMusic()}}window.addEventListener("DOMContentLoaded",()=>{new ix});
