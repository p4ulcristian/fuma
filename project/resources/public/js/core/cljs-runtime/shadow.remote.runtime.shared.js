goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18673){
var map__18674 = p__18673;
var map__18674__$1 = cljs.core.__destructure_map(map__18674);
var runtime = map__18674__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18674__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18849 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18849)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18699 = runtime;
var G__18700 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18849);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18699,G__18700) : shadow.remote.runtime.shared.process.call(null,G__18699,G__18700));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18705,res){
var map__18706 = p__18705;
var map__18706__$1 = cljs.core.__destructure_map(map__18706);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18706__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18706__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18707 = res;
var G__18707__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18707,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18707);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18707__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18707__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18731 = arguments.length;
switch (G__18731) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18733,msg,handlers,timeout_after_ms){
var map__18734 = p__18733;
var map__18734__$1 = cljs.core.__destructure_map(map__18734);
var runtime = map__18734__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18734__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___18854 = arguments.length;
var i__5750__auto___18855 = (0);
while(true){
if((i__5750__auto___18855 < len__5749__auto___18854)){
args__5755__auto__.push((arguments[i__5750__auto___18855]));

var G__18856 = (i__5750__auto___18855 + (1));
i__5750__auto___18855 = G__18856;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18755,ev,args){
var map__18757 = p__18755;
var map__18757__$1 = cljs.core.__destructure_map(map__18757);
var runtime = map__18757__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18757__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18764 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18767 = null;
var count__18768 = (0);
var i__18769 = (0);
while(true){
if((i__18769 < count__18768)){
var ext = chunk__18767.cljs$core$IIndexed$_nth$arity$2(null,i__18769);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18857 = seq__18764;
var G__18858 = chunk__18767;
var G__18859 = count__18768;
var G__18860 = (i__18769 + (1));
seq__18764 = G__18857;
chunk__18767 = G__18858;
count__18768 = G__18859;
i__18769 = G__18860;
continue;
} else {
var G__18861 = seq__18764;
var G__18862 = chunk__18767;
var G__18863 = count__18768;
var G__18864 = (i__18769 + (1));
seq__18764 = G__18861;
chunk__18767 = G__18862;
count__18768 = G__18863;
i__18769 = G__18864;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18764);
if(temp__5823__auto__){
var seq__18764__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18764__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18764__$1);
var G__18865 = cljs.core.chunk_rest(seq__18764__$1);
var G__18866 = c__5548__auto__;
var G__18867 = cljs.core.count(c__5548__auto__);
var G__18868 = (0);
seq__18764 = G__18865;
chunk__18767 = G__18866;
count__18768 = G__18867;
i__18769 = G__18868;
continue;
} else {
var ext = cljs.core.first(seq__18764__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18869 = cljs.core.next(seq__18764__$1);
var G__18870 = null;
var G__18871 = (0);
var G__18872 = (0);
seq__18764 = G__18869;
chunk__18767 = G__18870;
count__18768 = G__18871;
i__18769 = G__18872;
continue;
} else {
var G__18873 = cljs.core.next(seq__18764__$1);
var G__18874 = null;
var G__18875 = (0);
var G__18876 = (0);
seq__18764 = G__18873;
chunk__18767 = G__18874;
count__18768 = G__18875;
i__18769 = G__18876;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18736){
var G__18737 = cljs.core.first(seq18736);
var seq18736__$1 = cljs.core.next(seq18736);
var G__18738 = cljs.core.first(seq18736__$1);
var seq18736__$2 = cljs.core.next(seq18736__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18737,G__18738,seq18736__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18795,p__18796){
var map__18797 = p__18795;
var map__18797__$1 = cljs.core.__destructure_map(map__18797);
var runtime = map__18797__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18797__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18798 = p__18796;
var map__18798__$1 = cljs.core.__destructure_map(map__18798);
var msg = map__18798__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18798__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18800 = cljs.core.deref(state_ref);
var map__18800__$1 = cljs.core.__destructure_map(map__18800);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18800__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18800__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18814,msg){
var map__18815 = p__18814;
var map__18815__$1 = cljs.core.__destructure_map(map__18815);
var runtime = map__18815__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18815__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18816,key,p__18817){
var map__18818 = p__18816;
var map__18818__$1 = cljs.core.__destructure_map(map__18818);
var state = map__18818__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18818__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18819 = p__18817;
var map__18819__$1 = cljs.core.__destructure_map(map__18819);
var spec = map__18819__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18819__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18819__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18821,key,spec){
var map__18822 = p__18821;
var map__18822__$1 = cljs.core.__destructure_map(map__18822);
var runtime = map__18822__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___18877 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___18877 == null)){
} else {
var on_welcome_18878 = temp__5827__auto___18877;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18878.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18878.cljs$core$IFn$_invoke$arity$0() : on_welcome_18878.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18823_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18823_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18824_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18824_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18825_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18825_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18826_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18826_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18827_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18827_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18830,key){
var map__18831 = p__18830;
var map__18831__$1 = cljs.core.__destructure_map(map__18831);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18831__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18832,msg){
var map__18833 = p__18832;
var map__18833__$1 = cljs.core.__destructure_map(map__18833);
var runtime = map__18833__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18833__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18835,p__18836){
var map__18837 = p__18835;
var map__18837__$1 = cljs.core.__destructure_map(map__18837);
var runtime = map__18837__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18837__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18838 = p__18836;
var map__18838__$1 = cljs.core.__destructure_map(map__18838);
var msg = map__18838__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18838__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18838__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18839 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18841 = null;
var count__18842 = (0);
var i__18843 = (0);
while(true){
if((i__18843 < count__18842)){
var map__18847 = chunk__18841.cljs$core$IIndexed$_nth$arity$2(null,i__18843);
var map__18847__$1 = cljs.core.__destructure_map(map__18847);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18847__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18883 = seq__18839;
var G__18884 = chunk__18841;
var G__18885 = count__18842;
var G__18886 = (i__18843 + (1));
seq__18839 = G__18883;
chunk__18841 = G__18884;
count__18842 = G__18885;
i__18843 = G__18886;
continue;
} else {
var G__18887 = seq__18839;
var G__18888 = chunk__18841;
var G__18889 = count__18842;
var G__18890 = (i__18843 + (1));
seq__18839 = G__18887;
chunk__18841 = G__18888;
count__18842 = G__18889;
i__18843 = G__18890;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18839);
if(temp__5823__auto__){
var seq__18839__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18839__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18839__$1);
var G__18891 = cljs.core.chunk_rest(seq__18839__$1);
var G__18892 = c__5548__auto__;
var G__18893 = cljs.core.count(c__5548__auto__);
var G__18894 = (0);
seq__18839 = G__18891;
chunk__18841 = G__18892;
count__18842 = G__18893;
i__18843 = G__18894;
continue;
} else {
var map__18848 = cljs.core.first(seq__18839__$1);
var map__18848__$1 = cljs.core.__destructure_map(map__18848);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18848__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18895 = cljs.core.next(seq__18839__$1);
var G__18896 = null;
var G__18897 = (0);
var G__18898 = (0);
seq__18839 = G__18895;
chunk__18841 = G__18896;
count__18842 = G__18897;
i__18843 = G__18898;
continue;
} else {
var G__18899 = cljs.core.next(seq__18839__$1);
var G__18900 = null;
var G__18901 = (0);
var G__18902 = (0);
seq__18839 = G__18899;
chunk__18841 = G__18900;
count__18842 = G__18901;
i__18843 = G__18902;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
