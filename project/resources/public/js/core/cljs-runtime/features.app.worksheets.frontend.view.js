goog.provide('features.app.worksheets.frontend.view');
/**
 * Get workspace ID from router parameters
 */
features.app.worksheets.frontend.view.get_workspace_id = (function features$app$worksheets$frontend$view$get_workspace_id(){
var router_state = cljs.core.deref(router.frontend.zero.state);
var workspace_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(router_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435)], null));
return workspace_id;
});
/**
 * Execute ParQuery to load worksheets with pagination
 */
features.app.worksheets.frontend.view.load_worksheets_query = (function features$app$worksheets$frontend$view$load_worksheets_query(workspace_id,params,worksheets_data,loading_QMARK_){
cljs.core.reset_BANG_(loading_QMARK_,true);

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-worksheets","get-paginated","workspace-worksheets/get-paginated",-1943999071),(function (){var or__5025__auto__ = params;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
cljs.core.reset_BANG_(loading_QMARK_,false);

var result = new cljs.core.Keyword("workspace-worksheets","get-paginated","workspace-worksheets/get-paginated",-1943999071).cljs$core$IFn$_invoke$arity$1(response);
return cljs.core.reset_BANG_(worksheets_data,result);
})], null));
});
/**
 * Execute ParQuery to save worksheet
 */
features.app.worksheets.frontend.view.save_worksheet_query = (function features$app$worksheets$frontend$view$save_worksheet_query(worksheet,workspace_id,modal_is_new_QMARK_,callback,modal_worksheet,load_worksheets){
var is_new_QMARK_ = cljs.core.deref(modal_is_new_QMARK_);
var query_type = (cljs.core.truth_(is_new_QMARK_)?new cljs.core.Keyword("workspace-worksheets","create","workspace-worksheets/create",1868607499):new cljs.core.Keyword("workspace-worksheets","update","workspace-worksheets/update",2036745541));
var worksheet_data = (cljs.core.truth_(is_new_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(worksheet,new cljs.core.Keyword("worksheet","id","worksheet/id",1734545734)):worksheet);
var context = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null);
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.PersistentArrayMap.createAsIfByAssoc([query_type,worksheet_data]),new cljs.core.Keyword("parquery","context","parquery/context",661391038),context,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));

if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))){
cljs.core.reset_BANG_(modal_worksheet,null);

var G__35986 = cljs.core.PersistentArrayMap.EMPTY;
return (load_worksheets.cljs$core$IFn$_invoke$arity$1 ? load_worksheets.cljs$core$IFn$_invoke$arity$1(G__35986) : load_worksheets.call(null,G__35986));
} else {
return alert(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))].join(''));
}
})], null));
});
/**
 * Execute ParQuery to delete worksheet
 */
features.app.worksheets.frontend.view.delete_worksheet_query = (function features$app$worksheets$frontend$view$delete_worksheet_query(worksheet_id,workspace_id,load_worksheets){
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-worksheets","delete","workspace-worksheets/delete",1369450597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("worksheet","id","worksheet/id",1734545734),worksheet_id], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("workspace-worksheets","delete","workspace-worksheets/delete",1369450597).cljs$core$IFn$_invoke$arity$1(response)))){
return (load_worksheets.cljs$core$IFn$_invoke$arity$0 ? load_worksheets.cljs$core$IFn$_invoke$arity$0() : load_worksheets.call(null));
} else {
return alert("Error deleting worksheet");
}
})], null));
});
/**
 * Validate worksheet serial number
 */
features.app.worksheets.frontend.view.validate_serial_number = (function features$app$worksheets$frontend$view$validate_serial_number(serial_number){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(serial_number))).length) < (2));
});
/**
 * Validate work description
 */
features.app.worksheets.frontend.view.validate_work_description = (function features$app$worksheets$frontend$view$validate_work_description(work_description){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(work_description))).length) < (5));
});
/**
 * Validates worksheet data and returns map of field errors
 */
features.app.worksheets.frontend.view.validate_worksheet = (function features$app$worksheets$frontend$view$validate_worksheet(worksheet){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var serial_number = new cljs.core.Keyword("worksheet","serial-number","worksheet/serial-number",-1791849356).cljs$core$IFn$_invoke$arity$1(worksheet);
var work_description = new cljs.core.Keyword("worksheet","work-description","worksheet/work-description",-1977458257).cljs$core$IFn$_invoke$arity$1(worksheet);
var work_type = new cljs.core.Keyword("worksheet","work-type","worksheet/work-type",-125111308).cljs$core$IFn$_invoke$arity$1(worksheet);
var service_type = new cljs.core.Keyword("worksheet","service-type","worksheet/service-type",1790337972).cljs$core$IFn$_invoke$arity$1(worksheet);
var status = new cljs.core.Keyword("worksheet","status","worksheet/status",-980424991).cljs$core$IFn$_invoke$arity$1(worksheet);
var G__35987 = errors;
var G__35987__$1 = ((features.app.worksheets.frontend.view.validate_work_description(work_description))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35987,new cljs.core.Keyword("worksheet","work-description","worksheet/work-description",-1977458257),"Work description is required (min 5 characters)"):G__35987);
var G__35987__$2 = ((cljs.core.empty_QMARK_(work_type))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35987__$1,new cljs.core.Keyword("worksheet","work-type","worksheet/work-type",-125111308),"Work type is required"):G__35987__$1);
var G__35987__$3 = ((cljs.core.empty_QMARK_(service_type))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35987__$2,new cljs.core.Keyword("worksheet","service-type","worksheet/service-type",1790337972),"Service type is required"):G__35987__$2);
var G__35987__$4 = ((cljs.core.empty_QMARK_(status))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35987__$3,new cljs.core.Keyword("worksheet","status","worksheet/status",-980424991),"Status is required"):G__35987__$3);
if(cljs.core.empty_QMARK_(new cljs.core.Keyword("worksheet","address-id","worksheet/address-id",1959286906).cljs$core$IFn$_invoke$arity$1(worksheet))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35987__$4,new cljs.core.Keyword("worksheet","address-id","worksheet/address-id",1959286906),"Address is required");
} else {
return G__35987__$4;
}
});
/**
 * Calculate work duration in hours from arrival and departure times
 */
features.app.worksheets.frontend.view.calculate_work_duration = (function features$app$worksheets$frontend$view$calculate_work_duration(arrival_time,departure_time){
if(cljs.core.truth_((function (){var and__5023__auto__ = arrival_time;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = departure_time;
if(cljs.core.truth_(and__5023__auto____$1)){
return (((!(cljs.core.empty_QMARK_(arrival_time)))) && ((!(cljs.core.empty_QMARK_(departure_time)))));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
try{var arrival = (new Date(arrival_time));
var departure = (new Date(departure_time));
if((departure.getTime() > arrival.getTime())){
var diff_ms = (departure.getTime() - arrival.getTime());
var diff_hours = (((diff_ms / (1000)) / (60)) / (60));
return Math.ceil(diff_hours);
} else {
return null;
}
}catch (e35988){if((e35988 instanceof Error)){
var e = e35988;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error calculating duration:",e], 0));

return null;
} else {
throw e35988;

}
}} else {
return null;
}
});
features.app.worksheets.frontend.view.field_label = (function features$app$worksheets$frontend$view$field_label(label,field_key,has_error_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.025em",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#374151")], null)], null),label,(cljs.core.truth_((function (){var fexpr__36002 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("worksheet","status","worksheet/status",-980424991),null,new cljs.core.Keyword("worksheet","work-description","worksheet/work-description",-1977458257),null,new cljs.core.Keyword("worksheet","service-type","worksheet/service-type",1790337972),null,new cljs.core.Keyword("worksheet","work-type","worksheet/work-type",-125111308),null], null), null);
return (fexpr__36002.cljs$core$IFn$_invoke$arity$1 ? fexpr__36002.cljs$core$IFn$_invoke$arity$1(field_key) : fexpr__36002.call(null,field_key));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef4444",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null),"*"], null):null)], null);
});
/**
 * Convert ISO datetime string to datetime-local format (YYYY-MM-DDTHH:mm)
 */
features.app.worksheets.frontend.view.format_datetime_for_input = (function features$app$worksheets$frontend$view$format_datetime_for_input(iso_datetime){
if(cljs.core.truth_((function (){var and__5023__auto__ = iso_datetime;
if(cljs.core.truth_(and__5023__auto__)){
return (!(cljs.core.empty_QMARK_(iso_datetime)));
} else {
return and__5023__auto__;
}
})())){
try{var date = (new Date(iso_datetime));
var year = date.getFullYear();
var month = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1((date.getMonth() + (1))).padStart((2),"0"));
var day = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getDate()).padStart((2),"0"));
var hours = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getHours()).padStart((2),"0"));
var minutes = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getMinutes()).padStart((2),"0"));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",month,"-",day,"T",hours,":",minutes].join('');
}catch (e36016){if((e36016 instanceof Error)){
var e = e36016;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error formatting datetime:",e], 0));

return "";
} else {
throw e36016;

}
}} else {
return null;
}
});
/**
 * Base properties for input fields
 */
features.app.worksheets.frontend.view.input_base_props = (function features$app$worksheets$frontend$view$input_base_props(field_key,has_error_QMARK_,attrs){
var is_time_field_QMARK_ = (function (){var fexpr__36044 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("worksheet","arrival-time","worksheet/arrival-time",35764672),null,new cljs.core.Keyword("worksheet","departure-time","worksheet/departure-time",398170674),null], null), null);
return (fexpr__36044.cljs$core$IFn$_invoke$arity$1 ? fexpr__36044.cljs$core$IFn$_invoke$arity$1(field_key) : fexpr__36044.call(null,field_key));
})();
var form_data_sub = cljs.core.deref((function (){var G__36045 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36045) : zero.frontend.re_frame.subscribe.call(null,G__36045));
})());
var form_data = (function (){var or__5025__auto__ = form_data_sub;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var field_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(form_data,field_key,"");
var display_value = (cljs.core.truth_((function (){var and__5023__auto__ = is_time_field_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attrs),"datetime-local");
} else {
return and__5023__auto__;
}
})())?features.app.worksheets.frontend.view.format_datetime_for_input(field_value):cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_value));
if((form_data_sub == null)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING: form-data subscription returned nil for field:",field_key], 0));
} else {
}

