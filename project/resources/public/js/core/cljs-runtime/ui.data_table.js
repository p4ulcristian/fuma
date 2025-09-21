goog.provide('ui.data_table');
var G__35756_35964 = new cljs.core.Keyword("data-table","set-search","data-table/set-search",-241762314);
var G__35757_35965 = (function (db,p__35758){
var vec__35760 = p__35758;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760,(1),null);
var search_term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"search","search",1564939822)], null),search_term),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),(0));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__35756_35964,G__35757_35965) : zero.frontend.re_frame.reg_event_db.call(null,G__35756_35964,G__35757_35965));
var G__35764_35966 = new cljs.core.Keyword("data-table","set-sort","data-table/set-sort",351981518);
var G__35765_35967 = (function (db,p__35767){
var vec__35768 = p__35767;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35768,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35768,(1),null);
var sort_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35768,(2),null);
var sort_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35768,(3),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"sort","sort",953465918)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sort_key,new cljs.core.Keyword(null,"direction","direction",-633359395),sort_direction], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),(0));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__35764_35966,G__35765_35967) : zero.frontend.re_frame.reg_event_db.call(null,G__35764_35966,G__35765_35967));
var G__35771_35968 = new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135);
var G__35772_35969 = (function (db,p__35773){
var vec__35774 = p__35773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35774,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35774,(1),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35774,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),page);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__35771_35968,G__35772_35969) : zero.frontend.re_frame.reg_event_db.call(null,G__35771_35968,G__35772_35969));
var G__35777_35970 = new cljs.core.Keyword("data-table","set-page-size","data-table/set-page-size",-1756940563);
var G__35778_35971 = (function (db,p__35779){
var vec__35782 = p__35779;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35782,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35782,(1),null);
var page_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35782,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"page-size","page-size",223836073)], null),page_size);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__35777_35970,G__35778_35971) : zero.frontend.re_frame.reg_event_db.call(null,G__35777_35970,G__35778_35971));
var G__35787_35972 = new cljs.core.Keyword("data-table","reset-state","data-table/reset-state",1009637636);
var G__35788_35973 = (function (db,p__35789){
var vec__35790 = p__35789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35790,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35790,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null)], null));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__35787_35972,G__35788_35973) : zero.frontend.re_frame.reg_event_db.call(null,G__35787_35972,G__35788_35973));
var G__35794_35974 = new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358);
var G__35795_35975 = (function (db,p__35796){
var vec__35797 = p__35796;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35797,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35797,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__35794_35974,G__35795_35975) : zero.frontend.re_frame.reg_sub.call(null,G__35794_35974,G__35795_35975));
var G__35800_35976 = new cljs.core.Keyword("data-table","get-search","data-table/get-search",1426835433);
var G__35801_35977 = (function (db,p__35802){
var vec__35803 = p__35802;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35803,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35803,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"search","search",1564939822)], null),"");
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__35800_35976,G__35801_35977) : zero.frontend.re_frame.reg_sub.call(null,G__35800_35976,G__35801_35977));
var G__35806_35978 = new cljs.core.Keyword("data-table","get-sort","data-table/get-sort",-1700535166);
var G__35807_35979 = (function (db,p__35808){
var vec__35809 = p__35808;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35809,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35809,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"sort","sort",953465918)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__35806_35978,G__35807_35979) : zero.frontend.re_frame.reg_sub.call(null,G__35806_35978,G__35807_35979));
var G__35812_35980 = new cljs.core.Keyword("data-table","get-pagination","data-table/get-pagination",-663522475);
var G__35813_35981 = (function (db,p__35816){
var vec__35817 = p__35816;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35817,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35817,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__35812_35980,G__35813_35981) : zero.frontend.re_frame.reg_sub.call(null,G__35812_35980,G__35813_35981));
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
var sort_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sort_config),new cljs.core.Keyword(null,"desc","desc",2093485764)))?(function (p1__35823_SHARP_,p2__35822_SHARP_){
return cljs.core.compare(p2__35822_SHARP_,p1__35823_SHARP_);
}):cljs.core.compare);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__35824_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__35824_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sort_config));
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
var filtered_rows = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35825_SHARP_){
return ui.data_table.search_matches_QMARK_(p1__35825_SHARP_,search_term,headers);
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
var len__5749__auto___35982 = arguments.length;
var i__5750__auto___35983 = (0);
while(true){
if((i__5750__auto___35983 < len__5749__auto___35982)){
args__5755__auto__.push((arguments[i__5750__auto___35983]));

var G__35984 = (i__5750__auto___35983 + (1));
i__5750__auto___35983 = G__35984;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return ui.data_table.action_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(ui.data_table.action_button.cljs$core$IFn$_invoke$arity$variadic = (function (text,on_click,variant,p__35830){
var map__35831 = p__35830;
var map__35831__$1 = cljs.core.__destructure_map(map__35831);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35831__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var variant_styles = (function (){var G__35832 = variant;
var G__35832__$1 = (((G__35832 instanceof cljs.core.Keyword))?G__35832.fqn:null);
switch (G__35832__$1) {
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
(ui.data_table.action_button.cljs$lang$applyTo = (function (seq35826){
var G__35827 = cljs.core.first(seq35826);
var seq35826__$1 = cljs.core.next(seq35826);
var G__35828 = cljs.core.first(seq35826__$1);
var seq35826__$2 = cljs.core.next(seq35826__$1);
var G__35829 = cljs.core.first(seq35826__$2);
var seq35826__$3 = cljs.core.next(seq35826__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35827,G__35828,G__35829,seq35826__$3);
}));

/**
 * Search input component
 */
ui.data_table.search_input = (function ui$data_table$search_input(table_id,search_term){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("table","search","table/search",1429686880)),new cljs.core.Keyword(null,"value","value",305978217),search_term,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35833_SHARP_){
var G__35834 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-search","data-table/set-search",-241762314),table_id,p1__35833_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__35834) : zero.frontend.re_frame.dispatch.call(null,G__35834));
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
var G__35836 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-sort","data-table/set-sort",351981518),table_id,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header),next_direction], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__35836) : zero.frontend.re_frame.dispatch.call(null,G__35836));
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
var G__35837 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,(current_page - (1))], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__35837) : zero.frontend.re_frame.dispatch.call(null,G__35837));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((has_prev_QMARK_)?"white":"#f3f4f6"),new cljs.core.Keyword(null,"color","color",1011675173),((has_prev_QMARK_)?"#374151":"#9ca3af"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((has_prev_QMARK_)?"pointer":"not-allowed"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","previous","table/previous",-1415448378))], null),(function (){var start_page = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (current_page - (2));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var end_page = (function (){var x__5113__auto__ = total_pages;
var y__5114__auto__ = (current_page + (3));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var iter__5503__auto__ = (function ui$data_table$pagination_controls_$_iter__35838(s__35839){
return (new cljs.core.LazySeq(null,(function (){
var s__35839__$1 = s__35839;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35839__$1);
if(temp__5823__auto__){
var s__35839__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35839__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__35839__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__35841 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__35840 = (0);
while(true){
if((i__35840 < size__5502__auto__)){
var page = cljs.core._nth(c__5501__auto__,i__35840);
cljs.core.chunk_append(b__35841,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__35840,page,c__5501__auto__,size__5502__auto__,b__35841,s__35839__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item){
return (function (){
var G__35842 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,page], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__35842) : zero.frontend.re_frame.dispatch.call(null,G__35842));
});})(i__35840,page,c__5501__auto__,size__5502__auto__,b__35841,s__35839__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"#3b82f6":"white"),new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"white":"#374151"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0.125rem"], null)], null),(page + (1))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)));

var G__35991 = (i__35840 + (1));
i__35840 = G__35991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35841),ui$data_table$pagination_controls_$_iter__35838(cljs.core.chunk_rest(s__35839__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35841),null);
}
} else {
var page = cljs.core.first(s__35839__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__35839__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item){
return (function (){
var G__35843 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,page], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__35843) : zero.frontend.re_frame.dispatch.call(null,G__35843));
});})(page,s__35839__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"#3b82f6":"white"),new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"white":"#374151"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0.125rem"], null)], null),(page + (1))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)),ui$data_table$pagination_controls_$_iter__35838(cljs.core.rest(s__35839__$2)));
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
var G__35844 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,(current_page + (1))], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__35844) : zero.frontend.re_frame.dispatch.call(null,G__35844));
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
var len__5749__auto___36013 = arguments.length;
var i__5750__auto___36014 = (0);
while(true){
if((i__5750__auto___36014 < len__5749__auto___36013)){
args__5755__auto__.push((arguments[i__5750__auto___36014]));

var G__36015 = (i__5750__auto___36014 + (1));
i__5750__auto___36014 = G__36015;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return ui.data_table.status_badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(ui.data_table.status_badge.cljs$core$IFn$_invoke$arity$variadic = (function (active_QMARK_,p__35847){
var map__35848 = p__35847;
var map__35848__$1 = cljs.core.__destructure_map(map__35848);
var active_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35848__$1,new cljs.core.Keyword(null,"active-text","active-text",758142518));
var inactive_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35848__$1,new cljs.core.Keyword(null,"inactive-text","inactive-text",491481192));
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
(ui.data_table.status_badge.cljs$lang$applyTo = (function (seq35845){
var G__35846 = cljs.core.first(seq35845);
var seq35845__$1 = cljs.core.next(seq35845);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35846,seq35845__$1);
}));

/**
 * Modern styled data table with client-side search, sorting, and pagination
 */
ui.data_table.data_table = (function ui$data_table$data_table(p__35849){
var map__35850 = p__35849;
var map__35850__$1 = cljs.core.__destructure_map(map__35850);
var show_pagination_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35850__$1,new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515),true);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35850__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"id","id",-1388402092));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35850__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"default","default",-1987822328));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var empty_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var show_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35850__$1,new cljs.core.Keyword(null,"show-search?","show-search?",684663920),true);
var table_state = cljs.core.deref((function (){var G__35851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358),table_id], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__35851) : zero.frontend.re_frame.subscribe.call(null,G__35851));
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
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","no-items","table/no-items",-919114863))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function ui$data_table$data_table_$_iter__35852(s__35853){
return (new cljs.core.LazySeq(null,(function (){
var s__35853__$1 = s__35853;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35853__$1);
if(temp__5823__auto__){
var s__35853__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35853__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__35853__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__35855 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__35854 = (0);
while(true){
if((i__35854 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__35854);
cljs.core.chunk_append(b__35855,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)));

var G__36130 = (i__35854 + (1));
i__35854 = G__36130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35855),ui$data_table$data_table_$_iter__35852(cljs.core.chunk_rest(s__35853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35855),null);
}
} else {
var header = cljs.core.first(s__35853__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)),ui$data_table$data_table_$_iter__35852(cljs.core.rest(s__35853__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_header_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),translations.core.tr(new cljs.core.Keyword("table","actions","table/actions",-698381628))], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function ui$data_table$data_table_$_iter__35856(s__35857){
return (new cljs.core.LazySeq(null,(function (){
var s__35857__$1 = s__35857;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35857__$1);
if(temp__5823__auto__){
var s__35857__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35857__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__35857__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__35859 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__35858 = (0);
while(true){
if((i__35858 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__35858);
cljs.core.chunk_append(b__35859,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (i__35858,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__35856_$_iter__35860(s__35861){
return (new cljs.core.LazySeq(null,((function (i__35858,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
var s__35861__$1 = s__35861;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35861__$1);
if(temp__5823__auto____$1){
var s__35861__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35861__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__35861__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__35863 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__35862 = (0);
while(true){
if((i__35862 < size__5502__auto____$1)){
var header = cljs.core._nth(c__5501__auto____$1,i__35862);
cljs.core.chunk_append(b__35863,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__35865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__35866 = row;
var fexpr__35864 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__35864.cljs$core$IFn$_invoke$arity$2 ? fexpr__35864.cljs$core$IFn$_invoke$arity$2(G__35865,G__35866) : fexpr__35864.call(null,G__35865,G__35866));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__36169 = (i__35862 + (1));
i__35862 = G__36169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35863),ui$data_table$data_table_$_iter__35856_$_iter__35860(cljs.core.chunk_rest(s__35861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35863),null);
}
} else {
var header = cljs.core.first(s__35861__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__35868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__35869 = row;
var fexpr__35867 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__35867.cljs$core$IFn$_invoke$arity$2 ? fexpr__35867.cljs$core$IFn$_invoke$arity$2(G__35868,G__35869) : fexpr__35867.call(null,G__35868,G__35869));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$data_table_$_iter__35856_$_iter__35860(cljs.core.rest(s__35861__$2)));
}
} else {
return null;
}
break;
}
});})(i__35858,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,null,null));
});})(i__35858,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (i__35858,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__35856_$_iter__35874(s__35875){
return (new cljs.core.LazySeq(null,((function (i__35858,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
var s__35875__$1 = s__35875;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35875__$1);
if(temp__5823__auto____$1){
var s__35875__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35875__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__35875__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__35877 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__35876 = (0);
while(true){
if((i__35876 < size__5502__auto____$1)){
var action = cljs.core._nth(c__5501__auto____$1,i__35876);
cljs.core.chunk_append(b__35877,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__35876,i__35858,action,c__5501__auto____$1,size__5502__auto____$1,b__35877,s__35875__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__35882 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35882.cljs$core$IFn$_invoke$arity$1 ? fexpr__35882.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35882.call(null,row));
} else {
return null;
}
});})(i__35876,i__35858,action,c__5501__auto____$1,size__5502__auto____$1,b__35877,s__35875__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__35887 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35887.cljs$core$IFn$_invoke$arity$1 ? fexpr__35887.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35887.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__36187 = (i__35876 + (1));
i__35876 = G__36187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35877),ui$data_table$data_table_$_iter__35856_$_iter__35874(cljs.core.chunk_rest(s__35875__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35877),null);
}
} else {
var action = cljs.core.first(s__35875__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__35858,action,s__35875__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__35888 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35888.cljs$core$IFn$_invoke$arity$1 ? fexpr__35888.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35888.call(null,row));
} else {
return null;
}
});})(i__35858,action,s__35875__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__35889 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35889.cljs$core$IFn$_invoke$arity$1 ? fexpr__35889.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35889.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$data_table_$_iter__35856_$_iter__35874(cljs.core.rest(s__35875__$2)));
}
} else {
return null;
}
break;
}
});})(i__35858,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,null,null));
});})(i__35858,row,c__5501__auto__,size__5502__auto__,b__35859,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)));

