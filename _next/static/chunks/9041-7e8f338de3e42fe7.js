(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9041],{5324:function(e,t,n){"use strict";n.d(t,{Z:function(){return Nav_Nav}});var r,o,i,a=n(9499),c=n(9288),s=(0,c.zo)("div",{display:"flex",fontFamily:"$sans",fontWeight:"500",flexGrow:"0",variants:{orientation:{horizontal:{justifyContent:"flex-end",a:{whiteSpace:"nowrap"}},vertical:{flexDirection:"column",alignItems:"flex-start",padding:"0 0 $gr4",a:(r={color:"$slate10",padding:"$gr1 0 $gr2",marginBottom:"0"},(0,a.Z)(r,"&.active",{color:"$slate12 !important"}),(0,a.Z)(r,"&:hover",{color:"$indigo12"}),r)}}},"@sm":{flexDirection:"column",alignItems:"flex-start",padding:"$gr1 $gr4 $gr3",fontWeight:"500"},a:(o={padding:"$gr2 $gr3",display:"inline-flex",color:"$slate12",textDecoration:"none",borderRadius:"2rem",position:"relative",transition:"$canopyAll","@sm":{padding:"0",marginBottom:"$gr2",transition:"none"}},(0,a.Z)(o,"&:hover",{color:"$indigo11 !important"}),(0,a.Z)(o,"&.active",{color:"$indigo11"}),o)}),l=(0,c.zo)("nav",{position:"relative",display:"flex",flexDirection:"row",alignItems:"center",zIndex:"1",flexGrow:"0",fontSize:"$gr4",nav:(i={fontSize:"$gr3",margin:"$gr2 0",padding:"0 $gr3",borderLeft:"2px solid $slate4"},(0,a.Z)(i,"& ".concat(s),{paddingBottom:"0"}),(0,a.Z)(i,"a:first-child",{paddingTop:0}),(0,a.Z)(i,"a:last-child",{paddingBottom:0}),i)}),d=n(1664),u=n.n(d),g=n(7294),f=n(1163),p=n(5893),ItemsLink=function(e){var t=e.path,n=e.subNavigation,r=e.text,o=(0,f.useRouter)(),i=(0,g.useRef)(null),a=o.query,c=o.pathname.replace(/\[.*\]/,null==a?void 0:a.slug);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u(),{href:t,className:t===c?"active":"",onClick:function(e){var t=null==e?void 0:e.currentTarget.href,n=t.replace(/.*\#/,"");if(n!==t){e.preventDefault(),window.history.pushState({},"",t);var r=document.getElementById(n);r&&window.scrollTo({behavior:"smooth",top:(null==r?void 0:r.getBoundingClientRect().top)-document.body.getBoundingClientRect().top-50})}},ref:i,children:r}),n&&t===c&&(0,p.jsx)(Nav_Nav,{items:n,orientation:"vertical"})]})};function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Nav_Items=function(e){var t=e.items,n=e.orientation,r=e.subNavigation;return(0,p.jsx)(s,{orientation:n,children:null==t?void 0:t.map(function(e){return(0,g.createElement)(ItemsLink,_objectSpread(_objectSpread({},e),{},{key:e.path,subNavigation:r}))})})},Nav_Nav=function(e){var t=e.items,n=e.orientation,r=e.subNavigation;return(0,p.jsx)(l,{children:(0,p.jsx)(Nav_Items,{items:t,orientation:void 0===n?"horizontal":n,subNavigation:r})})}},5407:function(e,t,n){"use strict";n.d(t,{O:function(){return a},W:function(){return c}});var r=n(9499),o=n(2765),i=n(9288),a=(0,i.zo)("button",{padding:"$gr2 $gr3",borderRadius:"2rem",textDecoration:"none",border:"none",backgroundColor:"$slate3",color:"$slate11 !important",boxShadow:"1px 1px 2px  ".concat(o.VS.slateA6),fontWeight:"500",fontSize:"$gr4",cursor:"pointer",transition:"$canopyAll","@sm":{padding:"$gr2 $gr3",fontSize:"$gr3"},variants:{buttonType:{primary:{backgroundColor:"$indigo11",color:"$indigo2 !important","&:hover, &:focus":{backgroundColor:"$indigo9"}},secondary:{backgroundColor:"$slate3",color:"$slate11 !important","&:hover, &:focus":{backgroundColor:"$slate6"}},transparent:{backgroundColor:"transparent",boxShadow:"none",color:"$slate11 !important",textDecoration:"underline",paddingLeft:"0",paddingRight:"0","&:hover, &:focus":{backgroundColor:"transparent"}}},buttonSize:{small:{fontSize:"$gr3"},tiny:{padding:"$gr1 $gr2",fontSize:"$gr2"}}}}),c=(0,i.zo)("div",(0,r.Z)({margin:"$gr4 0 0",display:"flex"},"> ".concat(a),{marginRight:"$gr3","&:last-child":{margin:"0"}}))},4729:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});var r=n(3278),o=n(9288),i=n(5893),a=(0,o.zo)("div",{margin:"0 auto",variants:{containerType:{default:{maxWidth:r.G.default},wide:{maxWidth:r.G.wide}},isFlex:{false:{},true:{display:"flex"}},isRelative:{false:{},true:{position:"relative"}}},width:"100%",boxSizing:"border-box",padding:"0 $gr5","@xxl":{padding:"0"},"@lg":{padding:"0 $gr4"},"@md":{padding:"0 $gr4"},"@sm":{padding:"0 $gr4"},"@xs":{padding:"0 $gr3"},"@xxs":{padding:"0 $gr3"}});t.Z=function(e){var t=e.children,n=e.className,r=e.containerType,o=e.isFlex,c=e.isRelative,s=e.maxWidth;return(0,i.jsx)(a,{className:n,containerType:void 0===r?"default":r,css:s?{maxWidth:s}:{},isFlex:void 0!==o&&o,isRelative:void 0!==c&&c,children:t})}},7843:function(e,t,n){"use strict";n.d(t,{Z:function(){return layout}});var r=n(7294),o=n(2765),i=n(9288),a=(0,i.zo)("div",{display:"flex",justifyContent:"space-between",fontSize:"$gr3",fontWeight:"500"}),c=(0,i.zo)("footer",{boxShadow:"inset 1px 2px 2px  ".concat(o.VS.slateA3),padding:"$gr3 0",marginTop:"$gr6"}),s=(0,i.zo)("a",{color:"$indigo11",fill:"$indigo11",display:"flex",alignItems:"center",textDecoration:"none",svg:{marginRight:"$gr2",height:"$gr3",color:"inherit",fill:"inherit"}}),l=n(4729),d=n(5893),u=(0,i.zo)("svg",{fill:"$indigo1"}),SVG_IIIF=function(){return(0,d.jsxs)(u,{viewBox:"0 0 493.35999 441.33334",id:"iiif-logo",version:"1.1",children:[(0,d.jsx)("title",{children:"IIIF Manifest Options"}),(0,d.jsx)("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,441.33333)",children:(0,d.jsxs)("g",{transform:"scale(0.1)",children:[(0,d.jsx)("path",{className:"iiif-blue",d:"M 65.2422,2178.75 775.242,1915 773.992,15 65.2422,276.25 v 1902.5"}),(0,d.jsx)("path",{className:"iiif-blue",d:"m 804.145,2640.09 c 81.441,-240.91 -26.473,-436.2 -241.04,-436.2 -214.558,0 -454.511,195.29 -535.9527,436.2 -81.4335,240.89 26.4805,436.18 241.0387,436.18 214.567,0 454.512,-195.29 535.954,-436.18"}),(0,d.jsx)("path",{className:"iiif-red",d:"M 1678.58,2178.75 968.578,1915 969.828,15 1678.58,276.25 v 1902.5"}),(0,d.jsx)("path",{className:"iiif-red",d:"m 935.082,2640.09 c -81.437,-240.91 26.477,-436.2 241.038,-436.2 214.56,0 454.51,195.29 535.96,436.2 81.43,240.89 -26.48,436.18 -241.04,436.18 -214.57,0 -454.52,-195.29 -535.958,-436.18"}),(0,d.jsx)("path",{className:"iiif-blue",d:"m 1860.24,2178.75 710,-263.75 -1.25,-1900 -708.75,261.25 v 1902.5"}),(0,d.jsx)("path",{className:"iiif-blue",d:"m 2603.74,2640.09 c 81.45,-240.91 -26.47,-436.2 -241.03,-436.2 -214.58,0 -454.52,195.29 -535.96,436.2 -81.44,240.89 26.48,436.18 241.03,436.18 214.57,0 454.51,-195.29 535.96,-436.18"}),(0,d.jsx)("path",{className:"iiif-red",d:"m 3700.24,3310 v -652.5 c 0,0 -230,90 -257.5,-142.5 -2.5,-247.5 0,-336.25 0,-336.25 l 257.5,83.75 V 1690 l -258.61,-92.5 V 262.5 L 2735.24,0 v 2360 c 0,0 -15,850 965,950"})]})})]})},g=n(5014),f=n(5407),p=n(7642),h=n(2010),Footer_ThemeMode=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],o=(0,h.F)(),i=o.theme,a=o.setTheme,c=(0,p.MQ)().canopyState,s=(0,g.EK)("footerToggleTheme");(0,r.useEffect)(function(){return n(!0)},[]);var handleTheme=function(e){switch(e){case"light":a("dark");break;case"dark":a("light")}};return t&&c.config.theme.toggleEnabled?(0,d.jsx)(f.O,{as:"button",onClick:function(){return handleTheme(i)},buttonSize:"small",children:s}):(0,d.jsx)(d.Fragment,{})},Footer_Footer=function(){return(0,d.jsx)(c,{children:(0,d.jsx)(l.Z,{children:(0,d.jsxs)(a,{children:[(0,d.jsxs)(s,{href:"https://api.dc.library.northwestern.edu/api/v2/search?query=collection.id%3Aa2d334d8-8ea7-4dca-a65a-25509b76283c%20AND%20id%3D32fe4b01-c9a1-4436-827f-7d840ce125dbAND4d159d07-98e6-43c4-bba2-171a6aa906dcAND844a892d-a595-4727-a71d-41e69ad07f0fANDd4e3d25a-acc4-498c-8a26-c07f3c2ee46aAND581ee781-3f03-4fc0-8f44-013c241fab93ANDf09d0bf6-86dc-4b59-a8d3-42cc3a2b7d1fANDc8eec63b-7bb5-4d24-bc2d-251e2452bd11ANDd6bc7c03-49f0-4c2d-a6c8-32b25b45d29fAND531a8735-7dc5-4308-8921-a330cd0a8696ANDc8e48724-a514-4cb1-a338-e4a821b2fc1eAND7b242c48-d70e-4532-ad2f-d6906d2a01e0AND835d25ee-00e7-4150-834a-1fa78254be32ANDb2538ecd-f398-4802-a2c0-b49f419467a1&as=iiif&size=25",target:"_blank",children:[(0,d.jsx)(SVG_IIIF,{}),(0,g.EK)("footerSourceCollection")]}),(0,d.jsx)(Footer_ThemeMode,{})]})})})},x=n(9499),b=(0,i.zo)("span",{display:"flex",marginRight:"$gr2",fontFamily:"$display",fontSize:"$gr6",fontWeight:"400",letterSpacing:"-0.01em","@sm":{marginRight:"0"}}),v=(0,i.zo)("div",{flexGrow:"1",display:"none",justifyContent:"flex-end",button:{display:"flex",flexDirection:"column",justifyContent:"center",background:"transparent",border:"none",fontSize:"$gr3",height:"calc(($gr1 * 2) + $gr4 + 1px)",cursor:"pointer"},"@sm":{display:"flex"}}),m=(0,i.zo)("div",{flexGrow:"1",display:"flex",justifyContent:"flex-end","@sm":{flexDirection:"column-reverse",backgroundColor:"$slate1",position:"absolute",width:"100%",padding:"$gr1 0 $gr3",overflow:"hidden",left:"0",top:"-10000px",boxShadow:"1px 2px 2px ".concat(o.VS.slateA4)},variants:{showNav:{true:{top:"calc($gr4 + ($gr2 * 2))"}}}}),$=(0,i.zo)("div",(0,x.Z)({width:"100%",padding:"$gr1 $gr5",backgroundColor:"$slate1",display:"flex",flexDirection:"row",justifyContent:"space-between",color:"$slate1",fontSize:"1rem",lineHeight:"1.5rem",alignItems:"center",zIndex:"1",boxShadow:"1px 1px 3px ".concat(o.VS.slateA6),boxSizing:"border-box","@xl":{padding:"$gr1 $gr4"},"@lg":{padding:"$gr1 $gr4"},"@md":{padding:"$gr1 $gr4"},"@sm":{padding:"$gr1 $gr4"},"@xs":{padding:"$gr1 $gr3"},"@xxs":{padding:"$gr1 $gr3"}},"&  ".concat(b," a"),{textDecoration:"none",color:"$slate12","&:hover, &:focus":{color:"$indigo10"}})),y=(0,i.zo)("header",{position:"fixed",width:"100%",zIndex:"10",top:"0",display:"flex",flexDirection:"column",transition:"$canopyOpacity",opacity:"1",variants:{isVisible:{false:{opacity:"0"}}}}),j=n(2469),w=n(1830),S=n(1664),O=n.n(S),z=n(29),_=n(7794),k=n.n(_),N=n(6744),D=(0,N.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"center",paddingLeft:"$gr2",select:{color:"$slate9",background:"none",border:"none",fontFamily:"$display",fontSize:"$gr3",cursor:"pointer","&:hover, &:focus":{color:"$indigo11"}}}),Locale_Locale=function(){var e,t=(0,p.MQ)(),n=t.canopyState,r=t.canopyDispatch,o=n.locale,i=n.config,a=(e=(0,z.Z)(k().mark(function _callee(e){var t;return k().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=r,n.next=3,(0,g.Kd)(null==i?void 0:i.locales,null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.value);case 3:n.t1=n.sent,n.t2={locale:n.t1,type:"updateLocale"},(0,n.t0)(n.t2);case 6:case"end":return n.stop()}},_callee)})),function(t){return e.apply(this,arguments)});return(null==i?void 0:i.locales.length)<=1?null:(0,d.jsx)(D,{children:(0,d.jsx)("select",{onChange:a,children:null==i?void 0:i.locales.map(function(e){return(0,d.jsx)("option",{value:e.lang,selected:e.lang===o.lang,children:e.label},e.lang)})})})},C=n(5324),A=(0,i.zo)("input",{transition:"$canopyAll",cursor:"select",fontSize:"$gr3",fontFamily:"$sans",fontWeight:"500",color:"$slate12",backgroundColor:"$slate2",padding:"0 $gr3 0 calc($gr4 + $gr2)",border:"1px solid $slate6",borderRadius:"2rem",height:"calc($gr4 + $gr1 * 2)",flexGrow:"1",position:"absolute",right:"0",width:"calc(100% - ($gr3 + $gr4 + $gr2))",zIndex:"0","&:active, &:focus":{color:"$indigo12",backgroundColor:"$indigo4",outline:"none",flexShrink:"1",border:"1px solid $indigo7",boxShadow:"inset 1px 1px 1px ".concat(o.EhR.indigoA4)}}),I=(0,i.zo)("button",{padding:"0 $gr3",height:"calc($gr4 + $gr1 * 2)",fontSize:"$gr3",fontWeight:"500",fontFamily:"$sans",borderRadius:"2rem ",backgroundColor:"transparent",color:"$slate9",cursor:"pointer",transition:"$canopyAll",zIndex:"1",border:"none","&:hover, &:focus":{color:"$indigo11",opacity:"1"}}),F=(0,i.zo)("form",{position:"relative",display:"flex",alignItems:"center",cursor:"select",margin:"0 $gr4",flexGrow:"1",flexShrink:"1",width:"100%",justifyContent:"space-between",opacity:"1","@sm":{maxWidth:"calc(100% - ($gr4 * 2))"},variants:{isFocused:{true:{svg:{color:"$indigo9"}}}},"&:hover input":{outlineColor:"$indigo7"},svg:{color:"$slate9",marginLeft:"$gr2",position:"relative",zIndex:"1",transition:"$canopyAll"},"&:focus-within":(0,x.Z)({svg:{color:"$indigo9"}},"> ".concat(I),{color:"$indigo11"})}),P=n(1163);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,x.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Search_Search=function(){var e=(0,r.useState)(),t=e[0],n=e[1],o=(0,P.useRouter)(),i=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(o){var e=o.query.q;e&&i.current&&(i.current.value=e),n(e)}},[o]),(0,d.jsxs)(F,{onSubmit:function(e){e.preventDefault(),o.push({pathname:"/search",query:_objectSpread(_objectSpread({},o.query),{},{q:t})})},"data-testid":"search-form",children:[(0,d.jsx)(A,{onChange:function(e){n(e.target.value)},ref:i}),(0,d.jsx)(j._Ve,{}),(0,d.jsx)(I,{type:"submit",children:(0,g.EK)("searchButton")})]})},R=n(6803),Z=n(6441),Header_Header=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],o=(0,P.useRouter)(),i=o.pathname,a=o.query,c=(0,p.MQ)().canopyState.headerVisible,s=(0,Z.Z)({relativePath:""}).navigation;return(0,r.useEffect)(function(){n(!1)},[i,a]),(0,d.jsx)(y,{isVisible:!!c||"/search"!==i,children:(0,d.jsxs)($,{children:[(0,d.jsx)(b,{children:(0,d.jsx)(O(),{href:"/",children:(0,d.jsx)(w.Label,{label:R[0].label,as:"span"})})}),(0,d.jsx)(v,{children:(0,d.jsx)("button",{onClick:function(){return n(!t)},children:(0,d.jsx)(j.RYk,{})})}),(0,d.jsxs)(m,{showNav:t,children:[(0,d.jsx)(Search_Search,{}),s&&(0,d.jsx)(C.Z,{items:s}),(0,d.jsx)(Locale_Locale,{})]})]})})},E=(0,N.zo)("main",{margin:"0"}),Shared_Main=function(e){var t=e.children;return(0,d.jsx)(E,{children:t})},layout=function(e){var t=e.children;return(0,d.jsxs)("div",{children:[(0,d.jsx)(Header_Header,{}),(0,d.jsx)(Shared_Main,{children:t}),(0,d.jsx)(Footer_Footer,{})]})}},6441:function(e,t,n){"use strict";var r=n(29),o=n(7794),i=n.n(o),a=n(7294);t.Z=function(e){var t=e.relativePath,o=(0,a.useState)(),c=o[0],s=o[1];return(0,a.useEffect)(function(){(0,r.Z)(i().mark(function _callee(){var e,r,o;return i().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(i.prev=0,void 0!==t){i.next=3;break}return i.abrupt("return");case 3:return e="content/",r=t?"".concat(e).concat(t):e,i.next=7,n(9548)("./".concat(r,"_meta.json"));case 7:s(function transformObjectWithGetters(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.getOwnPropertyDescriptor(e,n);null!=r&&r.get?t[n]=r.get.call(e):t[n]="object"==typeof e[n]&&null!==e[n]?transformObjectWithGetters(e[n]):e[n]}return t}(null==(o=i.sent)?void 0:o.default)),i.next=16;break;case 12:i.prev=12,i.t0=i.catch(0),console.warn(i.t0),console.warn("The relative _meta.json file could not be found.");case 16:case"end":return i.stop()}},_callee,null,[[0,12]])}))()},[]),{navigation:c}}},3278:function(e,t,n){"use strict";n.d(t,{G:function(){return r}});var r={default:"1200px",wide:"1440px"}},9548:function(e,t,n){var r={"./content/Congo/_meta.json":[2262,2262],"./content/_meta.json":[7005,7005],"./content/about/_meta.json":[4050,4050],"./content/objects/_meta.json":[5967,5967],"./content/southAfrica/_meta.json":[2398,2398]};function webpackAsyncContext(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],o=t[0];return n.e(t[1]).then(function(){return n.t(o,19)})}webpackAsyncContext.keys=function(){return Object.keys(r)},webpackAsyncContext.id=9548,e.exports=webpackAsyncContext},2868:function(){},4777:function(){},9830:function(){},209:function(){}}]);