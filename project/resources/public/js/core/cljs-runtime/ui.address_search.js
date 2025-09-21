goog.provide('ui.address_search');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("ui","address-search","ui/address-search",-1610282242),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__35870){
var vec__35871 = p__35870;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35871,(0),null);
var component_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35871,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"address-search","address-search",-1610284950),component_id], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ui","address-search-set-state","ui/address-search-set-state",-325756243),(function (db,p__35878){
var vec__35879 = p__35878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35879,(0),null);
var component_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35879,(1),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35879,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"address-search","address-search",-1610284950),component_id], null),state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),(function (db,p__35883){
var vec__35884 = p__35883;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35884,(0),null);
var component_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35884,(1),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35884,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35884,(3),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"address-search","address-search",-1610284950),component_id,key], null),value);
}));
ui.address_search.debounced_search = (function ui$address_search$debounced_search(search_fn,delay){
var timeout_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (search_term,workspace_id,callback){
if(cljs.core.truth_(cljs.core.deref(timeout_ref))){
clearTimeout(cljs.core.deref(timeout_ref));
} else {
}

return cljs.core.reset_BANG_(timeout_ref,setTimeout((function (){
return (search_fn.cljs$core$IFn$_invoke$arity$3 ? search_fn.cljs$core$IFn$_invoke$arity$3(search_term,workspace_id,callback) : search_fn.call(null,search_term,workspace_id,callback));
}),delay));
});
});
ui.address_search.search_addresses = (function ui$address_search$search_addresses(search_term,workspace_id,callback){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: address-search searching for:",search_term], 0));

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-addresses","search","workspace-addresses/search",-914381444),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),search_term,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20)], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var addresses = new cljs.core.Keyword("workspace-addresses","search","workspace-addresses/search",-914381444).cljs$core$IFn$_invoke$arity$2(response,cljs.core.PersistentVector.EMPTY);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: address-search found",cljs.core.count(addresses),"addresses"], 0));

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(addresses) : callback.call(null,addresses));
})], null));
});
ui.address_search.debounced_search_addresses = ui.address_search.debounced_search(ui.address_search.search_addresses,(300));
/**
 * Searchable address dropdown component
 */
ui.address_search.address_search_dropdown = (function ui$address_search$address_search_dropdown(p__35904){
var map__35905 = p__35904;
var map__35905__$1 = cljs.core.__destructure_map(map__35905);
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search","ui/address-search",-1610282242),component_id], null))))){
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-set-state","ui/address-search-set-state",-325756243),component_id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search-term","search-term",356193544),"",new cljs.core.Keyword(null,"addresses","addresses",-559529694),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"show-dropdown?","show-dropdown?",1118104354),false,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null)], null));
}

return (function (p__35908){
var map__35909 = p__35908;
var map__35909__$1 = cljs.core.__destructure_map(map__35909);
var component_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35909__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var workspace_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35909__$1,new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35909__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_select__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35909__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var placeholder__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35909__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var disabled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35909__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search","ui/address-search",-1610282242),component_id__$1], null)));
var search_term = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
var addresses = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"addresses","addresses",-559529694).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var loading_QMARK_ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return false;
}
})();
var show_dropdown_QMARK_ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"show-dropdown?","show-dropdown?",1118104354).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return false;
}
})();
var selected_address = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"selected-address","selected-address",763318752).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return value__$1;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: address-search component rendering:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  component-id:",component_id__$1], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  workspace-id:",workspace_id__$1], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  value:",value__$1], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  state:",state], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  search-term:",search_term], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  selected-address:",selected_address], 0));

if(cljs.core.truth_((function (){var and__5023__auto__ = value__$1;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,selected_address);
} else {
return and__5023__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),value__$1], null));
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"address-search-container",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(function (){var or__5025__auto__ = placeholder__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return translations.core.tr(new cljs.core.Keyword("address-search","placeholder","address-search/placeholder",229263912));
}
})(),new cljs.core.Keyword(null,"value","value",305978217),search_term,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var new_term = e.target.value;
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544),new_term], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"show-dropdown?","show-dropdown?",1118104354),cljs.core.seq(new_term)], null));

if(cljs.core.truth_((function (){var and__5023__auto__ = workspace_id__$1;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.seq(new_term)) && ((cljs.core.count(new_term) >= (1))));
} else {
return and__5023__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true], null));

