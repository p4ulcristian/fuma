goog.provide('ui.button');
ui.button.type_class = (function ui$button$type_class(p__26657){
var map__26658 = p__26657;
var map__26658__$1 = cljs.core.__destructure_map(map__26658);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26658__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__26659 = type;
var G__26659__$1 = (((G__26659 instanceof cljs.core.Keyword))?G__26659.fqn:null);
switch (G__26659__$1) {
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
ui.button.mode_class = (function ui$button$mode_class(p__26661){
var map__26662 = p__26661;
var map__26662__$1 = cljs.core.__destructure_map(map__26662);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26662__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var G__26664 = mode;
var G__26664__$1 = (((G__26664 instanceof cljs.core.Keyword))?G__26664.fqn:null);
switch (G__26664__$1) {
case "outlined":
return "button-outlined";

break;
case "filled":
return "button-filled";

break;
case "clear":
return "button-clear";

break;
case "clear_2":
return "button-clear-2";

break;
case "underlined":
return "button-underlined";

break;
default:
return "button-filled";

}
});
ui.button.button = (function ui$button$button(p__26668,content){
var map__26669 = p__26668;
var map__26669__$1 = cljs.core.__destructure_map(map__26669);
var input_props = map__26669__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var disable_effect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"disable-effect","disable-effect",-221540286));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var override = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"override","override",1422085626));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-button",ui.button.mode_class(input_props),ui.button.type_class(input_props),class$], null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["--clr",color], null),style], 0)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
return null;
}
})], null),override], 0)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),content)], null);
});
ui.button.view = (function ui$button$view(var_args){
var args__5755__auto__ = [];
var len__5749__auto___26675 = arguments.length;
var i__5750__auto___26676 = (0);
while(true){
if((i__5750__auto___26676 < len__5749__auto___26675)){
args__5755__auto__.push((arguments[i__5750__auto___26676]));

var G__26677 = (i__5750__auto___26676 + (1));
i__5750__auto___26676 = G__26677;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return ui.button.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(ui.button.view.cljs$core$IFn$_invoke$arity$variadic = (function (input_props,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.button.button,input_props,content], null);
}));

(ui.button.view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ui.button.view.cljs$lang$applyTo = (function (seq26670){
var G__26671 = cljs.core.first(seq26670);
var seq26670__$1 = cljs.core.next(seq26670);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26671,seq26670__$1);
}));


//# sourceMappingURL=ui.button.js.map
