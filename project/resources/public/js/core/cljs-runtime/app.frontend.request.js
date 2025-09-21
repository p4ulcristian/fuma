goog.provide('app.frontend.request');
app.frontend.request.get_csrf_token = (function app$frontend$request$get_csrf_token(){
var csrf_el = document.getElementById("csrf-token");
var csrf_token = csrf_el.getAttribute("data-csrf-token");
return csrf_token;
});
app.frontend.request.csrf_token = app.frontend.request.get_csrf_token();
app.frontend.request.get_body = (function app$frontend$request$get_body(response){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var error_QMARK_ = cljs.core.contains_QMARK_(body,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(200))){
if(error_QMARK_){
return console.error("Error:",body);
} else {
return body;
}
} else {
return console.error("Error:",status);
}
});
app.frontend.request.pathom = (function app$frontend$request$pathom(p__26082){
var map__26083 = p__26082;
var map__26083__$1 = cljs.core.__destructure_map(map__26083);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26083__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26083__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26083__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var c__18577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_26106){
var state_val_26107 = (state_26106[(1)]);
if((state_val_26107 === (1))){
var inst_26089 = (state_26106[(7)]);
var inst_26084 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"transit-params","transit-params",357261095)];
var inst_26085 = ["X-CSRF-Token"];
var inst_26086 = [app.frontend.request.csrf_token];
var inst_26087 = cljs.core.PersistentHashMap.fromArrays(inst_26085,inst_26086);
var inst_26088 = [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804)];
var inst_26089__$1 = initial_data;
var state_26106__$1 = (function (){var statearr_26110 = state_26106;
(statearr_26110[(8)] = inst_26084);

(statearr_26110[(9)] = inst_26087);

(statearr_26110[(10)] = inst_26088);

(statearr_26110[(7)] = inst_26089__$1);

return statearr_26110;
})();
if(cljs.core.truth_(inst_26089__$1)){
var statearr_26112_26296 = state_26106__$1;
(statearr_26112_26296[(1)] = (3));

} else {
var statearr_26113_26297 = state_26106__$1;
(statearr_26113_26297[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (2))){
var inst_26102 = (state_26106[(2)]);
var inst_26103 = app.frontend.request.get_body(inst_26102);
var inst_26104 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_26103) : callback.call(null,inst_26103));
var state_26106__$1 = state_26106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26106__$1,inst_26104);
} else {
if((state_val_26107 === (3))){
var inst_26089 = (state_26106[(7)]);
var state_26106__$1 = state_26106;
var statearr_26114_26298 = state_26106__$1;
(statearr_26114_26298[(2)] = inst_26089);

(statearr_26114_26298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (4))){
var inst_26092 = cljs.core.PersistentHashMap.EMPTY;
var state_26106__$1 = state_26106;
var statearr_26118_26299 = state_26106__$1;
(statearr_26118_26299[(2)] = inst_26092);

(statearr_26118_26299[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (5))){
var inst_26088 = (state_26106[(10)]);
var inst_26087 = (state_26106[(9)]);
var inst_26084 = (state_26106[(8)]);
var inst_26094 = (state_26106[(2)]);
var inst_26095 = [query,inst_26094];
var inst_26096 = cljs.core.PersistentHashMap.fromArrays(inst_26088,inst_26095);
var inst_26097 = [inst_26087,inst_26096];
var inst_26098 = cljs.core.PersistentHashMap.fromArrays(inst_26084,inst_26097);
var inst_26099 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26098], 0));
var inst_26100 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/query",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26099], 0));
var state_26106__$1 = state_26106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26106__$1,(2),inst_26100);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$frontend$request$pathom_$_state_machine__18347__auto__ = null;
var app$frontend$request$pathom_$_state_machine__18347__auto____0 = (function (){
var statearr_26122 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26122[(0)] = app$frontend$request$pathom_$_state_machine__18347__auto__);

(statearr_26122[(1)] = (1));

return statearr_26122;
});
var app$frontend$request$pathom_$_state_machine__18347__auto____1 = (function (state_26106){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_26106);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e26123){var ex__18350__auto__ = e26123;
var statearr_26124_26300 = state_26106;
(statearr_26124_26300[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_26106[(4)]))){
var statearr_26125_26301 = state_26106;
(statearr_26125_26301[(1)] = cljs.core.first((state_26106[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26305 = state_26106;
state_26106 = G__26305;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
app$frontend$request$pathom_$_state_machine__18347__auto__ = function(state_26106){
switch(arguments.length){
case 0:
return app$frontend$request$pathom_$_state_machine__18347__auto____0.call(this);
case 1:
return app$frontend$request$pathom_$_state_machine__18347__auto____1.call(this,state_26106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$frontend$request$pathom_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = app$frontend$request$pathom_$_state_machine__18347__auto____0;
app$frontend$request$pathom_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = app$frontend$request$pathom_$_state_machine__18347__auto____1;
return app$frontend$request$pathom_$_state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_26129 = f__18578__auto__();
(statearr_26129[(6)] = c__18577__auto__);

return statearr_26129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));

return c__18577__auto__;
});
var G__26130_26306 = new cljs.core.Keyword("pathom","request","pathom/request",789651790);
var G__26131_26307 = (function (pathom_props){
return app.frontend.request.pathom(pathom_props);
});
(zero.frontend.re_frame.reg_fx.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26130_26306,G__26131_26307) : zero.frontend.re_frame.reg_fx.call(null,G__26130_26306,G__26131_26307));
var G__26135_26308 = new cljs.core.Keyword("pathom","request!","pathom/request!",1107624999);
var G__26136_26309 = (function (_,p__26137){
var vec__26138 = p__26137;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26138,(0),null);
var pathom_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26138,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pathom","request","pathom/request",789651790),pathom_props], null);
});
(zero.frontend.re_frame.reg_event_fx.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_fx.cljs$core$IFn$_invoke$arity$2(G__26135_26308,G__26136_26309) : zero.frontend.re_frame.reg_event_fx.call(null,G__26135_26308,G__26136_26309));
app.frontend.request.pathom_with_workspace_id = (function app$frontend$request$pathom_with_workspace_id(p__26144){
var map__26145 = p__26144;
var map__26145__$1 = cljs.core.__destructure_map(map__26145);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26145__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26145__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26145__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var workspace_id = (function (){var G__26146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workspace","get-id","workspace/get-id",-1920143459)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__26146) : zero.frontend.re_frame.subscribe.call(null,G__26146));
})();
var c__18577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_26188){
var state_val_26189 = (state_26188[(1)]);
if((state_val_26189 === (1))){
var inst_26161 = (state_26188[(7)]);
var inst_26150 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"transit-params","transit-params",357261095)];
var inst_26151 = ["X-CSRF-Token"];
var inst_26152 = [app.frontend.request.csrf_token];
var inst_26153 = cljs.core.PersistentHashMap.fromArrays(inst_26151,inst_26152);
var inst_26154 = [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804)];
var inst_26155 = [new cljs.core.Keyword("workspace","id","workspace/id",1734778271)];
var inst_26156 = cljs.core.deref(workspace_id);
var inst_26157 = [inst_26156];
var inst_26158 = cljs.core.PersistentHashMap.fromArrays(inst_26155,inst_26157);
var inst_26161__$1 = initial_data;
var state_26188__$1 = (function (){var statearr_26193 = state_26188;
(statearr_26193[(8)] = inst_26150);

(statearr_26193[(9)] = inst_26153);

(statearr_26193[(10)] = inst_26154);

(statearr_26193[(11)] = inst_26158);

(statearr_26193[(7)] = inst_26161__$1);

return statearr_26193;
})();
if(cljs.core.truth_(inst_26161__$1)){
var statearr_26194_26311 = state_26188__$1;
(statearr_26194_26311[(1)] = (3));

} else {
var statearr_26196_26312 = state_26188__$1;
(statearr_26196_26312[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (2))){
var inst_26181 = (state_26188[(2)]);
var inst_26182 = app.frontend.request.get_body(inst_26181);
var inst_26183 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_26182) : callback.call(null,inst_26182));
var state_26188__$1 = state_26188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26188__$1,inst_26183);
} else {
if((state_val_26189 === (3))){
var inst_26161 = (state_26188[(7)]);
var state_26188__$1 = state_26188;
var statearr_26200_26313 = state_26188__$1;
(statearr_26200_26313[(2)] = inst_26161);

(statearr_26200_26313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (4))){
var inst_26167 = cljs.core.PersistentHashMap.EMPTY;
var state_26188__$1 = state_26188;
var statearr_26202_26314 = state_26188__$1;
(statearr_26202_26314[(2)] = inst_26167);

(statearr_26202_26314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (5))){
var inst_26158 = (state_26188[(11)]);
var inst_26154 = (state_26188[(10)]);
var inst_26153 = (state_26188[(9)]);
var inst_26150 = (state_26188[(8)]);
var inst_26169 = (state_26188[(2)]);
var inst_26173 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26158,inst_26169], 0));
var inst_26174 = [query,inst_26173];
var inst_26175 = cljs.core.PersistentHashMap.fromArrays(inst_26154,inst_26174);
var inst_26176 = [inst_26153,inst_26175];
var inst_26177 = cljs.core.PersistentHashMap.fromArrays(inst_26150,inst_26176);
var inst_26178 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26177], 0));
var inst_26179 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/query",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26178], 0));
var state_26188__$1 = state_26188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26188__$1,(2),inst_26179);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto__ = null;
var app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto____0 = (function (){
var statearr_26206 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26206[(0)] = app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto__);

(statearr_26206[(1)] = (1));

return statearr_26206;
});
var app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto____1 = (function (state_26188){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_26188);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e26207){var ex__18350__auto__ = e26207;
var statearr_26208_26315 = state_26188;
(statearr_26208_26315[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_26188[(4)]))){
var statearr_26209_26316 = state_26188;
(statearr_26209_26316[(1)] = cljs.core.first((state_26188[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26317 = state_26188;
state_26188 = G__26317;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto__ = function(state_26188){
switch(arguments.length){
case 0:
return app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto____0.call(this);
case 1:
return app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto____1.call(this,state_26188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto____0;
app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto____1;
return app$frontend$request$pathom_with_workspace_id_$_state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_26210 = f__18578__auto__();
(statearr_26210[(6)] = c__18577__auto__);

return statearr_26210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));

return c__18577__auto__;
});
var G__26211_26321 = new cljs.core.Keyword("pathom","ws-request","pathom/ws-request",226668729);
var G__26212_26322 = (function (pathom_props){
return app.frontend.request.pathom_with_workspace_id(pathom_props);
});
(zero.frontend.re_frame.reg_fx.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26211_26321,G__26212_26322) : zero.frontend.re_frame.reg_fx.call(null,G__26211_26321,G__26212_26322));
var G__26222_26323 = new cljs.core.Keyword("pathom","ws-request!","pathom/ws-request!",-1195195489);
var G__26223_26324 = (function (_,p__26224){
var vec__26225 = p__26224;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26225,(0),null);
var pathom_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26225,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pathom","ws-request","pathom/ws-request",226668729),pathom_props], null);
});
(zero.frontend.re_frame.reg_event_fx.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_fx.cljs$core$IFn$_invoke$arity$2(G__26222_26323,G__26223_26324) : zero.frontend.re_frame.reg_event_fx.call(null,G__26222_26323,G__26223_26324));
app.frontend.request.pathom_formdata = (function app$frontend$request$pathom_formdata(p__26228){
var map__26229 = p__26228;
var map__26229__$1 = cljs.core.__destructure_map(map__26229);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26229__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26229__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var form_data = (new FormData());
var workspace_id = (function (){var G__26230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workspace","get-id","workspace/get-id",-1920143459)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__26230) : zero.frontend.re_frame.subscribe.call(null,G__26230));
})();
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,file){
return form_data.append(index,file);
}),files));

