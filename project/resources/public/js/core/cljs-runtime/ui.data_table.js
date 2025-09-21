goog.provide('ui.data_table');
var G__27803_27990 = new cljs.core.Keyword("data-table","set-search","data-table/set-search",-241762314);
var G__27804_27991 = (function (db,p__27805){
var vec__27806 = p__27805;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27806,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27806,(1),null);
var search_term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27806,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"search","search",1564939822)], null),search_term),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),(0));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__27803_27990,G__27804_27991) : zero.frontend.re_frame.reg_event_db.call(null,G__27803_27990,G__27804_27991));
var G__27809_27992 = new cljs.core.Keyword("data-table","set-sort","data-table/set-sort",351981518);
var G__27810_27993 = (function (db,p__27811){
var vec__27812 = p__27811;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27812,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27812,(1),null);
var sort_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27812,(2),null);
var sort_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27812,(3),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"sort","sort",953465918)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sort_key,new cljs.core.Keyword(null,"direction","direction",-633359395),sort_direction], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),(0));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__27809_27992,G__27810_27993) : zero.frontend.re_frame.reg_event_db.call(null,G__27809_27992,G__27810_27993));
var G__27815_27994 = new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135);
var G__27816_27995 = (function (db,p__27817){
var vec__27818 = p__27817;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27818,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27818,(1),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27818,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),page);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__27815_27994,G__27816_27995) : zero.frontend.re_frame.reg_event_db.call(null,G__27815_27994,G__27816_27995));
var G__27821_27996 = new cljs.core.Keyword("data-table","set-page-size","data-table/set-page-size",-1756940563);
var G__27822_27997 = (function (db,p__27823){
var vec__27824 = p__27823;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824,(1),null);
var page_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"page-size","page-size",223836073)], null),page_size);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__27821_27996,G__27822_27997) : zero.frontend.re_frame.reg_event_db.call(null,G__27821_27996,G__27822_27997));
var G__27827_27998 = new cljs.core.Keyword("data-table","reset-state","data-table/reset-state",1009637636);
var G__27828_27999 = (function (db,p__27829){
var vec__27830 = p__27829;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null)], null));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__27827_27998,G__27828_27999) : zero.frontend.re_frame.reg_event_db.call(null,G__27827_27998,G__27828_27999));
var G__27833_28001 = new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358);
var G__27834_28002 = (function (db,p__27835){
var vec__27836 = p__27835;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27836,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27836,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27833_28001,G__27834_28002) : zero.frontend.re_frame.reg_sub.call(null,G__27833_28001,G__27834_28002));
var G__27839_28004 = new cljs.core.Keyword("data-table","get-search","data-table/get-search",1426835433);
var G__27840_28005 = (function (db,p__27841){
var vec__27842 = p__27841;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27842,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27842,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"search","search",1564939822)], null),"");
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27839_28004,G__27840_28005) : zero.frontend.re_frame.reg_sub.call(null,G__27839_28004,G__27840_28005));
var G__27845_28006 = new cljs.core.Keyword("data-table","get-sort","data-table/get-sort",-1700535166);
var G__27846_28007 = (function (db,p__27847){
var vec__27848 = p__27847;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27848,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27848,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"sort","sort",953465918)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27845_28006,G__27846_28007) : zero.frontend.re_frame.reg_sub.call(null,G__27845_28006,G__27846_28007));
var G__27851_28008 = new cljs.core.Keyword("data-table","get-pagination","data-table/get-pagination",-663522475);
var G__27852_28009 = (function (db,p__27853){
var vec__27854 = p__27853;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27854,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27854,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27851_28008,G__27852_28009) : zero.frontend.re_frame.reg_sub.call(null,G__27851_28008,G__27852_28009));
/**
 * Check if a row matches the search term
 */
ui.data_table.search_matches_QMARK_ = (function ui$data_table$search_matches_QMARK_(row,search_term,headers){
if(clojure.string.blank_QMARK_(search_term)){
return true;
} else {
var search_lower = clojure.string.lower_case(search_term);
return cljs.core.some((function (header){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var value_str = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()));
return clojure.string.includes_QMARK_(value_str,search_lower);
}),headers);
}
});
/**
 * Sort rows by the given sort configuration
 */
ui.data_table.sort_rows = (function ui$data_table$sort_rows(rows,sort_config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sort_config))){
var sort_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sort_config),new cljs.core.Keyword(null,"desc","desc",2093485764)))?(function (p1__27858_SHARP_,p2__27857_SHARP_){
return cljs.core.compare(p2__27857_SHARP_,p1__27858_SHARP_);
}):cljs.core.compare);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__27859_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__27859_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sort_config));
}),sort_fn,rows);
} else {
return rows;
}
});
/**
 * Apply pagination to rows
 */
