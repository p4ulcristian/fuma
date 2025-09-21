goog.provide('ui.data_table');
var G__38502_38700 = new cljs.core.Keyword("data-table","set-search","data-table/set-search",-241762314);
var G__38503_38701 = (function (db,p__38504){
var vec__38505 = p__38504;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38505,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38505,(1),null);
var search_term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38505,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"search","search",1564939822)], null),search_term),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),(0));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38502_38700,G__38503_38701) : zero.frontend.re_frame.reg_event_db.call(null,G__38502_38700,G__38503_38701));
var G__38512_38702 = new cljs.core.Keyword("data-table","set-sort","data-table/set-sort",351981518);
var G__38513_38703 = (function (db,p__38514){
var vec__38515 = p__38514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38515,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38515,(1),null);
var sort_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38515,(2),null);
var sort_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38515,(3),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"sort","sort",953465918)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sort_key,new cljs.core.Keyword(null,"direction","direction",-633359395),sort_direction], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),(0));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38512_38702,G__38513_38703) : zero.frontend.re_frame.reg_event_db.call(null,G__38512_38702,G__38513_38703));
var G__38521_38705 = new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135);
var G__38522_38706 = (function (db,p__38523){
var vec__38524 = p__38523;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38524,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38524,(1),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38524,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),page);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38521_38705,G__38522_38706) : zero.frontend.re_frame.reg_event_db.call(null,G__38521_38705,G__38522_38706));
var G__38530_38710 = new cljs.core.Keyword("data-table","set-page-size","data-table/set-page-size",-1756940563);
var G__38531_38711 = (function (db,p__38532){
var vec__38533 = p__38532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38533,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38533,(1),null);
var page_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38533,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"page-size","page-size",223836073)], null),page_size);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38530_38710,G__38531_38711) : zero.frontend.re_frame.reg_event_db.call(null,G__38530_38710,G__38531_38711));
var G__38536_38712 = new cljs.core.Keyword("data-table","reset-state","data-table/reset-state",1009637636);
var G__38537_38713 = (function (db,p__38538){
var vec__38539 = p__38538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38539,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38539,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null)], null));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__38536_38712,G__38537_38713) : zero.frontend.re_frame.reg_event_db.call(null,G__38536_38712,G__38537_38713));
var G__38542_38720 = new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358);
var G__38543_38721 = (function (db,p__38544){
var vec__38545 = p__38544;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38545,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38545,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__38542_38720,G__38543_38721) : zero.frontend.re_frame.reg_sub.call(null,G__38542_38720,G__38543_38721));
var G__38548_38790 = new cljs.core.Keyword("data-table","get-search","data-table/get-search",1426835433);
var G__38549_38791 = (function (db,p__38551){
var vec__38552 = p__38551;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38552,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38552,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"search","search",1564939822)], null),"");
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__38548_38790,G__38549_38791) : zero.frontend.re_frame.reg_sub.call(null,G__38548_38790,G__38549_38791));
var G__38555_38793 = new cljs.core.Keyword("data-table","get-sort","data-table/get-sort",-1700535166);
var G__38556_38794 = (function (db,p__38558){
var vec__38559 = p__38558;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38559,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38559,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"sort","sort",953465918)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__38555_38793,G__38556_38794) : zero.frontend.re_frame.reg_sub.call(null,G__38555_38793,G__38556_38794));
var G__38562_38795 = new cljs.core.Keyword("data-table","get-pagination","data-table/get-pagination",-663522475);
var G__38563_38796 = (function (db,p__38564){
var vec__38565 = p__38564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38565,(0),null);
var table_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38565,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-table","data-table",-149582774),table_id,new cljs.core.Keyword(null,"pagination","pagination",-1553654604)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__38562_38795,G__38563_38796) : zero.frontend.re_frame.reg_sub.call(null,G__38562_38795,G__38563_38796));
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
var sort_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sort_config),new cljs.core.Keyword(null,"desc","desc",2093485764)))?(function (p1__38571_SHARP_,p2__38570_SHARP_){
return cljs.core.compare(p2__38570_SHARP_,p1__38571_SHARP_);
}):cljs.core.compare);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__38572_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__38572_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sort_config));
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
var filtered_rows = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38575_SHARP_){
return ui.data_table.search_matches_QMARK_(p1__38575_SHARP_,search_term,headers);
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
var len__5749__auto___38834 = arguments.length;
var i__5750__auto___38835 = (0);
while(true){
if((i__5750__auto___38835 < len__5749__auto___38834)){
args__5755__auto__.push((arguments[i__5750__auto___38835]));

var G__38836 = (i__5750__auto___38835 + (1));
i__5750__auto___38835 = G__38836;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return ui.data_table.action_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(ui.data_table.action_button.cljs$core$IFn$_invoke$arity$variadic = (function (text,on_click,variant,p__38581){
var map__38582 = p__38581;
var map__38582__$1 = cljs.core.__destructure_map(map__38582);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38582__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var variant_styles = (function (){var G__38583 = variant;
var G__38583__$1 = (((G__38583 instanceof cljs.core.Keyword))?G__38583.fqn:null);
switch (G__38583__$1) {
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
(ui.data_table.action_button.cljs$lang$applyTo = (function (seq38577){
var G__38578 = cljs.core.first(seq38577);
var seq38577__$1 = cljs.core.next(seq38577);
var G__38579 = cljs.core.first(seq38577__$1);
var seq38577__$2 = cljs.core.next(seq38577__$1);
var G__38580 = cljs.core.first(seq38577__$2);
var seq38577__$3 = cljs.core.next(seq38577__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38578,G__38579,G__38580,seq38577__$3);
}));

/**
 * Search input component
 */
ui.data_table.search_input = (function ui$data_table$search_input(table_id,search_term){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("table","search","table/search",1429686880)),new cljs.core.Keyword(null,"value","value",305978217),search_term,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38584_SHARP_){
var G__38585 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-search","data-table/set-search",-241762314),table_id,p1__38584_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__38585) : zero.frontend.re_frame.dispatch.call(null,G__38585));
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
var G__38586 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-sort","data-table/set-sort",351981518),table_id,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header),next_direction], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__38586) : zero.frontend.re_frame.dispatch.call(null,G__38586));
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
var G__38589 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,(current_page - (1))], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__38589) : zero.frontend.re_frame.dispatch.call(null,G__38589));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((has_prev_QMARK_)?"white":"#f3f4f6"),new cljs.core.Keyword(null,"color","color",1011675173),((has_prev_QMARK_)?"#374151":"#9ca3af"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((has_prev_QMARK_)?"pointer":"not-allowed"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","previous","table/previous",-1415448378))], null),(function (){var start_page = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (current_page - (2));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var end_page = (function (){var x__5113__auto__ = total_pages;
var y__5114__auto__ = (current_page + (3));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var iter__5503__auto__ = (function ui$data_table$pagination_controls_$_iter__38590(s__38591){
return (new cljs.core.LazySeq(null,(function (){
var s__38591__$1 = s__38591;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__38591__$1);
if(temp__5823__auto__){
var s__38591__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38591__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__38591__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__38593 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__38592 = (0);
while(true){
if((i__38592 < size__5502__auto__)){
var page = cljs.core._nth(c__5501__auto__,i__38592);
cljs.core.chunk_append(b__38593,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38592,page,c__5501__auto__,size__5502__auto__,b__38593,s__38591__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item){
return (function (){
var G__38596 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,page], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__38596) : zero.frontend.re_frame.dispatch.call(null,G__38596));
});})(i__38592,page,c__5501__auto__,size__5502__auto__,b__38593,s__38591__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"#3b82f6":"white"),new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"white":"#374151"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0.125rem"], null)], null),(page + (1))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)));

var G__38923 = (i__38592 + (1));
i__38592 = G__38923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38593),ui$data_table$pagination_controls_$_iter__38590(cljs.core.chunk_rest(s__38591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38593),null);
}
} else {
var page = cljs.core.first(s__38591__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__38591__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item){
return (function (){
var G__38597 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,page], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__38597) : zero.frontend.re_frame.dispatch.call(null,G__38597));
});})(page,s__38591__$2,temp__5823__auto__,start_page,end_page,current_page,page_size,total_pages,has_prev_QMARK_,has_next_QMARK_,start_item,end_item))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"#3b82f6":"white"),new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?"white":"#374151"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0.125rem"], null)], null),(page + (1))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)),ui$data_table$pagination_controls_$_iter__38590(cljs.core.rest(s__38591__$2)));
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
var G__38598 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","set-page","data-table/set-page",1603779135),table_id,(current_page + (1))], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__38598) : zero.frontend.re_frame.dispatch.call(null,G__38598));
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
var len__5749__auto___38956 = arguments.length;
var i__5750__auto___38957 = (0);
while(true){
if((i__5750__auto___38957 < len__5749__auto___38956)){
args__5755__auto__.push((arguments[i__5750__auto___38957]));

var G__38966 = (i__5750__auto___38957 + (1));
i__5750__auto___38957 = G__38966;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return ui.data_table.status_badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(ui.data_table.status_badge.cljs$core$IFn$_invoke$arity$variadic = (function (active_QMARK_,p__38601){
var map__38602 = p__38601;
var map__38602__$1 = cljs.core.__destructure_map(map__38602);
var active_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38602__$1,new cljs.core.Keyword(null,"active-text","active-text",758142518));
var inactive_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38602__$1,new cljs.core.Keyword(null,"inactive-text","inactive-text",491481192));
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
(ui.data_table.status_badge.cljs$lang$applyTo = (function (seq38599){
var G__38600 = cljs.core.first(seq38599);
var seq38599__$1 = cljs.core.next(seq38599);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38600,seq38599__$1);
}));

/**
 * Modern styled data table with client-side search, sorting, and pagination
 */
ui.data_table.data_table = (function ui$data_table$data_table(p__38603){
var map__38604 = p__38603;
var map__38604__$1 = cljs.core.__destructure_map(map__38604);
var show_pagination_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38604__$1,new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515),true);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38604__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"id","id",-1388402092));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38604__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"default","default",-1987822328));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38604__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var empty_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38604__$1,new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38604__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38604__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38604__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var show_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38604__$1,new cljs.core.Keyword(null,"show-search?","show-search?",684663920),true);
var table_state = cljs.core.deref((function (){var G__38605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358),table_id], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__38605) : zero.frontend.re_frame.subscribe.call(null,G__38605));
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
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","no-items","table/no-items",-919114863))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function ui$data_table$data_table_$_iter__38606(s__38607){
return (new cljs.core.LazySeq(null,(function (){
var s__38607__$1 = s__38607;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__38607__$1);
if(temp__5823__auto__){
var s__38607__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38607__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__38607__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__38609 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__38608 = (0);
while(true){
if((i__38608 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__38608);
cljs.core.chunk_append(b__38609,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)));

var G__39016 = (i__38608 + (1));
i__38608 = G__39016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38609),ui$data_table$data_table_$_iter__38606(cljs.core.chunk_rest(s__38607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38609),null);
}
} else {
var header = cljs.core.first(s__38607__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)),ui$data_table$data_table_$_iter__38606(cljs.core.rest(s__38607__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_header_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),translations.core.tr(new cljs.core.Keyword("table","actions","table/actions",-698381628))], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function ui$data_table$data_table_$_iter__38611(s__38612){
return (new cljs.core.LazySeq(null,(function (){
var s__38612__$1 = s__38612;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__38612__$1);
if(temp__5823__auto__){
var s__38612__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38612__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__38612__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__38614 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__38613 = (0);
while(true){
if((i__38613 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__38613);
cljs.core.chunk_append(b__38614,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (i__38613,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__38611_$_iter__38615(s__38616){
return (new cljs.core.LazySeq(null,((function (i__38613,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
var s__38616__$1 = s__38616;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__38616__$1);
if(temp__5823__auto____$1){
var s__38616__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38616__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__38616__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__38618 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__38617 = (0);
while(true){
if((i__38617 < size__5502__auto____$1)){
var header = cljs.core._nth(c__5501__auto____$1,i__38617);
cljs.core.chunk_append(b__38618,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__38620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__38621 = row;
var fexpr__38619 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__38619.cljs$core$IFn$_invoke$arity$2 ? fexpr__38619.cljs$core$IFn$_invoke$arity$2(G__38620,G__38621) : fexpr__38619.call(null,G__38620,G__38621));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__39058 = (i__38617 + (1));
i__38617 = G__39058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38618),ui$data_table$data_table_$_iter__38611_$_iter__38615(cljs.core.chunk_rest(s__38616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38618),null);
}
} else {
var header = cljs.core.first(s__38616__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__38623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__38624 = row;
var fexpr__38622 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__38622.cljs$core$IFn$_invoke$arity$2 ? fexpr__38622.cljs$core$IFn$_invoke$arity$2(G__38623,G__38624) : fexpr__38622.call(null,G__38623,G__38624));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$data_table_$_iter__38611_$_iter__38615(cljs.core.rest(s__38616__$2)));
}
} else {
return null;
}
break;
}
});})(i__38613,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,null,null));
});})(i__38613,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (i__38613,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__38611_$_iter__38625(s__38626){
return (new cljs.core.LazySeq(null,((function (i__38613,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
var s__38626__$1 = s__38626;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__38626__$1);
if(temp__5823__auto____$1){
var s__38626__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38626__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__38626__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__38628 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__38627 = (0);
while(true){
if((i__38627 < size__5502__auto____$1)){
var action = cljs.core._nth(c__5501__auto____$1,i__38627);
cljs.core.chunk_append(b__38628,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__38627,i__38613,action,c__5501__auto____$1,size__5502__auto____$1,b__38628,s__38626__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__38629 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38629.cljs$core$IFn$_invoke$arity$1 ? fexpr__38629.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38629.call(null,row));
} else {
return null;
}
});})(i__38627,i__38613,action,c__5501__auto____$1,size__5502__auto____$1,b__38628,s__38626__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__38630 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38630.cljs$core$IFn$_invoke$arity$1 ? fexpr__38630.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38630.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__39064 = (i__38627 + (1));
i__38627 = G__39064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38628),ui$data_table$data_table_$_iter__38611_$_iter__38625(cljs.core.chunk_rest(s__38626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38628),null);
}
} else {
var action = cljs.core.first(s__38626__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__38613,action,s__38626__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__38631 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38631.cljs$core$IFn$_invoke$arity$1 ? fexpr__38631.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38631.call(null,row));
} else {
return null;
}
});})(i__38613,action,s__38626__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__38632 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38632.cljs$core$IFn$_invoke$arity$1 ? fexpr__38632.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38632.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$data_table_$_iter__38611_$_iter__38625(cljs.core.rest(s__38626__$2)));
}
} else {
return null;
}
break;
}
});})(i__38613,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,null,null));
});})(i__38613,row,c__5501__auto__,size__5502__auto__,b__38614,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)));

