goog.provide('features.app.addresses.frontend.view');
/**
 * Get workspace ID from router parameters
 */
features.app.addresses.frontend.view.get_workspace_id = (function features$app$addresses$frontend$view$get_workspace_id(){
var router_state = cljs.core.deref(router.frontend.zero.state);
var workspace_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(router_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435)], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: get-workspace-id called"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Router state:",router_state], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Extracted workspace-id:",workspace_id], 0));

return workspace_id;
});
/**
 * Execute ParQuery to load addresses with pagination
 */
features.app.addresses.frontend.view.load_addresses_query = (function features$app$addresses$frontend$view$load_addresses_query(workspace_id,loading_QMARK_,addresses,params){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG load-addresses-query called with params:",params], 0));

cljs.core.reset_BANG_(loading_QMARK_,true);

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-addresses","get-paginated","workspace-addresses/get-paginated",-589661228),params], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG load-addresses-query response:",response], 0));

cljs.core.reset_BANG_(loading_QMARK_,false);

var result = new cljs.core.Keyword("workspace-addresses","get-paginated","workspace-addresses/get-paginated",-589661228).cljs$core$IFn$_invoke$arity$1(response);
return cljs.core.reset_BANG_(addresses,result);
})], null));
});
/**
 * Get appropriate query type for save operation
 */
features.app.addresses.frontend.view.get_query_type = (function features$app$addresses$frontend$view$get_query_type(is_new_QMARK_){
if(cljs.core.truth_(cljs.core.deref(is_new_QMARK_))){
return new cljs.core.Keyword("workspace-addresses","create","workspace-addresses/create",514063966);
} else {
return new cljs.core.Keyword("workspace-addresses","update","workspace-addresses/update",-896027534);
}
});
/**
 * Prepare address data for save
 */
features.app.addresses.frontend.view.prepare_address_data = (function features$app$addresses$frontend$view$prepare_address_data(address,is_new_QMARK_){
if(cljs.core.truth_(cljs.core.deref(is_new_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(address,new cljs.core.Keyword("address","id","address/id",-555725248));
} else {
return address;
}
});
/**
 * Handle save response and update UI
 */
features.app.addresses.frontend.view.handle_save_response = (function features$app$addresses$frontend$view$handle_save_response(response,query_type,callback,modal_address,load_addresses){
(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));

if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))){
cljs.core.reset_BANG_(modal_address,null);

return (load_addresses.cljs$core$IFn$_invoke$arity$0 ? load_addresses.cljs$core$IFn$_invoke$arity$0() : load_addresses.call(null));
} else {
return alert(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))].join(''));
}
});
/**
 * Execute ParQuery to save address
 */
features.app.addresses.frontend.view.save_address_query = (function features$app$addresses$frontend$view$save_address_query(address,workspace_id,modal_is_new_QMARK_,callback,modal_address,load_addresses){
var query_type = features.app.addresses.frontend.view.get_query_type(modal_is_new_QMARK_);
var address_data = features.app.addresses.frontend.view.prepare_address_data(address,modal_is_new_QMARK_);
var context = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: save-address-query called"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Workspace ID:",workspace_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Query type:",query_type], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Address data:",address_data], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Context being sent:",context], 0));

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.PersistentArrayMap.createAsIfByAssoc([query_type,address_data]),new cljs.core.Keyword("parquery","context","parquery/context",661391038),context,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: save-address-query response:",response], 0));

return features.app.addresses.frontend.view.handle_save_response(response,query_type,callback,modal_address,load_addresses);
})], null));
});
/**
 * Execute ParQuery to delete address
 */
features.app.addresses.frontend.view.delete_address_query = (function features$app$addresses$frontend$view$delete_address_query(address_id,workspace_id,load_addresses){
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-addresses","delete","workspace-addresses/delete",172652434),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("address","id","address/id",-555725248),address_id], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("workspace-addresses","delete","workspace-addresses/delete",172652434).cljs$core$IFn$_invoke$arity$1(response)))){
return (load_addresses.cljs$core$IFn$_invoke$arity$0 ? load_addresses.cljs$core$IFn$_invoke$arity$0() : load_addresses.call(null));
} else {
return alert("Error deleting address");
}
})], null));
});
/**
 * Validate address name
 */
