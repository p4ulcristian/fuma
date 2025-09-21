goog.provide('features.app.material_templates.frontend.view');
/**
 * Get workspace ID from router parameters
 */
features.app.material_templates.frontend.view.get_workspace_id = (function features$app$material_templates$frontend$view$get_workspace_id(){
var router_state = cljs.core.deref(router.frontend.zero.state);
var workspace_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(router_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435)], null));
return workspace_id;
});
/**
 * Get appropriate query type for save operation
 */
features.app.material_templates.frontend.view.get_query_type = (function features$app$material_templates$frontend$view$get_query_type(is_new_QMARK_){
if(cljs.core.truth_(cljs.core.deref(is_new_QMARK_))){
return new cljs.core.Keyword("workspace-material-templates","create","workspace-material-templates/create",1412122685);
} else {
return new cljs.core.Keyword("workspace-material-templates","update","workspace-material-templates/update",-551621993);
}
});
/**
 * Prepare template data for save
 */
features.app.material_templates.frontend.view.prepare_template_data = (function features$app$material_templates$frontend$view$prepare_template_data(template,is_new_QMARK_){
if(cljs.core.truth_(cljs.core.deref(is_new_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(template,new cljs.core.Keyword("material-template","id","material-template/id",1625256948));
} else {
return template;
}
});
/**
 * Handle save response and update UI
 */
features.app.material_templates.frontend.view.handle_save_response = (function features$app$material_templates$frontend$view$handle_save_response(response,query_type,callback,modal_template,load_templates){
(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));

if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))){
cljs.core.reset_BANG_(modal_template,null);

return (load_templates.cljs$core$IFn$_invoke$arity$0 ? load_templates.cljs$core$IFn$_invoke$arity$0() : load_templates.call(null));
} else {
return alert(["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,query_type)))].join(''));
}
});
/**
 * Execute ParQuery to save template
 */
features.app.material_templates.frontend.view.save_template_query = (function features$app$material_templates$frontend$view$save_template_query(template,workspace_id,modal_is_new_QMARK_,callback,modal_template,load_templates){
var query_type = features.app.material_templates.frontend.view.get_query_type(modal_is_new_QMARK_);
var template_data = features.app.material_templates.frontend.view.prepare_template_data(template,modal_is_new_QMARK_);
var context = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: save-template-query called"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Workspace ID:",workspace_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Query type:",query_type], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Template data:",template_data], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  Context being sent:",context], 0));

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.PersistentArrayMap.createAsIfByAssoc([query_type,template_data]),new cljs.core.Keyword("parquery","context","parquery/context",661391038),context,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: save-template-query response:",response], 0));

return features.app.material_templates.frontend.view.handle_save_response(response,query_type,callback,modal_template,load_templates);
})], null));
});
/**
 * Execute ParQuery to delete template
 */
features.app.material_templates.frontend.view.delete_template_query = (function features$app$material_templates$frontend$view$delete_template_query(template_id,workspace_id,load_templates){
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-material-templates","delete","workspace-material-templates/delete",-37051977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("material-template","id","material-template/id",1625256948),template_id], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("workspace-material-templates","delete","workspace-material-templates/delete",-37051977).cljs$core$IFn$_invoke$arity$1(response)))){
return (load_templates.cljs$core$IFn$_invoke$arity$0 ? load_templates.cljs$core$IFn$_invoke$arity$0() : load_templates.call(null));
} else {
return alert("Error deleting template");
}
})], null));
});
/**
 * Validate template name
 */
features.app.material_templates.frontend.view.validate_name = (function features$app$material_templates$frontend$view$validate_name(name){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))).length) < (2));
});
/**
 * Validate template unit
 */
features.app.material_templates.frontend.view.validate_unit = (function features$app$material_templates$frontend$view$validate_unit(unit){
return (((clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit))).length) < (1));
});
/**
 * Validates material template data and returns map of field errors
 */