var base_change_handler = (function (e){
var value = e.target.value;
var G__36049_36717 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","update-modal-form-field","worksheets/update-modal-form-field",-1340480069),field_key,value], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36049_36717) : zero.frontend.re_frame.dispatch.call(null,G__36049_36717));

if(cljs.core.truth_(is_time_field_QMARK_)){
var updated_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_data,field_key,value);
var arrival = new cljs.core.Keyword("worksheet","arrival-time","worksheet/arrival-time",35764672).cljs$core$IFn$_invoke$arity$1(updated_data);
var departure = new cljs.core.Keyword("worksheet","departure-time","worksheet/departure-time",398170674).cljs$core$IFn$_invoke$arity$1(updated_data);
var calculated_duration = features.app.worksheets.frontend.view.calculate_work_duration(arrival,departure);
if(cljs.core.truth_(calculated_duration)){
var G__36053 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","update-modal-form-field","worksheets/update-modal-form-field",-1340480069),new cljs.core.Keyword("worksheet","work-duration-hours","worksheet/work-duration-hours",1767415900),calculated_duration], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36053) : zero.frontend.re_frame.dispatch.call(null,G__36053));
} else {
return null;
}
} else {
return null;
}
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),display_value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),base_change_handler,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["1.5",(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 1px 2px 0 rgba(0, 0, 0, 0.05)"),"1rem","border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out","100%",(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs))?"#f9fafb":null),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs))?"not-allowed":null),"0.75rem 1rem","none",(cljs.core.truth_(has_error_QMARK_)?"2px solid #dc3545":"1px solid #d1d5db"),"8px"]),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#3b82f6"),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 0 0 3px rgba(59, 130, 246, 0.1)")], null)], null)], 0))], null);
});
/**
 * Render textarea input
 */
features.app.worksheets.frontend.view.render_textarea = (function features$app$worksheets$frontend$view$render_textarea(field_key,has_error_QMARK_,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.app.worksheets.frontend.view.input_base_props(field_key,has_error_QMARK_,attrs),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"type","type",1174270348))], 0))], null);
});
/**
 * Render text input
 */
features.app.worksheets.frontend.view.render_text_input = (function features$app$worksheets$frontend$view$render_text_input(field_key,has_error_QMARK_,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.app.worksheets.frontend.view.input_base_props(field_key,has_error_QMARK_,attrs),attrs], 0))], null);
});
/**
 * Render select input
 */
features.app.worksheets.frontend.view.render_select = (function features$app$worksheets$frontend$view$render_select(field_key,has_error_QMARK_,attrs,options){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.app.worksheets.frontend.view.input_base_props(field_key,has_error_QMARK_,attrs),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"options","options",99638489))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Select..."], null),(function (){var iter__5503__auto__ = (function features$app$worksheets$frontend$view$render_select_$_iter__36063(s__36064){
return (new cljs.core.LazySeq(null,(function (){
var s__36064__$1 = s__36064;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36064__$1);
if(temp__5823__auto__){
var s__36064__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36064__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__36064__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__36066 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__36065 = (0);
while(true){
if((i__36065 < size__5502__auto__)){
var vec__36069 = cljs.core._nth(c__5501__auto__,i__36065);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36069,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36069,(1),null);
cljs.core.chunk_append(b__36066,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null)));

var G__36718 = (i__36065 + (1));
i__36065 = G__36718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36066),features$app$worksheets$frontend$view$render_select_$_iter__36063(cljs.core.chunk_rest(s__36064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36066),null);
}
} else {
var vec__36073 = cljs.core.first(s__36064__$2);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null)),features$app$worksheets$frontend$view$render_select_$_iter__36063(cljs.core.rest(s__36064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(options);
})()], null);
});
/**
 * Render address dropdown that loads addresses from workspace
 */
features.app.worksheets.frontend.view.render_address_select = (function features$app$worksheets$frontend$view$render_address_select(field_key,has_error_QMARK_,attrs){
var workspace_id = new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435).cljs$core$IFn$_invoke$arity$1(attrs);
var addresses = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(cljs.core.truth_(workspace_id)){
cljs.core.reset_BANG_(loading_QMARK_,true);

parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-addresses","get-all","workspace-addresses/get-all",-391896165),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
cljs.core.reset_BANG_(loading_QMARK_,false);

var addr_list = new cljs.core.Keyword("workspace-addresses","get-all","workspace-addresses/get-all",-391896165).cljs$core$IFn$_invoke$arity$2(response,cljs.core.PersistentVector.EMPTY);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Loaded addresses:",cljs.core.count(addr_list)], 0));

return cljs.core.reset_BANG_(addresses,addr_list);
})], null));
} else {
}

return (function (field_key__$1,has_error_QMARK___$1,attrs__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.app.worksheets.frontend.view.input_base_props(field_key__$1,has_error_QMARK___$1,attrs__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs__$1,new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-value","current-value",2066017989)], 0))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?"Loading addresses...":"Select address...")], null),(function (){var iter__5503__auto__ = (function features$app$worksheets$frontend$view$render_address_select_$_iter__36086(s__36087){
return (new cljs.core.LazySeq(null,(function (){
var s__36087__$1 = s__36087;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36087__$1);
if(temp__5823__auto__){
var s__36087__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36087__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__36087__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__36089 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__36088 = (0);
while(true){
if((i__36088 < size__5502__auto__)){
var address = cljs.core._nth(c__5501__auto__,i__36088);
cljs.core.chunk_append(b__36089,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("address","id","address/id",-555725248).cljs$core$IFn$_invoke$arity$1(address)], null),new cljs.core.Keyword("address","name","address/name",848026653).cljs$core$IFn$_invoke$arity$1(address)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("address","id","address/id",-555725248).cljs$core$IFn$_invoke$arity$1(address)], null)));

var G__36719 = (i__36088 + (1));
i__36088 = G__36719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36089),features$app$worksheets$frontend$view$render_address_select_$_iter__36086(cljs.core.chunk_rest(s__36087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36089),null);
}
} else {
var address = cljs.core.first(s__36087__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("address","id","address/id",-555725248).cljs$core$IFn$_invoke$arity$1(address)], null),new cljs.core.Keyword("address","name","address/name",848026653).cljs$core$IFn$_invoke$arity$1(address)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("address","id","address/id",-555725248).cljs$core$IFn$_invoke$arity$1(address)], null)),features$app$worksheets$frontend$view$render_address_select_$_iter__36086(cljs.core.rest(s__36087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.deref(addresses));
})()], null);
});
});
/**
 * Render appropriate input type
 */
features.app.worksheets.frontend.view.field_input = (function features$app$worksheets$frontend$view$field_input(field_key,has_error_QMARK_,attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attrs),"textarea")){
return features.app.worksheets.frontend.view.render_textarea(field_key,has_error_QMARK_,attrs);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attrs),"select")){
return features.app.worksheets.frontend.view.render_select(field_key,has_error_QMARK_,attrs,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(attrs));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attrs),"address-select")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.render_address_select,field_key,has_error_QMARK_,attrs], null);
} else {
return features.app.worksheets.frontend.view.render_text_input(field_key,has_error_QMARK_,attrs);

}
}
}
});
features.app.worksheets.frontend.view.field_error = (function features$app$worksheets$frontend$view$field_error(error_msg){
if(cljs.core.truth_(error_msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem"], null)], null),error_msg], null);
} else {
return null;
}
});
/**
 * Complete form field with label, input and error
 */
features.app.worksheets.frontend.view.form_field = (function features$app$worksheets$frontend$view$form_field(label,field_key,errors,attrs){
var has_error_QMARK_ = cljs.core.contains_QMARK_(errors,field_key);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.field_label,label,field_key,has_error_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.field_input,field_key,has_error_QMARK_,attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.field_error,cljs.core.get.cljs$core$IFn$_invoke$arity$2(errors,field_key)], null)], null);
});
/**
 * All form input fields
 */