features.app.addresses.frontend.view.validate_name = (function features$app$addresses$frontend$view$validate_name(name){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))).length) < (2));
});
/**
 * Validate address line 1
 */
features.app.addresses.frontend.view.validate_address_line1 = (function features$app$addresses$frontend$view$validate_address_line1(address_line1){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(address_line1))).length) < (2));
});
/**
 * Validate city
 */
features.app.addresses.frontend.view.validate_city = (function features$app$addresses$frontend$view$validate_city(city){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(city))).length) < (2));
});
/**
 * Validate postal code
 */
features.app.addresses.frontend.view.validate_postal_code = (function features$app$addresses$frontend$view$validate_postal_code(postal_code){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(postal_code))).length) < (2));
});
/**
 * Validates address data and returns map of field errors
 */
features.app.addresses.frontend.view.validate_address = (function features$app$addresses$frontend$view$validate_address(address){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var name = new cljs.core.Keyword("address","name","address/name",848026653).cljs$core$IFn$_invoke$arity$1(address);
var address_line1 = new cljs.core.Keyword("address","address-line1","address/address-line1",-1206418180).cljs$core$IFn$_invoke$arity$1(address);
var city = new cljs.core.Keyword("address","city","address/city",-1506334306).cljs$core$IFn$_invoke$arity$1(address);
var postal_code = new cljs.core.Keyword("address","postal-code","address/postal-code",1502529683).cljs$core$IFn$_invoke$arity$1(address);
var G__28146 = errors;
var G__28146__$1 = ((features.app.addresses.frontend.view.validate_name(name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146,new cljs.core.Keyword("address","name","address/name",848026653),translations.core.tr(new cljs.core.Keyword("addresses","error-name","addresses/error-name",681668271))):G__28146);
var G__28146__$2 = ((features.app.addresses.frontend.view.validate_address_line1(address_line1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146__$1,new cljs.core.Keyword("address","address-line1","address/address-line1",-1206418180),translations.core.tr(new cljs.core.Keyword("addresses","error-address-line1","addresses/error-address-line1",1643445949))):G__28146__$1);
var G__28146__$3 = ((features.app.addresses.frontend.view.validate_city(city))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146__$2,new cljs.core.Keyword("address","city","address/city",-1506334306),translations.core.tr(new cljs.core.Keyword("addresses","error-city","addresses/error-city",-1759323833))):G__28146__$2);
if(features.app.addresses.frontend.view.validate_postal_code(postal_code)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146__$3,new cljs.core.Keyword("address","postal-code","address/postal-code",1502529683),translations.core.tr(new cljs.core.Keyword("addresses","error-postal-code","addresses/error-postal-code",1673209195)));
} else {
return G__28146__$3;
}
});
features.app.addresses.frontend.view.field_label = (function features$app$addresses$frontend$view$field_label(label,field_key,has_error_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.025em",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#374151")], null)], null),label,(cljs.core.truth_((function (){var fexpr__28148 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("address","postal-code","address/postal-code",1502529683),null,new cljs.core.Keyword("address","address-line1","address/address-line1",-1206418180),null,new cljs.core.Keyword("address","name","address/name",848026653),null,new cljs.core.Keyword("address","city","address/city",-1506334306),null], null), null);
return (fexpr__28148.cljs$core$IFn$_invoke$arity$1 ? fexpr__28148.cljs$core$IFn$_invoke$arity$1(field_key) : fexpr__28148.call(null,field_key));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef4444",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null),"*"], null):null)], null);
});
/**
 * Base properties for input fields
 */