ui.data_table.paginate_rows = (function ui$data_table$paginate_rows(rows,pagination){
var page_size = new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$1(pagination);
var current_page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(pagination);
var start_idx = (current_page * page_size);
var end_idx = (start_idx + page_size);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(rows),start_idx,(function (){var x__5113__auto__ = end_idx;
var y__5114__auto__ = cljs.core.count(rows);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})());
});
/**
 * Apply search, sort, and pagination to rows
 */
ui.data_table.filter_sort_paginate = (function ui$data_table$filter_sort_paginate(rows,headers,table_state){
var search_term = new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(table_state);
var sort_config = new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(table_state);
var pagination = new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(table_state);
var filtered_rows = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27866_SHARP_){
return ui.data_table.search_matches_QMARK_(p1__27866_SHARP_,search_term,headers);
}),rows);
var sorted_rows = ui.data_table.sort_rows(filtered_rows,sort_config);
var total_count = cljs.core.count(sorted_rows);
var paginated_rows = ui.data_table.paginate_rows(sorted_rows,pagination);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),paginated_rows,new cljs.core.Keyword(null,"total-count","total-count",-1999441386),total_count,new cljs.core.Keyword(null,"filtered-count","filtered-count",-358234810),cljs.core.count(filtered_rows)], null);
});
/**
 * Table header cell styling
 */
ui.data_table.table_header_style = (function ui$data_table$table_header_style(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],["uppercase","#374151","left","0.75rem","600","#f9fafb","1rem 1.25rem","0.05em","1px solid #e5e7eb"]);
});
/**
 * Table body cell styling
 */
ui.data_table.table_cell_style = (function ui$data_table$table_cell_style(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 1.25rem",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #f3f4f6",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null);
});
/**
 * Styled action button for table rows
 */
ui.data_table.action_button = (function ui$data_table$action_button(var_args){
var args__5755__auto__ = [];
var len__5749__auto___28011 = arguments.length;
var i__5750__auto___28012 = (0);
while(true){
if((i__5750__auto___28012 < len__5749__auto___28011)){
args__5755__auto__.push((arguments[i__5750__auto___28012]));

var G__28013 = (i__5750__auto___28012 + (1));
i__5750__auto___28012 = G__28013;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return ui.data_table.action_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(ui.data_table.action_button.cljs$core$IFn$_invoke$arity$variadic = (function (text,on_click,variant,p__27877){
var map__27878 = p__27877;
var map__27878__$1 = cljs.core.__destructure_map(map__27878);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27878__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var variant_styles = (function (){var G__27879 = variant;
var G__27879__$1 = (((G__27879 instanceof cljs.core.Keyword))?G__27879.fqn:null);
switch (G__27879__$1) {
case "primary":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#f3f4f6",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#e5e7eb",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#9ca3af"], null)], null);

break;
case "danger":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#fef2f2",new cljs.core.Keyword(null,"color","color",1011675173),"#dc2626",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #fecaca",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#fee2e2",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#fca5a5"], null)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#f3f4f6",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#e5e7eb",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#9ca3af"], null)], null);

}
})();
if(cljs.core.truth_(href)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.15s ease-in-out",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),variant_styles], 0))], null),text], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.15s ease-in-out"], null),variant_styles], 0))], null),text], null);
}
}));

(ui.data_table.action_button.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ui.data_table.action_button.cljs$lang$applyTo = (function (seq27873){
var G__27874 = cljs.core.first(seq27873);
var seq27873__$1 = cljs.core.next(seq27873);
var G__27875 = cljs.core.first(seq27873__$1);
var seq27873__$2 = cljs.core.next(seq27873__$1);
var G__27876 = cljs.core.first(seq27873__$2);
var seq27873__$3 = cljs.core.next(seq27873__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27874,G__27875,G__27876,seq27873__$3);
}));

/**
 * Search input component
 */
ui.data_table.search_input = (function ui$data_table$search_input(table_id,search_term){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("table","search","table/search",1429686880)),new cljs.core.Keyword(null,"value","value",305978217),search_term,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27881_SHARP_){
var G__27882 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-search","data-table/set-search",-241762314),table_id,p1__27881_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__27882) : zero.frontend.re_frame.dispatch.call(null,G__27882));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["0 1px 2px 0 rgba(0, 0, 0, 0.05)","0.875rem","300px","white","0.75rem 1rem","none",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#3b82f6",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 3px rgba(59, 130, 246, 0.1)"], null),"1px solid #d1d5db","8px"])], null)], null)], null);
});
/**
 * Sortable column header
 */
