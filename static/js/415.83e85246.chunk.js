"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{7059:function(t,n,r){r.d(n,{Z:function(){return a}});var e=r(7689),c=r(1087),u=r(184);function a(t){var n=t.data,r=(0,e.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(t.id),state:{from:r},children:(0,u.jsx)("h3",{children:t.title})})},t.id)}))})})}},5415:function(t,n,r){r.r(n),r.d(n,{default:function(){return i}});var e=r(9439),c=r(2791),u=r(6911),a=r(7059),o=r(184);function i(){var t=(0,c.useState)([]),n=(0,e.Z)(t,2),r=n[0],i=n[1];return(0,c.useEffect)((function(){(0,u.Hg)().then((function(t){i(t.results)})).catch((function(t){console.error(t)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Trending today"}),(0,o.jsx)(a.Z,{data:r})]})}},6911:function(t,n,r){r.d(n,{Hg:function(){return s},OR:function(){return l},TP:function(){return h},qF:function(){return f},tx:function(){return v},zv:function(){return d}});var e=r(5861),c=r(7757),u=r.n(c),a=r(340),o=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("".concat("https://api.themoviedb.org/3").concat(n,"api_key=").concat("7968ad8b74212fdec970c8532d70f000"));case 3:return r=t.sent,e=r.data,t.abrupt("return",e);case 8:throw t.prev=8,t.t0=t.catch(0),console.log(t.t0.message),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o(n);case 3:return r=t.sent,t.abrupt("return",r);case 7:throw t.prev=7,t.t0=t.catch(0),console.log(t.t0.message),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),s=function(){return i("/trending/movie/day?")},f=function(t){var n="/search/movie?query=".concat(t,"&");return i(n)},h=function(t){var n="/movie/".concat(t,"?");return i(n)},d=function(t){var n="/movie/".concat(t,"/credits?");return i(n)},v=function(t){var n="/movie/".concat(t,"/reviews?");return i(n)},l=function(t){if(t)try{return"https://image.tmdb.org/t/p/w500".concat(t)}catch(n){return n(n.message)}}}}]);
//# sourceMappingURL=415.83e85246.chunk.js.map