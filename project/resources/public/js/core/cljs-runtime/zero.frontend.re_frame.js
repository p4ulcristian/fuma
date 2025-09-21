goog.provide('zero.frontend.re_frame');
zero.frontend.re_frame.excluded_list = cljs.core.PersistentVector.EMPTY;
zero.frontend.re_frame.excluded_event_QMARK_ = (function zero$frontend$re_frame$excluded_event_QMARK_(event_key){
return cljs.core.boolean$(cljs.core.some((function (p1__18310_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_key,p1__18310_SHARP_);
}),zero.frontend.re_frame.excluded_list));
});
zero.frontend.re_frame.debug = re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"after","after",594996914),(function zero$frontend$re_frame$debug_after(context){
var event = re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var vec__18311 = event;
var seq__18312 = cljs.core.seq(vec__18311);
var first__18313 = cljs.core.first(seq__18312);
var seq__18312__$1 = cljs.core.next(seq__18312);
var event_key = first__18313;
var event_params = seq__18312__$1;
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
var G__18314_18362 = new cljs.core.Keyword("db","get","db/get",1683179813);
var G__18315_18363 = (function (db,p__18316){
var vec__18317 = p__18316;
var seq__18318 = cljs.core.seq(vec__18317);
var first__18319 = cljs.core.first(seq__18318);
var seq__18318__$1 = cljs.core.next(seq__18318);
var _ = first__18319;
var first__18319__$1 = cljs.core.first(seq__18318__$1);
var seq__18318__$2 = cljs.core.next(seq__18318__$1);
var key = first__18319__$1;
var vec__18320 = seq__18318__$2;
var default_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18320,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,key,default_value);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18314_18362,G__18315_18363) : zero.frontend.re_frame.reg_sub.call(null,G__18314_18362,G__18315_18363));
var G__18323_18364 = new cljs.core.Keyword("db","get-in","db/get-in",688786454);
var G__18324_18365 = (function (db,p__18325){
var vec__18326 = p__18325;
var seq__18327 = cljs.core.seq(vec__18326);
var first__18328 = cljs.core.first(seq__18327);
var seq__18327__$1 = cljs.core.next(seq__18327);
var _ = first__18328;
var first__18328__$1 = cljs.core.first(seq__18327__$1);
var seq__18327__$2 = cljs.core.next(seq__18327__$1);
var path = first__18328__$1;
var vec__18329 = seq__18327__$2;
var default_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,path,default_value);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18323_18364,G__18324_18365) : zero.frontend.re_frame.reg_sub.call(null,G__18323_18364,G__18324_18365));
var G__18332_18366 = new cljs.core.Keyword("db","assoc","db/assoc",430913843);
var G__18333_18367 = (function (db,p__18334){
var vec__18335 = p__18334;
var seq__18336 = cljs.core.seq(vec__18335);
var first__18337 = cljs.core.first(seq__18336);
var seq__18336__$1 = cljs.core.next(seq__18336);
var _ = first__18337;
var params = seq__18336__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null),params));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__18332_18366,G__18333_18367) : zero.frontend.re_frame.reg_event_db.call(null,G__18332_18366,G__18333_18367));
var G__18338_18368 = new cljs.core.Keyword("db","assoc-in","db/assoc-in",-1754128912);
var G__18339_18369 = (function (db,p__18340){
var vec__18341 = p__18340;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18341,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18341,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18341,(2),null);
return cljs.core.assoc_in(db,path,value);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__18338_18368,G__18339_18369) : zero.frontend.re_frame.reg_event_db.call(null,G__18338_18368,G__18339_18369));
var G__18344_18370 = new cljs.core.Keyword("db","update-in","db/update-in",1208917930);
var G__18345_18371 = (function (db,p__18346){
var vec__18347 = p__18346;
var seq__18348 = cljs.core.seq(vec__18347);
var first__18349 = cljs.core.first(seq__18348);
var seq__18348__$1 = cljs.core.next(seq__18348);
var _ = first__18349;
var first__18349__$1 = cljs.core.first(seq__18348__$1);
var seq__18348__$2 = cljs.core.next(seq__18348__$1);
var path = first__18349__$1;
var first__18349__$2 = cljs.core.first(seq__18348__$2);
var seq__18348__$3 = cljs.core.next(seq__18348__$2);
var _fn = first__18349__$2;
var params = seq__18348__$3;
var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
var params__$1 = cljs.core.cons(item,params);
return cljs.core.assoc_in(db,path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(_fn,params__$1));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__18344_18370,G__18345_18371) : zero.frontend.re_frame.reg_event_db.call(null,G__18344_18370,G__18345_18371));
var G__18350_18372 = new cljs.core.Keyword("db","dissoc","db/dissoc",-600782947);
var G__18351_18373 = (function (db,p__18352){
var vec__18353 = p__18352;
var seq__18354 = cljs.core.seq(vec__18353);
var first__18355 = cljs.core.first(seq__18354);
var seq__18354__$1 = cljs.core.next(seq__18354);
var _ = first__18355;
var params = seq__18354__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null),params));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__18350_18372,G__18351_18373) : zero.frontend.re_frame.reg_event_db.call(null,G__18350_18372,G__18351_18373));
var G__18356_18374 = new cljs.core.Keyword("db","dissoc-in","db/dissoc-in",-1889890816);
var G__18357_18375 = (function (db,p__18358){
var vec__18359 = p__18358;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18359,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18359,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,cljs.core.butlast(path),cljs.core.dissoc,cljs.core.last(path));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__18356_18374,G__18357_18375) : zero.frontend.re_frame.reg_event_db.call(null,G__18356_18374,G__18357_18375));

//# sourceMappingURL=zero.frontend.re_frame.js.map
