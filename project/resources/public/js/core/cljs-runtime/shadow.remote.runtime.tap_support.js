goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__22526,p__22527){
var map__22528 = p__22526;
var map__22528__$1 = cljs.core.__destructure_map(map__22528);
var svc = map__22528__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22528__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22528__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22528__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22529 = p__22527;
var map__22529__$1 = cljs.core.__destructure_map(map__22529);
var msg = map__22529__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22529__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22529__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22529__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22529__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__22531,p__22532){
var map__22533 = p__22531;
var map__22533__$1 = cljs.core.__destructure_map(map__22533);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22533__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__22534 = p__22532;
var map__22534__$1 = cljs.core.__destructure_map(map__22534);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22534__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__22536,p__22537){
var map__22538 = p__22536;
var map__22538__$1 = cljs.core.__destructure_map(map__22538);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22538__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22538__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22539 = p__22537;
var map__22539__$1 = cljs.core.__destructure_map(map__22539);
var msg = map__22539__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22539__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__22540,tid){
var map__22541 = p__22540;
var map__22541__$1 = cljs.core.__destructure_map(map__22541);
var svc = map__22541__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22541__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__22546 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__22547 = null;
var count__22548 = (0);
var i__22549 = (0);
while(true){
if((i__22549 < count__22548)){
var vec__22556 = chunk__22547.cljs$core$IIndexed$_nth$arity$2(null,i__22549);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22556,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22556,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22564 = seq__22546;
var G__22565 = chunk__22547;
var G__22566 = count__22548;
var G__22567 = (i__22549 + (1));
seq__22546 = G__22564;
chunk__22547 = G__22565;
count__22548 = G__22566;
i__22549 = G__22567;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22546);
if(temp__5823__auto__){
var seq__22546__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22546__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__22546__$1);
var G__22568 = cljs.core.chunk_rest(seq__22546__$1);
var G__22569 = c__5548__auto__;
var G__22570 = cljs.core.count(c__5548__auto__);
var G__22571 = (0);
seq__22546 = G__22568;
chunk__22547 = G__22569;
count__22548 = G__22570;
i__22549 = G__22571;
continue;
} else {
var vec__22559 = cljs.core.first(seq__22546__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22559,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22559,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22572 = cljs.core.next(seq__22546__$1);
var G__22573 = null;
var G__22574 = (0);
var G__22575 = (0);
seq__22546 = G__22572;
chunk__22547 = G__22573;
count__22548 = G__22574;
i__22549 = G__22575;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__22542_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__22542_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__22543_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__22543_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__22544_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__22544_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__22545_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__22545_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__22562){
var map__22563 = p__22562;
var map__22563__$1 = cljs.core.__destructure_map(map__22563);
var svc = map__22563__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22563__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
