(this["webpackJsonpnasa-react"]=this["webpackJsonpnasa-react"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(16),r=c.n(n),i=c(8),o=c(2),l=c(1);function j(){return Object(l.jsx)(i.b,{to:"/nasaphoto",children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{class:"container",children:Object(l.jsx)("a",{href:"/nasaphoto",className:"btn",children:"Click for Daily Astronomy Image"})})})})}var h=c(14),d=c.n(h),p=c(18),b=c(19);function u(){return Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("div",{className:"rocket-cont",children:Object(l.jsx)("p",{className:"rocket-bar",children:"Go Home"})})})}var m="N6tgt6Y6eiHcwwan2X9C09RP7ucNP1oj1FNyBGaP";function x(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(m));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c),console.log(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c?Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"const-cont",children:[Object(l.jsx)("h1",{className:"info-header",children:"Astronomy Picture of The Day"}),Object(l.jsxs)("p",{className:"const-sub",children:["Check out NASA's ",Object(l.jsx)("a",{href:"https://apod.nasa.gov/apod/archivepix.html",className:"archive",children:"archive"})," of previous image captures along with a brief explanation written by a professional astronomer."]})]}),"image"===c.media_type?Object(l.jsx)("img",{src:c.url,alt:c.title,className:"url-img"}):Object(l.jsx)("iframe",{title:"space-video",src:c.hdurl,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:"photo"}),Object(l.jsxs)("div",{className:"media-cont",children:[Object(l.jsx)("h2",{className:"url-title",children:Object(l.jsx)("p",{className:"title-cont",children:c.title})}),Object(l.jsxs)("h3",{className:"copyright",children:["Image credit and copyright: ",c.copyright]}),Object(l.jsxs)("p",{className:"main-text",children:["Explanation: ",c.explanation]})]})]})]}):Object(l.jsx)("div",{})}c(31);var O=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(o.a,{component:j,path:"/",exact:!0}),Object(l.jsx)(o.a,{component:x,path:"/nasaphoto"})]})})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2ed29498.chunk.js.map