features.app.worksheets.frontend.view.form_fields = (function features$app$worksheets$frontend$view$form_fields(){
var errors_sub = cljs.core.deref((function (){var G__36146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-errors","worksheets/modal-form-errors",765459709)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36146) : zero.frontend.re_frame.subscribe.call(null,G__36146));
})());
var errors = (function (){var or__5025__auto__ = errors_sub;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["form-fields called, errors-sub:",errors_sub,"errors:",errors], 0));

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Serial Number",new cljs.core.Keyword("worksheet","serial-number","worksheet/serial-number",-1791849356),errors,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Auto-generated",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Creation Date",new cljs.core.Keyword("worksheet","creation-date","worksheet/creation-date",429363271),errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"date"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Work Type",new cljs.core.Keyword("worksheet","work-type","worksheet/work-type",-125111308),errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"select",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["repair","Repair"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["maintenance","Maintenance"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["other","Other"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Service Type",new cljs.core.Keyword("worksheet","service-type","worksheet/service-type",1790337972),errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"select",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["normal","Normal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["night","Night"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weekend","Weekend"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["holiday","Holiday"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Work Description",new cljs.core.Keyword("worksheet","work-description","worksheet/work-description",-1977458257),errors,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Describe the work to be performed...",new cljs.core.Keyword(null,"rows","rows",850049680),(4)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Status",new cljs.core.Keyword("worksheet","status","worksheet/status",-980424991),errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"select",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["draft","Draft"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["in_progress","In Progress"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["completed","Completed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cancelled","Cancelled"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Arrival Time",new cljs.core.Keyword("worksheet","arrival-time","worksheet/arrival-time",35764672),errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"datetime-local"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Departure Time",new cljs.core.Keyword("worksheet","departure-time","worksheet/departure-time",398170674),errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"datetime-local"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Work Duration (Hours)",new cljs.core.Keyword("worksheet","work-duration-hours","worksheet/work-duration-hours",1767415900),errors,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"1",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Auto-calculated from arrival/departure",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280"], null)], null),"\uD83D\uDCA1 Work duration is automatically calculated from arrival and departure times (rounded up to nearest full hour)"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Notes",new cljs.core.Keyword("worksheet","notes","worksheet/notes",-2145583865),errors,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Optional notes...",new cljs.core.Keyword(null,"rows","rows",850049680),(3)], null)], null)], null);
});
/**
 * Handle save button click with validation
 */
features.app.worksheets.frontend.view.handle_save_click = (function features$app$worksheets$frontend$view$handle_save_click(on_save){
var form_data = cljs.core.deref((function (){var G__36166 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36166) : zero.frontend.re_frame.subscribe.call(null,G__36166));
})());
var validation_errors = features.app.worksheets.frontend.view.validate_worksheet(form_data);
if(cljs.core.empty_QMARK_(validation_errors)){
var G__36167_36720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-modal-form-loading","worksheets/set-modal-form-loading",-448471711),true], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36167_36720) : zero.frontend.re_frame.dispatch.call(null,G__36167_36720));

var G__36168_36721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-modal-form-errors","worksheets/set-modal-form-errors",2108177486),cljs.core.PersistentArrayMap.EMPTY], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36168_36721) : zero.frontend.re_frame.dispatch.call(null,G__36168_36721));

var G__36170 = form_data;
var G__36171 = (function (){
var G__36172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-modal-form-loading","worksheets/set-modal-form-loading",-448471711),false], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36172) : zero.frontend.re_frame.dispatch.call(null,G__36172));
});
return (on_save.cljs$core$IFn$_invoke$arity$2 ? on_save.cljs$core$IFn$_invoke$arity$2(G__36170,G__36171) : on_save.call(null,G__36170,G__36171));
} else {
var G__36173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-modal-form-errors","worksheets/set-modal-form-errors",2108177486),validation_errors], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36173) : zero.frontend.re_frame.dispatch.call(null,G__36173));
}
});
/**
 * Handle modal close event
 */
features.app.worksheets.frontend.view.modal_close_handler = (function features$app$worksheets$frontend$view$modal_close_handler(on_cancel){
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Modal closing..."], 0));

var G__36177_36722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","clear-modal-form","worksheets/clear-modal-form",-2006886094)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36177_36722) : zero.frontend.re_frame.dispatch.call(null,G__36177_36722));

if(cljs.core.truth_(on_cancel)){
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
} else {
return null;
}
});
});
/**
 * Generate modal header configuration
 */
features.app.worksheets.frontend.view.modal_header_config = (function features$app$worksheets$frontend$view$modal_header_config(is_new_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(is_new_QMARK_)?translations.core.tr(new cljs.core.Keyword("worksheets","modal-add-title","worksheets/modal-add-title",-1673872890)):translations.core.tr(new cljs.core.Keyword("worksheets","modal-edit-title","worksheets/modal-edit-title",1886807403))),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),(cljs.core.truth_(is_new_QMARK_)?translations.core.tr(new cljs.core.Keyword("worksheets","modal-add-subtitle","worksheets/modal-add-subtitle",247616245)):translations.core.tr(new cljs.core.Keyword("worksheets","modal-edit-subtitle","worksheets/modal-edit-subtitle",920851280)))], null);
});
/**
 * Render basic worksheet form fields
 */
features.app.worksheets.frontend.view.basic_form_fields = (function features$app$worksheets$frontend$view$basic_form_fields(errors){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Serial Number",new cljs.core.Keyword("worksheet","serial-number","worksheet/serial-number",-1791849356),errors,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Auto-generated",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Creation Date",new cljs.core.Keyword("worksheet","creation-date","worksheet/creation-date",429363271),errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"date"], null)], null)], null);
});
/**
 * Render address selection field
 */
features.app.worksheets.frontend.view.address_form_field = (function features$app$worksheets$frontend$view$address_form_field(errors){
var form_data = cljs.core.deref((function (){var G__36186 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36186) : zero.frontend.re_frame.subscribe.call(null,G__36186));
})());
var workspace_id = features.app.worksheets.frontend.view.get_workspace_id();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Address",new cljs.core.Keyword("worksheet","address-id","worksheet/address-id",1959286906),errors,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"address-select",new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id,new cljs.core.Keyword(null,"current-value","current-value",2066017989),new cljs.core.Keyword("worksheet","address-id","worksheet/address-id",1959286906).cljs$core$IFn$_invoke$arity$1(form_data)], null)], null);
});
/**
 * Render work information form fields
 */
features.app.worksheets.frontend.view.work_info_form_fields = (function features$app$worksheets$frontend$view$work_info_form_fields(errors){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Work Type",new cljs.core.Keyword("worksheet","work-type","worksheet/work-type",-125111308),errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"select",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["repair","Repair"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["maintenance","Maintenance"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["other","Other"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Service Type",new cljs.core.Keyword("worksheet","service-type","worksheet/service-type",1790337972),errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"select",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["normal","Normal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["night","Night"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weekend","Weekend"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["holiday","Holiday"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Work Description",new cljs.core.Keyword("worksheet","work-description","worksheet/work-description",-1977458257),errors,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Describe the work to be performed...",new cljs.core.Keyword(null,"rows","rows",850049680),(4)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Status",new cljs.core.Keyword("worksheet","status","worksheet/status",-980424991),errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"select",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["draft","Draft"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["in_progress","In Progress"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["completed","Completed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cancelled","Cancelled"], null)], null)], null)], null)], null);
});
/**
 * Render time tracking form fields
 */
features.app.worksheets.frontend.view.time_tracking_form_fields = (function features$app$worksheets$frontend$view$time_tracking_form_fields(errors){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Arrival Time",new cljs.core.Keyword("worksheet","arrival-time","worksheet/arrival-time",35764672),errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"datetime-local"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Departure Time",new cljs.core.Keyword("worksheet","departure-time","worksheet/departure-time",398170674),errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"datetime-local"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Work Duration (Hours)",new cljs.core.Keyword("worksheet","work-duration-hours","worksheet/work-duration-hours",1767415900),errors,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"1",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Auto-calculated from arrival/departure",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280"], null)], null),"\uD83D\uDCA1 Work duration is automatically calculated from arrival and departure times (rounded up to nearest full hour)"], null)], null);
});
/**
 * Render notes form field
 */
features.app.worksheets.frontend.view.notes_form_field = (function features$app$worksheets$frontend$view$notes_form_field(errors){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.form_field,"Notes",new cljs.core.Keyword("worksheet","notes","worksheet/notes",-2145583865),errors,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Optional notes...",new cljs.core.Keyword(null,"rows","rows",850049680),(3)], null)], null);
});
/**
 * Render single material item with remove button
 */
features.app.worksheets.frontend.view.material_item_display = (function features$app$worksheets$frontend$view$material_item_display(idx,material){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #f3f4f6"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(material))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(material))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(material))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36243 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","remove-material","worksheets/remove-material",2021952215),idx], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36243) : zero.frontend.re_frame.dispatch.call(null,G__36243));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#ef4444",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.5rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Remove"], null)], null);
});
/**
 * Render list of existing materials
 */
features.app.worksheets.frontend.view.existing_materials_list = (function features$app$worksheets$frontend$view$existing_materials_list(materials){
if(cljs.core.seq(materials)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),"Added Materials:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"150px",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(features.app.worksheets.frontend.view.material_item_display,materials)], null)], null);
} else {
return null;
}
});
/**
 * Render material template selection form
 */
features.app.worksheets.frontend.view.template_material_selector = (function features$app$worksheets$frontend$view$template_material_selector(material_templates,selected_template_id){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"2fr 1fr auto",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"end"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.25rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),"Select Material"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),selected_template_id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36272_SHARP_){
var G__36280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","select-material-template","worksheets/select-material-template",2018700083),p1__36272_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36280) : zero.frontend.re_frame.dispatch.call(null,G__36280));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Choose material..."], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (template){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("material-template","id","material-template/id",1625256948).cljs$core$IFn$_invoke$arity$1(template),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("material-template","id","material-template/id",1625256948).cljs$core$IFn$_invoke$arity$1(template)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("material-template","name","material-template/name",-1467705719).cljs$core$IFn$_invoke$arity$1(template))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647).cljs$core$IFn$_invoke$arity$1(template)),")"].join('')], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("material-template","name","material-template/name",-1467705719),material_templates))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.25rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),"Quantity"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36283) : zero.frontend.re_frame.subscribe.call(null,G__36283));
})()),new cljs.core.Keyword("worksheet","new-material-quantity","worksheet/new-material-quantity",543620952),""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36274_SHARP_){
var G__36284 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","update-form-field","worksheets/update-form-field",1488130231),new cljs.core.Keyword("worksheet","new-material-quantity","worksheet/new-material-quantity",543620952),p1__36274_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36284) : zero.frontend.re_frame.dispatch.call(null,G__36284));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"5",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(selected_template_id),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"opacity","opacity",397153780),((cljs.core.empty_QMARK_(selected_template_id))?0.5:(1))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","add-selected-material","worksheets/add-selected-material",-1720139211)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36285) : zero.frontend.re_frame.dispatch.call(null,G__36285));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core.empty_QMARK_(selected_template_id)) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36288) : zero.frontend.re_frame.subscribe.call(null,G__36288));
})()),new cljs.core.Keyword("worksheet","new-material-quantity","worksheet/new-material-quantity",543620952),""))))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),((((cljs.core.empty_QMARK_(selected_template_id)) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36293) : zero.frontend.re_frame.subscribe.call(null,G__36293));
})()),new cljs.core.Keyword("worksheet","new-material-quantity","worksheet/new-material-quantity",543620952),""))))))?"#9ca3af":"#10b981"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((((cljs.core.empty_QMARK_(selected_template_id)) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36303) : zero.frontend.re_frame.subscribe.call(null,G__36303));
})()),new cljs.core.Keyword("worksheet","new-material-quantity","worksheet/new-material-quantity",543620952),""))))))?"not-allowed":"pointer"),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Add"], null)], null);
});
/**
 * Render custom material input form
 */