var G__39071 = (i__38613 + (1));
i__38613 = G__39071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38614),ui$data_table$data_table_$_iter__38611(cljs.core.chunk_rest(s__38612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38614),null);
}
} else {
var row = cljs.core.first(s__38612__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__38611_$_iter__38633(s__38634){
return (new cljs.core.LazySeq(null,(function (){
var s__38634__$1 = s__38634;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__38634__$1);
if(temp__5823__auto____$1){
var s__38634__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38634__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__38634__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__38636 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__38635 = (0);
while(true){
if((i__38635 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__38635);
cljs.core.chunk_append(b__38636,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__38638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__38639 = row;
var fexpr__38637 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__38637.cljs$core$IFn$_invoke$arity$2 ? fexpr__38637.cljs$core$IFn$_invoke$arity$2(G__38638,G__38639) : fexpr__38637.call(null,G__38638,G__38639));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__39100 = (i__38635 + (1));
i__38635 = G__39100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38636),ui$data_table$data_table_$_iter__38611_$_iter__38633(cljs.core.chunk_rest(s__38634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38636),null);
}
} else {
var header = cljs.core.first(s__38634__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__38641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__38642 = row;
var fexpr__38640 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__38640.cljs$core$IFn$_invoke$arity$2 ? fexpr__38640.cljs$core$IFn$_invoke$arity$2(G__38641,G__38642) : fexpr__38640.call(null,G__38641,G__38642));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$data_table_$_iter__38611_$_iter__38633(cljs.core.rest(s__38634__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function ui$data_table$data_table_$_iter__38611_$_iter__38643(s__38644){
return (new cljs.core.LazySeq(null,(function (){
var s__38644__$1 = s__38644;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__38644__$1);
if(temp__5823__auto____$1){
var s__38644__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38644__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__38644__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__38646 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__38645 = (0);
while(true){
if((i__38645 < size__5502__auto__)){
var action = cljs.core._nth(c__5501__auto__,i__38645);
cljs.core.chunk_append(b__38646,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__38645,action,c__5501__auto__,size__5502__auto__,b__38646,s__38644__$2,temp__5823__auto____$1,row,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__38647 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38647.cljs$core$IFn$_invoke$arity$1 ? fexpr__38647.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38647.call(null,row));
} else {
return null;
}
});})(i__38645,action,c__5501__auto__,size__5502__auto__,b__38646,s__38644__$2,temp__5823__auto____$1,row,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__38648 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38648.cljs$core$IFn$_invoke$arity$1 ? fexpr__38648.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38648.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__39117 = (i__38645 + (1));
i__38645 = G__39117;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38646),ui$data_table$data_table_$_iter__38611_$_iter__38643(cljs.core.chunk_rest(s__38644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38646),null);
}
} else {
var action = cljs.core.first(s__38644__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (action,s__38644__$2,temp__5823__auto____$1,row,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__38649 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38649.cljs$core$IFn$_invoke$arity$1 ? fexpr__38649.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38649.call(null,row));
} else {
return null;
}
});})(action,s__38644__$2,temp__5823__auto____$1,row,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__38650 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38650.cljs$core$IFn$_invoke$arity$1 ? fexpr__38650.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38650.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$data_table_$_iter__38611_$_iter__38643(cljs.core.rest(s__38644__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__38612__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,processed_data,display_rows,total_count,map__38604,map__38604__$1,show_pagination_QMARK_,id_key,table_id,loading_QMARK_,empty_message,actions,headers,rows,show_search_QMARK_))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)),ui$data_table$data_table_$_iter__38611(cljs.core.rest(s__38612__$2)));
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
ui.data_table.server_side_data_table = (function ui$data_table$server_side_data_table(p__38651){
var map__38652 = p__38651;
var map__38652__$1 = cljs.core.__destructure_map(map__38652);
var show_pagination_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38652__$1,new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515),true);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38652__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"id","id",-1388402092));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38652__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"default","default",-1987822328));
var query_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"query-fn","query-fn",-646736760));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var empty_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var show_search_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38652__$1,new cljs.core.Keyword(null,"show-search?","show-search?",684663920),true);
var on_data_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"on-data-change","on-data-change",475267763));
var data_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"data-key","data-key",1775480631));
var table_state = cljs.core.deref((function (){var G__38653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data-table","get-state","data-table/get-state",1392278358),table_id], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__38653) : zero.frontend.re_frame.subscribe.call(null,G__38653));
})());
var search_term = new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(table_state);
var sort_config = new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(table_state);
var pagination = new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(table_state);
var rows = (cljs.core.truth_(data_key)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(data_source,data_key,cljs.core.PersistentVector.EMPTY):data_source);
var server_pagination = new cljs.core.Keyword(null,"pagination","pagination",-1553654604).cljs$core$IFn$_invoke$arity$1(data_source);
var total_count = new cljs.core.Keyword(null,"total-count","total-count",-1999441386).cljs$core$IFn$_invoke$arity$2(server_pagination,(0));
var normalized_search_39124 = (function (){var or__5025__auto__ = search_term;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
var normalized_sort_key_39125 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sort_config);
var normalized_sort_direction_39126 = cljs.core.name(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$2(sort_config,new cljs.core.Keyword(null,"asc","asc",356854569)));
var normalized_page_39127 = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$2(pagination,(0));
var normalized_page_size_39128 = new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$2(pagination,(10));
var normalized_search_map_39129 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",1564939822),normalized_search_39124,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),normalized_sort_key_39125,new cljs.core.Keyword(null,"sort-direction","sort-direction",-1635889628),normalized_sort_direction_39126,new cljs.core.Keyword(null,"page","page",849072397),normalized_page_39127,new cljs.core.Keyword(null,"page-size","page-size",223836073),normalized_page_size_39128], null);
zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
if(cljs.core.truth_(query_fn)){
return (query_fn.cljs$core$IFn$_invoke$arity$1 ? query_fn.cljs$core$IFn$_invoke$arity$1(normalized_search_map_39129) : query_fn.call(null,normalized_search_map_39129));
} else {
return null;
}
}),new cljs.core.Keyword(null,"params","params",710516235),[]], null));

zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
if(cljs.core.truth_(query_fn)){
return (query_fn.cljs$core$IFn$_invoke$arity$1 ? query_fn.cljs$core$IFn$_invoke$arity$1(normalized_search_map_39129) : query_fn.call(null,normalized_search_map_39129));
} else {
return null;
}
}),new cljs.core.Keyword(null,"params","params",710516235),[normalized_search_39124,normalized_sort_key_39125,normalized_sort_direction_39126,normalized_page_39127,normalized_page_size_39128]], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(show_search_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.search_input,table_id,search_term], null):null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"border","border",1444987323),"4px solid #f3f4f6",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"4px solid #3b82f6",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"animation","animation",-1248293244),"spin 1s linear infinite",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto 1rem"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),translations.core.tr(new cljs.core.Keyword("table","loading","table/loading",-628992827))], null)], null)], null):((((cljs.core.empty_QMARK_(rows)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_count,(0)))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),(function (){var or__5025__auto__ = empty_message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return translations.core.tr(new cljs.core.Keyword("table","no-data","table/no-data",2119568656));
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("table","no-items","table/no-items",-919114863))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function ui$data_table$server_side_data_table_$_iter__38654(s__38655){
return (new cljs.core.LazySeq(null,(function (){
var s__38655__$1 = s__38655;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__38655__$1);
if(temp__5823__auto__){
var s__38655__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38655__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__38655__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__38657 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__38656 = (0);
while(true){
if((i__38656 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__38656);
cljs.core.chunk_append(b__38657,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)));

var G__39134 = (i__38656 + (1));
i__38656 = G__39134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38657),ui$data_table$server_side_data_table_$_iter__38654(cljs.core.chunk_rest(s__38655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38657),null);
}
} else {
var header = cljs.core.first(s__38655__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.sortable_header,header,table_id,sort_config], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header)], null)),ui$data_table$server_side_data_table_$_iter__38654(cljs.core.rest(s__38655__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_header_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),translations.core.tr(new cljs.core.Keyword("table","actions","table/actions",-698381628))], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function ui$data_table$server_side_data_table_$_iter__38658(s__38659){
return (new cljs.core.LazySeq(null,(function (){
var s__38659__$1 = s__38659;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__38659__$1);
if(temp__5823__auto__){
var s__38659__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38659__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__38659__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__38661 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__38660 = (0);
while(true){
if((i__38660 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__38660);
cljs.core.chunk_append(b__38661,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (i__38660,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__38658_$_iter__38662(s__38663){
return (new cljs.core.LazySeq(null,((function (i__38660,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
var s__38663__$1 = s__38663;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__38663__$1);
if(temp__5823__auto____$1){
var s__38663__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38663__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__38663__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__38665 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__38664 = (0);
while(true){
if((i__38664 < size__5502__auto____$1)){
var header = cljs.core._nth(c__5501__auto____$1,i__38664);
cljs.core.chunk_append(b__38665,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__38667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__38668 = row;
var fexpr__38666 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__38666.cljs$core$IFn$_invoke$arity$2 ? fexpr__38666.cljs$core$IFn$_invoke$arity$2(G__38667,G__38668) : fexpr__38666.call(null,G__38667,G__38668));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__39141 = (i__38664 + (1));
i__38664 = G__39141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38665),ui$data_table$server_side_data_table_$_iter__38658_$_iter__38662(cljs.core.chunk_rest(s__38663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38665),null);
}
} else {
var header = cljs.core.first(s__38663__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__38670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__38671 = row;
var fexpr__38669 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__38669.cljs$core$IFn$_invoke$arity$2 ? fexpr__38669.cljs$core$IFn$_invoke$arity$2(G__38670,G__38671) : fexpr__38669.call(null,G__38670,G__38671));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$server_side_data_table_$_iter__38658_$_iter__38662(cljs.core.rest(s__38663__$2)));
}
} else {
return null;
}
break;
}
});})(i__38660,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,null,null));
});})(i__38660,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (i__38660,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__38658_$_iter__38672(s__38673){
return (new cljs.core.LazySeq(null,((function (i__38660,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
var s__38673__$1 = s__38673;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__38673__$1);
if(temp__5823__auto____$1){
var s__38673__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38673__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__38673__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__38675 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__38674 = (0);
while(true){
if((i__38674 < size__5502__auto____$1)){
var action = cljs.core._nth(c__5501__auto____$1,i__38674);
cljs.core.chunk_append(b__38675,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__38674,i__38660,action,c__5501__auto____$1,size__5502__auto____$1,b__38675,s__38673__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__38676 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38676.cljs$core$IFn$_invoke$arity$1 ? fexpr__38676.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38676.call(null,row));
} else {
return null;
}
});})(i__38674,i__38660,action,c__5501__auto____$1,size__5502__auto____$1,b__38675,s__38673__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__38677 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38677.cljs$core$IFn$_invoke$arity$1 ? fexpr__38677.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38677.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__39149 = (i__38674 + (1));
i__38674 = G__39149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38675),ui$data_table$server_side_data_table_$_iter__38658_$_iter__38672(cljs.core.chunk_rest(s__38673__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38675),null);
}
} else {
var action = cljs.core.first(s__38673__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__38660,action,s__38673__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__38678 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38678.cljs$core$IFn$_invoke$arity$1 ? fexpr__38678.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38678.call(null,row));
} else {
return null;
}
});})(i__38660,action,s__38673__$2,temp__5823__auto____$1,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__38679 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38679.cljs$core$IFn$_invoke$arity$1 ? fexpr__38679.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38679.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$server_side_data_table_$_iter__38658_$_iter__38672(cljs.core.rest(s__38673__$2)));
}
} else {
return null;
}
break;
}
});})(i__38660,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,null,null));
});})(i__38660,row,c__5501__auto__,size__5502__auto__,b__38661,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)));

