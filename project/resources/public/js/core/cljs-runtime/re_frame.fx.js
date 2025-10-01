goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24837 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24838 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24838);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___24905 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___24905)){
var new_db_24906 = temp__5823__auto___24905;
var fexpr__24839_24907 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24839_24907.cljs$core$IFn$_invoke$arity$1 ? fexpr__24839_24907.cljs$core$IFn$_invoke$arity$1(new_db_24906) : fexpr__24839_24907.call(null,new_db_24906));
} else {
}

var seq__24840 = cljs.core.seq(effects_without_db);
var chunk__24841 = null;
var count__24842 = (0);
var i__24843 = (0);
while(true){
if((i__24843 < count__24842)){
var vec__24850 = chunk__24841.cljs$core$IIndexed$_nth$arity$2(null,i__24843);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24850,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24850,(1),null);
var temp__5821__auto___24908 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___24908)){
var effect_fn_24909 = temp__5821__auto___24908;
(effect_fn_24909.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24909.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24909.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24910 = seq__24840;
var G__24911 = chunk__24841;
var G__24912 = count__24842;
var G__24913 = (i__24843 + (1));
seq__24840 = G__24910;
chunk__24841 = G__24911;
count__24842 = G__24912;
i__24843 = G__24913;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24840);
if(temp__5823__auto__){
var seq__24840__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24840__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24840__$1);
var G__24914 = cljs.core.chunk_rest(seq__24840__$1);
var G__24915 = c__5548__auto__;
var G__24916 = cljs.core.count(c__5548__auto__);
var G__24917 = (0);
seq__24840 = G__24914;
chunk__24841 = G__24915;
count__24842 = G__24916;
i__24843 = G__24917;
continue;
} else {
var vec__24853 = cljs.core.first(seq__24840__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24853,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24853,(1),null);
var temp__5821__auto___24918 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___24918)){
var effect_fn_24919 = temp__5821__auto___24918;
(effect_fn_24919.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24919.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24919.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24920 = cljs.core.next(seq__24840__$1);
var G__24921 = null;
var G__24922 = (0);
var G__24923 = (0);
seq__24840 = G__24920;
chunk__24841 = G__24921;
count__24842 = G__24922;
i__24843 = G__24923;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__24410__auto___24924 = re_frame.interop.now();
var duration__24411__auto___24925 = (end__24410__auto___24924 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24411__auto___24925,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__24410__auto___24924);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24837);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___24926 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___24926)){
var new_db_24927 = temp__5823__auto___24926;
var fexpr__24856_24928 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24856_24928.cljs$core$IFn$_invoke$arity$1 ? fexpr__24856_24928.cljs$core$IFn$_invoke$arity$1(new_db_24927) : fexpr__24856_24928.call(null,new_db_24927));
} else {
}