ui.data_table.sortable_header = (function ui$data_table$sortable_header(header,table_id,sort_config){
var is_sorted_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sort_config),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var is_sortable_QMARK_ = new cljs.core.Keyword(null,"sortable?","sortable?",291547474).cljs$core$IFn$_invoke$arity$2(header,true);
var sort_direction = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sort_config);
var next_direction = ((((is_sorted_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_direction,new cljs.core.Keyword(null,"asc","asc",356854569)))))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_header_style(),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(header),(cljs.core.truth_(is_sortable_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null):null)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(is_sortable_QMARK_)?(function (){
var G__27883 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-sort","data-table/set-sort",351981518),table_id,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header),next_direction], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__27883) : zero.frontend.re_frame.dispatch.call(null,G__27883));
}):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem"], null)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(header),(cljs.core.truth_(is_sortable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),((is_sorted_QMARK_)?"#3b82f6":"#9ca3af"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null)], null),((((is_sorted_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_direction,new cljs.core.Keyword(null,"asc","asc",356854569)))))?"\u2191":((((is_sorted_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_direction,new cljs.core.Keyword(null,"desc","desc",2093485764)))))?"\u2193":"\u2195"
))], null):null)], null)], null);
});
/**
 * Pagination controls component
 */
ui.data_table.pagination_controls = (function ui$data_table$pagination_controls(table_id,pagination,total_count){
var current_page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(pagination);
var page_size = new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$1(pagination);
var total_pages = Math.ceil((total_count / page_size));
var has_prev_QMARK_ = (current_page > (0));
var has_next_QMARK_ = (current_page < (total_pages - (1)));
var start_item = ((current_page * page_size) + (1));
var end_item = (function (){var x__5113__auto__ = ((current_page + (1)) * page_size);
var y__5114__auto__ = total_count;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((total_pages > (1))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(translations.core.tr(new cljs.core.Keyword("table","showing","table/showing",654400726)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_item)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translations.core.tr(new cljs.core.Keyword("table","to","table/to",149020393)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_item)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translations.core.tr(new cljs.core.Keyword("table","of","table/of",2076011914)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_count)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translations.core.tr(new cljs.core.Keyword("table","entries","table/entries",-98492111)))].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(has_prev_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__27884 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,(current_page - (1))], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__27884) : zero.frontend.re_frame.dispatch.call(null,G__27884));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((has_prev_QMARK_)?"white":"#f3f4f6"),new cljs.core.Keyword(null,"color","color",1011675173),((has_prev_QMARK_)?"#374151":"#9ca3af"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((has_prev_QMARK_)?"pointer":"not-allowed"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","previous","table/previous",-1415448378))], null),(function (){var start_page = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (current_page - (2));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var end_page = (function (){var x__5113__auto__ = total_pages;
var y__5114__auto__ = (current_page + (3));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var iter__5503__auto__ = (function ui$data_table$pagination_controls_$_iter__27885(s__27886){
return (new cljs.core.LazySeq(null,(function (){
var s__27886__$1 = s__27886;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__27886__$1);
if(temp__5823__auto__){
var s__27886__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27886__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27886__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27888 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27887 = (0);
while(true){
if((i__27887 < size__5502__auto__)){
var page = cljs.core._nth(c__5501__auto__,i__27887);
cljs.core.chunk_append(b__27888,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27887,page,c__5501__auto__,size__5502__auto__,b__27888,s__27886__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item){
return (function (){
var G__27889 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,page], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__27889) : zero.frontend.re_frame.dispatch.call(null,G__27889));
});})(i__27887,page,c__5501__auto__,size__5502__auto__,b__27888,s__27886__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"#3b82f6":"white"),new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"white":"#374151"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0.125rem"], null)], null),(page + (1))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)));

var G__28076 = (i__27887 + (1));
i__27887 = G__28076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27888),ui$data_table$pagination_controls_$_iter__27885(cljs.core.chunk_rest(s__27886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27888),null);
}
} else {
var page = cljs.core.first(s__27886__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__27886__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item){
return (function (){
var G__27890 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,page], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__27890) : zero.frontend.re_frame.dispatch.call(null,G__27890));
});})(page,s__27886__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"#3b82f6":"white"),new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"white":"#374151"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0.125rem"], null)], null),(page + (1))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)),ui$data_table$pagination_controls_$_iter__27885(cljs.core.rest(s__27886__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_page,end_page));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(has_next_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__27891 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,(current_page + (1))], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__27891) : zero.frontend.re_frame.dispatch.call(null,G__27891));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((has_next_QMARK_)?"white":"#f3f4f6"),new cljs.core.Keyword(null,"color","color",1011675173),((has_next_QMARK_)?"#374151":"#9ca3af"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((has_next_QMARK_)?"pointer":"not-allowed"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","next","table/next",-494153635))], null)], null)], null);
} else {
return null;
}
});
/**
 * Status badge component for displaying active/inactive states
 */
