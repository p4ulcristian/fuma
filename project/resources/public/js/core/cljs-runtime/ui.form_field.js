goog.provide('ui.form_field');
/**
 * Form field label with optional required indicator
 */
ui.form_field.field_label = (function ui$form_field$field_label(label,field_key,has_error_QMARK_,required_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),cljs.core.name(field_key),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#374151"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.25rem"], null)], null),label,(cljs.core.truth_(required_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null),"*"], null):null)], null);
});
ui.form_field.input_base_style = (function ui$form_field$input_base_style(has_error_QMARK_){

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["1.5",(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 1px 2px 0 rgba(0, 0, 0, 0.05)"),"1rem","border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out","100%","0.75rem 1rem","none",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(has_error_QMARK_)?"#dc3545":"#3b82f6"),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(cljs.core.truth_(has_error_QMARK_)?"0 0 0 3px rgba(220, 53, 69, 0.1)":"0 0 0 3px rgba(59, 130, 246, 0.1)")], null),(cljs.core.truth_(has_error_QMARK_)?"2px solid #dc3545":"1px solid #d1d5db"),"8px"]);
});
ui.form_field.field_input = (function ui$form_field$field_input(field_key,value,on_change,has_error_QMARK_,attrs){

var base_props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.form_field.input_base_style(has_error_QMARK_),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs)], 0))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attrs),"textarea")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"type","type",1174270348)),base_props], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,base_props], 0))], null);
}
});
ui.form_field.field_error = (function ui$form_field$field_error(error_msg){

if(cljs.core.truth_(error_msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#dc3545",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem"], null)], null),error_msg], null);
} else {
return null;
}
});
/**
 * Complete form field with label, input, and error handling
 */
ui.form_field.form_field = (function ui$form_field$form_field(p__27796){
var map__27797 = p__27796;
var map__27797__$1 = cljs.core.__destructure_map(map__27797);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27797__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var field_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27797__$1,new cljs.core.Keyword(null,"field-key","field-key",313262601));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27797__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27797__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27797__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27797__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27797__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentArrayMap.EMPTY);
var has_error_QMARK_ = (!(clojure.string.blank_QMARK_(error)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.form_field.field_label,label,field_key,has_error_QMARK_,required_QMARK_], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.form_field.field_input,field_key,value,on_change,has_error_QMARK_,attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.form_field.field_error,error], null)], null);
});
/**
 * Styled checkbox field with label
 */
ui.form_field.checkbox_field = (function ui$form_field$checkbox_field(p__27798){
var map__27799 = p__27798;
var map__27799__$1 = cljs.core.__destructure_map(map__27799);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27799__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27799__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27799__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27799__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27799__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"background","background",-863952629),"#f9fafb",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e5e7eb",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?"not-allowed":"pointer")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(checked_QMARK_),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.75rem",new cljs.core.Keyword(null,"width","width",-384071477),"1rem",new cljs.core.Keyword(null,"height","height",1025178622),"1rem",new cljs.core.Keyword(null,"accent-color","accent-color",908336425),"#3b82f6",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?"not-allowed":"pointer")], null)], null)], null),label,(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5rem"], null)], null),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description),")"].join('')], null):null)], null)], null);
});

//# sourceMappingURL=ui.form_field.js.map
