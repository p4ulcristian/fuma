goog.provide('ui.data_table');
var G__16140_16399 = new cljs.core.Keyword("data-table","set-search","data-table/set-search",-241762314);
var G__16141_16400 = (function (db,p__16142){
var vec__16143 = p__16142;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16143,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16143,(1),null);
var search_term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16143,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"search","search",1564939822)], null),search_term),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),(0));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16140_16399,G__16141_16400) : zero.frontend.re_frame.reg_event_db.call(null,G__16140_16399,G__16141_16400));
var G__16146_16402 = new cljs.core.Keyword("data-table","set-sort","data-table/set-sort",351981518);
var G__16147_16403 = (function (db,p__16148){
var vec__16149 = p__16148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16149,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16149,(1),null);
var sort_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16149,(2),null);
var sort_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16149,(3),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"sort","sort",953465918)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sort_key,new cljs.core.Keyword(null,"direction","direction",-633359395),sort_direction], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),(0));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16146_16402,G__16147_16403) : zero.frontend.re_frame.reg_event_db.call(null,G__16146_16402,G__16147_16403));
var G__16153_16404 = new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135);
var G__16154_16405 = (function (db,p__16155){
var vec__16156 = p__16155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16156,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16156,(1),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16156,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),page);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16153_16404,G__16154_16405) : zero.frontend.re_frame.reg_event_db.call(null,G__16153_16404,G__16154_16405));
var G__16160_16409 = new cljs.core.Keyword("data-table","set-page-size","data-table/set-page-size",-1756940563);
var G__16161_16411 = (function (db,p__16162){
var vec__16165 = p__16162;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165,(1),null);
var page_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"page-size","page-size",223836073)], null),page_size);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16160_16409,G__16161_16411) : zero.frontend.re_frame.reg_event_db.call(null,G__16160_16409,G__16161_16411));
var G__16169_16425 = new cljs.core.Keyword("data-table","reset-state","data-table/reset-state",1009637636);
var G__16170_16426 = (function (db,p__16171){
var vec__16172 = p__16171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16172,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16172,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null)], null));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16169_16425,G__16170_16426) : zero.frontend.re_frame.reg_event_db.call(null,G__16169_16425,G__16170_16426));
var G__16175_16450 = new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358);
var G__16176_16451 = (function (db,p__16177){
var vec__16178 = p__16177;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16178,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16178,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16175_16450,G__16176_16451) : zero.frontend.re_frame.reg_sub.call(null,G__16175_16450,G__16176_16451));
var G__16181_16463 = new cljs.core.Keyword("data-table","get-search","data-table/get-search",1426835433);
var G__16182_16464 = (function (db,p__16183){
var vec__16184 = p__16183;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16184,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16184,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"search","search",1564939822)], null),"");
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16181_16463,G__16182_16464) : zero.frontend.re_frame.reg_sub.call(null,G__16181_16463,G__16182_16464));
var G__16187_16474 = new cljs.core.Keyword("data-table","get-sort","data-table/get-sort",-1700535166);
var G__16188_16475 = (function (db,p__16189){
var vec__16190 = p__16189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"sort","sort",953465918)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16187_16474,G__16188_16475) : zero.frontend.re_frame.reg_sub.call(null,G__16187_16474,G__16188_16475));
var G__16193_16488 = new cljs.core.Keyword("data-table","get-pagination","data-table/get-pagination",-663522475);
var G__16194_16489 = (function (db,p__16195){
var vec__16196 = p__16195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16196,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16196,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16193_16488,G__16194_16489) : zero.frontend.re_frame.reg_sub.call(null,G__16193_16488,G__16194_16489));
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
var sort_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sort_config),new cljs.core.Keyword(null,"desc","desc",2093485764)))?(function (p1__16200_SHARP_,p2__16199_SHARP_){
return cljs.core.compare(p2__16199_SHARP_,p1__16200_SHARP_);
}):cljs.core.compare);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__16201_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16201_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sort_config));
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
var filtered_rows = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16202_SHARP_){
return ui.data_table.search_matches_QMARK_(p1__16202_SHARP_,search_term,headers);
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
var len__5749__auto___16566 = arguments.length;
var i__5750__auto___16567 = (0);
while(true){
if((i__5750__auto___16567 < len__5749__auto___16566)){
args__5755__auto__.push((arguments[i__5750__auto___16567]));

var G__16572 = (i__5750__auto___16567 + (1));
i__5750__auto___16567 = G__16572;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return ui.data_table.action_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(ui.data_table.action_button.cljs$core$IFn$_invoke$arity$variadic = (function (text,on_click,variant,p__16208){
var map__16209 = p__16208;
var map__16209__$1 = cljs.core.__destructure_map(map__16209);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var variant_styles = (function (){var G__16210 = variant;
var G__16210__$1 = (((G__16210 instanceof cljs.core.Keyword))?G__16210.fqn:null);
switch (G__16210__$1) {
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
(ui.data_table.action_button.cljs$lang$applyTo = (function (seq16203){
var G__16204 = cljs.core.first(seq16203);
var seq16203__$1 = cljs.core.next(seq16203);
var G__16205 = cljs.core.first(seq16203__$1);
var seq16203__$2 = cljs.core.next(seq16203__$1);
var G__16206 = cljs.core.first(seq16203__$2);
var seq16203__$3 = cljs.core.next(seq16203__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16204,G__16205,G__16206,seq16203__$3);
}));

/**
 * Search input component
 */
ui.data_table.search_input = (function ui$data_table$search_input(table_id,search_term){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("table","search","table/search",1429686880)),new cljs.core.Keyword(null,"value","value",305978217),search_term,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16211_SHARP_){
var G__16212 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-search","data-table/set-search",-241762314),table_id,p1__16211_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16212) : zero.frontend.re_frame.dispatch.call(null,G__16212));
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
var G__16221 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-sort","data-table/set-sort",351981518),table_id,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header),next_direction], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16221) : zero.frontend.re_frame.dispatch.call(null,G__16221));
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
var G__16226 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,(current_page - (1))], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16226) : zero.frontend.re_frame.dispatch.call(null,G__16226));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((has_prev_QMARK_)?"white":"#f3f4f6"),new cljs.core.Keyword(null,"color","color",1011675173),((has_prev_QMARK_)?"#374151":"#9ca3af"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((has_prev_QMARK_)?"pointer":"not-allowed"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","previous","table/previous",-1415448378))], null),(function (){var start_page = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (current_page - (2));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var end_page = (function (){var x__5113__auto__ = total_pages;
var y__5114__auto__ = (current_page + (3));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var iter__5503__auto__ = (function ui$data_table$pagination_controls_$_iter__16227(s__16228){
return (new cljs.core.LazySeq(null,(function (){
var s__16228__$1 = s__16228;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16228__$1);
if(temp__5823__auto__){
var s__16228__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16228__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16228__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16230 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16229 = (0);
while(true){
if((i__16229 < size__5502__auto__)){
var page = cljs.core._nth(c__5501__auto__,i__16229);
cljs.core.chunk_append(b__16230,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16229,page,c__5501__auto__,size__5502__auto__,b__16230,s__16228__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item){
return (function (){
var G__16231 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,page], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16231) : zero.frontend.re_frame.dispatch.call(null,G__16231));
});})(i__16229,page,c__5501__auto__,size__5502__auto__,b__16230,s__16228__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"#3b82f6":"white"),new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"white":"#374151"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0.125rem"], null)], null),(page + (1))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)));

var G__16627 = (i__16229 + (1));
i__16229 = G__16627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16230),ui$data_table$pagination_controls_$_iter__16227(cljs.core.chunk_rest(s__16228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16230),null);
}
} else {
var page = cljs.core.first(s__16228__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__16228__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item){
return (function (){
var G__16234 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,page], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16234) : zero.frontend.re_frame.dispatch.call(null,G__16234));
});})(page,s__16228__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"#3b82f6":"white"),new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"white":"#374151"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0.125rem"], null)], null),(page + (1))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)),ui$data_table$pagination_controls_$_iter__16227(cljs.core.rest(s__16228__$2)));
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
var G__16237 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,(current_page + (1))], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__16237) : zero.frontend.re_frame.dispatch.call(null,G__16237));
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
var len__5749__auto___16631 = arguments.length;
var i__5750__auto___16632 = (0);
while(true){
if((i__5750__auto___16632 < len__5749__auto___16631)){
args__5755__auto__.push((arguments[i__5750__auto___16632]));

var G__16633 = (i__5750__auto___16632 + (1));
i__5750__auto___16632 = G__16633;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return ui.data_table.status_badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(ui.data_table.status_badge.cljs$core$IFn$_invoke$arity$variadic = (function (active_QMARK_,p__16240){
var map__16241 = p__16240;
var map__16241__$1 = cljs.core.__destructure_map(map__16241);
var active_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16241__$1,new cljs.core.Keyword(null,"active-text","active-text",758142518));
var inactive_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16241__$1,new cljs.core.Keyword(null,"inactive-text","inactive-text",491481192));
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
(ui.data_table.status_badge.cljs$lang$applyTo = (function (seq16238){
var G__16239 = cljs.core.first(seq16238);
var seq16238__$1 = cljs.core.next(seq16238);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16239,seq16238__$1);
}));

/**
 * Modern styled data table with client-side search, sorting, and pagination
 */
ui.data_table.data_table = (function ui$data_table$data_table(p__16242){
var map__16243 = p__16242;
var map__16243__$1 = cljs.core.__destructure_map(map__16243);
var show_pagination_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16243__$1,new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515),true);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16243__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"id","id",-1388402092));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16243__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"default","default",-1987822328));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16243__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var empty_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16243__$1,new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16243__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16243__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16243__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var show_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16243__$1,new cljs.core.Keyword(null,"show-search?","show-search?",684663920),true);
var table_state = cljs.core.deref((function (){var G__16244 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358),table_id], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16244) : zero.frontend.re_frame.subscribe.call(null,G__16244));
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
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","no-items","table/no-items",-919114863))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function ui$data_table$data_table_$_iter__16249(s__16250){
return (new cljs.core.LazySeq(null,(function (){
var s__16250__$1 = s__16250;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16250__$1);
if(temp__5823__auto__){
var s__16250__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16250__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16250__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16252 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16251 = (0);
while(true){
if((i__16251 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__16251);
cljs.core.chunk_append(b__16252,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)));

var G__16636 = (i__16251 + (1));
i__16251 = G__16636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16252),ui$data_table$data_table_$_iter__16249(cljs.core.chunk_rest(s__16250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16252),null);
}
} else {
var header = cljs.core.first(s__16250__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)),ui$data_table$data_table_$_iter__16249(cljs.core.rest(s__16250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_header_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),translations.core.tr(new cljs.core.Keyword("table","actions","table/actions",-698381628))], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function ui$data_table$data_table_$_iter__16253(s__16254){
return (new cljs.core.LazySeq(null,(function (){
var s__16254__$1 = s__16254;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16254__$1);
if(temp__5823__auto__){
var s__16254__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16254__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16254__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16256 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16255 = (0);
while(true){
if((i__16255 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__16255);
cljs.core.chunk_append(b__16256,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (i__16255,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__16253_$_iter__16257(s__16258){
return (new cljs.core.LazySeq(null,((function (i__16255,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
var s__16258__$1 = s__16258;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__16258__$1);
if(temp__5823__auto____$1){
var s__16258__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16258__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__16258__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__16260 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__16259 = (0);
while(true){
if((i__16259 < size__5502__auto____$1)){
var header = cljs.core._nth(c__5501__auto____$1,i__16259);
cljs.core.chunk_append(b__16260,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__16262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__16263 = row;
var fexpr__16261 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__16261.cljs$core$IFn$_invoke$arity$2 ? fexpr__16261.cljs$core$IFn$_invoke$arity$2(G__16262,G__16263) : fexpr__16261.call(null,G__16262,G__16263));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__16657 = (i__16259 + (1));
i__16259 = G__16657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16260),ui$data_table$data_table_$_iter__16253_$_iter__16257(cljs.core.chunk_rest(s__16258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16260),null);
}
} else {
var header = cljs.core.first(s__16258__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__16265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__16266 = row;
var fexpr__16264 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__16264.cljs$core$IFn$_invoke$arity$2 ? fexpr__16264.cljs$core$IFn$_invoke$arity$2(G__16265,G__16266) : fexpr__16264.call(null,G__16265,G__16266));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$data_table_$_iter__16253_$_iter__16257(cljs.core.rest(s__16258__$2)));
}
} else {
return null;
}
break;
}
});})(i__16255,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,null,null));
});})(i__16255,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (i__16255,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__16253_$_iter__16267(s__16268){
return (new cljs.core.LazySeq(null,((function (i__16255,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
var s__16268__$1 = s__16268;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__16268__$1);
if(temp__5823__auto____$1){
var s__16268__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16268__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__16268__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__16270 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__16269 = (0);
while(true){
if((i__16269 < size__5502__auto____$1)){
var action = cljs.core._nth(c__5501__auto____$1,i__16269);
cljs.core.chunk_append(b__16270,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__16269,i__16255,action,c__5501__auto____$1,size__5502__auto____$1,b__16270,s__16268__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__16271 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16271.cljs$core$IFn$_invoke$arity$1 ? fexpr__16271.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16271.call(null,row));
} else {
return null;
}
});})(i__16269,i__16255,action,c__5501__auto____$1,size__5502__auto____$1,b__16270,s__16268__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__16272 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16272.cljs$core$IFn$_invoke$arity$1 ? fexpr__16272.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16272.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__16659 = (i__16269 + (1));
i__16269 = G__16659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16270),ui$data_table$data_table_$_iter__16253_$_iter__16267(cljs.core.chunk_rest(s__16268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16270),null);
}
} else {
var action = cljs.core.first(s__16268__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__16255,action,s__16268__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__16273 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16273.cljs$core$IFn$_invoke$arity$1 ? fexpr__16273.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16273.call(null,row));
} else {
return null;
}
});})(i__16255,action,s__16268__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__16274 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16274.cljs$core$IFn$_invoke$arity$1 ? fexpr__16274.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16274.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$data_table_$_iter__16253_$_iter__16267(cljs.core.rest(s__16268__$2)));
}
} else {
return null;
}
break;
}
});})(i__16255,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,null,null));
});})(i__16255,row,c__5501__auto__,size__5502__auto__,b__16256,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)));