features.app.material_templates.frontend.view.validate_material_template = (function features$app$material_templates$frontend$view$validate_material_template(template){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var name = new cljs.core.Keyword("material-template","name","material-template/name",-1467705719).cljs$core$IFn$_invoke$arity$1(template);
var unit = new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647).cljs$core$IFn$_invoke$arity$1(template);
var G__16481 = errors;
var G__16481__$1 = ((features.app.material_templates.frontend.view.validate_name(name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16481,new cljs.core.Keyword("material-template","name","material-template/name",-1467705719),translations.core.tr(new cljs.core.Keyword("material-templates","error-name","material-templates/error-name",1727596800))):G__16481);
if(features.app.material_templates.frontend.view.validate_unit(unit)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16481__$1,new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647),translations.core.tr(new cljs.core.Keyword("material-templates","error-unit","material-templates/error-unit",1812615048)));
} else {
return G__16481__$1;
}
});
features.app.material_templates.frontend.view.field_label = (function features$app$material_templates$frontend$view$field_label(label,field_key,has_error_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.025em",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#374151")], null)], null),label,(cljs.core.truth_((function (){var fexpr__16494 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647),null,new cljs.core.Keyword("material-template","name","material-template/name",-1467705719),null], null), null);
return (fexpr__16494.cljs$core$IFn$_invoke$arity$1 ? fexpr__16494.cljs$core$IFn$_invoke$arity$1(field_key) : fexpr__16494.call(null,field_key));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef4444",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null),"*"], null):null)], null);
});
/**
 * Base properties for input fields
 */
features.app.material_templates.frontend.view.input_base_props = (function features$app$material_templates$frontend$view$input_base_props(field_key,template,has_error_QMARK_,attrs){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(template),field_key,"")),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16495_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(template,cljs.core.assoc,field_key,p1__16495_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["1.5",(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 1px 2px 0 rgba(0, 0, 0, 0.05)"),"1rem","border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out","100%","0.75rem 1rem","none",(cljs.core.truth_(has_error_QMARK_)?"2px solid #dc3545":"1px solid #d1d5db"),"8px"]),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#3b82f6"),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 0 0 3px rgba(59, 130, 246, 0.1)")], null)], null)], 0))], null);
});
/**
 * Render textarea input
 */
features.app.material_templates.frontend.view.render_textarea = (function features$app$material_templates$frontend$view$render_textarea(field_key,template,has_error_QMARK_,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"type","type",1174270348)),features.app.material_templates.frontend.view.input_base_props(field_key,template,has_error_QMARK_,attrs)], 0))], null);
});
/**
 * Render text input
 */
features.app.material_templates.frontend.view.render_text_input = (function features$app$material_templates$frontend$view$render_text_input(field_key,template,has_error_QMARK_,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,features.app.material_templates.frontend.view.input_base_props(field_key,template,has_error_QMARK_,attrs)], 0))], null);
});
/**
 * Render appropriate input type
 */
features.app.material_templates.frontend.view.field_input = (function features$app$material_templates$frontend$view$field_input(field_key,template,has_error_QMARK_,attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attrs),"textarea")){
return features.app.material_templates.frontend.view.render_textarea(field_key,template,has_error_QMARK_,attrs);
} else {
return features.app.material_templates.frontend.view.render_text_input(field_key,template,has_error_QMARK_,attrs);
}
});
features.app.material_templates.frontend.view.field_error = (function features$app$material_templates$frontend$view$field_error(error_msg){
if(cljs.core.truth_(error_msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem"], null)], null),error_msg], null);
} else {
return null;
}
});
/**
 * Complete form field with label, input and error
 */
features.app.material_templates.frontend.view.form_field = (function features$app$material_templates$frontend$view$form_field(label,field_key,template,errors,attrs){
var has_error_QMARK_ = cljs.core.contains_QMARK_(errors,field_key);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.field_label,label,field_key,has_error_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.field_input,field_key,template,has_error_QMARK_,attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.field_error,cljs.core.get.cljs$core$IFn$_invoke$arity$2(errors,field_key)], null)], null);
});
/**
 * All form input fields
 */