features.app.worksheets.frontend.view.custom_material_inputs = (function features$app$worksheets$frontend$view$custom_material_inputs(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1rem",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1rem",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),"Add Custom Material:"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"2fr 1fr 1fr auto",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"end"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.25rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),"Custom Material Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36348 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36348) : zero.frontend.re_frame.subscribe.call(null,G__36348));
})()),new cljs.core.Keyword("worksheet","custom-material-name","worksheet/custom-material-name",259440271),""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36330_SHARP_){
var G__36351 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","update-form-field","worksheets/update-form-field",1488130231),new cljs.core.Keyword("worksheet","custom-material-name","worksheet/custom-material-name",259440271),p1__36330_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36351) : zero.frontend.re_frame.dispatch.call(null,G__36351));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter material name...",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.25rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),"Unit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36357 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36357) : zero.frontend.re_frame.subscribe.call(null,G__36357));
})()),new cljs.core.Keyword("worksheet","custom-material-unit","worksheet/custom-material-unit",1622455402),""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36334_SHARP_){
var G__36358 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","update-form-field","worksheets/update-form-field",1488130231),new cljs.core.Keyword("worksheet","custom-material-unit","worksheet/custom-material-unit",1622455402),p1__36334_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36358) : zero.frontend.re_frame.dispatch.call(null,G__36358));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"pcs, kg, m...",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.25rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),"Quantity"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36362 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36362) : zero.frontend.re_frame.subscribe.call(null,G__36362));
})()),new cljs.core.Keyword("worksheet","custom-material-quantity","worksheet/custom-material-quantity",892931214),""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36335_SHARP_){
var G__36363 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","update-form-field","worksheets/update-form-field",1488130231),new cljs.core.Keyword("worksheet","custom-material-quantity","worksheet/custom-material-quantity",892931214),p1__36335_SHARP_.target.value], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36363) : zero.frontend.re_frame.dispatch.call(null,G__36363));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"5",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","add-custom-material","worksheets/add-custom-material",43114298)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36364) : zero.frontend.re_frame.dispatch.call(null,G__36364));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36366 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36366) : zero.frontend.re_frame.subscribe.call(null,G__36366));
})()),new cljs.core.Keyword("worksheet","custom-material-name","worksheet/custom-material-name",259440271),"")))) || (((cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36370) : zero.frontend.re_frame.subscribe.call(null,G__36370));
})()),new cljs.core.Keyword("worksheet","custom-material-unit","worksheet/custom-material-unit",1622455402),"")))) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36380) : zero.frontend.re_frame.subscribe.call(null,G__36380));
})()),new cljs.core.Keyword("worksheet","custom-material-quantity","worksheet/custom-material-quantity",892931214),""))))))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),((((cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36386) : zero.frontend.re_frame.subscribe.call(null,G__36386));
})()),new cljs.core.Keyword("worksheet","custom-material-name","worksheet/custom-material-name",259440271),"")))) || (((cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36393) : zero.frontend.re_frame.subscribe.call(null,G__36393));
})()),new cljs.core.Keyword("worksheet","custom-material-unit","worksheet/custom-material-unit",1622455402),"")))) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36395) : zero.frontend.re_frame.subscribe.call(null,G__36395));
})()),new cljs.core.Keyword("worksheet","custom-material-quantity","worksheet/custom-material-quantity",892931214),""))))))))?"#9ca3af":"#2563eb"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((((cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36399) : zero.frontend.re_frame.subscribe.call(null,G__36399));
})()),new cljs.core.Keyword("worksheet","custom-material-name","worksheet/custom-material-name",259440271),"")))) || (((cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36403) : zero.frontend.re_frame.subscribe.call(null,G__36403));
})()),new cljs.core.Keyword("worksheet","custom-material-unit","worksheet/custom-material-unit",1622455402),"")))) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36405 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36405) : zero.frontend.re_frame.subscribe.call(null,G__36405));
})()),new cljs.core.Keyword("worksheet","custom-material-quantity","worksheet/custom-material-quantity",892931214),""))))))))?"not-allowed":"pointer"),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Add"], null)], null)], null);
});
/**
 * Render complete materials section
 */
features.app.worksheets.frontend.view.materials_section = (function features$app$worksheets$frontend$view$materials_section(){
var materials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36409) : zero.frontend.re_frame.subscribe.call(null,G__36409));
})()),new cljs.core.Keyword("worksheet","material-usage","worksheet/material-usage",-250420820),cljs.core.PersistentVector.EMPTY);
var material_templates = cljs.core.deref((function (){var G__36410 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("material-templates","all","material-templates/all",-1081828415)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36410) : zero.frontend.re_frame.subscribe.call(null,G__36410));
})());
var selected_template_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref((function (){var G__36412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36412) : zero.frontend.re_frame.subscribe.call(null,G__36412));
})()),new cljs.core.Keyword("worksheet","selected-material-template","worksheet/selected-material-template",-1913890066),"");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),"Materials Used"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.existing_materials_list,materials], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.template_material_selector,material_templates,selected_template_id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.custom_material_inputs], null)], null)], null);
});
/**
 * Render signature as clickable display (non-active)
 */
features.app.worksheets.frontend.view.signature_display = (function features$app$worksheets$frontend$view$signature_display(ref_dispatch_key,label){
var form_data = cljs.core.deref((function (){var G__36418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36418) : zero.frontend.re_frame.subscribe.call(null,G__36418));
})());
var signature_data = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref_dispatch_key,new cljs.core.Keyword("worksheets","set-maintainer-signature-ref","worksheets/set-maintainer-signature-ref",-10495886)))?new cljs.core.Keyword("worksheet","maintainer-signature","worksheet/maintainer-signature",-1178730749).cljs$core$IFn$_invoke$arity$1(form_data):new cljs.core.Keyword("worksheet","customer-signature","worksheet/customer-signature",748703556).cljs$core$IFn$_invoke$arity$1(form_data));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG signature-display:",label,"has signature data:",cljs.core.boolean$(signature_data)], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),label], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center","100%","#ffffff","pointer","300px","center","flex","relative","1px solid #d1d5db","8px","150px"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","open-signature-zoom","worksheets/open-signature-zoom",430472591),label], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36419) : zero.frontend.re_frame.dispatch.call(null,G__36419));
})], null),(cljs.core.truth_(signature_data)?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG signature-display: showing signature for",label], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),signature_data,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100%",new cljs.core.Keyword(null,"object-fit","object-fit",-429593694),"contain"], null)], null)], null);
})()
:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),"Click to sign"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"5px",new cljs.core.Keyword(null,"right","right",-452581833),"5px",new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0,0,0,0.5)",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 6px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null)], null),"\uD83D\uDD0D"], null)], null)], null);
});
/**
 * Render signature canvas for editing (used in overlay)
 */
features.app.worksheets.frontend.view.signature_canvas = (function features$app$worksheets$frontend$view$signature_canvas(ref_dispatch_key,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_signature_canvas.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"penColor","penColor",2068895082),"black",new cljs.core.Keyword(null,"canvasProps","canvasProps",702379401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(150),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"300px"], null)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (ref){
var G__36427 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref_dispatch_key,ref], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36427) : zero.frontend.re_frame.dispatch.call(null,G__36427));
})], null)], null)], null);
});
/**
 * Render signature clear buttons
 */
features.app.worksheets.frontend.view.signature_clear_buttons = (function features$app$worksheets$frontend$view$signature_clear_buttons(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5823__auto__ = cljs.core.deref((function (){var G__36428 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","maintainer-signature-ref","worksheets/maintainer-signature-ref",1830931845)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36428) : zero.frontend.re_frame.subscribe.call(null,G__36428));
})());
if(cljs.core.truth_(temp__5823__auto__)){
var ref = temp__5823__auto__;
return ref.clear();
} else {
return null;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"background","background",-863952629),"transparent",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Clear Maintainer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5823__auto__ = cljs.core.deref((function (){var G__36429 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","customer-signature-ref","worksheets/customer-signature-ref",-405126404)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36429) : zero.frontend.re_frame.subscribe.call(null,G__36429));
})());
if(cljs.core.truth_(temp__5823__auto__)){
var ref = temp__5823__auto__;
return ref.clear();
} else {
return null;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"background","background",-863952629),"transparent",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Clear Customer"], null)], null);
});
/**
 * Full-screen overlay for signature editing
 */