var G__16660 = (i__16255 + (1));
i__16255 = G__16660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16256),ui$data_table$data_table_$_iter__16253(cljs.core.chunk_rest(s__16254__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16256),null);
}
} else {
var row = cljs.core.first(s__16254__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__16253_$_iter__16275(s__16276){
return (new cljs.core.LazySeq(null,(function (){
var s__16276__$1 = s__16276;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__16276__$1);
if(temp__5823__auto____$1){
var s__16276__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16276__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16276__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16278 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16277 = (0);
while(true){
if((i__16277 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__16277);
cljs.core.chunk_append(b__16278,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__16280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__16281 = row;
var fexpr__16279 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__16279.cljs$core$IFn$_invoke$arity$2 ? fexpr__16279.cljs$core$IFn$_invoke$arity$2(G__16280,G__16281) : fexpr__16279.call(null,G__16280,G__16281));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__16662 = (i__16277 + (1));
i__16277 = G__16662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16278),ui$data_table$data_table_$_iter__16253_$_iter__16275(cljs.core.chunk_rest(s__16276__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16278),null);
}
} else {
var header = cljs.core.first(s__16276__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__16283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__16284 = row;
var fexpr__16282 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__16282.cljs$core$IFn$_invoke$arity$2 ? fexpr__16282.cljs$core$IFn$_invoke$arity$2(G__16283,G__16284) : fexpr__16282.call(null,G__16283,G__16284));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$data_table_$_iter__16253_$_iter__16275(cljs.core.rest(s__16276__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__16253_$_iter__16285(s__16286){
return (new cljs.core.LazySeq(null,(function (){
var s__16286__$1 = s__16286;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__16286__$1);
if(temp__5823__auto____$1){
var s__16286__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16286__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16286__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16288 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16287 = (0);
while(true){
if((i__16287 < size__5502__auto__)){
var action = cljs.core._nth(c__5501__auto__,i__16287);
cljs.core.chunk_append(b__16288,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__16287,action,c__5501__auto__,size__5502__auto__,b__16288,s__16286__$2,temp__5823__auto____$1,row,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__16289 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16289.cljs$core$IFn$_invoke$arity$1 ? fexpr__16289.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16289.call(null,row));
} else {
return null;
}
});})(i__16287,action,c__5501__auto__,size__5502__auto__,b__16288,s__16286__$2,temp__5823__auto____$1,row,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__16290 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16290.cljs$core$IFn$_invoke$arity$1 ? fexpr__16290.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16290.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__16758 = (i__16287 + (1));
i__16287 = G__16758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16288),ui$data_table$data_table_$_iter__16253_$_iter__16285(cljs.core.chunk_rest(s__16286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16288),null);
}
} else {
var action = cljs.core.first(s__16286__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (action,s__16286__$2,temp__5823__auto____$1,row,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__16292 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16292.cljs$core$IFn$_invoke$arity$1 ? fexpr__16292.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16292.call(null,row));
} else {
return null;
}
});})(action,s__16286__$2,temp__5823__auto____$1,row,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__16293 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16293.cljs$core$IFn$_invoke$arity$1 ? fexpr__16293.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16293.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$data_table_$_iter__16253_$_iter__16285(cljs.core.rest(s__16286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__16254__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__16243,map__16243__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)),ui$data_table$data_table_$_iter__16253(cljs.core.rest(s__16254__$2)));
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
ui.data_table.server_side_data_table = (function ui$data_table$server_side_data_table(p__16294){
var map__16295 = p__16294;
var map__16295__$1 = cljs.core.__destructure_map(map__16295);
var show_pagination_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16295__$1,new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515),true);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16295__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"id","id",-1388402092));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16295__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"default","default",-1987822328));
var query_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16295__$1,new cljs.core.Keyword(null,"query-fn","query-fn",-646736760));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16295__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var empty_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16295__$1,new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16295__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16295__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16295__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var show_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16295__$1,new cljs.core.Keyword(null,"show-search?","show-search?",684663920),true);
var on_data_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16295__$1,new cljs.core.Keyword(null,"on-data-change","on-data-change",475267763));
var data_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16295__$1,new cljs.core.Keyword(null,"data-key","data-key",1775480631));
var table_state = cljs.core.deref((function (){var G__16296 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358),table_id], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__16296) : zero.frontend.re_frame.subscribe.call(null,G__16296));
})());
var search_term = new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(table_state);
var sort_config = new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(table_state);
var pagination = new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(table_state);
var rows = (cljs.core.truth_(data_key)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(data_source,data_key,cljs.core.PersistentVector.EMPTY):data_source);
var server_pagination = new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(data_source);
var total_count = new cljs.core.Keyword(null,"total-count","total-count",-1999441386).cljs$core$IFn$_invoke$arity$2(server_pagination,(0));
var normalized_search_16773 = (function (){var or__5025__auto__ = search_term;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
var normalized_sort_key_16774 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sort_config);
var normalized_sort_direction_16775 = cljs.core.name(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$2(sort_config,new cljs.core.Keyword(null,"asc","asc",356854569)));
var normalized_page_16776 = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$2(pagination,(0));
var normalized_page_size_16777 = new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$2(pagination,(10));
var normalized_search_map_16778 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",1564939822),normalized_search_16773,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),normalized_sort_key_16774,new cljs.core.Keyword(null,"sort-direction","sort-direction",-1635889628),normalized_sort_direction_16775,new cljs.core.Keyword(null,"page","page",849072397),normalized_page_16776,new cljs.core.Keyword(null,"page-size","page-size",223836073),normalized_page_size_16777], null);
zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
if(cljs.core.truth_(query_fn)){
return (query_fn.cljs$core$IFn$_invoke$arity$1 ? query_fn.cljs$core$IFn$_invoke$arity$1(normalized_search_map_16778) : query_fn.call(null,normalized_search_map_16778));
} else {
return null;
}
}),new cljs.core.Keyword(null,"params","params",710516235),[]], null));

zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
if(cljs.core.truth_(query_fn)){
return (query_fn.cljs$core$IFn$_invoke$arity$1 ? query_fn.cljs$core$IFn$_invoke$arity$1(normalized_search_map_16778) : query_fn.call(null,normalized_search_map_16778));
} else {
return null;
}
}),new cljs.core.Keyword(null,"params","params",710516235),[normalized_search_16773,normalized_sort_key_16774,normalized_sort_direction_16775,normalized_page_16776,normalized_page_size_16777]], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(show_search_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.search_input,table_id,search_term], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"border","border",1444987323),"4px solid #f3f4f6",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"4px solid #3b82f6",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"animation","animation",-1248293244),"spin 1s linear infinite",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto 1rem"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),translations.core.tr(new cljs.core.Keyword("table","loading","table/loading",-628992827))], null)], null)], null):((((cljs.core.empty_QMARK_(rows)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_count,(0)))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),(function (){var or__5025__auto__ = empty_message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return translations.core.tr(new cljs.core.Keyword("table","no-data","table/no-data",2119568656));
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","no-items","table/no-items",-919114863))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function ui$data_table$server_side_data_table_$_iter__16297(s__16298){
return (new cljs.core.LazySeq(null,(function (){
var s__16298__$1 = s__16298;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16298__$1);
if(temp__5823__auto__){
var s__16298__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16298__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16298__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16300 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16299 = (0);
while(true){
if((i__16299 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__16299);
cljs.core.chunk_append(b__16300,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)));

var G__16780 = (i__16299 + (1));
i__16299 = G__16780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16300),ui$data_table$server_side_data_table_$_iter__16297(cljs.core.chunk_rest(s__16298__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16300),null);
}
} else {
var header = cljs.core.first(s__16298__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)),ui$data_table$server_side_data_table_$_iter__16297(cljs.core.rest(s__16298__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_header_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),translations.core.tr(new cljs.core.Keyword("table","actions","table/actions",-698381628))], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function ui$data_table$server_side_data_table_$_iter__16301(s__16302){
return (new cljs.core.LazySeq(null,(function (){
var s__16302__$1 = s__16302;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16302__$1);
if(temp__5823__auto__){
var s__16302__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16302__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16302__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16304 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16303 = (0);
while(true){
if((i__16303 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__16303);
cljs.core.chunk_append(b__16304,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (i__16303,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__16301_$_iter__16305(s__16306){
return (new cljs.core.LazySeq(null,((function (i__16303,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
var s__16306__$1 = s__16306;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__16306__$1);
if(temp__5823__auto____$1){
var s__16306__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16306__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__16306__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__16308 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__16307 = (0);
while(true){
if((i__16307 < size__5502__auto____$1)){
var header = cljs.core._nth(c__5501__auto____$1,i__16307);
cljs.core.chunk_append(b__16308,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__16312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__16313 = row;
var fexpr__16311 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__16311.cljs$core$IFn$_invoke$arity$2 ? fexpr__16311.cljs$core$IFn$_invoke$arity$2(G__16312,G__16313) : fexpr__16311.call(null,G__16312,G__16313));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__16785 = (i__16307 + (1));
i__16307 = G__16785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16308),ui$data_table$server_side_data_table_$_iter__16301_$_iter__16305(cljs.core.chunk_rest(s__16306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16308),null);
}
} else {
var header = cljs.core.first(s__16306__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__16321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__16322 = row;
var fexpr__16320 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__16320.cljs$core$IFn$_invoke$arity$2 ? fexpr__16320.cljs$core$IFn$_invoke$arity$2(G__16321,G__16322) : fexpr__16320.call(null,G__16321,G__16322));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$server_side_data_table_$_iter__16301_$_iter__16305(cljs.core.rest(s__16306__$2)));
}
} else {
return null;
}
break;
}
});})(i__16303,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,null,null));
});})(i__16303,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (i__16303,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__16301_$_iter__16331(s__16332){
return (new cljs.core.LazySeq(null,((function (i__16303,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
var s__16332__$1 = s__16332;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__16332__$1);
if(temp__5823__auto____$1){
var s__16332__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16332__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__16332__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__16334 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__16333 = (0);
while(true){
if((i__16333 < size__5502__auto____$1)){
var action = cljs.core._nth(c__5501__auto____$1,i__16333);
cljs.core.chunk_append(b__16334,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__16333,i__16303,action,c__5501__auto____$1,size__5502__auto____$1,b__16334,s__16332__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__16343 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16343.cljs$core$IFn$_invoke$arity$1 ? fexpr__16343.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16343.call(null,row));
} else {
return null;
}
});})(i__16333,i__16303,action,c__5501__auto____$1,size__5502__auto____$1,b__16334,s__16332__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__16346 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16346.cljs$core$IFn$_invoke$arity$1 ? fexpr__16346.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16346.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__16795 = (i__16333 + (1));
i__16333 = G__16795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16334),ui$data_table$server_side_data_table_$_iter__16301_$_iter__16331(cljs.core.chunk_rest(s__16332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16334),null);
}
} else {
var action = cljs.core.first(s__16332__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__16303,action,s__16332__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__16353 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16353.cljs$core$IFn$_invoke$arity$1 ? fexpr__16353.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16353.call(null,row));
} else {
return null;
}
});})(i__16303,action,s__16332__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__16354 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16354.cljs$core$IFn$_invoke$arity$1 ? fexpr__16354.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16354.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$server_side_data_table_$_iter__16301_$_iter__16331(cljs.core.rest(s__16332__$2)));
}
} else {
return null;
}
break;
}
});})(i__16303,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,null,null));
});})(i__16303,row,c__5501__auto__,size__5502__auto__,b__16304,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)));

