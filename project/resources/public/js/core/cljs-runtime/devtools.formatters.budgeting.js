goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__12904__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12904__auto__["add"]).call(o__12904__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__12904__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12904__auto__["delete"]).call(o__12904__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__12904__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12904__auto__["has"]).call(o__12904__auto__,value);
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
var G__15663 = data;
var target__12910__auto__ = G__15663;
if(cljs.core.truth_(target__12910__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15663)].join(''),"\n","target__12910__auto__"].join('')));
}

(target__12910__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__15663;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_15707 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_15707);
} else {
var seq__15672_15711 = cljs.core.seq(json_ml);
var chunk__15673_15712 = null;
var count__15674_15713 = (0);
var i__15675_15714 = (0);
while(true){
if((i__15675_15714 < count__15674_15713)){
var item_15715 = chunk__15673_15712.cljs$core$IIndexed$_nth$arity$2(null,i__15675_15714);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_15715,new_depth_budget_15707) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_15715,new_depth_budget_15707));


var G__15720 = seq__15672_15711;
var G__15721 = chunk__15673_15712;
var G__15722 = count__15674_15713;
var G__15723 = (i__15675_15714 + (1));
seq__15672_15711 = G__15720;
chunk__15673_15712 = G__15721;
count__15674_15713 = G__15722;
i__15675_15714 = G__15723;
continue;
} else {
var temp__5823__auto___15724 = cljs.core.seq(seq__15672_15711);
if(temp__5823__auto___15724){
var seq__15672_15726__$1 = temp__5823__auto___15724;
if(cljs.core.chunked_seq_QMARK_(seq__15672_15726__$1)){
var c__5548__auto___15727 = cljs.core.chunk_first(seq__15672_15726__$1);
var G__15728 = cljs.core.chunk_rest(seq__15672_15726__$1);
var G__15729 = c__5548__auto___15727;
var G__15730 = cljs.core.count(c__5548__auto___15727);
var G__15731 = (0);
seq__15672_15711 = G__15728;
chunk__15673_15712 = G__15729;
count__15674_15713 = G__15730;
i__15675_15714 = G__15731;
continue;
} else {
var item_15732 = cljs.core.first(seq__15672_15726__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_15732,new_depth_budget_15707) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_15732,new_depth_budget_15707));


var G__15733 = cljs.core.next(seq__15672_15726__$1);
var G__15734 = null;
var G__15735 = (0);
var G__15736 = (0);
seq__15672_15711 = G__15733;
chunk__15673_15712 = G__15734;
count__15674_15713 = G__15735;
i__15675_15714 = G__15736;
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
