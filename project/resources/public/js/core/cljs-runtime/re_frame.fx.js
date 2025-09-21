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
var _STAR_current_trace_STAR__orig_val__24982 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24983 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24983);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___25081 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___25081)){
var new_db_25082 = temp__5823__auto___25081;
var fexpr__25001_25083 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__25001_25083.cljs$core$IFn$_invoke$arity$1 ? fexpr__25001_25083.cljs$core$IFn$_invoke$arity$1(new_db_25082) : fexpr__25001_25083.call(null,new_db_25082));
} else {
}

var seq__25006 = cljs.core.seq(effects_without_db);
var chunk__25007 = null;
var count__25008 = (0);
var i__25009 = (0);
while(true){
if((i__25009 < count__25008)){
var vec__25017 = chunk__25007.cljs$core$IIndexed$_nth$arity$2(null,i__25009);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25017,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25017,(1),null);
var temp__5821__auto___25084 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___25084)){
var effect_fn_25085 = temp__5821__auto___25084;
(effect_fn_25085.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25085.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25085.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__25086 = seq__25006;
var G__25087 = chunk__25007;
var G__25088 = count__25008;
var G__25089 = (i__25009 + (1));
seq__25006 = G__25086;
chunk__25007 = G__25087;
count__25008 = G__25088;
i__25009 = G__25089;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__25006);
if(temp__5823__auto__){
var seq__25006__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25006__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__25006__$1);
var G__25090 = cljs.core.chunk_rest(seq__25006__$1);
var G__25091 = c__5548__auto__;
var G__25092 = cljs.core.count(c__5548__auto__);
var G__25093 = (0);
seq__25006 = G__25090;
chunk__25007 = G__25091;
count__25008 = G__25092;
i__25009 = G__25093;
continue;
} else {
var vec__25021 = cljs.core.first(seq__25006__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25021,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25021,(1),null);
var temp__5821__auto___25094 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___25094)){
var effect_fn_25095 = temp__5821__auto___25094;
(effect_fn_25095.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25095.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25095.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__25096 = cljs.core.next(seq__25006__$1);
var G__25097 = null;
var G__25098 = (0);
var G__25099 = (0);
seq__25006 = G__25096;
chunk__25007 = G__25097;
count__25008 = G__25098;
i__25009 = G__25099;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__24499__auto___25100 = re_frame.interop.now();
var duration__24500__auto___25101 = (end__24499__auto___25100 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24500__auto___25101,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__24499__auto___25100);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24982);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___25102 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___25102)){
var new_db_25103 = temp__5823__auto___25102;
var fexpr__25024_25104 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__25024_25104.cljs$core$IFn$_invoke$arity$1 ? fexpr__25024_25104.cljs$core$IFn$_invoke$arity$1(new_db_25103) : fexpr__25024_25104.call(null,new_db_25103));
} else {
}

