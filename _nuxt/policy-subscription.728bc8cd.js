import{_ as Q}from"./index.eaa4735a.js";import{d as Y,p as m,D as z,o as _,g as f,j as s,F as x,q as k,h as t,w as o,u as n,i as b,a as A,s as F,t as g,v as G,x as H}from"./entry.82983d8d.js";import{I as K}from"./Input.cae9b861.js";import{_ as M,a as O,b as P,F as W}from"./EyeOutlined.afe76128.js";import{a as X}from"./objectDestructuringEmpty.56330231.js";import{B as Z}from"./button.7c3ba272.js";import{_ as ee}from"./index.8d89874c.js";import{_ as te}from"./index.e3b3266b.js";import{_ as oe}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.d2421613.js";import"./_flatRest.4b057b88.js";import"./isSymbol.39f0b10d.js";import"./useSize.a977b624.js";import"./TextArea.29ab9dbf.js";import"./collapseMotion.f35ea2f8.js";import"./KeyCode.e53a3216.js";import"./Overflow.c7ea50c3.js";import"./useState.c355fbb0.js";import"./DownOutlined.1f1b0e61.js";import"./SearchOutlined.ff8f0c58.js";import"./index.de3c7159.js";import"./ActionButton.abc6fef3.js";import"./eagerComputed.445b5f33.js";import"./LeftOutlined.d7e2665c.js";import"./RightOutlined.2c5efa6b.js";import"./zh_CN.1ca40490.js";import"./CaretDownOutlined.7cf30f04.js";import"./dropdown.5c21bddc.js";import"./index.6473827b.js";import"./index.c4501d96.js";const C=h=>(G("data-v-e4bfd68a"),h=h(),H(),h),ne={class:"subscription-section bg-white py-[22px] px-[46px] rounded-[8px] mb-[22px] flex flex-col gap-[20px] text-[14px]"},ae=C(()=>s("span",{class:"mr-[22px]"},"栏目：",-1)),ie=C(()=>s("span",{class:"mr-[22px]"},"来源：",-1)),le=C(()=>s("span",{class:"mr-[22px]"},"分类：",-1)),se={class:"bg-white py-[22px] px-[46px] rounded-[8px] mb-[22px]"},re={class:"bg-white rounded-[4px] overflow-hidden"},ce=Y({__name:"policy-subscription",setup(h){const L=[{id:"1",title:"政策解读"},{id:"2",title:"重要通知"},{id:"3",title:"优惠补贴"},{id:"4",title:"口岸动态"}],w=m([]),U=[{id:"1",title:"边检专区"},{id:"2",title:"海关专区"},{id:"3",title:"公安专区"},{id:"4",title:"其他"}],S=m([]),V=[{id:"1",title:"资质认证类"},{id:"2",title:"人员进出境类"},{id:"3",title:"货物进出境类"},{id:"4",title:"检验检疫类"}],I=m([]),D=m(),i=z({title:"",tab:"",type:"",source:""}),R=c=>{console.log("Received values of form: ",c),console.log("formState: ",i)},y=(c,a,u)=>{let r=m([]);c==="tab"&&(r=w),c==="source"&&(r=S),c==="type"&&(r=I);const p=u?[...r.value,a]:r.value.filter(d=>d!==a);console.log("You are interested in: ",p),r.value=p},B=[{id:"1",title:"关于咨询横琴政务中心地址的问题",create_time:"2023-05-28 00:19:04",tab:"政策解读",source:"海关专区"},{id:"2",title:"关于咨询横琴政务中心地址的问题",create_time:"2023-05-28 00:19:04",tab:"政策解读",source:"海关专区"},{id:"3",title:"关于咨询横琴政务中心地址的问题",create_time:"2023-05-28 00:19:04",tab:"政策解读",source:"海关专区"},{id:"4",title:"关于咨询横琴政务中心地址的问题",create_time:"2023-05-28 00:19:04",tab:"政策解读",source:"海关专区"}],N=[{title:"标题",dataIndex:"title",key:"title"},{title:"日期",dataIndex:"create_time",key:"create_time"},{title:"所属栏目",dataIndex:"tab",key:"tab"},{title:"来源",dataIndex:"source",key:"source"},{title:"操作",dataIndex:"action",key:"action"}],$=c=>{};return(c,a)=>{const u=Q,r=K,p=M,d=O,v=X,T=Z,j=P,q=W,E=ee,J=te;return _(),f(x,null,[s("div",ne,[s("div",null,[ae,(_(),f(x,null,k(L,e=>t(u,{key:e,checked:n(w).includes(e.id),onChange:l=>y("tab",e.id,l)},{default:o(()=>[b(g(e.title),1)]),_:2},1032,["checked","onChange"])),64))]),s("div",null,[ie,(_(),f(x,null,k(U,e=>t(u,{key:e,checked:n(S).includes(e.id),onChange:l=>y("source",e.id,l)},{default:o(()=>[b(g(e.title),1)]),_:2},1032,["checked","onChange"])),64))]),s("div",null,[le,(_(),f(x,null,k(V,e=>t(u,{key:e,checked:n(I).includes(e.id),onChange:l=>y("type",e.id,l)},{default:o(()=>[b(g(e.title),1)]),_:2},1032,["checked","onChange"])),64))])]),s("div",se,[t(q,{ref_key:"formRef",ref:D,name:"search",class:"search-form",model:n(i),onFinish:R},{default:o(()=>[t(j,{gutter:24},{default:o(()=>[t(d,{span:6},{default:o(()=>[t(p,{label:"标题"},{default:o(()=>[t(r,{value:n(i).title,"onUpdate:value":a[0]||(a[0]=e=>n(i).title=e),placeholder:"请输入"},null,8,["value"])]),_:1})]),_:1}),t(d,{span:5},{default:o(()=>[t(p,{label:"所属栏目"},{default:o(()=>[t(v,{value:n(i).tab,"onUpdate:value":a[1]||(a[1]=e=>n(i).tab=e),placeholder:"请选择"},null,8,["value"])]),_:1})]),_:1}),t(d,{span:5},{default:o(()=>[t(p,{label:"来源"},{default:o(()=>[t(v,{value:n(i).source,"onUpdate:value":a[2]||(a[2]=e=>n(i).source=e),placeholder:"请选择"},null,8,["value"])]),_:1})]),_:1}),t(d,{span:5},{default:o(()=>[t(p,{label:"分类"},{default:o(()=>[t(v,{value:n(i).type,"onUpdate:value":a[3]||(a[3]=e=>n(i).type=e),placeholder:"请选择"},null,8,["value"])]),_:1})]),_:1}),t(d,{span:3,style:{"text-align":"right"}},{default:o(()=>[t(T,{type:"primary","html-type":"submit"},{default:o(()=>[b("搜索")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),s("div",re,[t(J,{class:"search-table table-striped","data-source":B,columns:N,"row-class-name":(e,l)=>l%2===1?"table-row-striped":void 0,pagination:{position:["bottomCenter"],total:500,showQuickJumper:!0,showTotal:e=>`共${e}条`}},{bodyCell:o(({column:e,record:l})=>[e.key==="action"?(_(),f(x,{key:0},[B.length?(_(),A(E,{key:0,title:"确定删除吗？",onConfirm:pe=>$(l.key)},{default:o(()=>[t(T,{type:"link"},{default:o(()=>[b("删除")]),_:1})]),_:2},1032,["onConfirm"])):F("",!0)],64)):F("",!0)]),_:1},8,["row-class-name","pagination"])])],64)}}});const Qe=oe(ce,[["__scopeId","data-v-e4bfd68a"]]);export{Qe as default};
