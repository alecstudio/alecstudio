(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{171:function(t,i,e){},172:function(t,i,e){"use strict";var n=e(171);e.n(n).a},174:function(t,i,e){"use strict";var n={name:"VSummary",props:["mobileImage","desktopImage","title","description"]},s=(e(172),e(20)),c=Object(s.a)(n,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("md-content",{staticClass:"item-container desktop",style:{backgroundImage:"url("+t.desktopImage+")"}},[e("h1",[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.description))])]),e("md-content",{staticClass:"item-container mobile",style:{backgroundImage:"url("+t.mobileImage+")"}},[e("h1",[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.description))])])],1)}),[],!1,null,"e3ead3c4",null);i.a=c.exports},175:function(t,i,e){},176:function(t,i,e){},189:function(t){t.exports=JSON.parse('{"summary":{"title":"Partners","description":"알렉 스튜디오는 최고의 크리에이터들과 MCN 계약을 체결하여\\n전담 매니저와 함께 채널 마케팅과 제휴 사업을 진행합니다.","mobileImage":"m_walec_sub_img_top_partner.jpg","desktopImage":"m_walec_sub_img_top_partner.jpg"},"content":[{"title":"더시즌 TV","description":"건강한 프로야구 문화를 꿈꾸는 더시즌의 야구 채널","icon":"m_walec_img_business_list_thum_01.png","link":"https://www.youtube.com/channel/UCmWSvSpdfGdBBj-QrHrlhVg"},{"title":"한재곰TV","description":"대한민국 최고의 프로응원단장 한재권 단장","icon":"m_walec_img_business_list_thum_02.png","link":"https://www.youtube.com/channel/UC9qPYKeBKYv-2qb-9cWqGEg"},{"title":"콘대tv","description":"롯데자이언츠 팬. 종합스포츠BJ 콘대.","icon":"m_walec_img_business_list_thum_03.png","link":"https://www.youtube.com/channel/UCxvc4PDEIVecxGTiNasar8A"},{"title":"HONEY TV","description":"삼성라이온즈, 삼성화재 응원단장 김상헌 단장.","icon":"m_walec_img_business_list_thum_04.png","link":"https://www.youtube.com/channel/UCfwn6NV0LjYDIfrD6nmd9wQ"},{"title":"갈리","description":"야구 이야기꾼","icon":"m_walec_img_business_list_thum_05.png","link":"https://www.youtube.com/channel/UCXDT9dAFDXi-uO0ukZwTziA"},{"title":"크봉이","description":"야구를 사랑하고 개그를 사랑하는 끼많은 유튜버 크봉이","icon":"m_walec_img_business_list_thum_06.png","link":"https://www.youtube.com/channel/UC7FzF-SKOIwmJ1LECUdsgsg"},{"title":"프로동네야구 PDB","description":"모두의 야구, 프로동네야구","icon":"m_walec_img_business_list_thum_07.png","link":"https://www.youtube.com/user/omooriceful"},{"title":"치어킹코리아","description":"프로응원단장과 치어리더가 함께 만들어 가는 유튜브 채널","icon":"m_walec_img_business_list_thum_08.png","link":"https://www.youtube.com/channel/UCQcs9RKtoeIo5Iid5iA3J4A"},{"title":"팔씨름달인 홍지승","description":"80kg 팔씨름 챔피언, 팔씨름 달인 홍지승","icon":"","link":"https://www.youtube.com/channel/UCIMOljhANgL7AiWzAeVsqzg"}]}')},190:function(t,i,e){"use strict";var n=e(175);e.n(n).a},191:function(t,i,e){"use strict";var n=e(176);e.n(n).a},210:function(t,i,e){"use strict";e.r(i);var n=e(189),s=e(174),c={name:"VPartner",props:["icon","title","description","link"],methods:{click:function(t){window.open(t,"_blank")}}},o=(e(190),e(20)),a=Object(o.a)(c,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("md-content",{staticClass:"item-container",on:{click:function(i){return t.click(t.link)}}},[e("div",{staticClass:"item-sub-conainer"},[e("img",{attrs:{src:t.icon,alt:""}})]),e("div",{staticClass:"item-sub-conainer"},[e("h1",[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.description))])])])}),[],!1,null,"e843dc6e",null).exports,l={metaInfo:{title:"Partners"},components:{VSummary:s.a,VPartner:a},data:function(){return{summary:n.summary,content:n.content}}},r=(e(191),Object(o.a)(l,(function(){var t=this.$createElement,i=this._self._c||t;return i("Layout",[i("div",{staticClass:"summary-container"},[i("v-summary",{attrs:{desktopImage:this.summary.desktopImage,mobileImage:this.summary.mobileImage,title:this.summary.title,description:this.summary.description}})],1),i("div",{staticClass:"content-container"},this._l(this.content,(function(t){return i("v-partner",{key:t.key,attrs:{icon:t.icon,title:t.title,description:t.description,link:t.link}})})),1)])}),[],!1,null,"61653208",null));i.default=r.exports}}]);