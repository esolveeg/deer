(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{321:function(e,t,r){var content=r(327);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("3692fe36",content,!0,{sourceMap:!1})},322:function(e,t,r){"use strict";r.r(t);var o=r(332),l={name:"ProuctPartial",components:{StarRating:r.n(o).a},props:["product"]},n=(r(326),r(8)),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"book"},[r("nuxt-link",{attrs:{to:{name:"products-slug",params:{slug:e.product.slug}}}},[r("div",{staticClass:"book__image"},[r("div",{staticClass:"book__image--wrapper"},[r("div",{staticClass:"front",staticStyle:{position:"relative"}},[r("lazyImage",{attrs:{source:e.product.image,alt:e.product.name}})],1),e._v(" "),r("div",{staticClass:"back"},[r("img",{attrs:{src:e.product.image,alt:e.product.name}})])])])]),e._v(" "),r("div",{staticClass:"book__details"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("div",{staticClass:"book__title"},[r("nuxt-link",{attrs:{to:{name:"products-slug",params:{slug:e.product.slug}}}},[e._v(e._s(e.product.name))])],1),e._v(" "),r("div",{staticClass:"book__author"},[r("span",[e._v(e._s(e.$t("by"))+": ")]),r("nuxt-link",{attrs:{to:{name:"authors-slug",params:{slug:"anu"}}}},[e._v(e._s(e.product.author))])],1),e._v(" "),r("div",{staticClass:"book__rate"},[r("star-rating",{attrs:{rtl:!0,"star-size":20,"read-only":!0,"text-class":"hidden",rating:e.product.rate}})],1),e._v(" "),e._m(2),e._v(" "),r("add-to-cart-btn")],1)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"book__categories"},[t("ul",{staticClass:"book__categories--list"},[t("li",[this._v("رواية")]),this._v(" "),t("li",[this._v("دراما")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"sale-lable"},[t("span",[this._v("خصم")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"book__price price"},[t("del",[this._v(" EGP50")]),this._v(" "),t("span",{staticClass:"space"}),this._v(" "),t("ins",[this._v(" EGP35")])])}],!1,null,"3e3aa7e4",null);t.default=component.exports;installComponents(component,{AddToCartBtn:r(148).default})},325:function(e,t,r){var content=r(341);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("bd72c57c",content,!0,{sourceMap:!1})},326:function(e,t,r){"use strict";var o=r(321);r.n(o).a},327:function(e,t,r){(t=r(30)(!1)).push([e.i,'.book[data-v-3e3aa7e4]{direction:rtl}@media screen and (max-width:390px){.book[data-v-3e3aa7e4]{padding:0 10rem!important}}@media screen and (max-width:380px){.book[data-v-3e3aa7e4]{padding:0 9rem!important}}@media screen and (max-width:375px){.book[data-v-3e3aa7e4]{padding:0 8rem!important}}@media screen and (max-width:350px){.book[data-v-3e3aa7e4]{padding:0 7rem!important}}@media screen and (max-width:330px){.book[data-v-3e3aa7e4]{padding:0 5rem!important}}@media screen and (max-width:310px){.book[data-v-3e3aa7e4]{padding:0 2rem!important}}@media screen and (max-width:250px){.book[data-v-3e3aa7e4]{padding:0!important}}.book__image[data-v-3e3aa7e4]{cursor:pointer;width:100%;transition:all .3s ease-in-out}.book__image[data-v-3e3aa7e4],.book__image--wrapper[data-v-3e3aa7e4]{position:relative}.book__image .front[data-v-3e3aa7e4]{transform-origin:left center 0;transform-style:preserve-3d;transition:all .3s ease-in-out;z-index:2;position:relative}.book__image .front[data-v-3e3aa7e4]:before{top:0;z-index:3;content:"";height:100%;background:linear-gradient(90deg,transparent 8%,rgba(0,0,0,.1) 0,transparent 13%)}.book__image .back[data-v-3e3aa7e4],.book__image .front[data-v-3e3aa7e4]:before{left:0;width:100%;position:absolute;transition:all .3s ease-in-out}.book__image .back[data-v-3e3aa7e4]{top:.5%;z-index:1;height:99%;overflow:hidden;background:#000}.book__image .back img[data-v-3e3aa7e4]{width:100%}.book__image .back[data-v-3e3aa7e4]:after{top:4%;right:3px;z-index:2;width:15px;height:92%;content:"";position:absolute;background:url(http://exprostudio.com/html/book_library/images/books/bookpattren.png) no-repeat;background-size:100% 100%}.book__image[data-v-3e3aa7e4]:hover{padding:9px 13px 9px 0}.book__image:hover .front[data-v-3e3aa7e4]{transform:perspective(1000px) rotateY(-20deg) rotate(0deg)}.book__image:hover .back[data-v-3e3aa7e4]{transform:perspective(1000px) rotateY(-5deg) rotate(0deg);left:18px}.book__details[data-v-3e3aa7e4]{padding:16px 10px 10px}.book__details .sale-lable[data-v-3e3aa7e4]{margin:0 0 8px;min-height:16px}.book__details .sale-lable span[data-v-3e3aa7e4]{color:#fff;padding:0 5px;font-size:10px;line-height:16px;position:relative;text-transform:uppercase;border-radius:0 4px 4px 0;background-color:var(--primary)}.book__details .sale-lable span[data-v-3e3aa7e4]:before{top:0;width:0;height:0;right:100%;content:"";position:absolute;border-top:10px solid transparent!important;border-bottom:10px solid transparent!important;border-left-color:var(--primary);border-bottom-color:var(--primary);border-right:5px solid;border-right-color:var(--primary);border-top-color:var(--primary)}.book__categories--list[data-v-3e3aa7e4]{display:flex;margin:0 0 20px;font-size:13px;line-height:13px;padding:0 0 8px;border-bottom:1px solid var(--grey-border)}.book__categories--list li[data-v-3e3aa7e4]{cursor:pointer;transition:all .3s ease-in-out}.book__categories--list li[data-v-3e3aa7e4]:hover{color:var(--primary)}.book__categories--list li[data-v-3e3aa7e4]:not(:last-child){margin-left:0 10px}.book__categories--list li[data-v-3e3aa7e4]:not(:last-child):after{content:" , ";margin:0 3px}.book__title[data-v-3e3aa7e4]{display:block;padding:0 0 20px}.book__title a[data-v-3e3aa7e4]{font-size:var(--font-size);line-height:1.8rem;color:#000;font-weight:700;padding-bottom:1px;display:block;cursor:pointer;transition:transform 1s}.book__title a[data-v-3e3aa7e4]:hover{color:var(--primary);transform:translateY(-3px)}@media screen and (max-width:940px){.book__title a[data-v-3e3aa7e4]{font-size:1.8rem}}.book__author[data-v-3e3aa7e4]{padding:1rem 0}.book__author span[data-v-3e3aa7e4]{color:var(--grey-text-color)}.book__author a[data-v-3e3aa7e4],.book__author span[data-v-3e3aa7e4]{font-size:1.1rem;line-height:1,4rem;font-weight:400;text-transform:uppercase}.book__author a[data-v-3e3aa7e4]{color:var(--secondary);transition:all .3s ease-in-out}.book__author a[data-v-3e3aa7e4]:hover{color:var(--text-color)}.book__price[data-v-3e3aa7e4]{margin-bottom:20px}.book__price ins[data-v-3e3aa7e4]{color:var(--secondary);font-size:18px;text-decoration:none}.book__price .space[data-v-3e3aa7e4]{margin:0 3px}.book__price del[data-v-3e3aa7e4]{color:#666;font-size:13px}.book__rate[data-v-3e3aa7e4]{margin:0 0 20px}',""]),e.exports=t},334:function(e,t,r){"use strict";r.r(t);var o={},l=(r(340),r(8)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"paginator"},[r("span",{staticClass:"paginator__i prev"},[e._v(e._s(e.$t("prev")))]),e._v(" "),e._l(8,(function(i){return r("span",{key:i,staticClass:"paginator__i",class:0==i?"active":""},[e._v(e._s(i+1))])})),e._v(" "),r("span",{staticClass:"paginator__i next"},[e._v(e._s(e.$t("next")))])],2)}),[],!1,null,"492d2a36",null);t.default=component.exports},340:function(e,t,r){"use strict";var o=r(325);r.n(o).a},341:function(e,t,r){(t=r(30)(!1)).push([e.i,".paginator[data-v-492d2a36]{display:flex;flex-wrap:wrap;margin-top:3rem}.paginator__i[data-v-492d2a36]{display:inline-block;line-height:36px;border:1px solid rgba(26,34,125,.22);padding:0 15px;border-radius:50%;font-weight:700;font-size:var(--font-size);transition:all .3s ease-in-out;cursor:pointer}.paginator__i[data-v-492d2a36]:not(:last-child){margin-left:4px}.paginator__i.next[data-v-492d2a36],.paginator__i.prev[data-v-492d2a36]{border-radius:15px}.paginator__i.active[data-v-492d2a36],.paginator__i[data-v-492d2a36]:hover{background-color:var(--secondary);border:1px solid var(--secondary);color:#fff}",""]),e.exports=t},345:function(e,t,r){var content=r(382);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("7d972636",content,!0,{sourceMap:!1})},380:function(e,t,r){r(12),r(25),r(19),r(10),r(23),r(24),r(21),r(11);var o=r(59),l=r(60);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),c=t.children,d=void 0===c?[]:c,_=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,f=data.attrs,h=void 0===f?{}:f,x=l(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){o(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[_,v],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},h)},x),d.concat([r("path",{attrs:{d:"M19.845 4l-6.609 7.814a.995.995 0 00-.236.646v6.922l-2-1V12.46a.996.996 0 00-.236-.646L4.155 4zM22 2H2a1 1 0 00-.764 1.646L9 12.826V19a1 1 0 00.553.894l4 2A1 1 0 0015 21v-8.174l7.764-9.18A.999.999 0 0022 2z"}})]))}}},381:function(e,t,r){"use strict";var o=r(345);r.n(o).a},382:function(e,t,r){(t=r(30)(!1)).push([e.i,'.releases[data-v-4c60a761]{margin:6rem 0}.releases__wrapper[data-v-4c60a761]{display:grid;grid-template-columns:20% 80%;grid-template-areas:"filters books"}@media screen and (max-width:778px){.releases__wrapper[data-v-4c60a761]{grid-template-rows:auto auto;grid-template-columns:1fr;grid-template-areas:"filters" "books"}}[dir=ltr] .releases__filters[data-v-4c60a761]{padding-right:2rem}[dir=rtl] .releases__filters[data-v-4c60a761]{padding-left:2rem}.releases__filters[data-v-4c60a761]{grid-area:filters;transition:all .5s ease-in-out}@media screen and (max-width:778px){.releases__filters[data-v-4c60a761]{width:100%}}[dir=ltr] .releases__filters.mobile-active[data-v-4c60a761]{padding-right:0}[dir=rtl] .releases__filters.mobile-active[data-v-4c60a761]{padding-left:0}.releases__filters.mobile-active[data-v-4c60a761]{grid-area:filters;position:fixed;top:0;left:0;background:#fff;z-index:21;height:100vh;width:30%!important}@media screen and (max-width:678px){.releases__filters.mobile-active[data-v-4c60a761]{width:40%!important}}@media screen and (max-width:560px){.releases__filters.mobile-active[data-v-4c60a761]{width:50%!important}}@media screen and (max-width:490px){.releases__filters.mobile-active[data-v-4c60a761]{width:60%!important}}@media screen and (max-width:400px){.releases__filters.mobile-active[data-v-4c60a761]{width:70%!important}}.releases__filters.mobile-active .filter__overlay[data-v-4c60a761]{width:70vw;height:100vh;background-color:rgba(0,0,0,.5);transition:.2s;transition-delay:.4s;z-index:20;position:absolute;top:0;left:100%}.releases__filters.mobile-active .releases__close[data-v-4c60a761]{cursor:pointer;display:block;font-size:1.8rem;color:#777;text-transform:uppercase;padding:15px 14px 13px 28px;border-bottom:1px solid var(--grey-border);transition:color .2s linear}.releases__filters.mobile-active .releases__close span[data-v-4c60a761]{font-size:2rem;transition:color .2s linear}.releases__filters.mobile-active .releases__close[data-v-4c60a761]:hover{color:var(--primary)}.releases__filters.mobile-active .releases__mobile--filter[data-v-4c60a761]{display:none}.releases__filters.mobile-active .releases__collabse[data-v-4c60a761]{display:block!important;margin-top:3rem}.releases__filters.mobile-active .releases__collabse .collabse__title h3[data-v-4c60a761]{padding:2rem 3rem 0;font-weight:300!important;margin-bottom:1.5rem;text-transform:uppercase;font-family:"Hind",sans-serif!important}.releases__filters.mobile-active .releases__collabse .collabse__content ul[data-v-4c60a761]{padding:2rem 3rem}.releases__filters.mobile-active .releases__collabse .collabse__content ul li[data-v-4c60a761]{margin-bottom:1.5rem}.releases__filters.mobile-active .releases__collabse .collabse__content ul li a[data-v-4c60a761]{font-size:1.8rem}.releases__close[data-v-4c60a761]{display:none}.releases__collabse[data-v-4c60a761]:not(:last-child){margin-bottom:3rem}@media screen and (max-width:778px){.releases__collabse[data-v-4c60a761]{display:none}}.releases__mobile--filter[data-v-4c60a761]{display:none}@media screen and (max-width:778px){.releases__mobile--filter[data-v-4c60a761]{display:flex;align-items:center;justify-content:flex-end;cursor:pointer}.releases__mobile--filter:hover svg[data-v-4c60a761]{fill:var(--primary)}.releases__mobile--filter:hover span[data-v-4c60a761]{color:var(--primary)}[dir=ltr] .releases__mobile--filter svg[data-v-4c60a761]{margin-right:1rem}[dir=rtl] .releases__mobile--filter svg[data-v-4c60a761]{margin-left:1rem}.releases__mobile--filter svg[data-v-4c60a761]{fill:var(--text-color)}.releases__mobile--filter span[data-v-4c60a761]{font-size:1.8rem;text-transform:uppercase;color:var(--text-color);transition:all .3s ease-in-out}}.releases__right[data-v-4c60a761]{grid-area:books}.releases__books[data-v-4c60a761]{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:1rem}@media screen and (max-width:940px){.releases__books[data-v-4c60a761]{grid-template-columns:repeat(3,1fr)}}@media screen and (max-width:560px){.releases__books[data-v-4c60a761]{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width:390px){.releases__books[data-v-4c60a761]{grid-template-columns:1fr}}.releases__books--header h2[data-v-4c60a761]{font-size:3rem;text-transform:capitalize;margin-bottom:4rem;margin-left:1.5rem}@media screen and (max-width:778px){.releases__books--header h2[data-v-4c60a761]{margin-top:-4rem;margin-bottom:4rem}}.collabse__title[data-v-4c60a761]{border-bottom:1px solid var(--grey-border)}.collabse__title h3[data-v-4c60a761]{margin-bottom:.7rem}.collabse__content[data-v-4c60a761]{margin-top:2rem}.collabse__item[data-v-4c60a761]:not(:last-child){margin-bottom:1rem}.collabse__item--link[data-v-4c60a761]{font-size:var(--font-size);color:var(--text-color);transition:all .3s}[dir=ltr] .collabse__item--link[data-v-4c60a761]:hover{margin-left:3px}[dir=rtl] .collabse__item--link[data-v-4c60a761]:hover{margin-right:3px}.collabse__item--link.active[data-v-4c60a761],.collabse__item--link[data-v-4c60a761]:hover{color:var(--primary)}',""]),e.exports=t},417:function(e,t,r){"use strict";r.r(t);r(12),r(19),r(10),r(23),r(24),r(21),r(11);var o=r(26),l=r(322),n=r(334),c=r(380),d=r.n(c),_=r(42);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{Product:l.default,FilterIcon:d.a,Pagination:n.default},computed:m(m(m({},Object(_.b)("products",["products"])),Object(_.b)("authors",["authors"])),Object(_.b)("categories",["categories"])),methods:{mobileFilter:function(){document.querySelector("body").style.overflowY="hidden";var e=document.querySelector(".releases__filters");e.classList.add("mobile-active"),e.style.width=0,document.querySelector(".releases__close").classList.add("fadeInLeft"),document.querySelectorAll(".collabse__title").forEach((function(title){title.classList.add("bounceIn")})),document.querySelectorAll(".collabse__list").forEach((function(ul){ul.classList.add("fadeInLeft")}))},closeFilter:function(){var e=document.querySelector(".releases__filters");document.querySelector("body").style.overflowY="scroll",e.classList.remove("mobile-active"),e.style.width="100%"}}},h=(r(381),r(8)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"releases"},[r("div",{staticClass:"container"},[r("div",{staticClass:"releases__wrapper"},[r("div",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"releases__filters invisible animate__animated",attrs:{"data-animation":"fadeInRight"}},[r("div",{staticClass:"filter__overlay",on:{click:e.closeFilter}}),e._v(" "),r("div",{staticClass:"releases__close active animated delay-400ms",on:{click:e.closeFilter}},[r("span",[e._v("×")]),e._v(" close\n          ")]),e._v(" "),r("div",{staticClass:"releases__mobile--filter",on:{click:e.mobileFilter}},[r("filter-icon"),e._v(" "),r("span",[e._v("filter")])],1),e._v(" "),r("div",{staticClass:"releases__collabse"},[r("div",{staticClass:"collabse__title active animated delay-400ms"},[r("h3",[e._v(e._s(e.$t("categories")))])]),e._v(" "),r("div",{staticClass:"collabse__content"},[r("ul",{staticClass:"collabse__list active animated delay-500ms"},e._l(e.categories,(function(t,o){return r("li",{key:o,staticClass:"collabse__item"},[r("router-link",{staticClass:"collabse__item--link",attrs:{to:"/"}},[e._v(e._s(t.name))])],1)})),0)])]),e._v(" "),r("div",{staticClass:"releases__collabse"},[r("div",{staticClass:"collabse__title active animated delay-400ms"},[r("h3",[e._v(e._s(e.$t("authors")))])]),e._v(" "),r("div",{staticClass:"collabse__content"},[r("ul",{staticClass:"collabse__list active animated delay-500ms"},e._l(e.authors,(function(t,o){return r("li",{key:o,staticClass:"collabse__item"},[r("router-link",{staticClass:"collabse__item--link",attrs:{to:"/"}},[e._v(e._s(t.name))])],1)})),0)])])]),e._v(" "),r("div",{staticClass:"releases__right"},[r("div",{staticClass:"releases__books--header"},[r("h2",[e._v(e._s(e.$t("popular_books"))+" (10)")])]),e._v(" "),r("div",{staticClass:"releases__books"},e._l(e.products,(function(e,t){return r("Product",{directives:[{name:"lazyload",rawName:"v-lazyload"}],key:t,staticClass:"animate__animated invisible",attrs:{"data-animation":"zoomIn",product:e}})})),1),e._v(" "),r("pagination")],1)])])])])}),[],!1,null,"4c60a761",null);t.default=component.exports;installComponents(component,{Product:r(322).default,Pagination:r(334).default})}}]);