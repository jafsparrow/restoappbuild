"use strict";(self.webpackChunkorderapp=self.webpackChunkorderapp||[]).push([[592],{8575:(b,x,s)=>{s.d(x,{D:()=>C});var a=s(6814),m=s(9135),l=s(9212),e=s(4221);function t(h,O){if(1&h&&(l.TgZ(0,"div",1)(1,"div"),l._uU(2," Hello ! "),l.TgZ(3,"span",2),l._uU(4),l.qZA()()()),2&h){const c=O.ngIf;l.xp6(4),l.Oqu(c.name)}}let C=(()=>{class h{constructor(c){this.store=c,this.selectSignedInUser$=this.store.select(m.JS)}static#e=this.\u0275fac=function(v){return new(v||h)(l.Y36(e.yh))};static#t=this.\u0275cmp=l.Xpm({type:h,selectors:[["hotel-orderapp-auth-feature-signed-user-detail"]],standalone:!0,features:[l.jDz],decls:2,vars:3,consts:[["class","bg-gray-100 p-2 grid content-center justify-center h-16 border border-b-2",4,"ngIf"],[1,"bg-gray-100","p-2","grid","content-center","justify-center","h-16","border","border-b-2"],[1,"font-light"]],template:function(v,r){1&v&&(l.YNc(0,t,5,1,"div",0),l.ALo(1,"async")),2&v&&l.Q6J("ngIf",l.lcZ(1,1,r.selectSignedInUser$))},dependencies:[a.ez,a.O5,a.Ov]})}return h})()},5362:(b,x,s)=>{s.d(x,{v:()=>O});var a=s(6814),m=s(5836),l=s(8866),e=s(608),t=s(9212),C=s(4221);function h(c,v){if(1&c){const r=t.EpF();t.TgZ(0,"div",1)(1,"hotel-cancel-order-confirm",2),t.NdJ("btnClicked",function(){const u=t.CHM(r).ngIf,g=t.oxw();return t.KtG(g.cancelOrder(u))}),t.ALo(2,"async"),t.qZA()()}if(2&c){const r=t.oxw();let o;t.xp6(1),t.Q6J("password",null!==(o=t.lcZ(2,1,r.selectPassword$))&&void 0!==o?o:"1234")}}let O=(()=>{class c{constructor(r){this.store=r,this.selectedOrderDetails$=this.store.select(l.selectOrderDetailsOfSelectedOrder),this.selectPassword$=this.store.select(e.v$)}cancelOrder(r){return console.log("cancel capture out of dialog"),this.store.dispatch((0,l.cancelOrder)({orderId:r.id,shouldPrint:!1})),"this. will send the action to store.s"}static#e=this.\u0275fac=function(o){return new(o||c)(t.Y36(C.yh))};static#t=this.\u0275cmp=t.Xpm({type:c,selectors:[["hotel-orderapp-order-feature-order-cancel"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[["class","p-2",4,"ngIf"],[1,"p-2"],["btnText","CANCEL ORDER",3,"password","btnClicked"]],template:function(o,n){1&o&&(t.YNc(0,h,3,3,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,n.selectedOrderDetails$))},dependencies:[a.ez,a.O5,a.Ov,m.vr]})}return c})()},9891:(b,x,s)=>{s.r(x),s.d(x,{OrderappOrderFeatureProductCountComponent:()=>O});var a=s(6814),m=s(9347),l=s(8995),e=s(9212),t=s(4221);function C(c,v){if(1&c){const r=e.EpF();e.TgZ(0,"div",9),e.NdJ("click",function(){const u=e.CHM(r).$implicit,g=e.oxw();return e.KtG(g.buttonClick(u))}),e._uU(1),e.qZA()}if(2&c){const r=v.$implicit;e.xp6(1),e.hij(" ",r," ")}}const h=()=>[1,2,3,4,5,6,7,8,9];let O=(()=>{class c{constructor(r,o,n){this.data=r,this.dialogRef=o,this.store=n,this.selectedVariant=null,this.defaultCount=1,this.isPrestine=!0,this.currentCount=1,this.selectedModifiers=[],this.generatedKey="",this.initialKey="",this.selectedProduct=this.data.product,this.selectedVariant=this.data.selectedVariant??null,this.initialKey=this.selectedVariant?this.selectedProduct.id+"-"+this.selectedVariant.id:this.selectedProduct.id.toString(),this.generatedKey=this.initialKey}buttonClick(r){console.log(r);let o="";this.isPrestine?o=0===r?"10":r.toString():(o=this.currentCount.toString().concat(r.toString()),console.log(o)),this.isPrestine=!1,this.currentCount=+o}clearCount(){this.isPrestine=!0,this.currentCount=this.defaultCount}backSpaceCount(){this.currentCount=this.currentCount<10?this.defaultCount:+this.currentCount.toString().slice(0,-1)}addToCart(){this.store.dispatch((0,l.Xq)({item:{count:this.currentCount,product:this.selectedProduct,modifiers:this.selectedModifiers,variant:this.selectedVariant},key:this.generatedKey})),this.dialogRef.close()}modifierSelectionChange(r){let o="";const n=[];Object.entries(r).forEach(u=>{o=o+"-"+u[0]+"-"+u[1].id,n.push(u[1])}),this.selectedModifiers=n,console.log("key is ",o),this.generatedKey=this.selectedVariant?this.initialKey+"-"+this.selectedVariant.id+o:this.initialKey+o,console.log("selection chagned data",this.generatedKey)}static#e=this.\u0275fac=function(o){return new(o||c)(e.Y36(m.WI),e.Y36(m.so),e.Y36(t.yh))};static#t=this.\u0275cmp=e.Xpm({type:c,selectors:[["hotel-orderapp-order-feature-product-count"]],standalone:!0,features:[e.jDz],decls:20,vars:5,consts:[[1,"bg-gray-300","p-3"],[1,"max-w-md","mx-auto"],[1,"text-xl","font-semibold","text-center","pt-3","sm:text-2xl"],[1,"w-full","flex","justify-center","items-center"],[1,"sm:w-1/2","w-full","p-3"],[1,"w-full","g","p-3","grid","place-content-center"],[1,"text-xl","font-bold"],[1,"grid","grid-rows-4","grid-cols-3","gap-2","aspect-square"],["class","rounded-md bg-white drop-shadow border-2 border-gray-900 p-2 flex justify-center items-center font-bold",3,"click",4,"ngFor","ngForOf"],[1,"rounded-md","bg-white","drop-shadow","border-2","border-gray-900","p-2","flex","justify-center","items-center","font-bold",3,"click"],[1,"p-3","bg-green-700","text-white","rounded-full","w-full","text-center","font-bold","cursor-pointer",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),e._uU(8),e.qZA()(),e.TgZ(9,"div")(10,"div",7),e.YNc(11,C,2,1,"div",8),e.TgZ(12,"div",9),e.NdJ("click",function(){return n.clearCount()}),e._uU(13," CLR "),e.qZA(),e.TgZ(14,"div",9),e.NdJ("click",function(){return n.buttonClick(0)}),e._uU(15," 0 "),e.qZA(),e.TgZ(16,"div",9),e.NdJ("click",function(){return n.backSpaceCount()}),e._uU(17," BCK "),e.qZA()()()()(),e.TgZ(18,"div",10),e.NdJ("click",function(){return n.addToCart()}),e._uU(19," OK "),e.qZA()()()),2&o&&(e.xp6(3),e.AsE(" ",n.selectedProduct.name," ",n.selectedVariant?"- "+n.selectedVariant.name:""," "),e.xp6(5),e.hij(" ",n.isPrestine?1:n.currentCount," "),e.xp6(3),e.Q6J("ngForOf",e.DdM(4,h)))},dependencies:[a.ez,a.sg,m.Is],changeDetection:0})}return c})()},825:(b,x,s)=>{s.d(x,{S:()=>v});var a=s(6814),m=s(6223),l=s(5153),e=s(608),t=s(9212),C=s(4221);function h(r,o){if(1&r){const n=t.EpF();t.TgZ(0,"div",11),t.NdJ("click",function(){const Z=t.CHM(n).$implicit,i=t.oxw();return t.KtG(i.qickSearchNumberSelected(Z))}),t._uU(1),t.qZA()}if(2&r){const n=o.$implicit;t.xp6(1),t.hij(" ",n," ")}}function O(r,o){if(1&r){const n=t.EpF();t.TgZ(0,"div",13),t.NdJ("click",function(){const Z=t.CHM(n).$implicit,i=t.oxw(2);return t.KtG(i.qwickTermSelected(Z))}),t._uU(1),t.qZA()}if(2&r){const n=o.$implicit;t.xp6(1),t.hij(" ",n," ")}}function c(r,o){if(1&r&&(t.ynx(0),t.YNc(1,O,2,1,"div",12),t.BQk()),2&r){const n=o.ngIf;t.xp6(1),t.Q6J("ngForOf",n)}}let v=(()=>{class r{constructor(n){this.store=n,this.selectProductShortcuts$=this.store.select(e.FN),this.searchTerm=new m.NI(""),this.quickSearchNumbers=[1,2,3,4,5,6,7,8,9,0],this.quickSearchTerms=["chicken","beef","fish","butter","dum","biriyani","chilly","soup","nashif","masala","mutton","majboos","rice","rubiyan","nehar"],this.quickCreatedTerm=""}ngOnInit(){this.searchTerm.valueChanges.subscribe(n=>this.store.dispatch((0,l.ft)({searchTerm:n})))}clearSearchTerm(){this.quickCreatedTerm="",this.searchTerm.setValue("")}qickSearchNumberSelected(n){this.quickCreatedTerm=this.quickCreatedTerm+n.toString(),this.searchTerm.setValue(this.quickCreatedTerm)}qwickTermSelected(n){this.quickCreatedTerm=this.quickSearchTerms?this.quickCreatedTerm+" "+n.toString():n.toString(),this.searchTerm.setValue(this.quickCreatedTerm.trim())}static#e=this.\u0275fac=function(u){return new(u||r)(t.Y36(C.yh))};static#t=this.\u0275cmp=t.Xpm({type:r,selectors:[["hotel-orderapp-product-feature-search"]],standalone:!0,features:[t.jDz],decls:14,vars:5,consts:[[1,"relative","w-full","bg-white"],[1,"relative","block","w-full"],[1,"sr-only"],[1,"flex","justify-between"],["placeholder","Search","type","text","name","search",1,"border","border-slate-300","rounded-full","py-2","pl-4","w-full",3,"formControl"],[1,"h-28","overflow-y-scroll","border"],[1,"flex","p-2","gap-3","flex-wrap","sm:gap-4"],["class","px-2 py-1 text-center text-xs sm:text-base rounded-md bg-slate-400 font-bold cursor-pointer",3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"flex","p-2","gap-2","flex-wrap"],[1,"absolute","right-3","top-1","w-14","h-7","bg-teal-950","rounded-full","text-white","font-bold","text-lg","grid","place-items-center","hover:bg-red-900","cursor-pointer",3,"click"],[1,"px-2","py-1","text-center","text-xs","sm:text-base","rounded-md","bg-slate-400","font-bold","cursor-pointer",3,"click"],["class","px-2 py-1 text-center text-xs sm:text-base rounded-md bg-green-400 font-bold cursor-pointer",3,"click",4,"ngFor","ngForOf"],[1,"px-2","py-1","text-center","text-xs","sm:text-base","rounded-md","bg-green-400","font-bold","cursor-pointer",3,"click"]],template:function(u,g){1&u&&(t.TgZ(0,"div",0)(1,"label",1)(2,"span",2),t._uU(3,"Search"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"input",4),t.qZA(),t.TgZ(6,"div",5)(7,"div",6),t.YNc(8,h,2,1,"div",7)(9,c,2,1,"ng-container",8),t.ALo(10,"async"),t.qZA(),t._UZ(11,"div",9),t.qZA(),t.TgZ(12,"button",10),t.NdJ("click",function(){return g.clearSearchTerm()}),t._uU(13," X "),t.qZA()()),2&u&&(t.xp6(5),t.Q6J("formControl",g.searchTerm),t.xp6(3),t.Q6J("ngForOf",g.quickSearchNumbers),t.xp6(1),t.Q6J("ngIf",t.lcZ(10,3,g.selectProductShortcuts$)))},dependencies:[a.ez,a.sg,a.O5,a.Ov,m.u5,m.Fj,m.JJ,m.UX,m.oH]})}return r})()},5836:(b,x,s)=>{s.d(x,{vr:()=>Z,yH:()=>r,e:()=>h});var a=s(6814),l=(s(1528),s(3317)),e=s(9212);function t(i,T){if(1&i&&(e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e._uU(3),e.qZA(),e.TgZ(4,"div",5),e._uU(5),e.ALo(6,"timesago"),e.qZA(),e.TgZ(7,"div",6),e._uU(8),e.qZA(),e._UZ(9,"div",7),e.qZA(),e.TgZ(10,"div",8)(11,"div",7)(12,"div",9)(13,"span",10),e._uU(14),e.qZA()(),e.TgZ(15,"div",11),e._uU(16),e.qZA()()(),e.TgZ(17,"div",12),e._uU(18),e.qZA()()),2&i){const d=e.oxw();e.xp6(3),e.hij("Order ",d.order.orderNumber,""),e.xp6(2),e.hij(" ",e.lcZ(6,6,d.order.createdAt)," "),e.xp6(3),e.hij(" ",d.order.orderStatus," "),e.xp6(6),e.Oqu("table"===d.order.orderType?"Dine In":d.order.orderType),e.xp6(2),e.Oqu(d.displayCustomerOrTableName(d.order)),e.xp6(2),e.Oqu(d.order.user.name)}}function C(i,T){1&i&&(e.TgZ(0,"div"),e._uU(1,"No Order has passed as input"),e.qZA())}let h=(()=>{class i{displayCustomerOrTableName(d){const p=d.customer;return`${p?.firstName} - ${p?.lastName}`}static#e=this.\u0275fac=function(p){return new(p||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["hotel-order-list-item"]],inputs:{order:"order"},standalone:!0,features:[e.jDz],decls:3,vars:2,consts:[["class","rounded-md bg-white p-2",4,"ngIf","ngIfElse"],["noOrder",""],[1,"rounded-md","bg-white","p-2"],[1,"flex","w-full","flex-row","items-stretch"],[1,"font-bold","capitalize"],[1,"ml-2","border-l-2","text-sm","pl-2","font-light"],[1,"border-l-2","ml-2","px-2","text-xs","border-purple-900","bg-slate-200"],[1,"flex-grow"],[1,"flex","flex-row"],[1,"font-semibod"],[1,"font-semibold"],[1,"font-thin"],[1,"font-bold"]],template:function(p,f){if(1&p&&e.YNc(0,t,19,8,"div",0)(1,C,2,0,"ng-template",null,1,e.W1O),2&p){const _=e.MAs(2);e.Q6J("ngIf",f.order)("ngIfElse",_)}},dependencies:[a.ez,a.O5,l.UU]})}return i})();function O(i,T){if(1&i&&(e.TgZ(0,"div")(1,"div",2)(2,"div",13),e._uU(3),e.qZA(),e.TgZ(4,"div",14)(5,"div"),e._uU(6),e.qZA()(),e.TgZ(7,"div",15),e._uU(8),e.qZA(),e.TgZ(9,"div",16),e._uU(10),e.ALo(11,"decimalpointpipe"),e.qZA()()()),2&i){const d=T.$implicit,p=T.index;e.xp6(3),e.Oqu(p+1),e.xp6(3),e.Oqu(d.name),e.xp6(2),e.Oqu(d.count),e.xp6(2),e.hij(" ",e.lcZ(11,4,d.amount*d.count)," ")}}function c(i,T){if(1&i&&(e.TgZ(0,"div",9),e._UZ(1,"div",10),e.TgZ(2,"div",11),e._uU(3),e.qZA(),e.TgZ(4,"div",11),e._uU(5),e.ALo(6,"decimalpointpipe"),e.qZA()()),2&i){const d=T.$implicit;e.xp6(3),e.Oqu(d.taxName),e.xp6(2),e.Oqu(e.lcZ(6,2,d.value))}}function v(i,T){if(1&i&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3),e._uU(3,"SNO:"),e.qZA(),e.TgZ(4,"div",4),e._uU(5,"Item Name:"),e.qZA(),e.TgZ(6,"div",5),e._uU(7,"Qty:"),e.qZA(),e.TgZ(8,"div",6),e._uU(9,"Tot:"),e.qZA()(),e.YNc(10,O,12,6,"div",7),e._UZ(11,"div",8),e.TgZ(12,"div",9),e._UZ(13,"div",10),e.TgZ(14,"div",11),e._uU(15,"Bill Total"),e.qZA(),e.TgZ(16,"div",11),e._uU(17),e.ALo(18,"decimalpointpipe"),e.qZA()(),e.YNc(19,c,7,4,"div",12),e.TgZ(20,"div",9),e._UZ(21,"div",10),e.TgZ(22,"div",11),e._uU(23,"Net Total"),e.qZA(),e.TgZ(24,"div",11),e._uU(25),e.ALo(26,"decimalpointpipe"),e.qZA()()()),2&i){const d=e.oxw();e.xp6(10),e.Q6J("ngForOf",d.selectedOrder.orderItems),e.xp6(7),e.hij(" ",e.lcZ(18,4,d.selectedOrder.totalAmount)," "),e.xp6(2),e.Q6J("ngForOf",d.selectedOrder.appliedTaxes),e.xp6(6),e.hij(" ",e.lcZ(26,6,d.selectedOrder.taxedTotal)," ")}}let r=(()=>{class i{static#e=this.\u0275fac=function(p){return new(p||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["hotel-order-items-reciept-view"]],inputs:{selectedOrder:"selectedOrder"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","mt-2 border border-gray-400 p-2 max-w-md max-h-sm overflow-y-auto",4,"ngIf"],[1,"mt-2","border","border-gray-400","p-2","max-w-md","max-h-sm","overflow-y-auto"],[1,"grid","grid-cols-12","gap-2","py-1"],[1,"col-span-1","text-xs","font-bold"],[1,"col-span-6","text-xs","font-bold"],[1,"col-span-3","text-xs","font-bold"],[1,"col-span-2","text-xs","font-bold"],[4,"ngFor","ngForOf"],[1,"my-2","h-[1px]","w-full","bg-gray-600"],[1,"grid","grid-cols-4","pt-2"],[1,"col-span-2"],[1,"col-span-1"],["class","grid grid-cols-4 pt-2",4,"ngFor","ngForOf"],[1,"col-span-1","text-xs"],[1,"col-span-6","text-xs"],[1,"col-span-3","text-xs"],[1,"col-span-2","text-xs"]],template:function(p,f){1&p&&e.YNc(0,v,27,8,"div",0),2&p&&e.Q6J("ngIf",f.selectedOrder)},dependencies:[a.ez,a.sg,a.O5,l.iM]})}return i})();var o=s(6223);function n(i,T){if(1&i){const d=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(){const _=e.CHM(d).$implicit,y=e.oxw();return e.KtG(y.itemClicked(_))}),e._uU(1),e.qZA()}if(2&i){const d=T.$implicit;e.xp6(1),e.hij(" ",d," ")}}const u=()=>[1,2,3,4,5,6,7,8,9,0],g=i=>({"bg-green-700":i});let Z=(()=>{class i{constructor(){this.enteredPassword="",this.btnClicked=new e.vpe}itemClicked(d){this.enteredPassword=this.enteredPassword.concat(d.toString()),console.log(this.enteredPassword)}cancelOrder(){console.log("cancel order clicked"),this.btnClicked.emit(!0)}static#e=this.\u0275fac=function(p){return new(p||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["hotel-cancel-order-confirm"]],inputs:{password:"password",btnText:"btnText"},outputs:{btnClicked:"btnClicked"},standalone:!0,features:[e.jDz],decls:7,vars:8,consts:[[1,"p-2","rounded-md"],[1,"p-2","flex","flex-wrap","gap-3"],["class","h-7 w-7 cursor-pointer rounded-md bg-green-600 text-white flex items-center justify-center",3,"click",4,"ngFor","ngForOf"],[1,"p-2"],["type","password","placeholder","Enter Order Cancel Password",1,"py-2","px-2","border","rounded-md","w-full",3,"ngModel","ngModelChange"],[1,"bg-gray-700","text-white","py-1","px-2","rounded-full","w-full",3,"disabled","ngClass","click"],[1,"h-7","w-7","cursor-pointer","rounded-md","bg-green-600","text-white","flex","items-center","justify-center",3,"click"]],template:function(p,f){1&p&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,n,2,1,"div",2),e.qZA(),e.TgZ(3,"div",3)(4,"input",4),e.NdJ("ngModelChange",function(y){return f.enteredPassword=y}),e.qZA()(),e.TgZ(5,"button",5),e.NdJ("click",function(){return f.cancelOrder()}),e._uU(6),e.qZA()()),2&p&&(e.xp6(2),e.Q6J("ngForOf",e.DdM(5,u)),e.xp6(2),e.Q6J("ngModel",f.enteredPassword),e.xp6(1),e.Q6J("disabled",f.enteredPassword!==f.password)("ngClass",e.VKq(6,g,f.enteredPassword===f.password)),e.xp6(1),e.hij(" ",f.btnText," "))},dependencies:[a.ez,a.mk,a.sg,o.u5,o.Fj,o.JJ,o.On]})}return i})()}}]);