features.app.material_templates.frontend.view.form_fields = (function features$app$material_templates$frontend$view$form_fields(template,errors){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("material-templates","name","material-templates/name",-278112706)),new cljs.core.Keyword("material-template","name","material-template/name",-1467705719),template,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("material-templates","name-placeholder","material-templates/name-placeholder",-969002615))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("material-templates","unit","material-templates/unit",-1931174382)),new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647),template,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("material-templates","unit-placeholder","material-templates/unit-placeholder",-1130690358))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("material-templates","category","material-templates/category",1210980675)),new cljs.core.Keyword("material-template","category","material-template/category",2131188096),template,errors,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("material-templates","category-placeholder","material-templates/category-placeholder",-571558637))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.form_field,translations.core.tr(new cljs.core.Keyword("material-templates","description","material-templates/description",1349634947)),new cljs.core.Keyword("material-template","description","material-template/description",-382071872),template,errors,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),translations.core.tr(new cljs.core.Keyword("material-templates","description-placeholder","material-templates/description-placeholder",-1597471627)),new cljs.core.Keyword(null,"rows","rows",850049680),(3)], null)], null)], null);
});
/**
 * Handle save button click with validation
 */
features.app.material_templates.frontend.view.handle_save_click = (function features$app$material_templates$frontend$view$handle_save_click(template,loading_QMARK_,errors,on_save){
var validation_errors = features.app.material_templates.frontend.view.validate_material_template(cljs.core.deref(template));
if(cljs.core.empty_QMARK_(validation_errors)){
cljs.core.reset_BANG_(loading_QMARK_,true);

cljs.core.reset_BANG_(errors,cljs.core.PersistentArrayMap.EMPTY);

var G__16625 = cljs.core.deref(template);
var G__16626 = (function (){
return cljs.core.reset_BANG_(loading_QMARK_,false);
});
return (on_save.cljs$core$IFn$_invoke$arity$2 ? on_save.cljs$core$IFn$_invoke$arity$2(G__16625,G__16626) : on_save.call(null,G__16625,G__16626));
} else {
return cljs.core.reset_BANG_(errors,validation_errors);
}
});
/**
 * Modal for creating/editing material templates using new UI components
 */
features.app.material_templates.frontend.view.material_template_modal = (function features$app$material_templates$frontend$view$material_template_modal(template_data,is_new_QMARK_,on_save,on_cancel){
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var template = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(template_data);
return (function (template_data__$1,is_new_QMARK___$1,on_save__$1,on_cancel__$1){
cljs.core.reset_BANG_(template,template_data__$1);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_cancel__$1,new cljs.core.Keyword(null,"close-on-backdrop?","close-on-backdrop?",313135575),true], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal_header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(is_new_QMARK___$1)?translations.core.tr(new cljs.core.Keyword("material-templates","modal-add-title","material-templates/modal-add-title",305756788)):translations.core.tr(new cljs.core.Keyword("material-templates","modal-edit-title","material-templates/modal-edit-title",-93018855))),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),(cljs.core.truth_(is_new_QMARK___$1)?translations.core.tr(new cljs.core.Keyword("material-templates","modal-add-subtitle","material-templates/modal-add-subtitle",-1731390553)):translations.core.tr(new cljs.core.Keyword("material-templates","modal-edit-subtitle","material-templates/modal-edit-subtitle",-1249127838)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"header"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.form_fields,template,cljs.core.deref(errors)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"form"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.modal.modal_footer,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel__$1,new cljs.core.Keyword(null,"text","text",-1790561697),translations.core.tr(new cljs.core.Keyword("material-templates","cancel","material-templates/cancel",410412485))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"cancel"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core.deref(loading_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return features.app.material_templates.frontend.view.handle_save_click(template,loading_QMARK_,errors,on_save__$1);
}),new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?translations.core.tr(new cljs.core.Keyword("material-templates","saving","material-templates/saving",614693908)):translations.core.tr(new cljs.core.Keyword("material-templates","save-template","material-templates/save-template",-1627026812)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"save"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"footer"], null))], null);
});
});
/**
 * Custom render function for template name column with description
 */
features.app.material_templates.frontend.view.template_name_render = (function features$app$material_templates$frontend$view$template_name_render(name,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),name], null),(cljs.core.truth_(new cljs.core.Keyword("material-template","description","material-template/description",-382071872).cljs$core$IFn$_invoke$arity$1(row))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4"], null)], null),new cljs.core.Keyword("material-template","description","material-template/description",-382071872).cljs$core$IFn$_invoke$arity$1(row)], null):null)], null);
});
/**
 * Custom render function for category with fallback text
 */
features.app.material_templates.frontend.view.category_render = (function features$app$material_templates$frontend$view$category_render(category,row){
var or__5025__auto__ = category;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),translations.core.tr(new cljs.core.Keyword("material-templates","no-category","material-templates/no-category",-1353438013))], null);
}
});
/**
 * Material templates table using server-side data-table component with search, sorting, and pagination
 */
