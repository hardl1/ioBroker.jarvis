(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{a1ad:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n\tPro\n\t"),n("div",{attrs:{id:"paypal-button-container"}})])}],r=n("a6f4"),i=Object(r["c"])({name:"AccountOverview",methods:{mountPaypal(){if(window.paypal){const t={style:{shape:"rect",color:"blue",layout:"vertical",label:"subscribe"},createSubscription:(t,e)=>e.subscription.create({plan_id:"P-9YV75177CC707074SMEFQBAA"}),onApprove:(t,e)=>{alert(t.subscriptionID)}};window.paypal.Buttons(t).render("#paypal-button-container")}else setTimeout((()=>this.mountPaypal()),100)}},mounted(){this.mountPaypal()}}),l=i,c=n("2877"),s=Object(c["a"])(l,a,o,!1,null,null,null);e["default"]=s.exports}}]);