var seq__25025 = cljs.core.seq(effects_without_db);
var chunk__25026 = null;
var count__25027 = (0);
var i__25028 = (0);
while(true){
if((i__25028 < count__25027)){
var vec__25039 = chunk__25026.cljs$core$IIndexed$_nth$arity$2(null,i__25028);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25039,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25039,(1),null);
var temp__5821__auto___25105 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___25105)){
var effect_fn_25106 = temp__5821__auto___25105;
(effect_fn_25106.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25106.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25106.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__25107 = seq__25025;
var G__25108 = chunk__25026;
var G__25109 = count__25027;
var G__25110 = (i__25028 + (1));
seq__25025 = G__25107;
chunk__25026 = G__25108;
count__25027 = G__25109;
i__25028 = G__25110;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__25025);
if(temp__5823__auto__){
var seq__25025__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25025__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__25025__$1);
var G__25111 = cljs.core.chunk_rest(seq__25025__$1);
var G__25112 = c__5548__auto__;
var G__25113 = cljs.core.count(c__5548__auto__);
var G__25114 = (0);
seq__25025 = G__25111;
chunk__25026 = G__25112;
count__25027 = G__25113;
i__25028 = G__25114;
continue;
} else {
var vec__25042 = cljs.core.first(seq__25025__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25042,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25042,(1),null);
var temp__5821__auto___25115 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___25115)){
var effect_fn_25116 = temp__5821__auto___25115;
(effect_fn_25116.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25116.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25116.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__25117 = cljs.core.next(seq__25025__$1);
var G__25118 = null;
var G__25119 = (0);
var G__25120 = (0);
seq__25025 = G__25117;
chunk__25026 = G__25118;
count__25027 = G__25119;
i__25028 = G__25120;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__25045){
var map__25046 = p__25045;
var map__25046__$1 = cljs.core.__destructure_map(map__25046);
var effect = map__25046__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25046__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25046__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__25047 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25048 = null;
var count__25049 = (0);
var i__25050 = (0);
while(true){
if((i__25050 < count__25049)){
var effect = chunk__25048.cljs$core$IIndexed$_nth$arity$2(null,i__25050);
re_frame.fx.dispatch_later(effect);


var G__25122 = seq__25047;
var G__25123 = chunk__25048;
var G__25124 = count__25049;
var G__25125 = (i__25050 + (1));
seq__25047 = G__25122;
chunk__25048 = G__25123;
count__25049 = G__25124;
i__25050 = G__25125;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__25047);
if(temp__5823__auto__){
var seq__25047__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25047__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__25047__$1);
var G__25126 = cljs.core.chunk_rest(seq__25047__$1);
var G__25127 = c__5548__auto__;
var G__25128 = cljs.core.count(c__5548__auto__);
var G__25129 = (0);
seq__25047 = G__25126;
chunk__25048 = G__25127;
count__25049 = G__25128;
i__25050 = G__25129;
continue;
} else {
var effect = cljs.core.first(seq__25047__$1);
re_frame.fx.dispatch_later(effect);


var G__25130 = cljs.core.next(seq__25047__$1);
var G__25131 = null;
var G__25132 = (0);
var G__25133 = (0);
seq__25047 = G__25130;
chunk__25048 = G__25131;
count__25049 = G__25132;
i__25050 = G__25133;
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
var seq__25051 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__25052 = null;
var count__25053 = (0);
var i__25054 = (0);
while(true){
if((i__25054 < count__25053)){
var vec__25061 = chunk__25052.cljs$core$IIndexed$_nth$arity$2(null,i__25054);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25061,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25061,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___25134 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___25134)){
var effect_fn_25135 = temp__5821__auto___25134;
(effect_fn_25135.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25135.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25135.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__25136 = seq__25051;
var G__25137 = chunk__25052;
var G__25138 = count__25053;
var G__25139 = (i__25054 + (1));
seq__25051 = G__25136;
chunk__25052 = G__25137;
count__25053 = G__25138;
i__25054 = G__25139;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__25051);
if(temp__5823__auto__){
var seq__25051__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25051__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__25051__$1);
var G__25140 = cljs.core.chunk_rest(seq__25051__$1);
var G__25141 = c__5548__auto__;
var G__25142 = cljs.core.count(c__5548__auto__);
var G__25143 = (0);
seq__25051 = G__25140;
chunk__25052 = G__25141;
count__25053 = G__25142;
i__25054 = G__25143;
continue;
} else {
var vec__25064 = cljs.core.first(seq__25051__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25064,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25064,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___25144 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___25144)){
var effect_fn_25145 = temp__5821__auto___25144;
(effect_fn_25145.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25145.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25145.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__25146 = cljs.core.next(seq__25051__$1);
var G__25147 = null;
var G__25148 = (0);
var G__25149 = (0);
seq__25051 = G__25146;
chunk__25052 = G__25147;
count__25053 = G__25148;
i__25054 = G__25149;
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
var seq__25067 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25068 = null;
var count__25069 = (0);
var i__25070 = (0);
while(true){
if((i__25070 < count__25069)){
var event = chunk__25068.cljs$core$IIndexed$_nth$arity$2(null,i__25070);
re_frame.router.dispatch(event);


var G__25150 = seq__25067;
var G__25151 = chunk__25068;
var G__25152 = count__25069;
var G__25153 = (i__25070 + (1));
seq__25067 = G__25150;
chunk__25068 = G__25151;
count__25069 = G__25152;
i__25070 = G__25153;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__25067);
if(temp__5823__auto__){
var seq__25067__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25067__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__25067__$1);
var G__25154 = cljs.core.chunk_rest(seq__25067__$1);
var G__25155 = c__5548__auto__;
var G__25156 = cljs.core.count(c__5548__auto__);
var G__25157 = (0);
seq__25067 = G__25154;
chunk__25068 = G__25155;
count__25069 = G__25156;
i__25070 = G__25157;
continue;
} else {
var event = cljs.core.first(seq__25067__$1);
re_frame.router.dispatch(event);


var G__25158 = cljs.core.next(seq__25067__$1);
var G__25159 = null;
var G__25160 = (0);
var G__25161 = (0);
seq__25067 = G__25158;
chunk__25068 = G__25159;
count__25069 = G__25160;
i__25070 = G__25161;
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
var seq__25071 = cljs.core.seq(value);
var chunk__25072 = null;
var count__25073 = (0);
var i__25074 = (0);
while(true){
if((i__25074 < count__25073)){
var event = chunk__25072.cljs$core$IIndexed$_nth$arity$2(null,i__25074);
clear_event(event);


var G__25162 = seq__25071;
var G__25163 = chunk__25072;
var G__25164 = count__25073;
var G__25165 = (i__25074 + (1));
seq__25071 = G__25162;
chunk__25072 = G__25163;
count__25073 = G__25164;
i__25074 = G__25165;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__25071);
if(temp__5823__auto__){
var seq__25071__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25071__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__25071__$1);
var G__25166 = cljs.core.chunk_rest(seq__25071__$1);
var G__25167 = c__5548__auto__;
var G__25168 = cljs.core.count(c__5548__auto__);
var G__25169 = (0);
seq__25071 = G__25166;
chunk__25072 = G__25167;
count__25073 = G__25168;
i__25074 = G__25169;
continue;
} else {
var event = cljs.core.first(seq__25071__$1);
clear_event(event);


var G__25170 = cljs.core.next(seq__25071__$1);
var G__25171 = null;
var G__25172 = (0);
var G__25173 = (0);
seq__25071 = G__25170;
chunk__25072 = G__25171;
count__25073 = G__25172;
i__25074 = G__25173;
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
var _STAR_current_trace_STAR__orig_val__25075 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25076 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25076);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__24499__auto___25174 = re_frame.interop.now();
var duration__24500__auto___25175 = (end__24499__auto___25174 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24500__auto___25175,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__24499__auto___25174);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25075);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