features.app.material_templates.frontend.view.material_templates_table = (function features$app$material_templates$frontend$view$material_templates_table(templates_data,loading_QMARK_,on_edit,on_delete,query_fn){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: material-templates-table called"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: templates-data:",templates_data], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: loading?:",loading_QMARK_], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: query-fn:",query_fn], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.data_table.server_side_data_table,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"show-search?","show-search?",684663920),new cljs.core.Keyword(null,"data-key","data-key",1775480631),new cljs.core.Keyword(null,"show-pagination?","show-pagination?",1857367515)],[new cljs.core.Keyword("material-template","id","material-template/id",1625256948),new cljs.core.Keyword(null,"material-templates-table","material-templates-table",2031510260),query_fn,loading_QMARK_,translations.core.tr(new cljs.core.Keyword("material-templates","no-templates-found","material-templates/no-templates-found",-340217770)),templates_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("material-templates","action-edit","material-templates/action-edit",721105392)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"href","href",-793805698),on_edit], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("material-templates","action-delete","material-templates/action-delete",-347227554)),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (row){
if(cljs.core.truth_(confirm(translations.core.tr(new cljs.core.Keyword("material-templates","confirm-delete","material-templates/confirm-delete",1368013954))))){
var G__16635 = new cljs.core.Keyword("material-template","id","material-template/id",1625256948).cljs$core$IFn$_invoke$arity$1(row);
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(G__16635) : on_delete.call(null,G__16635));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("material-template","name","material-template/name",-1467705719),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("material-templates","table-header-material","material-templates/table-header-material",-2106127060)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.material_templates.frontend.view.template_name_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("material-template","unit","material-template/unit",1417436647),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("material-templates","table-header-unit","material-templates/table-header-unit",104984023)),new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true,new cljs.core.Keyword(null,"cell-style","cell-style",1087536089),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("material-template","category","material-template/category",2131188096),new cljs.core.Keyword(null,"label","label",1718410804),translations.core.tr(new cljs.core.Keyword("material-templates","table-header-category","material-templates/table-header-category",-1064883902)),new cljs.core.Keyword(null,"render","render",-1408033454),features.app.material_templates.frontend.view.category_render,new cljs.core.Keyword(null,"sortable?","sortable?",291547474),true,new cljs.core.Keyword(null,"cell-style","cell-style",1087536089),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null)], null),true,new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),true])], null);
});
/**
 * Page header with title and add button using new UI component
 */
features.app.material_templates.frontend.view.templates_page_header = (function features$app$material_templates$frontend$view$templates_page_header(modal_template,modal_is_new_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.page_header.page_header,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),translations.core.tr(new cljs.core.Keyword("material-templates","page-title","material-templates/page-title",2078311524)),new cljs.core.Keyword(null,"description","description",-1428560544),translations.core.tr(new cljs.core.Keyword("material-templates","page-description","material-templates/page-description",1549803846)),new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(modal_template,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_(modal_is_new_QMARK_,true);
}),new cljs.core.Keyword(null,"text","text",-1790561697),translations.core.tr(new cljs.core.Keyword("material-templates","add-new-template","material-templates/add-new-template",-282896328))], null)], null)], null)], null);
});
/**
 * Main content area with server-side data table
 */
features.app.material_templates.frontend.view.templates_content = (function features$app$material_templates$frontend$view$templates_content(templates_data_atom,loading_QMARK__atom,modal_template,modal_is_new_QMARK_,delete_template,query_fn){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.material_templates_table,cljs.core.deref(templates_data_atom),cljs.core.deref(loading_QMARK__atom),(function (template){
var workspace_id = features.app.material_templates.frontend.view.get_workspace_id();
var template_id = new cljs.core.Keyword("material-template","id","material-template/id",1625256948).cljs$core$IFn$_invoke$arity$1(template);
return ["/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),"/material-templates/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template_id)].join('');
}),delete_template,query_fn], null);
});
/**
 * Render modal when template is selected
 */
