goog.provide('zero.frontend.re_frame');
zero.frontend.re_frame.excluded_list = cljs.core.PersistentVector.EMPTY;
zero.frontend.re_frame.excluded_event_QMARK_ = (function zero$frontend$re_frame$excluded_event_QMARK_(event_key){
return cljs.core.boolean$(cljs.core.some((function (p1__25088_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_key,p1__25088_SHARP_);
}),zero.frontend.re_frame.excluded_list));
});
zero.frontend.re_frame.debug = re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"after","after",594996914),(function zero$frontend$re_frame$debug_after(context){
var event = re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var vec__25097 = event;
var seq__25098 = cljs.core.seq(vec__25097);
var first__25099 = cljs.core.first(seq__25098);
var seq__25098__$1 = cljs.core.next(seq__25098);
var event_key = first__25099;
var event_params = seq__25098__$1;
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
var G__25103_25151 = new cljs.core.Keyword("db","get","db/get",1683179813);
var G__25104_25152 = (function (db,p__25105){
var vec__25106 = p__25105;
var seq__25107 = cljs.core.seq(vec__25106);
var first__25108 = cljs.core.first(seq__25107);
var seq__25107__$1 = cljs.core.next(seq__25107);
var _ = first__25108;
var first__25108__$1 = cljs.core.first(seq__25107__$1);
var seq__25107__$2 = cljs.core.next(seq__25107__$1);
var key = first__25108__$1;
var vec__25109 = seq__25107__$2;
var default_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25109,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,key,default_value);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25103_25151,G__25104_25152) : zero.frontend.re_frame.reg_sub.call(null,G__25103_25151,G__25104_25152));
var G__25112_25153 = new cljs.core.Keyword("db","get-in","db/get-in",688786454);
var G__25113_25154 = (function (db,p__25114){
var vec__25115 = p__25114;
var seq__25116 = cljs.core.seq(vec__25115);
var first__25117 = cljs.core.first(seq__25116);
var seq__25116__$1 = cljs.core.next(seq__25116);
var _ = first__25117;
var first__25117__$1 = cljs.core.first(seq__25116__$1);
var seq__25116__$2 = cljs.core.next(seq__25116__$1);
var path = first__25117__$1;
var vec__25118 = seq__25116__$2;
var default_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25118,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,path,default_value);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25112_25153,G__25113_25154) : zero.frontend.re_frame.reg_sub.call(null,G__25112_25153,G__25113_25154));
var G__25121_25155 = new cljs.core.Keyword("db","assoc","db/assoc",430913843);
var G__25122_25156 = (function (db,p__25123){
var vec__25124 = p__25123;
var seq__25125 = cljs.core.seq(vec__25124);
var first__25126 = cljs.core.first(seq__25125);
var seq__25125__$1 = cljs.core.next(seq__25125);
var _ = first__25126;
var params = seq__25125__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null),params));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__25121_25155,G__25122_25156) : zero.frontend.re_frame.reg_event_db.call(null,G__25121_25155,G__25122_25156));
var G__25127_25157 = new cljs.core.Keyword("db","assoc-in","db/assoc-in",-1754128912);
var G__25128_25158 = (function (db,p__25129){
var vec__25130 = p__25129;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25130,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25130,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25130,(2),null);
return cljs.core.assoc_in(db,path,value);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__25127_25157,G__25128_25158) : zero.frontend.re_frame.reg_event_db.call(null,G__25127_25157,G__25128_25158));
var G__25133_25159 = new cljs.core.Keyword("db","update-in","db/update-in",1208917930);
var G__25134_25160 = (function (db,p__25135){
var vec__25136 = p__25135;
var seq__25137 = cljs.core.seq(vec__25136);
var first__25138 = cljs.core.first(seq__25137);
var seq__25137__$1 = cljs.core.next(seq__25137);
var _ = first__25138;
var first__25138__$1 = cljs.core.first(seq__25137__$1);
var seq__25137__$2 = cljs.core.next(seq__25137__$1);
var path = first__25138__$1;
var first__25138__$2 = cljs.core.first(seq__25137__$2);
var seq__25137__$3 = cljs.core.next(seq__25137__$2);
var _fn = first__25138__$2;
var params = seq__25137__$3;
var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
var params__$1 = cljs.core.cons(item,params);
return cljs.core.assoc_in(db,path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(_fn,params__$1));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__25133_25159,G__25134_25160) : zero.frontend.re_frame.reg_event_db.call(null,G__25133_25159,G__25134_25160));
var G__25139_25161 = new cljs.core.Keyword("db","dissoc","db/dissoc",-600782947);
var G__25140_25162 = (function (db,p__25141){
var vec__25142 = p__25141;
var seq__25143 = cljs.core.seq(vec__25142);
var first__25144 = cljs.core.first(seq__25143);
var seq__25143__$1 = cljs.core.next(seq__25143);
var _ = first__25144;
var params = seq__25143__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null),params));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__25139_25161,G__25140_25162) : zero.frontend.re_frame.reg_event_db.call(null,G__25139_25161,G__25140_25162));
var G__25145_25163 = new cljs.core.Keyword("db","dissoc-in","db/dissoc-in",-1889890816);
var G__25146_25164 = (function (db,p__25147){
var vec__25148 = p__25147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25148,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25148,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,cljs.core.butlast(path),cljs.core.dissoc,cljs.core.last(path));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__25145_25163,G__25146_25164) : zero.frontend.re_frame.reg_event_db.call(null,G__25145_25163,G__25146_25164));

//# sourceMappingURL=zero.frontend.re_frame.js.map
