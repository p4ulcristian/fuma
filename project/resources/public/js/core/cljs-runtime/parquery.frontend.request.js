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

var c__18577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18488__auto__ = (function (state_27710){
var state_val_27711 = (state_27710[(1)]);
if((state_val_27711 === (1))){
var inst_27682 = [new cljs.core.Keyword(null,"transit-params","transit-params",357261095),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27685 = [request_data,true];
var inst_27686 = cljs.core.PersistentHashMap.fromArrays(inst_27682,inst_27685);
var inst_27687 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/parquery",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_27686], 0));
var state_27710__$1 = state_27710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27710__$1,(2),inst_27687);
} else {
if((state_val_27711 === (2))){
var inst_27690 = (state_27710[(7)]);
var inst_27690__$1 = (state_27710[(2)]);
var inst_27691 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: ParQuery response received"], 0));
var inst_27692 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27690__$1);
var inst_27693 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Status:",inst_27692], 0));
var inst_27694 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27690__$1);
var inst_27695 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Body:",inst_27694], 0));
var inst_27696 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27690__$1);
var inst_27697 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_27696);
var state_27710__$1 = (function (){var statearr_27712 = state_27710;
(statearr_27712[(7)] = inst_27690__$1);

(statearr_27712[(8)] = inst_27691);

(statearr_27712[(9)] = inst_27693);

(statearr_27712[(10)] = inst_27695);

return statearr_27712;
})();
if(inst_27697){
var statearr_27713_27723 = state_27710__$1;
(statearr_27713_27723[(1)] = (3));

} else {
var statearr_27714_27724 = state_27710__$1;
(statearr_27714_27724[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (3))){
var inst_27690 = (state_27710[(7)]);
var inst_27699 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27690);
var inst_27700 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_27699) : callback.call(null,inst_27699));
var state_27710__$1 = state_27710;
var statearr_27715_27725 = state_27710__$1;
(statearr_27715_27725[(2)] = inst_27700);

(statearr_27715_27725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (4))){
var inst_27690 = (state_27710[(7)]);
var inst_27702 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27690);
var inst_27703 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27690);
var inst_27704 = ["ParQuery request failed with status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27702),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27703)].join('');
var inst_27705 = Error(inst_27704);
var inst_27706 = (function(){throw inst_27705})();
var state_27710__$1 = state_27710;
var statearr_27716_27726 = state_27710__$1;
(statearr_27716_27726[(2)] = inst_27706);

(statearr_27716_27726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27711 === (5))){
var inst_27708 = (state_27710[(2)]);
var state_27710__$1 = state_27710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27710__$1,inst_27708);
} else {
return null;
}
}
}
}
}
});
return (function() {
var parquery$frontend$request$send_queries_$_state_machine__18489__auto__ = null;
var parquery$frontend$request$send_queries_$_state_machine__18489__auto____0 = (function (){
var statearr_27717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27717[(0)] = parquery$frontend$request$send_queries_$_state_machine__18489__auto__);

(statearr_27717[(1)] = (1));

return statearr_27717;
});
var parquery$frontend$request$send_queries_$_state_machine__18489__auto____1 = (function (state_27710){
while(true){
var ret_value__18490__auto__ = (function (){try{while(true){
var result__18491__auto__ = switch__18488__auto__(state_27710);
if(cljs.core.keyword_identical_QMARK_(result__18491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18491__auto__;
}
break;
}
}catch (e27718){var ex__18492__auto__ = e27718;
var statearr_27719_27727 = state_27710;
(statearr_27719_27727[(2)] = ex__18492__auto__);


if(cljs.core.seq((state_27710[(4)]))){
var statearr_27720_27728 = state_27710;
(statearr_27720_27728[(1)] = cljs.core.first((state_27710[(4)])));

} else {
throw ex__18492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27729 = state_27710;
state_27710 = G__27729;
continue;
} else {
return ret_value__18490__auto__;
}
break;
}
});
parquery$frontend$request$send_queries_$_state_machine__18489__auto__ = function(state_27710){
switch(arguments.length){
case 0:
return parquery$frontend$request$send_queries_$_state_machine__18489__auto____0.call(this);
case 1:
return parquery$frontend$request$send_queries_$_state_machine__18489__auto____1.call(this,state_27710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parquery$frontend$request$send_queries_$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$0 = parquery$frontend$request$send_queries_$_state_machine__18489__auto____0;
parquery$frontend$request$send_queries_$_state_machine__18489__auto__.cljs$core$IFn$_invoke$arity$1 = parquery$frontend$request$send_queries_$_state_machine__18489__auto____1;
return parquery$frontend$request$send_queries_$_state_machine__18489__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_27721 = f__18578__auto__();
(statearr_27721[(6)] = c__18577__auto__);

return statearr_27721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));

return c__18577__auto__;
});
/**
 * Parse EDN string into Clojure data
 */
parquery.frontend.request.parse_query_string = (function parquery$frontend$request$parse_query_string(query_string){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query_string);
}catch (e27722){if((e27722 instanceof Error)){
var e = e27722;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),["Parse error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null);
} else {
throw e27722;

}
}});

//# sourceMappingURL=parquery.frontend.request.js.map