var G__39153 = (i__38660 + (1));
i__38660 = G__39153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38661),ui$data_table$server_side_data_table_$_iter__38658(cljs.core.chunk_rest(s__38659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38661),null);
}
} else {
var row = cljs.core.first(s__38659__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__38658_$_iter__38680(s__38681){
return (new cljs.core.LazySeq(null,(function (){
var s__38681__$1 = s__38681;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__38681__$1);
if(temp__5823__auto____$1){
var s__38681__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38681__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__38681__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__38683 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__38682 = (0);
while(true){
if((i__38682 < size__5502__auto__)){
var header = cljs.core._nth(c__5501__auto__,i__38682);
cljs.core.chunk_append(b__38683,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__38685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__38686 = row;
var fexpr__38684 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__38684.cljs$core$IFn$_invoke$arity$2 ? fexpr__38684.cljs$core$IFn$_invoke$arity$2(G__38685,G__38686) : fexpr__38684.call(null,G__38685,G__38686));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)));

var G__39159 = (i__38682 + (1));
i__38682 = G__39159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38683),ui$data_table$server_side_data_table_$_iter__38658_$_iter__38680(cljs.core.chunk_rest(s__38681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38683),null);
}
} else {
var header = cljs.core.first(s__38681__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089).cljs$core$IFn$_invoke$arity$1(header)], 0))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header))?(function (){var G__38688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header));
var G__38689 = row;
var fexpr__38687 = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(header);
return (fexpr__38687.cljs$core$IFn$_invoke$arity$2 ? fexpr__38687.cljs$core$IFn$_invoke$arity$2(G__38688,G__38689) : fexpr__38687.call(null,G__38688,G__38689));
})():cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(header))].join('')], null)),ui$data_table$server_side_data_table_$_iter__38658_$_iter__38680(cljs.core.rest(s__38681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(headers);
})(),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.data_table.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),(function (){var iter__5503__auto__ = ((function (row,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function ui$data_table$server_side_data_table_$_iter__38658_$_iter__38690(s__38691){
return (new cljs.core.LazySeq(null,(function (){
var s__38691__$1 = s__38691;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__38691__$1);
if(temp__5823__auto____$1){
var s__38691__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38691__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__38691__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__38693 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__38692 = (0);
while(true){
if((i__38692 < size__5502__auto__)){
var action = cljs.core._nth(c__5501__auto__,i__38692);
cljs.core.chunk_append(b__38693,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (i__38692,action,c__5501__auto__,size__5502__auto__,b__38693,s__38691__$2,temp__5823__auto____$1,row,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__38694 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38694.cljs$core$IFn$_invoke$arity$1 ? fexpr__38694.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38694.call(null,row));
} else {
return null;
}
});})(i__38692,action,c__5501__auto__,size__5502__auto__,b__38693,s__38691__$2,temp__5823__auto____$1,row,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__38695 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38695.cljs$core$IFn$_invoke$arity$1 ? fexpr__38695.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38695.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)));

var G__39170 = (i__38692 + (1));
i__38692 = G__39170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38693),ui$data_table$server_side_data_table_$_iter__38658_$_iter__38690(cljs.core.chunk_rest(s__38691__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38693),null);
}
} else {
var action = cljs.core.first(s__38691__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.action_button,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action),((function (action,s__38691__$2,temp__5823__auto____$1,row,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action))){
var fexpr__38696 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38696.cljs$core$IFn$_invoke$arity$1 ? fexpr__38696.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38696.call(null,row));
} else {
return null;
}
});})(action,s__38691__$2,temp__5823__auto____$1,row,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
,new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action))?(function (){var fexpr__38697 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(action);
return (fexpr__38697.cljs$core$IFn$_invoke$arity$1 ? fexpr__38697.cljs$core$IFn$_invoke$arity$1(row) : fexpr__38697.call(null,row));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(action)], null)),ui$data_table$server_side_data_table_$_iter__38658_$_iter__38690(cljs.core.rest(s__38691__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__38659__$2,temp__5823__auto__,table_state,search_term,sort_config,pagination,rows,server_pagination,total_count,map__38652,map__38652__$1,show_pagination_QMARK_,id_key,table_id,query_fn,loading_QMARK_,empty_message,data_source,actions,headers,show_search_QMARK_,on_data_change,data_key))
;
return iter__5503__auto__(actions);
})()], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,id_key)], null)),ui$data_table$server_side_data_table_$_iter__38658(cljs.core.rest(s__38659__$2)));
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
