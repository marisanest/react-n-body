(this["webpackJsonpreact-n-body"]=this["webpackJsonpreact-n-body"]||[]).push([[0],{125:function(t){t.exports=JSON.parse('[[{"id":"Body","data":[{"x":0,"y":0},{"x":0,"y":20},{"x":20,"y":20},{"x":20,"y":0}]}],[{"id":"Body","data":[{"x":5,"y":5},{"x":5,"y":15},{"x":15,"y":15},{"x":15,"y":5}]}],[{"id":"Body","data":[{"x":10,"y":10},{"x":10,"y":10},{"x":10,"y":10},{"x":10,"y":10}]}]]')},234:function(t,e,n){t.exports=n(379)},239:function(t,e,n){},240:function(t,e,n){},379:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(189),i=n.n(r),c=(n(239),n(13)),l=(n(240),n(125)),d=function(){var t=0;return{next:function(){t===l.length-1?t=0:t++},getData:function(){return{iteration:t,data:l[t]}}}},u="#282c34",f={container:{height:"15vh",width:"100vw",background:u,margin:0,paddingLeft:60,paddingRight:60,paddingTop:"5vh"},text:{fontWeight:400,color:"#d2cfcf"},number:{color:"#fff",fontWeight:900}},s=function(t){var e=t.iteration,n=void 0===e?null:e;return o.a.createElement("div",{style:f.container},o.a.createElement("h2",{style:f.text},"Iteration:"," ",o.a.createElement("strong",{style:f.number},n)))},m=n(190),y={container:{height:"85vh",width:"100vw",background:u}},h=function(t){var e=t.data,n=void 0===e?[]:e;return o.a.createElement("div",{style:y.container},o.a.createElement(m.a,{data:n,margin:{top:60,right:140,bottom:70,left:90},xScale:{type:"linear",min:0,max:20},xFormat:function(t){return t},yScale:{type:"linear",min:0,max:20},yFormat:function(t){return t},blendMode:"normal",nodeSize:5,enableGridX:!1,enableGridY:!1,axisTop:null,axisRight:null,axisBottom:null,axisLeft:null,legends:[],colors:["#ffffff"],motionStiffness:20,motionDamping:20}))},x=d(),g=function(){var t=Object(a.useState)(0),e=Object(c.a)(t,2),n=e[0],r=e[1];Object(a.useEffect)((function(){var t=setTimeout((function(){x.next(),r(n+1)}),2e3);return function(){return clearTimeout(t)}}),[n,r]);var i=x.getData();return o.a.createElement("div",{className:"App"},o.a.createElement(s,{iteration:i.iteration+1}),o.a.createElement(h,{data:i.data}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(378);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[234,1,2]]]);
//# sourceMappingURL=main.acc9dc5d.chunk.js.map