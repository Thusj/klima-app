(this["webpackJsonpklima-app"]=this["webpackJsonpklima-app"]||[]).push([[0],{10:function(e,t,r){e.exports=r(18)},16:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(3),c=r.n(i),o=(r(15),r(16),r(1)),u=r.n(o),l=r(4),s=r(5),m=r(6),p=r(8),d=r(7),h=r(9),y=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Klima"),a.a.createElement("p",null,"Finn ut temperatur, forhold osv"))},v=function(e){return a.a.createElement("form",{onSubmit:e.getWeather},a.a.createElement("input",{type:"text",name:"city",placeholder:"By.."}),a.a.createElement("input",{type:"text",name:"country",placeholder:"Land.."}),a.a.createElement("button",null,"S\xf8k"))},f=function(e){return a.a.createElement("div",null,e.city&&e.country&&a.a.createElement("p",null,"Sted: ",e.city,", ",e.country),e.temperature&&a.a.createElement("p",null,"Temperatur: ",e.temperature),e.humidity&&a.a.createElement("p",null,"Luftfuktighet: ",e.humidity),e.description&&a.a.createElement("p",null,"Beskrivelse: ",e.description),e.error&&a.a.createElement("p",null," ",e.error))},E="c4284a294c0c58b3dcc66882ce5da683",w=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},r.getWeather=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.city.value,a=t.target.elements.country.value,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(a,"&appid=").concat(E,"&units=metric"));case 5:return i=e.sent,e.next=8,i.json();case 8:c=e.sent,n&&a?r.setState({temperature:c.main.temp,city:c.name,country:c.sys.country,humidity:c.main.humidity,description:c.weather[0].description,error:""}):r.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Fill out the form"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(y,null),a.a.createElement(v,{getWeather:this.getWeather}),a.a.createElement(f,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,error:this.state.error}))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.2596347e.chunk.js.map