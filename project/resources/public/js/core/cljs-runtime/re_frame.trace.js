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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__24434){
var map__24435 = p__24434;
var map__24435__$1 = cljs.core.__destructure_map(map__24435);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24435__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24435__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24435__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24435__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__24436_24471 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__24437_24472 = null;
var count__24438_24473 = (0);
var i__24439_24474 = (0);
while(true){
if((i__24439_24474 < count__24438_24473)){
var vec__24454_24475 = chunk__24437_24472.cljs$core$IIndexed$_nth$arity$2(null,i__24439_24474);
var k_24476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24454_24475,(0),null);
var cb_24477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24454_24475,(1),null);
try{var G__24458_24478 = cljs.core.deref(re_frame.trace.traces);
(cb_24477.cljs$core$IFn$_invoke$arity$1 ? cb_24477.cljs$core$IFn$_invoke$arity$1(G__24458_24478) : cb_24477.call(null,G__24458_24478));
}catch (e24457){var e_24479 = e24457;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24476,"while storing",cljs.core.deref(re_frame.trace.traces),e_24479], 0));
}

var G__24480 = seq__24436_24471;
var G__24481 = chunk__24437_24472;
var G__24482 = count__24438_24473;
var G__24483 = (i__24439_24474 + (1));
seq__24436_24471 = G__24480;
chunk__24437_24472 = G__24481;
count__24438_24473 = G__24482;
i__24439_24474 = G__24483;
continue;
} else {
var temp__5823__auto___24484 = cljs.core.seq(seq__24436_24471);
if(temp__5823__auto___24484){
var seq__24436_24485__$1 = temp__5823__auto___24484;
if(cljs.core.chunked_seq_QMARK_(seq__24436_24485__$1)){
var c__5548__auto___24486 = cljs.core.chunk_first(seq__24436_24485__$1);
var G__24487 = cljs.core.chunk_rest(seq__24436_24485__$1);
var G__24488 = c__5548__auto___24486;
var G__24489 = cljs.core.count(c__5548__auto___24486);
var G__24490 = (0);
seq__24436_24471 = G__24487;
chunk__24437_24472 = G__24488;
count__24438_24473 = G__24489;
i__24439_24474 = G__24490;
continue;
} else {
var vec__24460_24491 = cljs.core.first(seq__24436_24485__$1);
var k_24492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24460_24491,(0),null);
var cb_24493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24460_24491,(1),null);
try{var G__24465_24494 = cljs.core.deref(re_frame.trace.traces);
(cb_24493.cljs$core$IFn$_invoke$arity$1 ? cb_24493.cljs$core$IFn$_invoke$arity$1(G__24465_24494) : cb_24493.call(null,G__24465_24494));
}catch (e24463){var e_24495 = e24463;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24492,"while storing",cljs.core.deref(re_frame.trace.traces),e_24495], 0));
}

var G__24496 = cljs.core.next(seq__24436_24485__$1);
var G__24497 = null;
var G__24498 = (0);
var G__24499 = (0);
seq__24436_24471 = G__24496;
chunk__24437_24472 = G__24497;
count__24438_24473 = G__24498;
i__24439_24474 = G__24499;
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
