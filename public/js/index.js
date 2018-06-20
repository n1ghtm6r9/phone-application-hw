!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!o.test(e))return e;return e.replace(a,i)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},a=/[&<>"'`=]/g,o=/[&<>"'`=]/;function i(e){return r[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var s=Object.prototype.toString;t.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=c},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","message","name","number","stack"];function a(e,t){var n=t&&t.loc,o=void 0,i=void 0;n&&(e+=" - "+(o=n.start.line)+":"+(i=n.start.column));for(var l=Error.prototype.constructor.call(this,e),s=0;s<r.length;s++)this[r[s]]=l[r[s]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{n&&(this.lineNumber=o,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(e){}}a.prototype=new Error,t.default=a,e.exports=t.default},function(e,t,n){e.exports=n(23).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=u;var a=n(0),o=r(n(1)),i=n(22),l=n(14),s=r(n(12));t.VERSION="4.0.11";t.COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function u(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple helpers");a.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===a.toString.call(e))a.extend(this.partials,e);else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple decorators");a.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=s.default.log;t.log=c,t.createFrame=a.createFrame,t.logger=s.default},function(e,t,n){var r=n(2);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){var o;return"<div>\r\n\r\n    <p>"+e.escapeExpression("function"==typeof(o=null!=(o=n.title||(null!=t?t.title:t))?o:n.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"title",hash:{},data:a}):o)+"</p>\r\n    <ul>\r\n\r\n    </ul>\r\n\r\n</div>"},useData:!0})},function(e,t,n){var r=n(2);e.exports=(r.default||r).template({1:function(e,t,n,r,a,o){return'            <li>\n                <img src="public/'+e.escapeExpression(e.lambda(o[0][0],t))+'" alt=""  >\n            </li>\n'},compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a,o){var i,l=e.lambda,s=e.escapeExpression;return'<div>\n\n    <img class="phone" src="public/'+s(l(null!=(i=null!=(i=null!=t?t.phone:t)?i.images:i)?i[0]:i,t))+'">\n\n    <button data-element="button-back">Back</button>\n    <button data-element="button-add-basket">Add to basket</button>\n\n    <h1>'+s(l(null!=(i=null!=t?t.phone:t)?i.name:i,t))+"</h1>\n\n    <p>"+s(l(null!=(i=null!=t?t.phone:t)?i.description:i,t))+'</p>\n\n    <ul class="phone-thumbs">\n'+(null!=(i=n.each.call(null!=t?t:e.nullContext||{},null!=(i=null!=t?t.phone:t)?i.images:i,{name:"each",hash:{},fn:e.program(1,a,1,o),inverse:e.noop,data:a,blockParams:o}))?i:"")+"    </ul>\n\n</div>"},useData:!0,useBlockParams:!0})},function(e,t,n){var r=n(2);e.exports=(r.default||r).template({1:function(e,t,n,r,a,o){var i,l=e.lambda,s=e.escapeExpression;return'        <li class="thumbnail"\n            data-element="phone"\n            data-phone-id="'+s(l(null!=(i=o[0][0])?i.id:i,t))+'"\n        >\n            <a href="#!/phones/'+s(l(null!=(i=o[0][0])?i.id:i,t))+'" class="thumb">\n                <img alt="'+(null!=(i=l(null!=(i=o[0][0])?i.name:i,t))?i:"")+'" src="public/'+s(l(null!=(i=o[0][0])?i.imageUrl:i,t))+'">\n            </a>\n            <a href="#!/phones/'+s(l(null!=(i=o[0][0])?i.id:i,t))+'">'+s(l(null!=(i=o[0][0])?i.name:i,t))+"</a>\n            <p>"+s(l(null!=(i=o[0][0])?i.snippet:i,t))+"</p>\n        </li>\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a,o){var i;return'<ul class="phones">\n'+(null!=(i=n.each.call(null!=t?t:e.nullContext||{},null!=t?t.phonesArray:t,{name:"each",hash:{},fn:e.program(1,a,1,o),inverse:e.noop,data:a,blockParams:o}))?i:"")+"</ul>"},useData:!0,useBlockParams:!0})},function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r);class o{constructor(e){this._element=e.element}show(){this._element.classList.remove("js-hidden")}hide(){this._element.classList.add("js-hidden")}on(e,t,n){if(n){let r=this._element.querySelectorAll(n);r&&r.forEach(n=>{n.addEventListener(e,t)})}}}class i extends o{constructor(e){super(e),this._phones=e.phones,this._phoneSelectedEvent=new CustomEvent("phoneSelected",{detail:{phoneID:-1}}),this._render()}_render(){this._element.innerHTML=a()({phonesArray:this._phones}),this.on("click",this._phoneSelected.bind(this),'[data-element="phone"]')}_phoneSelected(e){let t=e.target;if(t.matches("a")||t.matches("img")){let e=t.closest('[data-element="phone"]');e&&(console.log(e.dataset),this._phoneSelectedEvent.detail.phoneID=e.dataset.phoneId,this._element.dispatchEvent(this._phoneSelectedEvent))}}}class l{static send(e,t="GET"){return new Promise((n,r)=>{let a=new XMLHttpRequest;a.open(t,e,!0),a.send(),a.onerror=(()=>{r({status:a.status,statusText:a.statusText})}),a.onreadystatechange=(()=>{200===a.status&&a.responseText&&n(JSON.parse(a.responseText))})})}}var s=n(5),u=n.n(s);class c extends o{constructor(e){super(e),this._basket=e.basket}setPhone(e){this._phone=e,this._render()}_render(){this._element.innerHTML=u()({phone:this._phone}),this.on("click",this._goBack.bind(this),'[data-element="button-back"]'),this.on("click",this._onAddToBasket.bind(this),'[data-element="button-add-basket"]')}_goBack(){this._phone=null;let e=new CustomEvent("moveBack");this._element.dispatchEvent(e)}_onAddToBasket(){this._basket.AddToBasket(this._phone)}}var d=n(4),p=n.n(d);class f extends o{constructor(e){super(e),this._title=e.title,this._basket=[],this._element.innerHTML=p()({title:this._title})}AddToBasket(e){this._basket.push(e);let t=this._element.querySelector("ul");t&&(t.innerHTML+=`<li>${e.name}</li>`)}ClearBasket(){this._basket=[];let e=this._element.querySelector("ul");if(e)for(;e.firstChild;)e.firstChild.remove()}}new class extends o{constructor(e){super(e),this._load()}async onPhoneSelected(e){let t=e.detail.phoneID,n=await l.send(`public/phones/${t}.json`);this._phoneViewer.setPhone(n),this._phoneViewer.show(),this._catalogue.hide()}onButtonBack(){this._phoneViewer.hide(),this._catalogue.show()}async _load(){try{this._phoneBasket=this._phoneViewer=new f({element:document.querySelector('[data-component="phone-basket"]'),title:"Phone Basket"}),this._phoneViewer=new c({element:document.querySelector('[data-component="phone-viewer"]'),basket:this._phoneBasket});let e=await l.send("public/phones/phones.json");this._catalogue=new i({element:document.querySelector('[data-component="phone-catalogue"]'),phones:e}),this.on("phoneSelected",this.onPhoneSelected.bind(this),'[data-component="phone-catalogue"]'),this.on("moveBack",this.onButtonBack.bind(this),'[data-component="phone-viewer"]')}catch(e){console.log("HTTP SERVICE ERROR: ",e)}}}({element:document.querySelector('[data-component="phone-page"]')})},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(8))},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=l.COMPILER_REVISION;if(t!==n){if(t<n){var r=l.REVISION_CHANGES[n],a=l.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n={strict:function(e,t){if(!(t in e))throw new i.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:a.escapeExpression,invokePartial:function(n,r,o){o.hash&&(r=a.extend({},r,o.hash),o.ids&&(o.ids[0]=!0));n=t.VM.resolvePartial.call(this,n,r,o);var l=t.VM.invokePartial.call(this,n,r,o);null==l&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),l=o.partials[o.name](r,o));if(null!=l){if(o.indent){for(var s=l.split("\n"),u=0,c=s.length;u<c&&(s[u]||u+1!==c);u++)s[u]=o.indent+s[u];l=s.join("\n")}return l}throw new i.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,a){var o=this.programs[e],i=this.fn(e);return t||a||r||n?o=s(this,e,i,t,n,r,a):o||(o=this.programs[e]=s(this,e,i)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=a.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function r(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=a.data;r._setup(a),!a.partial&&e.useData&&(o=function(e,t){t&&"root"in t||((t=t?l.createFrame(t):{}).root=e);return t}(t,o));var i=void 0,s=e.useBlockParams?[]:void 0;function u(t){return""+e.main(n,t,n.helpers,n.partials,o,s,i)}return e.useDepths&&(i=a.depths?t!=a.depths[0]?[t].concat(a.depths):a.depths:[t]),(u=c(e.main,u,n,a.depths||[],o,s))(t,a)}return r.isTop=!0,r._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=n.merge(r.decorators,t.decorators)))},r._child=function(t,r,a,o){if(e.useBlockParams&&!a)throw new i.default("must pass block params");if(e.useDepths&&!o)throw new i.default("must pass parent depths");return s(n,t,e[t],r,0,a,o)},r},t.wrapProgram=s,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var o=void 0;n.fn&&n.fn!==u&&function(){n.data=l.createFrame(n.data);var e=n.fn;o=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=l.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=a.extend({},n.partials,e.partials))}();void 0===e&&o&&(e=o);if(void 0===e)throw new i.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=u;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),o=n(1),i=(r=o)&&r.__esModule?r:{default:r},l=n(3);function s(e,t,n,r,a,o,i){function l(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),n(e,t,e.helpers,e.partials,a.data||r,o&&[a.blockParams].concat(o),l)}return(l=c(n,l,e,i,r,o)).program=t,l.depth=i?i.length:0,l.blockParams=a||0,l}function u(){return""}function c(e,t,n,r,o,i){if(e.decorator){var l={};t=e.decorator(t,l,n,r&&r[0],o,i,r),a.extend(t,l)}return t}},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(a.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=a.lookupLevel(e),"undefined"!=typeof console&&a.lookupLevel(a.level)<=e){var t=a.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];console[t].apply(console,r)}}};t.default=a,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",function(e,t,n,a){var o=e;return t.partials||(t.partials={},o=function(a,o){var i=n.partials;n.partials=r.extend({},i,t.partials);var l=e(a,o);return n.partials=i,l}),t.partials[a.args[0]]=a.fn,o})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var r,a=n(13),o=(r=a)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("with",function(e,t){r.isFunction(e)&&(e=e.call(this));var n=t.fn;if(r.isEmpty(e))return t.inverse(this);var a=t.data;return t.data&&t.ids&&((a=r.createFrame(t.data)).contextPath=r.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:a,blockParams:r.blockParams([e],[a&&a.contextPath])})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var a=1;null!=n.hash.level?a=n.hash.level:n.data&&null!=n.data.level&&(a=n.data.level),t[0]=a,e.log.apply(e,t)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("if",function(e,t){return r.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,a=n(1),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,a=n(0),o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new i.default("Must pass iterator to #each");var n=t.fn,r=t.inverse,o=0,l="",s=void 0,u=void 0;function c(t,r,o){s&&(s.key=t,s.index=r,s.first=0===r,s.last=!!o,u&&(s.contextPath=u+t)),l+=n(e[t],{data:s,blockParams:a.blockParams([e[t],t],[u+t,null])})}if(t.data&&t.ids&&(u=a.appendContextPath(t.data.contextPath,t.ids[0])+"."),a.isFunction(e)&&(e=e.call(this)),t.data&&(s=a.createFrame(t.data)),e&&"object"==typeof e)if(a.isArray(e))for(var d=e.length;o<d;o++)o in e&&c(o,o,o===e.length-1);else{var p=void 0;for(var f in e)e.hasOwnProperty(f)&&(void 0!==p&&c(p,o-1),p=f,o++);void 0!==p&&c(p,o-1,!0)}return 0===o&&(l=r(this)),l})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,n){var a=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return a(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):a(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return o(t,n)})},e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){a.default(e),o.default(e),i.default(e),l.default(e),s.default(e),u.default(e),c.default(e)};var a=r(n(21)),o=r(n(20)),i=r(n(19)),l=r(n(18)),s=r(n(17)),u=r(n(16)),c=r(n(15))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var o=a(n(3)),i=r(n(11)),l=r(n(1)),s=a(n(0)),u=a(n(10)),c=r(n(9));function d(){var e=new o.HandlebarsEnvironment;return s.extend(e,o),e.SafeString=i.default,e.Exception=l.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var p=d();p.create=d,c.default(p),p.default=p,t.default=p,e.exports=t.default}]);
//# sourceMappingURL=index.js.map