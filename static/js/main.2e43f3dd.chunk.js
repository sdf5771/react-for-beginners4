(this["webpackJsonpreact-for-beginners4"]=this["webpackJsonpreact-for-beginners4"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(16),a=c.n(r),i=c(10),o=c(2),j=c(8),l=c.n(j),d=c(12),u=c(9),b=c(1);var h=function(e){var t=e.id,c=e.title,s=e.coverImg,n=e.summary,r=e.genres;return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"imgRadius",src:s,alt:c}),Object(b.jsx)("h2",{className:"sexyFont",style:{color:"tomato"},children:Object(b.jsx)(i.b,{to:"/movie/".concat(t),children:c})}),Object(b.jsx)("p",{className:"sexyFont",children:n}),Object(b.jsx)("ul",{className:"sexyFont",children:r.map((function(e){return Object(b.jsx)("li",{children:e},e)}))}),Object(b.jsx)("hr",{})]})};var x=function(){var e=Object(s.useState)(!0),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)([]),a=Object(u.a)(r,2),i=a[0],o=a[1],j=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),n(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){j()}),[]),console.log(i),Object(b.jsx)("div",{children:c?Object(b.jsx)("h1",{children:"loading"}):Object(b.jsx)("div",{children:i.map((function(e){return Object(b.jsx)(h,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};c(33);var m=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!0),a=Object(u.a)(r,2),i=a[0],j=a[1],h=Object(o.f)().id,x=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(h));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,console.log(t.data.movie),n(t.data.movie),j(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){x()}),[]),Object(b.jsx)("div",{children:i?Object(b.jsx)("h1",{children:"Now Loading.."}):Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("img",{className:"imgRadius",src:c.large_cover_image}),Object(b.jsx)("h1",{className:"sexyFont",style:{color:"tomato"},children:c.title}),Object(b.jsxs)("h3",{className:"sexyFont",children:["Years : ",c.year]}),Object(b.jsxs)("h5",{className:"sexyFont",children:["Some People's Like : ",c.like_count," \ud83d\udc9c "]}),Object(b.jsxs)("h5",{className:"sexyFont",children:["Total download count : ",c.download_count," !!"]}),Object(b.jsxs)("h4",{className:"sexyFont",children:["This Movie is : ",c.description_full]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{children:Object(b.jsxs)("h5",{children:["Download Torrent :",Object(b.jsx)("ul",{})]})})]})})};var O=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/movie/:id",children:Object(b.jsx)(m,{})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsx)(x,{})})]})})};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2e43f3dd.chunk.js.map