"use strict";(self.webpackChunkorderapp=self.webpackChunkorderapp||[]).push([[188],{188:(ee,f,n)=>{n.r(f),n.d(f,{OrderappBackofficeFeatureProductManageComponent:()=>W});var l=n(6814),e=n(9212),m=n(5153),h=n(9347),r=n(6223),x=n(7787),A=n(3177),u=n(4221);function Z(i,o){if(1&i&&(e.TgZ(0,"option",19),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function T(i,o){if(1&i&&(e.TgZ(0,"div",2)(1,"div",3),e._uU(2,"category"),e.qZA(),e.TgZ(3,"div",4)(4,"select",17),e.YNc(5,Z,2,2,"option",18),e.qZA()()()),2&i){const t=o.ngIf;e.xp6(5),e.Q6J("ngForOf",t)}}function C(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"Adding...."),e.qZA())}const I=i=>({"bg-green-400":i});function F(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.addProduct())}),e._uU(1),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("disabled",!t.productAddForm.valid)("ngClass",e.VKq(3,I,t.productAddForm.valid)),e.xp6(1),e.hij(" ",t.data&&t.data.product?"UPDATE":"ADD"," ")}}let w=(()=>{class i{constructor(t,d,c,a){this.store=t,this.data=d,this.dialog=c,this.dialogRef=a,this.selectCategories$=this.store.select(x.us),this.selectAddProductIndicator$=this.store.select(m.Me),this.productAddForm=new r.cw({name:new r.NI("",{validators:[r.kI.required]}),code:new r.NI("",{validators:[r.kI.required]}),secondaryLanguageName:new r.NI("",{validators:[r.kI.required]}),description:new r.NI("None"),price:new r.NI("",{validators:[r.kI.required]}),cost:new r.NI("",{validators:[r.kI.required]}),categoryId:new r.NI("",{validators:[r.kI.required]}),collectionId:new r.NI("1",{validators:[r.kI.required]}),qwickViewOrder:new r.NI("",{validators:[r.kI.required]}),printName:new r.NI("",{validators:[r.kI.required]}),color:new r.NI("#E91E63",{validators:[r.kI.required]})})}ngOnInit(){const t=this.data?.product;console.log("product t edit",t),t&&this.productAddForm.patchValue(t)}addProduct(){if(this.productAddForm.valid)if(this.data&&this.data.product)this.store.dispatch((0,m.nM)({productId:this.data.product.id,product:this.productAddForm.value}));else{const t={...this.productAddForm.value};this.store.dispatch((0,m.gK)({product:t}))}}static#e=this.\u0275fac=function(d){return new(d||i)(e.Y36(u.yh),e.Y36(h.WI),e.Y36(h.uw),e.Y36(h.so))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["hotel-orderapp-product-feature-add"]],standalone:!0,features:[e.jDz],decls:49,vars:8,consts:[[1,"bg-gray-100","p-5","text-sm",3,"formGroup"],[1,"sm:grid","sm:grid-cols-2","sm:gap-x-2"],[1,"grid","grid-cols-4","bg-white","px-2","sm:col-span-1"],[1,"col-span-1","py-2"],[1,"col-span-3","border-l-2","p-2"],["type","text","placeholder","Product Name","formControlName","name",1,"ml-2","w-full","rounded-md","border","p-2"],["type","text","placeholder","Print Name","formControlName","printName",1,"ml-2","w-full","rounded-md","border","p-2"],["type","text","placeholder","Product Code","formControlName","code",1,"ml-2","w-full","rounded-md","border","p-2"],["type","text","placeholder","Qwikview Number","formControlName","qwickViewOrder",1,"ml-2","w-full","rounded-md","border","p-2"],["type","text","placeholder","Other Language","formControlName","secondaryLanguageName",1,"ml-2","w-full","rounded-md","border","p-2"],["type","text","placeholder","Description","formControlName","description",1,"ml-2","w-full","rounded-md","border","p-2"],[1,"mt-2","sm:mt-0","sm:grid","sm:grid-cols-2","sm:gap-x-2"],["class","grid grid-cols-4 bg-white px-2 sm:col-span-1",4,"ngIf"],["type","text","placeholder","Selling rate","formControlName","price",1,"ml-2","w-full","rounded-md","border","p-2"],["type","text","placeholder","Cost","formControlName","cost",1,"ml-2","w-full","rounded-md","border","p-2"],[4,"ngIf","ngIfElse"],["addNew",""],["formControlName","categoryId",1,"ml-2","w-full","rounded-md","border","p-2"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","submit",1,"bg-gray-700","w-full","my-5","text-white","rounded-full","py-1",3,"disabled","ngClass","click"]],template:function(d,c){if(1&d&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4,"Product Name"),e.qZA(),e.TgZ(5,"div",4),e._UZ(6,"input",5),e.qZA()(),e.TgZ(7,"div",2)(8,"div",3),e._uU(9,"Print Name"),e.qZA(),e.TgZ(10,"div",4),e._UZ(11,"input",6),e.qZA()(),e.TgZ(12,"div",2)(13,"div",3),e._uU(14,"Code"),e.qZA(),e.TgZ(15,"div",4),e._UZ(16,"input",7),e.qZA()(),e.TgZ(17,"div",2)(18,"div",3),e._uU(19,"Qwik acces"),e.qZA(),e.TgZ(20,"div",4),e._UZ(21,"input",8),e.qZA()(),e.TgZ(22,"div",2)(23,"div",3),e._uU(24,"Other Language Name"),e.qZA(),e.TgZ(25,"div",4),e._UZ(26,"input",9),e.qZA()(),e.TgZ(27,"div",2)(28,"div",3),e._uU(29,"Description"),e.qZA(),e.TgZ(30,"div",4),e._UZ(31,"input",10),e.qZA()()(),e.TgZ(32,"div",11),e.YNc(33,T,6,1,"div",12),e.ALo(34,"async"),e.TgZ(35,"div",2)(36,"div",3),e._uU(37,"Selling Rate"),e.qZA(),e.TgZ(38,"div",4),e._UZ(39,"input",13),e.qZA()(),e.TgZ(40,"div",2)(41,"div",3),e._uU(42,"Cost"),e.qZA(),e.TgZ(43,"div",4),e._UZ(44,"input",14),e.qZA()()(),e.YNc(45,C,2,0,"div",15),e.ALo(46,"async"),e.YNc(47,F,2,5,"ng-template",null,16,e.W1O),e.qZA()),2&d){const a=e.MAs(48);e.Q6J("formGroup",c.productAddForm),e.xp6(33),e.Q6J("ngIf",e.lcZ(34,4,c.selectCategories$)),e.xp6(12),e.Q6J("ngIf",e.lcZ(46,6,c.selectAddProductIndicator$))("ngIfElse",a)}},dependencies:[l.ez,l.mk,l.sg,l.O5,l.Ov,r.UX,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.sg,r.u,A.To]})}return i})();n(1528);var q=n(4300),_=n(3680);const O=["switch"];function P(i,o){1&i&&(e.TgZ(0,"div",12),e.O4$(),e.TgZ(1,"svg",13),e._UZ(2,"path",14),e.qZA(),e.TgZ(3,"svg",15),e._UZ(4,"path",16),e.qZA()())}const N=["*"],U=new e.OlP("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1})}),L={provide:r.JU,useExisting:(0,e.Gpc)(()=>v),multi:!0};class b{constructor(o,t){this.source=o,this.checked=t}}let M=0,v=(()=>{class i{_createChangeEvent(t){return new b(this,t)}get buttonId(){return`${this.id||this._uniqueId}-button`}focus(){this._switchElement.nativeElement.focus()}get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}get inputId(){return`${this.id||this._uniqueId}-input`}constructor(t,d,c,a,s,g){this._elementRef=t,this._focusMonitor=d,this._changeDetectorRef=c,this.defaults=s,this._onChange=ie=>{},this._onTouched=()=>{},this._checked=!1,this.name=null,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.disabled=!1,this.disableRipple=!1,this.tabIndex=0,this.change=new e.vpe,this.toggleChange=new e.vpe,this.tabIndex=parseInt(a)||0,this.color=s.color||"accent",this._noopAnimations="NoopAnimations"===g,this.id=this._uniqueId="mat-mdc-slide-toggle-"+ ++M,this.hideIcon=s.hideIcon??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{"keyboard"===t||"program"===t?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new b(this,this.checked)))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static#e=this.\u0275fac=function(d){return new(d||i)(e.Y36(e.SBq),e.Y36(q.tE),e.Y36(e.sBO),e.$8M("tabindex"),e.Y36(U),e.Y36(e.QbO,8))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(d,c){if(1&d&&e.Gf(O,5),2&d){let a;e.iGM(a=e.CRH())&&(c._switchElement=a.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(d,c){2&d&&(e.Ikx("id",c.id),e.uIk("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),e.Tol(c.color?"mat-"+c.color:""),e.ekj("mat-mdc-slide-toggle-focused",c._focused)("mat-mdc-slide-toggle-checked",c.checked)("_mat-animation-noopable",c._noopAnimations))},inputs:{disabled:["disabled","disabled",e.VuI],disableRipple:["disableRipple","disableRipple",e.VuI],color:"color",tabIndex:["tabIndex","tabIndex",t=>null==t?0:(0,e.Cb_)(t)],name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],required:["required","required",e.VuI],checked:["checked","checked",e.VuI],hideIcon:["hideIcon","hideIcon",e.VuI]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[e._Bn([L]),e.Xq5],ngContentSelectors:N,decls:13,vars:25,consts:[[1,"mdc-form-field"],["role","switch","type","button",1,"mdc-switch",3,"tabIndex","disabled","click"],["switch",""],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],["class","mdc-switch__icons"],[1,"mdc-label",3,"for","click"],[1,"mdc-switch__icons"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(d,c){if(1&d&&(e.F$t(),e.TgZ(0,"div",0)(1,"button",1,2),e.NdJ("click",function(){return c._handleClick()}),e._UZ(3,"div",3),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6),e._UZ(7,"div",7),e.qZA(),e.TgZ(8,"div",8),e._UZ(9,"div",9),e.qZA(),e.YNc(10,P,5,0,"div",10),e.qZA()()(),e.TgZ(11,"label",11),e.NdJ("click",function(s){return s.stopPropagation()}),e.Hsn(12),e.qZA()()),2&d){const a=e.MAs(2);e.ekj("mdc-form-field--align-end","before"==c.labelPosition),e.xp6(1),e.ekj("mdc-switch--selected",c.checked)("mdc-switch--unselected",!c.checked)("mdc-switch--checked",c.checked)("mdc-switch--disabled",c.disabled),e.Q6J("tabIndex",c.disabled?-1:c.tabIndex)("disabled",c.disabled),e.uIk("id",c.buttonId)("name",c.name)("aria-label",c.ariaLabel)("aria-labelledby",c._getAriaLabelledBy())("aria-describedby",c.ariaDescribedby)("aria-required",c.required||null)("aria-checked",c.checked),e.xp6(8),e.Q6J("matRippleTrigger",a)("matRippleDisabled",c.disableRipple||c.disabled)("matRippleCentered",!0),e.xp6(1),e.um2(10,c.hideIcon?-1:10),e.xp6(1),e.Q6J("for",c.buttonId),e.uIk("id",c._labelId)}},dependencies:[_.wG],styles:['.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--mdc-elevation-overlay-color)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch[hidden]{display:none}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mdc-switch{width:var(--mdc-switch-track-width)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color)}.mdc-switch .mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation)}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:var(--mdc-switch-handle-height)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:var(--mdc-switch-disabled-handle-opacity)}.mdc-switch .mdc-switch__handle{border-radius:var(--mdc-switch-handle-shape)}.mdc-switch .mdc-switch__handle{width:var(--mdc-switch-handle-width)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - var(--mdc-switch-handle-width))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:var(--mdc-switch-selected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:var(--mdc-switch-unselected-icon-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size);height:var(--mdc-switch-selected-icon-size)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size);height:var(--mdc-switch-unselected-icon-size)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-hover-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-focus-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-pressed-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-hover-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-focus-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-pressed-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-selected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-selected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-unselected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch .mdc-switch__ripple{height:var(--mdc-switch-state-layer-size);width:var(--mdc-switch-state-layer-size)}.mdc-switch .mdc-switch__track{height:var(--mdc-switch-track-height)}.mdc-switch:disabled .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity)}.mdc-switch:enabled .mdc-switch__track::after{background:var(--mdc-switch-selected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color)}.mdc-switch:enabled .mdc-switch__track::before{background:var(--mdc-switch-unselected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color)}.mdc-switch .mdc-switch__track{border-radius:var(--mdc-switch-track-shape)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mat-mdc-slide-toggle .mdc-label{font-family:var(--mat-slide-toggle-label-text-font);font-size:var(--mat-slide-toggle-label-text-size);letter-spacing:var(--mat-slide-toggle-label-text-tracking);line-height:var(--mat-slide-toggle-label-text-line-height);font-weight:var(--mat-slide-toggle-label-text-weight)}.mat-mdc-slide-toggle{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle .mdc-switch__ripple::after{content:"";opacity:0}.mat-mdc-slide-toggle .mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:opacity 75ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-elevation-overlay,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}'],encapsulation:2,changeDetection:0})}return i})(),k=(()=>{class i{static#e=this.\u0275fac=function(d){return new(d||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({})}return i})(),J=(()=>{class i{static#e=this.\u0275fac=function(d){return new(d||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[k,_.BQ,_.si,k,_.BQ]})}return i})();var p=n(3305),z=n(617);function V(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1," Adding.... "),e.qZA())}const Y=i=>({"bg-green-400":i});function R(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.addVariant())}),e._uU(1),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("disabled",!t.variantAddForm.valid)("ngClass",e.VKq(3,Y,t.variantAddForm.valid)),e.xp6(1),e.hij(" ",t.data&&t.data.variant?"UPDATE":"ADD"," ")}}let y=(()=>{class i{constructor(t,d,c){this.store=t,this.data=d,this.dialogRef=c,this.selectAddVariantIndicator$=this.store.select(m.LM),this.variantAddForm=new r.cw({name:new r.NI("",{validators:[r.kI.required]}),price:new r.NI("",{validators:[r.kI.required]})})}ngOnInit(){const t=this.data?.variant;console.log("kitchen t edit",t),t&&this.variantAddForm.patchValue(t)}addVariant(){if(this.variantAddForm.valid)if(this.data&&this.data.variant)this.store.dispatch((0,m.Sz)({variantId:this.data.variant.id,variant:this.variantAddForm.value}));else{const t={...this.variantAddForm.value};this.store.dispatch((0,m.s6)({productId:this.data.productId,variant:t}))}}static#e=this.\u0275fac=function(d){return new(d||i)(e.Y36(u.yh),e.Y36(h.WI),e.Y36(h.so))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["hotel-orderapp-product-feature-variant-add"]],standalone:!0,features:[e.jDz],decls:17,vars:5,consts:[[1,"bg-gray-100","p-2"],[1,"mx-auto","grid","max-w-md","gap-2","bg-white","p-2"],[1,"mb-2","font-bold"],[3,"formGroup"],[1,"grid","gap-2"],["for","name"],["type","text","formControlName","name",1,"w-full","rounded-md","border","px-2","py-1"],["for","price"],["type","text","formControlName","price",1,"w-full","rounded-md","border","px-2","py-1"],[4,"ngIf","ngIfElse"],["addNew",""],["type","submit",1,"bg-gray-700","text-white","py-1","px-2","rounded-md","mt-3","w-full",3,"disabled","ngClass","click"]],template:function(d,c){if(1&d&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Add a Variant"),e.qZA(),e.TgZ(4,"form",3)(5,"div",4)(6,"label",5),e._uU(7,"Variant Name"),e.qZA(),e._UZ(8,"input",6),e.qZA(),e.TgZ(9,"div",4)(10,"label",7),e._uU(11,"Price"),e.qZA(),e._UZ(12,"input",8),e.qZA(),e.YNc(13,V,2,0,"div",9),e.ALo(14,"async"),e.YNc(15,R,2,5,"ng-template",null,10,e.W1O),e.qZA()()()),2&d){const a=e.MAs(16);e.xp6(4),e.Q6J("formGroup",c.variantAddForm),e.xp6(9),e.Q6J("ngIf",e.lcZ(14,3,c.selectAddVariantIndicator$))("ngIfElse",a)}},dependencies:[l.ez,l.mk,l.O5,l.Ov,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return i})();function j(i,o){1&i&&(e.TgZ(0,"div",2),e._uU(1," Loading\n"),e.qZA())}function Q(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",32)(1,"div",33),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw(2).$implicit,g=e.oxw(4);return e.KtG(g.editVariant(s.id,a))}),e._uU(2),e.qZA(),e.TgZ(3,"div",34),e._uU(4),e.qZA(),e._UZ(5,"div",26),e.TgZ(6,"div",35),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw(6);return e.KtG(s.deleteVariant(a.id))}),e._uU(7," X "),e.qZA()()}if(2&i){const t=o.$implicit;e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",t.price," ")}}function S(i,o){if(1&i&&(e.TgZ(0,"div",30),e.YNc(1,Q,8,2,"div",31),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t.variants)}}function G(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",17)(2,"div",18),e._uU(3),e.TgZ(4,"div",19)(5,"mat-slide-toggle",20),e.NdJ("change",function(){const a=e.CHM(t).$implicit,s=e.oxw(4);return e.KtG(s.updateAvalability(a))}),e.qZA()()()(),e.TgZ(6,"div",21)(7,"span",22),e._uU(8,"Code : "),e.qZA(),e._uU(9),e.qZA(),e.TgZ(10,"div",21)(11,"span",22),e._uU(12,"Price : "),e.qZA(),e._uU(13),e.qZA(),e.TgZ(14,"div",21)(15,"span",22),e._uU(16,"Quick Order : "),e.qZA(),e._uU(17),e.qZA(),e.YNc(18,S,2,1,"div",23),e.TgZ(19,"div",24)(20,"button",25),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw(4);return e.KtG(s.addVariant(a.id))}),e._uU(21," ADD VARIANT "),e.qZA(),e._UZ(22,"div",26),e.TgZ(23,"div",27)(24,"div",28),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw(4);return e.KtG(s.editProduct(a))}),e._uU(25," E "),e.qZA(),e.TgZ(26,"div",29),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw(4);return e.KtG(s.deactivatePrduct(a.id))}),e._uU(27," D "),e.qZA()()()()}if(2&i){const t=o.$implicit;e.xp6(3),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("checked",t.inStock),e.xp6(4),e.hij("",t.code," "),e.xp6(4),e.hij(" ",t.price," "),e.xp6(4),e.hij("",t.qwickViewOrder," "),e.xp6(1),e.Q6J("ngIf",t.variants.length>0)}}function $(i,o){if(1&i&&(e.TgZ(0,"mat-expansion-panel",11)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),e._uU(3),e.qZA()(),e.TgZ(4,"div",12)(5,"div",13)(6,"div",14),e.YNc(7,G,28,6,"div",15),e.qZA()()()()),2&i){const t=o.$implicit,d=e.oxw().ngIf,c=e.oxw(2);e.xp6(3),e.Oqu(t),e.xp6(4),e.Q6J("ngForOf",c.getProductsFromCategory(d,t))}}function B(i,o){if(1&i&&(e.TgZ(0,"div",9),e.YNc(1,$,8,2,"mat-expansion-panel",10),e.qZA()),2&i){const t=o.ngIf,d=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",d.getKeys(t))}}function K(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"button",5),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.accordion.openAll())}),e._uU(3," Expand All "),e.qZA(),e.TgZ(4,"button",5),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.accordion.closeAll())}),e._uU(5," Collapse All "),e.qZA(),e.TgZ(6,"button",6),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.addProduct())}),e._uU(7," ADD NEW PRODUCT "),e.qZA()(),e.TgZ(8,"mat-accordion",7),e.YNc(9,B,2,1,"div",8),e.ALo(10,"async"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(9),e.Q6J("ngIf",e.lcZ(10,1,t.productscategory$))}}let X=(()=>{class i{constructor(t,d){this.store=t,this.dialog=d,this.selectProducts$=this.store.select(m.qr),this.productscategory$=this.store.select((0,m.VE)("")),this.addBtnEvent=new e.vpe,this.selectProductFetchInProgressFlag$=this.store.select(m.P1)}editProduct(t){this.dialog.open(w,{data:{product:t}})}addProduct(){this.addBtnEvent.emit("product")}updateAvalability(t){this.store.dispatch((0,m.Bh)({productId:t.id,data:{fieldName:"inStock",value:!t.inStock}}))}addVariant(t){this.dialog.open(y,{data:{productId:t}})}deleteVariant(t){confirm("Do You want to delete the variant")&&this.store.dispatch((0,m.h)({variantId:t}))}editVariant(t,d){this.dialog.open(y,{data:{productId:t,variant:d}})}deactivatePrduct(t){confirm("Do You want to delete the product")&&this.store.dispatch((0,m.Ir)({productId:t}))}getProductsFromCategory(t,d){return t[d]}getKeys(t){return Object.keys(t)}static#e=this.\u0275fac=function(d){return new(d||i)(e.Y36(u.yh),e.Y36(h.uw))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["hotel-orderapp-product-feature-admin-list"]],viewQuery:function(d,c){if(1&d&&e.Gf(p.pp,5),2&d){let a;e.iGM(a=e.CRH())&&(c.accordion=a.first)}},outputs:{addBtnEvent:"addBtnEvent"},standalone:!0,features:[e.jDz],decls:4,vars:4,consts:[["class","h-24 flex justify-center items-center",4,"ngIf","ngIfElse"],["productList",""],[1,"h-24","flex","justify-center","items-center"],[1,"p-2"],[1,"flex","gap-4","justify-center","p-2"],[1,"border","p-2","rounded-md",3,"click"],[1,"bg-green-900","text-white","hover:bg-green-700","p-2","rounded-lg",3,"click"],["multi","",1,"example-headers-align"],["class","bg-gray-100",4,"ngIf"],[1,"bg-gray-100"],["expanded","",4,"ngFor","ngForOf"],["expanded",""],[1,"pt-4","px-2"],["id","{category}",1,"py-2"],[1,"grid","grid-cols-1","sm:grid-cols-3","md:grid-cols-4","gap-1","lg:grid-cols-6"],["class","rounded-md border p-2 flex flex-col gap-2",4,"ngFor","ngForOf"],[1,"rounded-md","border","p-2","flex","flex-col","gap-2"],[1,"border-b","pb-2","mt-1","font-semibold"],[1,"flex","justify-between"],[1,""],[3,"checked","change"],[1,"col-span-1"],[1,"font-thin","text-sm"],["class","p-2 border rounded-md",4,"ngIf"],[1,"flex","z-0"],[1,"flex","p-1","items-center","bg-green-400","justify-center","rounded-md","duration-500","hover:bg-green-200","text-xs",3,"click"],[1,"flex-grow"],[1,"flex","gap-4"],[1,"flex","h-6","w-6","items-center","bg-pink-300","hover:bg-pink-400","justify-center","border","rounded-full","p-2","cursor-pointer",3,"click"],[1,"flex","h-6","w-6","items-center","bg-orange-300","hover:bg-orange-400","justify-center","border","rounded-full","p-2","cursor-pointer",3,"click"],[1,"p-2","border","rounded-md"],["class","flex items-center",4,"ngFor","ngForOf"],[1,"flex","items-center"],[1,"hover:scale-110","hover:text-green-800","cursor-pointer","hover:underline",3,"click"],[1,"px-2","bg-gray-200","rounded-md","mx-2","transform"],[1,"flex","h-4","w-4","items-center","bg-gray-400","hover:bg-gray-300","justify-center","border","rounded-full","cursor-pointer",3,"click"]],template:function(d,c){if(1&d&&(e.YNc(0,j,2,0,"div",0),e.ALo(1,"async"),e.YNc(2,K,11,3,"ng-template",null,1,e.W1O)),2&d){const a=e.MAs(3);e.Q6J("ngIf",e.lcZ(1,2,c.selectProductFetchInProgressFlag$))("ngIfElse",a)}},dependencies:[l.ez,l.sg,l.O5,l.Ov,h.Is,J,v,p.To,p.pp,p.ib,p.yz,p.yK,z.Ps]})}return i})();var H=n(825);let W=(()=>{class i{constructor(t,d){this.dialog=t,this.store=d,this.store.dispatch((0,m.QD)())}ngOnDestroy(){this.store.dispatch((0,m.ft)({searchTerm:""}))}addProduct(){this.dialog.open(w,{})}static#e=this.\u0275fac=function(d){return new(d||i)(e.Y36(h.uw),e.Y36(u.yh))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["hotel-orderapp-backoffice-feature-product-manage"]],standalone:!0,features:[e.jDz],decls:6,vars:0,consts:[[1,"relative"],[1,"flex","z-50","bg-white","sticky","top-0","p-2"],[1,"z-50","w-full"],[3,"addBtnEvent"]],template:function(d,c){1&d&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"hotel-orderapp-product-feature-search"),e.qZA()(),e.TgZ(4,"div")(5,"hotel-orderapp-product-feature-admin-list",3),e.NdJ("addBtnEvent",function(){return c.addProduct()}),e.qZA()()())},dependencies:[l.ez,X,H.S]})}return i})()}}]);