ui.data_table.status_badge = (function ui$data_table$status_badge(var_args){
var args__5755__auto__ = [];
var len__5749__auto___28108 = arguments.length;
var i__5750__auto___28109 = (0);
while(true){
if((i__5750__auto___28109 < len__5749__auto___28108)){
args__5755__auto__.push((arguments[i__5750__auto___28109]));

var G__28111 = (i__5750__auto___28109 + (1));
i__5750__auto___28109 = G__28111;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return ui.data_table.status_badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(ui.data_table.status_badge.cljs$core$IFn$_invoke$arity$variadic = (function (active_QMARK_,p__27894){
var map__27895 = p__27894;
var map__27895__$1 = cljs.core.__destructure_map(map__27895);
var active_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27895__$1,new cljs.core.Keyword(null,"active-text","active-text",758142518));
var inactive_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27895__$1,new cljs.core.Keyword(null,"inactive-text","inactive-text",491481192));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"9999px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(active_QMARK_)?"#dcfce7":"#fee2e2"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(active_QMARK_)?"#166534":"#dc2626")], null)], null),(cljs.core.truth_(active_QMARK_)?(function (){var or__5025__auto__ = active_text;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return translations.core.tr(new cljs.core.Keyword("table","active","table/active",1718768102));
}
})():(function (){var or__5025__auto__ = inactive_text;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return translations.core.tr(new cljs.core.Keyword("table","inactive","table/inactive",1313784938));
}
})())], null);
}));

(ui.data_table.status_badge.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ui.data_table.status_badge.cljs$lang$applyTo = (function (seq27892){
var G__27893 = cljs.core.first(seq27892);
var seq27892__$1 = cljs.core.next(seq27892);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27893,seq27892__$1);
}));

/**
 * Modern styled data table with client-side search, sorting, and pagination
 */
