(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"66887e84"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"04615e50"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/PersonalWebsite/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"1fac":function(e,t,n){"use strict";var r=n("6110"),o=n.n(r);o.a},"35bd":function(e,t,n){"use strict";var r=n("e7b9"),o=n.n(r);o.a},"3ba0":function(e,t,n){"use strict";var r=n("fc88"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var r,o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/PersonalWebsite/"}},[e._v("Music")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/PersonalWebsite/Resume"}},[e._v("Resume")])],1),n("h1",[e._v("Aiden Rourke")]),n("i",[e._v("Ottawa, Canada")]),n("ul",{staticClass:"links"},[n("li",{staticClass:"link"},[n("SvgLink",{attrs:{link:"https://github.com/AidenRourke",svgLink:"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"}})],1),n("li",{staticClass:"link"},[n("SvgLink",{attrs:{link:"https://www.linkedin.com/in/aidenrourke/",svgLink:"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"}})],1),n("li",{staticClass:"link"},[n("SvgLink",{attrs:{link:"https://www.instagram.com/aiden_rourke/",svgLink:"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"}})],1),n("li",{staticClass:"link"},[n("SvgLink",{attrs:{link:"https://www.facebook.com/aiden.rourke",svgLink:"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"}})],1)]),n("p",[e._v("To get in touch, write to aidenrourke@gmail.com")]),n("router-view")],1)},i=[],s=n("bade"),c={name:"App",components:{SvgLink:s["a"]}},u=c,l=(n("034f"),n("2877")),d=Object(l["a"])(u,a,i,!1,null,null,null),p=d.exports,f=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"music",class:{"is-complete":e.loaded}},[n("SongInformation",{on:{loaded:e.toggleLoaded}})],1)},m=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.song?n("div",[e.current?n("h3",[e._v("Checkout what I'm listening to right now!")]):n("h3",[e._v("Checkout one of my favourite songs this\n        "),n("Dropdown",{attrs:{options:e.arrayOfObjects,selected:e.timerange},on:{updateOption:e.updateTimerange}}),e._v("\n        !\n    ")],1),n("a",{attrs:{href:e.song.external_urls.spotify,target:"_blank"}},[n("img",{attrs:{src:e.song.album.images[1].url}}),n("p",[e._v(e._s(e.song.name))])]),n("i",[e._v(e._s(e.song.artists[0].name))])]):e._e()},g=[],b=(n("7f7f"),n("96cf"),n("3b8d")),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn-group"},[void 0!==e.selectedOption.name?n("li",{ref:"button",staticClass:"dropdown-toggle",on:{click:e.toggleMenu}},[e._v("\n        "+e._s(e.selectedOption.name)+"\n        ")]):e._e(),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"},{name:"closable",rawName:"v-closable",value:{exclude:["button"],handler:"closeMenu"},expression:"{exclude: ['button'], handler: 'closeMenu'}"}],staticClass:"dropdown-menu"},e._l(e.options,(function(t){return n("li",[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(n){return e.updateOption(t)}}},[e._v("\n                "+e._s(t.name)+"\n            ")])])})),0)])},w=[],_={data:function(){return{selectedOption:{name:""},showMenu:!1,placeholderText:"Please select an item"}},props:{options:{type:[Array,Object]},selected:{},placeholder:[String]},mounted:function(){this.selectedOption=this.selected,this.placeholder&&(this.placeholderText=this.placeholder)},methods:{updateOption:function(e){this.selectedOption=e,this.closeMenu(),this.$emit("updateOption",this.selectedOption)},toggleMenu:function(){this.showMenu=!this.showMenu},closeMenu:function(){this.showMenu=!1}}},y=_,O=(n("3ba0"),Object(l["a"])(y,k,w,!1,null,null,null)),j=O.exports,x=n("bc3a"),S=n.n(x),L="https://whispering-tundra-82613.herokuapp.com",E={getTopTrack:function(e){return S.a.get("".concat(L,"/top_track?time_range=").concat(e))},startSSE:function(){return new EventSource("".concat(L,"/stream"))}},T=E,C={name:"SongInformation",components:{Dropdown:j},data:function(){return{song:void 0,current:!1,arrayOfObjects:[{name:"life",value:"long_term"},{name:"year",value:"medium_term"},{name:"month",value:"short_term"}],timerange:{name:"month",value:"short_term"}}},methods:{updateTimerange:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.timerange=t,e.next=3,this.getTopTrack();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getTopTrack:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.getTopTrack(this.timerange.value);case 2:t=e.sent,t.data&&(this.song=t.data,this.current=!1);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{r=T.startSSE(),r.addEventListener("message",function(e){var t=JSON.parse(e.data);t.name?(this.song=t,this.current||(this.current=!0)):this.getTopTrack(),this.$emit("loaded")}.bind(this),!1)}catch(t){console.log("can't connect")}case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),destroyed:function(){r.close()}},M=C,P=Object(l["a"])(M,v,g,!1,null,null,null),R=P.exports,A={name:"Music",components:{SongInformation:R},data:function(){return{loaded:!1}},methods:{toggleLoaded:function(){this.loaded=!0}}},$=A,N=(n("1fac"),Object(l["a"])($,h,m,!1,null,null,null)),I=N.exports;o["a"].use(f["a"]);var W,D=new f["a"]({mode:"history",routes:[{path:"/PersonalWebsite/Resume",name:"resume",component:function(){return n.e("about").then(n.bind(null,"1ba2"))}},{path:"/PersonalWebsite/*",name:"music",component:I}]});o["a"].config.productionTip=!1,o["a"].directive("closable",{bind:function(e,t,n){W=function(r){r.stopPropagation();var o=t.value,a=o.handler,i=o.exclude,s=!1;i.forEach((function(e){if(!s){var t=n.context.$refs[e];s=t.contains(r.target)}})),e.contains(r.target)||s||n.context[a]()},document.addEventListener("click",W),document.addEventListener("touchstart",W)},unbind:function(){document.removeEventListener("click",W),document.removeEventListener("touchstart",W)}}),new o["a"]({router:D,render:function(e){return e(p)}}).$mount("#app")},6110:function(e,t,n){},"64a9":function(e,t,n){},bade:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:e.link,target:"_blank",rel:"noopener"}},[n("img",{staticClass:"svg",attrs:{height:"25",width:"25",src:e.svgLink}})])},o=[],a={name:"SvgLink",props:["svgLink","link"]},i=a,s=(n("35bd"),n("2877")),c=Object(s["a"])(i,r,o,!1,null,"4d3d5048",null);t["a"]=c.exports},e7b9:function(e,t,n){},fc88:function(e,t,n){}});
//# sourceMappingURL=app.f53b1871.js.map