features.app.worksheets.frontend.view.signature_zoom_overlay = (function features$app$worksheets$frontend$view$signature_zoom_overlay(){
var zoom_data = cljs.core.deref((function (){var G__36431 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","signature-zoom-data","worksheets/signature-zoom-data",-1646668829)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36431) : zero.frontend.re_frame.subscribe.call(null,G__36431));
})());
if(cljs.core.truth_(zoom_data)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center",(0),"100vw","rgba(0, 0, 0, 0.8)",(9999),"center","flex","fixed","100vh",(0)]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36432 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","close-signature-zoom","worksheets/close-signature-zoom",-92779406)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36432) : zero.frontend.re_frame.dispatch.call(null,G__36432));
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["80vh","auto","90vw","white","600px","2rem","relative","12px","auto"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622)],["center","#6b7280","1.5rem","10px","30px","transparent","pointer","center","10px","flex","absolute","none","30px"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36447 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","close-signature-zoom","worksheets/close-signature-zoom",-92779406)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36447) : zero.frontend.re_frame.dispatch.call(null,G__36447));
})], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 1.5rem 0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(zoom_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_signature_canvas.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"penColor","penColor",2068895082),"black",new cljs.core.Keyword(null,"canvasProps","canvasProps",702379401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(((window.innerWidth < (768)))?(window.innerWidth - (80)):(500)),new cljs.core.Keyword(null,"height","height",1025178622),(((window.innerWidth < (768)))?(250):(300)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (ref){
var G__36452_36723 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-zoom-signature-ref","worksheets/set-zoom-signature-ref",250835679),ref], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36452_36723) : zero.frontend.re_frame.dispatch.call(null,G__36452_36723));

if(cljs.core.truth_(ref)){
var form_data = cljs.core.deref((function (){var G__36454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36454) : zero.frontend.re_frame.subscribe.call(null,G__36454));
})());
var signature_data = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref-dispatch-key","ref-dispatch-key",-1958373712).cljs$core$IFn$_invoke$arity$1(zoom_data),new cljs.core.Keyword("worksheets","set-maintainer-signature-ref","worksheets/set-maintainer-signature-ref",-10495886)))?new cljs.core.Keyword("worksheet","maintainer-signature","worksheet/maintainer-signature",-1178730749).cljs$core$IFn$_invoke$arity$1(form_data):new cljs.core.Keyword("worksheet","customer-signature","worksheet/customer-signature",748703556).cljs$core$IFn$_invoke$arity$1(form_data));
if(cljs.core.truth_(signature_data)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG zoom canvas: loading existing signature data"], 0));

return ref.fromDataURL(signature_data);
} else {
return null;
}
} else {
return null;
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5823__auto__ = cljs.core.deref((function (){var G__36455 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","zoom-signature-ref","worksheets/zoom-signature-ref",2027608775)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36455) : zero.frontend.re_frame.subscribe.call(null,G__36455));
})());
if(cljs.core.truth_(temp__5823__auto__)){
var ref = temp__5823__auto__;
return ref.clear();
} else {
return null;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem 1.5rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"background","background",-863952629),"transparent",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Clear"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36456 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","close-signature-zoom","worksheets/close-signature-zoom",-92779406)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36456) : zero.frontend.re_frame.dispatch.call(null,G__36456));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem 1.5rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background","background",-863952629),"#3b82f6",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Done"], null)], null)], null)], null);
} else {
return null;
}
});
/**
 * Render complete signatures section
 */
features.app.worksheets.frontend.view.signatures_section = (function features$app$worksheets$frontend$view$signatures_section(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),"Signatures"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1fr 1fr",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.signature_display,new cljs.core.Keyword("worksheets","set-maintainer-signature-ref","worksheets/set-maintainer-signature-ref",-10495886),"Maintainer Signature"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.signature_display,new cljs.core.Keyword("worksheets","set-customer-signature-ref","worksheets/set-customer-signature-ref",-2045175946),"Customer Signature"], null)], null)], null);
});
/**
 * Handle save button click with validation and signature capture
 */
features.app.worksheets.frontend.view.save_button_click_handler = (function features$app$worksheets$frontend$view$save_button_click_handler(on_save){
return (function (){
var form_data = cljs.core.deref((function (){var G__36473 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36473) : zero.frontend.re_frame.subscribe.call(null,G__36473));
})());
var maintainer_signature = new cljs.core.Keyword("worksheet","maintainer-signature","worksheet/maintainer-signature",-1178730749).cljs$core$IFn$_invoke$arity$1(form_data);
var customer_signature = new cljs.core.Keyword("worksheet","customer-signature","worksheet/customer-signature",748703556).cljs$core$IFn$_invoke$arity$1(form_data);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG save-button: maintainer signature length:",(cljs.core.truth_(maintainer_signature)?cljs.core.count(maintainer_signature):null)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG save-button: customer signature length:",(cljs.core.truth_(customer_signature)?cljs.core.count(customer_signature):null)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG save-button: form-data keys:",cljs.core.keys(form_data)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG save-button: has maintainer signature?",cljs.core.boolean$(maintainer_signature)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG save-button: has customer signature?",cljs.core.boolean$(customer_signature)], 0));

var validation_errors = features.app.worksheets.frontend.view.validate_worksheet(form_data);
if(cljs.core.empty_QMARK_(validation_errors)){
var G__36480_36724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-modal-form-loading","worksheets/set-modal-form-loading",-448471711),true], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36480_36724) : zero.frontend.re_frame.dispatch.call(null,G__36480_36724));

var G__36483_36725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-modal-form-errors","worksheets/set-modal-form-errors",2108177486),cljs.core.PersistentArrayMap.EMPTY], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36483_36725) : zero.frontend.re_frame.dispatch.call(null,G__36483_36725));

var G__36484 = form_data;
var G__36485 = (function (){
var G__36486 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-modal-form-loading","worksheets/set-modal-form-loading",-448471711),false], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36486) : zero.frontend.re_frame.dispatch.call(null,G__36486));
});
return (on_save.cljs$core$IFn$_invoke$arity$2 ? on_save.cljs$core$IFn$_invoke$arity$2(G__36484,G__36485) : on_save.call(null,G__36484,G__36485));
} else {
var G__36489 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-modal-form-errors","worksheets/set-modal-form-errors",2108177486),validation_errors], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36489) : zero.frontend.re_frame.dispatch.call(null,G__36489));
}
});
});
/**
 * Render modal footer buttons
 */
features.app.worksheets.frontend.view.modal_footer_buttons = (function features$app$worksheets$frontend$view$modal_footer_buttons(on_cancel,on_save){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal_footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Cancel button clicked"], 0));

var G__36490_36726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","clear-modal-form","worksheets/clear-modal-form",-2006886094)], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36490_36726) : zero.frontend.re_frame.dispatch.call(null,G__36490_36726));

if(cljs.core.truth_(on_cancel)){
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"text","text",-1790561697),translations.core.tr(new cljs.core.Keyword("worksheets","cancel","worksheets/cancel",-1971902189))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core.deref((function (){var G__36495 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-loading?","worksheets/modal-form-loading?",-1730442802)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36495) : zero.frontend.re_frame.subscribe.call(null,G__36495));
})()),new cljs.core.Keyword(null,"on-click","on-click",1632826543),features.app.worksheets.frontend.view.save_button_click_handler(on_save),new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(cljs.core.deref((function (){var G__36498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-loading?","worksheets/modal-form-loading?",-1730442802)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36498) : zero.frontend.re_frame.subscribe.call(null,G__36498));
})()))?translations.core.tr(new cljs.core.Keyword("worksheets","saving","worksheets/saving",-627393474)):translations.core.tr(new cljs.core.Keyword("worksheets","save-worksheet","worksheets/save-worksheet",892576644)))], null)], null)], null);
});
/**
 * Modal for creating/editing worksheets using re-frame
 */
features.app.worksheets.frontend.view.worksheet_modal = (function features$app$worksheets$frontend$view$worksheet_modal(worksheet_data,is_new_QMARK_,on_save,on_cancel){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["worksheet-modal called with is-new?:",is_new_QMARK_,"type:",cljs.core.type(is_new_QMARK_)], 0));

var G__36513_36727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-modal-form-data","worksheets/set-modal-form-data",1545216742),worksheet_data], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36513_36727) : zero.frontend.re_frame.dispatch.call(null,G__36513_36727));

var G__36518_36728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-modal-form-errors","worksheets/set-modal-form-errors",2108177486),cljs.core.PersistentArrayMap.EMPTY], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36518_36728) : zero.frontend.re_frame.dispatch.call(null,G__36518_36728));

var G__36519_36729 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-modal-form-loading","worksheets/set-modal-form-loading",-448471711),false], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36519_36729) : zero.frontend.re_frame.dispatch.call(null,G__36519_36729));

var G__36522_36730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("material-templates","load","material-templates/load",114241513),features.app.worksheets.frontend.view.get_workspace_id()], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36522_36730) : zero.frontend.re_frame.dispatch.call(null,G__36522_36730));

return (function (worksheet_data__$1,is_new_QMARK___$1,on_save__$1,on_cancel__$1){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["worksheet-modal render function called"], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),features.app.worksheets.frontend.view.modal_close_handler(on_cancel__$1),new cljs.core.Keyword(null,"close-on-backdrop?","close-on-backdrop?",313135575),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal_header,features.app.worksheets.frontend.view.modal_header_config(is_new_QMARK___$1)], null),(function (){var errors = cljs.core.deref((function (){var G__36530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","modal-form-errors","worksheets/modal-form-errors",765459709)], null);
return (zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.subscribe.cljs$core$IFn$_invoke$arity$1(G__36530) : zero.frontend.re_frame.subscribe.call(null,G__36530));
})());
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.basic_form_fields,errors], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.address_form_field,errors], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.work_info_form_fields,errors], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.time_tracking_form_fields,errors], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.notes_form_field,errors], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.materials_section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.signatures_section], null)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.modal_footer_buttons,on_cancel__$1,on_save__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.signature_zoom_overlay], null)], null);
});
});
/**
 * Custom render function for worksheet serial number column
 */
features.app.worksheets.frontend.view.worksheet_serial_render = (function features$app$worksheets$frontend$view$worksheet_serial_render(serial_number,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),serial_number], null);
});
/**
 * Custom render function for work type column with service type
 */
features.app.worksheets.frontend.view.work_type_render = (function features$app$worksheets$frontend$view$work_type_render(work_type,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"capitalize"], null)], null),work_type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"capitalize"], null)], null),["Service: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worksheet","service-type","worksheet/service-type",1790337972).cljs$core$IFn$_invoke$arity$1(row))].join('')], null)], null);
});
/**
 * Custom render function for status column with colored badges
 */
