goog.provide('features.app.workspace.material_templates.frontend.view');
features.app.workspace.material_templates.frontend.view.get_workspace_id = (function features$app$workspace$material_templates$frontend$view$get_workspace_id(){

var router_state = cljs.core.deref(router.frontend.zero.state);
var workspace_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(router_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435)], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: get-workspace-id called"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Router state:",router_state], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Extracted workspace-id:",workspace_id], 0));

return workspace_id;
});
features.app.workspace.material_templates.frontend.view.load_templates_query = (function features$app$workspace$material_templates$frontend$view$load_templates_query(workspace_id,loading_QMARK_,templates){

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-material-templates","get-all","workspace-material-templates/get-all",472341884),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
cljs.core.reset_BANG_(loading_QMARK_,false);

var result = new cljs.core.Keyword("workspace-material-templates","get-all","workspace-material-templates/get-all",472341884).cljs$core$IFn$_invoke$arity$1(response);
return cljs.core.reset_BANG_(templates,(function (){var or__5025__auto__ = result;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
})], null));
});
features.app.workspace.material_templates.frontend.view.get_query_type = (function features$app$workspace$material_templates$frontend$view$get_query_type(is_new_QMARK_){

if(cljs.core.truth_(cljs.core.deref(is_new_QMARK_))){
return new cljs.core.Keyword("workspace-material-templates","create","workspace-material-templates/create",1412122685);
} else {
return new cljs.core.Keyword("workspace-material-templates","update","workspace-material-templates/update",-551621993);
}
});
features.app.workspace.material_templates.frontend.view.prepare_template_data = (function features$app$workspace$material_templates$frontend$view$prepare_template_data(template,is_new_QMARK_){

if(cljs.core.truth_(cljs.core.deref(is_new_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(template,new cljs.core.Keyword("material-template","id","material-template/id",1625256948));
} else {
return template;
}
});
features.app.workspace.material_templates.frontend.view.handle_save_response = (function features$app$workspace$material_templates$frontend$view$handle_save_response(response,query_type,callback,modal_template,load_templates){

(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));

if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))){
cljs.core.reset_BANG_(modal_template,null);

return (load_templates.cljs$core$IFn$_invoke$arity$0 ? load_templates.cljs$core$IFn$_invoke$arity$0() : load_templates.call(null));
} else {
return alert(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))].join(''));
}
});
features.app.workspace.material_templates.frontend.view.save_template_query = (function features$app$workspace$material_templates$frontend$view$save_template_query(template,workspace_id,modal_is_new_QMARK_,callback,modal_template,load_templates){

var query_type = features.app.workspace.material_templates.frontend.view.get_query_type(modal_is_new_QMARK_);
var template_data = features.app.workspace.material_templates.frontend.view.prepare_template_data(template,modal_is_new_QMARK_);
var context = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: save-template-query called"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Workspace ID:",workspace_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Query type:",query_type], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Template data:",template_data], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Context being sent:",context], 0));

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.PersistentArrayMap.createAsIfByAssoc([query_type,template_data]),new cljs.core.Keyword("parquery","context","parquery/context",661391038),context,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: save-template-query response:",response], 0));

return features.app.workspace.material_templates.frontend.view.handle_save_response(response,query_type,callback,modal_template,load_templates);
})], null));
});
features.app.workspace.material_templates.frontend.view.delete_template_query = (function features$app$workspace$material_templates$frontend$view$delete_template_query(template_id,workspace_id,load_templates){

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-material-templates","delete","workspace-material-templates/delete",-37051977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("material-template","id","material-template/id",1625256948),template_id], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("workspace-material-templates","delete","workspace-material-templates/delete",-37051977).cljs$core$IFn$_invoke$arity$1(response)))){
return (load_templates.cljs$core$IFn$_invoke$arity$0 ? load_templates.cljs$core$IFn$_invoke$arity$0() : load_templates.call(null));
} else {
return alert("Error deleting template");
}
})], null));
});
features.app.workspace.material_templates.frontend.view.validate_name = (function features$app$workspace$material_templates$frontend$view$validate_name(name){

return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))).length) < (2));
});
features.app.workspace.material_templates.frontend.view.validate_unit = (function features$app$workspace$material_templates$frontend$view$validate_unit(unit){

return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit))).length) < (1));
});
/**
 * Validates material template data and returns map of field errors
 */
