(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[99],{1099:function(e,t,a){"use strict";a.r(t);var n=a(204),o=a(197),l=a(198),s=a(209),r=a(199),c=a(200),i=a(0),u=a.n(i),b=a(619),d=a(620),f=a(629),p=a(651),m=a(201),h=(a(636),a(60)),v=a(628),g=a.n(v),O=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={otp:""},e.resenddd=function(){e.setState({otp:""}),e.interval(),e.sendOtp()},e.state={customer_email:"",mobile:"",otp:"123456",msg:"",input:{},errors:{}},e.handleChange=function(t){return e.setState({otp:t})},e.handleSubmit=e.handleSubmit.bind(Object(s.a)(e)),e}return Object(l.a)(a,[{key:"interval",value:function(){this.setState({seconds:26})}},{key:"handleChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),h.a.post("/user/verifyotp",this.state).then((function(e){console.log(e),alert("anjali"),g()("Success!"," OTP Verify Successful Done!","success"),t.props.history.push("/completeproastro")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return u.a.createElement(m.a,{headerTop:"visible"},u.a.createElement("section",null,u.a.createElement(b.a,null,u.a.createElement(d.a,null,u.a.createElement(f.a,{lg:"2"}),u.a.createElement(f.a,{lg:"8"},u.a.createElement("div",{className:"wal-amt"},u.a.createElement("h1",null,"Verify OTP"),u.a.createElement("hr",null),u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement(d.a,null,u.a.createElement(f.a,{md:"12"},u.a.createElement("label",null,"Enter Your OTP Here"),u.a.createElement("input",{type:"text",placeholder:"Enter OTP",name:"otp",value:this.state.otp,onChange:this.changeHandler})),u.a.createElement(f.a,{md:"12",className:"mt-3"},u.a.createElement(p.a,{className:"btn btn-success"},"Submit")))))),u.a.createElement(f.a,{lg:"2"})))))}}]),a}(u.a.Component);t.default=O},629:function(e,t,a){"use strict";var n=a(7),o=a(16),l=a(0),s=a.n(l),r=a(3),c=a.n(r),i=a(59),u=a.n(i),b=a(54),d=["className","cssModule","widths","tag"],f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:b.o,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,l=e.widths,r=e.tag,c=Object(o.a)(e,d),i=[];l.forEach((function(t,n){var o=e[t];if(delete c[t],o||""===o){var l=!n;if(Object(b.i)(o)){var s,r=l?"-":"-"+t+"-",d=v(l,t,o.size);i.push(Object(b.k)(u()(((s={})[d]=o.size||""===o.size,s["order"+r+o.order]=o.order||0===o.order,s["offset"+r+o.offset]=o.offset||0===o.offset,s)),a))}else{var f=v(l,t,o);i.push(f)}}})),i.length||i.push("col");var f=Object(b.k)(u()(t,i),a);return s.a.createElement(r,Object(n.a)({},c,{className:f}))};g.propTypes=m,g.defaultProps=h,t.a=g},636:function(e,t,a){},651:function(e,t,a){"use strict";var n=a(7),o=a(16),l=a(206),s=a(20),r=a(0),c=a.n(r),i=a(3),u=a.n(i),b=a(59),d=a.n(b),f=a(54),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.o,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],l=e.block,s=e.className,r=e.close,i=e.cssModule,u=e.color,b=e.outline,m=e.size,h=e.tag,v=e.innerRef,g=Object(o.a)(e,p);r&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(b?"-outline":"")+"-"+u,E=Object(f.k)(d()(s,{close:r},r||"btn",r||O,!!m&&"btn-"+m,!!l&&"btn-block",{active:t,disabled:this.props.disabled}),i);g.href&&"button"===h&&(h="a");var k=r?"Close":null;return c.a.createElement(h,Object(n.a)({type:"button"===h&&g.onClick?"button":void 0},g,{className:E,ref:v,onClick:this.onClick,"aria-label":a||k}))},t}(c.a.Component);h.propTypes=m,h.defaultProps={color:"secondary",tag:"button"},t.a=h}}]);
//# sourceMappingURL=99.d14a9522.chunk.js.map