var seq__24857 = cljs.core.seq(effects_without_db);
var chunk__24858 = null;
var count__24859 = (0);
var i__24860 = (0);
while(true){
if((i__24860 < count__24859)){
var vec__24867 = chunk__24858.cljs$core$IIndexed$_nth$arity$2(null,i__24860);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24867,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24867,(1),null);
var temp__5821__auto___24929 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___24929)){
var effect_fn_24930 = temp__5821__auto___24929;
(effect_fn_24930.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24930.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24930.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24931 = seq__24857;
var G__24932 = chunk__24858;
var G__24933 = count__24859;
var G__24934 = (i__24860 + (1));
seq__24857 = G__24931;
chunk__24858 = G__24932;
count__24859 = G__24933;
i__24860 = G__24934;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24857);
if(temp__5823__auto__){
var seq__24857__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24857__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24857__$1);
var G__24935 = cljs.core.chunk_rest(seq__24857__$1);
var G__24936 = c__5548__auto__;
var G__24937 = cljs.core.count(c__5548__auto__);
var G__24938 = (0);
seq__24857 = G__24935;
chunk__24858 = G__24936;
count__24859 = G__24937;
i__24860 = G__24938;
continue;
} else {
var vec__24870 = cljs.core.first(seq__24857__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24870,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24870,(1),null);
var temp__5821__auto___24939 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___24939)){
var effect_fn_24940 = temp__5821__auto___24939;
(effect_fn_24940.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24940.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24940.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24941 = cljs.core.next(seq__24857__$1);
var G__24942 = null;
var G__24943 = (0);
var G__24944 = (0);
seq__24857 = G__24941;
chunk__24858 = G__24942;
count__24859 = G__24943;
i__24860 = G__24944;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24873){
var map__24874 = p__24873;
var map__24874__$1 = cljs.core.__destructure_map(map__24874);
var effect = map__24874__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24874__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24874__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24875 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24876 = null;
var count__24877 = (0);
var i__24878 = (0);
while(true){
if((i__24878 < count__24877)){
var effect = chunk__24876.cljs$core$IIndexed$_nth$arity$2(null,i__24878);
re_frame.fx.dispatch_later(effect);


var G__24945 = seq__24875;
var G__24946 = chunk__24876;
var G__24947 = count__24877;
var G__24948 = (i__24878 + (1));
seq__24875 = G__24945;
chunk__24876 = G__24946;
count__24877 = G__24947;
i__24878 = G__24948;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24875);
if(temp__5823__auto__){
var seq__24875__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24875__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24875__$1);
var G__24949 = cljs.core.chunk_rest(seq__24875__$1);
var G__24950 = c__5548__auto__;
var G__24951 = cljs.core.count(c__5548__auto__);
var G__24952 = (0);
seq__24875 = G__24949;
chunk__24876 = G__24950;
count__24877 = G__24951;
i__24878 = G__24952;
continue;
} else {
var effect = cljs.core.first(seq__24875__$1);
re_frame.fx.dispatch_later(effect);


var G__24953 = cljs.core.next(seq__24875__$1);
var G__24954 = null;
var G__24955 = (0);
var G__24956 = (0);
seq__24875 = G__24953;
chunk__24876 = G__24954;
count__24877 = G__24955;
i__24878 = G__24956;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24879 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24880 = null;
var count__24881 = (0);
var i__24882 = (0);
while(true){
if((i__24882 < count__24881)){
var vec__24889 = chunk__24880.cljs$core$IIndexed$_nth$arity$2(null,i__24882);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24889,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24889,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___24957 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___24957)){
var effect_fn_24958 = temp__5821__auto___24957;
(effect_fn_24958.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24958.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24958.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24959 = seq__24879;
var G__24960 = chunk__24880;
var G__24961 = count__24881;
var G__24962 = (i__24882 + (1));
seq__24879 = G__24959;
chunk__24880 = G__24960;
count__24881 = G__24961;
i__24882 = G__24962;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24879);
if(temp__5823__auto__){
var seq__24879__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24879__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24879__$1);
var G__24963 = cljs.core.chunk_rest(seq__24879__$1);
var G__24964 = c__5548__auto__;
var G__24965 = cljs.core.count(c__5548__auto__);
var G__24966 = (0);
seq__24879 = G__24963;
chunk__24880 = G__24964;
count__24881 = G__24965;
i__24882 = G__24966;
continue;
} else {
var vec__24892 = cljs.core.first(seq__24879__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24892,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24892,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___24967 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___24967)){
var effect_fn_24968 = temp__5821__auto___24967;
(effect_fn_24968.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24968.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24968.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24969 = cljs.core.next(seq__24879__$1);
var G__24970 = null;
var G__24971 = (0);
var G__24972 = (0);
seq__24879 = G__24969;
chunk__24880 = G__24970;
count__24881 = G__24971;
i__24882 = G__24972;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24895 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24896 = null;
var count__24897 = (0);
var i__24898 = (0);
while(true){
if((i__24898 < count__24897)){
var event = chunk__24896.cljs$core$IIndexed$_nth$arity$2(null,i__24898);
re_frame.router.dispatch(event);


var G__24973 = seq__24895;
var G__24974 = chunk__24896;
var G__24975 = count__24897;
var G__24976 = (i__24898 + (1));
seq__24895 = G__24973;
chunk__24896 = G__24974;
count__24897 = G__24975;
i__24898 = G__24976;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24895);
if(temp__5823__auto__){
var seq__24895__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24895__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24895__$1);
var G__24977 = cljs.core.chunk_rest(seq__24895__$1);
var G__24978 = c__5548__auto__;
var G__24979 = cljs.core.count(c__5548__auto__);
var G__24980 = (0);
seq__24895 = G__24977;
chunk__24896 = G__24978;
count__24897 = G__24979;
i__24898 = G__24980;
continue;
} else {
var event = cljs.core.first(seq__24895__$1);
re_frame.router.dispatch(event);


var G__24981 = cljs.core.next(seq__24895__$1);
var G__24982 = null;
var G__24983 = (0);
var G__24984 = (0);
seq__24895 = G__24981;
chunk__24896 = G__24982;
count__24897 = G__24983;
i__24898 = G__24984;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24899 = cljs.core.seq(value);
var chunk__24900 = null;
var count__24901 = (0);
var i__24902 = (0);
while(true){
if((i__24902 < count__24901)){
var event = chunk__24900.cljs$core$IIndexed$_nth$arity$2(null,i__24902);
clear_event(event);


var G__24985 = seq__24899;
var G__24986 = chunk__24900;
var G__24987 = count__24901;
var G__24988 = (i__24902 + (1));
seq__24899 = G__24985;
chunk__24900 = G__24986;
count__24901 = G__24987;
i__24902 = G__24988;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24899);
if(temp__5823__auto__){
var seq__24899__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24899__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24899__$1);
var G__24989 = cljs.core.chunk_rest(seq__24899__$1);
var G__24990 = c__5548__auto__;
var G__24991 = cljs.core.count(c__5548__auto__);
var G__24992 = (0);
seq__24899 = G__24989;
chunk__24900 = G__24990;
count__24901 = G__24991;
i__24902 = G__24992;
continue;
} else {
var event = cljs.core.first(seq__24899__$1);
clear_event(event);


var G__24993 = cljs.core.next(seq__24899__$1);
var G__24994 = null;
var G__24995 = (0);
var G__24996 = (0);
seq__24899 = G__24993;
chunk__24900 = G__24994;
count__24901 = G__24995;
i__24902 = G__24996;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24903 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24904 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24904);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__24410__auto___24997 = re_frame.interop.now();
var duration__24411__auto___24998 = (end__24410__auto___24997 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24411__auto___24998,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__24410__auto___24997);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24903);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