features.app.addresses.frontend.view.input_base_props = (function features$app$addresses$frontend$view$input_base_props(field_key,address,has_error_QMARK_,attrs){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(address),field_key,"")),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28149_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(address,cljs.core.assoc,field_key,p1__28149_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["1.5",(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 1px 2px 0 rgba(0, 0, 0, 0.05)"),"1rem","border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out","100%","0.75rem 1rem","none",(cljs.core.truth_(has_error_QMARK_)?"2px solid #dc3545":"1px solid #d1d5db"),"8px"]),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#3b82f6"),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 0 0 3px rgba(59, 130, 246, 0.1)")], null)], null)], 0))], null);
});
/**
 * Render textarea input
 */
features.app.addresses.frontend.view.render_textarea = (function features$app$addresses$frontend$view$render_textarea(field_key,address,has_error_QMARK_,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"type","type",1174270348)),features.app.addresses.frontend.view.input_base_props(field_key,address,has_error_QMARK_,attrs)], 0))], null);
});
/**
 * Render text input
 */
features.app.addresses.frontend.view.render_text_input = (function features$app$addresses$frontend$view$render_text_input(field_key,address,has_error_QMARK_,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,features.app.addresses.frontend.view.input_base_props(field_key,address,has_error_QMARK_,attrs)], 0))], null);
});
/**
 * Render appropriate input type
 */
features.app.addresses.frontend.view.field_input = (function features$app$addresses$frontend$view$field_input(field_key,address,has_error_QMARK_,attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attrs),"textarea")){
return features.app.addresses.frontend.view.render_textarea(field_key,address,has_error_QMARK_,attrs);
} else {
return features.app.addresses.frontend.view.render_text_input(field_key,address,has_error_QMARK_,attrs);
}
});
features.app.addresses.frontend.view.field_error = (function features$app$addresses$frontend$view$field_error(error_msg){
if(cljs.core.truth_(error_msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem"], null)], null),error_msg], null);
} else {
return null;
}
});
/**
 * Complete form field with label, input and error
 */
features.app.addresses.frontend.view.form_field = (function features$app$addresses$frontend$view$form_field(label,field_key,address,errors,attrs){
var has_error_QMARK_ = cljs.core.contains_QMARK_(errors,field_key);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.field_label,label,field_key,has_error_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.field_input,field_key,address,has_error_QMARK_,attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.field_error,cljs.core.get.cljs$core$IFn$_invoke$arity$2(errors,field_key)], null)], null);
});
/**
 * Field for managing elevators list
 */