return ui.address_search.debounced_search_addresses(new_term,workspace_id__$1,(function (results){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694),results], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null));
}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"show-dropdown?","show-dropdown?",1118104354),true], null));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (_){
return setTimeout((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"show-dropdown?","show-dropdown?",1118104354),false], null));
}),(200));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(disabled__$1)?"#f5f5f5":"#fff")], null)], null)], null),(cljs.core.truth_((function (){var and__5023__auto__ = selected_address;
if(cljs.core.truth_(and__5023__auto__)){
return clojure.string.blank_QMARK_(search_term);
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center","#333","0","#f9f9f9","8px 12px","0","flex","absolute","1px solid #ccc","4px","none","100%","0"])], null),new cljs.core.Keyword("address","display","address/display",-756696060).cljs$core$IFn$_invoke$arity$2(selected_address,new cljs.core.Keyword("address","name","address/name",848026653).cljs$core$IFn$_invoke$arity$1(selected_address))], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = show_dropdown_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(search_term);
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"address-search-dropdown",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"left","left",-399115937)],["0 2px 8px rgba(0,0,0,0.1)","200px","100%","#fff",(1000),"0","absolute","1px solid #ccc","none","auto","0 0 4px 4px","0"])], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),translations.core.tr(new cljs.core.Keyword("address-search","searching","address-search/searching",-177718722))], null):null),((((cljs.core.not(loading_QMARK_)) && (((cljs.core.empty_QMARK_(addresses)) && (cljs.core.seq(search_term))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),translations.core.tr(new cljs.core.Keyword("address-search","no-results","address-search/no-results",1995157051))], null):null),(function (){var iter__5503__auto__ = (function ui$address_search$address_search_dropdown_$_iter__35914(s__35915){
return (new cljs.core.LazySeq(null,(function (){
var s__35915__$1 = s__35915;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35915__$1);
if(temp__5823__auto__){
var s__35915__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35915__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__35915__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__35917 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__35916 = (0);
while(true){
if((i__35916 < size__5502__auto__)){
var address = cljs.core._nth(c__5501__auto__,i__35916);
cljs.core.chunk_append(b__35917,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("address","id","address/id",-555725248).cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"class","class",-2030961996),"address-option",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__35916,address,c__5501__auto__,size__5502__auto__,b__35917,s__35915__$2,temp__5823__auto__,state,search_term,addresses,loading_QMARK_,show_dropdown_QMARK_,selected_address,map__35909,map__35909__$1,component_id__$1,workspace_id__$1,value__$1,on_select__$1,placeholder__$1,disabled__$1,map__35905,map__35905__$1,component_id,workspace_id,value,on_select,placeholder,disabled){
return (function (_){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),address], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544),""], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"show-dropdown?","show-dropdown?",1118104354),false], null));

if(cljs.core.truth_(on_select__$1)){
return (on_select__$1.cljs$core$IFn$_invoke$arity$1 ? on_select__$1.cljs$core$IFn$_invoke$arity$1(address) : on_select__$1.call(null,address));
} else {
return null;
}
});})(i__35916,address,c__5501__auto__,size__5502__auto__,b__35917,s__35915__$2,temp__5823__auto__,state,search_term,addresses,loading_QMARK_,show_dropdown_QMARK_,selected_address,map__35909,map__35909__$1,component_id__$1,workspace_id__$1,value__$1,on_select__$1,placeholder__$1,disabled__$1,map__35905,map__35905__$1,component_id,workspace_id,value,on_select,placeholder,disabled))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #eee"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),new cljs.core.Keyword("address","name","address/name",848026653).cljs$core$IFn$_invoke$arity$1(address)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("address","address-line1","address/address-line1",-1206418180).cljs$core$IFn$_invoke$arity$1(address)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("address","city","address/city",-1506334306).cljs$core$IFn$_invoke$arity$1(address))].join('')], null)], null));

var G__35952 = (i__35916 + (1));
i__35916 = G__35952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35917),ui$address_search$address_search_dropdown_$_iter__35914(cljs.core.chunk_rest(s__35915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35917),null);
}
} else {
var address = cljs.core.first(s__35915__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("address","id","address/id",-555725248).cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"class","class",-2030961996),"address-option",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (address,s__35915__$2,temp__5823__auto__,state,search_term,addresses,loading_QMARK_,show_dropdown_QMARK_,selected_address,map__35909,map__35909__$1,component_id__$1,workspace_id__$1,value__$1,on_select__$1,placeholder__$1,disabled__$1,map__35905,map__35905__$1,component_id,workspace_id,value,on_select,placeholder,disabled){
return (function (_){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),address], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544),""], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","address-search-update","ui/address-search-update",1967522077),component_id__$1,new cljs.core.Keyword(null,"show-dropdown?","show-dropdown?",1118104354),false], null));

if(cljs.core.truth_(on_select__$1)){
return (on_select__$1.cljs$core$IFn$_invoke$arity$1 ? on_select__$1.cljs$core$IFn$_invoke$arity$1(address) : on_select__$1.call(null,address));
} else {
return null;
}
});})(address,s__35915__$2,temp__5823__auto__,state,search_term,addresses,loading_QMARK_,show_dropdown_QMARK_,selected_address,map__35909,map__35909__$1,component_id__$1,workspace_id__$1,value__$1,on_select__$1,placeholder__$1,disabled__$1,map__35905,map__35905__$1,component_id,workspace_id,value,on_select,placeholder,disabled))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #eee"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),new cljs.core.Keyword("address","name","address/name",848026653).cljs$core$IFn$_invoke$arity$1(address)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("address","address-line1","address/address-line1",-1206418180).cljs$core$IFn$_invoke$arity$1(address)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("address","city","address/city",-1506334306).cljs$core$IFn$_invoke$arity$1(address))].join('')], null)], null),ui$address_search$address_search_dropdown_$_iter__35914(cljs.core.rest(s__35915__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(addresses);
})()], null):null)], null);
});
});

//# sourceMappingURL=ui.address_search.js.map
