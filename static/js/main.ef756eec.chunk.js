(this["webpackJsonpreact-for-beginners4"]=this["webpackJsonpreact-for-beginners4"]||[]).push([[0],{15:function(e,t,s){e.exports={container:"Home_container__97rpc",loader:"Home_loader__4iU7f",movies:"Home_movies__3Ohm2"}},36:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),i=s(19),n=s.n(i),o=s(9),r=s(2),l=s(11),j=s.n(l),m=s(14),_=s(12),d=s(8),v=s.n(d),u=s(1);var x=function(e){var t=e.id,s=e.title,a=e.coverImg,c=e.year,i=e.summary,n=e.genres;return Object(u.jsxs)("div",{className:v.a.movie,children:[Object(u.jsx)("img",{className:v.a.movie__img,src:a,alt:s}),Object(u.jsx)("h2",{className:(v.a.sexyFont,v.a.movie__title),style:{color:"tomato"},children:Object(u.jsx)(o.b,{to:"/movie/".concat(t),children:s})}),Object(u.jsx)("h3",{className:v.a.movie__title,children:c}),Object(u.jsx)("p",{className:v.a.sexyFont,children:i.length>235?"".concat(i.slice(0,235),"..."):i}),Object(u.jsx)("ul",{className:(v.a.movie__genres,v.a.sexyFont),children:n.map((function(e){return Object(u.jsx)("li",{children:e},e)}))}),Object(u.jsx)("hr",{})]})},b=s(15),h=s.n(b);var O=function(){var e=Object(a.useState)(!0),t=Object(_.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)([]),n=Object(_.a)(i,2),o=n[0],r=n[1],l=function(){var e=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,r(t.data.movies),c(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),console.log(o),Object(u.jsx)("div",{className:h.a.container,children:s?Object(u.jsx)("div",{className:h.a.loader,children:Object(u.jsx)("span",{children:"Loading..."})}):Object(u.jsx)("div",{className:h.a.movies,children:o.map((function(e){return Object(u.jsx)(x,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})},f=s(7),p=s.n(f);var g=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(!0),n=Object(_.a)(i,2),l=n[0],d=n[1],v=Object(r.f)().id,x=function(){var e=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(v));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,console.log(t.data.movie),c(t.data.movie),d(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){x()}),[]),Object(u.jsx)("div",{className:p.a.container,children:Object(u.jsx)("div",{className:p.a.loader,children:l?Object(u.jsx)("h1",{children:"Now Loading.."}):Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("img",{className:(p.a.imgRadius,p.a.movie__img),src:s.medium_cover_image}),Object(u.jsx)("h1",{className:p.a.sexyFont,style:{color:"tomato"},children:s.title}),Object(u.jsxs)("h3",{className:p.a.sexyFont,children:["Years : ",s.year]}),Object(u.jsxs)("h5",{className:p.a.sexyFont,children:["Some People's Like : ",s.like_count," \ud83d\udc9c "]}),Object(u.jsxs)("h5",{className:p.a.sexyFont,children:["Total download count : ",s.download_count," !!"]}),Object(u.jsxs)("h4",{className:p.a.sexyFont,children:["This Movie is : ",s.description_full]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h5",{className:p.a.sexyFont,children:["Download Torrent :",Object(u.jsx)("ul",{})]}),Object(u.jsx)("h5",{className:p.a.sexyFont,children:Object(u.jsx)(o.b,{to:"/",children:"\u273fBack to Home"})})]})]})})})};var y=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{path:"/movie/:id",children:Object(u.jsx)(g,{})}),Object(u.jsx)(r.a,{path:"/",children:Object(u.jsx)(O,{})})]})})};s(36);n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))},7:function(e,t,s){e.exports={imgRadius:"Detail_imgRadius__vlmsf",sexyFont:"Detail_sexyFont__1o1pP",container:"Detail_container__3a_8l",loader:"Detail_loader__12zfC",movie__img:"Detail_movie__img__3spYT"}},8:function(e,t,s){e.exports={imgRadius:"Movie_imgRadius__kZKGE",sexyFont:"Movie_sexyFont__3lCzr",movie:"Movie_movie__27rBX",movie__img:"Movie_movie__img__23OrX",movie__title:"Movie_movie__title__p6svq",movie__year:"Movie_movie__year__1Fz81",movie__genres:"Movie_movie__genres__2j2Od"}}},[[37,1,2]]]);
//# sourceMappingURL=main.ef756eec.chunk.js.map