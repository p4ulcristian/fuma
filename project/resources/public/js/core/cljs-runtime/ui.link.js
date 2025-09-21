goog.provide('ui.link');
ui.link.type_class = (function ui$link$type_class(p__14687){
var map__14688 = p__14687;
var map__14688__$1 = cljs.core.__destructure_map(map__14688);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14688__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__14689 = type;
var G__14689__$1 = (((G__14689 instanceof cljs.core.Keyword))?G__14689.fqn:null);
switch (G__14689__$1) {
case "primary":
return "input-primary";

break;
case "secondary":
return "input-secondary";

break;
case "warning":
return "input-warning";

break;
case "success":
return "input-success";

break;
default:
return "";

}
});
ui.link.mode_class = (function ui$link$mode_class(p__14690){
var map__14691 = p__14690;
var map__14691__$1 = cljs.core.__destructure_map(map__14691);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14691__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var G__14692 = mode;
var G__14692__$1 = (((G__14692 instanceof cljs.core.Keyword))?G__14692.fqn:null);
switch (G__14692__$1) {
case "outlined":
return "button-outlined";

break;
case "filled":
return "button-filled";

break;
case "clear":
return "button-clear";

break;
case "underlined":
return "button-underlined";

break;
default:
return "button-filled";

}
});
ui.link.link = (function ui$link$link(p__14693,content){
var map__14694 = p__14693;
var map__14694__$1 = cljs.core.__destructure_map(map__14694);
var input_props = map__14694__$1;
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14694__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14694__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14694__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14694__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14694__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var override = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14694__$1,new cljs.core.Keyword(null,"override","override",1422085626));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-button",ui.link.mode_class(input_props),ui.link.type_class(input_props)], null),new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(cljs.core.truth_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["--clr",color], null),style], 0))], null),override], 0)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),content)], null);
});
ui.link.view = (function ui$link$view(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14699 = arguments.length;
var i__5750__auto___14700 = (0);
while(true){
if((i__5750__auto___14700 < len__5749__auto___14699)){
args__5755__auto__.push((arguments[i__5750__auto___14700]));

var G__14701 = (i__5750__auto___14700 + (1));
i__5750__auto___14700 = G__14701;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return ui.link.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(ui.link.view.cljs$core$IFn$_invoke$arity$variadic = (function (input_props,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.link.link,input_props,content], null);
}));

(ui.link.view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ui.link.view.cljs$lang$applyTo = (function (seq14695){
var G__14696 = cljs.core.first(seq14695);
var seq14695__$1 = cljs.core.next(seq14695);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14696,seq14695__$1);
}));


//# sourceMappingURL=ui.link.js.map
