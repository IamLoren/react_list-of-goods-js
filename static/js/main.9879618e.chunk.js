(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(8),c=n.n(s),o=n(6),r=n(7),i=(n(13),n(4)),a=n.n(i),u=(n(14),n(1)),l=n(0),b=function(t){var e=t.good;return Object(l.jsx)("li",{"data-cy":"Good",children:e})},j=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)(b,{good:t},t)}))})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h="alphabet",g="length";var O=function(){var t,e=Object(u.useState)(""),n=Object(o.a)(e,2),s=n[0],c=n[1],i=function(t,e){var n=Object(r.a)(t);return e&&n.sort((function(t,s){switch(e){case h:return t.localeCompare(s);case g:return t.length-s.length;default:return n}})),n}(d,s),b=Object(u.useState)(!1),O=Object(o.a)(b,2),p=O[0],f=O[1];return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{onClick:function(){return c(h)},type:"button",className:a()("button","is-info",{"is-light":s!==h}),children:"Sort alphabetically"}),Object(l.jsx)("button",{onClick:function(){return c(g)},type:"button",className:a()("button","is-success",{"is-light":s!==g}),children:"Sort by length"}),Object(l.jsx)("button",{onClick:function(){return f(!p)},type:"button",className:a()("button","is-warning",{"is-light":!p}),children:"Reverse"}),Object(l.jsx)("button",{onClick:function(){c(""),f(!1)},type:"button",className:"button is-danger is-light",style:{display:p||s?"block":"none"},children:"Reset"})]}),p?Object(l.jsx)(j,{goods:(t=i,Object(r.a)(t).reverse())}):Object(l.jsx)(j,{goods:i})]})};c.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9879618e.chunk.js.map