(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[127,172],{1098:function(e,t,a){"use strict";a.r(t);var n=a(204),r=a(8),l=a(22),c=a(0),i=a.n(c),o=a(873),s=a(874);t.default=function(){var e=Object(c.useState)({status:"",msg:"",mobile:"",otp:""}),t=Object(l.a)(e,2),a=t[0],m=t[1],u=Object(c.useState)(1),p=Object(l.a)(u,2),f=p[0],d=p[1],b=function(e){return function(t){m(Object(r.a)(Object(r.a)({},a),{},Object(n.a)({},e,t.target.value)))}},g=function(e){m(Object(r.a)(Object(r.a)({},a),{},{msg:e}))},h=function(){m((function(e){return d+1}))},v={status:a.status,msg:a.msg,mobile:a.mobile,otp:a.otp};switch(f){case 1:return i.a.createElement(o.default,{nextStep:h,msgHandleChange:g,handleChange:b,value:v});case 2:return i.a.createElement(s.default,{nextStep:h,prevStep:function(){m((function(e){return e-1}))},handleChange:b,value:v});default:return i.a.createElement(o.default,{nextStep:h,msgHandleChange:g,handleChange:b,value:v})}}},625:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),c=a(207);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(c.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:l.d,finalItem:"span"}))))}},680:function(e,t,a){"use strict";var n=a(7),r=a(16),l=a(206),c=a(20),i=a(0),o=a.n(i),s=a(3),m=a.n(s),u=a(59),p=a.n(u),f=a(54),d=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:f.o,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,c=e.tag,i=e.innerRef,s=Object(r.a)(e,d),m=Object(f.k)(p()(t,!!l&&"form-inline"),a);return o.a.createElement(c,Object(n.a)({},s,{ref:i,className:m}))},t}(i.Component);g.propTypes=b,g.defaultProps={tag:"form"},t.a=g},873:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(204),r=a(197),l=a(198),c=a(199),i=a(200),o=a(0),s=a.n(o),m=a(632),u=a.n(m),p=a(669),f=a(201),d=a(625),b=a(61),g=a.n(b),h=a(680),v=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),g.a.post("http://13.235.180.192/api/user/sendotp",l.state).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},l.state={mobile_no:"12345678",customer_email:"guptapratima98710@gmail.com",selectedFile:null},l}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(o.Fragment,null,s.a.createElement(u.a,null,s.a.createElement("title",null,"Buynaa | Login"),s.a.createElement("meta",{content:"Compare page of flone react minimalist eCommerce template."})),s.a.createElement(f.a,{headerTop:"visible"},s.a.createElement(d.a,null),s.a.createElement("div",{className:"login-register-area pt-100 pb-100"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},s.a.createElement("div",{className:"login-register-wrapper"},s.a.createElement(p.a.Container,{defaultActiveKey:"login"},s.a.createElement(p.a.Content,null,s.a.createElement(p.a.Pane,{eventKey:"login"},s.a.createElement("div",{className:"login-form-container"},s.a.createElement("div",{className:"login-register-form"},s.a.createElement(h.a,{onSubmit:this.submitHandler},s.a.createElement("input",{onChange:this.changeHandler,type:"number",value:this.state.mobile_no,name:"mobile_no ",placeholder:"Enter your mobile number"}),s.a.createElement("input",{value:this.state.customer_email,type:"email",name:"customer_email",placeholder:"Enter Email"}),s.a.createElement("div",{className:"button-box"},s.a.createElement("button",{type:"submit",color:"primary"},"SendOTP")))))))))))))))}}]),a}(o.Component)},874:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a(204),r=a(197),l=a(198),c=a(209),i=a(199),o=a(200),s=a(0),m=a.n(s),u=a(632),p=a.n(u),f=a(875),d=a.n(f),b=a(60),g=a(669),h=a(201),v=a(625),E=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={otp:""},e.resenddd=function(){e.setState({otp:""}),e.interval(),e.sendOtp()},e.state={customer_email:"",mobile:"",otp:"123456",msg:"",input:{},errors:{}},e.handleChange=function(t){return e.setState({otp:t})},e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e}return Object(l.a)(a,[{key:"interval",value:function(){this.setState({seconds:26})}},{key:"handleChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),b.a.post("/user/verifyotp",this.state).then((function(e){console.log(e),alert("anjali")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement(s.Fragment,null,m.a.createElement(p.a,null,m.a.createElement("title",null,"Astrogyata | Login"),m.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),m.a.createElement(h.a,{headerTop:"visible"},m.a.createElement(v.a,null),m.a.createElement("div",{className:"login-register-area pt-100 pb-100"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},m.a.createElement("div",{className:"login-register-wrapper"},m.a.createElement(g.a.Container,{defaultActiveKey:"login"},m.a.createElement(g.a.Content,null,m.a.createElement(g.a.Pane,{eventKey:"login"},m.a.createElement("div",{className:"login-form-container"},m.a.createElement("div",{className:"login-register-form"},m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("div",null,m.a.createElement(d.a,{value:this.state.otp,onChange:this.handleChange,numInputs:4,type:"number",name:"otp",separator:m.a.createElement("span",null)}),this.state.OTPError?this.state.OTPError:null),m.a.createElement("div",{className:"button-box"},m.a.createElement("button",{type:"back"},"Back"),m.a.createElement("button",{type:"submit"},"SendOTP")))))))))))))))}}]),a}(m.a.Component)}}]);
//# sourceMappingURL=127.6d3d81a4.chunk.js.map