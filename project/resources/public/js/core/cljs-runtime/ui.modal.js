goog.provide('ui.modal');
ui.modal.modal_overlay_style = (function ui$modal$modal_overlay_style(){

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"backdrop-filter","backdrop-filter",-735928241),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937)],["center","fadeIn 0.2s ease-out",(0),(0),"rgba(0, 0, 0, 0.6)","blur(4px)",(1000),"center",(0),"flex","fixed",(0)]);
});
ui.modal.modal_content_style = (function ui$modal$modal_content_style(){

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["480px","0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","90vh","scale(1)","slideIn 0.2s ease-out","auto","white","640px","2rem","16px"]);
});
/**
 * Modal header with title and optional subtitle
 */
ui.modal.modal_header = (function ui$modal$modal_header(p__27750){
var map__27751 = p__27750;
var map__27751__$1 = cljs.core.__destructure_map(map__27751);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27751__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27751__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2rem",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"1rem",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),title], null),(cljs.core.truth_(subtitle)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5rem 0 0 0"], null)], null),subtitle], null):null)], null);
});
/**
 * Modal footer with action buttons
 */
ui.modal.modal_footer = (function ui$modal$modal_footer(var_args){
var args__5755__auto__ = [];
var len__5749__auto___27787 = arguments.length;
var i__5750__auto___27788 = (0);
while(true){
if((i__5750__auto___27788 < len__5749__auto___27787)){
args__5755__auto__.push((arguments[i__5750__auto___27788]));

var G__27789 = (i__5750__auto___27788 + (1));
i__5750__auto___27788 = G__27789;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return ui.modal.modal_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(ui.modal.modal_footer.cljs$core$IFn$_invoke$arity$variadic = (function (buttons){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.75rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2.5rem",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"2rem",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #e5e7eb",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end"], null)], null),(function (){var iter__5503__auto__ = (function ui$modal$iter__27753(s__27754){
return (new cljs.core.LazySeq(null,(function (){
var s__27754__$1 = s__27754;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__27754__$1);
if(temp__5823__auto__){
var s__27754__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27754__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27754__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27756 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27755 = (0);
while(true){
if((i__27755 < size__5502__auto__)){
var vec__27757 = cljs.core._nth(c__5501__auto__,i__27755);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757,(0),null);
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757,(1),null);
cljs.core.chunk_append(b__27756,button);

var G__27790 = (i__27755 + (1));
i__27755 = G__27790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27756),ui$modal$iter__27753(cljs.core.chunk_rest(s__27754__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27756),null);
}
} else {
var vec__27760 = cljs.core.first(s__27754__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27760,(0),null);
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27760,(1),null);
return cljs.core.cons(button,ui$modal$iter__27753(cljs.core.rest(s__27754__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,buttons));
})()], null);
}));

(ui.modal.modal_footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui.modal.modal_footer.cljs$lang$applyTo = (function (seq27752){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27752));
}));

/**
 * Reusable modal component with overlay, content, and optional close on backdrop click
 */
ui.modal.modal = (function ui$modal$modal(var_args){
var args__5755__auto__ = [];
var len__5749__auto___27791 = arguments.length;
var i__5750__auto___27792 = (0);
while(true){
if((i__5750__auto___27792 < len__5749__auto___27791)){
args__5755__auto__.push((arguments[i__5750__auto___27792]));

var G__27793 = (i__5750__auto___27792 + (1));
i__5750__auto___27792 = G__27793;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return ui.modal.modal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(ui.modal.modal.cljs$core$IFn$_invoke$arity$variadic = (function (p__27765,content){
var map__27766 = p__27765;
var map__27766__$1 = cljs.core.__destructure_map(map__27766);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var close_on_backdrop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766__$1,new cljs.core.Keyword(null,"close-on-backdrop?","close-on-backdrop?",313135575));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),ui.modal.modal_overlay_style(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_((function (){var and__5023__auto__ = close_on_backdrop_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return on_close;
} else {
return and__5023__auto__;
}
})())?(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target,e.currentTarget)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
}):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),ui.modal.modal_content_style()], null),(function (){var iter__5503__auto__ = (function ui$modal$iter__27771(s__27772){
return (new cljs.core.LazySeq(null,(function (){
var s__27772__$1 = s__27772;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__27772__$1);
if(temp__5823__auto__){
var s__27772__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27772__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27772__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27774 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27773 = (0);
while(true){
if((i__27773 < size__5502__auto__)){
var vec__27779 = cljs.core._nth(c__5501__auto__,i__27773);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27779,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27779,(1),null);
cljs.core.chunk_append(b__27774,child);

var G__27794 = (i__27773 + (1));
i__27773 = G__27794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27774),ui$modal$iter__27771(cljs.core.chunk_rest(s__27772__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27774),null);
}
} else {
var vec__27782 = cljs.core.first(s__27772__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27782,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27782,(1),null);
return cljs.core.cons(child,ui$modal$iter__27771(cljs.core.rest(s__27772__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,content));
})()], null)], null);
}));

(ui.modal.modal.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ui.modal.modal.cljs$lang$applyTo = (function (seq27763){
var G__27764 = cljs.core.first(seq27763);
var seq27763__$1 = cljs.core.next(seq27763);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27764,seq27763__$1);
}));


//# sourceMappingURL=ui.modal.js.map