features.app.addresses.frontend.view.elevators_field = (function features$app$addresses$frontend$view$elevators_field(address,errors){
var new_elevator = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (address__$1,errors__$1){
var elevators = (function (){var or__5025__auto__ = new cljs.core.Keyword("address","elevators","address/elevators",-371894192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(address__$1));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var add_elevator = (function (elevator_id){
if(cljs.core.truth_((function (){var and__5023__auto__ = elevator_id;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some((function (p1__28162_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28162_SHARP_,elevator_id);
}),elevators));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(address__$1,cljs.core.assoc,new cljs.core.Keyword("address","elevators","address/elevators",-371894192),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(elevators,elevator_id));
} else {
return null;
}
});
var remove_elevator = (function (index){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(address__$1,cljs.core.assoc,new cljs.core.Keyword("address","elevators","address/elevators",-371894192),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,elevators),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((index + (1)),elevators))));
});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.025em",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null),translations.core.tr(new cljs.core.Keyword("addresses","elevators","addresses/elevators",1615739006))], null),((cljs.core.seq(elevators))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null)], null),(function (){var iter__5503__auto__ = (function features$app$addresses$frontend$view$elevators_field_$_iter__28166(s__28167){
return (new cljs.core.LazySeq(null,(function (){
var s__28167__$1 = s__28167;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__28167__$1);
if(temp__5823__auto__){
var s__28167__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28167__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28167__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28169 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28168 = (0);
while(true){
if((i__28168 < size__5502__auto__)){
var vec__28176 = cljs.core._nth(c__5501__auto__,i__28168);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28176,(0),null);
var elevator_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28176,(1),null);
cljs.core.chunk_append(b__28169,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(translations.core.tr(new cljs.core.Keyword("addresses","elevator-prefix","addresses/elevator-prefix",-1054239913))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(elevator_id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28168,vec__28176,index,elevator_id,c__5501__auto__,size__5502__auto__,b__28169,s__28167__$2,temp__5823__auto__,elevators,add_elevator,remove_elevator,new_elevator){
return (function (){
return remove_elevator(index);
});})(i__28168,vec__28176,index,elevator_id,c__5501__auto__,size__5502__auto__,b__28169,s__28167__$2,temp__5823__auto__,elevators,add_elevator,remove_elevator,new_elevator))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px"], null)], null),translations.core.tr(new cljs.core.Keyword("addresses","remove","addresses/remove",201856164))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["elevator-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)));

var G__28324 = (i__28168 + (1));
i__28168 = G__28324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28169),features$app$addresses$frontend$view$elevators_field_$_iter__28166(cljs.core.chunk_rest(s__28167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28169),null);
}
} else {
var vec__28186 = cljs.core.first(s__28167__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28186,(0),null);
var elevator_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28186,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(translations.core.tr(new cljs.core.Keyword("addresses","elevator-prefix","addresses/elevator-prefix",-1054239913))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(elevator_id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__28186,index,elevator_id,s__28167__$2,temp__5823__auto__,elevators,add_elevator,remove_elevator,new_elevator){
return (function (){
return remove_elevator(index);
});})(vec__28186,index,elevator_id,s__28167__$2,temp__5823__auto__,elevators,add_elevator,remove_elevator,new_elevator))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px"], null)], null),translations.core.tr(new cljs.core.Keyword("addresses","remove","addresses/remove",201856164))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["elevator-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)),features$app$addresses$frontend$view$elevators_field_$_iter__28166(cljs.core.rest(s__28167__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,elevators));
})()], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-end"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("addresses","elevator-placeholder","addresses/elevator-placeholder",17652724)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_elevator),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28165_SHARP_){
return cljs.core.reset_BANG_(new_elevator,p1__28165_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem 1rem",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #d1d5db",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
add_elevator(cljs.core.deref(new_elevator));

return cljs.core.reset_BANG_(new_elevator,"");
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(clojure.string.trim(cljs.core.deref(new_elevator))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem 1.5rem",new cljs.core.Keyword(null,"background","background",-863952629),"#10b981",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((cljs.core.empty_QMARK_(clojure.string.trim(cljs.core.deref(new_elevator))))?"not-allowed":"pointer"),new cljs.core.Keyword(null,"opacity","opacity",397153780),((cljs.core.empty_QMARK_(clojure.string.trim(cljs.core.deref(new_elevator))))?"0.5":"1")], null)], null),translations.core.tr(new cljs.core.Keyword("addresses","add-elevator","addresses/add-elevator",886088435))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("addresses","elevator-description","addresses/elevator-description",-76206293))], null)], null);
});
});
/**
 * All form input fields
 */
features.app.addresses.frontend.view.form_fields = (function features$app$addresses$frontend$view$form_fields(address,errors){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("addresses","name","addresses/name",-1308312625)),new cljs.core.Keyword("address","name","address/name",848026653),address,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("addresses","name-placeholder","addresses/name-placeholder",237348698))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("addresses","address-line1","addresses/address-line1",793699690)),new cljs.core.Keyword("address","address-line1","address/address-line1",-1206418180),address,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("addresses","address-line1-placeholder","addresses/address-line1-placeholder",-316605019))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("addresses","address-line2","addresses/address-line2",-1790760211)),new cljs.core.Keyword("address","address-line2","address/address-line2",498748479),address,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("addresses","address-line2-placeholder","addresses/address-line2-placeholder",708463158))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("addresses","city","addresses/city",1554909520)),new cljs.core.Keyword("address","city","address/city",-1506334306),address,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("addresses","city-placeholder","addresses/city-placeholder",1149065049))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("addresses","postal-code","addresses/postal-code",-1101551583)),new cljs.core.Keyword("address","postal-code","address/postal-code",1502529683),address,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("addresses","postal-code-placeholder","addresses/postal-code-placeholder",723306480))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("addresses","country","addresses/country",512163227)),new cljs.core.Keyword("address","country","address/country",-1492198167),address,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("addresses","country-placeholder","addresses/country-placeholder",1446429500))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("addresses","contact-person","addresses/contact-person",1448603403)),new cljs.core.Keyword("address","contact-person","address/contact-person",-1074753735),address,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("addresses","contact-person-placeholder","addresses/contact-person-placeholder",-1056594569))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("addresses","contact-phone","addresses/contact-phone",978929495)),new cljs.core.Keyword("address","contact-phone","address/contact-phone",-1025529979),address,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("addresses","contact-phone-placeholder","addresses/contact-phone-placeholder",-211619754))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("addresses","contact-email","addresses/contact-email",-1946771272)),new cljs.core.Keyword("address","contact-email","address/contact-email",57376838),address,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("addresses","contact-email-placeholder","addresses/contact-email-placeholder",-2142211692))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.elevators_field,address,errors], null)], null);
});
/**
 * Handle save button click with validation
 */