features.app.worksheets.frontend.view.status_render = (function features$app$worksheets$frontend$view$status_render(status,row){
var status_colors = new cljs.core.PersistentArrayMap(null, 4, ["draft",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bg","bg",-206688421),"#fef3c7",new cljs.core.Keyword(null,"color","color",1011675173),"#92400e"], null),"in_progress",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bg","bg",-206688421),"#dbeafe",new cljs.core.Keyword(null,"color","color",1011675173),"#1e40af"], null),"completed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bg","bg",-206688421),"#d1fae5",new cljs.core.Keyword(null,"color","color",1011675173),"#065f46"], null),"cancelled",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bg","bg",-206688421),"#fee2e2",new cljs.core.Keyword(null,"color","color",1011675173),"#991b1b"], null)], null);
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$3(status_colors,status,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bg","bg",-206688421),"#f3f4f6",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(colors),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(colors),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"capitalize"], null)], null),clojure.string.replace(status,"_"," ")], null);
});
/**
 * Custom render function for address column
 */
features.app.worksheets.frontend.view.address_render = (function features$app$worksheets$frontend$view$address_render(address_name,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),address_name], null),(cljs.core.truth_(new cljs.core.Keyword("worksheet","address-city","worksheet/address-city",1474773955).cljs$core$IFn$_invoke$arity$1(row))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem"], null)], null),new cljs.core.Keyword("worksheet","address-city","worksheet/address-city",1474773955).cljs$core$IFn$_invoke$arity$1(row)], null):null)], null);
});
/**
 * Custom render function for assigned to column
 */
features.app.worksheets.frontend.view.assigned_to_render = (function features$app$worksheets$frontend$view$assigned_to_render(assigned_to_name,row){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(assigned_to_name)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),assigned_to_name], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null)], null),"Unassigned"], null))], null);
});
var G__36545_36731 = new cljs.core.Keyword("worksheets","data","worksheets/data",-258276356);
var G__36546_36732 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),cljs.core.PersistentArrayMap.EMPTY], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36545_36731,G__36546_36732) : zero.frontend.re_frame.reg_sub.call(null,G__36545_36731,G__36546_36732));
var G__36547_36733 = new cljs.core.Keyword("worksheets","loading?","worksheets/loading?",1912145270);
var G__36548_36734 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36547_36733,G__36548_36734) : zero.frontend.re_frame.reg_sub.call(null,G__36547_36733,G__36548_36734));
var G__36552_36735 = new cljs.core.Keyword("worksheets","modal-worksheet","worksheets/modal-worksheet",1961368085);
var G__36553_36736 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-worksheet","modal-worksheet",1936942804)], null),null);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36552_36735,G__36553_36736) : zero.frontend.re_frame.reg_sub.call(null,G__36552_36735,G__36553_36736));
var G__36554_36737 = new cljs.core.Keyword("worksheets","modal-is-new?","worksheets/modal-is-new?",-1501369569);
var G__36555_36738 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-is-new?","modal-is-new?",-1493686812)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36554_36737,G__36555_36738) : zero.frontend.re_frame.reg_sub.call(null,G__36554_36737,G__36555_36738));
var G__36556_36739 = new cljs.core.Keyword("worksheets","authenticated?","worksheets/authenticated?",-1980147982);
var G__36557_36740 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123)], null),null);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36556_36739,G__36557_36740) : zero.frontend.re_frame.reg_sub.call(null,G__36556_36739,G__36557_36740));
var G__36558_36741 = new cljs.core.Keyword("worksheets","set-loading","worksheets/set-loading",840467908);
var G__36559_36742 = (function (db,p__36560){
var vec__36561 = p__36560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36561,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36561,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),loading_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36558_36741,G__36559_36742) : zero.frontend.re_frame.reg_event_db.call(null,G__36558_36741,G__36559_36742));
var G__36564_36743 = new cljs.core.Keyword("worksheets","set-data","worksheets/set-data",-185310645);
var G__36565_36744 = (function (db,p__36566){
var vec__36567 = p__36566;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"data","data",-232669377)], null),data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36564_36743,G__36565_36744) : zero.frontend.re_frame.reg_event_db.call(null,G__36564_36743,G__36565_36744));
var G__36574_36745 = new cljs.core.Keyword("worksheets","set-modal-worksheet","worksheets/set-modal-worksheet",24734804);
var G__36575_36746 = (function (db,p__36576){
var vec__36577 = p__36576;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36577,(0),null);
var worksheet = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36577,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-worksheet","modal-worksheet",1936942804)], null),worksheet);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36574_36745,G__36575_36746) : zero.frontend.re_frame.reg_event_db.call(null,G__36574_36745,G__36575_36746));
var G__36580_36747 = new cljs.core.Keyword("worksheets","set-modal-is-new","worksheets/set-modal-is-new",-268632222);
var G__36581_36748 = (function (db,p__36582){
var vec__36583 = p__36582;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36583,(0),null);
var is_new_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36583,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-is-new?","modal-is-new?",-1493686812)], null),is_new_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36580_36747,G__36581_36748) : zero.frontend.re_frame.reg_event_db.call(null,G__36580_36747,G__36581_36748));
var G__36586_36749 = new cljs.core.Keyword("worksheets","set-authenticated","worksheets/set-authenticated",-878336299);
var G__36587_36750 = (function (db,p__36588){
var vec__36589 = p__36588;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36589,(0),null);
var authenticated_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36589,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123)], null),authenticated_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36586_36749,G__36587_36750) : zero.frontend.re_frame.reg_event_db.call(null,G__36586_36749,G__36587_36750));
var G__36592_36751 = new cljs.core.Keyword("worksheets","close-modal","worksheets/close-modal",-1908880740);
var G__36593_36752 = (function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-worksheet","modal-worksheet",1936942804)], null),null);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36592_36751,G__36593_36752) : zero.frontend.re_frame.reg_event_db.call(null,G__36592_36751,G__36593_36752));
var G__36594_36753 = new cljs.core.Keyword("worksheets","modal-form-data","worksheets/modal-form-data",-1854843626);
var G__36595_36754 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105)], null),cljs.core.PersistentArrayMap.EMPTY);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36594_36753,G__36595_36754) : zero.frontend.re_frame.reg_sub.call(null,G__36594_36753,G__36595_36754));
var G__36596_36755 = new cljs.core.Keyword("worksheets","modal-form-errors","worksheets/modal-form-errors",765459709);
var G__36597_36756 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-errors","modal-form-errors",773406658)], null),cljs.core.PersistentArrayMap.EMPTY);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36596_36755,G__36597_36756) : zero.frontend.re_frame.reg_sub.call(null,G__36596_36755,G__36597_36756));
var G__36598_36757 = new cljs.core.Keyword("worksheets","modal-form-loading?","worksheets/modal-form-loading?",-1730442802);
var G__36599_36758 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-loading?","modal-form-loading?",-1738092783)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36598_36757,G__36599_36758) : zero.frontend.re_frame.reg_sub.call(null,G__36598_36757,G__36599_36758));
var G__36600_36759 = new cljs.core.Keyword("worksheets","set-modal-form-data","worksheets/set-modal-form-data",1545216742);
var G__36601_36760 = (function (db,p__36602){
var vec__36603 = p__36602;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36603,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36603,(1),null);
var enhanced_data = (cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword("worksheet","address-id","worksheet/address-id",1959286906).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword("worksheet","address-name","worksheet/address-name",-320027248).cljs$core$IFn$_invoke$arity$1(data);
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("worksheet","address","worksheet/address",-468394152),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("address","id","address/id",-555725248),new cljs.core.Keyword("worksheet","address-id","worksheet/address-id",1959286906).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("address","name","address/name",848026653),new cljs.core.Keyword("worksheet","address-name","worksheet/address-name",-320027248).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("address","display","address/display",-756696060),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worksheet","address-name","worksheet/address-name",-320027248).cljs$core$IFn$_invoke$arity$1(data))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worksheet","address-city","worksheet/address-city",1474773955).cljs$core$IFn$_invoke$arity$1(data))].join('')], null)):data);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105)], null),enhanced_data);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36600_36759,G__36601_36760) : zero.frontend.re_frame.reg_event_db.call(null,G__36600_36759,G__36601_36760));
var G__36606_36761 = new cljs.core.Keyword("worksheets","update-modal-form-field","worksheets/update-modal-form-field",-1340480069);
var G__36607_36762 = (function (db,p__36608){
var vec__36609 = p__36608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36609,(0),null);
var field_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36609,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36609,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),field_key], null),value);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36606_36761,G__36607_36762) : zero.frontend.re_frame.reg_event_db.call(null,G__36606_36761,G__36607_36762));
var G__36612_36763 = new cljs.core.Keyword("worksheets","set-modal-form-errors","worksheets/set-modal-form-errors",2108177486);
var G__36613_36764 = (function (db,p__36614){
var vec__36615 = p__36614;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36615,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36615,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-errors","modal-form-errors",773406658)], null),errors);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36612_36763,G__36613_36764) : zero.frontend.re_frame.reg_event_db.call(null,G__36612_36763,G__36613_36764));
var G__36618_36765 = new cljs.core.Keyword("worksheets","set-modal-form-loading","worksheets/set-modal-form-loading",-448471711);
var G__36619_36766 = (function (db,p__36620){
var vec__36621 = p__36620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-loading?","modal-form-loading?",-1738092783)], null),loading_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36618_36765,G__36619_36766) : zero.frontend.re_frame.reg_event_db.call(null,G__36618_36765,G__36619_36766));
var G__36624_36767 = new cljs.core.Keyword("worksheets","modal-form-set-field","worksheets/modal-form-set-field",40207790);
var G__36625_36768 = (function (db,p__36626){
var vec__36627 = p__36626;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(0),null);
var field_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),field_key], null),value);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36624_36767,G__36625_36768) : zero.frontend.re_frame.reg_event_db.call(null,G__36624_36767,G__36625_36768));
var G__36630_36769 = new cljs.core.Keyword("worksheets","modal-form-field","worksheets/modal-form-field",880637847);
var G__36631_36770 = (function (db,p__36632){
var vec__36633 = p__36632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36633,(0),null);
var field_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36633,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),field_key], null),null);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36630_36769,G__36631_36770) : zero.frontend.re_frame.reg_sub.call(null,G__36630_36769,G__36631_36770));
var G__36636_36771 = new cljs.core.Keyword("worksheets","clear-modal-form","worksheets/clear-modal-form",-2006886094);
var G__36637_36772 = (function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-errors","modal-form-errors",773406658)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-loading?","modal-form-loading?",-1738092783)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"maintainer-signature-ref","maintainer-signature-ref",1839933392)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"customer-signature-ref","customer-signature-ref",-428835391)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"signature-zoom-data","signature-zoom-data",-1670178934)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"zoom-signature-ref","zoom-signature-ref",2003645442)], null),null);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36636_36771,G__36637_36772) : zero.frontend.re_frame.reg_event_db.call(null,G__36636_36771,G__36637_36772));
var G__36638_36773 = new cljs.core.Keyword("worksheets","set-maintainer-signature-ref","worksheets/set-maintainer-signature-ref",-10495886);
var G__36639_36774 = (function (db,p__36640){
var vec__36641 = p__36640;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36641,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36641,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG set-maintainer-signature-ref:",ref], 0));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"maintainer-signature-ref","maintainer-signature-ref",1839933392)], null),ref);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36638_36773,G__36639_36774) : zero.frontend.re_frame.reg_event_db.call(null,G__36638_36773,G__36639_36774));
var G__36644_36775 = new cljs.core.Keyword("worksheets","set-customer-signature-ref","worksheets/set-customer-signature-ref",-2045175946);
var G__36645_36776 = (function (db,p__36646){
var vec__36647 = p__36646;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36647,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36647,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG set-customer-signature-ref:",ref], 0));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"customer-signature-ref","customer-signature-ref",-428835391)], null),ref);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36644_36775,G__36645_36776) : zero.frontend.re_frame.reg_event_db.call(null,G__36644_36775,G__36645_36776));
var G__36650_36777 = new cljs.core.Keyword("worksheets","maintainer-signature-ref","worksheets/maintainer-signature-ref",1830931845);
var G__36651_36778 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"maintainer-signature-ref","maintainer-signature-ref",1839933392)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36650_36777,G__36651_36778) : zero.frontend.re_frame.reg_sub.call(null,G__36650_36777,G__36651_36778));
var G__36652_36779 = new cljs.core.Keyword("worksheets","customer-signature-ref","worksheets/customer-signature-ref",-405126404);
var G__36653_36780 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"customer-signature-ref","customer-signature-ref",-428835391)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36652_36779,G__36653_36780) : zero.frontend.re_frame.reg_sub.call(null,G__36652_36779,G__36653_36780));
var G__36654_36781 = new cljs.core.Keyword("worksheets","signature-zoom-data","worksheets/signature-zoom-data",-1646668829);
var G__36655_36782 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"signature-zoom-data","signature-zoom-data",-1670178934)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36654_36781,G__36655_36782) : zero.frontend.re_frame.reg_sub.call(null,G__36654_36781,G__36655_36782));
var G__36656_36783 = new cljs.core.Keyword("worksheets","zoom-signature-ref","worksheets/zoom-signature-ref",2027608775);
var G__36657_36784 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"zoom-signature-ref","zoom-signature-ref",2003645442)], null));
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36656_36783,G__36657_36784) : zero.frontend.re_frame.reg_sub.call(null,G__36656_36783,G__36657_36784));
var G__36658_36785 = new cljs.core.Keyword("worksheets","open-signature-zoom","worksheets/open-signature-zoom",430472591);
var G__36659_36786 = (function (db,p__36660){
var vec__36661 = p__36660;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36661,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36661,(1),null);
var ref_dispatch_key = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,"Maintainer Signature"))?new cljs.core.Keyword("worksheets","set-maintainer-signature-ref","worksheets/set-maintainer-signature-ref",-10495886):new cljs.core.Keyword("worksheets","set-customer-signature-ref","worksheets/set-customer-signature-ref",-2045175946));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"signature-zoom-data","signature-zoom-data",-1670178934)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"ref-dispatch-key","ref-dispatch-key",-1958373712),ref_dispatch_key], null));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36658_36785,G__36659_36786) : zero.frontend.re_frame.reg_event_db.call(null,G__36658_36785,G__36659_36786));
var G__36664_36787 = new cljs.core.Keyword("worksheets","close-signature-zoom","worksheets/close-signature-zoom",-92779406);
var G__36665_36788 = (function (p__36666,_){
var map__36667 = p__36666;
var map__36667__$1 = cljs.core.__destructure_map(map__36667);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36667__$1,new cljs.core.Keyword(null,"db","db",993250759));
var zoom_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"signature-zoom-data","signature-zoom-data",-1670178934)], null));
var zoom_ref = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"zoom-signature-ref","zoom-signature-ref",2003645442)], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG close-signature-zoom: zoom-data:",zoom_data], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG close-signature-zoom: zoom-ref:",zoom_ref], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG close-signature-zoom: zoom-ref isEmpty:",(cljs.core.truth_(zoom_ref)?zoom_ref.isEmpty():null)], 0));

