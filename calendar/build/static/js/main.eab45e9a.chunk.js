(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=(a(14),a(5)),l=a.n(s),i=a(8),u=a(1),f=a(2),p=a(4),m=a(3),d=(a(16),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,offers:null},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://back.staging.bsport.io/api/v1/offer/?min_date=2020-04-27&max_date=2020-05-03&company=6",e.next=3,fetch("https://back.staging.bsport.io/api/v1/offer/?min_date=2020-04-27&max_date=2020-05-03&company=6");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({loading:!1,offers:a.results});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,this.state.loading||!this.state.offers?r.a.createElement("div",{className:"Indicator"},"loading........"):r.a.createElement("div",null,r.a.createElement("div",{className:"Indicator"},"Data Loaded"),r.a.createElement(v,{NavOffers:this.state.offers})))}}]),a}(r.a.Component)),v=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={offers:null},e}return Object(f.a)(a,[{key:"createButton",value:function(e,t,a){var n=String(a).padStart(2,"0"),c=n+"/"+String(t).padStart(2,"0");return r.a.createElement("button",{key:n,onClick:this.ClickHandler.bind(this,e,t,a)},c)}},{key:"checkSameDate",value:function(e,t){e=new Date(e),t=new Date(t);var a=e.getDate()===t.getDate(),n=e.getMonth()===t.getMonth(),r=e.getFullYear()===t.getFullYear();return a&&n&&r}},{key:"LookForOffers",value:function(e,t,a,n){var r=this,c=[];return e.forEach((function(e){var o=e.date_start;r.checkSameDate(o,t+"/"+a+"/"+n)&&c.push(e)})),c}},{key:"UNSAFE_componentWillMount",value:function(){this.ClickHandler(2020,4,27)}},{key:"ClickHandler",value:function(e,t,a){var n=this.props.NavOffers,r=this.LookForOffers(n,e,t,a);this.setState({offers:r})}},{key:"addDays",value:function(e,t){var a=new Date(e);return a.setDate(a.getDate()+t),a}},{key:"laybuttons",value:function(e){for(var t=new Date(e),a=[],n=0;n<7;n++){var r=this.addDays(t,n),c=r.getDate(),o=r.getMonth()+1,s=r.getFullYear();a.push(this.createButton(s,o,c))}return a}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"btn-group"},this.laybuttons("2020-04-27")),r.a.createElement("div",{className:"offer-group"},r.a.createElement(h,{Displayoffers:this.state.offers})))}}]),a}(r.a.Component),h=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"cool",value:function(){var e=[];return this.props.Displayoffers.forEach((function(t){e.push(r.a.createElement(y,{key:t.id,activity:t.activity,disp:t.available,level:t.level,full:t.full,duration:t.duration_minute,coach:t.coach}))})),e}},{key:"render",value:function(){return r.a.createElement("div",null,this.cool())}}]),a}(r.a.Component),y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Day-offers"},r.a.createElement("div",{className:"offre"},r.a.createElement("div",null,r.a.createElement("b",{className:"activity"},"Title: ",this.props.activity)),r.a.createElement("span",{className:"desc"},"Disponiblit\xe9: ",this.props.disp.toString()),r.a.createElement("span",{className:"desc"},"Niveau: ",this.props.level),r.a.createElement("span",null,"Plein: ",this.props.full.toString()),r.a.createElement("br",null),r.a.createElement("span",{className:"desc"},"dur\xe9e: ",this.props.duration),r.a.createElement("span",{className:"desc"},"Par: ",this.props.coach)))}}]),a}(r.a.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Company ID: 6")),r.a.createElement("div",{className:"Actual-week"},r.a.createElement("span",null,"Semaine actuelle : Lun 27/04 - Dim 03/05")),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.eab45e9a.chunk.js.map