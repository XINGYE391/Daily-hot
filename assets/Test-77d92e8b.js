import{d as a}from"./vuedraggable.umd-275992ff.js";import{_ as s,bt as o,U as t,a2 as e,Y as l,Q as n,X as i,J as r,a7 as d,Z as c,$ as g}from"./index-1a7e8788.js";const p=["vue.draggable","draggable","component","for","vue.js 2.0","based","on","Sortablejs"],u={name:"transition-example-2",display:"Transitions",order:7,components:{draggable:a},data:()=>({list:p.map(((a,s)=>({name:a,order:s+1}))),drag:!1}),methods:{sort(){this.list=this.list.sort(((a,s)=>a.order-s.order))}},computed:{dragOptions:()=>({animation:200,group:"description",disabled:!1,ghostClass:"ghost"})}},m={class:"row"},b={class:"col-2"},f={class:"col-6"},h=l("h3",null,"Transition",-1),v={class:"list-group-item"},y=["onClick"];const x=s(u,[["render",function(a,s,p,u,x,j){const k=o("draggable"),C=o("rawDisplayer");return t(),e("div",m,[l("div",b,[l("button",{class:"btn btn-secondary button",onClick:s[0]||(s[0]=(...a)=>j.sort&&j.sort(...a))}," To original order ")]),l("div",f,[h,n(k,r({class:"list-group",tag:"transition-group","component-data":{tag:"ul",type:"transition-group",name:x.drag?null:"flip-list"},modelValue:x.list,"onUpdate:modelValue":s[1]||(s[1]=a=>x.list=a)},j.dragOptions,{onStart:s[2]||(s[2]=a=>x.drag=!0),onEnd:s[3]||(s[3]=a=>x.drag=!1),"item-key":"order"}),{item:i((({element:a})=>[l("li",v,[l("i",{class:d(a.fixed?"fa fa-anchor":"glyphicon glyphicon-pushpin"),onClick:s=>a.fixed=!a.fixed,"aria-hidden":"true"},null,10,y),c(" "+g(a.name),1)])])),_:1},16,["component-data","modelValue"])]),n(C,{class:"col-3",value:x.list,title:"List"},null,8,["value"])])}]]);export{x as default};
