(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"7f9b":function(e,t,i){"use strict";i.r(t),t["default"]={Apply:"übernehmen",Cancel:"abbrechen","Invalid JSON format":"Falsches JSON Format",Configuration:"Konfiguration","Expert mode":"Expertenmodus",Devices:"Geräte",Settings:"Einstellungen",Layout:"Layout","JSON Editor":"JSON Editor","DevicesListPage#filterBy#info":'Die Suche ist case-insensitive und findet bei "cd" oder "CD" jeweils beides. Ein Platzhalter (*) wird nicht unterstützt, jedoch findet die Suche nach "CD" sowohl "ABCDE" als auch "ABCD" oder "CDEF".Die folgenden Felder werden alle gesamtheitlich durchsucht: Namen des Geräts (name), ID des Geräts (id), Gewerk des Geräts (function), ID der Datenpunkte des Geräts (stateId), Label der Datenpunkte des Geräts (stateLabel), State sowie Action Trigger der Datenpunkte des Geräts (state / action), Hersteller (manufacturer). Die Felder können auch dediziert durchsucht werden indem z.B. "-name:PC" oder "-function:Licht" eingegeben wird. Es können auch mehrere dedizierte Felder durchsucht werden, z. B. "-name:PC -function:Licht" (also einfach hintereinander weg schreiben).'}},"9a52":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-layout",{attrs:{view:"hHh lpR fFf"}},[i("q-header",[i("q-toolbar",[i("q-toolbar-title",[i("icon",{attrs:{name:"mdi-cog",vAlign:"middle"}}),e._v("\n\t\t\t\t"+e._s(e.$t("Configuration"))+"\n\t\t\t")],1),i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:e.expertMode?"mdi-code-tags-check":"mdi-code-tags","aria-label":"$t('Expert Mode')"},on:{click:function(t){e.expertMode=!e.expertMode}}},[i("q-tooltip",[e._v(e._s(e.$t("Expert Mode")))])],1)],1),i("q-tabs",{attrs:{"inline-label":"",dense:"","outside-arrows":"","mobile-arrows":"",align:"left"},model:{value:e.configTab,callback:function(t){e.configTab=t},expression:"configTab"}},e._l(e.tabs,(function(t){return i("q-route-tab",{key:t.id,attrs:{to:t.id,label:e.$t(t.title),icon:t.icon,name:t.id}})})),1)],1),i("q-page-container",{staticClass:"ConfigurationPage body"},[i("q-page",{attrs:{"style-fn":e.pageContainer}},[i("router-view")],1)],1),i("q-footer",[i("q-toolbar",[i("q-btn",{staticClass:"text-red",attrs:{flat:"",icon:"mdi-window-close","aria-label":"Cancel",label:"Cancel"},on:{click:e.cancel}}),i("q-space"),i("q-btn",{staticStyle:{"margin-right":"8px"},attrs:{disable:e.hasErrors,icon:"mdi-content-save","aria-label":"Save",label:"Save",flat:"",color:"primary"},on:{click:function(t){return e.save(!1)}}}),i("q-btn",{attrs:{disable:e.hasErrors,icon:"mdi-content-save","aria-label":"Save & Exit",label:"Save & Exit",color:"primary"},on:{click:function(t){return e.save(!0)}}})],1)],1)],1)},a=[],r=i("a6f4"),o=i("21bd"),n=i("ad54");const d=[{id:"devices",title:"Devices",icon:"mdi-devices"},{id:"widgets",title:"Widgets",icon:"mdi-view-grid"},{id:"layout",title:"Layout",icon:"mdi-file"},{id:"styles",title:"Styles",icon:"mdi-code-tags",pro:!0},{id:"settings",title:"Settings",icon:"mdi-cog"}],c=i("0050")();var l=Object(r["c"])({name:"ConfigurationPage",data(){return{tabs:d}},methods:{pageContainer(e,t){return this.$store.commit("jarvis/set",{pageHeight:t-e}),{"min-height":t-e+"px"}},cancel(){this.$store.commit("jarvis/set",{drawerLeftOpen:!1}),this.$router.push({name:"home",params:{tabId:this.$store.getters["jarvis/getSelectedTabId"]}}).catch((()=>{})),setTimeout((()=>{this.$store.commit("editor/reset")}),1e3)},save(e){let t=this.$store.state.editor.devices,i=c(this.$store.state.editor.widgets);const s=c(this.$store.getters["editor/getLayoutWithoutDeletions"]),a=this.$store.state.editor.styles,r=this.$store.state.editor.settings;for(const o in i)i[o].items=i[o].items||[],i[o].items=i[o].items.filter((e=>t[e.deviceId]&&(!t[e.deviceId].attributes||t[e.deviceId].attributes&&!0!==t[e.deviceId].attributes.deleted)));s.forEach((e=>{e.tabs.forEach((e=>{delete e.widgets,e.widgetsDesktop.forEach((e=>{e.items=e.items||[],e.items=e.items.filter((e=>i[e]&&!0!==i[e]._deleted))})),e.widgetsSmartphone.forEach((e=>{e.items=e.items||[],e.items=e.items.filter((e=>i[e]&&!0!==i[e]._deleted))}))}))})),t=this.$store.getters["editor/getDevicesWithoutDeletions"],i=this.$store.getters["editor/getWidgetsWithoutDeletions"],this.$store.commit("jarvis/set",{devices:t,layout:s,widgets:i,settings:r,styles:a}),this.$store.commit("editor/init",{devices:t,layout:s,widgets:i,settings:r,styles:a}),o["a"]._devices={},this.$store.dispatch("editor/save",{devices:t,layout:s,widgets:i,settings:r,styles:a}),e&&this.cancel()}},computed:{hasErrors(){return this.$store.getters["editor/hasErrors"]},expertMode:{get(){var e;return null===(e=this.$store.state.editor.settings)||void 0===e?void 0:e.configExpertMode},set(e){this.$store.commit("editor/set",{"settings.configExpertMode":e})}},configTab:{get(){var e;return null===(e=this.$store.state.editor.settings)||void 0===e?void 0:e.configTab},set(e){e&&this.$store.commit("editor/set",{"settings.configTab":e})}}},beforeCreate(){var e;(n["default"].register(this.$i18n,n["default"].translations),"Configuration"===this.$route.name)&&(this.$store.commit("editor/init",{devices:this.$store.state.jarvis.devices,layout:this.$store.state.jarvis.layout,styles:this.$store.state.jarvis.styles,settings:this.$store.state.jarvis.settings,widgets:this.$store.state.jarvis.widgets}),this.$router.push({path:"/configuration/"+((null===(e=this.$store.state.editor.settings)||void 0===e?void 0:e.configTab)||d[0].id)}).catch((()=>{})))}}),u=l,h=i("2877"),g=i("4d5a"),f=i("e359"),m=i("65c6"),b=i("6ac5"),v=i("9c40"),p=i("05c0"),w=i("429b"),y=i("7867"),$=i("09e3"),D=i("9989"),C=i("7ff0"),E=i("2c91"),T=i("eebe"),x=i.n(T),S=Object(h["a"])(u,s,a,!1,null,null,null);t["default"]=S.exports;x()(S,"components",{QLayout:g["a"],QHeader:f["a"],QToolbar:m["a"],QToolbarTitle:b["a"],QBtn:v["a"],QTooltip:p["a"],QTabs:w["a"],QRouteTab:y["a"],QPageContainer:$["a"],QPage:D["a"],QFooter:C["a"],QSpace:E["a"]})},a71c:function(e,t,i){var s={"./":"ad54","./de":"7f9b","./de.js":"7f9b","./en":"e2a2","./en.js":"e2a2","./index":"ad54","./index.js":"ad54"};function a(e){var t=r(e);return i(t)}function r(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="a71c"},ad54:function(e,t,i){"use strict";i.r(t);var s=i("0692");t["default"]={translations:Object(s["a"])((e=>i("a71c")("./"+e))),register:s["c"]}},e2a2:function(e,t,i){"use strict";i.r(t),t["default"]={"DevicesListPage#filterBy#info":'The search is case-insensitive and will return results for both "cd" oder "CD". A wildcard (*) is not supported but searching "CD" will find "ABCDE" as well as "ABCD" or "CDEF".The following attributes are searched holistically: Name of device (name), ID of device (id), Function of device (function), ID of its states (stateId), label of its states (stateLabel), State as well as Action Trigger of its states (state / action), Manufacturer (manufacturer). The fields may be searched separately via e.g. "-name:CD" or "-function:light". This may be combined via e.g. "-name:PC -function:light".'}}}]);