var new_db = (cljs.core.truth_((function (){var and__5023__auto__ = zoom_data;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = zoom_ref;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(zoom_ref.isEmpty());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?(function (){var signature_data = zoom_ref.toDataURL();
var signature_key = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref-dispatch-key","ref-dispatch-key",-1958373712).cljs$core$IFn$_invoke$arity$1(zoom_data),new cljs.core.Keyword("worksheets","set-maintainer-signature-ref","worksheets/set-maintainer-signature-ref",-10495886)))?new cljs.core.Keyword("worksheet","maintainer-signature","worksheet/maintainer-signature",-1178730749):new cljs.core.Keyword("worksheet","customer-signature","worksheet/customer-signature",748703556));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG close-signature-zoom: storing signature data, length:",cljs.core.count(signature_data)], 0));

return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),signature_key], null),signature_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"signature-zoom-data","signature-zoom-data",-1670178934)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"zoom-signature-ref","zoom-signature-ref",2003645442)], null),null);
})():cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"signature-zoom-data","signature-zoom-data",-1670178934)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"zoom-signature-ref","zoom-signature-ref",2003645442)], null),null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null);
});
(zero.frontend.re_frame.reg_event_fx.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_fx.cljs$core$IFn$_invoke$arity$2(G__36664_36787,G__36665_36788) : zero.frontend.re_frame.reg_event_fx.call(null,G__36664_36787,G__36665_36788));
var G__36668_36789 = new cljs.core.Keyword("worksheets","set-zoom-signature-ref","worksheets/set-zoom-signature-ref",250835679);
var G__36669_36790 = (function (db,p__36670){
var vec__36671 = p__36670;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36671,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36671,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"zoom-signature-ref","zoom-signature-ref",2003645442)], null),ref);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36668_36789,G__36669_36790) : zero.frontend.re_frame.reg_event_db.call(null,G__36668_36789,G__36669_36790));
var G__36674_36791 = new cljs.core.Keyword("material-templates","all","material-templates/all",-1081828415);
var G__36675_36792 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),new cljs.core.Keyword(null,"all","all",892129742)], null),cljs.core.PersistentVector.EMPTY);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36674_36791,G__36675_36792) : zero.frontend.re_frame.reg_sub.call(null,G__36674_36791,G__36675_36792));
var G__36676_36793 = new cljs.core.Keyword("material-templates","load","material-templates/load",114241513);
var G__36677_36794 = (function (db,p__36678){
var vec__36679 = p__36678;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36679,(0),null);
var workspace_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36679,(1),null);
if(cljs.core.truth_(workspace_id)){
parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-material-templates","get-all","workspace-material-templates/get-all",472341884),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var G__36682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("material-templates","loaded","material-templates/loaded",942418528),new cljs.core.Keyword("workspace-material-templates","get-all","workspace-material-templates/get-all",472341884).cljs$core$IFn$_invoke$arity$1(response)], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36682) : zero.frontend.re_frame.dispatch.call(null,G__36682));
})], null));
} else {
}