form_data.append("query",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),cljs.core.deref(workspace_id)], null));

return form_data;
});
app.frontend.request.pathom_with_file = (function app$frontend$request$pathom_with_file(p__26231){
var map__26232 = p__26231;
var map__26232__$1 = cljs.core.__destructure_map(map__26232);
var props = map__26232__$1;
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26232__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var formdata = app.frontend.request.pathom_formdata(props);
var c__18577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18578__auto__ = (function (){var switch__18346__auto__ = (function (state_26249){
var state_val_26250 = (state_26249[(1)]);
if((state_val_26250 === (1))){
var inst_26237 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_26238 = ["X-CSRF-Token"];
var inst_26239 = [app.frontend.request.csrf_token];
var inst_26240 = cljs.core.PersistentHashMap.fromArrays(inst_26238,inst_26239);
var inst_26241 = [inst_26240,formdata];
var inst_26242 = cljs.core.PersistentHashMap.fromArrays(inst_26237,inst_26241);
var inst_26243 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/fquery",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26242], 0));
var state_26249__$1 = state_26249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26249__$1,(2),inst_26243);
} else {
if((state_val_26250 === (2))){
var inst_26245 = (state_26249[(2)]);
var inst_26246 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26245);
var inst_26247 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_26246) : callback.call(null,inst_26246));
var state_26249__$1 = state_26249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26249__$1,inst_26247);
} else {
return null;
}
}
});
return (function() {
var app$frontend$request$pathom_with_file_$_state_machine__18347__auto__ = null;
var app$frontend$request$pathom_with_file_$_state_machine__18347__auto____0 = (function (){
var statearr_26260 = [null,null,null,null,null,null,null];
(statearr_26260[(0)] = app$frontend$request$pathom_with_file_$_state_machine__18347__auto__);

(statearr_26260[(1)] = (1));

return statearr_26260;
});
var app$frontend$request$pathom_with_file_$_state_machine__18347__auto____1 = (function (state_26249){
while(true){
var ret_value__18348__auto__ = (function (){try{while(true){
var result__18349__auto__ = switch__18346__auto__(state_26249);
if(cljs.core.keyword_identical_QMARK_(result__18349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18349__auto__;
}
break;
}
}catch (e26261){var ex__18350__auto__ = e26261;
var statearr_26262_26325 = state_26249;
(statearr_26262_26325[(2)] = ex__18350__auto__);


if(cljs.core.seq((state_26249[(4)]))){
var statearr_26268_26326 = state_26249;
(statearr_26268_26326[(1)] = cljs.core.first((state_26249[(4)])));

} else {
throw ex__18350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26327 = state_26249;
state_26249 = G__26327;
continue;
} else {
return ret_value__18348__auto__;
}
break;
}
});
app$frontend$request$pathom_with_file_$_state_machine__18347__auto__ = function(state_26249){
switch(arguments.length){
case 0:
return app$frontend$request$pathom_with_file_$_state_machine__18347__auto____0.call(this);
case 1:
return app$frontend$request$pathom_with_file_$_state_machine__18347__auto____1.call(this,state_26249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$frontend$request$pathom_with_file_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$0 = app$frontend$request$pathom_with_file_$_state_machine__18347__auto____0;
app$frontend$request$pathom_with_file_$_state_machine__18347__auto__.cljs$core$IFn$_invoke$arity$1 = app$frontend$request$pathom_with_file_$_state_machine__18347__auto____1;
return app$frontend$request$pathom_with_file_$_state_machine__18347__auto__;
})()
})();
var state__18579__auto__ = (function (){var statearr_26269 = f__18578__auto__();
(statearr_26269[(6)] = c__18577__auto__);

return statearr_26269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18579__auto__);
}));

return c__18577__auto__;
});
var G__26275_26328 = new cljs.core.Keyword("pathom","formdata","pathom/formdata",-666655626);
var G__26276_26329 = (function (pathom_props){
return app.frontend.request.pathom_with_file(pathom_props);
});
(zero.frontend.re_frame.reg_fx.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26275_26328,G__26276_26329) : zero.frontend.re_frame.reg_fx.call(null,G__26275_26328,G__26276_26329));
var G__26287_26330 = new cljs.core.Keyword("pathom","frequest!","pathom/frequest!",-2095670147);
var G__26288_26331 = (function (_,p__26289){
var vec__26290 = p__26289;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(0),null);
var pathom_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pathom","formdata","pathom/formdata",-666655626),pathom_props], null);
});
(zero.frontend.re_frame.reg_event_fx.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_fx.cljs$core$IFn$_invoke$arity$2(G__26287_26330,G__26288_26331) : zero.frontend.re_frame.reg_event_fx.call(null,G__26287_26330,G__26288_26331));

//# sourceMappingURL=app.frontend.request.js.map
