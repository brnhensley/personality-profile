(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),o=n.n(l),i=n(4),c=n(5),s=n(8),u=n(6),d=n(9);var m=function(){return r.a.createElement("div",{className:"window header"},r.a.createElement("h1",null,"The Judgement-o-tron"))};var w=function(){return r.a.createElement("footer",{className:"window footer"},r.a.createElement("p",{id:"footer"},"\xa9 2019 Brian Hensley"))},h=n(1),p=n(7);var f=function(e){var t=JSON.parse(JSON.stringify(e.watsonResponse));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"window"},r.a.createElement("h2",null,"Personality Analysis of Twitter user @",e.twitterHandle)),Object.values(t.traits).map(function(e){return r.a.createElement("div",{className:"window",key:t.traits.indexOf(e)},r.a.createElement("h3",null,"Big Five Personality Trait: ",e.name,": ",(100*e.percentile).toFixed(2),"%"),Object.values(e.children).map(function(t){return r.a.createElement("h5",{key:e.children.indexOf(t)},t.name," - ",(100*t.percentile).toFixed(2),"%")}))}),r.a.createElement("div",{className:"window"},r.a.createElement("h3",null,"Maslow's hierarchy of needs"),Object.values(t.needs).map(function(e){return r.a.createElement("h5",{key:t.needs.indexOf(e)},e.name,": ",(100*e.percentile).toFixed(2),"%")})))},E=function(){var e=Object(a.useState)({watsonResponse:null,twitterHandle:"",displayHandle:""}),t=Object(p.a)(e,2),n=t[0],l=t[1],o=r.a.createElement("div",{className:"window"},r.a.createElement("h3",null,"Enter a Twitter user's handle to get a personality breakdown based on their posting history"),r.a.createElement("p",{className:"patient"},"Be patient, Watson needs to think..."),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("http://localhost:9000/watsonAPI?name=".concat(n.twitterHandle)).then(function(e){return e.json()}).then(function(e){return l(Object(h.a)({},n,{watsonResponse:e}))}).then(n.displayHandle=n.twitterHandle)}},r.a.createElement("input",{type:"text",id:"twitterHandle",placeholder:"Enter a Twitter handle",onChange:function(e){return l(Object(h.a)({},n,{twitterHandle:e.target.value}))}}),r.a.createElement("button",{type:"submit"},"Search"))),i=null!==n.watsonResponse?r.a.createElement(f,{watsonResponse:n.watsonResponse,twitterHandle:n.displayHandle}):o;return r.a.createElement(r.a.Fragment,null,i)},v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement(m,null),a.createElement(E,null),a.createElement(w,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.133c1b10.chunk.js.map