ui.data_table.data_table = (function ui$data_table$data_table(p__27896){
var map__27897 = p__27896;
var map__27897__$1 = cljs.core.__destructure_map(map__27897);
var show_pagination_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27897__$1,new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515),true);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27897__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"id","id",-1388402092));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27897__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"default","default",-1987822328));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27897__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var empty_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27897__$1,new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27897__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27897__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27897__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var show_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27897__$1,new cljs.core.Keyword(null,"show-search?","show-search?",684663920),true);
var table_state = cljs.core.deref((function (){var G__27898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358),table_id], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__27898) : zero.frontend.re_frame.subscribe.call(null,G__27898));
})());
var search_term = new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(table_state);
var sort_config = new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(table_state);
var pagination = new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(table_state);
var processed_data = (cljs.core.truth_(rows)?ui.data_table.filter_sort_paginate(rows,headers,table_state):null);
var display_rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(processed_data);
var total_count = new cljs.core.Keyword(null,"total-count","total-count",-1999441386).cljs$core$IFn$_invoke$arity$1(processed_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(show_search_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.search_input,table_id,search_term], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"border","border",1444987323),"4px solid #f3f4f6",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"4px solid #3b82f6",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"animation","animation",-1248293244),"spin 1s linear infinite",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto 1rem"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),translations.core.tr(new cljs.core.Keyword("table","loading","table/loading",-628992827))], null)], null)], null):(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.empty_QMARK_(rows);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = total_count;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_count,(0));
} else {
return and__5023__auto__;
}
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),(function (){var or__5025__auto__ = empty_message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return translations.core.tr(new cljs.core.Keyword("table","no-data","table/no-data",2119568656));
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","no-items","table/no-items",-919114863))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function ui$data_table$data_table_$_iter__27899(s__27900){
return (new cljs.core.LazySeq(null,(function (){
var s__27900__$1 = s__27900;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__27900__$1);
if(temp__5823__auto__){
var s__27900__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27900__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27900__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27902 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27901 = (0);
while(true){
if((i__27901 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__27901);
cljs.core.chunk_append(b__27902,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)));

var G__28144 = (i__27901 + (1));
i__27901 = G__28144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27902),ui$data_table$data_table_$_iter__27899(cljs.core.chunk_rest(s__27900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27902),null);
}
} else {
var header = cljs.core.first(s__27900__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)),ui$data_table$data_table_$_iter__27899(cljs.core.rest(s__27900__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_header_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),translations.core.tr(new cljs.core.Keyword("table","actions","table/actions",-698381628))], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function ui$data_table$data_table_$_iter__27903(s__27904){
return (new cljs.core.LazySeq(null,(function (){
var s__27904__$1 = s__27904;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__27904__$1);
if(temp__5823__auto__){
var s__27904__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27904__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27904__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27906 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27905 = (0);
while(true){
if((i__27905 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__27905);
cljs.core.chunk_append(b__27906,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (i__27905,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__27903_$_iter__27907(s__27908){
return (new cljs.core.LazySeq(null,((function (i__27905,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
var s__27908__$1 = s__27908;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__27908__$1);
if(temp__5823__auto____$1){
var s__27908__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27908__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__27908__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__27910 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__27909 = (0);
while(true){
if((i__27909 < size__5502__auto____$1)){
var header = cljs.core._nth(c__5501__auto____$1,i__27909);
cljs.core.chunk_append(b__27910,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__27912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__27913 = row;
var fexpr__27911 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__27911.cljs$core$IFn$_invoke$arity$2 ? fexpr__27911.cljs$core$IFn$_invoke$arity$2(G__27912,G__27913) : fexpr__27911.call(null,G__27912,G__27913));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__28147 = (i__27909 + (1));
i__27909 = G__28147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27910),ui$data_table$data_table_$_iter__27903_$_iter__27907(cljs.core.chunk_rest(s__27908__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27910),null);
}
} else {
var header = cljs.core.first(s__27908__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__27915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__27916 = row;
var fexpr__27914 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__27914.cljs$core$IFn$_invoke$arity$2 ? fexpr__27914.cljs$core$IFn$_invoke$arity$2(G__27915,G__27916) : fexpr__27914.call(null,G__27915,G__27916));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$data_table_$_iter__27903_$_iter__27907(cljs.core.rest(s__27908__$2)));
}
} else {
return null;
}
break;
}
});})(i__27905,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,null,null));
});})(i__27905,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (i__27905,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__27903_$_iter__27917(s__27918){
return (new cljs.core.LazySeq(null,((function (i__27905,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
var s__27918__$1 = s__27918;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__27918__$1);
if(temp__5823__auto____$1){
var s__27918__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27918__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__27918__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__27920 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__27919 = (0);
while(true){
if((i__27919 < size__5502__auto____$1)){
var action = cljs.core._nth(c__5501__auto____$1,i__27919);
cljs.core.chunk_append(b__27920,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__27919,i__27905,action,c__5501__auto____$1,size__5502__auto____$1,b__27920,s__27918__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__27921 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27921.cljs$core$IFn$_invoke$arity$1 ? fexpr__27921.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27921.call(null,row));
} else {
return null;
}
});})(i__27919,i__27905,action,c__5501__auto____$1,size__5502__auto____$1,b__27920,s__27918__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__27922 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27922.cljs$core$IFn$_invoke$arity$1 ? fexpr__27922.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27922.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__28155 = (i__27919 + (1));
i__27919 = G__28155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27920),ui$data_table$data_table_$_iter__27903_$_iter__27917(cljs.core.chunk_rest(s__27918__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27920),null);
}
} else {
var action = cljs.core.first(s__27918__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__27905,action,s__27918__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__27923 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27923.cljs$core$IFn$_invoke$arity$1 ? fexpr__27923.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27923.call(null,row));
} else {
return null;
}
});})(i__27905,action,s__27918__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__27924 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27924.cljs$core$IFn$_invoke$arity$1 ? fexpr__27924.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27924.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$data_table_$_iter__27903_$_iter__27917(cljs.core.rest(s__27918__$2)));
}
} else {
return null;
}
break;
}
});})(i__27905,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,null,null));
});})(i__27905,row,c__5501__auto__,size__5502__auto__,b__27906,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)));

