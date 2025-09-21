goog.provide('parquery.frontend.request');
/**
 * Send queries to the parquery backend
 */
parquery.frontend.request.send_queries = (function parquery$frontend$request$send_queries(query_map){
var callback = new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(query_map);
var request_data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query_map,new cljs.core.Keyword(null,"callback","callback",-705136228));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: ParQuery send-queries called"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Request data:",request_data], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Queries:",cljs.core.keys(new cljs.core.Keyword(null,"queries","queries",1446291995).cljs$core$IFn$_invoke$arity$1(request_data))], 0));

var c__12382__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12383__auto__ = (function (){var switch__12312__auto__ = (function (state_16860){
var state_val_16861 = (state_16860[(1)]);
if((state_val_16861 === (1))){
var inst_16835 = [new cljs.core.Keyword(null,"transit-params","transit-params",357261095),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_16836 = [request_data,true];
var inst_16837 = cljs.core.PersistentHashMap.fromArrays(inst_16835,inst_16836);
var inst_16838 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/parquery",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_16837], 0));
var state_16860__$1 = state_16860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16860__$1,(2),inst_16838);
} else {
if((state_val_16861 === (2))){
var inst_16840 = (state_16860[(7)]);
var inst_16840__$1 = (state_16860[(2)]);
var inst_16841 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: ParQuery response received"], 0));
var inst_16842 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_16840__$1);
var inst_16843 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Status:",inst_16842], 0));
var inst_16844 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16840__$1);
var inst_16845 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Body:",inst_16844], 0));
var inst_16846 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_16840__$1);
var inst_16847 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_16846);
var state_16860__$1 = (function (){var statearr_16862 = state_16860;
(statearr_16862[(7)] = inst_16840__$1);

(statearr_16862[(8)] = inst_16841);

(statearr_16862[(9)] = inst_16843);

(statearr_16862[(10)] = inst_16845);

return statearr_16862;
})();
if(inst_16847){
var statearr_16863_16873 = state_16860__$1;
(statearr_16863_16873[(1)] = (3));

} else {
var statearr_16864_16874 = state_16860__$1;
(statearr_16864_16874[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16861 === (3))){
var inst_16840 = (state_16860[(7)]);
var inst_16849 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16840);
var inst_16850 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_16849) : callback.call(null,inst_16849));
var state_16860__$1 = state_16860;
var statearr_16865_16875 = state_16860__$1;
(statearr_16865_16875[(2)] = inst_16850);

(statearr_16865_16875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16861 === (4))){
var inst_16840 = (state_16860[(7)]);
var inst_16852 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_16840);
var inst_16853 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16840);
var inst_16854 = ["ParQuery request failed with status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16852),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16853)].join('');
var inst_16855 = Error(inst_16854);
var inst_16856 = (function(){throw inst_16855})();
var state_16860__$1 = state_16860;
var statearr_16866_16876 = state_16860__$1;
(statearr_16866_16876[(2)] = inst_16856);

(statearr_16866_16876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16861 === (5))){
var inst_16858 = (state_16860[(2)]);
var state_16860__$1 = state_16860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16860__$1,inst_16858);
} else {
return null;
}
}
}
}
}
});
return (function() {
var parquery$frontend$request$send_queries_$_state_machine__12313__auto__ = null;
var parquery$frontend$request$send_queries_$_state_machine__12313__auto____0 = (function (){
var statearr_16867 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16867[(0)] = parquery$frontend$request$send_queries_$_state_machine__12313__auto__);

(statearr_16867[(1)] = (1));

return statearr_16867;
});
var parquery$frontend$request$send_queries_$_state_machine__12313__auto____1 = (function (state_16860){
while(true){
var ret_value__12314__auto__ = (function (){try{while(true){
var result__12315__auto__ = switch__12312__auto__(state_16860);
if(cljs.core.keyword_identical_QMARK_(result__12315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12315__auto__;
}
break;
}
}catch (e16868){var ex__12316__auto__ = e16868;
var statearr_16869_16877 = state_16860;
(statearr_16869_16877[(2)] = ex__12316__auto__);


if(cljs.core.seq((state_16860[(4)]))){
var statearr_16870_16878 = state_16860;
(statearr_16870_16878[(1)] = cljs.core.first((state_16860[(4)])));

} else {
throw ex__12316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16879 = state_16860;
state_16860 = G__16879;
continue;
} else {
return ret_value__12314__auto__;
}
break;
}
});
parquery$frontend$request$send_queries_$_state_machine__12313__auto__ = function(state_16860){
switch(arguments.length){
case 0:
return parquery$frontend$request$send_queries_$_state_machine__12313__auto____0.call(this);
case 1:
return parquery$frontend$request$send_queries_$_state_machine__12313__auto____1.call(this,state_16860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parquery$frontend$request$send_queries_$_state_machine__12313__auto__.cljs$core$IFn$_invoke$arity$0 = parquery$frontend$request$send_queries_$_state_machine__12313__auto____0;
parquery$frontend$request$send_queries_$_state_machine__12313__auto__.cljs$core$IFn$_invoke$arity$1 = parquery$frontend$request$send_queries_$_state_machine__12313__auto____1;
return parquery$frontend$request$send_queries_$_state_machine__12313__auto__;
})()
})();
var state__12384__auto__ = (function (){var statearr_16871 = f__12383__auto__();
(statearr_16871[(6)] = c__12382__auto__);

return statearr_16871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12384__auto__);
}));

return c__12382__auto__;
});
/**
 * Parse EDN string into Clojure data
 */
parquery.frontend.request.parse_query_string = (function parquery$frontend$request$parse_query_string(query_string){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query_string);
}catch (e16872){if((e16872 instanceof Error)){
var e = e16872;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),["Parse error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null);
} else {
throw e16872;

}
}});

//# sourceMappingURL=parquery.frontend.request.js.map
