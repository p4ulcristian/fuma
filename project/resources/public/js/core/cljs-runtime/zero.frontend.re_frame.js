goog.provide('zero.frontend.re_frame');
zero.frontend.re_frame.excluded_list = cljs.core.PersistentVector.EMPTY;
zero.frontend.re_frame.excluded_event_QMARK_ = (function zero$frontend$re_frame$excluded_event_QMARK_(event_key){
return cljs.core.boolean$(cljs.core.some((function (p1__25395_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_key,p1__25395_SHARP_);
}),zero.frontend.re_frame.excluded_list));
});
zero.frontend.re_frame.debug = re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"after","after",594996914),(function zero$frontend$re_frame$debug_after(context){
var event = re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var vec__25413 = event;
var seq__25414 = cljs.core.seq(vec__25413);
var first__25415 = cljs.core.first(seq__25414);
var seq__25414__$1 = cljs.core.next(seq__25414);
var event_key = first__25415;
var event_params = seq__25414__$1;
if(zero.frontend.re_frame.excluded_event_QMARK_(event_key)){
} else {
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_key,event_params], 0));
}

return context;
})], 0));
zero.frontend.re_frame.standard_interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
zero.frontend.re_frame.reg_fx = re_frame.core.reg_fx;
zero.frontend.re_frame.reg_event_fx = re_frame.core.reg_event_fx;
zero.frontend.re_frame.dispatch = re_frame.core.dispatch;
zero.frontend.re_frame.subscribe = re_frame.core.subscribe;
zero.frontend.re_frame.reg_event_db = re_frame.core.reg_event_db;
zero.frontend.re_frame.reg_sub = re_frame.core.reg_sub;
var G__25419_25483 = new cljs.core.Keyword("db","get","db/get",1683179813);
var G__25420_25484 = (function (db,p__25421){
var vec__25422 = p__25421;
var seq__25423 = cljs.core.seq(vec__25422);
var first__25424 = cljs.core.first(seq__25423);
var seq__25423__$1 = cljs.core.next(seq__25423);
var _ = first__25424;
var first__25424__$1 = cljs.core.first(seq__25423__$1);
var seq__25423__$2 = cljs.core.next(seq__25423__$1);
var key = first__25424__$1;
var vec__25425 = seq__25423__$2;
var default_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25425,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,key,default_value);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25419_25483,G__25420_25484) : zero.frontend.re_frame.reg_sub.call(null,G__25419_25483,G__25420_25484));
var G__25428_25486 = new cljs.core.Keyword("db","get-in","db/get-in",688786454);
var G__25429_25487 = (function (db,p__25430){
var vec__25431 = p__25430;
var seq__25432 = cljs.core.seq(vec__25431);
var first__25433 = cljs.core.first(seq__25432);
var seq__25432__$1 = cljs.core.next(seq__25432);
var _ = first__25433;
var first__25433__$1 = cljs.core.first(seq__25432__$1);
var seq__25432__$2 = cljs.core.next(seq__25432__$1);
var path = first__25433__$1;
var vec__25434 = seq__25432__$2;
var default_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25434,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,path,default_value);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25428_25486,G__25429_25487) : zero.frontend.re_frame.reg_sub.call(null,G__25428_25486,G__25429_25487));
var G__25437_25489 = new cljs.core.Keyword("db","assoc","db/assoc",430913843);
var G__25438_25490 = (function (db,p__25439){
var vec__25441 = p__25439;
var seq__25442 = cljs.core.seq(vec__25441);
var first__25443 = cljs.core.first(seq__25442);
var seq__25442__$1 = cljs.core.next(seq__25442);
var _ = first__25443;
var params = seq__25442__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null),params));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__25437_25489,G__25438_25490) : zero.frontend.re_frame.reg_event_db.call(null,G__25437_25489,G__25438_25490));
var G__25444_25491 = new cljs.core.Keyword("db","assoc-in","db/assoc-in",-1754128912);
var G__25445_25492 = (function (db,p__25446){
var vec__25448 = p__25446;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25448,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25448,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25448,(2),null);
return cljs.core.assoc_in(db,path,value);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__25444_25491,G__25445_25492) : zero.frontend.re_frame.reg_event_db.call(null,G__25444_25491,G__25445_25492));
var G__25451_25494 = new cljs.core.Keyword("db","update-in","db/update-in",1208917930);
var G__25452_25495 = (function (db,p__25454){
var vec__25455 = p__25454;
var seq__25456 = cljs.core.seq(vec__25455);
var first__25457 = cljs.core.first(seq__25456);
var seq__25456__$1 = cljs.core.next(seq__25456);
var _ = first__25457;
var first__25457__$1 = cljs.core.first(seq__25456__$1);
var seq__25456__$2 = cljs.core.next(seq__25456__$1);
var path = first__25457__$1;
var first__25457__$2 = cljs.core.first(seq__25456__$2);
var seq__25456__$3 = cljs.core.next(seq__25456__$2);
var _fn = first__25457__$2;
var params = seq__25456__$3;
var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
var params__$1 = cljs.core.cons(item,params);
return cljs.core.assoc_in(db,path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(_fn,params__$1));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__25451_25494,G__25452_25495) : zero.frontend.re_frame.reg_event_db.call(null,G__25451_25494,G__25452_25495));
var G__25459_25499 = new cljs.core.Keyword("db","dissoc","db/dissoc",-600782947);
var G__25460_25500 = (function (db,p__25463){
var vec__25464 = p__25463;
var seq__25465 = cljs.core.seq(vec__25464);
var first__25466 = cljs.core.first(seq__25465);
var seq__25465__$1 = cljs.core.next(seq__25465);
var _ = first__25466;
var params = seq__25465__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null),params));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__25459_25499,G__25460_25500) : zero.frontend.re_frame.reg_event_db.call(null,G__25459_25499,G__25460_25500));
var G__25471_25502 = new cljs.core.Keyword("db","dissoc-in","db/dissoc-in",-1889890816);
var G__25472_25503 = (function (db,p__25474){
var vec__25475 = p__25474;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25475,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25475,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,cljs.core.butlast(path),cljs.core.dissoc,cljs.core.last(path));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__25471_25502,G__25472_25503) : zero.frontend.re_frame.reg_event_db.call(null,G__25471_25502,G__25472_25503));

//# sourceMappingURL=zero.frontend.re_frame.js.map