var G__28157 = (i__27905 + (1));
i__27905 = G__28157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27906),ui$data_table$data_table_$_iter__27903(cljs.core.chunk_rest(s__27904__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27906),null);
}
} else {
var row = cljs.core.first(s__27904__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__27903_$_iter__27925(s__27926){
return (new cljs.core.LazySeq(null,(function (){
var s__27926__$1 = s__27926;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__27926__$1);
if(temp__5823__auto____$1){
var s__27926__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27926__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27926__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27928 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27927 = (0);
while(true){
if((i__27927 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__27927);
cljs.core.chunk_append(b__27928,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__27930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__27931 = row;
var fexpr__27929 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__27929.cljs$core$IFn$_invoke$arity$2 ? fexpr__27929.cljs$core$IFn$_invoke$arity$2(G__27930,G__27931) : fexpr__27929.call(null,G__27930,G__27931));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__28160 = (i__27927 + (1));
i__27927 = G__28160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27928),ui$data_table$data_table_$_iter__27903_$_iter__27925(cljs.core.chunk_rest(s__27926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27928),null);
}
} else {
var header = cljs.core.first(s__27926__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__27933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__27934 = row;
var fexpr__27932 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__27932.cljs$core$IFn$_invoke$arity$2 ? fexpr__27932.cljs$core$IFn$_invoke$arity$2(G__27933,G__27934) : fexpr__27932.call(null,G__27933,G__27934));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$data_table_$_iter__27903_$_iter__27925(cljs.core.rest(s__27926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__27903_$_iter__27935(s__27936){
return (new cljs.core.LazySeq(null,(function (){
var s__27936__$1 = s__27936;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__27936__$1);
if(temp__5823__auto____$1){
var s__27936__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27936__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27936__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27938 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27937 = (0);
while(true){
if((i__27937 < size__5502__auto__)){
var action = cljs.core._nth(c__5501__auto__,i__27937);
cljs.core.chunk_append(b__27938,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__27937,action,c__5501__auto__,size__5502__auto__,b__27938,s__27936__$2,temp__5823__auto____$1,row,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__27939 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27939.cljs$core$IFn$_invoke$arity$1 ? fexpr__27939.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27939.call(null,row));
} else {
return null;
}
});})(i__27937,action,c__5501__auto__,size__5502__auto__,b__27938,s__27936__$2,temp__5823__auto____$1,row,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__27940 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27940.cljs$core$IFn$_invoke$arity$1 ? fexpr__27940.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27940.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__28161 = (i__27937 + (1));
i__27937 = G__28161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27938),ui$data_table$data_table_$_iter__27903_$_iter__27935(cljs.core.chunk_rest(s__27936__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27938),null);
}
} else {
var action = cljs.core.first(s__27936__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (action,s__27936__$2,temp__5823__auto____$1,row,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__27941 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27941.cljs$core$IFn$_invoke$arity$1 ? fexpr__27941.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27941.call(null,row));
} else {
return null;
}
});})(action,s__27936__$2,temp__5823__auto____$1,row,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__27942 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27942.cljs$core$IFn$_invoke$arity$1 ? fexpr__27942.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27942.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$data_table_$_iter__27903_$_iter__27935(cljs.core.rest(s__27936__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__27904__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__27897,map__27897__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)),ui$data_table$data_table_$_iter__27903(cljs.core.rest(s__27904__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(display_rows);
})()], null)], null)], null),(cljs.core.truth_((function (){var and__5023__auto__ = show_pagination_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return total_count;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.pagination_controls,table_id,pagination,total_count], null):null)], null)
))], null);
});
/**
 * Modern data table with server-side filtering, sorting, and pagination
 */
ui.data_table.server_side_data_table = (function ui$data_table$server_side_data_table(p__27943){
var map__27944 = p__27943;
var map__27944__$1 = cljs.core.__destructure_map(map__27944);
var show_pagination_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27944__$1,new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515),true);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27944__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"id","id",-1388402092));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27944__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"default","default",-1987822328));
var query_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27944__$1,new cljs.core.Keyword(null,"query-fn","query-fn",-646736760));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27944__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var empty_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27944__$1,new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27944__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27944__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27944__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var show_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27944__$1,new cljs.core.Keyword(null,"show-search?","show-search?",684663920),true);
var on_data_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27944__$1,new cljs.core.Keyword(null,"on-data-change","on-data-change",475267763));
var data_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27944__$1,new cljs.core.Keyword(null,"data-key","data-key",1775480631));
var table_state = cljs.core.deref((function (){var G__27945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358),table_id], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__27945) : zero.frontend.re_frame.subscribe.call(null,G__27945));
})());
var search_term = new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(table_state);
var sort_config = new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(table_state);
var pagination = new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(table_state);
var rows = (cljs.core.truth_(data_key)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(data_source,data_key,cljs.core.PersistentVector.EMPTY):data_source);
var server_pagination = new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(data_source);
var total_count = new cljs.core.Keyword(null,"total-count","total-count",-1999441386).cljs$core$IFn$_invoke$arity$2(server_pagination,(0));
var normalized_search_28170 = (function (){var or__5025__auto__ = search_term;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
var normalized_sort_key_28171 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sort_config);
var normalized_sort_direction_28172 = cljs.core.name(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$2(sort_config,new cljs.core.Keyword(null,"asc","asc",356854569)));
var normalized_page_28173 = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$2(pagination,(0));
var normalized_page_size_28174 = new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$2(pagination,(10));
var normalized_search_map_28175 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",1564939822),normalized_search_28170,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),normalized_sort_key_28171,new cljs.core.Keyword(null,"sort-direction","sort-direction",-1635889628),normalized_sort_direction_28172,new cljs.core.Keyword(null,"page","page",849072397),normalized_page_28173,new cljs.core.Keyword(null,"page-size","page-size",223836073),normalized_page_size_28174], null);
zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
if(cljs.core.truth_(query_fn)){
return (query_fn.cljs$core$IFn$_invoke$arity$1 ? query_fn.cljs$core$IFn$_invoke$arity$1(normalized_search_map_28175) : query_fn.call(null,normalized_search_map_28175));
} else {
return null;
}
}),new cljs.core.Keyword(null,"params","params",710516235),[]], null));

zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
if(cljs.core.truth_(query_fn)){
return (query_fn.cljs$core$IFn$_invoke$arity$1 ? query_fn.cljs$core$IFn$_invoke$arity$1(normalized_search_map_28175) : query_fn.call(null,normalized_search_map_28175));
} else {
return null;
}
}),new cljs.core.Keyword(null,"params","params",710516235),[normalized_search_28170,normalized_sort_key_28171,normalized_sort_direction_28172,normalized_page_28173,normalized_page_size_28174]], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(show_search_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.search_input,table_id,search_term], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"border","border",1444987323),"4px solid #f3f4f6",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"4px solid #3b82f6",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"animation","animation",-1248293244),"spin 1s linear infinite",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto 1rem"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),translations.core.tr(new cljs.core.Keyword("table","loading","table/loading",-628992827))], null)], null)], null):((((cljs.core.empty_QMARK_(rows)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_count,(0)))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),(function (){var or__5025__auto__ = empty_message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return translations.core.tr(new cljs.core.Keyword("table","no-data","table/no-data",2119568656));
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","no-items","table/no-items",-919114863))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function ui$data_table$server_side_data_table_$_iter__27946(s__27947){
return (new cljs.core.LazySeq(null,(function (){
var s__27947__$1 = s__27947;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__27947__$1);
if(temp__5823__auto__){
var s__27947__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27947__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27947__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27949 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27948 = (0);
while(true){
if((i__27948 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__27948);
cljs.core.chunk_append(b__27949,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)));

var G__28179 = (i__27948 + (1));
i__27948 = G__28179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27949),ui$data_table$server_side_data_table_$_iter__27946(cljs.core.chunk_rest(s__27947__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27949),null);
}
} else {
var header = cljs.core.first(s__27947__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)),ui$data_table$server_side_data_table_$_iter__27946(cljs.core.rest(s__27947__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_header_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),translations.core.tr(new cljs.core.Keyword("table","actions","table/actions",-698381628))], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function ui$data_table$server_side_data_table_$_iter__27950(s__27951){
return (new cljs.core.LazySeq(null,(function (){
var s__27951__$1 = s__27951;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__27951__$1);
if(temp__5823__auto__){
var s__27951__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27951__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27951__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27953 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27952 = (0);
while(true){
if((i__27952 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__27952);
cljs.core.chunk_append(b__27953,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (i__27952,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__27950_$_iter__27954(s__27955){
return (new cljs.core.LazySeq(null,((function (i__27952,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
var s__27955__$1 = s__27955;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__27955__$1);
if(temp__5823__auto____$1){
var s__27955__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27955__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__27955__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__27957 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__27956 = (0);
while(true){
if((i__27956 < size__5502__auto____$1)){
var header = cljs.core._nth(c__5501__auto____$1,i__27956);
cljs.core.chunk_append(b__27957,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__27959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__27960 = row;
var fexpr__27958 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__27958.cljs$core$IFn$_invoke$arity$2 ? fexpr__27958.cljs$core$IFn$_invoke$arity$2(G__27959,G__27960) : fexpr__27958.call(null,G__27959,G__27960));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__28191 = (i__27956 + (1));
i__27956 = G__28191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27957),ui$data_table$server_side_data_table_$_iter__27950_$_iter__27954(cljs.core.chunk_rest(s__27955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27957),null);
}
} else {
var header = cljs.core.first(s__27955__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__27962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__27963 = row;
var fexpr__27961 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__27961.cljs$core$IFn$_invoke$arity$2 ? fexpr__27961.cljs$core$IFn$_invoke$arity$2(G__27962,G__27963) : fexpr__27961.call(null,G__27962,G__27963));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$server_side_data_table_$_iter__27950_$_iter__27954(cljs.core.rest(s__27955__$2)));
}
} else {
return null;
}
break;
}
});})(i__27952,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,null,null));
});})(i__27952,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (i__27952,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__27950_$_iter__27964(s__27965){
return (new cljs.core.LazySeq(null,((function (i__27952,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
var s__27965__$1 = s__27965;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__27965__$1);
if(temp__5823__auto____$1){
var s__27965__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27965__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__27965__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__27967 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__27966 = (0);
while(true){
if((i__27966 < size__5502__auto____$1)){
var action = cljs.core._nth(c__5501__auto____$1,i__27966);
cljs.core.chunk_append(b__27967,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__27966,i__27952,action,c__5501__auto____$1,size__5502__auto____$1,b__27967,s__27965__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__27968 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27968.cljs$core$IFn$_invoke$arity$1 ? fexpr__27968.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27968.call(null,row));
} else {
return null;
}
});})(i__27966,i__27952,action,c__5501__auto____$1,size__5502__auto____$1,b__27967,s__27965__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__27969 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27969.cljs$core$IFn$_invoke$arity$1 ? fexpr__27969.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27969.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__28200 = (i__27966 + (1));
i__27966 = G__28200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27967),ui$data_table$server_side_data_table_$_iter__27950_$_iter__27964(cljs.core.chunk_rest(s__27965__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27967),null);
}
} else {
var action = cljs.core.first(s__27965__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__27952,action,s__27965__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__27970 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27970.cljs$core$IFn$_invoke$arity$1 ? fexpr__27970.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27970.call(null,row));
} else {
return null;
}
});})(i__27952,action,s__27965__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__27971 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27971.cljs$core$IFn$_invoke$arity$1 ? fexpr__27971.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27971.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$server_side_data_table_$_iter__27950_$_iter__27964(cljs.core.rest(s__27965__$2)));
}
} else {
return null;
}
break;
}
});})(i__27952,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,null,null));
});})(i__27952,row,c__5501__auto__,size__5502__auto__,b__27953,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)));