var G__36196 = (i__35858 + (1));
i__35858 = G__36196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35859),ui$data_table$data_table_$_iter__35856(cljs.core.chunk_rest(s__35857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35859),null);
}
} else {
var row = cljs.core.first(s__35857__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__35856_$_iter__35890(s__35891){
return (new cljs.core.LazySeq(null,(function (){
var s__35891__$1 = s__35891;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35891__$1);
if(temp__5823__auto____$1){
var s__35891__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35891__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__35891__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__35893 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__35892 = (0);
while(true){
if((i__35892 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__35892);
cljs.core.chunk_append(b__35893,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__35895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__35896 = row;
var fexpr__35894 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__35894.cljs$core$IFn$_invoke$arity$2 ? fexpr__35894.cljs$core$IFn$_invoke$arity$2(G__35895,G__35896) : fexpr__35894.call(null,G__35895,G__35896));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__36238 = (i__35892 + (1));
i__35892 = G__36238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35893),ui$data_table$data_table_$_iter__35856_$_iter__35890(cljs.core.chunk_rest(s__35891__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35893),null);
}
} else {
var header = cljs.core.first(s__35891__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__35898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__35899 = row;
var fexpr__35897 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__35897.cljs$core$IFn$_invoke$arity$2 ? fexpr__35897.cljs$core$IFn$_invoke$arity$2(G__35898,G__35899) : fexpr__35897.call(null,G__35898,G__35899));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$data_table_$_iter__35856_$_iter__35890(cljs.core.rest(s__35891__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__35856_$_iter__35900(s__35901){
return (new cljs.core.LazySeq(null,(function (){
var s__35901__$1 = s__35901;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35901__$1);
if(temp__5823__auto____$1){
var s__35901__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35901__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__35901__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__35903 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__35902 = (0);
while(true){
if((i__35902 < size__5502__auto__)){
var action = cljs.core._nth(c__5501__auto__,i__35902);
cljs.core.chunk_append(b__35903,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__35902,action,c__5501__auto__,size__5502__auto__,b__35903,s__35901__$2,temp__5823__auto____$1,row,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__35906 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35906.cljs$core$IFn$_invoke$arity$1 ? fexpr__35906.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35906.call(null,row));
} else {
return null;
}
});})(i__35902,action,c__5501__auto__,size__5502__auto__,b__35903,s__35901__$2,temp__5823__auto____$1,row,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__35907 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35907.cljs$core$IFn$_invoke$arity$1 ? fexpr__35907.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35907.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__36278 = (i__35902 + (1));
i__35902 = G__36278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35903),ui$data_table$data_table_$_iter__35856_$_iter__35900(cljs.core.chunk_rest(s__35901__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35903),null);
}
} else {
var action = cljs.core.first(s__35901__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (action,s__35901__$2,temp__5823__auto____$1,row,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__35910 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35910.cljs$core$IFn$_invoke$arity$1 ? fexpr__35910.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35910.call(null,row));
} else {
return null;
}
});})(action,s__35901__$2,temp__5823__auto____$1,row,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__35911 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35911.cljs$core$IFn$_invoke$arity$1 ? fexpr__35911.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35911.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$data_table_$_iter__35856_$_iter__35900(cljs.core.rest(s__35901__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__35857__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__35850,map__35850__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)),ui$data_table$data_table_$_iter__35856(cljs.core.rest(s__35857__$2)));
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
ui.data_table.server_side_data_table = (function ui$data_table$server_side_data_table(p__35912){
var map__35913 = p__35912;
var map__35913__$1 = cljs.core.__destructure_map(map__35913);
var show_pagination_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35913__$1,new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515),true);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35913__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"id","id",-1388402092));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35913__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"default","default",-1987822328));
var query_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35913__$1,new cljs.core.Keyword(null,"query-fn","query-fn",-646736760));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35913__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var empty_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35913__$1,new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35913__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35913__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35913__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var show_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35913__$1,new cljs.core.Keyword(null,"show-search?","show-search?",684663920),true);
var on_data_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35913__$1,new cljs.core.Keyword(null,"on-data-change","on-data-change",475267763));
var data_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35913__$1,new cljs.core.Keyword(null,"data-key","data-key",1775480631));
var table_state = cljs.core.deref((function (){var G__35918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358),table_id], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__35918) : zero.frontend.re_frame.subscribe.call(null,G__35918));
})());
var search_term = new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(table_state);
var sort_config = new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(table_state);
var pagination = new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(table_state);
var rows = (cljs.core.truth_(data_key)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(data_source,data_key,cljs.core.PersistentVector.EMPTY):data_source);
var server_pagination = new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(data_source);
var total_count = new cljs.core.Keyword(null,"total-count","total-count",-1999441386).cljs$core$IFn$_invoke$arity$2(server_pagination,(0));
var normalized_search_36296 = (function (){var or__5025__auto__ = search_term;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
var normalized_sort_key_36297 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sort_config);
var normalized_sort_direction_36298 = cljs.core.name(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$2(sort_config,new cljs.core.Keyword(null,"asc","asc",356854569)));
var normalized_page_36299 = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$2(pagination,(0));
var normalized_page_size_36300 = new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$2(pagination,(10));
var normalized_search_map_36301 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",1564939822),normalized_search_36296,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),normalized_sort_key_36297,new cljs.core.Keyword(null,"sort-direction","sort-direction",-1635889628),normalized_sort_direction_36298,new cljs.core.Keyword(null,"page","page",849072397),normalized_page_36299,new cljs.core.Keyword(null,"page-size","page-size",223836073),normalized_page_size_36300], null);
zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
if(cljs.core.truth_(query_fn)){
return (query_fn.cljs$core$IFn$_invoke$arity$1 ? query_fn.cljs$core$IFn$_invoke$arity$1(normalized_search_map_36301) : query_fn.call(null,normalized_search_map_36301));
} else {
return null;
}
}),new cljs.core.Keyword(null,"params","params",710516235),[]], null));

zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
if(cljs.core.truth_(query_fn)){
return (query_fn.cljs$core$IFn$_invoke$arity$1 ? query_fn.cljs$core$IFn$_invoke$arity$1(normalized_search_map_36301) : query_fn.call(null,normalized_search_map_36301));
} else {
return null;
}
}),new cljs.core.Keyword(null,"params","params",710516235),[normalized_search_36296,normalized_sort_key_36297,normalized_sort_direction_36298,normalized_page_36299,normalized_page_size_36300]], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(show_search_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.search_input,table_id,search_term], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"border","border",1444987323),"4px solid #f3f4f6",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"4px solid #3b82f6",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"animation","animation",-1248293244),"spin 1s linear infinite",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto 1rem"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),translations.core.tr(new cljs.core.Keyword("table","loading","table/loading",-628992827))], null)], null)], null):((((cljs.core.empty_QMARK_(rows)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_count,(0)))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),(function (){var or__5025__auto__ = empty_message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return translations.core.tr(new cljs.core.Keyword("table","no-data","table/no-data",2119568656));
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","no-items","table/no-items",-919114863))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function ui$data_table$server_side_data_table_$_iter__35919(s__35920){
return (new cljs.core.LazySeq(null,(function (){
var s__35920__$1 = s__35920;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35920__$1);
if(temp__5823__auto__){
var s__35920__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35920__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__35920__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__35922 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__35921 = (0);
while(true){
if((i__35921 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__35921);
cljs.core.chunk_append(b__35922,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)));

var G__36337 = (i__35921 + (1));
i__35921 = G__36337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35922),ui$data_table$server_side_data_table_$_iter__35919(cljs.core.chunk_rest(s__35920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35922),null);
}
} else {
var header = cljs.core.first(s__35920__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)),ui$data_table$server_side_data_table_$_iter__35919(cljs.core.rest(s__35920__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_header_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),translations.core.tr(new cljs.core.Keyword("table","actions","table/actions",-698381628))], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function ui$data_table$server_side_data_table_$_iter__35923(s__35924){
return (new cljs.core.LazySeq(null,(function (){
var s__35924__$1 = s__35924;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35924__$1);
if(temp__5823__auto__){
var s__35924__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35924__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__35924__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__35926 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__35925 = (0);
while(true){
if((i__35925 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__35925);
cljs.core.chunk_append(b__35926,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (i__35925,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__35923_$_iter__35927(s__35928){
return (new cljs.core.LazySeq(null,((function (i__35925,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
var s__35928__$1 = s__35928;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35928__$1);
if(temp__5823__auto____$1){
var s__35928__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35928__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__35928__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__35930 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__35929 = (0);
while(true){
if((i__35929 < size__5502__auto____$1)){
var header = cljs.core._nth(c__5501__auto____$1,i__35929);
cljs.core.chunk_append(b__35930,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__35932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__35933 = row;
var fexpr__35931 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__35931.cljs$core$IFn$_invoke$arity$2 ? fexpr__35931.cljs$core$IFn$_invoke$arity$2(G__35932,G__35933) : fexpr__35931.call(null,G__35932,G__35933));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__36374 = (i__35929 + (1));
i__35929 = G__36374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35930),ui$data_table$server_side_data_table_$_iter__35923_$_iter__35927(cljs.core.chunk_rest(s__35928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35930),null);
}
} else {
var header = cljs.core.first(s__35928__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__35935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__35936 = row;
var fexpr__35934 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__35934.cljs$core$IFn$_invoke$arity$2 ? fexpr__35934.cljs$core$IFn$_invoke$arity$2(G__35935,G__35936) : fexpr__35934.call(null,G__35935,G__35936));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$server_side_data_table_$_iter__35923_$_iter__35927(cljs.core.rest(s__35928__$2)));
}
} else {
return null;
}
break;
}
});})(i__35925,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,null,null));
});})(i__35925,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (i__35925,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__35923_$_iter__35937(s__35938){
return (new cljs.core.LazySeq(null,((function (i__35925,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
var s__35938__$1 = s__35938;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35938__$1);
if(temp__5823__auto____$1){
var s__35938__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35938__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__35938__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__35940 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__35939 = (0);
while(true){
if((i__35939 < size__5502__auto____$1)){
var action = cljs.core._nth(c__5501__auto____$1,i__35939);
cljs.core.chunk_append(b__35940,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__35939,i__35925,action,c__5501__auto____$1,size__5502__auto____$1,b__35940,s__35938__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__35941 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35941.cljs$core$IFn$_invoke$arity$1 ? fexpr__35941.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35941.call(null,row));
} else {
return null;
}
});})(i__35939,i__35925,action,c__5501__auto____$1,size__5502__auto____$1,b__35940,s__35938__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__35942 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35942.cljs$core$IFn$_invoke$arity$1 ? fexpr__35942.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35942.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__36411 = (i__35939 + (1));
i__35939 = G__36411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35940),ui$data_table$server_side_data_table_$_iter__35923_$_iter__35937(cljs.core.chunk_rest(s__35938__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35940),null);
}
} else {
var action = cljs.core.first(s__35938__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__35925,action,s__35938__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__35943 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35943.cljs$core$IFn$_invoke$arity$1 ? fexpr__35943.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35943.call(null,row));
} else {
return null;
}
});})(i__35925,action,s__35938__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__35944 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35944.cljs$core$IFn$_invoke$arity$1 ? fexpr__35944.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35944.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$server_side_data_table_$_iter__35923_$_iter__35937(cljs.core.rest(s__35938__$2)));
}
} else {
return null;
}
break;
}
});})(i__35925,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,null,null));
});})(i__35925,row,c__5501__auto__,size__5502__auto__,b__35926,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)));

