(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{183:function(t,n,e){},184:function(t,n,e){},186:function(t,n,e){var i=e(2);n.f=i},200:function(t,n,e){"use strict";var i=e(4),o=e(1),r=e(23),s=e(19),a=e(11),c=e(78),u=e(128),l=e(3),f=e(10),p=e(33),d=e(9),m=e(7),v=e(24),g=e(21),y=e(32),b=e(31),h=e(51),w=e(79),k=e(48),S=e(201),O=e(76),j=e(22),C=e(12),P=e(73),T=e(17),D=e(13),I=e(74),_=e(49),E=e(50),N=e(75),x=e(2),J=e(186),F=e(202),L=e(52),$=e(27),z=e(77).forEach,V=_("hidden"),W=x("toPrimitive"),H=$.set,Q=$.getterFor("Symbol"),q=Object.prototype,A=o.Symbol,B=r("JSON","stringify"),G=j.f,K=C.f,M=S.f,R=P.f,U=I("symbols"),X=I("op-symbols"),Y=I("string-to-symbol-registry"),Z=I("symbol-to-string-registry"),tt=I("wks"),nt=o.QObject,et=!nt||!nt.prototype||!nt.prototype.findChild,it=a&&l((function(){return 7!=h(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,n,e){var i=G(q,n);i&&delete q[n],K(t,n,e),i&&t!==q&&K(q,n,i)}:K,ot=function(t,n){var e=U[t]=h(A.prototype);return H(e,{type:"Symbol",tag:t,description:n}),a||(e.description=n),e},rt=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof A},st=function(t,n,e){t===q&&st(X,n,e),m(t);var i=y(n,!0);return m(e),f(U,i)?(e.enumerable?(f(t,V)&&t[V][i]&&(t[V][i]=!1),e=h(e,{enumerable:b(0,!1)})):(f(t,V)||K(t,V,b(1,{})),t[V][i]=!0),it(t,i,e)):K(t,i,e)},at=function(t,n){m(t);var e=g(n),i=w(e).concat(ft(e));return z(i,(function(n){a&&!ct.call(e,n)||st(t,n,e[n])})),t},ct=function(t){var n=y(t,!0),e=R.call(this,n);return!(this===q&&f(U,n)&&!f(X,n))&&(!(e||!f(this,n)||!f(U,n)||f(this,V)&&this[V][n])||e)},ut=function(t,n){var e=g(t),i=y(n,!0);if(e!==q||!f(U,i)||f(X,i)){var o=G(e,i);return!o||!f(U,i)||f(e,V)&&e[V][i]||(o.enumerable=!0),o}},lt=function(t){var n=M(g(t)),e=[];return z(n,(function(t){f(U,t)||f(E,t)||e.push(t)})),e},ft=function(t){var n=t===q,e=M(n?X:g(t)),i=[];return z(e,(function(t){!f(U,t)||n&&!f(q,t)||i.push(U[t])})),i};(c||(D((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=N(t),e=function(t){this===q&&e.call(X,t),f(this,V)&&f(this[V],n)&&(this[V][n]=!1),it(this,n,b(1,t))};return a&&et&&it(q,n,{configurable:!0,set:e}),ot(n,t)}).prototype,"toString",(function(){return Q(this).tag})),D(A,"withoutSetter",(function(t){return ot(N(t),t)})),P.f=ct,C.f=st,j.f=ut,k.f=S.f=lt,O.f=ft,J.f=function(t){return ot(x(t),t)},a&&(K(A.prototype,"description",{configurable:!0,get:function(){return Q(this).description}}),s||D(q,"propertyIsEnumerable",ct,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:A}),z(w(tt),(function(t){F(t)})),i({target:"Symbol",stat:!0,forced:!c},{for:function(t){var n=String(t);if(f(Y,n))return Y[n];var e=A(n);return Y[n]=e,Z[e]=n,e},keyFor:function(t){if(!rt(t))throw TypeError(t+" is not a symbol");if(f(Z,t))return Z[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,n){return void 0===n?h(t):at(h(t),n)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:ut}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),i({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),B)&&i({target:"JSON",stat:!0,forced:!c||l((function(){var t=A();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}))},{stringify:function(t,n,e){for(var i,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);if(i=n,(d(n)||void 0!==t)&&!rt(t))return p(n)||(n=function(t,n){if("function"==typeof i&&(n=i.call(this,t,n)),!rt(n))return n}),o[1]=n,B.apply(null,o)}});A.prototype[W]||T(A.prototype,W,A.prototype.valueOf),L(A,"Symbol"),E[V]=!0},201:function(t,n,e){var i=e(21),o=e(48).f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==r.call(t)?function(t){try{return o(t)}catch(t){return s.slice()}}(t):o(i(t))}},202:function(t,n,e){var i=e(127),o=e(10),r=e(186),s=e(12).f;t.exports=function(t){var n=i.Symbol||(i.Symbol={});o(n,t)||s(n,t,{value:r.f(t)})}},203:function(t,n,e){"use strict";var i=e(4),o=e(11),r=e(1),s=e(10),a=e(9),c=e(12).f,u=e(126),l=r.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[n]=!0),n};u(p,l);var d=p.prototype=l.prototype;d.constructor=p;var m=d.toString,v="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,n=m.call(t);if(s(f,t))return"";var e=v?n.slice(7,-1):n.replace(g,"$1");return""===e?void 0:e}}),i({global:!0,forced:!0},{Symbol:p})}},204:function(t){t.exports=JSON.parse('{"vision":[{"id":"1","mobileTitle":"알렉 스튜디오는\\n사람들의 여가에\\n주목합니다.","mobileDescription":"스포츠, 피트니스, 음식, 여행,\\n취미를 주제로 하는\\n영상 콘텐츠를 만듭니다.","desktopTitle":"알렉 스튜디오는\\n사람들의 여가에 주목합니다.","desktopDescription":"스포츠, 피트니스, 음식, 여행, 취미를 주제로 하는\\n영상 콘텐츠를 만듭니다.","image":"p-walec-main-img-01.jpg","link":"#2","linkImage":"p-walec-main-btn-down.png"},{"id":"2","mobileTitle":"모바일 플랫폼에\\n최적화된 콘텐츠를\\n만듭니다.","mobileDescription":"영상을 중심으로 언제 어디서나\\n즐길 수 있는 콘텐츠를 만듭니다.","desktopTitle":"모바일 플랫폼에 최적화된\\n콘텐츠를 만듭니다.","desktopDescription":"영상을 중심으로 언제 어디서나 즐길 수 있는 콘텐츠를 만듭니다.","image":"p-walec-main-img-02.jpg","link":"#3","linkImage":"p-walec-main-btn-down.png"},{"id":"3","mobileTitle":"여가를 주제로 하는\\n영상 콘텐츠 기업\\n알렉 스튜디오.","mobileDescription":"당신의 일상 속에 여가를 더하겠습니다.","desktopTitle":"여가를 주제로 하는\\n영상 콘텐츠 기업\\n알렉 스튜디오.","desktopDescription":"당신의 일상 속에 여가를 더하겠습니다.","image":"p-walec-main-img-03.jpg","link":"#1","linkImage":"p-walec-main-btn-up.png"}]}')},205:function(t,n,e){"use strict";var i=e(183);e.n(i).a},206:function(t,n,e){"use strict";var i=e(184);e.n(i).a},208:function(t,n,e){"use strict";e.r(n);e(200),e(203),e(72);var i=e(204),o=e(121),r={name:"VPortraitFitContent",props:["id","image","title","description","link","linkImage"]},s=(e(205),e(20)),a=Object(s.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item-container"},[e("a",{attrs:{id:t.id}}),e("img",{staticClass:"item-background",attrs:{src:t.image,alt:""}}),e("div",{staticClass:"overlay-container"},[e("div",{staticClass:"overlay-content"},[e("h2",{staticClass:"overlay-content-title"},[t._v(t._s(t.title))]),e("h2",{staticClass:"overlay-content-description"},[t._v(t._s(t.description))])]),e("a",{staticClass:"overlay-footer desktop",attrs:{href:t.link}},[e("img",{attrs:{src:t.linkImage,alt:""}})])])])}),[],!1,null,"3405c04d",null).exports,c={metaInfo:{title:"Home"},components:{Layout:o.a,VPortraitFitContent:a},data:function(){return{vision:i.vision}},mounted:function(){this.updateContent()},created:function(){window.addEventListener("resize",this.updateContent)},destroyed:function(){window.removeEventListener("resize",this.updateContent)},methods:{updateContent:function(){this.vision=this.vision.map((function(t){var n=Object.assign({},t);return window.innerWidth<1440?(n.title=t.mobileTitle,n.description=t.mobileDescription):(n.title=t.desktopTitle,n.description=t.desktopDescription),n}))}}},u=(e(206),Object(s.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("Layout",[n("div",{staticClass:"content-container"},this._l(this.vision,(function(t){return n("v-portrait-fit-content",{key:t.key,attrs:{id:t.id,image:t.image,title:t.title,description:t.description,link:t.link,linkImage:t.linkImage}})})),1)])}),[],!1,null,"0e48d1e5",null));n.default=u.exports}}]);