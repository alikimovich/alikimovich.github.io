/*! For license information please see component---src-pages-projects-domru-tsx-702b3949d95fa63ac531.js.LICENSE.txt */
(self.webpackChunkalikimovich=self.webpackChunkalikimovich||[]).push([[99],{9931:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var o=s.apply(null,a);o&&e.push(o)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var l in a)n.call(a,l)&&a[l]&&e.push(l);else e.push(a.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()},796:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(7294),s=function(e){var t,a,s,r=(0,n.useState)(!1),o=r[0],l=r[1],i=(0,n.useState)([0,0]),c=i[0],d=i[1],m=(0,n.useRef)(),u=(0,n.useCallback)((function(){return l(!0)}),[l]),h=(0,n.useCallback)((function(){return l(!1)}),[l]),p=(0,n.useCallback)((function(e){return d([e.clientX,e.clientY])}),[d]),f=null!==(t=e.speed)&&void 0!==t?t:.1;return n.createElement("div",{onMouseEnter:u,onMouseLeave:h,onMouseMove:p},n.createElement("img",Object.assign({ref:m,className:"interactive-links-image",src:e.imageSrc,alt:"",style:Object.assign({position:"fixed",display:"block",opacity:o?1:0,transform:"translate("+c[0]*f+"px, "+c[1]*f+"px)"},e.imageCentered&&{marginTop:-(null===(a=m.current)||void 0===a?void 0:a.clientHeight)/2,marginLeft:-(null===(s=m.current)||void 0===s?void 0:s.clientWidth)/2})},e.imageProps)),e.children)}},6466:function(e,t,a){"use strict";a.d(t,{h1:function(){return l},MG:function(){return o},jk:function(){return h},nA:function(){return d},HI:function(){return u},i6:function(){return m},P9:function(){return i}});var n=a(7294),s=a(9931),r=a.n(s),o=function(e){return n.createElement("div",{className:"row justify-content-center","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},n.createElement("div",{className:r()("col-12",e.className)},n.createElement("div",{className:"fullscreen"},n.createElement("img",{src:e.src,alt:""}),e.title&&n.createElement("p",{className:"text-gray text-center"},e.title))))},l=function(e){return n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"row gh-1 gv-1","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},n.createElement("div",{className:"col-12 col-sm-6"},n.createElement("div",{className:"fullscreen"},n.createElement("img",{src:e.src1,alt:""}))),n.createElement("div",{className:"col-12 col-sm-6"},n.createElement("div",{className:"fullscreen"},n.createElement("img",{src:e.src2,alt:""})))))},i=function(e){return n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"row gh-1 gv-1","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},n.createElement("div",{className:"col-12 col-sm-4"},n.createElement("div",{className:"fullscreen"},n.createElement("img",{src:e.src1,alt:""}))),n.createElement("div",{className:"col-12 col-sm-4"},n.createElement("div",{className:"fullscreen"},n.createElement("img",{src:e.src2,alt:""}))),n.createElement("div",{className:"col-12 col-sm-4"},n.createElement("div",{className:"fullscreen"},n.createElement("img",{src:e.src3,alt:""})))))},c=function(e){return"default"===e.style?n.createElement("p",{className:"text-gray",style:{textTransform:"uppercase"},"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},e.title):"blockquote"===e.style?n.createElement("blockquote",{className:"text-gray","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},e.title):"large"===e.style?n.createElement("h3",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},e.title):void 0},d=function(e){var t;return n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-12 col-lg-10 pb-60 text-white"},n.createElement("div",{className:"row mt-100"},n.createElement("div",{className:"col-12 col-lg mr-lg-60 mr-xl-100"},e.title&&n.createElement(c,{title:e.title,style:null!==(t=e.titleStyle)&&void 0!==t?t:"default"})),n.createElement("div",{className:"col-12 col-lg-6"},e.children))))},m=function(e){return n.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out",className:[e.last?"":"mb-20",e.lead?"lead":""].join(" ")},e.children)},u=function(e){var t,a=null!==(t=e.items)&&void 0!==t?t:e.children;return e.ordered?n.createElement("ol",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},null==a?void 0:a.map((function(e,t){return n.createElement("li",{key:t},e)}))):n.createElement("ul",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},null==a?void 0:a.map((function(e,t){return n.createElement("li",{key:t},e)})))},h=function(e){return n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-12 col-lg-10 pb-100 text-white"},n.createElement("div",{className:"mt-160"},n.createElement("hr",{className:"mt-n6","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"}),n.createElement("div",{className:"row gv-2 justify-content-around text-center"},n.createElement("div",{className:"col-sm-6 col-md-auto show-on-scroll","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},n.createElement("div",{className:"number-box"},n.createElement("div",{className:"number-box-title h1"},e.column1.value),n.createElement("div",{className:"number-box-subtitle"},e.column1.title))),n.createElement("div",{className:"col-sm-6 col-md-auto show-on-scroll","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},n.createElement("div",{className:"number-box"},n.createElement("div",{className:"number-box-title h1"},e.column2.value),n.createElement("div",{className:"number-box-subtitle"},e.column2.title))),n.createElement("div",{className:"col-sm-6 col-md-auto show-on-scroll","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},n.createElement("div",{className:"number-box"},n.createElement("div",{className:"number-box-title h1"},e.column3.value),n.createElement("div",{className:"number-box-subtitle"},e.column3.title)))),n.createElement("hr",{className:"mt-30","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"}))))}},8596:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(7294),s=function(e){return n.createElement("div",{className:"intro content-wrap"},n.createElement("div",{className:"pt-100 position-relative"},n.createElement("div",{className:"bg"}),n.createElement("div",{className:"container"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-12 col-lg-10 pb-100 text-white"},n.createElement("div",{className:"row mt-90 pt-3"},n.createElement("div",{className:"col-12 tlt"},n.createElement("div",{className:"display-4 text-white d-none d-xl-block"},n.createElement("div",{"data-aos":"fade-up","data-aos-delay":"50","data-aos-offset":"300","data-aos-duration":"700","data-aos-easing":"ease-in-out","data-aos-anchor-placement":"top-bottom"},e.titleFirstLine),n.createElement("div",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-offset":"300","data-aos-duration":"750","data-aos-easing":"ease-in-out","data-aos-anchor-placement":"top-bottom",className:"alt-a"},e.titleSecondLine)),n.createElement("div",{className:"display-4 text-white d-xl-none","data-aos":"fade-up","data-aos-delay":"0","data-aos-duration":"800","data-aos-easing":"ease-in-out"},e.titleMobile))),n.createElement("div",{className:"row mt-100"},n.createElement("div",{className:"col-12 col-lg mr-lg-60 mr-xl-100"},n.createElement("p",{className:"text-gray",style:{textTransform:"uppercase"},"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out"},"About")),n.createElement("div",{className:"col-12 col-lg-6"},n.createElement("p",{className:"lead","data-aos":"fade-up","data-aos-delay":"50","data-aos-duration":"700","data-aos-easing":"ease-in-out"},e.description),n.createElement("div",{className:"row gh-3 gv-1","data-aos":"fade-up","data-aos-delay":"50","data-aos-duration":"700","data-aos-easing":"ease-in-out"},n.createElement("div",{className:"col-12 col-sm-6 col-lg-auto"},n.createElement("ul",{className:"list-group list-group-gap borderless"},e.tagsLeft.map((function(e,t){return n.createElement("li",{key:t,className:"list-group-item"},e)})))),n.createElement("div",{className:"col-12 col-sm-6 col-lg-auto"},n.createElement("ul",{className:"list-group list-group-gap borderless"},e.tagsRight.map((function(e,t){return n.createElement("li",{key:t,className:"list-group-item"},e)}))))))))))))}},1843:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(7294),s=a(9718),r=a(3651),o=a.n(r),l=a(796),i=function(e){return n.createElement("div",{className:"row gv-1 align-items-center justify-content-center justify-content-md-between text-center text-md-left"},n.createElement("div",{className:"col-md-10 col-lg-9 mr-md-auto"},n.createElement("div",{className:"interactive-links"},n.createElement(l.Z,{imageSrc:e.preview,imageProps:{width:"230"},speed:1,imageCentered:!0},n.createElement(s.Z,{to:e.path,className:"nav-link display-4"},n.createElement("u",null,"Next project"))))),n.createElement("div",{className:"col-auto"},n.createElement(s.Z,{to:e.path,className:"btn btn-clean mr-xl-100"},n.createElement(o(),null))))}},1356:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return S}});var n=a(7294),s=a(5298),r=a.n(s),o=a(5186),l=a(8755),i=a(9344),c=a(5832),d=a.p+"static/share-domru-ff3faede4a8d091c696bfb811051a6b4.png",m=a(1317),u=a(9085),h=a(8596),p=a(6466),f=a(1843),g=a(7081),E=a(3444),v=a.p+"static/domru_1-77a9960badc53e878520e0b989ada7b9.png",b=a.p+"static/domru_backlog-2472da40396553631d12c3f1b0259fcb.png",y=a.p+"static/domru_flow-31de7871761de27d6e587a775e1cdf0d.png",w=a.p+"static/domru_4-bbf93757a7d41cebb5e2445874f15c2b.png",N=a.p+"static/domru_5-92b37d4181dc388ccfb522738adfd4b9.png",k=a.p+"static/domru_6-2d9af9080169b5c3274140a9dda9ca7d.png",x=a.p+"static/domru_intro-33da03a54077a82f656a08440b5c6949.gif",A=a.p+"static/domru_a_1-e14409497ee49e680ace2e4107f824b7.gif",M=a.p+"static/domru_a_2-0d55a12bf6506d4bf2d81eead5c37144.gif",j=a.p+"static/domru_2-1348231577d70f536a2fcdf4f3af7d64.png",T=a.p+"static/domru_3-88307bc5ca3eff8ce6a9f2616720171f.png",I=a(1096),S=function(){return(0,n.useEffect)((function(){r().init()}),[]),n.createElement(n.Fragment,null,n.createElement(o.q,null,n.createElement("title",null,"Andrei Alikimovich — UX designer based in Seattle"),n.createElement("meta",{name:"description",content:"Over the last 8 years, I’ve worked on a diverse range of products across multiple disciplines from UX research, visual design, and interaction design."}),n.createElement("meta",{name:"author",content:"Andrei Alikimovich"}),n.createElement("meta",{name:"theme-color",content:"#1a1a1a"}),n.createElement("link",{rel:"icon",href:l.Z}),n.createElement("link",{rel:"icon",href:i.Z,type:"image/svg+xml"}),n.createElement("link",{rel:"apple-touch-icon",href:c.Z}),n.createElement("meta",{property:"og:image",content:d}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:creator",content:"@lkmvch"})),n.createElement(E.z,null,n.createElement(m.Z,null),n.createElement(h.Z,{titleFirstLine:"Dom.ru",titleSecondLine:"My Account",titleMobile:"Dom.ru My Account",description:"This is my experience of helping the one million customers of Dom.ru, the second-largest internet provider in Russia, to keep track of changes to their account.",tagsLeft:["2017","iOS & Android apps","Research, Art Direction, UX/UI"],tagsRight:["Sketch, Invision, Zeplin",n.createElement(n.Fragment,null,"Client: ",n.createElement(g.Z,{href:"https://www.dom.ru"},"Dom.ru")),"Team: AGIMA"]}),n.createElement("div",{className:"content-wrap"},n.createElement("div",{className:"container"},n.createElement(p.MG,{src:v}),n.createElement(p.nA,{title:"How it began"},n.createElement(p.i6,null,"Dom.ru is the second-largest internet provider in Russia. In 2017, it offered internet, cable TV, home phones, mobile services, and city-sized Wi-Fi networks. We became involved because it had decided to build a mobile app as an all-in-one hub, allowing users to keep track of account changes, the latest offers, and much more."),n.createElement(p.i6,{last:!0},"Our agency was hired to design and develop this promising product.")),n.createElement(p.nA,{title:"Goal"},n.createElement(p.i6,null,"The goal for this mobile app was to become the key touchpoint of the customer experience. Our aim was to convert all the functions of the web interface into a lightweight app that could be used by inexperienced users."),n.createElement(p.i6,null,"I was responsible for the whole user experience and the user interface. I worked with a motion designer, a visual designer, a project manager, and a group of developers. Moreover, I headed the design process. My role was to inspire our team and make things easy for them.")),n.createElement(p.nA,{title:"Research"},n.createElement(p.i6,null,"We started the process by making a business trip to Perm to visit the client’s headquarters. We worked on-site with their team to determine the goals for the product. We met with several internal teams to align the goals and to prioritize the features and workflow."),n.createElement(p.i6,null,"I then conducted some in-depth interviews to understand the customer’s needs and pain points. I did a competitive analysis to identify the best practices and common practices for telecom apps."),n.createElement(p.i6,null,"The final step in the research was to use the client’s services myself. Fortunately, my grandmother used Dom.ru services, so I used her account for a while. I was literally designing an app for my own granny.")),n.createElement(p.MG,{src:b,className:"col-lg-6"}),n.createElement(p.nA,{title:"Research results"},n.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out",className:"mb-40"},"After a few weeks of research, analysis, and brainstorming, we found some valuable insights, defined the project scope, chose the basic informational architecture, and produced some lo-fi mockups."),n.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out",className:"mb-40"},"Here are a few of the research findings that I'd like to share:"),n.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out",className:"mb-20 text-gray"},"No Passwords"),n.createElement(p.i6,null,"One key discovery in the interviews with some users was that they accessed their accounts by restoring their credentials. This was because they could not remember their account number."),n.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out",className:"mb-40"},"Conclusion: The app should have an easier way to authorize users, e.g. by phone number instead of by account number. This solution increased the conversion rate from installs to authorization, decreased the workload of the user support team, and increased user satisfaction."),n.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out",className:"mb-20 text-gray"},"More Is Better"),n.createElement(p.i6,null,"Many users had more than one contract with Dom.ru because they were paying for their parents or their children."),n.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out",className:"mb-40"},"Conclusion: Users shouldn’t need to log out and log in again to check their second account. The app should support multi-account profiles."),n.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"700","data-aos-easing":"ease-in-out",className:"mb-20 text-gray"},"Accelerate Retention"),n.createElement(p.i6,null,"Dom.ru lets its users accelerate their internet access to the maximum speed for free for two days every month. This was the most popular use case (after payments) of the web account. However, many people didn’t even know about this feature."),n.createElement(p.i6,null,"Conclusion: The app would have an 'accelerate' button right on the first screen, making the experience smooth. This design solution increased retention and satisfaction.")),n.createElement(p.nA,{title:"Design Process"},n.createElement(p.i6,null,"We worked with the client’s team to identify the steps in the user lifecycle and to determine what features were necessary."),n.createElement(p.i6,null,"This is how it worked:"),n.createElement(p.i6,null,"I suggested that we redefine the authorization process. A user would not need to remember their account number to access the app because authentication would be based on their phone number, which we could use as their account number, like this:")),n.createElement(p.MG,{src:y}),n.createElement(p.nA,null,n.createElement(p.i6,null,"The original idea was that they would log in with their phone number and a one-time SMS code, but then we found that the client’s infrastructure couldn’t support this type of authorization process. So I designed a different process, in which a user logged in with their phone number and the classic password."),n.createElement(p.i6,null,"After a few iterations like this, the navigation in the app and the first high-fidelity mockups were approved by the client, and I moved further to visual concepts.")),n.createElement(p.nA,{title:"Visual Concepts"},n.createElement(p.i6,null,"We decided to create three unique design concepts and evaluate them by getting users to test them.")),n.createElement(p.MG,{src:w}),n.createElement(p.MG,{src:N}),n.createElement(p.MG,{src:k}),n.createElement(p.nA,null,n.createElement(p.i6,null,"The client’s team ran tests with 15 respondents. The results were somewhat curious. The “sky” version (3) had the best overall rating, although the “blur” (2) one was the most popular. The client decided to continue with the “sky” version, even though it was less appealing."),n.createElement(p.i6,null,"While I was working on the new flows, the visual designer converted the existing flows to speed up the development. Moreover, the motion designer took some of the completed screens and designed a beautiful intro animation.")),n.createElement(p.P9,{src1:x,src2:A,src3:M}),n.createElement(p.nA,{title:"Results"},n.createElement(p.i6,null,"The entire app was ready in seven months, complete with animations, UI kit, Android and iOS style guides, and a happy focus group."),n.createElement(p.i6,null,"The app was launched in 2018. It gained a high rating of 4+ in Google Play."),n.createElement(p.i6,null,"But the most important thing was that more than one million Dom.ru customers had control of payments and services at their fingertips!"),n.createElement(p.i6,null,"This app helped customers to make payments on time easily and without delays. Obviously, it also increased the profit of my client."),n.createElement(p.i6,null,"Here is"," ",n.createElement(g.Z,{href:"https://www.behance.net/gallery/70915797/domru-agent"},"a Behance case")," ","and"," ",n.createElement(g.Z,{href:"https://play.google.com/store/apps/details?id=com.ertelecom.agent"},"the actual version of the app")," ","in Google Play.")),n.createElement(p.jk,{column1:{value:"4+",title:"rating in the Google Market"},column2:{value:"1,000,000+",title:"customers"},column3:{value:"7",title:"months of work"}}),n.createElement(p.MG,{src:v,title:"Home, Payment, Payment card"}),n.createElement(p.MG,{src:j,title:"Services, Current plan, New plan"}),n.createElement(p.MG,{src:T,title:"Support, Chat, Other apps"})),n.createElement("div",{className:"pt-160 pb-130 shape-parent overflow-hidden"},n.createElement("div",{className:"container"},n.createElement(f.Z,{path:"/projects/good",preview:I.Z})))),n.createElement(u.Z,null)))}},3651:function(e,t,a){var n=a(7294);function s(e){return n.createElement("svg",e,[n.createElement("path",{d:"M54 2L67 15L54 28",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",key:0}),n.createElement("path",{d:"M17 15L67 15",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",key:1})])}s.defaultProps={className:"icon-arrow icon-arrow-right",width:"69",height:"30",viewBox:"0 0 69 30",fill:"none"},e.exports=s,s.default=s},1096:function(e,t,a){"use strict";t.Z=a.p+"static/good_time-b3079d79ef20049afd3de77a49469068.jpg"}}]);
//# sourceMappingURL=component---src-pages-projects-domru-tsx-702b3949d95fa63ac531.js.map