features.app.addresses.frontend.view.handle_save_click = (function features$app$addresses$frontend$view$handle_save_click(address,loading_QMARK_,errors,on_save){
var validation_errors = features.app.addresses.frontend.view.validate_address(cljs.core.deref(address));
if(cljs.core.empty_QMARK_(validation_errors)){
cljs.core.reset_BANG_(loading_QMARK_,true);

cljs.core.reset_BANG_(errors,cljs.core.PersistentArrayMap.EMPTY);

var G__28208 = cljs.core.deref(address);
var G__28209 = (function (){
return cljs.core.reset_BANG_(loading_QMARK_,false);
});
return (on_save.cljs$core$IFn$_invoke$arity$2 ? on_save.cljs$core$IFn$_invoke$arity$2(G__28208,G__28209) : on_save.call(null,G__28208,G__28209));
} else {
return cljs.core.reset_BANG_(errors,validation_errors);
}
});
/**
 * Modal for creating/editing addresses using new UI components
 */
features.app.addresses.frontend.view.address_modal = (function features$app$addresses$frontend$view$address_modal(address_data,is_new_QMARK_,on_save,on_cancel){
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var address = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(address_data);
return (function (address_data__$1,is_new_QMARK___$1,on_save__$1,on_cancel__$1){
cljs.core.reset_BANG_(address,address_data__$1);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_cancel__$1,new cljs.core.Keyword(null,"close-on-backdrop?","close-on-backdrop?",313135575),true], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal_header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(is_new_QMARK___$1)?translations.core.tr(new cljs.core.Keyword("addresses","modal-add-title","addresses/modal-add-title",1211462625)):translations.core.tr(new cljs.core.Keyword("addresses","modal-edit-title","addresses/modal-edit-title",1020009384))),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),(cljs.core.truth_(is_new_QMARK___$1)?translations.core.tr(new cljs.core.Keyword("addresses","modal-add-subtitle","addresses/modal-add-subtitle",-1028333288)):translations.core.tr(new cljs.core.Keyword("addresses","modal-edit-subtitle","addresses/modal-edit-subtitle",1932868849)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"header"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.form_fields,address,cljs.core.deref(errors)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"form"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal_footer,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel__$1,new cljs.core.Keyword(null,"text","text",-1790561697),translations.core.tr(new cljs.core.Keyword("addresses","cancel","addresses/cancel",1452075894))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"cancel"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core.deref(loading_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return features.app.addresses.frontend.view.handle_save_click(address,loading_QMARK_,errors,on_save__$1);
}),new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?translations.core.tr(new cljs.core.Keyword("addresses","saving","addresses/saving",-565366301)):translations.core.tr(new cljs.core.Keyword("addresses","save-address","addresses/save-address",748698049)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"save"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"footer"], null))], null);
});
});
/**
 * Custom render function for address name column with full address
 */
features.app.addresses.frontend.view.address_name_render = (function features$app$addresses$frontend$view$address_name_render(name,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("address","address-line1","address/address-line1",-1206418180).cljs$core$IFn$_invoke$arity$1(row)),(cljs.core.truth_(new cljs.core.Keyword("address","address-line2","address/address-line2",498748479).cljs$core$IFn$_invoke$arity$1(row))?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("address","address-line2","address/address-line2",498748479).cljs$core$IFn$_invoke$arity$1(row))].join(''):null),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("address","city","address/city",-1506334306).cljs$core$IFn$_invoke$arity$1(row))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("address","postal-code","address/postal-code",1502529683).cljs$core$IFn$_invoke$arity$1(row))].join('')], null)], null);
});
/**
 * Custom render function for elevators column
 */
