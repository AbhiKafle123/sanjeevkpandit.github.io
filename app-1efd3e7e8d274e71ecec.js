webpackJsonp([0xd2a57dc1d883],{82:function(n,e,t){"use strict";function o(n,e,t){var o=u.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function a(n,e,t){return u.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=a;var u=[{plugin:t(387),options:{plugins:[],trackingId:"UA-78879488-1"}},{plugin:t(389),options:{plugins:[]}},{plugin:t(386),options:{plugins:[]}}]},215:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(339),"component---src-templates-page-template-jsx":t(346),"component---src-templates-post-template-jsx":t(347),"component---src-templates-tag-template-jsx":t(348),"component---src-templates-category-template-jsx":t(345),"component---src-pages-404-jsx":t(341),"component---src-pages-categories-jsx":t(342),"component---src-pages-index-jsx":t(343),"component---src-pages-tags-jsx":t(344)},e.json={"layout-index.json":t(349),"offline-plugin-app-shell-fallback.json":t(358),"about.json":t(352),"posts-setup-xdebug-in-ubuntu.json":t(365),"tags-php.json":t(376),"categories-tech.json":t(355),"posts-setup-xdebug-in-phpstorm.json":t(364),"tags-xdebug.json":t(384),"tags-php-xdebug.json":t(377),"tags-phpstorm.json":t(378),"posts-install-node-and-npm.json":t(362),"tags-node.json":t(373),"tags-nodejs.json":t(374),"tags-npm.json":t(375),"posts-setup-postgresql-in-ubuntu.json":t(363),"tags-postgres.json":t(380),"tags-ubuntu.json":t(383),"posts-getting-started-with-gulp.json":t(360),"tags-gulp.json":t(370),"contact.json":t(356),"posts-install-arch-linux.json":t(361),"tags-arch.json":t(368),"tags-arch-linux.json":t(369),"tags-linux.json":t(372),"tags-setup.json":t(381),"tags-installation.json":t(371),"categories-linux.json":t(354),"posts-arch-linux-post-installation.json":t(359),"tags-post-installation.json":t(379),"posts-terminal-enhancements.json":t(366),"tags-terminal.json":t(382),"404.json":t(350),"categories.json":t(353),"index.json":t(357),"tags.json":t(367),"404-html.json":t(351)},e.layouts={"layout---index":t(340)}},216:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(2),c=o(i),l=t(8),p=o(l),f=t(146),m=o(f),d=t(58),g=o(d),h=t(82),x=t(583),y=o(x),j=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){a(this,e);var o=u(this,n.call(this)),r=t.location;return m.default.getPage(r.pathname)||(r=s({},r,{pathname:"/404.html"})),o.state={location:r,pageResources:m.default.getResourcesForPathname(r.pathname)},o}return r(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=m.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;m.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),m.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){m.default.getPage(n.state.location.pathname)&&e.page.path===m.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,y.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},58:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(474),u=o(a),r=(0,u.default)();n.exports=r},217:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(81),u=t(147),r=o(u),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),u=(0,r.default)(o,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),s[u])return s[u];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(u,{path:n.path})||(0,a.matchPath)(u,{path:n.matchPath}))return i=n,s[u]=n,!0}else{if((0,a.matchPath)(u,{path:n.path,exact:!0}))return i=n,s[u]=n,!0;if((0,a.matchPath)(u,{path:n.path+"index.html"}))return i=n,s[u]=n,!0}return!1}),i}}},218:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(108),u=o(a),r=t(82),s=(0,r.apiRunner)("replaceHistory"),i=s[0],c=i||(0,u.default)();n.exports=c},351:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(396)})})}},350:function(n,e,t){t(1),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(397)})})}},352:function(n,e,t){t(1),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(398)})})}},354:function(n,e,t){t(1),n.exports=function(n){return t.e(49360611732992,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(399)})})}},355:function(n,e,t){t(1),n.exports=function(n){return t.e(86242794778721,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(400)})})}},353:function(n,e,t){t(1),n.exports=function(n){return t.e(30875753179511,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(401)})})}},356:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(402)})})}},357:function(n,e,t){t(1),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(403)})})}},349:function(n,e,t){t(1),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(111)})})}},358:function(n,e,t){t(1),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(404)})})}},359:function(n,e,t){t(1),n.exports=function(n){return t.e(0xdd78507cfee8,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(405)})})}},360:function(n,e,t){t(1),n.exports=function(n){return t.e(4650754505663,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(406)})})}},361:function(n,e,t){t(1),n.exports=function(n){return t.e(91459639088578,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(407)})})}},362:function(n,e,t){t(1),n.exports=function(n){return t.e(47061697133697,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(408)})})}},363:function(n,e,t){t(1),n.exports=function(n){return t.e(34637703430350,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(409)})})}},364:function(n,e,t){t(1),n.exports=function(n){return t.e(0xd7f5cf0783b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(410)})})}},365:function(n,e,t){t(1),n.exports=function(n){return t.e(20385949903062,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(411)})})}},366:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa0121fb96137,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(412)})})}},369:function(n,e,t){t(1),n.exports=function(n){return t.e(0xcfa89a9f4fd7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(413)})})}},368:function(n,e,t){t(1),n.exports=function(n){return t.e(49560776277897,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(414)})})}},370:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa1ac44f272db,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(415)})})}},371:function(n,e,t){t(1),n.exports=function(n){return t.e(0xf5fbbf6c324,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(416)})})}},372:function(n,e,t){t(1),n.exports=function(n){return t.e(0x68e44b44fa7e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(417)})})}},373:function(n,e,t){t(1),n.exports=function(n){return t.e(71230123872026,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(418)})})}},374:function(n,e,t){t(1),n.exports=function(n){return t.e(45154319480143,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(419)})})}},375:function(n,e,t){t(1),n.exports=function(n){return t.e(0xe8f6ee9528bf,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(420)})})}},377:function(n,e,t){t(1),n.exports=function(n){return t.e(22766592407523,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(421)})})}},376:function(n,e,t){t(1),n.exports=function(n){return t.e(0x748b021c360f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(422)})})}},378:function(n,e,t){t(1),n.exports=function(n){return t.e(0x80b918708e14,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(423)})})}},379:function(n,e,t){t(1),n.exports=function(n){return t.e(0xda49424228f6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(424)})})}},380:function(n,e,t){t(1),n.exports=function(n){return t.e(0xfc585fcc921e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(425)})})}},381:function(n,e,t){t(1),n.exports=function(n){return t.e(0x5faf4abfeef2,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(426)})})}},382:function(n,e,t){t(1),n.exports=function(n){return t.e(0x855113fba608,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(427)})})}},383:function(n,e,t){t(1),n.exports=function(n){return t.e(79814974774258,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(428)})})}},384:function(n,e,t){t(1),n.exports=function(n){return t.e(89469586257447,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(429)})})}},367:function(n,e,t){t(1),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(430)})})}},340:function(n,e,t){t(1),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(219)})})}},146:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=t(2),u=(o(a),t(217)),r=o(u),s=t(58),i=o(s),c=t(147),l=o(c),p=void 0,f={},m={},d={},g={},h={},x=[],y=[],j={},v="",C=[],N={},b=function(n){return n&&n.default||n},k=void 0,R=!0,w=[],_={},P={},E=5;k=t(220)({getNextQueuedResources:function(){return C.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){C=C.filter(function(e){return e!==n}),k.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){k.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){k.onPostLoadPageResources(n)});var L=function(n,e){return N[n]>N[e]?1:N[n]<N[e]?-1:0},O=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){t(null,g[e])});else{var o=void 0;o="component---"===e.slice(0,12)?m.components[e]:"layout---"===e.slice(0,9)?m.layouts[e]:m.json[e],o(function(n,o){g[e]=o,w.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),w=w.slice(-E),t(n,o)})}},S=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):P[e]?n.nextTick(function(){t(P[e])}):T(e,function(n,o){if(n)t(n);else{var a=b(o());h[e]=a,t(n,a)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){y=[],j={},N={},C=[],x=[],v=""},addPagesArray:function(n){x=n,v="",p=(0,r.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){m=n},dequeue:function(){return y.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!x.some(function(n){return n.path===e}))return!1;var t=1/U;U+=1,j[e]?j[e]+=1:j[e]=1,M.has(e)||y.unshift(e),y.sort(O);var o=p(e);return o.jsonName&&(N[o.jsonName]?N[o.jsonName]+=1+t:N[o.jsonName]=1+t,C.indexOf(o.jsonName)!==-1||g[o.jsonName]||C.unshift(o.jsonName)),o.componentChunkName&&(N[o.componentChunkName]?N[o.componentChunkName]+=1+t:N[o.componentChunkName]=1+t,C.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||C.unshift(o.componentChunkName)),C.sort(L),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:C,resourcesCount:N}},getPages:function(){return{pathArray:y,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return y.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var a;if(t){if(o>=e.length)break;a=e[o++]}else{if(o=e.next(),o.done)break;a=o.value}var u=a;u.unregister()}window.location.reload()}})),R=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,d[e])return n.nextTick(function(){t(d[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:d[e]})}),d[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,u=void 0,r=void 0,s=function(){if(a&&u&&(!o.layoutComponentChunkName||r)){d[e]={component:a,json:u,layout:r,page:o};var n={component:a,json:u,layout:r,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),a=e,s()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),u=e,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),r=e,s()}))},peek:function(n){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(n){return y.length-y.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,t(126))},431:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-setup-xdebug-in-ubuntu.json",path:"/posts/setup-xdebug-in-ubuntu/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-php.json",path:"/tags/php/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-tech.json",path:"/categories/tech/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-setup-xdebug-in-phpstorm.json",path:"/posts/setup-xdebug-in-phpstorm/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-xdebug.json",path:"/tags/xdebug/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-php-xdebug.json",path:"/tags/php-xdebug/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-phpstorm.json",path:"/tags/phpstorm/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-install-node-and-npm.json",path:"/posts/install-node-and-npm/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-node.json",path:"/tags/node/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-nodejs.json",path:"/tags/nodejs/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-npm.json",path:"/tags/npm/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-setup-postgresql-in-ubuntu.json",path:"/posts/setup-postgresql-in-ubuntu/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-postgres.json",path:"/tags/postgres/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-ubuntu.json",path:"/tags/ubuntu/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-getting-started-with-gulp.json",path:"/posts/getting-started-with-gulp/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-gulp.json",path:"/tags/gulp/"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"contact.json",path:"/contact"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-install-arch-linux.json",path:"/posts/install-arch-linux/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-arch.json",path:"/tags/arch/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-arch-linux.json",path:"/tags/arch-linux/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-linux.json",path:"/tags/linux/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-setup.json",path:"/tags/setup/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-installation.json",path:"/tags/installation/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-linux.json",path:"/categories/linux/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-arch-linux-post-installation.json",path:"/posts/arch-linux-post-installation/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-post-installation.json",path:"/tags/post-installation/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-terminal-enhancements.json",path:"/posts/terminal-enhancements/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-terminal.json",path:"/tags/terminal/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-categories-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},220:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],a=[],u=function(){var n=e();n&&(a.push(n),t(n))},r=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&u()},0)};return{onResourcedFinished:function(n){r({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},u=t(82),r=t(2),s=o(r),i=t(184),c=o(i),l=t(81),p=t(393),f=t(324),m=o(f),d=t(110),g=t(218),h=o(g),x=t(58),y=o(x),j=t(431),v=o(j),C=t(432),N=o(C),b=t(216),k=o(b),R=t(215),w=o(R),_=t(146),P=o(_);t(247),window.___history=h.default,window.___emitter=y.default,P.default.addPagesArray(v.default),P.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=N.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),L=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};L(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){L(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var a=n.location.pathname;if(a===t)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&t(221);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(r),window.___history.push(t))}var t=(0,d.createLocation)(n,null,null,h.default.location),o=t.pathname,a=E[o];a&&(o=a.toPath);var u=window.location;if(u.pathname!==t.pathname||u.search!==t.search||u.hash!==t.hash){var r=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(r),window.___history.push(t)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,u.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=!1,f=(0,u.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},x=(0,l.withRouter)(k.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,r.createElement)(f?f:g,null,(0,r.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,r.createElement)(x,{layout:!0,children:function(e){return(0,r.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,r.createElement)(k.default,a({page:!0},o)):(0,r.createElement)(k.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,u.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,m.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},432:function(n,e){n.exports=[]},221:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(58),u=o(a),r="/";r="/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},147:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},324:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",u=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return u||t.addEventListener(a,n=function(){for(t.removeEventListener(a,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},1:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),a=t.e,u=t.s;t.e=function(o,r){var s=!1,i=!0,c=function(n){r&&(r(t,n),r=null)};return!u&&e&&e[o]?void c(!0):(a(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,u?u[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},385:function(n,e,t){"use strict";var o=t(15);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,a=n.target;a.parentNode;a=a.parentNode)if("A"===a.nodeName){t=a;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var u=document.createElement("a");u.href=t.href;var r=document.createElement("a");if(r.href=window.location.href,u.host!==r.host)return!0;var s=new RegExp("^"+r.host+(0,o.withPrefix)("/"));return!s.test(""+u.host+u.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},386:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(15),u=t(385),r=o(u);e.onClientEntry=function(){(0,r.default)(window,function(n){(0,a.navigateTo)(n)})}},387:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},339:function(n,e,t){t(1),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(388)})})}},389:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},474:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},126:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){
throw new Error("clearTimeout has not been defined")}function a(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function u(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function r(){g&&m&&(g=!1,m.length?d=m.concat(d):h=-1,d.length&&s())}function s(){if(!g){var n=a(r);g=!0;for(var e=d.length;e;){for(m=d,d=[];++h<e;)m&&m[h].run();h=-1,e=d.length}m=null,g=!1,u(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var m,d=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];d.push(new i(n,e)),1!==d.length||g||a(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},583:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},341:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa6bc690a59e9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(230)})})}},342:function(n,e,t){t(1),n.exports=function(n){return t.e(0x81a450a7cd7a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(231)})})}},343:function(n,e,t){t(1),n.exports=function(n){return t.e(0xc23565d713b7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(232)})})}},344:function(n,e,t){t(1),n.exports=function(n){return t.e(36530248567819,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(233)})})}},345:function(n,e,t){t(1),n.exports=function(n){return t.e(90179704293519,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(234)})})}},346:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa485d5bf544,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(235)})})}},347:function(n,e,t){t(1),n.exports=function(n){return t.e(0x623bdfc73907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(236)})})}},348:function(n,e,t){t(1),n.exports=function(n){return t.e(2638498282051,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(237)})})}}});
//# sourceMappingURL=app-1efd3e7e8d274e71ecec.js.map