features.app.material_templates.frontend.view.modal_when_open = (function features$app$material_templates$frontend$view$modal_when_open(modal_template,modal_is_new_QMARK_,save_template){
if(cljs.core.truth_(cljs.core.deref(modal_template))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.material_template_modal,cljs.core.deref(modal_template),cljs.core.deref(modal_is_new_QMARK_),save_template,(function (){
return cljs.core.reset_BANG_(modal_template,null);
})], null);
} else {
return null;
}
});
var G__16637_16722 = new cljs.core.Keyword("material-templates","data","material-templates/data",1989788974);
var G__16638_16723 = (function (db,_){
var raw_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var ___$1 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: subscription raw-data:",raw_data], 0));
if(cljs.core.truth_((function (){var and__5023__auto__ = raw_data;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"material-templates","material-templates",-314941478).cljs$core$IFn$_invoke$arity$1(raw_data);
} else {
return and__5023__auto__;
}
})())){
return raw_data;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),cljs.core.PersistentArrayMap.EMPTY], null);
}
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16637_16722,G__16638_16723) : zero.frontend.re_frame.reg_sub.call(null,G__16637_16722,G__16638_16723));
var G__16640_16725 = new cljs.core.Keyword("material-templates","loading?","material-templates/loading?",-469844440);
var G__16641_16726 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16640_16725,G__16641_16726) : zero.frontend.re_frame.reg_sub.call(null,G__16640_16725,G__16641_16726));
var G__16642_16728 = new cljs.core.Keyword("material-templates","set-loading","material-templates/set-loading",-2078783214);
var G__16643_16729 = (function (db,p__16644){
var vec__16645 = p__16644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16645,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16645,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),loading_QMARK_);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16642_16728,G__16643_16729) : zero.frontend.re_frame.reg_event_db.call(null,G__16642_16728,G__16643_16729));
var G__16648_16730 = new cljs.core.Keyword("material-templates","load-success","material-templates/load-success",1454720962);
var G__16649_16731 = (function (db,p__16650){
var vec__16651 = p__16650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16651,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16651,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),new cljs.core.Keyword(null,"data","data",-232669377)], null),data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
});
(zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? zero.frontend.re_frame.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__16648_16730,G__16649_16731) : zero.frontend.re_frame.reg_event_db.call(null,G__16648_16730,G__16649_16731));
features.app.material_templates.frontend.view.view = (function features$app$material_templates$frontend$view$view(){
var workspace_id = features.app.material_templates.frontend.view.get_workspace_id();
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var modal_template = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var modal_is_new_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var templates_data_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),cljs.core.PersistentArrayMap.EMPTY], null));
var load_templates = (function (params){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: load-templates called with params:",params], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: workspace-id:",workspace_id], 0));

cljs.core.reset_BANG_(loading_QMARK_,true);

return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-material-templates","get-paginated","workspace-material-templates/get-paginated",-1487179277),(function (){var or__5025__auto__ = params;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (response){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: load-templates response:",response], 0));

cljs.core.reset_BANG_(loading_QMARK_,false);

var result = new cljs.core.Keyword("workspace-material-templates","get-paginated","workspace-material-templates/get-paginated",-1487179277).cljs$core$IFn$_invoke$arity$1(response);
var formatted_result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"material-templates","material-templates",-314941478),new cljs.core.Keyword(null,"material-templates","material-templates",-314941478).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total-count","total-count",-1999441386),new cljs.core.Keyword(null,"total-count","total-count",-1999441386).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"page-size","page-size",223836073),new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"total-pages","total-pages",685894112),new cljs.core.Keyword(null,"total-pages","total-pages",685894112).cljs$core$IFn$_invoke$arity$1(result)], null)], null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: formatted result:",formatted_result], 0));

return cljs.core.reset_BANG_(templates_data_atom,formatted_result);
})], null));
});
var save_template = (function (template,callback){
return features.app.material_templates.frontend.view.save_template_query(template,workspace_id,modal_is_new_QMARK_,callback,modal_template,(function (){
return load_templates(cljs.core.PersistentArrayMap.EMPTY);
}));
});
var delete_template = (function (template_id){
return features.app.material_templates.frontend.view.delete_template_query(template_id,workspace_id,(function (){
return load_templates(cljs.core.PersistentArrayMap.EMPTY);
}));
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Material templates view function called - NEW VERSION"], 0));

zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEBUG: Initial load triggered"], 0));

return load_templates(cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.Keyword(null,"params","params",710516235),[]], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.templates_page_header,modal_template,modal_is_new_QMARK_], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.templates_content,templates_data_atom,loading_QMARK_,modal_template,modal_is_new_QMARK_,delete_template,load_templates], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.modal_when_open,modal_template,modal_is_new_QMARK_,save_template], null)], null)], null);
});
/**
 * Get material template ID from router parameters
 */
