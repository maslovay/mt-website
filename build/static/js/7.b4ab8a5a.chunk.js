(this["webpackJsonpMecht.Ai"]=this["webpackJsonpMecht.Ai"]||[]).push([[7],{132:function(e,t,s){"use strict";s.r(t);var a=s(3),c=s(4),i=s(9),n=s(18),r=s(0),l=s.n(r),o=s(85),d=s(88),j=s.n(d),m=(s(89),s(124)),h=s(125),b=s(24),u=s.p+"static/media/home-shape.2c2a6ab1.png",x=s.p+"static/media/mechtai_main.90a4ace6.png",O=s(1),p=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsx)("section",{className:"bg-home d-flex align-items-center",style:{background:"url(".concat(u,")"),backgroundPosition:"center center",height:"auto"},id:"home",children:Object(O.jsx)(o.a,{children:Object(O.jsx)(m.a,{className:"justify-content-center",children:Object(O.jsxs)(h.a,{lg:"12",className:"text-center mt-0 mt-md-5 pt-0 pt-md-5",children:[Object(O.jsxs)("div",{className:"title-heading margin-top-100",children:[Object(O.jsx)("h1",{className:"heading mb-3",children:b.a.t("home.main.title")}),Object(O.jsx)("p",{className:"para-desc mx-auto text-muted",children:b.a.t("home.main.description")})]}),Object(O.jsx)("div",{className:"home-dashboard",children:Object(O.jsx)("img",{src:x,alt:"",className:"img-fluid"})})]})})})})})}}]),s}(r.Component),f=p,g=s.p+"static/media/mecht.ai_scheme.bc437e37.png",v=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={features1:[{title:b.a.t("home.description.benefit1")},{title:b.a.t("home.description.benefit2")},{title:b.a.t("home.description.benefit3")},{title:b.a.t("home.description.benefit4")}]},e}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsx)(o.a,{className:"mt-100 mt-60",children:Object(O.jsxs)(m.a,{className:"align-items-center",children:[Object(O.jsx)(h.a,{lg:"6",md:"5",children:Object(O.jsx)("div",{className:"position-relative",children:Object(O.jsx)("div",{className:"text-center text-md-left",children:Object(O.jsx)("img",{src:g,className:"img-fluid shadow rounded",alt:""})})})}),Object(O.jsx)(h.a,{lg:"6",md:"7",className:"mt-5 mt-sm-0",children:Object(O.jsxs)("div",{className:"section-title",children:[Object(O.jsx)("h4",{className:"title mb-4",children:b.a.t("home.description.title")}),Object(O.jsxs)("p",{className:"text-muted",children:[" ",b.a.t("home.description.description")," "]}),Object(O.jsx)("ul",{className:"list-unstyled feature-list text-muted",name:"featurelines",children:this.state.features1.map((function(t,s){return Object(O.jsxs)("li",{className:"mb-0",children:[Object(O.jsx)("span",{className:"text-primary h5 mr-2",children:Object(O.jsx)("i",{className:"uil uil-check-circle align-middle"+e.props.class})}),t.title]},s)}))})]})})]})})})}}]),s}(r.Component),N=v,y=s(10),w=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={successMsg:!1},c.handleSubmit=c.handleSubmit.bind(Object(y.a)(c)),c}return Object(c.a)(s,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({successMsg:!0})}},{key:"render",value:function(){return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsxs)("section",{className:"section bg-primary bg-gradient",children:[Object(O.jsx)("div",{className:"bg-overlay bg-overlay-white"}),Object(O.jsx)(o.a,{className:"position-relative",children:Object(O.jsx)(m.a,{children:Object(O.jsx)(h.a,{lg:"12",md:"12",className:"mt-4 pt-2 mt-sm-0 pt-sm-0",children:Object(O.jsxs)("div",{className:"section-title text-center text-md-start",children:[Object(O.jsx)("h1",{className:"title text-white title-dark mb-2",children:b.a.t("home.robottypes.title")}),Object(O.jsx)("p",{className:"text-light para-dark",children:b.a.t("home.robottypes.description")})]})})})})]})})}}]),s}(r.Component),k=s(19),C=s(90),L=s.n(C),S=(s(95),s.p+"static/media/remote_controlled_robots.e387107e.png"),M=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={isOpen:!1},c.openModal=c.openModal.bind(Object(y.a)(c)),c}return Object(c.a)(s,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"render",value:function(){var e=this;return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsxs)(o.a,{className:"mt-100 mt-60",children:[Object(O.jsx)(m.a,{children:Object(O.jsx)(h.a,{xs:"12",children:Object(O.jsxs)("div",{className:"position-relative",style:{zIndex:"1"},"data-aos":"zoom-in","data-aos-duration":"1600",children:[Object(O.jsx)("img",{src:S,className:"rounded img-fluid mx-auto d-block",alt:""}),Object(O.jsx)("div",{className:"play-icon",children:Object(O.jsx)(k.b,{to:"#",onClick:this.openModal,className:"play-btn video-play-icon",children:Object(O.jsx)("i",{className:"mdi mdi-play text-primary rounded-pill bg-white shadow"})})})]})})}),Object(O.jsx)(L.a,{channel:"vimeo",isOpen:this.state.isOpen,videoId:"287684225",onClose:function(){return e.setState({isOpen:!1})}})]})})}}]),s}(r.Component),A=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsx)("div",{className:"position-relative",children:Object(O.jsx)("div",{className:"shape overflow-hidden text-light",children:Object(O.jsx)("svg",{viewBox:"0 0 2880 250",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"M720 125L2160 0H2880V250H0V125H720Z",fill:"currentColor"})})})})})}}]),s}(r.Component),F=A,W=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsx)(m.a,{className:"justify-content-center",children:Object(O.jsx)(h.a,{xs:"12",className:this.props.isLeft?"":"text-center",children:Object(O.jsxs)("div",{className:"section-title mb-4 pb-2",name:"maintitle",children:[Object(O.jsxs)("h4",{className:"title mb-4",name:"sectiontitle",children:[" ",this.props.title," "]}),Object(O.jsxs)("p",{className:this.props.isLeft?"text-muted para-desc mb-0":"text-muted para-desc mx-auto mb-0",name:"sectiondesc",children:[this.props.desc," "]})]})})})})}}]),s}(r.Component),_=W,B=s(126),D=s(127),I=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=this.props.processes.length;return Object(O.jsx)(l.a.Fragment,{children:this.props.processes.map((function(t,s){return Object(O.jsx)(h.a,{md:"4",className:"mt-4 pt-2",children:Object(O.jsx)(B.a,{className:"work-process border-0 rounded shadow",children:Object(O.jsxs)(D.a,{children:[Object(O.jsx)("h4",{className:"title",children:t.title}),Object(O.jsx)("p",{className:"text-muted para",children:t.desc}),Object(O.jsxs)("ul",{className:"list-unstyled d-flex justify-content-between mb-0 mt-2",children:[Object(O.jsxs)("li",{className:"step h1 mb-0 font-weight-bold",children:["Step ",s+1,"."]}),Object(O.jsx)("li",{className:"step-icon",children:Object(O.jsx)("i",{className:s+1===e?"mdi mdi-check-all mdi-36px":"mdi mdi-chevron-double-right mdi-36px"})})]})]})})},s)}))})}}]),s}(r.Component),z=I,E=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).openModal=function(){c.setState({isOpen:!c.state.isOpen})},c.state={processes:[{id:1,title:b.a.t("home.howItWork.step1"),desc:b.a.t("home.howItWork.step1Description")},{id:2,title:b.a.t("home.howItWork.step2"),desc:b.a.t("home.howItWork.step2Description")},{id:3,title:b.a.t("home.howItWork.step3"),desc:b.a.t("home.howItWork.step3Description")}],works:[],isOpen:!1},c.openModal.bind(Object(y.a)(c)),c}return Object(c.a)(s,[{key:"render",value:function(){return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsx)("section",{className:"section",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(_,{title:b.a.t("home.howItWork.title")}),Object(O.jsx)(m.a,{children:Object(O.jsx)(z,{processes:this.state.processes})})]})})})}}]),s}(r.Component),V=s(135),H=s(128),q=s(129),G=s(130),J=s(68),P=s.n(J),T=s(96),U=s.n(T),Y=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={Contactvisible:!1,email:null,name:null,phone:null,subject:null,message:null},c.handleSubmit=c.handleSubmit.bind(Object(y.a)(c)),c}return Object(c.a)(s,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({Contactvisible:!0}),U()({method:"get",url:"https://tbaf.azurewebsites.net/api/SendSalesEmail",params:{to:"sales@trashback.ru",name:this.state.name,email:this.state.email,phone:this.state.phone,request:this.state.message,sub:"Mecht.Ai - from site contact page "}}).then((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsx)(o.a,{children:Object(O.jsx)(m.a,{className:"align-items-center",children:Object(O.jsxs)(h.a,{lg:15,md:{size:12,order:1},xs:{order:2},className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:[Object(O.jsx)("h4",{className:"title mb-4","data-aos":"fade-up","data-aos-duration":"1000",children:b.a.t("contact.contact_us")}),Object(O.jsx)(B.a,{className:"custom-form rounded shadow border-0",children:Object(O.jsxs)(D.a,{children:[Object(O.jsx)("div",{id:"message"}),Object(O.jsx)(V.a,{color:"primary",isOpen:this.state.Contactvisible,toggle:function(){e.setState({Contactvisible:!e.state.Contactvisible})},children:b.a.t("contact.send_succesfully")}),Object(O.jsxs)(H.a,{method:"post",onSubmit:this.handleSubmit,name:"contact-form",id:"contact-form",children:[Object(O.jsxs)(m.a,{children:[Object(O.jsx)(h.a,{md:4,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsxs)(q.a,{className:"form-label",children:[b.a.t("contact.your_name")," ",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)("div",{className:"form-icon position-relative",children:Object(O.jsx)("i",{children:Object(O.jsx)(P.a,{icon:"user",className:"fea icon-sm icons"})})}),Object(O.jsx)(G.a,{name:"name",type:"text",className:"form-control ps-5",placeholder:b.a.t("contact.your_name"),required:!0,onChange:function(t){e.setState({name:t.target.value})}})]})}),Object(O.jsx)(h.a,{lg:4,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsxs)(q.a,{className:"form-label",children:[b.a.t("contact.your_email")," ",Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)("div",{className:"form-icon position-relative",children:Object(O.jsx)("i",{children:Object(O.jsx)(P.a,{icon:"mail",className:"fea icon-sm icons"})})}),Object(O.jsx)(G.a,{name:"email",type:"email",className:"form-control ps-5",placeholder:"Email",required:!0,onChange:function(t){e.setState({email:t.target.value})}})]})}),Object(O.jsx)(h.a,{md:4,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)(q.a,{className:"form-label",children:b.a.t("contact.your_phone")}),Object(O.jsx)("div",{className:"form-icon position-relative",children:Object(O.jsx)("i",{children:Object(O.jsx)(P.a,{icon:"book",className:"fea icon-sm icons"})})}),Object(O.jsx)(G.a,{name:"subject",id:"subject",type:"tel",className:"form-control ps-5",placeholder:b.a.t("contact.your_phone"),onChange:function(t){e.setState({subject:t.target.value})},required:!0})]})}),Object(O.jsx)(h.a,{lg:12,children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)(q.a,{className:"form-label",children:b.a.t("contact.request")}),Object(O.jsx)("div",{className:"form-icon position-relative",children:Object(O.jsx)("i",{children:Object(O.jsx)(P.a,{icon:"message-circle",className:"fea icon-sm icons"})})}),Object(O.jsx)("textarea",{name:"comments",id:"comments",rows:"2",className:"form-control ps-5",placeholder:b.a.t("contact.your_message"),onChange:function(t){e.setState({message:t.target.value})}})]})})]}),Object(O.jsx)(m.a,{children:Object(O.jsxs)(h.a,{sm:"12",className:"text-center",children:[Object(O.jsx)("div",{className:"d-grid",children:Object(O.jsx)("button",{className:"submitBnt btn btn-primary btn-block",onClick:function(){console.log("print")},children:b.a.t("contact.send_message")})}),Object(O.jsx)("div",{id:"simple-msg"})]})})]})]})})]})})})})}}]),s}(r.Component),Z=s.p+"static/media/remote_operators.fe3b9fb3.png",K=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={features1:[{title:b.a.t("home.benefits.benefit1")},{title:b.a.t("home.benefits.benefit2")},{title:b.a.t("home.benefits.benefit3")},{title:b.a.t("home.benefits.benefit4")},{title:b.a.t("home.benefits.benefit5")}]},e}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsx)(o.a,{className:"mt-100 mt-60",children:Object(O.jsxs)(m.a,{className:"align-items-center",children:[Object(O.jsx)(h.a,{lg:"6",md:"5",children:Object(O.jsx)("div",{className:"position-relative",children:Object(O.jsx)("div",{className:"text-center text-md-left",children:Object(O.jsx)("img",{src:Z,className:"img-fluid shadow rounded",alt:""})})})}),Object(O.jsx)(h.a,{lg:"6",md:"7",className:"mt-5 mt-sm-0",children:Object(O.jsxs)("div",{className:"section-title",children:[Object(O.jsx)("h4",{className:"title mb-4",children:b.a.t("home.benefits.title")}),Object(O.jsxs)("p",{className:"text-muted",children:[" ",b.a.t("home.benefits.description")," "]}),Object(O.jsx)("ul",{className:"list-unstyled feature-list text-muted",name:"featurelines",children:this.state.features1.map((function(t,s){return Object(O.jsxs)("li",{className:"mb-0",children:[Object(O.jsx)("span",{className:"text-primary h5 mr-2",children:Object(O.jsx)("i",{className:"uil uil-check-circle align-middle"+e.props.class})}),t.title]},s)}))})]})})]})})})}}]),s}(r.Component),Q=K,R=s(131),X=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={},c}return Object(c.a)(s,[{key:"render",value:function(){return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(_,{title:b.a.t("home.industries.title"),desc:b.a.t("home.industries.description")}),Object(O.jsxs)(m.a,{children:[Object(O.jsx)(h.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(O.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(O.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bold fea icon-ex-md text-primary",children:[Object(O.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),Object(O.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),Object(O.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]})}),Object(O.jsx)(R.a,{body:!0,style:{paddingLeft:"20px"},children:Object(O.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:b.a.t("home.industries.delivery")})})]})}),Object(O.jsx)(h.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(O.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(O.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bold fea icon-ex-md text-primary",children:[Object(O.jsx)("circle",{cx:"12",cy:"12",r:"3"}),Object(O.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),Object(O.jsx)(R.a,{body:!0,style:{paddingLeft:"20px"},children:Object(O.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:b.a.t("home.industries.manufacturing")})})]})}),Object(O.jsx)(h.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(O.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(O.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bold fea icon-ex-md text-primary",children:Object(O.jsx)("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})})}),Object(O.jsx)(R.a,{body:!0,style:{paddingLeft:"20px"},children:Object(O.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:b.a.t("home.industries.oilgas")})})]})}),Object(O.jsx)(h.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(O.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(O.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-git-merge fea icon-ex-md text-primary",children:[Object(O.jsx)("rect",{x:"1",y:"3",width:"15",height:"13"}),Object(O.jsx)("polygon",{points:"16 8 20 8 23 11 23 16 16 16 16 8"}),Object(O.jsx)("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),Object(O.jsx)("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]})}),Object(O.jsx)(R.a,{body:!0,style:{paddingLeft:"20px"},children:Object(O.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:b.a.t("home.industries.agriculture")})})]})}),Object(O.jsx)(h.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(O.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(O.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-git-merge fea icon-ex-md text-primary",children:[Object(O.jsx)("polygon",{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"}),Object(O.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"18"}),Object(O.jsx)("line",{x1:"16",y1:"6",x2:"16",y2:"22"})]})}),Object(O.jsx)(R.a,{body:!0,style:{paddingLeft:"20px"},children:Object(O.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:b.a.t("home.industries.landscaping")})})]})}),Object(O.jsx)(h.a,{lg:4,md:6,className:"mt-4 pt-2",children:Object(O.jsxs)("div",{className:"d-flex key-feature align-items-center p-3 rounded shadow",children:[Object(O.jsx)("div",{className:"icon text-center rounded-circle me-3",children:Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-git-merge fea icon-ex-md text-primary",children:Object(O.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),Object(O.jsx)(R.a,{body:!0,style:{paddingLeft:"20px"},children:Object(O.jsx)("h4",{className:"title mb-0",style:{color:"#000000"},children:b.a.t("home.industries.security")})})]})})]})]})})}}]),s}(r.Component),$=s.p+"static/media/hardware_module.ddb3f1ee.png",ee=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={features1:[{title:b.a.t("home.hardware.benefit1")},{title:b.a.t("home.hardware.benefit2")},{title:b.a.t("home.hardware.benefit3")},{title:b.a.t("home.hardware.benefit4")},{title:b.a.t("home.hardware.benefit5")},{title:b.a.t("home.hardware.benefit6")},{title:b.a.t("home.hardware.benefit7")}]},e}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsx)(o.a,{className:"mt-100 mt-60",children:Object(O.jsxs)(m.a,{className:"align-items-center",children:[Object(O.jsx)(h.a,{lg:"6",md:"7",className:"mt-5 mt-sm-0",children:Object(O.jsxs)("div",{className:"section-title",children:[Object(O.jsx)("h4",{className:"title mb-4",children:b.a.t("home.hardware.title")}),Object(O.jsxs)("p",{className:"text-muted",children:[" ",b.a.t("home.hardware.description")," "]}),Object(O.jsx)("ul",{className:"list-unstyled feature-list text-muted",name:"featurelines",children:this.state.features1.map((function(t,s){return Object(O.jsxs)("li",{className:"mb-0",children:[Object(O.jsx)("span",{className:"text-primary h5 mr-2",children:Object(O.jsx)("i",{className:"uil uil-check-circle align-middle"+e.props.class})}),t.title]},s)}))})]})}),Object(O.jsx)(h.a,{lg:"6",md:"5",children:Object(O.jsx)("div",{className:"position-relative",children:Object(O.jsx)("div",{className:"text-center text-md-left",children:Object(O.jsx)("img",{src:$,className:"img-fluid shadow rounded",alt:""})})})})]})})})}}]),s}(r.Component),te=ee,se=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={},c}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsx)(m.a,{children:this.props.featureArray.map((function(t,s){return Object(O.jsx)(h.a,{md:4,xs:12,name:"featurebox",children:Object(O.jsxs)("div",{className:e.props.isCenter?"features text-center":"features mt-5",children:[Object(O.jsx)("div",{className:"image position-relative d-inline-block",children:Object(O.jsx)("i",{className:t.icon})}),Object(O.jsxs)("div",{className:"content mt-4",children:[Object(O.jsx)("h5",{className:"title-2",children:t.title}),Object(O.jsx)("p",{className:"text-muted mb-0",children:t.description})]})]})},s)}))})})}}]),s}(r.Component),ae=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={features:[{id:1,icon:"uil uil-car-sideview h1 text-primary",title:b.a.t("home.semiautonomous.benefit1"),description:b.a.t("home.semiautonomous.benefit1description")},{id:2,icon:"uil uil-location-arrow-alt h1 text-primary",title:b.a.t("home.semiautonomous.benefit2"),description:b.a.t("home.semiautonomous.benefit2description")},{id:3,icon:"uil uil-sign-alt h1 text-primary",title:b.a.t("home.semiautonomous.benefit3"),description:b.a.t("home.semiautonomous.benefit3description")}]},c}return Object(c.a)(s,[{key:"render",value:function(){return Object(O.jsx)(l.a.Fragment,{children:Object(O.jsx)("section",{className:"section",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(_,{title:b.a.t("home.semiautonomous.title"),desc:b.a.t("home.semiautonomous.description")}),Object(O.jsx)(se,{featureArray:this.state.features})]})})})}}]),s}(r.Component),ce=s(119),ie=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(O.jsxs)(ce.a,{children:[Object(O.jsx)("title",{children:b.a.t("pageData.appName")+" - "+b.a.t("pageData."+this.props.name+".main")}),Object(O.jsx)("meta",{name:"description",content:b.a.t("pageData."+this.props.name+".description")}),Object(O.jsx)("meta",{name:"keywords",content:b.a.t("pageData."+this.props.name+".keywords")}),Object(O.jsx)("meta",{name:"image",content:b.a.t("pageData."+this.props.name+".image")}),Object(O.jsx)("meta",{name:"author",content:"Mecht.Ai"}),Object(O.jsx)("meta",{name:"version",content:"v1.0"})]})}}]),s}(r.Component),ne=ie;s(122).a.initialize("G-G3CSMVPNW7");var re=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e,c){var i;return Object(a.a)(this,s),(i=t.call(this,e,c)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},j.a.init(),i}return Object(c.a)(s,[{key:"componentDidMount",value:function(){j.a.refresh(),document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0);for(var e=document.getElementsByName("sectiontitle"),t=document.getElementsByName("sectiondesc"),s=0;s<e.length;s++)e[s].setAttribute("data-aos","fade-up"),e[s].setAttribute("data-aos-duration","1200"),t[s].setAttribute("data-aos","fade-up"),t[s].setAttribute("data-aos-duration","1000")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return Object(O.jsxs)(l.a.Fragment,{children:[Object(O.jsx)(ne,{name:"main"}),Object(O.jsx)(f,{}),Object(O.jsxs)("section",{className:"section pb-0",id:"service",children:[Object(O.jsx)(N,{}),Object(O.jsx)(te,{}),Object(O.jsx)(Q,{}),Object(O.jsx)(ae,{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(w,{})]}),Object(O.jsx)(E,{}),Object(O.jsx)(F,{}),Object(O.jsxs)("section",{className:"section bg-light",id:"testimonial",children:[Object(O.jsx)(M,{}),Object(O.jsx)(o.a,{className:"pt-5"})]}),Object(O.jsx)("section",{className:"section",id:"pricing",children:Object(O.jsx)(X,{})}),Object(O.jsxs)("section",{className:"section pb-0",id:"contact",children:[Object(O.jsx)(Y,{}),Object(O.jsx)("a",{href:"/page-error"})]}),Object(O.jsx)("br",{})]})}}]),s}(r.Component);t.default=re}}]);
//# sourceMappingURL=7.b4ab8a5a.chunk.js.map