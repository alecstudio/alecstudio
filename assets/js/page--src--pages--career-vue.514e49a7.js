(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(t,e,n){},171:function(t,e,n){},172:function(t,e,n){"use strict";var i=n(170);n.n(i).a},173:function(t,e,n){"use strict";var i=n(171);n.n(i).a},174:function(t,e,n){},175:function(t,e,n){"use strict";var i=n(49),a={components:{VFooter:n(72).a},data:function(){return{showNavigation:!1,showSidepanel:!1,drawerItems:i.drawer,footerContent:i.footer}},mounted:function(){this.updateContent()},created:function(){window.addEventListener("resize",this.updateContent)},destroyed:function(){window.removeEventListener("resize",this.updateContent)},methods:{updateContent:function(){var t=Object.assign({},this.footerContent);window.innerWidth<1440?t.text=this.footerContent.mobileText:t.text=this.footerContent.desktopText,this.footerContent=t}}},s=(n(172),n(20)),o=n(0),c=o.default.config.optionMergeStrategies.computed,r={metadata:{siteName:"Alec studio"}},l=function(t){var e=t.options;e.__staticData?e.__staticData.data=r:(e.__staticData=o.default.observable({data:r}),e.computed=c({$static:function(){return e.__staticData.data}},e.computed))},d=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",appear:""}},[n("div",{staticClass:"page-container"},[n("div",{staticClass:"desktop"},[n("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[n("div",{staticClass:"md-toolbar-section-start"},[n("g-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"m_walec_nav_img_logo.png"}})])],1),n("div",{staticClass:"md-toolbar-section-end"},t._l(t.drawerItems,(function(e){return n("md-button",{key:e.key,attrs:{id:e.id,href:e.link}},[t._v("\n            "+t._s(e.text)+"\n          ")])})),1)])],1),n("div",{staticClass:"mobile"},[n("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[n("div",{staticClass:"md-toolbar-section-start"},[n("g-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"m_walec_nav_img_logo.png"}})])],1),n("div",{staticClass:"md-toolbar-section-end"},[n("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.showSidepanel=!0}}},[n("md-icon",[t._v("menu")])],1)],1)]),n("md-drawer",{staticClass:"md-right",attrs:{"md-active":t.showSidepanel},on:{"update:mdActive":function(e){t.showSidepanel=e},"update:md-active":function(e){t.showSidepanel=e}}},[n("md-list",[n("md-list-item",[n("div",{staticClass:"button-close-container"},[n("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.showSidepanel=!1}}},[n("md-icon",[t._v("close")])],1)],1)]),t._l(t.drawerItems,(function(e){return n("md-list-item",{key:e.key,attrs:{id:e.id,href:e.link}},[t._v("\n            "+t._s(e.text)+"\n          ")])}))],2)],1)],1),n("md-content",[t._t("default"),n("v-footer",{attrs:{image:t.footerContent.image,text:t.footerContent.text,showVerticalSpace:!0}})],2)],1)])}),[],!1,null,"adbb0ab6",null);"function"==typeof l&&l(d);e.a=d.exports},176:function(t,e,n){"use strict";var i={name:"VSummary",props:["mobileImage","desktopImage","title","description"]},a=(n(173),n(20)),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("md-content",{staticClass:"item-container desktop",style:{backgroundImage:"url("+t.desktopImage+")"}},[n("h1",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.description))])]),n("md-content",{staticClass:"item-container mobile",style:{backgroundImage:"url("+t.mobileImage+")"}},[n("h1",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.description))])])],1)}),[],!1,null,"e3ead3c4",null);e.a=s.exports},179:function(t,e,n){},180:function(t,e,n){"use strict";var i=n(174);n.n(i).a},181:function(t,e,n){},189:function(t,e,n){"use strict";var i={name:"VContact",props:["title","description","link"]},a=(n(180),n(20)),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-content",{staticClass:"item-container"},[n("h3",[t._v(t._s(t.title))]),n("div",[n("h4",[t._v(t._s(t.description))]),n("a",{staticClass:"md-dense link",attrs:{href:"mailto:"+t.link}},[t._v(t._s(t.link))])])])}),[],!1,null,"6ecf474c",null);e.a=s.exports},194:function(t){t.exports=JSON.parse('{"summary":{"title":"Career","description":"알렉 스튜디오는 모바일 중심의 콘텐츠 기업에서 함께 성장해나갈 분들을 상시 채용하고 있습니다.","mobileImage":"m-walec-sub-img-top-career.jpg","desktopImage":"m-walec-sub-img-top-career.jpg"},"content":[{"desktopTitle":"기획 및 영상 편집 직군","mobileTitle":"기획 및 영상 편집 직군","description":"콘텐츠 기획자 및 영상 제작자 (PD, 편집)"},{"desktopTitle":"마케터 및 영업 직군","mobileTitle":"마케터 및 영업 직군","description":"채널 관리자, 콘텐츠 마케터, 영업 담당자"},{"desktopTitle":"디자이너 직군 + 그래픽 디자이너","mobileTitle":"디자이너 직군 + 그래픽 디자이너","description":"이미지 작업 가능자"}],"contact":{"title":"Contact","description":"자기 소개와 이력서를 자유 양식으로 보내주세요.","link":"career@alecstudio.com"}}')},195:function(t,e,n){"use strict";var i=n(179);n.n(i).a},196:function(t,e,n){"use strict";var i=n(181);n.n(i).a},213:function(t,e,n){"use strict";n.r(e);var i=n(194),a=n(175),s=n(176),o={name:"VContact",props:["mobileTitle","desktopTitle","description"]},c=(n(195),n(20)),r=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-content",{staticClass:"item-container"},[n("h3",{staticClass:"mobile"},[t._v(t._s(t.mobileTitle))]),n("h3",{staticClass:"desktop"},[t._v(t._s(t.desktopTitle))]),n("p",[n("span",[t._v(" "+t._s(t.description))])])])}),[],!1,null,"07c8fd2b",null).exports,l=n(189),d={metaInfo:{title:"Alec studio :: Career"},components:{Layout:a.a,VSummary:s.a,VCareer:r,VContact:l.a},data:function(){return{summary:i.summary,career:i.content,contact:i.contact}}},m=(n(196),Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"summary-container"},[n("v-summary",{attrs:{desktopImage:t.summary.desktopImage,mobileImage:t.summary.mobileImage,title:t.summary.title,description:t.summary.description}})],1),n("div",{staticClass:"content-container"},t._l(t.career,(function(t){return n("v-career",{key:t.key,attrs:{mobileTitle:t.mobileTitle,desktopTitle:t.desktopTitle,description:t.description}})})),1),n("div",{staticClass:"content-container"},[n("v-contact",{attrs:{title:t.contact.title,description:t.contact.description,link:t.contact.link}})],1)])}),[],!1,null,"65aa9bde",null));e.default=m.exports}}]);