var G__28204 = (i__27952 + (1));
i__27952 = G__28204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27953),ui$data_table$server_side_data_table_$_iter__27950(cljs.core.chunk_rest(s__27951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27953),null);
}
} else {
var row = cljs.core.first(s__27951__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__27950_$_iter__27972(s__27973){
return (new cljs.core.LazySeq(null,(function (){
var s__27973__$1 = s__27973;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__27973__$1);
if(temp__5823__auto____$1){
var s__27973__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27973__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27973__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27975 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27974 = (0);
while(true){
if((i__27974 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__27974);
cljs.core.chunk_append(b__27975,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__27977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__27978 = row;
var fexpr__27976 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__27976.cljs$core$IFn$_invoke$arity$2 ? fexpr__27976.cljs$core$IFn$_invoke$arity$2(G__27977,G__27978) : fexpr__27976.call(null,G__27977,G__27978));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__28207 = (i__27974 + (1));
i__27974 = G__28207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27975),ui$data_table$server_side_data_table_$_iter__27950_$_iter__27972(cljs.core.chunk_rest(s__27973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27975),null);
}
} else {
var header = cljs.core.first(s__27973__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__27980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__27981 = row;
var fexpr__27979 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__27979.cljs$core$IFn$_invoke$arity$2 ? fexpr__27979.cljs$core$IFn$_invoke$arity$2(G__27980,G__27981) : fexpr__27979.call(null,G__27980,G__27981));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$server_side_data_table_$_iter__27950_$_iter__27972(cljs.core.rest(s__27973__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__27950_$_iter__27982(s__27983){
return (new cljs.core.LazySeq(null,(function (){
var s__27983__$1 = s__27983;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__27983__$1);
if(temp__5823__auto____$1){
var s__27983__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27983__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27983__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27985 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27984 = (0);
while(true){
if((i__27984 < size__5502__auto__)){
var action = cljs.core._nth(c__5501__auto__,i__27984);
cljs.core.chunk_append(b__27985,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__27984,action,c__5501__auto__,size__5502__auto__,b__27985,s__27983__$2,temp__5823__auto____$1,row,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__27986 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27986.cljs$core$IFn$_invoke$arity$1 ? fexpr__27986.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27986.call(null,row));
} else {
return null;
}
});})(i__27984,action,c__5501__auto__,size__5502__auto__,b__27985,s__27983__$2,temp__5823__auto____$1,row,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__27987 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27987.cljs$core$IFn$_invoke$arity$1 ? fexpr__27987.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27987.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__28210 = (i__27984 + (1));
i__27984 = G__28210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27985),ui$data_table$server_side_data_table_$_iter__27950_$_iter__27982(cljs.core.chunk_rest(s__27983__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27985),null);
}
} else {
var action = cljs.core.first(s__27983__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (action,s__27983__$2,temp__5823__auto____$1,row,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__27988 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27988.cljs$core$IFn$_invoke$arity$1 ? fexpr__27988.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27988.call(null,row));
} else {
return null;
}
});})(action,s__27983__$2,temp__5823__auto____$1,row,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__27989 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__27989.cljs$core$IFn$_invoke$arity$1 ? fexpr__27989.cljs$core$IFn$_invoke$arity$1(row) : fexpr__27989.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$server_side_data_table_$_iter__27950_$_iter__27982(cljs.core.rest(s__27983__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__27951__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__27944,map__27944__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)),ui$data_table$server_side_data_table_$_iter__27950(cljs.core.rest(s__27951__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(rows);
})()], null)], null)], null),(cljs.core.truth_((function (){var and__5023__auto__ = show_pagination_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return server_pagination;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.pagination_controls,table_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$2(server_pagination,(0)),new cljs.core.Keyword(null,"page-size","page-size",223836073),new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$2(server_pagination,(10))], null),total_count], null):null)], null)
))], null);
});

//# sourceMappingURL=ui.data_table.js.map