features.app.workspace.material_templates.frontend.view.validate_material_template = (function features$app$workspace$material_templates$frontend$view$validate_material_template(template){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var name = new cljs.core.Keyword("material-template","name","material-template/name",-1467705719).cljs$core$IFn$_invoke$arity$1(template);
var unit = new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647).cljs$core$IFn$_invoke$arity$1(template);
var G__14646 = errors;
var G__14646__$1 = ((features.app.workspace.material_templates.frontend.view.validate_name(name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14646,new cljs.core.Keyword("material-template","name","material-template/name",-1467705719),"Name is required"):G__14646);
if(features.app.workspace.material_templates.frontend.view.validate_unit(unit)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14646__$1,new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647),"Unit is required");
} else {
return G__14646__$1;
}
});
features.app.workspace.material_templates.frontend.view.field_label = (function features$app$workspace$material_templates$frontend$view$field_label(label,field_key,has_error_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.025em",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#374151")], null)], null),label,(cljs.core.truth_((function (){var fexpr__14647 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647),null,new cljs.core.Keyword("material-template","name","material-template/name",-1467705719),null], null), null);
return (fexpr__14647.cljs$core$IFn$_invoke$arity$1 ? fexpr__14647.cljs$core$IFn$_invoke$arity$1(field_key) : fexpr__14647.call(null,field_key));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef4444",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null),"*"], null):null)], null);
});
features.app.workspace.material_templates.frontend.view.input_base_props = (function features$app$workspace$material_templates$frontend$view$input_base_props(field_key,template,has_error_QMARK_,attrs){

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(template),field_key,"")),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14648_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(template,cljs.core.assoc,field_key,p1__14648_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["1.5",(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 1px 2px 0 rgba(0, 0, 0, 0.05)"),"1rem","border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out","100%","0.75rem 1rem","none",(cljs.core.truth_(has_error_QMARK_)?"2px solid #dc3545":"1px solid #d1d5db"),"8px"]),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#3b82f6"),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 0 0 3px rgba(59, 130, 246, 0.1)")], null)], null)], 0))], null);
});
features.app.workspace.material_templates.frontend.view.render_textarea = (function features$app$workspace$material_templates$frontend$view$render_textarea(field_key,template,has_error_QMARK_,attrs){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"type","type",1174270348)),features.app.workspace.material_templates.frontend.view.input_base_props(field_key,template,has_error_QMARK_,attrs)], 0))], null);
});
features.app.workspace.material_templates.frontend.view.render_text_input = (function features$app$workspace$material_templates$frontend$view$render_text_input(field_key,template,has_error_QMARK_,attrs){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,features.app.workspace.material_templates.frontend.view.input_base_props(field_key,template,has_error_QMARK_,attrs)], 0))], null);
});
features.app.workspace.material_templates.frontend.view.field_input = (function features$app$workspace$material_templates$frontend$view$field_input(field_key,template,has_error_QMARK_,attrs){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attrs),"textarea")){
return features.app.workspace.material_templates.frontend.view.render_textarea(field_key,template,has_error_QMARK_,attrs);
} else {
return features.app.workspace.material_templates.frontend.view.render_text_input(field_key,template,has_error_QMARK_,attrs);
}
});
features.app.workspace.material_templates.frontend.view.field_error = (function features$app$workspace$material_templates$frontend$view$field_error(error_msg){
if(cljs.core.truth_(error_msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem"], null)], null),error_msg], null);
} else {
return null;
}
});
features.app.workspace.material_templates.frontend.view.form_field = (function features$app$workspace$material_templates$frontend$view$form_field(label,field_key,template,errors,attrs){

var has_error_QMARK_ = cljs.core.contains_QMARK_(errors,field_key);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.field_label,label,field_key,has_error_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.field_input,field_key,template,has_error_QMARK_,attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.field_error,cljs.core.get.cljs$core$IFn$_invoke$arity$2(errors,field_key)], null)], null);
});
features.app.workspace.material_templates.frontend.view.modal_overlay = (function features$app$workspace$material_templates$frontend$view$modal_overlay(){

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"backdrop-filter","backdrop-filter",-735928241),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937)],["center","fadeIn 0.2s ease-out",(0),(0),"rgba(0, 0, 0, 0.6)","blur(4px)",(1000),"center",(0),"flex","fixed",(0)]);
});
features.app.workspace.material_templates.frontend.view.modal_content = (function features$app$workspace$material_templates$frontend$view$modal_content(){

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["480px","0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","90vh","scale(1)","slideIn 0.2s ease-out","auto","white","640px","2rem","16px"]);
});
features.app.workspace.material_templates.frontend.view.modal_title = (function features$app$workspace$material_templates$frontend$view$modal_title(is_new_QMARK_){

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2rem",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"1rem",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),(cljs.core.truth_(is_new_QMARK_)?"Add New Material Template":"Edit Material Template")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5rem 0 0 0"], null)], null),(cljs.core.truth_(is_new_QMARK_)?"Create a new material template for your workspace":"Update the details of this material template")], null)], null);
});
features.app.workspace.material_templates.frontend.view.form_fields = (function features$app$workspace$material_templates$frontend$view$form_fields(template,errors){

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.form_field,"Name",new cljs.core.Keyword("material-template","name","material-template/name",-1467705719),template,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g. Steel Cable"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.form_field,"Unit",new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647),template,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g. m, kg, pcs"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.form_field,"Category",new cljs.core.Keyword("material-template","category","material-template/category",2131188096),template,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g. Cables, Hardware"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.form_field,"Description",new cljs.core.Keyword("material-template","description","material-template/description",-382071872),template,errors,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Optional description",new cljs.core.Keyword(null,"rows","rows",850049680),(3)], null)], null)], null);
});
features.app.workspace.material_templates.frontend.view.active_checkbox = (function features$app$workspace$material_templates$frontend$view$active_checkbox(template,is_new_QMARK_){

if(cljs.core.truth_(is_new_QMARK_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(new cljs.core.Keyword("material-template","active","material-template/active",-1117708428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(template))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14649_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(template,cljs.core.assoc,new cljs.core.Keyword("material-template","active","material-template/active",-1117708428),p1__14649_SHARP_.target.checked);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.75rem",new cljs.core.Keyword(null,"width","width",-384071477),"1rem",new cljs.core.Keyword(null,"height","height",1025178622),"1rem",new cljs.core.Keyword(null,"accent-color","accent-color",908336425),"#3b82f6",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null),"Active Template",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5rem"], null)], null),"(Uncheck to disable this template)"], null)], null)], null);
}
});
features.app.workspace.material_templates.frontend.view.handle_save_click = (function features$app$workspace$material_templates$frontend$view$handle_save_click(template,loading_QMARK_,errors,on_save){

var validation_errors = features.app.workspace.material_templates.frontend.view.validate_material_template(cljs.core.deref(template));
if(cljs.core.empty_QMARK_(validation_errors)){
cljs.core.reset_BANG_(loading_QMARK_,true);

cljs.core.reset_BANG_(errors,cljs.core.PersistentArrayMap.EMPTY);

var G__14650 = cljs.core.deref(template);
var G__14651 = (function (){
return cljs.core.reset_BANG_(loading_QMARK_,false);
});
return (on_save.cljs$core$IFn$_invoke$arity$2 ? on_save.cljs$core$IFn$_invoke$arity$2(G__14650,G__14651) : on_save.call(null,G__14650,G__14651));
} else {
return cljs.core.reset_BANG_(errors,validation_errors);
}
});
features.app.workspace.material_templates.frontend.view.modal_buttons = (function features$app$workspace$material_templates$frontend$view$modal_buttons(template,loading_QMARK_,errors,on_save,on_cancel){

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.75rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2.5rem",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"2rem",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #e5e7eb",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["#374151","all 0.2s ease-in-out","500","white","pointer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#9ca3af"], null),"0.75rem 1.5rem","1px solid #d1d5db","8px"])], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(loading_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return features.app.workspace.material_templates.frontend.view.handle_save_click(template,loading_QMARK_,errors,on_save);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["white","all 0.2s ease-in-out","500",(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?"#9ca3af":"#3b82f6"),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?"not-allowed":"pointer"),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#2563eb"], null)),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?0.7:(1)),"0.75rem 1.5rem","none","8px"])], null),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?"Saving...":"Save Template")], null)], null);
});
/**
 * Modal for creating/editing material templates
 */
