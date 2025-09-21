goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__24527){
var map__24528 = p__24527;
var map__24528__$1 = cljs.core.__destructure_map(map__24528);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24528__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24528__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24528__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24528__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5025__auto__ = child_of;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__24539_24592 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__24540_24593 = null;
var count__24541_24594 = (0);
var i__24542_24595 = (0);
while(true){
if((i__24542_24595 < count__24541_24594)){
var vec__24561_24598 = chunk__24540_24593.cljs$core$IIndexed$_nth$arity$2(null,i__24542_24595);
var k_24599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24561_24598,(0),null);
var cb_24600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24561_24598,(1),null);
try{var G__24566_24601 = cljs.core.deref(re_frame.trace.traces);
(cb_24600.cljs$core$IFn$_invoke$arity$1 ? cb_24600.cljs$core$IFn$_invoke$arity$1(G__24566_24601) : cb_24600.call(null,G__24566_24601));
}catch (e24564){var e_24602 = e24564;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24599,"while storing",cljs.core.deref(re_frame.trace.traces),e_24602], 0));
}

var G__24604 = seq__24539_24592;
var G__24605 = chunk__24540_24593;
var G__24606 = count__24541_24594;
var G__24607 = (i__24542_24595 + (1));
seq__24539_24592 = G__24604;
chunk__24540_24593 = G__24605;
count__24541_24594 = G__24606;
i__24542_24595 = G__24607;
continue;
} else {
var temp__5823__auto___24608 = cljs.core.seq(seq__24539_24592);
if(temp__5823__auto___24608){
var seq__24539_24609__$1 = temp__5823__auto___24608;
if(cljs.core.chunked_seq_QMARK_(seq__24539_24609__$1)){
var c__5548__auto___24610 = cljs.core.chunk_first(seq__24539_24609__$1);
var G__24611 = cljs.core.chunk_rest(seq__24539_24609__$1);
var G__24612 = c__5548__auto___24610;
var G__24613 = cljs.core.count(c__5548__auto___24610);
var G__24614 = (0);
seq__24539_24592 = G__24611;
chunk__24540_24593 = G__24612;
count__24541_24594 = G__24613;
i__24542_24595 = G__24614;
continue;
} else {
var vec__24567_24616 = cljs.core.first(seq__24539_24609__$1);
var k_24617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24567_24616,(0),null);
var cb_24618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24567_24616,(1),null);
try{var G__24571_24620 = cljs.core.deref(re_frame.trace.traces);
(cb_24618.cljs$core$IFn$_invoke$arity$1 ? cb_24618.cljs$core$IFn$_invoke$arity$1(G__24571_24620) : cb_24618.call(null,G__24571_24620));
}catch (e24570){var e_24625 = e24570;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24617,"while storing",cljs.core.deref(re_frame.trace.traces),e_24625], 0));
}

var G__24626 = cljs.core.next(seq__24539_24609__$1);
var G__24627 = null;
var G__24628 = (0);
var G__24629 = (0);
seq__24539_24592 = G__24626;
chunk__24540_24593 = G__24627;
count__24541_24594 = G__24628;
i__24542_24595 = G__24629;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
