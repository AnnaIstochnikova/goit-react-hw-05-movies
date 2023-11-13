"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[634],{839:function(n,e,r){r.d(e,{Z:function(){return i}});var t=r(3430),o=r(184);function i(){return(0,o.jsx)(t.$1,{radius:"45",strokeWidth:"5",color:"orange",secondaryColor:"rgb(35, 8, 66)",ariaLabel:"revolving-dot-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},7634:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var t,o,i,c,a=r(9439),s=r(2791),u=r(7689),l=r(839),d=r(6911),v=r(168),p=r(1087),h=r(5867),f=r(184),x=function(n){var e=n.to,r=n.children;return(0,f.jsx)(g,{to:e,children:r})},g=(0,h.ZP)(p.rU)(t||(t=(0,v.Z)(["\n  font-size: 13px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: orange;\n  &:hover {\n    background-color: rgb(255, 119, 0);\n  }\n"]))),m=h.ZP.div(o||(o=(0,v.Z)(["\n  display: flex;\n  width: 800px;\n  & > div > img {\n    margin-top: 20px;\n    width: 300px;\n    height: 400px;\n  }\n"]))),j=function(n){var e=n.to,r=n.children;return(0,f.jsx)(w,{to:e,children:r})},w=(0,h.ZP)(p.rU)(i||(i=(0,v.Z)(["\n  width: 70px;\n  margin-top: 15px;\n  padding: 10px;\n  border-radius: 10px;\n  text-decoration: none;\n  text-align: center;\n  &.active {\n    background-color: orange;\n  }\n"]))),_=h.ZP.div(c||(c=(0,v.Z)(["\n  display: flex;\n  gap: 50px;\n"])));function b(){var n,e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],o=r[1],i=(0,s.useState)([]),c=(0,a.Z)(i,2),v=c[0],p=c[1],h=(0,u.UO)().id,g=(0,u.TH)(),w=(10*t.vote_average).toFixed(0)+"%";return(0,s.useEffect)((function(){(0,d.TP)(h).then((function(n){o(n),p(n.genres)})).catch((function(n){console.error(n)}))}),[h]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(m,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(x,{to:function(){var n;return console.log(h),console.log(g.state),null!==(n=g.state)&&void 0!==n&&n.from?g.state.from:null===g.state?"/":"/movies/"}(),children:"Go back"}),(0,f.jsx)("img",{src:(0,d.OR)(t.poster_path),alt:t.title})]}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[t.title," (",null===(n=t.release_date)||void 0===n?void 0:n.slice(0,4),")"]}),t.overview,t.vote_average>0?(0,f.jsxs)("p",{children:["User Score: ",w]}):null,(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:t.overview}),1===v.length?(0,f.jsx)("h3",{children:"Genre"}):(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:v.map((function(n){return n.name})).join(", ")})]})]}),(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)(_,{children:[(0,f.jsx)(j,{to:"cast",children:"Cast"}),(0,f.jsx)("br",{}),(0,f.jsx)(j,{to:"reviews",children:"Reviews"})]}),(0,f.jsxs)(s.Suspense,{fallback:(0,f.jsx)(l.Z,{}),children:[" ",(0,f.jsx)(u.j3,{})]})]})}},6911:function(n,e,r){r.d(e,{Hg:function(){return l},OR:function(){return f},TP:function(){return v},qF:function(){return d},tx:function(){return h},zv:function(){return p}});var t=r(5861),o=r(7757),i=r.n(o),c=r(340),a={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,s=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat("https://api.themoviedb.org/3").concat(e,"api_key=").concat(a));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),console.log(n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s(e);case 3:return r=n.sent,n.abrupt("return",r);case 7:throw n.prev=7,n.t0=n.catch(0),console.log(n.t0.message),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){return u("/trending/movie/day?")},d=function(n){var e="/search/movie?query=".concat(n,"&");return u(e)},v=function(n){var e="/movie/".concat(n,"?");return u(e)},p=function(n){var e="/movie/".concat(n,"/credits?");return u(e)},h=function(n){var e="/movie/".concat(n,"/reviews?");return u(e)},f=function(n){if(n)try{return"https://image.tmdb.org/t/p/w500".concat(n)}catch(e){return e(e.message)}}}}]);
//# sourceMappingURL=634.3f9f1c72.chunk.js.map