return db;
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36676_36793,G__36677_36794) : zero.frontend.re_frame.reg_event_db.call(null,G__36676_36793,G__36677_36794));
var G__36683_36795 = new cljs.core.Keyword("material-templates","loaded","material-templates/loaded",942418528);
var G__36684_36796 = (function (db,p__36685){
var vec__36686 = p__36685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36686,(0),null);
var templates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36686,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),new cljs.core.Keyword(null,"all","all",892129742)], null),(function (){var or__5025__auto__ = templates;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36683_36795,G__36684_36796) : zero.frontend.re_frame.reg_event_db.call(null,G__36683_36795,G__36684_36796));
var G__36689_36797 = new cljs.core.Keyword("worksheets","update-form-field","worksheets/update-form-field",1488130231);
var G__36690_36798 = (function (db,p__36691){
var vec__36692 = p__36691;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36692,(0),null);
var field_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36692,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36692,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),field_key], null),value);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36689_36797,G__36690_36798) : zero.frontend.re_frame.reg_event_db.call(null,G__36689_36797,G__36690_36798));
var G__36695_36799 = new cljs.core.Keyword("worksheets","select-material-template","worksheets/select-material-template",2018700083);
var G__36696_36800 = (function (db,p__36697){
var vec__36698 = p__36697;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36698,(0),null);
var template_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36698,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),new cljs.core.Keyword("worksheet","selected-material-template","worksheet/selected-material-template",-1913890066)], null),template_id);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36695_36799,G__36696_36800) : zero.frontend.re_frame.reg_event_db.call(null,G__36695_36799,G__36696_36800));
var G__36702_36801 = new cljs.core.Keyword("worksheets","add-selected-material","worksheets/add-selected-material",-1720139211);
var G__36703_36802 = (function (db,_){
var form_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105)], null));
var selected_template_id = new cljs.core.Keyword("worksheet","selected-material-template","worksheet/selected-material-template",-1913890066).cljs$core$IFn$_invoke$arity$1(form_data);
var quantity = new cljs.core.Keyword("worksheet","new-material-quantity","worksheet/new-material-quantity",543620952).cljs$core$IFn$_invoke$arity$1(form_data);
var templates = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),new cljs.core.Keyword(null,"all","all",892129742)], null),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_((function (){var and__5023__auto__ = selected_template_id;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = quantity;
if(cljs.core.truth_(and__5023__auto____$1)){
return (!(cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity))));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var selected_template = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36701_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("material-template","id","material-template/id",1625256948).cljs$core$IFn$_invoke$arity$1(p1__36701_SHARP_),selected_template_id);
}),templates));
var new_material = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("material-template","name","material-template/name",-1467705719).cljs$core$IFn$_invoke$arity$1(selected_template),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647).cljs$core$IFn$_invoke$arity$1(selected_template),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity)], null);
var current_materials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(form_data,new cljs.core.Keyword("worksheet","material-usage","worksheet/material-usage",-250420820),cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),new cljs.core.Keyword("worksheet","material-usage","worksheet/material-usage",-250420820)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_materials,new_material)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),new cljs.core.Keyword("worksheet","selected-material-template","worksheet/selected-material-template",-1913890066)], null),""),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),new cljs.core.Keyword("worksheet","new-material-quantity","worksheet/new-material-quantity",543620952)], null),"");
} else {
return db;
}
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36702_36801,G__36703_36802) : zero.frontend.re_frame.reg_event_db.call(null,G__36702_36801,G__36703_36802));
var G__36704_36803 = new cljs.core.Keyword("worksheets","remove-material","worksheets/remove-material",2021952215);
var G__36705_36804 = (function (db,p__36706){
var vec__36707 = p__36706;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36707,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36707,(1),null);
var current_materials = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),new cljs.core.Keyword("worksheet","material-usage","worksheet/material-usage",-250420820)], null),cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),new cljs.core.Keyword("worksheet","material-usage","worksheet/material-usage",-250420820)], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(idx,current_materials),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((idx + (1)),current_materials))));
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36704_36803,G__36705_36804) : zero.frontend.re_frame.reg_event_db.call(null,G__36704_36803,G__36705_36804));
var G__36710_36805 = new cljs.core.Keyword("worksheets","add-custom-material","worksheets/add-custom-material",43114298);
var G__36711_36806 = (function (db,_){
var form_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105)], null));
var custom_name = new cljs.core.Keyword("worksheet","custom-material-name","worksheet/custom-material-name",259440271).cljs$core$IFn$_invoke$arity$1(form_data);
var custom_unit = new cljs.core.Keyword("worksheet","custom-material-unit","worksheet/custom-material-unit",1622455402).cljs$core$IFn$_invoke$arity$1(form_data);
var custom_quantity = new cljs.core.Keyword("worksheet","custom-material-quantity","worksheet/custom-material-quantity",892931214).cljs$core$IFn$_invoke$arity$1(form_data);
if(cljs.core.truth_((function (){var and__5023__auto__ = custom_name;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = custom_unit;
if(cljs.core.truth_(and__5023__auto____$1)){
var and__5023__auto____$2 = custom_quantity;
if(cljs.core.truth_(and__5023__auto____$2)){
return (((!(cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(custom_name))))) && ((((!(cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(custom_unit))))) && ((!(cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(custom_quantity))))))));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var new_material = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(custom_name),new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.str.cljs$core$IFn$_invoke$arity$1(custom_unit),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),cljs.core.str.cljs$core$IFn$_invoke$arity$1(custom_quantity)], null);
var current_materials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(form_data,new cljs.core.Keyword("worksheet","material-usage","worksheet/material-usage",-250420820),cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),new cljs.core.Keyword("worksheet","material-usage","worksheet/material-usage",-250420820)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_materials,new_material)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),new cljs.core.Keyword("worksheet","custom-material-name","worksheet/custom-material-name",259440271)], null),""),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),new cljs.core.Keyword("worksheet","custom-material-unit","worksheet/custom-material-unit",1622455402)], null),""),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"modal-form-data","modal-form-data",-1848107105),new cljs.core.Keyword("worksheet","custom-material-quantity","worksheet/custom-material-quantity",892931214)], null),"");
} else {
return db;
}
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36710_36805,G__36711_36806) : zero.frontend.re_frame.reg_event_db.call(null,G__36710_36805,G__36711_36806));
var G__36712_36807 = new cljs.core.Keyword("worksheets","check-authentication","worksheets/check-authentication",1508714346);
var G__36713_36808 = (function (db,_){
parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","current","user/current",-1089426180),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var user = new cljs.core.Keyword("user","current","user/current",-1089426180).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_((function (){var and__5023__auto__ = user;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user);
} else {
return and__5023__auto__;
}
})())){
var G__36714_36809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-authenticated","worksheets/set-authenticated",-878336299),true], null);
(zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36714_36809) : zero.frontend.re_frame.dispatch.call(null,G__36714_36809));

if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"worksheets","worksheets",892970020).cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worksheets","worksheets",892970020),new cljs.core.Keyword(null,"data","data",-232669377)], null)),cljs.core.PersistentVector.EMPTY))){
var G__36715 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","load-data","worksheets/load-data",-1798600603),cljs.core.PersistentArrayMap.EMPTY], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36715) : zero.frontend.re_frame.dispatch.call(null,G__36715));
} else {
return null;
}
} else {
var G__36716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("worksheets","set-authenticated","worksheets/set-authenticated",-878336299),false], null);
return (zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1 ? zero.frontend.re_frame.dispatch.cljs$core$IFn$_invoke$arity$1(G__36716) : zero.frontend.re_frame.dispatch.call(null,G__36716));
}
})], null));

return db;
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__36712_36807,G__36713_36808) : zero.frontend.re_frame.reg_event_db.call(null,G__36712_36807,G__36713_36808));
features.app.worksheets.frontend.view.view = (function features$app$worksheets$frontend$view$view(){
var workspace_id = features.app.worksheets.frontend.view.get_workspace_id();
var worksheets_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var modal_worksheet = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var modal_is_new_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var load_worksheets = (function (params){
return features.app.worksheets.frontend.view.load_worksheets_query(workspace_id,params,worksheets_data,loading_QMARK_);
});
var save_worksheet = (function (worksheet,callback){
return features.app.worksheets.frontend.view.save_worksheet_query(worksheet,workspace_id,modal_is_new_QMARK_,callback,modal_worksheet,load_worksheets);
});
var delete_worksheet = (function (worksheet_id){
return features.app.worksheets.frontend.view.delete_worksheet_query(worksheet_id,workspace_id,(function (){
return load_worksheets(cljs.core.PersistentArrayMap.EMPTY);
}));
});
return (function (){
if(cljs.core.empty_QMARK_(cljs.core.deref(worksheets_data))){
load_worksheets(cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.page_header.page_header,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),translations.core.tr(new cljs.core.Keyword("worksheets","page-title","worksheets/page-title",-908212914)),new cljs.core.Keyword(null,"description","description",-1428560544),translations.core.tr(new cljs.core.Keyword("worksheets","page-description","worksheets/page-description",-1033510792)),new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(modal_worksheet,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("worksheet","status","worksheet/status",-980424991),"draft",new cljs.core.Keyword("worksheet","work-type","worksheet/work-type",-125111308),"",new cljs.core.Keyword("worksheet","service-type","worksheet/service-type",1790337972),"",new cljs.core.Keyword("worksheet","creation-date","worksheet/creation-date",429363271),(new Date()).toISOString()], null));

return cljs.core.reset_BANG_(modal_is_new_QMARK_,true);
}),new cljs.core.Keyword(null,"text","text",-1790561697),translations.core.tr(new cljs.core.Keyword("worksheets","add-new-worksheet","worksheets/add-new-worksheet",-1226784366))], null)], null)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(worksheets_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.server_side_data_table,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"show-search?","show-search?",684663920),new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515)],[new cljs.core.Keyword("worksheet","id","worksheet/id",1734545734),new cljs.core.Keyword(null,"worksheets-table","worksheets-table",1303955783),load_worksheets,cljs.core.deref(loading_QMARK_),translations.core.tr(new cljs.core.Keyword("worksheets","no-worksheets-found","worksheets/no-worksheets-found",-2064285439)),cljs.core.deref(worksheets_data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("worksheets","action-edit","worksheets/action-edit",-1191642754)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (worksheet){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Edit button clicked for worksheet:",new cljs.core.Keyword("worksheet","id","worksheet/id",1734545734).cljs$core$IFn$_invoke$arity$1(worksheet)], 0));

cljs.core.reset_BANG_(modal_worksheet,worksheet);

cljs.core.reset_BANG_(modal_is_new_QMARK_,false);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Edit button atom reset completed"], 0));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("worksheets","action-pdf","worksheets/action-pdf",729769946)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (worksheet){
var pdf_url = ["/pdf-generator/worksheet/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worksheet","id","worksheet/id",1734545734).cljs$core$IFn$_invoke$arity$1(worksheet))].join('');
return window.open(pdf_url,"_blank");
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("worksheets","action-delete","worksheets/action-delete",1363934124)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (row){
if(cljs.core.truth_(confirm(translations.core.tr(new cljs.core.Keyword("worksheets","confirm-delete","worksheets/confirm-delete",-477430572))))){
return delete_worksheet(new cljs.core.Keyword("worksheet","id","worksheet/id",1734545734).cljs$core$IFn$_invoke$arity$1(row));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("worksheet","serial-number","worksheet/serial-number",-1791849356),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("worksheets","table-header-serial","worksheets/table-header-serial",-163806061)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.worksheets.frontend.view.worksheet_serial_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"200px"], null),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"200px"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("worksheet","work-type","worksheet/work-type",-125111308),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("worksheets","table-header-work-type","worksheets/table-header-work-type",234032679)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.worksheets.frontend.view.work_type_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("worksheet","address-name","worksheet/address-name",-320027248),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("worksheets","table-header-address","worksheets/table-header-address",1309581048)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.worksheets.frontend.view.address_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("worksheet","assigned-to-name","worksheet/assigned-to-name",737561657),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("worksheets","table-header-assigned-to","worksheets/table-header-assigned-to",-1575968056)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.worksheets.frontend.view.assigned_to_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null)], null),true,true])], null),(cljs.core.truth_(cljs.core.deref(modal_worksheet))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.worksheets.frontend.view.worksheet_modal,cljs.core.deref(modal_worksheet),cljs.core.deref(modal_is_new_QMARK_),save_worksheet,(function (){
return cljs.core.reset_BANG_(modal_worksheet,null);
})], null):null)], null)], null);
});
});

//# sourceMappingURL=features.app.worksheets.frontend.view.js.map
