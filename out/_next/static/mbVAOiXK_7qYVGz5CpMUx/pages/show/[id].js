(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3Hq7":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("q1tI"),o=n.n(r),i=n("YFqc"),s=n.n(i),a=o.a.createElement,c={marginRight:15};function u(){return a("div",null,a(s.a,{href:"/"},a("a",{style:c},"Home")),a(s.a,{href:"/about"},a("a",{style:c},"About")))}var f=o.a.createElement,l={margin:20,padding:20,border:"1px solid #DDD"};function p(e){return f("div",{style:l},f(u,null),e.children)}},L9dH:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),i=n("q1tI"),s=n.n(i),a=n("3Hq7"),c=n("vcXL"),u=n.n(c),f=s.a.createElement,l=function(e){return f(a.a,null,f("h1",null,e.show.name),f("p",null,e.show.summary.replace(/<[/]?[pb]>/g,"")),f("img",{src:e.show.image.medium}))};l.getInitialProps=function(e){var t,n,r;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.query.id,i.next=3,o.a.awrap(u()("https://api.tvmaze.com/shows/".concat(t)));case 3:return n=i.sent,i.next=6,o.a.awrap(n.json());case 6:return r=i.sent,console.log("Fetched show: ".concat(r.name)),i.abrupt("return",{show:r});case 9:case"end":return i.stop()}}),null,null,null,Promise)},t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),a=n("Nsbk");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var u=n("TqRt"),f=n("284h");t.__esModule=!0,t.default=void 0;var l,p=f(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=u(n("nOHt"));function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var w=new Map,y=window.IntersectionObserver,g={};function _(){return l||(y?l=new y((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var E=function(e){i(f,e);var t,u=(t=f,function(){var e,n=a(t);if(c()){var r=a(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return s(this,e)});function f(e){var t;return r(this,f),(t=u.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var s=e(o,i);return t=o,n=i,r=s,s}}((function(e,t){return{href:m(e),as:t?m(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),s=i.href,a=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,h.resolve)(c,s),a=a?(0,h.resolve)(c,a):s,e.preventDefault();var u=t.props.scroll;null==u&&(u=a.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](s,a,{shallow:t.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(f,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=_();return n?(n.observe(e),w.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();d.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,i=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var s=p.Children.only(t),a={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==s.type||"href"in s.props)||(a.href=i||o);var c=n("P5f7").rewriteUrlForNextExport;return a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=c(a.href)),p.default.cloneElement(s,a)}}]),f}(p.Component);t.default=E},lmRi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show/[id]",function(){return n("L9dH")}])},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports}},[["lmRi",0,2,1]]]);