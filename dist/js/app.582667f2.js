(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],d=0,v=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&v.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,s,r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"cyan",dark:""}},[n("v-icon",[t._v("mdi-folder-network")]),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[n("span",[t._v("Tgrok")])]),n("v-spacer"),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{icon:""},on:{click:function(e){return t.$refs.settingDialog.show()}}},"v-btn",s,!1),a),[n("v-icon",[t._v("mdi-cogs")])],1)]}}])},[n("span",[t._v("Setting")])]),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.editTunnel(null)}}},"v-btn",s,!1),a),[n("v-icon",[t._v("mdi-plus")])],1)]}}])},[n("span",[t._v("Create tunnel")])])],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("v-row",t._l(t.tunnels,(function(e){return n("v-col",{key:e.subdomain,attrs:{cols:"12",md:"6",lg:"4"}},[n("tunnel-card",{attrs:{model:e},on:{share:function(n){return t.shareTunnel(e)},show:function(n){return t.showRequests(e)},edit:function(n){return t.editTunnel(e)},delete:function(n){return t.deleteTunnel(e)}}})],1)})),1)],1)],1),n("tunnel-form-dialog",{ref:"formDialog"}),n("tunnel-share-dialog",{ref:"shareDialog"}),n("tunnel-requests-dialog",{ref:"requestsDialog"}),n("tunnel-delete-dialog",{ref:"deleteDialog"}),n("setting-dialog",{ref:"settingDialog"}),n("t-footer")],1)},o=[],l=(n("4160"),n("159b"),n("96cf"),n("1da1")),c=(n("a9e3"),n("25eb"),n("b680"),n("d3b7"),n("53ca")),u=(n("5a0c"),function(t){return new Promise((function(e){return setTimeout(e,t)}))}),d=function(t){if("object"===Object(c["a"])(t))return t;try{return JSON.parse(t)}catch(e){return void console.error(e)}},v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",class:{"animate__animated animate__headShake animate__infinite\tinfinite":t.deleting}},[n("v-list-item",[n("v-list-item-avatar",{class:{"animate__animated animate__pulse animate__infinite\tinfinite":t.changing},attrs:{color:t.color}}),n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[t._v(t._s(t.tunnel.name))]),n("v-list-item-subtitle",[t._v(t._s(t.tunnel.protocol))])],1),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("span",t._g(t._b({staticClass:"subtitle-1 mr-4 d-none",on:{click:function(e){return t.$emit("show")}}},"span",s,!1),a),[t._v(" 1212 ")])]}}])},[n("span",[t._v("Show requests")])])],1),n("v-card-text",{staticClass:"text-center"},[n("v-row",[n("v-col",{staticClass:"text-left text-sm-right py-0",attrs:{cols:"12",sm:"6"}},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.openLink(t.remoteUrl)}}},[t._v(t._s(t.remoteUrl))])]),n("v-col",{staticClass:"text-center py-0 d-none d-sm-block",attrs:{cols:"12",sm:"1"}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-transfer-right")])],1),n("v-col",{staticClass:"text-right text-sm-left py-0",attrs:{cols:"12",sm:"5"}},[n("v-icon",{staticClass:"mr-5 d-inline d-sm-none",attrs:{small:""}},[t._v("mdi-transfer-right")]),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.openLink(t.localUrl)}}},[t._v(t._s(t.localUrl))])],1)],1)],1),n("v-divider"),n("v-card-actions",{staticClass:"d-flex justify-space-between"},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",disabled:!t.ready||t.changing},on:{click:t.toggle}},"v-btn",s,!1),a),[n("v-icon",[t._v(t._s(t.toggleIcon))])],1)]}}])},[n("span",[t._v("Toggle status")])]),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",disabled:!t.canEdit},on:{click:function(e){return t.$emit("edit")}}},"v-btn",s,!1),a),[n("v-icon",[t._v("mdi-pencil")])],1)]}}])},[n("span",[t._v("Edit tunnel")])]),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.$emit("share")}}},"v-btn",s,!1),a),[n("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[n("span",[t._v("Share")])]),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.remove}},"v-btn",s,!1),a),[n("v-icon",[t._v("mdi-delete")])],1)]}}])},[n("span",[t._v("Delete")])])],1)],1)},f=[],m=(n("c975"),n("99af"),r["default"].extend({data:function(){return{tunnel:{name:"",protocol:"HTTP",subdomain:"",localPort:80,localHost:"127.0.0.1"}}},computed:{remoteUrl:function(){if(!this.tunnel.protocol)return"";var t=this.tunnel.protocol.toLowerCase();return"".concat(t,"://").concat(this.tunnel.subdomain,".").concat(this.$store.state.server.host)},localUrl:function(){return"".concat(this.tunnel.protocol,"://").concat(this.tunnel.localHost,":").concat(this.tunnel.localPort)}}})),p=m,h=n("2877"),b=Object(h["a"])(p,a,s,!1,null,null,null),g=b.exports,_=r["default"].extend({data:function(){return{changing:!1}},extends:g,props:{model:{type:Object,default:null}},watch:{model:function(t){this.tunnel=t},"tunnel.status":function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!([0,10].indexOf(e)<0)){t.next=3;break}return this.changing=!0,t.abrupt("return");case 3:return t.next=5,u(2e3);case 5:this.changing=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},computed:{ready:function(){return 10===this.$store.state.status},deleting:function(){return this.tunnel.id===this.$store.state.deletingId},color:function(){return this.tunnel.status<5?"grey":"success"},toggleIcon:function(){return this.tunnel.status<5?"mdi-play":"mdi-stop"},canEdit:function(){return 0===this.tunnel.status}},mounted:function(){this.tunnel=this.model},methods:{edit:function(){this.$root.editTunnel(this.tunnel)},showRequests:function(){this.$root.showRequests(this.tunnel)},remove:function(){this.$store.commit("setDeletingId",this.tunnel.id),this.$emit("delete")},toggle:function(){this.tunnel.paused?this.$store.dispatch("openTunnel",this.tunnel.id):this.$store.dispatch("closeTunnel",this.tunnel.id)}}}),k=_,x=n("6544"),y=n.n(x),w=n("8336"),V=n("b0af"),T=n("99d9"),C=n("62ad"),S=n("ce7e"),j=n("132d"),O=n("da13"),R=n("8270"),$=n("5d23"),D=n("0fd9"),I=n("3a2f"),q=Object(h["a"])(k,v,f,!1,null,null,null),L=q.exports;y()(q,{VBtn:w["a"],VCard:V["a"],VCardActions:T["a"],VCardText:T["b"],VCol:C["a"],VDivider:S["a"],VIcon:j["a"],VListItem:O["a"],VListItemAvatar:R["a"],VListItemContent:$["a"],VListItemSubtitle:$["b"],VListItemTitle:$["c"],VRow:D["a"],VTooltip:I["a"]});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"",width:"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"success"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-toolbar-title",[t._v(t._s(t.inEdit?"Edit":"Create")+" Tunnel")])],1),n("v-container",[n("v-row",{staticClass:"mx-2"},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Name",clearable:"","persistent-hint":"",hint:"Your own tunnel name"},model:{value:t.tunnel.name,callback:function(e){t.$set(t.tunnel,"name",e)},expression:"tunnel.name"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Subdomain","persistent-hint":"",readonly:"",hint:"Your request url will be "+t.remoteUrl,"append-icon":"mdi-cached"},on:{"click:append":t.randomSubdomain},model:{value:t.tunnel.subdomain,callback:function(e){t.$set(t.tunnel,"subdomain",e)},expression:"tunnel.subdomain"}})],1),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-text-field",{attrs:{label:"Local host",clearable:"","persistent-hint":"",hint:"Ip address or other domain"},model:{value:t.tunnel.localHost,callback:function(e){t.$set(t.tunnel,"localHost",e)},expression:"tunnel.localHost"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"Local port",type:"number"},model:{value:t.tunnel.localPort,callback:function(e){t.$set(t.tunnel,"localPort",e)},expression:"tunnel.localPort"}})],1),n("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[n("v-spacer"),n("v-btn",{attrs:{color:"success"},on:{click:t.save}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(t.inEdit?"Save":"Create")+" ")],1)],1)],1)],1)],1)],1)},P=[],B=(n("b0c0"),n("d4ec")),M=n("bee2"),U=n("11c1"),A=n("5628"),J=function(){function t(){Object(B["a"])(this,t),this.id=Object(U["v4"])(),this.name="Tgrok Tunnel",this.protocol="http",this.subdomain="",this.localHost="127.0.0.1",this.localPort="80",this.paused=!0,this.status=0}return Object(M["a"])(t,null,[{key:"randomDomain",value:function(){return A("a0",8)}}]),t}(),H=n("2ef0"),F=r["default"].extend({name:"TunnelDialog",extends:g,data:function(){return{dialog:!1,inEdit:!0}},methods:{show:function(t){this.inEdit=!!t,t||(t=new J,t.subdomain=J.randomDomain()),this.tunnel=Object(H["cloneDeep"])(t),this.dialog=!0},save:function(){this.dialog=!1,this.$store.dispatch("editTunnel",this.tunnel)},randomSubdomain:function(){this.tunnel.subdomain=J.randomDomain()}}}),N=F,G=n("a523"),Y=n("169a"),z=n("2fa4"),K=n("8654"),Q=n("71d9"),W=n("2a7f"),X=Object(h["a"])(N,E,P,!1,null,null,null),Z=X.exports;y()(X,{VBtn:w["a"],VCard:V["a"],VCol:C["a"],VContainer:G["a"],VDialog:Y["a"],VIcon:j["a"],VRow:D["a"],VSpacer:z["a"],VTextField:K["a"],VToolbar:Q["a"],VToolbarTitle:W["a"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"success"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-toolbar-title",[t._v("Share")])],1),n("v-card-text",[n("v-img",{staticClass:"mt-2",attrs:{src:t.qrcodeUrl}}),n("v-text-field",{attrs:{readonly:"",label:"Remote url","persistent-hint":"","append-icon":"mdi-content-copy",success:!!this.message,messages:t.message,value:t.remoteUrl},on:{"click:append":t.copy}})],1)],1)],1)},et=[],nt=n("d055"),at=n("37d5"),st=r["default"].extend({extends:g,data:function(){return{dialog:!1,qrcodeUrl:"",message:""}},methods:{show:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.dialog=!0,this.tunnel=e,t.next=4,nt.toDataURL(this.remoteUrl);case 4:this.qrcodeUrl=t.sent;case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),copy:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,at.write(this.remoteUrl);case 2:return this.message="Copied!",t.next=5,u(3e3);case 5:this.message="";case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}),rt=st,it=n("adda"),ot=Object(h["a"])(rt,tt,et,!1,null,null,null),lt=ot.exports;y()(ot,{VBtn:w["a"],VCard:V["a"],VCardText:T["b"],VDialog:Y["a"],VIcon:j["a"],VImg:it["a"],VTextField:K["a"],VToolbar:Q["a"],VToolbarTitle:W["a"]});var ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"success"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-toolbar-title",[t._v("Requests of "+t._s(t.tunnel.subdomain))])],1),n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"mx-auto"},[n("v-toolbar",{attrs:{color:"cyan",dark:""}},[n("v-toolbar-title",[t._v("All requests")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-view-module")])],1)],1),n("v-list",{attrs:{"two-line":""}},[n("v-list-item-group",t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{selectable:""}},[t.$vuetify.breakpoint.mdAndUp?n("v-list-item-avatar",[n("v-icon",[t._v("mdi-send")])],1):t._e(),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),n("v-list-item-subtitle",{staticClass:"d-flex justify-space-between"},[n("span",{staticClass:"font-weight-medium"},[t._v("200 OK")]),n("span",[n("v-icon",{attrs:{small:""}},[t._v("mdi-clock-outline")]),t._v(" Duration: 2.13ms")],1),n("span",[n("v-icon",{attrs:{small:""}},[t._v("mdi-account")]),t._v(" IP: 127.0.0.1")],1)])],1)],1)})),1)],1)],1)],1),n("v-col",{staticClass:"d-md-block",attrs:{cols:"12",md:"6",hidden:""}},[n("request-detail-card")],1)],1)],1)],1)],1)},ut=[],dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{attrs:{color:"cyan",dark:"",flat:""}},[n("v-toolbar-title",[t._v("GET /favicon.ico")]),n("v-spacer"),n("v-btn",{attrs:{text:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-replay")]),t._v(" Replay ")],1),n("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",s,!1),a),[t._v(" Copy "),n("v-icon",{attrs:{right:""}},[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",[n("v-list-item",{attrs:{dense:""},on:{click:t.copy}},[n("v-list-item-title",[t._v("Copy link address")])],1),n("v-list-item",{attrs:{dense:""},on:{click:t.copy}},[n("v-list-item-title",[t._v("Copy request headers")])],1),n("v-list-item",{attrs:{dense:""},on:{click:t.copy}},[n("v-list-item-title",[t._v("Copy response headers")])],1),n("v-list-item",{attrs:{dense:""},on:{click:t.copy}},[n("v-list-item-title",[t._v("Copy response")])],1),n("v-divider"),n("v-list-item",{attrs:{dense:""},on:{click:t.copy}},[n("v-list-item-title",[t._v("Copy as fetch")])],1),n("v-list-item",{attrs:{dense:""},on:{click:t.copy}},[n("v-list-item-title",[t._v("Copy as Node.js fetch")])],1),n("v-list-item",{attrs:{dense:""},on:{click:t.copy}},[n("v-list-item-title",[t._v("Copy as cURL")])],1),n("v-list-item",{attrs:{dense:""},on:{click:t.copy}},[n("v-list-item-title",[t._v("Copy all as fetch")])],1),n("v-list-item",{attrs:{dense:""},on:{click:t.copy}},[n("v-list-item-title",[t._v("Copy all as Node.js fetch")])],1),n("v-list-item",{attrs:{dense:""},on:{click:t.copy}},[n("v-list-item-title",[t._v("Copy all as cURL")])],1),n("v-list-item",{attrs:{dense:""},on:{click:t.copy}},[n("v-list-item-title",[t._v("Copy all as HAR")])],1)],1)],1)],1),n("v-tabs",{model:{value:t.tabReq,callback:function(e){t.tabReq=e},expression:"tabReq"}},t._l(t.tabs,(function(e){return n("v-tab",{key:e.name,attrs:{href:"#tab-req-"+e.name}},[t._v(" "+t._s(e.title)+" ")])})),1),n("v-tabs-items",{model:{value:t.tabReq,callback:function(e){t.tabReq=e},expression:"tabReq"}},[n("v-tab-item",{attrs:{value:"tab-req-summary"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._v("Summary")])],1)],1),n("v-tab-item",{attrs:{value:"tab-req-headers"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._v("Headers")])],1)],1),n("v-tab-item",{attrs:{value:"tab-req-raw"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._v("Raw")])],1)],1),n("v-tab-item",{attrs:{value:"tab-req-binary"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._v("Binary")])],1)],1)],1),n("v-divider",{staticClass:"my-5"}),n("v-tabs",{model:{value:t.tabResp,callback:function(e){t.tabResp=e},expression:"tabResp"}},t._l(t.tabs,(function(e){return n("v-tab",{key:e.name,attrs:{href:"#tab-resp-"+e.name}},[t._v(" "+t._s(e.title)+" ")])})),1),n("v-tabs-items",{model:{value:t.tabResp,callback:function(e){t.tabResp=e},expression:"tabResp"}},[n("v-tab-item",{attrs:{value:"tab-resp-summary"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._v("Summary")])],1)],1),n("v-tab-item",{attrs:{value:"tab-resp-headers"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._v("Headers")])],1)],1),n("v-tab-item",{attrs:{value:"tab-resp-raw"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._v("Raw")])],1)],1),n("v-tab-item",{attrs:{value:"tab-resp-binary"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._v("Binary")])],1)],1)],1)],1)},vt=[],ft=r["default"].extend({data:function(){return{tabReq:"tab-req-summary",tabResp:"tab-resp-summary",tabs:[{name:"summary",title:"Summary"},{name:"headers",title:"Headers"},{name:"raw",title:"Raw"},{name:"binary",title:"Binary"}]}},methods:{copy:function(){}}}),mt=ft,pt=n("8860"),ht=n("e449"),bt=n("71a3"),gt=n("c671"),_t=n("fe57"),kt=n("aac8"),xt=Object(h["a"])(mt,dt,vt,!1,null,null,null),yt=xt.exports;y()(xt,{VBtn:w["a"],VCard:V["a"],VCardText:T["b"],VDivider:S["a"],VIcon:j["a"],VList:pt["a"],VListItem:O["a"],VListItemTitle:$["c"],VMenu:ht["a"],VSpacer:z["a"],VTab:bt["a"],VTabItem:gt["a"],VTabs:_t["a"],VTabsItems:kt["a"],VToolbar:Q["a"],VToolbarTitle:W["a"]});var wt=r["default"].extend({extends:g,components:{RequestDetailCard:yt},data:function(){return{dialog:!1,requests:[{}],items:[{title:"GET /",subtitle:"Jan 9, 2014"},{title:"GET /favicon.ico",subtitle:"Jan 17, 2014"}]}},methods:{show:function(t){this.dialog=!0,this.tunnel=t}}}),Vt=wt,Tt=n("1baa"),Ct=Object(h["a"])(Vt,ct,ut,!1,null,null,null),St=Ct.exports;y()(Ct,{VBtn:w["a"],VCard:V["a"],VCol:C["a"],VContainer:G["a"],VDialog:Y["a"],VIcon:j["a"],VList:pt["a"],VListItem:O["a"],VListItemAvatar:R["a"],VListItemContent:$["a"],VListItemGroup:Tt["a"],VListItemSubtitle:$["b"],VListItemTitle:$["c"],VRow:D["a"],VSpacer:z["a"],VToolbar:Q["a"],VToolbarTitle:W["a"]});var jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Remove this tunnel?")]),n("v-card-text",[t._v(" You will not be able to recover this tunnel after removal. ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.confirm}},[t._v(" Confirm ")])],1)],1)],1)},Ot=[],Rt=r["default"].extend({data:function(){return{dialog:!1,tunnel:{}}},watch:{dialog:function(t){t||this.$store.commit("setDeletingId",void 0)}},methods:{show:function(t){this.dialog=!0,this.tunnel=t},confirm:function(){this.dialog=!1,this.$store.dispatch("deleteTunnel",this.tunnel.id)}}}),$t=Rt,Dt=Object(h["a"])($t,jt,Ot,!1,null,null,null),It=Dt.exports;y()(Dt,{VBtn:w["a"],VCard:V["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VDialog:Y["a"],VSpacer:z["a"]});var qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"",width:"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"success"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-toolbar-title",[t._v("Config")])],1),n("v-container",[n("v-form",{on:{submit:t.save}},[n("v-row",{staticClass:"mx-2"},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-text-field",{attrs:{label:"Ngrok host",clearable:""},model:{value:t.server.host,callback:function(e){t.$set(t.server,"host",e)},expression:"server.host"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"Port","persistent-hint":""},model:{value:t.server.port,callback:function(e){t.$set(t.server,"port",e)},expression:"server.port"}})],1),n("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[n("v-spacer"),n("v-btn",{attrs:{color:"success"},on:{click:t.save}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" Save ")],1)],1)],1)],1)],1)],1)],1)},Lt=[],Et=r["default"].extend({name:"SettingDialog",data:function(){return{dialog:!1,server:{host:"",port:""}}},methods:{show:function(){this.dialog=!0,this.server=Object(H["cloneDeep"])(this.$store.state.server)},save:function(){this.dialog=!1,this.$store.dispatch("editServer",Object(H["cloneDeep"])(this.server))}}}),Pt=Et,Bt=n("4bd4"),Mt=Object(h["a"])(Pt,qt,Lt,!1,null,null,null),Ut=Mt.exports;y()(Mt,{VBtn:w["a"],VCard:V["a"],VCol:C["a"],VContainer:G["a"],VDialog:Y["a"],VForm:Bt["a"],VIcon:j["a"],VRow:D["a"],VSpacer:z["a"],VTextField:K["a"],VToolbar:Q["a"],VToolbarTitle:W["a"]});var At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"cyan",app:""}},[n("span",{class:t.color+"--text"},[t.message?n("v-icon",{attrs:{"x-small":"",color:t.color}},[t._v("mdi-record")]):t._e(),t._v(" "+t._s(t.message)+" ")],1),3===t.status?n("v-btn",{staticClass:"ml-1",attrs:{icon:"",small:""},on:{click:t.reconnect}},[n("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-refresh")])],1):t._e(),n("v-spacer"),n("span",{staticClass:"white--text"},[n("a",{staticClass:"white--text",attrs:{href:"javascript:;"},on:{click:t.showAbout}},[t._v("drmer")]),t._v(" © 2020 ")]),n("about-dialog",{ref:"about"})],1)},Jt=[],Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"success"}},[n("v-toolbar-title",[t._v("About")])],1),n("v-card-text",{staticClass:"pt-4"},[t._v(" Tgrok is a tunneling service. "),n("div",{staticClass:"text-center mt-2"},t._l(t.links,(function(e){return n("v-btn",{key:e.url,staticClass:"mx-1",attrs:{icon:""},on:{click:function(n){return t.openLink(e.url)}}},[n("v-icon",[t._v(t._s(e.icon))])],1)})),1)])],1)],1)],1)},Ft=[],Nt=r["default"].extend({data:function(){return{dialog:!1,links:[{icon:"mdi-github",url:"https://github.com/tgrok"},{icon:"mdi-twitter",url:"https://twitter.com/zhDrmer"}]}},methods:{show:function(){this.dialog=!0}}}),Gt=Nt,Yt=Object(h["a"])(Gt,Ht,Ft,!1,null,null,null),zt=Yt.exports;y()(Yt,{VBtn:w["a"],VCard:V["a"],VCardText:T["b"],VDialog:Y["a"],VIcon:j["a"],VToolbar:Q["a"],VToolbarTitle:W["a"]});n("7db0");var Kt=n("ba10"),Qt=n.n(Kt),Wt=n("2ef0"),Xt=Array(),Zt=null,te=new Qt.a,ee=[],ne=function(){function t(){Object(B["a"])(this,t)}return Object(M["a"])(t,null,[{key:"backCallbacks",get:function(){return ee}},{key:"events",get:function(){return te}}]),t}();ne.waitForBridge=function(t){if(Zt&&t&&t(),"undefined"!==typeof window.jsBridge)return Zt=window.jsBridge,void(t&&t());setTimeout((function(){ne.waitForBridge(t)}),50)},ne.close=function(){do{var t=ee.pop();t()}while(ee.length>0)},ne.getId=function(){var t;do{t="li"+(new Date).getTime()+Math.floor(1e3*Math.random());var e=Wt.find(Xt,["id",t]);if(!e)return t}while(1)},ne.call=function(t,e){return ne.remoteCall(t,!1,e)},ne.callJson=function(t,e){return ne.remoteCall(t,!0,e)},ne.remoteCall=function(t,e,n){if(Zt)return new Promise((function(a){var s=ne.getId();Xt.push({id:s,needsJson:e,callback:a}),Zt.postMessage(JSON.stringify({id:s,method:t,params:n}))}))},ne.live=function(t,e,n){if(Zt){"function"==typeof e&&(n=e,e=void 0);var a=ne.getId();return Xt.push({id:a,listen:!0,callback:n}),Zt.postMessage(JSON.stringify({id:a,method:t,params:e})),a}},ne.die=function(t){Wt.remove(Xt,(function(e){return e.id===t}))},ne.run=function(t,e){Zt&&Zt.postMessage(JSON.stringify({method:t,params:e}))},ne.dequeue=function(t,e){if(t){var n=Wt.find(Xt,(function(e){return e.id===t}));n&&("function"===typeof n.callback&&(n.needsJson?"string"==typeof e&&(e=d(e)):"object"==Object(c["a"])(e)&&(e=JSON.stringify(e)),n.callback(e)),n.listen||Wt.remove(Xt,(function(e){return e.id===t})))}},ne.on=function(t,e){te.on(t,e)},ne.off=function(t,e){te.off(t,e)};var ae=r["default"].extend({components:{AboutDialog:zt},data:function(){return{message:""}},computed:{color:function(){return 10===this.$store.state.status?"white":"purple"},status:function(){return this.$store.state.status}},watch:{status:function(t){switch(t){case 0:this.message="starting";break;case 2:this.message="connecting";break;case 4:this.message="connected";break;case 6:this.message="auth failed";break;case 10:this.message="ready";break}}},beforeMount:function(){ne.events.on("tgrok",this.onMessage)},beforeDestroy:function(){ne.events.removeListener("tgrok",this.onMessage)},methods:{onMessage:function(t){var e=t.evt,n=t.payload;switch(e){case"control:status":this.$store.commit("setStatus",n);break;case"master:error":this.message=n;break}},reconnect:function(){ne.call("TgrokService@reconnect")},showAbout:function(){this.$refs.about.show()}}}),se=ae,re=n("553a"),ie=Object(h["a"])(se,At,Jt,!1,null,null,null),oe=ie.exports;y()(ie,{VBtn:w["a"],VFooter:re["a"],VIcon:j["a"],VSpacer:z["a"]});var le=r["default"].extend({data:function(){return{}},components:{TunnelCard:L,TunnelFormDialog:Z,TunnelShareDialog:lt,TunnelRequestsDialog:St,TunnelDeleteDialog:It,SettingDialog:Ut,TFooter:oe},computed:{tunnels:function(){return this.$store.state.tunnels}},watch:{"$store.state.status":function(t){10===t&&this.openTunnels()}},beforeMount:function(){ne.events.on("tgrok",this.onMessage)},beforeDestroy:function(){ne.events.removeListener("tgrok",this.onMessage)},mounted:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u(500);case 2:return 0===this.tunnels.length&&this.editTunnel(void 0),t.next=5,ne.callJson("TgrokService@status");case 5:e=t.sent,this.$store.commit("setStatus",e.status);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{editTunnel:function(t){this.$refs.formDialog.show(t)},shareTunnel:function(t){this.$refs.shareDialog.show(t)},showRequests:function(t){this.$refs.requestsDialog.show(t)},deleteTunnel:function(t){this.$refs.deleteDialog.show(t)},onMessage:function(t){var e=t.evt,n=t.payload;switch(e){case"tunnel:status":this.$store.commit("setTunnelStatus",n)}},openTunnels:function(){var t=this;this.tunnels.forEach((function(e){e.paused||t.$store.dispatch("openTunnel",e.id)}))}}}),ce=le,ue=(n("034f"),n("7496")),de=n("40dc"),ve=n("f6c4"),fe=Object(h["a"])(ce,i,o,!1,null,null,null),me=fe.exports;y()(fe,{VApp:ue["a"],VAppBar:de["a"],VBtn:w["a"],VCol:C["a"],VContainer:G["a"],VIcon:j["a"],VMain:ve["a"],VRow:D["a"],VSpacer:z["a"],VToolbarTitle:W["a"],VTooltip:I["a"]});var pe=n("ce5b"),he=n.n(pe);r["default"].use(he.a);var be=new he.a({}),ge=(n("a434"),n("2f62"));r["default"].use(ge["a"]);var _e=new ge["a"].Store({state:{status:0,server:{host:"",port:""},tunnels:[],deletingId:""},mutations:{setStatus:function(t,e){t.status=e},setDeletingId:function(t,e){t.deletingId=e},tunnelOpened:function(t,e){var n=Object(H["find"])(t.tunnels,{id:e.id});n&&(n.status=10)},tunnelClosed:function(t,e){var n=Object(H["find"])(t.tunnels,{id:e});n&&(n.status=0)},setTunnelStatus:function(t,e){var n=Object(H["find"])(t.tunnels,{id:e.id});n&&(n.status=e.status,n.url=e.url)}},actions:{load:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,t.next=3,ne.callJson("ConfigService@load");case 3:a=t.sent,n.server=a.server,s=a.tunnels,s.forEach((function(t){t.status=0})),n.tunnels=s;case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),saveTunnels:function(t){var e=t.state,n=Object(H["cloneDeep"])(e.tunnels);n.forEach((function(t){delete t.status})),ne.call("ConfigService@set",{key:"tunnels",value:n})},editTunnel:function(t,e){var n=t.state,a=n.tunnels,s=Object(H["findIndex"])(a,{id:e.id});s<0?a.push(e):a.splice(s,1,e),this.dispatch("saveTunnels")},deleteTunnel:function(t,e){var n=t.state,a=n.tunnels,s=Object(H["findIndex"])(a,{id:e});a.splice(s,1),ne.call("TgrokService@remove",{id:e}),this.dispatch("saveTunnels")},openTunnel:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,n){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.state,s=Object(H["find"])(a.tunnels,{id:n}),s){t.next=4;break}return t.abrupt("return");case 4:s.paused=!1,s.status=6,ne.call("TgrokService@open",{id:n}),this.dispatch("saveTunnels");case 8:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),closeTunnel:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,n){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.state,s=Object(H["find"])(a.tunnels,{id:n}),s){t.next=4;break}return t.abrupt("return");case 4:s.paused=!0,s.status=4,ne.call("TgrokService@close",{id:n}),this.dispatch("saveTunnels");case 8:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),editServer:function(t,e){var n=t.state;n.server=e,ne.call("ConfigService@set",{key:"server",value:e})}},modules:{}});n("77ed");r["default"].config.productionTip=!1,window.Drmer=ne,r["default"].mixin({methods:{openLink:function(t){ne.call("PageService@external",{url:t})}}}),ne.waitForBridge((function(){_e.dispatch("load"),new r["default"]({vuetify:be,store:_e,render:function(t){return t(me)}}).$mount("#app")}))}});