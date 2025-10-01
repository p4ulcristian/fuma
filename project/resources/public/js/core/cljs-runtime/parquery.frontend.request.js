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

var c__18605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18606__auto__ = (function (){var switch__18343__auto__ = (function (state_27851){
var state_val_27854 = (state_27851[(1)]);
if((state_val_27854 === (1))){
var inst_27823 = [new cljs.core.Keyword(null,"transit-params","transit-params",357261095),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27824 = [request_data,true];
var inst_27825 = cljs.core.PersistentHashMap.fromArrays(inst_27823,inst_27824);
var inst_27826 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/parquery",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_27825], 0));
var state_27851__$1 = state_27851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27851__$1,(2),inst_27826);
} else {
if((state_val_27854 === (2))){
var inst_27828 = (state_27851[(7)]);
var inst_27828__$1 = (state_27851[(2)]);
var inst_27831 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: ParQuery response received"], 0));
var inst_27833 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27828__$1);
var inst_27834 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Status:",inst_27833], 0));
var inst_27835 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27828__$1);
var inst_27836 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Body:",inst_27835], 0));
var inst_27837 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27828__$1);
var inst_27838 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_27837);
var state_27851__$1 = (function (){var statearr_27862 = state_27851;
(statearr_27862[(7)] = inst_27828__$1);

(statearr_27862[(8)] = inst_27831);

(statearr_27862[(9)] = inst_27834);

(statearr_27862[(10)] = inst_27836);

return statearr_27862;
})();
if(inst_27838){
var statearr_27863_27873 = state_27851__$1;
(statearr_27863_27873[(1)] = (3));

} else {
var statearr_27864_27874 = state_27851__$1;
(statearr_27864_27874[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27854 === (3))){
var inst_27828 = (state_27851[(7)]);
var inst_27840 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27828);
var inst_27841 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_27840) : callback.call(null,inst_27840));
var state_27851__$1 = state_27851;
var statearr_27865_27875 = state_27851__$1;
(statearr_27865_27875[(2)] = inst_27841);

(statearr_27865_27875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27854 === (4))){
var inst_27828 = (state_27851[(7)]);
var inst_27843 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27828);
var inst_27844 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27828);
var inst_27845 = ["ParQuery request failed with status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27843),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27844)].join('');
var inst_27846 = Error(inst_27845);
var inst_27847 = (function(){throw inst_27846})();
var state_27851__$1 = state_27851;
var statearr_27866_27876 = state_27851__$1;
(statearr_27866_27876[(2)] = inst_27847);

(statearr_27866_27876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27854 === (5))){
var inst_27849 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27851__$1,inst_27849);
} else {
return null;
}
}
}
}
}
});
return (function() {
var parquery$frontend$request$send_queries_$_state_machine__18344__auto__ = null;
var parquery$frontend$request$send_queries_$_state_machine__18344__auto____0 = (function (){
var statearr_27867 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27867[(0)] = parquery$frontend$request$send_queries_$_state_machine__18344__auto__);

(statearr_27867[(1)] = (1));

return statearr_27867;
});
var parquery$frontend$request$send_queries_$_state_machine__18344__auto____1 = (function (state_27851){
while(true){
var ret_value__18345__auto__ = (function (){try{while(true){
var result__18346__auto__ = switch__18343__auto__(state_27851);
if(cljs.core.keyword_identical_QMARK_(result__18346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18346__auto__;
}
break;
}
}catch (e27868){var ex__18347__auto__ = e27868;
var statearr_27869_27877 = state_27851;
(statearr_27869_27877[(2)] = ex__18347__auto__);


if(cljs.core.seq((state_27851[(4)]))){
var statearr_27870_27878 = state_27851;
(statearr_27870_27878[(1)] = cljs.core.first((state_27851[(4)])));

} else {
throw ex__18347__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27879 = state_27851;
state_27851 = G__27879;
continue;
} else {
return ret_value__18345__auto__;
}
break;
}
});
parquery$frontend$request$send_queries_$_state_machine__18344__auto__ = function(state_27851){
switch(arguments.length){
case 0:
return parquery$frontend$request$send_queries_$_state_machine__18344__auto____0.call(this);
case 1:
return parquery$frontend$request$send_queries_$_state_machine__18344__auto____1.call(this,state_27851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parquery$frontend$request$send_queries_$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$0 = parquery$frontend$request$send_queries_$_state_machine__18344__auto____0;
parquery$frontend$request$send_queries_$_state_machine__18344__auto__.cljs$core$IFn$_invoke$arity$1 = parquery$frontend$request$send_queries_$_state_machine__18344__auto____1;
return parquery$frontend$request$send_queries_$_state_machine__18344__auto__;
})()
})();
var state__18607__auto__ = (function (){var statearr_27871 = f__18606__auto__();
(statearr_27871[(6)] = c__18605__auto__);

return statearr_27871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18607__auto__);
}));

return c__18605__auto__;
});
/**
 * Parse EDN string into Clojure data
 */
parquery.frontend.request.parse_query_string = (function parquery$frontend$request$parse_query_string(query_string){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query_string);
}catch (e27872){if((e27872 instanceof Error)){
var e = e27872;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),["Parse error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null);
} else {
throw e27872;

}
}});

//# sourceMappingURL=parquery.frontend.request.js.map