var G__36417 = (i__35925 + (1));
i__35925 = G__36417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35926),ui$data_table$server_side_data_table_$_iter__35923(cljs.core.chunk_rest(s__35924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35926),null);
}
} else {
var row = cljs.core.first(s__35924__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__35923_$_iter__35945(s__35946){
return (new cljs.core.LazySeq(null,(function (){
var s__35946__$1 = s__35946;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35946__$1);
if(temp__5823__auto____$1){
var s__35946__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35946__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__35946__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__35948 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__35947 = (0);
while(true){
if((i__35947 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__35947);
cljs.core.chunk_append(b__35948,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__35950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__35951 = row;
var fexpr__35949 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__35949.cljs$core$IFn$_invoke$arity$2 ? fexpr__35949.cljs$core$IFn$_invoke$arity$2(G__35950,G__35951) : fexpr__35949.call(null,G__35950,G__35951));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__36420 = (i__35947 + (1));
i__35947 = G__36420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35948),ui$data_table$server_side_data_table_$_iter__35923_$_iter__35945(cljs.core.chunk_rest(s__35946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35948),null);
}
} else {
var header = cljs.core.first(s__35946__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__35954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__35955 = row;
var fexpr__35953 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__35953.cljs$core$IFn$_invoke$arity$2 ? fexpr__35953.cljs$core$IFn$_invoke$arity$2(G__35954,G__35955) : fexpr__35953.call(null,G__35954,G__35955));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$server_side_data_table_$_iter__35923_$_iter__35945(cljs.core.rest(s__35946__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__35923_$_iter__35956(s__35957){
return (new cljs.core.LazySeq(null,(function (){
var s__35957__$1 = s__35957;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35957__$1);
if(temp__5823__auto____$1){
var s__35957__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35957__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__35957__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__35959 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__35958 = (0);
while(true){
if((i__35958 < size__5502__auto__)){
var action = cljs.core._nth(c__5501__auto__,i__35958);
cljs.core.chunk_append(b__35959,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__35958,action,c__5501__auto__,size__5502__auto__,b__35959,s__35957__$2,temp__5823__auto____$1,row,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__35960 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35960.cljs$core$IFn$_invoke$arity$1 ? fexpr__35960.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35960.call(null,row));
} else {
return null;
}
});})(i__35958,action,c__5501__auto__,size__5502__auto__,b__35959,s__35957__$2,temp__5823__auto____$1,row,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__35961 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35961.cljs$core$IFn$_invoke$arity$1 ? fexpr__35961.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35961.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__36430 = (i__35958 + (1));
i__35958 = G__36430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35959),ui$data_table$server_side_data_table_$_iter__35923_$_iter__35956(cljs.core.chunk_rest(s__35957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35959),null);
}
} else {
var action = cljs.core.first(s__35957__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (action,s__35957__$2,temp__5823__auto____$1,row,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__35962 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35962.cljs$core$IFn$_invoke$arity$1 ? fexpr__35962.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35962.call(null,row));
} else {
return null;
}
});})(action,s__35957__$2,temp__5823__auto____$1,row,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__35963 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__35963.cljs$core$IFn$_invoke$arity$1 ? fexpr__35963.cljs$core$IFn$_invoke$arity$1(row) : fexpr__35963.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$server_side_data_table_$_iter__35923_$_iter__35956(cljs.core.rest(s__35957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__35924__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__35913,map__35913__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)),ui$data_table$server_side_data_table_$_iter__35923(cljs.core.rest(s__35924__$2)));
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