features.app.workspace.material_templates.frontend.view.material_template_modal = (function features$app$workspace$material_templates$frontend$view$material_template_modal(template_data,is_new_QMARK_,on_save,on_cancel){
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var template = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(template_data);
return (function (template_data__$1,is_new_QMARK___$1,on_save__$1,on_cancel__$1){
cljs.core.reset_BANG_(template,template_data__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),features.app.workspace.material_templates.frontend.view.modal_overlay()], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),features.app.workspace.material_templates.frontend.view.modal_content()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.modal_title,is_new_QMARK___$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.form_fields,template,cljs.core.deref(errors)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.active_checkbox,template,is_new_QMARK___$1], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.modal_buttons,template,loading_QMARK_,errors,on_save__$1,on_cancel__$1], null)], null)], null);
});
});
features.app.workspace.material_templates.frontend.view.table_header_style = (function features$app$workspace$material_templates$frontend$view$table_header_style(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],["uppercase","#374151","left","0.75rem","600","#f9fafb","1rem 1.25rem","0.05em","1px solid #e5e7eb"]);
});
features.app.workspace.material_templates.frontend.view.table_cell_style = (function features$app$workspace$material_templates$frontend$view$table_cell_style(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 1.25rem",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #f3f4f6",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null);
});
features.app.workspace.material_templates.frontend.view.template_name_cell = (function features$app$workspace$material_templates$frontend$view$template_name_cell(template){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),features.app.workspace.material_templates.frontend.view.table_cell_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),new cljs.core.Keyword("material-template","name","material-template/name",-1467705719).cljs$core$IFn$_invoke$arity$1(template)], null),(cljs.core.truth_(new cljs.core.Keyword("material-template","description","material-template/description",-382071872).cljs$core$IFn$_invoke$arity$1(template))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4"], null)], null),new cljs.core.Keyword("material-template","description","material-template/description",-382071872).cljs$core$IFn$_invoke$arity$1(template)], null):null)], null)], null);
});
/**
 * Table displaying material templates
 */
