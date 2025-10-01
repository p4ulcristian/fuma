goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__22508,p__22509){
var map__22510 = p__22508;
var map__22510__$1 = cljs.core.__destructure_map(map__22510);
var svc = map__22510__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22510__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22510__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22510__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22511 = p__22509;
var map__22511__$1 = cljs.core.__destructure_map(map__22511);
var msg = map__22511__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22511__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22511__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22511__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22511__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__22515,p__22516){
var map__22517 = p__22515;
var map__22517__$1 = cljs.core.__destructure_map(map__22517);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__22518 = p__22516;
var map__22518__$1 = cljs.core.__destructure_map(map__22518);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22518__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__22520,p__22521){
var map__22522 = p__22520;
var map__22522__$1 = cljs.core.__destructure_map(map__22522);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22522__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22522__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22523 = p__22521;
var map__22523__$1 = cljs.core.__destructure_map(map__22523);
var msg = map__22523__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22523__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__22524,tid){
var map__22525 = p__22524;
var map__22525__$1 = cljs.core.__destructure_map(map__22525);
var svc = map__22525__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__22530 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__22531 = null;
var count__22532 = (0);
var i__22533 = (0);
while(true){
if((i__22533 < count__22532)){
var vec__22545 = chunk__22531.cljs$core$IIndexed$_nth$arity$2(null,i__22533);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22545,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22545,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22569 = seq__22530;
var G__22570 = chunk__22531;
var G__22571 = count__22532;
var G__22572 = (i__22533 + (1));
seq__22530 = G__22569;
chunk__22531 = G__22570;
count__22532 = G__22571;
i__22533 = G__22572;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22530);
if(temp__5823__auto__){
var seq__22530__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22530__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22530__$1);
var G__22574 = cljs.core.chunk_rest(seq__22530__$1);
var G__22575 = c__5548__auto__;
var G__22576 = cljs.core.count(c__5548__auto__);
var G__22577 = (0);
seq__22530 = G__22574;
chunk__22531 = G__22575;
count__22532 = G__22576;
i__22533 = G__22577;
continue;
} else {
var vec__22551 = cljs.core.first(seq__22530__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22551,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22551,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22581 = cljs.core.next(seq__22530__$1);
var G__22582 = null;
var G__22583 = (0);
var G__22584 = (0);
seq__22530 = G__22581;
chunk__22531 = G__22582;
count__22532 = G__22583;
i__22533 = G__22584;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__22526_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__22526_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__22527_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__22527_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__22528_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__22528_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__22529_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__22529_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__22557){
var map__22558 = p__22557;
var map__22558__$1 = cljs.core.__destructure_map(map__22558);
var svc = map__22558__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22558__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22558__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
