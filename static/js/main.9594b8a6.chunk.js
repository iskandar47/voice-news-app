(this["webpackJsonpvoice-app"]=this["webpackJsonpvoice-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a(48)},40:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r),c=(a(40),a(29)),i=a(24),s=a.n(i),m=(a(41),a(71)),u=a(72),f=a(73),d=a(67),h=a(68),g=a(63),E=Object(g.a)({root:{margin:8,display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},media:{height:160},container:{padding:"32px 5%",width:"100%",margin:0},header:{position:"fixed",top:0,left:0,width:"100%",padding:16,backgroundColor:"rgb(0,36,70)",color:"#FFF",textAlign:"center",zIndex:5},rootHomeCard:{minWidth:275,textAlign:"left",height:"100%",color:"white"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},bigTitle:{color:"#FFF"},title:{fontSize:14,color:"rgb(0,36,70)"},pos:{marginBottom:12}}),p=a(65),b=a(66),N=a(69),y=a(70);var w=function(e){var t=e.article,a=E();return l.a.createElement(f.a,{className:a.root},l.a.createElement(p.a,null,l.a.createElement(b.a,{className:a.media,image:t.urlToImage,title:t.title}),l.a.createElement(d.a,null,"Author : ",t.author?t.author:"Not found"),l.a.createElement(d.a,null,l.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),l.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},t.description))),l.a.createElement(N.a,null,l.a.createElement(y.a,{size:"small",color:"primary",href:t.url,target:"_blank"},"Learn More")))},v=[{title:"Latest News All",info:"news from all over the world inculdes all categories from global sources",text:"Give me the latest news or show me the global news "},{title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news or what's the latest news about sports"},{title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5 or give me the news about Smartphones"},{title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN of show me the latest news from ABC News"}];var x=function(e){var t=e.art,a=E();return t.length?l.a.createElement(m.a,null,l.a.createElement(m.a,{className:a.header},l.a.createElement("i",{className:"fas fa-microphone"}),"  Try saying : Go back ",l.a.createElement("i",{className:"fas fa-arrow-left"})),l.a.createElement(m.a,{className:a.container,container:!0,alignItems:"stretch",justify:"space-between",spacing:4},t.map((function(e,t){return l.a.createElement(m.a,{key:t,item:!0,xs:12,sm:6,md:4,lg:4},l.a.createElement(w,{key:t,article:e}))})))):l.a.createElement(u.a,{in:!0},l.a.createElement(m.a,{className:a.container,style:{paddingTop:0},container:!0,alignItems:"stretch",spacing:1},v.map((function(e,t){return l.a.createElement(m.a,{key:t,item:!0,xs:12,sm:12,md:6,lg:6},l.a.createElement(f.a,{className:a.rootHomeCard,style:{backgroundColor:"rgba(0,74,135)"}},l.a.createElement(d.a,null,l.a.createElement(h.a,{className:a.title,color:"textSecondary",gutterBottom:!0},"search by :"),l.a.createElement(h.a,{className:a.bigTitle,variant:"h5",component:"h2"},e.title.split(" ")[2]),l.a.createElement(h.a,{variant:"body2",component:"p"},e.info),l.a.createElement("hr",{style:{margin:"8px"}}),l.a.createElement(h.a,{variant:"body2",component:"p"},"Try saying ",l.a.createElement("i",{className:"fas fa-microphone"}),"  : ",l.a.createElement("br",null),e.text))))}))))};a(46);var C=function(){return l.a.createElement("div",{className:"bannerContainer"},l.a.createElement("div",{className:"banner"},l.a.createElement("h1",null," YOU NAME IT I'LL GET IT")),l.a.createElement("h3",null,"USER GUID"))};a(47);var T=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"Developed by Salim.D / @salimdriai15@gmail.com"),l.a.createElement("div",{className:"icons"},l.a.createElement("i",{className:"fab fa-linkedin-in"}),l.a.createElement("i",{className:"fab fa-twitter"}),l.a.createElement("i",{className:"fab fa-instagram"})))};var k=function(){var e=E(),t=Object(n.useState)([]),a=Object(c.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){s()({key:"bd428a5ffe6c64a5121631f1c1df87802e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.data;"latestResults"===t&&(console.log(a),o(a)),"goBack"===t&&o([])}})}),[]),l.a.createElement("div",null,0===r.length?l.a.createElement(C,null):null,l.a.createElement(m.a,{className:e.container,container:!0,alignContent:"center",alignItems:"stretch"},l.a.createElement(x,{art:r})),l.a.createElement(T,null))};o.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9594b8a6.chunk.js.map