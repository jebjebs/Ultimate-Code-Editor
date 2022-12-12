(this["webpackJsonpcodepen-clone"]=this["webpackJsonpcodepen-clone"]||[]).push([[0],{23:function(e,t,a){e.exports=a(60)},28:function(e,t,a){},29:function(e,t,a){},57:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(19),l=a.n(o),r=(a(28),a(7)),u=a(11),m=a(2),i=(a(29),a(30),a(31),a(32),a(33),a(20)),s=a(21),h=a(13);a(39),a(40),a(41),a(42),a(43),a(44),a(45),a(46),a(17),a(47),a(48),a(49),a(51),a(52),a(53);function p(e){var t=e.language,a=e.displayName,o=e.value,l=e.onChange,u=e.theme,m=Object(n.useState)(!0),p=Object(r.a)(m,2),E=p[0],g=p[1],d=u;return console.log("Editor.js Theme: ".concat(u)),c.a.createElement("div",{className:"editor-container ".concat(E?"":"collapsed")},c.a.createElement("div",{className:"editor-title"},a,c.a.createElement("button",{type:"button",className:"expand-collapse-btn",onClick:function(){return g((function(e){return!e}))}},c.a.createElement(s.a,{icon:E?h.a:h.b}))),c.a.createElement(i.Controlled,{onBeforeChange:function(e,t,a){l(a)},value:o,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:d,lineNumbers:!0,extraKeys:{"Ctrl-Space":"autocomplete"},matchBrackets:!0,autoCloseBrackets:!0,autoCloseTags:!0,highlightSelectionMatches:!0}}))}a(57);var E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.b,{to:"/"},c.a.createElement("button",{id:""},"Home")),c.a.createElement(u.b,{to:"/themes"},c.a.createElement("button",{id:"change-theme-button"},"Change Theme")))},g=function(e){var t=e.currentTheme,a=e.onChangeTheme,o=Object(n.useState)("material"),l=Object(r.a)(o,2),u=l[0],m=l[1];return Object(n.useEffect)((function(){m(t)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Select Theme"),c.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),console.log("THEME SAVED: ".concat(u)),void a(u)}},c.a.createElement("select",{name:"themes",value:u,id:"themes",onChange:function(e){return m(e.target.value)}},c.a.createElement("option",{value:"material"},"Material"),c.a.createElement("option",{value:"3024-day"},"3024 Day"),c.a.createElement("option",{value:"nord"},"Nord"),c.a.createElement("option",{value:"night"},"Night"),c.a.createElement("option",{value:"duotone-light"},"Duotone Light"),c.a.createElement("option",{value:"isotope"},"Isotope")),c.a.createElement("button",{type:"submit"},"Save")))};function d(e,t){var a="codepen-clone-"+e,c=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),o=Object(r.a)(c,2),l=o[0],u=o[1];return Object(n.useEffect)((function(){localStorage.setItem(a,JSON.stringify(l))}),[a,l]),[l,u]}var f=function(){var e=d("html",""),t=Object(r.a)(e,2),a=t[0],o=t[1],l=d("css",""),i=Object(r.a)(l,2),s=i[0],h=i[1],f=d("js",""),b=Object(r.a)(f,2),v=b[0],S=b[1],j=Object(n.useState)(""),O=Object(r.a)(j,2),y=O[0],C=O[1],N=Object(n.useState)("material"),T=Object(r.a)(N,2),x=T[0],k=T[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){C("\n        <html>\n          <body>".concat(a,"</body>\n          <style>").concat(s,"</style>\n          <script>").concat(v,"<\/script>\n        </html>\n      "))}),250);return function(){return clearTimeout(e)}}),[a,s,v]),console.log("Current Theme Saved: ".concat(x)),c.a.createElement(u.a,null,c.a.createElement(E,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/"},c.a.createElement("div",{className:"pane top-pane"},c.a.createElement(p,{language:"xml",displayName:"HTML",value:a,onChange:o,theme:x}),c.a.createElement(p,{language:"css",displayName:"CSS",value:s,onChange:h,theme:x}),c.a.createElement(p,{language:"javascript",displayName:"JS",value:v,onChange:S,theme:x})),c.a.createElement("div",{className:"pane"},c.a.createElement("iframe",{srcDoc:y,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"}))),c.a.createElement(m.a,{exact:!0,path:"/themes"},c.a.createElement(g,{currentTheme:x,onChangeTheme:function(e){k(e)}}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.2decc6cd.chunk.js.map