/*! For license information please see 18.a8d54072.chunk.js.LICENSE.txt */
(this.webpackJsonpInpres=this.webpackJsonpInpres||[]).push([[18],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(3),r=n(4),o=n(9),s=n(17),c=n(0),i=n.n(c),u=n(19),l=n(93),f=n(95),d=n(96),p=n(1),m=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsx)(i.a.Fragment,{children:Object(p.jsx)("section",{className:"bg-home bg-light d-flex align-items-center",children:Object(p.jsx)(l.a,{children:Object(p.jsx)(f.a,{className:"justify-content-center",children:Object(p.jsx)(d.a,{xs:12,children:Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)("div",{className:"icon d-flex align-items-center justify-content-center bg-soft-primary rounded-circle mx-auto",style:{height:"90px",width:"90px"},children:Object(p.jsx)("i",{className:"uil uil-thumbs-up align-middle h1 mb-0"})}),Object(p.jsx)("h1",{className:"my-4 font-weight-bold",children:"Thank You"}),Object(p.jsx)("p",{className:"text-muted para-desc mx-auto",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."}),Object(p.jsx)(u.b,{to:"index",className:"btn btn-soft-primary mt-3",children:"Go To Home"})]})})})})})})}}]),n}(c.Component)},62:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&e.push(s)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var c in a)n.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},63:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return b}));var a,r=n(18),o=n.n(r);function s(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function c(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function i(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var u={};function l(e){u[e]||("undefined"!==typeof console&&console.error(e),u[e]=!0)}var f="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof f))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var d=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];"undefined"===typeof window||!window.document||window.document.createElement;function b(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},93:function(e,t,n){"use strict";var a=n(5),r=n(14),o=n(0),s=n.n(o),c=n(18),i=n.n(c),u=n(62),l=n.n(u),f=n(63),d=["className","cssModule","fluid","tag"],p={tag:f.g,fluid:i.a.oneOfType([i.a.bool,i.a.string]),className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.fluid,c=e.tag,i=Object(r.a)(e,d),u="container";!0===o?u="container-fluid":o&&(u="container-"+o);var p=Object(f.d)(l()(t,u),n);return s.a.createElement(c,Object(a.a)({},i,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},95:function(e,t,n){"use strict";var a=n(5),r=n(14),o=n(0),s=n.n(o),c=n(18),i=n.n(c),u=n(62),l=n.n(u),f=n(63),d=["className","cssModule","noGutters","tag","form","widths"],p=i.a.oneOfType([i.a.number,i.a.string]),m={tag:f.g,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,c=e.tag,i=e.form,u=e.widths,p=Object(r.a)(e,d),m=[];u.forEach((function(t,n){var a=e[t];if(delete p[t],a){var r=!n;m.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var b=Object(f.d)(l()(t,o?"no-gutters":null,i?"form-row":"row",m),n);return s.a.createElement(c,Object(a.a)({},p,{className:b}))};g.propTypes=m,g.defaultProps=b,t.a=g},96:function(e,t,n){"use strict";var a=n(5),r=n(14),o=n(0),s=n.n(o),c=n(18),i=n.n(c),u=n(62),l=n.n(u),f=n(63),d=["className","cssModule","widths","tag"],p=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),b={tag:f.g,xs:m,sm:m,md:m,lg:m,xl:m,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},j=function(e){var t=e.className,n=e.cssModule,o=e.widths,c=e.tag,i=Object(r.a)(e,d),u=[];o.forEach((function(t,a){var r=e[t];if(delete i[t],r||""===r){var o=!a;if(Object(f.c)(r)){var s,c=o?"-":"-"+t+"-",d=h(o,t,r.size);u.push(Object(f.d)(l()(((s={})[d]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s)),n))}else{var p=h(o,t,r);u.push(p)}}})),u.length||u.push("col");var p=Object(f.d)(l()(t,u),n);return s.a.createElement(c,Object(a.a)({},i,{className:p}))};j.propTypes=b,j.defaultProps=g,t.a=j}}]);
//# sourceMappingURL=18.a8d54072.chunk.js.map