(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chart"],{"45da":function(t,e,n){"use strict";var r=n("a353"),a=n.n(r);a.a},5178:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("svg",{ref:"svg",attrs:{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("text",{ref:"text",attrs:{x:"100",y:"100"}},[t._v("100")]),t._l(t.nodes,(function(e){var r=e.title;return n("g",{key:r},[n("rect",{staticClass:"node",attrs:{x:"400",y:"300"}}),n("text",{attrs:{x:"460",y:"330","text-anchor":"middle","dominant-baseline":"middle"}},[t._v(t._s(r))])])}))],2)])},a=[],i=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),n("bc3a"),{name:"Chart",data:function(){return{nodes:[{title:"顶级菜单和校区",children:[{title:"1-1",children:[{title:"1-1-1"},{title:"1-1-2"}]},{title:"1-2"}]}]}},mounted:function(){this.$refs.svg.scrollWidth;var t=[],e=[this.nodes[0]];while(0!==e.length){var n=e.pop();t.push(n);var r=n.children;if(void 0!==r){var a=!0,i=!1,l=void 0;try{for(var d,o=r[Symbol.iterator]();!(a=(d=o.next()).done);a=!0){var s=d.value;e.push(s)}}catch(c){i=!0,l=c}finally{try{a||null==o.return||o.return()}finally{if(i)throw l}}}}console.log(t)},methods:{calcTextWidth:function(t){var e="http://www.w3.org/2000/svg",n=document,r=n.body,a=document.createElementNS(e,"text"),i=document.createElementNS(e,"svg");i.setAttribute("width",0),i.setAttribute("height",0),a.innerHTML=t,r.appendChild(i),i.appendChild(a);var l=a.getComputedTextLength();return r.removeChild(i),l}}}),l=i,d=(n("45da"),n("2877")),o=Object(d["a"])(l,r,a,!1,null,null,null);e["default"]=o.exports},a353:function(t,e,n){}}]);
//# sourceMappingURL=chart.3691a66b.js.map