features.app.material_templates.frontend.view.get_template_id = (function features$app$material_templates$frontend$view$get_template_id(){
var router_state = cljs.core.deref(router.frontend.zero.state);
var template_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(router_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"material-template-id","material-template-id",129777888)], null));
return template_id;
});
/**
 * Load individual template data
 */
features.app.material_templates.frontend.view.load_individual_template = (function features$app$material_templates$frontend$view$load_individual_template(template_id,workspace_id,callback){
return parquery.frontend.request.send_queries(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("workspace-material-templates","get-by-id","workspace-material-templates/get-by-id",272220410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("material-template","id","material-template/id",1625256948),template_id], null)], null),new cljs.core.Keyword("parquery","context","parquery/context",661391038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-id","workspace-id",-196897435),workspace_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),callback], null));
});
/**
 * Form component for individual template editing
 */
features.app.material_templates.frontend.view.individual_template_form = (function features$app$material_templates$frontend$view$individual_template_form(template,loading_QMARK_,errors,on_save,on_cancel){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"color","color",1011675173),"#111827",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),translations.core.tr(new cljs.core.Keyword("material-templates","modal-edit-title","material-templates/modal-edit-title",-93018855))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem"], null)], null),translations.core.tr(new cljs.core.Keyword("material-templates","modal-edit-subtitle","material-templates/modal-edit-subtitle",-1249127838))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.form_fields,template,cljs.core.deref(errors)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel,new cljs.core.Keyword(null,"text","text",-1790561697),translations.core.tr(new cljs.core.Keyword("material-templates","cancel","material-templates/cancel",410412485))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.enhanced_button.enhanced_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core.deref(loading_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return features.app.material_templates.frontend.view.handle_save_click(template,loading_QMARK_,errors,on_save);
}),new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?translations.core.tr(new cljs.core.Keyword("material-templates","saving","material-templates/saving",614693908)):translations.core.tr(new cljs.core.Keyword("material-templates","save-template","material-templates/save-template",-1627026812)))], null)], null)], null)], null);
});
/**
 * Individual material template edit view
 */
features.app.material_templates.frontend.view.individual_view = (function features$app$material_templates$frontend$view$individual_view(){
var template_id = features.app.material_templates.frontend.view.get_template_id();
var workspace_id = features.app.material_templates.frontend.view.get_workspace_id();
var loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var saving_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var template = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var save_template = (function (template_data,callback){
return features.app.material_templates.frontend.view.save_template_query(template_data,workspace_id,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false),callback,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),(function (){
return router.frontend.zero.navigate_BANG_(["/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),"/material-templates"].join(''));
}));
});
var handle_save = (function (template_data,callback){
cljs.core.reset_BANG_(saving_QMARK_,true);

return save_template(template_data,(function (){
cljs.core.reset_BANG_(saving_QMARK_,false);

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}));
});
var handle_cancel = (function (){
return router.frontend.zero.navigate_BANG_(["/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),"/material-templates"].join(''));
});
zero.frontend.react.use_effect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mount","mount",-1560582470),(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = template_id;
if(cljs.core.truth_(and__5023__auto__)){
return workspace_id;
} else {
return and__5023__auto__;
}
})())){
return features.app.material_templates.frontend.view.load_individual_template(template_id,workspace_id,(function (response){
cljs.core.reset_BANG_(loading_QMARK_,false);

var template_data = new cljs.core.Keyword("workspace-material-templates","get-by-id","workspace-material-templates/get-by-id",272220410).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(template_data)){
return cljs.core.reset_BANG_(template,template_data);
} else {
return alert("Template not found");
}
}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"params","params",710516235),[template_id,workspace_id]], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"800px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"4rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280"], null)], null),"Loading template..."], null)], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [features.app.material_templates.frontend.view.individual_template_form,template,saving_QMARK_,errors,handle_save,handle_cancel], null))], null)], null);
});

//# sourceMappingURL=features.app.material_templates.frontend.view.js.map
