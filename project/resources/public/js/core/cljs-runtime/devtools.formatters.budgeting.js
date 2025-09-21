goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__12782__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12782__auto__["add"]).call(o__12782__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__12782__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12782__auto__["delete"]).call(o__12782__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__12782__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12782__auto__["has"]).call(o__12782__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__15323 = data;
var target__12797__auto__ = G__15323;
if(cljs.core.truth_(target__12797__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15323)].join(''),"\n","target__12797__auto__"].join('')));
}

(target__12797__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__15323;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_15361 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_15361);
} else {
var seq__15329_15362 = cljs.core.seq(json_ml);
var chunk__15330_15363 = null;
var count__15331_15364 = (0);
var i__15332_15365 = (0);
while(true){
if((i__15332_15365 < count__15331_15364)){
var item_15368 = chunk__15330_15363.cljs$core$IIndexed$_nth$arity$2(null,i__15332_15365);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_15368,new_depth_budget_15361) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_15368,new_depth_budget_15361));


var G__15371 = seq__15329_15362;
var G__15372 = chunk__15330_15363;
var G__15373 = count__15331_15364;
var G__15374 = (i__15332_15365 + (1));
seq__15329_15362 = G__15371;
chunk__15330_15363 = G__15372;
count__15331_15364 = G__15373;
i__15332_15365 = G__15374;
continue;
} else {
var temp__5823__auto___15378 = cljs.core.seq(seq__15329_15362);
if(temp__5823__auto___15378){
var seq__15329_15381__$1 = temp__5823__auto___15378;
if(cljs.core.chunked_seq_QMARK_(seq__15329_15381__$1)){
var c__5548__auto___15386 = cljs.core.chunk_first(seq__15329_15381__$1);
var G__15387 = cljs.core.chunk_rest(seq__15329_15381__$1);
var G__15388 = c__5548__auto___15386;
var G__15389 = cljs.core.count(c__5548__auto___15386);
var G__15390 = (0);
seq__15329_15362 = G__15387;
chunk__15330_15363 = G__15388;
count__15331_15364 = G__15389;
i__15332_15365 = G__15390;
continue;
} else {
var item_15393 = cljs.core.first(seq__15329_15381__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_15393,new_depth_budget_15361) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_15393,new_depth_budget_15361));


var G__15401 = cljs.core.next(seq__15329_15381__$1);
var G__15402 = null;
var G__15403 = (0);
var G__15404 = (0);
seq__15329_15362 = G__15401;
chunk__15330_15363 = G__15402;
count__15331_15364 = G__15403;
i__15332_15365 = G__15404;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5821__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5821__auto__)){
var initial_hierarchy_depth_budget = temp__5821__auto__;
var remaining_depth_budget = (function (){var or__5025__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
