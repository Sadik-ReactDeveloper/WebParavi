(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[55],{629:function(e,a,t){"use strict";var l=t(7),n=t(16),c=t(0),s=t.n(c),r=t(3),o=t.n(r),m=t(59),i=t.n(m),u=t(54),d=["className","cssModule","widths","tag"],p=o.a.oneOfType([o.a.number,o.a.string]),E=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),g={tag:u.o,xs:E,sm:E,md:E,lg:E,xl:E,className:o.a.string,cssModule:o.a.object,widths:o.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,c=e.widths,r=e.tag,o=Object(n.a)(e,d),m=[];c.forEach((function(a,l){var n=e[a];if(delete o[a],n||""===n){var c=!l;if(Object(u.i)(n)){var s,r=c?"-":"-"+a+"-",d=b(c,a,n.size);m.push(Object(u.k)(i()(((s={})[d]=n.size||""===n.size,s["order"+r+n.order]=n.order||0===n.order,s["offset"+r+n.offset]=n.offset||0===n.offset,s)),t))}else{var p=b(c,a,n);m.push(p)}}})),m.length||m.push("col");var p=Object(u.k)(i()(a,m),t);return s.a.createElement(r,Object(l.a)({},o,{className:p}))};v.propTypes=g,v.defaultProps=f,a.a=v},651:function(e,a,t){"use strict";var l=t(7),n=t(16),c=t(206),s=t(20),r=t(0),o=t.n(r),m=t(3),i=t.n(m),u=t(59),d=t.n(u),p=t(54),E=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],g={active:i.a.bool,"aria-label":i.a.string,block:i.a.bool,color:i.a.string,disabled:i.a.bool,outline:i.a.bool,tag:p.o,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),onClick:i.a.func,size:i.a.string,children:i.a.node,className:i.a.string,cssModule:i.a.object,close:i.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],c=e.block,s=e.className,r=e.close,m=e.cssModule,i=e.color,u=e.outline,g=e.size,f=e.tag,b=e.innerRef,v=Object(n.a)(e,E);r&&"undefined"===typeof v.children&&(v.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var N="btn"+(u?"-outline":"")+"-"+i,h=Object(p.k)(d()(s,{close:r},r||"btn",r||N,!!g&&"btn-"+g,!!c&&"btn-block",{active:a,disabled:this.props.disabled}),m);v.href&&"button"===f&&(f="a");var k=r?"Close":null;return o.a.createElement(f,Object(l.a)({type:"button"===f&&v.onClick?"button":void 0},v,{className:h,ref:b,onClick:this.onClick,"aria-label":t||k}))},a}(o.a.Component);f.propTypes=g,f.defaultProps={color:"secondary",tag:"button"},a.a=f},692:function(e,a,t){},794:function(e,a,t){e.exports=t.p+"static/media/astro-4.a3013af5.jpg"},795:function(e,a,t){},796:function(e,a,t){e.exports=t.p+"static/media/videoImage.50c846d4.jpg"},820:function(e,a,t){"use strict";t.r(a);var l=t(197),n=t(198),c=t(199),s=t(200),r=t(0),o=t.n(r),m=t(619),i=(t(210),t(60)),u=t(620),d=t(629),p=t(651),E=(t(201),t(794)),g=t.n(E),f=(t(330),t(795),t(628)),b=t.n(f),v=t(4),N=t(796),h=t.n(N);t(692);function k(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"imgparent"},o.a.createElement("div",{className:"parentDiv"},o.a.createElement("img",{className:"mainVideo",style:{width:"100%",height:"550px"},src:h.a,alt:"videoImage"})),o.a.createElement("div",{className:"btnsetup"},o.a.createElement("div",{class:"video-play-btn ripple"},o.a.createElement("a",{href:"#",class:"play-btn"},o.a.createElement("i",{class:"fa fa-play"}))))),o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(u.a,{className:"my-5"},o.a.createElement(d.a,{lg:"6",md:"6",sm:"12"},o.a.createElement("h4",{className:"text-black py-2"},"HOW IT WORKS "),o.a.createElement("h2",null,"Simple step to success"),o.a.createElement("p",null,"Acceess our powerfull and result oriented  online courses, personal mentor ship, financial advisory and many more...")),o.a.createElement(d.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:"eael-feature-list-icon eael-feature-list-icon-inner bottom-line"},o.a.createElement("i",{class:"fa fa-comments"}))),o.a.createElement(d.a,{lg:"10",md:"10",sm:"12"},o.a.createElement("h4",{className:"progress-title"},"Consultation"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna"))),o.a.createElement(u.a,{className:"progressRow  progress-top-margin"},o.a.createElement(d.a,{lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:"eael-feature-list-icon eael-feature-list-icon-inner bottom-line"},o.a.createElement("i",{class:"fa fa-comments"}))),o.a.createElement(d.a,{lg:"10",md:"10",sm:"12"},o.a.createElement("h4",{className:"progress-title"},"Consultation"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna"))),o.a.createElement(u.a,{className:"progressRow  progress-top-margin"},o.a.createElement(d.a,{lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:"eael-feature-list-icon eael-feature-list-icon-inner bottom-line"},o.a.createElement("i",{class:"fa fa-comments"}))),o.a.createElement(d.a,{lg:"10",md:"10",sm:"12"},o.a.createElement("h4",{className:"progress-title"},"Consultation"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna"))),o.a.createElement(u.a,{className:"progressRow  progress-top-margin"},o.a.createElement(d.a,{lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:"eael-feature-list-icon eael-feature-list-icon-inner"},o.a.createElement("i",{class:"fa fa-comments"}))),o.a.createElement(d.a,{lg:"10",md:"10",sm:"12"},o.a.createElement("h4",{className:"progress-title"},"Consultation"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna"))))))))}var y=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var n,c=e.props;return Object(l.a)(this,t),(n=a.call(this,c)).handlecheckpooja=function(e){localStorage.setItem("poojaviewone",JSON.stringify(e)),null!==localStorage.getItem("user_id")?n.props.history.push("/Poojadetailpage/".concat(null===e||void 0===e?void 0:e._id)):b()("No User Found","User Need to login First")},n.state={listofpooja:[]},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.get("/admin/get_adminevent").then((function(a){e.setState({listofpooja:a.data.data.slice(0,4)})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"pt-0 pb-0"},o.a.createElement("div",{className:"container mt-2"},o.a.createElement(u.a,null,o.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},o.a.createElement("div",{className:"category-home"},o.a.createElement("section",{className:"pt-0"},o.a.createElement("div",{className:"container"},o.a.createElement(u.a,null,o.a.createElement(d.a,{className:"mt-3",md:"4"},o.a.createElement("div",{className:"product-grid8"},o.a.createElement("div",{class:"product-image8 imageofpooja"},o.a.createElement("img",{className:"imagepooja",style:{width:"100%"},src:g.a,alt:"image"})),o.a.createElement("div",{className:"product-content"},o.a.createElement("div",{style:{color:"black"}},"Secret of Successful Teamwork"),o.a.createElement("div",{className:"",style:{color:"green"}},"Management"),o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("span",{className:"px-2",style:{color:"black"}},o.a.createElement("i",{class:"fa-solid fa-book"})),o.a.createElement("span",{className:"px-2",style:{color:"black"}},"12 Lessons")),o.a.createElement("li",null,o.a.createElement("span",{className:"px-2",style:{color:"black"}},o.a.createElement("i",{class:"fa fa-play"})),o.a.createElement("span",{className:"px-2",style:{color:"black"}},"612 week")))),o.a.createElement(d.a,null,o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"8",md:"8"},o.a.createElement("span",{style:{color:"black"}},"271 Review")),o.a.createElement(d.a,{lg:"4",md:"4"},o.a.createElement("span",{style:{color:"black"}},"*****"))))),o.a.createElement(u.a,{className:"mt-1"},o.a.createElement(v.c,{to:"/bookEvent"},o.a.createElement(p.a,{style:{width:"100%"},color:"success"},"Join CLass")))))),o.a.createElement(d.a,{className:"mt-3",md:"4"},o.a.createElement("div",{className:"product-grid8"},o.a.createElement("div",{class:"product-image8 imageofpooja"},o.a.createElement("img",{className:"imagepooja",style:{width:"100%"},src:g.a,alt:"image"})),o.a.createElement("div",{className:"product-content"},o.a.createElement("div",{style:{color:"black"}},"Secret of Successful Teamwork"),o.a.createElement("div",{className:"",style:{color:"green"}},"Management"),o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("span",{className:"px-2",style:{color:"black"}},o.a.createElement("i",{class:"fa fa-book"})),o.a.createElement("span",{className:"px-2",style:{color:"black"}},"12k Lessons")),o.a.createElement("li",null,o.a.createElement("span",{className:"px-2",style:{color:"black"}},o.a.createElement("i",{class:"fa fa-clock"})),o.a.createElement("span",{className:"px-2",style:{color:"black"}},"6 week")))),o.a.createElement(d.a,null,o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"8",md:"8"},o.a.createElement("span",{style:{color:"black"}},"271 Review")),o.a.createElement(d.a,{lg:"4",md:"4"},o.a.createElement("span",{style:{color:"black"}},"*****"))))),o.a.createElement(u.a,{className:"mt-1"},o.a.createElement(v.c,{to:"/bookEvent"},o.a.createElement(p.a,{style:{width:"100%"},color:"success"},"Join CLass")))))),o.a.createElement(d.a,{className:"mt-3",md:"4"},o.a.createElement("div",{className:"product-grid8"},o.a.createElement("div",{class:"product-image8 imageofpooja"},o.a.createElement("img",{className:"imagepooja",style:{width:"100%"},src:g.a,alt:"image"})),o.a.createElement("div",{className:"product-content"},o.a.createElement("div",{style:{color:"black"}},"Secret of Successful Teamwork"),o.a.createElement("div",{className:"",style:{color:"green"}},"Management"),o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("span",{className:"px-2",style:{color:"black"}},"icon"),o.a.createElement("span",{className:"px-2",style:{color:"black"}},"12 Lessons")),o.a.createElement("li",null,o.a.createElement("span",{className:"px-2",style:{color:"black"}},o.a.createElement("i",{class:"fa fa-clock"})),o.a.createElement("span",{className:"px-2",style:{color:"black"}},"68 week")))),o.a.createElement(d.a,null,o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"8",md:"8"},o.a.createElement("span",{style:{color:"black"}},"271 Review")),o.a.createElement(d.a,{lg:"4",md:"4"},o.a.createElement("span",{style:{color:"black"}},"*****"))))),o.a.createElement(u.a,{className:"mt-1"},o.a.createElement(v.c,{to:"/bookEvent"},o.a.createElement(p.a,{style:{width:"100%"},color:"success"},"Join CLass")))))))))))))))}}]),t}(o.a.Component),j=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={productList:[]},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.get("/admin/getProduct").then((function(a){e.setState({productList:a.data.data})}))}},{key:"render",value:function(){this.state.productList;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"heading mt-40"},o.a.createElement("h6",null,"E-LEARNING"),o.a.createElement("h2",{className:"elementor-heading-title elementor-size-default"},"Popular Lessons")),o.a.createElement(y,null)),o.a.createElement(k,null))}}]),t}(o.a.Component);a.default=j}}]);
//# sourceMappingURL=55.02433490.chunk.js.map