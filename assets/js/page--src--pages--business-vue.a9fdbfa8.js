(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(t,n,e){},170:function(t,n,e){"use strict";var i=e(169);e.n(i).a},171:function(t,n,e){},172:function(t,n,e){"use strict";var i={name:"VSummary",props:["mobileImage","desktopImage","title","description","extraMargin"]},s=(e(170),e(20)),a=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("md-content",{staticClass:"item-container desktop",style:{backgroundImage:"url("+t.desktopImage+")"}},[e("h1",{class:{"extra-margin":t.extraMargin}},[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.description))])]),e("md-content",{staticClass:"item-container mobile",style:{backgroundImage:"url("+t.mobileImage+")"}},[e("h1",[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.description))])])],1)}),[],!1,null,"5f51ac56",null);n.a=a.exports},176:function(t,n,e){"use strict";var i=e(171);e.n(i).a},180:function(t,n,e){},181:function(t,n,e){},182:function(t,n,e){},185:function(t,n,e){"use strict";var i={name:"VContact",props:["title","description","link"]},s=(e(176),e(20)),a=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("md-content",{staticClass:"item-container"},[e("h3",[t._v(t._s(t.title))]),e("div",[e("h4",[t._v(t._s(t.description))]),e("a",{staticClass:"md-dense link",attrs:{href:"mailto:"+t.link}},[t._v(t._s(t.link))])])])}),[],!1,null,"2607fb58",null);n.a=a.exports},196:function(t){t.exports=JSON.parse('{"summary":{"title":"Business","description":"크리에이터들과 함께 최고의 콘텐츠로 최고의 성과를 냅니다.","mobileImage":"m-walec-sub-img-top-business.jpg","desktopImage":"p-walec-sub-img-top-business.jpg"},"content":[{"title":"콘텐츠 판매","description":"ALEC STUDIO의 콘텐츠는\\n주요 포털 사이트와 통신사를 통해\\n서비스되고 있습니다.","icon":"p-walec-img-business-01.png"},{"title":"광고 제휴","description":"ALEC STUDIO는 채널과 크리에이터를 통해\\n가장 효율적인 AD 솔루션을 제공합니다.","icon":"p-walec-img-business-02.png"},{"title":"커머스 연계","description":"ALEC STUDIO의 채널과 크리에이터와 함께\\n더 많은 상품 판매 기회를 제공합니다.","icon":"p-walec-img-business-03.png"}],"client":{"title":"Clients","contents":[{"image":"p-walec-img-business-client-lg.png","name":"LG U+"},{"image":"p-walec-img-business-client-kakao.png","name":"카카오"},{"image":"p-walec-img-business-client-naver.png","name":"네이버"},{"image":"p-walec-img-business-client-cu.png","name":"CU"},{"image":"p-walec-img-business-client-georgia.png","name":"조지아"},{"image":"p-walec-img-business-client-windgod.png","name":"바람의 신"}]},"contact":{"title":"Contact","description":"협업 제안은 아래 메일로 문의해주시기 바랍니다.","link":"contact@alecstudio.com"}}')},197:function(t,n,e){"use strict";var i=e(180);e.n(i).a},198:function(t,n,e){"use strict";var i=e(181);e.n(i).a},199:function(t,n,e){"use strict";var i=e(182);e.n(i).a},207:function(t,n,e){"use strict";e.r(n);var i=e(196),s=e(172),a={name:"VBusiness",props:["icon","title","description"]},c=(e(197),e(20)),o=Object(c.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("md-content",{staticClass:"item-container"},[n("div",{staticClass:"item-start"},[n("img",{attrs:{src:this.icon,alt:""}})]),n("div",{staticClass:"item-end"},[n("h2",[this._v(this._s(this.title))]),n("div",{staticClass:"desktop spacer"}),n("p",[this._v(this._s(this.description))])])])}),[],!1,null,"4e510961",null).exports,l={name:"VClient",props:["title","contents"]},r=(e(198),Object(c.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("md-content",{staticClass:"item-container"},[n("h3",[this._v(this._s(this.title))]),n("div",{staticClass:"item-content"},this._l(this.contents,(function(t){return n("div",{key:t.key,staticClass:"item"},[n("img",{attrs:{src:t.image,alt:t.name}})])})),0)])}),[],!1,null,"0d6451f9",null).exports),m=e(185),u={metaInfo:{title:"Business"},components:{VSummary:s.a,VBusiness:o,VClient:r,VContact:m.a},data:function(){return{summary:i.summary,content:i.content,client:i.client,contact:i.contact}}},p=(e(199),Object(c.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Layout",[e("div",{staticClass:"summary-container"},[e("v-summary",{attrs:{desktopImage:t.summary.desktopImage,mobileImage:t.summary.mobileImage,title:t.summary.title,description:t.summary.description}})],1),e("div",{staticClass:"content-container"},t._l(t.content,(function(t){return e("v-business",{key:t.key,attrs:{icon:t.icon,title:t.title,description:t.description}})})),1),e("div",{staticClass:"content-container"},[e("v-client",{attrs:{title:t.client.title,contents:t.client.contents}})],1),e("div",{staticClass:"content-container"},[e("v-contact",{attrs:{title:t.contact.title,description:t.contact.description,link:t.contact.link}})],1)])}),[],!1,null,"65437c98",null));n.default=p.exports}}]);