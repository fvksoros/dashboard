(this["webpackJsonpdivvy-dashboard"]=this["webpackJsonpdivvy-dashboard"]||[]).push([[0],{336:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},337:function(e){e.exports=JSON.parse('[{"inputs":[],"name":"_totalSupply1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalSupply2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalSupply5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Backing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oneTokentoBacking","outputs":[{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},338:function(e){e.exports=JSON.parse('[{"inputs":[],"name":"availableReflections","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"lockedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reaminingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},418:function(e,t){},421:function(e,t){},424:function(e,t){},428:function(e,t){},455:function(e,t){},457:function(e,t){},471:function(e,t){},473:function(e,t){},504:function(e,t){},506:function(e,t){},598:function(e,t){},599:function(e,t){},692:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(57),r=c.n(i),s=c(17),o=c(140),l=c.n(o),j=c(340),d=c(737),b=c(745),p=c(746),u=c(747),x=c(742),h=c(741),y=c(736),O=c(732),m=c(148),A=c(21),g=c(26),f=c(27),v=c(14),w=c(735),B=c(738),P=c(734),C=c(739),k=c(740),I=c(314),M=c.n(I),D=c(2),S=Object(v.a)(w.a)({backgroundColor:"transparent"});function T(e){var t=e.projects,c=e.onClick,a=Object(g.e)((function(e){return e.divvy})),n=a.bnbPrice,i=a.projectsMap,r=Object(A.e)().pathname,s=Object(f.a)(t);return s.sort((function(e,t){if(!i[e.contract]||!i[t.contract])return null;var c=i[e.contract],a=i[t.contract];return c.stats.circulation*c.stats.price<a.stats.circulation*a.stats.price?1:c.stats.circulation*c.stats.price>a.stats.circulation*a.stats.price?-1:0})),Object(D.jsx)(B.a,{children:s.map((function(e,t){var a,s,o,l,j=null===(a=i[e.contract])||void 0===a||null===(s=a.stats)||void 0===s?void 0:s.price,d=null===(o=i[e.contract])||void 0===o||null===(l=o.stats)||void 0===l?void 0:l.circulation,b=j?parseFloat(j*n).toFixed(12).match(/(\.0*)/)[0].length+1:2;b>10&&(b=10),j*n>1&&(b=0);var p=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:b+2,currency:"USD",currencySign:"standard",currencyDisplay:"symbol",style:"currency"});return Object(D.jsx)(m.b,{to:"/".concat(e.symbol),style:{textDecoration:"none",color:"inherit"},onClick:c,children:Object(D.jsxs)(P.a,{button:!0,style:{backgroundColor:r==="/".concat(e.symbol)?"#eee":""},children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(S,{children:Object(D.jsx)("img",{alt:"".concat(e.name," Logo"),src:"https://fegexchange.github.io/assets/blockchains/smartchain/assets/".concat(e.contract,"/logo.png"),width:40})})}),Object(D.jsx)(k.a,{primary:e.symbol,secondary:"".concat(p.format(j*n||0)," - $").concat(M()(j*n*d||0))})]})},e.symbol)}))})}var N=c(102),F=c(743),L=c(744),Z=c(731),X=c(321),R=c.n(X),z=c(322),J=c.n(z),W=c(323),G=c.n(W),E=c(319),V=c.n(E),Y=c(324),H=c.n(Y),q=c(320),K=c.n(q);function Q(e){var t=e.project,c=e.infoJSON;return Object(D.jsxs)(y.a,{container:!0,spacing:2,children:[Object(D.jsx)(y.a,{item:!0,children:Object(D.jsx)(w.a,{src:"https://fegexchange.github.io/assets/blockchains/smartchain/assets/".concat(t.contract,"/logo.png"),sx:{width:48,height:48}})}),Object(D.jsx)(y.a,{item:!0,style:{flexGrow:1},children:Object(D.jsx)(h.a,{variant:"h4",style:{lineHeight:"48px",overflow:"hidden",maxWidth:250,whiteSpace:"nowrap",textOverflow:"ellipsis"},children:t.name})}),Object(D.jsxs)(y.a,{item:!0,style:{flexGrow:1,display:"flex",justifyContent:"space-around"},children:[Object(D.jsx)(Z.a,{title:"Charts",children:Object(D.jsx)(x.a,{href:"https://charts.fegex.com/charts/".concat(t.contract),target:"_blank",style:{color:t.primary},children:Object(D.jsx)(V.a,{})})}),Object(D.jsx)(Z.a,{title:"Trade",children:Object(D.jsx)(x.a,{href:"https://fegex.com/trade/bsc/".concat(t.contract),target:"_blank",style:{color:t.primary},children:Object(D.jsx)(K.a,{})})}),c.website&&Object(D.jsx)(Z.a,{title:"Website",children:Object(D.jsx)(x.a,{href:c.website,target:"_blank",style:{color:t.primary},children:Object(D.jsx)(R.a,{})})}),c.social&&c.social.twitter&&Object(D.jsx)(Z.a,{title:"Twitter",children:Object(D.jsx)(x.a,{href:c.social.twitter,target:"_blank",style:{color:t.primary},children:Object(D.jsx)(J.a,{})})}),c.social&&c.social.telegram&&Object(D.jsx)(Z.a,{title:"Telegram",children:Object(D.jsx)(x.a,{href:c.social.telegram,target:"_blank",style:{color:t.primary},children:Object(D.jsx)(G.a,{})})}),c.explorer&&Object(D.jsx)(Z.a,{title:"BSCScan",children:Object(D.jsx)(x.a,{href:c.explorer,target:"_blank",style:{color:t.primary},children:Object(D.jsx)(H.a,{})})})]})]})}var U=c(343);function _(e){var t=e?parseFloat(e).toFixed(12).match(/(\.0*)/)[0].length+1:2;return t>10&&(t=10),new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:t,currency:"USD",currencySign:"standard",currencyDisplay:"symbol",style:"currency"}).format(e)}function $(e){var t=2;return e>1e3&&(t=0),e<1&&(t=4),e<.1&&(t=5),e<.01&&(t=5),e<.001&&(t=7),e<1e-4&&(t=8),e<1e-5&&(t=9),e<1e-6&&(t=10),e<1e-7&&(t=11),e<1e-8&&(t=12),e<1e-9&&(t=13),e<1e-10&&(t=14),e<1e-11&&(t=15),e<1e-12&&(t=16),new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e)}function ee(){return Object(D.jsx)(U.a,{xmlns:"http://www.w3.org/2000/svg",width:"2500",height:"2500",viewBox:"0 0 2000 2000",children:Object(D.jsxs)("g",{fill:"#fff",children:[Object(D.jsx)("path",{d:"M611.59 840.42l388.4-388.39 388.6 388.59 226-226L999.99 0 385.6 614.42l225.99 226M.006 999.969l226.007-226.007 225.992 225.993L226 1225.96zM611.59 1159.58l388.4 388.39 388.59-388.58 226.12 225.88-.11.12L999.99 2000l-614.41-614.4-.32-.32 226.33-225.7M1548.013 1000.093l226.007-226.006 225.992 225.992-226.006 226.007z"}),Object(D.jsx)("path",{d:"M1229.22 999.88h.1L999.99 770.55 830.51 940.03h-.01l-19.47 19.48-40.16 40.17-.32.31.32.33 229.12 229.13 229.33-229.33.11-.13-.21-.11"})]})})}var te=c(101),ce=c.n(te),ae=c(146),ne=c.n(ae),ie=c(325),re=c.n(ie);function se(e){var t=e.project,c=Object(g.e)((function(e){return e.divvy})),a=c.bnbPrice,n=c.projectsMap[t.contract].stats,i=0===t.divvyFund?n.divvyBalance-.01*n.supply:n.divvyBalance-t.divvyFund;return Object(D.jsx)(y.a,{container:!0,children:Object(D.jsx)(y.a,{item:!0,xs:12,children:Object(D.jsxs)(F.a,{style:{padding:20,border:"1px solid #eee"},elevation:0,children:[Object(D.jsx)(h.a,{variant:"h6",children:"Divvy Fund"}),Object(D.jsxs)(y.a,{container:!0,children:[Object(D.jsx)(y.a,{item:!0,xs:12,md:4,children:Object(D.jsx)(B.a,{disablePadding:!0,children:Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(re.a,{})})}),Object(D.jsx)(k.a,{primary:"".concat($(n.divvyBalance)," ").concat(t.symbol),secondary:"Balance"})]})})}),Object(D.jsx)(y.a,{item:!0,xs:12,md:4,children:Object(D.jsx)(B.a,{disablePadding:!0,children:Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(ee,{})})}),Object(D.jsx)(k.a,{primary:$(n.divvyBalance*n.price),secondary:"Value BNB"})]})})}),Object(D.jsx)(y.a,{item:!0,xs:12,md:4,children:Object(D.jsx)(B.a,{disablePadding:!0,children:Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(ce.a,{})})}),Object(D.jsx)(k.a,{primary:_(n.divvyBalance*(n.price*a)),secondary:"Value USD"})]})})}),Object(D.jsx)(y.a,{item:!0,xs:12,md:4,children:Object(D.jsx)(B.a,{disablePadding:!0,children:Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(ne.a,{})})}),Object(D.jsx)(k.a,{primary:"".concat($(i)," ").concat(t.symbol),secondary:"Reflections"})]})})}),Object(D.jsx)(y.a,{item:!0,xs:12,md:4,children:Object(D.jsx)(B.a,{disablePadding:!0,children:Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(ee,{})})}),Object(D.jsx)(k.a,{primary:"".concat($(i*n.price)," ").concat(t.symbol),secondary:"Reflections Value BNB"})]})})}),Object(D.jsx)(y.a,{item:!0,xs:12,md:4,children:Object(D.jsx)(B.a,{disablePadding:!0,children:Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(ce.a,{})})}),Object(D.jsx)(k.a,{primary:"".concat(_(i*(n.price*a))," ").concat(t.symbol),secondary:"Reflections Value USD"})]})})})]})]})})})}var oe=c(326),le=c.n(oe),je=c(327),de=c.n(je),be=c(328),pe=c.n(be);function ue(e){var t=e.project,c=Object(g.e)((function(e){return e.divvy})).projectsMap[t.contract].stats,n=Object(a.useState)(0),i=Object(s.a)(n,2),r=i[0],o=i[1],l=Object(a.useState)(0),j=Object(s.a)(l,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){c&&c.burnt&&c.supply&&(o(c.burnt/c.supply),b(c.burnt/c.supply*360*(Math.PI/180)))}),[c]),Object(D.jsx)(y.a,{container:!0,children:Object(D.jsx)(y.a,{item:!0,xs:12,children:Object(D.jsx)(F.a,{style:{padding:20,border:"1px solid #eee"},elevation:0,children:Object(D.jsxs)(y.a,{container:!0,children:[Object(D.jsxs)(y.a,{item:!0,xs:12,md:6,children:[Object(D.jsx)(N.b,{xDomain:[-5,5],yDomain:[-5,5],height:230,margin:{left:0,right:0,top:0,bottom:0},children:Object(D.jsx)(N.a,{radiusDomain:[0,10],center:{x:0,y:0},data:[{angle0:0,angle:2*Math.PI,opacity:1,radius:6.75,radius0:6,color:"#eee"},{angle0:0,angle:d,opacity:1,radius:8.5,radius0:6,color:t.primary}],colorType:"literal"})}),Object(D.jsxs)(h.a,{style:{height:0,width:"100%",textAlign:"center",top:-150,position:"relative",fontSize:30,fontWeight:"700",color:t.primary},children:[(100*r).toFixed(2),Object(D.jsx)("span",{style:{fontSize:12,fontWeight:"400",marginTop:-10,display:"block"},children:"% BURNED"})]})]}),Object(D.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(D.jsxs)(B.a,{disablePadding:!0,children:[Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(le.a,{})})}),Object(D.jsx)(k.a,{primary:$(c.supply)+" ".concat(t.symbol),secondary:"Total Supply"})]}),Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(de.a,{})})}),Object(D.jsx)(k.a,{primary:$(c.burnt)+" ".concat(t.symbol),secondary:"Burnt Supply"})]}),Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(pe.a,{})})}),Object(D.jsx)(k.a,{primary:$(c.supply-c.burnt)+" ".concat(t.symbol),secondary:"Circulating Supply"})]})]})})]})})})})}var xe=c(197),he=c.n(xe),ye=c(329),Oe=c.n(ye),me=c(198),Ae=c.n(me);function ge(e){var t=e.project,c=Object(g.e)((function(e){return e.divvy})),a=c.projectsMap,n=c.bnbPrice,i=a[t.contract].stats;return Object(D.jsx)(y.a,{container:!0,children:Object(D.jsx)(y.a,{item:!0,xs:12,children:Object(D.jsx)(F.a,{style:{padding:20,border:"1px solid #eee"},elevation:0,children:Object(D.jsxs)(y.a,{container:!0,children:[Object(D.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(D.jsxs)(B.a,{disablePadding:!0,children:[Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(ce.a,{})})}),Object(D.jsx)(k.a,{primary:"".concat(_((i.fbnb-i.backing)/i.liquidity*n)),secondary:"USD Price"})]}),Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(ee,{})})}),Object(D.jsx)(k.a,{primary:$(i.price)+" BNB",secondary:"BNB Price"})]}),Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(he.a,{})})}),Object(D.jsx)(k.a,{primary:$(i.backingPerToken)+" fBNB",secondary:"Backing Per Token"})]}),Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(Oe.a,{})})}),Object(D.jsx)(k.a,{primary:((i.fbnb-i.backing)/i.liquidity/i.backingPerToken).toFixed(2)+"x",secondary:"Baseline To Market Factor"})]})]})}),Object(D.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(D.jsxs)(B.a,{disablePadding:!0,children:[Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(ce.a,{})})}),Object(D.jsx)(k.a,{primary:_(i.circulation*(i.fbnb-i.backing)/i.liquidity*n),secondary:"Market Cap"})]}),Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(Ae.a,{})})}),Object(D.jsx)(k.a,{primary:$(i.liquidity)+" ".concat(t.symbol),secondary:"Liquidity ".concat(t.symbol)})]}),Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(Ae.a,{})})}),Object(D.jsx)(k.a,{primary:$(i.fbnb-i.backing)+" fBNB",secondary:"Liquidity fBNB"})]}),Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(he.a,{})})}),Object(D.jsx)(k.a,{primary:$(i.backing)+" fBNB",secondary:"Total Backing"})]})]})})]})})})})}var fe=c(330),ve=c.n(fe),we=c(332),Be=c.n(we),Pe=c(331),Ce=c.n(Pe);function ke(e){var t=e.project,c=Object(g.e)((function(e){return e.divvy})).projectsMap[t.contract],a=c.locker,n=c.stats,i=new Date(Date.now()+1e3*a.time).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"});return Object(D.jsx)(y.a,{container:!0,spacing:2,children:Object(D.jsx)(y.a,{item:!0,xs:12,children:Object(D.jsxs)(F.a,{style:{padding:20,border:"1px solid #eee"},elevation:0,children:[Object(D.jsx)(h.a,{variant:"h6",children:"Divvy Locker"}),Object(D.jsxs)(y.a,{container:!0,children:[Object(D.jsx)(y.a,{item:!0,xs:12,md:3,children:Object(D.jsx)(B.a,{disablePadding:!0,children:Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(ve.a,{})})}),Object(D.jsx)(k.a,{primary:$(a.locked),secondary:"Locked Supply"})]})})}),Object(D.jsx)(y.a,{item:!0,xs:12,md:3,children:Object(D.jsx)(B.a,{disablePadding:!0,children:Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(Ce.a,{})})}),Object(D.jsx)(k.a,{primary:(a.locked/n.supply*100).toFixed(2),secondary:"Locked Percentage"})]})})}),Object(D.jsx)(y.a,{item:!0,xs:12,md:3,children:Object(D.jsx)(B.a,{disablePadding:!0,children:Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(ne.a,{})})}),Object(D.jsx)(k.a,{primary:$(a.reflections),secondary:"Available Reflections"})]})})}),Object(D.jsx)(y.a,{item:!0,xs:12,md:3,children:Object(D.jsx)(B.a,{disablePadding:!0,children:Object(D.jsxs)(P.a,{children:[Object(D.jsx)(C.a,{children:Object(D.jsx)(w.a,{sx:{bgcolor:t.primary},children:Object(D.jsx)(Be.a,{})})}),Object(D.jsx)(k.a,{primary:i,secondary:"Unlock Date"})]})})})]})]})})})}var Ie=new Intl.NumberFormat("en-US",{maximumSignificantDigits:5});function Me(e){var t,c,n=e.project,i=Object(g.e)((function(e){return e.divvy})).projectsMap,r=Object(a.useState)({}),o=Object(s.a)(r,2),j=o[0],d=o[1],b=Object(a.useState)(!0),p=Object(s.a)(b,2),u=p[0],x=p[1],O=.01,m=null===(t=i[n.contract])||void 0===t?void 0:t.stats,A=null===(c=i[n.contract])||void 0===c?void 0:c.locker;return Object(a.useEffect)((function(){l.a.get("https://fegexchange.github.io/assets/blockchains/smartchain/assets/".concat(n.contract,"/info.json")).then((function(e){d(e.data),x(!1)}))}),[n]),!u&&i[n.contract]&&m?Object(D.jsxs)(y.a,{container:!0,spacing:2,children:[Object(D.jsx)(y.a,{item:!0,xs:12,children:Object(D.jsx)(Q,{project:n,infoJSON:j})}),Object(D.jsx)(y.a,{item:!0,xs:12,children:Object(D.jsx)(se,{project:n,infoJSON:j})}),m.divvyBalance<m.supply*O&&!n.bypassMin?Object(D.jsx)(y.a,{item:!0,xs:12,style:{marginTop:30},children:Object(D.jsxs)(F.a,{style:{paddingTop:20},align:"center",children:[Object(D.jsxs)(h.a,{children:["Pending Listing. To be considered for listing on Divvy Dashboard send ",Ie.format(m.supply*O)," ",n.symbol," to the ",Object(D.jsx)(L.a,{href:"https://bscscan.com/address/0xb80267ea7fa368374ee4d4bf10044778232adefe",target:"_blank",children:"Divvy Fund"})]}),Object(D.jsxs)(y.a,{item:!0,xs:12,children:[Object(D.jsx)(N.b,{xDomain:[-5,5],yDomain:[-5,5],height:300,style:{transform:"translate(-15px, 5px)"},children:Object(D.jsx)(N.a,{radiusDomain:[0,10],center:{x:0,y:0},data:[{angle0:0,angle:2*Math.PI,opacity:1,radius:6.75,radius0:6,color:"#eee"},{angle0:0,angle:m.divvyBalance/(m.supply*O)*360*(Math.PI/180),opacity:1,radius:8.5,radius0:6,color:n.primary}],colorType:"literal"})}),Object(D.jsxs)(h.a,{style:{height:0,width:"100%",textAlign:"center",top:-190,position:"relative",fontSize:30,fontWeight:"700",color:n.primary},children:[Ie.format(m.supply*O-m.divvyBalance),Object(D.jsx)("span",{style:{fontSize:12,fontWeight:"400",display:"block"},children:"UNTIL LISTED"})]})]})]})}):Object(D.jsxs)(D.Fragment,{children:[A&&Object(D.jsx)(y.a,{item:!0,xs:12,children:Object(D.jsx)(ke,{project:n})}),Object(D.jsx)(y.a,{item:!0,xs:12,children:Object(D.jsx)(ue,{project:n})}),Object(D.jsx)(y.a,{item:!0,xs:12,children:Object(D.jsx)(ge,{project:n,infoJSON:j})})]})]}):Object(D.jsx)(D.Fragment,{})}var De,Se=c(9),Te=Object(Se.d)({name:"divvy",initialState:{bnbPrice:0,projects:[],projectsMap:{}},reducers:{updateBNBPrice:function(e,t){e.bnbPrice=parseFloat(t.payload.price)},updateProjects:function(e,t){e.projects=t.payload},updateProject:function(e,t){e.projects.map((function(e){return e.contract===t.payload.id&&(e.description=t.payload.description,e.explorer=t.payload.explorer,e.name=t.payload.name,e.symbol=t.payload.symbol,e.website=t.payload.website),e}))},updateProjectDetail:function(e,t){e.projects.map((function(e){return e.contract===t.payload.contract&&(e[t.payload.key]=t.payload.data),e}))},updateProjectsMap:function(e,t){e.projectsMap[t.payload.contract]||(e.projectsMap[t.payload.contract]={}),e.projectsMap[t.payload.contract].stats=t.payload.stats},updateProjectLocker:function(e,t){e.projectsMap[t.payload.contract]||(e.projectsMap[t.payload.contract]={}),e.projectsMap[t.payload.contract].locker=t.payload.locker}}}),Ne=Te.actions,Fe=Ne.updateBNBPrice,Le=Ne.updateProjects,Ze=(Ne.updateProject,Ne.updateProjectDetail,Ne.updateProjectsMap),Xe=Ne.updateProjectLocker,Re=Te.reducer,ze=c(333),Je=c(43),We=Object(ze.a)({reducerPath:"BinanceTickerApi",baseQuery:Object(Je.d)({baseUrl:"https://api.binance.com/api/v3/"}),endpoints:function(e){return{getTickersByType:e.query({query:function(e){return"ticker/".concat(e)}})}}}),Ge=We.useGetTickersByTypeQuery,Ee=c(339),Ve=c.n(Ee),Ye=c(334),He=c.n(Ye),qe=function(e){return new Promise((function(t,c){return e((function(e,a){e&&c(e),t(a)}))}))},Ke=c(336),Qe=c(337),Ue=c(338),_e=c(12),$e=Object(Se.a)({reducer:(De={},Object(_e.a)(De,We.reducerPath,We.reducer),Object(_e.a)(De,"divvy",Re),De),middleware:function(e){return e().concat(We.middleware)}}),et=new He.a("https://bsc-dataseed.binance.org/"),tt=new et.eth.Contract(Ke,"0x87b1AccE6a1958E522233A737313C086551a5c76"),ct=function(e){var t=e.contract,c=e.locker,a=new et.eth.Contract(Qe,t),n=qe((function(e){return tt.methods.balanceOf(t).call(e)})),i=qe((function(e){return a.methods.getBalance(t).call(e)})),r=qe((function(e){return a.methods.balanceOf("0x000000000000000000000000000000000000dead").call(e)})),s=qe((function(e){return a.methods.totalSupply().call(e)})),o=qe((function(e){return a.methods._totalSupply5().call(e)})),l=qe((function(e){return a.methods.oneTokentoBacking().call(e)})),j=qe((function(e){return a.methods.balanceOf("0xb80267eA7fa368374ee4d4Bf10044778232AdEFe").call(e)}));if(Promise.all([n,i,r,s,o,l,j]).then((function(e){var c=e[0]/Math.pow(10,18)||0,a=e[4]/Math.pow(10,18)||0,n=e[1]/Math.pow(10,9)||0,i=e[3]/Math.pow(10,9)||0,r=e[2]/Math.pow(10,9)||0,s=i-r||0,o=(c-a)/n||0;$e.dispatch(Ze({contract:t,stats:{fbnb:c,liquidity:n,burnt:r,supply:i,circulation:s,backing:a,backingPerToken:e[5]/Math.pow(10,18),divvyBalance:e[6]/Math.pow(10,9),price:o}}))})),c){var d=new et.eth.Contract(Ue,c),b=qe((function(e){return d.methods.availableReflections().call(e)})),p=qe((function(e){return d.methods.lockedSupply(t).call(e)})),u=qe((function(e){return d.methods.reaminingTime().call(e)}));Promise.all([b,p,u]).then((function(e){var c=e[0]/Math.pow(10,9)||0,a=e[1]/Math.pow(10,9)||0,n=parseInt(e[2]);$e.dispatch(Xe({contract:t,locker:{reflections:c,locked:a,time:n}}))}))}},at=Object(j.a)({palette:{primary:{main:"#872eff"}}});var nt=function(){var e=Object(g.d)(),t=Object(g.e)((function(e){return e.divvy})),c=t.bnbPrice,n=t.projects,i=Object(a.useState)(!1),r=Object(s.a)(i,2),o=r[0],j=r[1],f=Ge("price?symbol=BNBUSDT",{pollingInterval:3e4});return Object(a.useEffect)((function(){"fulfilled"===f.status&&e(Fe({price:f.data.price}))}),[f.status,f.data,e]),Object(a.useEffect)((function(){var t=function(){l.a.get("https://divvysd.com/dashboard/projects.json").then((function(t){e(Le(t.data)),t.data.map((function(e){return ct(e),e}))}))};t();var c=setInterval(t,6e4);return function(){return clearInterval(c)}}),[e]),n.length&&0!==c?Object(D.jsxs)(d.a,{theme:at,children:[Object(D.jsx)(b.a,{}),Object(D.jsx)(p.a,{color:"primary",children:Object(D.jsxs)(u.a,{children:[Object(D.jsx)(x.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){return j(!0)},children:Object(D.jsx)(Ve.a,{})}),Object(D.jsx)("img",{alt:"Divvy",src:"data:image/png;base64,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",height:32,style:{marginTop:5}}),Object(D.jsx)("div",{style:{flexGrow:1}}),Object(D.jsxs)(h.a,{children:["BNB $",c.toFixed(2)]})]})}),Object(D.jsx)(m.a,{children:Object(D.jsxs)(y.a,{container:!0,style:{marginTop:64},children:[Object(D.jsx)(O.a,{open:o,onClose:function(){return j(!1)},PaperProps:{style:{width:300}},children:Object(D.jsx)(T,{projects:n,onClick:function(){return j(!1)}})}),Object(D.jsx)(y.a,{item:!0,xs:12,style:{height:"calc(100% - 64px)",overflow:"auto",padding:20,position:"fixed",backgroundColor:"#fafafa"},children:Object(D.jsxs)(A.c,{children:[Object(D.jsx)(A.a,{path:"/",exact:!0,element:Object(D.jsx)(Me,{project:n[0]})}),n.map((function(e,t){return Object(D.jsx)(A.a,{path:"/".concat(e.symbol),exact:!0,element:Object(D.jsx)(Me,{project:e})},t)}))]})})]})})]}):Object(D.jsx)(D.Fragment,{})};r.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(g.a,{store:$e,children:Object(D.jsx)(nt,{})})}),document.getElementById("root"))}},[[692,1,2]]]);
//# sourceMappingURL=main.465c0d0d.chunk.js.map