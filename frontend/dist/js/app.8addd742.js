(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"37af":function(t,e,s){t.exports=s.p+"img/ui-arrow.b79e7405.svg"},"4d54":function(t,e,s){t.exports=s.p+"img/ui-settings.f4952eff.svg"},5269:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-peercoinpi",attrs:{id:"app"}},[e("router-view")],1)},n=[],r=(s("ac1d"),s("2877")),o={},l=Object(r["a"])(o,i,n,!1,null,null,null),c=l.exports,d=s("9483");Object(d["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var u=s("8c4f"),h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-home"},[e("div",{staticClass:"container"},[e("img",{staticClass:"c-home__splashscreen",attrs:{src:"https://camo.githubusercontent.com/8dad19be3fa0d7ba43c2eee717a408dbfd59df0ceec9d253b9c6331984471652/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3432363334303139313235393835323830312f313030343539383734343633393039383930302f50656572636f696e745f4d696e742e706e67"}}),e("div",{staticClass:"c-home__loading u-fade"},[e("h1",{staticClass:"c-home__message u-color-white"},[t._v(t._s(this.dashboard.progress)+" %")]),e("h6",{staticClass:"c-home__message"},[t._v("( "+t._s(this.dashboard.mb)+" MB )")]),this.dashboard.finished?e("h4",{staticClass:"c-home__message"},[t._v("We're now up-to-date with the "+t._s(this.dashboard.meta.chain)+" blockchain!")]):e("h4",{staticClass:"c-home__message"},[t._v(t._s(this.dashboard.meta.chain)+" blockchain is loading ...")])])])])},m=[],_=s("bc3a"),v=s.n(_),p={PEERCOINPI_TESTMODE:!0,PEERCOINPI_HOST:"192.168.2.23",PEERCOINPI_PORT:3e3,PEERCOINPI_USERNAME:"peercoinpi",PEERCOINPI_PASSWORD:1234};class f{construct(){console.log("PeercoinPI API initialization..")}buildHost(){return"http://"+p.PEERCOINPI_HOST+":"+p.PEERCOINPI_PORT}post(t){return v.a.post(this.buildHost(),t)}get(t){return v.a.get(this.buildHost()+"/"+t)}getTransactions(){return this.get("transactions")}getDashboard(){return this.get("dashboard")}setSettingsMode(t){return v.a.post(this.buildHost()+"/settings/chain/"+t)}}var g=f,b={watch:{},methods:{},name:"Home",data(){return{dashboard:{type:Array,default:null},balances:{type:Array},mintings:{type:Array},networkinfo:{type:Array},testmode:{type:Boolean}}},mounted(){let t=new g;var e=this;t.getDashboard().then(t=>e.dashboard=t.data)}},C=b,y=Object(r["a"])(C,h,m,!1,null,null,null),w=y.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-dashboard"},[e("Sidebar"),e("div",{staticClass:"c-dashboard-view"},[e("Header",{attrs:{mode:this.dashboard.meta.chain}}),t._m(0),e("div",{staticClass:"c-dashboard-view-transactions"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-lg-2"},[e("h4",{staticClass:"u-color-black"},[t._v("Balances")]),e("Balances",{attrs:{balances:this.dashboard.balances,latestBlock:this.dashboard.meta.blocks,transactions:this.dashboard.transactions,status:this.dashboard.status}})],1),e("div",{staticClass:"col-md-12 col-lg-5"},[e("Transactions",{attrs:{transactions:this.dashboard.transactions},on:{selected:t.selected}})],1),this.showDetails?e("div",{staticClass:"col-md-12 col-lg-5"},[e("h4",{staticClass:"u-color-black"},[t._v("Details")]),e("div",{staticClass:"row"},[e("BalancesItem",{attrs:{label:"Address",link:t.updateBlockExplorerAddress(this.currentSelected.address)}}),e("BalancesItem",{attrs:{label:"Confirmations",value:this.currentSelected.confirmations}}),e("BalancesItem",{attrs:{label:"Transaction ID",link:t.updateBlockExplorerTx(this.currentSelected.txid)}}),e("BalancesItem",{attrs:{label:"Category",value:this.currentSelected.category}})],1)]):t._e()])])])],1)],1)},S=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-dashboard-view-header"},[e("div",{staticClass:"container"},[e("h1",[t._v("Overview")])])])}],k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header u-color-white",class:{"c-header--main":"main"==this.mode,"c-header--testnet":"test"==this.mode}},["main"==this.mode?e("span",[t._v(" MAINET MODE ")]):e("span",[t._v(" TESTNET MODE ")])])},O=[],M={name:"Header",props:{mode:{type:String,default:"testnet",required:!0}}},I=M,E=Object(r["a"])(I,k,O,!1,null,null,null),T=E.exports,A=function(){var t=this,e=t._self._c;return t.display?e("div",{staticClass:"c-sidebar"},[t._m(0),e("div",{staticClass:"c-sidebar__items"},[e("ul",[e("li",[e("div",{staticClass:"c-sidebar__items--icon moveMenu"},[e("svg",{staticStyle:{"enable-background":"new 0 0 32 32"},attrs:{height:"32px",id:"Layer_1",version:"1.1",viewBox:"0 0 32 32",width:"32px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{attrs:{d:"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"}})])]),e("span",{staticClass:"fatter"},[t._v("Menu")])]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])]),e("div",{staticClass:"c-sidebar__version"},[t._v(" v.1.0.0 ")])]):t._e()},B=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-sidebar__logo"},[e("a",{attrs:{href:"https://www.peercoin.net/university/",target:"_blank"}},[e("img",{attrs:{src:s("9dfa"),alt:"Peercoin"}})])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"c-sidebar__items--active"},[e("div",{staticClass:"c-sidebar__items--icon"},[e("img",{attrs:{height:"32px",src:s("a3c8"),alt:"Overview"}})]),e("span",[e("a",{attrs:{href:"/dashboard"}},[t._v("Overview")])])])},function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"c-sidebar__items--icon"},[e("img",{attrs:{height:"32px",src:s("d44a"),alt:"Mints"}})]),e("span",[e("a",{attrs:{href:"/dashboard/mints"}},[t._v("Mints")])])])},function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"c-sidebar__items--icon rotateArrowUp"},[e("img",{attrs:{height:"32px",src:s("37af"),alt:"Send"}})]),e("span",[t._v("Send")])])},function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"c-sidebar__items--icon rotateArrowDown"},[e("img",{attrs:{height:"32px",src:s("37af"),alt:"Send"}})]),e("span",[t._v("Receive")])])},function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"c-sidebar__items--icon"},[e("img",{attrs:{height:"32px",src:s("e197"),alt:"Send"}})]),e("span",[t._v("Community")])])},function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"c-sidebar__items--icon"},[e("img",{attrs:{height:"32px",src:s("4d54"),alt:"Settings"}})]),e("span",[e("a",{attrs:{href:"/dashboard/settings"}},[t._v("Settings")])])])}],P={name:"Sidebar",props:{display:{type:Boolean,default:!0}}},j=P,N=Object(r["a"])(j,A,B,!1,null,null,null),D=N.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-balances"},[e("BalancesItem",{attrs:{label:"Balance",value:this.balances.mine.trusted}}),e("BalancesItem",{attrs:{label:"Pending",value:this.balances.mine.untrusted_pending}}),e("BalancesItem",{attrs:{label:"Total",value:this.balances.mine.trusted}}),e("BalancesItem",{attrs:{label:"Transactions",value:this.transactions.length}}),e("BalancesItem",{attrs:{label:"Status",value:this.status}}),e("BalancesItem",{attrs:{label:"Latest block",value:this.latestBlock}})],1)},R=[],q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-balances__item"},[e("div",{staticClass:"c-balances__item__label"},[t._v(t._s(this.label))]),null==this.link?e("div",{staticClass:"c-balances__item__value"},[t._v(t._s(this.value))]):t._e(),null!=this.link?e("div",{staticClass:"c-balances__item__link"},[e("a",{attrs:{target:"_blank",href:this.link.href}},[t._v(t._s(this.link.label))]),e("img",{attrs:{src:s("eb83"),alt:"External Link"}})]):t._e()])},z=[],L={name:"BalanceItem",props:{label:{type:String,default:"label",required:!0},value:{type:String,default:"value",required:!0},link:{type:Object,default:null,required:!1}}},J=L,$=Object(r["a"])(J,q,z,!1,null,null,null),U=$.exports,F={name:"Balances",props:{balances:{type:Object},latestBlock:{type:String},transactions:{type:Object},status:{type:String}},components:{BalancesItem:U}},V=F,W=Object(r["a"])(V,H,R,!1,null,null,null),X=W.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-transactions"},[e("h4",{staticClass:"u-color-black"},[t._v("My transactions")]),e("div",{staticClass:"c-transactions__container"},t._l(this.transactions,(function(s,a){return e("div",{key:a},[e("TransactionsItemVue",{attrs:{id:a,address:s.address,amount:s.amount,timereceived:s.timereceived,category:s.category,confirmations:s.confirmations},on:{selected:t.selected}})],1)})),0)])},Y=[],Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-transactions__item",class:{"c-transactions__item--disabled":this.confirmations<8},attrs:{id:this.id},on:{click:this.onClick}},[e("div",{staticClass:"c-transactions__item__icon"},["receive"===this.category?e("div",{staticClass:"c-transactions__item__icon c-transactions__item__icon-left rotateLeft"},[e("img",{attrs:{height:"32px",src:s("7963"),alt:"Received"}})]):t._e(),"send"===this.category?e("div",{staticClass:"c-transactions__item__icon c-transactions__item__icon-right rotateRight"},[e("img",{attrs:{height:"32px",src:s("7963"),alt:"Send"}})]):t._e(),"stake"===this.category||"stake-mint"===this.category?e("div",{staticClass:"c-transactions__item__icon c-transactions__item__icon-left rotateLeft"},[e("img",{attrs:{height:"32px",src:s("7963"),alt:"Stake"}})]):t._e()]),e("div",{staticClass:"c-transactions__item__date"},[t._v(" "+t._s(this.timereceived)+" ")]),"stake"===this.category||"stake-mint"===this.category?e("div",{staticClass:"c-transactions__item__amount c-transactions__item__amount--received"},[t._v(" +"+t._s(this.amount)+" ")]):t._e(),"receive"===this.category?e("div",{staticClass:"c-transactions__item__amount c-transactions__item__amount--received"},[t._v(" +"+t._s(this.amount)+" ")]):t._e(),"send"===this.category?e("div",{staticClass:"c-transactions__item__amount c-transactions__item__amount--send"},[t._v(" "+t._s(this.amount)+" ")]):t._e()])},K=[],Q={name:"TransactionsItem",props:{id:{type:Number,default:null,required:!0},confirmations:{type:Number,default:null,required:!0},category:{type:String,default:null,required:!0},address:{type:String,default:null,required:!0},amount:{type:Number,default:null,required:!0},timereceived:{type:String,default:null,required:!0}},methods:{onClick:function(){console.log("Child: Hey dad!"),this.$emit("selected",this.id)}}},tt=Q,et=Object(r["a"])(tt,Z,K,!1,null,null,null),st=et.exports,at={name:"Transactions",components:{TransactionsItemVue:st},methods:{selected(t){console.log("Parent: Yes?"),this.$emit("selected",t)}},props:{transactions:{type:Array,default:null,required:!0}}},it=at,nt=Object(r["a"])(it,G,Y,!1,null,null,null),rt=nt.exports,ot=s("fd0a"),lt={name:"Dashboard",components:{Sidebar:D,Header:T,Balances:X,BalancesItem:U,Transactions:rt},props:{showDetails:{type:Boolean,default:null,required:!0}},methods:{selected(t){console.log("GrandPa: anyone talking here ?"),this.currentSelected=this.dashboard.transactions[t],this.showDetails=!0},updateBlockExplorerAddress(t){let e=ot[this.$store.state.settings.explorer][this.$store.state.settings.chain]["address"];return{label:t,href:e+t}},updateBlockExplorerTx(t){let e=ot[this.$store.state.settings.explorer][this.$store.state.settings.chain]["tx"];return{label:t,href:e+t}}},data(){return{dashboard:{type:Array,default:null},balances:{type:Array},mintings:{type:Array},networkinfo:{type:Array},testmode:{type:Boolean},currentSelected:{type:Object,default:{}}}},mounted(){let t=new g;var e=this;t.getDashboard().then(t=>e.dashboard=t.data)}},ct=lt,dt=Object(r["a"])(ct,x,S,!1,null,null,null),ut=dt.exports,ht=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-dashboard"},[e("Sidebar"),e("div",{staticClass:"c-dashboard-view"},[e("Header",{attrs:{mode:this.dashboard.meta.chain}}),t._m(0),e("div",{staticClass:"c-mints"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-lg-12 col-xl-3"},[e("h4",{staticClass:"u-color-black"},[t._v("Immature ("+t._s(this.dashboard.mints.immature.length)+")")]),e("Mints",{attrs:{mints:this.dashboard.mints.immature}})],1),e("div",{staticClass:"col-md-12 col-lg-12 col-xl-3"},[e("h4",{staticClass:"u-color-black"},[t._v("Mature ("+t._s(this.dashboard.mints.mature.length)+")")]),e("Mints",{attrs:{mints:this.dashboard.mints.mature}})],1),e("div",{staticClass:"col-md-12 col-lg-12 col-xl-3"},[e("h4",{staticClass:"u-color-black"},[t._v("Minted ("+t._s(this.dashboard.mints.minted.length)+")")]),e("MintedList",{attrs:{mints:this.dashboard.mints.minted}})],1),e("div",{staticClass:"col-md-12 col-lg-12 col-xl-3"},[e("h4",{staticClass:"u-color-black"},[t._v("Hashrate")]),e("div",{staticClass:"c-mints__hashrate"},[e("h3",{staticClass:"u-color-black"},[t._v(t._s(this.dashboard.mints.hashrate)+" attempts")])])])])])])],1)],1)},mt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-dashboard-view-header"},[e("div",{staticClass:"container"},[e("h1",[t._v("My Mints")])])])}],_t=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-mints"},t._l(this.mints,(function(t,s){return e("div",{key:s},[e("MintItem",{attrs:{mint:t}})],1)})),0)},vt=[],pt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-mints__item",class:{"c-mints__item--mature":"mature"==this.mint.status,"c-mints__item--immature":"immature"==this.mint.status}},[e("div",{staticClass:"c-mints__item__amount"},[t._v(" "+t._s(this.mint.amount)+" ")]),e("div",{staticClass:"c-mints__item__percentage"},[e("br"),t._v(t._s(this.mint.percentage)+"% ")]),e("div",{staticClass:"c-mints__item__age"},[t._v(" "+t._s(this.mint["age-in-day"])+" ")]),t._v(" "+t._s(this.mint.attempts)+" ")])},ft=[],gt={name:"MintItem",props:{mint:{type:Array,default:null,required:!0}}},bt=gt,Ct=Object(r["a"])(bt,pt,ft,!1,null,null,null),yt=Ct.exports,wt={name:"Mints",components:{MintItem:yt},props:{mints:{type:Object,default:null,required:!0}}},xt=wt,St=Object(r["a"])(xt,_t,vt,!1,null,null,null),kt=St.exports,Ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-minted-list"},t._l(this.mints,(function(t,s){return e("div",{key:s},[e("MintedItem",{attrs:{mint:t}})],1)})),0)},Mt=[],It=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-minted-list__item c-minted-list__item--staked"},[e("div",{staticClass:"c-minted-list__item__amount"},[t._v(" + "+t._s(this.mint.amount)+" ")])])},Et=[],Tt={name:"MintedItem",props:{mint:{type:Array,default:null,required:!0}}},At=Tt,Bt=Object(r["a"])(At,It,Et,!1,null,null,null),Pt=Bt.exports,jt={name:"MintedList",components:{MintedItem:Pt},props:{mints:{type:Object,default:null,required:!0}}},Nt=jt,Dt=Object(r["a"])(Nt,Ot,Mt,!1,null,null,null),Ht=Dt.exports,Rt={name:"Dashboard",components:{Sidebar:D,Header:T,Mints:kt,MintedList:Ht},data(){return{dashboard:{type:Array,default:null},balances:{type:Array},mintings:{type:Array},networkinfo:{type:Array},testmode:{type:Boolean}}},mounted(){let t=new g;var e=this;t.getDashboard().then(t=>e.dashboard=t.data),setInterval(function(){console.log("polling"),t.getDashboard().then(t=>e.dashboard=t.data)}.bind(this),1e3)}},qt=Rt,zt=Object(r["a"])(qt,ht,mt,!1,null,null,null),Lt=zt.exports,Jt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-settings"},[e("Sidebar",{attrs:{display:this.showSidebar}}),e("div",{staticClass:"c-settings-view"},[e("div",{staticClass:"c-settings-view-header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"c-settings-view-header"},[this.showSidebar?t._e():e("img",{attrs:{src:s("aa5a")},on:{click:t.onMenuClick}}),e("h1",[t._v("Settings")])])])]),e("div",{staticClass:"c-settings-view-options"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row c-settings-view-options-row"},[e("div",{staticClass:"col-sm-10 col-md-4"},[t._m(0),t._m(1),e("toggle-button",{attrs:{width:100,height:30,sync:!0,labels:{checked:"TESTNET",unchecked:"MAINET"}},on:{change:t.onTestnetModeChange},model:{value:t.testnetMode,callback:function(e){t.testnetMode=e},expression:"testnetMode"}}),this.testnetMode?t._e():e("div",{staticClass:"row c-settings-view-options__warning"},[e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" "+t._s(this.warningMessage)+" "),e("br"),t._v("Use at your own risk. ")])])],1)]),e("div",{staticClass:"row c-settings-view-options-row"},[e("div",{staticClass:"col-sm-10 col-md-4"},[t._m(2),t._m(3),e("div",{staticClass:"row"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.explorer,expression:"explorer"}],staticClass:"form-select",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.explorer=e.target.multiple?s:s[0]},t.onExplorerChange]}},[e("option",{attrs:{value:"trezor"}},[t._v("Trezor")]),e("option",{attrs:{value:"cryptoid"}},[t._v("Cryptoid")])])])])]),e("div",{staticClass:"row c-settings-view-options-row"},[e("div",{staticClass:"col-sm-10 col-md-4"},[t._m(4),t._m(5),e("div",{staticClass:"row"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.theme,expression:"theme"}],staticClass:"form-select",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.theme=e.target.multiple?s:s[0]},t.onThemeChange]}},[e("option",{attrs:{value:"dark"}},[t._v("Dark")]),e("option",{attrs:{value:"light"}},[t._v("Light")])])])])])])])])],1)},$t=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("h3",[t._v("Chain mode")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("h6",[t._v("Default: testnet")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("h3",[t._v("Block explorer")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("h6",[t._v("Default: TREZOR")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("h3",[t._v("Theme")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("h6",[t._v("Default: Dark")])])}],Ut=s("2f62");a["a"].use(Ut["a"]);var Ft=new Ut["a"].Store({state:{settings:{chain:"testnet",explorer:"https://tblockbook.peercoin.net/",theme:"dark"}},getters:{settings(){return this.state.settings}},mutations:{SET_CHAIN(t,e){t.settings.chain=e,localStorage.setItem("store",JSON.stringify(t))},SET_THEME(t,e){t.settings.theme=e,localStorage.setItem("store",JSON.stringify(t))},SET_EXPLORER(t,e){t.settings.explorer=e,localStorage.setItem("store",JSON.stringify(t))}},actions:{},modules:{}}),Vt={name:"Settings",components:{Sidebar:D},data(){return{warningMessage:"Risky roads often leads to beautiful destination. Unfortunately, mainet is not recommanded (yet).",dashboard:{type:Array,default:null},testnetMode:null,showSidebar:null}},methods:{onMenuClick(){this.showSidebar=!this.showSidebar},onThemeChange(t){""!==t.target.value&&Ft.commit("SET_THEME",t.target.value)},onExplorerChange(t){""!==t.target.value&&Ft.commit("SET_EXPLORER",t.target.value)},onTestnetModeChange(t){let e=new g;!0===t.value?e.setSettingsMode("testnet"):e.setSettingsMode("main"),!0===t.value?Ft.commit("SET_CHAIN","testnet"):Ft.commit("SET_CHAIN","main")}},beforeMount(){let t=new g;var e=this;t.getDashboard().then(t=>{e.dashboard=t.data,e.testnetMode="test"==t.data.meta.chain});let s=JSON.parse(localStorage.getItem("store"));null!==s&&(this.explorer=s.settings.explorer,this.theme=s.settings.theme)}},Wt=Vt,Xt=Object(r["a"])(Wt,Jt,$t,!1,null,null,null),Gt=Xt.exports;a["a"].use(u["a"]);const Yt=[{path:"/",name:"Home",component:w},{path:"/dashboard",name:"Dashboard",component:ut},{path:"/dashboard/mints",name:"Dashboard - Mints",component:Lt},{path:"/dashboard/settings",name:"Settings",component:Gt}],Zt=new u["a"]({mode:"history",base:"/",routes:Yt});var Kt=Zt,Qt=s("1da6"),te=s.n(Qt);s("b107"),s("ab8b");a["a"].config.productionTip=!1,a["a"].use(te.a);let ee=localStorage.getItem("store");if(null!==ee){let t=JSON.parse(ee);Ft.replaceState(t)}new a["a"]({router:Kt,store:Ft,render:t=>t(c)}).$mount("#app")},7963:function(t,e,s){t.exports=s.p+"img/ui-received.4d85f969.svg"},"9dfa":function(t,e,s){t.exports=s.p+"img/ui-logo.8065cb68.png"},a3c8:function(t,e,s){t.exports=s.p+"img/ui-overview.93a92e71.svg"},aa5a:function(t,e,s){t.exports=s.p+"img/ui-menu.86595150.svg"},ac1d:function(t,e,s){"use strict";s("5269")},b107:function(t,e,s){},d44a:function(t,e,s){t.exports=s.p+"img/ui-leaf.f2fe0290.svg"},e197:function(t,e,s){t.exports=s.p+"img/ui-community.27a5d923.svg"},eb83:function(t,e,s){t.exports=s.p+"img/ui-external.0c9504e9.svg"},fd0a:function(t){t.exports=JSON.parse('{"trezor":{"testnet":{"address":"https://tblockbook.peercoin.net/address/","tx":"https://tblockbook.peercoin.net/tx/"},"main":{"address":"https://explorer.peercoin.net/address/","tx":"https://explorer.peercoin.net/tx/"}},"cryptoid":{"testnet":{"address":"https://chainz.cryptoid.info/ppc-test/address.dws?","tx":"https://chainz.cryptoid.info/ppc-test/tx.dws?"},"main":{"address":"https://chainz.cryptoid.info/ppc/address.dws?","tx":"https://chainz.cryptoid.info/ppc/tx.dws?"}}}')}});
//# sourceMappingURL=app.8addd742.js.map