(this["webpackJsonpklima-app"]=this["webpackJsonpklima-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(91)},37:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=(a(36),a(37),a(16)),l=a.n(o),s=a(25),u=a(26),m=a(27),p=a(29),h=a(28),d=a(30),y=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Klima"),r.a.createElement("p",null,"Finn ut temperatur, forhold og litt andre ting"))},E=function(e){return r.a.createElement("form",{onSubmit:e.getWeather},r.a.createElement("input",{type:"text",name:"city",placeholder:"By.."}),r.a.createElement("input",{type:"text",name:"country",placeholder:"Land.."}),r.a.createElement("button",null,"S\xf8k"))},v=function(e){return r.a.createElement("div",null,e.city&&e.country&&r.a.createElement("p",null,"Sted: ",e.city,", ",e.country),e.temperature&&r.a.createElement("p",null,"Temperatur: ",e.temperature),e.humidity&&r.a.createElement("p",null,"Luftfuktighet: ",e.humidity),e.description&&r.a.createElement("p",null,"Beskrivelse: ",e.description),e.cnt&&r.a.createElement("p",null,"Day: ",e.cnt),e.error&&r.a.createElement("p",null," ",e.error))},f=a(5),w="c4284a294c0c58b3dcc66882ce5da683",g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},a.getWeather=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,r,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.city.value,r=t.target.elements.country.value,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&appid=").concat(w,"&units=metric"));case 5:return i=e.sent,e.next=8,i.json();case 8:c=e.sent,n&&r?a.setState({temperature:c.main.temp,city:c.name,country:c.sys.country,humidity:c.main.humidity,description:c.weather[0].description,error:""}):a.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Fyll ut feltene :)"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(f.Layout,null,r.a.createElement(f.Header,{className:"header-color",title:"React Klima API handler",scroll:!0},r.a.createElement(f.Navigation,null,r.a.createElement("a",{href:"https://www.linkedin.com/in/espen-thorsen-frank/"},"LinkedIn"),r.a.createElement("a",{href:"https://github.com/Thusj?tab=repositories"},"Github"))),r.a.createElement(f.Drawer,{title:"Klima"},r.a.createElement(f.Navigation,null,r.a.createElement("a",{href:"https://www.linkedin.com/in/espen-thorsen-frank/"},"LinkedIn"),r.a.createElement("a",{href:"https://github.com/Thusj?tab=repositories"},"Github"))))),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-7 title-container"},r.a.createElement(y,null)),r.a.createElement("div",{className:"col-xs-4 form-container"},r.a.createElement(E,{getWeather:this.getWeather}),r.a.createElement(v,{temperature:this.state.temperature,humidity:this.state.humidity,city:this.state.city,country:this.state.country,description:this.state.description,error:this.state.error})))))),r.a.createElement(f.Footer,{size:"mini"},r.a.createElement(f.FooterSection,{type:"left",logo:"Just a react test"},r.a.createElement(f.FooterLinkList,null,r.a.createElement("h7",null,"dont know what to put here :)"),r.a.createElement("h8",null,"Just testing footer")))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(89),a(90);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.6bca2d5a.chunk.js.map