features.app.addresses.frontend.view.elevators_render = (function features$app$addresses$frontend$view$elevators_render(elevators,row){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.seq(elevators))?(function (){var iter__5503__auto__ = (function features$app$addresses$frontend$view$elevators_render_$_iter__28237(s__28238){
return (new cljs.core.LazySeq(null,(function (){
var s__28238__$1 = s__28238;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__28238__$1);
if(temp__5823__auto__){
var s__28238__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28238__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28238__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28240 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28239 = (0);
while(true){
if((i__28239 < size__5502__auto__)){
var elevator = cljs.core._nth(c__5501__auto__,i__28239);
cljs.core.chunk_append(b__28240,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941)],["#0891b2","0.75rem","500","#e0f2fe","0.25rem 0.5rem","inline-block","0.5rem","12px","0.25rem"])], null),["\uD83C\uDFE2 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(elevator)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["table-elevator-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(elevator)].join('')], null)));

var G__28333 = (i__28239 + (1));
i__28239 = G__28333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28240),features$app$addresses$frontend$view$elevators_render_$_iter__28237(cljs.core.chunk_rest(s__28238__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28240),null);
}
} else {
var elevator = cljs.core.first(s__28238__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941)],["#0891b2","0.75rem","500","#e0f2fe","0.25rem 0.5rem","inline-block","0.5rem","12px","0.25rem"])], null),["\uD83C\uDFE2 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(elevator)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["table-elevator-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(elevator)].join('')], null)),features$app$addresses$frontend$view$elevators_render_$_iter__28237(cljs.core.rest(s__28238__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(elevators);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null)], null),translations.core.tr(new cljs.core.Keyword("addresses","no-elevators","addresses/no-elevators",1349010587))], null))], null);
});
/**
 * Custom render function for contact info
 */
features.app.addresses.frontend.view.contact_render = (function features$app$addresses$frontend$view$contact_render(contact_person,row){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(contact_person)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),contact_person], null):null),(cljs.core.truth_(new cljs.core.Keyword("address","contact-phone","address/contact-phone",-1025529979).cljs$core$IFn$_invoke$arity$1(row))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null)], null),new cljs.core.Keyword("address","contact-phone","address/contact-phone",-1025529979).cljs$core$IFn$_invoke$arity$1(row)], null):null),(cljs.core.truth_(new cljs.core.Keyword("address","contact-email","address/contact-email",57376838).cljs$core$IFn$_invoke$arity$1(row))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem"], null)], null),new cljs.core.Keyword("address","contact-email","address/contact-email",57376838).cljs$core$IFn$_invoke$arity$1(row)], null):null)], null);
});
/**
 * Addresses table using server-side data-table component with search, sorting, and pagination
 */
features.app.addresses.frontend.view.addresses_table = (function features$app$addresses$frontend$view$addresses_table(addresses,loading_QMARK_,on_edit,on_delete,query_fn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.server_side_data_table,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"show-search?","show-search?",684663920),new cljs.core.Keyword(null,"on-data-change","on-data-change",475267763),new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515)],[new cljs.core.Keyword("address","id","address/id",-555725248),new cljs.core.Keyword(null,"addresses-table","addresses-table",1377609922),query_fn,cljs.core.deref(loading_QMARK_),translations.core.tr(new cljs.core.Keyword("addresses","no-addresses-found","addresses/no-addresses-found",-1721551280)),cljs.core.deref(addresses),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("addresses","action-edit","addresses/action-edit",1817395039)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_edit], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("addresses","action-delete","addresses/action-delete",775319501)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (row){
if(cljs.core.truth_(confirm(translations.core.tr(new cljs.core.Keyword("addresses","confirm-delete","addresses/confirm-delete",355582575))))){
var G__28283 = new cljs.core.Keyword("address","id","address/id",-555725248).cljs$core$IFn$_invoke$arity$1(row);
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(G__28283) : on_delete.call(null,G__28283));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("address","name","address/name",848026653),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("addresses","table-header-address","addresses/table-header-address",291562835)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.addresses.frontend.view.address_name_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("address","elevators","address/elevators",-371894192),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("addresses","table-header-elevators","addresses/table-header-elevators",-507613740)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.addresses.frontend.view.elevators_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("address","contact-person","address/contact-person",-1074753735),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("addresses","table-header-contact","addresses/table-header-contact",1088758493)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.addresses.frontend.view.contact_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("address","city","address/city",-1506334306),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("addresses","table-header-city","addresses/table-header-city",-1419718245)),new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("address","country","address/country",-1492198167),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("addresses","table-header-country","addresses/table-header-country",-932946484)),new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null)], null),true,(function (result){
return cljs.core.reset_BANG_(addresses,result);
}),true])], null);
});
/**
 * Page header with title and add button using new UI component
 */