var G__16797 = (i__16303 + (1));
i__16303 = G__16797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16304),ui$data_table$server_side_data_table_$_iter__16301(cljs.core.chunk_rest(s__16302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16304),null);
}
} else {
var row = cljs.core.first(s__16302__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__16301_$_iter__16363(s__16364){
return (new cljs.core.LazySeq(null,(function (){
var s__16364__$1 = s__16364;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__16364__$1);
if(temp__5823__auto____$1){
var s__16364__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16364__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16364__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16366 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16365 = (0);
while(true){
if((i__16365 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__16365);
cljs.core.chunk_append(b__16366,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__16374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__16375 = row;
var fexpr__16373 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__16373.cljs$core$IFn$_invoke$arity$2 ? fexpr__16373.cljs$core$IFn$_invoke$arity$2(G__16374,G__16375) : fexpr__16373.call(null,G__16374,G__16375));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__16812 = (i__16365 + (1));
i__16365 = G__16812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16366),ui$data_table$server_side_data_table_$_iter__16301_$_iter__16363(cljs.core.chunk_rest(s__16364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16366),null);
}
} else {
var header = cljs.core.first(s__16364__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__16379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__16380 = row;
var fexpr__16378 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__16378.cljs$core$IFn$_invoke$arity$2 ? fexpr__16378.cljs$core$IFn$_invoke$arity$2(G__16379,G__16380) : fexpr__16378.call(null,G__16379,G__16380));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$server_side_data_table_$_iter__16301_$_iter__16363(cljs.core.rest(s__16364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__16301_$_iter__16382(s__16383){
return (new cljs.core.LazySeq(null,(function (){
var s__16383__$1 = s__16383;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__16383__$1);
if(temp__5823__auto____$1){
var s__16383__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16383__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__16383__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__16385 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__16384 = (0);
while(true){
if((i__16384 < size__5502__auto__)){
var action = cljs.core._nth(c__5501__auto__,i__16384);
cljs.core.chunk_append(b__16385,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__16384,action,c__5501__auto__,size__5502__auto__,b__16385,s__16383__$2,temp__5823__auto____$1,row,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__16388 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16388.cljs$core$IFn$_invoke$arity$1 ? fexpr__16388.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16388.call(null,row));
} else {
return null;
}
});})(i__16384,action,c__5501__auto__,size__5502__auto__,b__16385,s__16383__$2,temp__5823__auto____$1,row,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__16389 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16389.cljs$core$IFn$_invoke$arity$1 ? fexpr__16389.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16389.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__16849 = (i__16384 + (1));
i__16384 = G__16849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16385),ui$data_table$server_side_data_table_$_iter__16301_$_iter__16382(cljs.core.chunk_rest(s__16383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16385),null);
}
} else {
var action = cljs.core.first(s__16383__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (action,s__16383__$2,temp__5823__auto____$1,row,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__16390 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16390.cljs$core$IFn$_invoke$arity$1 ? fexpr__16390.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16390.call(null,row));
} else {
return null;
}
});})(action,s__16383__$2,temp__5823__auto____$1,row,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__16391 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__16391.cljs$core$IFn$_invoke$arity$1 ? fexpr__16391.cljs$core$IFn$_invoke$arity$1(row) : fexpr__16391.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$server_side_data_table_$_iter__16301_$_iter__16382(cljs.core.rest(s__16383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__16302__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__16295,map__16295__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)),ui$data_table$server_side_data_table_$_iter__16301(cljs.core.rest(s__16302__$2)));
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
