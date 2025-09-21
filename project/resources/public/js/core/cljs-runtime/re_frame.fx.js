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
var _STAR_current_trace_STAR__orig_val__24827 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24828 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24828);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___24941 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___24941)){
var new_db_24942 = temp__5823__auto___24941;
var fexpr__24831_24943 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24831_24943.cljs$core$IFn$_invoke$arity$1 ? fexpr__24831_24943.cljs$core$IFn$_invoke$arity$1(new_db_24942) : fexpr__24831_24943.call(null,new_db_24942));
} else {
}

var seq__24832 = cljs.core.seq(effects_without_db);
var chunk__24833 = null;
var count__24834 = (0);
var i__24835 = (0);
while(true){
if((i__24835 < count__24834)){
var vec__24844 = chunk__24833.cljs$core$IIndexed$_nth$arity$2(null,i__24835);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24844,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24844,(1),null);
var temp__5821__auto___24944 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___24944)){
var effect_fn_24945 = temp__5821__auto___24944;
(effect_fn_24945.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24945.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24945.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24946 = seq__24832;
var G__24947 = chunk__24833;
var G__24948 = count__24834;
var G__24949 = (i__24835 + (1));
seq__24832 = G__24946;
chunk__24833 = G__24947;
count__24834 = G__24948;
i__24835 = G__24949;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24832);
if(temp__5823__auto__){
var seq__24832__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24832__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24832__$1);
var G__24950 = cljs.core.chunk_rest(seq__24832__$1);
var G__24951 = c__5548__auto__;
var G__24952 = cljs.core.count(c__5548__auto__);
var G__24953 = (0);
seq__24832 = G__24950;
chunk__24833 = G__24951;
count__24834 = G__24952;
i__24835 = G__24953;
continue;
} else {
var vec__24848 = cljs.core.first(seq__24832__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24848,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24848,(1),null);
var temp__5821__auto___24954 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___24954)){
var effect_fn_24955 = temp__5821__auto___24954;
(effect_fn_24955.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24955.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24955.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24956 = cljs.core.next(seq__24832__$1);
var G__24957 = null;
var G__24958 = (0);
var G__24959 = (0);
seq__24832 = G__24956;
chunk__24833 = G__24957;
count__24834 = G__24958;
i__24835 = G__24959;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__24459__auto___24960 = re_frame.interop.now();
var duration__24460__auto___24961 = (end__24459__auto___24960 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24460__auto___24961,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__24459__auto___24960);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24827);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___24962 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___24962)){
var new_db_24963 = temp__5823__auto___24962;
var fexpr__24852_24964 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24852_24964.cljs$core$IFn$_invoke$arity$1 ? fexpr__24852_24964.cljs$core$IFn$_invoke$arity$1(new_db_24963) : fexpr__24852_24964.call(null,new_db_24963));
} else {
}

