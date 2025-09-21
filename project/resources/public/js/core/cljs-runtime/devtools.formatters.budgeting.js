goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__12837__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12837__auto__["add"]).call(o__12837__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__12837__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12837__auto__["delete"]).call(o__12837__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__12837__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12837__auto__["has"]).call(o__12837__auto__,value);
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
var G__15395 = data;
var target__12848__auto__ = G__15395;
if(cljs.core.truth_(target__12848__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15395)].join(''),"\n","target__12848__auto__"].join('')));
}

(target__12848__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__15395;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_15408 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_15408);
} else {
var seq__15397_15409 = cljs.core.seq(json_ml);
var chunk__15398_15410 = null;
var count__15399_15411 = (0);
var i__15400_15412 = (0);
while(true){
if((i__15400_15412 < count__15399_15411)){
var item_15413 = chunk__15398_15410.cljs$core$IIndexed$_nth$arity$2(null,i__15400_15412);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_15413,new_depth_budget_15408) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_15413,new_depth_budget_15408));


var G__15414 = seq__15397_15409;
var G__15415 = chunk__15398_15410;
var G__15416 = count__15399_15411;
var G__15417 = (i__15400_15412 + (1));
seq__15397_15409 = G__15414;
chunk__15398_15410 = G__15415;
count__15399_15411 = G__15416;
i__15400_15412 = G__15417;
continue;
} else {
var temp__5823__auto___15418 = cljs.core.seq(seq__15397_15409);
if(temp__5823__auto___15418){
var seq__15397_15419__$1 = temp__5823__auto___15418;
if(cljs.core.chunked_seq_QMARK_(seq__15397_15419__$1)){
var c__5548__auto___15420 = cljs.core.chunk_first(seq__15397_15419__$1);
var G__15421 = cljs.core.chunk_rest(seq__15397_15419__$1);
var G__15422 = c__5548__auto___15420;
var G__15423 = cljs.core.count(c__5548__auto___15420);
var G__15424 = (0);
seq__15397_15409 = G__15421;
chunk__15398_15410 = G__15422;
count__15399_15411 = G__15423;
i__15400_15412 = G__15424;
continue;
} else {
var item_15425 = cljs.core.first(seq__15397_15419__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_15425,new_depth_budget_15408) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_15425,new_depth_budget_15408));


var G__15426 = cljs.core.next(seq__15397_15419__$1);
var G__15427 = null;
var G__15428 = (0);
var G__15429 = (0);
seq__15397_15409 = G__15426;
chunk__15398_15410 = G__15427;
count__15399_15411 = G__15428;
i__15400_15412 = G__15429;
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