features.app.workspace.material_templates.frontend.view.material_template_table = (function features$app$workspace$material_templates$frontend$view$material_template_table(templates,on_edit,on_delete){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),features.app.workspace.material_templates.frontend.view.table_header_style()], null),"Material"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),features.app.workspace.material_templates.frontend.view.table_header_style()], null),"Unit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),features.app.workspace.material_templates.frontend.view.table_header_style()], null),"Category"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),features.app.workspace.material_templates.frontend.view.table_header_style()], null),"Status"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.app.workspace.material_templates.frontend.view.table_header_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),"Actions"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5503__auto__ = (function features$app$workspace$material_templates$frontend$view$material_template_table_$_iter__14652(s__14653){
return (new cljs.core.LazySeq(null,(function (){
var s__14653__$1 = s__14653;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__14653__$1);
if(temp__5823__auto__){
var s__14653__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14653__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__14653__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__14655 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__14654 = (0);
while(true){
if((i__14654 < size__5502__auto__)){
var template = cljs.core._nth(c__5501__auto__,i__14654);
cljs.core.chunk_append(b__14655,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.template_name_cell,template], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.app.workspace.material_templates.frontend.view.table_cell_style(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], 0))], null),new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647).cljs$core$IFn$_invoke$arity$1(template)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.app.workspace.material_templates.frontend.view.table_cell_style(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], 0))], null),(function (){var or__5025__auto__ = new cljs.core.Keyword("material-template","category","material-template/category",2131188096).cljs$core$IFn$_invoke$arity$1(template);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),"No category"], null);
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),features.app.workspace.material_templates.frontend.view.table_cell_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"9999px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(new cljs.core.Keyword("material-template","active","material-template/active",-1117708428).cljs$core$IFn$_invoke$arity$1(template))?"#dcfce7":"#fee2e2"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(new cljs.core.Keyword("material-template","active","material-template/active",-1117708428).cljs$core$IFn$_invoke$arity$1(template))?"#166534":"#dc2626")], null)], null),(cljs.core.truth_(new cljs.core.Keyword("material-template","active","material-template/active",-1117708428).cljs$core$IFn$_invoke$arity$1(template))?"Active":"Inactive")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.app.workspace.material_templates.frontend.view.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__14654,template,c__5501__auto__,size__5502__auto__,b__14655,s__14653__$2,temp__5823__auto__){
return (function (){
return (on_edit.cljs$core$IFn$_invoke$arity$1 ? on_edit.cljs$core$IFn$_invoke$arity$1(template) : on_edit.call(null,template));
});})(i__14654,template,c__5501__auto__,size__5502__auto__,b__14655,s__14653__$2,temp__5823__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["#374151","0.75rem","all 0.15s ease-in-out","500","#f3f4f6","pointer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#e5e7eb",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#9ca3af"], null),"0.5rem 0.75rem","1px solid #d1d5db","6px"])], null),"Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__14654,template,c__5501__auto__,size__5502__auto__,b__14655,s__14653__$2,temp__5823__auto__){
return (function (){
if(cljs.core.truth_(confirm("Are you sure you want to delete this template?"))){
var G__14656 = new cljs.core.Keyword("material-template","id","material-template/id",1625256948).cljs$core$IFn$_invoke$arity$1(template);
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(G__14656) : on_delete.call(null,G__14656));
} else {
return null;
}
});})(i__14654,template,c__5501__auto__,size__5502__auto__,b__14655,s__14653__$2,temp__5823__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["#dc2626","0.75rem","all 0.15s ease-in-out","500","#fef2f2","pointer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#fee2e2",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#fca5a5"], null),"0.5rem 0.75rem","1px solid #fecaca","6px"])], null),"Delete"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("material-template","id","material-template/id",1625256948).cljs$core$IFn$_invoke$arity$1(template)], null)));

var G__14658 = (i__14654 + (1));
i__14654 = G__14658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14655),features$app$workspace$material_templates$frontend$view$material_template_table_$_iter__14652(cljs.core.chunk_rest(s__14653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14655),null);
}
} else {
var template = cljs.core.first(s__14653__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.15s ease-in-out",new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.template_name_cell,template], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.app.workspace.material_templates.frontend.view.table_cell_style(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], 0))], null),new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647).cljs$core$IFn$_invoke$arity$1(template)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.app.workspace.material_templates.frontend.view.table_cell_style(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], 0))], null),(function (){var or__5025__auto__ = new cljs.core.Keyword("material-template","category","material-template/category",2131188096).cljs$core$IFn$_invoke$arity$1(template);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),"No category"], null);
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),features.app.workspace.material_templates.frontend.view.table_cell_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.75rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"9999px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(new cljs.core.Keyword("material-template","active","material-template/active",-1117708428).cljs$core$IFn$_invoke$arity$1(template))?"#dcfce7":"#fee2e2"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(new cljs.core.Keyword("material-template","active","material-template/active",-1117708428).cljs$core$IFn$_invoke$arity$1(template))?"#166534":"#dc2626")], null)], null),(cljs.core.truth_(new cljs.core.Keyword("material-template","active","material-template/active",-1117708428).cljs$core$IFn$_invoke$arity$1(template))?"Active":"Inactive")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([features.app.workspace.material_templates.frontend.view.table_cell_style(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (template,s__14653__$2,temp__5823__auto__){
return (function (){
return (on_edit.cljs$core$IFn$_invoke$arity$1 ? on_edit.cljs$core$IFn$_invoke$arity$1(template) : on_edit.call(null,template));
});})(template,s__14653__$2,temp__5823__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["#374151","0.75rem","all 0.15s ease-in-out","500","#f3f4f6","pointer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#e5e7eb",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#9ca3af"], null),"0.5rem 0.75rem","1px solid #d1d5db","6px"])], null),"Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (template,s__14653__$2,temp__5823__auto__){
return (function (){
if(cljs.core.truth_(confirm("Are you sure you want to delete this template?"))){
var G__14657 = new cljs.core.Keyword("material-template","id","material-template/id",1625256948).cljs$core$IFn$_invoke$arity$1(template);
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(G__14657) : on_delete.call(null,G__14657));
} else {
return null;
}
});})(template,s__14653__$2,temp__5823__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["#dc2626","0.75rem","all 0.15s ease-in-out","500","#fef2f2","pointer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#fee2e2",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#fca5a5"], null),"0.5rem 0.75rem","1px solid #fecaca","6px"])], null),"Delete"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("material-template","id","material-template/id",1625256948).cljs$core$IFn$_invoke$arity$1(template)], null)),features$app$workspace$material_templates$frontend$view$material_template_table_$_iter__14652(cljs.core.rest(s__14653__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(templates);
})()], null)], null)], null);
});
features.app.workspace.material_templates.frontend.view.page_header = (function features$app$workspace$material_templates$frontend$view$page_header(modal_template,modal_is_new_QMARK_){

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2rem",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"1.5rem",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e5e7eb"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.875rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),"Material Templates"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5rem 0 0 0"], null)], null),"Manage your material templates for this workspace"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(modal_template,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("material-template","active","material-template/active",-1117708428),true], null));

return cljs.core.reset_BANG_(modal_is_new_QMARK_,true);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["0 1px 2px 0 rgba(0, 0, 0, 0.05)","white","0.875rem","all 0.2s ease-in-out","600","#10b981","pointer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#059669",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 6px -1px rgba(0, 0, 0, 0.1)"], null),"0.75rem 1.25rem","0.025em","none","8px"])], null),"+ Add New Template"], null)], null);
});
features.app.workspace.material_templates.frontend.view.templates_content = (function features$app$workspace$material_templates$frontend$view$templates_content(templates,loading_QMARK_,modal_template,modal_is_new_QMARK_,delete_template){

if(cljs.core.truth_(cljs.core.deref(loading_QMARK_))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"border","border",1444987323),"4px solid #f3f4f6",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"4px solid #3b82f6",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"animation","animation",-1248293244),"spin 1s linear infinite",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto 1rem"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"Loading templates..."], null)], null)], null);
} else {
if(cljs.core.empty_QMARK_(cljs.core.deref(templates))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"No material templates found"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null)], null),"Create your first material template to get started"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.material_template_table,cljs.core.deref(templates),(function (template){
cljs.core.reset_BANG_(modal_template,template);

return cljs.core.reset_BANG_(modal_is_new_QMARK_,false);
}),delete_template], null);
}
}
});
features.app.workspace.material_templates.frontend.view.modal_when_open = (function features$app$workspace$material_templates$frontend$view$modal_when_open(modal_template,modal_is_new_QMARK_,save_template){

if(cljs.core.truth_(cljs.core.deref(modal_template))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.material_template_modal,cljs.core.deref(modal_template),cljs.core.deref(modal_is_new_QMARK_),save_template,(function (){
return cljs.core.reset_BANG_(modal_template,null);
})], null);
} else {
return null;
}
});
features.app.workspace.material_templates.frontend.view.view = (function features$app$workspace$material_templates$frontend$view$view(){
var authenticated_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var workspace_id = features.app.workspace.material_templates.frontend.view.get_workspace_id();
var templates = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var modal_template = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var modal_is_new_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var load_templates = (function (){
cljs.core.reset_BANG_(loading_QMARK_,true);

return features.app.workspace.material_templates.frontend.view.load_templates_query(workspace_id,loading_QMARK_,templates);
});
var save_template = (function (template,callback){
return features.app.workspace.material_templates.frontend.view.save_template_query(template,workspace_id,modal_is_new_QMARK_,callback,modal_template,load_templates);
});
var delete_template = (function (template_id){
return features.app.workspace.material_templates.frontend.view.delete_template_query(template_id,workspace_id,load_templates);
});
return (function (){
zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","current","user/current",-1089426180),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
var user = new cljs.core.Keyword("user","current","user/current",-1089426180).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_((function (){var and__5023__auto__ = user;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user);
} else {
return and__5023__auto__;
}
})())){
cljs.core.reset_BANG_(authenticated_QMARK_,true);

if(cljs.core.empty_QMARK_(cljs.core.deref(templates))){
return load_templates();
} else {
return null;
}
} else {
return cljs.core.reset_BANG_(authenticated_QMARK_,false);
}
})], null));
}),new cljs.core.Keyword(null,"params","params",710516235),[]], null));

if((cljs.core.deref(authenticated_QMARK_) == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Checking authentication..."], null)], null);
} else {
if(cljs.core.deref(authenticated_QMARK_) === false){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["User not authenticated, redirecting to login"], 0));

(window.location = "/login");

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.page_header,modal_template,modal_is_new_QMARK_], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.templates_content,templates,loading_QMARK_,modal_template,modal_is_new_QMARK_,delete_template], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.workspace.material_templates.frontend.view.modal_when_open,modal_template,modal_is_new_QMARK_,save_template], null)], null)], null);

}
}
});
});

//# sourceMappingURL=features.app.workspace.material_templates.frontend.view.js.map
