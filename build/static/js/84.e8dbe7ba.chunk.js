(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[84],{1134:function(e,t,a){"use strict";a.r(t);var l=a(197),n=a(198),r=a(199),o=a(200),s=a(0),c=a.n(s),i=a(619),u=a(620),d=a(629),m=a(697),v=a(622),f=a.n(v),b=a(201),p=(a(636),a(60)),g=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={userChatList:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("user_id"));p.a.get("/user/userCallHistory/".concat(t)).then((function(t){var a;!0===t.data.status&&e.setState({userChatList:null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.userChatList;return c.a.createElement(b.a,{headerTop:"visible"},c.a.createElement("section",{className:"pt-0 pb-0"},c.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(f.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},c.a.createElement(i.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,{md:"12"},c.a.createElement("div",{className:"leftcont text-left"},c.a.createElement("h1",null,"User Call History"))))))),c.a.createElement("section",null,c.a.createElement(i.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:"12"},c.a.createElement("div",{className:""},c.a.createElement(m.a,{striped:!0,className:""},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#Conversation ID"),c.a.createElement("th",null,"Astrologer Name"),c.a.createElement("th",null,"Conversation Type"),c.a.createElement("th",null,"Rate"),c.a.createElement("th",null,"Duration"),c.a.createElement("th",null,"Deducation"),c.a.createElement("th",null,"Date/Time"))),e.length?e.map((function(e){var t,a;return c.a.createElement("tbody",{key:e._id},c.a.createElement("tr",null,c.a.createElement("th",null,null===e||void 0===e?void 0:e.Sid),c.a.createElement("td",null,null===e||void 0===e||null===(t=e.astroid)||void 0===t?void 0:t.fullname),c.a.createElement("td",null,"Call"),c.a.createElement("td",null,null===e||void 0===e||null===(a=e.astroid)||void 0===a?void 0:a.callCharge,"/Min."),c.a.createElement("td",null,null===e||void 0===e?void 0:e.Duration," Min"),c.a.createElement("td",null,null===e||void 0===e?void 0:e.userdeductedAmt," Rs"),c.a.createElement("td",null,null===e||void 0===e?void 0:e.DateCreated.split("T")[0])))})):null)))))))}}]),a}(c.a.Component);t.default=g},622:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},629:function(e,t,a){"use strict";var l=a(7),n=a(16),r=a(0),o=a.n(r),s=a(3),c=a.n(s),i=a(59),u=a.n(i),d=a(54),m=["className","cssModule","widths","tag"],v=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:v,offset:v})]),b={tag:d.o,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,r=e.widths,s=e.tag,c=Object(n.a)(e,m),i=[];r.forEach((function(t,l){var n=e[t];if(delete c[t],n||""===n){var r=!l;if(Object(d.i)(n)){var o,s=r?"-":"-"+t+"-",m=g(r,t,n.size);i.push(Object(d.k)(u()(((o={})[m]=n.size||""===n.size,o["order"+s+n.order]=n.order||0===n.order,o["offset"+s+n.offset]=n.offset||0===n.offset,o)),a))}else{var v=g(r,t,n);i.push(v)}}})),i.length||i.push("col");var v=Object(d.k)(u()(t,i),a);return o.a.createElement(s,Object(l.a)({},c,{className:v}))};h.propTypes=b,h.defaultProps=p,t.a=h},636:function(e,t,a){},697:function(e,t,a){"use strict";var l=a(7),n=a(16),r=a(0),o=a.n(r),s=a(3),c=a.n(s),i=a(59),u=a.n(i),d=a(54),m=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],v={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.o,responsiveTag:d.o,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},f=function(e){var t=e.className,a=e.cssModule,r=e.size,s=e.bordered,c=e.borderless,i=e.striped,v=e.dark,f=e.hover,b=e.responsive,p=e.tag,g=e.responsiveTag,h=e.innerRef,E=Object(n.a)(e,m),k=Object(d.k)(u()(t,"table",!!r&&"table-"+r,!!s&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!v&&"table-dark",!!f&&"table-hover"),a),O=o.a.createElement(p,Object(l.a)({},E,{ref:h,className:k}));if(b){var j=Object(d.k)(!0===b?"table-responsive":"table-responsive-"+b,a);return o.a.createElement(g,{className:j},O)}return O};f.propTypes=v,f.defaultProps={tag:"table",responsiveTag:"div"},t.a=f}}]);
//# sourceMappingURL=84.e8dbe7ba.chunk.js.map