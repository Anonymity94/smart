import{d as F,Z as S,c as m,X as j,G as d,h as s,p as M,W as U,F as G,P as N,a0 as V}from"./entry.82983d8d.js";import{W as X}from"./button.7c3ba272.js";import{r as Z,v as q}from"./index.d2421613.js";var z=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},H=F({compatConfig:{MODE:3},name:"ACheckableTag",props:z(),setup:function(e,i){var o=i.slots,r=i.emit,p=S("tag",e),u=p.prefixCls,l=function(f){var v=e.checked;r("update:checked",!v),r("change",!v),r("click",f)},g=m(function(){var a;return j(u.value,(a={},d(a,"".concat(u.value,"-checkable"),!0),d(a,"".concat(u.value,"-checkable-checked"),e.checked),a))});return function(){var a;return s("span",{class:g.value,onClick:l},[(a=o.default)===null||a===void 0?void 0:a.call(o)])}}});const h=H;var J=new RegExp("^(".concat(Z.join("|"),")(-inverse)?$")),K=new RegExp("^(".concat(q.join("|"),")$")),L=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:N.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:N.any}},C=F({compatConfig:{MODE:3},name:"ATag",props:L(),slots:["closeIcon","icon"],setup:function(e,i){var o=i.slots,r=i.emit,p=i.attrs,u=S("tag",e),l=u.prefixCls,g=u.direction,a=M(!0);U(function(){e.visible!==void 0&&(a.value=e.visible)});var f=function(t){t.stopPropagation(),r("update:visible",!1),r("close",t),!t.defaultPrevented&&e.visible===void 0&&(a.value=!1)},v=m(function(){var n=e.color;return n?J.test(n)||K.test(n):!1}),E=m(function(){var n;return j(l.value,(n={},d(n,"".concat(l.value,"-").concat(e.color),v.value),d(n,"".concat(l.value,"-has-color"),e.color&&!v.value),d(n,"".concat(l.value,"-hidden"),!a.value),d(n,"".concat(l.value,"-rtl"),g.value==="rtl"),n))});return function(){var n,t,k,b=e.icon,R=b===void 0?(n=o.icon)===null||n===void 0?void 0:n.call(o):b,y=e.color,_=e.closeIcon,P=_===void 0?(t=o.closeIcon)===null||t===void 0?void 0:t.call(o):_,x=e.closable,W=x===void 0?!1:x,w=function(){return W?P?s("span",{class:"".concat(l.value,"-close-icon"),onClick:f},[P]):s(V,{class:"".concat(l.value,"-close-icon"),onClick:f},null):null},B={backgroundColor:y&&!v.value?y:void 0},I=R||null,T=(k=o.default)===null||k===void 0?void 0:k.call(o),O=I?s(G,null,[I,s("span",null,[T])]):T,A="onClick"in p,$=s("span",{class:E.value,style:B},[O,w()]);return A?s(X,null,{default:function(){return[$]}}):$}}});C.CheckableTag=h;C.install=function(c){return c.component(C.name,C),c.component(h.name,h),c};export{C as T,h as _};