var seq__24853 = cljs.core.seq(effects_without_db);
var chunk__24854 = null;
var count__24855 = (0);
var i__24856 = (0);
while(true){
if((i__24856 < count__24855)){
var vec__24870 = chunk__24854.cljs$core$IIndexed$_nth$arity$2(null,i__24856);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24870,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24870,(1),null);
var temp__5821__auto___24965 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___24965)){
var effect_fn_24966 = temp__5821__auto___24965;
(effect_fn_24966.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24966.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24966.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24967 = seq__24853;
var G__24968 = chunk__24854;
var G__24969 = count__24855;
var G__24970 = (i__24856 + (1));
seq__24853 = G__24967;
chunk__24854 = G__24968;
count__24855 = G__24969;
i__24856 = G__24970;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24853);
if(temp__5823__auto__){
var seq__24853__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24853__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24853__$1);
var G__24971 = cljs.core.chunk_rest(seq__24853__$1);
var G__24972 = c__5548__auto__;
var G__24973 = cljs.core.count(c__5548__auto__);
var G__24974 = (0);
seq__24853 = G__24971;
chunk__24854 = G__24972;
count__24855 = G__24973;
i__24856 = G__24974;
continue;
} else {
var vec__24873 = cljs.core.first(seq__24853__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24873,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24873,(1),null);
var temp__5821__auto___24975 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___24975)){
var effect_fn_24976 = temp__5821__auto___24975;
(effect_fn_24976.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24976.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24976.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24977 = cljs.core.next(seq__24853__$1);
var G__24978 = null;
var G__24979 = (0);
var G__24980 = (0);
seq__24853 = G__24977;
chunk__24854 = G__24978;
count__24855 = G__24979;
i__24856 = G__24980;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24879){
var map__24884 = p__24879;
var map__24884__$1 = cljs.core.__destructure_map(map__24884);
var effect = map__24884__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24884__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24884__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24904 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24905 = null;
var count__24906 = (0);
var i__24907 = (0);
while(true){
if((i__24907 < count__24906)){
var effect = chunk__24905.cljs$core$IIndexed$_nth$arity$2(null,i__24907);
re_frame.fx.dispatch_later(effect);


var G__24981 = seq__24904;
var G__24982 = chunk__24905;
var G__24983 = count__24906;
var G__24984 = (i__24907 + (1));
seq__24904 = G__24981;
chunk__24905 = G__24982;
count__24906 = G__24983;
i__24907 = G__24984;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24904);
if(temp__5823__auto__){
var seq__24904__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24904__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24904__$1);
var G__24985 = cljs.core.chunk_rest(seq__24904__$1);
var G__24986 = c__5548__auto__;
var G__24987 = cljs.core.count(c__5548__auto__);
var G__24988 = (0);
seq__24904 = G__24985;
chunk__24905 = G__24986;
count__24906 = G__24987;
i__24907 = G__24988;
continue;
} else {
var effect = cljs.core.first(seq__24904__$1);
re_frame.fx.dispatch_later(effect);


var G__24989 = cljs.core.next(seq__24904__$1);
var G__24990 = null;
var G__24991 = (0);
var G__24992 = (0);
seq__24904 = G__24989;
chunk__24905 = G__24990;
count__24906 = G__24991;
i__24907 = G__24992;
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
var seq__24911 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24912 = null;
var count__24913 = (0);
var i__24914 = (0);
while(true){
if((i__24914 < count__24913)){
var vec__24923 = chunk__24912.cljs$core$IIndexed$_nth$arity$2(null,i__24914);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24923,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24923,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___24993 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___24993)){
var effect_fn_24994 = temp__5821__auto___24993;
(effect_fn_24994.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24994.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24994.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24995 = seq__24911;
var G__24996 = chunk__24912;
var G__24997 = count__24913;
var G__24998 = (i__24914 + (1));
seq__24911 = G__24995;
chunk__24912 = G__24996;
count__24913 = G__24997;
i__24914 = G__24998;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24911);
if(temp__5823__auto__){
var seq__24911__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24911__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24911__$1);
var G__24999 = cljs.core.chunk_rest(seq__24911__$1);
var G__25000 = c__5548__auto__;
var G__25001 = cljs.core.count(c__5548__auto__);
var G__25002 = (0);
seq__24911 = G__24999;
chunk__24912 = G__25000;
count__24913 = G__25001;
i__24914 = G__25002;
continue;
} else {
var vec__24927 = cljs.core.first(seq__24911__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24927,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24927,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___25003 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___25003)){
var effect_fn_25004 = temp__5821__auto___25003;
(effect_fn_25004.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25004.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25004.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__25005 = cljs.core.next(seq__24911__$1);
var G__25006 = null;
var G__25007 = (0);
var G__25008 = (0);
seq__24911 = G__25005;
chunk__24912 = G__25006;
count__24913 = G__25007;
i__24914 = G__25008;
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
var seq__24931 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24932 = null;
var count__24933 = (0);
var i__24934 = (0);
while(true){
if((i__24934 < count__24933)){
var event = chunk__24932.cljs$core$IIndexed$_nth$arity$2(null,i__24934);
re_frame.router.dispatch(event);


var G__25011 = seq__24931;
var G__25012 = chunk__24932;
var G__25013 = count__24933;
var G__25014 = (i__24934 + (1));
seq__24931 = G__25011;
chunk__24932 = G__25012;
count__24933 = G__25013;
i__24934 = G__25014;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24931);
if(temp__5823__auto__){
var seq__24931__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24931__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24931__$1);
var G__25015 = cljs.core.chunk_rest(seq__24931__$1);
var G__25016 = c__5548__auto__;
var G__25017 = cljs.core.count(c__5548__auto__);
var G__25018 = (0);
seq__24931 = G__25015;
chunk__24932 = G__25016;
count__24933 = G__25017;
i__24934 = G__25018;
continue;
} else {
var event = cljs.core.first(seq__24931__$1);
re_frame.router.dispatch(event);


var G__25019 = cljs.core.next(seq__24931__$1);
var G__25020 = null;
var G__25021 = (0);
var G__25022 = (0);
seq__24931 = G__25019;
chunk__24932 = G__25020;
count__24933 = G__25021;
i__24934 = G__25022;
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
var seq__24935 = cljs.core.seq(value);
var chunk__24936 = null;
var count__24937 = (0);
var i__24938 = (0);
while(true){
if((i__24938 < count__24937)){
var event = chunk__24936.cljs$core$IIndexed$_nth$arity$2(null,i__24938);
clear_event(event);


var G__25023 = seq__24935;
var G__25024 = chunk__24936;
var G__25025 = count__24937;
var G__25026 = (i__24938 + (1));
seq__24935 = G__25023;
chunk__24936 = G__25024;
count__24937 = G__25025;
i__24938 = G__25026;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24935);
if(temp__5823__auto__){
var seq__24935__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24935__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24935__$1);
var G__25027 = cljs.core.chunk_rest(seq__24935__$1);
var G__25028 = c__5548__auto__;
var G__25029 = cljs.core.count(c__5548__auto__);
var G__25030 = (0);
seq__24935 = G__25027;
chunk__24936 = G__25028;
count__24937 = G__25029;
i__24938 = G__25030;
continue;
} else {
var event = cljs.core.first(seq__24935__$1);
clear_event(event);


var G__25031 = cljs.core.next(seq__24935__$1);
var G__25032 = null;
var G__25033 = (0);
var G__25034 = (0);
seq__24935 = G__25031;
chunk__24936 = G__25032;
count__24937 = G__25033;
i__24938 = G__25034;
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
var _STAR_current_trace_STAR__orig_val__24939 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24940 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24940);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__24459__auto___25035 = re_frame.interop.now();
var duration__24460__auto___25036 = (end__24459__auto___25035 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24460__auto___25036,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__24459__auto___25035);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24939);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
