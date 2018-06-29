!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/public/",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);class r{constructor(e,t,o){t.AddScope(e),o.getPhones("./phones/phones.json").then(t=>{e.phones=t,e.$apply()}).catch(e=>{console.log("EXCEPTION: ",e)})}}class n{constructor(e,t,o,r){let n=t.phoneID;this.$scope=e,this.$scope.addPhoneToCart=(e=>{o.addPhone(e)}),r.getSinglePhone(`./phones/${n}.json`).then(t=>{e.phone=t,e.thumbnail=t.images[0],e.$apply()}).catch(e=>{console.log("error",e)}),this.$scope.setThumbnail=this._setThumbnail.bind(this)}_setThumbnail(e){this.$scope.thumbnail=e}}const s="PhoneApplication",a=`${s}.controllers`,c=`${s}.services`;angular.module(a,[]),angular.module(c,[]),angular.module(c).service("CartService",["$cookies",class{constructor(e){this.cart=[],this.$cookies=e;try{let e=JSON.parse(this.$cookies.get("cart"));e&&Array.isArray(e)&&(this.cart=e)}catch(e){console.log("Exception: ",e)}}getCart(){return this.cart}addPhone(e){if(this.cart.some(t=>t.id===e.id))for(let t=0;t<this.cart.length;t++){let o=this.cart[t];if(o.id===e.id){o.amount++;break}}else this.cart.push(this._getSimplePhone(e));this.$cookies.put("cart",JSON.stringify(this.cart))}_getSimplePhone(e){return{id:e.id,amount:1,name:e.name}}removePhoneByIndex(e){this.cart.splice(e,1),this.$cookies.put("cart",JSON.stringify(this.cart))}}]),angular.module(c).service("CatalogueService",class{constructor(){this.phones=[]}AddScope(e){this.$scope=e}ApplyPhones(e){this.$scope&&(this.$scope.phones=e,this.$scope.$apply())}}),angular.module(c).service("PhoneService",["$http",class{constructor(e){this.$http=e}async getPhones(e){try{return(await this.$http.get(e)).data}catch(e){return console.log("Exception: getPhones",e),[]}}async getSinglePhone(e){try{return(await this.$http.get(e)).data}catch(e){return console.log("Exception: getPhones",e),null}}}]),angular.module(a).controller("CartController",["$scope","CartService",class{constructor(e,t){e.cart=t.getCart(),e.RemoveItem=t.removePhoneByIndex.bind(t)}}]),angular.module(a).controller("SearchSortController",["$scope","CatalogueService","PhoneService",class{constructor(e,t,o){e.sortSelectedItem="age",e.search="",e.$watch("search",e=>{e&&o.getPhones("./phones/phones.json").then(o=>{let r=e.toString().toLocaleLowerCase(),n=o.filter(e=>-1!==e.name.toLowerCase().indexOf(r));t.ApplyPhones(n)}).catch(e=>{console.log("EXCEPTION: ",e)})}),e.sortSelectedChange=(()=>{e.search="",o.getPhones("./phones/phones.json").then(o=>{let r=o;"name"===e.sortSelectedItem?r=o.sort((e,t)=>e.name>t.name?1:e.name===t.name?0:-1):"age"===e.sortSelectedItem&&(r=o.sort((e,t)=>+e.age>+t.age?1:+e.age==+t.age?0:-1)),t.ApplyPhones(r)}).catch(e=>{console.log("EXCEPTION: ",e)})})}}]),angular.module(a).directive("shoppingCart",()=>({templateUrl:"../front-end/templates/shopping-cart.html"})),angular.module(a).directive("searthSort",()=>({templateUrl:"../front-end/templates/search-sort.html"}));const l=angular.module(s,["ngRoute","ngCookies",a,c]);l.config(["$routeProvider","$locationProvider",(e,t)=>{t.html5Mode(!0),e.when("/",{templateUrl:"../front-end/templates/catalogue.html",controller:["$scope","CatalogueService","PhoneService",r]}),e.when("/single-phone/:phoneID",{templateUrl:"../front-end/templates/single-phone.html",controller:["$scope","$routeParams","CartService","PhoneService",n]})}]),l.run()}]);
//# sourceMappingURL=index.js.map