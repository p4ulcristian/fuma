goog.provide('ui.enhanced_button');
ui.enhanced_button.button_variant_styles = (function ui$enhanced_button$button_variant_styles(variant,disabled_QMARK_,loading_QMARK_){

var base_styles = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["0 1px 2px 0 rgba(0, 0, 0, 0.05)","0.875rem","all 0.2s ease-in-out","600",(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?"not-allowed":"pointer"),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?0.7:(1)),"0.75rem 1.25rem","0.025em","none","8px"]);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_styles,(function (){var G__14717 = variant;
var G__14717__$1 = (((G__14717 instanceof cljs.core.Keyword))?G__14717.fqn:null);
switch (G__14717__$1) {
case "primary":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?"#9ca3af":"#3b82f6"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"hover","hover",-341141711),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#2563eb",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 6px -1px rgba(0, 0, 0, 0.1)"], null))], null);

break;
case "secondary":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?"#f3f4f6":"white"),new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"hover","hover",-341141711),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#9ca3af"], null))], null);

break;
case "success":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?"#9ca3af":"#10b981"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"hover","hover",-341141711),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#059669",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 6px -1px rgba(0, 0, 0, 0.1)"], null))], null);

break;
case "danger":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?"#9ca3af":"#dc2626"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"hover","hover",-341141711),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#b91c1c",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 6px -1px rgba(0, 0, 0, 0.1)"], null))], null);

break;
case "warning":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?"#9ca3af":"#f59e0b"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"hover","hover",-341141711),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#d97706",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 6px -1px rgba(0, 0, 0, 0.1)"], null))], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?"#f3f4f6":"white"),new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"hover","hover",-341141711),(cljs.core.truth_((function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})())?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#9ca3af"], null))], null);

}
})()], 0));
});
/**
 * Enhanced button component with variants, loading states, and icons
 */
ui.enhanced_button.enhanced_button = (function ui$enhanced_button$enhanced_button(p__14735){
var map__14736 = p__14735;
var map__14736__$1 = cljs.core.__destructure_map(map__14736);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14736__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var full_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14736__$1,new cljs.core.Keyword(null,"full-width?","full-width?",1477288349));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14736__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14736__$1,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14736__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14736__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14736__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14736__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655));
var size_styles = (function (){var G__14737 = size;
var G__14737__$1 = (((G__14737 instanceof cljs.core.Keyword))?G__14737.fqn:null);
switch (G__14737__$1) {
case "sm":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null);

break;
case "lg":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 1.5rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem 1.25rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null);

}
})();
var button_styles = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.enhanced_button.button_variant_styles(variant,disabled_QMARK_,loading_QMARK_),size_styles,(cljs.core.truth_(full_width_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null):null)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_((function (){var and__5023__auto__ = on_click;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(disabled_QMARK_)) && (cljs.core.not(loading_QMARK_)));
} else {
return and__5023__auto__;
}
})())?on_click:null),new cljs.core.Keyword(null,"style","style",-496642736),button_styles], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem"], null)], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"1rem",new cljs.core.Keyword(null,"height","height",1025178622),"1rem",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid transparent",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid currentColor",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"animation","animation",-1248293244),"spin 1s linear infinite"], null)], null)], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = icon;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(loading_QMARK_);
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),icon], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__5025__auto__ = text;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return children;
}
})()], null)], null)], null);
});
/**
 * Group of buttons with consistent spacing
 */
ui.enhanced_button.button_group = (function ui$enhanced_button$button_group(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14798 = arguments.length;
var i__5750__auto___14799 = (0);
while(true){
if((i__5750__auto___14799 < len__5749__auto___14798)){
args__5755__auto__.push((arguments[i__5750__auto___14799]));

var G__14803 = (i__5750__auto___14799 + (1));
i__5750__auto___14799 = G__14803;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return ui.enhanced_button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(ui.enhanced_button.button_group.cljs$core$IFn$_invoke$arity$variadic = (function (p__14755,buttons){
var map__14756 = p__14755;
var map__14756__$1 = cljs.core.__destructure_map(map__14756);
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14756__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14756__$1,new cljs.core.Keyword(null,"align","align",1964212802));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),(function (){var or__5025__auto__ = gap;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "0.75rem";
}
})(),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),(function (){var G__14757 = align;
var G__14757__$1 = (((G__14757 instanceof cljs.core.Keyword))?G__14757.fqn:null);
switch (G__14757__$1) {
case "left":
return "flex-start";

break;
case "right":
return "flex-end";

break;
case "center":
return "center";

break;
default:
return "flex-start";

}
})()], null)], null),(function (){var iter__5503__auto__ = (function ui$enhanced_button$iter__14762(s__14763){
return (new cljs.core.LazySeq(null,(function (){
var s__14763__$1 = s__14763;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__14763__$1);
if(temp__5823__auto__){
var s__14763__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14763__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__14763__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__14765 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__14764 = (0);
while(true){
if((i__14764 < size__5502__auto__)){
var button = cljs.core._nth(c__5501__auto__,i__14764);
cljs.core.chunk_append(b__14765,button);

var G__14809 = (i__14764 + (1));
i__14764 = G__14809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14765),ui$enhanced_button$iter__14762(cljs.core.chunk_rest(s__14763__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14765),null);
}
} else {
var button = cljs.core.first(s__14763__$2);
return cljs.core.cons(button,ui$enhanced_button$iter__14762(cljs.core.rest(s__14763__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(buttons);
})()], null);
}));

(ui.enhanced_button.button_group.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ui.enhanced_button.button_group.cljs$lang$applyTo = (function (seq14748){
var G__14749 = cljs.core.first(seq14748);
var seq14748__$1 = cljs.core.next(seq14748);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14749,seq14748__$1);
}));

/**
 * Icon-only button variant
 */
ui.enhanced_button.icon_button = (function ui$enhanced_button$icon_button(p__14773){
var map__14775 = p__14773;
var map__14775__$1 = cljs.core.__destructure_map(map__14775);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14775__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14775__$1,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14775__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14775__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14775__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14775__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14775__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var size_styles = (function (){var G__14778 = size;
var G__14778__$1 = (((G__14778 instanceof cljs.core.Keyword))?G__14778.fqn:null);
switch (G__14778__$1) {
case "sm":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"width","width",-384071477),"2rem",new cljs.core.Keyword(null,"height","height",1025178622),"2rem"], null);

break;
case "lg":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem",new cljs.core.Keyword(null,"width","width",-384071477),"3rem",new cljs.core.Keyword(null,"height","height",1025178622),"3rem"], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.625rem",new cljs.core.Keyword(null,"width","width",-384071477),"2.5rem",new cljs.core.Keyword(null,"height","height",1025178622),"2.5rem"], null);

}
})();
var button_styles = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.enhanced_button.button_variant_styles(variant,disabled_QMARK_,loading_QMARK_),size_styles,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5025__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return loading_QMARK_;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_((function (){var and__5023__auto__ = on_click;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(disabled_QMARK_)) && (cljs.core.not(loading_QMARK_)));
} else {
return and__5023__auto__;
}
})())?on_click:null),new cljs.core.Keyword(null,"title","title",636505583),tooltip,new cljs.core.Keyword(null,"style","style",-496642736),button_styles], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"1rem",new cljs.core.Keyword(null,"height","height",1025178622),"1rem",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid transparent",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid currentColor",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"animation","animation",-1248293244),"spin 1s linear infinite"], null)], null)], null):icon)], null);
});

//# sourceMappingURL=ui.enhanced_button.js.map