features.app.addresses.frontend.view.addresses_page_header = (function features$app$addresses$frontend$view$addresses_page_header(modal_address,modal_is_new_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.page_header.page_header,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),translations.core.tr(new cljs.core.Keyword("addresses","page-title","addresses/page-title",-1119290637)),new cljs.core.Keyword(null,"description","description",-1428560544),translations.core.tr(new cljs.core.Keyword("addresses","page-description","addresses/page-description",376933075)),new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(modal_address,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("address","country","address/country",-1492198167),"Hungary",new cljs.core.Keyword("address","elevators","address/elevators",-371894192),cljs.core.PersistentVector.EMPTY], null));

return cljs.core.reset_BANG_(modal_is_new_QMARK_,true);
}),new cljs.core.Keyword(null,"text","text",-1790561697),translations.core.tr(new cljs.core.Keyword("addresses","add-new-address","addresses/add-new-address",1625319739))], null)], null)], null)], null);
});
/**
 * Main content area with server-side data table
 */
features.app.addresses.frontend.view.addresses_content = (function features$app$addresses$frontend$view$addresses_content(addresses,loading_QMARK_,modal_address,modal_is_new_QMARK_,delete_address,query_fn){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.addresses_table,addresses,loading_QMARK_,(function (address){
cljs.core.reset_BANG_(modal_address,address);

return cljs.core.reset_BANG_(modal_is_new_QMARK_,false);
}),delete_address,query_fn], null);
});
/**
 * Render modal when address is selected
 */
features.app.addresses.frontend.view.modal_when_open = (function features$app$addresses$frontend$view$modal_when_open(modal_address,modal_is_new_QMARK_,save_address){
if(cljs.core.truth_(cljs.core.deref(modal_address))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.address_modal,cljs.core.deref(modal_address),cljs.core.deref(modal_is_new_QMARK_),save_address,(function (){
return cljs.core.reset_BANG_(modal_address,null);
})], null);
} else {
return null;
}
});
features.app.addresses.frontend.view.view = (function features$app$addresses$frontend$view$view(){
var workspace_id = features.app.addresses.frontend.view.get_workspace_id();
var addresses = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var modal_address = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var modal_is_new_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var load_addresses = (function (params){
return features.app.addresses.frontend.view.load_addresses_query(workspace_id,loading_QMARK_,addresses,(function (){var or__5025__auto__ = params;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});
var save_address = (function (address,callback){
return features.app.addresses.frontend.view.save_address_query(address,workspace_id,modal_is_new_QMARK_,callback,modal_address,(function (){
return load_addresses(cljs.core.PersistentArrayMap.EMPTY);
}));
});
var delete_address = (function (address_id){
return features.app.addresses.frontend.view.delete_address_query(address_id,workspace_id,(function (){
return load_addresses(cljs.core.PersistentArrayMap.EMPTY);
}));
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.addresses_page_header,modal_address,modal_is_new_QMARK_], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.addresses_content,addresses,loading_QMARK_,modal_address,modal_is_new_QMARK_,delete_address,load_addresses], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.addresses.frontend.view.modal_when_open,modal_address,modal_is_new_QMARK_,save_address], null)], null)], null);
});
});

//# sourceMappingURL=features.app.addresses.frontend.view.js.map
