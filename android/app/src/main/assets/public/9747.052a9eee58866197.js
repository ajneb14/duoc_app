"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9747],{7464:(ce,V,b)=>{b.d(V,{E_:()=>B,F3:()=>W});var g=b(467);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var M=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(M||{});class t extends Error{constructor(e,n,i){super(e),this.message=e,this.code=n,this.data=i}}const z=r=>{var e,n,i,s,o;const f=r.CapacitorCustomPlatform||null,a=r.Capacitor||{},C=a.Plugins=a.Plugins||{},m=r.CapacitorPlatforms,U=(null===(e=null==m?void 0:m.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==f?f.name:(r=>{var e,n;return null!=r&&r.androidBridge?"android":null!==(n=null===(e=null==r?void 0:r.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==n&&n.bridge?"ios":"web"})(r)),de=(null===(n=null==m?void 0:m.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==U()),fe=(null===(i=null==m?void 0:m.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(p=>{const v=Z.get(p);return!!(null!=v&&v.platforms.has(U())||ie(p))}),ie=(null===(s=null==m?void 0:m.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(p=>{var v;return null===(v=a.PluginHeaders)||void 0===v?void 0:v.find(D=>D.name===p)}),Z=new Map,Pe=(null===(o=null==m?void 0:m.currentPlatform)||void 0===o?void 0:o.registerPlugin)||((p,v={})=>{const D=Z.get(p);if(D)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),D.proxy;const $=U(),Q=ie(p);let k;const ve=function(){var y=(0,g.A)(function*(){return!k&&$ in v?k=k="function"==typeof v[$]?yield v[$]():v[$]:null!==f&&!k&&"web"in v&&(k=k="function"==typeof v.web?yield v.web():v.web),k});return function(){return y.apply(this,arguments)}}(),ee=y=>{let _;const L=(...x)=>{const T=ve().then(R=>{const F=((y,_)=>{var L,x;if(!Q){if(y)return null===(x=y[_])||void 0===x?void 0:x.bind(y);throw new t(`"${p}" plugin is not implemented on ${$}`,M.Unimplemented)}{const T=null==Q?void 0:Q.methods.find(R=>_===R.name);if(T)return"promise"===T.rtype?R=>a.nativePromise(p,_.toString(),R):(R,F)=>a.nativeCallback(p,_.toString(),R,F);if(y)return null===(L=y[_])||void 0===L?void 0:L.bind(y)}})(R,y);if(F){const X=F(...x);return _=null==X?void 0:X.remove,X}throw new t(`"${p}.${y}()" is not implemented on ${$}`,M.Unimplemented)});return"addListener"===y&&(T.remove=(0,g.A)(function*(){return _()})),T};return L.toString=()=>`${y.toString()}() { [capacitor code] }`,Object.defineProperty(L,"name",{value:y,writable:!1,configurable:!1}),L},se=ee("addListener"),ae=ee("removeListener"),ye=(y,_)=>{const L=se({eventName:y},_),x=function(){var R=(0,g.A)(function*(){const F=yield L;ae({eventName:y,callbackId:F},_)});return function(){return R.apply(this,arguments)}}(),T=new Promise(R=>L.then(()=>R({remove:x})));return T.remove=(0,g.A)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield x()}),T},te=new Proxy({},{get(y,_){switch(_){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return Q?ye:se;case"removeListener":return ae;default:return ee(_)}}});return C[p]=te,Z.set(p,{name:p,proxy:te,platforms:new Set([...Object.keys(v),...Q?[$]:[]])}),te});return a.convertFileSrc||(a.convertFileSrc=p=>p),a.getPlatform=U,a.handleError=p=>r.console.error(p),a.isNativePlatform=de,a.isPluginAvailable=fe,a.pluginMethodNoop=(p,v,D)=>Promise.reject(`${D} does not have an implementation of "${v}".`),a.registerPlugin=Pe,a.Exception=t,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},j=(r=>r.Capacitor=z(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),W=j.registerPlugin;class B{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){var i=this;let s=!1;this.listeners[e]||(this.listeners[e]=[],s=!0),this.listeners[e].push(n);const f=this.windowListeners[e];f&&!f.registered&&this.addWindowListener(f),s&&this.sendRetainedArgumentsForEvent(e);const a=function(){var m=(0,g.A)(function*(){return i.removeListener(e,n)});return function(){return m.apply(this,arguments)}}();return Promise.resolve({remove:a})}removeAllListeners(){var e=this;return(0,g.A)(function*(){e.listeners={};for(const n in e.windowListeners)e.removeWindowListener(e.windowListeners[n]);e.windowListeners={}})()}notifyListeners(e,n,i){const s=this.listeners[e];if(s)s.forEach(o=>o(n));else if(i){let o=this.retainedEventArguments[e];o||(o=[]),o.push(n),this.retainedEventArguments[e]=o}}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:i=>{this.notifyListeners(n,i)}}}unimplemented(e="not implemented"){return new j.Exception(e,M.Unimplemented)}unavailable(e="not available"){return new j.Exception(e,M.Unavailable)}removeListener(e,n){var i=this;return(0,g.A)(function*(){const s=i.listeners[e];if(!s)return;const o=s.indexOf(n);i.listeners[e].splice(o,1),i.listeners[e].length||i.removeWindowListener(i.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(i=>{this.notifyListeners(e,i)}))}}const Y=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),d=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class w extends B{getCookies(){return(0,g.A)(function*(){const e=document.cookie,n={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[s,o]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=d(s).trim(),o=d(o).trim(),n[s]=o}),n})()}setCookie(e){return(0,g.A)(function*(){try{const n=Y(e.key),i=Y(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,o=(e.path||"/").replace("path=",""),f=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${i||""}${s}; path=${o}; ${f};`}catch(n){return Promise.reject(n)}})()}deleteCookie(e){return(0,g.A)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}})()}clearCookies(){return(0,g.A)(function*(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,g.A)(function*(){try{yield e.clearCookies()}catch(n){return Promise.reject(n)}})()}}W("CapacitorCookies",{web:()=>new w});const l=function(){var r=(0,g.A)(function*(e){return new Promise((n,i)=>{const s=new FileReader;s.onload=()=>{const o=s.result;n(o.indexOf(",")>=0?o.split(",")[1]:o)},s.onerror=o=>i(o),s.readAsDataURL(e)})});return function(n){return r.apply(this,arguments)}}();class S extends B{request(e){return(0,g.A)(function*(){const n=((r,e={})=>{const n=Object.assign({method:r.method||"GET",headers:r.headers},e),s=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(s=>s.toLocaleLowerCase()).reduce((s,o,f)=>(s[o]=r[e[f]],s),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)n.body=r.data;else if(s.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[f,a]of Object.entries(r.data||{}))o.set(f,a);n.body=o.toString()}else if(s.includes("multipart/form-data")||r.data instanceof FormData){const o=new FormData;if(r.data instanceof FormData)r.data.forEach((a,C)=>{o.append(C,a)});else for(const a of Object.keys(r.data))o.append(a,r.data[a]);n.body=o;const f=new Headers(n.headers);f.delete("content-type"),n.headers=f}else(s.includes("application/json")||"object"==typeof r.data)&&(n.body=JSON.stringify(r.data));return n})(e,e.webFetchExtra),i=((r,e=!0)=>r?Object.entries(r).reduce((i,s)=>{const[o,f]=s;let a,C;return Array.isArray(f)?(C="",f.forEach(m=>{a=e?encodeURIComponent(m):m,C+=`${o}=${a}&`}),C.slice(0,-1)):(a=e?encodeURIComponent(f):f,C=`${o}=${a}`),`${i}&${C}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),s=i?`${e.url}?${i}`:e.url,o=yield fetch(s,n),f=o.headers.get("content-type")||"";let C,m,{responseType:a="text"}=o.ok?e:{};switch(f.includes("application/json")&&(a="json"),a){case"arraybuffer":case"blob":m=yield o.blob(),C=yield l(m);break;case"json":C=yield o.json();break;default:C=yield o.text()}const H={};return o.headers.forEach((U,N)=>{H[N]=U}),{data:C,headers:H,status:o.status,url:o.url}})()}get(e){var n=this;return(0,g.A)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var n=this;return(0,g.A)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var n=this;return(0,g.A)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var n=this;return(0,g.A)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var n=this;return(0,g.A)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}W("CapacitorHttp",{web:()=>new S})},9747:(ce,V,b)=>{b.r(V),b.d(V,{QrScannerPageModule:()=>Y});var g=b(177),G=b(4341),A=b(4742),O=b(4964),I=b(467),q=b(6802);const M=(0,b(7464).F3)("Geolocation",{web:()=>b.e(2920).then(b.bind(b,2920)).then(d=>new d.GeolocationWeb)});var t=b(4438),K=b(2872),z=b(6340);function ne(d,w){if(1&d&&(t.j41(0,"ion-select-option",7),t.EFF(1),t.k0s()),2&d){const P=w.$implicit;t.Y8G("value",P),t.R7$(),t.JRh(P)}}function j(d,w){if(1&d&&(t.j41(0,"ion-select-option",7),t.EFF(1),t.k0s()),2&d){const P=w.$implicit;t.Y8G("value",P),t.R7$(),t.JRh(P)}}function W(d,w){if(1&d){const P=t.RV6();t.j41(0,"ion-item")(1,"ion-label"),t.EFF(2,"Secci\xf3n"),t.k0s(),t.j41(3,"ion-select",1),t.mxI("ngModelChange",function(c){t.eBV(P);const u=t.XpG();return t.DH7(u.selectedSeccion,c)||(u.selectedSeccion=c),t.Njj(c)}),t.bIt("ionChange",function(){t.eBV(P);const c=t.XpG();return t.Njj(c.onSelectSeccion())}),t.DNE(4,j,2,2,"ion-select-option",2),t.k0s()()}if(2&d){const P=t.XpG();t.R7$(3),t.R50("ngModel",P.selectedSeccion),t.R7$(),t.Y8G("ngForOf",P.seccionesFiltradas)}}function re(d,w){1&d&&(t.j41(0,"div",8),t.nrm(1,"ion-icon",9),t.k0s())}const B=[{path:"",component:(()=>{var d;class w{constructor(l,c,u,h,S,E){this.router=l,this.barcodeScanner=c,this.alertController=u,this.firestore=h,this.geolocation=S,this.platform=E,this.selectedAsignatura=null,this.selectedSeccion=null,this.isReadyToScan=!1,this.asignaturas=["Programaci\xf3n","Base de Datos","Calidad"],this.secciones={Programaci\u00f3n:["PGY_1","PGY_2","PGY_3"],"Base de Datos":["BD_1","BD_2","BD_3"],Calidad:["CAL_1","CAL_2","CAL_3"]},this.seccionesFiltradas=[]}onSelectAsignatura(){this.selectedAsignatura&&(this.seccionesFiltradas=this.secciones[this.selectedAsignatura],this.selectedSeccion=null,this.updateIsReadyToScan())}onSelectSeccion(){this.updateIsReadyToScan()}updateIsReadyToScan(){this.isReadyToScan=!!this.selectedAsignatura&&!!this.selectedSeccion}startScan(){var l=this;return(0,I.A)(function*(){if(l.isReadyToScan){if(!(yield l.checkLocation()))return void(yield l.showErrorAlert("No est\xe1 en la ubicaci\xf3n permitida para escanear el c\xf3digo QR."));l.barcodeScanner.scan().then(u=>{u.cancelled?console.log("Escaneo cancelado."):(console.log("C\xf3digo QR escaneado:",u.text),l.markAsPresent(u.text))}).catch(function(){var u=(0,I.A)(function*(h){console.error("Error en el escaneo:",h),yield l.showErrorAlert("Error al escanear el c\xf3digo QR. Int\xe9ntelo de nuevo.")});return function(h){return u.apply(this,arguments)}}())}else yield l.showErrorAlert("Seleccione asignatura y secci\xf3n antes de escanear.")})()}checkLocation(){var l=this;return(0,I.A)(function*(){if(!l.platform.is("mobile"))return new Promise((c,u)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(h=>{const n=l.calculateDistance(h.coords.latitude,h.coords.longitude,-36.8275,-73.0496);c(n<=.1)},h=>{console.error("Error al obtener la ubicaci\xf3n del navegador:",h),u(!1)}):u(!1)});try{const c=yield M.getCurrentPosition();return l.calculateDistance(c.coords.latitude,c.coords.longitude,-36.8275,-73.0496)<=.1}catch(c){return console.error("Error al obtener la ubicaci\xf3n:",c),!1}})()}calculateDistance(l,c,u,h){const E=this.degreesToRadians(u-l),r=this.degreesToRadians(h-c),e=Math.sin(E/2)*Math.sin(E/2)+Math.cos(this.degreesToRadians(l))*Math.cos(this.degreesToRadians(u))*Math.sin(r/2)*Math.sin(r/2);return 2*Math.atan2(Math.sqrt(e),Math.sqrt(1-e))*6371}degreesToRadians(l){return l*(Math.PI/180)}markAsPresent(l){var c=this;return(0,I.A)(function*(){try{const h=yield c.firestore.collection("users").doc(l).get().toPromise();if(h.exists){const S=h.data();if(console.log("Datos del estudiante:",S),S){const E=S.name,r=c.selectedAsignatura,e=c.selectedSeccion;c.firestore.collection("presencias").add({uidEstudiante:l,nombre:E,asignatura:r,seccion:e,timestamp:(new Date).toISOString()}),console.log("Presencia registrada para:",E),alert(`\xa1Presencia registrada!\n${E} ha sido marcado como presente en la asignatura ${r} - secci\xf3n ${e}.`)}}else console.log("No se encontraron datos para este estudiante"),yield c.showErrorAlert("No se encontraron datos para este estudiante.")}catch(u){console.error("Error al marcar la presencia en Firestore",u),yield c.showErrorAlert("Error al marcar la presencia.")}})()}showErrorAlert(l){var c=this;return(0,I.A)(function*(){yield(yield c.alertController.create({header:"Error",message:l,buttons:["Cerrar"]})).present()})()}navigateToHomeAlumno(){this.router.navigate(["/home-alumno"])}}return(d=w).\u0275fac=function(l){return new(l||d)(t.rXU(O.Ix),t.rXU(q.v),t.rXU(A.hG),t.rXU(z.Qe),t.rXU(M),t.rXU(K.OD))},d.\u0275cmp=t.VBU({type:d,selectors:[["app-qr-scanner"]],features:[t.Jv_([q.v])],decls:19,vars:5,consts:[[1,"qr-scanner-container"],[3,"ngModelChange","ionChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["class","qr-scan-box",4,"ngIf"],["expand","block",1,"btn-scan",3,"click","disabled"],["expand","block",1,"btn-volver",3,"click"],[3,"value"],[1,"qr-scan-box"],["name","qr-code-outline",1,"qr-icon"]],template:function(l,c){1&l&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t.EFF(3,"Escanear C\xf3digo QR"),t.k0s()()(),t.j41(4,"ion-content")(5,"div",0)(6,"ion-item")(7,"ion-label"),t.EFF(8,"Asignatura"),t.k0s(),t.j41(9,"ion-select",1),t.mxI("ngModelChange",function(h){return t.DH7(c.selectedAsignatura,h)||(c.selectedAsignatura=h),h}),t.bIt("ionChange",function(){return c.onSelectAsignatura()}),t.DNE(10,ne,2,2,"ion-select-option",2),t.k0s()(),t.DNE(11,W,5,2,"ion-item",3)(12,re,2,0,"div",4),t.j41(13,"p"),t.EFF(14,"Por favor, escanee el c\xf3digo QR dentro del cuadro"),t.k0s(),t.j41(15,"ion-button",5),t.bIt("click",function(){return c.startScan()}),t.EFF(16,"Iniciar Escaneo"),t.k0s(),t.j41(17,"ion-button",6),t.bIt("click",function(){return c.navigateToHomeAlumno()}),t.EFF(18,"Volver"),t.k0s()()()),2&l&&(t.R7$(9),t.R50("ngModel",c.selectedAsignatura),t.R7$(),t.Y8G("ngForOf",c.asignaturas),t.R7$(),t.Y8G("ngIf",c.selectedAsignatura),t.R7$(),t.Y8G("ngIf",c.isReadyToScan),t.R7$(3),t.Y8G("disabled",!c.isReadyToScan))},dependencies:[g.Sq,g.bT,G.BC,G.vS,A.Jm,A.W9,A.eU,A.iq,A.uz,A.he,A.Nm,A.Ip,A.BC,A.ai,A.Je],styles:[".qr-scanner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px}.qr-scan-box[_ngcontent-%COMP%]{width:200px;height:200px;border:2px dashed #041d52;border-radius:10px;display:flex;align-items:center;justify-content:center;margin:20px 0}.qr-icon[_ngcontent-%COMP%]{font-size:100px;color:#041d52}.qr-message[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px;color:#041d52}.btn-scan[_ngcontent-%COMP%]{--background: #ffc400;--color: #041d52;margin-bottom:10px}.btn-volver[_ngcontent-%COMP%]{--background: #041d52;--color: #fff}"]}),w})()}];let oe=(()=>{var d;class w{}return(d=w).\u0275fac=function(l){return new(l||d)},d.\u0275mod=t.$C({type:d}),d.\u0275inj=t.G2t({imports:[O.iI.forChild(B),O.iI]}),w})(),Y=(()=>{var d;class w{}return(d=w).\u0275fac=function(l){return new(l||d)},d.\u0275mod=t.$C({type:d}),d.\u0275inj=t.G2t({imports:[g.MD,G.YN,A.bv,oe]}),w})()}}]);